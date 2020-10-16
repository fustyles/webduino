// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  function trackingcolor_set(input_display, input_pixel, input_result, input_mirrorimage, input_opacity)  {
	var region = document.getElementById("region_trackingcolor");
	var result = document.getElementById("gamediv_trackingcolor");
	var canvas = document.getElementById("gamecanvas_trackingcolor");
	var canvas_custom = document.getElementById("gamecanvas_custom");
	var mirrorimage = document.getElementById("mirrorimage_trackingcolor")
	var opacity = document.getElementById('opacity_trackingcolor')	
	
	canvas.style.display = input_display;
	canvas_custom.style.display = input_pixel;
	result.style.display = input_result;
	region.style.opacity = input_opacity;
	mirrorimage.value = input_mirrorimage;
	opacity.value = input_opacity;	
  }

  function trackingcolor_custom(input_rect, input_rmin, input_rmax, input_gmin, input_gmax, input_bmin, input_bmax)  {
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

  function trackingcolor_get(input_rect)  {
	var n=0;
	var result_arr = [];
    var result = document.getElementById("gamediv_trackingcolor").innerHTML.split("<br>");
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

  function trackingcolor_get_number(input_rect)  {
	var n=0;
    var result = document.getElementById("gamediv_trackingcolor").innerHTML.split("<br>");
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

  	function trackingcolor_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_trackingcolor");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas = document.getElementById("gamecanvas_trackingcolor");
		var canvas_custom = document.getElementById("gamecanvas_custom"); 
		canvas.setAttribute("width", video.width);
		canvas.setAttribute("height", video.height);
		canvas.style.width = video.width+"px";
		canvas.style.height = video.height+"px";
		canvas_custom.setAttribute("width", video.width);
		canvas_custom.setAttribute("height", video.height);
		canvas_custom.style.width = video.width+"px";
		canvas_custom.style.height = video.height+"px";
	
		document.getElementById("sourceId_trackingcolor").innerHTML = "gamevideo_trackingcolor";
	}

  	function trackingcolor_startvideo_stream(url) {
		var img = document.getElementById("gameimg_trackingcolor");
		var canvas = document.getElementById("gamecanvas_trackingcolor");
		var canvas_custom = document.getElementById("gamecanvas_custom"); 
		
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			canvas.setAttribute("width", img.width);
			canvas.setAttribute("height", img.height);
			canvas.style.width = img.width+"px";
			canvas.style.height = img.height+"px";
			canvas_custom.setAttribute("width", img.width);
			canvas_custom.setAttribute("height", img.height);
			canvas_custom.style.width = img.width+"px";
			canvas_custom.style.height = img.height+"px";				
			document.getElementById("sourceId_trackingcolor").innerHTML = "gameimg_trackingcolor";
		}	
	}
	
	window.trackingcolor_set = trackingcolor_set;
	window.trackingcolor_custom = trackingcolor_custom;
	window.trackingcolor_get = trackingcolor_get;
	window.trackingcolor_get_number = trackingcolor_get_number;
	window.trackingcolor_startvideo_media = trackingcolor_startvideo_media;
	window.trackingcolor_startvideo_stream = trackingcolor_startvideo_stream;  
  
}(window, window.document));
