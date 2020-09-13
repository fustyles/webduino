Blockly.JavaScript['faceapi_face'] = function(block) { 
  var value_face_ = Blockly.JavaScript.valueToCode(block, 'face_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'faceapi_face(' + value_face_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faceapi_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame_ = block.getFieldValue('frame_');
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'faceapi_video(' + value_width_ + ',' + value_height_ + ',"' + value_frame_ + '","' + value_result_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['faceapi_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'faceapi_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['faceapi_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'faceapi_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};