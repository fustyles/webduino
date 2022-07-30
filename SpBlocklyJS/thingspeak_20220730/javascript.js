Blockly.JavaScript['thingspeak'] = function(block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var value1 = Blockly.JavaScript.valueToCode(block, 'field1', Blockly.JavaScript.ORDER_ATOMIC);
  var value2 = Blockly.JavaScript.valueToCode(block, 'field2', Blockly.JavaScript.ORDER_ATOMIC);
  var value3 = Blockly.JavaScript.valueToCode(block, 'field3', Blockly.JavaScript.ORDER_ATOMIC); 
  var value4 = Blockly.JavaScript.valueToCode(block, 'field4', Blockly.JavaScript.ORDER_ATOMIC);
  var value5 = Blockly.JavaScript.valueToCode(block, 'field5', Blockly.JavaScript.ORDER_ATOMIC);
  var value6 = Blockly.JavaScript.valueToCode(block, 'field6', Blockly.JavaScript.ORDER_ATOMIC);
  var value7 = Blockly.JavaScript.valueToCode(block, 'field7', Blockly.JavaScript.ORDER_ATOMIC);
  var value8 = Blockly.JavaScript.valueToCode(block, 'field8', Blockly.JavaScript.ORDER_ATOMIC);
  
  var data = '"&field1="+'+value1+'+"&field2="+'+value2+'+"&field3="+'+value3+'+"&field4="+'+value4+'+"&field5="+'+value5+'+"&field6="+'+value6+'+"&field7="+'+value7+'+"&field8="+'+value8;
  var code = 'thingspeak_push('+key+','+data+');\n';
  return code;
};