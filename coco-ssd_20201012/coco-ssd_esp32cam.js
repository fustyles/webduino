document.write('<div id="region_cocossd" style="z-index:999"><video id="gamevideo_cocossd" width="320" height="240" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><img id="gameimage_cocossd" style="position:absolute;visibility:hidden;"><canvas id="gamecanvas_cocossd"></canvas><br><select id="frame_cocossd" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="mirrorimage_cocossd" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><br><div id="gamediv_cocossd" style="color:red"></div></div>');
document.write('<div id="cocossdState" style="position:absolute;display:none;">1</div>');

window.onload = function () {
	var ShowImage = document.getElementById('gameimage_cocossd');	
	var canvas = document.getElementById('gamecanvas_cocossd'); 
	var context = canvas.getContext('2d');
	var mirrorimage = document.getElementById("mirrorimage_cocossd");
	var cocossdState = document.getElementById('cocossdState');
	var frame = document.getElementById("frame_cocossd");
	var result = document.getElementById('gamediv_cocossd'); 
	var myTimer;
	var restartCount=0;
	var Model;
	
	cocoSsd.load().then(cocoSsd_Model => {
		Model = cocoSsd_Model;
		start();
	}); 
	
	function start() {
	  clearInterval(myTimer);  
	  myTimer = setInterval(function(){error_handle();},5000);
	  ShowImage.src = document.location.origin+'/?getstill='+Math.random();
	}

	function error_handle() {
	  restartCount++;
	  clearInterval(myTimer);
	  if (restartCount<=2) {
		myTimer = setInterval(function(){start();},5000);
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

		if (cocossdState.innerHTML=="0") {
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
