Blockly.Blocks['dvcbot_initial'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.DVCBOT_SHOW)  
	  .appendField(Blockly.Msg.DVCBOT_INITIAL_SHOW);
  this.appendValueInput("apiKey")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DVCBOT_APIKEY_SHOW);  
  this.appendValueInput("assistantId")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DVCBOT_ASSISTANTID_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(190);
  }
};

Blockly.Blocks['dvcbot_response'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.DVCBOT_SHOW)   
	  .appendField(Blockly.Msg.DVCBOT_RESPONSE_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(190);
  }
};

Blockly.Blocks['dvcbot_result'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.DVCBOT_SHOW)   
	  .appendField(Blockly.Msg.DVCBOT_RESULT_SHOW);
  this.appendValueInput("userMessage")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DVCBOT_USERMESSAGE_SHOW); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DVCBOT_RESULT_GET_BR_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["N","no"],
			["Y \<br\>","br"],
			["Y \\n",""]		  
	  ]), "br");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(190);
  }
};
