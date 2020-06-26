// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  function facemesh_set(input_width, input_height, input_video, input_point, input_result, input_mirrorimage, input_opacity)  {
	var canvas = document.getElementById("gamecanvas_facemesh");
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

  function facemesh_get(input_person, input_point)  {
	var n=0;
	var result_arr = [];
    var result = document.getElementById("result").innerHTML.split("<br>");
	if (input_point=="all") return result;

    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_person&&result_detail[1]==input_point) {
		  result_arr.push(result_detail);
		}
      }
    }
    return result_arr;
  }
    
  window.facemesh_set = facemesh_set;
  window.facemesh_get = facemesh_get;
  
}(window, window.document));
