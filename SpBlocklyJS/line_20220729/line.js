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

function linenotify_push_image(notify_script, notify_token, notify_videoid) {
	var myVideo = document.getElementById(notify_videoid);

	if (!document.getElementById("myCanvas")) {
		var myCanvas = document.createElement('canvas');
		myCanvas.id = "myCanvas";
		myCanvas.style.display = "none";
		document.body.appendChild(myCanvas);
	}
	else {
		var myCanvas = document.getElementById("myCanvas");
	}

	if (!document.getElementById("myIframe")) {
		var myIframe = document.createElement('iframe');
		myIframe.id = "myIframe";
		myIframe.name = "myIframe";
		myIframe.style.display = "none";
		document.body.appendChild(myIframe);
	}
	else {
		var myIframe = document.getElementById("myIframe");
	}

	var myContext = myCanvas.getContext('2d');
	myCanvas.setAttribute("width", myVideo.width);
    myCanvas.setAttribute("height", myVideo.height);
	myContext.drawImage(myVideo, 0, 0, myVideo.width, myVideo.height);

	if (!document.getElementById("myForm")) {
		var myForm = document.createElement("form");
		myForm.id = "myForm";
		myForm.name = "myForm";
		myForm.method = "POST";
		myForm.target = "myIframe";
		myForm.action = notify_script;
		document.body.appendChild(myForm);
	} 
	else {
		var myForm = document.getElementById("myForm");
	}

	if (!document.getElementById("myToken")) {
		var myToken = document.createElement("input");
		myToken.type = "hidden";
		myToken.id = "myToken";
		myToken.name = "myToken";
		myForm.appendChild(myToken);
	}
	else {
		var myToken = document.getElementById("myToken");
	}
	myToken.value = notify_token;

	if (!document.getElementById("myFilename")) {
		var myFilename = document.createElement("input");
		myFilename.type = "hidden";
		myFilename.id = "myFilename";
		myFilename.name = "myFilename";
		myForm.appendChild(myFilename);
	}
	else {
		var myFilename = document.getElementById("myFilename");
	}
	var date = new Date();
	myFilename.value = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+" "+("0"+date.getHours()).substr(-2,2)+":"+("0"+date.getMinutes()).substr(-2,2)+":"+("0"+date.getSeconds()).substr(-2,2);	

	if (!document.getElementById("myFile")) {
		var myFile = document.createElement("textarea");
		myFile.id = "myFile";
		myFile.name = "myFile";
		myFile.style.display = "none";
		myForm.appendChild(myFile);
	}
	else {
		var myFile = document.getElementById("myFile");
	}
	myFile.value = myCanvas.toDataURL();

    myForm.submit();
} 