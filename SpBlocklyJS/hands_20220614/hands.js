// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function hands_video(input_video, input_hands, input_mirrorimage, input_opacity) {
	document.getElementById("mirrorimage_hands").value = input_mirrorimage;
	document.getElementById("hands").value = input_hands;	
	document.getElementById("region_hands").style.opacity = input_opacity;
    document.getElementById("gamecanvas_canvasElement").style.display = input_video;
  }
	
  function hands_distance(input_x0,input_y0,input_x1,input_y1) {
      return Math.sqrt(Math.pow((input_x1-input_x0), 2) + Math.pow((input_y1-input_y0), 2));
  } 	
	
  function hands_angle(input_x0,input_y0,input_x1,input_y1) {
      var angle = (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
      if (angle<0) angle = 180 + angle;
      if (input_y0<input_y1) angle = 180 + angle;
      return angle;
  } 
  
  function hands_state(input_state){
    document.getElementById('handsState').innerHTML = input_state;
  }	

  function hands_video_position(input_left, input_top) {
	var region = document.getElementById("region_hands");
    region.style.position = "absolute";
    region.style.left = input_left + "px";
    region.style.top = input_top + "px";
  }
  
  	function hands_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_hands");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas_hands = document.getElementById("gamecanvas_hands");  
		canvas_hands.setAttribute("width", video.width);
		canvas_hands.setAttribute("height", video.height);
		canvas_hands.style.width = video.width+"px";
		canvas_hands.style.height = video.height+"px";
		
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
						document.getElementById("sourceId_hands").innerHTML = "gamevideo_hands";
					}
				}) 
			}
		}) 
	}

  	function hands_startvideo_stream(url) {
		var img = document.getElementById("gameimage_hands");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_hands").innerHTML = "gameimage_hands";
		}	
	} 

	function hands_position(input_hand, input_index, input_data){
		var json = document.getElementById("gamediv_hands").innerHTML;
		if (json!=""&&json!="undefined") {
			var result = JSON.parse('{"data":'+json+'}');
			var canvasElement = document.getElementById('gamecanvas_canvasElement');
			if (result["data"].length>0) {
				if (input_data=="x")
					return Number(result["data"][input_hand][input_index].x)*Number(canvasElement.width);
				else if (input_data=="y")
					return Number(result["data"][input_hand][input_index].y)*Number(canvasElement.height);
				else if (input_data=="z")
					return Number(result["data"][input_hand][input_index].z)*Number(canvasElement.width);
			}
		}
		return "";
	}

	function hands_number(){
		var json = document.getElementById("gamediv_hands").innerHTML;
		if (json!=""&&json!="undefined") {
			var result = JSON.parse('{"data":'+json+'}');
			var canvasElement = document.getElementById('gamecanvas_canvasElement');
			return result["data"].length;
		}
		return 0;
	}

  function hands_part_angle(input_number, input_P1, input_P2, input_axis, input_adjust) {
	  if (input_axis=="x") {
		var righthandP1y = (hands_position(input_number, input_P1, "y"));
		var righthandP1z = (hands_position(input_number, input_P1, "z"));
		var righthandP2y = (hands_position(input_number, input_P2, "y"));
		var righthandP2z = (hands_position(input_number, input_P2, "z"));
		var rotateAngleX = (hands_angle(righthandP1y, righthandP1z, righthandP2y, righthandP2z));
		if (rotateAngleX) {
			var valX = rotateAngleX+input_adjust;
			if (valX<0) valX+=360
				return valX;
		}
		else
			return null;
	  }
	  else if (input_axis=="y") {
		var righthandP1x = (hands_position(input_number, input_P1, "x"));
		var righthandP1z = (hands_position(input_number, input_P1, "z"));
		var righthandP2x = (hands_position(input_number, input_P2, "x"));
		var righthandP2z = (hands_position(input_number, input_P2, "z"));
		var rotateAngleY = (hands_angle(righthandP1x, righthandP1z, righthandP2x, righthandP2z));
		if (rotateAngleY) {
			var valY = rotateAngleY-270+input_adjust;
			if (valY<0) valY+=360
				return valY;
		}
		else
			return null;
	  }
	  else if (input_axis=="z") {
		var righthandP1x = (hands_position(input_number, input_P1, "x"));
		var righthandP1y = (hands_position(input_number, input_P1, "y"));
		var righthandP2x = (hands_position(input_number, input_P2, "x"));
		var righthandP2y = (hands_position(input_number, input_P2, "y"));
		var rotateAngleZ = (hands_angle(righthandP1x, righthandP1y, righthandP2x, righthandP2y));
		if (rotateAngleZ) {
			var valZ = rotateAngleZ-270+input_adjust;
			if (valZ<0) valZ+=360
				return valZ;
		}
		else
			return null;
	  }
  } 	
  
	function hands_clear() {
		document.getElementById("gamediv_lefthand_hands").innerHTML = "";
		document.getElementById("gamediv_righthand_hands").innerHTML = "";
	}
	
	function hands_recognitionFinish() {
	}
	
	window.hands_video = hands_video;
	window.hands_position = hands_position;
	window.hands_number = hands_number;	
	window.hands_distance = hands_distance;
	window.hands_angle = hands_angle;
	window.hands_part_angle =  hands_part_angle;	
	window.hands_video_position = hands_video_position;
	window.hands_state = hands_state;
	window.hands_startvideo_media = hands_startvideo_media;
	window.hands_startvideo_stream = hands_startvideo_stream;
	window.hands_clear = hands_clear;
	window.hands_recognitionFinish = hands_recognitionFinish;	
	
}(window, window.document));
