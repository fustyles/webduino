Blockly.Blocks['webusb_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_ELEMENT_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBUSB_CONNECT_SHOW,"gamebutton_webusb_open"],
		[Blockly.Msg.WEBUSB_CLOSE_SHOW,"gamebutton_webusb_close"],
		[Blockly.Msg.WEBUSB_STATUS_SHOW,"gamespan_response"]
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
    this.setColour(320);
  }  
};

Blockly.Blocks['webusb_button_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_ELEMENT_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBUSB_CONNECT_SHOW,"gamebutton_webusb_open"],
		[Blockly.Msg.WEBUSB_CLOSE_SHOW,"gamebutton_webusb_close"],
		[Blockly.Msg.WEBUSB_STATUS_SHOW,"gamespan_response"]
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
  this.setColour(320);
  }
};

Blockly.Blocks['webusb_button_onclick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_ELEMENT_ONCLICK_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBUSB_CONNECT_SHOW,"open"],
		[Blockly.Msg.WEBUSB_CLOSE_SHOW,"close"]
  	]), "button_");	  
  this.appendValueInput("id_")
	  .appendField(Blockly.Msg.WEBUSB_ELEMENT_ID_SHOW)
      .setCheck("String");    	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(320);
  }
};

Blockly.Blocks['webusb_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_STATE_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(320);
  }  
};

Blockly.Blocks['webusb_send'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_SENDTEXT_SHOW);
	this.appendValueInput("cmd_")
		.setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(320);
    this.setHelpUrl("https://github.com/fustyles/webduino/tree/master/WebUSB_20210813/WebUSB_Leonardo_Webduino");
  }  
};

Blockly.Blocks['webusb_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_GET_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(320);
  }  
};

Blockly.Blocks['webusb_getstate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_GETSTATE_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(320);
  }  
};

Blockly.Blocks['webusb_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_CLEAR_SHOW);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(320);
  }  
};


Blockly.Blocks['webusb_getid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_GETID_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBUSB_CONNECT_SHOW,"connect"]
  	]), "id_"); 	  
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(320);
  }
};

Blockly.Blocks['webusb_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBUSB_WAIT_SHOW);   
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(320);
  }  
};

Blockly.Blocks['webusb_getdata'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(Blockly.Msg.WEBUSB_GETDATA_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(320);
  }
};