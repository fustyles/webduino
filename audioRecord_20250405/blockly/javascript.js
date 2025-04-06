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
  
  var code = 'recording_geminiSTT_initial('+audioIndex+', '+buttonStartID+', '+buttonStopID+', '+geminiKey+', '+geminiPrompt+');\n'+
             'async function audioGeminiSTT(audioResult) {\n  ' + statements_do + '\n  };\n';
  return code;
};

Blockly.JavaScript['audiorecord_gemini_get'] = function(block) {
  var code = 'audioResult';
  return [code, Blockly.JavaScript.ORDER_NONE];
};