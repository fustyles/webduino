Blockly.JavaScript['cmd1'] = function (block) {
  var cmd1_0 = Blockly.JavaScript.valueToCode(block, 'cmd1_0', Blockly.JavaScript.ORDER_ATOMIC);  
  
  if ((cmd1_0.indexOf("'")==0)&&(cmd1_0.lastIndexOf("'")==cmd1_0.length-1))
    cmd1_0 = cmd1_0.substring(1,cmd1_0.length-1);
  if ((cmd1_0.indexOf("(")==0)&&(cmd1_0.lastIndexOf(")")==cmd1_0.length-1))
    cmd1_0 = cmd1_0.substring(1,cmd1_0.length-1);
    
  var code = cmd1_0;
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd2'] = function (block) {
  var cmd2_0 = Blockly.JavaScript.valueToCode(block, 'cmd2_0', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd2_1 = Blockly.JavaScript.valueToCode(block, 'cmd2_1', Blockly.JavaScript.ORDER_ATOMIC);
  
  if ((cmd2_0.indexOf("'")==0)&&(cmd2_0.lastIndexOf("'")==cmd2_0.length-1))
    cmd2_0 = cmd2_0.substring(1,cmd2_0.length-1);
  if ((cmd2_0.indexOf("(")==0)&&(cmd2_0.lastIndexOf(")")==cmd2_0.length-1))
    cmd2_0 = cmd2_0.substring(1,cmd2_0.length-1);
    
  var code = cmd2_0 + "(" + cmd2_1 + ")";
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd3'] = function (block) {
  var cmd3_0 = Blockly.JavaScript.valueToCode(block, 'cmd3_0', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd3_1 = Blockly.JavaScript.valueToCode(block, 'cmd3_1', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd3_2 = Blockly.JavaScript.valueToCode(block, 'cmd3_2', Blockly.JavaScript.ORDER_ATOMIC);
  
  if ((cmd3_0.indexOf("'")==0)&&(cmd3_0.lastIndexOf("'")==cmd3_0.length-1))
    cmd3_0 = cmd3_0.substring(1,cmd3_0.length-1);
  if ((cmd3_0.indexOf("(")==0)&&(cmd3_0.lastIndexOf(")")==cmd3_0.length-1))
    cmd3_0 = cmd3_0.substring(1,cmd3_0.length-1);
    
  var code = cmd3_0 + "(" + cmd3_1 + ", " + cmd3_2 + ")";
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd4'] = function (block) {
  var myVar = Blockly.JavaScript.valueToCode(block, 'myVar', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd4_0 = Blockly.JavaScript.valueToCode(block, 'cmd4_0', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd4_1 = Blockly.JavaScript.valueToCode(block, 'cmd4_1', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd4_2 = Blockly.JavaScript.valueToCode(block, 'cmd4_2', Blockly.JavaScript.ORDER_ATOMIC);
  
  if ((cmd4_0.indexOf("'")==0)&&(cmd4_0.lastIndexOf("'")==cmd4_0.length-1))
    cmd4_0 = cmd4_0.substring(1,cmd4_0.length-1);
  if ((cmd4_0.indexOf("(")==0)&&(cmd4_0.lastIndexOf(")")==cmd4_0.length-1))
    cmd4_0 = cmd4_0.substring(1,cmd4_0.length-1);
    
  var code = myVar + "." + cmd4_0 + "(" + cmd4_1 + ", " + cmd4_2 + ")";
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd5'] = function (block) {
  var myVar = Blockly.JavaScript.valueToCode(block, 'myVar', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd5_0 = Blockly.JavaScript.valueToCode(block, 'cmd5_0', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd5_1 = Blockly.JavaScript.valueToCode(block, 'cmd5_1', Blockly.JavaScript.ORDER_ATOMIC);
  
  if ((cmd5_0.indexOf("'")==0)&&(cmd5_0.lastIndexOf("'")==cmd5_0.length-1))
    cmd5_0 = cmd5_0.substring(1,cmd5_0.length-1);
  if ((cmd5_0.indexOf("(")==0)&&(cmd5_0.lastIndexOf(")")==cmd5_0.length-1))
    cmd5_0 = cmd5_0.substring(1,cmd5_0.length-1);
    
  var code = myVar + "." + cmd5_0 + "(" + cmd5_1 + ")";
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd6'] = function (block) {
  var cmd_math = block.getFieldValue('cmd_math');
  
  if ((cmd_math.indexOf("'")==0)&&(cmd_math.lastIndexOf("'")==cmd_math.length-1))
    cmd_math = cmd_math.substring(1,cmd_math.length-1);
  if ((cmd_math.indexOf("(")==0)&&(cmd_math.lastIndexOf(")")==cmd_math.length-1))
    cmd_math = cmd_math.substring(1,cmd_math.length-1);
    
  var code = cmd_math;
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd7'] = function (block) {
  var cmd_string = block.getFieldValue('cmd_string');
  
  if ((cmd_string.indexOf("'")==0)&&(cmd_string.lastIndexOf("'")==cmd_string.length-1))
    cmd_string = cmd_string.substring(1,cmd_string.length-1);
  if ((cmd_string.indexOf("(")==0)&&(cmd_string.lastIndexOf(")")==cmd_string.length-1))
    cmd_string = cmd_string.substring(1,cmd_string.length-1);
    
  var code = cmd_string;
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd8'] = function (block) {
  var cmd_array = block.getFieldValue('cmd_array');
  
  if ((cmd_array.indexOf("'")==0)&&(cmd_array.lastIndexOf("'")==cmd_array.length-1))
    cmd_array = cmd_array.substring(1,cmd_array.length-1);
  if ((cmd_array.indexOf("(")==0)&&(cmd_array.lastIndexOf(")")==cmd_array.length-1))
    cmd_array = cmd_array.substring(1,cmd_array.length-1);
    
  var code = cmd_array;
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd9'] = function (block) {
  var myVar = Blockly.JavaScript.valueToCode(block, 'myVar', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd9_0 = Blockly.JavaScript.valueToCode(block, 'cmd9_0', Blockly.JavaScript.ORDER_ATOMIC);
  
  if ((cmd9_0.indexOf("'")==0)&&(cmd9_0.lastIndexOf("'")==cmd9_0.length-1))
    cmd9_0 = cmd9_0.substring(1,cmd9_0.length-1);
  if ((cmd9_0.indexOf("(")==0)&&(cmd9_0.lastIndexOf(")")==cmd9_0.length-1))
    cmd9_0 = cmd9_0.substring(1,cmd9_0.length-1);
    
  var code = myVar + "." + cmd9_0;
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd10'] = function (block) {
  var myVar = Blockly.JavaScript.valueToCode(block, 'myVar', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd10_0 = Blockly.JavaScript.valueToCode(block, 'cmd10_0', Blockly.JavaScript.ORDER_ATOMIC);
  
  if ((cmd10_0.indexOf("'")==0)&&(cmd10_0.lastIndexOf("'")==cmd10_0.length-1))
    cmd10_0 = cmd10_0.substring(1,cmd10_0.length-1);
  if ((cmd10_0.indexOf("(")==0)&&(cmd10_0.lastIndexOf(")")==cmd10_0.length-1))
    cmd10_0 = cmd10_0.substring(1,cmd10_0.length-1);
    
  var code = myVar + "[" + cmd10_0 + "]";
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};

Blockly.JavaScript['cmd11'] = function (block) {
  var myVar = Blockly.JavaScript.valueToCode(block, 'myVar', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd11_0 = Blockly.JavaScript.valueToCode(block, 'cmd11_0', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd11_1 = Blockly.JavaScript.valueToCode(block, 'cmd11_1', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd11_2 = Blockly.JavaScript.valueToCode(block, 'cmd11_2', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd11_3 = Blockly.JavaScript.valueToCode(block, 'cmd11_3', Blockly.JavaScript.ORDER_ATOMIC);
  
  if ((cmd11_0.indexOf("'")==0)&&(cmd11_0.lastIndexOf("'")==cmd11_0.length-1))
    cmd11_0 = cmd11_0.substring(1,cmd11_0.length-1);
  if ((cmd11_0.indexOf("(")==0)&&(cmd11_0.lastIndexOf(")")==cmd11_0.length-1))
    cmd11_0 = cmd11_0.substring(1,cmd11_0.length-1);
    
  var code = myVar + "." + cmd11_0 + "(" + cmd11_1 + ", " + cmd11_2 + ", " + cmd11_3 + ")";
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};
