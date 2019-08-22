Blockly.JavaScript['posenet_person'] = function(block) { 
  var value_person_ = block.getFieldValue('persons_');
  var value_part_ = block.getFieldValue('part_');
  var code = 'posenet_person(' + value_person_ + ',"' + value_part_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
