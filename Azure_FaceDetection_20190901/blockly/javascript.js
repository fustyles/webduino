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

Blockly.JavaScript['azure_facedetection_detect_url'] = function(block) {
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_showtime_ = Blockly.JavaScript.valueToCode(block, 'showtime_', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'azurefacedetection_detect_url(' + value_url_ + ',' + value_showtime_ + ');\n';
  return code;
};

Blockly.JavaScript['azure_facedetection_get'] = function(block) { 
  var code = 'azurefacedetection_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_facedetection_get_persondata'] = function(block) { 
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	  
  var code = 'azurefacedetection_get_persondata(' + value_index_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_facedetection_get_persondata_property'] = function(block) { 
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	
  var value_property_ = block.getFieldValue('property_');  
  var code = 'azurefacedetection_get_persondata_property(' + value_index_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_facedetection_get_persons'] = function(block) { 
  var code = 'azurefacedetection_get_persons()';
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
