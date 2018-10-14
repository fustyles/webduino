Blockly.JavaScript['line_notify'] = function (block) {
  var notify_token = Blockly.JavaScript.valueToCode(block, 'notify_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var notify_userid = Blockly.JavaScript.valueToCode(block, 'notify_userid', Blockly.JavaScript.ORDER_ATOMIC);
  var notify_msg = Blockly.JavaScript.valueToCode(block, 'notify_msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createIframe('+notify_token+','+notify_userid+','+notify_msg+');\n';
  return code; 
};
