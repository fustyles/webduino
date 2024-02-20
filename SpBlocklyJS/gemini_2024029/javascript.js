Blockly.JavaScript['gemini_text_initial'] = function (block) {
  var token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC); 
  var model = block.getFieldValue('model');

  var code = 'gemini_text_initial('+token+', "'+model+'");\n';
  return code; 
};

Blockly.JavaScript['gemini_text_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  
  var code = 'gemini_run('+words+');\n';
  return code; 
};

Blockly.JavaScript['gemini_text_response'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do'); 
  
  var code = 'function gemini_text_respsonse(gemini_text_data) {\n  '+statements_do+'\n}\nwindow.gemini_text_respsonse = gemini_text_respsonse;';
  return code; 
};

Blockly.JavaScript['gemini_text_response_data'] = function (block) {
  var br = block.getFieldValue('br');
  var code = 'gemini_text_respsonse_br(gemini_text_data, \''+br+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
