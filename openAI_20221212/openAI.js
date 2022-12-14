/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/


  'use strict';

	let open_ai_token = "";
	let max_tokens = 1000;
	let open_ai_response = "";	
	let open_ai_response_br = "";

	function openai_text_initial(input_token, input_max_tokens) {
		open_ai_token = input_token;
		max_tokens = input_max_tokens;
	}  

	function openai_text_request(input_text) {
	  var url = "https://api.openai.com/v1/completions";

	  var xhr = new XMLHttpRequest();
	  xhr.open("POST", url);

	  xhr.setRequestHeader("Content-Type", "application/json");
	  xhr.setRequestHeader("Authorization", "Bearer "+open_ai_token);

	  xhr.onreadystatechange = function () {
		 if (xhr.readyState === 4) {
			//console.log(xhr.status);
			//console.log(xhr.responseText);
			let json = eval("(" + xhr.responseText + ")");
			open_ai_response = json["choices"][0]["text"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/\n/g,"");
			open_ai_response_br = json["choices"][0]["text"].replace("？\n\n","").replace("？\n","").replace(/？\n/g,"").replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");		
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
		console.log("no");
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
