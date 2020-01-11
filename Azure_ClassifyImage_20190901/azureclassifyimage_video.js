document.write('<div id="region" style="z-index:999"><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="gamecanvas_azureclassifyimage" style="display:none;"></canvas><br><div id="result" style="width:320px;color:red"></div></div>');

window.onload = function () {
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_azureclassifyimage'); 

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
