/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/

'use strict';

function gemini_text_initial(input_key, input_model) {
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
		gemini_mod.textContent = 'import { GoogleGenerativeAI } from "@google/generative-ai";\nconst genAI = new GoogleGenerativeAI("'+input_key+'");\nasync function gemini_run(prompt) {\nawait genAI.getGenerativeModel({ model: "'+input_model+'"}).generateContent(prompt).then(function(result) {\nconst response = result.response;\nconst text = response.text();\nif (typeof gemini_text_respsonse === "function") gemini_text_respsonse(text);\n});\n}\nwindow.gemini_run = gemini_run;\n';
		document.getElementsByTagName('head')[0].append(gemini_map);
} 

function gemini_text_respsonse_br(data, newline) {
	if (newline=="br")
		return data.replace(/ /g,"&nbsp;").replace(/\n/g,"<br>");;
	else if (newline=="n")
		return data;	
	else
		return data.replace(/\n/g,"");
}
