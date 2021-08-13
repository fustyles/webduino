Blockly.JavaScript['webusb_wait'] = function(block) {
  var code = 'weusb_wait()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webusb_send'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'webusb_send('+value_cmd+');\n';
  return code;
};

Blockly.JavaScript['webusb_get'] = function(block) {
  var code = 'weusb_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webusb_clear'] = function(block) { 
  var code = 'webusb_clear();\n';
  return code;
};

