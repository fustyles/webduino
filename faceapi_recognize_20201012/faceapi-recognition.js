// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';

	var obj = "";

	function faceapirecognize_video(input_result, input_opacity, input_timer, input_faceimagepath, input_facelabel, input_faceimagecount, input_distancelimit) {
		document.getElementById('gamediv_faceapirecognize').style.display = input_result;
		document.getElementById('region_faceapirecognize').style.opacity = Number(input_opacity);
		if (input_faceimagecount==0)
			input_faceimagepath = input_faceimagepath.split(";");
		if (typeof input_facelabel==='object') {
			var label = [];
			var base64 = [];
			for (var i=0;i<input_facelabel.length;i++) {
				label.push(input_facelabel[i][0]);
				base64.push(input_facelabel[i][1]);
			}
			input_facelabel = [];
			input_facelabel.push(label, base64);
			input_faceimagecount = 1;
		}
		else
			input_facelabel = input_facelabel.split(";");
		if (typeof StartFaceRecognition === 'function') 
			StartFaceRecognition(input_timer, input_faceimagepath, input_facelabel, input_faceimagecount, input_distancelimit);
	}	

	function faceapirecognize_detect() {
		document.getElementById("gamediv_faceapirecognize").innerHTML = "";
		document.getElementById("sourceId_faceapirecognize").innerHTML = obj;
	}  

	function faceapirecognize_number() {
		var result = document.getElementById("gamediv_faceapirecognize").innerHTML.split("<br>");
		if (result[0]=="")
			return 0;
		else
			return result.length;
	}
	
	function faceapirecognize_state(input_state){
		document.getElementById('faceapirecognizeState').innerHTML = input_state;
	}		

	function faceapirecognize_get(input_index, input_column) {
		var result = document.getElementById("gamediv_faceapirecognize").innerHTML.split("<br>");
		if (result[0]=="") return "";
		for (var i=0;i<result.length;i++) {
			var result_detail = result[i].split(",");
			if (i==input_index-1) {
				if (input_column=="name")
					return result_detail[0];
				else if (input_column=="distance")
					return Number(result_detail[1]);
			}
		}
		return "";
	}

	function faceapirecognize_clear() {
		message.innerHTML = "";
	}

	function faceapirecognize_video_position(input_left, input_top) {
		var region = document.getElementById("region_faceapirecognize");
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
	}

	function faceapirecognize_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_faceapirecognize");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";	

		document.getElementById("size_faceapirecognize").innerHTML = "{\"width\":"+input_width+", \"height\": "+input_height+"}";

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
						obj = "gamevideo_faceapirecognize";
						}
					}) 
			}
		}) 
	}

	function faceapirecognize_startvideo_stream(url) {
		var img = document.getElementById("gameimage_faceapirecognize");
		img.src = url;
		img.onload = function() {
			document.getElementById("size_faceapirecognize").innerHTML = "{\"width\":"+img.width+", \"height\": "+img.height+"}";
			obj = "gameimage_faceapirecognize";
		}
	}

	function faceapirecognize_recognitionFinish() {
	}   
	
	function faceapirecognize_unrecognitionFinish() {
	}  

	window.faceapirecognize_number = faceapirecognize_number;
	window.faceapirecognize_get = faceapirecognize_get;
	window.faceapirecognize_video = faceapirecognize_video;
	window.faceapirecognize_state = faceapirecognize_state;	
	window.faceapirecognize_detect = faceapirecognize_detect;
	window.faceapirecognize_clear = faceapirecognize_clear;
	window.faceapirecognize_video_position = faceapirecognize_video_position;
	window.faceapirecognize_startvideo_media = faceapirecognize_startvideo_media;
	window.faceapirecognize_startvideo_stream = faceapirecognize_startvideo_stream;
	window.faceapirecognize_recognitionFinish = faceapirecognize_recognitionFinish;
	window.faceapirecognize_unrecognitionFinish = faceapirecognize_unrecognitionFinish;    

}(window, window.document));
