// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	
	var video = document.getElementById('gamevideo_tesseract');
	var canvas = document.getElementById('gamecanvas_tesseract');
	var context = canvas.getContext('2d');
	var result = document.getElementById('gamediv_tesseract');
	var lang = document.getElementById('lang_tesseract');
	var mode = document.getElementById('mode_tesseract');
	var reference = document.getElementById('reference_tesseract');
	var region = document.getElementById('region_tesseract');
	
	function tesseract_video(input_lang, input_result, input_opacity) {
		result.style.display = input_result;
		region.style.opacity = input_opacity;
		lang.value = input_lang;
	}
	
	function tesseract_imageprocessing(input_mode, input_reference) {
		mode.value = input_mode;
		reference.value = input_reference;
	}

	function tesseract_video_position(input_left, input_top) {
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
	}
	
	function tesseract_recognition() {
		DetectVideo();
	}	

	function tesseract_get(){
		return result.innerHTML;
	}	

	function tesseract_clear(){
		result.innerHTML = "";
	}

	function tesseract_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_tesseract");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";	
		video.style.visibility = "visible";

		var canvas = document.getElementById("gamecanvas_tesseract");  
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
						document.getElementById("sourceId_tesseract").innerHTML = "gamevideo_tesseract";
					}
				}) 
			}
		}) 
	}

	function tesseract_startvideo_stream(url) {
		var img = document.getElementById("gameimage_tesseract");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_tesseract").innerHTML = "gameimage_tesseract";
		}	
	}
	
	window.tesseract_video = tesseract_video;
	window.tesseract_imageprocessing = tesseract_imageprocessing;
	window.tesseract_video_position = tesseract_video_position;
	window.tesseract_get = tesseract_get;
	window.tesseract_recognition = tesseract_recognition;
	window.tesseract_clear = tesseract_clear;
	window.tesseract_startvideo_media = tesseract_startvideo_media;
	window.tesseract_startvideo_stream = tesseract_startvideo_stream;

}(window, window.document));
