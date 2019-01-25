// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var FeedBack="";

function SendCommand(ip,cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  FeedBack="";
  var url = ip+"?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9;
  var data = $.ajax({
      "type": "POST",
      "dataType": "html",
      "url": url,
      },
      success: function(html)
      {
        FeedBack=html;
        console.log(html);
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });
}
