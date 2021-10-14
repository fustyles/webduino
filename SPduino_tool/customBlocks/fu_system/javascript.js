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

//TIME
Blockly.Arduino['fu_time_delay'] = function(block) {
  var value_ms = Blockly.Arduino.valueToCode(block, 'ms', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'delay(%1);\n'.replace("%1",value_ms);
  return code;
};

Blockly.Arduino['fu_time_delaymicroseconds'] = function(block) {
  var value_us = Blockly.Arduino.valueToCode(block, 'us', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'delayMicroseconds(%1);\n'.replace("%1",value_us);
  return code;
};

Blockly.Arduino['fu_time_micros'] = function(block) {
  var code = 'micros()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_time_millis'] = function(block) {
  var code = 'millis()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

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