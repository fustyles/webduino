// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function coco_ssd_object(input_object){
    var result = document.getElementById("result").innerHTML.split("<br>");
	if (result.length>0) {
      for (i=0;i<result.length;i++) {
		console.log(result[i]);
		var result_detail = result[i].split(",");
		if (result_detail[0].trim()==input_object) {
	      return result_detail[0];
		}
      }
	}
  }

  window.coco_ssd_object = coco_ssd_object;

}(window, window.document));
