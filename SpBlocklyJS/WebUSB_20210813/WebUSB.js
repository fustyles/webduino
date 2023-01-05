// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

	
	var connect = document.getElementById('connect');
	var command = document.getElementById('command');
	var send = document.getElementById('send');
	var response = document.getElementById('response');
	var statusDisplay = document.getElementById('statusDisplay');

	function webusb_button(input_id, input_show) {
		document.getElementById(input_id).style.display = input_show;
	}
	
	function webusb_button_position(input_id, input_left, input_top) {
		document.getElementById(input_id).style.position = "absolute";
		document.getElementById(input_id).style.left = input_left + 'px';
		document.getElementById(input_id).style.top = input_top + 'px';		
	}
	
	function webusb_state() {
		if (document.getElementById('connect').value.indexOf('Disconnect')!=-1)
			return true;
		else
			return false
	}
	
	function webusb_send(input_cmd) {
		document.getElementById('command').value = input_cmd;
	}

	function webusb_get() {
		return document.getElementById('response').innerHTML;
	}
	
	function webusb_clear() {
		document.getElementById('response').innerHTML = "";
	}

	function webusb_getState() {
		return (document.getElementById('statusDisplay').innerHTML.indexOf("connected")!=-1)?true:false;
	}	
	
	function webusb_getdata() {
	}		
