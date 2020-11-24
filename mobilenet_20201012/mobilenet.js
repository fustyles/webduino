// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	
	function mobilenet_video(input_result, input_mirrorimage, input_opacity) {
		document.getElementById('gamediv_mobilenet').style.display = input_result;
		document.getElementById('mirrorimage_mobilenet').value = input_mirrorimage;
		document.getElementById('opacity_mobilenet').value = input_opacity;
		document.getElementById("region_mobilenet").style.opacity = input_opacity;
	}	

	function mobilenet_object(input_object){
		var result = document.getElementById("gamediv_mobilenet").innerHTML.split("<br>");
		var result_arr = [];
		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				var result_detail = result[i].split(",");
				if (result_detail[0]==input_object)
					result_arr.push(result_detail);
			}
		}
		return result_arr;
	}

	function mobilenet_object_number(input_object) {
		var n=0;
		var result = document.getElementById("gamediv_mobilenet").innerHTML.split("<br>");
		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				var result_detail = result[i].split(",");
				if (result_detail[0]==input_object)
					n++;
			}
		}
		return n;
	}

	function mobilenet_state(input_state){
		document.getElementById('mobilenetState').innerHTML = input_state;
	}	

	function mobilenet_video_position(input_left, input_top) {
		var region = document.getElementById("region_mobilenet");
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
	}

  	function mobilenet_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_mobilenet");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";
		
		var canvas = document.getElementById("gamecanvas_mobilenet");  
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
						document.getElementById("sourceId_mobilenet").innerHTML = "gamevideo_mobilenet";
					}
				}) 
			}
		}) 
	}

  	function mobilenet_startvideo_stream(url) {
		var img = document.getElementById("gameimage_mobilenet");
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_mobilenet").innerHTML = "gameimage_mobilenet";
		}	
	}
	
	window.mobilenet_object = mobilenet_object;
	window.mobilenet_object_number = mobilenet_object_number;
	window.mobilenet_video = mobilenet_video;
	window.mobilenet_video_position = mobilenet_video_position;
	window.mobilenet_state = mobilenet_state;
	window.mobilenet_startvideo_media = mobilenet_startvideo_media;
	window.mobilenet_startvideo_stream = mobilenet_startvideo_stream;
	
}(window, window.document));
