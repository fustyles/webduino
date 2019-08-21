Blockly.JavaScript['mobilenet_object'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var code = 'mobilenet_object("' + value_object_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
