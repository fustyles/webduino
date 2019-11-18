// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var faceFindSimilar_key = "";
var faceFindSimilar_url = "";  
var faceFindSimilar_FaceListId = "";
var faceFindSimilar_FaceId = "";
var faceFindSimilar_maxNumOfCandidatesReturned = "";
var faceFindSimilar_mode = "";
var faceFindSimilar_result = ""; 
var faceFindSimilar_returnResult = "";
var maxConfidence="";
var maxFaceId="";

function azurefacefindsimilar_settings(input_resourceName, input_key, input_faceListId, input_faceId, input_maxNum, input_mode){
  if (input_resourceName.toLowerCase().indexOf("http")==0)
    faceFindSimilar_url = input_resourceName;
  else
    faceFindSimilar_url = "https://" + input_resourceName + "/face/v1.0/findsimilars";
  faceFindSimilar_key = input_key;
  faceFindSimilar_FaceListId = input_faceListId;
  faceFindSimilar_FaceId = input_faceId;
  faceFindSimilar_maxNumOfCandidatesReturned = input_maxNum;
  faceFindSimilar_mode = input_mode;
}

function azurefacefindsimilar_detect(){
  faceFindSimilar_result = "";
  faceFindSimilar_returnResult = "";
  azurefacefindsimilar_processImage();
}
  
function azurefacefindsimilar_get(){
  return faceFindSimilar_returnResult.split("<br>");
}
		
function azurefacefindsimilar_get_persondata(input_index){
  if (faceFindSimilar_returnResult=="nobody"||faceFindSimilar_returnResult=="")
    return "";
  else {
    if (faceFindSimilar_returnResult.split("<br>")[input_index-1])
      return faceFindSimilar_returnResult.split("<br>")[input_index-1].split(",");
    else
      return "";
  }
}
	
function azurefacefindsimilar_get_persons(){
  if (faceFindSimilar_returnResult=="nobody"||faceFindSimilar_returnResult=="")
    return 0;
  else {
    return faceFindSimilar_returnResult.split("<br>").length;
  }
}
	
function azurefacefindsimilar_get_max(input_property){
  if (input_property=="faceid")
    return maxFaceId;
  else if (input_property=="confidence")
    return Number(maxConfidence);
}
  
function azurefacefindsimilar_processImage() {
  if (faceFindSimilar_key == ""||faceFindSimilar_url == "") return;    
	maxConfidence="";
	maxFaceId="";

	var params = {
		"faceId": faceFindSimilar_FaceId,
		"faceListId": faceFindSimilar_FaceListId,
		"maxNumOfCandidatesReturned": faceFindSimilar_maxNumOfCandidatesReturned,
		"mode": faceFindSimilar_mode
	};
	$.ajax({
		url: faceFindSimilar_url,
		beforeSend: function(xhrObj){
			xhrObj.setRequestHeader("Content-Type","application/json");
			xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", faceFindSimilar_key);
		},
		type: "POST",
		data: JSON.stringify(params),
	})
  .done(function(json) {
    json = eval(json);	  
    faceFindSimilar_result = "";
    faceFindSimilar_returnResult = "";

	try {
		for (var i in json) 
		{
		  faceFindSimilar_result += i;      
		  faceFindSimilar_result += ",";	    
		  faceFindSimilar_result += json[i]["persistedFaceId"]; 
		  faceFindSimilar_result += ",";	    
		  faceFindSimilar_result += json[i]["confidence"]; 
		  if (Number(json[i]["confidence"])>Number(maxConfidence)) {
			maxFaceId = json[i]["persistedFaceId"];
			maxConfidence = json[i]["confidence"];  
		  }			
		  if (i<json.length-1) faceFindSimilar_result += "<br>";
		}
	}
	catch (e) {
      	  faceFindSimilar_result = "";
	  console.log(e);
	}


    if (faceFindSimilar_result=="") faceFindSimilar_result = "nobody";
    console.log(JSON.stringify(json));
    faceFindSimilar_returnResult = faceFindSimilar_result;
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    faceFindSimilar_result = "nobody";
    faceFindSimilar_returnResult = faceFindSimilar_result;	
  });
}

window.azurefacefindsimilar_settings = azurefacefindsimilar_settings;
window.azurefacefindsimilar_detect = azurefacefindsimilar_detect;
window.azurefacefindsimilar_get = azurefacefindsimilar_get;
window.azurefacefindsimilar_get_persondata = azurefacefindsimilar_get_persondata;	
window.azurefacefindsimilar_get_persons = azurefacefindsimilar_get_persons;
window.azurefacefindsimilar_processImage = azurefacefindsimilar_processImage;
window.azurefacefindsimilar_get_max = azurefacefindsimilar_get_max;

}(window, window.document));
