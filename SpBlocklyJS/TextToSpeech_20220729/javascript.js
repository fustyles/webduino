Blockly.JavaScript['TextToSpeech_initial'] = function (block) {
  var value_volume_ = Blockly.JavaScript.valueToCode(block, 'volume_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rate_ = Blockly.JavaScript.valueToCode(block, 'rate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pitch_ = Blockly.JavaScript.valueToCode(block, 'pitch_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lang_ = block.getFieldValue('lang_');

  var code = 'tts.volume='+value_volume_+';\n'+
      'tts.rate='+value_rate_+';\n'+
      'tts.pitch='+value_pitch_+';\n'+
      'tts.lang="'+value_lang_+'";\n';
  return code;
};

Blockly.JavaScript['TextToSpeech_run'] = function (block) {
  var value_voice_ = Blockly.JavaScript.valueToCode(block, 'voice_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'ttsSetVoice('+value_voice_+');\ntts.text = '+value_text_+';\nsynth.speak(tts);\n';
  return code;
};

Blockly.JavaScript['TextToSpeech_control'] = function(block) {
  var control_ = block.getFieldValue('control_'); 
  if (control_=="pause")
    var code = 'synth.pause();\n';
  else if (control_=="resume")
    var code = 'synth.resume();\n';
  else if (control_=="cancel")
    var code = 'synth.cancel();\n';  
  return code;
};

Blockly.JavaScript['TextToSpeech_voice'] = function(block) {
  var voice_ = block.getFieldValue('voice_'); 
  var code = '"'+voice_+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
