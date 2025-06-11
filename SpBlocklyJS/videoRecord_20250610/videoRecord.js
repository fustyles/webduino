let videoKey = "";
let videoModel = "";
let videoPrompt = "";
let videoLanguage = "";
let videoChunks = [];
let videoRecorder;
let videoInputIndex = 0;
let videoWidth = 320;
let videoHeight = 240;

function recording_save_initial(videoIndex, width, height) {
	videoInputIndex = videoIndex;
	videoWidth = width;
	videoHeight = height;	
}

function recording_GeminiSTT_initial(videoIndex, width, height, key, model, prompt) {
	videoInputIndex = videoIndex;
	videoWidth = width;
	videoHeight = height;	
	videoKey = key;	
	videoModel = model;
	videoPrompt = prompt;
}

async function recording_startRecording() {
	try {
		let videoIndex = 0;
		const devices = await navigator.mediaDevices.enumerateDevices();
		console.log(devices);
		for (const device of devices) {
			if (device.kind === 'videoinput'){
				if (videoInputIndex==videoIndex) {				
					let userMedia = "";
					if (device.deviceId=='')
						userMedia = {audio: true, video: {facingMode: 'environment', width: videoWidth, height: videoHeight} };
					else
						userMedia = {audio: true, video: {deviceId: {'exact':device.deviceId}, facingMode: 'environment', width: videoWidth, height: videoHeight} };				
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

async function recording_stopRecordingSave() {
	if (videoRecorder && videoRecorder.state === 'recording') {
		videoRecorder.stop();
		videoRecorder.onstop = () => {
			let videoBlob = new Blob(videoChunks, { type: 'video/wav' });
			let videoUrl = URL.createObjectURL(videoBlob);
		
			const a = document.createElement('a');
			a.href = videoUrl;
			a.download = 'recording.wav';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);

			videoChunks = [];
		};		
	}

};

async function recording_stopRecordingGeminiSTT() {
	if (videoRecorder && videoRecorder.state === 'recording') {	
		videoRecorder.stop();
		videoRecorder.onstop = () => {
			let videoBlob = new Blob(videoChunks, { type: 'video/wav' });
			let videoUrl = URL.createObjectURL(videoBlob);
			const reader = new FileReader();
			reader.onloadend = () => {
				let videoBase64 = reader.result.split(',')[1];
				sendMediaFileToGeminiSTT(videoKey, videoModel, videoPrompt, videoBase64).then(
					res => {
						if (typeof videoGeminiSTT === 'function') videoGeminiSTT(res);
					}
				)
			};
			reader.readAsDataURL(videoBlob);

			videoChunks = [];
		};
	}
};

async function sendMediaFileToGemini(apiKey, filePath, mimeType, prompt) {
  try {
    const fileBuffer = await fs.readFile(filePath);
    const encodedData = fileBuffer.toString('base64');

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const filePart = {
      inline_data: {
        data: encodedData,
        mime_type: mimeType,
      },
    };

    const textPart = {
      text: prompt.replace(/\n/g, ""), // Remove newlines from prompt
    };

    const requestBody = {
      contents: [{
        role: "user",
        parts: [filePart, textPart]
      }],
    };

    const response = await axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      timeout: 20000, // Set a timeout for the request (20 seconds)
    });

    const responseData = response.data;
    let getText;

    if (responseData && responseData.candidates && responseData.candidates.length > 0 && responseData.candidates[0].content && responseData.candidates[0].content.parts && responseData.candidates[0].content.parts.length > 0) {
      getText = responseData.candidates[0].content.parts[0].text;
    } else if (responseData && responseData.error && responseData.error.message) {
      getText = responseData.error.message;
    } else {
      getText = "An unexpected error occurred or no text was returned.";
    }

    return getText.replace(/\n/g, ""); // Remove newlines from the final response
  } catch (error) {
    console.error("Error connecting to Gemini API or during request:", error.message);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Gemini API Error Response Data:", error.response.data);
      console.error("Gemini API Error Status:", error.response.status);
      console.error("Gemini API Error Headers:", error.response.headers);
      return `Gemini API error: ${error.response.data.error ? error.response.data.error.message : error.message}`;
    } else if (error.request) {
      // The request was made but no response was received
      return "No response received from Gemini API.";
    } else {
      // Something happened in setting up the request that triggered an Error
      return `Error setting up request: ${error.message}`;
    }
  }
}