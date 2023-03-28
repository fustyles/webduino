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
  var br = block.getFieldValue('br');
  var code = 'openai_text_response_get(\''+br+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['openai_text_response_clear'] = function (block) {
  var code = 'openai_text_response_clear();\n';
  return code;
};

Blockly.JavaScript['openai_image_initial'] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC); 

  var code = 'openai_image_initial('+key+');\n';
  return code; 
};

Blockly.JavaScript['openai_image_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var size = block.getFieldValue('size');
  
  var code = 'openai_image_request('+words+',"'+size+'");\n';
  return code; 
};

Blockly.JavaScript['openai_image_response'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'openai_image_response = async function() {\n' + statements_do + '\n};\n';
  return code;
};

Blockly.JavaScript['openai_image_response_get'] = function (block) {
  var code = 'openai_image_response_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['openai_image_response_clear'] = function (block) {
  var code = 'openai_image_response_clear();\n';
  return code;
};

Blockly.JavaScript['openai_chat_initial'] = function (block) {
  var token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC); 
  var role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);   
  var model = block.getFieldValue('model');

  var code = 'openai_chat_initial('+token+', '+role+', "'+model+'");\n';
  return code; 
};

Blockly.JavaScript['openai_chat_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
	
  var code = 'openai_chat_request('+words+');\n';
  return code; 
};

Blockly.JavaScript['openai_chat_insert'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
	
  var code = 'openai_chat_insert('+words+');\n';
  return code; 
};

Blockly.JavaScript['openai_chat_response'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'openai_chat_response = async function() {\n' + statements_do + '\n};\n';
  return code;
};

Blockly.JavaScript['openai_chat_response_get'] = function (block) {
  var br = block.getFieldValue('br');
  var code = 'openai_chat_response_get(\''+br+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['openai_chat_response_clear'] = function (block) {
  var code = 'openai_chat_response_clear();\n';
  return code;
};

Blockly.JavaScript['openai_chat_content_clear'] = function (block) {
  var code = 'openai_chat_content_clear();\n';
  return code;
};

Blockly.JavaScript['openai_chat_content_file'] = function (block) {
  var func = block.getFieldValue('func');
  var code = 'openai_chat_content_file("'+func+'");\n';
  return code;
};

Blockly.JavaScript['openai_chat_content_file_remote'] = function (block) {
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var code = 'openai_chat_content_file_remote('+url+');\n';
  return code;
};
