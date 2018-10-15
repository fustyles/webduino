Blockly.JavaScript['linebot_notify'] = function (block) {
  var bot_token = Blockly.JavaScript.valueToCode(block, 'bot_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var bot_userid = Blockly.JavaScript.valueToCode(block, 'bot_userid', Blockly.JavaScript.ORDER_ATOMIC);
  var bot_msg = Blockly.JavaScript.valueToCode(block, 'bot_msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'linebot_notify('+bot_token+','+bot_userid+','+bot_msg+');\n';
  return code; 
};

Blockly.JavaScript['linebot_type'] = function(block) {
  var value_type = block.getFieldValue('value_type');
  var value_paramter1 = Blockly.JavaScript.valueToCode(block, 'value_paramter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_paramter2 = Blockly.JavaScript.valueToCode(block, 'value_paramter2', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (value_type=='text')
    var code = '&text='+value_paramter1;
  else if (value_type=='sticker')
    var code = '&packageId='+value_paramter1+"&stickerId="+value_paramter2;
  else if (value_type=='image')
    var code = '&originalContentUrl='+value_paramter1+"&previewImageUrl="+value_paramter2;
  else if (value_type=='video')
    var code = '&originalContentUrl='+value_paramter1+"&previewImageUrl="+value_paramter2;
  else if (value_type=='audio')
    var code = '&originalContentUrl='+value_paramter1+"&duration="+value_paramter2;  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['linenotify'] = function (block) {
  var notify_token = Blockly.JavaScript.valueToCode(block, 'notify_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var notify_msg = Blockly.JavaScript.valueToCode(block, 'notify_msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'linenotify('+notify_token+','+notify_msg+');\n';
  return code; 
};
