'use strict';
let Gemini_api_key = "";
let Gemini_model = "";

let chatHistory;

function gemini_chat_initial(input_key, input_model, input_tokens, input_temperature, input_role) {
  Gemini_api_key = input_key;
  Gemini_model = input_model;

  chatHistory = {history: [],generationConfig: {maxOutputTokens: input_tokens, temperature: input_temperature,},};
  gemini_chat_insert(input_role, "OK");
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
	char_response.parts.push(char_response_text);
	chatHistory["history"].push(char_response);			
	//console.log(chatHistory);
}

function gemini_chat_clear() {
  chatHistory["history"] = [];
}

async function gemini_chat_run(userPrompt) {
	var char_request = {};
	char_request.role = "user";
	char_request.parts = [];
	var char_request_text = {};
	char_request_text.text = userPrompt;
	char_request.parts.push(char_request_text);
	chatHistory["history"].push(char_request);
			
    let result = '';
    try {
        let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${Gemini_api_key}`;
		let data = {
			"contents": chatHistory.history,
			"generationConfig": chatHistory.generationConfig
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
        
        if ('error' in json) {
            result = json.error.message;
        } else if (json.candidates && json.candidates.length > 0) {
            result = json.candidates[0].content.parts[0].text;
			
            var char_request = {};
            char_request.role = "model";
            char_request.parts = [];
            var char_request_text = {};
            char_request_text.text = result;
            char_request.parts.push(char_request_text);
            chatHistory["history"].push(char_request);			
        } else {
            result = 'An unexpected response was received from the API.';
        }
        
    } catch (error) {
        result = JSON.stringify(error);
    } finally {
        if (typeof gemini_chat_response === "function") {
            gemini_chat_response(result);
        }
    }
}

function gemini_chat_set(input_property, input_value) {
	if (input_property=="temperature")
		chatHistory["generationConfig"]["temperature"] = Number(input_value);
	else if (input_property=="maxOutputTokens")
		chatHistory["generationConfig"]["maxOutputTokens"] = Number(input_value);	
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
				gemini_chat_insert(data, "ok");			
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

async function gemini_generate_image_request(message) {
	let result = "";
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${Gemini_api_key}`;
        const data = {
            contents: [
                {
                    parts: [
                        {
                            text: message
                        }
                    ]
                }
            ],
			generationConfig: {
				responseModalities: ["Text", "Image"]
			}
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
           
        if ('error' in json) {
            result = json.error.message;
        } else {
		for (var i=0;i<json.candidates[0].content.parts.length;i++) {
			if (json.candidates[0].content.parts[i].inlineData) {
				result = "data:"+json.candidates[0].content.parts[i].inlineData.mimeType+";base64,"+json.candidates[0].content.parts[i].inlineData.data;
				break;
			}
		}
	}
		
	if (typeof gemini_chat_response === "function") gemini_chat_response(result);
    } catch (error) {
	if (typeof gemini_chat_response === "function") gemini_chat_response(JSON.stringify(error));
    }
}

async function gemini_generate_image_mix_request(prompt, imageURL) {
	let result = "";
    try {
		let inline_data = await get_inline_data(imageURL);	
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${Gemini_api_key}`;
        const data = {
            contents: [
                {
                    parts: [
                        {
                            text: prompt
                        },
                        ...inline_data
                    ]
                }
            ],
			generationConfig: {
				responseModalities: ["Text", "Image"]
			}
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
           
        if ('error' in json) {
            result = json.error.message;
        } else {
		for (var i=0;i<json.candidates[0].content.parts.length;i++) {
			if (json.candidates[0].content.parts[i].inlineData) {
				result = "data:"+json.candidates[0].content.parts[i].inlineData.mimeType+";base64,"+json.candidates[0].content.parts[i].inlineData.data;
				break;
			}
		}
	}
		
	if (typeof gemini_chat_response === "function") gemini_chat_response(result);
    } catch (error) {
	if (typeof gemini_chat_response === "function") gemini_chat_response(JSON.stringify(error));
    }
}

async function gemini_search_request(prompt) {
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${Gemini_model}:generateContent?key=${Gemini_api_key}`;
        const data = {
            contents: [
                {
                    parts: [
                        {
                            text: prompt
                        }
                    ]
                }
            ],
			tools: [
				{
					google_search: {}
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
	    gemini_chat_insert(prompt, result);
        }
        if (typeof gemini_chat_response === "function") gemini_chat_response(result);
    } catch (error) {
        if (typeof gemini_chat_response === "function") gemini_chat_response(JSON.stringify(error));
    }
}

async function gemini_youtube_request(prompt, ytUrl) {
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${Gemini_model}:generateContent?key=${Gemini_api_key}`;
        const data = {
            contents: [
                {
		    parts: [
			  {text: prompt},				
			  {
			    file_data: {
				    file_uri: ytUrl
			    }
			  }
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
	    gemini_chat_insert(prompt, result);
        }
        if (typeof gemini_chat_response === "function") gemini_chat_response(result);
    } catch (error) {
        if (typeof gemini_chat_response === "function") gemini_chat_response(JSON.stringify(error));
    }
}
