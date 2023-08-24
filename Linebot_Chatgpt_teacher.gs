/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2023/8/25 00:00
https://www.facebook.com/francefu
Line Bot Webhook & Google Apps script & ChatGTP API

若傳訊無回應：
1. openAI api額度已用盡或Key已失效。
2. 指令碼屬性值暫存歷史對話紀錄字串長度已達上限，請輸入"清除對話"清除歷史紀錄重新對話。
3. 指令碼屬性數超過上限，新增的Line bot使用者將無法記錄歷史對話，可付費升級為Google付費會員。
4. 不明原因，重新佈署或重建Apps script專案並開放存取權限。
*/

// Line bot
let channel_access_TOKEN = "";  

// chatGPT
let openAI_api_KEY = "";  // openAI

// 可記錄對話內容於試算表，若無需紀錄可空白不填
let spreadsheet_ID = "";  // 試算表ID
let sheet_Name = "對話紀錄";  // 工作表名稱
let sheet_Name1 = "聯絡簿事項";  // 聯絡簿
let sheet_Name2 = "考試成績";  // 考試成績

let openAI_model = "gpt-3.5-turbo";   // gpt-3.5-turbo, gpt-3.5-turbo-0301, gpt-4 (gpt-4限已升級plus帳號或已有試用資格帳號)
let openAI_assistant_behavior = "你是班級導師，回答家長有關班級管理與教育子女的問題，且符合以下規範：\n- 分析家長提問內容是否與教育有關或為問候語，若不是則果斷回覆「很抱歉，無法回答非教育問題！」，不要多做解釋。\n- 回覆的內容開頭要加上「我是ChatGPT導師助手」。";
let openAI_queryTitle = "家長提問：";
let reset_command = "reset";
let reset_response = "您好，已為您清除歷史對話紀錄，讓我們重新聊天吧！";
let userId_command = "id";
let contactbook_command = "book";
let grade_command = "grade";

// 系統變數
let userMessage = "";
let userId = "";
let eventType = "";
let replyToken = "";
let openAI_response;
let openAI_historical_messages;
let openAI_request_title = "";
  
function doPost(e) {

  let scriptProperties = PropertiesService.getScriptProperties();

  if (e.postData) {

    let msg = JSON.parse(e.postData.contents);
    userMessage = msg.events[0].message.text.trim();
    userId = msg.events[0].source.userId;
    eventType = msg.events[0].source.type;
    replyToken = msg.events[0].replyToken;     

    if (userMessage.toLowerCase()=="help"||userMessage=="導師") {
        openAI_response = "查詢聯絡簿："+contactbook_command+"\n查詢成績："+grade_command+"\n重設聊天："+reset_command+"\n查詢userId："+userId_command+"\n";
    }
    else if (userMessage == contactbook_command) {
        var myDate = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd");
        openAI_response = getSheetsQueryResult_(spreadsheet_ID, sheet_Name1, 'B:D', "select * where B >= date '" +myDate+ "'");
        openAI_response = openAI_response.join("\n");
    }
    else if (userMessage == grade_command) {
        var myDate = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd");
        openAI_response = getSheetsQueryResult_(spreadsheet_ID, sheet_Name2, 'B:E', "select C, D, E where C >= date '" +myDate+ "' and B = '" +userId+ "'");
        openAI_response = openAI_response.join("\n");
    }
    else if (userMessage == reset_command) {
       scriptProperties.setProperty(userId, '');
      openAI_response = reset_response;

      if (spreadsheet_ID&&sheet_Name)
        addDataToSpreadsheet(spreadsheet_ID, sheet_Name, userId, "user", reset_command); 
    }
    else if (userMessage == userId_command) {
       openAI_response = userId;
    }               
    else {
        
        userMessage = scriptProperties.getProperty(userId+"_querytitle") + "[ "+ userMessage + " ]";

        if (scriptProperties.getProperty(userId)==""||scriptProperties.getProperty(userId)==null) {
          openAI_historical_messages = [{"role": "system", "content": openAI_assistant_behavior}];
          scriptProperties.setProperty(userId+"_querytitle", openAI_queryTitle);

          if (spreadsheet_ID&&sheet_Name)
            addDataToSpreadsheet(spreadsheet_ID, sheet_Name, userId, "system", openAI_assistant_behavior);
        }
        else
          openAI_historical_messages = JSON.parse(scriptProperties.getProperty(userId)); 

        let chat_message = {};
        chat_message.role = "user";
        chat_message.content = userMessage;
        openAI_historical_messages.push(chat_message);

        if (spreadsheet_ID&&sheet_Name)
          addDataToSpreadsheet(spreadsheet_ID, sheet_Name, userId, "user", userMessage); 

        let url = "https://api.openAI.com/v1/chat/completions";

        let data = {
          "model": openAI_model,
          "messages": openAI_historical_messages
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
        openAI_response = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"");  
      
        chat_message = {};
        chat_message.role = "assistant";
        chat_message.content = json["choices"][0]["message"]["content"];
        openAI_historical_messages.push(chat_message);
        
        scriptProperties.setProperty(userId, JSON.stringify(openAI_historical_messages));

        if (spreadsheet_ID&&sheet_Name)
          addDataToSpreadsheet(spreadsheet_ID, sheet_Name, userId, "assistant", openAI_response); 
    }

    let replyMessage = [{
      "type":"text",
      "text": openAI_response
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

function addDataToSpreadsheet(spreadsheetId, sheetName, chatId, chatType, chatContent) {
  var dataDate = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd");
  var dataTime = Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss");
  var data = [dataDate, dataTime, chatId, chatType, chatContent];
  
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  sheet.insertRowBefore(1);
  sheet.getRange(1, 1, 1, data.length).setValues([data]);
}

//https://stackoverflow.com/questions/22330542/can-i-use-google-visualization-api-to-query-a-spreadsheet-in-apps-script
function getSheetsQueryResult_(fileId, sheetName, rangeA1, sqlText) {
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
  for (var i = 0, l = rows.length; i < l; i++)
  {
    rowQuery = rows[i].c;
    row = [];
    // loop values   
    for (var k = 0; k < nRows; k++)
    {
      eltQuery = rowQuery[k];
      type = types[k];
      if (type === 'number') { 
        row.push(parseInt(eltQuery.v)); 
      } else if (type === 'boolean' || type === 'string') { 
        row.push(eltQuery.v); 
      } else { 
        row.push(eltQuery.f); 
      }      
    }    
    result.push(row);
  }
  return result;
}
