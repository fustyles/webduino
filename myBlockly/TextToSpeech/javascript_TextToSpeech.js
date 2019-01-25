Blockly.JavaScript['TextToSpeech_run'] = function (block) {
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'var msg = new SpeechSynthesisUtterance('+value_text_+');\nwindow.speechSynthesis.speak(msg);\nvar voices = speechSynthesis.getVoices();\nconsole.log(voices);\n';
  return code;
};
