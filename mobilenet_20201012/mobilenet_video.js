document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.4"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"></script>');
document.write('<div id="region_mobilenet" style="z-index:999"><video id="gamevideo_mobilenet" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><canvas id="gamecanvas_mobilenet"></canvas><img id="gameimage_mobilenet" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><br><select id="mirrorimage_mobilenet" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="opacity_mobilenet" style="position:absolute;visibility:hidden;"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><br><div id="gamediv_mobilenet" style="color:red"></div></div>');
document.write('<div id="mobilenetState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_mobilenet" style="position:absolute;display:none;"></div>');

window.onload = function () {
	var video = document.getElementById('gamevideo_mobilenet');
	var canvas = document.getElementById('gamecanvas_mobilenet'); 
	var context = canvas.getContext('2d');
	var mirrorimage = document.getElementById("mirrorimage_mobilenet");  
	var result = document.getElementById('gamediv_mobilenet');
	var Model;

	mobilenet.load().then(mobilenet_model => {
		Model = mobilenet_model;
		result.innerHTML = "";
		sourceTimer = setInterval(
			function(){
				var source = document.getElementById("sourceId_mobilenet");
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
		canvas.style.width = obj.width+"px";
		canvas.style.height = obj.height+"px";

		if (mirrorimage.value==1) {
			context.translate((canvas.width + obj.width) / 2, 0);
			context.scale(-1, 1);
			context.drawImage(obj, 0, 0, obj.width, obj.height);
			context.setTransform(1, 0, 0, 1, 0, 0);
		} else
			context.drawImage(obj, 0, 0, obj.width, obj.height);   

		if (document.getElementById('mobilenetState').innerHTML=="0") {
			result.innerHTML = "";
			setTimeout(function(){DetectVideo(obj);}, 100);
			return;
		}

		await Model.classify(canvas).then(Predictions => { 
			result.innerHTML = "";
			//console.log('Predictions: ', Predictions);
			if (Predictions.length>0) {
				for (var i=0;i<Predictions.length;i++)
					result.innerHTML+= Predictions[i].className+","+Math.round(Predictions[i].probability*100)/100+"<br>";
				if (typeof recognitionFinish === 'function') recognitionFinish();
			} else
				result.innerHTML = "Unrecognizable";
			setTimeout(function(){DetectVideo(obj);}, 100);
		});
	}
}
