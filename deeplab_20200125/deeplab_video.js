document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/deeplab"></script>');
document.write('<div id="region" style="z-index:999;position:absolute"><br><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="canvas"></canvas><canvas id="Image" style="display:none"></canvas><br><div id="legendList"></div></div>');
document.write('MirrorImage<select id="mirrorimage"><option value="1">yes</option><option value="0">no</option></select><br><div id="result" style="width:320px;color:red;z-index:999;position:absolute">Please wait for loading model.</div>');

window.onload = function () {
  var region = document.getElementById('region');
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');	
  var Image = document.getElementById('Image');
  var context1 = Image.getContext('2d');
  var legendList = document.getElementById('legendList');
  var result = document.getElementById('result');
  var Model;
  
  ObjectDetect();
  function ObjectDetect() {
    const modelName = 'pascal';   // set to your preferred model, either `pascal`, `cityscapes` or `ade20k`
    const quantizationBytes = 2;  // either 1, 2 or 4
    deeplab.load({base: modelName, quantizationBytes}).then(deeplab_model => {
      Model = deeplab_model;
      result.innerHTML = "";
      startvideo();
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
          Image.setAttribute("width", video.width);
          Image.setAttribute("height", video.height); 
		  result.innerHTML = "Waiting for starting detection...";
          setTimeout(function(){DetectVideo(); }, 1000);
		}
	  })   
  } 

  async function DetectVideo() {
	var mirrorimage = Number(document.getElementById("mirrorimage").value);
	if (mirrorimage==1) {
	  context1.translate((Image.width + video.width) / 2, 0);
	  context1.scale(-1, 1);
	  context1.drawImage(video, 0, 0, video.width, video.height);
	  context1.setTransform(1, 0, 0, 1, 0, 0);
	}
	else
	  context1.drawImage(video, 0, 0, video.width, video.height);

     Model.segment(Image)
      .then(
        ({legend,height,width,segmentationMap}) => 
	    {
	     result.innerHTML = JSON.stringify(legend);
	     displaySegmentationMap(Model, {legend, height, width, segmentationMap});
	    }
	  );
    setTimeout(function(){DetectVideo();}, 250);
  }
                        
  const displaySegmentationMap = (modelName, deeplabOutput) => {
    const {legend, height, width, segmentationMap} = deeplabOutput;
    const segmentationMapData = new ImageData(segmentationMap, width, height);

    canvas.width = width;
    canvas.height = height;
    context.putImageData(segmentationMapData, 0, 0);

    while (legendList.firstChild) {
	  legendList.removeChild(legendList.firstChild);
    }

    Object.keys(legend).forEach((label) => {
    const tag = document.createElement('span');
    tag.innerHTML = label;
    const [red, green, blue] = legend[label];
    tag.classList.add('column');
    tag.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    tag.style.padding = '1em';
    tag.style.margin = '1em';
    tag.style.color = '#ffffff';

    legendList.appendChild(tag);
    });
 };

}