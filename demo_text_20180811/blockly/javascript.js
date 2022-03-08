Blockly.JavaScript['demo_add'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);	
  var value_index = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);	  
  var code = 'createDemoText('+value_name+','+value_index+');\n';
  return code;
};

Blockly.JavaScript['demo_set'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'DemoText_set("' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};
