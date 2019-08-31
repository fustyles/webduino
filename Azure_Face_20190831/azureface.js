// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var video = document.getElementById('video');
var canvas = document.getElementById('gamecanvas_azureface'); 
var context = canvas.getContext('2d');
var result = document.getElementById('result');
var faceApi_result = "";
var faceApi_key = "";
var faceApi_url = "";  

function azureface_settings(input_resourceName, input_key){
  faceApi_url = "https://" + input_resourceName.trim() + ".cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=emotion,gender,age";
  faceApi_key = input_key;
}

function azureface_part(input_part){
  DetectVideo();
  return result.innerHTML;
  /*
  faceApi_result += "faceId,";
  faceApi_result += json[i]["faceId"]; 
  faceApi_result += "faceRectangle,";
  faceApi_result += json[i]["faceRectangle"];            
  faceApi_result += ",faceLandmarks,";
  faceApi_result += json[i]["faceLandmarks"];  
  faceApi_result += ",faceAttributes,";
  faceApi_result += json[i]["faceAttributes"];  
  faceApi_result += ",recognitionModel,";
  faceApi_result += json[i]["recognitionModel"];
  faceApi_result += ";";
  */ 
	
    
    /*
  var frame = Number(document.getElementById("frame").value);
  if (frame==1) {
    context.lineWidth = "3";
    context.strokeStyle = "#00FFFF";
    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke(); 
    context.lineWidth = "2";
    context.fillStyle = "red";
    context.font = "12px Arial";
    context.fillText(predictions[i].class, x, y);
  }
    */	
}

function azureface_video(input_width, input_height, input_mirrorimage, input_result, input_frame, input_opacity) {
  document.getElementById('video').width = input_width;
  document.getElementById('video').height = input_height;
  document.getElementById('mirrorimage').value = input_mirrorimage;
  document.getElementById('result').style.display = input_result;
  document.getElementById('frame').value = input_frame;
  document.getElementById('opacity').value = input_opacity;
}
  
function DetectVideo() {

  var mirrorimage = Number(document.getElementById("mirrorimage").value);
  if (mirrorimage==1) {
    context.translate((canvas.width + video.width) / 2, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, video.width, video.height);
    context.setTransform(1, 0, 0, 1, 0, 0);
  }
  else
	context.drawImage(video, 0, 0, video.width, video.height);
  document.getElementById("region").style.opacity = Number(document.getElementById("opacity").value);

  if (faceApi_key == ""||faceApi_url == "") return;    

  const dataURL = canvas.toDataURL('image/png');
  const blobBin = atob(dataURL.split(',')[1]);
  const mime = dataURL.split(',')[0].split(':')[1].split(';')[0];
  const arr = [];
  for (let i = 0; i < blobBin.length; i++) {
    arr.push(blobBin.charCodeAt(i));
  }
  const u8 = new Uint8Array(arr);
  const imagefile = new Blob([u8], { type: mime });

  // Perform the REST API call.
  $.ajax({
    url: faceApi_url,
    // Request headers.
    beforeSend: function(xhrObj){
    xhrObj.setRequestHeader("Content-Type","application/octet-stream");
    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", faceApi_key);
    xhrObj.setRequestHeader("Content-Length", imagefile.length);        
    },
    type: "POST",
    // Request body.
    data: imagefile,
    processData: false
  })
  .done(function(data) {
    result.innerHTML = JSON.stringify(data);
    return JSON.stringify(data);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    // Display error message.
    var errorString = (errorThrown === "") ?
    "Error. " : errorThrown + " (" + jqXHR.status + "): ";
    errorString += (jqXHR.responseText === "") ?
    "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
      jQuery.parseJSON(jqXHR.responseText).message :
    jQuery.parseJSON(jqXHR.responseText).error.message;
    result.innerHTML = errorString;
    return "";
  });
}

window.azureface_settings = azureface_settings;
window.azureface_part = azureface_part;
window.azureface_video = azureface_video;
window.DetectVideo = DetectVideo;

}(window, window.document));
