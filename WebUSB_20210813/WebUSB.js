// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	
	var connect = document.getElementById('connect');
	var command = document.getElementById('command');
	var send = document.getElementById('send');
	var response = document.getElementById('response');	

	function webusb_button(input_show) {
		connect.style.display = input_show;
	}
	
	function webusb_wait() {
		if (connect.textContent.indexOf('Disconnect')!=-1)
			return true;
		else
			return false
	}
	
	function webusb_send(input_cmd) {
		command.value = input_cmd;
	}

	function webusb_get() {
		console.log(response.innerText);
		return response.innerText;
	}
	
	function webusb_clear() {
		response.innerText = "";
	}	

	window.webusb_button = webusb_button;
	window.webusb_wait = webusb_wait;
	window.webusb_send = webusb_send;
	window.webusb_get = webusb_get;
	window.webusb_clear = webusb_clear;
	
}(window, window.document));
