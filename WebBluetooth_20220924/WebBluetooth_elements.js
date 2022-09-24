document.write('<button id="gamebutton_webbluetooth_close" style="position:absolute;display:none;z-index:999">Disconnect</button>');
document.write('<button id="gamebutton_webbluetooth_open" style="position:absolute;display:none;z-index:999">Connect to Bluetooth</button>');
document.write('<input type="text" id="Bluetooth_uuid_service" size="38" value="4fafc201-1fb5-459e-8fcc-c5c9c331914b" style="position:absolute;display:none;z-index:999">');
document.write('<input type="text" id="Bluetooth_uuid_tx" size="38" value="beb5483e-36e1-4688-b7f5-ea07361b26a8" style="position:absolute;display:none;z-index:999">');
document.write('<input type="text" id="Bluetooth_uuid_rx" size="38" value="498c599b-2601-4600-bb7e-3aa295a92842" style="position:absolute;display:none;z-index:999">');
document.write('<input type="text" id="Bluetooth_command" style="position:absolute;display:none;z-index:999">');
document.write('<button id="Bluetooth_sendText" style="position:absolute;display:none;z-index:999">Send String</button>');
document.write('<div id="Bluetooth_state" style="position:absolute;display:none;z-index:999"></div>');
document.write('<div id="Bluetooth_data" style="position:absolute;display:none;z-index:999"></div>');

let Bluetooth_command = document.getElementById('Bluetooth_command');
let Bluetooth_data = document.getElementById('Bluetooth_data');
let Bluetooth_state = document.getElementById('Bluetooth_state');
let Bluetooth_buttonRequest = document.getElementById('gamebutton_webbluetooth_open');
let Bluetooth_buttonDisconnect = document.getElementById('gamebutton_webbluetooth_close');
let Bluetooth_sendText = document.getElementById('Bluetooth_sendText');
let Bluetooth_uuid_service = document.getElementById('Bluetooth_uuid_service');
let Bluetooth_uuid_tx = document.getElementById('Bluetooth_uuid_tx');
let Bluetooth_uuid_rx = document.getElementById('Bluetooth_uuid_rx');

let Bluetooth_device = null;
let Bluetooth_characteristics = null;
let Bluetooth_readCharacteristic = null;
let Bluetooth_writeCharacteristic = null;
let busy = false;
let commandQueue = [];

// https://www.uuidgenerator.net/
var service_uuid = "";
var CHARACTERISTIC_TX_UUID = "";
var CHARACTERISTIC_RX_UUID = "";
		
Bluetooth_buttonRequest.addEventListener('click', async () => {
	buttonRequest();
});

Bluetooth_buttonDisconnect.addEventListener('click', async () => {
	buttonDisconnect();
});

function handleCharacteristicValueChanged(event) {
	const value = new TextDecoder().decode(event.target.value);
	if (!value) return;
	Bluetooth_data.innerText = value;
	if (typeof webbluetooth_getdata === 'function') webbluetooth_getdata();
}

function onDisconnected(event) {
	const device = event.target;
	var msg = "Device " + device.name + " is disconnected.";
	console.log(msg);
	Bluetooth_device = null;
	Bluetooth_characteristics = null;
	Bluetooth_readCharacteristic = null;
	Bluetooth_writeCharacteristic = null;
	Bluetooth_state.innerText = 0;	
}

function sendCommand(cmd) {
  if (Bluetooth_writeCharacteristic) {
	if (busy) {
	  commandQueue.push(cmd);
	  return Promise.resolve();
	}
	busy = true;

	return Bluetooth_writeCharacteristic.writeValue(cmd).then(() => {
	  busy = false;
	  let nextCommand = commandQueue.shift();
	  if (nextCommand) {
		sendCommand(nextCommand);
	  }
	});
  } else {
	return Promise.resolve();
  }
}

Bluetooth_sendText.addEventListener('click', async () => {
	var msg = Bluetooth_command.value;
	var cmd = new TextEncoder().encode(msg);
	sendCommand(cmd).then(() => {
		//console.log(new TextDecoder().decode(cmd));
	})
	.catch(error => {
		console.log(error);
	});
});

function sendCommand(cmd) {
  if (Bluetooth_writeCharacteristic) {
	if (busy) {
	  commandQueue.push(cmd);
	  return Promise.resolve();
	}
	busy = true;

	return Bluetooth_writeCharacteristic.writeValue(cmd).then(() => {
	  busy = false;
	  let nextCommand = commandQueue.shift();
	  if (nextCommand) {
		sendCommand(nextCommand);
	  }
	});
  } else {
	return Promise.resolve();
  }
}

function buttonRequest() {
	service_uuid = Bluetooth_uuid_service.value;
	CHARACTERISTIC_TX_UUID = Bluetooth_uuid_tx.value;
	CHARACTERISTIC_RX_UUID = Bluetooth_uuid_rx.value;

	if (navigator.bluetooth) {
		let options = {};
		options.acceptAllDevices = true;
		options.optionalServices = [service_uuid];
		
		//let filters = [];
		//filters.push({services: [0x1234, 0x12345678, '99999999-0000-1000-8000-00805f9b34fb']});
		//filters.push({name: 'xxx'});
		//filters.push({namePrefix: 'yyy'});		
		//options.filters = filters;
		
		navigator.bluetooth.requestDevice(options)
		.then(device => {
			Bluetooth_device = device;
			var msg = 'Connect to Name:' + device.name;
			console.log(msg);
			console.log(service_uuid);
			
			return device.gatt.connect();
		})
		.then(server => {
			return server.getPrimaryService(service_uuid);
		})
		.then(service => {
			return service.getCharacteristics();
		})
		.then(characteristics => {
			console.log("Device connected");
				
			Bluetooth_characteristics = characteristics;
			Bluetooth_device.addEventListener('gattserverdisconnected', onDisconnected);

			characteristics.forEach(characteristic => {
			
				/*
				console.log('> Characteristic UUID:  ' + characteristic.uuid);
				console.log('> Broadcast:            ' + characteristic.properties.broadcast);
				console.log('> Read:                 ' + characteristic.properties.read);
				console.log('> Write w/o response:   ' + characteristic.properties.writeWithoutResponse);
				console.log('> Write:                ' + characteristic.properties.write);
				console.log('> Notify:               ' + characteristic.properties.notify);
				console.log('> Indicate:             ' + characteristic.properties.indicate);
				console.log('> Signed Write:         ' + characteristic.properties.authenticatedSignedWrites);
				console.log('> Queued Write:         ' + characteristic.properties.reliableWrite);
				console.log('> Writable Auxiliaries: ' + characteristic.properties.writableAuxiliaries);
				*/
				
				switch (characteristic.uuid) {
					case CHARACTERISTIC_RX_UUID:
						Bluetooth_readCharacteristic = characteristic;
						break;
					case CHARACTERISTIC_TX_UUID:
						Bluetooth_writeCharacteristic = characteristic;
						break;
				}
			});
			
			Bluetooth_readCharacteristic.startNotifications().then(_ => {
                console.log('Notifications started');
				Bluetooth_state.innerText = 1;
				Bluetooth_readCharacteristic.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged);
            });
			
			return Bluetooth_readCharacteristic.readValue();
		})
		.catch(error => {
			console.log(error);
		});
	}
}

function buttonDisconnect() {
	if (Bluetooth_device && Bluetooth_device.gatt.connected) {
		if (Bluetooth_device.gatt.connected)
			Bluetooth_device.gatt.disconnect();
	}	
}
