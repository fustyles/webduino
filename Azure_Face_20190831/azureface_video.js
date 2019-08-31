document.write('<div id="region"><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="gamecanvas_azureface"></canvas><br>Frame<select id="frame"><option value="1">show</option><option value="0">hide</option></select>MirrorImage<select id="mirrorimage"><option value="1">yes</option><option value="0">no</option></select>Opacity<select id="opacity"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><br><div id="result" style="width:320px;color:red"></div></div>');

window.onload = function () {
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_azureface'); 
  var context = canvas.getContext('2d');
  var result = document.getElementById('result');
  var faceApi_key = "";
  var faceApi_ResourceName = "";
  var faceApi_result = "";
  
  startvideo();

  function startvideo() {
    video.style.visibility="hidden";
    video.style.position="absolute";
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
          canvas.setAttribute("width", video.width);
          canvas.setAttribute("height", video.height);          
          setTimeout(function(){DetectVideo(); }, 100);
        }
      })   
  } 
                        
  async function DetectVideo() {

    var mirrorimage = Number(document.getElementById("mirrorimage").value);
    if (mirrorimage==1) {
      context.translate((canvas.width + video.width) / 2, 0);
      context.scale(-1, 1);
      context.drawImage(video, 0, 0, video.width, video.height);
      context.setTransform(1, 0, 0, 1, 0, 0);
    }
    else
      context.drawImage(video, 0, 0, video.width, video.height);

	if (faceApi_key == ""||faceApi_ResourceName == "") return;


	// 首先將Canvas轉為 DataURL
	const dataURL = canvas.toDataURL('image/png')
	// 取出資料並使用 atob 將資料轉為base64的字串
	const blobBin = atob(dataURL.split(',')[1])
	// 取得 mine
	const mime = dataURL.split(',')[0].split(':')[1].split(';')[0]
	console.log(mime)   // "image/png"
	// 建立一個array容器放charCode
	const arr = []
	for (let i = 0; i < blobBin.length; i++) {
		arr.push(blobBin.charCodeAt(i))
	}
	// 將基礎arr 轉為 ArrayBuffer (usign integer 8): Uint8Array
	const u8 = new Uint8Array(arr)
	const imagefile = new Blob([u8], { type: mime })
	console.log(imagefile)


	var data = $.ajax({
	  type: "post",
	  dataType: "jsonp",
	  url: faceApi_url,
	  beforeSend : function(Obj) {
	    Obj.setRequestHeader("Content-Type", "application/octet-stream");
	    Obj.setRequestHeader("Ocp-Apim-Subscription-Key", faceApi_key);
	  },
	  data: imagefile,
	  processData : false,
	  success: function(json)
	  {
		faceApi_result = "";
	    console.log(json);
	    json = eval(json);
	    for (var i in json) {
		  /*
	      faceApi_result += "faceId,";
	      faceApi_result += json[i]["faceId"]; 
	      faceApi_result += "faceRectangle,";
	      faceApi_result += json[i]["faceRectangle"];            
	      faceApi_result += ",faceLandmarks,";
	      faceApi_result += json[i]["faceLandmarks"];  
	      faceApi_result += ",faceAttributes,";
	      faceApi_result += json[i]["faceAttributes"];  
	      faceApi_result += ",recognitionModel,";
	      faceApi_result += json[i]["recognitionModel"];
	      faceApi_result += ";";
		  */
		  console.log(json[i]);
	    }
	  },
	  error: function(exception) {
		  console.log('fail');
	  }
    });

    /*
	var frame = Number(document.getElementById("frame").value);
	if (frame==1) {
	  context.lineWidth = "3";
	  context.strokeStyle = "#00FFFF";
	  context.beginPath();
	  context.rect(x, y, width, height);
	  context.stroke(); 
	  context.lineWidth = "2";
	  context.fillStyle = "red";
	  context.font = "12px Arial";
	  context.fillText(predictions[i].class, x, y);
	}
	*/
  







    setTimeout(function(){DetectVideo(); }, 100);
  }
}