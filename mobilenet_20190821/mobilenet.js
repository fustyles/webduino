// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function mobilenet_object(input_object){
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_object) {
		  return result_detail;
		}
      }
    }
    return "";
  }

 function mobilenet_object_number(input_object) {
	var n=0;
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_object) {
		  n++;
		}
      }
    }
    return n;
  }
	
  function mobilenet_video(input_width, input_height, input_result, input_mirrorimage, input_opacity) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
    document.getElementById('result').style.display = input_result;
    document.getElementById('mirrorimage').value = input_mirrorimage;
    document.getElementById('opacity').value = input_opacity;
  }	

  window.mobilenet_object = mobilenet_object;
  window.mobilenet_object_number = mobilenet_object_number;
  window.mobilenet_video = mobilenet_video;

}(window, window.document));
