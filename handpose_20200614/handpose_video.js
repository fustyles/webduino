document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.1.0/dist/tf.min.js"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/handpose"></script>');
document.write('<div id="region" style="z-index:999"><video id="video" width="320" height="240" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><canvas id="gamecanvas_handpose"></canvas><canvas id="canvas_point"></canvas><br><select id="point" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="mirrorimage" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="opacity" style="position:absolute;visibility:hidden;"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><br><div id="result" style="color:red">Please wait for loading model.</div></div>');
document.write('<div id="handposeState" style="position:absolute;display:none;">1</div>');

window.onload = function () {
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_handpose'); 
  var context = canvas.getContext('2d');
  var canvas_point = document.getElementById('canvas_point');
  var context_point = canvas_point.getContext('2d');
  var result = document.getElementById('result');
  var opacity = document.getElementById("opacity");
  var Model; 
  var lastValue = -1;

	let fingerLookupIndices = {
	  thumb: [0, 1, 2, 3, 4],
	  indexFinger: [0, 5, 6, 7, 8],
	  middleFinger: [0, 9, 10, 11, 12],
	  ringFinger: [0, 13, 14, 15, 16],
	  pinky: [0, 17, 18, 19, 20]
	};
  
  HandDetect();
  function HandDetect() {
    handpose.load().then(function(net) {
		Model = net
		console.log(Model);
		result.innerHTML = "";
		startvideo();
    });
  }
  
  function startvideo() {
    video.style.visibility="hidden";
    video.style.position="absolute";
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user"
        }
      })
      .then(stream => {
        video.srcObject = stream
        video.onloadedmetadata = () => {       
          video.play();
          canvas.setAttribute("width", video.width);
          canvas.setAttribute("height", video.height);
		  canvas_point.setAttribute("width", video.width);
          canvas_point.setAttribute("height", video.height);
          setTimeout(function(){DetectVideo(); }, 100);
        }
      })   
  } 
                        
  async function DetectVideo() {
    var mirrorimage = Number(document.getElementById("mirrorimage").value);
    if (mirrorimage==1) {
      context.translate((canvas.width + video.width) / 2, 0);
      context.scale(-1, 1);
      context.drawImage(video, 0, 0, video.width, video.height);
      context.setTransform(1, 0, 0, 1, 0, 0);
    }
    else
      context.drawImage(video, 0, 0, video.width, video.height);

	context_point.clearRect(0, 0, canvas.width, canvas.height);

	if (document.getElementById('handposeState').innerHTML=="0") {
	  result.innerHTML = "";
	  setTimeout(function(){DetectVideo(); }, 100);
	  return;
	}

    await Model.estimateHands(canvas).then(predictions => {
      result.innerHTML = "";  
      
      canvas.style.opacity = Number(opacity.value);
      if (predictions.length > 0) {
        for (let i = 0; i < predictions.length; i++) {
          const keypoints = predictions[i].landmarks;
          const boundingBox = predictions[i].boundingBox;
          const handInViewConfidence = predictions[i].handInViewConfidence;

          var part="";
          for (let i = 0; i < keypoints.length; i++) {
            if (i==0) part="wrist";
            if (i>=1&&i<=4) part="thumb";
            if (i>=5&&i<=8) part="indexFinger";
            if (i>=9&&i<=12) part="middleFinger";
            if (i>=13&&i<=16) part="ringFinger";
            if (i>=17&&i<=20) part="pinky";
            result.innerHTML += i+","+part+","+keypoints[i][0]+","+keypoints[i][1]+","+keypoints[i][2]+","+boundingBox.topLeft[0]+","+boundingBox.topLeft[1]+","+boundingBox.bottomRight[0]+","+boundingBox.bottomRight[1]+","+handInViewConfidence+"<br>";
          }
        }

        const res = predictions[0].landmarks;
		lastValue = -1;
        drawKeypoints(context, res, predictions[0].annotations);
		lastValue = -1;
	drawKeypoints(context_point, res, predictions[0].annotations);
	      
	if (typeof recognitionFinish === 'function') recognitionFinish();
      } 
      setTimeout(function(){DetectVideo(); }, 100);
    });
  }

  function drawPoint(ctx, y, x, r) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  function drawKeypoints(ctx, keypoints) {
    const keypointsArray = keypoints;
    for (let i = 0; i < keypointsArray.length; i++) {
      const y = keypointsArray[i][0];
      const x = keypointsArray[i][1];
      drawPoint(ctx, x - 2, y - 2, 3);
    }
  
    const fingers = Object.keys(fingerLookupIndices);
    for (let i = 0; i < fingers.length; i++) {
      const finger = fingers[i];
      const points = fingerLookupIndices[finger].map(idx => keypoints[idx]);
      drawPath(ctx, points, false);
    }
  }
  
  function drawPath(ctx, points, closePath) {
    if (lastValue==-1||lastValue!=points[0][0]) {
      ctx.strokeStyle = "#2828FF";
    } else {
      ctx.strokeStyle = "#00DB00";
    }
  
    const region = new Path2D();
    region.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      const point = points[i];
      region.lineTo(point[0], point[1]);
    }
  
    lastValue=points[0][0];
  
    if (closePath) {
      region.closePath();
    }
    ctx.stroke(region);
  }
}
