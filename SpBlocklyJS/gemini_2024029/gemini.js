/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu
*/

'use strict';

function gemini_text_initial() {
	const bemini_importMap = 
	{
		"imports": {
		  "@google/generative-ai": "https://esm.run/@google/generative-ai"
		}
	};
	var bemini_map = document.createElement("script");
	bemini_map.type = "importmap";
	bemini_map.textContent = JSON.stringify(bemini_importMap);
	document.getElementsByTagName('head')[0].append(bemini_map);
} 

async function gemini_text_do(input_key, input_model, input_code) {
	var bemini_mod = document.createElement("script");
	bemini_mod.type = "module";
	bemini_mod.textContent = 'import { GoogleGenerativeAI } from "@google/generative-ai";\nconst genAI = new GoogleGenerativeAI("'+input_key+'");\nconst model = genAI.getGenerativeModel({ model: "'+input_model+'"});\nasync function bemini_text(requestText) {\n  const result = await model.generateContent(requestText);\n  const response = await result.response;\n  return response.text();\n}\n'+input_code.replace(/\'/g,'"');
	console.log(input_code);
	console.log(bemini_mod.textContent);
	document.body.appendChild(bemini_mod);
} 

