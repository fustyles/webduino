Blockly.JavaScript['videorecord_save_initial'] = function(block) {
  var videoIndex = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);
  var videoWidth = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var videoHeight = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var videoAudio = block.getFieldValue('audio');  
  var code = 'recording_save_initial('+videoIndex+', '+videoWidth+', '+videoHeight+', '+videoAudio+');\n';
  return code;
};

Blockly.JavaScript['videorecord_gemini_initial'] = function(block) { 
  var videoIndex = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);
  var videoWidth = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var videoHeight = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var videoAudio = block.getFieldValue('audio');   
  var geminiKey = Blockly.JavaScript.valueToCode(block, 'key_', Blockly.JavaScript.ORDER_ATOMIC);
  var geminiPrompt = Blockly.JavaScript.valueToCode(block, 'prompt_', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  
  var code = 'recording_Gemini_initial('+videoIndex+', '+videoWidth+', '+videoHeight+', '+videoAudio+', '+geminiKey+', "gemini-2.0-flash", '+geminiPrompt+');\n'+
             'videoGeminiVision = async function(geminiResult) {\n  ' + statements_do + '\n  };\n';
  return code;
};

Blockly.JavaScript['videorecord_gemini_get'] = function(block) {
  var code = 'geminiResult';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['videorecord_run'] = function(block) { 
  var type = block.getFieldValue('type_');
  var func = block.getFieldValue('func_');

    if (type=="normal"&func=="start")
    var code = 'await recording_startRecording();\n';
  else if (type=="normal"&func=="stop")
    var code = 'await recording_stopRecording(false);\n';
  else if (type=="save"&func=="start")
    var code = 'await recording_startRecording();\n';
  else if (type=="save"&func=="stop")
    var code = 'await recording_stopRecording(true);\nawait delay(1);\n';
  else if (type=="gemini"&func=="start")
    var code = 'await recording_startRecording();\n';
  else if (type=="gemini"&func=="stop")
    var code = 'await recording_stopRecordingGemini();\n';
  return code;
};

Blockly.JavaScript['videorecord_video_get'] = function(block) {
  var code = 'videoUrl';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
