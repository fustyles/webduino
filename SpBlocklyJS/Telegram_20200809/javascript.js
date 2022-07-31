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

Blockly.JavaScript['telegram_photo'] = function (block) {
  var telegram_token = Blockly.JavaScript.valueToCode(block, 'telegram_token', Blockly.JavaScript.ORDER_ATOMIC); 
  var telegram_chatid = Blockly.JavaScript.valueToCode(block, 'telegram_chatid', Blockly.JavaScript.ORDER_ATOMIC);
  var telegram_url = Blockly.JavaScript.valueToCode(block, 'telegram_url', Blockly.JavaScript.ORDER_ATOMIC);	
	
  var code = 'telegram_push_photo('+telegram_token+','+telegram_chatid+','+telegram_url+');\n';
  return code; 
};

Blockly.JavaScript['telegram_image'] = function (block) {
  var telegram_token = Blockly.JavaScript.valueToCode(block, 'telegram_token', Blockly.JavaScript.ORDER_ATOMIC); 
  var telegram_chatid = Blockly.JavaScript.valueToCode(block, 'telegram_chatid', Blockly.JavaScript.ORDER_ATOMIC);
  var telegram_source = block.getFieldValue('telegram_source');	
  var telegram_videoid = Blockly.JavaScript.valueToCode(block, 'telegram_videoid', Blockly.JavaScript.ORDER_ATOMIC);

  if (!telegram_token) telegram_token='""';
  if (!telegram_chatid) telegram_chatid='""';

  if ((telegram_videoid.indexOf("(")==0)&&(telegram_videoid.lastIndexOf(")")==telegram_videoid.length-1))
    telegram_videoid = telegram_videoid.substring(1,telegram_videoid.length-1);	
  if ((telegram_videoid.indexOf("'")==0)&&(telegram_videoid.lastIndexOf("'")==telegram_videoid.length-1))
    telegram_videoid = telegram_videoid.substring(1,telegram_videoid.length-1);
  if ((telegram_videoid.indexOf('"')==0)&&(telegram_videoid.lastIndexOf('"')==telegram_videoid.length-1))
    telegram_videoid = telegram_videoid.substring(1,telegram_videoid.length-1);	

  var source_id;
  if (telegram_source=="video")
	source_id = 'gamevideo_'+telegram_videoid;
  else if (telegram_source=="canvas")
	source_id = 'gamecanvas_'+telegram_videoid;
  else if (telegram_source=="image")
	source_id = 'gameimage_'+telegram_videoid;
	
  var code = 'telegram_push_image('+telegram_token+','+telegram_chatid+',"'+source_id+'");\n';
  return code; 
};

Blockly.JavaScript['telegram_getupdates'] = function (block) {
  var telegram_token = Blockly.JavaScript.valueToCode(block, 'telegram_token', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'telegram_getupdates('+telegram_token+');\n';
  return code; 
};

Blockly.JavaScript['telegram_getmessage'] = function (block) {
  var variable_telegram_response = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('telegram_response'), Blockly.Variables.NAME_TYPE);	
  var code = variable_telegram_response + ' = telegram_getmessage();\n';
  return code;
};

Blockly.JavaScript['telegram_br'] = function (block) {
  var code = '" *** "';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['telegram_reply_markup'] = function (block) {
  var telegram_token = Blockly.JavaScript.valueToCode(block, 'telegram_token', Blockly.JavaScript.ORDER_ATOMIC); 
  var telegram_chatid = Blockly.JavaScript.valueToCode(block, 'telegram_chatid', Blockly.JavaScript.ORDER_ATOMIC);
  var telegram_msg = Blockly.JavaScript.valueToCode(block, 'telegram_msg', Blockly.JavaScript.ORDER_ATOMIC);
  var telegram_keyboard = Blockly.JavaScript.valueToCode(block, 'telegram_keyboard', Blockly.JavaScript.ORDER_ATOMIC); 
  var telegram_ontime = block.getFieldValue('telegram_ontime');
  
  var code = 'telegram_reply_markup('+telegram_token+','+telegram_chatid+','+telegram_msg+','+telegram_keyboard+','+telegram_ontime+');\n';
  return code;
};

Blockly.JavaScript['telegram_getid'] = function (block) {
  var telegram_tagname = block.getFieldValue('tagname_');
	
  var code = 'telegram_get_id("'+telegram_tagname+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
