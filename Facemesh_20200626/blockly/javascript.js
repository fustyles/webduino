Blockly.JavaScript['facemesh_set'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_height = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);   
  var value_display = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_point = Blockly.JavaScript.valueToCode(block, 'point_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'facemesh_set(' + value_width + ',' + value_height + ',' + value_display + ',' + value_point + ');\n';
  return code;
};

Blockly.JavaScript['facemesh_get'] = function(block) { 
  var value_point = block.getFieldValue('point_');
  var code = 'facemesh_get("' + value_point + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};