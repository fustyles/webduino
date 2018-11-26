// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function createIframe(key,field1,field2,field3,field4,field5,field6,field7,field8) {
    
    key = escape(key+"");
    field1 = escape(field1+"");
    field2 = escape(field2+"");
    field3 = escape(field3+"");
    field4 = escape(field4+"");
    field5 = escape(field5+"");
    field6 = escape(field6+"");
    field7 = escape(field7+"");
    field8 = escape(field8+"");
    
    var input_url="https://api.thingspeak.com/update?api_key="+key+"&field1="+field1+"&field2="+field2+"&field3="+field3+"&field4="+field4+"&field5="+field5+"&field6="+field6+"&field7="+field7+"&field8="+field8;
    var src = '<iframe src="' + input_url + '" style="width:0px;height:0px"></iframe>';
    
    if (document.getElementById("thingspeak_iframe"))
    {
          document.getElementById("thingspeak_iframe").style.left = '0px';
          document.getElementById("thingspeak_iframe").style.top = '0px';
          document.getElementById("thingspeak_iframe").style.display = 'block';
          document.getElementById("thingspeak_iframe").innerHTML = src;
    }
    else
    {
        var div = document.createElement('div');
        div.id = "thingspeak_iframe";
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
