Blockly.Blocks['webserial_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_ELEMENT_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBSERIAL_CONNECT_SHOW,"gamebutton_webserial_open"],
		[Blockly.Msg.WEBSERIAL_CLOSE_SHOW,"gamebutton_webserial_close"],
		[Blockly.Msg.WEBSERIAL_STATUS_SHOW,"serial_status"]
  	]), "id_");	  
    this.appendDummyInput()  
	.appendField(Blockly.Msg.WEBSERIAL_SHOW_SHOW)	  
        .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]
  	]), "show_"); 	    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }  
};

Blockly.Blocks['webserial_button_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_ELEMENT_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBSERIAL_CONNECT_SHOW,"gamebutton_webserial_open"],
		[Blockly.Msg.WEBSERIAL_CLOSE_SHOW,"gamebutton_webserial_close"],
		[Blockly.Msg.WEBSERIAL_STATUS_SHOW,"serial_status"]
  	]), "id_");	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBSERIAL_BUTTON_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBSERIAL_BUTTON_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['webserial_button_onclick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_ELEMENT_ONCLICK_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBSERIAL_CONNECT_SHOW,"open"],
		[Blockly.Msg.WEBSERIAL_CLOSE_SHOW,"close"]
  	]), "button_");	  
  this.appendValueInput("id_")
      .setCheck("String");    	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(180);
  }
};

Blockly.Blocks['webserial_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_STATE_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(180);
  }  
};

Blockly.Blocks['webserial_sendtext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_SENDTEXT_SHOW);
	this.appendValueInput("cmd_")
		.setCheck("String");
    this.appendDummyInput()	  
		.appendField(new Blockly.FieldDropdown([
			["",""],
			["\\r","\\r"],
			["\\n","\\n"],
			["\\r\\n","\\r\\n"]
		]), "end_"); 		
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }  
};

Blockly.Blocks['webserial_senduint8'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_SENDUINT8_SHOW);
	this.appendValueInput("cmd_")
		.setCheck("String");		
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }  
};

Blockly.Blocks['webserial_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_GET_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(180);
  }  
};

Blockly.Blocks['webserial_getstate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_GETSTATE_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(180);
  }  
};

Blockly.Blocks['webserial_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_CLEAR_SHOW);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }  
};

Blockly.Blocks['webserial_baudrate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_BAUDRATE_SHOW);  
    this.appendDummyInput()	  
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate_"); 	    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }  
};

Blockly.Blocks['webserial_getid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_GETID_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBSERIAL_CONNECT_SHOW,"webserial_open"],
		[Blockly.Msg.WEBSERIAL_CLOSE_SHOW,"webserial_close"]
  	]), "id_"); 	  
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(180);
  }
};
