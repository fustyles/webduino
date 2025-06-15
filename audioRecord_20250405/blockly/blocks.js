Blockly.Blocks['audiorecord_save_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW);
    this.appendValueInput("index_")
        .setCheck("Number")
        .appendField(Blockly.Msg.AUDIORECORD_DEVICE_INDEX_SHOW);			  	    
    this.setInputsInline(true);
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
    this.setColour(220);
  }
};

Blockly.Blocks['audiorecord_gemini_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_GET_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(220);
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
    this.appendValueInput("key_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUDIORECORD_GEMINI_KEY_SHOW);
    this.appendDummyInput() 
        .setAlign(Blockly.ALIGN_RIGHT)	    
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
    this.appendDummyInput() 
        .setAlign(Blockly.ALIGN_RIGHT)	    
        .appendField(Blockly.Msg.AUDIORECORD_LANGUAGE_SHOW)
        .appendField(new Blockly.FieldDropdown([
		["Any", ""],
		["Afrikaans (af)", "af"],
		["Arabic (ar)", "ar"],
		["Azerbaijani (az)", "az"],
		["Belarusian (be)", "be"],
		["Bulgarian (bg)", "bg"],
		["Bosnian (bs)", "bs"],
		["Catalan (ca)", "ca"],
		["Czech (cs)", "cs"],
		["Welsh (cy)", "cy"],
		["Danish (da)", "da"],
		["German (de)", "de"],
		["Modern Greek (el)", "el"],
		["English (en)", "en"],
		["Spanish (es)", "es"],
		["Estonian (et)", "et"],
		["Persian (fa)", "fa"],
		["Finnish (fi)", "fi"],
		["French (fr)", "fr"],
		["Galician (gl)", "gl"],
		["Hebrew (he)", "he"],
		["Hindi (hi)", "hi"],
		["Croatian (hr)", "hr"],
		["Hungarian (hu)", "hu"],
		["Indonesian (id)", "id"],
		["Icelandic (is)", "is"],
		["Italian (it)", "it"],
		["Japanese (ja)", "ja"],
		["Kazakh (kk)", "kk"],
		["Kannada (kn)", "kn"],
		["Korean (ko)", "ko"],
		["Lithuanian (lt)", "lt"],
		["Latvian (lv)", "lv"],
		["Maori (mi)", "mi"],
		["Macedonian (mk)", "mk"],
		["Marathi (mr)", "mr"],
		["Malay (ms)", "ms"],
		["Nepali (ne)", "ne"],
		["Dutch (nl)", "nl"],
		["Norwegian (no)", "no"],
		["Polish (pl)", "pl"],
		["Portuguese (pt)", "pt"],
		["Romanian (ro)", "ro"],
		["Russian (ru)", "ru"],
		["Slovak (sk)", "sk"],
		["Slovenian (sl)", "sl"],
		["Serbian (sr)", "sr"],
		["Swedish (sv)", "sv"],
		["Swahili (sw)", "sw"],
		["Tamil (ta)", "ta"],
		["Thai (th)", "th"],
		["Tagalog (tl)", "tl"],
		["Turkish (tr)", "tr"],
		["Ukrainian (uk)", "uk"],
		["Urdu (ur)", "ur"],
		["Vietnamese (vi)", "vi"],
		["Chinese (zh)", "zh"]
	    ]), "language_");		
    this.appendStatementInput("do_")
	.appendField(Blockly.Msg.AUDIORECORD_GEMINI_RESPONSE_SHOW);		
    this.setInputsInline(false);	  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
  }
};

Blockly.Blocks['audiorecord_openai_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_OPENAI_GET_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(260);
  }  
};

Blockly.Blocks['audiorecord_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW);
    this.appendDummyInput() 
        .setAlign(Blockly.ALIGN_RIGHT)	    
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.AUDIORECORD_NORMAL_SHOW,"normal"],		
			[Blockly.Msg.AUDIORECORD_SAVE_SHOW,"save"],
			[Blockly.Msg.AUDIORECORD_GEMINI_SHOW,"gemini"],
			[Blockly.Msg.AUDIORECORD_OPENAI_SHOW,"openai"]
	    ]), "type_"); 	  
    this.appendDummyInput() 
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("　")	    
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.AUDIORECORD_START_SHOW,"start"],
			[Blockly.Msg.AUDIORECORD_STOP_SHOW,"stop"]
	    ]), "func_");	   	      
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }  
};

Blockly.Blocks['audiorecord_audio_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUDIORECORD_SHOW)
        .appendField(Blockly.Msg.AUDIORECORD_URL_SHOW);
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};
