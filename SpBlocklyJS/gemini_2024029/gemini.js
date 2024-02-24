'use strict';

function gemini_chat_initial(input_key, input_model, input_tokens) {
		const gemini_importMap = {
			"imports": {
			  "@google/generative-ai": "https://esm.run/@google/generative-ai"
			}
		};
		var gemini_map = document.createElement("script");
		gemini_map.type = "importmap";
		gemini_map.textContent = JSON.stringify(gemini_importMap);
		document.getElementsByTagName('head')[0].append(gemini_map);
	
		var gemini_mod = document.createElement("script");
		gemini_mod.type = "module";
		gemini_mod.textContent = ''+
		'import { GoogleGenerativeAI } from "@google/generative-ai";\n'+
		'const genAI = new GoogleGenerativeAI("'+input_key+'");\n'+
		'var chatHistory = {history: [],generationConfig: {maxOutputTokens: '+input_tokens+',},};\n'+
		'async function gemini_chat_run(prompt) {\n'+
		'	const model = await genAI.getGenerativeModel({ model: "'+input_model+'"});\n'+
		'	const chat = model.startChat(chatHistory);\n'+
		'	await chat.sendMessage(prompt).then(function(result) {\n'+
		'		const response = result.response;\n'+
		'		const text = response.text();\n'+
		'		gemini_chat_insert(prompt, text);\n'+
		'		if (typeof gemini_chat_respsonse === "function") gemini_chat_respsonse(text);\n'+
		'	});\n'+
		'}\n'+
		'async function gemini_chat_insert(request, response) {\n'+
		'	var char_request = {};\n'+
		'	char_request.role = "user";\n'+
		'	char_request.parts = request;\n'+
		'	chatHistory["history"].push(char_request);\n'+
		'	var char_response = {};\n'+
		'	char_response.role = "model";\n'+
		'	char_response.parts = response;\n'+
		'	chatHistory["history"].push(char_response);\n'+
		'	console.log(chatHistory);\n'+
		'}\n'+
		'async function gemini_chat_clear(){\n'+
		'	chatHistory["history"] = [];\n'+
		'}\n'+
		'window.gemini_chat_run = gemini_chat_run;\n'+
		'window.gemini_chat_insert = gemini_chat_insert;\n'+
		'window.gemini_chat_clear = gemini_chat_clear;\n'+
		'window.gemini_chat_history = chatHistory;\n';
		
		console.log(gemini_mod.textContent);
		document.body.appendChild(gemini_mod);
} 

function gemini_chat_respsonse_br(data, newline) {
	if (newline=="br")
		return data.replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");
	else if (newline=="n")
		return data;	
	else
		return data.replace(/\n/g,"");
}

function gemini_chat_content_file(func) {
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
						gemini_chat_history["history"] = JSON.parse(event.target.result);
						console.log(gemini_chat_history["history"]);
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
		link.download="gemini.chat";
		link.target="_blank";
		link.href="data:application/octet-stream;utf-8," + encodeURIComponent(JSON.stringify(gemini_chat_history["history"]));	  
		document.body.appendChild(link);
		setTimeout(function(){
			link.click();
		},500);	
		
		//window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(JSON.stringify(gemini_chat_history["history"]));
	}
}

function gemini_chat_content_file_remote(url) {
	$.ajax({
		url: url,
		async: false,
		success: function (data){
			if (data!="")
				gemini_chat_history["history"] = JSON.parse(data);
			else
				gemini_chat_clear();			
		}
	});
}
