Blockly.JavaScript['linenotify'] = function(block) {
  var token = Blockly.JavaScript.valueToCode(block, 'token_', Blockly.JavaScript.ORDER_ATOMIC);
  var type = block.getFieldValue('type_');
  var text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC); 
  var packageId = Blockly.JavaScript.valueToCode(block, 'packageId_', Blockly.JavaScript.ORDER_ATOMIC);
  var stickerId = Blockly.JavaScript.valueToCode(block, 'stickerId_', Blockly.JavaScript.ORDER_ATOMIC);  
  var originalContentUrl = Blockly.JavaScript.valueToCode(block, 'originalContentUrl_', Blockly.JavaScript.ORDER_ATOMIC);
  var previewImageUrl = Blockly.JavaScript.valueToCode(block, 'previewImageUrl_', Blockly.JavaScript.ORDER_ATOMIC);    
  
  if (!text) text="' '";
  text = text.replace(/\"/g,"%22");
  packageId = (packageId+"").replace(/\"/g,"%22");
  stickerId = (stickerId+"").replace(/\"/g,"%22");
  originalContentUrl = (originalContentUrl+"").replace(/\"/g,"%22");
  previewImageUrl = (previewImageUrl+"").replace(/\"/g,"%22");
	
  var message = "";
  
  if (type=="text")
	message = "{'type':'"+type+"','text':"+text+"}";
  else if (type=="sticker")
	message = "{'type':'"+type+"','text':"+text+",'packageId':"+packageId+",'stickerId':"+stickerId+"}";
  else if (type=="image")
	message = "{'type':'"+type+"','text':"+text+",'originalContentUrl':"+previewImageUrl+",'previewImageUrl':"+originalContentUrl+"}";
  message = message.replace(/\\\\/g,"\\");
 
  var code = 'linenotify_push_message('+token+','+message+');\n';
  return code;
};

Blockly.JavaScript['linenotify_image'] = function (block) {
  var notify_token = Blockly.JavaScript.valueToCode(block, 'notify_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var notify_source = block.getFieldValue('notify_source');
  var notify_id = Blockly.JavaScript.valueToCode(block, 'notify_id', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!notify_token) notify_token='""';

  if ((notify_id.indexOf("(")==0)&&(notify_id.lastIndexOf(")")==notify_id.length-1))
    notify_id = notify_id.substring(1,notify_id.length-1);	
  if ((notify_id.indexOf("'")==0)&&(notify_id.lastIndexOf("'")==notify_id.length-1))
    notify_id = notify_id.substring(1,notify_id.length-1);
  if ((notify_id.indexOf('"')==0)&&(notify_id.lastIndexOf('"')==notify_id.length-1))
    notify_id = notify_id.substring(1,notify_id.length-1);	

  var source_id;
  if (notify_source=="video")
	source_id = 'gamevideo_'+notify_id;
  else if (notify_source=="canvas")
	source_id = 'gamecanvas_'+notify_id;
  else if (notify_source=="image")
	source_id = 'gameimage_'+notify_id;
  var code = 'linenotify_push_image('+notify_token+',"'+source_id+'","");\n';
  return code; 
};

Blockly.JavaScript['linebot_notify'] = function (block) {
  var bot_token = Blockly.JavaScript.valueToCode(block, 'bot_token', Blockly.JavaScript.ORDER_ATOMIC)||"";  
  var bot_userid = Blockly.JavaScript.valueToCode(block, 'bot_userid', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var type = block.getFieldValue('value_type');
  var parameter1 = Blockly.JavaScript.valueToCode(block, 'value_parameter1', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var parameter2 = Blockly.JavaScript.valueToCode(block, 'value_parameter2', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var parameter3 = Blockly.JavaScript.valueToCode(block, 'value_parameter3', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var parameter4 = Blockly.JavaScript.valueToCode(block, 'value_parameter4', Blockly.JavaScript.ORDER_ATOMIC)||""; 
  
  var code = 'linebot_push_message('+bot_token+','+bot_userid+', line_url_escape("bot","'+type+'",'+parameter1+','+parameter2+','+parameter3+','+parameter4+'));\n';
  return code; 
};