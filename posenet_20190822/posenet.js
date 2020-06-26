// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function posenet_video(input_width, input_height, input_persons, input_scorelimit, input_mirrorimage, input_result, input_skeleton, input_opacity, input_video) {
 
    var canvas = document.getElementById("gamecanvas_posenet");
	var canvas_skeleton = document.getElementById("canvas_skeleton");
	var result = document.getElementById("result");

	canvas.style.display = input_video;
	canvas_skeleton.style.display = input_skeleton;
    result.style.display = input_result;
	document.getElementById("mirrorimage").value = input_mirrorimage;
	document.getElementById('opacity').value = input_opacity;
	document.getElementById('persons').value = input_persons; 
    document.getElementById('scorelimit').value = input_scorelimit;
		
	var video = document.getElementById("video");
	video.width = input_width;
	video.height = input_height;   
		
	canvas.setAttribute("width", video.width+"px");
	canvas.setAttribute("height", video.height+"px");
	canvas.style.width = video.width+"px";
	canvas.style.height = video.height+"px";
	canvas_skeleton.setAttribute("width", video.width+"px");
	canvas_skeleton.setAttribute("height", video.height+"px");
	canvas_skeleton.style.width = video.width+"px";
	canvas_skeleton.style.height = video.height+"px";
  }

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
