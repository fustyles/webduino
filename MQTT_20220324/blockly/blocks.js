Blockly.Blocks['fu_mqtt_setup_js'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT")
        .appendField(Blockly.Msg["MQTT_FU_INITIAL_JS"]);
    this.appendValueInput("server")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["MQTT_FU_ADDRESS_JS"]);
    this.appendValueInput("user")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["MQTT_FU_ID_JS"]);
    this.appendValueInput("password")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["MQTT_FU_PASSWORD_JS"]);	
    this.appendStatementInput("topic_subscribe")
        .appendField(Blockly.Msg["MQTT_FU_SUBSCRIBE_TOPIC_JS"]);		
    this.appendStatementInput("topic_getdata")
        .appendField(Blockly.Msg["MQTT_FU_WHEN_GETDATA_JS"]);			
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(210);
  }
};

Blockly.Blocks['fu_mqtt_subscribe_js'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField("MQTT")
		.appendField(Blockly.Msg["MQTT_FU_SUBSCRIBE_TOPIC_JS"]);	
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(210);
  }
};

Blockly.Blocks['fu_mqtt_gettopic_js'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField("MQTT")
		.appendField(Blockly.Msg["MQTT_FU_GETDATA_TOPIC_JS"]);
    this.appendStatementInput("topic_getdata");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(210);
  }
};

Blockly.Blocks['fu_mqtt_senddata_js'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField("MQTT")
		.appendField(Blockly.Msg["MQTT_FU_TO_TOPIC_JS"]);
    this.appendValueInput("text")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["MQTT_FU_PUBLISH_TEXT_JS"]);	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(210);
  }
};	

Blockly.Blocks['fu_mqtt_getdata_js'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT")
        .appendField(Blockly.Msg["MQTT_FU_GETDATA_JS"]);
    this.appendDummyInput()
	.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["MQTT_FU_GETDATA_TEXT_JS"],"text"],
		[Blockly.Msg["MQTT_FU_GETDATA_NUMBER_JS"],"number"],
		[Blockly.Msg["MQTT_FU_GETDATA_ORGIN_JS"],""],	    
		[Blockly.Msg["MQTT_FU_GETDATA_BASE64_JS"],"base64"]
	]),"format");		  
   this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20)
  }
};	
