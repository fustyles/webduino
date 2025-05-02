/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2025/5/2 16:00
https://www.facebook.com/francefu
*/

const CHANNEL_ACCESS_TOKEN = "xxxxx";
const GEMINI_API_KEY = "xxxxx";
const GOOGLE_SPREADSHEET_ID = "xxxxx";
const GOOGLE_SPREADSHEET_NAME = "xxxxx";

const GEMINI_ASSISTANT_BEHAVIOR = `
請依照以下規範：\n
(1) 請判別使用者對話內容屬於以下哪一種類別：【新增行事曆、記帳、查帳、聊天】，回傳陣列資料。\n
(2) \n
1. 如果類別為"新增行事曆(type:calendar)"且對話內容包含日期、時間、持續時間、事項，請回傳json陣列資料，格式如下：\n
[{"type":"calendar", "date":"填入日期轉換為 'YYYY-MM-DD' 格式", "time":"填入時間轉換為 'HH:MM:00' 格式", "duration":"持續幾小時，預設為1","workMatter":"事項內容"}, ...]\n
資料格式示範： [{"type":"calendar", "date":"2025-05-01", "time":"12:00:00", "duration":1, "workMatter":"吃海鮮大餐！"}, {"type":"calendar", "date":"2025-05-02", "time":"10:30:00", "duration":1, "workMatter":"去打球！"}, ...]\n
2. 如果類別為"記帳(type:accounting)"且對話內容包含時間、類別【飲食、交通、居住、娛樂、健康與醫療、個人用品、教育】、金額，請回傳json陣列資料，格式如下：\n
[{"type":"accounting", "time":"轉換為 'YYYY-MM-DD HH:MM:00' 格式","money":"消費金額","summary":"消費摘要"}, ...]\n
資料格式示範： [{"type":"accounting", "class":"飲食", "time":"2025-05-01 12:00:00", "money":1000, "summary":"吃海鮮大餐！"}, {"type":"accounting", "class":"交通", "time":"2025-05-02 10:30:00", "money":200, "summary":"搭計程車"}, ...]\n
3. 如果類別為"查帳(type:audit)"且對話內容包含起訖日期，請回傳json陣列資料，格式如下：\n
[{"type":"audit", "startDate":"轉換為 'YYYY-MM-DD' 格式", "endDate":"轉換為 'YYYY-MM-DD' 格式"}]\n
資料格式示範： [{"type":"audit", "startDate":"2025-05-01", "endDate":"2025-05-02"}]\n
4. 如果類別判斷屬於"聊天(type:chat)"，請回傳json陣列資料，格式如下：\n
[{"type":"chat", "response":"依據使用者的對話內容回覆，最後換兩行提醒是否要新增行事曆、記帳、查帳，並說明所需要的資料以及提醒在對話中要聲明。"}]\n
(3) 若沒有提及年份，則表示今年。\n
(4) 若沒有提及月份，則表示本月。\n
(5) 若沒有提及時間，則表示00:00:00。\n
(6) 若沒有提及持續幾小時，則預設為1小時。\n
(7) 若提到持續一天或全天，時間由當日00:00:00算起。\n
(8) 請不要使用Markdown語法。\n
`;
const ERROR_MESSAGE = "請傳送文字或語音訊息，進行【新增行事曆、記帳、查帳、聊天】並提供所需資料，或者可能發生提供的 Gemini Key 無法使用！";

