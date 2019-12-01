// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function posenet_person(input_person, input_part){
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
	
  function posenet_video(input_width, input_height, input_persons, input_scorelimit, input_mirrorimage, input_result, input_skeleton, input_opacity) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
    document.getElementById('persons').value = input_persons; 
    document.getElementById('scorelimit').value = input_scorelimit;
    document.getElementById('mirrorimage').value = input_mirrorimage;
    document.getElementById('result').style.display = input_result;
    document.getElementById('skeleton').value = input_skeleton;
    document.getElementById('opacity').value = input_opacity;
  }
	
  function posenet_distance(input_x0,input_y0,input_x1,input_y1) {
      return Math.sqrt(Math.pow((input_x1-input_x0), 2) + Math.pow((input_y1-input_y0), 2));
  } 	
	
  function posenet_angle(input_x0,input_y0,input_x1,input_y1) {
      return (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
  } 	

  window.posenet_person = posenet_person;
  window.posenet_video = posenet_video;
  window.posenet_distance = posenet_distance;
  window.posenet_angle = posenet_angle;	
	
}(window, window.document));
