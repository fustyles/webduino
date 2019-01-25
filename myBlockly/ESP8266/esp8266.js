// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var Response=[];

function esp8266_sendCommand(url,cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  Response.length=0;
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": url+"?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9,
      success: function(json)
      {
        json = eval(json);
        for (var i=0;i<json.length;i++) {
          Response.push(json[i]["esp8266"]+"");
        }
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });
}

function esp8266_getResponse() {
 console.log("respone="+Response);
 var res = Response;
 Response.length=0;
 console.log("res"+res);
 return res;
}
