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
      .appendField(Blockly.Msg.OPENAI_IMAGE_REQUEST_SHOW);
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
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.OPENAI_MODEL_SHOW)
      .appendField(new Blockly.FieldDropdown([
			["gpt-4.1","gpt-4.1"],
			["gpt-5","gpt-5"],
			["gpt-5-nano","gpt-5-nano"],
			["gpt-5-mini","gpt-5-mini"],
			["gpt-5.4-pro","gpt-5.4-pro"],
			["gpt-5.4","gpt-5.4"],		 
			["Groq_llama-3.1-8b-instant","llama-3.1-8b-instant"],
			["Groq_llama-3.3-70b-versatile","llama-3.3-70b-versatile"],
			["Groq_openai/gpt-oss-120b","openai/gpt-oss-120b"],
			["Groq_openai/gpt-oss-20b","openai/gpt-oss-20b"],
			["Groq_whisper-large-v3","whisper-large-v3"],
			["Groq_whisper-large-v3-turbo","whisper-large-v3-turbo"],
			["Groq_canopylabs/orpheus-arabic-saudi","canopylabs/orpheus-arabic-saudi"],
			["Groq_canopylabs/orpheus-v1-english","canopylabs/orpheus-v1-english"],
			["Groq_meta-llama/llama-4-scout-17b-16e-instruct","meta-llama/llama-4-scout-17b-16e-instruct"],
			["Groq_meta-llama/llama-prompt-guard-2-22m","meta-llama/llama-prompt-guard-2-22m"],
			["Groq_meta-llama/llama-prompt-guard-2-86m","meta-llama/llama-prompt-guard-2-86m"],
			["Groq_moonshotai/kimi-k2-instruct-0905","moonshotai/kimi-k2-instruct-0905"],
			["Groq_openai/gpt-oss-safeguard-20b","openai/gpt-oss-safeguard-20b"],
			["Groq_qwen/qwen3-32b","qwen/qwen3-32b"],
			["xAI_grok-4.20-multi-agent-beta-0309" ,"grok-4.20-multi-agent-beta-0309"],
			["xAI_grok-4.20-beta-0309-reasoning" ,"grok-4.20-beta-0309-reasoning"],
			["xAI_grok-4.20-beta-0309-non-reasoning" ,"grok-4.20-beta-0309-non-reasoning"],
			["xAI_grok-code-fast-1" ,"grok-code-fast-1"],
			["xAI_grok-4-1-fast-reasoning" ,"grok-4-1-fast-reasoning"],
			["xAI_grok-4-1-fast-non-reasoning" ,"grok-4-1-fast-non-reasoning"],
			["xAI_grok-imagine-image-pro" ,"grok-imagine-image-pro"],
			["xAI_grok-imagine-image" ,"grok-imagine-image"],
			["xAI_grok-imagine-video" ,"grok-imagine-video"]
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
      .appendField(Blockly.Msg.OPENAI_CHAT_REQUEST_SHOW);
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



