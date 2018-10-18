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
      //console.log(value_parameter1);

    value_parameter1 = value_parameter1.replace(/\\\'/g,"'");
    value_parameter2 = value_parameter2.replace(/\\\'/g,"'");
    value_parameter3 = value_parameter3.replace(/\\\'/g,"'");
    value_parameter4 = value_parameter4.replace(/\\\'/g,"'");

    //console.log(value_parameter1);

    if ((escape(value_parameter1).indexOf("%27")==0)&&(escape(value_parameter1).lastIndexOf("%27")==escape(value_parameter1).length-3))
    {
      value_parameter1 = '"'+value_parameter1.substr(1,value_parameter1.length-2).replace(/\"/g,'fu01fu')+'"';
      value_parameter1 = escape(value_parameter1).replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B").replace(/\%22/g,'"').replace(/fu01fu/g,'%22');
    }
    else
      value_parameter1 = 'escape('+value_parameter1+').replace(/\\%26/g,"fu02fu").replace(/\\%23/g,"fu03fu").replace(/\\+/g,"%2B")';
    if ((escape(value_parameter2).indexOf("%27")==0)&&(escape(value_parameter2).lastIndexOf("%27")==escape(value_parameter2).length-3))
    {
      value_parameter2 = '"'+value_parameter2.substr(1,value_parameter2.length-2).replace(/\"/g,'fu01fu')+'"';
      value_parameter2 = escape(value_parameter2).replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B").replace(/\%22/g,'"').replace(/fu01fu/g,'%22');
    }
    else
      value_parameter2 = 'escape('+value_parameter2+').replace(/\\%26/g,"fu02fu").replace(/\\%23/g,"fu03fu").replace(/\\+/g,"%2B")';
    if ((escape(value_parameter3).indexOf("%27")==0)&&(escape(value_parameter3).lastIndexOf("%27")==escape(value_parameter3).length-3))
    {
      value_parameter3 = '"'+value_parameter3.substr(1,value_parameter3.length-2).replace(/\"/g,'fu01fu')+'"';
      value_parameter3 = escape(value_parameter3).replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B").replace(/\%22/g,'"').replace(/fu01fu/g,'%22');
    }
    else
      value_parameter3 = 'escape('+value_parameter3+').replace(/\\%26/g,"fu02fu").replace(/\\%23/g,"fu03fu").replace(/\\+/g,"%2B")';
    if ((escape(value_parameter4).indexOf("%27")==0)&&(escape(value_parameter4).lastIndexOf("%27")==escape(value_parameter4).length-3))
    {
      value_parameter4 = '"'+value_parameter4.substr(1,value_parameter4.length-2).replace(/\"/g,'fu01fu')+'"';
      value_parameter4 = escape(value_parameter4).replace(/\%26/g,"fu02fu").replace(/\%23/g,"fu03fu").replace(/\+/g,"%2B").replace(/\%22/g,'"').replace(/fu01fu/g,'%22');
    }
    else
      value_parameter4 = 'escape('+value_parameter4+').replace(/\\%26/g,"fu02fu").replace(/\\%23/g,"fu03fu").replace(/\\+/g,"%2B")';

    //console.log(value_parameter1);

    if (value_type=='text')
      var code = '"&type='+value_type+'&text="+'+value_parameter1;
    else if (value_type=='sticker')
      var code = '"&type='+value_type+'&packageId="+'+value_parameter1+'+"&stickerId="+'+value_parameter2;
    else if (value_type=='image')
      var code = '"&type='+value_type+'&originalContentUrl="+'+value_parameter1+'+"&previewImageUrl="+'+value_parameter2;
    else if (value_type=='video')
      var code = '"&type='+value_type+'&originalContentUrl="+'+value_parameter1+'+"&previewImageUrl="+'+value_parameter2;
    else if (value_type=='audio')
      var code = '"&type='+value_type+'&originalContentUrl="+'+value_parameter1+'+"&duration="+'+value_parameter2;
    else if (value_type=='location')
      var code = '"&type='+value_type+'&title="+'+value_parameter1+'+"&address="+'+value_parameter2+'+"&latitude="+'+value_parameter3+'+"&longitude="+'+value_parameter4;
    console.log(code);
  }
  
  function linenotify(notify_token,notify_msg) {
  }

  window.linebot_notify = linebot_notify;
  window.linenotify = linenotify;

}(window, window.document));
