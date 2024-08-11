/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2024/8/11 19:30
https://www.facebook.com/francefu
Line Bot Webhook & Google Apps script & ChatGTP API

若傳訊無回應：
1. openAI api額度已用盡或Key已失效。
2. 指令碼屬性值暫存歷史對話紀錄字串長度已達上限，請輸入"清除對話"清除歷史紀錄重新對話。
3. 指令碼屬性數超過上限，新增的Line bot使用者將無法記錄歷史對話，可付費升級為Google付費會員。
4. 不明原因，可能太久無人使用自動停用，重新佈署或重建Apps script專案並開放存取權限。
*/

// Line bot
let channel_access_TOKEN = "";  

// chatGPT
let openAI_api_KEY = "";

// 試算表基本人員資料 (編號, 姓名, 暱稱, 權杖)
let spreadsheet_ID = "";  // 試算表ID
let spreadsheet_NAME = "";  // 工作表NAME

// openAI設定
let openAI_model = "gpt-4o-mini";   // gpt-4, gpt-4o-mini (限已升級plus帳號或已有刷卡儲值帳號)
let openAI_assistant_behavior = "請分析使用者訊息，判別要傳送的Line訊息與傳送的對象(編號、姓名、暱稱任一相同或所有人)，依照提供的資料格式字串將要傳送對象的訊息填入欄位[訊息]的值，若非傳送對象不列出。若無任何對象或訊息請回傳'請輸入要傳送的訊息與對象！'，不須參照資料格式字串。只回覆資料格式字串不要多作解釋。資料格式字串如下：";

let command_help = ["help", "list", "清單", "名單"];
let command_sure = ["sure", "yes", "確定"];
let command_cancel = ["cancel", "no", "取消"];

let columnName_arr_1 = '["編號","姓名","暱稱","權杖","訊息"]';
let columnName_arr_0 = '編號,姓名,暱稱';

// 系統變數
let userMessage = "";
let userId = "";
let eventType = "";
let replyToken = "";
let line_response = "";
let openAI_messages;
let replyMessage;
let spreadsheet_list;
  
