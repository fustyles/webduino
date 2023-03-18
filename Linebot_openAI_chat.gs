/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2023/3/18 20:00
https://www.facebook.com/francefu
*/

let channel_access_TOKEN = "";
let openAI_api_KEY = "";

let userMessage = "";
let userId = "";
let eventType = "";
let replyToken = "";

let openAI_response;
let openai_response_chat_message;
let openai_assistant_behavior = "你使用的語言是繁體中文的專業助理";
let clear_chat_message_command = "清除對話";
  
function doPost(e) {

  var scriptProperties = PropertiesService.getScriptProperties();

  if (e.postData) {

    let msg = JSON.parse(e.postData.contents);
    userMessage = msg.events[0].message.text.trim();
    userId = msg.events[0].source.userId;
    eventType = msg.events[0].source.type;
    replyToken = msg.events[0].replyToken;  

    if (userMessage != clear_chat_message_command) {
      openai_response_chat_message = [{"role": "system", "content": openai_assistant_behavior}];
      if (scriptProperties.getProperty('openAI_chat')!="")
        openai_response_chat_message = JSON.parse(scriptProperties.getProperty('openAI_chat')); 

      var char_message = {};
      char_message.role = "user";
      char_message.content = userMessage;
      openai_response_chat_message.push(char_message);

      let url = "https://api.openai.com/v1/chat/completions";

      let data = {
        "model": "gpt-3.5-turbo",
        "messages": openai_response_chat_message
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
      openAI_response = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");  
    
      char_message = {};
      char_message.role = "assistant";
      char_message.content = json["choices"][0]["message"]["content"];
      openai_response_chat_message.push(char_message);
      scriptProperties.setProperty('openAI_chat', JSON.stringify(openai_response_chat_message));
    }
    else {
      scriptProperties.setProperty('openAI_chat', '');
      openAI_response = "您好，已為您清除歷史對話紀錄，讓我們重新聊天吧！";
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
