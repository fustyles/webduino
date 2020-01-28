// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function deeplab_video(input_width, input_height, input_mirrorimage) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
    document.getElementById('mirrorimage').value = input_mirrorimage;
  }	

  window.deeplab_video = deeplab_video;
	
}(window, window.document));
