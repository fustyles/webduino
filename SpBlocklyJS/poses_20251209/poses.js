// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function poses_video(input_video, input_mirrorimage, input_opacity, input_poses) {
	document.getElementById("mirrorimage_poses").value = input_mirrorimage;
	document.getElementById("poses").value = input_poses;
	document.getElementById("region_poses").style.opacity = input_opacity;
    document.getElementById("gamecanvas_canvasElement").style.display = input_video;
  }
	
  function poses_distance(input_x0,input_y0,input_x1,input_y1) {
      return Math.sqrt(Math.pow((input_x1-input_x0), 2) + Math.pow((input_y1-input_y0), 2));
  } 	
	
  function poses_angle(input_x0,input_y0,input_x1,input_y1) {
      var angle = (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
      if (angle<0) angle = 180 + angle;
      if (input_y0<input_y1) angle = 180 + angle;
      return angle;
  } 

	function poses_angle_3points(x1, y1, x2, y2, x3, y3){
		var Ax = x1 - x2;
		var Ay = y1 - y2;
		var Bx = x3 - x2;
		var By = y3 - y2;
		var AB = Ax*Bx + Ay*By;
		var AL = Math.sqrt(Math.pow(Ax, 2) + Math.pow(Ay, 2));
		var BL = Math.sqrt(Math.pow(Bx, 2) + Math.pow(By, 2));
		return (Math.acos(AB/(AL*BL))/ Math.PI) * 180;
	}  
  
  function poses_state(input_state){
    document.getElementById('posesState').innerHTML = input_state;
  }	

  function poses_video_position(input_left, input_top) {
	var region = document.getElementById("region_poses");
    region.style.position = "absolute";
    region.style.left = input_left + "px";
    region.style.top = input_top + "px";
  }
  
  	function poses_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_poses");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas_poses = document.getElementById("gamecanvas_poses");  
		canvas_poses.setAttribute("width", video.width);
		canvas_poses.setAttribute("height", video.height);
		canvas_poses.style.width = video.width+"px";
		canvas_poses.style.height = video.height+"px";
		
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
						document.getElementById("sourceId_poses").innerHTML = "gamevideo_poses";
					}
				}) 
			}
		}) 
	}

  	function poses_startvideo_stream(url) {
		var img = document.getElementById("gameimage_poses");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_poses").innerHTML = "gameimage_poses";
		}	
	} 

	function poses_position(input_poses, input_data){
		var json = document.getElementById("gamediv_poses").innerHTML;
		if (json!=""&&json!="undefined") {
			var result = JSON.parse('{"data":'+json+'}');
			var canvasElement = document.getElementById('gamecanvas_canvasElement');
			if (result["data"].length>0) {
				if (input_data=="x")
					return Number(result["data"][input_poses].x)*Number(canvasElement.width);
				else if (input_data=="y")
					return Number(result["data"][input_poses].y)*Number(canvasElement.height);
				else if (input_data=="z")
					return Number(result["data"][input_poses].z)*Number(canvasElement.width);
				else if (input_data=="visibility")
					return Number(result["data"][input_poses].visibility);				
			}
		}
		return "";
	}	

  function poses_part_angle(input_P1, input_P2, input_axis, input_adjust) {
	  if (input_axis=="x") {
		var rightposeP1y = (poses_position(input_P1, "y"));
		var rightposeP1z = (poses_position(input_P1, "z"));
		var rightposeP2y = (poses_position(input_P2, "y"));
		var rightposeP2z = (poses_position(input_P2, "z"));
		var rotateAngleX = (poses_angle(rightposeP1y, rightposeP1z, rightposeP2y, rightposeP2z));
		if (rotateAngleX) {
			var valX = rotateAngleX+input_adjust;
			if (valX<0) valX+=360
				return valX;
		}
		else
			return null;
	  }
	  else if (input_axis=="y") {
		var rightposeP1x = (poses_position(input_P1, "x"));
		var rightposeP1z = (poses_position(input_P1, "z"));
		var rightposeP2x = (poses_position(input_P2, "x"));
		var rightposeP2z = (poses_position(input_P2, "z"));
		var rotateAngleY = (poses_angle(rightposeP1x, rightposeP1z, rightposeP2x, rightposeP2z));
		if (rotateAngleY) {
			var valY = rotateAngleY-270+input_adjust;
			if (valY<0) valY+=360
				return valY;
		}
		else
			return null;
	  }
	  else if (input_axis=="z") {
		var rightposeP1x = (poses_position(input_P1, "x"));
		var rightposeP1y = (poses_position(input_P1, "y"));
		var rightposeP2x = (poses_position(input_P2, "x"));
		var rightposeP2y = (poses_position(input_P2, "y"));
		var rotateAngleZ = (poses_angle(rightposeP1x, rightposeP1y, rightposeP2x, rightposeP2y));
		if (rotateAngleZ) {
			var valZ = rotateAngleZ-270+input_adjust;
			if (valZ<0) valZ+=360
				return valZ;
		}
		else
			return null;
	  }
  } 	
  
	function poses_clear() {
		document.getElementById("gamediv_poses").innerHTML = "";
	}
	
	function poses_recognitionFinish() {
	}
	
	function poses_unrecognitionFinish() {
	}	
	
	window.poses_video = poses_video;
	window.poses_position = poses_position;
	window.poses_distance = poses_distance;
	window.poses_angle = poses_angle;
	window.poses_angle_3points = poses_angle_3points;
	window.poses_part_angle =  poses_part_angle;	
	window.poses_video_position = poses_video_position;
	window.poses_state = poses_state;
	window.poses_startvideo_media = poses_startvideo_media;
	window.poses_startvideo_stream = poses_startvideo_stream;
	window.poses_clear = poses_clear;
	window.poses_recognitionFinish = poses_recognitionFinish;
	window.poses_unrecognitionFinish = poses_unrecognitionFinish;
	
}(window, window.document));
