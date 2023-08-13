Blockly.JavaScript['knnclassifier_video'] = function(block) { 
  var value_result_ = block.getFieldValue('result_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'knnclassifier_video("' + value_result_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['knnclassifier_train'] = function (block) {
  var value_index_ = block.getFieldValue('index_');
  var code = 'knnclassifier_train("'+ value_index_ +'");\n';
  return code;
};

Blockly.JavaScript['knnclassifier_class'] = function (block) {
  var value_index_ = block.getFieldValue('index_');
  var value_classname_ = Blockly.JavaScript.valueToCode(block, 'classname_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'knnclassifier_class("'+ value_index_ +'",'+ value_classname_ +');\n';
  return code;
};

Blockly.JavaScript['knnclassifier_detect'] = function (block) {
  var code = 'knnclassifier_detect();\n';
  return code;
};

Blockly.JavaScript['knnclassifier_clearclasses'] = function (block) {
  var code = 'knnclassifier_clearclasses();\n';
  return code;
};

Blockly.JavaScript['knnclassifier_savemodel'] = function (block) {
  var code = 'knnclassifier_savemodel();\n';
  return code;
};

Blockly.JavaScript['knnclassifier_loadmodel'] = function (block) {
  var code = 'knnclassifier_loadmodel();\n';
  return code;
};

Blockly.JavaScript['knnclassifier_loadmodelurl'] = function (block) {
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC); 	
  var code = 'knnclassifier_loadmodelurl('+ value_url_ +');\n';
  return code;
};

Blockly.JavaScript['knnclassifier_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'knnclassifier_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['knnclassifier_recognitied'] = function(block) { 
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  
  var code = 'recognitionFinish = async function() {\n  ' + statements_do + '\n};\n';
  return code;  
};

Blockly.JavaScript['knnclassifier_proportion'] = function(block) { 
  var value_property_ = block.getFieldValue('property_');
  var code = 'knnclassifier_proportion("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['knnclassifier_proportion_array'] = function(block) {
  var code = 'knnclassifier_proportion("")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['knnclassifier_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'knnclassifier_startvideo_stream(' + value_src_ + ');\n';
  return code;
};
