Blockly.JavaScript['poses_part_angle'] = function (block) {
  var value_hand = Blockly.JavaScript.valueToCode(block, 'hand_', Blockly.JavaScript.ORDER_ATOMIC);	
  var value_part1 = block.getFieldValue('part1_');
  var value_part2 = block.getFieldValue('part2_'); 
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.JavaScript.valueToCode(block, 'adjust_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'poses_part_angle('+ value_hand + ', Number(' + value_part1 + '), Number(' + value_part2 + '),"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];  
};

Blockly.JavaScript['poses_video'] = function(block) {
  var value_video_ = block.getFieldValue('video_');
  var value_skeleton_ = block.getFieldValue('skeleton_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'poses_video("' + value_video_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '","' + value_skeleton_ + '");\n';
  return code;
};

Blockly.JavaScript['poses_person'] = function(block) { 
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'poses_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['poses_distance'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'poses_distance(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['poses_angle'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'poses_angle(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['poses_angle_3points'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2_ = Blockly.JavaScript.valueToCode(block, 'x2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2_ = Blockly.JavaScript.valueToCode(block, 'y2_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'poses_angle_3points(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ','+ value_x2_ + ',' + value_y2_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['poses_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'poses_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['poses_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'poses_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['poses_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'poses_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['poses_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'poses_startvideo_stream(' + value_src_ + ');\n';
  return code;
};

Blockly.JavaScript['poses_recognitied'] = function(block) { 
  var value_status = block.getFieldValue('status_');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  
  if (value_status=="Y")
	  var code = 'poses_recognitionFinish = async function() {\n  poses_state(0);\n' + statements_do + '\n  poses_state(1);\n};\n';
  else
	  var code = 'poses_unrecognitionFinish = async function() {\n  poses_state(0);\n' + statements_do + '\n  poses_state(1);\n};\n';
  return code;  
};

Blockly.JavaScript['poses_canvas_get'] = function(block) { 
  var element_ = block.getFieldValue('element_');
  if (element_=="VIDEO"||element_=="IMAGE")
  	var code = '"poses"';
  else
  	var code = '"canvasElement"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
