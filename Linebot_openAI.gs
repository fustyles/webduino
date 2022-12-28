/*
Author : ChungYi Fu (Kaohsiung, Taiwan)   2022/12/29 01:55
https://www.facebook.com/francefu
*/

let BOT_ACCESS_TOKEN = "";
let openaiToken = "";
let maxTokens = 256;
let userMessage = "";
let userId = "";
let eventType = "";
let replyToken = "";
  
function doPost(e) {

  if (e.postData) {

    var msg = JSON.parse(e.postData.contents);
    userMessage = msg.events[0].message.text.trim();
    userId = msg.events[0].source.userId;
    eventType = msg.events[0].source.type;
    replyToken = msg.events[0].replyToken;  

    var url = "https://api.openai.com/v1/completions";

    var data = {
      "model": "text-davinci-003",
      "prompt": userMessage,
      "temperature": 0,
      "max_tokens": maxTokens,
      "frequency_penalty": 0,
      "presence_penalty": 0.6,
      "top_p": 1.0,
      "n": 1,
      //"stream": false,
      //"logprobs": null,
      //"stop": "\n"	  
    };    

    const authHeader = "Bearer "+openaiToken;
    const options = {
      headers: {Authorization: authHeader},
      method: 'POST',
      contentType: 'application/json',
      payload: JSON.stringify(data)
    }
    let response = UrlFetchApp.fetch(url, options);
    let json = JSON.parse(response.getContentText());
    let openAI_response = json["choices"][0]["text"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");    

    let replyMessage = [{
      "type":"text",
      "text": openAI_response
    }]
    sendMessageToLineBot(BOT_ACCESS_TOKEN, replyToken, replyMessage);
  }

  return  ContentService.createTextOutput("Return = Finish");  
}

function sendMessageToLineBot(accessToken, replyToken, reply_message) {

  var url = 'https://api.line.me/v2/bot/message/reply';
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