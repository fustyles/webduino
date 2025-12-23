Blockly.JavaScript['faces_video'] = function(block) {
  var value_video_ = block.getFieldValue('video_');
  var value_skeleton_ = block.getFieldValue('skeleton_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'faces_video("' + value_video_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '","' + value_skeleton_ + '");\n';
  return code;
};

Blockly.JavaScript['faces_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'faces_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['faces_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'faces_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['faces_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'faces_startvideo_stream(' + value_src_ + ');\n';
  return code;
};

Blockly.JavaScript['faces_recognitied'] = function(block) { 
  var value_status = block.getFieldValue('status_');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  
  if (value_status=="Y")
	  var code = 'faces_recognitionFinish = async function() {\n  faces_state(0);\n' + statements_do + '\n  faces_state(1);\n};\n';
  else
	  var code = 'faces_unrecognitionFinish = async function() {\n  faces_state(0);\n' + statements_do + '\n  faces_state(1);\n};\n';
  return code;  
};

Blockly.JavaScript['faces_position'] = function(block) {	
  var value_part_ = Blockly.JavaScript.valueToCode(block, 'part_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data_ = block.getFieldValue('data_');
  var code = 'faces_position(Number(' + value_part_ + ')-1,"' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faces_lefteye_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'faces_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faces_righteye_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'faces_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faces_nose_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'faces_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faces_mouth_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'faces_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faces_distance'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'faces_distance(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faces_angle'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'faces_angle(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faces_angle_3points'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2_ = Blockly.JavaScript.valueToCode(block, 'x2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2_ = Blockly.JavaScript.valueToCode(block, 'y2_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'faces_angle_3points(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ','+ value_x2_ + ',' + value_y2_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faces_angle_axis'] = function (block) {
  var value_part1 = Blockly.JavaScript.valueToCode(block, 'part1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_part2 = Blockly.JavaScript.valueToCode(block, 'part2_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.JavaScript.valueToCode(block, 'adjust_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'facecs_part_angle("face", Number(' + value_part1 + ')-1, Number(' + value_part2 + ')-1,"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faces_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'faces_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['faces_canvas_get'] = function(block) { 
  var code = '"canvasElement"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faces_clip_element'] = function(block) { 
  var canvasid = Blockly.JavaScript.valueToCode(block, 'canvasid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var alpha = Blockly.JavaScript.valueToCode(block, 'alpha', Blockly.JavaScript.ORDER_ATOMIC)||1;
  var drawpath = Blockly.JavaScript.valueToCode(block, 'drawpath', Blockly.JavaScript.ORDER_ATOMIC)||"";
  drawpath = drawpath.replace(/\(/g,"").replace(/\)/g,"");  
  drawpath = drawpath.replace("['","[").replace("']","]").replace(/','/g,"], [").replace(/', '/g,"], [");
  drawpath = "["+drawpath.replace('["',"[").replace('"]',"]").replace(/","/g,"], [").replace(/", "/g,"], [")+"]";
  
  var code = 'faces_clip_video("gamecanvas_"+'+canvasid+', "gamecanvas_faces", '+alpha+', '+drawpath+');\n';
  return code;
};

Blockly.JavaScript['faces_clip_color'] = function(block) { 
  var canvasid = Blockly.JavaScript.valueToCode(block, 'canvasid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var drawcolor = Blockly.JavaScript.valueToCode(block, 'drawcolor', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var drawpath = Blockly.JavaScript.valueToCode(block, 'drawpath', Blockly.JavaScript.ORDER_ATOMIC)||"";
  drawpath = drawpath.replace(/\(/g,"").replace(/\)/g,"");  
  drawpath = drawpath.replace("['","[").replace("']","]").replace(/','/g,"], [").replace(/', '/g,"], [");
  drawpath = "["+drawpath.replace('["',"[").replace('"]',"]").replace(/","/g,"], [").replace(/", "/g,"], [")+"]";
  
  var code = 'faces_clip_color("gamecanvas_"+'+canvasid+', "gamecanvas_faces", '+drawcolor+', '+drawpath+');\n';
  return code;
};

Blockly.JavaScript['faces_clip_image'] = function(block) { 
  var canvasid = Blockly.JavaScript.valueToCode(block, 'canvasid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var imageid = Blockly.JavaScript.valueToCode(block, 'imageid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var drawpath = Blockly.JavaScript.valueToCode(block, 'drawpath', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var alpha = Blockly.JavaScript.valueToCode(block, 'alpha', Blockly.JavaScript.ORDER_ATOMIC)||1;
  drawpath = drawpath.replace(/\(/g,"").replace(/\)/g,"");  
  drawpath = drawpath.replace("['","[").replace("']","]").replace(/','/g,"], [").replace(/', '/g,"], [");
  drawpath = "["+drawpath.replace('["',"[").replace('"]',"]").replace(/","/g,"], [").replace(/", "/g,"], [")+"]";
  
  var code = 'faces_clip_image("gamecanvas_"+'+canvasid+', "gameimage_"+'+imageid+', '+alpha+', '+drawpath+');\n';
  return code;
};

Blockly.JavaScript['faces_points'] = function (block) {
  var points = block.getFieldValue('points');
  var code = '"'+points+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];  
};

