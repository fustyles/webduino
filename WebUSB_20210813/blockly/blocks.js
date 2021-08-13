Blockly.Blocks['webusb_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_BUTTON_SHOW);
    this.appendDummyInput()  
        .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]
  	]), "show_"); 	    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }  
};

Blockly.Blocks['webusb_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_STATE_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
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
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_WAITTIME_SHOW);
    this.appendValueInput("wait_")
	.setCheck("Number");
    this.setInputsInline(true);	 	  
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
