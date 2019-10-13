// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var region = document.getElementById('region');
var video = document.getElementById('video');
var canvas = document.getElementById('gamecanvas_azureclassifyimage'); 
var context = canvas.getContext('2d');
var result = document.getElementById('result');
var Prediction_key = "";
var Prediction_url = "";  
var Prediction_result = ""; 
var Prediction_returnResult = "";
var showTime = 3000;
var func = "";  
var max="";
var maxName="";  

function azureclassifyimage_settings(input_endpointhost, input_predictionKey, input_projectId, input_iterationname, input_function){
  func = input_function;
  if (input_endpointhost.toLowerCase().indexOf("http")==0)
    Prediction_url = input_endpointhost + "/customvision/v3.0/Prediction/"+input_projectId+"/"+input_function+"/iterations/"+input_iterationname+"/image"
  else
    Prediction_url = "https://" + input_endpointhost + "/customvision/v3.0/Prediction/"+input_projectId+"/"+input_function+"/iterations/"+input_iterationname+"/image"
  Prediction_key = input_predictionKey;
  console.log(Prediction_url); 
}

function azureclassifyimage_detect(input_showtime){
  showTime = input_showtime*1000;
  result.innerHTML = "";
  Prediction_result = "";
  Prediction_returnResult = "";
  azureclassifyimage_detectvideo();
}
  
function azureclassifyimage_get(){
  return Prediction_returnResult.split("<br>");
}
  
function azureclassifyimage_get_objectdata(input_index){
  if (Prediction_returnResult=="Error,0"||Prediction_returnResult=="")
    return "";
  else {
    if (Prediction_returnResult.split("<br>")[input_index-1])
      return Prediction_returnResult.split("<br>")[input_index-1].split(",");
    else
      return "";
  }
}
	
function azureclassifyimage_get_objects(){
  if (Prediction_returnResult=="Error,0"||Prediction_returnResult=="")
    return 0;
  else {
    return Prediction_returnResult.split("<br>").length;
  }
}
  
function azureclassifyimage_max(input_property){
  if (input_property=="tagName")
    return maxName;
  else if (input_property=="probability")
    return max;
}

function azureclassifyimage_video(input_width, input_height, input_result, input_opacity) {
  video.width = input_width;
  video.height = input_height;
  result.style.display = input_result;
  region.style.opacity = input_opacity;
}
  
function azureclassifyimage_detectvideo() {
  if (Prediction_key == ""||Prediction_url == "") return;    

  video.style.display = "none";
  canvas.style.display = "block";
  context.drawImage(video, 0, 0, video.width, video.height);
  const DataURL = canvas.toDataURL('image/png');
  const Binary = atob(DataURL.split(',')[1]);
  const mime = DataURL.split(',')[0].split(':')[1].split(';')[0];
  const Unicode = [];
  for (let i = 0; i < Binary.length; i++) {
    Unicode.push(Binary.charCodeAt(i));
  }
  const Uint8 = new Uint8Array(Unicode);
  const photo = new Blob([Uint8], { type: mime });

  // Perform the REST API call.
  $.ajax({
    url: Prediction_url,
    beforeSend: function(xhrObj){
    xhrObj.setRequestHeader("Content-Type","application/octet-stream");
    xhrObj.setRequestHeader("Prediction-Key", Prediction_key);     
    },
    type: "POST",
    data: photo,
    processData: false
  })
  .done(function(json) {
    json = eval(json);
    console.log(JSON.stringify(json));
    result.innerHTML = "";
    Prediction_result = "";
    Prediction_returnResult = "";
    max="";
    maxName="";  
    try {
      for (var i in json["predictions"]) {
        if (maxName=="") {
          maxName = json["predictions"][i]["tagName"];
          max = Number(json["predictions"][i]["probability"]);
        }
        
        if (Number(json["predictions"][i]["probability"])>max) { 
          maxName = json["predictions"][i]["tagName"];          
          max = Number(json["predictions"][i]["probability"]);
        }
        Prediction_result += json["predictions"][i]["tagName"]+","+json["predictions"][i]["probability"];
        if (i<json["predictions"].length-1) Prediction_result += "<br>";
        
        if (func=="detect") {
          context.lineWidth = "1";
          context.strokeStyle = "red";
          context.beginPath();
          context.rect(json["predictions"][i]["boundingBox"]["left"]*video.width, json["predictions"][i]["boundingBox"]["top"]*video.height, json["predictions"][i]["boundingBox"]["width"]*video.width, json["predictions"][i]["boundingBox"]["height"]*video.height);
          context.stroke(); 
          context.font = "12px Arial";
          context.fillStyle = "#99FF99";
          context.fillText(json["predictions"][i]["tagName"]+", "+json["predictions"][i]["probability"], json["predictions"][i]["boundingBox"]["left"]*video.width,  json["predictions"][i]["boundingBox"]["top"]*video.height);     			
        }
      }
      
      if (func=="classify") {
        context.font = "20px Arial";
        context.fillStyle = "#99FF99";
        context.fillText(maxName, 30,  30);
        context.fillText(max, 30,  60); 
      }      
    }
    catch (e) {
      Prediction_result = "Error,0";
      console.log(e);
    }
    Prediction_returnResult = Prediction_result;
    result.innerHTML = JSON.stringify(json);
    setTimeout(function(){canvas.style.display = "none"; video.style.display = "block";}, showTime);
  })
  .fail(function() {
    Prediction_returnResult = "Error,0";
    setTimeout(function(){canvas.style.display = "none"; video.style.display = "block";}, 0);
    console.log("error");
  });
}

window.azureclassifyimage_settings = azureclassifyimage_settings;
window.azureclassifyimage_detect = azureclassifyimage_detect;
window.azureclassifyimage_get = azureclassifyimage_get;
window.azureclassifyimage_get_objectdata = azureclassifyimage_get_objectdata;
window.azureclassifyimage_get_objects = azureclassifyimage_get_objects;
window.azureclassifyimage_video = azureclassifyimage_video;
window.azureclassifyimage_detectvideo = azureclassifyimage_detectvideo;
window.azureclassifyimage_max = azureclassifyimage_max;

}(window, window.document));
