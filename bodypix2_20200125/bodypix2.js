// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function bodypix2_person(input_person, input_part){
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
	var result_detail = result[i].split(",");
	if (result_detail[0]==input_person&&result_detail[1]==input_part) 
	  return result_detail;
      }
    }
    return "";
  }
	
  function bodypix2_video(input_width, input_height, input_result, input_skeleton, input_mirrorimage, input_func) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
    document.getElementById('result').style.display = input_result;
    document.getElementById('skeleton').value = input_skeleton;
    document.getElementById('mirrorimage').value = input_mirrorimage;
    document.getElementById('func').value = input_func;
  }	

  window.bodypix2_person = bodypix2_person;
  window.bodypix2_video = bodypix2_video;
	
}(window, window.document));
