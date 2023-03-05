/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/


'use strict';

let openai_response_text_key = "";
let openai_response_text_tokens = 256;
let openai_response_text = "";	
let openai_response_text_br = "";
let openai_response_text_url = "";
let openai_response_image_key = "";
let openai_response_image_tokens = 256;	
let openai_response_image = "";	
let openai_response_image_br = "";
let openai_response_image_url = "";
let openai_response_chat_key = "";
let openai_response_chat_model = "gpt-3.5-turbo";
let openai_response_chat = "";	
let openai_response_chat_br = "";
let openai_response_chat_url = "";	

function openai_text_initial(input_token, input_max_tokens) {
	openai_response_text_key = input_token;
	openai_response_text_tokens = input_max_tokens;
}  

function openai_text_request(input_text) {
  var url = "https://api.openai.com/v1/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + openai_response_text_key);

  xhr.onreadystatechange = function () {
	 if (xhr.readyState === 4) {
		//console.log(xhr.status);
		//console.log(xhr.responseText);
		
		let json = eval("(" + xhr.responseText + ")");
		if (json["error"]) {
			openai_response_text = json["error"]["message"];
			openai_response_text_br = json["error"]["message"];
			if (typeof openai_text_response === 'function') openai_text_response();
		}			
		else if (json["choices"][0]["text"]) {
			openai_response_text = json["choices"][0]["text"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");
			openai_response_text_br = json["choices"][0]["text"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");		
			if (openai_response_text_br.indexOf("<br><br>")==0)
				openai_response_text_br = openai_response_text_br.replace("<br><br>","");
			if (typeof openai_text_response === 'function') openai_text_response();
		}
		else {
			openai_response_text = "";
			openai_response_text_br = "";
		}
			
	 }};

  var data = {
	"model": "text-davinci-003",
	"prompt": input_text,
	"temperature": 0,
	"max_tokens": openai_response_text_tokens,
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
		return openai_response_text_br;
	else
		return openai_response_text;	
}

function openai_text_response_clear() {
	openai_response_text = "";
	openai_response_text_br = "";	
}


function openai_image_initial(input_token) {
	openai_response_image_key = input_token;
}    

function openai_image_request(input_text, input_size) {
  var url = "https://api.openai.com/v1/images/generations";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + openai_response_image_key);

  xhr.onreadystatechange = function () {
	 if (xhr.readyState === 4) {
        //console.log(xhr.status);
        //console.log(xhr.responseText);
		let json = eval("(" + xhr.responseText + ")");
		if (json["error"])
			openai_response_image_url = "error";		
		else if (json["data"])
			openai_response_image_url = json["data"][0]["url"];
		else
			openai_response_image_url = "";
		//console.log(openai_response_image_url);
		
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
	return openai_response_image_url;	
}

function openai_image_response_clear() {
	openai_response_image_url = "";	
} 

function openai_chat_initial(input_token, input_model) {
	openai_response_chat_key = input_token;
	openai_response_chat_model = input_model;
}  

function openai_chat_request(input_text) {
  var url = "https://api.openai.com/v1/chat/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + openai_response_chat_key);

  xhr.onreadystatechange = function () {
	 if (xhr.readyState === 4) {
		//console.log(xhr.status);
		//console.log(xhr.responseText);
		let json = eval("(" + xhr.responseText + ")");
		if (json["error"]) {
			openai_response_chat = json["error"]["message"];
			openai_response_chat_br = json["error"]["message"];
			if (typeof openai_chat_response === 'function') openai_chat_response();
		}	
		else {
			openai_response_chat = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");
			openai_response_chat_br = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");		
			if (openai_response_chat_br.indexOf("<br><br>")==0)
				openai_response_chat_br = openai_response_chat_br.replace("<br><br>","");
			if (typeof openai_chat_response === 'function') openai_chat_response();
		}
	 }};

  var data = {
      "model": openai_response_chat_model,
      "messages": [{"role": "user", "content": input_text}]	  
  };

  xhr.send(JSON.stringify(data));
}

function openai_chat_response() {
} 

function openai_chat_response_get(br) {
	if (br)
		return openai_response_chat_br;
	else
		return openai_response_chat;	
}

function openai_chat_response_clear() {
	openai_response_chat = "";
	openai_response_chat_br = "";	
}
