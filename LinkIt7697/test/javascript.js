Blockly.Arduino['test_head'] = function(block) { 
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  Blockly.Arduino.definitions_['custom_head_'+block.id] = text.replace(/<br>/mg,"\n");
  var code = '';
  return code;
};

Blockly.Arduino['test_code'] = function (block) { 
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = text.replace(/<br>/mg,"\n") + '\n';
  return code;
};

Blockly.Arduino['test_code_get'] = function (block) { 
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = text;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['test_comment'] = function(block) { 
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = '//' + text.replace(/<br>/mg,"\n//") +'\n';
  return code;
};
