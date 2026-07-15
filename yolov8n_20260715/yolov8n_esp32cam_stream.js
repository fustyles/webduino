document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.20.0/dist/tf.min.js"><\/script>');
document.write('<div id="region_yolov8n" style="z-index:999"><img id="gameimage_yolov8n" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_yolov8n"></canvas><br><select id="frame_yolov8n" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="mirrorimage_yolov8n" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><br><div id="gamediv_yolov8n" style="color:red"></div></div>');
document.write('<div id="modelpath_yolov8n" style="position:absolute;visibility:hidden;"></div>');
document.write('<div id="classes_yolov8n"  style="position:absolute;visibility:hidden;"></div>');
document.write('<select id="scorelimit_yolov8n" style="position:absolute;visibility:hidden;"><option value="0">0</option><option value="0.1" selected>0.1</option><option value="0.2">0.2</option><option value="0.3">0.3</option><option value="0.4">0.4</option><option value="0.5">0.5</option><option value="0.6">0.6</option><option value="0.7">0.7</option><option value="0.8">0.8</option><option value="0.9">0.9</option></select>');
document.write('<div id="yolov8nState" style="position:absolute;display:none;">1</div>');

window.onload = function () {
	var ShowImage = document.getElementById('gameimage_yolov8n');
	var canvas = document.getElementById('gamecanvas_yolov8n');
	var context = canvas.getContext('2d');
	var mirrorimage = document.getElementById("mirrorimage_yolov8n");
	var yolov8nState = document.getElementById('yolov8nState');
	var frame = document.getElementById("frame_yolov8n");
	var result = document.getElementById('gamediv_yolov8n');
	var Model;
    
	var modelPath = document.getElementById('modelpath_yolov8n');
	var classList = document.getElementById('classes_yolov8n');
    var scoreLimit = document.getElementById('scorelimit_yolov8n');

	ShowImage.src = 'http://' + window.location.hostname + ':81/?stream';
	ShowImage.style.visibility = "visible";

	var LABELS = [];

	tf.loadGraphModel(
		modelPath.innerHTML
	).then(model => {
		Model = model;
		LABELS = classList.innerHTML.split(",").map(s => s.trim());
		DetectImage();
	}).catch(err => {
		result.innerHTML = "載入失敗: " + err.message;
	});

	async function DetectImage() {
		ShowImage.style.width = ShowImage.width + 'px';
		ShowImage.style.height = ShowImage.height + 'px';
		canvas.setAttribute("width", ShowImage.width);
		canvas.setAttribute("height", ShowImage.height);
		canvas.style.width = ShowImage.width + "px";
		canvas.style.height = ShowImage.height + "px";

		if (mirrorimage.value == 1) {
			context.translate((canvas.width + ShowImage.width) / 2, 0);
			context.scale(-1, 1);
			context.drawImage(ShowImage, 0, 0, ShowImage.width, ShowImage.height);
			context.setTransform(1, 0, 0, 1, 0, 0);
		} else {
			context.drawImage(ShowImage, 0, 0, ShowImage.width, ShowImage.height);
		}

		if (yolov8nState.innerHTML == "0") {
			result.innerHTML = "";
			setTimeout(function(){DetectImage();}, 100);
			return;
		}

		try {
			var threshold = Number(scoreLimit.value);

			var input = tf.tidy(() =>
				tf.image.resizeBilinear(
					tf.browser.fromPixels(canvas),
					[ShowImage.height, ShowImage.width]
				).div(255.0).expandDims(0)
			);

			var output = Model.execute(input);
			input.dispose();

			var tensor = Array.isArray(output) ? output[0] : output;
			var data = await tensor.squeeze().transpose().array();
			tensor.dispose();

			var boxes = [], scores = [], classes = [];
			for (var i = 0; i < data.length; i++) {
				var row = data[i];
				var classScores = row.slice(4);
				var maxScore = Math.max(...classScores);
				if (maxScore < threshold) continue;
				var classId = classScores.indexOf(maxScore);
				var cx = row[0] / inputSize * canvas.width;
				var cy = row[1] / inputSize * canvas.height;
				var w  = row[2] / inputSize * canvas.width;
				var h  = row[3] / inputSize * canvas.height;
				boxes.push([cy - h/2, cx - w/2, cy + h/2, cx + w/2]);
				scores.push(maxScore);
				classes.push(classId);
			}

			var s = Math.max(canvas.width, canvas.height);
			result.innerHTML = "";

			if (boxes.length > 0) {
				var boxTensor   = tf.tensor2d(boxes);
				var scoreTensor = tf.tensor1d(scores);
				var nmsIdx = await tf.image.nonMaxSuppressionAsync(boxTensor, scoreTensor, 50, 0.45, threshold);
				var idxArr = await nmsIdx.array();
				boxTensor.dispose(); scoreTensor.dispose(); nmsIdx.dispose();

				var res = "";
				idxArr.forEach(function(idx) {
					var box = boxes[idx];
					var y = box[0], x = box[1], y2 = box[2], x2 = box[3];
					var bw = x2 - x, bh = y2 - y;
					if (frame.value == 1) {
						context.lineWidth = Math.round(s / 200);
						context.strokeStyle = "#00FFFF";
						context.beginPath();
						context.rect(x, y, bw, bh);
						context.stroke();
						context.lineWidth = "3";
						context.fillStyle = "yellow";
						context.font = Math.round(s / 30) + "px Arial";
						context.fillText(LABELS[classes[idx]], x, y);
					}
					res += LABELS[classes[idx]]+","+Math.round(scores[idx]*100)+","+Math.round(x)+","+Math.round(y)+","+Math.round(bw)+","+Math.round(bh)+"<br>";
				});
				if (res != "")
					result.innerHTML = res.substr(0, res.length - 4);
			}

			if (typeof recognitionFinish === 'function') recognitionFinish();

			setTimeout(function(){DetectImage();}, 100);

		} catch (error) {
			console.error(error);
			setTimeout(function(){DetectImage();}, 100);
		}
	}
}