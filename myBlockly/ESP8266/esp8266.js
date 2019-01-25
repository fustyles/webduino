// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var FeedBack=[];

function esp8266_SendCommand(url,cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  FeedBack.length=0;
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": url+"?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9,
      success: function(json)
      {
        console.log(json);
        json = eval(json);
        FeedBack="";
        for (var i=0;i<json.length;i++) {
          console.log(json[i]["esp8266"]);
          FeedBack.push(json[i]["esp8266"]);
        }
        console.log(FeedBack);
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        return "";
        //console.log(errorThrown);
      }
   });
   return FeedBack;
}
