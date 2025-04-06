// 錄音
let audioGeminiKey = "";
let audioPrompt = "";		
let audioChunks = [];
let audioRecorder;
let audioInputIndex = 0;

function recording_save_initial(audioIndex, buttonStartID, buttonStopID) {
	audioInputIndex = audioIndex;
	
	let audioButtonStart = document.getElementById(buttonStartID);
	audioButtonStart.addEventListener('mousedown', recording_startRecording);
	audioButtonStart.addEventListener('touchstart', recording_startRecording);
	
	let audioButtonStop = document.getElementById(buttonStopID);
	audioButtonStop.addEventListener('mouseup', recording_stopRecordingSave);
	audioButtonStop.addEventListener('touchend', recording_stopRecordingSave);
}

function recording_geminiSTT_initial(audioIndex, buttonStartID, buttonStopID, geminiKey, geminiPrompt) {
	audioInputIndex = audioIndex;
	
	let audioButtonStart = document.getElementById(buttonStartID);
	audioButtonStart.addEventListener('mousedown', recording_startRecording);
	audioButtonStart.addEventListener('touchstart', recording_startRecording);
	
	let audioButtonStop = document.getElementById(buttonStopID);
	audioButtonStop.addEventListener('mouseup', recording_stopRecordingGeminiSTT);
	audioButtonStop.addEventListener('touchend', recording_stopRecordingGeminiSTT);
	
	audioGeminiKey = geminiKey;	
	audioPrompt = geminiPrompt;
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
			sendAudioFileToGeminiSTT(audioGeminiKey, audioPrompt, audioBase64).then(
				res => {
					if (typeof audioGeminiSTT === 'function') audioGeminiSTT(res);
				}
			)
		};
		reader.readAsDataURL(audioBlob);

		audioChunks = [];
		startRecordingButton.disabled = false;
		stopRecordingButton.disabled = true;
	};
};

async function sendAudioFileToGeminiSTT(apikey, prompt, audioBase64) {
	let result = "";
	try {
		const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apikey}`;
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
	}
}		