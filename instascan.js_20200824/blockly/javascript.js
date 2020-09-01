Blockly.JavaScript['instascan_get'] = function(block) { 
  var code = 'instascan_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['instascan_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'instascan_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['instascan_clear'] = function(block) { 
  var code = 'instascan_clear();\n';
  return code;
};

Blockly.JavaScript['video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};