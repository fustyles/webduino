document.write('<video id="video" width="400" height="300" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><canvas id="gamecanvas_trackingcolor"></canvas><canvas id="canvas_custom"></canvas><br>');
document.write('<div id="region" style="z-index:999">Red Rect<br>R <input type="range" id="myColor_r_min1" min="0" max="255" value="0" step="1" onchange="myColor_r_min_v1.innerHTML=this.value;"><span id="myColor_r_min_v1">0</span>&nbsp;~<input type="range" id="myColor_r_max1" min="0" max="255" value="0" step="1" onchange="myColor_r_max_v1.innerHTML=this.value;"><span id="myColor_r_max_v1">0</span><br>G <input type="range" id="myColor_g_min1" min="0" max="255" value="0" step="1" onchange="myColor_g_min_v1.innerHTML=this.value;"><span id="myColor_g_min_v1">0</span>&nbsp;~<input type="range" id="myColor_g_max1" min="0" max="255" value="0" step="1" onchange="myColor_g_max_v1.innerHTML=this.value;"><span id="myColor_g_max_v1">0</span><br>B <input type="range" id="myColor_b_min1" min="0" max="255" value="0" step="1" onchange="myColor_b_min_v1.innerHTML=this.value;"><span id="myColor_b_min_v1">0</span>&nbsp;~<input type="range" id="myColor_b_max1" min="0" max="255" value="0" step="1" onchange="myColor_b_max_v1.innerHTML=this.value;"><span id="myColor_b_max_v1">0</span><br><br>Green Rect<br>R <input type="range" id="myColor_r_min2" min="0" max="255" value="0" step="1" onchange="myColor_r_min_v2.innerHTML=this.value;"><span id="myColor_r_min_v2">0</span>&nbsp;~<input type="range" id="myColor_r_max2" min="0" max="255" value="0" step="1" onchange="myColor_r_max_v2.innerHTML=this.value;"><span id="myColor_r_max_v2">0</span><br>G <input type="range" id="myColor_g_min2" min="0" max="255" value="0" step="1" onchange="myColor_g_min_v2.innerHTML=this.value;"><span id="myColor_g_min_v2">0</span>&nbsp;~<input type="range" id="myColor_g_max2" min="0" max="255" value="0" step="1" onchange="myColor_g_max_v2.innerHTML=this.value;"><span id="myColor_g_max_v2">0</span><br>B <input type="range" id="myColor_b_min2" min="0" max="255" value="0" step="1" onchange="myColor_b_min_v2.innerHTML=this.value;"><span id="myColor_b_min_v2">0</span>&nbsp;~<input type="range" id="myColor_b_max2" min="0" max="255" value="0" step="1" onchange="myColor_b_max_v2.innerHTML=this.value;"><span id="myColor_b_max_v2">0</span><br><br>Blue Rect<br>R <input type="range" id="myColor_r_min3" min="0" max="255" value="0" step="1" onchange="myColor_r_min_v3.innerHTML=this.value;"><span id="myColor_r_min_v3">0</span>&nbsp;~<input type="range" id="myColor_r_max3" min="0" max="255" value="0" step="1" onchange="myColor_r_max_v3.innerHTML=this.value;"><span id="myColor_r_max_v3">0</span><br>G <input type="range" id="myColor_g_min3" min="0" max="255" value="0" step="1" onchange="myColor_g_min_v3.innerHTML=this.value;"><span id="myColor_g_min_v3">0</span>&nbsp;~<input type="range" id="myColor_g_max3" min="0" max="255" value="0" step="1" onchange="myColor_g_max_v3.innerHTML=this.value;"><span id="myColor_g_max_v3">0</span><br>B <input type="range" id="myColor_b_min3" min="0" max="255" value="0" step="1" onchange="myColor_b_min_v3.innerHTML=this.value;"><span id="myColor_b_min_v3">0</span>&nbsp;~<input type="range" id="myColor_b_max3" min="0" max="255" value="0" step="1" onchange="myColor_b_max_v3.innerHTML=this.value;"><span id="myColor_b_max_v3">0</span><br><select id="mirrorimage" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="opacity" style="position:absolute;visibility:hidden;"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select></div><div id="result" style="color:red;"></div>');
	       
