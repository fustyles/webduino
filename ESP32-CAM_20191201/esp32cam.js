// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

var esp32cam_Response=[];
var esp32cam_getstate = false;

function esp32cam_sendCommand(url,cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  if (!document.getElementById('metainsecure')) {
    var el = document.createElement('meta');
    el.id = 'metainsecure';
    el.setAttribute('http-equiv', 'Content-Security-Policy');
    el.setAttribute('content', 'upgrade-insecure-requests');
    document.head.append(el);
  }
  
  console.log(url+"/control?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9);
  esp32cam_Response=[];
  var data = $.ajax({    
      "type": "POST",
      "dataType": "json",
      "url": url+"/control?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9,
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
        esp32cam_Response.push("-1");
      }
   });
}

function esp32cam_imgsrc(url) {
  if (document.getElementById("gameimage_esp32-cam"))
    document.getElementById("gameimage_esp32-cam").src = url;
  else {
    var obj = document.createElement('img');
    obj.style.position = "absolute";
    obj.id = "gameimage_esp32-cam";
    obj.src = url;
    obj.style.zIndex = 9999;
    obj.style.left = '0px';
    obj.style.top = '0px';
    obj.style.display = "block";
    obj.crossOrigin = "anonymous";
    obj.draggable="true";
    obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('text/plain',event.target.id);");
    document.body.appendChild(obj); 
  }
}
  
function esp32cam_getAngle(val) {
  return 1700+(8000-1700)*val/180;
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
  
function esp32cam_iframe(input_url,input_width,input_height,input_left,input_top,input_zindex) {

  var iframe = '<iframe src="' + input_url + '" style="width:' + input_width + 'px;height:' + input_height + 'px" frameborder="0" allow="autoplay; fullscreen; geolocation; microphone; camera"></iframe>';

  if (document.getElementById("gamediv_esp32cam")) {
        document.getElementById("gamediv_esp32cam").style.left = input_left + 'px';
        document.getElementById("gamediv_esp32cam").style.top = input_top + 'px';
        document.getElementById("gamediv_esp32cam").style.zIndex = input_zindex;
        document.getElementById("gamediv_esp32cam").innerHTML = iframe;
  }
  else {
      var div = document.createElement('div');
      div.id = "gamediv_esp32cam";
      div.style.position = 'absolute';      
      div.style.left = input_left + 'px';
      div.style.top = input_top + 'px';
      div.style.zIndex = input_zindex;   
      div.style.display = 'block';
      div.innerHTML = iframe;
      document.body.appendChild(div);
  }
}

window.esp32cam_sendCommand = esp32cam_sendCommand;
window.esp32cam_imgsrc = esp32cam_imgsrc;
window.esp32cam_getAngle = esp32cam_getAngle;
window.esp32cam_getResponse = esp32cam_getResponse;
window.esp32cam_clearData = esp32cam_clearData;
window.esp32cam_iframe = esp32cam_iframe;
  
}(window, window.document));
