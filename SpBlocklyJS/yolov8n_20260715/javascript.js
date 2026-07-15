Blockly.JavaScript['yolov8n_video'] = function(block) {
  var value_modelpath_ = Blockly.JavaScript.valueToCode(block, 'modelpath_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_classes_  = Blockly.JavaScript.valueToCode(block, 'classes_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_scorelimit_ = block.getFieldValue('scorelimit_');
  var value_result_ = block.getFieldValue('result_');
  var value_frame_ = block.getFieldValue('frame_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'yolov8n_video(' + value_modelpath_ + ',' + value_classes_ + ',' + value_scorelimit_ + ',"' + value_result_ + '","' + value_frame_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['yolov8n_object'] = function(block) { 
  var value_class_ = Blockly.JavaScript.valueToCode(block, 'class_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_data_ = block.getFieldValue('data_');
  var code = 'yolov8n_object(' + value_class_ + ',' + value_index_ + ',"' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['yolov8n_object_number'] = function(block) { 
  var value_class_ = Blockly.JavaScript.valueToCode(block, 'class_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'yolov8n_object_number(' + value_class_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['yolov8n_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'yolov8n_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['yolov8n_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'yolov8n_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['yolov8n_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'yolov8n_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['yolov8n_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'yolov8n_startvideo_stream(' + value_src_ + ');\n';
  return code;
};

Blockly.JavaScript['yolov8n_canvas_get'] = function(block) { 
  var code = '"yolov8n"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['yolov8n_clear'] = function(block) { 
  var code = 'yolov8n_clear();\n';
  return code;
};

Blockly.JavaScript['yolov8n_pause'] = function(block) { 
  var value_time = Blockly.JavaScript.valueToCode(block, 'time_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'yolov8n_state(0);setTimeout(function(){yolov8n_state(1);}, '+value_time+');\n';
  return code;
};

Blockly.JavaScript['yolov8n_recognitied'] = function(block) { 
  var value_status = block.getFieldValue('status_');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  
  if (value_status=="Y")
	  var code = 'yolov8n_recognitionFinish = async function() {\n  yolov8n_state(0);\n' + statements_do + '\n  yolov8n_state(1);\n};\n';
  else
	  var code = 'yolov8n_unrecognitionFinish = async function() {\n  yolov8n_state(0);\n' + statements_do + '\n  yolov8n_state(1);\n};\n';
  return code;  
};

Blockly.JavaScript['yolov8n_unrecognitied'] = function(block) { 
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'yolov8n_unrecognitionFinish = async function() {\n  yolov8n_state(0);\n  ' + statements_do + '\n  yolov8n_state(1);\n};\n';
  return code;
};

Blockly.JavaScript['yolov8n_xy_in_triangle'] = function(block) {
	var x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC)||0;	
	var x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC)||0;
	
	var code = 'yolov8n_xy_in_triangle('+x+', '+y+', '+x1+', '+y1+', '+x2+', '+y2+', '+x3+', '+y3+')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['yolov8n_xy_in_quadrilateral'] = function(block) {
	var x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC)||0;	
	var x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var x4 = Blockly.JavaScript.valueToCode(block, 'x4', Blockly.JavaScript.ORDER_ATOMIC)||0;
	var y4 = Blockly.JavaScript.valueToCode(block, 'y4', Blockly.JavaScript.ORDER_ATOMIC)||0;
	
	var code = 'yolov8n_xy_in_quadrilateral('+x+', '+y+', '+x1+', '+y1+', '+x2+', '+y2+', '+x3+', '+y3+', '+x4+', '+y4+')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
