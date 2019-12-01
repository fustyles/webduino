// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

var esp32cam_Response=[];
var esp32cam_getstate = false;

function esp32cam_sendCommand(url,cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  Response=[];
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": url+"?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9,
      success: function(json)
      {
        json = eval(json);
        //console.log(json);
        esp32cam_getstate = true;
        for (var i=0;i<json.length;i++) {
          esp32cam_Response.push(json[i]["data"]+"");
        }
        esp32cam_getstate = false;
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });
}

function esp32cam_manager(url,cmd) {
  Response=[];
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": url+"?"+cmd,
      success: function(json)
      {
        json = eval(json);
        //console.log(json);
        if (json.length==1) {
          console.log(json[0]["data"]);
        }
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });
}

function esp32cam_getResponse() {
 if (esp32cam_getstate == false) {
   var res = esp32cam_Response;
   esp32cam_Response=[];
   return res;
  }
  else
    return [];
}

function esp32cam_clearData() {
 esp32cam_Response=[];
}

  window.esp32cam_sendCommand = esp32cam_sendCommand;
  window.esp32cam_manager = esp32cam_manager;
  window.esp32cam_getResponse = esp32cam_getResponse;
  window.esp32cam_clearData = esp32cam_clearData;
  
}(window, window.document));