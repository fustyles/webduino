Blockly.JavaScript['telegram_image'] = function (block) {
  var telegram_script = Blockly.JavaScript.valueToCode(block, 'telegram_script', Blockly.JavaScript.ORDER_ATOMIC);
  var telegram_token = Blockly.JavaScript.valueToCode(block, 'telegram_token', Blockly.JavaScript.ORDER_ATOMIC); 
  var telegram_chatid = Blockly.JavaScript.valueToCode(block, 'telegram_chatid', Blockly.JavaScript.ORDER_ATOMIC);
  var telegram_videoid = Blockly.JavaScript.valueToCode(block, 'telegram_videoid', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'telegram_push_image('+telegram_script+','+telegram_token+','+telegram_chatid+','+telegram_videoid+');\n';
  return code; 
};

Blockly.JavaScript['telegram_getid'] = function (block) {
  var telegram_tagname = block.getFieldValue('tagname_');
	
  var code = 'telegram_get_id("'+telegram_tagname+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};