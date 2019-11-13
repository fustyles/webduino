Blockly.JavaScript['knn_classifier_open'] = function (block) {
  var code = 'knn_classifier_open();\n';
  return code;
};

Blockly.JavaScript['knn_classifier_proportion'] = function(block) { 
  var value_property_ = block.getFieldValue('property_');
  var code = 'knn_classifier_proportion("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['knn_classifier_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'knn_classifier_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['knn_classifier_train'] = function (block) {
  var value_class_ = block.getFieldValue('class_');
  var code = 'knn_classifier_train("'+ value_class_ +'");\n';
  return code;
};

Blockly.JavaScript['knn_classifier_startdetect'] = function (block) {
  var value_check_ = block.getFieldValue('check_');
  var code = 'knn_classifier_startdetect("'+ value_check_ +'");\n';
  return code;
};
