Blockly.JavaScript['cmd1'] = function (block) {
  var cmd1_0 = Blockly.JavaScript.valueToCode(block, 'cmd1_0', Blockly.JavaScript.ORDER_ATOMIC);  
  
  if (!cmd1_0) cmd1_0='""';
  if ((cmd1_0.indexOf("'")==0)&&(cmd1_0.lastIndexOf("'")==cmd1_0.length-1))
    cmd1_0 = cmd1_0.substring(1,cmd1_0.length-1);
    
  var code = cmd1_0 + '\n';
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};
