document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.4"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet"></script>');
document.write('<div id="region_posenet" style="z-index:999"><img id="gameimage_posenet" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_posenet" style="position:absolute;"></canvas><canvas id="gamecanvas_skeleton" style="position:absolute;"></canvas><canvas id="gamecanvas_temp" style="visibility:hidden;"></canvas><br><select id="skeleton_posenet" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="mirrorimage_posenet" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="persons_posenet" style="position:absolute;visibility:hidden;"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="999">No Limit</option></select><select id="scorelimit_posenet" style="position:absolute;visibility:hidden;"><option value="0">0</option><option value="0.1" selected>0.1</option><option value="0.2">0.2</option><option value="0.3">0.3</option><option value="0.4">0.4</option><option value="0.5">0.5</option><option value="0.6">0.6</option><option value="0.7">0.7</option><option value="0.8">0.8</option><option value="0.9">0.9</option></select><br><div id="gamediv_posenet" style="color:red"></div></div>');
document.write('<div id="posenetState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_posenet" style="position:absolute;display:none;"></div>');
document.write('<div id="modelname_posenet" style="position:absolute;display:none;"></div>');

window.onload = function () {
	var ShowImage = document.getElementById("gameimage_posenet");
	var canvas = document.getElementById('gamecanvas_posenet');
	var canvas = document.getElementById('gamecanvas_posenet'); 
	var context = canvas.getContext('2d');
	var canvas_skeleton = document.getElementById('gamecanvas_skeleton');
	var context_skeleton = canvas_skeleton.getContext('2d');
	var canvas_temp = document.getElementById('gamecanvas_temp');
	var mirrorimage = document.getElementById("mirrorimage_posenet");
	var result = document.getElementById('gamediv_posenet');
	var Model; 
	var modelnameTimer, sourceTimer; 
	var modelname = document.getElementById("modelname_posenet");
	
	ShowImage.src = window.location.hostname+':81/?stream';
	ShowImage.style.visibility = "visible";
	
	setTimeout(function(){
		ShowImage.style.visibility = "hidden";
		loadModel(modelname.innerHTML);
	},5000);

	function loadModel(modelname) {
		var ModelConfig = {};
		if (modelname=="MobileNetV1") {
			ModelConfig = {
						  architecture: 'MobileNetV1',
						  outputStride: 16,
						  inputResolution: { width: 640, height: 480 },
						  multiplier: 0.75
						};
		} else if (modelname=="ResNet50") {
			ModelConfig = {
						  architecture: 'ResNet50',
						  outputStride: 32,
						  inputResolution: { width: 257, height: 200 },
						  quantBytes: 2
						};
		}
		posenet.load(ModelConfig).then(function(net) {
			Model = net;
			result.innerHTML = "";
			DetectVideo(ShowImage);
		}); 
	}

	async function DetectVideo(obj) {
		obj.style.width = obj.width + 'px';
		obj.style.height = obj.height + 'px';		
		canvas.setAttribute("width", obj.width);
		canvas.setAttribute("height", obj.height);
		canvas.style.width = obj.width+"px";
		canvas.style.height = obj.height+"px";
		canvas_skeleton.setAttribute("width", obj.width);
		canvas_skeleton.setAttribute("height", obj.height);
		canvas_skeleton.style.width = obj.width+"px";
		canvas_skeleton.style.height = obj.height+"px";

		if (canvas.style.display=="block"||canvas_skeleton.style.display=="block") {
			canvas_temp.setAttribute("width", obj.width);
			canvas_temp.setAttribute("height", obj.height);
			canvas_temp.style.width = obj.width+"px";
			canvas_temp.style.height = obj.height+"px";
		} else {
			canvas_temp.setAttribute("width", "0");
			canvas_temp.setAttribute("height", "0");
			canvas_temp.style.width = "0px";
			canvas_temp.style.height = "0px";
		}

		if (mirrorimage.value==1) {
			context.translate((canvas.width + obj.width) / 2, 0);
			context.scale(-1, 1);
			context.drawImage(obj, 0, 0, obj.width, obj.height);
			context.setTransform(1, 0, 0, 1, 0, 0);
		}
		else
			context.drawImage(obj, 0, 0, obj.width, obj.height);

		if (document.getElementById('posenetState').innerHTML=="0") {
			result.innerHTML = "";
			setTimeout(function(){DetectVideo(obj);}, 100);
			return;
		}

		context_skeleton.clearRect(0, 0, canvas.width, canvas.height);

		await Model.estimatePoses(canvas, {flipHorizontal: false, decodingMethod: 'multi-person', maxPoseDetections: 5, scoreThreshold: 0.5, nmsRadius: 20}).then(pose => {
			//console.log(pose.score);
			//console.log(pose.keypoints);
			result.innerHTML = "";  
			var scoreLimit = Number(document.getElementById("scorelimit_posenet").value);

			if (pose.length>0) {
				for (var n=0;n<pose.length;n++) {
					if (n<Number(document.getElementById("persons_posenet").value)) {
						var k = pose[n].keypoints;
						if (k.length>0) {
							for (var i=0;i<k.length;i++) {
								if (k[i].score>=scoreLimit) {
									const x = k[i].position.x;
									const y = k[i].position.y;

									context_skeleton.fillStyle="#00FFFF";
									context_skeleton.beginPath();
									context_skeleton.arc(x, y, 3, 0,2*Math.PI);
									context_skeleton.closePath();
									context_skeleton.fill();
								}      
								result.innerHTML += n + "," + k[i].part + "," + Math.round(k[i].score*100)/100 + "," + Math.round(k[i].position.x) + "," + Math.round(k[i].position.y) + "<br>";
							}

							if (result.innerHTML!="") {
								result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-4);
								if (typeof recognitionFinish === 'function') recognitionFinish();
							}

							context.lineWidth = 2;
							var centerShoulderX = (k[5].position.x+k[6].position.x)/2;
							var centerShoulderY = (k[5].position.y+k[6].position.y)/2; 
							if (k[5].score>=scoreLimit&&k[6].score>=scoreLimit) {
								context_skeleton.beginPath();
								context_skeleton.arc(centerShoulderX, centerShoulderY, 3, 0,2*Math.PI);
								context_skeleton.closePath();
								context_skeleton.fill();
							}              
							if (k[0].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#0000FF";
								context_skeleton.beginPath();
								context_skeleton.moveTo(k[0].position.x,k[0].position.y);
								context_skeleton.lineTo(centerShoulderX, centerShoulderY);
								context_skeleton.stroke(); 
							}
							if (k[5].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#FF3333";
								context_skeleton.beginPath();
								context_skeleton.moveTo(centerShoulderX, centerShoulderY);
								context_skeleton.lineTo(k[5].position.x,k[5].position.y);
								context_skeleton.stroke();
							}
							if (k[6].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#FF8800";
								context_skeleton.beginPath();
								context_skeleton.moveTo(centerShoulderX, centerShoulderY);
								context_skeleton.lineTo(k[6].position.x,k[6].position.y);
								context_skeleton.stroke();  
							}
							if (k[5].score>=scoreLimit&&k[7].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#FFCC22";
								context_skeleton.beginPath();
								context_skeleton.moveTo(k[5].position.x,k[5].position.y);
								context_skeleton.lineTo(k[7].position.x,k[7].position.y);
								context_skeleton.stroke();
							}
							if (k[6].score>=scoreLimit&&k[8].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#66DD00";
								context_skeleton.beginPath();
								context_skeleton.moveTo(k[6].position.x,k[6].position.y);
								context_skeleton.lineTo(k[8].position.x,k[8].position.y);
								context_skeleton.stroke();
							}
							if (k[7].score>=scoreLimit&&k[9].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#FFFF77";
								context_skeleton.beginPath();
								context_skeleton.moveTo(k[7].position.x,k[7].position.y);
								context_skeleton.lineTo(k[9].position.x,k[9].position.y);
								context_skeleton.stroke(); 
							}
							if (k[8].score>=scoreLimit&&k[10].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#BBFF66";
								context_skeleton.beginPath();
								context_skeleton.moveTo(k[8].position.x,k[8].position.y);
								context_skeleton.lineTo(k[10].position.x,k[10].position.y);
								context_skeleton.stroke(); 
							}
							if (k[11].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#227700";
								context_skeleton.beginPath();
								context_skeleton.moveTo(centerShoulderX, centerShoulderY);
								context_skeleton.lineTo(k[11].position.x,k[11].position.y);
								context_skeleton.stroke(); 
							}
							if (k[12].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#9999FF";
								context_skeleton.beginPath();
								context_skeleton.moveTo(centerShoulderX, centerShoulderY);
								context_skeleton.lineTo(k[12].position.x,k[12].position.y);
								context_skeleton.stroke();  
							}
							if (k[11].score>=scoreLimit&&k[13].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#77FF00";
								context_skeleton.beginPath();
								context_skeleton.moveTo(k[11].position.x,k[11].position.y);
								context_skeleton.lineTo(k[13].position.x,k[13].position.y);
								context_skeleton.stroke();
							}
							if (k[12].score>=scoreLimit&&k[14].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#0066FF";
								context_skeleton.beginPath();
								context_skeleton.moveTo(k[12].position.x,k[12].position.y);
								context_skeleton.lineTo(k[14].position.x,k[14].position.y);
								context_skeleton.stroke(); 
							}
							if (k[13].score>=scoreLimit&&k[15].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#99FF99";
								context_skeleton.beginPath();
								context_skeleton.moveTo(k[13].position.x,k[13].position.y);
								context_skeleton.lineTo(k[15].position.x,k[15].position.y);
								context_skeleton.stroke(); 
							}
							if (k[14].score>=scoreLimit&&k[16].score>=scoreLimit) {
								context_skeleton.strokeStyle = "#0000CC";
								context_skeleton.beginPath();
								context_skeleton.moveTo(k[14].position.x,k[14].position.y);
								context_skeleton.lineTo(k[16].position.x,k[16].position.y);
								context_skeleton.stroke(); 
							}
						}
					}
				}
				
				if (typeof posenet_recognitionFinish === 'function') posenet_recognitionFinish();
			} else {
				if (typeof posenet_unrecognitionFinish === 'function') posenet_unrecognitionFinish();
			}
			
			setTimeout(function(){DetectVideo(obj);},100);
		});
	}
}
