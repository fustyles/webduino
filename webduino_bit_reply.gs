function doPost(e) {
  var CHANNEL_ACCESS_TOKEN = 'xxxxx';
  var msg = JSON.parse(e.postData.contents);
  console.log("msg="+msg.events[0]);

  if (Number(msg.events[0].message.text)>=1&&Number(msg.events[0].message.text)<=25) {
    var response = "https://eocodu03flx4lkrzl29rca-on.drv.tw/MyWeb/LineControl.html?gbpSD8CLAiMDTkahK3&"+msg.events[0].message.text;
    var userMessage = response;
  }
  else
    var userMessage = "Command is not defined";
    
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