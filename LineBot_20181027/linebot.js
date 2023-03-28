/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Google Script
https://github.com/fustyles/webduino/blob/gs/linebot_push_message.gs
https://github.com/fustyles/webduino/blob/gs/linenotify_push_message.gs
*/

+(function (window, document) {

  'use strict';

  function linebot_push_message(bot_token,bot_userid,bot_msg) {

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
  
  function linenotify_push_message(notify_token,notify_msg) {
	  console.log(notify_msg..replace(/(\r\n|\r|\n)/g, '<br>'));
    notify_msg = JSON.parse(notify_msg..replace(/(\r\n|\r|\n)/g, '<br>'));
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

  function linenotify_push_image(notify_script,notify_token,notify_videoid) {
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
  
  function line_url_escape(line,type,parameter1,parameter2,parameter3,parameter4) {
    
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

  function linenotify_get_id(input_tagname) {
	var list = [];
	var element = document.getElementsByTagName(input_tagname);
	if (element.length>0) {
		for (var i=0;i<element.length;i++) {
			list.push(element[i].id);
		}
	}
	return list;
  }

  window.linebot_push_message = linebot_push_message;
  window.linenotify_push_message = linenotify_push_message;
  window.linenotify_push_image = linenotify_push_image;
  window.line_url_escape = line_url_escape;
  window.linenotify_get_id = linenotify_get_id;

}(window, window.document));
