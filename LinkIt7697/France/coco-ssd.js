window.onload = function () {
	var ShowImage = document.getElementById('ShowImage');
	var object = document.getElementById("object");
	var score = document.getElementById("score");
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var myTimer;
	var restartCount=0;
	var Model;
	var lastCount = -1;

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
		myTimer = setInterval(function(){start();},10000);
	  }
	}    

	ShowImage.onload = function (event) {
	  clearInterval(myTimer);
	  restartCount=0;
	  canvas.setAttribute("width", ShowImage.width);
	  canvas.setAttribute("height", ShowImage.height);
	  context.drawImage(ShowImage,0,0,ShowImage.width,ShowImage.height);
	  if (Model) {
		DetectImage();
	  }          
	}   

	function DetectImage() {
	  Model.detect(canvas).then(Predictions => {    
		var s = (canvas.width>canvas.height)?canvas.width:canvas.height;
		var count = 0;
		if (Predictions.length>0) {  
		    for (var j=0;j<Predictions.length;j++) {
			    if (Predictions[j].class==object.innerHTML&&Number(Predictions[j].score)>=Number(score.innerHTML)) {
				count++;    
			    }
		    }
		    for (var i=0;i<Predictions.length;i++) {
			    const x = Predictions[i].bbox[0];
			    const y = Predictions[i].bbox[1];
			    const width = Predictions[i].bbox[2];
			    const height = Predictions[i].bbox[3];
			    context.lineWidth = Math.round(s/200);
			    context.strokeStyle = "#00FFFF";
			    context.beginPath();
			    context.rect(x, y, width, height);
			    context.stroke(); 
			    context.lineWidth = "3";
			    context.fillStyle = "yellow";
			    context.font = Math.round(s/30) + "px Arial";
			    context.fillText(Predictions[i].class, x, y);
			    
			    if (Predictions[i].class==object.innerHTML&&Number(Predictions[i].score)>=Number(score.innerHTML)) {
				var result = Predictions[i].class+";"+Math.round(Predictions[i].score*100)+";"+Math.round(x)+";"+Math.round(y)+";"+Math.round(width)+";"+Math.round(height)+";"+count;
				$.ajax({url: document.location.origin+'/?result='+result+';stop', async: false});					
			    }
		   }
		}
		  
		if (lastCount!=0&&count==0) {
			$.ajax({url: document.location.origin+'/?result=;;;;;;0;stop', async: false});
		}
		lastCount = count;
		
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
