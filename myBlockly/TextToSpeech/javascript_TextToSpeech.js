Blockly.JavaScript['TextToSpeech_run'] = function (block) {
  var value_volume_ = Blockly.JavaScript.valueToCode(block, 'volume_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rate_ = Blockly.JavaScript.valueToCode(block, 'rate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pitch_ = Blockly.JavaScript.valueToCode(block, 'pitch_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_voice_ = Blockly.JavaScript.valueToCode(block, 'voice_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_lang_ = block.getFieldValue('lang_');
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'var tts = new SpeechSynthesisUtterance('+value_text_+');\n'+
      'tts.volume='+value_volume_+';\n'+
      'tts.rate='+value_rate_+';\n'+
      'tts.pitch='+value_pitch_+';\n'+
      'tts.lang="'+value_lang_+'";\n'+
      'var voices = window.speechSynthesis.getVoices();\n'+
      'if (voices.length==0) {\n'+
      '  await delay(5);\n'+        
      '  var voices = window.speechSynthesis.getVoices();\n'+      
      '}\n'+
      'if (voices.length>0) {\n'+ 
      '  for(i = 0; i < voices.length ; i++) {\n'+
      '    if(voices[i].name === '+value_voice_+') {\n'+
      '      tts.voice = voices[i];\n'+
      '    }\n'+
      '  }\n'+
      '}\n'+
      'window.speechSynthesis.speak(tts);\n';
  return code;
};

Blockly.JavaScript['TextToSpeech_control'] = function(block) {
  var control_ = block.getFieldValue('control_'); 
  if (control_=="paused")
    var code = 'tts.paused();\n';
  else if (control_=="resume")
    var code = 'tts.resume();\n';
  else if (control_=="cancel")
    var code = 'tts.cancel();\n';  
  return code;
};

Blockly.JavaScript['TextToSpeech_voice'] = function(block) {
  var voice_ = block.getFieldValue('voice_'); 
  var code = '"'+voice_+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
