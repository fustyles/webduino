// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

	function yolov8n_video(input_modelpath, input_classes, input_result, input_frame, input_mirrorimage, input_opacity) {
		document.getElementById('modelpath_yolov8n').innerHTML = input_modelpath;
		document.getElementById('classes_yolov8n').innerHTML = input_classes;        
		document.getElementById('gamediv_yolov8n').style.display = input_result;
		document.getElementById('frame_yolov8n').value = input_frame;
		document.getElementById('mirrorimage_yolov8n').value = input_mirrorimage;
		document.getElementById("region_yolov8n").style.opacity = input_opacity;
	}

	function yolov8n_object(input_class, input_index, input_data) {
		var n=0;
		var result = document.getElementById("gamediv_yolov8n").innerHTML.split("<br>");
		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				var result_detail = result[i].split(",");
				if (result_detail[0]==input_class||input_class=="") {
					if (n==input_index&&input_data=="")
						return result_detail;
					else if (n==input_index&&input_data=="class")
						return result_detail[0];
					else if (n==input_index&&input_data=="score")
						return Number(result_detail[1]);
					else if (n==input_index&&input_data=="x")
						return Number(result_detail[2]);
					else if (n==input_index&&input_data=="y")
						return Number(result_detail[3]);
					else if (n==input_index&&input_data=="upperx")
						return Number(result_detail[2])+Number(result_detail[4])/2;
					else if (n==input_index&&input_data=="uppery")
						return Number(result_detail[3]);					
					else if (n==input_index&&input_data=="middlex")
						return Number(result_detail[2])+Number(result_detail[4])/2;
					else if (n==input_index&&input_data=="middley")
						return Number(result_detail[3])+Number(result_detail[5])/2;
					else if (n==input_index&&input_data=="bottomx")
						return Number(result_detail[2])+Number(result_detail[4])/2;
					else if (n==input_index&&input_data=="bottomy")
						return Number(result_detail[3])+Number(result_detail[5]);					
					else if (n==input_index&&input_data=="width")
						return Number(result_detail[4]);
					else if (n==input_index&&input_data=="height")
						return Number(result_detail[5]);
					
					n++;
				}
			}
		}
		return "";
	}

	function yolov8n_object_number(input_class) {
		var result = document.getElementById("gamediv_yolov8n").innerHTML.split("<br>");
		if (result[0]=="")
			return 0;
        
		var n=0;
		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				var result_detail = result[i].split(",");
				if (result_detail[0]==input_class)
					n++;
			}
		}
		return n;
	}	  

	function yolov8n_state(input_state){
		document.getElementById('yolov8nState').innerHTML = input_state;
	}	

	function yolov8n_video_position(input_left, input_top) {
		var region = document.getElementById("region_yolov8n");
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
	}
  
  	function yolov8n_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_yolov8n");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas = document.getElementById("gamecanvas_yolov8n");  
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
						document.getElementById("sourceId_yolov8n").innerHTML = "gamevideo_yolov8n";
					}
				}) 
			}
		}) 
	}

  	function yolov8n_startvideo_stream(url) {
		var img = document.getElementById("gameimage_yolov8n");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_yolov8n").innerHTML = "gameimage_yolov8n";
		}	
	}
   
	function yolov8n_clear() {
		document.getElementById("gamediv_yolov8n").innerHTML = "";
	}
	
	function yolov8n_recognitionFinish() {
	}
	
	function yolov8n_unrecognitionFinish() {
	}

	function yolov8n_xy_in_triangle(x, y, x1, y1, x2, y2, x3, y3) {
	    var area = Math.abs(x1*y2+x2*y3+x3*y1-x2*y1-x3*y2-x1*y3);
	    var area1 = Math.abs(x1*y2+x2*y+x*y1-x2*y1-x*y2-x1*y);
	    var area2 = Math.abs(x*y2+x2*y3+x3*y-x2*y-x3*y2-x*y3);
	    var area3 = Math.abs(x1*y+x*y3+x3*y1-x*y1-x3*y-x1*y3);
	    return (area==(area1+area2+area3));	
	}
	
	function yolov8n_xy_in_quadrilateral(x, y, x1, y1, x2, y2, x3, y3, x4, y4) {
	    var area = Math.abs(x1*y2+x2*y3+x3*y1-x2*y1-x3*y2-x1*y3)+Math.abs(x1*y4+x4*y3+x3*y1-x4*y1-x3*y4-x1*y3);
	    var area1 = Math.abs(x1*y2+x2*y+x*y1-x2*y1-x*y2-x1*y);
	    var area2 = Math.abs(x*y2+x2*y3+x3*y-x2*y-x3*y2-x*y3);
	    var area3 = Math.abs(x3*y4+x4*y+x*y3-x4*y3-x*y4-x3*y);
	    var area4 = Math.abs(x1*y4+x4*y+x*y1-x4*y1-x*y4-x1*y);
	    return (area==(area1+area2+area3+area4));	
	}
		
	window.yolov8n_object = yolov8n_object;
	window.yolov8n_object_number = yolov8n_object_number;   
	window.yolov8n_video = yolov8n_video;
	window.yolov8n_state = yolov8n_state;
	window.yolov8n_video_position = yolov8n_video_position;
	window.yolov8n_startvideo_media = yolov8n_startvideo_media;
	window.yolov8n_startvideo_stream = yolov8n_startvideo_stream;
	window.yolov8n_clear = yolov8n_clear;
	window.yolov8n_recognitionFinish = yolov8n_recognitionFinish;
	window.yolov8n_unrecognitionFinish = yolov8n_unrecognitionFinish;
	window.yolov8n_xy_in_triangle = yolov8n_xy_in_triangle;
	window.yolov8n_xy_in_quadrilateral = yolov8n_xy_in_quadrilateral;
	
}(window, window.document));
