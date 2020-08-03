Blockly.JavaScript['bodypix2_list'] = function(block) { 
  var code = 'bodypix2_list()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['bodypix2_person'] = function(block) { 
  var value_person_ = Blockly.JavaScript.valueToCode(block, 'person_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'bodypix2_person(' + value_person_ + ',"' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bodypix2_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_skeleton_ = block.getFieldValue('skeleton_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_func_ = block.getFieldValue('func_');
  var code = 'bodypix2_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_skeleton_ + '","' + value_mirrorimage_ + '","' + value_func_ + '");\n';
  return code;
};