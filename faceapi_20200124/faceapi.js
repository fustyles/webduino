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
	
  function faceapi_video(input_width, input_height, input_result, input_opacity) {
    document.getElementById('webcam').width = input_width;
    document.getElementById('webcam').height = input_height;
    document.getElementById('result').style.display = input_result;
    document.getElementById('webcam').style.opacity = Number(input_opacity);
  }	

  window.faceapi_face = faceapi_face;
  window.faceapi_video = faceapi_video;
	
}(window, window.document));
