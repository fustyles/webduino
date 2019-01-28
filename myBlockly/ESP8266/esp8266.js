// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var esp8266_Response=[];
var esp8266_getstate = false;

function esp8266_sendCommand(url,cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  Response=[];
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": url+"?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9,
      success: function(json)
      {
        json = eval(json);
        //console.log(json);
        esp8266_getstate = true;
        for (var i=0;i<json.length;i++) {
          esp8266_Response.push(json[i]["data"]+"");
        }
        esp8266_getstate = false;
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });
}

function esp8266_getResponse() {
 if (esp8266_getstate == false) {
   var res = esp8266_Response;
   esp8266_Response=[];
   return res;
  }
  else
    return [];
}

function esp8266_clear() {
 esp8266_Response=[];
}
