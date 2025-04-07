Blockly.Blocks['audiorecord_save_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW);
    this.appendValueInput("index_")
        .setCheck("Number")
        .appendField(Blockly.Msg.AUDIORECORD_DEVICE_INDEX_SHOW);	
    this.appendValueInput("start_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_START_ID_SHOW);
    this.appendValueInput("stop_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_STOP_ID_SHOW);		  	    
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }  
};

Blockly.Blocks['audiorecord_gemini_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_SHOW);
    this.appendValueInput("index_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)	    
        .appendField(Blockly.Msg.AUDIORECORD_DEVICE_INDEX_SHOW);		
    this.appendValueInput("start_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_START_ID_SHOW);
    this.appendValueInput("stop_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_STOP_ID_SHOW);   
    this.appendValueInput("key_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_KEY_SHOW);
    this.appendValueInput("prompt_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_PROMPT_SHOW);
    this.appendStatementInput("do_")
	.appendField(Blockly.Msg.AUDIORECORD_GEMINI_RESPONSE_SHOW);		
    this.setInputsInline(false);	  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }
};

Blockly.Blocks['audiorecord_gemini_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_GET_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(180);
  }  
};

Blockly.Blocks['audiorecord_openai_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_OPENAI_SHOW);
    this.appendValueInput("index_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)	    
        .appendField(Blockly.Msg.AUDIORECORD_DEVICE_INDEX_SHOW);		
    this.appendValueInput("start_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_START_ID_SHOW);
    this.appendValueInput("stop_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_STOP_ID_SHOW);   
    this.appendValueInput("key_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_KEY_SHOW);
    this.appendDummyInput()  
        .appendField(Blockly.Msg.AUDIORECORD_OPENAI_MODEL_SHOW)
        .appendField(new Blockly.FieldDropdown([
			["whisper-1","whisper-1"],
			["gpt-4o-mini-transcribe","gpt-4o-mini-transcribe"],
			["gpt-4o-transcribe","gpt-4o-transcribe"],
			["groq_whisper-large-v3-turbo","whisper-large-v3-turbo"]
	    ]), "model_");		
    this.appendValueInput("prompt_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_PROMPT_SHOW);
    this.appendStatementInput("do_")
		.appendField(Blockly.Msg.AUDIORECORD_GEMINI_RESPONSE_SHOW);		
    this.setInputsInline(false);	  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
  }
};

Blockly.Blocks['audiorecord_openai_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_OPENAI_GET_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(180);
  }  
};
