let videoKey = "";
let videoModel = "";
let videoPrompt = "";
let videoLanguage = "";
let videoChunks = [];
let videoRecorder;
let videoInputIndex = 0;
let videoWidth = 320;
let videoHeight = 240;
let videoAudio = true;
let videoUrl = "";

function recording_save_initial(videoIndex, width, height, audio) {
	videoInputIndex = videoIndex;
	videoWidth = width;
	videoHeight = height;
	videoAudio = audio;	
}

function recording_Gemini_initial(videoIndex, width, height, audio, key, model, prompt) {
	videoInputIndex = videoIndex;
	videoWidth = width;
	videoHeight = height;
	videoAudio = audio;	
	videoKey = key;	
	videoModel = model;
	videoPrompt = prompt;
}

function recording_video_get() {
	return videoUrl;	
}

async function recording_startRecording() {
	try {
		let videoIndex = 0;
		const devices = await navigator.mediaDevices.enumerateDevices();
		for (const device of devices) {
			if (device.kind === 'videoinput'){
				if (videoInputIndex==videoIndex) {				
					let userMedia = "";
					if (device.deviceId=='')
						userMedia = {audio: videoAudio, video: {facingMode: 'environment', width: videoWidth, height: videoHeight} };
					else
						userMedia = {audio: videoAudio, video: {deviceId: {'exact':device.deviceId}, facingMode: 'environment', width: videoWidth, height: videoHeight} };				
					const stream = await navigator.mediaDevices.getUserMedia(userMedia);

					videoRecorder = new MediaRecorder(stream);

					videoRecorder.ondataavailable = event => {
						videoChunks.push(event.data);
					};
					videoRecorder.start();
					break;
				}
				videoIndex++;
			}
			
		}
	} catch (error) {
		console.error('Error accessing video devices:', error);
	}
};

async function recording_stopRecording(type) {
	if (videoRecorder && videoRecorder.state === 'recording') {
		videoRecorder.stop();
		videoRecorder.onstop = () => {
			let videoBlob = new Blob(videoChunks, { type: 'video/wav' });
			videoUrl = URL.createObjectURL(videoBlob);
		
			if (type) {
				const a = document.createElement('a');
				a.href = videoUrl;
				a.download = 'recording.wav';
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			}

			videoChunks = [];
		};		
	}

};

async function recording_stopRecordingGemini() {
	if (videoRecorder && videoRecorder.state === 'recording') {	
		videoRecorder.stop();
		videoRecorder.onstop = () => {
			let videoBlob = new Blob(videoChunks, { type: 'video/wav' });
			videoUrl = URL.createObjectURL(videoBlob);
			const reader = new FileReader();
			reader.onloadend = () => {
				let videoBase64 = reader.result.split(',')[1];
				sendMediaFileToGeminiVision(videoKey, videoModel, videoPrompt, videoBase64, "video/wav").then(
					res => {
						if (typeof videoGeminiVision === 'function') videoGeminiVision(res);
					}
				)
			};
			reader.readAsDataURL(videoBlob);

			videoChunks = [];
		};
	}
};

async function sendMediaFileToGeminiVision(apiKey, model, prompt, encodedData, mimeType) {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const filePart = {
      inline_data: {
        data: encodedData,
        mime_type: mimeType,
      },
    };

    const textPart = {
      text: prompt,
    };

    const requestBody = {
      contents: [{
        role: "user",
        parts: [filePart, textPart]
      }],
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error ? errorData.error.message : `HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    let getText;

    if (responseData && responseData.candidates && responseData.candidates.length > 0 && responseData.candidates[0].content && responseData.candidates[0].content.parts && responseData.candidates[0].content.parts.length > 0) {
      getText = responseData.candidates[0].content.parts[0].text;
    } else if (responseData && responseData.error && responseData.error.message) {
      getText = responseData.error.message;
    } else {
      getText = "An unexpected error occurred or no text was returned.";
    }

    return getText;
  } catch (error) {
    return `${error.message}`;
  }
}
