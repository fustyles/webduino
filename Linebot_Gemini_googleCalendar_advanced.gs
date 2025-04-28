/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2025/4/29 01:00
https://www.facebook.com/francefu
*/

const CHANNEL_ACCESS_TOKEN = "xxxxx";
const GEMINI_API_KEY = "xxxxx";

const GEMINI_ASSISTANT_BEHAVIOR = `
請依照以下規範：\n
1. 如果對話內容包含日期、時間、持續時間、事項，請回傳json格式資料，格式如下：\n
[{"date":"填入日期轉換為 'YYYY-MM-DD' 格式", "time":"填入時間轉換為 'HH:MM:00' 格式", "duration":"持續幾小時，預設為1","workMatter":"事項內容"}, ...]\n
2. 資料格式示範： [{"date":"2025-05-01", "time":"12:00:00", "duration":1, "workMatter":"相約吃海鮮大餐！"}, {"date":"2025-05-02", "time":"10:30:00", "duration":1, "workMatter":"相約去打球！"}, ...]\n
3. 若沒有提及年份，則表示今年。\n
4. 若沒有提及月份，則表示本月。\n
5. 若沒有提及持續幾小時，則duration值為1。\n
6. 如果對話內容並未能轉換成完整日期、時間、持續時間(可無，預設1)、事項，則當作一般聊天完整回應問題，最後在回覆內容中換兩行提醒是否要新增行事曆並說明所需要的資料。\n
7. 請不要多做解釋。\n
8. 請不要使用Markdown語法。\n
`;
const ERROR_MESSAGE = "請傳送文字訊息包含一筆以上的行事曆所需資料：日期、時間、持續時間(可無)、事項描述，或者提供的 Gemini Key 無法使用！";

let geminiResponse = "";
let geminiMessages = "";

let userType = "";
let userMessage = "";
let userId = "";
let eventType = "";
let replyToken = "";

function doPost(e) {
    if (e.postData) {
        let msg = JSON.parse(e.postData.contents);
        userType = msg.events[0].message.type;
        userMessage = msg.events[0].message.text.trim();
        userId = msg.events[0].source.userId;
        eventType = msg.events[0].source.type;
        replyToken = msg.events[0].replyToken;

        if (userType=="text") {
            userMessage = msg.events[0].message.text.trim();

            geminiMessages = [{ "role": "user", "parts": [{ "text": GEMINI_ASSISTANT_BEHAVIOR + "9. 現在時間為" + Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss") + "\n\n\n\n使用者訊息：" + userMessage }] }];

            let jsonData = sendMessageToGeminiChat(GEMINI_API_KEY, geminiMessages);           
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
                                "text": "行事曆建立失敗，請檢查日期時間格式或權限設定！\n錯誤訊息：" + calendarError
                            }];
                            sendMessageToLineBot(CHANNEL_ACCESS_TOKEN, replyToken, replyMessage);
                            break;
                        }                       
                      }
                      let replyMessage = [{
                          "type":"text",
                          "text": jsonData + "\n\n行事曆建立成功！"
                      }];
                      sendMessageToLineBot(CHANNEL_ACCESS_TOKEN, replyToken, replyMessage);                       
                    }
                } catch (error) {
                        let replyMessage = [{
                            "type":"text",
                            "text": jsonData
                        }];
                        sendMessageToLineBot(CHANNEL_ACCESS_TOKEN, replyToken, replyMessage);
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

function sendMessageToLineBot(accessToken, replyToken, reply_message) {
    let url = 'https://api.line.me/v2/bot/message/reply';
    UrlFetchApp.fetch(url, {
        'headers': {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + accessToken,
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
    sendMessageToLineBot(CHANNEL_ACCESS_TOKEN, replyToken, replyMessage);
}