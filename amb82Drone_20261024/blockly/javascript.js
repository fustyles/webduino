Blockly.JavaScript['Amb82Drone_object'] = function(block) {
  var type = block.getFieldValue('type');    
  var path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
  if (type=="tcp")
      Blockly.JavaScript.definitions_['Amb82Drone_url'] = "var drone_requestUrl = "+path+";\n";
  else if (type=="mqtt")
      Blockly.JavaScript.definitions_['Amb82Drone_publishtopic'] = "var drone_publishtopic = "+path+";\n";

  code = "";
  return code;
};

Blockly.JavaScript['Amb82Drone_basic'] = function(block) {
  var type = block.getFieldValue('type');
  var command = block.getFieldValue('command');
  var code = "";
  if (type=="bluetooth")
      code = "webbluetooth_sendText('"+command+"');\n";
  else if (type=="tcp")
      code = "fetch(([drone_requestUrl, encodeURIComponent('"+command+"'), '?', mathRandomInt(1, 1000000)].join(''))).then(function(response) {return response.text();}).then(function(data) {fetchData_ = data;}).catch((error) => {console.log(`Error: ${error}`);});\n";
  else if (type=="mqtt")
      code = "mqtt_client.publish(drone_publishtopic, '"+command+"');\n";
  return code;
};

Blockly.JavaScript['Amb82Drone_move'] = function(block) {
  var type = block.getFieldValue('type');
  var command = block.getFieldValue('command');
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
        
  var val = 1500;
  speed = Math.min(Math.max(speed, 0), 500);
  
  if (command=="forward")
      command = "SRT15001500"+Math.floor(val+speed)+"1500#";
  else if (command=="backward") 
      command = "SRT15001500"+Math.floor(val-speed)+"1500#";
  else if (command=="left")  
      command = "SRT150015001500"+Math.floor(val-speed)+"#";
  else if (command=="right")  
      command = "SRT150015001500"+Math.floor(val+speed)+"#";
  else if (command=="up")  
      command = "SRT1500"+Math.floor(val+speed)+"15001500#";
  else if (command=="down")  
      command = "SRT1500"+Math.floor(val-speed)+"15001500#";
  else if (command=="turnleft") 
      command = "SRT"+Math.floor(val-speed)+"150015001500#";  
  else if (command=="turnright")  
      command = "SRT"+Math.floor(val+speed)+"150015001500#";
  
  var code = "";
  if (type=="bluetooth")
      code = "webbluetooth_sendText("+command+");\n";
  else if (type=="tcp")
      code = "fetch(([drone_requestUrl, encodeURIComponent("+command+"), '?', mathRandomInt(1, 1000000)].join(''))).then(function(response) {return response.text();}).then(function(data) {fetchData_ = data;}).catch((error) => {console.log(`Error: ${error}`);});\n";
  else if (type=="mqtt")
      code = "mqtt_client.publish(drone_publishtopic, "+command+");\n"; 
  return code;
};

Blockly.JavaScript['Amb82Drone_landing'] = function(block) {
  var type = block.getFieldValue('type');
  var seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "";
  if (type=="bluetooth") {
      code = "webbluetooth_sendText('SRT1500140015001500#');\n"+
             "delay("+seconds+");\n"+
             "webbluetooth_sendText('LED000000000000FFFA#');\n";
  } else if (type=="tcp") {
      code = "fetch(([drone_requestUrl, encodeURIComponent('SRT1500140015001500#'), '?', mathRandomInt(1, 1000000)].join(''))).then(function(response) {return response.text();}).then(function(data) {fetchData_ = data;}).catch((error) => {console.log(`Error: ${error}`);});\n"+
             "delay("+seconds+");\n"+
             "fetch(([drone_requestUrl, encodeURIComponent('LED000000000000FFFA#'), '?', mathRandomInt(1, 1000000)].join(''))).then(function(response) {return response.text();}).then(function(data) {fetchData_ = data;}).catch((error) => {console.log(`Error: ${error}`);});\n";
  } else if (type=="mqtt") {
      code = "mqtt_client.publish(drone_publishtopic, 'SRT1500140015001500#');\n"+
             "delay("+seconds+");\n"+
             "mqtt_client.publish(drone_publishtopic, 'LED000000000000FFFA#');\n";
  }
  return code;
};

Blockly.JavaScript['Amb82Drone_move_distance'] = function(block) {
  var type = block.getFieldValue('type');
  var command = block.getFieldValue('command');
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var ratio = Blockly.JavaScript.valueToCode(block, 'ratio', Blockly.JavaScript.ORDER_ATOMIC);
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
  
  var val = 1500;
  speed = Math.min(Math.max(speed, 0), 500);
  
  if (command=="forward")
      command = "SRT15001500"+Math.floor(val+speed)+"1500#";
  else if (command=="backward") 
      command = "SRT15001500"+Math.floor(val-speed)+"1500#";
  else if (command=="left")  
      command = "SRT150015001500"+Math.floor(val-speed)+"#";
  else if (command=="right")  
      command = "SRT150015001500"+Math.floor(val+speed)+"#";
  else if (command=="up")  
      command = "SRT1500"+Math.floor(val+speed)+"15001500#";
  else if (command=="down")  
      command = "SRT1500"+Math.floor(val-speed)+"15001500#";
  else if (command=="turnleft") 
      command = "SRT"+Math.floor(val-speed)+"150015001500#";  
  else if (command=="turnright")  
      command = "SRT"+Math.floor(val+speed)+"150015001500#";
  
  var code = "";
  if (type=="bluetooth") {
      code = "webbluetooth_sendText("+command+");\n"+
             "delay("+(distance/ratio)+");\n"+
             "webbluetooth_sendText('SRT1500150015001500#');\n";
  } else if (type=="tcp") {
      code = "fetch(([drone_requestUrl, encodeURIComponent("+command+"), '?', mathRandomInt(1, 1000000)].join(''))).then(function(response) {return response.text();}).then(function(data) {fetchData_ = data;}).catch((error) => {console.log(`Error: ${error}`);});\n"+
             "delay("+(distance/ratio)+");\n"+
             "fetch(([drone_requestUrl, encodeURIComponent('SRT1500150015001500#'), '?', mathRandomInt(1, 1000000)].join(''))).then(function(response) {return response.text();}).then(function(data) {fetchData_ = data;}).catch((error) => {console.log(`Error: ${error}`);});\n";
  } else if (type=="mqtt") {
      code = "mqtt_client.publish(drone_publishtopic, "+command+");\n"+
             "delay("+(distance/ratio)+");\n"+
             "mqtt_client.publish(drone_publishtopic, 'SRT1500150015001500#');\n"; 
  }
  return code;
};
