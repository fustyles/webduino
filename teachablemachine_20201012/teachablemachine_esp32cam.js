document.write('<div id="region_teachablemachine" style="z-index:999"><video id="gamevideo_teachablemachine" width="320" height="240"  style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><img id="gameimage_teachablemachine" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_teachablemachine"></canvas><br><select id="mirrorimage_teachablemachine" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><input type="text" id="modelPath_teachablemachine" value="" style="position:absolute;visibility:hidden;"><br><div id="gamediv_teachablemachine" style="color:red"></div></div>');
document.write('<div id="teachablemachineState" style="position:absolute;display:none;">1</div>');
document.write('<div id="project_teachablemachine" style="position:absolute;display:none;"></div>');

window.onload = function () {
	var ShowImage = document.getElementById('gameimage_teachablemachine');	
	var canvas = document.getElementById('gamecanvas_teachablemachine'); 
	var context = canvas.getContext('2d');
	var mirrorimage = document.getElementById("mirrorimage_teachablemachine");
	var teachablemachineState = document.getElementById('teachablemachineState');
	var modelPath = document.getElementById('modelPath_teachablemachine');
	var project = document.getElementById("project_teachablemachine");
	var frame = document.getElementById("frame_teachablemachine");
	var result = document.getElementById('gamediv_teachablemachine'); 
	var myTimer;
	var restartCount=0;
	var Model;
	var maxPredictions;
	
	setTimeout(function(){loadModel();}, 5000);
	async function loadModel() {
		if (modelPath.value=="") {
			result.innerHTML = "Please input model path.";
			return;
		}
		const URL = modelPath.value;
		const modelURL = URL + "model.json";
		const metadataURL = URL + "metadata.json";
		console.log(project.innerHTML);
		console.log(tmImage);
		console.log(tmPose);
		if (project.innerHTML=="image") {
			Model = await tmImage.load(modelURL, metadataURL);
		}
		else if (project.innerHTML=="pose") {
			Model = await tmPose.load(modelURL, metadataURL);
		}			
		maxPredictions = Model.getTotalClasses();

		result.innerHTML = "";
		start();
	}	
	
	function start() {
	  clearInterval(myTimer);  
	  myTimer = setInterval(function(){error_handle();},5000);
	  ShowImage.src = 'http://192.168.0.31/?getstill='+Math.random();
	}

	function error_handle() {
	  restartCount++;
	  clearInterval(myTimer);
	  if (restartCount<=2) {
		myTimer = setInterval(function(){start();},10000);
	  }
	}    

	ShowImage.onload = function (event) {
	  clearInterval(myTimer);
	  restartCount=0;

	  if (Model) {
		DetectImage();
	  }          
	}

	function DetectImage() {
	    canvas.setAttribute("width", ShowImage.width);
	    canvas.setAttribute("height", ShowImage.height);
		
		if (mirrorimage.value==1) {
			context.translate((canvas.width + ShowImage.width) / 2, 0);
			context.scale(-1, 1);
			context.drawImage(ShowImage, 0, 0, ShowImage.width, ShowImage.height);
			context.setTransform(1, 0, 0, 1, 0, 0);
		}
		else
			context.drawImage(ShowImage, 0, 0, ShowImage.width, ShowImage.height);  
		
		if (teachablemachineState.innerHTML=="0") {
			result.innerHTML = "";
		}
		else {
			var data = "";
			if (project.innerHTML=="image")
				var prediction = Model.predict(canvas);
			else if (project.innerHTML=="pose") {
				var { pose, posenetOutput } = Model.estimatePose(canvas);
				var prediction = Model.predict(posenetOutput);
			}			
			console.log(prediction);
			if (maxPredictions>0) {
				for (let i = 0;i < maxPredictions;i++)
					data += prediction[i].className + "," + prediction[i].probability.toFixed(2) + "<br>";
				result.innerHTML = data;
				if (result.innerHTML!="")
					result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-4);
			}
			else
				result.innerHTML = "";
		}
		
		try { 
		  document.createEvent("TouchEvent");
		  setTimeout(function(){start();},250);
		}
		catch(e) { 
		  setTimeout(function(){start();},150);
		} 
	}  
}
