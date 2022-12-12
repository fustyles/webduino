Blockly.JavaScript['openai_text_initial'] = function (block) {
  var token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC); 
  var tokens = Blockly.JavaScript.valueToCode(block, 'tokens', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'openai_text_initial('+token+', '+tokens+');\n';
  return code; 
};

Blockly.JavaScript['openai_text_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
	
  var code = 'openai_text_request('+words+');\n';
  return code; 
};

Blockly.JavaScript['openai_text_response'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'openai_text_response = async function() {\n' + statements_do + '\n};\n';
  return code;
};

Blockly.JavaScript['openai_text_response_get'] = function (block) {
  var code = 'openai_text_response_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['openai_text_response_clear'] = function (block) {
  var code = 'openai_text_response_clear();\n';
  return code;
};