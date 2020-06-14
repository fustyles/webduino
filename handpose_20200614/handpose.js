// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

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
	
  function handpose_video(input_width, input_height, input_mirrorimage, input_result, input_skeleton, input_opacity) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
    document.getElementById('mirrorimage').value = input_mirrorimage;
    document.getElementById('result').style.display = input_result;
    document.getElementById('skeleton').value = input_skeleton;
    document.getElementById('opacity').value = input_opacity;
  }
	
  function handpose_distance(input_x0,input_y0,input_x1,input_y1) {
      return Math.sqrt(Math.pow((input_x1-input_x0), 2) + Math.pow((input_y1-input_y0), 2));
  } 	
	
  function handpose_angle(input_x0,input_y0,input_x1,input_y1) {
      return (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
  } 	

  window.handpose_point = handpose_point;
  window.handpose_video = handpose_video;
  window.handpose_distance = handpose_distance;
  window.handpose_angle = handpose_angle;	
	
}(window, window.document));
