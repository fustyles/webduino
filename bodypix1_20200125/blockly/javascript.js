Blockly.JavaScript['bodypix1_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_func_ = block.getFieldValue('func_');
  var code = 'bodypix1_video(' + value_width_ + ',' + value_height_ + ',"' + value_mirrorimage_ + '","' + value_func_ + '");\n';
  return code;
};