// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var region = document.getElementById('region');
var video = document.getElementById('video');
var result = document.getElementById('result');
  
function instascan_get(){
  return result.innerHTML;
}

function instascan_video(input_width, input_height, input_result, input_opacity) {
  video.width = input_width;
  video.height = input_height;
  result.style.display = input_result;
  region.style.opacity = input_opacity;
}
  
function instascan_clear(){
  result.innerHTML = "";
}

function video_position(input_left, input_top) {
  region.style.position = "absolute";
  region.style.left = input_left + "px";
  region.style.top = input_top + "px";
}

window.instascan_get = instascan_get;
window.instascan_video = instascan_video;
window.instascan_clear = instascan_clear;
window.video_position = video_position;

}(window, window.document));
