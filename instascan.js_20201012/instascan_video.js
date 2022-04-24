document.write('<div id="region_instascan" style="z-index:999;"><video id="gamevideo_instascan" style="visibility:hidden;" preload autoplay loop muted></video><img id="gameimage_instascan" style="visibility:hidden;" crossorigin="anonymous"><br><div id="gamediv_instascan" style="color:red;"></div></div>');
document.write('<div id="sourceId_video" style="position:absolute;display:none;">0</div>');
document.write('<div id="sourceId_instascan" style="position:absolute;display:none;"></div>');

window.onload = function () {
    var video = document.getElementById('gamevideo_instascan');
    var result = document.getElementById('gamediv_instascan');
	var region = document.getElementById("region_instascan");
	var sourceTimer;
	
	sourceTimer = setInterval(
		function(){
			var source = document.getElementById("sourceId_instascan");
			if (source.innerHTML!="") {
				clearInterval(sourceTimer);

				let opts = {
				  // Whether to scan continuously for QR codes. If false, use scanner.scan() to manually scan.
				  // If true, the scanner emits the "scan" event when a QR code is scanned. Default true.
				  continuous: true,
				  
				  // The HTML element to use for the camera's video preview. Must be a <video> element.
				  // When the camera is active, this element will have the "active" CSS class, otherwise,
				  // it will have the "inactive" class. By default, an invisible element will be created to
				  // host the video.
				  video: document.getElementById('gamevideo_instascan'),
				  
				  // Whether to horizontally mirror the video preview. This is helpful when trying to
				  // scan a QR code with a user-facing camera. Default true.
				  mirror: true,
				  
				  // Whether to include the scanned image data as part of the scan result. See the "scan" event
				  // for image format details. Default false.
				  captureImage: false,
				  
				  // Only applies to continuous mode. Whether to actively scan when the tab is not active.
				  // When false, this reduces CPU usage when the tab is not active. Default true.
				  backgroundScan: true,
				  
				  // Only applies to continuous mode. The period, in milliseconds, before the same QR code
				  // will be recognized in succession. Default 5000 (5 seconds).
				  refractoryPeriod: 5000,
				  
				  // Only applies to continuous mode. The period, in rendered frames, between scans. A lower scan period
				  // increases CPU usage but makes scan response faster. Default 1 (i.e. analyze every frame).
				  scanPeriod: 1
				};	
					
				let scanner = new Instascan.Scanner(opts);

				Instascan.Camera.getCameras().then(function (cameras) {
					if (cameras.length > 0) {
					  scanner.start(cameras[Number(document.getElementById("sourceId_video").innerHTML)]);

					  scanner.addListener('scan', function (content) {
						//console.log(utf8to16(content));
						result.innerHTML = utf8to16(content);
						if (typeof recognitionFinish === 'function') recognitionFinish();
					  });
					} else {
					  console.error('No cameras found.');
					  result.innerHTML = 'No cameras found.';
					}
				}).catch(function (e) {
					console.error(e);
					result.innerHTML = e;
				});

				function utf8to16(str) {
					 var out, i, len, c;
					 var char2, char3;
					 out = "";
					 len = str.length;
					 i = 0;
					 while(i < len) {
						 c = str.charCodeAt(i++);
						 switch(c >> 4)
						 { 
						   case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
							 // 0xxxxxxx
							 out += str.charAt(i-1);
							 break;
						   case 12: case 13:
							 // 110x xxxx    10xx xxxx
							 char2 = str.charCodeAt(i++);
							 out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
							 break;
						   case 14:
							 // 1110 xxxx   10xx xxxx   10xx xxxx
							 char2 = str.charCodeAt(i++);
							 char3 = str.charCodeAt(i++);
							 out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
							 break;
						 }
					 }
					 return out;
				}
			}
		}
	, 100);			
}
