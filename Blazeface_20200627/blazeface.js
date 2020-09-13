// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  function blazeface_video(input_width, input_height, input_scorelimit, input_frame, input_mirrorimage, input_result, input_opacity) {  
    document.getElementById("result").style.display = input_result;
	document.getElementById("frame").value = input_frame;
    document.getElementById("mirrorimage").value = input_mirrorimage;
    document.getElementById('opacity').value = input_opacity;
    document.getElementById('scorelimit').value = input_scorelimit;
		
    var video = document.getElementById("video");
    video.width = input_width;
    video.height = input_height;   
		
    var canvas = document.getElementById("gamecanvas_blazeface");  
    canvas.setAttribute("width", video.width+"px");
    canvas.setAttribute("height", video.height+"px");
    canvas.style.width = video.width+"px";
    canvas.style.height = video.height+"px";
  }

  function blazeface_get(input_person, input_part){
    var result = document.getElementById("result").innerHTML.split("<br>");
	var result_arr = [];
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
        var result_detail = result[i].split(",");
		if (input_part=='') 
			result_arr.push(result_detail);
        else if (result_detail[0]==input_person&&result_detail[1]==input_part) 
          return result_detail;
      }
    }
    return result_arr;
  }	

  function blazeface_state(input_state){
    document.getElementById('blazefaceState').innerHTML = input_state;
  }	

  function blazeface_video_position(input_left, input_top) {
    region.style.position = "absolute";
    region.style.left = input_left + "px";
    region.style.top = input_top + "px";
  }

  window.blazeface_video = blazeface_video;
  window.blazeface_get = blazeface_get;
  window.blazeface_video_position = blazeface_video_position;
  window.blazeface_state = blazeface_state;
	
}(window, window.document));