function doPost(e) {
    if (e.postData) {
        let msg = JSON.parse(e.postData.contents);
        let userType = msg.events[0].message.type;
        let replyToken = msg.events[0].replyToken;

        if (userType=="text"||userType=="audio") {
            let userMessage = "";
            if (userType=="text")
              userMessage = msg.events[0].message.text.trim();
            else {
              let messageId = msg.events[0].message.id;
              userMessage = sendAudioToGeminiSTT(getAudioFromLinebot(messageId), "audio/aac", "請將音訊轉換為文字");
            }
              
            let geminiMessages = [{ "role": "user", "parts": [{ "text": GEMINI_ASSISTANT_BEHAVIOR + "(9) 現在時間為" + Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss") + "\n\n\n\n使用者訊息：" + userMessage }] }];

            let jsonData = sendMessageToGeminiChat(GEMINI_API_KEY, geminiMessages).replace(/```json|```/g, "").trim();           
            if (jsonData!="error"&&jsonData.indexOf('[')!=-1) {
                try {
                  jsonData = jsonData.substring(jsonData.indexOf('['), jsonData.indexOf(']')+1);
                  let data = JSON.parse(jsonData.replace(/\r\n/g, '\\r\\n').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, ' '));
                  let response = "";
                  if (data.length>0) {
                    for (let i=0;i<data.length;i++) {
                      if (data[i].type=="calendar") {
                        response = "建立行事曆\n\n";
                        let date = data[i].date; // 預期格式：'YYYY-MM-DD'
                        let time = data[i].time; // 預期格式：'HH:MM:00'
                        let duration = data[i].duration; // 預期格式：1
                        let workMatter = data[i].workMatter; // 預期格式：文字敘述
                        response += `項目${i+1}\n行程：${workMatter}\n時間：${date} ${time}\n時數：${duration}\n\n`;
                        
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
                      else if (data[i].type=="accounting") {
                        try {
                          response = "記帳\n\n";                            
                          const ss = SpreadsheetApp.openById(GOOGLE_SPREADSHEET_ID);
                          const sheet = ss.getSheetByName(GOOGLE_SPREADSHEET_NAME);
                          const rowData = [data[i].class, data[i].time, data[i].money, data[i].summary];
                          sheet.appendRow(rowData);
                          response += `項目${i+1}\n類別：${data[i].class?data[i].class:"其他"}\n時間：${data[i].time}\n金額：${data[i].money}\n摘要：${data[i].summary}\n\n`;
                        } catch (accountingError) {
                            let replyMessage = [{
                                "type":"text",
                                "text": jsonData + "\n\n記帳新增失敗，請檢查資料格式是否正確！\n錯誤訊息：" + accountingError
                            }];
                            sendMessageToLineBot(replyToken, replyMessage);
                        }                               
                      } 
                      else if (data[i].type=="audit") {
                          response = "查帳\n\n"; 
                          let sql = "select A,sum(C) where B>= date'"+data[i].startDate+"' and B<= date '"+data[i].endDate+"' group by A";
                          let jsonData = spreadsheetsql_executeSql(sql, GOOGLE_SPREADSHEET_ID, GOOGLE_SPREADSHEET_NAME);
                          response = jsonData;
                          let geminiMessages = [{ "role": "user", "parts": [{ "text": "請整理以下資料回應使用者明細清單：\nSQL語法："+sql+"\nSQL資料：" 
                           + jsonData + "\n\n回傳資料格式示範：日期： 2025/5/1 - 2025/5/2\n娛樂： 1000元\n交通： 3000元\n...\n\n總計： 4000元\n\n不要多做解釋！"}] }];
                          response = sendMessageToGeminiChat(GEMINI_API_KEY, geminiMessages).replace(/```json|```/g, "").trim();                      
                      }
                      else if (data[i].type=="chat") {
                        response = data[i].response;                    
                      }                                                                    
                    }
                    let replyMessage = [{
                        "type":"text",
                        "text": response
                    }];
                    sendMessageToLineBot(replyToken, replyMessage); 
                  }
                } catch (error) {
                  let replyMessage = [{
                      "type":"text",
                      "text": error + "\n\n" + jsonData
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
        let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`;
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
  var url = `https://api-data.line.me/v2/bot/message/${messageId}/content`;
  
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
    return null;
  }
}

function sendAudioToGeminiSTT(audioBase64Data, mimeType, prompt) {
  var url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
  
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

function spreadsheetsql_executeSql(spreadsheet_sql, spreadsheet_id, spreadsheet_name) {
  try {
    let file = SpreadsheetApp.openById(spreadsheet_id);
    let sheet = file.getSheetByName(spreadsheet_name);
    if (!sheet) {
      return 'Error: Sheet "' + spreadsheet_name + '" not found in spreadsheet ID "' + spreadsheet_id + '".';
    }
    let sheetId = sheet.getSheetId();
    let range = sheet.getDataRange().getA1Notation();

    let request = 'https://docs.google.com/spreadsheets/d/' + spreadsheet_id + '/gviz/tq?gid=' + sheetId + '&range=' + range + '&tq=' + encodeURIComponent(spreadsheet_sql);
    let result = UrlFetchApp.fetch(request).getContentText();

    let dataFrom = result.indexOf('"table":{');
    let dataTo   = result.lastIndexOf(',"parsedNumHeaders"')+1;  
    let jsonText = "{"+result.slice(dataFrom+9, dataTo-1)+"}"; 
    return spreadsheetsql_formatResponse(jsonText);
  } catch (error) {
    return 'Error executing SQL: ' + error;
  }
}

function spreadsheetsql_formatResponse(data) {
  let response = [];
  let res = JSON.parse(data.replace(/\r\n/g, '\\r\\n').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, ' '));

  try {
    response.push("<table>");

    let cols = res.cols;
    if (cols) {
      response.push("<th>");      
      for (let i = 0; i < cols.length; i++) {
        if (cols[i].label)
          response.push("<td>" + cols[i].label + "</td>");
        else
          response.push("<td>" + cols[i].id + "</td>");
      }
      response.push("</th>");
    }

    let rows = res.rows;
    if (rows) {
      for (let i = 0; i < rows.length; i++) {
        response.push("<tr>");
        for (let j = 0; j < rows[i].c.length; j++) {
          if (rows[i].c[j]) {
            if (rows[i].c[j].v !== undefined) {
              response.push((rows[i].c[j].f !== undefined) ? "<td>"+rows[i].c[j].f+"</td>" : "<td>"+rows[i].c[j].v+"</td>");
            } else
              response.push("");
          } else
            response.push("");
        }
        response.push("</tr>");
      }
    }
    response.push("</table>");  
  } catch (error) {
    return 'Error getting SQL data: ' + error;
  }  

  return response.join("");
}

function replyErrorMessage(replyToken) {
    let replyMessage = [{
        "type":"text",
        "text": ERROR_MESSAGE
    }];
    sendMessageToLineBot(replyToken, replyMessage);
}
