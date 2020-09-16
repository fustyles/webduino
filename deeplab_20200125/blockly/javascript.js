Blockly.JavaScript['deeplab_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_model_ = block.getFieldValue('model_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_result_ = block.getFieldValue('result_');
  var code = 'deeplab_video(' + value_width_ + ',' + value_height_ + ',"' + value_model_ + '","' + value_mirrorimage_ + '","' + value_result_ + '");\n';
  return code;
};

Blockly.JavaScript['deeplab_get'] = function(block) { 
  var code = 'deeplab_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
