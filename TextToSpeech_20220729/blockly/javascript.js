Blockly.JavaScript['TextToSpeech_initial'] = function (block) {
  var value_volume_ = Blockly.JavaScript.valueToCode(block, 'volume_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rate_ = Blockly.JavaScript.valueToCode(block, 'rate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pitch_ = Blockly.JavaScript.valueToCode(block, 'pitch_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lang_ = block.getFieldValue('lang_');

  var code = 'ttsSetProperty('+value_volume_+', '+value_rate_+', '+value_pitch_+', "'+value_lang_+'");\n';
  return code;
};

Blockly.JavaScript['TextToSpeech_run'] = function (block) {
  var value_voice = Blockly.JavaScript.valueToCode(block, 'voice_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'ttsSpeak('+value_voice+', '+value_text+');\n';
  return code;
};

Blockly.JavaScript['TextToSpeech_control'] = function(block) {
  var control = block.getFieldValue('control_'); 
  var code = 'ttsState("'+control+'");\n';  
  return code;
};

Blockly.JavaScript['TextToSpeech_voice'] = function(block) {
  var voice_ = block.getFieldValue('voice_'); 
  var code = '"'+voice_+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['TextToSpeech_switch'] = function (block) { 
  var value_switch = block.getFieldValue('switch');
  var code = 'ttsSwitch('+value_switch+');\n';
  return code;
};

Blockly.JavaScript['TextToSpeech_speaking'] = function(block) {
  var code = 'ttsSpeaking()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};