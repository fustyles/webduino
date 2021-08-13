Blockly.JavaScript['webusb_button'] = function(block) {
  var value_show = block.getFieldValue('show_');
  var code = 'webusb_button("'+value_show+'");\n';
  return code;
};

Blockly.JavaScript['webusb_state'] = function(block) {
  var code = 'webusb_state()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webusb_send'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'webusb_send('+value_cmd+');\n';
  return code;
};

Blockly.JavaScript['webusb_get'] = function(block) {
  var code = 'webusb_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webusb_clear'] = function(block) { 
  var code = 'webusb_clear();\n';
  return code;
};

