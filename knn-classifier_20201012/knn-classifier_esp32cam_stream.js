document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"></script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/knn-classifier"></script>');
document.write('<div id="region_knnclassifier" style="z-index:999"><img id="gameimage_knnclassifier" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_knnclassifier"></canvas><br><br><select id="mirrorimage_knnclassifier" style="position:absolute;display:none;"><option value="1">Y</option><option value="0">N</option></select><button id="saveModel_knnclassifier" style="position:absolute;display:none;">Save Model</button><input type="file" id="loadModel_knnclassifier" style="position:absolute;display:none;"></input><button id="clearAllClasses_knnclassifier" style="position:absolute;display:none;">Clear All Classes</button><button id="addExample_knnclassifier" style="position:absolute;display:none;">Train</button><select id="class_knnclassifier" style="position:absolute;display:none;"><option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><span id="count_knnclassifier" style="position:absolute;display:none;">0</span><button id="Detect_knnclassifier" style="position:absolute;display:none;">Detect</button><div id="gamediv_knnclassifier" style="color:red"></div><div id="maxclass_knnclassifier" style="position:absolute;display:none;"></div><div id="maxprobability_knnclassifier" style="position:absolute;display:none;"></div></div>');
document.write('<div id="knnclassifierState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_knnclassifier" style="position:absolute;display:none;"></div>');
document.write('<div id="modelurl_knnclassifier" style="position:absolute;display:none;"></div>');

window.onload = function () {
	var ShowImage = document.getElementById('gameimage_knnclassifier');
	var saveModel = document.getElementById("saveModel_knnclassifier");
	var loadModel = document.getElementById('loadModel_knnclassifier');
	var modelurl =  document.getElementById('modelurl_knnclassifier');
	var canvas = document.getElementById('gamecanvas_knnclassifier');
	var context = canvas.getContext('2d');
	var clearAllClasses = document.getElementById('clearAllClasses_knnclassifier');
	var addExample = document.getElementById('addExample_knnclassifier');
	var classes = document.getElementById('class_knnclassifier');
	var maxclass = document.getElementById('maxclass_knnclassifier');
	var maxprobability = document.getElementById('maxprobability_knnclassifier');
	var result = document.getElementById('gamediv_knnclassifier');
	var count = document.getElementById('count_knnclassifier');
	var region = document.getElementById('region_knnclassifier');
	var Detect = document.getElementById('Detect_knnclassifier');
	var mirrorimage = document.getElementById("mirrorimage_knnclassifier");

	var classifier;
	var mobilenetModule;

	ShowImage.src = window.location.hostname+':81/?stream';
	ShowImage.style.visibility = "visible";	

	classifier = knnClassifier.create();
	mobilenet.load().then(Module => {
		ShowImage.style.visibility = "hidden";
		mobilenetModule = Module;
		if (modelurl.innerHTML!="")
			loadModelUrl(modelurl.innerHTML);
		result.innerHTML = '';
		start();
	}); 

	function start() {
		ShowImage.style.width = ShowImage.width + 'px';
		ShowImage.style.height = ShowImage.height + 'px';		
		canvas.setAttribute("width", ShowImage.width);
		canvas.setAttribute("height", ShowImage.height);
		canvas.style.width = ShowImage.width+"px";
		canvas.style.height = ShowImage.height+"px";

		if (mirrorimage.value==1) {
			context.translate((canvas.width + ShowImage.width) / 2, 0);
			context.scale(-1, 1);
			context.drawImage(ShowImage, 0, 0, ShowImage.width, ShowImage.height);
			context.setTransform(1, 0, 0, 1, 0, 0);
		}
		else
			context.drawImage(ShowImage, 0, 0, ShowImage.width, ShowImage.height);
		setTimeout(function(){start();},100);
	}

	function Detect_onclick (event) {
		DetectVideo();
	};
	Detect.addEventListener("click", Detect_onclick, true);

	function clearAllClasses_onclick (event) {
		maxclass.innerHTML = '';
		maxprobability.innerHTML = '';	  
		result.innerHTML = '';
		count.innerHTML = "0";	
		classifier.clearAllClasses();
	};
	clearAllClasses.addEventListener("click", clearAllClasses_onclick, true);

	function addExample_onclick (event) {
		addExampleImage(classes.value);
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
		let json = JSON.stringify(myDataset);

		var link = document.createElement('a');
		link.download="model.json";
		link.href='data:text/json;charset=utf-8,' + encodeURIComponent(json);
		document.body.appendChild(link);
		link.click();
		link.remove();
	}
	saveModel.addEventListener("click", saveModel_onclick, true);

	loadModel.addEventListener("change", function(event) {
	  var files = this.files;
	  var fr = new FileReader();		
	  if (this.files.length > 0) {
			fr.onload = function () {
				var dataset = fr.result;
				var myDataset = JSON.parse(dataset)
				Object.keys(myDataset).forEach((key) => {
					myDataset[key] = tf.tensor(myDataset[key], [myDataset[key].length / 1024, 1024]);
				})
				console.log(myDataset);
				classifier.setClassifierDataset(myDataset);
			}
			fr.readAsText(files[0]);
	  }
	}, false);	
	
	function loadModelUrl (target) {
		$.ajax({
			type: "get",
			dataType: "json",
			url: target,
			success: function(json) {
				var myDataset = json
				Object.keys(myDataset).forEach((key) => {
					myDataset[key] = tf.tensor(myDataset[key], [myDataset[key].length / 1024, 1024]);
				})
				console.log(myDataset);
				classifier.setClassifierDataset(myDataset);
			},
			error: function(exception) {
			  console.log(exception);
			}
		});		
	}	

	function addExampleImage(classname) {
		var Image = tf.browser.fromPixels(canvas);
		var logits = mobilenetModule.infer(Image, 'conv_preds');
		classifier.addExample(logits, classname);
	}

	async function DetectVideo() { 
		try {
			const Image = tf.browser.fromPixels(canvas);
			const xlogits = mobilenetModule.infer(Image, 'conv_preds');
			const predict = await classifier.predictClass(xlogits);
			//console.log(JSON.stringify(predict));
			var msg = "";
			for (i=0;i<classes.length;i++) {
				if (predict.confidences[i.toString()]>=0) 
					msg += classes.options[i].innerText+"," + predict.confidences[i.toString()] +"<br>";
			}
			result.innerHTML = msg;
			maxclass.innerHTML = classes.options[predict.label].innerText;
			maxprobability.innerHTML = predict.confidences[predict.label];
			if (typeof recognitionFinish === 'function') recognitionFinish();
		} catch (e) {
		}
	}
}
