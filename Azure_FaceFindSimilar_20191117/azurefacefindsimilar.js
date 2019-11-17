// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var faceApi_key = "";
var faceApi_url = "";  
var faceApi_FaceListId = "";
var faceApi_FaceId = "";
var faceApi_maxNumOfCandidatesReturned = "";
var faceApi_mode = "";
var faceApi_result = ""; 
var faceApi_returnResult = "";
var maxConfidence="";
var maxFaceId="";

function azurefacefindsimilar_settings(input_resourceName, input_key, input_faceListId, input_faceId, input_maxNum, input_mode){
  if (input_resourceName.toLowerCase().indexOf("http")==0)
    faceApi_url = input_resourceName;
  else
    faceApi_url = "https://" + input_resourceName + "/face/v1.0/findsimilars";
  faceApi_key = input_key;
  faceApi_FaceListId = input_faceListId;
  faceApi_FaceId = input_faceId;
  faceApi_maxNumOfCandidatesReturned = input_maxNum;
  faceApi_mode = input_mode;
}

function azurefacefindsimilar_detect(){
  faceApi_result = "";
  faceApi_returnResult = "";
  azurefacefindsimilar_processImage();
}
  
function azurefacefindsimilar_get(){
  return faceApi_returnResult.split("<br>");
}
		
function azurefacefindsimilar_get_persondata(input_index){
  if (faceApi_returnResult=="nobody"||faceApi_returnResult=="")
    return "";
  else {
    if (faceApi_returnResult.split("<br>")[input_index-1])
      return faceApi_returnResult.split("<br>")[input_index-1].split(",");
    else
      return "";
  }
}
	
function azurefacefindsimilar_get_persons(){
  if (faceApi_returnResult=="nobody"||faceApi_returnResult=="")
    return 0;
  else {
    return faceApi_returnResult.split("<br>").length;
  }
}
  
function azurefacefindsimilar_processImage() {
  if (faceApi_key == ""||faceApi_url == "") return;    
	maxConfidence="";
	maxFaceId="";

	var params = {
		"faceId": faceApi_FaceId,
		"faceListId": faceApi_FaceListId,
		"maxNumOfCandidatesReturned": faceApi_maxNumOfCandidatesReturned,
		"mode": faceApi_mode
	};
	$.ajax({
		url: uriBase,
		beforeSend: function(xhrObj){
			xhrObj.setRequestHeader("Content-Type","application/json");
			xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", faceApi_key);
		},
		type: "POST",
		data: JSON.stringify(params),
	})
  .done(function(json) {
    json = eval(json);	  
    faceApi_result = "";
    faceApi_returnResult = "";

	try {
		for (var i in json) 
		{
		  faceApi_result += i;      
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["persistedFaceId"]; 
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["confidence"]; 

			
		  if (Number(json[i]["confidence"])>Number(maxConfidence)) {
			maxFaceId = json[i]["persistedFaceId"];
			maxConfidence = json[i]["confidence"];  
		  }			
			 
		  if (i<json.length-1) faceApi_result += "<br>";
		}
		
	}
	catch (e) {
      faceApi_result = "";
	  console.log(e);
	}


    if (faceApi_result=="") faceApi_result = "nobody";
    console.log(JSON.stringify(json));
    faceApi_returnResult = faceApi_result;
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    faceApi_result = "nobody";
    faceApi_returnResult = faceApi_result;	
  });
}

window.azurefacefindsimilar_settings = azurefacefindsimilar_settings;
window.azurefacefindsimilar_detect = azurefacefindsimilar_detect;
window.azurefacefindsimilar_get = azurefacefindsimilar_get;
window.azurefacefindsimilar_get_persondata = azurefacefindsimilar_get_persondata;	
window.azurefacefindsimilar_get_persons = azurefacefindsimilar_get_persons;
window.azurefacefindsimilar_processImage = azurefacefindsimilar_processImage;

}(window, window.document));
