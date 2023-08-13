// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';

	var obj;
	function knnclassifier_video(input_result, input_mirrorimage, input_opacity) {
		document.getElementById('gamediv_knnclassifier').style.display = input_result;
		document.getElementById('mirrorimage_knnclassifier').value = input_mirrorimage;
		document.getElementById('region_knnclassifier').style.opacity = input_opacity;
	}	

	function knnclassifier_proportion(input_property) {
		if (input_property=="class")
			return document.getElementById("maxclass_knnclassifier").innerHTML;
		else if (input_property=="probability")
			return Number(document.getElementById("maxprobability_knnclassifier").innerHTML);
		else if (input_property=="") {
			var result = document.getElementById("gamediv_knnclassifier").innerHTML.split("<br>");
			var result_detail = [];
			if (result.length>0) {
				for (var i=0;i<result.length;i++) {
					if (result[i]!="") {
						var result_list = result[i].split(",");
						for (var j=0;j<result_list.length;j=j+2) {
							result_detail.push([i, result_list[j], result_list[j+1]]);
						}					
					}
				}
			}
			return result_detail;
		}
	}

	function knnclassifier_train(input_index) {
		var classes = document.getElementById('class_knnclassifier');
		classes.value = classes.options[input_index].value;
		document.getElementById("addExample_knnclassifier").click();
	}

	function knnclassifier_class(input_index, input_classname) {
		var classes = document.getElementById('class_knnclassifier');
		classes.options[input_index].innerText = input_classname;
	}

	function knnclassifier_detect(){
		document.getElementById('Detect_knnclassifier').click();
	}  

	function knnclassifier_clearclasses(){
		document.getElementById('clearAllClasses_knnclassifier').click();
	}  

	function knnclassifier_savemodel(){
		document.getElementById('saveModel_knnclassifier').click();
	}  

	function knnclassifier_loadmodel(){
		document.getElementById('loadModel_knnclassifier').click();
	}  
	
	function knnclassifier_loadmodelurl(target){
		document.getElementById('modelurl_knnclassifier').innerHTML = target;
	} 	

	function knnclassifier_startvideo_media(input_width, input_height, input_facing, input_videoInputIndex) {
		var video = document.getElementById("gamevideo_knnclassifier");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";		

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
						obj = "gamevideo_knnclassifier";
						document.getElementById("sourceId_knnclassifier").innerHTML = obj;
					}
				}) 
			}
		}) 
	}

	function knnclassifier_startvideo_stream(url) {
		var img = document.getElementById("gameimage_knnclassifier");
		img.style.visibility = "visible";
		img.src = url;
		img.onload = function() {
			obj = "gameimage_knnclassifier";
			document.getElementById("sourceId_knnclassifier").innerHTML = obj;			
		}	
	}  

	window.knnclassifier_proportion = knnclassifier_proportion;
	window.knnclassifier_video = knnclassifier_video;
	window.knnclassifier_train = knnclassifier_train;
	window.knnclassifier_detect = knnclassifier_detect;  
	window.knnclassifier_startvideo_media = knnclassifier_startvideo_media;
	window.knnclassifier_startvideo_stream = knnclassifier_startvideo_stream;
	window.knnclassifier_class = knnclassifier_class;
	window.knnclassifier_clearclasses= knnclassifier_clearclasses;
	window.knnclassifier_savemodel = knnclassifier_savemodel;
	window.knnclassifier_loadmodel = knnclassifier_loadmodel;
	window.knnclassifier_loadmodelurl = knnclassifier_loadmodelurl;
}(window, window.document));
