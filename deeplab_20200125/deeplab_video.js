document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/deeplab"></script>');
document.write('<div id="region" style="z-index:999;position:absolute"><select id="model" style="position:absolute;visibility:hidden;"><option value="pascal">pascal</option><option value="cityscapes">cityscapes</option><option value="ade20k">ade20k</option></select><select id="mirrorimage" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><br><div id="result" style="color:red;z-index:999"></div><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="canvas"></canvas><canvas id="Image" style="display:none"></canvas><br><div id="legendList"></div></div>');

window.onload = function () {
  var region = document.getElementById('region');
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');	
  var Image = document.getElementById('Image');
  var context1 = Image.getContext('2d');
  var legendList = document.getElementById('legendList');
  var result = document.getElementById('result');
  var model = document.getElementById('model');
  var Model;

  var pascal = ["background","aeroplane","bicycle","bird","boat","bottle","bus","car","cat","chair","cow","dining table","dog","horse","motorbike","person","potted plant","sheep","sofa","train","TV"];
  var cityscapes = ["road","sidewalk","building","wall","fence","pole","traffic light","traffic sign","vegetation","terrain","sky","person","rider","car","truck","bus","train","motorcycle","bicycle"];
  var ade20k = ["background","wall","building","sky","floor","tree","ceiling","road","bed","windowpane","grass","cabinet","sidewalk","person","earth","door","table","mountain","plant","curtain","chair","car","water","painting","sofa","shelf","house","sea","mirror","rug","field","armchair","seat","fence","desk","rock","wardrobe","lamp","bathtub","railing","cushion","base","box","column","signboard","chest","counter","sand","sink","skyscraper","fireplace","refrigerator","grandstand","path","stairs","runway","case","pool","pillow","screen","stairway","river","bridge","bookcase","blind","coffee","toilet","flower","book","hill","bench","countertop","stove","palm","kitchen","computer","swivel","boat","bar","arcade","hovel","bus","towel","light","truck","tower","chandelier","awning","streetlight","booth","television","airplane","dirt","apparel","pole","land","bannister","escalator","ottoman","bottle","buffet","poster","stage","van","ship","fountain","conveyer","canopy","washer","plaything","swimming","stool","barrel","basket","waterfall","tent","bag","minibike","cradle","oven","ball","food","step","tank","trade","microwave","pot","animal","bicycle","lake","dishwasher","screen","blanket","sculpture","hood","sconce","vase","traffic","tray","ashcan","fan","pier","screen","plate","monitor","bulletin","shower","radiator","glass","clock","flag"];
  
  LoadModel();
  function LoadModel() {
    const modelName = model.value;   // set to your preferred model, either `pascal`, `cityscapes` or `ade20k`
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
		 result.innerHTML = ""
		 var data;
		 if (model.value=="pascal")
			data = pascal;
		 if (model.value=="cityscapes")
			data = cityscapes;
		 if (model.value=="ade20k")
			data = ade20k;
		 for (var i=0;i<data.length;i++) {
			 if (legend[data[i]])
				result.innerHTML+=data[i]+"="+legend[data[i]]+"<br>";
		 }
	     	 result.innerHTML += "height="+height+"<br>";
		 result.innerHTML += "width="+width+"<br>";
		 result.innerHTML += "segmentationMap="+segmentationMap;
	     	 displaySegmentationMap(Model, {legend, height, width, segmentationMap});
		 if (typeof recognitionFinish === 'function') recognitionFinish();
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
	result.style.position = "absolute";
	result.style.top = (canvas.height + 80) + "px";

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
