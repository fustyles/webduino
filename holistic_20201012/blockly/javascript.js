Blockly.JavaScript['holistic_video'] = function(block) { 
  var value_video_ = block.getFieldValue('video_');
  var value_face_ = block.getFieldValue('face_');
  var value_pose_ = block.getFieldValue('pose_');
  var value_lefthand_ = block.getFieldValue('lefthand_');
  var value_righthand_ = block.getFieldValue('righthand_');	
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'holistic_video("' + value_video_ + '","' + value_face_ + '","' + value_pose_ + '","' + value_lefthand_ + '","' + value_righthand_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['holistic_face_position'] = function(block) {
  var value_part_ = Blockly.JavaScript.valueToCode(block, 'part_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_face_position(Number(' + value_part_ + ')-1,"' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_face_lefteye_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_face_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_face_righteye_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_face_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_face_nose_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_face_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_face_mouth_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_face_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_pose_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_pose_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_lefthand_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_lefthand_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_righthand_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_righthand_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_distance'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'holistic_distance(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_angle'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'holistic_angle(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'holistic_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['holistic_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'holistic_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['holistic_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'holistic_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['holistic_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'holistic_startvideo_stream(' + value_src_ + ');\n';
  return code;
};

Blockly.JavaScript['holistic_canvas_get'] = function(block) { 
  var code = '"canvasElement"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_all_poistion'] = function(block) {
  var value_part_ = block.getFieldValue('part_'); 
  var code = 'holistic_all_position("' + value_part_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_face_angle'] = function (block) {
  var value_part1 = Blockly.JavaScript.valueToCode(block, 'part1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_part2 = Blockly.JavaScript.valueToCode(block, 'part2_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.JavaScript.valueToCode(block, 'adjust_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'holistic_part_angle("face", Number(' + value_part1 + ')-1, Number(' + value_part2 + ')-1,"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['holistic_pose_angle'] = function (block) {
  var value_part1 = block.getFieldValue('part1_');
  var value_part2 = block.getFieldValue('part2_');
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.JavaScript.valueToCode(block, 'adjust_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'holistic_part_angle("pose", Number(' + value_part1 + '), Number(' + value_part2 + '),"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];  
};

Blockly.JavaScript['holistic_lefthand_angle'] = function (block) {
  var value_part1 = block.getFieldValue('part1_');
  var value_part2 = block.getFieldValue('part2_'); 
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.JavaScript.valueToCode(block, 'adjust_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'holistic_part_angle("lefthand", Number(' + value_part1 + '), Number(' + value_part2 + '),"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];  
};

Blockly.JavaScript['holistic_righthand_angle'] = function (block) {
  var value_part1 = block.getFieldValue('part1_');
  var value_part2 = block.getFieldValue('part2_');  
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.JavaScript.valueToCode(block, 'adjust_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'holistic_part_angle("righthand", Number(' + value_part1 + '), Number(' + value_part2 + '),"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];  
};