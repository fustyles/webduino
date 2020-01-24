document.write('<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>');
document.write('<script src="https://fustyles.github.io/webduino/TensorFlow/Face-api/face-api.min.js"></script>');
document.write('<video id="webcam" width="320" height="240"  style="z-index:999;position:absolute" preload autoplay loop muted></video><div id="webcam-container" style="z-index:999;position:absolute"></div><div id="result" style="color:red;z-index:999;position:absolute">Please wait for loading model.</div>');

window.onload = function () {
  var result = document.getElementById('result');
  const camera = document.getElementById('webcam');
  const modelPath = 'https://fustyles.github.io/webduino/TensorFlow/Face-api/';
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
      const detections = await faceapi.detectAllFaces(camera, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks(true).withFaceExpressions().withAgeAndGender()
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
      faceapi.draw.drawDetections(canvas, resizedDetections)
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
      resizedDetections.forEach(faceResult => {
        const { age, gender, genderProbability } = faceResult
		result.style.top = (camera.height+10) + "px";
        result.innerHTML = JSON.stringify(faceResult);
		console.log(result.innerHTML);
        new faceapi.draw.DrawTextField(
          [
            `${faceapi.round(age, 0)} years`,
            `${gender} (${faceapi.round(genderProbability)})`
          ],
          faceResult.detection.box.bottomRight
        ).draw(canvas)
      })
      try { 
        document.createEvent("TouchEvent");
        setTimeout(function(){DetectVideo();},250);
      }
      catch(e) { 
        setTimeout(function(){DetectVideo();},150);
      } 
  }
}
