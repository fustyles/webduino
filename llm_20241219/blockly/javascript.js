Blockly.JavaScript['llm_chat_initial'] = function (block) {
  var domain = Blockly.JavaScript.valueToCode(block, 'domain', Blockly.JavaScript.ORDER_ATOMIC); 
  var path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);   
  var model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC); 
  var key = Blockly.JavaScript.valueToCode(block, 'apikey', Blockly.JavaScript.ORDER_ATOMIC);   
  var role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);  
  
  var code = 'llm_chat_initial('+domain+', '+path+', '+model+', '+key+', '+role+');\n';
  return code; 
};

Blockly.JavaScript['llm_chat_set'] = function (block) {
  var property = block.getFieldValue('property');
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  
  var code = 'await llm_chat_set("'+property+'", '+val+');\n';
  return code; 
};

Blockly.JavaScript['llm_chat_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
	
  var code = 'llm_chat_request('+words+');\n';
  return code; 
};

Blockly.JavaScript['llm_chat_image_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var code = 'llm_chat_image_request('+words+', '+url+');\n';
  return code; 
};

Blockly.JavaScript['llm_chat_insert'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
	
  var code = 'llm_chat_insert('+words+');\n';
  return code; 
};

Blockly.JavaScript['llm_chat_response'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'llm_chat_response = async function() {\n' + statements_do + '\n};\n';
  return code;
};

Blockly.JavaScript['llm_chat_response_get'] = function (block) {
  var br = block.getFieldValue('br');
  var code = 'llm_chat_response_get(\''+br+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['llm_chat_response_clear'] = function (block) {
  var code = 'llm_chat_response_clear();\n';
  return code;
};

Blockly.JavaScript['llm_chat_content_clear'] = function (block) {
  var code = 'llm_chat_content_clear();\n';
  return code;
};

Blockly.JavaScript['llm_chat_content_file'] = function (block) {
  var func = block.getFieldValue('func');
  var code = 'llm_chat_content_file("'+func+'");\n';
  return code;
};

Blockly.JavaScript['llm_chat_content_file_remote'] = function (block) {
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var code = 'llm_chat_content_file_remote('+url+');\n';
  return code;
};

Blockly.JavaScript['llm_chat_content_file_remote_insert'] = function (block) {
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var code = 'llm_chat_content_file_remote_insert('+url+');\n';
  return code;
};
