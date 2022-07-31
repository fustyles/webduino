/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Google Script
https://github.com/fustyles/webduino/blob/gs/linebot_push_message.gs
https://github.com/fustyles/webduino/blob/gs/SendCapturedImageToTelegram.gs
*/

+(function (window, document) {

  'use strict';
  
  var telegram_messageid = "";
  var telegram_text = "";

  function telegram_push_message(token, chatid, msg) {
	$.ajax({
		"type": "POST",
		"headers": { 
		  "Content-Type": "application/x-www-form-urlencoded"
		},
		data: {
		  chat_id: chatid,
		  text: msg.replace(/\*\*\*/g,'\n')
		},		
		"url": "https://api.telegram.org/bot"+token+"/sendMessage?parse_mode=HTML",
		success: function(jsonp)
		{
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
		  //console.log(errorThrown);
		}
	 });
  } 
  
  function telegram_push_photo(token, chatid, url) {
	$.ajax({
		"type": "POST",
		"headers": { 
		  "Content-Type": "application/x-www-form-urlencoded"
		},
		data: {
		  chat_id: chatid,
		  photo: url
		},		
		"url": "https://api.telegram.org/bot"+token+"/sendPhoto?parse_mode=HTML",
		success: function(jsonp)
		{
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
		  //console.log(errorThrown);
		}
	 });
  }   
  
  function telegram_push_image(input_token,input_chatid,input_id) {
	var img = document.getElementById(input_id);
	
	if (document.getElementById("myForm"))
		document.getElementById("myForm").parentNode.removeChild(document.getElementById("myForm"));

	var myForm = document.createElement("form");
	myForm.id = "myForm";
	myForm.name = "myForm";
	myForm.method = "POST";
	myForm.target = "myIframe";
	myForm.action = "https://script.google.com/macros/s/AKfycbz2xF0_DBg2UwMU0qGrnORCUptzBXXn7GZxl7Onm0UNhGTGJat1Bz2SjNGCzDl0vUU2/exec";
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
	myToken.value = input_token;
	myForm.appendChild(myToken);

	var myChatID = document.createElement("input");
	myChatID.type = "hidden";
	myChatID.id = "myChatID";
	myChatID.name = "myChatID";
	myChatID.value = input_chatid;
	myForm.appendChild(myChatID);

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
  } 
  
  function telegram_getupdates(input_token) {
	$.ajax({
		"type": "POST",
		"dataType": "json",
		"headers": { 
		  "Content-Type": "application/x-www-form-urlencoded"
		},				
		"url": "https://api.telegram.org/bot"+input_token+"/getUpdates?limit=1&offset=-1&allowed_updates=message",
		success: function(jsonp)
		{
		  if (String(jsonp["result"][0]["message"]["message_id"])!=telegram_messageid) {
			if (telegram_messageid!="")
				telegram_text = String(jsonp["result"][0]["message"]["text"]);
			telegram_messageid = String(jsonp["result"][0]["message"]["message_id"]);
		  }
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
		  //console.log(errorThrown);
		  telegram_text = "";
		}
	 });
  }  
  
  function telegram_reply_markup(token, chatid, msg, keyboard, ontime) {
	var replyKeyboard = [[]];
	if (keyboard.length>0) {
		for (var i=0;i<keyboard.length;i++) {
			replyKeyboard[0].push({text:keyboard[i]});
		}
	}
	
	$.ajax({
		"type": "POST",
		"headers": { 
		  "Content-Type": "application/json"
		},
		data: JSON.stringify({
			chat_id: chatid,
			text: msg.replace(/\*\*\*/g,'\n'),
			reply_markup: {
			  keyboard: replyKeyboard,
			  resize_keyboard: true,
			  one_time_keyboard: ontime
			}
		  }),
		"url": "https://api.telegram.org/bot"+token+"/sendMessage?parse_mode=HTML",
		success: function(jsonp)
		{
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
		  //console.log(errorThrown);
		}
	 });
  }
  
  function telegram_getmessage() {
	var response = telegram_text;
	telegram_text = "";
	return response;
  }  

  function telegram_get_id(input_tagname) {
	var list = [];
	var element = document.getElementsByTagName(input_tagname);
	if (element.length>0) {
		for (var i=0;i<element.length;i++) {
			list.push(element[i].id);
		}
	}
	return list;
  }
  
  window.telegram_push_message = telegram_push_message;
  window.telegram_push_image = telegram_push_image;
  window.telegram_push_photo = telegram_push_photo;
  window.telegram_getupdates = telegram_getupdates;
  window.telegram_getmessage = telegram_getmessage;
  window.telegram_reply_markup = telegram_reply_markup;
  window.telegram_get_id = telegram_get_id;

}(window, window.document));
