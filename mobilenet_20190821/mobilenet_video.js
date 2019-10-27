document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.4"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"></script>');
document.write('<div id="region"><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="gamecanvas_mobilenet"></canvas><br>MirrorImage<select id="mirrorimage"><option value="1">yes</option><option value="0">no</option></select>Opacity<select id="opacity"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><br><div id="result" style="width:320px;color:red">Please wait for loading model.</div></div>');

window.onload = function () {
    
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_mobilenet'); 
  var context = canvas.getContext('2d');    
  var result = document.getElementById('result');
  var Model;
  ObjectDetect(); 
  
  function ObjectDetect() {
    mobilenet.load().then(mobilenet_model => {
      Model = mobilenet_model;
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
    await Model.classify(canvas).then(Predictions => { 
      result.innerHTML = "";
      //console.log('Predictions: ', Predictions);
      document.getElementById("region").style.opacity = Number(document.getElementById("opacity").value);
      if (Predictions.length>0) {
        for (var i=0;i<Predictions.length;i++) {
          result.innerHTML+= Predictions[i].className+","+Math.round(Predictions[i].probability*100)/100+"<br>";
        }
      }
      else
        result.innerHTML = "Unrecognizable";
      setTimeout(function(){DetectVideo(); }, 100);
    });
  }
}
