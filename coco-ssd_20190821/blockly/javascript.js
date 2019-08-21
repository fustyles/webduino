Blockly.JavaScript['coco_ssd_object'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var code = 'coco_ssd_object("' + value_object_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
