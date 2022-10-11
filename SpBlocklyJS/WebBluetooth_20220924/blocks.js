Blockly.Blocks['webbluetooth_uuid'] = {
  init: function() {	  
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)	
        .appendField(Blockly.Msg.WEBBLUETOOTH_UUID_SHOW); 
	this.appendValueInput("service")
      .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_SERVICE_SHOW)
		.setCheck("String");
	this.appendValueInput("tx")
      .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_TX_SHOW)
		.setCheck("String");  
	this.appendValueInput("rx")
      .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_RX_SHOW)
		.setCheck("String");  	  
	this.setInputsInline(false);	  
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(140);
	this.setHelpUrl("https://github.com/fustyles/Arduino/blob/master/ESP32_WebBluetooth.ino");
  }
};

Blockly.Blocks['webbluetooth_button'] = {
  init: function() {
    this.appendDummyInput()	
        .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
        .appendField(Blockly.Msg.WEBBLUETOOTH_ELEMENT_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBBLUETOOTH_CONNECT_SHOW,"gamebutton_webbluetooth_open"],
		[Blockly.Msg.WEBBLUETOOTH_CLOSE_SHOW,"gamebutton_webbluetooth_close"],
		[Blockly.Msg.WEBBLUETOOTH_DATA_SHOW,"Bluetooth_data"]
  	]), "id_");	  
    this.appendDummyInput()  
	.appendField(Blockly.Msg.WEBBLUETOOTH_SHOW_SHOW)	  
        .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]
  	]), "show_"); 	    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(140);
  }  
};

Blockly.Blocks['webbluetooth_button_position'] = {
  init: function() {
    this.appendDummyInput()	
        .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
        .appendField(Blockly.Msg.WEBBLUETOOTH_ELEMENT_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBBLUETOOTH_CONNECT_SHOW,"gamebutton_webbluetooth_open"],
		[Blockly.Msg.WEBBLUETOOTH_CLOSE_SHOW,"gamebutton_webbluetooth_close"],
		[Blockly.Msg.WEBBLUETOOTH_DATA_SHOW,"Bluetooth_data"]
  	]), "id_");	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBBLUETOOTH_BUTTON_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBBLUETOOTH_BUTTON_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(140);
  }
};

Blockly.Blocks['webbluetooth_button_onclick'] = {
  init: function() {
    this.appendDummyInput()	
        .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
        .appendField(Blockly.Msg.WEBBLUETOOTH_ELEMENT_ONCLICK_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBBLUETOOTH_CONNECT_SHOW,"open"],
		[Blockly.Msg.WEBBLUETOOTH_CLOSE_SHOW,"close"]
  	]), "button_");	  
  this.appendValueInput("id_")
	  .appendField(Blockly.Msg.WEBBLUETOOTH_ELEMENT_ID_SHOW)
      .setCheck("String");    	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(140);
  }
};

Blockly.Blocks['webbluetooth_state'] = {
  init: function() {
    this.appendDummyInput()	
        .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
        .appendField(Blockly.Msg.WEBBLUETOOTH_STATE_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(140);
  }  
};

Blockly.Blocks['webbluetooth_sendtext'] = {
  init: function() {
    this.appendDummyInput()	
        .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
        .appendField(Blockly.Msg.WEBBLUETOOTH_SENDTEXT_SHOW);
	this.appendValueInput("cmd_")
		.setCheck("String");
    this.appendDummyInput("newline")	  
		.appendField(new Blockly.FieldDropdown([
			["　",""],
			["\\r","\\r"],
			["\\n","\\n"],
			["\\r\\n","\\r\\n"]
		]), "end_");
	this.getInput("newline").setVisible(false);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(140);
  }  
};

Blockly.Blocks['webbluetooth_get'] = {
  init: function() {
    this.appendDummyInput()	
        .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
        .appendField(Blockly.Msg.WEBBLUETOOTH_GET_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(140);
  }  
};

Blockly.Blocks['webbluetooth_getstate'] = {
  init: function() {
    this.appendDummyInput()	
        .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
        .appendField(Blockly.Msg.WEBBLUETOOTH_GETSTATE_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(140);
  }  
};

Blockly.Blocks['webbluetooth_getid'] = {
  init: function() {
    this.appendDummyInput()	
        .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
        .appendField(Blockly.Msg.WEBBLUETOOTH_GETID_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBBLUETOOTH_CONNECT_SHOW,"webbluetooth_open"],
		[Blockly.Msg.WEBBLUETOOTH_CLOSE_SHOW,"webbluetooth_close"]
  	]), "id_"); 	  
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(140);
  }
};

Blockly.Blocks['webbluetooth_wait'] = {
  init: function() {
    this.appendDummyInput()	
        .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
        .appendField(Blockly.Msg.WEBBLUETOOTH_WAIT_SHOW);   
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(140);
  }  
};

Blockly.Blocks['webbluetooth_getdata'] = {
  init: function () {
  this.appendDummyInput()	
      .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
      .appendField(Blockly.Msg.WEBBLUETOOTH_GETDATA_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(140);
  }
};

Blockly.Blocks['webbluetooth_stop'] = {
  init: function () {
  this.appendDummyInput()	
      .appendField(Blockly.Msg.WEBBLUETOOTH_SHOW)
      .appendField(Blockly.Msg.WEBBLUETOOTH_STOP_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(140);
  }
};