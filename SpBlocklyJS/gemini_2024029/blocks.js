Blockly.Blocks['gemini_text_initial'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_TEXT_SHOW);
  this.appendValueInput("key")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_APIKEY_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GEMINI_MODEL_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["gemini-pro","gemini-pro"]  
	  ]), "model"); 
  this.appendStatementInput("do")
      .appendField(Blockly.Msg.GEMINI_TEXT_DO_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
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
  this.setOutput(true, null); 
  this.setColour(150);
  }
};
