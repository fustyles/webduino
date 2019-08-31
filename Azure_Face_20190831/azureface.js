// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';

function azureface_settings(input_resourceName, input_key){
  document.getElementById('faceApi_ResourceName').innerHTML = "https://" + input_resourceName.trim() + ".cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=emotion,gender,age";
  document.getElementById('faceApi_Key').innerHTML = input_key;
}

function azureface_part(input_part){
  return "test";
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
}

function azureface_video(input_width, input_height, input_mirrorimage, input_result, input_frame, input_opacity) {
document.getElementById('video').width = input_width;
document.getElementById('video').height = input_height;
document.getElementById('mirrorimage').value = input_mirrorimage;
document.getElementById('result').style.display = input_result;
document.getElementById('frame').value = input_frame;
document.getElementById('opacity').value = input_opacity;
}

window.azureface_settings = azureface_settings;
window.azureface_part = azureface_part;
window.azureface_video = azureface_video;

}(window, window.document));
