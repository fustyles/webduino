Blockly.JavaScript['blazeface_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_scorelimit_ = block.getFieldValue('scorelimit_');
  var value_frame_ = block.getFieldValue('frame_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'blazeface_video(' + value_width_ + ',' + value_height_ + ',"' + value_scorelimit_ + '","' + value_frame_ + '","' + value_mirrorimage_ + '","' + value_result_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['blazeface_person'] = function(block) { 
  var value_person_ = Blockly.JavaScript.valueToCode(block, 'person_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_part_ = block.getFieldValue('part_');
  var code = 'blazeface_get(' + value_person_ + ',"' + value_part_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blazeface_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'blazeface_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['blazeface_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'blazeface_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};