//IO
Blockly.Arduino['fu_io_read'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var code = dropdown_type.replace("%1",value_pin);
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_io_pinmode'] = function(block) {
  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var code = 'pinMode(%1, %2);\n'.replace("%1",value_pin).replace("%2",dropdown_type);
  return code;
};

Blockly.Arduino['fu_io_write'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var code = dropdown_type.replace("%1",value_pin).replace("%2",value_value);
  return code;
};