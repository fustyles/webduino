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

function esp32cam_getstill(url) {
  Response=[];
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": url+"?getstill",
      success: function(json)
      {
        json = eval(json);
        console.log(json);
        if (json.length>0) {
          //console.log(json[0]["data"]);
          if (document.getElementById("gameimage_getstill"))
            document.getElementById("gameimage_getstill").src = json[0]["data"];
          else {
            var obj = document.createElement('img');
            obj.style.position = "absolute";
            obj.id = "gameimage_getstill";
            obj.src = json[0]["data"];
            obj.style.zIndex = 9999;
            obj.style.left = '0px';
            obj.style.top = '0px';
            obj.draggable="true";
            obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
            document.body.appendChild(obj); 
          }
        }
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        console.log(errorThrown);
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
  window.esp32cam_getstill = esp32cam_getstill;
  window.esp32cam_getResponse = esp32cam_getResponse;
  window.esp32cam_clearData = esp32cam_clearData;
  
}(window, window.document));
