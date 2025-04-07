Blockly.JavaScript['audiorecord_save_initial'] = function(block) {
  var audioIndex = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	
  var buttonStartID = Blockly.JavaScript.valueToCode(block, 'start_', Blockly.JavaScript.ORDER_ATOMIC);
  var buttonStopID = Blockly.JavaScript.valueToCode(block, 'stop_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'recording_save_initial('+audioIndex+', '+buttonStartID+', '+buttonStopID+');\n';
  return code;
};

Blockly.JavaScript['audiorecord_gemini_initial'] = function(block) { 
  var audioIndex = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	
  var buttonStartID = Blockly.JavaScript.valueToCode(block, 'start_', Blockly.JavaScript.ORDER_ATOMIC);
  var buttonStopID = Blockly.JavaScript.valueToCode(block, 'stop_', Blockly.JavaScript.ORDER_ATOMIC);
  var geminiKey = Blockly.JavaScript.valueToCode(block, 'key_', Blockly.JavaScript.ORDER_ATOMIC);
  var geminiPrompt = Blockly.JavaScript.valueToCode(block, 'prompt_', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  
  var code = 'recording_GeminiSTT_initial('+audioIndex+', '+buttonStartID+', '+buttonStopID+', '+geminiKey+', "gemini-2.0-flash", '+geminiPrompt+');\n'+
             'async function audioGeminiSTT(geminiResult) {\n  ' + statements_do + '\n  };\n';
  return code;
};

Blockly.JavaScript['audiorecord_gemini_get'] = function(block) {
  var code = 'geminiResult';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['audiorecord_openai_initial'] = function(block) { 
  var audioIndex = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	
  var buttonStartID = Blockly.JavaScript.valueToCode(block, 'start_', Blockly.JavaScript.ORDER_ATOMIC);
  var buttonStopID = Blockly.JavaScript.valueToCode(block, 'stop_', Blockly.JavaScript.ORDER_ATOMIC);
  var openaiKey = Blockly.JavaScript.valueToCode(block, 'key_', Blockly.JavaScript.ORDER_ATOMIC);
  var openaiModel = block.getFieldValue('model_');
  var openaiPrompt = Blockly.JavaScript.valueToCode(block, 'prompt_', Blockly.JavaScript.ORDER_ATOMIC);
  var openaiLanguage = block.getFieldValue('language_');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  
  var code = 'recording_openAISTT_initial('+audioIndex+', '+buttonStartID+', '+buttonStopID+', '+openaiKey+', "'+openaiModel+'", '+openaiPrompt+', "'+openaiLanguage+'");\n'+
             'async function audioOpenAISTT(openaiResult) {\n  ' + statements_do + '\n  };\n';
  return code;
};

Blockly.JavaScript['audiorecord_openai_get'] = function(block) {
  var code = 'openaiResult';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
