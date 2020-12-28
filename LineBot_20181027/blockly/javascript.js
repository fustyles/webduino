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
  
  var code = 'line_url_escape("bot","'+type+'",'+parameter1+','+parameter2+','+parameter3+','+parameter4+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['linenotify'] = function (block) {
  var notify_token = Blockly.JavaScript.valueToCode(block, 'notify_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var notify_msg = Blockly.JavaScript.valueToCode(block, 'notify_msg', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!notify_token) notify_token='""';
  if (!notify_msg) notify_msg='""';
  
  var code = 'linenotify_push_message('+notify_token+','+notify_msg+');\n';
  return code; 
};

Blockly.JavaScript['linenotify_type'] = function(block) {
  var type = block.getFieldValue('value_type');
  var parameter1 = Blockly.JavaScript.valueToCode(block, 'value_parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var parameter2 = Blockly.JavaScript.valueToCode(block, 'value_parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  var parameter3 = Blockly.JavaScript.valueToCode(block, 'value_parameter3', Blockly.JavaScript.ORDER_ATOMIC);  
  
  if (!parameter1) parameter1='""';
  if (!parameter2) parameter2='""';
  if (!parameter3) parameter3='""';
  
  var code = 'line_url_escape("notify","'+type+'",'+parameter1+','+parameter2+','+parameter3+',"")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['linenotify_image'] = function (block) {
  var notify_script = Blockly.JavaScript.valueToCode(block, 'notify_script', Blockly.JavaScript.ORDER_ATOMIC);
  var notify_token = Blockly.JavaScript.valueToCode(block, 'notify_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var notify_source = block.getFieldValue('notify_source');
  var notify_videoid = Blockly.JavaScript.valueToCode(block, 'notify_videoid', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!notify_script) notify_script='""';
  if (!notify_token) notify_token='""';

  if ((notify_videoid.indexOf("(")==0)&&(notify_videoid.lastIndexOf(")")==notify_videoid.length-1))
    notify_videoid = notify_videoid.substring(1,notify_videoid.length-1);	
  if ((notify_videoid.indexOf("'")==0)&&(notify_videoid.lastIndexOf("'")==notify_videoid.length-1))
    notify_videoid = notify_videoid.substring(1,notify_videoid.length-1);
  if ((notify_videoid.indexOf('"')==0)&&(notify_videoid.lastIndexOf('"')==notify_videoid.length-1))
    notify_videoid = notify_videoid.substring(1,notify_videoid.length-1);	

  var source_id;
  if (notify_source=="video")
	source_id = 'gamevideo_'+notify_videoid;
  else if (notify_source=="canvas")
	source_id = 'gamecanvas_'+notify_videoid;
  else if (notify_source=="image")
	source_id = 'gameimage_'+notify_videoid;
  var code = 'linenotify_push_image('+notify_script+','+notify_token+',"'+source_id+'");\n';
  return code; 
};

Blockly.JavaScript['linenotify_getid'] = function (block) {
  var linenotify_tagname = block.getFieldValue('tagname_');
	
  var code = 'linenotify_get_id("'+linenotify_tagname+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
