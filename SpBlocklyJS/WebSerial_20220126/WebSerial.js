// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	
	let serial_baud = document.getElementById('serial_baud');
	let serial_text = document.getElementById('serial_text');
	let serial_uint8 = document.getElementById('serial_uint8');
	let serial_data = document.getElementById('serial_data');
	let serial_status = document.getElementById('serial_status');
	let serial_state = document.getElementById('serial_state');
	let serial_buttonRequest = document.getElementById('gamebutton_webserial_open');
	let serial_buttonClose = document.getElementById('gamebutton_webserial_close');
	let serial_sendText = document.getElementById('serial_sendText');
	let serial_sendUint8 = document.getElementById('serial_sendUint8');
	let serial_clearText = document.getElementById('serial_clearText');	
	let serial_end = document.getElementById('serial_end');

	function webserial_button(input_id, input_show) {
		document.getElementById(input_id).style.display = input_show;
	}
	
	function webserial_button_position(input_id, input_left, input_top) {
		document.getElementById(input_id).style.position = "absolute";
		document.getElementById(input_id).style.left = input_left + 'px';
		document.getElementById(input_id).style.top = input_top + 'px';		
	}
	
	function webserial_button_onclick(input_button, input_id) {
		var element;
		if (document.getElementsByClassName(input_id))
			element = document.getElementsByClassName(input_id)[0];
		else if (document.getElementById(input_id)) 
			element = document.getElementById(input_id);
		else
			return;
		if (input_button=="open")
			element.addEventListener('click', async () => {buttonRequest();});
		else
			element.addEventListener('click', async () => {buttonClose();});	
	}
	
	function webserial_sendText(input_cmd, input_end) {
		serial_text.value = input_cmd;
		serial_end.value = input_end;
		serial_sendText.click();
	}
	
	function webserial_sendUint8(input_cmd) {
		serial_uint8.value = input_cmd;
		serial_sendUint8.click();
	}	

	function webserial_get() {
		return serial_data.innerText;
	}
	
	function webserial_getState() {
		return (serial_state.innerText=="1")?true:false;
	}	
	
	function webserial_clear() {
		serial_data.innerText = "";
	}

	function webserial_baudrate(baudrate) {
		serial_baud.value = baudrate;
	}

	window.webserial_button = webserial_button;
	window.webserial_button_position = webserial_button_position;
	window.webserial_button_onclick = webserial_button_onclick;
	window.webserial_sendText = webserial_sendText;
	window.webserial_sendUint8 = webserial_sendUint8;
	window.webserial_get = webserial_get;
	window.webserial_getState = webserial_getState;
	window.webserial_clear = webserial_clear;
	window.webserial_baudrate = webserial_baudrate;
	
}(window, window.document));
