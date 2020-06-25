// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  function trackcolor_set(input_width, input_height, input_display, input_pixel)  {
    if (document.getElementById("canvas_custom")) {
	var region = document.getElementById("region");
	var canvas = document.getElementById("gamecanvas_trackingcolor");
	var canvas_custom = document.getElementById("canvas_custom");

	if (input_display==1) {
	  canvas.style.display="block";
	  canvas_custom.style.display="block";
	  if (input_pixel==1) {
	    canvas_custom.style.display="block";
		region.style.display="block";
	    canvas.style.display="none";
	  }
	  else {
	    canvas_custom.style.display="none";
		region.style.display="none";
	    canvas.style.display="block";
	  }
	}
	else {
	  canvas.style.display="none";
	  canvas_custom.style.display="none";
	  region.style.display="none";
	}
		
	var video = document.getElementById("video");
	video.width = input_width;
	video.height = input_height;   
		
	canvas.setAttribute("width", video.width+"px");
	canvas.setAttribute("height", video.height+"px");
	canvas.style.width = video.width+"px";
	canvas.style.height = video.height+"px";
	canvas_custom.setAttribute("width", video.width+"px");
	canvas_custom.setAttribute("height", video.height+"px");
	canvas_custom.style.width = video.width+"px";
	canvas_custom.style.height = video.height+"px";
    }
  }

  function trackcolor_custom(input_rect, input_rmin, input_rmax, input_gmin, input_gmax, input_bmin, input_bmax)  {
	var n = "1";
    if (input_rect=="red") 
		n="1";
    else if (input_rect=="green") 
		n="2";
    else if (input_rect=="blue") 
		n="3";
	document.getElementById('myColor_r_min'+n).value = input_rmin;
	document.getElementById('myColor_r_min_v'+n).innerHTML = input_rmin;
	document.getElementById('myColor_r_max'+n).value = input_rmax;
	document.getElementById('myColor_r_max_v'+n).innerHTML = input_rmax;
	document.getElementById('myColor_g_min'+n).value = input_gmin;
	document.getElementById('myColor_g_min_v'+n).innerHTML = input_gmin;
	document.getElementById('myColor_g_max'+n).value = input_gmax;
	document.getElementById('myColor_g_max_v'+n).innerHTML = input_gmax;
	document.getElementById('myColor_b_min'+n).value = input_bmin;
	document.getElementById('myColor_b_min_v'+n).innerHTML = input_bmin;
	document.getElementById('myColor_b_max'+n).value = input_bmax;
	document.getElementById('myColor_b_max_v'+n).innerHTML = input_bmax;
  }

  function trackcolor_get(input_rect)  {
	var n=0;
	var result_arr = [];
    var result = document.getElementById("result").innerHTML.split("<br>");
	if (input_rect=="all") return result;

    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_rect) {
		  result_arr.push(result_detail);
		}
      }
    }
    return result_arr;
  }

  function trackcolor_get_number(input_rect)  {
	var n=0;
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
	  if (input_rect=="all") return result.length;

      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_rect) {
		  n++;
		}
      }
    }
    return n;
  }
    
  window.trackcolor_set = trackcolor_set;
  window.trackcolor_custom = trackcolor_custom;
  window.trackcolor_get = trackcolor_get;
  window.trackcolor_get_number = trackcolor_get_number;
  
}(window, window.document));
