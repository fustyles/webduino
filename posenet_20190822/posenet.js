// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function posenet_person(input_person, input_part){
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
	var result_detail = result[i].split(",");
	if (result_detail[0]==input_person&&result_detail[1]==input_part) 
	  return result_detail;
      }
    }
    return "";
  }
	
  function posenet_canvas(input_width, input_height) {
    document.getElementById('video').setAttribute("width", input_width);
    document.getElementById('video').setAttribute("height", input_height); 
  }

  window.posenet_person = posenet_person;
  window.posenet_canvas = posenet_canvas;
	
}(window, window.document));
