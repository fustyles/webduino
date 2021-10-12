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