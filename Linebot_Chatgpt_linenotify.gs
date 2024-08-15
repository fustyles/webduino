/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/8/15 13:00
https://www.facebook.com/francefu
Line Bot Webhook & Google Apps script & ChatGTP API

若傳訊無回應：
1. openAI api額度已用盡或Key已失效。
2. 指令碼屬性數超過上限，新增的Line bot使用者將無法正常運作，可付費升級為Google付費會員。
3. 不明原因，可能太久無人使用自動停用，重新佈署或重建Apps script專案並開放存取權限。
4. Apps script程式碼有bug。
5. Google試算表設定不正確。
6. 重新再傳訊一次。
*/

// Line bot
let channel_access_TOKEN = "";

// ChatGPT
let openAI_api_KEY = "";

// Google試算表
let spreadsheet_ID = ""; // 試算表ID
let spreadsheet_Name_list = ""; // 工作表名稱 ( 行政人員名單：["編號","姓名","處室","職稱","權杖","訊息"] )
let spreadsheet_Name_record = ""; // 工作表名稱 ( 訊息歷史紀錄：["日期","時間","userId","訊息"] )

// openAI設定
let openAI_model = "gpt-4o"; // 限已升級plus帳號或已有刷卡儲值帳號，勿使用gpt-4o-mini或gpt-3.5
let openAI_assistant_behavior = `
請回覆陣列格式資料符合以下規範：
(1)請分析使用者對話內容，區分要傳送的訊息內容與傳送對象(陣列格式資料中與欄位「編號」、「姓名」、「處室」、「職稱」任一相同或相關聯，或所有對象皆傳送)
(2)對話內容中提及對象與欄位「編號」、「姓名」、「處室」、「職稱」任一相同或相關連，視為同一對象。
(3)若同一對象的訊息內容有多則，多則訊息合併生成一則訊息，以流水編號區分同一對象不同則訊息。
(4)將傳送的訊息內容填入提供的陣列格式資料「訊息」欄位的值，保留欄位名稱首列。
(5)若非傳送對象或傳送訊息內容為空白則不列入回傳陣列資料裡。
(6)若無關任何傳送對象請回傳'請輸入要傳送的對象與訊息或者重試一次！'，不須參照回傳陣列格式資料。
(7)回覆對話的陣列資料列需根據「編號」欄位排序。
(8)只回覆陣列格式資料，不要多作解釋。
(9)陣列格式資料範本：
`;

// 陣列資料格式範本：  [["編號","姓名","處室","職稱","權杖","訊息"],["1", "林志玲", "校長室", "校長", "Line token1", "(1)message 1 (2)message 2 (3)..."],["2", "法蘭斯", "警衛室", "警衛", "Line token2", "(1)message 1 (2)message 2 (3)..."]]

let Command = {
    "help" : ["help", "list", "清單", "名單"],
    "sure" : ["sure", "yes", "確定"],
    "cancel" : ["cancel", "no", "取消"],
    "search" : ["search", "查詢", "關鍵字"],  // search 林志玲、查詢 林志玲、關鍵字 林志玲
    "sql" : "sql"  // sql select * limit 2
}

let Msg = {
  "success_send": "傳送完成",
  "success": "成功：",
  "failure_send": "傳送失敗",
  "failure": "失敗：",
  "cancel": "傳送取消",
  "query": "請輸入[確定]，或輸入[取消]",
  "warn": "請先輸入要傳送的對象與訊息！",
  "message_template": '(1)message 1 (2)message 2 (3)...'
}

// Line bot參數
let userMessage = "";
let userId = "";
let eventType = "";
let replyToken = "";

function doPost(e) {
    let scriptProperties = PropertiesService.getScriptProperties();
    let line_response = "";

    if (e.postData) {
        let msg = JSON.parse(e.postData.contents);
        userMessage = msg.events[0].message.text.trim();
        userId = msg.events[0].source.userId;
        eventType = msg.events[0].source.type;
        replyToken = msg.events[0].replyToken;

        if (Command.help.includes(userMessage.toLowerCase())) {
            let sqlDataArray = getSheetsQueryResult(spreadsheet_ID, spreadsheet_Name_list, "A:D", "select *");
            line_response = resultToListString(sqlDataArray);           
        } else if (Command.cancel.includes(userMessage.toLowerCase())) {
            scriptProperties.setProperty(userId, '');
            line_response = Msg.cancel;            
        } else if (Command.sure.includes(userMessage.toLowerCase())) {
            line_response = scriptProperties.getProperty(userId);
            if (!line_response)
                line_response = Msg.warn;
            else {
                let count_ok = 0;
                let row;
                let err = '';
                try {
                    recordMessageToSpreadsheet(line_response);
                    let dataArray = eval(line_response);
                    for (let i = 1; i < dataArray.length; i++) {
                        row = dataArray[i];
                        if (row[5] != '') {
                            if (sendMessageToLineNotify(row[4], `\n${row[5]}`))
                                count_ok++;
                            else {
                                err = `\n\nUnexpected token\n\n${row}`;
                                break;
                            }
                        }
                    }
                    line_response = `${Msg.success_send}\n${Msg.success}${count_ok}\n${Msg.failure}${dataArray.length - count_ok - 1}${err}`;
                } catch (error) {
                    line_response = `${Msg.failure_send}\n\n${row}\n\n${Msg.success}${count_ok}\n${Msg.failure}${dataArray.length - count_ok - 1}\n\n${error}`;
                }
                scriptProperties.setProperty(userId, '');
            }
        } else if (checkStartWithSearch(userMessage, Command.search)!="") {
            try {
                let keyword = checkStartWithSearch(userMessage, Command.search);
                let sqlText = `select * where A contains '${keyword}' or B contains '${keyword}' or C contains '${keyword}' or D contains '${keyword}'`;
                let sqlDataArray = getSheetsQueryResult(spreadsheet_ID, spreadsheet_Name_list, "A:D",sqlText );
                line_response = resultToListString(sqlDataArray);      
            } catch (error) {
                line_response = error;
            }
        } else if (userMessage.toLowerCase().indexOf(Command.sql)==0) {
            try {
                let sqlText = userMessage.toLowerCase().substring(userMessage.toLowerCase().indexOf(Command.sql) + Command.sql.length).trim();
                let sqlDataArray = getSheetsQueryResult(spreadsheet_ID, spreadsheet_Name_list, "A:D",sqlText );
                line_response = resultToListString(sqlDataArray);      
            } catch (error) {
                line_response = error;
            }                             
        } else {
            let sqlDataArray = getSheetsQueryResult(spreadsheet_ID, spreadsheet_Name_list, "A:E", "select *");
            let spreadsheet_list = resultToArrayString(sqlDataArray);           
            openAI_assistant_behavior = openAI_assistant_behavior + spreadsheet_list;

            response = sendMessageToChatGPT(openAI_assistant_behavior, userMessage);
            scriptProperties.setProperty(userId, response);
            try {
                let dataArray = eval(response);
                for (let i = 1; i < dataArray.length; i++) {
                    let row = dataArray[i];
                    line_response += `${row[0]}. ${row[3]}-${row[1]}：${row[5]}\n`;
                }
                line_response += `\n${Msg.query}`;
            } catch (error) {
                line_response = `${response}\n\n${error}`;
            }
        }
        sendMessageToLineBot(channel_access_TOKEN, replyToken, line_response);
    }
    return ContentService.createTextOutput("ok");
}

