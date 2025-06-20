Blockly.Blocks['openai_chat_initial'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)  
	  .appendField(Blockly.Msg.OPENAI_TEXT_INITIAL_SHOW);
  this.appendValueInput("token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_TEXT_KEY_SHOW);
  this.appendValueInput("role")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_ROLE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.OPENAI_MODEL_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["gpt-3.5-turbo","gpt-3.5-turbo"],
			["gpt-3.5-turbo-0613","gpt-3.5-turbo-0613"],
			["gpt-3.5-turbo-0301","gpt-3.5-turbo-0301"],	      
			["gpt-3.5-turbo-16k","gpt-3.5-turbo-16k"],
			["gpt-3.5-turbo-16k-0613","gpt-3.5-turbo-16k-0613"],
			["gpt-4","gpt-4"],	      
			["gpt-4-0613","gpt-4-0613"],
			["gpt-4-turbo","gpt-4-turbo"],
			["gpt-4o","gpt-4o"],
			["gpt-4o-mini","gpt-4o-mini"],
			["gpt-o1-mini","o1-mini"],
			["gpt-o1-2024-12-17","o1-2024-12-17"],
	      		["gpt-4.5-preview","gpt-4.5-preview"],	      
			["Groq_llama-3.2-90b-vision-preview","llama-3.2-90b-vision-preview"],
			["Groq_meta-llama/llama-4-scout-17b-16e-instruct","meta-llama/llama-4-scout-17b-16e-instruct"],
			["Groq_deepseek-r1-distill-qwen-32b","deepseek-r1-distill-qwen-32b"], 
			["Groq_qwen-qwq-32b","qwen-qwq-32b"],
			["xAI_grok-3-beta","grok-3-beta"],
			["xAI_grok-3-fast-beta","grok-3-fast-beta"],
			["xAI_grok-3-mini-beta","grok-3-mini-beta"],
			["xAI_grok-3-mini-fast-beta","grok-3-mini-fast-beta"],	      
			["xAI_grok-2-vision-latest","grok-2-vision-latest"]	
	  ]), "model");
  this.appendDummyInput()  
      .appendField(Blockly.Msg["OPENAI_CHAT_TEMPERATURE_SHOW"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],
		["0","0"]
	  ]), "temperature");	  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  this.setHelpUrl("https://openai.com/blog/openai-api");
  }
};

Blockly.Blocks['openai_chat_set'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)
	  .appendField(Blockly.Msg.OPENAI_CHAT_SET_SHOW);
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OPENAI_CHAT_TEMPERATURE_SHOW"], "temperature"],
		[Blockly.Msg["OPENAI_CHAT_MAX_TOKENS_SHOW"], "maxOutputTokens"]	      
	  ]), "property");
  this.appendValueInput("val")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  }
};

Blockly.Blocks['openai_chat_request'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_CHAT_REQUEST_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  }
};

Blockly.Blocks['openai_chat_image_request'] = {
	  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)	  
	  .appendField(Blockly.Msg.OPENAI_CHAT_VISION_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_CHAT_PROMPT_SHOW);
  this.appendValueInput("url")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_CHAT_IMAGE_URL_SHOW);	  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  }
};

Blockly.Blocks['openai_chat_insert'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_CHAT_INSERT_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  }
};

Blockly.Blocks['openai_chat_response'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(150);
  }
};

Blockly.Blocks['openai_chat_response_get'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_GET_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_GET_BR_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["N",""],
			["Y \<br\>","br"],
			["Y \\n","n"]	  
	  ]), "br");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(150);
  }
};

Blockly.Blocks['openai_chat_response_clear'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_CLEAR_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(150);
  }
};

Blockly.Blocks['openai_chat_content_clear'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_CHAT_CONTENT_CLEAR_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(150);
  }
};

Blockly.Blocks['openai_vision_content_clear'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_VISION_CONTENT_CLEAR_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(150);
  }
};

Blockly.Blocks['openai_chat_content_file'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_CHAT_CONTENT_FILE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.OPENAI_CHAT_CONTENT_FILE_OPEN_SHOW,"open"],
			[Blockly.Msg.OPENAI_CHAT_CONTENT_FILE_SAVE_SHOW,"save"]	  
	  ]), "func"); 	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(150);
  }
};

Blockly.Blocks['openai_chat_content_file_remote'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_CHAT_CONTENT_FILE_REMOTE_SHOW);
  this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_CHAT_CONTENT_FILE_REMOTE_URL_SHOW);	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(150);
  }
};

Blockly.Blocks['openai_chat_content_file_remote_insert'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_CHAT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_CHAT_INSERT_SHOW);
  this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_CHAT_CONTENT_FILE_REMOTE_URL_INSERT_SHOW);	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(150);
  }
};

Blockly.Blocks['openai_text_initial'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW)  
	  .appendField(Blockly.Msg.OPENAI_TEXT_INITIAL_SHOW);
  this.appendValueInput("token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_TEXT_KEY_SHOW);  
  this.appendValueInput("tokens")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_TEXT_KEYS_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(250);
  }
};

Blockly.Blocks['openai_text_request'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_TEXT_REQUEST_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(250);
  }
};

Blockly.Blocks['openai_text_response'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(250);
  }
};

Blockly.Blocks['openai_text_response_get'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_GET_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_GET_BR_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["N",""],
			["Y \<br\>","br"],
			["Y \\n","n"]		  
	  ]), "br");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(250);
  }
};

Blockly.Blocks['openai_text_response_clear'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_TEXT_RESPONSE_CLEAR_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(250);
  }
};

Blockly.Blocks['openai_image_initial'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_IMAGE_SHOW)  
	  .appendField(Blockly.Msg.OPENAI_IMAGE_INITIAL_SHOW);
  this.appendValueInput("key")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_IMAGE_KEY_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.OPENAI_MODEL_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["dall-e-2","dall-e-2"],
			["dall-e-3","dall-e-3"]
	  ]), "model"); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};

Blockly.Blocks['openai_image_request'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_IMAGE_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_IMAGE_PROMPT_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.OPENAI_IMAGE_SIZE_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["256x256 (DE2)","256x256"],
			["512x512 (DE2)","512x512"],			
			["1024x1024 (DE2、DE3)","1024x1024"],			
			["1024x1792 (DE3)","1024x1792"],			
			["1792x1024 (DE3)","1792x1024"]	  
	  ]), "size"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};

Blockly.Blocks['openai_image_response'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_IMAGE_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_IMAGE_RESPONSE_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};

Blockly.Blocks['openai_image_response_get'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_IMAGE_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_IMAGE_RESPONSE_GET_SHOW);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['openai_image_response_clear'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_IMAGE_SHOW)   
	  .appendField(Blockly.Msg.OPENAI_IMAGE_RESPONSE_CLEAR_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true); 
  this.setColour(200);
  }
};
