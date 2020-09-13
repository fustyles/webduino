// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function mobilenet_object(input_object){
    var result = document.getElementById("result").innerHTML.split("<br>");
    var result_arr = [];
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_object) {
		  result_arr.push(result_detail);
		}
      }
    }
    return result_arr;
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

  function mobilenet_state(input_state){
    document.getElementById('mobilenetState').innerHTML = input_state;
  }	

  function mobilenet_video_position(input_left, input_top) {
    region.style.position = "absolute";
    region.style.left = input_left + "px";
    region.style.top = input_top + "px";
  }

  window.mobilenet_object = mobilenet_object;
  window.mobilenet_object_number = mobilenet_object_number;
  window.mobilenet_video = mobilenet_video;
  window.mobilenet_video_position = mobilenet_video_position;
  window.mobilenet_state = mobilenet_state;

}(window, window.document));
