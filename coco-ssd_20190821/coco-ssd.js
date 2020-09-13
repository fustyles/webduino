// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function coco_ssd_list(input_object) {
    var result = document.getElementById("result").innerHTML.split("<br>");
	var result_arr = [];
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (input_object==""||result_detail[0]==input_object) {
		    result_arr.push(result_detail);
		}
      }
    }
    return result_arr;
  }

 function coco_ssd_object(input_object, input_index, input_data) {
	var n=0;
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_object) {
		  if (n==input_index&&input_data=="")
		    return result_detail;
		  else if (n==input_index&&input_data=="class") {
		    return result_detail[0];
		  }
		  else if (n==input_index&&input_data=="score") {
		    return Number(result_detail[1]);
		  }
		  else if (n==input_index&&input_data=="x") {
		    return Number(result_detail[2]);
		  }
		  else if (n==input_index&&input_data=="y") {
		    return Number(result_detail[3]);
		  }
		  else if (n==input_index&&input_data=="middlex") {
		    return Number(result_detail[2])+Number(result_detail[4])/2;
		  }
		  else if (n==input_index&&input_data=="middley") {
		    return Number(result_detail[3])+Number(result_detail[5])/2;
		  }
		  else if (n==input_index&&input_data=="width") {
		    return Number(result_detail[4]);
		  }
		  else if (n==input_index&&input_data=="height") {
		    return Number(result_detail[5]);
		  }
		  n++;
		}
      }
    }
    return "";
  }

 function coco_ssd_object_number(input_object) {
    var result = document.getElementById("result").innerHTML.split("<br>");
	if (input_object=="") return result.length;
	var n=0;
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
		var result_detail = result[i].split(",");
		if (result_detail[0]==input_object) {
		  n++;
		}
      }
    }
    return n;
  }
	
  function coco_ssd_video(input_width, input_height, input_result, input_frame, input_mirrorimage, input_opacity) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
    document.getElementById('result').style.display = input_result;
    document.getElementById('frame').value = input_frame;
    document.getElementById('mirrorimage').value = input_mirrorimage;
    document.getElementById('opacity').value = input_opacity;
  }	

  function coco_ssd_state(input_state){
    document.getElementById('cocossdState').innerHTML = input_state;
  }	

  function coco_ssd_video_position(input_left, input_top) {
	region.style.position = "absolute";
	region.style.left = input_left + "px";
	region.style.top = input_top + "px";
  }
	
  window.coco_ssd_list = coco_ssd_list;
  window.coco_ssd_object = coco_ssd_object;
  window.coco_ssd_object_number = coco_ssd_object_number;
  window.coco_ssd_video = coco_ssd_video;
  window.coco_ssd_state = coco_ssd_state;
  window.coco_ssd_video_position = coco_ssd_video_position;

}(window, window.document));
