// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  function trackingcolor_set(input_display, input_pixel, input_result, input_mirrorimage, input_opacity)  {  
	document.getElementById("gamecanvas_trackingcolor").style.display = input_display;
	document.getElementById("gamecanvas_custom").style.display = input_pixel;
	document.getElementById("gamediv_trackingcolor").style.display = input_result;
	document.getElementById("region_trackingcolor").style.opacity = input_opacity;
	document.getElementById("mirrorimage_trackingcolor").value = input_mirrorimage;
  }
  
  function trackingcolor_range_set(input_rect, input_display, input_left, input_top)  { 
	document.getElementById(input_rect+"rect").style.display = input_display;
	document.getElementById(input_rect+"rect").style.left = input_left+"px";
	document.getElementById(input_rect+"rect").style.top = input_top+"px";
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
  
	function trackingcolor_video_position(input_left, input_top) {
		var region = document.getElementById("region_trackingcolor");
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
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
  
	function trackingcolor_object(input_rect, input_index, input_data) {
		var n=0;
		var result = document.getElementById("gamediv_trackingcolor").innerHTML.split("<br>");
		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				var result_detail = result[i].split(",");
				if (result_detail[0]==input_rect) {
					if (n==input_index&&input_data=="")
						return result_detail;
					else if (n==input_index&&input_data=="color")
						return result_detail[0];
					else if (n==input_index&&input_data=="x")
						return Number(result_detail[1]);
					else if (n==input_index&&input_data=="y")
						return Number(result_detail[2]);
					else if (n==input_index&&input_data=="middlex")
						return Number(result_detail[1])+Number(result_detail[3])/2;
					else if (n==input_index&&input_data=="middley")
						return Number(result_detail[2])+Number(result_detail[4])/2;
					else if (n==input_index&&input_data=="width")
						return Number(result_detail[3]);
					else if (n==input_index&&input_data=="height")
						return Number(result_detail[4]);
					
					n++;
				}
			}
		}
		return "";
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

		var videoinput = false;
		navigator.mediaDevices.enumerateDevices()
		.then(function(devices) {
			var i=-1;
			var userMedia = "";
			devices.forEach(function(device) {
				if (device.kind=="videoinput"&&device.label.includes("facing back")&&input_facing=="back") {
					i++;
					if (i==input_videoInputIndex) {
						if (device.deviceId=='')
							userMedia = {audio: false,video: {facingMode: 'environment', width: video.width, height: video.height} };
						else
							userMedia = {audio: false,video: {deviceId: {'exact':device.deviceId}, facingMode: 'environment', width: video.width, height: video.height} };
					}
				}				
				else if (device.kind=="videoinput"&&input_facing=="front") {
					i++;
					if (i==input_videoInputIndex) {
						if (device.deviceId=='')
							userMedia = {audio: false,video: {facingMode: 'user', width: video.width, height: video.height} };
						else
							userMedia = {audio: false,video: {deviceId: {'exact':device.deviceId}, facingMode: 'user', width: video.width, height: video.height} };
					}
				}
			});

			if (userMedia!="") {
				navigator.mediaDevices
				.getUserMedia(userMedia)
				.then(stream => {
					video.srcObject = stream
					video.onloadedmetadata = () => {       
						video.play();
						document.getElementById("sourceId_trackingcolor").innerHTML = "gamevideo_trackingcolor";
					}
				}) 
			}
		}) 
	}

  	function trackingcolor_startvideo_stream(url) {
		var img = document.getElementById("gameimage_trackingcolor");
		var canvas = document.getElementById("gamecanvas_trackingcolor");
		var canvas_custom = document.getElementById("gamecanvas_custom"); 
		
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
			document.getElementById("sourceId_trackingcolor").innerHTML = "gameimage_trackingcolor";
		}	
	}
	
	function trackingcolor_state(input_state){
		document.getElementById('trackingcolorState').innerHTML = input_state;
	}
	
	function trackingcolor_clear() {
		document.getElementById("gamediv_trackingcolor").innerHTML = "";
	}
	
	function trackingcolor_recognitionFinish() {
	}	
	
	window.trackingcolor_set = trackingcolor_set;
	window.trackingcolor_range_set = trackingcolor_range_set;	
	window.trackingcolor_custom = trackingcolor_custom;
	window.trackingcolor_video_position = trackingcolor_video_position;
	window.trackingcolor_get = trackingcolor_get;
	window.trackingcolor_object = trackingcolor_object;
	window.trackingcolor_get_number = trackingcolor_get_number;
	window.trackingcolor_startvideo_media = trackingcolor_startvideo_media;
	window.trackingcolor_startvideo_stream = trackingcolor_startvideo_stream; 
	window.trackingcolor_state = trackingcolor_state;
	window.trackingcolor_clear = trackingcolor_clear;
	window.trackingcolor_recognitionFinish = trackingcolor_recognitionFinish;	
  
}(window, window.document));
