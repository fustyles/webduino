Blockly.JavaScript['tello_initial'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fetch("http://127.0.0.1:8001/"+'+value_ip + '+"/command");\n';
  return code;
};

Blockly.JavaScript['tello_wifi'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_cmd = block.getFieldValue('cmd_');  
  var value_ssid = Blockly.JavaScript.valueToCode(block, 'ssid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pass = Blockly.JavaScript.valueToCode(block, 'pass_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fetch("http://127.0.0.1:8001/"+'+value_ip + '+"/"+"' + value_cmd + '"+" "+'+ value_ssid + '+" "+'+ value_pass+');\n';
  return code;
};

Blockly.JavaScript['tello_iframe1'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_cmd = block.getFieldValue('cmd_');
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fetch("http://127.0.0.1:8001/"+'+value_ip + '+"/"+"' + value_cmd + '");\n';
  return code;
};

Blockly.JavaScript['tello_iframe2'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_cmd = block.getFieldValue('cmd_');  
  var value_val = Blockly.JavaScript.valueToCode(block, 'val_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fetch("http://127.0.0.1:8001/"+'+value_ip + '+"/"+"' + value_cmd + '"+" "+'+ value_val+');\n';
  return code;
};

Blockly.JavaScript['tello_iframe3'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mid = Blockly.JavaScript.valueToCode(block, 'mid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fetch("http://127.0.0.1:8001/"+'+value_ip + '+"/go"+" "+'+ value_x + '+" "+'+ value_y + '+" "+'+ value_z + '+" "+'+ value_speed + '+" "+'+ value_mid + ');\n';
  return code;
};

Blockly.JavaScript['tello_iframe4'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z1 = Blockly.JavaScript.valueToCode(block, 'z1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z2 = Blockly.JavaScript.valueToCode(block, 'z2_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mid = Blockly.JavaScript.valueToCode(block, 'mid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fetch("http://127.0.0.1:8001/"+'+value_ip + '+"/curve"+" "+'+ value_x1 + '+" "+'+ value_y1 + '+" "+'+ value_z1 + '+" "+'+ value_x2 + '+" "+'+ value_y2 + '+" "+'+ value_z2 + '+" "+'+ value_speed + '+" "+'+ value_mid + ');\n';
  return code;
};

Blockly.JavaScript['tello_iframe5'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yaw = Blockly.JavaScript.valueToCode(block, 'yaw_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mid1 = Blockly.JavaScript.valueToCode(block, 'mid1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_mid2 = Blockly.JavaScript.valueToCode(block, 'mid2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fetch("http://127.0.0.1:8001/"+'+value_ip + '+"/jump"+" "+'+ value_x + '+" "+'+ value_y + '+" "+'+ value_z + '+" "+'+ value_speed + '+" "+'+ value_yaw + '+" "+'+ value_mid1 + '+" "+'+ value_mid2 + ');\n';
  return code;
};

Blockly.JavaScript['tello_iframe6'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_a = Blockly.JavaScript.valueToCode(block, 'a_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_c = Blockly.JavaScript.valueToCode(block, 'c_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_d = Blockly.JavaScript.valueToCode(block, 'd_', Blockly.JavaScript.ORDER_ATOMIC);	
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'fetch("http://127.0.0.1:8001/"+'+value_ip + '+"/rc"+" "+'+ value_a + '+" "+'+ value_b + '+" "+'+ value_c + '+" "+'+ value_d + ');\n';
  
  return code;
};