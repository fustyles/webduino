Blockly.JavaScript['azure_face_settings'] = function(block) { 
  var value_resourcename_ = Blockly.JavaScript.valueToCode(block, 'resourcename_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key_ = Blockly.JavaScript.valueToCode(block, 'key_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'azureface_settings(' + value_resourcename_ + ',' + value_key_ + ');\n';
  return code;
};

Blockly.JavaScript['azure_face_detect'] = function(block) { 
  var code = 'azureface_detect();\n';
  return code;
};

Blockly.JavaScript['azure_face_get'] = function(block) { 
  var code = 'azureface_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_face_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'azureface_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_opacity_ + '");\n';
  return code;
};
