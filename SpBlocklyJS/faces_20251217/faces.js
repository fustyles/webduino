// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function faces_video(input_video, input_mirrorimage, input_opacity, input_faces) {
	document.getElementById("mirrorimage_faces").value = input_mirrorimage;
	document.getElementById("faces").value = input_faces;
	document.getElementById("region_faces").style.opacity = input_opacity;
    document.getElementById("gamecanvas_canvasElement").style.display = input_video;
  }
	
  function faces_distance(input_x0,input_y0,input_x1,input_y1) {
      return Math.sqrt(Math.pow((input_x1-input_x0), 2) + Math.pow((input_y1-input_y0), 2));
  } 	
	
  function faces_angle(input_x0,input_y0,input_x1,input_y1) {
      var angle = (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
      if (angle<0) angle = 180 + angle;
      if (input_y0<input_y1) angle = 180 + angle;
      return angle;
  } 

	function faces_angle_3points(x1, y1, x2, y2, x3, y3){
		var Ax = x1 - x2;
		var Ay = y1 - y2;
		var Bx = x3 - x2;
		var By = y3 - y2;
		var AB = Ax*Bx + Ay*By;
		var AL = Math.sqrt(Math.pow(Ax, 2) + Math.pow(Ay, 2));
		var BL = Math.sqrt(Math.pow(Bx, 2) + Math.pow(By, 2));
		return (Math.acos(AB/(AL*BL))/ Math.PI) * 180;
	}  
  
  function faces_state(input_state){
    document.getElementById('facesState').innerHTML = input_state;
  }	

  function faces_video_position(input_left, input_top) {
	var region = document.getElementById("region_faces");
    region.style.position = "absolute";
    region.style.left = input_left + "px";
    region.style.top = input_top + "px";
  }
  
  	function faces_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_faces");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas_faces = document.getElementById("gamecanvas_faces");  
		canvas_faces.setAttribute("width", video.width);
		canvas_faces.setAttribute("height", video.height);
		canvas_faces.style.width = video.width+"px";
		canvas_faces.style.height = video.height+"px";
		
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
						document.getElementById("sourceId_faces").innerHTML = "gamevideo_faces";
					}
				}) 
			}
		}) 
	}

  	function faces_startvideo_stream(url) {
		var img = document.getElementById("gameimage_faces");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_faces").innerHTML = "gameimage_faces";
		}	
	} 

	function faces_position(input_index, input_data){
		var json = document.getElementById("gamediv_faces").innerHTML;
		if (json!=""&&json!="undefined") {
			var result = JSON.parse('{"data":'+json+'}');
			var canvas = document.getElementById('gamecanvas_faces');
			if (result["data"].length>0) {
				if (input_data=="x")
					return Number(result["data"][0][input_index].x)*Number(canvas.width);
				else if (input_data=="y")
					return Number(result["data"][0][input_index].y)*Number(canvas.height);
				else if (input_data=="z")
					return Number(result["data"][0][input_index].z)*Number(canvas.width);			
			}
		}
		return "";
	}
	
	function faces_number(){
		var json = document.getElementById("gamediv_faces").innerHTML;
		if (json!=""&&json!="undefined") {
			var result = JSON.parse('{"data":'+json+'}');
			return result["data"].length;
		}
		return 0;
	}		

  function faces_part_angle(input_P1, input_P2, input_axis, input_adjust) {
	  if (input_axis=="x") {
		var rightfaceP1y = (faces_position(input_P1, "y"));
		var rightfaceP1z = (faces_position(input_P1, "z"));
		var rightfaceP2y = (faces_position(input_P2, "y"));
		var rightfaceP2z = (faces_position(input_P2, "z"));
		var rotateAngleX = (faces_angle(rightfaceP1y, rightfaceP1z, rightfaceP2y, rightfaceP2z));
		if (rotateAngleX) {
			var valX = rotateAngleX+input_adjust;
			if (valX<0) valX+=360
				return valX;
		}
		else
			return null;
	  }
	  else if (input_axis=="y") {
		var rightfaceP1x = (faces_position(input_P1, "x"));
		var rightfaceP1z = (faces_position(input_P1, "z"));
		var rightfaceP2x = (faces_position(input_P2, "x"));
		var rightfaceP2z = (faces_position(input_P2, "z"));
		var rotateAngleY = (faces_angle(rightfaceP1x, rightfaceP1z, rightfaceP2x, rightfaceP2z));
		if (rotateAngleY) {
			var valY = rotateAngleY-270+input_adjust;
			if (valY<0) valY+=360
				return valY;
		}
		else
			return null;
	  }
	  else if (input_axis=="z") {
		var rightfaceP1x = (faces_position(input_P1, "x"));
		var rightfaceP1y = (faces_position(input_P1, "y"));
		var rightfaceP2x = (faces_position(input_P2, "x"));
		var rightfaceP2y = (faces_position(input_P2, "y"));
		var rotateAngleZ = (faces_angle(rightfaceP1x, rightfaceP1y, rightfaceP2x, rightfaceP2y));
		if (rotateAngleZ) {
			var valZ = rotateAngleZ-270+input_adjust;
			if (valZ<0) valZ+=360
				return valZ;
		}
		else
			return null;
	  }
  } 	
  
	function faces_clear() {
		document.getElementById("gamediv_faces").innerHTML = "";
	}
	
	function faces_recognitionFinish() {
	}
	
	function faces_unrecognitionFinish() {
	}	
	
	function faces_clip_video(canvasid, sourceid, alpha, points) {
		var canvasClip = document.getElementById(canvasid); 
		var ctxClip = canvasClip.getContext('2d');
		var result = document.getElementById("gamediv_faces");
		if (result.innerHTML=="undefined") return;
	console.log(points);	
		var marks = JSON.parse(result.innerHTML);
		var elementClip = document.getElementById(sourceid);
		canvasClip.setAttribute("width", elementClip.width);
		canvasClip.setAttribute("height", elementClip.height);
			
		ctxClip.globalAlpha = (alpha?alpha:1);
		for (var i=0;i<points.length;i++) {
			ctxClip.beginPath;
			for (var j=0;j<points[i].length;j++) {					
				if (j==0) { 
					ctxClip.moveTo(marks[0][points[i][j]-1]["x"]*elementClip.width, marks[0][points[i][j]-1]["y"]*elementClip.height); 
				}				
				else if (j<points[i].length) {
					ctxClip.lineTo(marks[0][points[i][j]-1]["x"]*elementClip.width, marks[0][points[i][j]-1]["y"]*elementClip.height);
				}
			}
		}	
		
		ctxClip.clip();
		ctxClip.drawImage(elementClip, 0, 0);
		ctxClip.closePath();
		ctxClip.restore();
	} 	
	
	function faces_clip_image(canvasid, sourceid, alpha, points) {
		var canvasClip = document.getElementById(canvasid); 
		var ctxClip = canvasClip.getContext('2d');
		var result = document.getElementById("gamediv_faces");
		if (result.innerHTML=="undefined") return;
		
		var marks = JSON.parse(result.innerHTML);
		var elementClip = document.getElementById(sourceid);
		canvasClip.setAttribute("width", elementClip.width);
		canvasClip.setAttribute("height", elementClip.height);
			
		ctxClip.globalAlpha = (alpha?alpha:1);
		for (var i=0;i<points.length;i++) {
			ctxClip.beginPath;
			for (var j=0;j<points[i].length;j++) {					
				if (j==0) { 
					ctxClip.moveTo(marks[0][points[i][j]-1]["x"]*elementClip.width, marks[0][points[i][j]-1]["y"]*elementClip.height); 
				}				
				else if (j<points[i].length) {
					ctxClip.lineTo(marks[0][points[i][j]-1]["x"]*elementClip.width, marks[0][points[i][j]-1]["y"]*elementClip.height);
				}
			}
		}	
		
		ctxClip.clip();
		ctxClip.drawImage(elementClip, 0, 0);
		ctxClip.closePath();
		ctxClip.restore();
	} 

	function faces_clip_color(canvasid, sourceid, drawcolor, points) {
		var canvasClip = document.getElementById(canvasid); 
		var ctxClip = canvasClip.getContext('2d');
		var result = document.getElementById("gamediv_faces");
		if (result.innerHTML=="undefined") return;
		
		var marks = JSON.parse(result.innerHTML);
		var elementClip = document.getElementById(sourceid);
		canvasClip.setAttribute("width", elementClip.width);
		canvasClip.setAttribute("height", elementClip.height);
					
		for (var i=0;i<points.length;i++) {
			ctxClip.beginPath;
			for (var j=0;j<points[i].length;j++) {				
				if (j==0) { 
					ctxClip.moveTo(marks[0][points[i][j]-1]["x"]*elementClip.width, marks[0][points[i][j]-1]["y"]*elementClip.height); 
				}				
				else if (j<points[i].length) {
					ctxClip.lineTo(marks[0][points[i][j]-1]["x"]*elementClip.width, marks[0][points[i][j]-1]["y"]*elementClip.height);
				}
			}
		}	
		
		ctxClip.clip();
		ctxClip.fillStyle = drawcolor;
		ctxClip.fill();
		ctxClip.closePath();
		ctxClip.restore();
	} 	
	
	window.faces_video = faces_video;
	window.faces_position = faces_position;
	window.faces_number = faces_number;
	window.faces_distance = faces_distance;
	window.faces_angle = faces_angle;
	window.faces_angle_3points = faces_angle_3points;
	window.faces_part_angle =  faces_part_angle;	
	window.faces_video_position = faces_video_position;
	window.faces_state = faces_state;
	window.faces_startvideo_media = faces_startvideo_media;
	window.faces_startvideo_stream = faces_startvideo_stream;
	window.faces_clear = faces_clear;
	window.faces_recognitionFinish = faces_recognitionFinish;
	window.faces_unrecognitionFinish = faces_unrecognitionFinish;
	window.faces_clip_video = faces_clip_video;
	window.faces_clip_image = faces_clip_image;
	window.faces_clip_color = faces_clip_color; 
	
}(window, window.document));
