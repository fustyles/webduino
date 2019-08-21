document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"></script>');
document.write('<video id="video" width="320" height="240" preload autoplay loop muted></video><div id="result" style="width:320px;color:red">Please wait for loading model.</div>');

window.onload = function () {
    
  var video = document.getElementById('video');
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
          setTimeout(function(){DetectVideo(); }, 100);
        }
      })   
  }
                        
  async function DetectVideo() {
    await Model.classify(video).then(Predictions => { 
      result.innerHTML = "";
      
      //console.log('Predictions: ', Predictions);
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
