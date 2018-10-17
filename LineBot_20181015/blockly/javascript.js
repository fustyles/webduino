Blockly.JavaScript['linebot_notify'] = function (block) {
  var bot_token = Blockly.JavaScript.valueToCode(block, 'bot_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var bot_userid = Blockly.JavaScript.valueToCode(block, 'bot_userid', Blockly.JavaScript.ORDER_ATOMIC);
  var bot_msg = Blockly.JavaScript.valueToCode(block, 'bot_msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'linebot_notify('+bot_token+','+bot_userid+','+bot_msg.replace(/\'/g,"")+');\n';
  return code; 
};

Blockly.JavaScript['linebot_type'] = function(block) {
  var value_type = block.getFieldValue('value_type');
  var value_parameter1 = Blockly.JavaScript.valueToCode(block, 'value_parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_parameter2 = Blockly.JavaScript.valueToCode(block, 'value_parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_parameter3 = Blockly.JavaScript.valueToCode(block, 'value_parameter3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_parameter4 = Blockly.JavaScript.valueToCode(block, 'value_parameter4', Blockly.JavaScript.ORDER_ATOMIC);  
  
  if (!value_parameter1) value_parameter1='""';
  if (!value_parameter2) value_parameter2='""';
  if (!value_parameter3) value_parameter3='""';
  if (!value_parameter4) value_parameter4='""';
  
  value_parameter1=value_parameter1.replace(/\&/g,"$");
  value_parameter2=value_parameter2.replace(/\&/g,"$");
  value_parameter3=value_parameter3.replace(/\&/g,"$");
  value_parameter4=value_parameter4.replace(/\&/g,"$");
  
  if ((value_parameter1.indexOf(" ")!=-1)||(value_parameter1.indexOf(":")!=-1)||(value_parameter1.indexOf("/")!=-1)||(value_parameter1.indexOf("+")!=-1)||(value_parameter1.indexOf(".")!=-1))
    value_parameter1 = '"'+value_parameter1+'"';
  if ((value_parameter2.indexOf(" ")!=-1)||(value_parameter2.indexOf(":")!=-1)||(value_parameter2.indexOf("/")!=-1)||(value_parameter2.indexOf("+")!=-1)||(value_parameter2.indexOf(".")!=-1))
    value_parameter2 = '"'+value_parameter2+'"';
  if ((value_parameter3.indexOf(" ")!=-1)||(value_parameter3.indexOf(":")!=-1)||(value_parameter3.indexOf("/")!=-1)||(value_parameter3.indexOf("+")!=-1)||(value_parameter3.indexOf(".")!=-1))
    value_parameter3 = '"'+value_parameter3+'"';
  if ((value_parameter4.indexOf(" ")!=-1)||(value_parameter4.indexOf(":")!=-1)||(value_parameter4.indexOf("/")!=-1)||(value_parameter4.indexOf("+")!=-1)||(value_parameter4.indexOf(".")!=-1))
    value_parameter4 = '"'+value_parameter4+'"';  
  
  if (value_type=='text')
    var code = '"&type='+value_type+'&text="+'+value_parameter1;
  else if (value_type=='sticker')
    var code = '"&type='+value_type+'&packageId="+'+value_parameter1+'+"&stickerId="+'+value_parameter2;
  else if (value_type=='image')
    var code = '"&type='+value_type+'&originalContentUrl="+'+value_parameter1+'+"&previewImageUrl="+'+value_parameter2;
  else if (value_type=='video')
    var code = '"&type='+value_type+'&originalContentUrl="+'+value_parameter1+'+"&previewImageUrl="+'+value_parameter2;
  else if (value_type=='audio')
    var code = '"&type='+value_type+'&originalContentUrl="+'+value_parameter1+'+"&duration="+'+value_parameter2;
  else if (value_type=='location')
    var code = '"&type='+value_type+'&title="+'+value_parameter1+'+"&address="+'+value_parameter2+'+"&latitude="+'+value_parameter3+'+"&longitude="+'+value_parameter4;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['linenotify'] = function (block) {
  var notify_token = Blockly.JavaScript.valueToCode(block, 'notify_token', Blockly.JavaScript.ORDER_ATOMIC);  
  var notify_msg = Blockly.JavaScript.valueToCode(block, 'notify_msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'linenotify('+notify_token+','+notify_msg+');\n';
  return code; 
};
