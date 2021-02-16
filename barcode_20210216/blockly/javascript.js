Blockly.JavaScript['barcode_video'] = function(block) { 
  var value_code_ = block.getFieldValue('code_');
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'barcode_video("' + value_result_ + '","' + value_opacity_ + '","' + value_code_ + '");\n';
  return code;
};

Blockly.JavaScript['barcode_get'] = function(block) { 
  var code = 'barcode_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['barcode_clear'] = function(block) { 
  var code = 'barcode_clear();\n';
  return code;
};

Blockly.JavaScript['barcode_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'barcode_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['barcode_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');  
  var code = 'barcode_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['barcode_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'barcode_startvideo_stream(' + value_src_ + ');\n';
  return code;
};