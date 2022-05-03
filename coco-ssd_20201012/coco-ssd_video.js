document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.1.0"></script>');
document.write('<div id="region_cocossd" style="z-index:999"><video id="gamevideo_cocossd" width="320" height="240" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><img id="gameimage_cocossd" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_cocossd"></canvas><br><select id="frame_cocossd" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="mirrorimage_cocossd" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><br><div id="gamediv_cocossd" style="color:red"></div></div>');
document.write('<div id="cocossdState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_cocossd" style="position:absolute;display:none;"></div>');

window.onload = function () {
	var video = document.getElementById('gamevideo_cocossd');
	var canvas = document.getElementById('gamecanvas_cocossd'); 
	var context = canvas.getContext('2d');
	var mirrorimage = document.getElementById("mirrorimage_cocossd");
	var cocossdState = document.getElementById('cocossdState');
	var frame = document.getElementById("frame_cocossd");
	var result = document.getElementById('gamediv_cocossd'); 
	var Model; 
	var sourceTimer;  
  
	cocoSsd.load().then(cocoSsd_model => {
		Model = cocoSsd_model;
		result.innerHTML = "";
		sourceTimer = setInterval(
		function(){
			var source = document.getElementById("sourceId_cocossd");
			if (source.innerHTML!="") {
				clearInterval(sourceTimer);
				setTimeout(function(){DetectVideo(document.getElementById(source.innerHTML))}, 3000);
			}				
		}
		, 100);		
	}); 

	async function DetectVideo(obj) {
		obj.style.width = obj.width + 'px';
		obj.style.height = obj.height + 'px';		
		canvas.setAttribute("width", obj.width);
		canvas.setAttribute("height", obj.height);
		canvas.style.width = obj.style.width;
		canvas.style.height = obj.style.height;		
		
		if (mirrorimage.value==1) {
			context.translate((canvas.width + obj.width) / 2, 0);
			context.scale(-1, 1);
			context.drawImage(obj, 0, 0, obj.width, obj.height);
			context.setTransform(1, 0, 0, 1, 0, 0);
		}
		else
			context.drawImage(obj, 0, 0, obj.width, obj.height);  

		if (cocossdState.innerHTML=="0") {
			result.innerHTML = "";
			setTimeout(function(){DetectVideo(obj);}, 100);
			return;
		}

		await Model.detect(canvas).then(predictions => { 
			result.innerHTML = "";
			//console.log('Predictions: ', predictions);
			
			if (predictions.length>0) {
				for (var i=0;i<predictions.length;i++) {
					const x = predictions[i].bbox[0];
					const y = predictions[i].bbox[1];
					const width = predictions[i].bbox[2];
					const height = predictions[i].bbox[3];
					if (frame.value==1) {
						context.lineWidth = "3";
						context.strokeStyle = "#00FFFF";
						context.beginPath();
						context.rect(x, y, width, height);
						context.stroke(); 
						context.lineWidth = "2";
						context.fillStyle = "red";
						context.font = "12px Arial";
						context.fillText(predictions[i].class, x, y);
					}
					result.innerHTML+= predictions[i].class+","+Math.round(predictions[i].score,2)+","+Math.round(x)+","+Math.round(y)+","+Math.round(width)+","+Math.round(height)+"<br>";
				}
				if (result.innerHTML!="") {
					result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-4); 
					if (typeof cocossd_recognitionFinish === 'function') cocossd_recognitionFinish();
				}
			}
			else
				result.innerHTML = "";
			
			setTimeout(function(){DetectVideo(obj);}, 100);
		});
	}
}
