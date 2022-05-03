// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';

	function blazeface_video(input_scorelimit, input_frame, input_mirrorimage, input_result, input_opacity) {  
		document.getElementById("gamediv_blazeface").style.display = input_result;
		document.getElementById("frame_blazeface").value = input_frame;
		document.getElementById("mirrorimage_blazeface").value = input_mirrorimage;
		document.getElementById("region_blazeface").style.opacity = input_opacity;
		document.getElementById('scorelimit_blazeface').value = input_scorelimit;
	}

	function blazeface_get(input_person, input_part){
		var result = document.getElementById("gamediv_blazeface").innerHTML.split("<br>");
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
		var region = document.getElementById("region_blazeface");
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
	}
  
  	function blazeface_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_blazeface");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas = document.getElementById("gamecanvas_blazeface");  
		canvas.setAttribute("width", video.width);
		canvas.setAttribute("height", video.height);
		canvas.style.width = video.width+"px";
		canvas.style.height = video.height+"px";
		
		if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
			console.log("enumerateDevices() not supported.");
			return;
		}

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
						document.getElementById("sourceId_blazeface").innerHTML = "gamevideo_blazeface";
					}
				}) 
			}
		}) 
	}

  	function blazeface_startvideo_stream(url) {
		var img = document.getElementById("gameimage_blazeface");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_blazeface").innerHTML = "gameimage_blazeface";
		}	
	}
	
	function blazeface_clear() {
		document.getElementById("gamediv_blazeface").innerHTML = "";
	}
	
	function blazeface_recognitionFinish() {
	}	

	window.blazeface_video = blazeface_video;
	window.blazeface_get = blazeface_get;
	window.blazeface_video_position = blazeface_video_position;
	window.blazeface_state = blazeface_state;
	window.blazeface_startvideo_media = blazeface_startvideo_media;
	window.blazeface_startvideo_stream = blazeface_startvideo_stream;
	window.blazeface_clear = blazeface_clear;
	window.blazeface_recognitionFinish = blazeface_recognitionFinish;	
	
}(window, window.document));
