document.write('<div id="region"><video id="video" width="320" height="240" style="position:absolute;display:none" preload autoplay loop muted></video><canvas id="gamecanvas_tracking" width="320" height="240"></canvas><br><div id="result" style="width:320px;color:red"></div></div>');
document.write('<span id="boundingBoxX" style="top:0px;position:absolute;display:none;z-index:9999">0</span><span id="boundingBoxY" style="top:30px;position:absolute;display:none;z-index:9999">0</span><span id="boundingBoxWidth" style="top:60px;position:absolute;display:none;z-index:9999">0</span><span id="boundingBoxHeight" style="top:90px;position:absolute;display:none;z-index:9999">0</span><span id="jaw1X" style="position:absolute;display:none;z-index:9999">0</span>	<span id="jaw1Y" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw2X" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw2Y" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw3X" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw3Y" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw4X" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw4Y" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw5X" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw5Y" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw6X" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw6Y" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw7X" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw7Y" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw8X" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw8Y" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw9X" style="position:absolute;display:none;z-index:9999">0</span><span id="jaw9Y" style="position:absolute;display:none;z-index:9999">0</span><span id="nose1X" style="position:absolute;display:none;z-index:9999">0</span><span id="nose1Y" style="position:absolute;display:none;z-index:9999">0</span><span id="nose2X" style="position:absolute;display:none;z-index:9999">0</span><span id="nose2Y" style="position:absolute;display:none;z-index:9999">0</span><span id="nose3X" style="position:absolute;display:none;z-index:9999">0</span><span id="nose3Y" style="position:absolute;display:none;z-index:9999">0</span><span id="nose4X" style="position:absolute;display:none;z-index:9999">0</span><span id="nose4Y" style="position:absolute;display:none;z-index:9999">0</span><span id="mouth1X" style="position:absolute;display:none;z-index:9999">0</span><span id="mouth1Y" style="position:absolute;display:none;z-index:9999">0</span><span id="mouth2X" style="position:absolute;display:none;z-index:9999">0</span><span id="mouth2Y" style="position:absolute;display:none;z-index:9999">0</span><span id="mouth3X" style="position:absolute;display:none;z-index:9999">0</span><span id="mouth3Y" style="position:absolute;display:none;z-index:9999">0</span><span id="mouth4X" style="position:absolute;display:none;z-index:9999">0</span><span id="mouth4Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeL1X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeL1Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeL2X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeL2Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeL3X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeL3Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeL4X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeL4Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeR1X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeR1Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeR2X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeR2Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeR3X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeR3Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeR4X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeR4Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowL1X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowL1Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowL2X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowL2Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowL3X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowL3Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowR1X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowR1Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowR2X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowR2Y" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowR3X" style="position:absolute;display:none;z-index:9999">0</span><span id="eyeBrowR3Y" style="position:absolute;display:none;z-index:9999">0</span>');
	       
window.onload = function () {

       
        var gamecanvas_tracking = document.querySelector('#gamecanvas_tracking');
        gamecanvas_tracking.width = 320
        gamecanvas_tracking.height = 240
        var context = gamecanvas_tracking.getContext('2d');

        // tracking.LBF.maxNumStages = 10
        var tracker = new tracking.LandmarksTracker();
        tracker.setEdgesDensity(0.1);
        tracker.setInitialScale(4);
        tracker.setStepSize(2);

        tracker.setInitialScale(2);
        tracker.setStepSize(1);
	
        var videoElement = document.querySelector('#video')
        // tracking.track(videoElement, tracker);
        tracking.track(videoElement, tracker, { camera: true });
        
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
                // clear debug gamecanvas_tracking
                context.clearRect(0,0,gamecanvas_tracking.width, gamecanvas_tracking.height);

                if( event.data === undefined ) return;
                
                event.data.faces.forEach(function(boundingBox, faceIndex) {
                        var faceLandmarks = event.data.landmarks[faceIndex]

                        if( parameters.boundinBoxVisible === true ) displayFaceLandmarksBoundingBox(boundingBox, faceIndex)
			
                        // lerpFacesLandmarks
                        lerpFacesLandmarks(faceLandmarks)
                        
                        // display each faceLandmarks
                        displayFaceLandmarksDot(lerpedFacesLandmarks)
                });
        })

        function lerpFacesLandmarks(newFaceLandmarks){
                // init lerpFacesLandmarks if needed
                for(var i = 0; i < newFaceLandmarks.length; i++){
                        if( lerpedFacesLandmarks[i] !== undefined ) continue
                        lerpedFacesLandmarks[i] = [
                                newFaceLandmarks[i][0],
                                newFaceLandmarks[i][1],
                        ]                        
                }

                // init lerpFacesLandmarks if needed
                for(var i = 0; i < newFaceLandmarks.length; i++){
                        var lerpFactor = parameters.landmarkLerpFactor
                        lerpedFacesLandmarks[i][0] = newFaceLandmarks[i][0] * lerpFactor  + lerpedFacesLandmarks[i][0] * (1-lerpFactor)
                        lerpedFacesLandmarks[i][1] = newFaceLandmarks[i][1] * lerpFactor  + lerpedFacesLandmarks[i][1] * (1-lerpFactor)
                }
        }

        //////////////////////////////////////////////////////////////////////////////
        //                Code Separator
        //////////////////////////////////////////////////////////////////////////////
        function displayFaceLandmarksBoundingBox(boundingBox, faceIndex){
                // display the box
                context.strokeStyle = '#a64ceb';
                context.strokeRect(boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height);

                // display the size of the box
                context.font = '11px Helvetica';
                context.fillStyle = "#fff";
                context.fillText('idx: '+faceIndex, boundingBox.x + boundingBox.width + 5, boundingBox.y + 11);
                context.fillText('x: ' + boundingBox.x + 'px', boundingBox.x + boundingBox.width + 5, boundingBox.y + 22);
                context.fillText('y: ' + boundingBox.y + 'px', boundingBox.x + boundingBox.width + 5, boundingBox.y + 33);
        }
        
        function displayFaceLandmarksDot(faceLandmarks){
                Object.keys(landmarkFeatures).forEach(function(featureLabel){
                        if( parameters[featureLabel+'Visible'] === false )      return
                        displayFaceLandmarksFeature(faceLandmarks, featureLabel)
                })
        }
        function displayFaceLandmarksFeature(faceLandmarks, featureLabel){
                var feature = landmarkFeatures[featureLabel]
                
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
                for(var i = feature.first; i <= feature.last; i++){
                        var x = faceLandmarks[i][0]
                        var y = faceLandmarks[i][1]
                        if( i === 0 ){
                                context.moveTo(x, y)
                        }else{
                                context.lineTo(x, y)
                        }
                }                
                if( feature.closed === true ){
                        var x = faceLandmarks[feature.first][0]
                        var y = faceLandmarks[feature.first][1]
                        context.lineTo(x, y)
                }

                context.stroke();
        }
}
