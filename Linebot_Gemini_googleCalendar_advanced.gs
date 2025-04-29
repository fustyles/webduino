/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2025/4/29 19:00
https://www.facebook.com/francefu
*/

const CHANNEL_ACCESS_TOKEN = "xxxxx";
const GEMINI_API_KEY = "xxxxx";

const GEMINI_ASSISTANT_BEHAVIOR = `
請依照以下規範：\n
1. 如果對話內容包含日期、時間、持續時間、事項，請回傳json格式資料，格式如下：\n
[{"date":"填入日期轉換為 'YYYY-MM-DD' 格式", "time":"填入時間轉換為 'HH:MM:00' 格式", "duration":"持續幾小時，預設為1","workMatter":"事項內容"}, ...]\n
2. 資料格式示範： [{"date":"2025-05-01", "time":"12:00:00", "duration":1, "workMatter":"吃海鮮大餐！"}, {"date":"2025-05-02", "time":"10:30:00", "duration":1, "workMatter":"去打球！"}, ...]\n
3. 若沒有提及年份，則表示今年。\n
4. 若沒有提及月份，則表示本月。\n
5. 若沒有提及持續幾小時，則duration值為1。\n
6. 如果對話內容並未能轉換成完整日期、時間、持續時間(可無，預設1)、事項，則當作一般聊天完整回應問題，最後在回覆內容中換兩行提醒是否要新增行事曆並說明所需要的資料。\n
7. 請不要多做解釋。\n
8. 請不要使用Markdown語法。\n
`;
const ERROR_MESSAGE = "請傳送文字訊息包含一筆以上的行事曆所需資料：日期、時間、持續時間(可無)、事項，或者提供的 Gemini Key 無法使用！";

function doPost(e) {
    if (e.postData) {
        let msg = JSON.parse(e.postData.contents);
        let userType = msg.events[0].message.type;
        let replyToken = msg.events[0].replyToken;

        if (userType=="text"||userType=="audio") {
            let userMessage = "";
            if (userType=="text")
              userMessage = msg.events[0].message.text.trim();
            else 
              userMessage = sendAudioToGeminiSTT(getAudioFromLinebot(msg.events[0].message.id), "audio/aac", "請將音訊轉換為文字");
            
            let geminiMessages = [{ "role": "user", "parts": [{ "text": GEMINI_ASSISTANT_BEHAVIOR + "9. 現在時間為" + Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss") + "\n\n\n\n使用者訊息：" + userMessage }] }];

            let jsonData = sendMessageToGeminiChat(GEMINI_API_KEY, geminiMessages).replace(/```json|```/g, "").trim();           
            if (jsonData!="error") {
                try {
                    let data = JSON.parse(jsonData);
                    if (data.length>0) {
                      for (i=0;i<data.length;i++) {
                        let date = data[i].date; // 預期格式：'YYYY-MM-DD'
                        let time = data[i].time; // 預期格式：'HH:MM:00'
                        let duration = data[i].duration; // 預期格式：1
                        let workMatter = data[i].workMatter; // 預期格式：文字敘述
                        let eventDateTime = new Date(date + 'T' + time);
                        let calendar = CalendarApp.getDefaultCalendar();
                        try {
                            calendar.createEvent(workMatter, eventDateTime, new Date(eventDateTime.getTime() + Number(duration) * 60 * 60 * 1000));
                        } catch (calendarError) {
                            let replyMessage = [{
                                "type":"text",
                                "text": jsonData + "\n\n行事曆建立失敗，請檢查日期時間格式或權限設定！\n錯誤訊息：" + calendarError
                            }];
                            sendMessageToLineBot(replyToken, replyMessage);
                            break;
                        }                       
                      }
                      let replyMessage = [{
                          "type":"text",
                          "text": jsonData + "\n\n行事曆建立成功！"
                      }];
                      sendMessageToLineBot(replyToken, replyMessage);                       
                    }
                } catch (error) {
                        let replyMessage = [{
                            "type":"text",
                            "text": jsonData
                        }];
                        sendMessageToLineBot(replyToken, replyMessage);
                }
            } else {
                replyErrorMessage(replyToken);
            }
        }
    }

    return  ContentService.createTextOutput("OK");
}

function sendMessageToGeminiChat(key, messages) {
    try {
        let url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + key;
        let data = {
            "contents": messages
        };

        const options = {
            method: 'POST',
            contentType: 'application/json',
            payload: JSON.stringify(data)
        };

        let response = UrlFetchApp.fetch(url, options);
        let json = JSON.parse(response.getContentText());

        if (json.error) {
            return JSON.stringify(json.error);
        }

        if (json.candidates && json.candidates.length > 0 && json.candidates[0].content && json.candidates[0].content.parts && json.candidates[0].content.parts.length > 0) {
            return json.candidates[0].content.parts[0].text;
        } else {
            return JSON.stringify(response);
        }

    } catch (error) {
        return 'error';
    }
}

function getAudioFromLinebot(messageId) {
  var url = 'https://api-data.line.me/v2/bot/message/' + messageId + '/content';
  
  var options = {
    'headers': {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'get',
    'muteHttpExceptions': true
  };
  
  try {
    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    if (responseCode === 200) {
      var audioBlob = response.getBlob();
      var audioBase64Data = Utilities.base64Encode(audioBlob.getBytes());
      return audioBase64Data;
    } else {
      throw new Error('Failed to fetch audio content: ' + responseCode);
    }
  } catch (e) {
    Logger.log('Error fetching audio from LINE: ' + e.toString());
    return null;
  }
}

function sendAudioToGeminiSTT(audioBase64Data, mimeType, prompt) {
  var url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + GEMINI_API_KEY;
  
  var filePart = {
    "inline_data": {
      "data": audioBase64Data,
      "mime_type": mimeType
    }
  };
  
  var textPart = {
    "text": prompt
  };
  
  var requestBody = {
    "contents": [
      {
        "role": "user",
        "parts": [filePart, textPart]
      }
    ]
  };
  
  var options = {
    'method': 'post',
    'contentType': 'application/json; charset=utf-8',
    'payload': JSON.stringify(requestBody),
    'muteHttpExceptions': true
  };
  
  try {
    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    if (responseCode === 200) {
      var responseData = JSON.parse(response.getContentText());
      var getText = responseData.candidates[0].content.parts[0].text;
      if (getText === null) {
        getText = responseData.error.message;
      }
      return getText.replace(/\n/g, '');
    } else {
      return 'Error: ' + responseCode + ' ' + response.getContentText();
    }
  } catch (e) {
    return 'Request failed: ' + e.toString();
  }
}

function sendMessageToLineBot(replyToken, reply_message) {
    let url = 'https://api.line.me/v2/bot/message/reply';
    UrlFetchApp.fetch(url, {
        'headers': {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
        },
        'method': 'post',
        'payload': JSON.stringify({
            'replyToken': replyToken,
            'messages': reply_message
        }),
    });
}

function replyErrorMessage(replyToken) {
    let replyMessage = [{
        "type":"text",
        "text": ERROR_MESSAGE
    }];
    sendMessageToLineBot(replyToken, replyMessage);
}
