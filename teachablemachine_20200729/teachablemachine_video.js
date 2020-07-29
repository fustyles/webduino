document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>');
document.write('<div id="region" style="z-index:999"><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="gamecanvas_teachablemachine"></canvas><br>MirrorImage<select id="mirrorimage"><option value="1">Y</option><option value="0">N</option></select>Opacity<select id="opacity"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><input type="text" id="modelPath" value="" style="display:none"><br><div id="result" style="color:red"></div></div>');

window.onload = function () {
    
	var video = document.getElementById('video');
	var canvas = document.getElementById('gamecanvas_teachablemachine'); 
	var context = canvas.getContext('2d');    
	var result = document.getElementById('result');
	var modelPath = document.getElementById('modelPath');
	let Model;

	ObjectDetect();

	async function ObjectDetect() {
	  console.log(modelPath.value);
	  if (modelPath.value=="") return;
	  result.innerHTML = "Please wait for loading model.";
	  const URL = modelPath.value;
	  const modelURL = URL + "model.json";
	  const metadataURL = URL + "metadata.json";
	  Model = await tmImage.load(modelURL, metadataURL);
	  maxPredictions = Model.getTotalClasses();
	  startvideo();
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
          setTimeout(function(){predict(); }, 100);
        }
      })   
  }
                        
  async function predict() {
	var mirrorimage = Number(document.getElementById("mirrorimage").value);
	if (mirrorimage==1) {
	  context.translate((canvas.width + video.width) / 2, 0);
	  context.scale(-1, 1);
	  context.drawImage(video, 0, 0, video.width, video.height);
	  context.setTransform(1, 0, 0, 1, 0, 0);
	}
	else
      context.drawImage(video, 0, 0, video.width, video.height); 
	
	var data = "";
	const prediction = await Model.predict(canvas);
	if (maxPredictions>0) {
		for (let i = 0; i < maxPredictions; i++) {
		  data += prediction[i].className + "," + prediction[i].probability.toFixed(2) + "<br>";
		}
		result.innerHTML = data;
		if (result.innerHTML!="")
			result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-4);  
	}
	else
		result.innerHTML = "Unrecognizable";

	setTimeout(function(){predict(); }, 250);
  }
}
