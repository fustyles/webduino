Blockly.JavaScript['azure_facedetection_settings'] = function(block) { 
  var value_resourcename_ = Blockly.JavaScript.valueToCode(block, 'resourcename_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key_ = Blockly.JavaScript.valueToCode(block, 'key_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'azurefacedetection_settings(' + value_resourcename_ + ',' + value_key_ + ');\n';
  return code;
};

Blockly.JavaScript['azure_facedetection_detect'] = function(block) {
  var value_showtime_ = Blockly.JavaScript.valueToCode(block, 'showtime_', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'azurefacedetection_detect(' + value_showtime_ + ');\n';
  return code;
};

Blockly.JavaScript['azure_facedetection_get'] = function(block) { 
  var code = 'azurefacedetection_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_facedetection_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'azurefacedetection_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_opacity_ + '");\n';
  return code;
};
