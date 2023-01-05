(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', event => {
    let connectButton = document.querySelector("#connect");
    let statusDisplay = document.querySelector('#statusDisplay');
    let response = document.querySelector('#response');
    let command = document.querySelector('#command');
    let send = document.querySelector('#send');
    let port;

    function connect() {
      port.connect().then(() => {
        //statusDisplay.textContent = port.device_.productName+" is connected.";
        statusDisplay.innerHTML = port.device_.productName+" is connected.";
        //connectButton.textContent = 'Disconnect to Arduino(USB)';
        connectButton.value = 'Disconnect to Arduino(USB)';
        
        port.onReceive = data => {       
          let textDecoder = new TextDecoder();
          //response.textContent = textDecoder.decode(data);
          response.innerHTML = textDecoder.decode(data);
		  if (typeof webusb_getdata === 'function') webusb_getdata();
        }
        port.onReceiveError = error => {
          //connectButton.textContent = 'Connect to Arduino(USB)';
          connectButton.value = 'Connect to Arduino(USB)';
          //statusDisplay.textContent = error;
          statusDisplay.innerHTML = error;
        };
      }, error => {
        connectButton.textContent = 'Connect to Arduino(USB)';
        statusDisplay.textContent = error;
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
    
    send.addEventListener('click', onUpdate);

    connectButton.addEventListener('click', function() {
      if (port) {
        port.disconnect();
        connectButton.textContent = 'Connect to Arduino(USB)';
        statusDisplay.textContent = '';
        port = null;
      } else {
        serial.requestPort().then(selectedPort => {
          port = selectedPort;
          connect();
        }).catch(error => {
          statusDisplay.textContent = error;
        });
      }
    });

    serial.getPorts().then(ports => {
      if (ports.length == 0) {
        statusDisplay.textContent = 'No device found.';
      } else {
        statusDisplay.textContent = 'Select your device.';
        //statusDisplay.textContent = 'Connect to '+ports[0].productName;
        //port = ports[0];
        //connect();
      }
    });
  });

})();
