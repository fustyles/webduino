Blockly.Blocks['gemini_chat_initial'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW);
  this.appendValueInput("token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_APIKEY_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GEMINI_MODEL_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["gemini-2.0-flash","gemini-2.0-flash"],	      
		["gemini-2.0-flash-lite","gemini-2.0-flash-lite"],
		["gemini-2.0-flash-lite-preview-02-05","gemini-2.0-flash-lite-preview-02-05"],
		["gemini-2.0-flash-001","gemini-2.0-flash-001"],
		["gemini-2.5-flash","gemini-2.5-flash"],
		["gemini-2.5-flash-lite-preview-06-17","gemini-2.5-flash-lite-preview-06-17"]
	  ]), "model");
  this.appendValueInput("tokens")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_MAX_TOKENS_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GEMINI_CHAT_TEMPERATURE_SHOW)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([
		["2.0","2.0"],
		["1.8","1.8"],
		["1.6","1.6"],
		["1.4","1.4"],
		["1.2","1.2"],	      
		["1.0","1.0"],
		["0.8","0.8"],
		["0.6","0.6"],
		["0.4","0.4"],
		["0.2","0.2"],
		["0","0"]
	  ]), "temperature");	  	  
  this.appendValueInput("role")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_ROLE_SHOW);	  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(70);
  this.setHelpUrl("https://aistudio.google.com/app/prompts/new_chat?utm_source=agd&utm_medium=referral&utm_campaign=core-cta&utm_content=");
  }
};

Blockly.Blocks['gemini_chat_set'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)
	  .appendField(Blockly.Msg.GEMINI_CHAT_SET_SHOW);
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["GEMINI_CHAT_TEMPERATURE_SHOW"], "temperature"],
		[Blockly.Msg["GEMINI_CHAT_MAX_TOKENS_SHOW"], "maxOutputTokens"]	      
	  ]), "property");
  this.appendValueInput("val")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  }
};

Blockly.Blocks['gemini_chat_request'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_REQUEST_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['gemini_chat_image_request'] = {
	  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)	  
	  .appendField(Blockly.Msg.GEMINI_CHAT_VISION_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_PROMPT_SHOW);
  this.appendValueInput("url")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_IMAGE_URL_SHOW);	  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['gemini_chat_response'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)
	  .appendField(Blockly.Msg.GEMINI_CHAT_RESPONSE_SHOW);
  this.appendStatementInput("do");
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(70);
  }
};

Blockly.Blocks['gemini_chat_response_data'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.GEMINI_CHAT_RESPONSE_DATA_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GEMINI_CHAT_RESPONSE_DATA_BR_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["N",""],
			["Y \<br\>","br"],
			["Y \\n","n"]		  
	  ]), "br"); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(40);
  }
};

Blockly.Blocks['gemini_chat_insert'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_INSERT_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  }
};

Blockly.Blocks['gemini_chat_clear'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)
	  .appendField(Blockly.Msg.GEMINI_CHAT_CLEAR_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  }
};

Blockly.Blocks['gemini_chat_content_file'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.GEMINI_CHAT_CONTENT_FILE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.GEMINI_CHAT_CONTENT_FILE_OPEN_SHOW,"open"],
			[Blockly.Msg.GEMINI_CHAT_CONTENT_FILE_SAVE_SHOW,"save"]	  
	  ]), "func"); 	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(40);
  }
};

Blockly.Blocks['gemini_chat_content_file_remote'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.GEMINI_CHAT_CONTENT_FILE_REMOTE_SHOW);
  this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_CONTENT_FILE_REMOTE_URL_SHOW);	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(40);
  }
};

Blockly.Blocks['gemini_chat_content_file_remote_insert'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.GEMINI_CHAT_INSERT_SHOW);
  this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_CONTENT_FILE_REMOTE_URL_INSERT_SHOW);	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(40);
  }
};

Blockly.Blocks['gemini_chat_content_file_remote_read'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.GEMINI_CHAT_READ_SHOW);	  
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(new Blockly.FieldDropdown([
			["PDF", "application/pdf"],
			["JavaScript", "text/javascript"],
			["x-JavaScript", "application/x-javascript"],			
			["Python", "application/x-python, text/x-python"],
			["TXT", "text/plain"],
			["HTML", "text/html"],
			["CSS", "text/css"],
			["Markdown", "text/md"],
			["CSV", "text/csv"],
			["XML", "text/xml"],
			["RTF", "text/rtf"]
	  ]), "type"); 
  this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_CONTENT_FILE_REMOTE_URL_INSERT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_PROMPT_SHOW);	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(90);
  this.setHelpUrl("https://ai.google.dev/gemini-api/docs/document-processing?hl=zh-tw");	  
  }
};

Blockly.Blocks['gemini_generate_image'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)  
	  .appendField(Blockly.Msg.GEMINI_GENERATE_IMAGE_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["GEMINI_CHAT_PROMPT_SHOW"]);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['gemini_generate_image_mix'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)  
	  .appendField(Blockly.Msg.GEMINI_GENERATE_IMAGE_MIX_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["GEMINI_CHAT_PROMPT_SHOW"]);
  this.appendValueInput("url")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_CHAT_IMAGE_URL_SHOW);	  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['gemini_search'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)  
	  .appendField(Blockly.Msg.GEMINI_SEARCH_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["GEMINI_CHAT_PROMPT_SHOW"]);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['gemini_youtube'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.GEMINI_CHAT_SHOW)  
	  .appendField("Youtube");
  this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GEMINI_YOUTUBE_SHOW);	  
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["GEMINI_CHAT_PROMPT_SHOW"]);	  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};
