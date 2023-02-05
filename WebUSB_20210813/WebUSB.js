// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	
	var connect = document.getElementById('connect');
	var command = document.getElementById('command');
	var send = document.getElementById('send');
	var response = document.getElementById('response');

	function webusb_button(input_id, input_show) {
		document.getElementById(input_id).style.display = input_show;
	}
	
	function webusb_button_position(input_id, input_left, input_top) {
		document.getElementById(input_id).style.position = "absolute";
		document.getElementById(input_id).style.left = input_left + 'px';
		document.getElementById(input_id).style.top = input_top + 'px';		
	}
	
	function webusb_state() {
		if (connect.value.indexOf(' connected')!=-1)
			return true;
		else
			return false;
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

	window.webusb_button = webusb_button;
	window.webusb_button_position = webusb_button_position;
	window.webusb_state = webusb_state;
	window.webusb_send = webusb_send;
	window.webusb_get = webusb_get;
	window.webusb_clear = webusb_clear;
	
}(window, window.document));
