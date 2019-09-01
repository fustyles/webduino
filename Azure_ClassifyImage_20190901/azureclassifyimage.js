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

function azureclassifyimage_settings(input_resourceName, input_predictionKey, input_projectId, input_publishedName){
  if (input_resourceName.toLowerCase().indexOf("http")==0)
    Prediction_url = input_resourceName;
  else
    Prediction_url = "https://" + input_resourceName + ".api.cognitive.microsoft.com/customvision/v3.0/Prediction/"+input_projectId+"/detect/iterations/"+input_publishedName+"/image"
  Prediction_key = input_predictionKey;
  console.log(Prediction_url);
  console.log(Prediction_key);  
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
  })
  .fail(function() {
    console.log("error");
  });
}

window.azureclassifyimage_settings = azureclassifyimage_settings;
window.azureclassifyimage_detect = azureclassifyimage_detect;
window.azureclassifyimage_get = azureclassifyimage_get;
window.azureclassifyimage_video = azureclassifyimage_video;
window.azureclassifyimage_detectvideo = azureclassifyimage_detectvideo;

}(window, window.document));
