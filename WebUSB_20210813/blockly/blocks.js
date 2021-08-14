Blockly.Blocks['webusb_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_ELEMENT_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBUSB_CONNECT_SHOW,"connect"],
		[Blockly.Msg.WEBUSB_STATUS_SHOW,"status"]
  	]), "id_");	  
    this.appendDummyInput()  
	.appendField(Blockly.Msg.WEBUSB_SHOW_SHOW)	  
        .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]
  	]), "show_"); 	    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }  
};

Blockly.Blocks['webusb_button_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_ELEMENT_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBUSB_CONNECT_SHOW,"connect"],
		[Blockly.Msg.WEBUSB_STATUS_SHOW,"status"]
  	]), "id_");	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBUSB_BUTTON_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBUSB_BUTTON_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
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
    this.setColour(60);
    this.setHelpUrl("https://github.com/fustyles/webduino/tree/master/WebUSB_20210813/WebUSB_Leonardo_Webduino");
  }  
};

Blockly.Blocks['webusb_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_GET_SHOW);
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
    this.setColour(60);
  }  
};
