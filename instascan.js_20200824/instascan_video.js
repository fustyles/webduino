document.write('<div id="region" style="z-index:998;"><video id="video" width="320" height="240" preload autoplay loop muted></video><br><div id="result" style="color:red"></div></div>');

window.onload = function () {
	let scanner = new Instascan.Scanner({ video: document.getElementById('video') });

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