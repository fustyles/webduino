Blockly.JavaScript['teachablemachine_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'teachablemachine_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['teachablemachine_model'] = function(block) {
  var value_model_ = Blockly.JavaScript.valueToCode(block, 'model_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'teachablemachine_model(' + value_model_ + ');\n';
  return code;
};

Blockly.JavaScript['teachablemachine_result'] = function(block) { 
  var value_result_ = block.getFieldValue('result_');
  var code = 'teachablemachine_result("' + value_result_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

