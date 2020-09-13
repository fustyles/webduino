document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.7.4/dist/tf.min.js"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface"></script>');
document.write('<div id="region" style="z-index:999"><video id="video" width="400" height="300" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><canvas id="gamecanvas_blazeface"></canvas><br><select id="mirrorimage" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="frame" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="opacity" style="position:absolute;visibility:hidden;"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><select id="scorelimit" style="position:absolute;visibility:hidden;"><option value="0">0</option><option value="0.1" selected>0.1</option><option value="0.2">0.2</option><option value="0.3">0.3</option><option value="0.4">0.4</option><option value="0.5">0.5</option><option value="0.6">0.6</option><option value="0.7">0.7</option><option value="0.8">0.8</option><option value="0.9">0.9</option></select><br><div id="result" style="color:red"></div></div>');
document.write('<div id="blazefaceState" style="position:absolute;display:none;">1</div>');

window.onload = function () {
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_blazeface'); 
  var context = canvas.getContext('2d');
  var result = document.getElementById('result');
  var Model; 
  
  LoadModel();
  function LoadModel() {
    blazeface.load().then(function(net) {
      Model = net;
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

	  if (document.getElementById('blazefaceState').innerHTML=="0") {
		  result.innerHTML = "";
		  setTimeout(function(){DetectVideo(); }, 100);
		  return;
	  }

	  var frame = Number(document.getElementById("frame").value);

	  const returnTensors = false;
	  await Model.estimateFaces(canvas, returnTensors).then(predictions => {
		result.innerHTML = "";  
		var scoreLimit = Number(document.getElementById("scorelimit").value);
		canvas.style.opacity = Number(document.getElementById("opacity").value);

		//console.log(predictions.score);
		//console.log(predictions.keypoints);
		result.innerHTML = "";  

		if (predictions.length>0) {
		  for (var i=0;i<predictions.length;i++) { 
			if (predictions[i].probability[0]>=scoreLimit) {
				result.innerHTML += i + ",probability," + predictions[i].probability[0] + "<br>";
				result.innerHTML += i + ",rightEye," + predictions[i].landmarks[0][0] + "," + predictions[i].landmarks[0][1] + "<br>";
				result.innerHTML += i + ",leftEye," + predictions[i].landmarks[1][0] + "," + predictions[i].landmarks[1][1] + "<br>";
				result.innerHTML += i + ",nose," + predictions[i].landmarks[2][0] + "," + predictions[i].landmarks[2][1] + "<br>";
				result.innerHTML += i + ",mouth," + predictions[i].landmarks[3][0] + "," + predictions[i].landmarks[3][1] + "<br>";
				result.innerHTML += i + ",rightEar," + predictions[i].landmarks[4][0] + "," + predictions[i].landmarks[4][1] + "<br>";
				result.innerHTML += i + ",leftEar," + predictions[i].landmarks[5][0] + "," + predictions[i].landmarks[5][1] + "<br>";
				result.innerHTML += i + ",bandingBox," + predictions[i].topLeft[0] + "," + predictions[i].topLeft[1] + "," + predictions[i].bottomRight[0] + "," + predictions[i].bottomRight[1] + "<br>";

			    if (frame==1) {
					for (j=0;j<=5;j++) {
						const x = predictions[i].landmarks[j][0];
						const y = predictions[i].landmarks[j][1];
						context.fillStyle="#00FFFF";
						context.beginPath();
						context.arc(x, y, 3, 0,2*Math.PI);
						context.closePath();
						context.fill();
					}
				}
			}
		  }
		  if (result.innerHTML!="")
			result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-4); 
		}  

		if (frame==1) {
			for (let i = 0; i < predictions.length; i++) {
			  const start = predictions[i].topLeft;
			  const end = predictions[i].bottomRight;
			  const size = [end[0] - start[0], end[1] - start[1]];
			  context.strokeStyle = "#FF0000";
			  context.lineWidth = 3;
			  context.strokeRect(start[0], start[1], size[0], size[1]);
			}
		}

		setTimeout(function(){DetectVideo(); }, 100);
	  });
	}
}
