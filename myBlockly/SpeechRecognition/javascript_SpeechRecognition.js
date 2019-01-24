Blockly.JavaScript['SpeechRecognition_run'] = function (block) {
  var value_language_ = block.getFieldValue('language_');
  var code = 'recognition.lang="'+value_language_+'";\nstartButton(event);\n';
  return code;
};
