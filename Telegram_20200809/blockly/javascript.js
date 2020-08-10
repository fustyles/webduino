Blockly.JavaScript['telegram_message'] = function (block) {
  var telegram_token = Blockly.JavaScript.valueToCode(block, 'telegram_token', Blockly.JavaScript.ORDER_ATOMIC); 
  var telegram_chatid = Blockly.JavaScript.valueToCode(block, 'telegram_chatid', Blockly.JavaScript.ORDER_ATOMIC);
  var telegram_msg = Blockly.JavaScript.valueToCode(block, 'telegram_msg', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!telegram_token) telegram_token='""';
  if (!telegram_chatid) telegram_chatid='""';
  if (!telegram_msg) telegram_msg='""';
  
  var code = 'telegram_push_message('+telegram_token+','+telegram_chatid+','+telegram_msg+');\n';
  return code; 
};
Blockly.JavaScript['telegram_image'] = function (block) {
  var telegram_script = Blockly.JavaScript.valueToCode(block, 'telegram_script', Blockly.JavaScript.ORDER_ATOMIC);
  var telegram_token = Blockly.JavaScript.valueToCode(block, 'telegram_token', Blockly.JavaScript.ORDER_ATOMIC); 
  var telegram_chatid = Blockly.JavaScript.valueToCode(block, 'telegram_chatid', Blockly.JavaScript.ORDER_ATOMIC);
  var telegram_videoid = Blockly.JavaScript.valueToCode(block, 'telegram_videoid', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!telegram_script) telegram_script='""';
  if (!telegram_token) telegram_token='""';
  if (!telegram_chatid) telegram_chatid='""';
  if (!telegram_videoid) telegram_videoid='""';
  
  var code = 'telegram_push_image('+telegram_script+','+telegram_token+','+telegram_chatid+','+telegram_videoid+');\n';
  return code; 
};