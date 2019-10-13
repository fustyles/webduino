Blockly.JavaScript['azure_classifyimage_settings'] = function(block) { 
  var value_endpointhost_ = Blockly.JavaScript.valueToCode(block, 'endpointhost_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_predictionkey_ = Blockly.JavaScript.valueToCode(block, 'predictionkey_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_projectid_ = Blockly.JavaScript.valueToCode(block, 'projectid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_iterationname_ = Blockly.JavaScript.valueToCode(block, 'iterationname_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_function_ = block.getFieldValue('function_');  
  var code = 'azureclassifyimage_settings(' + value_endpointhost_ + ',' + value_predictionkey_ + ',' + value_projectid_ + ',' + value_iterationname_ + ',"' + value_function_ + '");\n';
  return code;
};

Blockly.JavaScript['azure_classifyimage_detect'] = function(block) {
  var value_showtime_ = Blockly.JavaScript.valueToCode(block, 'showtime_', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'azureclassifyimage_detect(' + value_showtime_ + ');\n';
  return code;
};

Blockly.JavaScript['azure_classifyimage_get'] = function(block) { 
  var code = 'azureclassifyimage_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_classifyimage_get_objectdata'] = function(block) { 
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	  
  var code = 'azureclassifyimage_get_objectdata(' + value_index_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_classifyimage_get_objects'] = function(block) { 
  var code = 'azureclassifyimage_get_objects()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_classifyimage_max'] = function(block) { 
  var value_property_ = block.getFieldValue('property_');  
  var code = 'azureclassifyimage_max("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_classifyimage_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'azureclassifyimage_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_opacity_ + '");\n';
  return code;
};
