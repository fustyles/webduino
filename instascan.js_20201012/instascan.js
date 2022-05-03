// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	  
	var region = document.getElementById('region_instascan');
	var video = document.getElementById('gamevideo_instascan');
	var result = document.getElementById('gamediv_instascan');
	  
	function instascan_get(){
		return result.innerHTML;
	}

	function instascan_video(input_result, input_opacity) {
		result.style.display = input_result;
		region.style.opacity = input_opacity;
	}
	  
	function instascan_clear(){
		result.innerHTML = "";
	}

	function instascan_video_position(input_left, input_top) {
		region.style.position = "absolute";
		region.style.left = input_left + "px";
		region.style.top = input_top + "px";
	}

  
  	function instascan_startvideo_media(input_width, input_height, input_index) {
		var video = document.getElementById("gamevideo_instascan");
		video.width = input_width;
		video.height = input_height;
		video.style.width = input_width+"px";
		video.style.height = input_height+"px";
		video.style.visibility = "visible";
		var img = document.getElementById("gameimage_instascan");
		img.style.position = "absolute";		
		
		document.getElementById("sourceId_video").innerHTML = input_index;
		document.getElementById("sourceId_instascan").innerHTML = "gamevideo_instascan";
	}

  	function instascan_startvideo_stream(url) {
		var img = document.getElementById("gameimage_instascan");
		img.style.visibility = "visible";
		var video = document.getElementById("gamevideo_instascan");
		video.style.position = "absolute";	
		img.src = url;
		img.onload = function() {
			document.getElementById("sourceId_instascan").innerHTML = "gameimage_instascan";
		}	
	}
	
	function instascan_state(input_state){
		document.getElementById('instascanState').innerHTML = input_state;
	}	
	
	function instascan_recognitionFinish() {
	}	

	window.instascan_get = instascan_get;
	window.instascan_video = instascan_video;
	window.instascan_clear = instascan_clear;
	window.instascan_video_position = instascan_video_position;
	window.instascan_startvideo_media = instascan_startvideo_media;
	window.instascan_startvideo_stream = instascan_startvideo_stream;
	window.instascan_recognitionFinish = instascan_recognitionFinish;
	
}(window, window.document));
