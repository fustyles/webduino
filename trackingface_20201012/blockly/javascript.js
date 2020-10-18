Blockly.JavaScript['trackingface_set'] = function(block) {
  var value_display = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frame = block.getFieldValue('frame_');
  var value_result = block.getFieldValue('result_');  
  var value_opacity = block.getFieldValue('opacity_'); 
  var code = 'trackingface_display(' + value_display + ',"' + value_frame + '","' + value_result + '","' + value_opacity + '");\n';
  return code;
};

Blockly.JavaScript['trackingface_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'trackingface_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['trackingface_get'] = function(block) {
  var value_index = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property = block.getFieldValue('property_');
  var code = 'trackingface_get(' + value_index + ',"' + value_property + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['trackingface_drawimage'] = function (block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'trackingface_drawimage(' + value_id + ',' + value_left + ',' + value_top + ');\n';
  return code;
};

Blockly.JavaScript['trackingface_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'trackingface_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['trackingface_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'trackingface_startvideo_stream(' + value_src_ + ');\n';
  return code;
};