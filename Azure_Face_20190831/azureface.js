// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var region = document.getElementById('region');
var video = document.getElementById('video');
var canvas = document.getElementById('gamecanvas_azureface'); 
var context = canvas.getContext('2d');
var result = document.getElementById('result');
var faceApi_key = "";
var faceApi_url = "";  
var faceApi_result = ""; 

function azureface_settings(input_resourceName, input_key){
  faceApi_url = "https://" + input_resourceName.trim() + ".cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=emotion,gender,age";
  faceApi_key = input_key;
}

function azureface_detect(){
  result.innerHTML = "";
  faceApi_result = "";
  DetectVideo();
}
  
function azureface_get(){
  return result.innerHTML.split("<br>");
}

function azureface_video(input_width, input_height, input_result, input_opacity) {
  video.width = input_width;
  video.height = input_height;
  result.style.display = input_result;
  region.style.opacity = input_opacity;
}
  
function DetectVideo() {
  if (faceApi_key == ""||faceApi_url == "") return;    

  video.style.display = "none";
  canvas.style.display = "block";
  context.drawImage(video, 0, 0, video.width, video.height);
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
    },
    type: "POST",
    // Request body.
    data: imagefile,
    processData: false
  })
  .done(function(json) {
    result.innerHTML = "";
    json = eval(json);
    faceApi_result = "";
    for (var i in json) 
    {
      var max="";
      var maxEmotion="";
      
      faceApi_result += i;      
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceId"]; 
      faceApi_result += ",";
      faceApi_result += json[i]["faceRectangle"]["top"];
      faceApi_result += ",";
      faceApi_result += json[i]["faceRectangle"]["left"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceRectangle"]["width"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceRectangle"]["height"];
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["gender"]; 
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["age"]; 
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["anger"];
      if (["faceAttributes"]["emotion"]["anger"]>max) { 
        maxEmotion="anger";
        max = ["faceAttributes"]["emotion"]["anger"];
      }
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["contempt"];
      if (["faceAttributes"]["emotion"]["contempt"]>max) { 
        maxEmotion="contempt";
        max = ["faceAttributes"]["emotion"]["contempt"];
      }      
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["disgust"];
      if (["faceAttributes"]["emotion"]["disgust"]>max) { 
        maxEmotion="disgust";
        max = ["faceAttributes"]["emotion"]["disgust"];
      }      
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["fear"];
      if (["faceAttributes"]["emotion"]["fear"]>max) { 
        maxEmotion="fear";
        max = ["faceAttributes"]["emotion"]["fear"];
      }      
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["happiness"];
      if (["faceAttributes"]["emotion"]["happiness"]>max) { 
        maxEmotion="happiness";
        max = ["faceAttributes"]["emotion"]["happiness"];
      }      
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["neutral"];
      if (["faceAttributes"]["emotion"]["neutral"]>max) { 
        maxEmotion="neutral";
        max = ["faceAttributes"]["emotion"]["neutral"];
      }      
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["sadness"];
      if (["faceAttributes"]["emotion"]["sadness"]>max) { 
        maxEmotion="sadness";
        max = ["faceAttributes"]["emotion"]["sadness"];
      }      
      faceApi_result += ",";	    
      faceApi_result += json[i]["faceAttributes"]["emotion"]["surprise"];	
      if (["faceAttributes"]["emotion"]["surprise"]>max) { 
        maxEmotion="surprise";
        max = ["faceAttributes"]["emotion"]["surprise"];
      }      
      faceApi_result += "<br>";

      context.lineWidth = "3";
      context.strokeStyle = "red";
      context.beginPath();
      context.rect(json[i]["faceRectangle"]["left"], json[i]["faceRectangle"]["top"], json[i]["faceRectangle"]["width"], json[i]["faceRectangle"]["height"]);
      context.stroke(); 
      context.font = "16px Arial";
      context.fillStyle = "#99FF99";
      context.fillText(json[i]["faceAttributes"]["gender"]+", "+json[i]["faceAttributes"]["age"]+", "+maxEmotion, json[i]["faceRectangle"]["left"],  json[i]["faceRectangle"]["top"]);     
    }
    if (faceApi_result!="") 
      faceApi_result = faceApi_result.substr(0,faceApi_result.length-4);
    else
      faceApi_result = "nobody";
    result.innerHTML = faceApi_result;
    setTimeout(function(){canvas.style.display = "none"; video.style.display = "block";}, 3000);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    // Display error message.
    var errorString = (errorThrown === "") ?
    "Error. " : errorThrown + " (" + jqXHR.status + "): ";
    errorString += (jqXHR.responseText === "") ?
    "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
      jQuery.parseJSON(jqXHR.responseText).message :
    jQuery.parseJSON(jqXHR.responseText).error.message;
    result.innerHTML = "nobody";
  });
}

window.azureface_settings = azureface_settings;
window.azureface_detect = azureface_detect;
window.azureface_get = azureface_get;
window.azureface_video = azureface_video;
window.DetectVideo = DetectVideo;

}(window, window.document));
