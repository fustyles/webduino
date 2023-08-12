document.write('<div id="region_faceapirecognize" style="z-index:999;position:absolute"><video id="gamevideo_faceapirecognize" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><img id="gameimage_faceapirecognize" style="position:absolute;z-index:998;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_faceapirecognize" style="z-index:999;position:absolute;"></canvas><br><br><div id="gamediv_faceapirecognize" style="color:red;position:absolute; style="z-index:997;"></div></div>');
document.write('<div id="faceapirecognizeState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_faceapirecognize" style="position:absolute;display:none;">wait</div>');
document.write('<div id="size_faceapirecognize" style="position:absolute;display:none;"></div>');

document.write('<div id="timer_faceapirecognize" style="position:absolute;display:none;"></div>');
document.write('<div id="faceimagepath_faceapirecognize" style="position:absolute;display:none;"></div>');
document.write('<div id="facelabel_faceapirecognize" style="position:absolute;display:none;"></div>');
document.write('<div id="faceimagecount_faceapirecognize" style="position:absolute;display:none;"></div>');
document.write('<div id="distancelimit_faceapirecognize" style="position:absolute;display:none;"></div>');

function faceapirecognize1_video(input_result, input_opacity, input_timer, input_faceimagepath, input_facelabel, input_faceimagecount, input_distancelimit) {
	document.getElementById('gamediv_faceapirecognize').style.display = input_result;
	document.getElementById('region_faceapirecognize').style.opacity = Number(input_opacity);
	document.getElementById('timer_faceapirecognize').innerHTML = input_timer;
	document.getElementById('faceimagepath_faceapirecognize').innerHTML = input_faceimagepath;
	document.getElementById('facelabel_faceapirecognize').innerHTML = input_facelabel;
	document.getElementById('faceimagecount_faceapirecognize').innerHTML = input_faceimagecount;
	document.getElementById('distancelimit_faceapirecognize').innerHTML = input_distancelimit;
}

window.onload = function () {
	var modelPath = "https://fustyles.github.io/webduino/faceapi_recognize_20201012/";
	var ShowImage = document.getElementById('gameimage_faceapirecognize');
	var canvas = document.getElementById('gamecanvas_faceapirecognize');
	var context = canvas.getContext('2d');
	var region = document.getElementById("region_faceapirecognize");
	var detect = document.getElementById('detect_faceapirecognize'); 
	var message = document.getElementById('gamediv_faceapirecognize');
	var size = document.getElementById("size_faceapirecognize");
	var sourceId = document.getElementById("sourceId_faceapirecognize");
	
	var distanceLimit,faceImagesPath,facelabels,faceImagesCount;
	var Model,video,canvas,context,result; 
	let labeledFaceDescriptors;
	let faceMatcher;
	var myTimer,showtime;
	var restartCount=0;
	
	showtime = Number(document.getElementById('timer_faceapirecognize').innerHTML);
	distanceLimit = Number(document.getElementById('distancelimit_faceapirecognize').innerHTML);
	faceImagesCount = Number(document.getElementById('faceimagecount_faceapirecognize').innerHTML);
	faceImagesPath = document.getElementById('faceimagepath_faceapirecognize').innerHTML;
	if (faceImagesCount==0)
		faceImagesPath = faceImagesPath.split(";");
	facelabels = document.getElementById('facelabel_faceapirecognize').innerHTML;
	facelabels = facelabels.split(";");
	

	Promise.all([
		faceapi.nets.faceLandmark68Net.load(modelPath),
		faceapi.nets.faceRecognitionNet.load(modelPath),
		faceapi.nets.ssdMobilenetv1.load(modelPath)
	]).then(function(){
		start();
	})
	
	function start() {
	  clearInterval(myTimer);  
	  myTimer = setInterval(function(){error_handle();},5000);
	  ShowImage.src = document.location.origin+'/?getstill='+Math.random();
	}

	function error_handle() {
	  restartCount++;
	  clearInterval(myTimer);
	  if (restartCount<=2) {
		myTimer = setInterval(function(){start();},10000);
	  }
	}    

	ShowImage.onload = function (event) {
	  clearInterval(myTimer);
	  restartCount=0;
	  if (size.innerHTML == "") {
		  size.innerHTML = "{\"width\":"+ShowImage.width+", \"height\": "+ShowImage.height+"}";
	  }
		
	  DetectImage();
	}

	async function DetectImage() {
		canvas.style.display = "block";
		canvas.setAttribute("width", ShowImage.width);
		canvas.setAttribute("height", ShowImage.height);
		canvas.style.width = ShowImage.width+"px";
		canvas.style.height = ShowImage.height+"px";
		canvas.getContext('2d').drawImage(ShowImage,0,0,ShowImage.width,ShowImage.height); 

		if (sourceId.innerHTML!="") {
	  		setTimeout(function(){start();}, 150);
			return;
		}
		sourceId.innerHTML="wait";
		
		if (!labeledFaceDescriptors) {
			labeledFaceDescriptors = await loadLabeledImages();
			faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, distanceLimit)
		}
		console.log("ok");
		const detections = await faceapi.detectAllFaces(ShowImage).withFaceLandmarks().withFaceDescriptors();
		const resizedDetections = faceapi.resizeResults(detections, JSON.parse(size.innerHTML));

		const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor));
		message.innerHTML = "";
		if (results.length>0) {
			var res = "";
			for (var i=0;i<results.length;i++) {
				res += results[i]._label + "," + results[i]._distance;
				if (i<results.length-1)
					res += "<br>";
			}
			message.innerHTML = res;
			
		}
		
		results.forEach((result, i) => {
			const box = resizedDetections[i].detection.box
			var drawBox;
			if (result.distance<=distanceLimit)
				drawBox = new faceapi.draw.DrawBox(box, { label: result.toString()})
			else
				drawBox = new faceapi.draw.DrawBox(box, { label: (Math.round(result.distance*100)/100).toString()})
			drawBox.draw(canvas);
		})

		if (typeof recognitionFinish === 'function') recognitionFinish();
		sourceId.innerHTML="";
		setTimeout(function(){canvas.style.display = "none";}, showtime*1000);
		setTimeout(function(){start();}, 150);
	}  
	
	function loadLabeledImages() {
		return Promise.all(
			facelabels.map(async function(label, index) {
				const descriptions = []
				if (faceImagesCount==0) { 
					const img = await faceapi.fetchImage(faceImagesPath[index])
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
}
