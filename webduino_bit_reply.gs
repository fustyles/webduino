function doPost(e) {
  var CHANNEL_ACCESS_TOKEN = 'xxxxx';
  var msg = JSON.parse(e.postData.contents);
  var userMessage = "Command: " + msg.events[0].message.text;
    
  var replyToken = msg.events[0].replyToken;  
  if (typeof replyToken === 'undefined') {
    return;
  }

  var url = 'https://api.line.me/v2/bot/message/reply';
  UrlFetchApp.fetch(url, {
      'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': userMessage,
      }],
    }),
  });
}
