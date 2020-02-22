Blockly.Arduino['test_open'] = function (block) { 
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Hello(' + value_url_ + ');\n';
  return code;
};

Blockly.Arduino['test_close'] = function(block) { 
  var code = 'World();\n';
  return code;
};