window.onload = function () {
	
    var video = document.getElementById('video');
    var canvas = document.getElementById('gamecanvas_trackingcolor');
    var context = canvas.getContext('2d');
    var canvas_custom = document.getElementById('canvas_custom');
    var context_custom = canvas_custom.getContext('2d');
    var result = document.getElementById('result');
	var opacity = document.getElementById("opacity");
    var myColor_r_min1,myColor_r_max1,myColor_g_min1,myColor_g_max1,myColor_b_min1,myColor_b_max1;
    var myColor_r_min2,myColor_r_max2,myColor_g_min2,myColor_g_max2,myColor_b_min2,myColor_b_max2;
    var myColor_r_min3,myColor_r_max3,myColor_g_min3,myColor_g_max3,myColor_b_min3,myColor_b_max3;

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
        }
      }) 
	
    canvas.setAttribute("width", video.width);
    canvas.setAttribute("height", video.height);
    canvas_custom.setAttribute("width", video.width);
    canvas_custom.setAttribute("height", video.height);	
	
    var tracker = new tracking.ColorTracker();
    tracking.track('#video', tracker);

	tracking.ColorTracker.registerColor('red', function(r, g, b) {
		if ((r>=myColor_r_min1&&r<=myColor_r_max1)&&(g>=myColor_g_min1&&g<=myColor_g_max1)&&(b>=myColor_b_min1&&b<=myColor_b_max1)) {
		  return true;
		}
		return false;
	});

	tracking.ColorTracker.registerColor('green', function(r, g, b) {
		if ((r>=myColor_r_min2&&r<=myColor_r_max2)&&(g>=myColor_g_min2&&g<=myColor_g_max2)&&(b>=myColor_b_min2&&b<=myColor_b_max2)) {
		  return true;
		}
		return false;
	});

	tracking.ColorTracker.registerColor('blue', function(r, g, b) {
		if ((r>=myColor_r_min3&&r<=myColor_r_max3)&&(g>=myColor_g_min3&&g<=myColor_g_max3)&&(b>=myColor_b_min3&&b<=myColor_b_max3)) {
		  return true;
		}
		return false;
	});

	var trackedColors = {
	  custom: true
	};

	Object.keys(tracking.ColorTracker.knownColors_).forEach(function(color) {
	  trackedColors[color] = true;
	});


	var colors = [];
	for (var color in trackedColors) {
	  if (trackedColors[color]) {
		colors.push(color);
	  }
	}
	tracker.setColors(colors);
  
    function changeTab(tab) {
      if (tab=='red') divColor1.style.display="block"; else divColor1.style.display="none";
      if (tab=='green') divColor2.style.display="block"; else divColor2.style.display="none";
      if (tab=='blue') divColor3.style.display="block"; else divColor3.style.display="none";
    } 
  
    function changeColor(detectColor, n) {
      var val = detectColor.split("_");
      document.getElementById('myColor_r_min'+n).value = val[1].split(",")[0];
      document.getElementById('myColor_r_min_v'+n).innerHTML = val[1].split(",")[0];
      document.getElementById('myColor_r_max'+n).value = val[1].split(",")[0];
      document.getElementById('myColor_r_max_v'+n).innerHTML = val[1].split(",")[0];
      document.getElementById('myColor_g_min'+n).value = val[1].split(",")[1];
      document.getElementById('myColor_g_min_v'+n).innerHTML = val[1].split(",")[1];
      document.getElementById('myColor_g_max'+n).value = val[1].split(",")[1];
      document.getElementById('myColor_g_max_v'+n).innerHTML = val[1].split(",")[1];
      document.getElementById('myColor_b_min'+n).value = val[1].split(",")[2];
      document.getElementById('myColor_b_min_v'+n).innerHTML = val[1].split(",")[2];
      document.getElementById('myColor_b_max'+n).value = val[1].split(",")[2];
      document.getElementById('myColor_b_max_v'+n).innerHTML = val[1].split(",")[2];
    }    

  tracker.on('track', function(event) {

    var mirrorimage = Number(document.getElementById("mirrorimage").value);
    if (mirrorimage==1) {
      context.translate((canvas.width + video.width) / 2, 0);
      context.scale(-1, 1);
      context.drawImage(video, 0, 0, video.width, video.height);
      context.setTransform(1, 0, 0, 1, 0, 0);
    }
    else
      context.drawImage(video, 0, 0, video.width, video.height);


	myColor_r_min1 = document.getElementById('myColor_r_min1').value;
	myColor_r_max1 = document.getElementById('myColor_r_max1').value;
	myColor_g_min1 = document.getElementById('myColor_g_min1').value;
	myColor_g_max1 = document.getElementById('myColor_g_max1').value;
	myColor_b_min1 = document.getElementById('myColor_b_min1').value;
	myColor_b_max1 = document.getElementById('myColor_b_max1').value;

	myColor_r_min2 = document.getElementById('myColor_r_min2').value;
	myColor_r_max2 = document.getElementById('myColor_r_max2').value;
	myColor_g_min2 = document.getElementById('myColor_g_min2').value;
	myColor_g_max2 = document.getElementById('myColor_g_max2').value;
	myColor_b_min2 = document.getElementById('myColor_b_min2').value;
	myColor_b_max2 = document.getElementById('myColor_b_max2').value;

	myColor_r_min3 = document.getElementById('myColor_r_min3').value;
	myColor_r_max3 = document.getElementById('myColor_r_max3').value;
	myColor_g_min3 = document.getElementById('myColor_g_min3').value;
	myColor_g_max3 = document.getElementById('myColor_g_max3').value;
	myColor_b_min3 = document.getElementById('myColor_b_min3').value;
	myColor_b_max3 = document.getElementById('myColor_b_max3').value;

	result.innerHTML = "";

	var imgData=context.getImageData(0,0,canvas.width,canvas.height);
	
	for (var i=0;i<imgData.data.length;i+=4) {
		var r=0;
		var g=0;
		var b=0;
		if ((imgData.data[i]>=myColor_r_min1&&imgData.data[i]<=myColor_r_max1)&&(imgData.data[i+1]>=myColor_g_min1&&imgData.data[i+1]<=myColor_g_max1)&&(imgData.data[i+2]>=myColor_b_min1&&imgData.data[i+2]<=myColor_b_max1)) {
		  r=255;
		}
		if ((imgData.data[i]>=myColor_r_min2&&imgData.data[i]<=myColor_r_max2)&&(imgData.data[i+1]>=myColor_g_min2&&imgData.data[i+1]<=myColor_g_max2)&&(imgData.data[i+2]>=myColor_b_min2&&imgData.data[i+2]<=myColor_b_max2)) {
		  g=255;
		}
		if ((imgData.data[i]>=myColor_r_min3&&imgData.data[i]<=myColor_r_max3)&&(imgData.data[i+1]>=myColor_g_min3&&imgData.data[i+1]<=myColor_g_max3)&&(imgData.data[i+2]>=myColor_b_min3&&imgData.data[i+2]<=myColor_b_max3)) {
		  b=255;
		}

		imgData.data[i]=r;
		imgData.data[i+1]=g;
		imgData.data[i+2]=b;
		imgData.data[i+3]=255;
	}

	context_custom.putImageData(imgData,0,0);
	canvas.style.opacity = Number(opacity.value);

	event.data.forEach(function(rect) {
	  context.strokeStyle = rect.color;
	  context.strokeRect(rect.x, rect.y, rect.width, rect.height);

	  result.innerHTML+= rect.color+","+rect.x+","+rect.y+","+rect.width+","+rect.height+"<br>";
	});

	if (result.innerHTML!="") {
	  	result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-4);
		if (typeof recognitionFinish === 'function') recognitionFinish();
	}
  });
}
