Blockly.Blocks['webusb_link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_LINK_SHOW);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }  
};

Blockly.Blocks['webusb_send'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_SEND_SHOW);
	this.appendValueInput("cmd_")
		.setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }  
};

Blockly.Blocks['webusb_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_GET_SHOW);
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['webusb_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_CLEAR_SHOW);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }  
};
