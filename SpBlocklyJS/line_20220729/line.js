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

function linenotify_push_image(notify_token, notify_id, notify_msg) {
	var img = document.getElementById(notify_id);
	
	if (document.getElementById("myForm"))
		document.getElementById("myForm").parentNode.removeChild(document.getElementById("myForm"));
		
	var myForm = document.createElement("form");
	myForm.id = "myForm";
	myForm.name = "myForm";
	myForm.method = "POST";
	myForm.target = "myIframe";
	myForm.action = "https://script.google.com/macros/s/AKfycbyp1xvWg-UCSrLsL8zt-ba_0n96uNTpAFyRry9ifCnRbtK-vgg/exec";
	document.body.appendChild(myForm);

	var myCanvas = document.createElement('canvas');
	myCanvas.id = "myCanvas";
	myCanvas.style.display = "none";
	myForm.appendChild(myCanvas);

	var myIframe = document.createElement('iframe');
	myIframe.id = "myIframe";
	myIframe.name = "myIframe";
	myIframe.style.display = "none";
	myForm.appendChild(myIframe);

	var myContext = myCanvas.getContext('2d');
	myCanvas.setAttribute("width", img.width);
	myCanvas.setAttribute("height", img.height);
	myContext.drawImage(img, 0, 0, img.width, img.height);

	var myToken = document.createElement("input");
	myToken.type = "hidden";
	myToken.id = "myToken";
	myToken.name = "myToken";
	myToken.value = notify_token;
	myForm.appendChild(myToken);

	var myFilename = document.createElement("input");
	myFilename.type = "hidden";
	myFilename.id = "myFilename";
	myFilename.name = "myFilename";
	var date = new Date();
	myFilename.value = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+" "+("0"+date.getHours()).substr(-2,2)+":"+("0"+date.getMinutes()).substr(-2,2)+":"+("0"+date.getSeconds()).substr(-2,2);	
	myForm.appendChild(myFilename);

	var myFile = document.createElement("textarea");
	myFile.id = "myFile";
	myFile.name = "myFile";
	myFile.style.display = "none";
	myFile.value = myCanvas.toDataURL();
	myForm.appendChild(myFile);

	myForm.submit();	
	
	/*
	var img = document.getElementById(notify_id);

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
	
	var boundary = "------------------------------";
	var imageData_s = "--" + boundary + "\r\n"
	  + "Content-Disposition: form-data; name=\"message\"; \r\n\r\n" + notify_msg + "\r\n"
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
	imageData_s = _base64ToArrayBuffer(imageData_s);
	imageData_e = _base64ToArrayBuffer(imageData_e);
	
	var imageData = "";
	var state = false;
	
    const fileReader = new FileReader()
    fileReader.addEventListener('loadend', function () {
      if (this.error) {
        reject(this.error);
      } else {
        imageData = this.result;
		
		if (state == false) {
			state = true;
			var test = new Blob([imageData_s, imageData, imageData_e]);
			fileReader.readAsArrayBuffer(test);
		} 
		else {
			$.ajax({
				"url": "https://notify-api.line.me/api/notify",
				"method" : "post",
				"dataType": "jsonp",
				"contentType" : "multipart/form-data; boundary=" + boundary,
				"payload" : imageData,    
				"headers" : {"Authorization" : "Bearer " + notify_token},
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
      }
    })
    myCanvas.toBlob(blob => fileReader.readAsArrayBuffer(blob), 'image/jpeg', 0.1)
	*/
} 

  function linebot_push_message(bot_token,bot_userid,bot_msg) {

    bot_msg = JSON.parse(bot_msg.replace(/(\r\n|\r|\n)/g, '<br>'));
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

  function line_url_escape(line, type,parameter1,parameter2,parameter3,parameter4) {
    
    parameter1 = (parameter1+"").replace(/\'/g,"%27").replace(/\"/g,"%22");
    parameter2 = (parameter2+"").replace(/\'/g,"%27").replace(/\"/g,"%22");
    parameter3 = (parameter3+"").replace(/\'/g,"%27").replace(/\"/g,"%22");
    parameter4 = (parameter4+"").replace(/\'/g,"%27").replace(/\"/g,"%22");
    
    if (line=="bot") {
      if (type=="text")
        return '{"type":"'+type+'","text":"'+parameter1+'"}';
      else if (type=="sticker")
        return '{"type":"'+type+'","packageId":"'+parameter1+'","stickerId":"'+parameter2+'"}';
      else if (type=="image")
        return '{"type":"'+type+'","originalContentUrl":"'+parameter1+'","previewImageUrl":"'+parameter2+'"}';
      else if (type=="video")
        return '{"type":"'+type+'","originalContentUrl":"'+parameter1+'","previewImageUrl":"'+parameter2+'"}';
      else if (type=="audio")
        return '{"type":"'+type+'","originalContentUrl":"'+parameter1+'","duration":"'+parameter2+'"}';
      else if (type=="location")
        return '{"type":"'+type+'","title":"'+parameter1+'","address":"'+parameter2+'","latitude":"'+parameter3+'","longitude":"'+parameter4+'"}';
      else
        return '';
    } else if (line=="notify") {
      if (type=="text")
        return '{"type":"'+type+'","text":"'+parameter1+'"}';
      else if (type=="sticker")
        return '{"type":"'+type+'","text":"'+parameter1+'","packageId":"'+parameter2+'","stickerId":"'+parameter3+'"}';
      else if (type=="image")
        return '{"type":"'+type+'","text":"'+parameter1+'","originalContentUrl":"'+parameter2+'","previewImageUrl":"'+parameter3+'"}';
      else
        return '';
    }
  }