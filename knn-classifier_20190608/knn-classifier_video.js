document.write('<video id="video" width="320" height="240" preload autoplay loop muted></video><br>  <button id="saveModel">Save Model</button><input type="file" id="getModel"></input><br>  <button id="addExample">Train Example</button>  <select id="Class"><option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><span id="count" style="font-size:18px;color:red">0</span>  <div id="result" style="color:red">Please wait for loading model.</div><div id="train" style="position:absolute;visibility:hidden;"></div><div id="probability" style="position:absolute;visibility:hidden;"></div>');

var saveModel = document.getElementById("saveModel");
var getModel = document.getElementById('getModel');
var video = document.getElementById('video');
var addExample = document.getElementById('addExample');
var Class = document.getElementById('Class');
var result = document.getElementById('result');
var count = document.getElementById('count');

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
  }
})

function predictClass_onclick (event) {
	predictClass(video);
};    

function addExample_onclick (event) {
  addExampleImage(video, Number(Class.value));
  count.innerHTML = Number(count.innerHTML)+1;
};
addExample.addEventListener("click", addExample_onclick, true);

function saveModel_onclick (event) {
  let dataset = classifier.getClassifierDataset();
  let myDataset = {}
  Object.keys(dataset).forEach((key) => {
	let data = dataset[key].dataSync();
	myDataset[key] = Array.from(data);
  });
  let json = JSON.stringify(myDataset)
  
  var link = document.createElement('a');
  link.download="model.json";
  link.href='data:text/json;charset=utf-8,' + encodeURIComponent(json);
  document.body.appendChild(link);
  link.click();
  link.remove();
}
saveModel.addEventListener("click", saveModel_onclick, true);

function getModel_onchange (event) {
  var target = event.target || window.event.srcElement;
  var files = target.files;
  var fr = new FileReader();
  if (files.length>0) {
	fr.onload = function () {     
	var dataset = fr.result;
	var myDataset = JSON.parse(dataset)
	Object.keys(myDataset).forEach((key) => {
	  myDataset[key] = tf.tensor(myDataset[key], [myDataset[key].length / 1024, 1024]);
	})
	classifier.setClassifierDataset(myDataset);
	}
	fr.readAsText(files[0]);
  }
}
getModel.addEventListener("change", getModel_onchange, true);

// Place your code in the script tag below. You can also use an external .js file
var classifier;
var mobilenetModule;

// Create the classifier.
classifier = knnClassifier.create();

// Load mobilenet.
mobilenet.load().then(Module => {
  mobilenetModule = Module;
  setInterval(function(){ predictClass_onclick(); }, 200);
  result.innerHTML = '';
}); 

function addExampleImage(img,index) {
  // Add MobileNet activations to the model repeatedly for all classes.
  var Image = tf.browser.fromPixels(img);
  var logits = mobilenetModule.infer(Image, 'conv_preds');
  classifier.addExample(logits, index);
}

async function predictClass(img) {
  // Make a prediction.
  try
  {
	const Image = tf.browser.fromPixels(img);
	const xlogits = mobilenetModule.infer(Image, 'conv_preds');
	const predict = await classifier.predictClass(xlogits);
	//console.log(predict);
	var msg = "<font color='red'>Label : " + predict.label + "</font><br><br>";;
	for (i=0;i<Class.length;i++) {
	  msg += "["+i+"] " + predict.confidences[i.toString()] + "<br>";
	}
	result.innerHTML = msg; 
	train.innerHTML = predict.label;
    probability.innerHTML = predict.confidences[predict.label];
  }
  catch (e)
  {
  }
}
