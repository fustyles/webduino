// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function linebot_push_message(bot_token,bot_userid,bot_msg) {
    
    bot_msg = JSON.parse(bot_msg);
    bot_msg["token"]=bot_token;
    bot_msg["userid"]=bot_userid;
    var input_url="https://script.google.com/macros/s/AKfycbwNu63z3ZFHo38wp9LBAwDGyG8tI46-5d-TpFLYFiOHDVOvmgN0/exec";
    var data = $.ajax({
        "type": "POST",
        "dataType": "jsonp",
        "url": input_url,
        "data":bot_msg,
        success: function(jsonp)
        {
          console.log(jsonp);
        },
        error: function(exception)
        {
          console.log("");
        }
     });
  }
  
  function linenotify_push_message(notify_token,notify_msg) {
    notify_msg = JSON.parse(notify_msg);
    notify_msg["token"]=notify_token;
    var input_url="https://script.google.com/macros/s/AKfycbySgcM0Ghz9gywkUQtRiM76YvKVmLpV8SNKLN7eMWms8BNDN7c/exec";
    var data = $.ajax({
        "type": "POST",
        "dataType": "jsonp",
        "url": input_url,
        "data":notify_msg,
        success: function(jsonp)
        {
          console.log(jsonp);
        },
        error: function(exception)
        {
          console.log("");
        }
     });
  }  
  
  function line_url_escape(line,type,parameter1,parameter2,parameter3,parameter4) {
    
    parameter1 = (parameter1+"").replace(/\'/g,"%27").replace(/\"/g,"%22");
    parameter2 = (parameter2+"").replace(/\'/g,"%27").replace(/\"/g,"%22");
    parameter3 = (parameter3+"").replace(/\'/g,"%27").replace(/\"/g,"%22");
    parameter4 = (parameter4+"").replace(/\'/g,"%27").replace(/\"/g,"%22");
    
    if (line=="bot") {
      if (type=="text")
        var para='{"type":"'+type+'","text":"'+parameter1+'"}';
      else if (type=="sticker")
        var para='{"type":"'+type+'","packageId":"'+parameter1+'","stickerId":"'+parameter2+'"}';
      else if (type=="image")
        var para='{"type":"'+type+'","originalContentUrl":"'+parameter1+'","previewImageUrl":"'+parameter2+'"}';
      else if (type=="video")
        var para='{"type":"'+type+'","originalContentUrl":"'+parameter1+'","previewImageUrl":"'+parameter2+'"}';
      else if (type=="audio")
        var para='{"type":"'+type+'","originalContentUrl":"'+parameter1+'","duration":"'+parameter2+'"}';
      else if (type=="location")
        var para='{"type":"'+type+'","title":"'+parameter1+'","address":"'+parameter2+'","latitude":"'+parameter3+'","longitude":"'+parameter4+'"}';
      else
        var para="";
    } else if (line=="notify") {
      if (type=="text")
        var para='{"type":"'+type+'","text":"'+parameter1+'"}';
      else if (type=="sticker")
        var para='{"type":"'+type+'","text":"'+parameter1+'","packageId":"'+parameter2+'","stickerId":"'+parameter3+'"}';
      else if (type=="image")
        var para='{"type":"'+type+'","text":"'+parameter1+'","originalContentUrl":"'+parameter2+'","previewImageUrl":"'+parameter3+'"}';
      else
        var para="";
    }
    return para;
  }

  window.linebot_push_message = linebot_push_message;
  window.linenotify_push_message = linenotify_push_message;
  window.line_url_escape = line_url_escape;

}(window, window.document));
