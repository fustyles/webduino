/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/8/22 21:30
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

function doPost(e) {
    if (e.postData) {
        let linebot_response = "請先上傳圖片，再引用圖片回覆並輸入對話內容！";
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

          if (getLinebotData.quotedMessageId) {
              chat_message = getLinebotData.userMessage;
              getLinebotData.userImage = getImageBase64(channel_access_TOKEN, getLinebotData.quotedMessageId);
          }
        } else if (getLinebotData.userType=="image")
            getLinebotData.userImage = getImageBase64(channel_access_TOKEN, getLinebotData.userMessageId);

        if (getLinebotData.userImage)
            linebot_response = sendImageToGeminiVision(Gemini_api_key, chat_message, getLinebotData.userImage);

        sendMessageToLineBot(channel_access_TOKEN, getLinebotData.replyToken, linebot_response);
    }
    return ContentService.createTextOutput("OK");
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

function sendMessageToLineBot(accessToken, replyToken, message) {
    let url = 'https://api.line.me/v2/bot/message/reply';

    let replyMessage;
    replyMessage = [{
        "type": "text",
        "text": message
    }];  
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