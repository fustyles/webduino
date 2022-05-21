// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';

	function teachablemachine_video(input_result, input_mirrorimage, input_opacity) {
		document.getElementById('gamediv_teachablemachine').style.display = input_result;
		document.getElementById('mirrorimage_teachablemachine').value = input_mirrorimage;
		document.getElementById("region_teachablemachine").style.opacity = Number(input_opacity);
	}	

	function teachablemachine_model(input_project, input_model){
		document.getElementById('project_teachablemachine').innerHTML = input_project;
		document.getElementById("modelPath_teachablemachine").value = input_model;
	}

	function teachablemachine_result(input_proportion) {
		var result = document.getElementById("gamediv_teachablemachine").innerHTML.split("<br>");
		var result_arr = [];
		var maxClass = "";
		var maxProbability = "";

		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				var result_detail = result[i].split(",");
				if (i==0) {
					maxClass = result_detail[0];
					maxProbability = result_detail[1];
				} else {
					if (result_detail[1]>maxProbability) {
						maxClass = result_detail[0];
						maxProbability = result_detail[1];
					}
				}
				result_arr.push(result_detail);
			}
		}

		if (input_proportion=="")
			return result_arr;
		else if (input_proportion=="maxClass")
			return maxClass;
		else if (input_proportion=="maxProbability")
			return Number(maxProbability);
	}

	function teachablemachine_state(input_state){
		document.getElementById('teachablemachineState').innerHTML = input_state;
	}	

	function teachablemachine_video_position(input_left, input_top) {
		var region = document.getElementById("region_teachablemachine");
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
	}
  
  	function teachablemachine_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_teachablemachine");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas = document.getElementById("gamecanvas_teachablemachine");  
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
						document.getElementById("sourceId_teachablemachine").innerHTML = "gamevideo_teachablemachine";
					}
				}) 
			}
		}) 
	}

  	function teachablemachine_startvideo_stream(url) {
		var img = document.getElementById("gameimage_teachablemachine");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_teachablemachine").innerHTML = "gameimage_teachablemachine";
		}	
	}

	function teachablemachine_clear() {
		document.getElementById("gamediv_teachablemachine").innerHTML = "";
	}
	
	function teachablemachine_recognitionFinish() {
	}

	window.teachablemachine_video = teachablemachine_video;
	window.teachablemachine_model = teachablemachine_model;
	window.teachablemachine_result = teachablemachine_result;
	window.teachablemachine_video_position = teachablemachine_video_position;
	window.teachablemachine_state = teachablemachine_state;
	window.teachablemachine_startvideo_media = teachablemachine_startvideo_media;
	window.teachablemachine_startvideo_stream = teachablemachine_startvideo_stream;  
	window.teachablemachine_clear = teachablemachine_clear;
	window.teachablemachine_recognitionFinish = teachablemachine_recognitionFinish;
	
}(window, window.document));
