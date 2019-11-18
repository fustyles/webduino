Blockly.JavaScript['azure_facefindsimilar_settings'] = function(block) { 
  var value_resourcename_ = Blockly.JavaScript.valueToCode(block, 'resourcename_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key_ = Blockly.JavaScript.valueToCode(block, 'key_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facelistid_ = Blockly.JavaScript.valueToCode(block, 'facelistid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_faceid_ = Blockly.JavaScript.valueToCode(block, 'faceid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_maxnum_ = Blockly.JavaScript.valueToCode(block, 'maxnum_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mode_ = block.getFieldValue('mode_');

  var code = 'azurefacefindsimilar_settings(' + value_resourcename_ + ',' + value_key_ + ',' + value_facelistid_ + ',' + value_faceid_ + ',' + value_maxnum_ + ',"' + value_mode_ + '");\n';
  return code;
};

Blockly.JavaScript['azure_facefindsimilar_detect'] = function(block) {
  var code = 'azurefacefindsimilar_detect();\n';
  return code;
};

Blockly.JavaScript['azure_facefindsimilar_get'] = function(block) { 
  var code = 'azurefacefindsimilar_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_facefindsimilar_get_persondata'] = function(block) { 
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	  
  var code = 'azurefacefindsimilar_get_persondata(' + value_index_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_facefindsimilar_get_persons'] = function(block) { 
  var code = 'azurefacefindsimilar_get_persons()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_facefindsimilar_get_max'] = function(block) { 
  var value_property_ = block.getFieldValue('property_');  
  var code = 'azurefacefindsimilar_get_max("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
