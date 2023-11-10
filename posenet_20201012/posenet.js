// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function posenet_video(input_modelname, input_video, input_skeleton, input_persons, input_scorelimit, input_mirrorimage, input_result, input_opacity) {
	document.getElementById('persons_posenet').value = input_persons; 
	document.getElementById('scorelimit_posenet').value = input_scorelimit;
	document.getElementById("mirrorimage_posenet").value = input_mirrorimage;
	document.getElementById("gamediv_posenet").style.display = input_result;
	document.getElementById("gamecanvas_skeleton").style.display = input_skeleton;
	document.getElementById("region_posenet").style.opacity = input_opacity;
    document.getElementById("gamecanvas_posenet").style.display = input_video;
	document.getElementById("modelname_posenet").innerHTML = input_modelname;
  }

  function posenet_list(){
    var result = document.getElementById("gamediv_posenet").innerHTML.split("<br>");
	var result_arr = [];
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		result_arr.push(result_detail);
      }
    }
    return result_arr;
  }

  function posenet_person(input_index, input_part, input_data){
    var result = document.getElementById("gamediv_posenet").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_index&&result_detail[1]==input_part) {
		  if (input_data=="")
			return result_detail;
		  else if (input_data=="score")
			return Number(result_detail[2]);
		  else if (input_data=="x")
			return Number(result_detail[3]);
		  else if (input_data=="y")
			return Number(result_detail[4]);
		}
      }
    }
    return "";
  }
	
  function posenet_distance(input_x0,input_y0,input_x1,input_y1) {
      return Math.sqrt(Math.pow((input_x1-input_x0), 2) + Math.pow((input_y1-input_y0), 2));
  } 	
	
  function posenet_angle(input_x0,input_y0,input_x1,input_y1) {
      var angle = (Math.atan((input_y1-input_y0)/(input_x1-input_x0)) / Math.PI) * 180;
      if (angle<0) angle = 180 + angle;
      if (input_y0<input_y1) angle = 180 + angle;
      return angle;
  }
  
  function posenet_state(input_state){
    document.getElementById('posenetState').innerHTML = input_state;
  }	

  function posenet_video_position(input_left, input_top) {
	var region = document.getElementById("region_posenet");
    region.style.position = "absolute";
    region.style.left = input_left + "px";
    region.style.top = input_top + "px";
  }

  function posenet_persons(){
    var result = document.getElementById("gamediv_posenet").innerHTML.split("<br>");
	if (result[0]=="")
		return 0;	
	var result_arr = [];
    if (result.length>0) {
      var result_detail = result[result.length-1].split(",");
	  return Number(result_detail[0])+1;
    }
    return 0;
  }
  
  	function posenet_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_posenet");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

		var canvas_posenet = document.getElementById("gamecanvas_posenet");  
		canvas_posenet.setAttribute("width", video.width);
		canvas_posenet.setAttribute("height", video.height);
		canvas_posenet.style.width = video.width+"px";
		canvas_posenet.style.height = video.height+"px";
		
		var canvas_skeleton = document.getElementById("gamecanvas_skeleton");  
		canvas_skeleton.setAttribute("width", video.width);
		canvas_skeleton.setAttribute("height", video.height);
		canvas_skeleton.style.width = video.width+"px";
		canvas_skeleton.style.height = video.height+"px";		
		
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
						document.getElementById("sourceId_posenet").innerHTML = "gamevideo_posenet";
					}
				}) 
			}
		}) 
	}

  	function posenet_startvideo_stream(url) {
		var img = document.getElementById("gameimage_posenet");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_posenet").innerHTML = "gameimage_posenet";
		}	
	}

	function posenet_recognitionFinish() {
	}

	function posenet_unrecognitionFinish() {
	}	

	window.posenet_video = posenet_video;
	window.posenet_list = posenet_list;
	window.posenet_person = posenet_person;
	window.posenet_distance = posenet_distance;
	window.posenet_angle = posenet_angle;	
	window.posenet_video_position = posenet_video_position;
	window.posenet_state = posenet_state;
	window.posenet_persons = posenet_persons;
	window.posenet_startvideo_media = posenet_startvideo_media;
	window.posenet_startvideo_stream = posenet_startvideo_stream;
	window.posenet_recognitionFinish = posenet_recognitionFinish;
	window.posenet_unrecognitionFinish = posenet_unrecognitionFinish;
	
}(window, window.document));
