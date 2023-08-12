// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

	function faceapidetect_faces(){
		var result = document.getElementById("result_faceapidetect").innerHTML.split("<br>");
		var result_detail = [];
		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				if (result[i]!="")
					result_detail.push(result[i].split(","));
			}
		}
		return result_detail;
	}
	
	function faceapidetect_face(input_index, input_property){
		var result = document.getElementById("result_faceapidetect").innerHTML.split("<br>");
		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				var result_detail = result[i].split(",");
				if (result_detail[0]==input_index) {
					for (var j=1;j<result_detail.length;j=j+2) {
						if (result_detail[j]==input_property) 
							return result_detail[j+1];
					}
				}
			}
		}
		return "";
	}
	
	function faceapidetect_number() {
		var result = document.getElementById("result_faceapidetect").innerHTML.split("<br>");
		if (result[0]=="")
			return 0;
		else
			return result.length;
	}	

	function faceapidetect_video(input_frame, input_result, input_opacity) {
		document.getElementById('frame_faceapidetect').value = input_frame;
		document.getElementById('result_faceapidetect').style.display = input_result;
		document.getElementById('region_faceapidetect').style.opacity = Number(input_opacity);
	}	

	function faceapidetect_state(input_state){
		document.getElementById('faceapiState').innerHTML = input_state;
	}	

	function faceapidetect_video_position(input_left, input_top) {
		var region = document.getElementById('region_faceapidetect');
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
	}
  
  	function faceapidetect_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_faceapidetect");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

	    document.getElementById("size_faceapidetect").innerHTML = "{\"width\":"+input_width+", \"height\": "+input_height+"}";
		
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
						document.getElementById("sourceId_faceapidetect").innerHTML = "gamevideo_faceapidetect";
					}
				}) 
			}
		}) 
	}

  	function faceapidetect_startvideo_stream(url) {
		var img = document.getElementById("gameimage_faceapidetect");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("size_faceapidetect").innerHTML = "{\"width\":"+img.width+", \"height\": "+img.height+"}";
			document.getElementById("sourceId_faceapidetect").innerHTML = "gameimage_faceapidetect";
		}
				
	}  

	function faceapidetect_clear() {
		document.getElementById("gamediv_faceapidetect").innerHTML = "";
	}
	
	function faceapidetect_recognitionFinish() {
	}
	
	function faceapidetect_unrecognitionFinish() {
	}	
	
	window.faceapidetect_face = faceapidetect_face;
	window.faceapidetect_faces = faceapidetect_faces;	
	window.faceapidetect_number = faceapidetect_number;
	window.faceapidetect_video = faceapidetect_video;
	window.faceapidetect_video_position = faceapidetect_video_position;
	window.faceapidetect_state = faceapidetect_state;
	window.faceapidetect_startvideo_media = faceapidetect_startvideo_media;
	window.faceapidetect_startvideo_stream = faceapidetect_startvideo_stream;  
	window.faceapidetect_clear = faceapidetect_clear;
	window.faceapidetect_recognitionFinish = faceapidetect_recognitionFinish;
	window.faceapidetect_unrecognitionFinish = faceapidetect_unrecognitionFinish;
	
}(window, window.document));
