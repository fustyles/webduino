Blockly.JavaScript['SpeechRecognition_run'] = function (block) {
  var value_language_ = block.getFieldValue('language_');
  var code = 'recognition.lang="'+value_language_+'";\n';
  return code;
};

Blockly.JavaScript['SpeechRecognition_get'] = function (block) {
  var code = 'Recognition_final_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['SpeechRecognition_listener'] = function (block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'Recognition_recognitionFinish = async function() {\n' + statements_do + '\n};\n';  
  return code;
};

Blockly.JavaScript['SpeechRecognition_keyword'] = function (block) {
  var value_myVar = Blockly.JavaScript.valueToCode(block, 'myVar_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_keyword = Blockly.JavaScript.valueToCode(block, 'keyword', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_myVar + '.toLowerCase().indexOf('+value_keyword+'.toLowerCase())!=-1';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['SpeechRecognition_interim'] = function (block) { 
  var value_left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize = Blockly.JavaScript.valueToCode(block, 'fontsize', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_zindex = Blockly.JavaScript.valueToCode(block, 'zindex', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_display = Blockly.JavaScript.valueToCode(block, 'display', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'span_interim('+ value_left + ',' + value_top + ','+ value_fontsize + ',' + value_zindex + ',' + value_display + ');\n';
  return code;
};

Blockly.JavaScript['SpeechRecognition_state'] = function (block) {
  var code = 'Recognition_state()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['SpeechRecognition_switch'] = function (block) { 
  var value_switch = block.getFieldValue('switch');
  var code = 'Recognition_switch('+value_switch+');\n';
  return code;
};

Blockly.JavaScript['SpeechRecognition_texttonumber'] = function (block) {
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'Recognition_texttonumber('+text+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};