/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/8/20 00:30
https://www.facebook.com/francefu
Line Bot Webhook & Google Apps script & openAI Vision

若傳訊無回應：
1. openAI api額度已用盡或Key已失效。
2. 不明原因，可能太久無人使用自動停用，重新佈署或重建Apps script專案並開放存取權限。
3. Apps script程式碼有bug。
4. 重新再傳訊一次。
*/

// Line bot
let channel_access_TOKEN = "";

// openAI設定
let openAI_api_KEY = "sk-proj-xxx-xxx-xxx";

// Line bot參數
let getLinebotData = {
  "userId": "",
  "eventType": "",
  "replyToken": "",
  "userType": "",
  "userMessage": "",
  "userImage": ""   
}

function doPost(e) {
    if (e.postData) {
        let linebot_response = "請先上傳圖片或輸入圖片網址，若是圖片引用回覆並輸入對話內容！";
        let chat_message = "請分析圖片中的場景與情境，若有文字資料請將內容進行重點摘要。";

        let msg = JSON.parse(e.postData.contents);
        getLinebotData.userId = msg.events[0].source.userId;
        getLinebotData.eventType = msg.events[0].source.type;
        getLinebotData.replyToken = msg.events[0].replyToken;
        getLinebotData.userType = msg.events[0].message.type;        

        if (getLinebotData.userType=="text") {
          getLinebotData.userMessage = msg.events[0].message.text.trim();
          if (getLinebotData.userMessage.toLowerCase().trim().indexOf("https://")==0) {
              let urlData = getLinebotData.userMessage.split("\n");
              getLinebotData.userImage = urlData[0].trim();
              if (urlData.length>1)
                  chat_message = getLinebotData.userMessage.replace(urlData[0], "").trim();
          } else if (msg.events[0].message.quotedMessageId) {
              chat_message = getLinebotData.userMessage;
              imageId = msg.events[0].message.quotedMessageId;
              getLinebotData.userImage = getImageBase64(channel_access_TOKEN, imageId);
          }
        }
        else if (getLinebotData.userType=="image") {
            let imageId = msg.events[0].message.id;
            getLinebotData.userImage = getImageBase64(channel_access_TOKEN, imageId);
        }

        if (getLinebotData.userImage)
            linebot_response = sendImageToOpenaiVision(openAI_api_KEY, chat_message, getLinebotData.userImage);

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
      return "data:image/jpeg;base64," + base64Image;
  } catch (error) {
      return "";
  }
}

function sendMessageToLineBot(accessToken, replyToken, message) {
    let url = 'https://api.line.me/v2/bot/message/reply';

    let replyMessage = [{
        "type": "text",
        "text": message
    }]       
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

function sendImageToOpenaiVision(key, message, imageFile){
    try {
        let url = "https://api.openAI.com/v1/chat/completions";
        let data = {
          "model": "gpt-4o-mini",
          "messages": [
            {
              "role": "user",
              "content": [
                {
                  "type":"text",
                  "text": message
                },
                {
                  "type":"image_url",
                  "image_url": {
                    "url": imageFile
                  }
                }            
              ]
            }
          ]
        };     

        const authHeader = "Bearer " + key;
        const options = {
            headers: {
                Authorization: authHeader
            },
            method: 'POST',
            contentType: 'application/json',
            payload: JSON.stringify(data)
        }

        let response = UrlFetchApp.fetch(url, options);
        let json = JSON.parse(response.getContentText());
        response = json["choices"][0]["message"]["content"];
        if (response == "null")
          response = json["error"]["message"];

        return response;
    } catch (error) {
        return error;
    }          
}
