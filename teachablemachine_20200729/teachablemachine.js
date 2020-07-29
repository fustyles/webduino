// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function teachablemachine_model(input_model){
    document.getElementById("modelPath").value = input_model;
 }

 function teachablemachine_result(input_proportion) {
	var result = document.getElementById("result").innerHTML.split("<br>");
	var result_arr = [];
	var maxClass = "";
    var maxProbability = "";

    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (i==0) {
			maxClass = result_detail[0];
			maxProbability = result_detail[1];
		}
		else {
			if (result_detail[1]>maxProbability) {
				maxClass = result_detail[0];
				maxProbability = result_detail[1];
			}
		}
		result_arr.push(result_detail);
      }
    }

	if (input_proportion=="")
		return result_arr;
	else if (input_proportion=="maxClass")
		return maxClass;
	else if (input_proportion=="maxProbability")
		return Number(maxProbability);
    
  }
	
  function teachablemachine_video(input_width, input_height, input_result, input_mirrorimage, input_opacity) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
    document.getElementById('result').style.display = input_result;
    document.getElementById('mirrorimage').value = input_mirrorimage;
    document.getElementById('opacity').value = input_opacity;
  }	

  window.teachablemachine_video = teachablemachine_video;
  window.teachablemachine_model = teachablemachine_model;
  window.teachablemachine_result = teachablemachine_result;


}(window, window.document));
