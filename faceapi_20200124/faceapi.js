// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function faceapi_face(input_index, input_property){
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_index) {
          for (var j=0;j<result_detail.length;j++) {
		    if (result_detail[j]==input_property) return result_detail[j+1];
		  }
	    }
      }
    }
    return "";
  }
	
  function faceapi_video(input_width, input_height, input_frame, input_result, input_opacity) {
    document.getElementById('webcam').width = input_width;
    document.getElementById('webcam').height = input_height;
	document.getElementById('frame').value = input_frame;
    document.getElementById('result').style.display = input_result;
    document.getElementById('webcam').style.opacity = Number(input_opacity);
  }	

  function faceapi_state(input_state){
    document.getElementById('faceapiState').innerHTML = input_state;
  }	

  function faceapi_video_position(input_left, input_top) {
    region.style.position = "absolute";
    region.style.left = input_left + "px";
    region.style.top = input_top + "px";
  }

  window.faceapi_face = faceapi_face;
  window.faceapi_video = faceapi_video;
  window.faceapi_video_position = faceapi_video_position;
  window.faceapi_state = faceapi_state;

}(window, window.document));
