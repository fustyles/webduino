Blockly.JavaScript['cmd1'] = function (block) {
  var cmd1_0 = Blockly.JavaScript.valueToCode(block, 'cmd1_0', Blockly.JavaScript.ORDER_ATOMIC);  
  
  if (!cmd1_0) cmd1_0='""';
  if ((cmd1_0.indexOf("'")==0)&&(cmd1_0.lastIndexOf("'")==cmd1_0.length-1))
    cmd1_0 = cmd1_0.substring(1,cmd1_0.length-1);
    
  var code = cmd1_0 + "\n";
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd2'] = function (block) {
  var cmd2_0 = Blockly.JavaScript.valueToCode(block, 'cmd2_0', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd2_1 = Blockly.JavaScript.valueToCode(block, 'cmd2_1', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!cmd2_0) cmd2_0='""';
  if (!cmd2_1) cmd2_1='""';
  if ((cmd2_0.indexOf("'")==0)&&(cmd2_0.lastIndexOf("'")==cmd2_0.length-1))
    cmd2_0 = cmd2_0.substring(1,cmd2_0.length-1);
    
  var code = cmd2_0 + "("+ cmd2_1 + ")\n";
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd3'] = function (block) {
  var cmd3_0 = Blockly.JavaScript.valueToCode(block, 'cmd3_0', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd3_1 = Blockly.JavaScript.valueToCode(block, 'cmd3_1', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd3_2 = Blockly.JavaScript.valueToCode(block, 'cmd3_2', Blockly.JavaScript.ORDER_ATOMIC);
  
  if (!cmd3_0) cmd3_0='""';
  if (!cmd3_1) cmd3_1='""';
  if (!cmd3_2) cmd3_2='""';
  if ((cmd3_0.indexOf("'")==0)&&(cmd3_0.lastIndexOf("'")==cmd3_0.length-1))
    cmd3_0 = cmd3_0.substring(1,cmd3_0.length-1);
    
  var code = cmd3_0 + "("+ cmd3_1 + ", " + cmd3_2 + ")\n";
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};
