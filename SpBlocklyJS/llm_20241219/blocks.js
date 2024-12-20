Blockly.Blocks['llm_chat_initial'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.LLM_CHAT_SHOW);
    this.appendValueInput("domain")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LLM_CHAT_DOMAIN_SHOW);
    this.appendValueInput("path")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LLM_CHAT_PATH_SHOW);
    this.appendValueInput("model")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LLM_CHAT_MODEL_SHOW);
	this.appendValueInput("apikey")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LLM_CHAT_KEY_SHOW); 	  
	this.appendValueInput("role")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LLM_CHAT_ROLE_SHOW);  	  
	this.setInputsInline(false);	  
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(230);
  }
};

Blockly.Blocks['llm_chat_request'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LLM_CHAT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LLM_CHAT_REQUEST_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(230);
  }
};

Blockly.Blocks['llm_chat_image_request'] = {
	  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LLM_CHAT_SHOW)	  
	  .appendField(Blockly.Msg.LLM_CHAT_VISION_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LLM_CHAT_REQUEST_SHOW);
  this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LLM_CHAT_IMAGE_URL_SHOW);	  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(230);
  }
};

Blockly.Blocks['llm_chat_insert'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LLM_CHAT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LLM_CHAT_INSERT_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(230);
  }
};

Blockly.Blocks['llm_chat_response'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LLM_CHAT_SHOW)   
	  .appendField(Blockly.Msg.LLM_CHAT_RESPONSE_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(230);
  }
};

Blockly.Blocks['llm_chat_response_get'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LLM_CHAT_SHOW)   
	  .appendField(Blockly.Msg.LLM_CHAT_RESPONSE_GET_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.LLM_CHAT_RESPONSE_GET_BR_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["N",""],
			["Y \<br\>","br"],
			["Y \\n","n"]	  
	  ]), "br");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(230);
  }
};

Blockly.Blocks['llm_chat_response_clear'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LLM_CHAT_SHOW)   
	  .appendField(Blockly.Msg.LLM_CHAT_RESPONSE_CLEAR_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(230);
  }
};

Blockly.Blocks['llm_chat_content_clear'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LLM_CHAT_SHOW)   
	  .appendField(Blockly.Msg.LLM_CHAT_CONTENT_CLEAR_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(230);
  }
};

Blockly.Blocks['llm_chat_content_file'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LLM_CHAT_SHOW)   
	  .appendField(Blockly.Msg.LLM_CHAT_CONTENT_FILE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.LLM_CHAT_CONTENT_FILE_OPEN_SHOW,"open"],
			[Blockly.Msg.LLM_CHAT_CONTENT_FILE_SAVE_SHOW,"save"]	  
	  ]), "func"); 	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(230);
  }
};

Blockly.Blocks['llm_chat_content_file_remote'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LLM_CHAT_SHOW)   
	  .appendField(Blockly.Msg.LLM_CHAT_CONTENT_FILE_REMOTE_SHOW);
  this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LLM_CHAT_CONTENT_FILE_REMOTE_URL_SHOW);	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(230);
  }
};

Blockly.Blocks['llm_chat_content_file_remote_insert'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LLM_CHAT_SHOW)   
	  .appendField(Blockly.Msg.LLM_CHAT_INSERT_SHOW);
  this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LLM_CHAT_CONTENT_FILE_REMOTE_URL_INSERT_SHOW);	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(230);
  }
};
