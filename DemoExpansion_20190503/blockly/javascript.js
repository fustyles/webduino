Blockly.JavaScript['demoexpansion1'] = function (block) {
  var id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var property_ = Blockly.JavaScript.valueToCode(block, 'property_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'DemoExpansion_set(' + id_ + ',' + property_ + ',' + value_ + ');\n';
  return code;
};

Blockly.JavaScript['demoexpansion2'] = function(block) {
  var id_ = block.getFieldValue('id_');
  var code = "'"+id_+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['demoexpansion3'] = function(block) {
  var id_ = block.getFieldValue('id_');
  var code = "'"+id_+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['demoexpansion4'] = function(block) {
  var property_ = block.getFieldValue('property_');
  var code = "'"+property_+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['demoexpansion5'] = function(block) {
  var id_ = block.getFieldValue('id_');
  var code = "'"+id_+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['demoexpansion6'] = function(block) {
  var code = 'createDemoText();\n';
  return code;
};
