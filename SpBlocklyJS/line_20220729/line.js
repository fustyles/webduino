function linebot_push_message(bot_token, bot_userid, bot_msg) {

    bot_msg = JSON.parse(bot_msg);
    bot_msg["token"]=bot_token;
    bot_msg["userid"]=bot_userid;
    
    bot_msg["start"]="1325437200";
    bot_msg["end"]="1325439000";
    bot_msg["prefix"]="alert";
    
    var input_url="https://script.google.com/macros/s/AKfycbwNu63z3ZFHo38wp9LBAwDGyG8tI46-5d-TpFLYFiOHDVOvmgN0/exec";
    var data = $.ajax({
        "type": "POST",
        "dataType": "jsonp",
        "url": input_url,
        "data":bot_msg,
        success: function(jsonp)
        {
          console.log(jsonp);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          //console.log(errorThrown);
        }
    });
}
  
function linenotify_push_message(notify_token, notify_msg) {
	notify_msg = notify_msg;
    //notify_msg = JSON.parse(notify_msg);
    notify_msg["token"]=notify_token;
    
    notify_msg["start"]="1325437200";
    notify_msg["end"]="1325439000";
    notify_msg["prefix"]="alert";
    
    var input_url="https://script.google.com/macros/s/AKfycbySgcM0Ghz9gywkUQtRiM76YvKVmLpV8SNKLN7eMWms8BNDN7c/exec";
    var data = $.ajax({
        "type": "POST",
        "dataType": "jsonp",
        "url": input_url,
        "data":notify_msg,
        success: function(jsonp)
        {
          console.log(jsonp);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          //console.log(errorThrown);
        }
     });
}  

function linenotify_push_image(token, id, message) {
	var img = document.getElementById(id);

	if (!document.getElementById("myCanvas")) {
		var myCanvas = document.createElement('canvas');
		myCanvas.id = "myCanvas";
		myCanvas.style.display = "none";
		document.body.appendChild(myCanvas);
	}
	else {
		var myCanvas = document.getElementById("myCanvas");
	}

	myCanvas.setAttribute("width", img.width);
	myCanvas.setAttribute("height", img.height);
	var myContext = myCanvas.getContext("2d");
	myContext.drawImage(img, 0, 0, img.width, img.height);
	var imageData = myCanvas.toDataURL('image/jpeg');
	
	var boundary = "------------------------------";
	var imageData_s = "--" + boundary + "\r\n"
	  + "Content-Disposition: form-data; name=\"message\"; \r\n\r\n" + message + "\r\n"
	  + "--" + boundary + "\r\n"
	  + "Content-Disposition: form-data; name=\"imageFile\"; filename=\"" + "SpBlockly.jpg" + "\"\r\n"
	  + "Content-Type: " + 'image/jpeg' +"\r\n\r\n";
	  
	var imageData_e = "\r\n--" + boundary + "--\r\n";
	
	function _base64ToArrayBuffer(base64) {
		var binary_string = base64;
		var len = binary_string.length;
		var bytes = new Uint8Array(len);
		for (var i = 0; i < len; i++) {
			bytes[i] = binary_string.charCodeAt(i);
		}
		return bytes.buffer;
	}
	const data = _base64ToArrayBuffer(imageData_s+imageData+imageData_e);

    $.ajax({
        "url": "https://notify-api.line.me/api/notify",
		"method" : "post",
		"contentType" : "multipart/form-data; boundary=" + boundary,
		"payload" : data,    
		"headers" : {"Authorization" : "Bearer " + token},
        success: function(jsonp)
        {
          console.log(jsonp);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          //console.log(errorThrown);
        }
     });
} 