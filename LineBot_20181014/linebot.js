// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function createIframe(bot_token,bot_userid,bot_msg) {
    
    var input_url="https://script.google.com/macros/s/AKfycbwNu63z3ZFHo38wp9LBAwDGyG8tI46-5d-TpFLYFiOHDVOvmgN0/exec?USERID="+bot_userid+"&MESSAGE="+bot_msg+"&TOKEN="+bot_token;
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

  window.createIframe = createIframe;

}(window, window.document));
