/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Google Script
https://github.com/fustyles/webduino/blob/gs/linebot_push_message.gs
https://github.com/fustyles/webduino/blob/gs/linenotify_push_message.gs
*/

+(function (window, document) {

  'use strict';

  function linebot_push_message(bot_token,bot_userid,bot_msg) {

    bot_msg = JSON.parse(bot_msg);
    bot_msg["token"]=bot_token;
    bot_msg["userid"]=bot_userid;
    
    bot_msg["start"]="1325437200";
    bot_msg["end"]="1325439000";
    bot_msg["prefix"]="alert";
    
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
        error: function(jqXHR, textStatus, errorThrown)
        {
          //console.log(errorThrown);
        }
     });
  }
  
  function linenotify_push_message(notify_token,notify_msg) {
    notify_msg = JSON.parse(notify_msg);
    notify_msg["token"]=notify_token;
    
    notify_msg["start"]="1325437200";
    notify_msg["end"]="1325439000";
    notify_msg["prefix"]="alert";
    
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
        error: function(jqXHR, textStatus, errorThrown)
        {
          //console.log(errorThrown);
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
        return '{"type":"'+type+'","text":"'+parameter1+'"}';
      else if (type=="sticker")
        return '{"type":"'+type+'","packageId":"'+parameter1+'","stickerId":"'+parameter2+'"}';
      else if (type=="image")
        return '{"type":"'+type+'","originalContentUrl":"'+parameter1+'","previewImageUrl":"'+parameter2+'"}';
      else if (type=="video")
        return '{"type":"'+type+'","originalContentUrl":"'+parameter1+'","previewImageUrl":"'+parameter2+'"}';
      else if (type=="audio")
        return '{"type":"'+type+'","originalContentUrl":"'+parameter1+'","duration":"'+parameter2+'"}';
      else if (type=="location")
        return '{"type":"'+type+'","title":"'+parameter1+'","address":"'+parameter2+'","latitude":"'+parameter3+'","longitude":"'+parameter4+'"}';
      else
        return '';
    } else if (line=="notify") {
      if (type=="text")
        return '{"type":"'+type+'","text":"'+parameter1+'"}';
      else if (type=="sticker")
        return '{"type":"'+type+'","text":"'+parameter1+'","packageId":"'+parameter2+'","stickerId":"'+parameter3+'"}';
      else if (type=="image")
        return '{"type":"'+type+'","text":"'+parameter1+'","originalContentUrl":"'+parameter2+'","previewImageUrl":"'+parameter3+'"}';
      else
        return '';
    }
  }

  window.linebot_push_message = linebot_push_message;
  window.linenotify_push_message = linenotify_push_message;
  window.line_url_escape = line_url_escape;

}(window, window.document));
