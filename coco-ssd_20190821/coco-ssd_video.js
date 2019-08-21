document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>');
document.write('<video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="canvas"></canvas><div id="result" style="width:320px;color:red">Please wait for loading model.</div>');

window.onload = function () {
    
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas'); 
  var context = canvas.getContext('2d');
  var result = document.getElementById('result'); 
  var Model; 
  
  ObjectDetect();  
  
  function ObjectDetect() {
    cocoSsd.load().then(cocoSsd_model => {
      Model = cocoSsd_model;
      console.log(Model);
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
          setTimeout(function(){DetectVideo(); }, 100);
        }
      })   
  }
                        
  async function DetectVideo() {
    context.drawImage(video, 0, 0, video.width, video.height);    
    await Model.detect(canvas).then(predictions => { 
      result.innerHTML = "";
      //console.log('Predictions: ', predictions);
      if (predictions.length>0) {
        for (var i=0;i<predictions.length;i++) {
          const x = predictions[i].bbox[0];
          const y = predictions[i].bbox[1];
          const width = predictions[i].bbox[2];
          const height = predictions[i].bbox[3];
          context.lineWidth = "3";
          context.strokeStyle = "#00FFFF";
          context.beginPath();
          context.rect(x, y, width, height);
          context.stroke(); 
          context.lineWidth = "2";
          context.fillStyle = "red";
          context.font = "12px Arial";
          context.fillText(predictions[i].class, x, y);
          result.innerHTML+= predictions[i].class+","+Math.round(predictions[i].score,2)+","+Math.round(x)+","+Math.round(y)+","+Math.round(width)+","+Math.round(height)+"<br>";
        }
      }
      else
        result.innerHTML = "Unrecognizable";
      setTimeout(function(){DetectVideo(); }, 100);
    });
  }

}
