document.write('<div id="region_faceapirecognize" style="z-index:999;position:absolute"><video id="gamevideo_faceapirecognize" style="position:absolute;z-index:998;" preload autoplay loop muted></video><img id="gameimage_faceapirecognize" style="position:absolute;z-index:998;" crossorigin="anonymous"><canvas id="gamecanvas_faceapirecognize" style="z-index:999;"></canvas><br><br><div id="gamediv_faceapirecognize" style="color:red;position:absolute; style="z-index:997;"></div></div>');
document.write('<div id="faceapirecognizeState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_faceapirecognize" style="position:absolute;display:none;"></div>');
document.write('<div id="size_faceapirecognize" style="position:absolute;display:none;"></div>');

var modelPath = "https://fustyles.github.io/webduino/faceapi_recognize_20201012/";

var video = document.getElementById('gamevideo_faceapirecognize');
var canvas = document.getElementById('gamecanvas_faceapirecognize');
var context = canvas.getContext('2d');
var region = document.getElementById("region_faceapirecognize");
var detect = document.getElementById('detect_faceapirecognize');
var faceapirecognizeState = document.getElementById('faceapirecognizeState'); 
var message = document.getElementById('gamediv_faceapirecognize');
var size = document.getElementById("size_faceapirecognize");
var sourceTimer; 

var myTimer;
var distanceLimit,faceImagesPath,facelabels,faceImagesCount;
var Model,video,canvas,context,result; 

let labeledFaceDescriptors;
let faceMatcher;

function StartFaceRecognition(input_timer, input_faceimagepath, input_facelabel, input_faceimagecount, input_distancelimit) {
	myTimer = input_timer;

	distanceLimit = input_distancelimit;
	faceImagesPath = input_faceimagepath;
	facelabels = input_facelabel;
	faceImagesCount = input_faceimagecount ;

	Promise.all([
		faceapi.nets.faceLandmark68Net.load(modelPath),
		faceapi.nets.faceRecognitionNet.load(modelPath),
		faceapi.nets.ssdMobilenetv1.load(modelPath)
	]).then(function(){
		sourceTimer = setInterval(
			function(){
				var source = document.getElementById("sourceId_faceapirecognize");
				if (source.innerHTML!="") {
					var obj = document.getElementById(source.innerHTML);
					source.innerHTML = "";
					DetectVideo(obj);
				}				
			}
		, 200);
	})
}

async function DetectVideo(obj) {
	canvas.style.display = "block";
	canvas.setAttribute("width", obj.width);
	canvas.setAttribute("height", obj.height);
	canvas.style.width = obj.width+"px";
	canvas.style.height = obj.height+"px";
	context.drawImage(obj,0,0,obj.width,obj.height);

	if (faceapirecognizeState.innerHTML=="0") {
		//message.innerHTML = "";
		setTimeout(function(){DetectVideo(obj); }, 100);
		return;
	}	

	if (!labeledFaceDescriptors) {
		labeledFaceDescriptors = await loadLabeledImages();
		faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, distanceLimit)
	}

	const detections = await faceapi.detectAllFaces(canvas).withFaceLandmarks().withFaceDescriptors();
	const resizedDetections = faceapi.resizeResults(detections, JSON.parse(size.innerHTML));

	const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor));
	if (results.length>0) {
		var res = "";
		for (var i=0;i<results.length;i++) {
			res += results[i]._label + "," + results[i]._distance + "<br>";
		}
		message.innerHTML = res;
		if (message.innerHTML!="") {
			message.innerHTML = message.innerHTML.substr(0,message.innerHTML.length-4); 
			if (typeof faceapirecognize_recognitionFinish === 'function') faceapirecognize_recognitionFinish();
		}
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
			if (faceImagesCount==0) { 
				const img = await faceapi.fetchImage(faceImagesPath+label+'.jpg')
				const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
				descriptions.push(detections.descriptor)
			}
			else {
				for (let i=1;i<=faceImagesCount;i++) {
					const img = await faceapi.fetchImage(faceImagesPath+label+'/'+i+'.jpg')
					const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
					descriptions.push(detections.descriptor)
				}
			}
			return new faceapi.LabeledFaceDescriptors(label, descriptions)
		})
	)
}
