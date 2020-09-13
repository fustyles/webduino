Blockly.JavaScript['handpose_point'] = function(block) { 
  var value_point_ = block.getFieldValue('point_');
  var code = 'handpose_point("' + value_point_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['handpose_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_result_ = block.getFieldValue('result_');
  var value_skeleton_ = block.getFieldValue('skeleton_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var value_video_ = block.getFieldValue('video_');
  var code = 'handpose_video(' + value_width_ + ',' + value_height_ + ',"' + value_mirrorimage_ + '","' + value_result_ + '","' + value_skeleton_ + '","' + value_opacity_ + '","' + value_video_ + '");\n';
  return code;
};

Blockly.JavaScript['handpose_distance'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'handpose_distance(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['handpose_angle'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'handpose_angle(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['handpose_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'handpose_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['handpose_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'handpose_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};