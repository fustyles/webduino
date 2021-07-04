document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.7/dist/tf.min.js"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@1.0.0"></script>');
document.write('<div id="region" style="z-index:999"><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="canvas"></canvas><canvas id="canvas1"></canvas><canvas id="canvas2"></canvas><canvas id="canvas3"></canvas><canvas id="canvas4"></canvas><canvas id="canvas5"></canvas><br><select id="func" style="position:absolute;visibility:hidden;"><option value="1">backgroundDarkeningMask</option><option value="2">segmentation</option><option value="3">coloredPartImageData</option><option value="4">coloredPartImage</option><option value="5">drawPixelatedMask</option></select><br><select id="mirrorimage" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><br><div id="result" style="color:red">Please wait for loading model.</div></div>');

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
  var canvas4 = document.getElementById('canvas4');
  var context4 = canvas2.getContext('2d');
  var canvas5 = document.getElementById('canvas5');
  var context5 = canvas3.getContext('2d');
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
		  canvas4.setAttribute("width", video.width);
		  canvas4.setAttribute("height", video.height);
		  canvas5.setAttribute("width", video.width);
		  canvas5.setAttribute("height", video.height);
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

	const rainbow = [
	[110, 64, 170], [143, 61, 178], [178, 60, 178], [210, 62, 167],
	[238, 67, 149], [255, 78, 125], [255, 94, 99],  [255, 115, 75],
	[255, 140, 56], [239, 167, 47], [217, 194, 49], [194, 219, 64],
	[175, 240, 91], [135, 245, 87], [96, 247, 96],  [64, 243, 115],
	[40, 234, 141], [28, 219, 169], [26, 199, 194], [33, 176, 213],
	[47, 150, 224], [65, 125, 224], [84, 101, 214], [99, 81, 195]
	];

	const warm = [
	[110, 64, 170], [106, 72, 183], [100, 81, 196], [92, 91, 206],
	[84, 101, 214], [75, 113, 221], [66, 125, 224], [56, 138, 226],
	[48, 150, 224], [40, 163, 220], [33, 176, 214], [29, 188, 205],
	[26, 199, 194], [26, 210, 182], [28, 219, 169], [33, 227, 155],
	[41, 234, 141], [51, 240, 128], [64, 243, 116], [79, 246, 105],
	[96, 247, 97],  [115, 246, 91], [134, 245, 88], [155, 243, 88]
	];

	const spectral = [
	[158, 1, 66],    [181, 26, 71],   [202, 50, 74],   [219, 73, 74],
	[232, 94, 73],   [242, 117, 75],  [248, 142, 83],  [251, 167, 96],
	[253, 190, 112], [254, 210, 129], [254, 227, 149], [254, 240, 166],
	[251, 248, 176], [243, 249, 172], [231, 245, 163], [213, 238, 159],
	[190, 229, 160], [164, 218, 163], [137, 207, 165], [110, 192, 168],
	[86, 173, 174],  [70, 150, 179],  [67, 127, 180],  [77, 103, 173]
	];

  if (func.value==1||func.value==2||func.value==3||func.value==4) {
	  var outputStride = 16;
	  var segmentationThreshold = 0.5;
	  await Model.estimatePersonSegmentation(canvas, outputStride, segmentationThreshold).then(segmentation => {
		//console.log(segmentation);
		  
		if (func.value=="1") {
		  canvas1.style.display="block";

		  const maskBackground = true;
		  const backgroundDarkeningMask = bodyPix.toMaskImageData(segmentation, maskBackground);
		  const opacity = 0.8;
		  const maskBlurAmount = 3;
		  const flipHorizontal = false;
		  bodyPix.drawMask(canvas1, canvas, backgroundDarkeningMask, opacity, maskBlurAmount, flipHorizontal);
		} else
		  canvas1.style.display="none";
		
		if (func.value=="2") {
		  canvas2.style.display="block";

		  const backgroundBlurAmount = 5;
		  const edgeBlurAmount = 3;
		  const flipHorizontal = false;
		  bodyPix.drawBokehEffect(canvas2, canvas, segmentation, backgroundBlurAmount, edgeBlurAmount, flipHorizontal);
		} else
		  canvas2.style.display="none";
		
		if (func.value=="3") {
		  canvas3.style.display="block";
		  const coloredPartImage = bodyPix.toColoredPartImageData(segmentation, rainbow);
		  //const coloredPartImage = bodyPix.toColoredPartImageData(segmentation, warm);
		  //const coloredPartImage = bodyPix.toColoredPartImageData(segmentation, spectral);

		  const maskBackground = true;
		  const maskImage = bodyPix.toMaskImageData(segmentation, maskBackground);

		  const opacity = 0.7;
		  const maskBlurAmount = 3;
		  const flipHorizontal = false;
		  const pixelCellWidth = 10.0;
		  //bodyPix.drawPixelatedMask(canvas3, canvas, coloredPartImageData, opacity, maskBlurAmount, flipHorizontal, pixelCellWidth);
		  bodyPix.drawPixelatedMask(canvas3, canvas, maskImage, opacity, maskBlurAmount, flipHorizontal, pixelCellWidth);
		} else
		  canvas3.style.display="none";

		if (func.value=="4") {
		  canvas4.style.display="block";
			
		  const coloredPartImage = bodyPix.toColoredPartImageData(segmentation, rainbow);
		  //const coloredPartImage = bodyPix.toColoredPartImageData(segmentation, warm);
		  //const coloredPartImage = bodyPix.toColoredPartImageData(segmentation, spectral);
		  const invert = true;
		  const opacity = 1;
		  const flipHorizontal = false;
		  const maskBlurAmount = 0;
		  bodyPix.drawMask(canvas4, canvas, coloredPartImage, opacity, maskBlurAmount, flipHorizontal);
		} else
		  canvas4.style.display="none";
		
		canvas5.style.display="none";
		try { 
		  document.createEvent("TouchEvent");
		  segmentationThreshold = 0.5;
		}
		catch(e) { 
		  segmentationThreshold = 0.75;
		}   
		setTimeout(function(){DetectVideo(); }, 100);
	  });
	}
	else {
	  var outputStride = 16;
	  var segmentationThreshold = 0.5;
	  await Model.estimatePartSegmentation(canvas, outputStride, segmentationThreshold).then(segmentation => {

        if (func.value=="5") {
		  canvas5.style.display="block";

		  const coloredPartImage = bodyPix.toColoredPartImageData(segmentation, rainbow);
		  //const coloredPartImage = bodyPix.toColoredPartImageData(segmentation, warm);
		  //const coloredPartImage = bodyPix.toColoredPartImageData(segmentation, spectral);
		  const opacity = 0.7;
		  const flipHorizontal = false;
		  const maskBlurAmount = 0;
		  const pixelCellWidth = 10.0;
		  bodyPix.drawPixelatedMask(canvas5, canvas, coloredPartImage, opacity, maskBlurAmount, flipHorizontal, pixelCellWidth);
		} else
		  canvas5.style.display="none";

		canvas1.style.display="none";
		canvas2.style.display="none";
		canvas3.style.display="none";
		canvas4.style.display="none";
		try { 
		  document.createEvent("TouchEvent");
		  segmentationThreshold = 0.5;
		}
		catch(e) { 
		  segmentationThreshold = 0.75;
		}   
		setTimeout(function(){DetectVideo(); }, 100);
	  });
	}
  }
}
