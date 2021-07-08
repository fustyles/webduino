// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function handpose_video(input_width, input_height, input_mirrorimage, input_result, input_point, input_opacity, input_video) {
    var canvas = document.getElementById("gamecanvas_handpose");
	var canvas_point = document.getElementById("canvas_point");
	var result = document.getElementById("result");

	canvas.style.display = input_video;
	canvas_point.style.display = input_point;
    result.style.display = input_result;
	document.getElementById("mirrorimage").value = input_mirrorimage;
	document.getElementById('opacity').value = input_opacity;
		
	var video = document.getElementById("video");
	video.width = input_width;
	video.height = input_height;   
		
	canvas.setAttribute("width", video.width+"px");
	canvas.setAttribute("height", video.height+"px");
	canvas.style.width = video.width+"px";
	canvas.style.height = video.height+"px";
	canvas_point.setAttribute("width", video.width+"px");
	canvas_point.setAttribute("height", video.height+"px");
	canvas_point.style.width = video.width+"px";
	canvas_point.style.height = video.height+"px";
  }

 function handpose_point(input_point){
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      if (input_point=='A') 
        return result;
      for (var i=0;i<result.length;i++) {
        var result_detail = result[i].split(",");
        if (result_detail[0]==input_point) 
          return result_detail;
        }
      }
    return "";
  }
	
  function handpose_distance(input_x0,input_y0,input_x1,input_y1) {
      return Math.sqrt(Math.pow((input_x1-input_x0), 2) + Math.pow((input_y1-input_y0), 2));
  } 	
	
  function handpose_angle(input_x0,input_y0,input_x1,input_y1) {
      var angle = (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
      if (angle<0) angle = 180 + angle;
      if (input_y0<input_y1) angle = 180 + angle;
      return angle;
  } 	

  function handpose_state(input_state){
    document.getElementById('handposeState').innerHTML = input_state;
  }	

  function handpose_video_position(input_left, input_top) {
    region.style.position = "absolute";
    region.style.left = input_left + "px";
    region.style.top = input_top + "px";
  }

  window.handpose_point = handpose_point;
  window.handpose_video = handpose_video;
  window.handpose_distance = handpose_distance;
  window.handpose_angle = handpose_angle;	
  window.handpose_video_position = handpose_video_position;
  window.handpose_state = handpose_state;

}(window, window.document));
