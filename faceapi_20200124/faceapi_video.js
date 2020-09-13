document.write('<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>');
document.write('<script src="https://fustyles.github.io/webduino/faceapi_20200124/face-api.min.js"></script>');
document.write('<div id="region" style="z-index:999"><video id="webcam" width="320" height="240"  style="z-index:999;position:absolute" preload autoplay loop muted></video><div id="webcam-container" style="z-index:999;position:absolute"></div><select id="frame" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><div id="result" style="color:red;z-index:999;position:absolute">Please wait for loading model.</div></div>');
document.write('<div id="faceapiState" style="position:absolute;display:none;">1</div>');

window.onload = function () {
  var result = document.getElementById('result');
  const camera = document.getElementById('webcam');
  const modelPath = 'https://fustyles.github.io/webduino/faceapi_20200124/';
  let canvas;
  let currentStream;
  let displaySize = { width:320, height: 240 }
  let faceDetection;
  
  ObjectDetect();  
  
  function ObjectDetect() {
    $(".progress-bar").removeClass('d-none');
    Promise.all([
      faceapi.nets.tinyFaceDetector.load(modelPath),
      faceapi.nets.faceLandmark68TinyNet.load(modelPath),
      faceapi.nets.faceRecognitionNet.load(modelPath),
      faceapi.nets.faceExpressionNet.load(modelPath),
      faceapi.nets.ageGenderNet.load(modelPath)
    ]).then(function(){
      startvideo();
    })
  }  
  
  function startvideo() {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: 320,
          height: 240
        }
      })
      .then(stream => {
        camera.srcObject = stream
        camera.onloadedmetadata = () => {       
          camera.play();
		  canvas = faceapi.createCanvasFromMedia(camera)
		  document.getElementById('webcam-container').append(canvas)
		  faceapi.matchDimensions(canvas, displaySize)
          DetectVideo();
        }
      })   
  }
                        
  async function DetectVideo() {
	  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

	  if (document.getElementById('faceapiState').innerHTML=="0") {
		  result.innerHTML = "";
		  setTimeout(function(){DetectVideo(); }, 100);
		  return;
	  }

      const detections = await faceapi.detectAllFaces(camera, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks(true).withFaceExpressions().withAgeAndGender()
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
	  
	  var frame = Number(document.getElementById("frame").value);
	  if (frame==1) {
		  faceapi.draw.drawDetections(canvas, resizedDetections)
		  faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
		  faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
	  }

	  var i=0;
	  result.innerHTML ="";
      resizedDetections.forEach(faceResult => {
        const { detection,expressions,gender,genderProbability,age } = faceResult
		result.style.top = (camera.height+10) + "px";
        //result.innerHTML = JSON.stringify(faceResult);
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

		result.innerHTML+= i+",age,"+Math.round(age)+",gender,"+gender+",genderProbability,"+Round(genderProbability)+",emotion,"+maxEmotion+",neutral,"+Round(expressions.neutral)+",happy,"+Round(expressions.happy)+",sad,"+Round(expressions.sad)+",angry,"+Round(expressions.angry)+",fearful,"+Round(expressions.fearful)+",disgusted,"+Round(expressions.disgusted)+",surprised,"+Round(expressions.surprised)+",boxX,"+Round(detection._box._x)+",boxY,"+Round(detection._box._y)+",boxWidth,"+Round(detection._box._width)+",boxHeight,"+Round(detection._box._height)+"<br>";
        if (frame==1) {
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
	  if (result.innerHTML.length>0)
		result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-4);

      try { 
        document.createEvent("TouchEvent");
        setTimeout(function(){DetectVideo();},250);
      }
      catch(e) { 
        setTimeout(function(){DetectVideo();},150);
      } 
  }

  function Round(n) {
	return Math.round(Number(n)*100)/100;
  }
}
