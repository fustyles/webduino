Blockly.JavaScript['dvcbot_initial'] = function (block) {
  var apiKey = Blockly.JavaScript.valueToCode(block, 'apiKey', Blockly.JavaScript.ORDER_ATOMIC); 
  var assistantId = Blockly.JavaScript.valueToCode(block, 'assistantId', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'dvcbot_initial('+apiKey+', '+assistantId+');\n';
  return code; 
};

Blockly.JavaScript['dvcbot_response'] = function (block) {
  var code = 'dvcbot_result_plugin()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dvcbot_result'] = function (block) {
  var userMessage = Blockly.JavaScript.valueToCode(block, 'userMessage', Blockly.JavaScript.ORDER_ATOMIC); 
  var br = block.getFieldValue('br');
  var code = 'await dvcbot_result('+userMessage+', \''+br+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
