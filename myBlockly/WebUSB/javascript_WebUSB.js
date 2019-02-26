Blockly.JavaScript['webusb_system'] = function(block) {
  var value_cmd = block.getFieldValue('cmd');
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "webusb_sendCommand('"+value_cmd+"',"+value_P1+","+value_P2+",'','','','','','','');\nawait delay(0.1);\n";
  return code;
};

Blockly.JavaScript['webusb_custom'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_P1.toLowerCase().indexOf("0x")!=-1) {
    if ((value_P1.indexOf("'")==0)&&(value_P1.lastIndexOf("'")==value_P1.length-1))
    value_P1 = value_P1.substring(1,value_P1.length-1);
    if ((value_P1.indexOf("(")==0)&&(value_P1.lastIndexOf(")")==value_P1.length-1))
      value_P1 = value_P1.substring(1,value_P1.length-1);
    value_P1=parseInt(value_P1, 16);
  }
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P3 = Blockly.JavaScript.valueToCode(block, 'P3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P4 = Blockly.JavaScript.valueToCode(block, 'P4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P5 = Blockly.JavaScript.valueToCode(block, 'P5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P6 = Blockly.JavaScript.valueToCode(block, 'P6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P7 = Blockly.JavaScript.valueToCode(block, 'P7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P8 = Blockly.JavaScript.valueToCode(block, 'P8', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P9 = Blockly.JavaScript.valueToCode(block, 'P9', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "webusb_sendCommand("+value_cmd+","+value_P1+","+value_P2+","+value_P3+","+value_P4+","+value_P5+","+value_P6+","+value_P7+","+value_P8+","+value_P9+");\nawait delay(0.1);\n";
  return code;
};

Blockly.JavaScript['webusb_car'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P3 = Blockly.JavaScript.valueToCode(block, 'P3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P4 = Blockly.JavaScript.valueToCode(block, 'P4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P5 = Blockly.JavaScript.valueToCode(block, 'P5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P6 = Blockly.JavaScript.valueToCode(block, 'P6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P7 = Blockly.JavaScript.valueToCode(block, 'P7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P8 = Blockly.JavaScript.valueToCode(block, 'P8', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_P8=="FORWARD") value_P8="F";
  if (value_P8=="BACKWARD") value_P8="B";
  if (value_P8=="TURNLEFT") value_P8="L";
  if (value_P8=="TURNRIGHT") value_P8="R";
  if (value_P8=="STOP") value_P8="S";
  var code = "webusb_sendCommand("+value_cmd+","+value_P1+","+value_P2+","+value_P3+","+value_P4+","+value_P5+","+value_P6+","+value_P7+","+value_P8+",'');\nawait delay(0.1);\n";
  return code;
};

Blockly.JavaScript['webusb_car_state'] = function(block) {
  var value_state = block.getFieldValue('state');
  var code = "'"+value_state+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webusb_getresponse'] = function(block) {
  var code = "webusb_getResponse()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webusb_cmd'] = function(block) {
  var value_cmd = block.getFieldValue('cmd');
  var code = "'"+value_cmd+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webusb_clearresponse'] = function(block) {
  var code = "webusb_clearData();\n";
  return code;
};

Blockly.JavaScript['webusb_custom_cmd'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "webusb_sendCustomCommand("+value_cmd+");\nawait delay(0.05);\n";
  return code;
};
