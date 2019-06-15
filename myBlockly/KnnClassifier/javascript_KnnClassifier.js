Blockly.JavaScript['knnclassifier_open'] = function (block) {
  var code = 'knn_classifier_open();\n';
  return code;
};

Blockly.JavaScript['knnclassifier_proportion'] = function(block) { 
  var value_property_ = block.getFieldValue('property_');
  var code = 'knn_classifier_proportion("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
