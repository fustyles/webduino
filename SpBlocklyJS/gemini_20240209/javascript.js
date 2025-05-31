Blockly.JavaScript['gemini_chat_initial'] = function (block) {
  var token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var tokens = Blockly.JavaScript.valueToCode(block, 'tokens', Blockly.JavaScript.ORDER_ATOMIC)||100;   
  var temperature = block.getFieldValue('temperature');
  var model = block.getFieldValue('model');
  var role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);   

  var code = 'gemini_chat_initial('+token+', "'+model+'", '+tokens+', '+temperature+', '+role+');\nawait delay(2);\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_set'] = function (block) {
  var property = block.getFieldValue('property');
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  
  var code = 'await gemini_chat_set("'+property+'", '+val+');\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  
  var code = 'await gemini_chat_run('+words+');\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_image_request'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var code = 'await gemini_chat_image_request('+words+', '+url+');\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_response'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do'); 
  
  var code = 'async function gemini_chat_response(gemini_chat_data) {\n  '+statements_do+'\n}\nwindow.gemini_chat_response = gemini_chat_response;\n';
  return code; 
};

Blockly.JavaScript['gemini_chat_response_data'] = function (block) {
  var br = block.getFieldValue('br');
  var code = 'gemini_chat_response_br(gemini_chat_data, \''+br+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gemini_chat_insert'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
	
  var code = 'gemini_chat_insert('+words+', "ok");\n';
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

Blockly.JavaScript['gemini_chat_content_file_remote_insert'] = function (block) {
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var code = 'gemini_chat_content_file_remote_insert('+url+');\n';
  return code;
};

Blockly.JavaScript['gemini_chat_content_file_remote_read'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var type = block.getFieldValue('type');  
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var code = 'await gemini_chat_file_request("'+type+'", '+url+', '+words+');\n';
  return code;
};

Blockly.JavaScript['gemini_generate_image'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	

  var code = 'await gemini_generate_image_request('+words+');\n';
  return code; 
};

Blockly.JavaScript['gemini_generate_image_mix'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
  
  var code = 'await gemini_generate_image_mix_request('+words+', '+url+');\n';
  return code; 
};

Blockly.JavaScript['gemini_search'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  
  var code = 'await gemini_search_request('+words+');\n';
  return code; 
};

Blockly.JavaScript['gemini_youtube'] = function (block) {
  var words = Blockly.JavaScript.valueToCode(block, 'words', Blockly.JavaScript.ORDER_ATOMIC)||"";	
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
	
  var code = 'await gemini_youtube_request('+words+', '+url+');\n';
  return code; 
};
