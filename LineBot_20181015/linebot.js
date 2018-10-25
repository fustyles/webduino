// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function linebot_push_message(bot_token,bot_userid,bot_msg) {
    
    bot_token = escape(bot_token).replace(/\%5C/g,"fu01fu").replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");
    bot_userid = escape(bot_userid).replace(/\%5C/g,"fu01fu").replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");
    var url="https://script.google.com/macros/s/AKfycbwNu63z3ZFHo38wp9LBAwDGyG8tI46-5d-TpFLYFiOHDVOvmgN0/exec?token="+bot_token+"&userid="+bot_userid+bot_msg;
    var src = '<iframe src="' + url + '" style="width:0px;height:0px"></iframe>';
    
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
  
  function linenotify_push_message(bot_token,bot_msg) {
    
    bot_token = escape(bot_token).replace(/\%5C/g,"fu01fu").replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");
    var url="https://script.google.com/macros/s/AKfycbySgcM0Ghz9gywkUQtRiM76YvKVmLpV8SNKLN7eMWms8BNDN7c/exec?token="+bot_token+bot_msg;
    var src = '<iframe src="' + url + '" style="width:0px;height:0px"></iframe>';
    
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
  
  function linebot_url_escape(type,parameter1,parameter2,parameter3,parameter4) {

    parameter1 = escape(parameter1+"").replace(/\%5C/g,"fu01fu").replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");
    parameter2 = escape(parameter2+"").replace(/\%5C/g,"fu01fu").replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");
    parameter3 = escape(parameter3+"").replace(/\%5C/g,"fu01fu").replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");
    parameter4 = escape(parameter4+"").replace(/\%5C/g,"fu01fu").replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");

    if (type=="text")
      return "&type="+type+"&text="+parameter1;
    else if (type=="sticker")
      return "&type="+type+"&packageId="+parameter1+"&stickerId="+parameter2;
    else if (type=="image")
      return "&type="+type+"&originalContentUrl="+parameter1+"&previewImageUrl="+parameter2;
    else if (type=="video")
      return "&type="+type+"&originalContentUrl="+parameter1+"&previewImageUrl="+parameter2;
    else if (type=="audio")
      return "&type="+type+"&originalContentUrl="+parameter1+"&duration="+parameter2;
    else if (type=="location")
      return "&type="+type+"&title="+parameter1+"&address="+parameter2+"&latitude="+parameter3+"&longitude="+parameter4;
    else
      return "";
  }
  
  function linenotify_url_escape(type,parameter1,parameter2) {

    parameter1 = escape(parameter1+"").replace(/\%5C/g,"fu01fu").replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");
    parameter2 = escape(parameter2+"").replace(/\%5C/g,"fu01fu").replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");

    if (type=="text")
      return "&type="+type+"&text="+parameter1;
    else if (type=="sticker")
      return "&type="+type+"&packageId="+parameter1+"&stickerId="+parameter2;
    else if (type=="image")
      return "&type="+type+"&originalContentUrl="+parameter1+"&previewImageUrl="+parameter2;
    else
      return "";
  }
  
  function linenotify(notify_token,notify_msg) {
  }

  window.linebot_push_message = linebot_push_message;
  window.linenotify_push_message = linenotify_push_message;
  window.linebot_url_escape = linebot_url_escape;
  window.linenotify_url_escape = linenotify_url_escape;
  window.linenotify = linenotify;

}(window, window.document));
