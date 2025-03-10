/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/

'use strict';

let openai_response_text_key = "";
let openai_response_text_tokens = 256;
let openai_response_text = "";	
let openai_response_text_br = "";
let openai_response_text_n = "";
let openai_response_text_url = "";
let openai_response_image_key = "";
let openai_response_image_model = "";
let openai_response_image_tokens = 256;	
let openai_response_image = "";	
let openai_response_image_br = "";
let openai_response_image_n = "";
let openai_response_image_url = "";
let openai_response_chat_key = "";
let openai_response_chat_model = "gpt-3.5-turbo";
let openai_response_chat_max_tokens = 1000;
let openai_response_chat_temperature = 0.5;
let openai_response_role = "You are a helpful assistant.";
let openai_response_content = "";
let openai_response_chat = "";	
let openai_response_chat_br = "";
let openai_response_chat_n = "";
let openai_response_chat_message = [{"role": "system", "content": openai_response_role}];	
let openai_vision_chat_message = [];

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
			openai_response_text_n = json["error"]["message"];
			if (typeof openai_text_response === 'function') openai_text_response();
		}			
		else if (json["choices"][0]["text"]) {
			openai_response_text = json["choices"][0]["text"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");
			openai_response_text_br = json["choices"][0]["text"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");
			openai_response_text_n = json["choices"][0]["text"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"");
			if (openai_response_text_br.indexOf("<br><br>")==0)
				openai_response_text_br = openai_response_text_br.replace("<br><br>","");
			if (openai_response_text_n.indexOf("\n\n")==0)
				openai_response_text_n = openai_response_text_n.replace("\n\n","");
			if (typeof openai_text_response === 'function') openai_text_response();
		}
		else {
			openai_response_text = "";
			openai_response_text_br = "";
			openai_response_text_n = "";
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

function openai_text_response_get(newline) {
	if (newline=="br")
		return openai_response_text_br;
	else if (newline=="n")
		return openai_response_text_n;	
	else
		return openai_response_text;	
}

function openai_text_response() {
} 

function openai_text_response_clear() {
	openai_response_text = "";
	openai_response_text_br = "";
	openai_response_text_n = "";
}


function openai_image_initial(input_token, input_model) {
	openai_response_image_key = input_token;
	openai_response_image_model = input_model;
}    

async function openai_image_request(input_text, input_size) {
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
	  model: openai_response_image_model,	  
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

function openai_chat_initial(input_token, input_role, input_model, input_temperature) {
	openai_response_chat_key = input_token;
	openai_response_chat_model = input_model;
	openai_response_chat_temperature = input_temperature;
	openai_response_role = input_role;
	openai_response_chat_message = [{"role": "system", "content": input_role}];
	openai_vision_chat_message = [];
}  

async function openai_chat_request(input_text) {
  if (openai_response_chat_model.toLowerCase().indexOf("llama")!=-1)
    var url = "https://api.groq.com/openai/v1/chat/completions";
  else if (openai_response_chat_model.toLowerCase().indexOf("grok")!=-1)
    var url = "https://api.x.ai/v1/chat/completions";	  
  else
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
			openai_response_chat_n = json["error"]["message"];
			if (typeof openai_chat_response === 'function') openai_chat_response();
		}	
		else if (json["choices"][0]["message"]["content"]) {
			openai_response_chat = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");
			openai_response_chat_br = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");
			openai_response_chat_n = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"");
			if (openai_response_chat_br.indexOf("<br><br>")==0)
				openai_response_chat_br = openai_response_chat_br.replace("<br><br>","");
			if (openai_response_chat_n.indexOf("\n\n")==0)
				openai_response_chat_n = openai_response_chat_br.replace("\n\n","");
			
			var char_message = {};
			char_message.role = "assistant";
			char_message.content = json["choices"][0]["message"]["content"];
			openai_response_chat_message.push(char_message);
			openai_vision_chat_message.push(char_message);
			
			if (typeof openai_chat_response === 'function') openai_chat_response();
		}
		else {
			openai_response_chat = "";
			openai_response_chat_br = "";
			openai_response_chat_n = "";
		}
	 }};


	/*
	  messages=[
			{"role": "system", "content": "You are a helpful assistant."},
			{"role": "user", "content": "Who won the world series in 2020?"},
			{"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
			{"role": "user", "content": "Where was it played?"}
		]
	*/			

	var char_message = {};
	char_message.role = "user";
	char_message.content = input_text;
	openai_response_chat_message.push(char_message);
	openai_vision_chat_message.push(char_message);
  
	var data;
	data = {
	  "model": openai_response_chat_model,
	  "messages": openai_response_chat_message,
	  "max_tokens": openai_response_chat_max_tokens,
	  "temperature": openai_response_chat_temperature
	};

	xhr.send(JSON.stringify(data));
}

function openai_chat_set(input_property, input_value) {
	if (input_property=="temperature")
		openai_response_chat_temperature = Number(input_value);
	else if (input_property=="maxOutputTokens")
		openai_response_chat_max_tokens = Number(input_value);	
}

function openai_chat_insert(input_text) {
	var char_message = {};
	char_message.role = "user";
	char_message.content = input_text;
	openai_response_chat_message.push(char_message);
}

function openai_chat_response() {
} 

function openai_chat_response_get(newline) {
	if (newline=="br")
		return openai_response_chat_br;
	else if (newline=="n")
		return openai_response_chat_n;	
	else
		return openai_response_chat;	
}

