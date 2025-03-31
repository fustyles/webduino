/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2025/3/31 14:00
https://www.facebook.com/francefu
Telegram Bot Webhook & Google Apps script & Gemini Vision

若傳訊無回應：
1. Gemini api額度已用盡或Key已失效。
2. 不明原因，可能太久無人使用自動停用，重新佈署或重建Apps script專案並開放存取權限。
3. Apps script程式碼有bug。
4. Telegram Bot未執行START。
5. Apps script指令碼屬性暫存資料已滿，"Apps script -> 專案設定 -> 指令碼屬性"清空
6. 上傳圖檔已過時無法取得或圖檔模糊不清，請重新上傳圖檔。

Apps Script
https://script.google.com/home

Gemini Vision
https://ai.google.dev/gemini-api/docs/vision

Telegram Bot API
https://core.telegram.org/bots/api

Webhook Set： (瀏覽器貼入網址執行)
https://api.telegram.org/bot{權杖}/setWebhook?allowed_updates=["message"]&url={Apps Script網址}

Webhook Delete： (瀏覽器貼入網址執行)
https://api.telegram.org/bot{權杖}/deleteWebhook

Webhook Info： (瀏覽器貼入網址執行)
https://api.telegram.org/bot{權杖}/getWebhookInfo
*/

// Telegram bot
let channel_access_TOKEN = "xxxxx";
let channel_access_UserID = "xxxxx";    //暫無使用

// Gemini設定
let Gemini_api_key = "xxxxx";
let chat_message_remind = "\n\n請用繁體中文回覆！";

let scriptProperties = PropertiesService.getScriptProperties();

let getTelegrambotData = {
  "chatId": "", 
  "userMessage": "",
  "userImageId": "",
  "userImage": "",
  "replayToMessage": "",
  "date": ""  
}

function doPost(e) {
    if (e.postData) {
        let telegrambot_response = "請先上傳圖片或輸入圖片網址，再引用圖片或網址回覆輸入提示詞！";
        let chat_message = "請分析影像中的場景與情境，若有文字資料請將內容進行重點摘要。";

        let msg = JSON.parse(e.postData.contents);

        getTelegrambotData.chatId = msg['message']['chat']['id'];

        if (msg['message']['text']) {
          getTelegrambotData.userMessage = msg['message']['text'].trim();

          if (getTelegrambotData.userMessage.toLowerCase().indexOf("https://")==0) {
              let urlData = getTelegrambotData.userMessage.split("\n");
              if (urlData.length>1)
                  chat_message = getTelegrambotData.userMessage.replace(urlData[0], "").trim();
              getTelegrambotData.date = msg['message']['date'];     
              saveHistoricalURL(getTelegrambotData.date, urlData[0].trim());
              getTelegrambotData.userImage = getImageUrlBase64(urlData[0].trim());
              sendPhotoToTelegramBot(channel_access_TOKEN, getTelegrambotData.chatId, urlData[0].trim());
          } else if (msg['message']['reply_to_message']) {
              getTelegrambotData.replayToMessage = msg['message']['reply_to_message'];
              getTelegrambotData.date = getTelegrambotData.replayToMessage['date'];
              chat_message = getTelegrambotData.userMessage;             
              let imageURL = getHistoricalURL(getTelegrambotData.date);
              if (imageURL)
                getTelegrambotData.userImage = getImageUrlBase64(imageURL);
          } else
              telegrambot_response = sendMessageToGeminiChat(Gemini_api_key, getTelegrambotData.userMessage);
        }
        else if (msg['message']['photo']) {
            getTelegrambotData.date = msg['message']['date'];         
            getTelegrambotData.userImageId = msg['message']['photo'][0]['file_id'];
            getTelegrambotData.userImage = getTelegramBotImageBase64(channel_access_TOKEN, getTelegrambotData.userImageId);
        }

        if (getTelegrambotData.userImage)        
            telegrambot_response = sendImageToGeminiVision(Gemini_api_key, chat_message + chat_message_remind, getTelegrambotData.userImage);

        sendMessageToTelegramBot(channel_access_TOKEN, getTelegrambotData.chatId, telegrambot_response);
    }
}

