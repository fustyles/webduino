/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/

'use strict';

function gemini_chart_initial(input_key, input_model, input_tokens) {
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
		gemini_mod.textContent = 'import { GoogleGenerativeAI } from "@google/generative-ai";\nconst genAI = new GoogleGenerativeAI("'+input_key+'");\nvar chatHistory = {history: [],generationConfig: {maxOutputTokens: '+input_tokens+',},};\nasync function gemini_run(prompt) {\nconst model = await genAI.getGenerativeModel({ model: "'+input_model+'"});\nconst chat = model.startChat(chatHistory);\nawait chat.sendMessage(prompt).then(function(result) {\nconst response = result.response;\nconst text = response.text();\nvar char_request = {};\nchar_request.role = "user";\nchar_request.parts = prompt;\nchatHistory["history"].push(char_request);\nvar char_response = {};\nchar_response.role = "model";\nchar_response.parts = text;\nchatHistory["history"].push(char_response);\nif (typeof gemini_text_respsonse === "function") gemini_text_respsonse(text);\n});\n}\nwindow.gemini_run = gemini_run;\nasync function gemini_clear(){chatHistory["history"] = [];}\nwindow.gemini_clear = gemini_clear;\n';
	
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
