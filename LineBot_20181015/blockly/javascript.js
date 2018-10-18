Blockly.JavaScript['linebot_notify'] = function (block) {
  var bot_token = Blockly.JavaScript.valueToCode(block, 'bot_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var bot_userid = Blockly.JavaScript.valueToCode(block, 'bot_userid', Blockly.JavaScript.ORDER_ATOMIC);
  var bot_msg = Blockly.JavaScript.valueToCode(block, 'bot_msg', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!bot_token) bot_token='""';
  if (!bot_userid) bot_userid='""';
  if (!bot_msg) bot_msg='""';
  
  var code = 'linebot_push_message('+bot_token+','+bot_userid+','+bot_msg+');\n';
  return code; 
};

Blockly.JavaScript['linebot_type'] = function(block) {
  var type = block.getFieldValue('value_type');
  var parameter1 = Blockly.JavaScript.valueToCode(block, 'value_parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var parameter2 = Blockly.JavaScript.valueToCode(block, 'value_parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  var parameter3 = Blockly.JavaScript.valueToCode(block, 'value_parameter3', Blockly.JavaScript.ORDER_ATOMIC);
  var parameter4 = Blockly.JavaScript.valueToCode(block, 'value_parameter4', Blockly.JavaScript.ORDER_ATOMIC);  
  
  if (!parameter1) parameter1='""';
  if (!parameter2) parameter2='""';
  if (!parameter3) parameter3='""';
  if (!parameter4) parameter4='""';
  
  var code = 'linebot_url_escape("'+type+'",'+parameter1+','+parameter2+','+parameter3+','+parameter4+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['linenotify'] = function (block) {
  var notify_token = Blockly.JavaScript.valueToCode(block, 'notify_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var notify_msg = Blockly.JavaScript.valueToCode(block, 'notify_msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'linenotify('+notify_token+','+notify_msg+');\n';
  return code; 
};
