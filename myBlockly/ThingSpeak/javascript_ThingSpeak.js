Blockly.JavaScript['thingspeak_update'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var field1 = Blockly.JavaScript.valueToCode(block, 'field1', Blockly.JavaScript.ORDER_ATOMIC);
  var field2 = Blockly.JavaScript.valueToCode(block, 'field2', Blockly.JavaScript.ORDER_ATOMIC);
  var field3 = Blockly.JavaScript.valueToCode(block, 'field3', Blockly.JavaScript.ORDER_ATOMIC);
  var field4 = Blockly.JavaScript.valueToCode(block, 'field4', Blockly.JavaScript.ORDER_ATOMIC);
  var field5 = Blockly.JavaScript.valueToCode(block, 'field5', Blockly.JavaScript.ORDER_ATOMIC);
  var field6 = Blockly.JavaScript.valueToCode(block, 'field6', Blockly.JavaScript.ORDER_ATOMIC);
  var field7 = Blockly.JavaScript.valueToCode(block, 'field7', Blockly.JavaScript.ORDER_ATOMIC);
  var field8 = Blockly.JavaScript.valueToCode(block, 'field8', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!key) key="''";
  if (!field1) field1="''";
  if (!field2) field2="''";
  if (!field3) field3="''";
  if (!field4) field4="''";
  if (!field5) field5="''";
  if (!field6) field6="''";
  if (!field7) field7="''";
  if (!field8) field8="''";
  
  var code = 'ThingSpeak_update('+key+','+field1+','+field2+','+field3+','+field4+','+field5+','+field6+','+field7+','+field8+');\n';
  return code; 
};
