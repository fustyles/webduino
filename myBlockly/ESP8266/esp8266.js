// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var FeedBack="";

function esp8266_SendCommand(url,cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  FeedBack="";
  var data = $.ajax({
      "type": "POST",
      "dataType": "html",
      "url": url+"?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9,
      success: function(html)
      {
        //console.log(html);
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   }).responseText;
  console.log(data);
  FeedBack=data;
  console.log(FeedBack);
}
