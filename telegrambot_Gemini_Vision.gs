/*

Author : ChungYi Fu (Kaohsiung, Taiwan)   2025/3/31 00:00
https://www.facebook.com/francefu
Telegram Bot Webhook & Google Apps script & Gemini Vision

若傳訊無回應：
1. Gemini api額度已用盡或Key已失效。
2. 不明原因，可能太久無人使用自動停用，重新佈署或重建Apps script專案並開放存取權限。
3. Apps script程式碼有bug。
4. Telegram Bot未執行START。
5. 上傳圖檔已過時無法取得或圖檔太小模糊不清，請重新上傳圖檔。
6. 對話輸入"clear"清除歷史對話資料。

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
let gemini_chat_times_max = 100;   //聊天次數超過則自動清除對話紀錄
let chat_message_remind = "";    //每次對話內容最後附加的文字，可不填

let scriptProperties = PropertiesService.getScriptProperties();

let getTelegrambotData = {
  "chatId": "",
  "userMessage": "",
  "userImageId": "",
  "userImage": "",
  "replayToMessage": "",
  "date": ""  
}

let gemini_chat_messages = [];
let gemini_vision_urls = [];

function doPost(e) {
    if (e.postData) {
        let telegrambot_response = "請先上傳影像或輸入影像網址，再引用影像或網址回覆輸入提示詞！";
        let chat_message = "請分析影像中的場景與情境，若有文字資料請將內容進行重點摘要。";

        let msg = JSON.parse(e.postData.contents);

        getTelegrambotData.chatId = msg['message']['chat']['id'];

        if (scriptProperties.getProperty("messages")==""||scriptProperties.getProperty("messages")==null)
          gemini_chat_messages = [];
        else {
          gemini_chat_messages = JSON.parse(scriptProperties.getProperty("messages"));
          if (gemini_chat_messages.length > gemini_chat_times_max*2)
            msg['message']['text'] = "clear";
        }

        if (scriptProperties.getProperty("urls")==""||scriptProperties.getProperty("urls")==null)
          gemini_vision_urls = [];
        else
          gemini_vision_urls = JSON.parse(scriptProperties.getProperty("urls"));          

        if (msg['message']['text']) {
          getTelegrambotData.userMessage = msg['message']['text'].trim();

          if (getTelegrambotData.userMessage.toLowerCase()=="clear") {
              gemini_clear();
              telegrambot_response = "Conversation history is full and has been cleared.";
          } else if (getTelegrambotData.userMessage.toLowerCase().indexOf("https://")==0) {
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
          } else {
              gemini_messages_insert_request(getTelegrambotData.userMessage + chat_message_remind);
              telegrambot_response = sendMessageToGeminiChat(Gemini_api_key, gemini_chat_messages);
              gemini_messages_insert_response(telegrambot_response);
          }
        }
        else if (msg['message']['photo']) {
            getTelegrambotData.date = msg['message']['date'];         
            getTelegrambotData.userImageId = msg['message']['photo'][0]['file_id'];
            getTelegrambotData.userImage = getTelegramBotImageBase64(channel_access_TOKEN, getTelegrambotData.userImageId);
        }

        if (getTelegrambotData.userImage) {
            gemini_messages_insert_request(chat_message+" (Image Number:"+getTelegrambotData.date+")");
            telegrambot_response = sendImageToGeminiVision(Gemini_api_key, chat_message + chat_message_remind, getTelegrambotData.userImage);
            gemini_messages_insert_response(telegrambot_response);
        }

        sendMessageToTelegramBot(channel_access_TOKEN, getTelegrambotData.chatId, telegrambot_response);
    }
}

function saveHistoricalURL(visionDate, visionURL) {
    gemini_vision_urls.push([visionDate, visionURL]);
    scriptProperties.setProperty("urls", JSON.stringify(gemini_vision_urls));
}

function getHistoricalURL(visionDate) {
    for (let i=0;i<gemini_vision_urls.length;i++) {
      if (gemini_vision_urls[i][0]==visionDate)
        return gemini_vision_urls[i][1];
    }

    return "";
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

function sendMessageToGeminiChat(key, messages){
    try {
        let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`;
        let data = {
          "contents": messages
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

function gemini_messages_insert_request(request) {  
  let char_request = {};
  char_request.role = "user";
  char_request.parts = [];
  let char_request_text = {};
  char_request_text.text = request;
  char_request.parts.push(char_request_text);
  gemini_chat_messages.push(char_request);

  scriptProperties.setProperty("messages", JSON.stringify(gemini_chat_messages));  
}

function gemini_messages_insert_response(response) {  
  let char_response = {};
  char_response.role = "model";
  char_response.parts = [];
  let char_response_text = {};
  char_response_text.text = response;
  char_response.parts.push(char_response_text);
  gemini_chat_messages.push(char_response);

  scriptProperties.setProperty("messages", JSON.stringify(gemini_chat_messages));  
}

function gemini_clear() {
  scriptProperties.deleteAllProperties();
  gemini_chat_messages = [];
  gemini_vision_urls = [];  
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
