document.write('<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>');
document.write('<script src="https://fustyles.github.io/webduino/faceapi_20200124/face-api.min.js"></script>');
document.write('<div id="region_faceapidetect" style="z-index:999"><video id="gamevideo_faceapidetect" style="position:absolute;" preload autoplay loop muted></video><img id="gameimage_faceapidetect" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><div id="webcam-container" style="position:absolute;"></div><select id="frame_faceapidetect" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><div id="result_faceapidetect" style="color:red;position:absolute"></div></div>');
document.write('<div id="faceapiState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_faceapidetect" style="position:absolute;display:none;"></div>');
document.write('<div id="size_faceapidetect" style="position:absolute;display:none;"></div>');

window.onload = function () {
	var result = document.getElementById('result_faceapidetect');
	var video = document.getElementById('gamevideo_faceapidetect');
	var frame = document.getElementById("frame_faceapidetect");
	var faceapiState = document.getElementById('faceapiState');
	const modelPath = 'https://fustyles.github.io/webduino/faceapi_detect_20201012/';
	let canvas;
	var sourceTimer;  
	let currentStream;
	let faceDetection;

	$(".progress-bar").removeClass('d-none');
	Promise.all([
		faceapi.nets.tinyFaceDetector.load(modelPath),
		faceapi.nets.faceLandmark68TinyNet.load(modelPath),
		faceapi.nets.faceRecognitionNet.load(modelPath),
		faceapi.nets.faceExpressionNet.load(modelPath),
		faceapi.nets.ageGenderNet.load(modelPath)
	]).then(function(){
		sourceTimer = setInterval(
			function(){
				var source = document.getElementById("sourceId_faceapidetect");
				if (source.innerHTML!="") {
					clearInterval(sourceTimer);	
					var obj = document.getElementById(source.innerHTML);
					var size = document.getElementById("size_faceapidetect");
					canvas = faceapi.createCanvasFromMedia(obj);
					document.getElementById('webcam-container').append(canvas);
					faceapi.matchDimensions(canvas, JSON.parse(size.innerHTML));					
					setTimeout(
						function(){
							var obj = document.getElementById(source.innerHTML);
							DetectVideo(obj);
						}
					, 3000);
				}				
			}
		, 100);
	})

	async function DetectVideo(obj) {
		if (obj.tagName=="IMG") {
			if (obj.src=="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7") {
				try { 
					document.createEvent("TouchEvent");
					setTimeout(function(){DetectVideo(obj);},200);
				}
				catch(e) { 
					setTimeout(function(){DetectVideo(obj);},150);
				} 
				return;
			}
		}		
		canvas.setAttribute("width", obj.width);
		canvas.setAttribute("height", obj.height);
		canvas.style.width = obj.width+"px";
		canvas.style.height = obj.height+"px";	  
		canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

		if (faceapiState.innerHTML=="0") {
			//result.innerHTML = "";
			canvas.getContext('2d').drawImage(obj, 0, 0, obj.width, obj.height);
			setTimeout(function(){DetectVideo(obj); }, 100);
			return;
		}

		const detections = await faceapi.detectAllFaces(obj, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks(true).withFaceExpressions().withAgeAndGender()
		const resizedDetections = faceapi.resizeResults(detections, JSON.parse(document.getElementById("size_faceapidetect").innerHTML))
                
		if (frame.value==1) {
			faceapi.draw.drawDetections(canvas, resizedDetections)
			faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
			faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
		}

		var i=0;
		result.innerHTML ="";
		resizedDetections.forEach(faceResult => {
			const { detection,expressions,gender,genderProbability,age } = faceResult
			result.style.top = (obj.height+10) + "px";
			
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
		if (result.innerHTML.length>0) {
			result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-4);
			if (typeof faceapidetect_recognitionFinish === 'function') faceapidetect_recognitionFinish();
		}
		else
			if (typeof faceapidetect_unrecognitionFinish === 'function') faceapidetect_unrecognitionFinish();

		try { 
			document.createEvent("TouchEvent");
			setTimeout(function(){DetectVideo(obj);},200);
		}
		catch(e) { 
			setTimeout(function(){DetectVideo(obj);},150);
		} 
	}

	function Round(n) {
		return Math.round(Number(n)*100)/100;
	}
}
