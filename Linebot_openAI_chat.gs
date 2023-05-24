/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2023/5/24 18:30
https://www.facebook.com/francefu
Line Bot Webhook & Google Apps script & ChatGTP API
*/

let channel_access_TOKEN = "";  // Line bot
let openAI_api_KEY = "";  // openAI

let openAI_model = "gpt-3.5-turbo";   // gpt-3.5-turbo, gpt-3.5-turbo-0301, gpt-4 (gpt-4限plus帳號或已有試用資格帳號)
let openAI_assistant_behavior = "你是使用繁體中文語言的專業助理";
let reset_command = "清除對話";
let reset_response = "您好，已為您清除歷史對話紀錄，讓我們重新聊天吧！";

// 可記錄對話內容於試算表，若無需紀錄可空白不填
let spreadsheet_ID = "";  // 試算表ID
let sheet_Name = "";  // 工作表名稱

// 系統變數
let userMessage = "";
let userId = "";
let eventType = "";
let replyToken = "";
let openAI_response;
let openAI_historical_messages;
  
function doPost(e) {

  let scriptProperties = PropertiesService.getScriptProperties();

  if (e.postData) {

    let msg = JSON.parse(e.postData.contents);
    userMessage = msg.events[0].message.text.trim();
    userId = msg.events[0].source.userId;
    eventType = msg.events[0].source.type;
    replyToken = msg.events[0].replyToken;  

    if (userMessage != reset_command) {
      if (scriptProperties.getProperty(userId)==""||scriptProperties.getProperty(userId)==null) {
        openAI_historical_messages = [{"role": "system", "content": openAI_assistant_behavior}];
        if (spreadsheet_ID&&sheet_Name)
          addDataToSpreadsheet(spreadsheet_ID, sheet_Name, "system", openAI_assistant_behavior);
      }
      else
        openAI_historical_messages = JSON.parse(scriptProperties.getProperty(userId)); 

      let chat_message = {};
      chat_message.role = "user";
      chat_message.content = userMessage;
      openAI_historical_messages.push(chat_message);
      if (spreadsheet_ID&&sheet_Name)
        addDataToSpreadsheet(spreadsheet_ID, sheet_Name, "user", userMessage); 

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
        addDataToSpreadsheet(spreadsheet_ID, sheet_Name, "assistant", openAI_response);      
    } else {
      scriptProperties.setProperty(userId, '');
      openAI_response = reset_response;
      if (spreadsheet_ID&&sheet_Name)
        addDataToSpreadsheet(spreadsheet_ID, sheet_Name, "user", reset_command);      
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

function addDataToSpreadsheet(spreadsheetId, sheetName, chatType, chatContent) {
  var dataDate = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd");
  var dataTime = Utilities.formatDate(new Date(), "GMT+8", "HH:mm:ss");
  var data = [dataDate, dataTime, chatType, chatContent]; // 要新增的資料
  
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  sheet.insertRowBefore(1); // 在第一列前插入一列
  sheet.getRange(1, 1, 1, data.length).setValues([data]); // 將資料寫入第一列
}