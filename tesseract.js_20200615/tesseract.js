// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var region = document.getElementById('region');
var video = document.getElementById('video');
var canvas = document.getElementById('gamecanvas_tesseract'); 
var result = document.getElementById('result');
var lang = document.getElementById('lang');
var showTime = 3000;

function tesseract_recognition(input_showtime){
  showTime = input_showtime*1000;
  result.innerHTML = "";
  recognitionText();
}
  
function tesseract_get(){
  return result.innerHTML;
}

function tesseract_video(input_width, input_height, input_result, input_opacity, input_lang) {
  video.width = input_width;
  video.height = input_height;
  result.style.display = input_result;
  region.style.opacity = input_opacity;
  lang.value = input_lang;
}

window.tesseract_recognition = tesseract_recognition;
window.tesseract_get = tesseract_get;
window.tesseract_video = tesseract_video;

}(window, window.document));
