// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var webusb_Response=[];
var webusb_getstate = false;

function webusb_sendCommand(cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  Response=[];
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": "?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9,
      success: function(json)
      {
        json = eval(json);
        //console.log(json);
        webusb_getstate = true;
        for (var i=0;i<json.length;i++) {
          webusb_Response.push(json[i]["data"]+"");
        }
        webusb_getstate = false;
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });
}

function webusb_getResponse() {
 if (webusb_getstate == false) {
   var res = webusb_Response;
   webusb_Response=[];
   return res;
  }
  else
    return [];
}

function webusb_clearData() {
 webusb_Response=[];
}
