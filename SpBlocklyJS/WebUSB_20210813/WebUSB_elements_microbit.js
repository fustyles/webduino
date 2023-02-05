document.write('<input type="button" id="gamebutton_webusb_open" value="Connect to device" style="display:none;z-index:999">');
document.write('<input type="button" id="gamebutton_webusb_close" value="Disconnect device" style="display:none;z-index:999">');
document.write('<input type="button" id="gamebutton_send" value="Send command" style="display:none;z-index:999">');
document.write('<input type="text" id="command" value="" style="display:none;z-index:999">');
document.write('<span id="gamespan_status" style="display:none;z-index:999">disconnected</span>');
document.write('<span id="gamespan_response" style="display:none;z-index:999"></span>');

// Append a line to the console frame
function consolePrintln(message) {
	var con = document.getElementById("gamespan_status")
	con.innerHTML = message;
}
function consoleData(message) {
	var con = document.getElementById('gamespan_response');
	con.innerHTML = message;
	if (typeof webusb_getdata === 'function') webusb_getdata();
}

// List of connected devices (a single value could be used if only connecting to one device)
var connectedDevices = []

// Example event call-back handler
function uBitEventHandler(reason, device, data) {
	switch(reason) {
		case "connected":
			consolePrintln("<b>Connected!</b>")
			connectedDevices.push(device)
			break
		case "disconnected":
			consolePrintln("<b>Disconnected</b>")
			connectedDevices = connectedDevices.filter( v => v != device)
			break
		case "connection failure":
			consolePrintln("<b>Connection Failure</b>")
			break
		case "error":
			consolePrintln("<b>Error</b>")
			break
		case "console":
			consoleData("Console Data: " + data.data)
			break
		case "graph-event":
			consoleData(`Graph Event:  ${data.data} (for ${data.graph}${data.series.length?" / series "+data.series:""})`)
			break
		case "graph-data":
			consoleData(`Graph Data: ${data.data} (for ${data.graph}${data.series.length?" / series "+data.series:""})`)
			break
	}
}

// Make the "go" button open the request devices box
document.getElementById("gamebutton_webusb_open").addEventListener("click", () => uBitConnectDevice(uBitEventHandler))
document.getElementById("gamebutton_webusb_close").addEventListener("click", () =>  { connectedDevices.forEach(d=>uBitDisconnect(d)); connectedDevices = [];})
let command = document.getElementById('command');
document.getElementById("gamebutton_send").addEventListener("click", () => { connectedDevices.forEach( d=>uBitSend(d, command.value)) })

setInterval(function(){ if (command.value!="")  document.getElementById("gamebutton_send").click();} , 10);
