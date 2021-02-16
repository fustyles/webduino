// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	  
	var region = document.getElementById('region_barcode');
	var video = document.getElementById('gamevideo_barcode');
	var result = document.getElementById('gamediv_barcode');
	var code = document.getElementById('code');
	  
	function barcode_get(){
		return result.innerHTML;
	}

	function barcode_video(input_result, input_opacity, input_code) {
		result.style.display = input_result;
		region.style.opacity = input_opacity;
		code.innerHTML = input_code;
	}
	  
	function barcode_clear(){
		result.innerHTML = "";
	}

	function barcode_video_position(input_left, input_top) {
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
	}

  
  	function barcode_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_barcode");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas = document.getElementById("gamecanvas_barcode");  
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
						document.getElementById("sourceId_barcode").innerHTML = "gamevideo_barcode";
					}
				}) 
			}
		}) 
	}

  	function barcode_startvideo_stream(url) {
		var img = document.getElementById("gameimage_barcode");
		img.style.visibility = "visible";
		var video = document.getElementById("gamevideo_barcode");
		video.style.position = "absolute";	
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_barcode").innerHTML = "gameimage_barcode";
		}	
	}

	window.barcode_get = barcode_get;
	window.barcode_video = barcode_video;
	window.barcode_clear = barcode_clear;
	window.barcode_video_position = barcode_video_position;
	window.barcode_startvideo_media = barcode_startvideo_media;
	window.barcode_startvideo_stream = barcode_startvideo_stream;	

}(window, window.document));
