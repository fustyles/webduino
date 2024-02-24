Blockly.JavaScript['gemini_chat_initial'] = function (block) {
  var token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var tokens = Blockly.JavaScript.valueToCode(block, 'tokens', Blockly.JavaScript.ORDER_ATOMIC)||100;   
  var model = block.getFieldValue('model');
  var role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);   

  var code = 'gemini_chat_initial('+token+', "'+model+'", '+tokens+');\nawait delay(1);\ngemini_chat_insert('+role+', "");\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  
  var code = 'gemini_chat_run('+words+');\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_response'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do'); 
  
  var code = 'function gemini_chat_respsonse(gemini_chat_data) {\n  '+statements_do+'\n}\nwindow.gemini_chat_respsonse = gemini_chat_respsonse;\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_response_data'] = function (block) {
  var br = block.getFieldValue('br');
  var code = 'gemini_chat_respsonse_br(gemini_chat_data, \''+br+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gemini_chat_insert'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
	
  var code = 'gemini_chat_insert('+words+', "");\n';
  return code; 
};
Blockly.JavaScript['gemini_chat_clear'] = function (block) {
  var code = 'gemini_chat_clear();\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_content_file'] = function (block) {
  var func = block.getFieldValue('func');
  var code = 'gemini_chat_content_file("'+func+'");\n';
  return code;
};

Blockly.JavaScript['gemini_chat_content_file_remote'] = function (block) {
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var code = 'gemini_chat_content_file_remote('+url+');\n';
  return code;
};
