Blockly.Blocks['videorecord_save_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.VIDEORECORD_SHOW)
        .appendField(Blockly.Msg.VIDEORECORD_SAVE_SHOW);
    this.appendValueInput("index_")
        .setCheck("Number")
        .appendField(Blockly.Msg.VIDEORECORD_DEVICE_INDEX_SHOW);
	this.appendValueInput("width_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.WIDTH);
	this.appendValueInput("height_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.HEIGHT); 
    this.appendDummyInput() 
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.VIDEORECORD_AUDIO_SHOW)	    
        .appendField(new Blockly.FieldDropdown([
			["Y","true"],
			["N","false"]
	    ]), "audio");		
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }  
};

Blockly.Blocks['videorecord_gemini_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.VIDEORECORD_SHOW)
        .appendField(Blockly.Msg.VIDEORECORD_GEMINI_SHOW);
    this.appendValueInput("index_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)	    
        .appendField(Blockly.Msg.VIDEORECORD_DEVICE_INDEX_SHOW);
	this.appendValueInput("width_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.WIDTH);
	this.appendValueInput("height_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.HEIGHT);
    this.appendDummyInput() 
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.VIDEORECORD_AUDIO_SHOW)	    
        .appendField(new Blockly.FieldDropdown([
			["Y","true"],
			["N","false"]
	    ]), "audio"); 		
    this.appendValueInput("key_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VIDEORECORD_GEMINI_KEY_SHOW);
    this.appendValueInput("prompt_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VIDEORECORD_GEMINI_PROMPT_SHOW);		
    this.appendStatementInput("do_")
	.appendField(Blockly.Msg.VIDEORECORD_GEMINI_RESPONSE_SHOW);		
    this.setInputsInline(false);	  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(220);
  }
};

Blockly.Blocks['videorecord_gemini_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.VIDEORECORD_SHOW)
        .appendField(Blockly.Msg.VIDEORECORD_GEMINI_GET_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(220);
  }  
};

Blockly.Blocks['videorecord_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.VIDEORECORD_SHOW);
    this.appendDummyInput() 
        .setAlign(Blockly.ALIGN_RIGHT)	    
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.VIDEORECORD_NORMAL_SHOW,"normal"],		
			[Blockly.Msg.VIDEORECORD_SAVE_SHOW,"save"],
			[Blockly.Msg.VIDEORECORD_GEMINI_SHOW,"gemini"]
	    ]), "type_"); 	  
    this.appendDummyInput() 
        .setAlign(Blockly.ALIGN_RIGHT)	    
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.VIDEORECORD_START_SHOW,"start"],
			[Blockly.Msg.VIDEORECORD_STOP_SHOW,"stop"]
	    ]), "func_");	   	      
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }  
};

Blockly.Blocks['videorecord_video_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.VIDEORECORD_SHOW)
        .appendField(Blockly.Msg.VIDEORECORD_URL_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(220);
  }  
};