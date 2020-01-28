Blockly.JavaScript['deeplab_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_result_ = block.getFieldValue('result_');
  var code = 'deeplab_video(' + value_width_ + ',' + value_height_ + ',"' + value_mirrorimage_ + '","' + value_result_ + '");\n';
  return code;
};