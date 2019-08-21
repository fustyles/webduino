// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function mobilenet_object(input_object){
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
	var result_detail = result[i].split(",");
	console.log(result_detail[0]+", "+input_object);
	if (result_detail[0]==input_object) {
	  return result_detail;
	}
      }
    }
    return "";
  }

  window.mobilenet_object = mobilenet_object;

}(window, window.document));
