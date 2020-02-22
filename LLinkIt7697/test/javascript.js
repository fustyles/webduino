Blockly.Arduino['iframe_open'] = function (block) {
  var value_openid_ = Blockly.Arduino.valueToCode(block, 'openid_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Hello(' + value_openid_ + ',' + value_url_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ');\n';
  return code;
};

Blockly.Arduino['iframe_close'] = function(block) {
  var value_closeid_ = Blockly.Arduino.valueToCode(block, 'closeid_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'World(' + value_closeid_ + ');\n';
  return code;
};