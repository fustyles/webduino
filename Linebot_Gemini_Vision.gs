/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/8/23 00:00
https://www.facebook.com/francefu
Line Bot Webhook & Google Apps script & Gemini Vision

若傳訊無回應：
1. Gemini api額度已用盡或Key已失效。
2. 不明原因，可能太久無人使用自動停用，重新佈署或重建Apps script專案並開放存取權限。
3. Apps script程式碼有bug。
4. 重新再傳訊一次。
*/

// Line bot
let channel_access_TOKEN = "";

// Gemini設定
let Gemini_api_key = "";

// Line bot參數
let getLinebotData = {
  "userId": "",
  "eventType": "",
  "replyToken": "",
  "userType": "",
  "userMessage": "",
  "userImage": "",
  "userMessageId": "",
  "quotedMessageId": ""
}

let scriptProperties = PropertiesService.getScriptProperties();

function doPost(e) {
    if (e.postData) {
        let linebot_response = "請先上傳圖片或輸入圖片網址，再引用圖片或輸入網址回覆並輸入對話內容！";
        let linebot_imageURL = "";
        let chat_message = "請分析圖片中的場景與情境，若有文字資料請將內容進行重點摘要。";

        let msg = JSON.parse(e.postData.contents);
        getLinebotData.userId = msg.events[0].source.userId;
        getLinebotData.eventType = msg.events[0].source.type;
        getLinebotData.replyToken = msg.events[0].replyToken;
        getLinebotData.userType = msg.events[0].message.type;
        getLinebotData.userMessageId = msg.events[0].message.id;     

        if (getLinebotData.userType=="text") {
          getLinebotData.userMessage = msg.events[0].message.text.trim();
          getLinebotData.quotedMessageId = msg.events[0].message.quotedMessageId;

          if (getLinebotData.userMessage.toLowerCase().trim().indexOf("https://")==0) {
              let urlData = getLinebotData.userMessage.split("\n");
              getLinebotData.userImage = getImageUrlBase64(urlData[0].trim());
              if (urlData.length>1)
                  chat_message = getLinebotData.userMessage.replace(urlData[0], "").trim();
              linebot_imageURL = urlData[0].trim();
              saveHistoricalURL(getLinebotData.userId, getLinebotData.userMessageId, urlData[0].trim());
          } else if (getLinebotData.quotedMessageId) {
              chat_message = getLinebotData.userMessage;
              let imageURL = getHistoricalURL(getLinebotData.userId, getLinebotData.quotedMessageId);
              getLinebotData.userImage = getImageUrlBase64(imageURL);
              if (!getLinebotData.userImage)
                  getLinebotData.userImage = getImageBase64(channel_access_TOKEN, getLinebotData.quotedMessageId);
          } else
              linebot_response = sendMessageToGeminiChat(Gemini_api_key, getLinebotData.userMessage);
        }
        else if (getLinebotData.userType=="image")
            getLinebotData.userImage = getImageBase64(channel_access_TOKEN, getLinebotData.userMessageId);

        if (getLinebotData.userImage)
            linebot_response = sendImageToGeminiVision(Gemini_api_key, chat_message, getLinebotData.userImage);

        sendMessageToLineBot(channel_access_TOKEN, getLinebotData.replyToken, linebot_response, linebot_imageURL);
    }
    return ContentService.createTextOutput("OK");
}

function saveHistoricalURL(userId, messageId, messageURL) {
    let list = scriptProperties.getProperty(userId)||"[]";
    list = JSON.parse(list);
    if (list.length>=20)
        list.splice(0, 1);
    message = {};
    message.messageId = messageId;
    message.messageURL = messageURL;
    list.push(message);
    scriptProperties.setProperty(userId, JSON.stringify(list));
}

function getHistoricalURL(userId, messageId) {      
    let list = scriptProperties.getProperty(userId);
    if (list) {
      list = JSON.parse(list);
      for (let i=0;i<list.length;i++) {
        if (list[i].messageId==messageId)
            return list[i].messageURL;
      }
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

function getImageBase64(accessToken, imageId) {
  try {
      const url = `https://api-data.line.me/v2/bot/message/${imageId}/content`;

      let response = UrlFetchApp.fetch(url, {
          headers: {
              'Authorization': `Bearer ${accessToken}`
          }
      });

      let blob = response.getBlob();
      let base64Image = Utilities.base64Encode(blob.getBytes());
      return String(base64Image);
  } catch (error) {
      return "";
  }
}

function sendMessageToLineBot(accessToken, replyToken, message, imageURL) {
    let url = 'https://api.line.me/v2/bot/message/reply';

    let replyMessage;
    if (imageURL) {
        replyMessage = [
        {
            "type": "image",
            "originalContentUrl": imageURL,
            "previewImageUrl": imageURL
        },
        {
            "type": "text",
            "text": message
        }];
    } else {
        replyMessage = [{
            "type": "text",
            "text": message
        }];
    }     
    UrlFetchApp.fetch(url, {
        'headers': {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${accessToken}`
        },
        'method': 'post',
        'payload': JSON.stringify({
            'replyToken': replyToken,
            'messages': replyMessage
        }),
    });
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
        let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${key}`;
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
