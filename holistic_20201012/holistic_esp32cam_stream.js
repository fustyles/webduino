document.write('<div id="region_holistic" style="z-index:999"><img id="gameimage_holistic" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_holistic" style="position:absolute;display:none"></canvas><canvas id="gamecanvas_canvasElement" style="position:absolute;"></canvas><br><select id="face_holistic" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="pose_holistic" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="lefthand_holistic" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="righthand_holistic" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="mirrorimage_holistic" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><select id="scorelimit_holistic" style="position:absolute;visibility:hidden;"><option value="0">0</option><option value="0.1" selected>0.1</option><option value="0.2">0.2</option><option value="0.3">0.3</option><option value="0.4">0.4</option><option value="0.5" selected>0.5</option><option value="0.6">0.6</option><option value="0.7">0.7</option><option value="0.8">0.8</option><option value="0.9">0.9</option></select><br></div><div id="holisticState" style="position:absolute;display:none;">1</div><div id="gamediv_face_holistic" style="position:absolute;display:none;"></div><div id="gamediv_pose_holistic" style="position:absolute;display:none;"></div><div id="gamediv_lefthand_holistic" style="position:absolute;display:none;"></div><div id="gamediv_righthand_holistic" style="position:absolute;display:none;"></div>');

window.onload = function () {
	var ShowImage = document.getElementById('gameimage_holistic');	
	var canvas = document.getElementById('gamecanvas_holistic'); 
	var context = canvas.getContext('2d');
	var canvasElement = document.getElementById('gamecanvas_canvasElement'); 
	var canvasCtx = canvasElement.getContext('2d');
	var mirrorimage = document.getElementById("mirrorimage_holistic");
	var scorelimit = document.getElementById("scorelimit_holistic");
	var result = document.getElementById('gamediv_holistic');
	var holisticState = document.getElementById('holisticState');
	var face = document.getElementById("face_holistic");
	var pose = document.getElementById("pose_holistic");
	var lefthand = document.getElementById("lefthand_holistic");
	var righthand = document.getElementById("righthand_holistic");
	var result_face = document.getElementById("gamediv_face_holistic");
	var result_pose = document.getElementById("gamediv_pose_holistic");
	var result_lefthand = document.getElementById("gamediv_lefthand_holistic");
	var result_righthand = document.getElementById("gamediv_righthand_holistic");
	
	ShowImage.src = document.location.origin+':81/?stream';
	ShowImage.style.visibility = "visible";
	setTimeout(function(){ShowImage.style.visibility = "hidden";start();},5000);
	
	function start() {
		ShowImage.style.width = ShowImage.width + 'px';
		ShowImage.style.height = ShowImage.height + 'px';		
		canvas.setAttribute("width", ShowImage.width);
		canvas.setAttribute("height", ShowImage.height);
		canvas.style.width = ShowImage.width+"px";
		canvas.style.height = ShowImage.height+"px";
		canvasElement.setAttribute("width", ShowImage.width);
		canvasElement.setAttribute("height", ShowImage.height);
		canvasElement.style.width = ShowImage.width+"px";
		canvasElement.style.height = ShowImage.height+"px";

		if (mirrorimage.value==1) {
			context.translate((canvas.width + ShowImage.width) / 2, 0);
			context.scale(-1, 1);
			context.drawImage(ShowImage, 0, 0, ShowImage.width, ShowImage.height);
			context.setTransform(1, 0, 0, 1, 0, 0);
		}
		else
			context.drawImage(ShowImage, 0, 0, ShowImage.width, ShowImage.height);
		
		canvasCtx.save();
		canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
		canvasCtx.drawImage(canvas, 0, 0, canvasElement.width, canvasElement.height);
		
		if (holisticState.innerHTML =="1") {
			try {
				holistic.send({image: canvas}).then(res => {
					setTimeout(function(){start();},100);
				});
			} catch (error) {
				setTimeout(function(){start();},100);
			}
		}
		else
			setTimeout(function(){start();},100);
	}
		
	function onResults(results) {
		//canvasCtx.save();
		//canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
		//canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

		if (face.value==1) {
			drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION, {color: '#C0C0C070', lineWidth: 1});
			drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_RIGHT_EYE,{color: '#FF3030', lineWidth: 1});
			drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_RIGHT_EYEBROW,{color: '#FF3030', lineWidth: 1});
			drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYE,{color: '#30FF30', lineWidth: 1});
			drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYEBROW,{color: '#30FF30', lineWidth: 1});
			drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_FACE_OVAL,{color: '#E0E0E0', lineWidth: 1});
			drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LIPS,{color: '#FFC0CB', lineWidth: 1});
		}
		result_face.innerHTML = JSON.stringify(results.faceLandmarks);
		if (pose.value==1) {
			drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {color: '#00CCCC', lineWidth: 2});
			drawLandmarks(canvasCtx, results.poseLandmarks, {color: '#FFFF00', lineWidth: 2});
		}
		result_pose.innerHTML = JSON.stringify(results.poseLandmarks);
		if (lefthand.value==1) {
			drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS, {color: '#CC0000', lineWidth: 2});
			drawLandmarks(canvasCtx, results.leftHandLandmarks, {color: '#00FF00', lineWidth: 2});
		}
		result_lefthand.innerHTML = JSON.stringify(results.leftHandLandmarks);
		if (righthand.value==1) {
			drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS, {color: '#00CC00', lineWidth: 2});
			drawLandmarks(canvasCtx, results.rightHandLandmarks, {color: '#FF0000', lineWidth: 2});
		}
		result_righthand.innerHTML = JSON.stringify(results.rightHandLandmarks);
		
		canvasCtx.restore();

		if (typeof recognitionFinish === 'function') recognitionFinish();
	}
	
	const holistic = new Holistic({locateFile: (file) => {
	  return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
	}});
	
	holistic.setOptions({
	  modelComplexity: 1,
	  smoothLandmarks: true,
	  minDetectionConfidence: 0.5,
	  minTrackingConfidence: 0.5
	});
	holistic.onResults(onResults);
		
	function h(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(a==Array.prototype||a==Object.prototype)return a;a[c]=b.value;return a};
	function m(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<a.length;++c){var b=a[c];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");}var n=m(this);function p(a,c){if(c)a:{var b=n;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in b))break a;b=b[e]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&l(b,a,{configurable:!0,writable:!0,value:c})}}
	function q(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:h(a)}}var r="function"==typeof Object.assign?Object.assign:function(a,c){for(var b=1;b<arguments.length;b++){var d=arguments[b];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};p("Object.assign",function(a){return a||r});
	p("Array.prototype.fill",function(a){return a?a:function(c,b,d){var e=this.length||0;0>b&&(b=Math.max(0,e+b));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(b=Number(b||0);b<d;b++)this[b]=c;return this}});function t(a){return a?a:Array.prototype.fill}p("Int8Array.prototype.fill",t);p("Uint8Array.prototype.fill",t);p("Uint8ClampedArray.prototype.fill",t);p("Int16Array.prototype.fill",t);p("Uint16Array.prototype.fill",t);p("Int32Array.prototype.fill",t);
	p("Uint32Array.prototype.fill",t);p("Float32Array.prototype.fill",t);p("Float64Array.prototype.fill",t);var u=this||self;function v(a,c){a=a.split(".");var b=u;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===c?b[d]&&b[d]!==Object.prototype[d]?b=b[d]:b=b[d]={}:b[d]=c};var w={color:"white",lineWidth:4,radius:2,visibilityMin:.5};function x(a){a=a||{};return Object.assign(Object.assign(Object.assign({},w),{fillColor:a.color}),a)}function y(a,c){return a instanceof Function?a(c):a}function z(a,c,b){return Math.max(Math.min(c,b),Math.min(Math.max(c,b),a))}v("clamp",z);
	v("drawLandmarks",function(a,c,b){if(c){b=x(b);a.save();var d=a.canvas,e=0;c=q(c);for(var f=c.next();!f.done;f=c.next())if(f=f.value,void 0!==f&&(void 0===f.visibility||f.visibility>b.visibilityMin)){a.fillStyle=y(b.fillColor,{index:e,from:f});a.strokeStyle=y(b.color,{index:e,from:f});a.lineWidth=y(b.lineWidth,{index:e,from:f});var g=new Path2D;g.arc(f.x*d.width,f.y*d.height,y(b.radius,{index:e,from:f}),0,2*Math.PI);a.fill(g);a.stroke(g);++e}a.restore()}});
	v("drawConnectors",function(a,c,b,d){if(c&&b){d=x(d);a.save();var e=a.canvas,f=0;b=q(b);for(var g=b.next();!g.done;g=b.next()){var k=g.value;a.beginPath();g=c[k[0]];k=c[k[1]];g&&k&&(void 0===g.visibility||g.visibility>d.visibilityMin)&&(void 0===k.visibility||k.visibility>d.visibilityMin)&&(a.strokeStyle=y(d.color,{index:f,from:g,to:k}),a.lineWidth=y(d.lineWidth,{index:f,from:g,to:k}),a.moveTo(g.x*e.width,g.y*e.height),a.lineTo(k.x*e.width,k.y*e.height));++f;a.stroke()}a.restore()}});
	v("drawRectangle",function(a,c,b){b=x(b);a.save();var d=a.canvas;a.beginPath();a.lineWidth=y(b.lineWidth,{});a.strokeStyle=y(b.color,{});a.fillStyle=y(b.fillColor,{});a.translate(c.xCenter*d.width,c.yCenter*d.height);a.rotate(c.rotation*Math.PI/180);a.rect(-c.width/2*d.width,-c.height/2*d.height,c.width*d.width,c.height*d.height);a.translate(-c.xCenter*d.width,-c.yCenter*d.height);a.stroke();a.fill();a.restore()});v("lerp",function(a,c,b,d,e){return z(d*(1-(a-c)/(b-c))+e*(1-(b-a)/(b-c)),d,e)}) 
}
