Blockly.JavaScript['coco_ssd_list'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var code = 'coco_ssd_list("' + value_object_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coco_ssd_object'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data_ = block.getFieldValue('data_');
  var code = 'coco_ssd_object("' + value_object_ + '",' + value_index_ + ',"' + value_data_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coco_ssd_object_number'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var code = 'coco_ssd_object_number("' + value_object_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coco_ssd_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_frame_ = block.getFieldValue('frame_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'coco_ssd_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_frame_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.JavaScript['coco_ssd_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'coco_ssd_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['coco_ssd_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'coco_ssd_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};