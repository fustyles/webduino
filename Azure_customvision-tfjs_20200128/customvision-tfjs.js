// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function customvision_tfjs_object(input_object, input_index) {
	var n=0;
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_object) {
		  if (n==input_index)
		    return result_detail;
		  n++;
		}
      }
    }
    return "";
  }

 function customvision_tfjs_object_max() {
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
	  var result_detail = result[0].split(",");
	  return result_detail;
    }
	else
      return "";
  }

 function customvision_tfjs_object_number(input_object) {
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
	
  function customvision_tfjs_video(input_func, input_path, input_timer, input_width, input_height, input_result) {
	StartCustomVision(input_func, input_path, input_timer, input_width, input_height, input_result);
  }	

  function customvision_tfjs_detect(input_scorelimit) {
	scoreLimit = input_scorelimit;
	DetectVideo();
  }	

  window.customvision_tfjs_object = customvision_tfjs_object;
  window.customvision_tfjs_object_number = customvision_tfjs_object_number;
  window.customvision_tfjs_object_max = customvision_tfjs_object_max;
  window.customvision_tfjs_video = customvision_tfjs_video;
  window.customvision_tfjs_detect = customvision_tfjs_detect;

}(window, window.document));
