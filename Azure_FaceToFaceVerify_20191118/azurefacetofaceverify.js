// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var faceToFaceVerify_key = "";
var faceToFaceVerify_url = "";  
var faceToFaceVerify_FaceId1 = "";
var faceToFaceVerify_FaceId2 = "";
var confidence="";
var isIdentical="";

function azurefacetofaceverify_settings(input_resourceName, input_key, input_faceId1, input_faceId2){
  if (input_resourceName.toLowerCase().indexOf("http")==0)
    faceToFaceVerify_url = input_resourceName;
  else
    faceToFaceVerify_url = "https://" + input_resourceName + "/face/v1.0/verify";
  faceToFaceVerify_key = input_key;
  faceToFaceVerify_FaceId1 = input_faceId1;
  faceToFaceVerify_FaceId2 = input_faceId2;
}

function azurefacetofaceverify_detect(){
  azurefacetofaceverify_processImage();
}
  
function azurefacetofaceverify_get(input_property){	
  if (input_property=="isidentical")
    return isIdentical;
  else if (input_property=="confidence")
    return Number(confidence);
}
  
function azurefacetofaceverify_processImage() {
  if (faceToFaceVerify_key == ""||faceToFaceVerify_url == "") return;    
	confidence="";
	isIdentical="";

	var params = {
		"faceId1": faceToFaceVerify_FaceId1,
		"faceId2": faceToFaceVerify_FaceId2
	};
	$.ajax({
		url: faceToFaceVerify_url,
		beforeSend: function(xhrObj){
			xhrObj.setRequestHeader("Content-Type","application/json");
			xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", faceToFaceVerify_key);
		},
		type: "POST",
		data: JSON.stringify(params),
	})
	  .done(function(json) {
	    json = eval(json);	  
		try {
			isIdentical=json["isIdentical"];
			confidence=json["confidence"];
		}
		catch (e) {
		  console.log(e);
		}

	    console.log(JSON.stringify(json));
	  })
	  .fail(function(jqXHR, textStatus, errorThrown) {
	      isIdentical="false";
	      confidence="0";
	  });
}

window.azurefacetofaceverify_settings = azurefacetofaceverify_settings;
window.azurefacetofaceverify_detect = azurefacetofaceverify_detect;
window.azurefacetofaceverify_get = azurefacetofaceverify_get;
window.azurefacetofaceverify_processImage = azurefacetofaceverify_processImage;

}(window, window.document));
