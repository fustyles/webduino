// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function bodypix1_video(input_width, input_height, input_mirrorimage, input_func) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
    document.getElementById('mirrorimage').value = input_mirrorimage;
    document.getElementById('func').value = input_func;
  }	

  window.bodypix1_video = bodypix1_video;
	
}(window, window.document));