function doPost(e) {
  let scriptProperties = PropertiesService.getScriptProperties();

  if (e.postData) {
    let msg = JSON.parse(e.postData.contents);
    userMessage = msg.events[0].message.text.trim();
    userId = msg.events[0].source.userId;
    eventType = msg.events[0].source.type;
    replyToken = msg.events[0].replyToken;

    if (command_help.includes(userMessage.toLowerCase())) {
        line_response = getSheetsQueryResult(spreadsheet_ID, spreadsheet_NAME, "A:C", "select *", 0); 
    } else if (command_sure.includes(userMessage.toLowerCase())) {
        line_response = scriptProperties.getProperty(userId);
        let dataArray = eval(line_response);
        let response;
        let send_ok = 0;
        let send_error = 0;
        let row;        
        try {
          for (let i = 1; i < dataArray.length; i++) {
            row = dataArray[i];
            if (row[4]!='') {
              url = 'https://notify-api.line.me/api/notify';
              response = UrlFetchApp.fetch(url, {
                'headers': {
                  'Authorization': 'Bearer ' + row[3],
                },
                'method': 'post',
                'payload': {
                    'message': '\n'+row[4]
                }
              });
              if (JSON.parse(response).message=="ok")
                send_ok++;
              else
                send_error++;
            }
          } 
          line_response = '傳送完成\n成功：'+send_ok+'人\n失敗：'+send_error+'人';
        } catch(error) {
          line_response = '傳送失敗\n\n'+row+'\n\n成功：'+send_ok+'人\n失敗：'+(dataArray.length-send_ok-1)+'人\n\n'+error;
        }
        scriptProperties.setProperty(userId, '');
    } else if (command_cancel.includes(userMessage.toLowerCase())) {
        scriptProperties.setProperty(userId, '');
        line_response = '傳送取消';
    } else {
        spreadsheet_list = getSheetsQueryResult(spreadsheet_ID, spreadsheet_NAME, "A:D", "select *", 1);

        openAI_assistant_behavior = openAI_assistant_behavior+spreadsheet_list;
        openAI_messages = [{"role": "system", "content": openAI_assistant_behavior}];

        let chat_message = {};
        chat_message.role = "user";
        chat_message.content = userMessage;
        openAI_messages.push(chat_message);

        let url = "https://api.openAI.com/v1/chat/completions";
        let data = {
          "model": openAI_model,
          "messages": openAI_messages
        };    

        const authHeader = "Bearer "+openAI_api_KEY;
        const options = {
          headers: {Authorization: authHeader},
          method: 'POST',
          contentType: 'application/json',
          payload: JSON.stringify(data)
        }
      
        let response = UrlFetchApp.fetch(url, options);
        let json = JSON.parse(response.getContentText());
        response = json["choices"][0]["message"]["content"];
        scriptProperties.setProperty(userId, response);
        try {
          let dataArray = eval(response);
          for (let i = 1; i < dataArray.length; i++) {
            let row = dataArray[i];
            line_response += i+'. '+row[1]+'：'+row[4]+'\n';
          }
          line_response += '\n請輸入[確定]，或輸入[取消]';
        } catch(error) {
          line_response = response;
        }        
    }
    let replyMessage = [{
      "type":"text",
      "text": line_response
    }]         
    sendMessageToLineBot(channel_access_TOKEN, replyToken, replyMessage);
  }
  return  ContentService.createTextOutput("Return = Finish");  
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

//https://stackoverflow.com/questions/22330542/can-i-use-google-visualization-api-to-query-a-spreadsheet-in-apps-script
function getSheetsQueryResult(fileId, sheetName, rangeA1, sqlText, arr) {
  var file = SpreadsheetApp.openById(fileId);
  var sheetId = file.getSheetByName(sheetName).getSheetId();

  var request = 'https://docs.google.com/spreadsheets/d/' + fileId + '/gviz/tq?gid=' + sheetId + '&range=' + rangeA1 + '&tq=' + encodeURIComponent(sqlText);
  var result = UrlFetchApp.fetch(request).getContentText();     
  // get json object
  var from = result.indexOf("{");
  var to   = result.lastIndexOf("}")+1;  
  var jsonText = result.slice(from, to);  
  var parsedText = JSON.parse(jsonText);      

  // get types
  var types = [];
  var addType_ = function(col) { types.push(col.type); }
  var cols = parsedText.table.cols;
  cols.forEach(addType_);    

  // loop rows
  var rows = parsedText.table.rows;  
  var result = [];  
  var rowQuery = [];
  var eltQuery = {};
  var row = [];
  var nRows = rows[0].c.length;
  var type = '';

  var mark;
  if (arr==1) {
    result.push(columnName_arr_1);
    mark = '"';
  } else {
    result.push(columnName_arr_0);
    mark = '';
  }

  for (var i = 0, l = rows.length; i < l; i++) {
    rowQuery = rows[i].c;
    row = [];
    // loop values   
    for (var k = 0; k < nRows; k++) {
      eltQuery = rowQuery[k];
      type = types[k];
      if (type === 'number') { 
        row.push(mark+parseInt(eltQuery.v)+mark); 
      } else if (type === 'boolean' || type === 'string') { 
        row.push(mark+eltQuery.v+mark); 
      } else { 
        row.push(mark+eltQuery.f+mark); 
      }     
    }  
    if (arr==1) {    
      row.push('""');
      result.push("["+row.join(",")+"]");      
    } else   
      result.push(row.join(","));
  }
  if (arr==1) 
    return "["+result.join(",")+"]";
  else 
    return result.join("\n");
}

function sendImagetoLineNotify(imageData, token, boundary) {
  var options = {
    "method" : "post",
    "contentType" : "multipart/form-data; boundary=" + boundary,
    "payload" : imageData,    
    "headers" : {"Authorization" : "Bearer " + token}
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
