Blockly.JavaScript['knn-classifier_open'] = function (block) {
  var code = 'knn-classifier_open();\n';
  return code;
};

Blockly.JavaScript['knn-classifier_proportion'] = function(block) { 
  var value_property_ = block.getFieldValue('property_');
  var code = 'knn-classifier_proportion("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
