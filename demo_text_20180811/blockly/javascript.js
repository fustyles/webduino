Blockly.JavaScript['demo_text_add'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);	
  var code = 'createDemoText('+value_id+');\n';
  return code;
};

Blockly.JavaScript['demo_text_set'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'DemoText_set("' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};
