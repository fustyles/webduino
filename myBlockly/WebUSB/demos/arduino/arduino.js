(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', event => {
    let connectButton = document.querySelector("#connect");
    let statusDisplay = document.querySelector('#status');
    let response = document.querySelector('#response');
    let command = document.querySelector('#command');
    let send = document.querySelector('#send');
    let port;

    function connect() {
      port.connect().then(() => {
        statusDisplay.value = port.device_.productName+" is connected.";
        connectButton.value = 'Disconnect to Arduino(USB)';
        
        port.onReceive = data => {       
          let textDecoder = new TextDecoder();
          response.value = textDecoder.decode(data);
        }
        port.onReceiveError = error => {
          console.error(error);
          statusDisplay.value = error;
        };
      }, error => {
        statusDisplay.value = error;
      });
    }

    function onUpdate() {
      if (!port) {
        return;
      }

      if (command.value!="") {
        //console.log("send="+command.textContent);
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
        connectButton.value = 'Connect to Arduino(USB)';
        statusDisplay.value = '';
        port = null;
      } else {
        serial.requestPort().then(selectedPort => {
          port = selectedPort;
          connect();
        }).catch(error => {
          statusDisplay.value = error;
        });
      }
    });

    serial.getPorts().then(ports => {
      if (ports.length == 0) {
        statusDisplay.value = 'No device found.';
      } else {
        statusDisplay.value = 'Select your device.';
        //statusDisplay.value = 'Connect to '+ports[0].productName;
        //port = ports[0];
        //connect();
      }
    });
  });

})();
