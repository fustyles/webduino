// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var region = document.getElementById('region');
var video = document.getElementById('video');
var canvas = document.getElementById('gamecanvas_azureclassifyimage'); 
var context = canvas.getContext('2d');
var result = document.getElementById('result');
var CustomVision_key = "";
var CustomVision_url = "";  
var CustomVision_result = ""; 
var CustomVision_returnResult = "";
var showTime = 3000;

function azureclassifyimage_settings(input_resourceName, input_predictionKey, input_projectId, input_publishedName){
  if (input_resourceName.toLowerCase().indexOf("http")==0)
    CustomVision_url = input_resourceName;
  else
    CustomVision_url = "https://" + input_resourceName + ".cognitiveservices.azure.com/customvision/v3.0/Prediction/"+input_projectId+"/classify/iterations/"+input_publishedName+"/image"
  CustomVision_key = input_predictionKey;
}

function azureclassifyimage_detect(input_showtime){
  showTime = input_showtime*1000;
  result.innerHTML = "";
  CustomVision_result = "";
  CustomVision_returnResult = "";
  azureclassifyimage_detectvideo();
}
  
function azureclassifyimage_get(){
  return CustomVision_returnResult.split("<br>");
}

function azureclassifyimage_video(input_width, input_height, input_result, input_opacity) {
  video.width = input_width;
  video.height = input_height;
  result.style.display = input_result;
  region.style.opacity = input_opacity;
}
  
function azureclassifyimage_detectvideo() {
  if (CustomVision_key == ""||CustomVision_url == "") return;    

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
    url: CustomVision_url,
    beforeSend: function(xhrObj){
    xhrObj.setRequestHeader("Content-Type","application/octet-stream");
    xhrObj.setRequestHeader("Prediction-Key", CustomVision_key);     
    },
    type: "POST",
    data: photo,
    processData: false
  })
  .done(function(json) {
    json = eval(json);	  
    result.innerHTML = "";
    CustomVision_result = "";
    CustomVision_returnResult = "";

	try {
		for (var i in json) 
		{
		  
		}
		
	}
	catch (e) {
      CustomVision_result = "";
	  console.log(e);
	}


    if (CustomVision_result!="") 
      CustomVision_result = CustomVision_result.substr(0,CustomVision_result.length-4);
    else
      CustomVision_result = "nobody";
    console.log(JSON.stringify(json));
    CustomVision_returnResult = CustomVision_result;
    result.innerHTML = JSON.stringify(json);
    setTimeout(function(){canvas.style.display = "none"; video.style.display = "block";}, showTime);
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
