Blockly.JavaScript['tello_initial'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'tello_command("http://127.0.0.1:8001/"+'+value_ip + '+"/command");\nawait delay(' + value_delaytime + ', true);\n';
  return code;
};

Blockly.JavaScript['tello_wifi'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_cmd = block.getFieldValue('cmd_');  
  var value_ssid = Blockly.JavaScript.valueToCode(block, 'ssid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pass = Blockly.JavaScript.valueToCode(block, 'pass_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'tello_command("http://127.0.0.1:8001/"+'+value_ip + '+"/"+"' + value_cmd + '"+" "+'+ value_ssid + '+" "+'+ value_pass+');\nawait delay(' + value_delaytime + ', true);\n';
  return code;
};

Blockly.JavaScript['tello_cmd1'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_cmd = block.getFieldValue('cmd_');
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'tello_command("http://127.0.0.1:8001/"+'+value_ip + '+"/"+"' + value_cmd + '");\nawait delay(' + value_delaytime + ', true);\n';
  return code;
};

Blockly.JavaScript['tello_cmd2'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_cmd = block.getFieldValue('cmd_');  
  var value_val = Blockly.JavaScript.valueToCode(block, 'val_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'tello_command("http://127.0.0.1:8001/"+'+value_ip + '+"/"+"' + value_cmd + '"+" "+'+ value_val+');\nawait delay(' + value_delaytime + ', true);\n';
  return code;
};

Blockly.JavaScript['tello_cmd3'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_cmd = block.getFieldValue('cmd_');  
  var value_val = Blockly.JavaScript.valueToCode(block, 'val_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'tello_command("http://127.0.0.1:8001/"+'+value_ip + '+"/"+"' + value_cmd + '"+" "+'+ value_val+');\nawait delay(' + value_delaytime + ', true);\n';
  return code;
};