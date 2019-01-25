Blockly.JavaScript['ifttt_open'] = function (block) {
  var ifttt_event = Blockly.JavaScript.valueToCode(block, 'ifttt_event', Blockly.JavaScript.ORDER_ATOMIC);  
  var ifttt_key = Blockly.JavaScript.valueToCode(block, 'ifttt_key', Blockly.JavaScript.ORDER_ATOMIC);
  var ifttt_value1 = Blockly.JavaScript.valueToCode(block, 'ifttt_value1', Blockly.JavaScript.ORDER_ATOMIC);
  var ifttt_value2 = Blockly.JavaScript.valueToCode(block, 'ifttt_value2', Blockly.JavaScript.ORDER_ATOMIC);
  var ifttt_value3 = Blockly.JavaScript.valueToCode(block, 'ifttt_value3', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!ifttt_event) ifttt_event='""';
  if (!ifttt_key) ifttt_key='""';
  if (!ifttt_value1) ifttt_value1='""';
  if (!ifttt_value2) ifttt_value2='""';
  if (!ifttt_value3) ifttt_value3='""';
  
  var code = 'ifttt('+ifttt_event+','+ifttt_key+','+ifttt_value1+','+ifttt_value2+','+ifttt_value3+');\n';
  return code; 
};
