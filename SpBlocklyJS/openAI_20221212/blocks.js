Blockly.Blocks['openai_text_initial'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW)  
	  .appendField(Blockly.Msg.OPENAI_TEXT_INITIAL_SHOW);
  this.appendValueInput("token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_TEXT_TOKEN_SHOW);  
  this.appendValueInput("tokens")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_TEXT_TOKENS_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(250);
  }
};

Blockly.Blocks['openai_text_request'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW)  
	  .appendField(Blockly.Msg.OPENAI_TEXT_REQUEST_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_TEXT_WORDS_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(250);
  }
};

Blockly.Blocks['openai_text_response'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(250);
  }
};

Blockly.Blocks['openai_text_response_get'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_GET_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_GET_BR_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["N","0"],
			["Y","1"]	  
	  ]), "br");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(250);
  }
};

Blockly.Blocks['openai_text_response_clear'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_CLEAR_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(250);
  }
};