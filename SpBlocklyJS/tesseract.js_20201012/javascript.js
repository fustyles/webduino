Blockly.JavaScript['tesseract_video'] = function(block) { 
  var value_lang_ = block.getFieldValue('lang_');
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'tesseract_video("' + value_lang_ + '","' + value_result_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['tesseract_imageprocessing'] = function(block) { 
  var value_mode_ = block.getFieldValue('mode_');
  var value_reference_ = Blockly.JavaScript.valueToCode(block, 'reference_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'tesseract_imageprocessing("' + value_mode_ + '","' + value_reference_ + '");\n';
  return code;
};

Blockly.JavaScript['tesseract_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'tesseract_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['tesseract_recognition'] = function(block) {
  var code = 'tesseract_recognition();\n';
  return code;
};

Blockly.JavaScript['tesseract_get'] = function(block) { 
  var code = 'tesseract_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tesseract_clear'] = function(block) { 
  var code = 'tesseract_clear();\n';
  return code;
};

Blockly.JavaScript['tesseract_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'tesseract_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['tesseract_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'tesseract_startvideo_stream(' + value_src_ + ');\n';
  return code;
};