(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', event => {
    let connectButton = document.querySelector("#connect");
    let statusDisplay = document.querySelector('#status');
    let text = document.querySelector('#text');
    let send = document.querySelector('#send');
    let port;

    function connect() {
      port.connect().then(() => {
        console.log(port.device_);
        statusDisplay.textContent = 'Device is connected.';
        connectButton.textContent = 'Disconnect to Arduino(USB)';

        port.onReceive = data => {
          let textDecoder = new TextDecoder();
          statusDisplay.textContent = "Receive = "+textDecoder.decode(data);
        }
        port.onReceiveError = error => {
          console.error(error);
          statusDisplay.textContent = error;
        };
      }, error => {
        statusDisplay.textContent = error;
      });
    }

    function onUpdate() {
      if (!port) {
        return;
      }

      if (text.value!="") {
        //console.log("send="+text.value);
        const Command = text.value + '\n';
        text.value = "";
        port.send(new TextEncoder("utf-8").encode(Command));
      }
    };

    setInterval(function(){if (text.value!="") onUpdate();}, 10);
    
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
