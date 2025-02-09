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

Blockly.JavaScript['dvcbot_response_data'] = function (block) {
  var br = block.getFieldValue('br');
  var code = 'dvcbot_response_br(dvcbot_data, \''+br+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dvcbot_result1'] = function (block) {
  var userMessage = Blockly.JavaScript.valueToCode(block, 'userMessage', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'await dvcbot_result('+userMessage+', "s");\n';
  return code;
};

Blockly.JavaScript['dvcbot_response1'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do'); 
  
  var code = 'async function dvcbot_response_get(dvcbot_data) {\n  '+statements_do+'\n}\nwindow.dvcbot_response_get = dvcbot_response_get;\n';
  return code; 
};

Blockly.JavaScript['dvcbot_result'] = function (block) {
  var userMessage = Blockly.JavaScript.valueToCode(block, 'userMessage', Blockly.JavaScript.ORDER_ATOMIC); 
  var br = block.getFieldValue('br');
  var code = 'await dvcbot_result('+userMessage+', \''+br+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
