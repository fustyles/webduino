document.write('<div id="region_barcode" style="z-index:999;"><video id="gamevideo_barcode" style="visibility:hidden;" preload autoplay loop muted></video><img id="gameimage_barcode" style="visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_barcode" style="display:none;"></canvas><br><div id="gamediv_barcode" style="color:red;"></div></div>');
document.write('<div id="sourceId_video" style="position:absolute;display:none;">0</div>');
document.write('<div id="sourceId_barcode" style="position:absolute;display:none;"></div>');
document.write('<div id="code" style="position:absolute;display:none;">code-39</div>');

window.onload = function () {
    var video = document.getElementById('gamevideo_barcode');
	var canvas = document.getElementById('gamecanvas_barcode'); 
	var context = canvas.getContext('2d');		
    var result = document.getElementById('gamediv_barcode');
	var region = document.getElementById("region_barcode");
	var code = document.getElementById("code");
	var sourceTimer;
	
	sourceTimer = setInterval(
		function(){
			var source = document.getElementById("sourceId_barcode");
			if (source.innerHTML!="") {
				clearInterval(sourceTimer);
				
				setInterval(
					function(){
						var obj = document.getElementById(source.innerHTML);
						obj.style = "border-width:3px;border-style:solid;border-color:red;";
						setTimeout(function(){ obj.style = ""; }, 1000);
						canvas.setAttribute("width", obj.width);
						canvas.setAttribute("height", obj.height);
						context.drawImage(obj, 0, 0, obj.width, obj.height);
		
						javascriptBarcodeReader({
							/* Image file Path || {data: Uint8ClampedArray, width, height} || HTML5 Canvas ImageData */
							image: canvas,
							barcode: code.innerHTML,
							/*
							EAN-13
							EAN-8
							Code-39
							Code-93
							Code-2of5
							standard
							Interleaved
							Codabar
							Code-128 (UCC/EAN-128)
							*/				
							// barcodeType: 'industrial',
							options: {
							// useAdaptiveThreshold: true
							// singlePass: true
							}
						})
						.then(code => {
							console.log(code);
							result.innerHTML = code;
							if (typeof recognitionFinish === 'function') recognitionFinish();
						})
						.catch(err => {
							console.log(err)
							result.innerHTML = "";
						})
					}
				, 5000);	
				
			}
		}
	, 100);			
}
