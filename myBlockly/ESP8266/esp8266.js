// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var Response=[];
var getstate = false;

function esp8266_sendCommand(url,cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  Response=[];
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": url+"?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9,
      success: function(json)
      {
        json = eval(json);
        console.log(json);
        getstate = true;
        for (var i=0;i<json.length;i++) {
          Response.push(json[i]["data"]+"");
        }
        getstate = false;
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });
}

function esp8266_getResponse() {
 if (getstate == false) {
   var res = Response;
   Response=[];
   return res;
  }
  else
    return [];
}
