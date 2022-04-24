document.write('<div id="region_trackingface" style="z-index:999"><video id="gamevideo_trackingface" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><img id="gameimage_trackingface" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_trackingface"></canvas><br><select id="frame_trackingface" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><div id="gamediv_trackingface" style="width:320px;color:red;display:none;"></div><span id="boundingBoxX" style="top:0px;position:absolute;display:none;z-index:9999">-1</span><span id="boundingBoxY" style="top:30px;position:absolute;display:none;z-index:9999">-1</span><span id="boundingBoxWidth" style="top:60px;position:absolute;display:none;z-index:9999">-1</span><span id="boundingBoxHeight" style="top:90px;position:absolute;display:none;z-index:9999">-1</span><span id="jaw1X" style="position:absolute;display:none;z-index:9999">-1</span>	<span id="jaw1Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw2X" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw2Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw3X" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw3Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw4X" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw4Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw5X" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw5Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw6X" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw6Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw7X" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw7Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw8X" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw8Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw9X" style="position:absolute;display:none;z-index:9999">-1</span><span id="jaw9Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="nose1X" style="position:absolute;display:none;z-index:9999">-1</span><span id="nose1Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="nose2X" style="position:absolute;display:none;z-index:9999">-1</span><span id="nose2Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="nose3X" style="position:absolute;display:none;z-index:9999">-1</span><span id="nose3Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="nose4X" style="position:absolute;display:none;z-index:9999">-1</span><span id="nose4Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="mouth1X" style="position:absolute;display:none;z-index:9999">-1</span><span id="mouth1Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="mouth2X" style="position:absolute;display:none;z-index:9999">-1</span><span id="mouth2Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="mouth3X" style="position:absolute;display:none;z-index:9999">-1</span><span id="mouth3Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="mouth4X" style="position:absolute;display:none;z-index:9999">-1</span><span id="mouth4Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeL1X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeL1Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeL2X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeL2Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeL3X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeL3Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeL4X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeL4Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeR1X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeR1Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeR2X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeR2Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeR3X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeR3Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeR4X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeR4Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowL1X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowL1Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowL2X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowL2Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowL3X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowL3Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowR1X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowR1Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowR2X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowR2Y" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowR3X" style="position:absolute;display:none;z-index:9999">-1</span><span id="eyeBrowR3Y" style="position:absolute;display:none;z-index:9999">-1</span></div>');
document.write('<div id="trackingfaceState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_trackingface" style="position:absolute;display:none;"></div>');

