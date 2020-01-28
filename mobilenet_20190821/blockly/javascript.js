Blockly.JavaScript['mobilenet_object'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mobilenet_object("' + value_object_ + '",' + value_index_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mobilenet_object_number'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var code = 'mobilenet_object_number("' + value_object_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mobilenet_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'mobilenet_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");';
  return code;
};
