document.write('<canvas id="canvas" style="z-index:999;position:absolute;display:none"></canvas>');
document.write('<div id="region" style="z-index:998;position:absolute"><video id="video" width="320" height="240" preload autoplay loop muted></video><br><div id="result" style="width:320px;color:red"></div></div>');

var myFunc,modelPath,videoWidth,videoHeight,myResult,myTimer,scoreLimit;
var Model,video,canvas,context,result; 

function StartCustomVision(input_func, input_path, input_timer, input_width, input_height, input_result) {
  myFunc = input_func;
  modelPath = input_path;
  videoWidth = input_width;
  videoHeight = input_height;
  myResult = input_result;
  myTimer = input_timer;

  document.write('<script src="'+modelPath+'tf.min.js"></script>');
  document.write('<script src="'+modelPath+'index.umd.js"></script>');
  startVideo();
}

function startVideo() {
  try {
	if (myFunc=="Classification")
	  Model = new cvstfjs.ClassificationModel();
	else if (myFunc=="ObjectDetection")
	  Model = new cvstfjs.ObjectDetectionModel();
	Model.loadModelAsync('model.json');
	console.log(cvstfjs);
	console.log(Model);

	video = document.getElementById('video');
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	result = document.getElementById('result'); 
	

	video.width = videoWidth;
	video.height = videoHeight;
	result.style.display = myResult;
	result.innerHTML = "";

	//video.style.visibility="hidden";
	//video.style.position="absolute";
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
		}
	  }) 
	}
	catch (e) {
	  console.log(e);
	  setTimeout('startVideo();', 1000);
	}
  }
                        
function DetectVideo() {
  result.innerHTML = "";
  canvas.style.display = "block";
  context.drawImage(video, 0, 0, video.width, video.height);
  try {
    tf.tidy(() => {
		Model.executeAsync(canvas).then(predictions => { 
		  //console.log(JSON. stringify(predictions));
		  if (predictions.length>0) {
			for (i=0;i<predictions[0].length;i++) {
			  const x1 = Number(predictions[0][i][0])*video.width;
			  const y1 = Number(predictions[0][i][1])*video.height;
			  const width = [Number(predictions[0][i][2])-Number(predictions[0][i][0])]*video.width;
			  const height = [Number(predictions[0][i][3])-Number(predictions[0][i][1])]*video.height;

			  var probability = Number(predictions[1][i]);

              if (probability>=scoreLimit) {
			    context.lineWidth = "3";
			    context.strokeStyle = "#00FFFF";
			    context.beginPath();
			    context.rect(x1, y1, width, height);
			    context.stroke(); 
			    context.lineWidth = "2";
			    context.fillStyle = "red";
			    context.font = "12px Arial";
			    context.fillText("["+predictions[2][i]+"] "+Math.round(probability*100)+"%", x1, y1);

			    result.innerHTML+= predictions[2][i]+","+Math.round(probability*100)/100+","+Math.round(x1)+","+Math.round(y1)+","+Math.round(width)+","+Math.round(height)+"<br>";
			  }
			}
		  }
		  else
			result.innerHTML = "Unrecognizable";

                  if (result.innerHTML=="") result.innerHTML = ",,,,,";
		  console.log(tf.memory().numTensors);

		  setTimeout('result.innerHTML="";canvas.style.display = "none";', myTimer*1000);
		});
    });
  }
  catch (e) {
	console.log(e);
	setTimeout('DetectVideo();', 1000);
  }
}
