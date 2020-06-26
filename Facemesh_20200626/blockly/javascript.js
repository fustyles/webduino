Blockly.JavaScript['facemesh_set'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_height = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);     
  var value_point = Blockly.JavaScript.valueToCode(block, 'point_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result = block.getFieldValue('result_');
  var code = 'facemesh_set(' + value_width + ',' + value_height + ',' + value_point + ',"' + value_result + '");\n';
  return code;
};

Blockly.JavaScript['facemesh_get'] = function(block) {
  var value_person = block.getFieldValue('person_');
  var value_point = block.getFieldValue('point_');
  var code = 'facemesh_get("' + value_person + '","' + value_point + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};