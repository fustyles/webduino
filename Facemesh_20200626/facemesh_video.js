document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.7.4/dist/tf.min.js"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/facemesh"></script>');
document.write('<video id="video" width="400" height="300" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><canvas id="gamecanvas_facemesh"></canvas><canvas id="canvas_point"></canvas><br><div id="result" style="color:red;display:none;"></div>');
	       
window.onload = function () {
	
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_facemesh');
  var context = canvas.getContext('2d');
  var canvas_point = document.getElementById('canvas_point');
  var context_point = canvas_point.getContext('2d');
  var result = document.getElementById('result');
  var Model; 
  
  HandDetect();
  
  function HandDetect() {
    facemesh.load().then(function(net) {
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
          facingMode: "user",
          width: 320,
          height: 240
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
    context.translate((canvas.width + video.width) / 2, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, video.width, video.height);
    context.setTransform(1, 0, 0, 1, 0, 0);
    
	context_point.clearRect(0, 0, canvas.width, canvas.height);

    await Model.estimateFaces(canvas).then(predictions => {
      result.innerHTML = "";
		
		if (predictions.length > 0) {
			var part = ["leftCheek","leftEyeLower0","leftEyeLower1","leftEyeLower2","leftEyeLower3","leftEyeUpper0","leftEyeUpper1","leftEyeUpper2","leftEyebrowLower","leftEyebrowUpper","lipsLowerInner","lipsLowerOuter","lipsUpperInner","lipsUpperOuter","midwayBetweenEyes","noseBottom","noseLeftCorner","noseRightCorner","noseTip","rightCheek","rightEyeLower0","rightEyeLower1","rightEyeLower2","rightEyeLower3","rightEyeUpper0","rightEyeUpper1","rightEyeUpper2","rightEyebrowLower","rightEyebrowUpper","silhouette"];
			for (let k = 0; k < predictions.length; k++) {
			  const annotations = predictions[k].annotations;
			  const boundingBox = predictions[k].boundingBox;
			  for (let j = 0; j < part.length; j++) {
				  for (let i = 0; i < annotations[part[j]].length; i++) {
					result.innerHTML += part[j]+","+i+","+annotations[part[j]][i][0]+","+annotations[part[j]][i][1]+","+annotations[part[j]][i][2]+","+boundingBox.topLeft[0][0]+","+boundingBox.topLeft[0][1]+","+boundingBox.bottomRight[0][0]+","+boundingBox.bottomRight[0][1]+"<br>";
				  }
			  }

			  const res = predictions[k].scaledMesh;
			  drawKeypoints(context, res, predictions[k].annotations);
			  drawKeypoints(context_point, res, predictions[k].annotations);
			}
		}

		if (result.innerHTML!="")
			result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-4);

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
		drawPoint(ctx, x, y, 1);
	  }
	}

}
