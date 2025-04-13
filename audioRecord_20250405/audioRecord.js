let audioKey = "";
let audioModel = "";
let audioPrompt = "";
let audioLanguage = "";
let audioChunks = [];
let audioRecorder;
let audioInputIndex = 0;

function recording_save_initial(audioIndex) {
	audioInputIndex = audioIndex;
}

function recording_GeminiSTT_initial(audioIndex, key, model, prompt) {
	audioInputIndex = audioIndex;
	audioKey = key;	
	audioModel = model;
	audioPrompt = prompt;
}

function recording_openAISTT_initial(audioIndex, key, model, prompt, language) {
	audioInputIndex = audioIndex;
	audioKey = key;	
	audioModel = model;
	audioPrompt = prompt;
	audioLanguage = language;
}

async function recording_startRecording() {
	try {
		let index = 0;
		const devices = await navigator.mediaDevices.enumerateDevices();
		for (const device of devices) {
			if (device.kind === 'audioinput'&&audioInputIndex==index) {
				const stream = await navigator.mediaDevices.getUserMedia({
					audio: { deviceId: device.deviceId ? { exact: device.deviceId } : undefined }
				});

				let audioContext = new (window.AudioContext || window.webkitAudioContext)();
				audioRecorder = new MediaRecorder(stream);

				audioRecorder.ondataavailable = event => {
					audioChunks.push(event.data);
				};
				audioRecorder.start();

				break;
			}
			index++;
		}
	} catch (error) {
		console.error('Error accessing audio devices:', error);
	}
};

async function recording_stopRecordingSave() {
	audioRecorder.stop();
	audioRecorder.onstop = () => {
		let audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
		let audioUrl = URL.createObjectURL(audioBlob);
	
		const a = document.createElement('a');
		a.href = audioUrl;
		a.download = 'recording.wav';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);

		audioChunks = [];
	};
};

async function recording_stopRecordingGeminiSTT() {
	audioRecorder.stop();
	audioRecorder.onstop = () => {
		let audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
		let audioUrl = URL.createObjectURL(audioBlob);
		const reader = new FileReader();
		reader.onloadend = () => {
			let audioBase64 = reader.result.split(',')[1];
			sendAudioFileToGeminiSTT(audioKey, audioModel, audioPrompt, audioBase64).then(
				res => {
					if (typeof audioGeminiSTT === 'function') audioGeminiSTT(res);
				}
			)
		};
		reader.readAsDataURL(audioBlob);

		audioChunks = [];
	};
};

async function sendAudioFileToGeminiSTT(apikey, model, prompt, audioBase64) {
	let result = "";
	try {
		const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apikey}`;
		const data = {
			contents: [
				{
					role: "user", 
					parts: [
						{
							inline_data: {
								data: audioBase64, 
								mime_type: "audio/wav",
							},
						}, 
						{
							text: prompt,
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
		
		if ('error' in json)
			result = json["error"]["message"];
		else
			result = json["candidates"][0]["content"]["parts"][0]["text"];
		return result;
	}
	catch (e) {
		console.log(e);
		return JSON.stringify(e);
	}
}

async function recording_stopRecordingOpenAISTT() {
	audioRecorder.stop();
	audioRecorder.onstop = () => {
		let audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
		sendAudioFileToOpenAISTT(audioKey, audioModel, audioPrompt, audioBlob, audioLanguage).then(
			res => {
				if (typeof audioOpenAISTT === 'function') audioOpenAISTT(res);
			}
		)
		audioChunks = [];
	};
};

async function sendAudioFileToOpenAISTT(key, model, prompt, blob, language) {
	let result = "";
	let domain = "api.openai.com";
	let path = "/v1/audio/transcriptions";
	try {
		if (model.indexOf("whisper-large-v3-turbo")==0) {
			domain = "api.groq.com";
			path = "/openai/v1/audio/transcriptions";
		}
		const url = `https://${domain}${path}`;
		const formData = new FormData();
		formData.append("model", model);
		formData.append("response_format", "verbose_json");
		formData.append("prompt", prompt);
		if (language)
			formData.append("language", language);
		formData.append("file", new File([blob], "audio.wav", { type: "audio/wav" }));

		const options = {
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + key
			},
			body: formData
		};

		const response = await fetch(url, options);
		const json = await response.json();
		
		if ('error' in json)
			result = json["error"]["message"];
		else
			result = json["text"];
		return result;
	}
	catch (e) {
		console.log(e);
		return JSON.stringify(e);
	}
}
