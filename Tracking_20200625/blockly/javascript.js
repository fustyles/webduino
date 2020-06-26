Blockly.JavaScript['trackcolor_set'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_height = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);   
  var value_display = block.getFieldValue('display_');
  var value_pixel = block.getFieldValue('pixel_');
  var value_result = block.getFieldValue('result_');
  var value_mirrorimage = block.getFieldValue('mirrorimage_');
  var value_opacity = block.getFieldValue('opacity_');
  var code = 'trackcolor_set(' + value_width + ',' + value_height + ',"' + value_display + '","' + value_pixel + '","' + value_result + '","' + value_mirrorimage + '","' + value_opacity + '");\n';
  return code;
};

Blockly.JavaScript['trackcolor_custom'] = function(block) {
  var value_rect = block.getFieldValue('rect_');
  var value_rmin = Blockly.JavaScript.valueToCode(block, 'rmin_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_rmax = Blockly.JavaScript.valueToCode(block, 'rmax_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_gmin = Blockly.JavaScript.valueToCode(block, 'gmin_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_gmax = Blockly.JavaScript.valueToCode(block, 'gmax_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bmin = Blockly.JavaScript.valueToCode(block, 'bmin_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bmax = Blockly.JavaScript.valueToCode(block, 'bmax_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'trackcolor_custom("' + value_rect + '",' + value_rmin + ',' + value_rmax + ',' + value_gmin + ',' + value_gmax + ',' + value_bmin + ',' + value_bmax + ');\n';
  return code;
};

Blockly.JavaScript['trackcolor_get'] = function(block) { 
  var value_rect = block.getFieldValue('rect_');
  var code = 'trackcolor_get("' + value_rect + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['trackcolor_get_number'] = function(block) { 
  var value_rect = block.getFieldValue('rect_');
  var code = 'trackcolor_get_number("' + value_rect + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};