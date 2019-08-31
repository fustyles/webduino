document.write('<div id="region"><video id="video" width="320" height="240" preload autoplay loop muted></video><br>Frame<select id="frame"><option value="1">show</option><option value="0">hide</option></select>MirrorImage<select id="mirrorimage"><option value="1">yes</option><option value="0">no</option></select>Opacity<select id="opacity"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><br><div id="result" style="width:320px;color:red"></div></div>');
document.write('<canvas id="gamecanvas_azureface" style="display:none;position:absolute;"></canvas>');

window.onload = function () {
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_azureface'); 

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
