// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	
	var connect = document.getElementById('connect');
	var command = document.getElementById('command');
	var send = document.getElementById('send');
	var response = document.getElementById('response');
	var waitState=false;

	function webusb_button(input_show) {
		connect.style.display = input_show;
	}
	
	function webusb_wait() {
		if (connect.value.indexOf('Disconnect')!=-1)
			return true;
		else
			return false
	}
	
	function webusb_send(input_cmd) {
		command.value = input_cmd;
	}

	function webusb_get(input_wait) {
		waitState = true;
		var Timer = setTimeout(function(){ waitState==false; }, input_wait); 
		while (response.innerHTML=="") {
			if (waitState==false) break;
		}
		clearTimeout(Timer);
		return response.innerHTML;
	}
	
	function webusb_clear() {
		response.innerHTML = "";
	}	

	window.webusb_button = webusb_button;
	window.webusb_wait = webusb_wait;
	window.webusb_send = webusb_send;
	window.webusb_get = webusb_get;
	window.webusb_clear = webusb_clear;
	
}(window, window.document));
