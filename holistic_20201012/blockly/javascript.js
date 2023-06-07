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

Blockly.JavaScript['holistic_pause'] = function(block) { 
  var value_time = Blockly.JavaScript.valueToCode(block, 'time_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'holistic_state(0);setTimeout(function(){holistic_state(1);}, '+value_time+');\n';
  return code;
};

Blockly.JavaScript['holistic_clear'] = function(block) { 
  var code = 'holistic_clear();\n';
  return code;
};

Blockly.JavaScript['holistic_recognitied'] = function(block) { 
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'holistic_recognitionFinish = async function() {\nholistic_state(0);\n' + statements_do + '\nholistic_state(1);};\n';
  return code;
};

Blockly.JavaScript['holistic_unrecognitied'] = function(block) { 
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'holistic_unrecognitionFinish = async function() {\nholistic_state(0);\n' + statements_do + '\nholistic_state(1);};\n';
  return code;
};

Blockly.JavaScript['holistic_clip_element'] = function(block) { 
  var canvasid = Blockly.JavaScript.valueToCode(block, 'canvasid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var drawpath = Blockly.JavaScript.valueToCode(block, 'drawpath', Blockly.JavaScript.ORDER_ATOMIC)||"";
  drawpath = drawpath.replace(/\(/g,"").replace(/\)/g,"");
  drawpath = drawpath.replace("['","[").replace("']","]").replace(/','/g,"], [").replace(/', '/g,"], [");
  drawpath = "["+drawpath.replace('["',"[").replace('"]',"]").replace(/","/g,"], [").replace(/", "/g,"], [")+"]";
  
  var code = 'holistic_clip("gamecanvas_"+'+canvasid+', "gamecanvas_canvasElement", "", '+drawpath+');\n';
  return code;
};

Blockly.JavaScript['holistic_clip_color'] = function(block) { 
  var canvasid = Blockly.JavaScript.valueToCode(block, 'canvasid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var drawcolor = Blockly.JavaScript.valueToCode(block, 'drawcolor', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var drawpath = Blockly.JavaScript.valueToCode(block, 'drawpath', Blockly.JavaScript.ORDER_ATOMIC)||"";
  drawpath = drawpath.replace(/\(/g,"").replace(/\)/g,"");
  drawpath = drawpath.replace("['","[").replace("']","]").replace(/','/g,"], [").replace(/', '/g,"], [");
  drawpath = "["+drawpath.replace('["',"[").replace('"]',"]").replace(/","/g,"], [").replace(/", "/g,"], [")+"]";
  
  var code = 'holistic_clip("gamecanvas_"+'+canvasid+', "gamecanvas_canvasElement", '+drawcolor+', '+drawpath+');\n';
  return code;
};

Blockly.JavaScript['holistic_points'] = function (block) {
  var points = block.getFieldValue('points');
  if (points=="0")
	  points = "'134,174,158,159,160,161,162,247,34,8,164,145,146,154,155,156'";
  else if (points=="1")
	  points = "'363,399,385,386,387,388,389,467,264,250,391,374,375,381,382,383'";
  else if (points=="2")
	  points = "'244,191,57,29,28,30,31,248,131,26,111,25,24,23,27,113'";
  else if (points=="3")
	  points = "'464,415,287,259,258,260,261,468,360,256,340,255,254,253,257,342'";
  else if (points=="4")
	  points = "'108,67,106,64,71,47,54,53,66,56'";
  else if (points=="5")
	  points = "'337,297,335,294,284,283,296,286'";
  else if (points=="6")
	  points = "'197,237,199,210,50,103,65,236,60,76,61,21,243,142,95,371,463,251,291,306,290,456,295,332,280,430,421,457,420'";
  else if (points=="7")
	  points = "'292,410,271,270,268,1,38,40,41,186,62,147,92,182,85,18,315,406,322,376'";
  else if (points=="8")
	  points = "'292,410,271,270,268,1,38,40,41,186,62,79,192,81,82,83,14,313,312,311,416,309'";
  else if (points=="9")
	  points = "'292,376,322,406,315,18,85,182,92,147,62,79,96,89,179,88,15,318,403,319,325,309'";
  else if (points=="10")
	  points = "'200,209,33,212,211,215,188,112,144,157,71,64,106,67,108,10,337,297,335,294,301,384,266,341,412,435,431,432,263,429'";
  
  var code = points;
  return [code, Blockly.JavaScript.ORDER_NONE];  
};
