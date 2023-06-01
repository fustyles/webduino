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
      var angle = (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
      if (angle<0) angle = 180 + angle;
      if (input_y0<input_y1) angle = 180 + angle;
      return angle;
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
					return Number(result["data"][input_index].z)*Number(canvasElement.width);
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
					return Number(result["data"][input_index].z)*Number(canvasElement.width);
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
					return Number(result["data"][input_index].z)*Number(canvasElement.width);
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
					return Number(result["data"][input_index].z)*Number(canvasElement.width);
			}
		}
		return "";
	}

	function holistic_all_position(input_part){
		if (input_part=="face")
			var json = document.getElementById("gamediv_face_holistic").innerHTML
		else if (input_part=="pose")
			var json = document.getElementById("gamediv_pose_holistic").innerHTML
		else if (input_part=="lefthand")
			var json = document.getElementById("gamediv_lefthand_holistic").innerHTML
		else if (input_part=="righthand")			
			var json = document.getElementById("gamediv_righthand_holistic").innerHTML
	
		var result_arr = [];
		var result_property_arr = [];
		if (json!=""&&json!="undefined") {
			var result = JSON.parse('{"data":'+json+'}');
			var canvasElement = document.getElementById('gamecanvas_canvasElement');
			if (result["data"].length>0) {
				for (var i=0;i<result["data"].length;i++) {
					result_property_arr = [];
					result_property_arr.push(Number(result["data"][i].x)*Number(canvasElement.width));
					result_property_arr.push(Number(result["data"][i].y)*Number(canvasElement.height));
					result_property_arr.push(Number(result["data"][i].z)*Number(canvasElement.width));
					result_arr.push(result_property_arr);
				}
			}
		}
		return result_arr;
	}

  function holistic_part_angle(input_part, input_P1, input_P2, input_axis, input_adjust) {
	  if (input_part=="face") {
		  if (input_axis=="x") {
			var faceP1y = (holistic_face_position(input_P1, "y"));
			var faceP1z = (holistic_face_position(input_P1, "z"));
			var faceP2y = (holistic_face_position(input_P2, "y"));
			var faceP2z = (holistic_face_position(input_P2, "z"));
			var rotateAngleX = (holistic_angle(faceP1y, faceP1z, faceP2y, faceP2z));
			if (rotateAngleX) {
				var valX = rotateAngleX-90+input_adjust;
				if (valX<0) valX+=360
					return valX;
			}
			else
				return null;
		  }
		  else if (input_axis=="y") {
			var faceP1x = (holistic_face_position(input_P1, "x"));
			var faceP1z = (holistic_face_position(input_P1, "z"));
			var faceP2x = (holistic_face_position(input_P2, "x"));
			var faceP2z = (holistic_face_position(input_P2, "z"));
			var rotateAngleY = (holistic_angle(faceP1x, faceP1z, faceP2x, faceP2z));
			if (rotateAngleY) {
				var valY = rotateAngleY-90+input_adjust;
				if (valY<0) valY+=360
					return valY;
			}
			else
				return null;
		  }
		  else if (input_axis=="z") {
			var faceP1x = (holistic_face_position(input_P1, "x"));
			var faceP1y = (holistic_face_position(input_P1, "y"));
			var faceP2x = (holistic_face_position(input_P2, "x"));
			var faceP2y = (holistic_face_position(input_P2, "y"));
			var rotateAngleZ = (holistic_angle(faceP1x, faceP1y, faceP2x, faceP2y));
			if (rotateAngleZ) {
				var valZ = rotateAngleZ-180+input_adjust;
				if (valZ<0) valZ+=360
					return valZ;
			}
			else
				return null;
		  }
	  }
	  else if (input_part=="pose") {
		  if (input_axis=="x") {
			var poseP1y = (holistic_pose_position(input_P1, "y"));
			var poseP1z = (holistic_pose_position(input_P1, "z"));
			var poseP2y = (holistic_pose_position(input_P2, "y"));
			var poseP2z = (holistic_pose_position(input_P2, "z"));
			var rotateAngleX = (holistic_angle(poseP1y, poseP1z, poseP2y, poseP2z));
			if (rotateAngleX) {
				var valX = rotateAngleX-180+input_adjust;
				if (valX<0) valX+=360
					return valX;
			}
			else
				return null;
		  }
		  else if (input_axis=="y") {
			var poseP1x = (holistic_pose_position(input_P1, "x"));
			var poseP1z = (holistic_pose_position(input_P1, "z"));
			var poseP2x = (holistic_pose_position(input_P2, "x"));
			var poseP2z = (holistic_pose_position(input_P2, "z"));
			var rotateAngleY = (holistic_angle(poseP1x, poseP1z, poseP2x, poseP2z));
			if (rotateAngleY) {
				var valY = rotateAngleY-90+input_adjust;
				if (valY<0) valY+=360
					return valY;
			}
			else
				return null;
		  }
		  else if (input_axis=="z") {
			var poseP1x = (holistic_pose_position(input_P1, "x"));
			var poseP1y = (holistic_pose_position(input_P1, "y"));
			var poseP2x = (holistic_pose_position(input_P2, "x"));
			var poseP2y = (holistic_pose_position(input_P2, "y"));
			var rotateAngleZ = (holistic_angle(poseP1x, poseP1y, poseP2x, poseP2y));
			if (rotateAngleZ) {
				var valZ = rotateAngleZ-90+input_adjust;
				if (valZ<0) valZ+=360
					return valZ;
			}
			else
				return null;
		  }
	  }
	  else if (input_part=="lefthand") {
		  if (input_axis=="x") {
			var lefthandP1y = (holistic_lefthand_position(input_P1, "y"));
			var lefthandP1z = (holistic_lefthand_position(input_P1, "z"));
			var lefthandP2y = (holistic_lefthand_position(input_P2, "y"));
			var lefthandP2z = (holistic_lefthand_position(input_P2, "z"));
			var rotateAngleX = (holistic_angle(lefthandP1y, lefthandP1z, lefthandP2y, lefthandP2z));
			if (rotateAngleX) {
				var valX = rotateAngleX+input_adjust;
				if (valX<0) valX+=360
					return valX;
			}
			else
				return null;
		  }
		  else if (input_axis=="y") {
			var lefthandP1x = (holistic_lefthand_position(input_P1, "x"));
			var lefthandP1z = (holistic_lefthand_position(input_P1, "z"));
			var lefthandP2x = (holistic_lefthand_position(input_P2, "x"));
			var lefthandP2z = (holistic_lefthand_position(input_P2, "z"));
			var rotateAngleY = (holistic_angle(lefthandP1x, lefthandP1z, lefthandP2x, lefthandP2z));
			if (rotateAngleY) {
				var valY = rotateAngleY-90+input_adjust;
				if (valY<0) valY+=360
					return valY;
			}
			else
				return null;
		  }
		  else if (input_axis=="z") {
			var lefthandP1x = (holistic_lefthand_position(input_P1, "x"));
			var lefthandP1y = (holistic_lefthand_position(input_P1, "y"));
			var lefthandP2x = (holistic_lefthand_position(input_P2, "x"));
			var lefthandP2y = (holistic_lefthand_position(input_P2, "y"));
			var rotateAngleZ = (holistic_angle(lefthandP1x, lefthandP1y, lefthandP2x, lefthandP2y));
			if (rotateAngleZ) {
				var valZ = rotateAngleZ-90+input_adjust;
				if (valZ<0) valZ+=360
					return valZ;
			}
			else
				return null;
		  }
	  }
	  else if (input_part=="righthand") {
		  if (input_axis=="x") {
			var righthandP1y = (holistic_righthand_position(input_P1, "y"));
			var righthandP1z = (holistic_righthand_position(input_P1, "z"));
			var righthandP2y = (holistic_righthand_position(input_P2, "y"));
			var righthandP2z = (holistic_righthand_position(input_P2, "z"));
			var rotateAngleX = (holistic_angle(righthandP1y, righthandP1z, righthandP2y, righthandP2z));
			if (rotateAngleX) {
				var valX = rotateAngleX+input_adjust;
				if (valX<0) valX+=360
					return valX;
			}
			else
				return null;
		  }
		  else if (input_axis=="y") {
			var righthandP1x = (holistic_righthand_position(input_P1, "x"));
			var righthandP1z = (holistic_righthand_position(input_P1, "z"));
			var righthandP2x = (holistic_righthand_position(input_P2, "x"));
			var righthandP2z = (holistic_righthand_position(input_P2, "z"));
			var rotateAngleY = (holistic_angle(righthandP1x, righthandP1z, righthandP2x, righthandP2z));
			if (rotateAngleY) {
				var valY = rotateAngleY-270+input_adjust;
				if (valY<0) valY+=360
					return valY;
			}
			else
				return null;
		  }
		  else if (input_axis=="z") {
			var righthandP1x = (holistic_righthand_position(input_P1, "x"));
			var righthandP1y = (holistic_righthand_position(input_P1, "y"));
			var righthandP2x = (holistic_righthand_position(input_P2, "x"));
			var righthandP2y = (holistic_righthand_position(input_P2, "y"));
			var rotateAngleZ = (holistic_angle(righthandP1x, righthandP1y, righthandP2x, righthandP2y));
			if (rotateAngleZ) {
				var valZ = rotateAngleZ-270+input_adjust;
				if (valZ<0) valZ+=360
					return valZ;
			}
			else
				return null;
		  }
	  }	  
  } 	
  
	function holistic_recognitionFinish() {
	}  
	
	function holistic_unrecognitionFinish() {
	} 	

	window.holistic_video = holistic_video;
	window.holistic_face_position = holistic_face_position;
	window.holistic_pose_position = holistic_pose_position;
	window.holistic_lefthand_position = holistic_lefthand_position;
	window.holistic_righthand_position = holistic_righthand_position;
	window.holistic_all_position = holistic_all_position;	
	window.holistic_distance = holistic_distance;
	window.holistic_angle = holistic_angle;
	window.holistic_part_angle =  holistic_part_angle;	
	window.holistic_video_position = holistic_video_position;
	window.holistic_state = holistic_state;
	window.holistic_startvideo_media = holistic_startvideo_media;
	window.holistic_startvideo_stream = holistic_startvideo_stream;
	window.holistic_recognitionFinish = holistic_recognitionFinish;	
	window.holistic_unrecognitionFinish = holistic_unrecognitionFinish;	
	
}(window, window.document));