function saveHistoricalURL(chatId, messageURL) {
    scriptProperties.setProperty(chatId, messageURL);
}

function getHistoricalURL(chatId) {      
    return scriptProperties.getProperty(chatId);
}

function getImageUrlBase64(imageURL) {
    try {
        let response = UrlFetchApp.fetch(imageURL);
        let blob = response.getBlob();
        let base64Image = Utilities.base64Encode(blob.getBytes());

        return String(base64Image);
    } catch (error) {
        return "";
    }
}

function setWebhook(chat_token, webhook_url) {
    let url = `https://api.telegram.org/bot${chat_token}/setWebhook?url=${webhook_url}&allowed_updates=["message"]`;
    let response = UrlFetchApp.fetch(url);

    return response.getContentText();
}

function deleteWebhook(chat_token) {
    let url = `https://api.telegram.org/bot${chat_token}/deleteWebhook`;
    let response = UrlFetchApp.fetch(url);

    return response.getContentText();
}

function infoWebhook(chat_token) {
    let url = `https://api.telegram.org/bot${chat_token}/getWebhookInfo`;
    let response = UrlFetchApp.fetch(url);

    return response.getContentText();
}
 
function getTelegramBotImageBase64(chat_token, imageId) {
    try {
        let url = `https://api.telegram.org/bot${chat_token}/getFile?file_id=${imageId}`;    
        let response = UrlFetchApp.fetch(url);
        let msg = JSON.parse(response.getContentText());
        let imageUrl = `https://api.telegram.org/file/bot${chat_token}/${msg['result']['file_path']}`;
        saveHistoricalURL(getTelegrambotData.date, imageUrl);

        return getImageUrlBase64(imageUrl);
    } catch (error) {
        return "";
    }
}

function sendMessageToTelegramBot(chat_token, chat_id, chat_message) {
    let url = `https://api.telegram.org/bot${chat_token}/sendMessage`;       
    let payload = {
            "parse_mode": "HTML",
            "chat_id": chat_id,
            "text": chat_message
        };
    let response = UrlFetchApp.fetch(url, {
        'headers': {
            'Content-Type': 'application/json'
        },
        'method': 'post',
        'payload': JSON.stringify(payload),
    });

    return response.getContentText();
}

function sendPhotoToTelegramBot(chat_token, chat_id, imageURL) {
    let url = `https://api.telegram.org/bot${chat_token}/sendPhoto`; 
    let payload = {
          "chat_id": chat_id,
          "photo": imageURL
        };       
    let response = UrlFetchApp.fetch(url, {
        'headers': {
            'Content-Type': 'application/json'
        },
        'method': 'post',
        'payload': JSON.stringify(payload),
    });

    return response.getContentText();
}

function sendMessageToGeminiChat(key, message){
    try {
        let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`;
        let data = {
          "contents": [
            {
              "parts": [
                {
                  "text": message
                }            
              ]
            }
          ]
        };     

        const options = {
            method: 'POST',
            contentType: 'application/json; charset=utf-8',
            payload: JSON.stringify(data)
        }

        let response = UrlFetchApp.fetch(url, options);       
        let json = JSON.parse(response.getContentText());
        response = json["candidates"][0]["content"]["parts"][0]["text"];
        if (response == "null")
          response = json["error"]["message"];

        return response;
    } catch (error) {
        return JSON.stringify(error);
    }          
}

function sendImageToGeminiVision(key, message, imageFile){
    try {
        let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`;
        let data = {
          "contents": [
            {
              "parts": [
                {
                  "text": message
                },
                {
                  "inline_data": {
                    "mime_type": "image/jpeg",
                    "data": imageFile
                  }
                }            
              ]
            }
          ]
        };     

        const options = {
            method: 'POST',
            contentType: 'application/json; charset=utf-8',
            payload: JSON.stringify(data)
        }

        let response = UrlFetchApp.fetch(url, options);       
        let json = JSON.parse(response.getContentText());
        response = json["candidates"][0]["content"]["parts"][0]["text"];
        if (response == "null")
          response = json["error"]["message"];

        return response;
    } catch (error) {
        return JSON.stringify(error);
    }          
}
