document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/knn-classifier"></script>');
document.write('<div id="region" style="z-index:999"><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="canvas"></canvas><br>MirrorImage<select id="mirrorimage"><option value="1">Y</option><option value="0">N</option></select>Opacity<select id="opacity"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><br><button id="saveModel">Save Model</button><input type="file" id="getModel"></input><br><button id="clearAllClasses">Clear All Classes</button>&nbsp;&nbsp;&nbsp;&nbsp;<button id="addExample">Train</button><select id="Class"><option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select>&nbsp;&nbsp;&nbsp;&nbsp;<span id="count" style="font-size:18px;color:red">0</span><br><input type="checkbox" id="startdetection">Start Detection<br><div id="result" style="color:red">Please wait for loading model.</div><div id="train" style="position:absolute;visibility:hidden;"></div><div id="probability" style="position:absolute;visibility:hidden;"></div></div>');

window.onload = function () {
    
  var saveModel = document.getElementById("saveModel");
  var getModel = document.getElementById('getModel');
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas'); 
  var context = canvas.getContext('2d');       
  var clearAllClasses = document.getElementById('clearAllClasses');
  var addExample = document.getElementById('addExample');
  var Class = document.getElementById('Class');
  var result = document.getElementById('result');
  var count = document.getElementById('count');
  var region = document.getElementById('region');
  var opacity = document.getElementById('opacity');

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
    video.style.visibility="hidden";
    video.style.position="absolute";
    region.style.opacity = Number(opacity.value);
    }
  })
    
  function opacity_onclick (event) {
    region.style.opacity = Number(opacity.value);
  }; 
  opacity.addEventListener("click", opacity_onclick, true);

  function predictClass_onclick (event) {
    var mirrorimage = Number(document.getElementById("mirrorimage").value);
    if (mirrorimage==1) {
      context.translate((canvas.width + video.width) / 2, 0);
      context.scale(-1, 1);
      context.drawImage(video, 0, 0, video.width, video.height);
      context.setTransform(1, 0, 0, 1, 0, 0);
    }
    else
      context.drawImage(video, 0, 0, video.width, video.height);
      
    predictClass(canvas);
  }; 
    
  function clearAllClasses_onclick (event) {
    result.innerHTML = '';
    count.innerHTML = "0";
    classifier.clearAllClasses();
  };
  clearAllClasses.addEventListener("click", clearAllClasses_onclick, true);    

  function addExample_onclick (event) {
    addExampleImage(canvas, Number(Class.value));
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
    if (!document.getElementById('startdetection').checked) {
      result.innerHTML = "";  
      return;
    }
      
    // Make a prediction.
    try
    {
      const Image = tf.browser.fromPixels(img);
      const xlogits = mobilenetModule.infer(Image, 'conv_preds');
      const predict = await classifier.predictClass(xlogits);
      //console.log(predict);
      var msg = "<font color='red'>Result : class " + predict.label + "</font><br>";
      for (i=0;i<Class.length;i++) {
        if (predict.confidences[i.toString()]>=0) msg += "[train "+i+"] " + predict.confidences[i.toString()] + "<br>";
      }
      result.innerHTML = msg; 
      train.innerHTML = predict.label;
      probability.innerHTML = predict.confidences[predict.label];
    }
    catch (e)
    {
    }
  }

}
