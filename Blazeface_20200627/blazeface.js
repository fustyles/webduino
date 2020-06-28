// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function blazeface_video(input_width, input_height, input_scorelimit, input_mirrorimage, input_result, input_opacity) {
 
    var canvas = document.getElementById("gamecanvas_blazeface");
	var result = document.getElementById("result");

    result.style.display = input_result;
	document.getElementById("mirrorimage").value = input_mirrorimage;
	document.getElementById('opacity').value = input_opacity;
    document.getElementById('scorelimit').value = input_scorelimit;
		
	var video = document.getElementById("video");
	video.width = input_width;
	video.height = input_height;   
		
	canvas.setAttribute("width", video.width+"px");
	canvas.setAttribute("height", video.height+"px");
	canvas.style.width = video.width+"px";
	canvas.style.height = video.height+"px";
  }

  function blazeface_get(input_person, input_part){
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (input_part=='All') 
        return result;
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
        var result_detail = result[i].split(",");
        if (result_detail[0]==input_person&&result_detail[1]==input_part) 
          return result_detail;
      }
    }
    return "";
  }	

  window.blazeface_video = blazeface_video;
  window.blazeface_get = blazeface_get;
	
}(window, window.document));
