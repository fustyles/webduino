Blockly.JavaScript['SpeechRecognition_run'] = function (block) {
  var value_language_ = block.getFieldValue('language_');
  var code = 'recognition.lang="'+value_language_+'";\nstartButton(event);\n';
  return code;
};

Blockly.JavaScript['SpeechRecognition_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'Recognition_final_get();';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['SpeechRecognition_listener'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'setInterval(async function(){\n' + statements_do_ + '},10);\n';
  return code;
};
