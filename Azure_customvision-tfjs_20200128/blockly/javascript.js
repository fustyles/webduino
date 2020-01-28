Blockly.JavaScript['customvision_tfjs_object'] = function(block) { 
  var value_object_ = Blockly.JavaScript.valueToCode(block, 'object_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'customvision_tfjs_object(' + value_object_ + ',' + value_index_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['customvision_tfjs_object_number'] = function(block) { 
  var value_object_ = Blockly.JavaScript.valueToCode(block, 'object_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'customvision_tfjs_object_number("' + value_object_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['customvision_tfjs_object_max'] = function(block) { 
  var code = 'customvision_tfjs_object_max()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['customvision_tfjs_video'] = function(block) { 
  var value_func_ = block.getFieldValue('func_');
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_path_ = Blockly.JavaScript.valueToCode(block, 'path_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_timer_ = Blockly.JavaScript.valueToCode(block, 'timer_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'customvision_tfjs_video("' + value_func_ + '",' + value_path_ + ',' + value_timer_ + ',' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '");\n';
  return code;
};

Blockly.JavaScript['customvision_tfjs_detect'] = function(block) { 
  var value_scorelimit_ = Blockly.JavaScript.valueToCode(block, 'scorelimit_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'customvision_tfjs_detect('+value_scorelimit_+');\n';
  return code;
};
