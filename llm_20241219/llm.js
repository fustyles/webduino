/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/

'use strict';

let llm_chat_domain = "";
let llm_chat_path = "";
let llm_chat_model = "";
let llm_chat_key = "";
let llm_chat_role = "";
let llm_chat_content = "";
let llm_chat = "";	
let llm_chat_br = "";
let llm_chat_n = "";
let llm_chat_message = [{"role": "system", "content": llm_chat_role}];	

function llm_chat_initial(input_domain, input_path, input_model, input_key, input_role) {
	llm_chat_domain = input_domain;
	llm_chat_path = input_path;
	llm_chat_model = input_model;	
	llm_chat_key = input_key;
	llm_chat_role = input_role;
	llm_chat_message = [{"role": "system", "content": input_role}];
}  

function llm_chat_request(input_text) {
  var url = "https://"+llm_chat_domain+llm_chat_path;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + llm_chat_key);

  xhr.onreadystatechange = function () {
	 if (xhr.readyState === 4) {
		//console.log(xhr.status);
		//console.log(xhr.responseText);
		let json = eval("(" + xhr.responseText + ")");
		if (json["error"]) {
			llm_chat = json["error"]["message"];
			llm_chat_br = json["error"]["message"];
			llm_chat_n = json["error"]["message"];
			if (typeof llm_chat_response === 'function') llm_chat_response();
		}	
		else if (json["choices"][0]["message"]["content"]) {
			llm_chat = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");
			llm_chat_br = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");
			llm_chat_n = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"");
			if (llm_chat_br.indexOf("<br><br>")==0)
				llm_chat_br = llm_chat_br.replace("<br><br>","");
			if (llm_chat_n.indexOf("\n\n")==0)
				llm_chat_n = llm_chat_br.replace("\n\n","");
			
			var char_message = {};
			char_message.role = "assistant";
			char_message.content = json["choices"][0]["message"]["content"];
			llm_chat_message.push(char_message);
			
			if (typeof llm_chat_response === 'function') llm_chat_response();
		}
		else {
			llm_chat = "";
			llm_chat_br = "";
			llm_chat_n = "";
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
	llm_chat_message.push(char_message);
  
	var data;
	data = {
	  "model": llm_chat_model,
	  "messages": llm_chat_message	  
	};

	xhr.send(JSON.stringify(data));
}

function llm_chat_insert(input_text) {
	var char_message = {};
	char_message.role = "user";
	char_message.content = input_text;
	llm_chat_message.push(char_message);
}

function llm_chat_response() {
} 

function llm_chat_response_get(newline) {
	if (newline=="br")
		return llm_chat_br;
	else if (newline=="n")
		return llm_chat_n;	
	else
		return llm_chat;	
}

function llm_chat_response_clear() {
	llm_chat = "";
	llm_chat_br = "";
	llm_chat_n = "";
}

function llm_chat_content_clear() {
	llm_chat_message = [{"role": "system", "content": llm_chat_role}];
}

function llm_chat_content_file(func) {
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
						llm_chat_message = JSON.parse(event.target.result);
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
		link.href="data:application/octet-stream;utf-8," + encodeURIComponent(JSON.stringify(llm_chat_message));	  
		document.body.appendChild(link);
		setTimeout(function(){
			link.click();
		},500);	
		
		//window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(JSON.stringify(llm_chat_message));
	}
}

function llm_chat_content_file_remote(url) {
	$.ajax({
		url: url,
		async: false,
		success: function (data){
			if (data!="")
				llm_chat_message = JSON.parse(data);
			else
				llm_chat_content_clear();
		},
  		error: function(jqXHR, textStatus, errorThrown){
      			//console.log(jqXHR);
			alert(jqXHR.statusText);
      			//console.log(textStatus);
      			//console.log(errorThrown);
  		}
	});
}

function llm_chat_content_file_remote_insert(url) {
	$.ajax({
		url: url,
		async: false,
		success: function (data){
			if (data!="")
				llm_chat_insert(data);			
		},
  		error: function(jqXHR, textStatus, errorThrown){
      			//console.log(jqXHR);
			alert(jqXHR.statusText);
      			//console.log(textStatus);
      			//console.log(errorThrown);
  		}
	});
}

function llm_chat_image_request(input_text, input_url) {
  var url = "https://"+llm_chat_domain+llm_chat_path;;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + llm_chat_key);

  xhr.onreadystatechange = function () {
	 if (xhr.readyState === 4) {
		//console.log(xhr.status);
		//console.log(xhr.responseText);
		let json = eval("(" + xhr.responseText + ")");
		if (json["error"]) {
			llm_chat = json["error"]["message"];
			llm_chat_br = json["error"]["message"];
			llm_chat_n = json["error"]["message"];
			if (typeof llm_chat_response === 'function') llm_chat_response();
		}	
		else if (json["choices"][0]["message"]["content"]) {
			llm_chat = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");
			llm_chat_br = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");
			llm_chat_n = json["choices"][0]["message"]["content"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"");
			if (llm_chat_br.indexOf("<br><br>")==0)
				llm_chat_br = llm_chat_br.replace("<br><br>","");
			if (llm_chat_n.indexOf("\n\n")==0)
				llm_chat_n = llm_chat_br.replace("\n\n","");
			
			var char_message = {};
			char_message.role = "assistant";
			char_message.content = json["choices"][0]["message"]["content"];
			llm_chat_message.push(char_message);
			
			if (typeof llm_chat_response === 'function') llm_chat_response();
		}
		else {
			llm_chat = "";
			llm_chat_br = "";
			llm_chat_n = "";
		}
	 }};		

	var char_message = {};
	char_message.role = "user";
	char_message.content = [];
	var user_text = {"type":"text", "text":input_text};
	char_message.content.push(user_text);
	var user_url = {"type":"image_url", "image_url":{"url":input_url}};
	char_message.content.push(user_url);	
	llm_chat_message.push(char_message);	
  
	var data;
	data = {
	  "model": llm_chat_model,
	  "messages": llm_chat_message	  
	};

	xhr.send(JSON.stringify(data));
}