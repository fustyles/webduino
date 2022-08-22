Blockly.JavaScript['faceapidetect_face'] = function(block) { 
  var value_face_ = Blockly.JavaScript.valueToCode(block, 'face_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'faceapidetect_face(' + value_face_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faceapidetect_number'] = function(block) { 
  var code = 'faceapidetect_number()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faceapidetect_video'] = function(block) { 
  var value_frame_ = block.getFieldValue('frame_');
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'faceapidetect_video("' + value_frame_ + '","' + value_result_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['faceapidetect_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'faceapidetect_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['faceapidetect_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'faceapidetect_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['faceapidetect_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'faceapidetect_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['faceapidetect_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'faceapidetect_startvideo_stream(' + value_src_ + ');\n';
  return code;
};

Blockly.JavaScript['faceapidetect_clear'] = function(block) { 
  var code = 'faceapidetect_clear();\n';
  return code;
};

Blockly.JavaScript['faceapidetect_pause'] = function(block) { 
  var value_time = Blockly.JavaScript.valueToCode(block, 'time_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'faceapidetect_state(0);setTimeout(function(){faceapidetect_state(1);}, '+value_time+');\n';
  return code;
};

Blockly.JavaScript['faceapidetect_recognitied'] = function(block) { 
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'faceapidetect_recognitionFinish = async function() {\nfaceapidetect_state(0);\n' + statements_do + '\nfaceapidetect_state(1);};\n';
  return code;
};

Blockly.JavaScript['faceapidetect_canvas_get'] = function(block) { 
  var code = '"faceapidetect"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
