// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function linebot_push_message(bot_token,bot_userid,bot_msg) {
    
    console.log(bot_msg);
    
    var input_url="https://script.google.com/macros/s/AKfycbwNu63z3ZFHo38wp9LBAwDGyG8tI46-5d-TpFLYFiOHDVOvmgN0/exec?token="+bot_token+"&userid="+bot_userid+bot_msg;
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
  
  function linebot_url_escape(type,parameter1,parameter2,parameter3,parameter4) {

    parameter1 = escape(parameter1).replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");
    parameter2 = escape(parameter2).replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");
    parameter3 = escape(parameter3).replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");
    parameter4 = escape(parameter4).replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B");

    //console.log(parameter1);

    if (type=='text')
      return '"&type='+type+'&text="+'+parameter1;
    else if (type=='sticker')
      return '"&type='+type+'&packageId="+'+parameter1+'+"&stickerId="+'+parameter2;
    else if (type=='image')
      return '"&type='+type+'&originalContentUrl="+'+parameter1+'+"&previewImageUrl="+'+parameter2;
    else if (type=='video')
      return '"&type='+type+'&originalContentUrl="+'+parameter1+'+"&previewImageUrl="+'+parameter2;
    else if (type=='audio')
      return '"&type='+type+'&originalContentUrl="+'+parameter1+'+"&duration="+'+parameter2;
    else if (type=='location')
      return '"&type='+type+'&title="+'+parameter1+'+"&address="+'+parameter2+'+"&latitude="+'+parameter3+'+"&longitude="+'+parameter4;
    console.log(code);
  }
  
  function linenotify(notify_token,notify_msg) {
  }

  window.linebot_notify = linebot_notify;
  window.linenotify = linenotify;

}(window, window.document));
