document.write('<div id="region_teachablemachine" style="z-index:999"><video id="gamevideo_teachablemachine" width="320" height="240" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><img id="gameimage_teachablemachine" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_teachablemachine"></canvas><br><select id="mirrorimage_teachablemachine" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><input type="text" id="modelPath_teachablemachine" value="" style="position:absolute;visibility:hidden;"><br><div id="gamediv_teachablemachine" style="color:red"></div></div>');
document.write('<div id="teachablemachineState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_teachablemachine" style="position:absolute;display:none;"></div>');
document.write('<div id="project_teachablemachine" style="position:absolute;display:none;"></div>');

window.onload = function () {
	var ShowImage = document.getElementById('gameimage_teachablemachine');	
	var canvas = document.getElementById('gamecanvas_teachablemachine'); 
	var context = canvas.getContext('2d');
	var mirrorimage = document.getElementById("mirrorimage_teachablemachine");
	var teachablemachineState = document.getElementById('teachablemachineState');
	var frame = document.getElementById("frame_teachablemachine");
	var result = document.getElementById('gamediv_teachablemachine'); 
	var myTimer;
	var restartCount=0;
	var Model;
	
	setTimeout(function(){loadModel();}, 5000);
	async function loadModel() {
		if (modelPath.value=="") {
			result.innerHTML = "Please input model path.";
			return;
		}
		const URL = modelPath.value;
		const modelURL = URL + "model.json";
		const metadataURL = URL + "metadata.json";
		if (project.innerHTML=="image") {
			Model = await tmImage.load(modelURL, metadataURL);
		}
		else if (project.innerHTML=="pose") {
			Model = await tmPose.load(modelURL, metadataURL);
		}			
		maxPredictions = Model.getTotalClasses();

		result.innerHTML = "";
		sourceTimer = setInterval(
			function(){
				if (source.innerHTML!="") {
					clearInterval(sourceTimer);
					setTimeout(function(){DetectVideo(document.getElementById(source.innerHTML))}, 3000);
				}				
			}
		, 100);	  
	}
	
	function start() {
	  clearInterval(myTimer);  
	  myTimer = setInterval(function(){error_handle();},5000);
	  ShowImage.src = document.location.origin+'/?getstill='+Math.random();
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
			try { 
			  document.createEvent("TouchEvent");
			  setTimeout(function(){start();},250);
			}
			catch(e) { 
			  setTimeout(function(){start();},150);
			} 
			return;
		}
		
	  Model.detect(canvas).then(Predictions => {    
		var s = (canvas.width>canvas.height)?canvas.width:canvas.height;
		var res = "";
		result.innerHTML = "";
		if (Predictions.length>0) {
		    for (var i=0;i<Predictions.length;i++) {
			    const x = Predictions[i].bbox[0];
			    const y = Predictions[i].bbox[1];
			    const width = Predictions[i].bbox[2];
			    const height = Predictions[i].bbox[3];
				if (frame.value==1) {
					context.lineWidth = Math.round(s/200);
					context.strokeStyle = "#00FFFF";
					context.beginPath();
					context.rect(x, y, width, height);
					context.stroke(); 
					context.lineWidth = "3";
					context.fillStyle = "yellow";
					context.font = Math.round(s/30) + "px Arial";
					context.fillText(Predictions[i].class, x, y);
				}
				res+= Predictions[i].class+","+Math.round(Predictions[i].score,2)+","+Math.round(x)+","+Math.round(y)+","+Math.round(width)+","+Math.round(height)+"<br>";
		   }
		   if (res!="")
		       result.innerHTML = res.substr(0,res.length-4);
           	   recognitionFinish();		   
		}	
		
		try { 
		  document.createEvent("TouchEvent");
		  setTimeout(function(){start();},250);
		}
		catch(e) { 
		  setTimeout(function(){start();},150);
		} 
	  });
	}  
}