Blockly.JavaScript['azure_facetofaceverify_settings'] = function(block) { 
  var value_resourcename_ = Blockly.JavaScript.valueToCode(block, 'resourcename_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key_ = Blockly.JavaScript.valueToCode(block, 'key_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_faceid1_ = Blockly.JavaScript.valueToCode(block, 'faceid1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_faceid2_ = Blockly.JavaScript.valueToCode(block, 'faceid2_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'azurefacetofaceverify_settings(' + value_resourcename_ + ',' + value_key_ + ',' + value_faceid1_ + ',' + value_faceid2_ + ');\n';
  return code;
};

Blockly.JavaScript['azure_facetofaceverify_detect'] = function(block) {	
  var code = 'azurefacetofaceverify_detect();\n';
  return code;
};

Blockly.JavaScript['azure_facetofaceverify_get'] = function(block) { 
  var value_property_ = block.getFieldValue('property_');  
  var code = 'azurefacetofaceverify_get("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['azure_facetofaceverify_getdata'] = function(block) { 
  var code = 'azurefacetofaceverify_getdata()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
