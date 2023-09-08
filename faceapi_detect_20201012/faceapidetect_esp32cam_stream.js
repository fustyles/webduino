document.write('<div id="region_faceapidetect" style="z-index:999"><img id="gameimage_faceapidetect" style="position:absolute;z-index:998;" crossorigin="anonymous"><div id="webcam-container" style="position:absolute;z-index:999;"></div><select id="frame_faceapidetect" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><div id="result_faceapidetect" style="color:red;position:absolute"></div></div>');
document.write('<div id="faceapiState" style="position:absolute;display:none;">1</div>');
document.write('<div id="size_faceapidetect" style="position:absolute;display:none;"></div>');

window.onload = function () {
	var ShowImage = document.getElementById('gameimage_faceapidetect');	
	var frame = document.getElementById("frame_faceapidetect");
	var faceapiState = document.getElementById('faceapiState');
	var size = document.getElementById("size_faceapidetect");
	var result = document.getElementById('result_faceapidetect');
	const modelPath = 'https://fustyles.github.io/webduino/faceapi_detect_20201012/';
	let faceDetection;
	let canvas;	
	
	ShowImage.src = document.location.origin+':81/?stream';
	
	$(".progress-bar").removeClass('d-none');
	Promise.all([
		faceapi.nets.tinyFaceDetector.load(modelPath),
		faceapi.nets.faceLandmark68TinyNet.load(modelPath),
		faceapi.nets.faceRecognitionNet.load(modelPath),
		faceapi.nets.faceExpressionNet.load(modelPath),
		faceapi.nets.ageGenderNet.load(modelPath)
	]).then(function(){
		canvas = faceapi.createCanvasFromMedia(ShowImage);
		document.getElementById('webcam-container').append(canvas);	
		DetectImage();
	})	

	async function DetectImage() {
		canvas.setAttribute("width", ShowImage.width);
		canvas.setAttribute("height", ShowImage.height);
		canvas.style.width = ShowImage.width+"px";
		canvas.style.height = ShowImage.height+"px";	  
		canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
		  if (size.innerHTML == "") {
			  size.innerHTML = "{\"width\":"+ShowImage.width+", \"height\": "+ShowImage.height+"}";
			  faceapi.matchDimensions(canvas, JSON.parse(size.innerHTML));
		  }		

		if (faceapiState.innerHTML=="0") {
			result.innerHTML = "";
			setTimeout(function(){DetectImage();},100);
			return;
		}
		
		const detections = await faceapi.detectAllFaces(ShowImage, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks(true).withFaceExpressions().withAgeAndGender()
		const resizedDetections = faceapi.resizeResults(detections, JSON.parse(size.innerHTML))
                
		if (frame.value==1) {
			faceapi.draw.drawDetections(canvas, resizedDetections)
			faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
			faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
		}

		var i=0;
		result.innerHTML ="";
		resizedDetections.forEach(faceResult => {
			const { detection,expressions,gender,genderProbability,age } = faceResult
			result.style.top = (ShowImage.height+10) + "px";
			
			var maxEmotion="neutral";
			var maxProbability=expressions.neutral;
			if (expressions.happy>maxProbability) {
				maxProbability=expressions.happy;
				maxEmotion="happy";
			}
			if (expressions.sad>maxProbability) {
				maxProbability=expressions.sad;
				maxEmotion="sad";
			}
			if (expressions.angry>maxProbability) {
				maxProbability=expressions.angry;
				maxEmotion="angry";
			}
			if (expressions.fearful>maxProbability) {
				maxProbability=expressions.fearful;
				maxEmotion="fearful";
			}
			if (expressions.disgusted>maxProbability) {
				maxProbability=expressions.disgusted;
				maxEmotion="disgusted";
			}
			if (expressions.surprised>maxProbability) {
				maxProbability=expressions.surprised;
				maxEmotion="surprised";
			}

			result.innerHTML+= i+",age,"+Math.round(age)+",gender,"+gender+",genderProbability,"+Round(genderProbability)+",emotion,"+maxEmotion+",emotionProbability,"+maxProbability+",neutral,"+Round(expressions.neutral)+",happy,"+Round(expressions.happy)+",sad,"+Round(expressions.sad)+",angry,"+Round(expressions.angry)+",fearful,"+Round(expressions.fearful)+",disgusted,"+Round(expressions.disgusted)+",surprised,"+Round(expressions.surprised)+",boxX,"+Round(detection._box._x)+",boxY,"+Round(detection._box._y)+",boxWidth,"+Round(detection._box._width)+",boxHeight,"+Round(detection._box._height)+"<br>";
			if (frame.value==1) {
				new faceapi.draw.DrawTextField(
					[
						`${faceapi.round(age, 0)} years`,
						`${gender} (${faceapi.round(genderProbability)})`
					],
					faceResult.detection.box.bottomRight
				).draw(canvas)
			}

			i++;
		})
		if (typeof recognitionFinish === 'function') recognitionFinish();
		
		setTimeout(function(){DetectImage();},100);
	}  
	
	function Round(n) {
		return Math.round(Number(n)*100)/100;
	}	
}
