// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function deeplab_video(input_width, input_height, input_model, input_mirrorimage, input_result) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
	document.getElementById('model').value = input_model;
    document.getElementById('mirrorimage').value = input_mirrorimage;
    document.getElementById('result').style.display = input_result;
  }	

  function deeplab_get(){
    var result = document.getElementById("result").innerHTML.split("<br>");
	return result;
  }	

  window.deeplab_video = deeplab_video;
  window.deeplab_get = deeplab_get;
	
}(window, window.document));
