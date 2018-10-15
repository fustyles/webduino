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
  var value_paramter3 = Blockly.JavaScript.valueToCode(block, 'value_paramter3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_paramter4 = Blockly.JavaScript.valueToCode(block, 'value_paramter4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_paramter5 = Blockly.JavaScript.valueToCode(block, 'value_paramter5', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_type=='text')
    var code = '';
  else if (value_type=='sticker')
    var code = '';
  else if (value_type=='image')
    var code = '';
  else if (value_type=='video')
    var code = '';
  else if (value_type=='audio')
    var code = '';  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['linenotify'] = function (block) {
  var bot_token = Blockly.JavaScript.valueToCode(block, 'bot_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var bot_msg = Blockly.JavaScript.valueToCode(block, 'bot_msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'linenotify('+bot_token+','+bot_msg+');\n';
  return code; 
};
