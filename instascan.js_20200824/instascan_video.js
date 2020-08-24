document.write('<div id="region" style="z-index:998;"><video id="video" width="320" height="240" preload autoplay loop muted></video><br><div id="result" style="color:red"></div></div>');

window.onload = function () {
let opts = {
  // Whether to scan continuously for QR codes. If false, use scanner.scan() to manually scan.
  // If true, the scanner emits the "scan" event when a QR code is scanned. Default true.
  continuous: true,
  
  // The HTML element to use for the camera's video preview. Must be a <video> element.
  // When the camera is active, this element will have the "active" CSS class, otherwise,
  // it will have the "inactive" class. By default, an invisible element will be created to
  // host the video.
  video: document.getElementById('video'),
  
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
	  scanner.start(cameras[0]);

	  scanner.addListener('scan', function (content) {
		console.log(content);
		result.innerHTML = content;
	  });
	} else {
	  console.error('No cameras found.');
	  result.innerHTML = 'No cameras found.';
	}
}).catch(function (e) {
	console.error(e);
	result.innerHTML = e;
});
}
