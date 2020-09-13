document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.1.0"></script>');
document.write('<div id="region" style="z-index:999"><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="gamecanvas_cocossd"></canvas><br><select id="frame" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="mirrorimage" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="opacity" style="position:absolute;visibility:hidden;"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><br><div id="result" style="color:red"></div></div>');
document.write('<div id="cocossdState" style="position:absolute;display:none;">1</div>');

window.onload = function () {
    
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_cocossd'); 
  var context = canvas.getContext('2d');
  var result = document.getElementById('result'); 
  var Model; 
  
  LoadModel();  
  function LoadModel() {
    cocoSsd.load().then(cocoSsd_model => {
      Model = cocoSsd_model;
      result.innerHTML = "";
      setTimeout(function(){ startvideo(); }, 2000);
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
	
	if (document.getElementById('cocossdState').innerHTML=="0") {
	  result.innerHTML = "";
	  setTimeout(function(){DetectVideo(); }, 100);
	  return;
	}

    await Model.detect(canvas).then(predictions => { 
      result.innerHTML = "";
      //console.log('Predictions: ', predictions);
      document.getElementById("region").style.opacity = Number(document.getElementById("opacity").value);
      var frame = Number(document.getElementById("frame").value);
      if (predictions.length>0) {
        for (var i=0;i<predictions.length;i++) {
          const x = predictions[i].bbox[0];
          const y = predictions[i].bbox[1];
          const width = predictions[i].bbox[2];
          const height = predictions[i].bbox[3];
          if (frame==1) {
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
		if (result.innerHTML!="")
			result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-4); 
      }
      else
        result.innerHTML = "";
      setTimeout(function(){DetectVideo(); }, 100);
    });
  }

}
