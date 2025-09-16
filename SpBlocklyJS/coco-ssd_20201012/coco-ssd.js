// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

	function cocossd_video(input_result, input_frame, input_mirrorimage, input_opacity) {
		document.getElementById('gamediv_cocossd').style.display = input_result;
		document.getElementById('frame_cocossd').value = input_frame;
		document.getElementById('mirrorimage_cocossd').value = input_mirrorimage;
		document.getElementById("region_cocossd").style.opacity = input_opacity;
	}

	function cocossd_list(input_object) {
		var result = document.getElementById("gamediv_cocossd").innerHTML.split("<br>");
		var result_arr = [];
		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				var result_detail = result[i].split(",");
				if (input_object==""||result_detail[0]==input_object) {
					result_arr.push(result_detail);
				}
			}
		}
		return result_arr;
	}

	function cocossd_object(input_object, input_index, input_data) {
		var n=0;
		var result = document.getElementById("gamediv_cocossd").innerHTML.split("<br>");
		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				var result_detail = result[i].split(",");
				if (result_detail[0]==input_object||input_object=="") {
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

	function cocossd_object_number(input_object) {
		var result = document.getElementById("gamediv_cocossd").innerHTML.split("<br>");
		if (result[0]=="")
			return 0;		
		if (input_object=="") 
			return result.length;
		var n=0;
		if (result.length>0) {
			for (var i=0;i<result.length;i++) {
				var result_detail = result[i].split(",");
				if (result_detail[0]==input_object)
					n++;
			}
		}
		return n;
	}	

	function cocossd_state(input_state){
		document.getElementById('cocossdState').innerHTML = input_state;
	}	

	function cocossd_video_position(input_left, input_top) {
		var region = document.getElementById("region_cocossd");
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
	}
  
  	function cocossd_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_cocossd");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas = document.getElementById("gamecanvas_cocossd");  
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
						document.getElementById("sourceId_cocossd").innerHTML = "gamevideo_cocossd";
					}
				}) 
			}
		}) 
	}

  	function cocossd_startvideo_stream(url) {
		var img = document.getElementById("gameimage_cocossd");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_cocossd").innerHTML = "gameimage_cocossd";
		}	
	}
   
	function cocossd_clear() {
		document.getElementById("gamediv_cocossd").innerHTML = "";
	}
	
	function cocossd_recognitionFinish() {
	}
	
	function cocossd_unrecognitionFinish() {
	}

	function cocossd_xy_in_triangle(x, y, x1, y1, x2, y2, x3, y3) {
	    var area = Math.abs(x1*y2+x2*y3+x3*y1-x2*y1-x3*y2-x1*y3);
	    var area1 = Math.abs(x1*y2+x2*y+x*y1-x2*y1-x*y2-x1*y);
	    var area2 = Math.abs(x*y2+x2*y3+x3*y-x2*y-x3*y2-x*y3);
	    var area3 = Math.abs(x1*y+x*y3+x3*y1-x*y1-x3*y-x1*y3);
	    return (area==(area1+area2+area3));	
	}
	
	function cocossd_xy_in_quadrilateral(x, y, x1, y1, x2, y2, x3, y3, x4, y4) {
	    var area = Math.abs(x1*y2+x2*y3+x3*y1-x2*y1-x3*y2-x1*y3)+Math.abs(x1*y4+x4*y3+x3*y1-x4*y1-x3*y4-x1*y3);
	    var area1 = Math.abs(x1*y2+x2*y+x*y1-x2*y1-x*y2-x1*y);
	    var area2 = Math.abs(x*y2+x2*y3+x3*y-x2*y-x3*y2-x*y3);
	    var area3 = Math.abs(x3*y4+x4*y+x*y3-x4*y3-x*y4-x3*y);
	    var area4 = Math.abs(x1*y4+x4*y+x*y1-x4*y1-x*y4-x1*y);
	    return (area==(area1+area2+area3+area4));	
	}
		
	
	window.cocossd_list = cocossd_list;
	window.cocossd_object = cocossd_object;
	window.cocossd_object_number = cocossd_object_number;
	window.cocossd_video = cocossd_video;
	window.cocossd_state = cocossd_state;
	window.cocossd_video_position = cocossd_video_position;
	window.cocossd_startvideo_media = cocossd_startvideo_media;
	window.cocossd_startvideo_stream = cocossd_startvideo_stream;
	window.cocossd_clear = cocossd_clear;
	window.cocossd_recognitionFinish = cocossd_recognitionFinish;
	window.cocossd_unrecognitionFinish = cocossd_unrecognitionFinish;
	window.cocossd_xy_in_triangle = cocossd_xy_in_triangle;
	window.cocossd_xy_in_quadrilateral = cocossd_xy_in_quadrilateral;
	
}(window, window.document));
