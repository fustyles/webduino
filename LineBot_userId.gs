// Line Bot TOKEN
let channel_access_TOKEN = "";

let getLinebotData = {
  "userMessage": "",
  "userId": "",
  "groupId": "",
  "eventType": "",
  "replyToken": ""
}

function doPost(e) {
    let linebot_response = "";
    if (e.postData) {
        let msg = JSON.parse(e.postData.contents);
        getLinebotData.userMessage = msg.events[0].message.text.trim();
        getLinebotData.userId = msg.events[0].source.userId;
        getLinebotData.groupId = msg.events[0].source.groupId;
        getLinebotData.eventType = msg.events[0].source.type;
        getLinebotData.replyToken = msg.events[0].replyToken;

        if (getLinebotData.userMessage=="id") {
            linebot_response = getLinebotData.userId; 
        } else if (getLinebotData.userMessage=="gid") {
            linebot_response = getLinebotData.groupId; 
        }
        sendMessageToLineBot(channel_access_TOKEN, getLinebotData.replyToken, linebot_response);
    }
    return ContentService.createTextOutput("ok");
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
