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