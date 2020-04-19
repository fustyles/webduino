// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function faceapi_recognition_video(input_result, input_timer, input_modelpath, input_faceimagepath, input_facelabel, input_faceimagecount, input_distancelimit) {
	input_facelabel = input_facelabel.split(";");
	StartFaceRecognition(input_result, input_timer, input_modelpath, input_faceimagepath, input_facelabel, input_faceimagecount, input_distancelimit);
  }	

  function faceapi_recognition_detect() {
	DetectVideo();
  }	

 function faceapi_recognition_number() {
	var result = document.getElementById("message").innerHTML.split("<br>");
	if (result[0]=="")
		return 0;
	else
		return result.length;
  }

 function faceapi_recognition_get(input_index, input_column) {
    var result = document.getElementById("message").innerHTML.split("<br>");
	if (result[0]=="") return "";
	for (var i=0;i<result.length;i++) {
	  var result_detail = result[i].split(",");
	  if (i==input_index-1) {
		if (input_column=="name")
			return result_detail[0];
		else if (input_column=="distance")
			return result_detail[1];
	  }
	}
    return "";
  }

  function faceapi_recognition_clear() {
	message.innerHTML = "";
  }

  window.faceapi_recognition_number = faceapi_recognition_number;
  window.faceapi_recognition_get = faceapi_recognition_get;
  window.faceapi_recognition_video = faceapi_recognition_video;
  window.faceapi_recognition_detect = faceapi_recognition_detect;
  window.faceapi_recognition_clear = faceapi_recognition_clear;

}(window, window.document));
