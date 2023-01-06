(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', event => {
    let webusb_open = document.querySelector("#gamebutton_webusb_open");
	let webusb_close = document.querySelector("#gamebutton_webusb_close");
    let gamespan_status = document.querySelector('#gamespan_status');
    let gamespan_response = document.querySelector('#gamespan_response');
    let command = document.querySelector('#command');
    let gamebutton_send = document.querySelector('#gamebutton_send');
    let port;

    function webusb_connect() {
      port.connect().then(() => {
        //gamespan_status.textContent = port.device_.productName+" is connected.";
        gamespan_status.innerHTML = port.device_.productName+" is connected.";
        
        port.onReceive = data => {       
          let textDecoder = new TextDecoder();
          //gamespan_response.textContent = textDecoder.decode(data);
          gamespan_response.innerHTML = textDecoder.decode(data);
		  if (typeof webusb_getdata === 'function') webusb_getdata();
        }
        port.onReceiveError = error => {
          //gamespan_status.textContent = error;
          gamespan_status.innerHTML = error;
        };
      }, error => {
        gamespan_status.textContent = error;
      });
    }

    function onUpdate() {
      if (!port) {
        return;
      }

      if (command.value!="") {
        const Command = command.value + '\n';
        command.value = "";
        port.send(new TextEncoder("utf-8").encode(Command));
      }
    };

    setInterval(function(){if (command.value!="") onUpdate();}, 10);
    
    gamebutton_send.addEventListener('click', onUpdate);

    webusb_open.addEventListener('click', function() {
      if (!port) {
        serial.requestPort().then(selectedPort => {
          port = selectedPort;
          webusb_connect();
        }).catch(error => {
          gamespan_status.textContent = error;
        });
      }
    });
	
    webusb_close.addEventListener('click', function() {
      if (port) {
        port.disconnect();
        gamespan_status.textContent = '';
        port = null;
      }
    });	

    serial.getPorts().then(ports => {
      if (ports.length == 0) {
        gamespan_status.textContent = 'No device found.';
      } else {
        gamespan_status.textContent = 'Select your device.';
        //gamespan_status.textContent = 'Connect to '+ports[0].productName;
        //port = ports[0];
        //webusb_connect();
      }
    });
  });

})();
