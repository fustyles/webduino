//SERIAL
Blockly.Arduino['fu_serial_begin'] = function(block) {
  var value_baudrate = Blockly.Arduino.valueToCode(block, 'baudrate', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['Serial.begin'] = 'Serial.begin(%1);'.replace("%1", value_baudrate);
  return '';
};

Blockly.Arduino['fu_serial_begin_config'] = function(block) {
  var value_baudrate = Blockly.Arduino.valueToCode(block, 'baudrate', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_config = block.getFieldValue('config');
  Blockly.Arduino.setups_['Serial.begin'] = 'Serial.begin(%1, %2);'.replace("%1", value_baudrate).replace("%2", dropdown_config);
  return '';
};

Blockly.Arduino['fu_serial_ready'] = function(block) {
  var code = 'while (!Serial) {}\n';
  return code;
};

Blockly.Arduino['fu_serial_end'] = function(block) {
  var code = 'Serial.end();\n';
  return code;
};

Blockly.Arduino['fu_serial_print'] = function(block) {
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Serial.print(%1);\n'.replace("%1", value_data);
  return code;
};

Blockly.Arduino['fu_serial_print_format'] = function(block) {
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_format = block.getFieldValue('format');
  var code = 'Serial.print(%1, %2);\n'.replace("%1", value_data).replace("%2", dropdown_format);
  return code;
};

Blockly.Arduino['fu_serial_println'] = function(block) {
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Serial.println(%1);\n'.replace("%1", value_data);
  return code;
};

Blockly.Arduino['fu_serial_println_format'] = function(block) {
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_format = block.getFieldValue('format');
  var code = 'Serial.println(%1, %2);\n'.replace("%1", value_data).replace("%2", dropdown_format);
  return code;
};

Blockly.Arduino['fu_serial_write'] = function(block) {
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Serial.write(%1);\n'.replace("%1", value_data);
  return code;
};

Blockly.Arduino['fu_serial_write_format'] = function(block) {
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_format = block.getFieldValue('format');
  var code = 'Serial.write(%1, %2);\n'.replace("%1", value_data).replace("%2", dropdown_format);
  return code;
};