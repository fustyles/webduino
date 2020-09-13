document.write('<canvas id="canvas" style="z-index:999;position:absolute;display:none"></canvas>');
document.write('<div id="region" style="z-index:998;position:absolute"><video id="video" width="320" height="240" preload autoplay loop muted></video><br><button id="detect" onclick="this.disabled=true;DetectVideo();" style="display:none" disabled>Start Detection</button><br><div id="message" style="color:red"></div></div>');

var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var detect = document.getElementById('detect'); 
var message = document.getElementById('message');

var myResult,myTimer;
var modelPath,distanceLimit,faceImagesPath,facelabels,faceImagesCount;
var Model,video,canvas,context,result; 

let labeledFaceDescriptors;
let faceMatcher;
let displaySize = { width:320, height: 240 };

function StartFaceRecognition(input_result, input_timer, input_modelpath, input_faceimagepath, input_facelabel, input_faceimagecount, input_distancelimit) {
	myResult = input_result;
	myTimer = input_timer;
	
	distanceLimit = input_distancelimit;
	faceImagesPath = input_faceimagepath;
	facelabels = input_facelabel;
	faceImagesCount = input_faceimagecount ;
	modelPath = input_modelpath;
	//message.innerHTML = "Loading models...";

	Promise.all([
	  faceapi.nets.faceLandmark68Net.load(modelPath),
	  faceapi.nets.faceRecognitionNet.load(modelPath),
	  faceapi.nets.ssdMobilenetv1.load(modelPath)
	]).then(function(){
	  startvideo();
	})
}

function startvideo() {
	message.style.display = myResult;
	message.innerHTML = "";

	//video.style.visibility="hidden";
	//video.style.position="absolute";
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
        video.srcObject = stream
        video.onloadedmetadata = () => {   		
          video.play();
		  detect.disabled=false;
		  message.innerHTML = "";
        }
      }) 
}

async function DetectVideo() { 
  canvas.style.display = "block";
  canvas.setAttribute("width", video.width);
  canvas.setAttribute("height", video.height);
  canvas.style.left = region.style.left;
  canvas.style.top = region.style.top; 
  canvas.getContext('2d').drawImage(video,0,0,video.width,video.height); 

  if (!labeledFaceDescriptors) {
	labeledFaceDescriptors = await loadLabeledImages();
	faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, distanceLimit)
  }

  const detections = await faceapi.detectAllFaces(canvas).withFaceLandmarks().withFaceDescriptors();
  const resizedDetections = faceapi.resizeResults(detections, displaySize);

  const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor));
  //message.innerHTML = JSON.stringify(results);
  //console.log(results);
  //console.log(results.length);
  if (results.length>0) {
	  var res = "";
	  for (var i=0;i<results.length;i++) {
		res += results[i]._label + "," + results[i]._distance;
		if (i<results.length-1)
			res += "<br>";
	  }
	  message.innerHTML = res;
  }
  else
	message.innerHTML = "";
  
  results.forEach((result, i) => {
	const box = resizedDetections[i].detection.box
	var drawBox;
	if (result.distance<=distanceLimit)
		drawBox = new faceapi.draw.DrawBox(box, { label: result.toString()})
	else
		drawBox = new faceapi.draw.DrawBox(box, { label: (Math.round(result.distance*100)/100).toString()})
	drawBox.draw(canvas);
  })
  setTimeout('canvas.style.display = "none";', myTimer*1000);
}

function loadLabeledImages() {
  return Promise.all(
	facelabels.map(async label => {
		const descriptions = []
		for (let i=1;i<=faceImagesCount;i++) {
			const img = await faceapi.fetchImage(faceImagesPath+label+'/'+i+'.jpg')
			const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
			descriptions.push(detections.descriptor)
		}
		return new faceapi.LabeledFaceDescriptors(label, descriptions)
	})
  )
}