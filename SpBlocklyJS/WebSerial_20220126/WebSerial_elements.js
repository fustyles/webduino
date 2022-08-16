document.write('<input type="text" id="serial_baud" style="position:absolute;display:none;z-index:999">');
document.write('<input type="button" id="gamebutton_webserial_open" style="display:none;z-index:999" value="Select Port">');
document.write('<input type="button" id="gamebutton_webserial_close" style="display:none;z-index:999" value="Close Port">');
document.write('<input type="text" id="serial_text" style="position:absolute;display:none;z-index:999">');
document.write('<input type="text" id="serial_end" style="position:absolute;display:none;z-index:999">');
document.write('<button id="serial_sendText" style="position:absolute;display:none;z-index:999">Send Text</button>');
document.write('<input type="text" id="serial_uint8" style="position:absolute;display:none;z-index:999">');
document.write('<button id="serial_sendUint8" style="position:absolute;display:none;z-index:999">Send Uint8Array</button>');
document.write('<span id="serial_data" style="position:absolute;display:none" style="position:absolute;display:none;z-index:999"></span>');
document.write('<span id="serial_status" style="position:absolute;display:none" style="position:absolute;display:none;z-index:999"></span>');
document.write('<span id="serial_state" style="position:absolute;display:none" style="position:absolute;display:none;z-index:999"></span>');
document.write('<button id="serial_clearText" style="position:absolute;display:none;z-index:999">Clear Text</button>');

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

let serial_port = null;
let serial_textEncoder = {};
let serial_writableStreamClosed = {};
let serial_writer = {};
let serial_reader = null;
let serial_readSting = "";
let serial_keepReading = true;
let serial_selProductId = "";
let serial_selVendorId = "";
let serial_timer;
	
navigator.serial.addEventListener("connect", (event) => {
  serial_message("Device connect");
});

navigator.serial.addEventListener("disconnect", (event) => {
	serial_message("Device disconnect");
});	
			
async function readUntilClosed() {
  while (serial_port.readable && serial_keepReading) {
	serial_reader = serial_port.readable.getReader();
	try {
	  while (true) {
		const { value, done } = await serial_reader.read();
		if (done) {
		  // |reader| has been canceled.
		  break;
		}
		if (value) {
			serial_readSting += new TextDecoder().decode(value);
			if (value.includes(10)) {    //Serial.println(data);
				clearTimeout(serial_timer);
				//console.log(serial_readSting);
				serial_data.innerText = serial_readSting;
				serial_message(serial_readSting);
				serial_readSting = "";
			}
			else {    //Serial.print(data);
				serial_timer = setTimeout(function() {
					if (serial_readSting != "") { 
						serial_data.innerText = serial_readSting;
						serial_message(serial_readSting);
					}
					serial_readSting = "";
				}, 100);
			}
		}
	  }
	} catch (error) {
	  // Handle |error|...
	} finally {
	  serial_reader.releaseLock();
	}
  }
}

serial_buttonRequest.addEventListener('click', async () => {buttonRequest();});

async function buttonRequest() {
	if ("serial" in navigator) {
		/*
		const filters = [
			{ usbVendorId: 0x2341, usbProductId: 0x43 },
			{ usbVendorId: 0x2341, usbProductId: 0x01 }
		];
		*/
		const filters = [];

		serial_port = await navigator.serial.requestPort({ filters });
		const { usbProductId, usbVendorId } = serial_port.getInfo();
		serial_selProductId = (usbProductId)?"0x"+usbProductId:"null";
		serial_selVendorId = (usbVendorId)?"0x"+usbVendorId:"null";
		serial_state.innerText = 1;
		serial_keepReading = true;

		try {
			var rate =  Number(serial_baud.value);
			await serial_port.open({ baudRate: rate });
			var msg = "VendorId: "+serial_selVendorId.toString(16)+" ProductId: "+serial_selProductId.toString(16)+" Ready!";
			serial_message(msg);

			//await serial_port.setSignals({ dataTerminalReady: false });
			//await new Promise(resolve => setTimeout(resolve, 200));
			//await serial_port.setSignals({ dataTerminalReady: true });

			const closed = readUntilClosed();
		} catch (error) {
			var errorString = error.message;
			if (errorString.indexOf("already open")!=-1) {
				var msg = "VendorId: 0x"+serial_selVendorId.toString(16)+" ProductId: 0x"+serial_selProductId.toString(16)+" Ready!";
				serial_message(msg);
			}
			else if (errorString.indexOf("Failed to open serial port")!=-1) {
				setTimeout(function(){serial_buttonRequest.click();},1000);
			}
			else {
				serial_message(errorString);
			}
		}
	}
}

serial_buttonClose.addEventListener('click', async () => {buttonClose();});

async function buttonClose() {
	try {
		if (serial_port) {	
			/*
			serial_keepReading = false;
			serial_reader.cancel();
			await closed;
			*/
			serial_state.innerText = 0;
			serial_port.close();
			serial_port = null;
			serial_message("Closed");
		}
	} catch (error) {
			serial_message(error.message);
	}	
}

serial_sendText.addEventListener('click', async () => {
	serial_sendUint8.disabled = true;
	if (serial_port&&serial_writer) {
		try {
			var msg = serial_text.value + serial_end.value;
			//serial_message(msg);
			serial_text.value = "";
			
			if (!serial_textEncoder[serial_selProductId])
				serial_textEncoder[serial_selProductId] = new TextEncoderStream();
			if (!serial_writableStreamClosed[serial_selProductId])
				serial_writableStreamClosed[serial_selProductId] = serial_textEncoder[serial_selProductId].readable.pipeTo(serial_port.writable);
				
			serial_writer[serial_selProductId] = serial_textEncoder[serial_selProductId].writable.getWriter();
			await serial_writer[serial_selProductId].write(msg).then(function() {
				serial_writer[serial_selProductId].releaseLock();
			});
		} catch (error) {
			serial_message(error.message);
		}
	}
});

serial_sendUint8.addEventListener('click', async () => {
	serial_sendText.disabled = true;
	if (serial_port&&serial_writer) {
		try {
			//serial_message(serial_uint8.value);
			var intArray = serial_uint8.value.split(",");
			msg = String.fromCharCode.apply(null, intArray);
			serial_uint8.value = "";
						
			serial_writer[serial_selProductId] = serial_port.writable.getWriter();
			const data = new Uint8Array(intArray);
			await serial_writer[serial_selProductId].write(data).then(function() {
				serial_writer[serial_selProductId].releaseLock();
			});
		} catch (error) {
			serial_message(error.message);
		}
	}
});

serial_clearText.addEventListener('click', async () => {
	serial_status.innerHTML = "";
});

function serial_message(msg) {
	serial_status.innerText = msg;
}
