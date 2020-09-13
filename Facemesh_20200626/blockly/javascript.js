Blockly.JavaScript['facemesh_set'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_height = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_video = block.getFieldValue('video_');
  var value_point = block.getFieldValue('point_');
  var value_result = block.getFieldValue('result_');
  var value_mirrorimage = block.getFieldValue('mirrorimage_');
  var value_opacity = block.getFieldValue('opacity_');
  var code = 'facemesh_set(' + value_width + ',' + value_height + ',"' + value_video + '","' + value_point + '","' + value_result + '","' + value_mirrorimage + '","' + value_opacity + '");\n';
  return code;
};

Blockly.JavaScript['facemesh_get'] = function(block) {
  var value_person = block.getFieldValue('person_');
  var value_point = block.getFieldValue('point_');
  var code = 'facemesh_get("' + value_person + '","' + value_point + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['facemesh_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'facemesh_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['facemesh_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'facemesh_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};