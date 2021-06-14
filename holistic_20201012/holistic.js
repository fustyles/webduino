// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function holistic_video(input_video, input_face, input_pose, input_lefthand, input_righthand, input_mirrorimage, input_opacity) {
	document.getElementById("mirrorimage_holistic").value = input_mirrorimage;
	document.getElementById("face_holistic").value = input_face;
	document.getElementById("pose_holistic").value = input_pose;
	document.getElementById("lefthand_holistic").value = input_lefthand;
	document.getElementById("righthand_holistic").value = input_righthand;		
	document.getElementById("region_holistic").style.opacity = input_opacity;
    document.getElementById("gamecanvas_canvasElement").style.display = input_video;
  }
	
  function holistic_distance(input_x0,input_y0,input_x1,input_y1) {
      return Math.sqrt(Math.pow((input_x1-input_x0), 2) + Math.pow((input_y1-input_y0), 2));
  } 	
	
  function holistic_angle(input_x0,input_y0,input_x1,input_y1) {
      return (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
  } 
  
  function holistic_state(input_state){
    document.getElementById('holisticState').innerHTML = input_state;
  }	

  function holistic_video_position(input_left, input_top) {
	var region = document.getElementById("region_holistic");
    region.style.position = "absolute";
    region.style.left = input_left + "px";
    region.style.top = input_top + "px";
  }
  
  	function holistic_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_holistic");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas_holistic = document.getElementById("gamecanvas_holistic");  
		canvas_holistic.setAttribute("width", video.width);
		canvas_holistic.setAttribute("height", video.height);
		canvas_holistic.style.width = video.width+"px";
		canvas_holistic.style.height = video.height+"px";
		
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
						document.getElementById("sourceId_holistic").innerHTML = "gamevideo_holistic";
					}
				}) 
			}
		}) 
	}

  	function holistic_startvideo_stream(url) {
		var img = document.getElementById("gameimage_holistic");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_holistic").innerHTML = "gameimage_holistic";
		}	
	} 

	function holistic_face_position(input_index, input_data){
		var json = document.getElementById("gamediv_face_holistic").innerHTML;
		if (json!=""&&json!="undefined") {
			var result = JSON.parse('{"data":'+json+'}');
			var canvasElement = document.getElementById('gamecanvas_canvasElement');
			if (result["data"].length>0) {
				if (input_data=="x")
					return Number(result["data"][input_index].x)*Number(canvasElement.width);
				else if (input_data=="y")
					return Number(result["data"][input_index].y)*Number(canvasElement.height);
				else if (input_data=="z")
					return Number(result["data"][input_index].z);
			}
		}
		return "";
	}

	function holistic_pose_position(input_index, input_data){
		var json = document.getElementById("gamediv_pose_holistic").innerHTML;
		if (json!=""&&json!="undefined") {
			var result = JSON.parse('{"data":'+json+'}');
			var canvasElement = document.getElementById('gamecanvas_canvasElement');
			if (result["data"].length>0) {
				if (input_data=="x")
					return Number(result["data"][input_index].x)*Number(canvasElement.width);
				else if (input_data=="y")
					return Number(result["data"][input_index].y)*Number(canvasElement.height);
				else if (input_data=="z")
					return Number(result["data"][input_index].z);
			}
		}
		return "";
	}
	
	function holistic_lefthand_position(input_index, input_data){
		var json = document.getElementById("gamediv_lefthand_holistic").innerHTML;
		if (json!=""&&json!="undefined") {
			var result = JSON.parse('{"data":'+json+'}');
			var canvasElement = document.getElementById('gamecanvas_canvasElement');
			if (result["data"].length>0) {
				if (input_data=="x")
					return Number(result["data"][input_index].x)*Number(canvasElement.width);
				else if (input_data=="y")
					return Number(result["data"][input_index].y)*Number(canvasElement.height);
				else if (input_data=="z")
					return Number(result["data"][input_index].z);
			}
		}
		return "";
	}

	function holistic_righthand_position(input_index, input_data){
		var json = document.getElementById("gamediv_righthand_holistic").innerHTML;
		if (json!=""&&json!="undefined") {
			var result = JSON.parse('{"data":'+json+'}');
			var canvasElement = document.getElementById('gamecanvas_canvasElement');
			if (result["data"].length>0) {
				if (input_data=="x")
					return Number(result["data"][input_index].x)*Number(canvasElement.width);
				else if (input_data=="y")
					return Number(result["data"][input_index].y)*Number(canvasElement.height);
				else if (input_data=="z")
					return Number(result["data"][input_index].z);
			}
		}
		return "";
	}	

	window.holistic_video = holistic_video;
	window.holistic_face_position = holistic_face_position;
	window.holistic_pose_position = holistic_pose_position;
	window.holistic_lefthand_position = holistic_lefthand_position;
	window.holistic_righthand_position = holistic_righthand_position;	
	window.holistic_distance = holistic_distance;
	window.holistic_angle = holistic_angle;	
	window.holistic_video_position = holistic_video_position;
	window.holistic_state = holistic_state;
	window.holistic_startvideo_media = holistic_startvideo_media;
	window.holistic_startvideo_stream = holistic_startvideo_stream;
	
}(window, window.document));
