Blockly.JavaScript['audiorecord_save_initial'] = function(block) {
  var audioIndex = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'recording_save_initial('+audioIndex+');\n';
  return code;
};

Blockly.JavaScript['audiorecord_gemini_initial'] = function(block) { 
  var audioIndex = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	
  var geminiKey = Blockly.JavaScript.valueToCode(block, 'key_', Blockly.JavaScript.ORDER_ATOMIC);
  var geminiPrompt = Blockly.JavaScript.valueToCode(block, 'prompt_', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  
  var code = 'recording_GeminiSTT_initial('+audioIndex+', '+geminiKey+', "gemini-2.5-flash", '+geminiPrompt+');\n'+
             'audioGeminiSTT = async function(geminiResult) {\n  ' + statements_do + '\n  };\n';
  return code;
};

Blockly.JavaScript['audiorecord_gemini_get'] = function(block) {
  var code = 'geminiResult';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['audiorecord_openai_initial'] = function(block) { 
  var audioIndex = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	
  var openaiKey = Blockly.JavaScript.valueToCode(block, 'key_', Blockly.JavaScript.ORDER_ATOMIC);
  var openaiModel = block.getFieldValue('model_');
  var openaiPrompt = Blockly.JavaScript.valueToCode(block, 'prompt_', Blockly.JavaScript.ORDER_ATOMIC);
  var openaiLanguage = block.getFieldValue('language_');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  
  var code = 'recording_openAISTT_initial('+audioIndex+', '+openaiKey+', "'+openaiModel+'", '+openaiPrompt+', "'+openaiLanguage+'");\n'+
             'audioOpenAISTT = async function(openaiResult) {\n  ' + statements_do + '\n  };\n';
  return code;
};

Blockly.JavaScript['audiorecord_openai_get'] = function(block) {
  var code = 'openaiResult';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['audiorecord_run'] = function(block) { 
  var type = block.getFieldValue('type_');
  var func = block.getFieldValue('func_');

  if (type=="normal"&func=="start")
    var code = 'await recording_startRecording();\n';
  else if (type=="normal"&func=="stop")
    var code = 'await recording_stopRecording(false);\nawait delay(1, true);';
  else if (type=="save"&func=="start")
    var code = 'await recording_startRecording();\n';
  else if (type=="save"&func=="stop")
    var code = 'await recording_stopRecording(true);\nawait delay(1, true);';
  else if (type=="gemini"&func=="start")
    var code = 'await recording_startRecording();\n';
  else if (type=="gemini"&func=="stop")
    var code = 'await recording_stopRecordingGeminiSTT();await delay(1, true);\n';
  else if (type=="openai"&func=="start")
    var code = 'await recording_startRecording();\n';
  else if (type=="openai"&func=="stop")
    var code = 'await recording_stopRecordingOpenAISTT();await delay(1, true);\n';
  return code;
};

Blockly.JavaScript['audiorecord_audio_get'] = function(block) {
  var code = 'audioUrl';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