function checkStartWithSearch(message, search) {
    for (var i = 0; i < search.length; i++) {
        if (message.toLowerCase().indexOf(search[i].toLowerCase())==0) {
            return message.substring(message.toLowerCase().indexOf(search[i].toLowerCase()) + search[i].length).trim();
            break;
        }
    }
    return "";
}

function recordMessageToSpreadsheet(message) {
  var dataDate = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd");
  var dataTime = Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss");
  var data = [dataDate, dataTime, userId, message];
  
  var spreadsheet = SpreadsheetApp.openById(spreadsheet_ID);
  var sheet = spreadsheet.getSheetByName(spreadsheet_Name_record);
  
  sheet.insertRowAfter(1);
  sheet.getRange(2, 1, 1, data.length).setValues([data]);
}

function sendMessageToLineNotify(replyToken, replyMessage) {
    try {
        url = 'https://notify-api.line.me/api/notify';   
        let response = UrlFetchApp.fetch(url, {
            'headers': {
                'Authorization': 'Bearer ' + replyToken,
            },
            'method': 'post',
            'payload': {
                'message': replyMessage
            }
        });
        if (JSON.parse(response).message == "ok")
            return true;
        else
            return false;
    } catch (error) {
        return false;
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
            'Authorization': 'Bearer ' + accessToken,
        },
        'method': 'post',
        'payload': JSON.stringify({
            'replyToken': replyToken,
            'messages': replyMessage
        }),
    });
}

function sendMessageToChatGPT(assistant_behavior, user_message){
    let openAI_messages = [{
        "role": "system",
        "content": assistant_behavior
    }];

    let chat_message = {};
    chat_message.role = "user";
    chat_message.content = user_message;
    openAI_messages.push(chat_message);

    let url = "https://api.openAI.com/v1/chat/completions";
    let data = {
        "model": openAI_model,
        "messages": openAI_messages
    };

    const authHeader = "Bearer " + openAI_api_KEY;
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
    return json["choices"][0]["message"]["content"];
}

function getSheetsQueryResult(fileId, sheetName, range, sqlText) {
    let file = SpreadsheetApp.openById(fileId);
    let sheetId = file.getSheetByName(sheetName).getSheetId();
    let sqlURL = `https://docs.google.com/spreadsheets/d/${fileId}/gviz/tq?gid=${sheetId}&range=${range}&tq=${encodeURIComponent(sqlText)}`;
    let result = UrlFetchApp.fetch(sqlURL).getContentText();
    let jsonData = result.match(/\(.*?\)/)[0].replace(/[()]/g, '');
    jsonData = JSON.parse(jsonData);
    if ('errors' in jsonData) {
        let errorMessage = jsonData.errors[0].detailed_message;
        return [[errorMessage]];
    } else {
      let table_rows = jsonData.table.rows;
      let labels = jsonData.table.cols.map(item => item.label);
      let types = jsonData.table.cols.map(item => item.type);
      let resultArray = [];
      resultArray.push(labels);
      for (let i = 0, l = table_rows.length; i < l; i++) {
          let row = table_rows[i].c;
          let items = [];
          for (let j = 0; j < row.length; j++) {
              let type = types[j];
              if (type === 'number'||type === 'boolean') {
                  items.push(row[j]==null?null:row[j].f);
              } else {
                  items.push(row[j]==null?null:row[j].v);
              }
          }
          resultArray.push(items);
      }
      return resultArray;
    }
}

function resultToArrayString(result) {
    var output = '[';
    for (var i = 0; i < result.length; i++) {
        output += `["${result[i][0]}", "${result[i][1]}", "${result[i][2]}", "${result[i][3]}", "${result[i][4]}", "${Msg.message_template}"]`;
        output += (i!=result.length-1)?",":"";
    }
    output += ']';
    return output;
}

function resultToListString(result) {
    var output = '';
    for (var i = 0; i < result.length; i++) {
        output += result[i].slice(0, 4).join(', ');
        output += (i!=result.length-1)?"\n":"";
    }
    return output;
}
