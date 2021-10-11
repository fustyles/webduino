Blockly.Arduino['fu_digitalWrite'] = function(block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_\n';
  //Blockly.Arduino.setups_top_['name'] = '//setups_top_\n';
  //Blockly.Arduino.setups_bottom_['name'] = '//setups_bottom_';
  //Blockly.Arduino.loops_top_['name'] = '//loops_top_\n';
  //Blockly.Arduino.loops_bottom_['name'] = '//loops_bottom_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalWrite(%1, %2);\n'.replace('%1',value_pin).replace('%2',value_val);
  return code;
};