Blockly.JavaScript['demoexpansion1'] = function (block) {
  var id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var property_ = Blockly.JavaScript.valueToCode(block, 'property_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'DemoExpansion_set(' + id_ + ',' + property_ + ',' + value_ + ');\n';
  return code;
};
