Blockly.JavaScript['ifttt'] = function(block) {
  var eventname = Blockly.JavaScript.valueToCode(block, 'eventname', Blockly.JavaScript.ORDER_ATOMIC);
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  var value3 = Blockly.JavaScript.valueToCode(block, 'value3', Blockly.JavaScript.ORDER_ATOMIC);  

  var data = "{'value1':"+value1+",'value2':"+value2+",'value3':"+value3+"}";
  var code = 'ifttt_push('+eventname+','+key+','+data+');\n';
  return code;
};
