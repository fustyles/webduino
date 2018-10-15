// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function linebot_notify(bot_token,bot_userid,bot_msg) {
    
    var input_url="https://script.google.com/macros/s/AKfycbwNu63z3ZFHo38wp9LBAwDGyG8tI46-5d-TpFLYFiOHDVOvmgN0/exec?TOKEN="+bot_token+"&USERID="+bot_userid+"&MESSAGE="+bot_msg;
    var src = '<iframe src="' + input_url + '" style="width:0px;height:0px"></iframe>';
    
    if (document.getElementById("bot_iframe"))
    {
          document.getElementById("bot_iframe").style.left = '0px';
          document.getElementById("bot_iframe").style.top = '0px';
          document.getElementById("bot_iframe").style.display = 'block';
          document.getElementById("bot_iframe").innerHTML = src;
    }
    else
    {
        var div = document.createElement('div');
        div.id = "bot_iframe";
        div.style.position = 'absolute';      
        div.style.left = '0px';
        div.style.top = '0px';
        div.style.zindex='9999';      
        div.innerHTML = src;
        document.body.appendChild(div);
    }
  }
  
  function linenotify(notify_token,notify_msg) {
  }

  window.linebot_notify = linebot_notify;
  window.linenotify = linenotify;

}(window, window.document));

/*
// Google Apps Script
// https://script.google.com/macros/s/xxxxx/exec?USERID=xxxxx&MESSAGE=xxxxx&TOKEN=xxxxx

function doGet(e) {
  var token = e.parameter.TOKEN.replace(/\s+/g,"+");
  var userid = e.parameter.USERID;
  var msg = e.parameter.MESSAGE;
  
  //console.log("token="+token);
  //console.log("userid="+userid);
  //console.log("msg="+msg);    
  
  var url = 'https://api.line.me/v2/bot/message/push';
  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + token,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to':  userid,
      'messages': [{
        type:'text',
        text: msg
      }]
    }),
  });  
  
  var textOutput = ContentService.createTextOutput(msg)
  return textOutput
}
*/
