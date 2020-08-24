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

window.instascan_get = instascan_get;
window.instascan_video = instascan_video;
window.instascan_clear = instascan_clear;

}(window, window.document));
