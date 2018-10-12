Blockly.JavaScript['teachable_machine_open'] = function (block) {
  var value_num_ = Blockly.JavaScript.valueToCode(block, 'num_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'teachable_machine_open('+ value_num_ +');\n';
  return code;
};

Blockly.JavaScript['teachable_machine_proportion'] = function(block) { 
  var value_property_ = block.getFieldValue('property_');
  var code = 'teachable_machine_proportion("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
