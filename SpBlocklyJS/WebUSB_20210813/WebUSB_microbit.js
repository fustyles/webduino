
/*
 * JavaScript functions for interacting with micro:bit microcontrollers over WebUSB
 * (Only works in Chrome browsers;  Pages must be either HTTPS or local)
 */


const MICROBIT_VENDOR_ID = 0x0d28
const MICROBIT_PRODUCT_ID = 0x0204

/*
   Open and configure a selected device and then start the read-loop
 */
async function uBitOpenDevice(device, callback) {
    const transport = new DAPjs.WebUSB(device)
    const target = new DAPjs.DAPLink(transport)
    let buffer=""                               // Buffer of accumulated messages
    const parser = /([^.:]*)\.*([^:]+|):(.*)/   // Parser to identify time-series format (graph:info or graph.series:info)
        
    target.on(DAPjs.DAPLink.EVENT_SERIAL_DATA, data => {
        buffer += data;
        let firstNewline = buffer.indexOf("\n")
        while(firstNewline>=0) {
            let messageToNewline = buffer.slice(0,firstNewline)
            let now = new Date() 
            // Deal with line
            // If it's a graph/series format, break it into parts
            let parseResult = parser.exec(messageToNewline)
            if(parseResult) {
                let graph = parseResult[1]
                let series = parseResult[2]
                let data = parseResult[3]
                let callbackType = "graph-event"
                // If data is numeric, it's a data message and should be sent as numbers
                if(!isNaN(data)) {
                    callbackType = "graph-data"
                    data = parseFloat(data)
                }
                // Build and send the bundle
                let dataBundle = {
                    time: now,
                    graph: graph, 
                    series: series, 
                    data: data
                }
                callback(callbackType, device, dataBundle)
            } else {
                // Not a graph format.  Send it as a console bundle
                let dataBundle = {time: now, data: messageToNewline}
                callback("console", device, dataBundle)
            }
            buffer = buffer.slice(firstNewline+1)  // Advance to after newline
            firstNewline = buffer.indexOf("\n")    // See if there's more data
        }
    });
    await target.connect();
    await target.setSerialBaudrate(115200)
    //await target.disconnect();
    device.target = target;   // Store the target in the device object (needed for write)
    device.callback = callback // Store the callback for the device
    callback("connected", device, null)    
    target.startSerialRead()
    return Promise.resolve()
}


/**
 * Disconnect from a device 
 * @param {USBDevice} device to disconnect from 
 */
async function uBitDisconnect(device) {
    if(device) {
        try {
            await device.target.stopSerialRead()
        } catch(error) {
            // Failure may mean already stopped
        }
        try {
            await device.target.disconnect()
        } catch(error) {
            // Failure may mean already disconnected
        }
        try {
            await device.close()
        } catch(error) {
            // Failure may mean already closed
        }
        // Call the callback with notification of disconnect
        device.callback("disconnected", device, null)
        device.callback = null
        device.target = null
    }
}

/**
 * Send a string to a specific device
 * @param {USBDevice} device 
 * @param {string} data to send (must not include newlines)
 */
function uBitSend(device, data) {
    if(!device.opened)
        return
    let fullLine = data+'\n'
    device.target.serialWrite(fullLine)
}


/**
 * Callback for micro:bit events
 * 
 
   Event data varies based on the event string:
  <ul>
   <li>"connection failure": null</li>
   <li>"connected": null</li>
   <li>"disconnected": null</li>
   <li>"error": error object</li>
   <li>"console":  { "time":Date object "data":string}</li>
   <li>"graph-data": { "time":Date object "graph":string "series":string "data":number}</li>
   <li>"graph-event": { "time":Date object "graph":string "series":string "data":string}</li>
  </ul>

 * @callback uBitEventCallback
 * @param {string} event ("connection failure", "connected", "disconnected", "error", "console", "graph-data", "graph-event" )
 * @param {USBDevice} device triggering the callback
 * @param {*} data (event-specific data object). See list above for variants
 * 
 */


/**
 * Allow users to select a device to connect to.
 * 
 * @param {uBitEventCallback} callback function for device events
 */
function uBitConnectDevice(callback) { 
    navigator.usb.requestDevice({filters: [{ vendorId: MICROBIT_VENDOR_ID, productId: MICROBIT_PRODUCT_ID }]})
        .then(  d => { if(!d.opened) uBitOpenDevice(d, callback)} )
        .catch( () => callback("connection failure", null, null))
    
}

//stackoverflow.com/questions/5892845/how-to-load-one-javascript-file-from-another
var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'WebUSB_20210813/dap.umd.js';
document.getElementsByTagName('head')[0].appendChild(newScript);

navigator.usb.addEventListener('disconnect', (event) => {
    if("device" in event && "callback" in event.device && event.device.callback!=null && event.device.productName.includes("micro:bit")) {
        uBitDisconnect(event.device)
    }
 })
