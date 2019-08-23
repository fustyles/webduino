Blockly.JavaScript['posenet_person'] = function(block) { 
  var value_person_ = Blockly.JavaScript.valueToCode(block, 'person_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_part_ = block.getFieldValue('part_');
  var code = 'posenet_person(' + value_person_ + ',"' + value_part_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['posenet_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_persons_ = block.getFieldValue('persons_');
  var value_scorelimit_ = block.getFieldValue('scorelimit_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_result_ = block.getFieldValue('result_');
  var value_skeleton_ = block.getFieldValue('skeleton_');
  var code = 'posenet_video(' + value_width_ + ',' + value_height_ + ',"' + value_persons_ + '","' + value_scorelimit_ + '","' + value_mirrorimage_ + '","' + value_result_ + '","' + value_skeleton_ + '");';
  return code;
};
