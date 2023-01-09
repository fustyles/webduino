// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

	function webusb_button(input_id, input_show) {
		document.getElementById(input_id).style.display = input_show;
	}
	
	function webusb_button_position(input_id, input_left, input_top) {
		document.getElementById(input_id).style.position = "absolute";
		document.getElementById(input_id).style.left = input_left + 'px';
		document.getElementById(input_id).style.top = input_top + 'px';		
	}
	
	function webusb_button_onclick(input_button, input_id) {
		var element;
		if (document.getElementsByClassName(input_id).length>0)
			element = document.getElementsByClassName(input_id)[0];
		else if (document.getElementById(input_id)) 
			element = document.getElementById(input_id);
		else
			return;
		
		if (input_button=="open")
			element.addEventListener('click', async () => {document.getElementById('gamebutton_webusb_open').click();});
		else
			element.addEventListener('click', async () => {document.getElementById('gamebutton_webusb_close').click();});	
	}	
	
	function webusb_state() {
		if (document.getElementById('gamespan_status').innerHTML.indexOf('connected')!=-1)
			return true;
		else
			return false
	}
	
	function webusb_send(input_cmd) {
		document.getElementById('command').value = input_cmd;
	}

	function webusb_get() {
		return document.getElementById('gamespan_response').innerHTML;
	}
	
	function webusb_clear() {
		document.getElementById('gamespan_response').innerHTML = "";
	}

	function webusb_getState() {
		return (document.getElementById('gamespan_status').innerHTML.indexOf("connected")!=-1)?true:false;
	}	
		
