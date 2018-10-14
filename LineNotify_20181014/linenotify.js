// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function createIframe(ifttt_event,ifttt_key,ifttt_value1,ifttt_value2,ifttt_value3) {
    
    var input_url="https://maker.ifttt.com/trigger/"+ifttt_event+"/with/key/"+ifttt_key+"?value1="+ifttt_value1+"&value2="+ifttt_value2+"&value3="+ifttt_value3;
    var src = '<iframe src="' + input_url + '" style="width:0px;height:0px"></iframe>';
    
    if (document.getElementById("ifttt_iframe"))
    {
          document.getElementById("ifttt_iframe").style.left = '0px';
          document.getElementById("ifttt_iframe").style.top = '0px';
          document.getElementById("ifttt_iframe").style.display = 'block';
          document.getElementById("ifttt_iframe").innerHTML = src;
    }
    else
    {
        var div = document.createElement('div');
        div.id = "ifttt_iframe";
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
