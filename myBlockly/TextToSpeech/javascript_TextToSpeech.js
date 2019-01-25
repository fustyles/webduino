Blockly.JavaScript['TextToSpeech_run'] = function (block) {
  var value_volume_ = Blockly.JavaScript.valueToCode(block, 'volume_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rate_ = Blockly.JavaScript.valueToCode(block, 'rate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pitch_ = Blockly.JavaScript.valueToCode(block, 'pitch_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lang_ = block.getFieldValue('lang_');
  console.log(value_lang_);
  var value_voice_ = Blockly.JavaScript.valueToCode(block, 'voice_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'var tts = new SpeechSynthesisUtterance('+value_text_+');\n'+
      'tts.volume='+value_volume_+';\n'+
      'tts.rate='+value_rate_+';\n'+
      'tts.pitch='+value_pitch_+';\n'+
      'tts.lang='+value_lang_+';\n'+
      '//var voices = window.speechSynthesis.getVoices();\n//tts.voice=voices['+value_voice_+'];\n'+     
      'window.speechSynthesis.speak(tts);\n';
  return code;
};
