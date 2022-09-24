// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';
	
	let Bluetooth_status = document.getElementById('Bluetooth_status');
	let Bluetooth_buttonRequest = document.getElementById('Bluetooth_request_device');
	let Bluetooth_buttonDisconnect = document.getElementById('Bluetooth_disconnect_device');
	let Bluetooth_sendString = document.getElementById('Bluetooth_sendString');	
	let Bluetooth_clearText = document.getElementById('Bluetooth_clearText');
	let Bluetooth_command = document.getElementById('Bluetooth_command');
	let Bluetooth_uuid_service = document.getElementById('Bluetooth_uuid_service');
	let Bluetooth_uuid_tx = document.getElementById('Bluetooth_uuid_tx');
	let Bluetooth_uuid_rx = document.getElementById('Bluetooth_uuid_rx');

	function webbluetooth_uuid(service, tx, rx) {
		Bluetooth_uuid_service.value = service;
		Bluetooth_uuid_tx.value = tx;
		Bluetooth_uuid_rx.value = rx;
	}
	
	function webbluetooth_button(input_id, input_show) {
		document.getElementById(input_id).style.display = input_show;
	}
	
	function webbluetooth_button_position(input_id, input_left, input_top) {
		document.getElementById(input_id).style.position = "absolute";
		document.getElementById(input_id).style.left = input_left + 'px';
		document.getElementById(input_id).style.top = input_top + 'px';		
	}
	
	function webbluetooth_button_onclick(input_button, input_id) {
		var element;
		if (document.getElementsByClassName(input_id).length>0)
			element = document.getElementsByClassName(input_id)[0];
		else if (document.getElementById(input_id)) 
			element = document.getElementById(input_id);
		else
			return;
		
		if (input_button=="open")
			element.addEventListener('click', async () => {buttonRequest();});
		else
			element.addEventListener('click', async () => {buttonDisconnect();});	
	}
	
	function webbluetooth_sendText(input_cmd) {
		Bluetooth_command.value = input_cmd;
		Bluetooth_sendText.click();
	}	

	function webbluetooth_get() {
		return Bluetooth_data.innerText;
	}
	
	function webbluetooth_getState() {
		return (Bluetooth_state.innerText=="1")?true:false;
	}

	function webbluetooth_getdata() {
	}	

	window.webbluetooth_uuid = webbluetooth_uuid;
	window.webbluetooth_button = webbluetooth_button;
	window.webbluetooth_button_position = webbluetooth_button_position;
	window.webbluetooth_button_onclick = webbluetooth_button_onclick;
	window.webbluetooth_sendText = webbluetooth_sendText;
	window.webbluetooth_get = webbluetooth_get;
	window.webbluetooth_getState = webbluetooth_getState;
	window.webbluetooth_getdata = webbluetooth_getdata;
	
}(window, window.document));
