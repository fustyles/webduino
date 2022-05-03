Blockly.JavaScript['instascan_video'] = function(block) { 
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'instascan_video("' + value_result_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['instascan_get'] = function(block) { 
  var code = 'instascan_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['instascan_clear'] = function(block) { 
  var code = 'instascan_clear();\n';
  return code;
};

Blockly.JavaScript['instascan_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'instascan_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['instascan_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'instascan_startvideo_media(' + value_width_ + ',' + value_height_ + ',' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['instascan_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'instascan_startvideo_stream(' + value_src_ + ');\n';
  return code;
};

Blockly.JavaScript['instascan_recognitied'] = function(block) { 
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'instascan_recognitionFinish = async function() {\n' + statements_do + '};\n';
  return code;
};