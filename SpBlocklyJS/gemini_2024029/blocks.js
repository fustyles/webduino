Blockly.Blocks['gemini_text_initial'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_TEXT_SHOW);
  this.appendValueInput("token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_APIKEY_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GEMINI_MODEL_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["gemini-pro","gemini-pro"]  
	  ]), "model"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  }
};

Blockly.Blocks['gemini_text_request'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_TEXT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_TEXT_REQUEST_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  }
};

Blockly.Blocks['gemini_text_response'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_TEXT_SHOW)
	  .appendField(Blockly.Msg.GEMINI_TEXT_RESPONSE_SHOW);
  this.appendStatementInput("do");
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  }
};

Blockly.Blocks['gemini_text_response_data'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_TEXT_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.GEMINI_TEXT_RESPONSE_DATA_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GEMINI_TEXT_RESPONSE_DATA_BR_SHOW)
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
