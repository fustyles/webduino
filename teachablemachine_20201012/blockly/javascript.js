Blockly.JavaScript['teachablemachine_video'] = function(block) { 
  var value_result_ = block.getFieldValue('result_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'teachablemachine_video("' + value_result_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['teachablemachine_model'] = function(block) {
  var value_project_ = block.getFieldValue('project_');
  var value_model_ = Blockly.JavaScript.valueToCode(block, 'model_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'teachablemachine_model("' + value_project_ + '",' + value_model_ + ');\n';
  return code;
};

Blockly.JavaScript['teachablemachine_result'] = function(block) { 
  var value_result_ = block.getFieldValue('result_');
  var code = 'teachablemachine_result("' + value_result_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['teachablemachine_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'teachablemachine_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['teachablemachine_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'teachablemachine_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['teachablemachine_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'teachablemachine_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['teachablemachine_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'teachablemachine_startvideo_stream(' + value_src_ + ');\n';
  return code;
};

Blockly.JavaScript['teachablemachine_pause'] = function(block) { 
  var value_time = Blockly.JavaScript.valueToCode(block, 'time_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'teachablemachine_state(0);setTimeout(function(){teachablemachine_state(1);}, '+value_time+');\n';
  return code;
};
