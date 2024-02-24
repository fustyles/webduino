/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/

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
		gemini_mod.textContent = 'import { GoogleGenerativeAI } from "@google/generative-ai";\nconst genAI = new GoogleGenerativeAI("'+input_key+'");\nvar chatHistory = {history: [],generationConfig: {maxOutputTokens: '+input_tokens+',},};\nasync function gemini_run(prompt) {\nconst model = await genAI.getGenerativeModel({ model: "'+input_model+'"});\nconst chat = model.startChat(chatHistory);\nawait chat.sendMessage(prompt).then(function(result) {\nconst response = result.response;\nconst text = response.text();\ngemini_insert(prompt, text);\nif (typeof gemini_chat_respsonse === "function") gemini_chat_respsonse(text);\n});\n}\nasync function gemini_chat_insert(request, response) {var char_request = {};\nchar_request.role = "user";\nchar_request.parts = request;\nchatHistory["history"].push(char_request);\nvar char_response = {};\nchar_response.role = "model";\nchar_response.parts = response;\nchatHistory["history"].push(char_response);\nconsole.log(chatHistory);}\nasync function gemini_clear(){chatHistory["history"] = [];\nwindow.gemini_chat_run = gemini_chat_run;\nwindow.gemini_chat_insert = gemini_chat_insert;\nwindow.gemini_chat_clear = gemini_chat_clear;\n}';
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
