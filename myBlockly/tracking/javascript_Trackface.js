Blockly.JavaScript['trackface_open'] = function (block) {
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'openTrackface(' + value_url_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['trackface_display'] = function(block) {
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'showTrackface(' + value_display_ + ');\n';
  return code;
};