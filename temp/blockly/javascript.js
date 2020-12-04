Blockly.JavaScript['linenotify_image'] = function (block) {
  var notify_script = Blockly.JavaScript.valueToCode(block, 'notify_script', Blockly.JavaScript.ORDER_ATOMIC);
  var notify_token = Blockly.JavaScript.valueToCode(block, 'notify_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var notify_source = block.getFieldValue('notify_source');
  var notify_videoid = Blockly.JavaScript.valueToCode(block, 'notify_videoid', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!notify_script) notify_script='""';
  if (!notify_token) notify_token='""';
	
  if ((notify_videoid.indexOf("'")==0)&&(notify_videoid.lastIndexOf("'")==notify_videoid.length-1))
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
