Blockly.JavaScript['trackingcolor_set'] = function(block) {
  var value_display = block.getFieldValue('display_');
  var value_pixel = block.getFieldValue('pixel_');
  var value_result = block.getFieldValue('result_');
  var value_mirrorimage = block.getFieldValue('mirrorimage_');
  var value_opacity = block.getFieldValue('opacity_');
  var code = 'trackingcolor_set("' + value_display + '","' + value_pixel + '","' + value_result + '","' + value_mirrorimage + '","' + value_opacity + '");\n';
  return code;
};

Blockly.JavaScript['trackingcolor_range_set'] = function(block) {
  var value_rect = block.getFieldValue('rect_');
  var value_display = block.getFieldValue('display_');
  var value_left = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'trackingcolor_range_set("' + value_rect + '","' + value_display + '",' + value_left + ',' + value_top + ');\n';
  return code;
};

Blockly.JavaScript['trackingcolor_custom'] = function(block) {
  var value_rect = block.getFieldValue('rect_');
  var value_rmin = Blockly.JavaScript.valueToCode(block, 'rmin_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_rmax = Blockly.JavaScript.valueToCode(block, 'rmax_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_gmin = Blockly.JavaScript.valueToCode(block, 'gmin_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_gmax = Blockly.JavaScript.valueToCode(block, 'gmax_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bmin = Blockly.JavaScript.valueToCode(block, 'bmin_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bmax = Blockly.JavaScript.valueToCode(block, 'bmax_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'trackingcolor_custom("' + value_rect + '",' + value_rmin + ',' + value_rmax + ',' + value_gmin + ',' + value_gmax + ',' + value_bmin + ',' + value_bmax + ');\n';
  return code;
};

Blockly.JavaScript['trackingcolor_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'trackingcolor_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['trackingcolor_get'] = function(block) { 
  var value_rect = block.getFieldValue('rect_');
  var code = 'trackingcolor_get("' + value_rect + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['trackingcolor_object'] = function(block) { 
  var value_rect = block.getFieldValue('rect_');
  var value_index = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = block.getFieldValue('data_');
  var code = 'trackingcolor_object("' + value_rect + '",' + value_index + ',"' + value_data + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['trackingcolor_get_number'] = function(block) { 
  var value_rect = block.getFieldValue('rect_');
  var code = 'trackingcolor_get_number("' + value_rect + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['trackingcolor_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'trackingcolor_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['trackingcolor_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'trackingcolor_startvideo_stream(' + value_src_ + ');\n';
  return code;
};

Blockly.JavaScript['trackingcolor_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'trackingcolor_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['trackingcolor_clear'] = function(block) { 
  var code = 'trackingcolor_clear();\n';
  return code;
};

Blockly.JavaScript['trackingcolor_pause'] = function(block) { 
  var value_time = Blockly.JavaScript.valueToCode(block, 'time_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'trackingcolor_state(0);setTimeout(function(){trackingcolor_state(1);}, '+value_time+');\n';
  return code;
};

Blockly.JavaScript['trackingcolor_recognitied'] = function(block) { 
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'trackingcolor_recognitionFinish = async function() {\ntrackingcolor_state(0);\n' + statements_do + '\ntrackingcolor_state(1);};\n';
  return code;
};

Blockly.JavaScript['trackingcolor_canvas_get'] = function(block) { 
  var code = '"trackingcolor"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
