Blockly.JavaScript['ifttt_open'] = function (block) {
  var cmd1_1 = Blockly.JavaScript.valueToCode(block, 'cmd1_1', Blockly.JavaScript.ORDER_ATOMIC);  
  
  console.log(cmd1_1);
  if (!cmd1_1) cmd1_1='""';
  if ((cmd1_1.indexOf("'")==0)&&(cmd1_1.lastIndexOf("'")==cmd1_1.length-1))
  console.log(cmd1_1.substring(1,cmd1_1.length-2));
    
  //cmd1_1 = cmd1_1.substring(1,cmd1_1.length-2);
    
  var code = cmd1_1 + '\n';
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};
