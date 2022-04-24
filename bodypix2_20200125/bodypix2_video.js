document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.7/dist/tf.min.js"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.0"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet"></script>');
document.write('<div id="region" style="z-index:999"><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="canvas"></canvas><canvas id="canvas1"></canvas><canvas id="canvas2"></canvas><canvas id="canvas3"></canvas><br><select id="func" style="position:absolute;visibility:hidden;"><option value="1">partMap</option><option value="2">pixelation</option><option value="3">blurBodyPart</option></select><br><select id="skeleton" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="mirrorimage" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><br><div id="result" style="color:red"></div></div>');

window.onload = function () {
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  canvas.style.display="none";
  var canvas1 = document.getElementById('canvas1'); 
  var context1 = canvas1.getContext('2d');
  var canvas2 = document.getElementById('canvas2');
  var context2 = canvas2.getContext('2d');
  var canvas3 = document.getElementById('canvas3');
  var context3 = canvas3.getContext('2d');
  var skeleton = document.getElementById('skeleton');
  var func = document.getElementById('func');
  var Model;
  
  LoadModel();
  function LoadModel() {
    bodyPix.load().then(function(net) {
      Model = net;
      result.innerHTML = ""; 
      setTimeout(function(){ startvideo(); }, 100);
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
		  canvas1.setAttribute("width", video.width);
		  canvas1.setAttribute("height", video.height);
		  canvas2.setAttribute("width", video.width);
		  canvas2.setAttribute("height", video.height);
		  canvas3.setAttribute("width", video.width);
		  canvas3.setAttribute("height", video.height);
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

    await Model.segmentMultiPersonParts(canvas, {
      flipHorizontal: false,
      internalResolution: 'medium',
      segmentationThreshold: 0.7,
      maxDetections: 10,
      scoreThreshold: 0.2,
      nmsRadius: 20,
      minKeypointScore: 0.3,
      refineSteps: 10
    }).then(partSegmentation => {

    if (func.value=="1") {
      canvas1.style.display="block";

      const coloredPartImage = bodyPix.toColoredPartMask(partSegmentation);    //rainbow|warm|spectral
      const opacity = 0.7;
      const maskBlurAmount = 0;
      const flipHorizontal = false;
      bodyPix.drawMask(canvas1, canvas, coloredPartImage, opacity, maskBlurAmount, flipHorizontal);
      if (skeleton.value=="1")
		drawPoses(partSegmentation, flipHorizontal, context1);
    } else
      canvas1.style.display="none";

    if (func.value=="2") {
      canvas2.style.display="block";

      try {
		  const coloredPartImage = bodyPix.toColoredPartMask(partSegmentation);
		  const opacity = 0.7;
		  const maskBlurAmount = 0;
		  const flipHorizontal = false;
		  const pixelCellWidth = 10.0;
		  bodyPix.drawPixelatedMask(canvas2, canvas, coloredPartImage, opacity, maskBlurAmount, flipHorizontal, pixelCellWidth);
		  if (skeleton.value=="1")
			drawPoses(partSegmentation, flipHorizontal, context2);
      }
      catch (e){
		  context2.drawImage(canvas, 0, 0, canvas.width, canvas.height);
      }
    } else
      canvas2.style.display="none";

    if (func.value=="3") {
      canvas3.style.display="block";

      const faceBodyPartIdsToBlur = [0, 1];
      const backgroundBlurAmount = 5;
      const edgeBlurAmount = 3;
      const flipHorizontal = false;
      bodyPix.blurBodyPart(canvas3, canvas, partSegmentation, faceBodyPartIdsToBlur, backgroundBlurAmount, edgeBlurAmount, flipHorizontal);
      if (skeleton.value=="1")
        drawPoses(partSegmentation, flipHorizontal, context3);
    } else
      canvas3.style.display="none";

	//console.log(JSON.stringify(partSegmentation));
	result.innerHTML="";
	if (partSegmentation.length>0) {
	  for (var p=0;p<partSegmentation.length;p++) {
		var k = partSegmentation[p]["pose"]["keypoints"];
		if (k.length>0) {
			for (var i=0;i<k.length;i++) {    
			  result.innerHTML += p + "," + k[i].part + "," + Math.round(k[i].score*100)/100 + "," + Math.round(k[i].position.x) + "," + Math.round(k[i].position.y) + "<br>";
		    }
		}
	  }
	  if (result.innerHTML!="") {
		result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-4); 
		if (typeof recognitionFinish === 'function') recognitionFinish();
	  }
	}
	else
	  result.innerHTML = "";

      setTimeout(function(){DetectVideo(); }, 100);
    });
  }

  const COLOR = 'aqua';
  const BOUNDING_BOX_COLOR = 'red';
  const LINE_WIDTH = 2;

  function drawPoses(personOrPersonPartSegmentation, flipHorizontally, ctx) {
    if (Array.isArray(personOrPersonPartSegmentation)) {
      personOrPersonPartSegmentation.forEach(personSegmentation => {
        let pose = personSegmentation.pose;
        if (flipHorizontally) {
          pose = bodyPix.flipPoseHorizontal(pose, personSegmentation.width);
        }
        drawKeypoints(pose.keypoints, 0.1, ctx);
        drawSkeleton(pose.keypoints, 0.1, ctx);
      });
    } else {
      personOrPersonPartSegmentation.allPoses.forEach(pose => {
      if (flipHorizontally) {
        pose = bodyPix.flipPoseHorizontal(
          pose, personOrPersonPartSegmentation.width);
        }
        drawKeypoints(pose.keypoints, 0.1, ctx);
        drawSkeleton(pose.keypoints, 0.1, ctx);
      })
    }
  }

  function drawPoint(ctx, y, x, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function drawSegment([ay, ax], [by, bx], color, scale, ctx) {
    ctx.beginPath();
    ctx.moveTo(ax * scale, ay * scale);
    ctx.lineTo(bx * scale, by * scale);
    ctx.lineWidth = LINE_WIDTH;
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  function drawSkeleton(keypoints, minConfidence, ctx, scale = 1) {
    const adjacentKeyPoints =
      posenet.getAdjacentKeyPoints(keypoints, minConfidence);

    function toTuple({y, x}) {
    return [y, x];
    }

    adjacentKeyPoints.forEach((keypoints) => {
    drawSegment(
      toTuple(keypoints[0].position), toTuple(keypoints[1].position), COLOR,
      scale, ctx);
    });
  }

  function drawKeypoints(keypoints, minConfidence, ctx, scale = 1) {
    for (let i = 0; i < keypoints.length; i++) {
      const keypoint = keypoints[i];

    if (keypoint.score < minConfidence) {
      continue;
    }

    const {y, x} = keypoint.position;
      drawPoint(ctx, y * scale, x * scale, 3, COLOR);
    }
  }
}
