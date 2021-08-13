// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	
	const connect = document.getElementById('connect');
	const command = document.getElementById('command');
	const send = document.getElementById('send');
	const response = document.getElementById('response');	

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
		return response.innerHTML;
	}
	
	function webusb_clear() {
		response.innerHTML = "";
	}	

	window.webusb_send = webusb_send;
	window.webusb_get = webusb_get;
	window.webusb_clear = webusb_clear;
	
}(window, window.document));
