Blockly.JavaScript['SpeechRecognition_run'] = function (block) {
  var value_language_ = block.getFieldValue('language_');
  var code = 'recognition.lang="'+value_language_+'";\nif (!recognizing) startButton(event);\n';
  return code;
};

Blockly.JavaScript['SpeechRecognition_get'] = function (block) {
  var code = 'Recognition_final_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['SpeechRecognition_listener'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'setInterval(async function(){\n' + statements_do_ + '},10);\n';
  return code;
};

Blockly.JavaScript['SpeechRecognition_keyword'] = function (block) {
  var myVar = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('myVar'), Blockly.Variables.NAME_TYPE);
  var value_keyword = Blockly.JavaScript.valueToCode(block, 'keyword', Blockly.JavaScript.ORDER_ATOMIC);
  var code = myVar + '.toLowerCase().indexOf('+value_keyword+'.toLowerCase())!=-1';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
