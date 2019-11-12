Blockly.JavaScript['speak_setting_dropdown'] = function (block) {
  var dropdown_lang_ = block.getFieldValue('lang_');
  var dropdown_pitch_ = block.getFieldValue('pitch_');
  var dropdown_rate_ = block.getFieldValue('rate_');
  var code = '"' + dropdown_lang_ + '",' + dropdown_pitch_ + ',' + dropdown_rate_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['speak_setting_text'] = function (block) {
  var lang_ = Blockly.JavaScript.valueToCode(block, 'lang_', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_pitch_ = block.getFieldValue('pitch_');
  var dropdown_rate_ = block.getFieldValue('rate_');
  var code = lang_ + ',' + dropdown_pitch_ + ',' + dropdown_rate_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
