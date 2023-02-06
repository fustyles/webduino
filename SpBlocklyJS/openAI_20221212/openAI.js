/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/

'use strict';

let open_ai_key = "";
let max_tokens = 256;
let open_ai_response = "";	
let open_ai_response_br = "";
let open_ai_response_url = "";	

function openai_text_initial(input_token, input_max_tokens) {
	open_ai_key = input_token;
	max_tokens = input_max_tokens;
}  

function openai_text_request(input_text) {
  var url = "https://api.openai.com/v1/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer "+open_ai_key);

  xhr.onreadystatechange = function () {
	 if (xhr.readyState === 4) {
		//console.log(xhr.status);
		//console.log(xhr.responseText);
		let json = eval("(" + xhr.responseText + ")");
		open_ai_response = json["choices"][0]["text"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");
		open_ai_response_br = json["choices"][0]["text"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");		
		if (open_ai_response_br.indexOf("<br><br>")==0)
			open_ai_response_br = open_ai_response_br.replace("<br><br>","");
		if (typeof openai_text_response === 'function') openai_text_response();
	 }};

  var data = {
	"model": "text-davinci-003",
	"prompt": input_text,
	"temperature": 0,
	"max_tokens": max_tokens,
	"frequency_penalty": 0,
	"presence_penalty": 0.6,
	"top_p": 1.0,
	"n": 1,
	//"stream": false,
	//"logprobs": null,
	//"stop": "\n"	  
  };

  xhr.send(JSON.stringify(data));
}

function openai_text_response() {
} 

function openai_text_response_get(br) {
	if (br)
		return open_ai_response_br;
	else
		return open_ai_response;	
}

function openai_text_response_clear() {
	open_ai_response = "";
	open_ai_response_br = "";	
}


function openai_image_initial(input_token) {
	open_ai_key = input_token;
}    

function openai_image_request(input_text, input_size) {
  var url = "https://api.openai.com/v1/images/generations";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer "+open_ai_key);

  xhr.onreadystatechange = function () {
	 if (xhr.readyState === 4) {
        //console.log(xhr.status);
        //console.log(xhr.responseText);
		let json = eval("(" + xhr.responseText + ")");
		if (json["data"])
			open_ai_response_url = json["data"][0]["url"];
		else if (json["error"])
			open_ai_response_url = "error";		
		else
			open_ai_response_url = "";
		//console.log(open_ai_response_url);
		
		if (typeof openai_image_response === 'function') openai_image_response();
	 }};

  var data = {
	  prompt: input_text,
	  n: 1,
	  size: input_size	  
  };

  xhr.send(JSON.stringify(data));
}

function openai_image_response() {
} 

function openai_image_response_get() {
	return open_ai_response_url;	
}

function openai_image_response_clear() {
	open_ai_response_url = "";	
} 
