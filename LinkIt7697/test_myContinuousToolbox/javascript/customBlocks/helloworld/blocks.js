'use strict';

Blockly.Blocks['test1'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["HELLOWORLD_MSG"]);
	this.appendValueInput("message")
		.setCheck("String");
	this.setInputsInline(!0);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);		  
	this.setColour(Blockly.Msg["HELLOWORLD_HUE"]);
  }
};

Blockly.Blocks['test2'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["HELLOWORLD_GET"]);
	this.setInputsInline(!0);
	this.setOutput(!0);	  
	this.setColour(Blockly.Msg["HELLOWORLD_HUE"]);
  }
};

Blockly.Blocks['test3'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["HELLOWORLD_DELAY"]);
	this.appendValueInput("seconds")
		.setCheck("Number");		
	this.setInputsInline(!0);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);		  
	this.setColour(Blockly.Msg["HELLOWORLD_HUE"]);
  }
};