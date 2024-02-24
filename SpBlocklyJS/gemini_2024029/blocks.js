Blockly.Blocks['gemini_chat_initial'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW);
  this.appendValueInput("token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_APIKEY_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GEMINI_MODEL_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["gemini-pro","gemini-pro"]  
	  ]), "model");
  this.appendValueInput("tokens")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_MAX_TOKENS);
  this.appendValueInput("role")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_ROLE_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  }
};

Blockly.Blocks['gemini_chat_request'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_REQUEST_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  }
};

Blockly.Blocks['gemini_chat_response'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)
	  .appendField(Blockly.Msg.GEMINI_CHAT_RESPONSE_SHOW);
  this.appendStatementInput("do");
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  }
};

Blockly.Blocks['gemini_chat_response_data'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.GEMINI_CHAT_RESPONSE_DATA_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GEMINI_CHAT_RESPONSE_DATA_BR_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["N",""],
			["Y \<br\>","br"],
			["Y \\n","n"]		  
	  ]), "br"); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(30);
  }
};

Blockly.Blocks['gemini_chat_insert'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_INSERT_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  }
};

Blockly.Blocks['gemini_chat_clear'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)
	  .appendField(Blockly.Msg.GEMINI_CHAT_CLEAR_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  }
};
