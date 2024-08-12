/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/8/13 01:00
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

// chatGPT
let openAI_api_KEY = "";

// 試算表基本人員資料 (編號, 姓名, 暱稱, 權杖)
let spreadsheet_ID = ""; // 試算表ID
let spreadsheet_NAME = ""; // 工作表NAME

// openAI設定
let openAI_model = "gpt-4o-mini"; // gpt-4, gpt-4o-mini (限已升級plus帳號或已有刷卡儲值帳號)
let openAI_assistant_behavior = "請符合以下規範："
+"- 請分析使用者對話內容，區分要傳送的訊息內容與傳送對象(陣列格式資料中與欄位[編號]、[姓名]、[暱稱]任一相同、關聯高、或所有對象皆傳送)"
+"- 若相同對象的訊息內容有多項，依相同對象合併成一項訊息內容。"
+"- 將傳送的訊息內容填入提供的陣列格式資料欄位[訊息]的值。"
+"- 若非傳送對象或傳送訊息內容為空白則不列入回傳陣列資料裡。"
+"- 若無關任何傳送對象請回傳'請輸入要傳送的訊息與對象，或者重試一次！'，不須參照回傳陣列格式資料。"
+"- 只回覆陣列格式資料不要多作解釋。陣列格式資料如下：";

// 陣列資料格式範本：  [["編號","姓名","暱稱","權杖","訊息"],["1", "林志玲", "老婆", "Line token1", ""],["2", "周子瑜", "妹妹", "Line token2", ""]]

let command_help = ["help", "list", "清單", "名單"];
let command_sure = ["sure", "yes", "確定"];
let command_cancel = ["cancel", "no", "取消"];

let columnName_array = '["編號", "姓名", "暱稱", "權杖", "訊息"]';
let columnName_string = '編號, 姓名, 暱稱';

let Msg = {
  "success_send": "傳送完成",
  "success": "成功：",
  "failure_send": "傳送錯誤",
  "failure": "失敗：",
  "cancel": "傳送取消",
  "query": "請輸入[確定]，或輸入[取消]"
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

        if (command_help.includes(userMessage.toLowerCase())) {
            line_response = getSheetsQueryResult(spreadsheet_ID, spreadsheet_NAME, "A:C", "select *", 0);
        } else if (command_cancel.includes(userMessage.toLowerCase())) {
            scriptProperties.setProperty(userId, '');
            line_response = Msg.cancel;            
        } else if (command_sure.includes(userMessage.toLowerCase())) {
            line_response = scriptProperties.getProperty(userId);
            let count_ok = 0;
            let row;
            let err = '';
            try {
                let dataArray = eval(line_response);
                for (let i = 1; i < dataArray.length; i++) {
                    row = dataArray[i];
                    if (row[4] != '') {
                        if (sendMessageToLineNotify(row[3], '\n' + row[4]))
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
        } else {
            let spreadsheet_list = getSheetsQueryResult(spreadsheet_ID, spreadsheet_NAME, "A:D", "select *", 1);
            openAI_assistant_behavior = openAI_assistant_behavior + spreadsheet_list;

            response = sendMessageToChatGPT(openAI_assistant_behavior, userMessage);
            scriptProperties.setProperty(userId, response);
            try {
                let dataArray = eval(response);
                for (let i = 1; i < dataArray.length; i++) {
                    let row = dataArray[i];
                    line_response += i + '. ' + row[1] + '：' + row[4] + '\n';
                }
                line_response += '\n' + Msg.query;
            } catch (error) {
                line_response = response + '\n\n' + error;
            }
        }
        sendMessageToLineBot(channel_access_TOKEN, replyToken, line_response);
    }
    return ContentService.createTextOutput("Return = Finish");
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

function sendMessageToChatGPT(system_behavior, user_message){
    let openAI_messages = [{
        "role": "system",
        "content": system_behavior
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

//https://stackoverflow.com/questions/22330542/can-i-use-google-visualization-api-to-query-a-spreadsheet-in-apps-script
function getSheetsQueryResult(fileId, sheetName, range, sqlText, formatArray) {
    var file = SpreadsheetApp.openById(fileId);
    var sheetId = file.getSheetByName(sheetName).getSheetId();

    var request = 'https://docs.google.com/spreadsheets/d/' + fileId + '/gviz/tq?gid=' + sheetId + '&range=' + range + '&tq=' + encodeURIComponent(sqlText);
    var result = UrlFetchApp.fetch(request).getContentText();
    var from = result.indexOf("{");
    var to = result.lastIndexOf("}") + 1;
    var jsonText = result.slice(from, to);
    var parsedText = JSON.parse(jsonText);

    var types = [];
    var addType_ = function(col) {
        types.push(col.type);
    }
    var cols = parsedText.table.cols;
    cols.forEach(addType_);

    var rows = parsedText.table.rows;
    var result = [];
    var rowQuery = [];
    var eltQuery = {};
    var row = [];
    var nRows = rows[0].c.length;
    var type = '';

    for (var i = 0, l = rows.length; i < l; i++) {
        rowQuery = rows[i].c;
        row = []; 
        for (var k = 0; k < nRows; k++) {
            eltQuery = rowQuery[k];
            type = types[k];
            if (type === 'number') {
                row.push(parseInt(eltQuery.v));
            } else if (type === 'boolean' || type === 'string') {
                row.push(String(eltQuery.v));
            } else {
                row.push(String(eltQuery.f));
            }
        }
        result.push(row);
    }
    
    if (formatArray)
        return resultToArrayString(result);
    else
        return resultToListString(result);
}

function resultToArrayString(result) {
    var output = '[' +columnName_array + ",";
    for (var i = 0; i < result.length; i++) {
        output += `["${result[i][0]}", "${result[i][1]}", "${result[i][2]}", "${result[i][3]}", ""]`;
        output += (i!=result.length-1)?",":"";
    }
    output += ']';
    return output;
}

function resultToListString(result) {
    var output = columnName_string + '\n';
    for (var i = 0; i < result.length; i++) {
        output += result[i].slice(0, 3).join(', ') + '\n';
    }
    return output;
}
