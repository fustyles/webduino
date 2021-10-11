Blockly.Blocks["fu_digitalWrite"] = {
 init: function() {
	this.appendValueInput("pin")
		.setCheck("Number")
		.appendField("digitalWrite")
		.appendField("pin");
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField("value");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(200);
  }
};