Blockly.JavaScript['tesseract_recognition'] = function(block) {
  var value_showtime_ = Blockly.JavaScript.valueToCode(block, 'showtime_', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'tesseract_recognition(Tesseract' + value_showtime_ + ');\n';
  return code;
};

Blockly.JavaScript['tesseract_get'] = function(block) { 
  var code = 'tesseract_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tesseract_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var value_lang_ = block.getFieldValue('lang_');
  var code = 'tesseract_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_opacity_ + '","' + value_lang_ + '");\n';
  return code;
};