window.onload = function () {

	var canvas = document.querySelector('#gamecanvas_trackingface');	
	var context = canvas.getContext('2d');
	var frame = document.getElementById("frame_trackingface");
	var result = document.getElementById('gamediv_trackingface');
	var sourceTimer;
	var obj;

	sourceTimer = setInterval(
		function(){
			var source = document.getElementById("sourceId_trackingface");
			if (source.innerHTML!="") {
				clearInterval(sourceTimer);
				
					
				// tracking.LBF.maxNumStages = 10
				var tracker = new tracking.LandmarksTracker();
				tracker.setEdgesDensity(0.1);
				tracker.setInitialScale(4);
				tracker.setStepSize(2);

				// tracking.track(obj, tracker);
				obj = document.querySelector('#'+source.innerHTML)
				if (document.getElementById(source.innerHTML).tagName=="VIDEO")
					tracking.track(obj, tracker, { camera: true });
				else {
					setInterval(
						function(){
							tracking.track(obj, tracker);
						}
					,100);
					
				}

				var landmarksPerFace = 30
				var landmarkFeatures = {
					jaw : {
						first: 0,
						last: 8,
						fillStyle: 'white',
						closed: false,
					},
					nose : {
						first:15,
						last: 18,
						fillStyle: 'green',
						closed: true,
					},
					mouth : {
						first:27,
						last: 30,
						fillStyle: 'red',
						closed: true,
					},
					eyeL : {
						first:19,
						last: 22,
						fillStyle: 'purple',
						closed: false,
					},
					eyeR : {
						first:23,
						last: 26,
						fillStyle: 'purple',
						closed: false,
					},
					eyeBrowL : {
						first: 9,
						last: 11,
						fillStyle: 'yellow',
						closed: false,
					},
					eyeBrowR : {
						first:12,
						last: 14,
						fillStyle: 'yellow',
						closed: false,
					},
				}

				//////////////////////////////////////////////////////////////////////////////
				//                Code Separator
				//////////////////////////////////////////////////////////////////////////////
				var parameters = {
					landmarkLerpFactor : 0.7,
					boundinBoxVisible : true,
					jawVisible : true,
					eyeBrowLVisible : true,
					eyeBrowRVisible : true,
					noseVisible : true,
					eyeLVisible : true,
					eyeRVisible : true,
					mouthVisible : true,
				}

				var lerpedFacesLandmarks = []

				tracker.on('track', function(event) {
					context.clearRect(0,0,canvas.width, canvas.height);

					if( event.data === undefined ) return;

					result.innerHTML = "";
					context.drawImage(obj, 0, 0, obj.clientWidth, obj.clientHeight);

					event.data.faces.forEach(function(boundingBox, faceIndex) {
						var faceLandmarks = event.data.landmarks[faceIndex]
						if (frame==1) displayFaceLandmarksBoundingBox(boundingBox, faceIndex)
						lerpFacesLandmarks(faceLandmarks)
						displayFaceLandmarksDot(lerpedFacesLandmarks)
					});
				})

				function lerpFacesLandmarks(newFaceLandmarks){
					for(var i = 0; i < newFaceLandmarks.length; i++) {
						if( lerpedFacesLandmarks[i] !== undefined ) continue
						lerpedFacesLandmarks[i] = [
						newFaceLandmarks[i][0],
						newFaceLandmarks[i][1],
					]                        
				}

				// init lerpFacesLandmarks if needed
				for(var i = 0; i < newFaceLandmarks.length; i++) {
					var lerpFactor = parameters.landmarkLerpFactor
						lerpedFacesLandmarks[i][0] = newFaceLandmarks[i][0] * lerpFactor  + lerpedFacesLandmarks[i][0] * (1-lerpFactor)
						lerpedFacesLandmarks[i][1] = newFaceLandmarks[i][1] * lerpFactor  + lerpedFacesLandmarks[i][1] * (1-lerpFactor)
					}
				}

				function displayFaceLandmarksBoundingBox(boundingBox, faceIndex) {
					context.strokeStyle = '#a64ceb';
					context.strokeRect(boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height);

					context.font = '11px Helvetica';
					context.fillStyle = "#fff";
					context.fillText('idx: '+faceIndex, boundingBox.x + boundingBox.width + 5, boundingBox.y + 11);
					context.fillText('x: ' + boundingBox.x + 'px', boundingBox.x + boundingBox.width + 5, boundingBox.y + 22);
					context.fillText('y: ' + boundingBox.y + 'px', boundingBox.x + boundingBox.width + 5, boundingBox.y + 33);
					document.getElementById("boundingBoxX").innerHTML=boundingBox.x;
					document.getElementById("boundingBoxY").innerHTML=boundingBox.y;
					document.getElementById("boundingBoxWidth").innerHTML=boundingBox.width;
					document.getElementById("boundingBoxHeight").innerHTML=boundingBox.height;

					result.innerHTML += boundingBox.x+","+boundingBox.y+","+boundingBox.width+","+boundingBox.height+",";
				}

				function displayFaceLandmarksDot(faceLandmarks) {
					Object.keys(landmarkFeatures).forEach(function(featureLabel) {
						if( parameters[featureLabel+'Visible'] === false )      return
						displayFaceLandmarksFeature(faceLandmarks, featureLabel)
					})
				}
				
				function displayFaceLandmarksFeature(faceLandmarks, featureLabel) {
					var feature = landmarkFeatures[featureLabel]

					if (frame.value==1) {
						// draw dots
						context.fillStyle = feature.fillStyle
						for(var i = feature.first; i <= feature.last; i++){
							var xy = faceLandmarks[i]
							context.beginPath();
							context.arc(xy[0],xy[1],1,0,2*Math.PI);
							context.fill();                                
						}                

						// draw lines
						var feature = landmarkFeatures[featureLabel]
						context.strokeStyle = feature.fillStyle
						context.beginPath();
						for(var i = feature.first; i <= feature.last; i++) {
							var x = faceLandmarks[i][0]
							var y = faceLandmarks[i][1]
							if (i===0){
								context.moveTo(x, y)
							} else {
								context.lineTo(x, y)
							}
						}                
						if( feature.closed === true ) {
							var x = faceLandmarks[feature.first][0]
							var y = faceLandmarks[feature.first][1]
							context.lineTo(x, y)
						}

						context.stroke();
					}

					result.innerHTML += faceLandmarks[0][0]+","+faceLandmarks[0][1]+","+faceLandmarks[1][0]+","+faceLandmarks[1][1]+","+faceLandmarks[2][0]+","+faceLandmarks[2][1]+","+faceLandmarks[3][0]+","+faceLandmarks[3][1]+","+faceLandmarks[4][0]+","+faceLandmarks[4][1]+","+faceLandmarks[5][0]+","+faceLandmarks[5][1]+","+faceLandmarks[6][0]+","+faceLandmarks[6][1]+","+faceLandmarks[7][0]+","+faceLandmarks[7][1]+","+faceLandmarks[8][0]+","+faceLandmarks[8][1]+","+faceLandmarks[15][0]+","+faceLandmarks[15][1]+","+faceLandmarks[16][0]+","+faceLandmarks[16][1]+","+faceLandmarks[17][0]+","+faceLandmarks[17][1]+","+faceLandmarks[18][0]+","+faceLandmarks[18][1]+","+faceLandmarks[27][0]+","+faceLandmarks[27][1]+","+faceLandmarks[28][0]+","+faceLandmarks[28][1]+","+faceLandmarks[29][0]+","+faceLandmarks[29][1]+","+faceLandmarks[30][0]+","+faceLandmarks[30][1]+","+faceLandmarks[19][0]+","+faceLandmarks[19][1]+","+faceLandmarks[20][0]+","+faceLandmarks[20][1]+","+faceLandmarks[21][0]+","+faceLandmarks[21][1]+","+faceLandmarks[22][0]+","+faceLandmarks[22][1]+","+faceLandmarks[23][0]+","+faceLandmarks[23][1]+","+faceLandmarks[24][0]+","+faceLandmarks[24][1]+","+faceLandmarks[25][0]+","+faceLandmarks[25][1]+","+faceLandmarks[26][0]+","+faceLandmarks[26][1]+","+faceLandmarks[9][0]+","+faceLandmarks[9][1]+","+faceLandmarks[10][0]+","+faceLandmarks[10][1]+","+faceLandmarks[11][0]+","+faceLandmarks[11][1]+","+faceLandmarks[12][0]+","+faceLandmarks[12][1]+","+faceLandmarks[13][0]+","+faceLandmarks[13][1]+","+faceLandmarks[14][0]+","+faceLandmarks[14][1]+"<br>";
					if (typeof recognitionFinish === 'function') recognitionFinish();
					
					/*		
					document.getElementById("jaw1X").innerHTML=faceLandmarks[0][0];
					document.getElementById("jaw1Y").innerHTML=faceLandmarks[0][1];	
					document.getElementById("jaw2X").innerHTML=faceLandmarks[1][0];
					document.getElementById("jaw2Y").innerHTML=faceLandmarks[1][1];
					document.getElementById("jaw3X").innerHTML=faceLandmarks[2][0];
					document.getElementById("jaw3Y").innerHTML=faceLandmarks[2][1];	
					document.getElementById("jaw4X").innerHTML=faceLandmarks[3][0];
					document.getElementById("jaw4Y").innerHTML=faceLandmarks[3][1];	
					document.getElementById("jaw5X").innerHTML=faceLandmarks[4][0];
					document.getElementById("jaw5Y").innerHTML=faceLandmarks[4][1];
					document.getElementById("jaw6X").innerHTML=faceLandmarks[5][0];	
					document.getElementById("jaw6Y").innerHTML=faceLandmarks[5][1];
					document.getElementById("jaw7X").innerHTML=faceLandmarks[6][0];
					document.getElementById("jaw7Y").innerHTML=faceLandmarks[6][1];	
					document.getElementById("jaw8X").innerHTML=faceLandmarks[7][0];	
					document.getElementById("jaw8Y").innerHTML=faceLandmarks[7][1];
					document.getElementById("jaw9X").innerHTML=faceLandmarks[8][0];	
					document.getElementById("jaw9Y").innerHTML=faceLandmarks[8][1];
					document.getElementById("nose1X").innerHTML=faceLandmarks[15][0];
					document.getElementById("nose1Y").innerHTML=faceLandmarks[15][1];	
					document.getElementById("nose2X").innerHTML=faceLandmarks[16][0];	
					document.getElementById("nose2Y").innerHTML=faceLandmarks[16][1];
					document.getElementById("nose3X").innerHTML=faceLandmarks[17][0];
					document.getElementById("nose3Y").innerHTML=faceLandmarks[17][1];	
					document.getElementById("nose4X").innerHTML=faceLandmarks[18][0];	
					document.getElementById("nose4Y").innerHTML=faceLandmarks[18][1];
					document.getElementById("mouth1X").innerHTML=faceLandmarks[27][0];	
					document.getElementById("mouth1Y").innerHTML=faceLandmarks[27][1];	
					document.getElementById("mouth2X").innerHTML=faceLandmarks[28][0];
					document.getElementById("mouth2Y").innerHTML=faceLandmarks[28][1];	
					document.getElementById("mouth3X").innerHTML=faceLandmarks[29][0];	
					document.getElementById("mouth3Y").innerHTML=faceLandmarks[29][1];	
					document.getElementById("mouth4X").innerHTML=faceLandmarks[30][0];
					document.getElementById("mouth4Y").innerHTML=faceLandmarks[30][1];
					document.getElementById("eyeL1X").innerHTML=faceLandmarks[19][0];	
					document.getElementById("eyeL1Y").innerHTML=faceLandmarks[19][1];
					document.getElementById("eyeL2X").innerHTML=faceLandmarks[20][0];	
					document.getElementById("eyeL2Y").innerHTML=faceLandmarks[20][1];
					document.getElementById("eyeL3X").innerHTML=faceLandmarks[21][0];	
					document.getElementById("eyeL3Y").innerHTML=faceLandmarks[21][1];
					document.getElementById("eyeL4X").innerHTML=faceLandmarks[22][0];	
					document.getElementById("eyeL4Y").innerHTML=faceLandmarks[22][1];
					document.getElementById("eyeR1X").innerHTML=faceLandmarks[23][0];
					document.getElementById("eyeR1Y").innerHTML=faceLandmarks[23][1];	
					document.getElementById("eyeR2X").innerHTML=faceLandmarks[24][0];	
					document.getElementById("eyeR2Y").innerHTML=faceLandmarks[24][1];
					document.getElementById("eyeR3X").innerHTML=faceLandmarks[25][0];
					document.getElementById("eyeR3Y").innerHTML=faceLandmarks[25][1];	
					document.getElementById("eyeR4X").innerHTML=faceLandmarks[26][0];	
					document.getElementById("eyeR4Y").innerHTML=faceLandmarks[26][1];
					document.getElementById("eyeBrowL1X").innerHTML=faceLandmarks[9][0];	
					document.getElementById("eyeBrowL1Y").innerHTML=faceLandmarks[9][1];	
					document.getElementById("eyeBrowL2X").innerHTML=faceLandmarks[10][0];
					document.getElementById("eyeBrowL2Y").innerHTML=faceLandmarks[10][1];	
					document.getElementById("eyeBrowL3X").innerHTML=faceLandmarks[11][0];	
					document.getElementById("eyeBrowL3Y").innerHTML=faceLandmarks[11][1];
					document.getElementById("eyeBrowR1X").innerHTML=faceLandmarks[12][0];
					document.getElementById("eyeBrowR1Y").innerHTML=faceLandmarks[12][1];	
					document.getElementById("eyeBrowR2X").innerHTML=faceLandmarks[13][0];
					document.getElementById("eyeBrowR2Y").innerHTML=faceLandmarks[13][1];
					document.getElementById("eyeBrowR3X").innerHTML=faceLandmarks[14][0];	
					document.getElementById("eyeBrowR3Y").innerHTML=faceLandmarks[14][1];
					*/
				}
			}
		}
	, 100);			
}
