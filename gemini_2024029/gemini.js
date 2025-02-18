+(function (window, document) {
		
	let Gemini_api_key = "";
	let Gemini_model = "";
	
	function gemini_chat_initial(input_key, input_model, input_tokens, input_temperature) {
			Gemini_api_key = input_key;
			Gemini_model = input_model;
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
			gemini_mod.textContent =  `
			import { GoogleGenerativeAI } from "@google/generative-ai";
			const genAI = new GoogleGenerativeAI("'+input_key+'");
			var chatHistory = {history: [],generationConfig: {maxOutputTokens: '+input_tokens+', temperature: '+input_temperature+',},};
			window.chatHistory = chatHistory;		
			async function gemini_chat_run(prompt) {
				const model = await genAI.getGenerativeModel({ model: "'+input_model+'"});
				const chat = model.startChat(chatHistory);
				await chat.sendMessage(prompt).then(function(result) {
					const response = result.response;
					const text = response.text();
					gemini_chat_insert(prompt, text);
					if (typeof gemini_chat_response === "function") gemini_chat_response(text);
				});
			}
			async function gemini_chat_insert(request, response) {
				var char_request = {};
				char_request.role = "user";
				char_request.parts = [];
				var char_request_text = {};
				char_request_text.text = request;
				char_request.parts.push(char_request_text);
				chatHistory["history"].push(char_request);
				var char_response = {};
				char_response.role = "model";
				char_response.parts = [];
				var char_response_text = {};
				char_response_text.text = response;
				char_response.parts.push(char_request_text);
				chatHistory["history"].push(char_response);
				//console.log(chatHistory);
			}
			async function gemini_chat_clear(){
				chatHistory["history"] = [];
			}
			window.gemini_chat_run = gemini_chat_run;
			window.gemini_chat_insert = gemini_chat_insert;
			window.gemini_chat_clear = gemini_chat_clear;
			window.gemini_chat_history = chatHistory;
   			`;
			
			
			document.body.appendChild(gemini_mod);	
		        console.log(window);
	} 
	
	function gemini_chat_response_br(data, newline) {
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
			},
	  		error: function(jqXHR, textStatus, errorThrown){
	      			//console.log(jqXHR);
				alert(jqXHR.statusText);
	      			//console.log(textStatus);
	      			//console.log(errorThrown);
	  		}
		});
	}
	
	function gemini_chat_content_file_remote_insert(url) {
		$.ajax({
			url: url,
			async: false,
			success: function (data){
				if (data!="")
					gemini_chat_insert(data, "");			
			},
	  		error: function(jqXHR, textStatus, errorThrown){
	      			//console.log(jqXHR);
				alert(jqXHR.statusText);
	      			//console.log(textStatus);
	      			//console.log(errorThrown);
	  		}
		});
	}
	
	async function gemini_chat_image_request(message, imageURL) {
	    try {
	        let inline_data = await get_inline_data(imageURL);
		
	        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${Gemini_api_key}`;
	        const data = {
	            contents: [
	                {
	                    parts: [
	                        {
	                            text: message
	                        },
	                        ...inline_data
	                    ]
	                }
	            ]
	        };
	
	        const options = {
	            method: 'POST',
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            body: JSON.stringify(data)
	        };
	
	        const response = await fetch(url, options);
	        const json = await response.json();
	        let result;   
	        if ('error' in json) {
	            result = json.error.message;
	        } else {
		    result = json.candidates[0].content.parts[0].text;
	            var char_request = {};
	            char_request.role = "model";
	            char_request.parts = [];
	            var char_request_text = {};
	            char_request_text.text = result;
	            char_request.parts.push(char_request_text);
	            chatHistory["history"].push(char_request);
		}
		if (typeof gemini_chat_response === "function") gemini_chat_response(result);
	    } catch (error) {
		if (typeof gemini_chat_response === "function") gemini_chat_response(JSON.stringify(error));
	    }
	}
	
	async function get_inline_data(imageList) {
		let inline_data = [];
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
			else if (imageURL[i].toLowerCase().trim().indexOf("data:")==0)
					imageBase64 = imageURL[i].split(",")[1];
			else
					imageBase64 = imageURL[i];
			imageBase64 = decodeURIComponent(imageBase64);
			
			inline_data.push({
				inline_data: {
					mime_type: "image/jpeg",
					data: imageBase64
				}
			});
		}
		return 	inline_data;
	}
	
	async function gemini_chat_file_request(fileType, fileURL, message) {
	    try {
		let fileBase64 = await getFileBase64(fileURL, 0);
		fileBase64 = decodeURIComponent(fileBase64);
	        const url = `https://generativelanguage.googleapis.com/v1beta/models/${Gemini_model}:generateContent?key=${Gemini_api_key}`;
	        const data = {
	            contents: [{
					"parts":[
					  {"inline_data": {"mime_type": fileType, "data": fileBase64}},
					  {"text": message}
					]
				}]
	        };
	
	        const options = {
	            method: 'POST',
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            body: JSON.stringify(data)
	        };
	
	        const response = await fetch(url, options);
	        const json = await response.json();
	        let result;   
	        if ('error' in json) {
	            result = json.error.message;
	        } else {
		    result = json.candidates[0].content.parts[0].text;
	            var char_request = {};
	            char_request.role = "model";
	            char_request.parts = [];
	            var char_request_text = {};
	            char_request_text.text = result;
	            char_request.parts.push(char_request_text);
	            chatHistory["history"].push(char_request);
		}
		if (typeof gemini_chat_response === "function") gemini_chat_response(result);
	    } catch (error) {
		if (typeof gemini_chat_response === "function") gemini_chat_response(JSON.stringify(error));
	    }
	}
	
	async function getFileBase64(fileURL, type) {
	    const response = await fetch(fileURL);
	    const blob = await response.blob();
	    const base64String = await new Promise((resolve, reject) => {
	        const reader = new FileReader();
	        reader.onloadend = () => resolve(reader.result.split(',')[1]);
	        reader.onerror = reject;
	        reader.readAsDataURL(blob);
	    });
	    return type ? `data:image/jpeg;base64,${base64String}` : base64String;
	}

  window.gemini_chat_initial = gemini_chat_initial;
  window.gemini_chat_response_br = gemini_chat_response_br;
  window.gemini_chat_content_file = gemini_chat_content_file;
  window.gemini_chat_content_file_remote = gemini_chat_content_file_remote;
  window.gemini_chat_content_file_remote_insert = gemini_chat_content_file_remote_insert;
  window.gemini_chat_image_request = gemini_chat_image_request;
  window.get_inline_data = get_inline_data;
  window.gemini_chat_file_request = gemini_chat_file_request;
  window.getFileBase64 = getFileBase64;

}(window, window.document));