function openai_chat_response_clear() {
	openai_response_chat = "";
	openai_response_chat_br = "";
	openai_response_chat_n = "";
}

function openai_chat_content_clear() {
	openai_response_chat_message = [{"role": "system", "content": openai_response_role}];
}

function openai_vision_content_clear() {
	openai_vision_chat_message = [];
}

function openai_chat_content_file(func) {
	if (func=="open") {
		var e = document.getElementById("importFile");
		if (e) {
			e.parentElement.removeChild(e);
		}
		
		var input=document.createElement('input');
		input.type="file";
		input.id="importFile";
		input.style.display = "none";
		input.accept=".chat";
		input.onchange = function(element) {
			try {	
				var file = this.files[0];
				if (file) {
					var fr = new FileReader();           
					fr.onload = function (event) {
						openai_response_chat_message = JSON.parse(event.target.result);
					};
					fr.readAsText(file);
				}
			} catch (e) {
				alert(e);
			}	  
		}

		document.body.appendChild(input);
		setTimeout(function(){
			input.click();
		},500);
	}
	else if (func=="save") {
		
		var e = document.getElementById("outputFile");
		if (e) {
			e.parentElement.removeChild(e);
		}
		
		var link = document.createElement('a');
		link.id="outputFile";
		link.style.display = "none";
		link.download="chatgpt.chat";
		link.target="_blank";
		link.href="data:application/octet-stream;utf-8," + encodeURIComponent(JSON.stringify(openai_response_chat_message));	  
		document.body.appendChild(link);
		setTimeout(function(){
			link.click();
		},500);	
		
		//window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(JSON.stringify(openai_response_chat_message));
	}
}

function openai_chat_content_file_remote(url) {
	$.ajax({
		url: url,
		async: false,
		success: function (data){
			if (data!="")
				openai_response_chat_message = JSON.parse(data);
			else
				openai_chat_content_clear();
		},
  		error: function(jqXHR, textStatus, errorThrown){
      			//console.log(jqXHR);
			alert(jqXHR.statusText);
      			//console.log(textStatus);
      			//console.log(errorThrown);
  		}
	});
}

function openai_chat_content_file_remote_insert(url) {
	$.ajax({
		url: url,
		async: false,
		success: function (data){
			if (data!="")
				openai_chat_insert(data);			
		},
  		error: function(jqXHR, textStatus, errorThrown){
      			//console.log(jqXHR);
			alert(jqXHR.statusText);
      			//console.log(textStatus);
      			//console.log(errorThrown);
  		}
	});
}

async function openai_chat_image_request(input_text, input_url) {
  if (openai_response_chat_model.toLowerCase().indexOf("llama")!=-1)
    var url = "https://api.groq.com/openai/v1/chat/completions";
  else if (openai_response_chat_model.toLowerCase().indexOf("grok")!=-1)
    var url = "https://api.x.ai/v1/chat/completions";	  
  else
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
			openai_response_chat_n = json["error"]["message"];
			if (typeof openai_chat_response === 'function') openai_chat_response();
		}	
		else if (json["choices"][0]["message"]["content"]) {
			openai_response_chat = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");
			openai_response_chat_br = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");
			openai_response_chat_n = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"");
			if (openai_response_chat_br.indexOf("<br><br>")==0)
				openai_response_chat_br = openai_response_chat_br.replace("<br><br>","");
			if (openai_response_chat_n.indexOf("\n\n")==0)
				openai_response_chat_n = openai_response_chat_br.replace("\n\n","");
			
			var char_message = {};
			char_message.role = "assistant";
			char_message.content = json["choices"][0]["message"]["content"];
			openai_response_chat_message.push(char_message);
			openai_vision_chat_message.push(char_message);
			
			if (typeof openai_chat_response === 'function') openai_chat_response();
		}
		else {
			openai_response_chat = "";
			openai_response_chat_br = "";
			openai_response_chat_n = "";
		}
	 }};		

	var char_message = {};
	char_message.role = "user";
	char_message.content = [];
	var user_text = {"type":"text", "text":input_text};
	char_message.content.push(user_text);
	await get_inline_data(input_url, char_message.content);	
	//openai_response_chat_message.push(char_message);
	openai_vision_chat_message.push(char_message);
  
	var data;
	data = {
	  "model": openai_response_chat_model,
	  "max_tokens": openai_response_chat_max_tokens,
	  "messages": openai_vision_chat_message	  
	};
	xhr.send(JSON.stringify(data));
}

async function get_inline_data(imageList, inline_data) {
	let imageURL = [];
	if (typeof imageList === 'string') {
		imageURL.push(imageList);
	} else {
		imageURL = imageList;
	}
	let imageBase64;
	for (let i=0;i<imageURL.length;i++) {
		if (imageURL[i].toLowerCase().trim().indexOf("http")==0)
				imageBase64 = await getFileBase64(imageURL[i], 0);
		else
				imageBase64 = imageURL[i];
		imageBase64 = decodeURIComponent(imageBase64);
		inline_data.push({
			"type": "image_url", 
			"image_url": {
				"url": imageBase64, 
				"detail": "high"
			}
		});
	}
}

async function getFileBase64(fileURL) {
    const response = await fetch(fileURL);
    const blob = await response.blob();
    const base64String = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
    return base64String;
}
