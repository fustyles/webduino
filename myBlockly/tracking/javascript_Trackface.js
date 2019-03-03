Blockly.JavaScript['trackface_open'] = function (block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_display = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'openTrackface(' + value_url + ',' + value_left + ',' + value_top + ',' + value_display + ');\n';
  return code;
};

Blockly.JavaScript['trackface_display'] = function(block) {
  var value_display = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'showTrackface(' + value_display + ');\n';
  return code;
};
