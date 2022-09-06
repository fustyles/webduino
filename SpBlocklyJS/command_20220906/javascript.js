Blockly.JavaScript['command_parameter9'] = function (block) {
  var cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var p1 = Blockly.JavaScript.valueToCode(block, 'p1', Blockly.JavaScript.ORDER_ATOMIC);
  var p2 = Blockly.JavaScript.valueToCode(block, 'p2', Blockly.JavaScript.ORDER_ATOMIC);
  var p3 = Blockly.JavaScript.valueToCode(block, 'p3', Blockly.JavaScript.ORDER_ATOMIC);
  var p4 = Blockly.JavaScript.valueToCode(block, 'p4', Blockly.JavaScript.ORDER_ATOMIC);
  var p5 = Blockly.JavaScript.valueToCode(block, 'p5', Blockly.JavaScript.ORDER_ATOMIC);
  var p6 = Blockly.JavaScript.valueToCode(block, 'p6', Blockly.JavaScript.ORDER_ATOMIC);
  var p7 = Blockly.JavaScript.valueToCode(block, 'p7', Blockly.JavaScript.ORDER_ATOMIC);
  var p8 = Blockly.JavaScript.valueToCode(block, 'p8', Blockly.JavaScript.ORDER_ATOMIC);
  var p9 = Blockly.JavaScript.valueToCode(block, 'p9', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = "'?'+"+cmd+"+'='+"+p1+"+';'+"+p2+"+';'+"+p3+"+';'+"+p4+"+';'+"+p5+"+';'+"+p6+"+';'+"+p7+"+';'+"+p8+"+';'+"+p9;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['command_parameter3'] = function (block) {
  var cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var p1 = Blockly.JavaScript.valueToCode(block, 'p1', Blockly.JavaScript.ORDER_ATOMIC);
  var p2 = Blockly.JavaScript.valueToCode(block, 'p2', Blockly.JavaScript.ORDER_ATOMIC); 
  var p3 = Blockly.JavaScript.valueToCode(block, 'p3', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = "'?'+"+cmd+"+'='+"+p1+"+';'+"+p2+"+';'+"+p3;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['command_parameter2'] = function (block) {
  var cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var p1 = Blockly.JavaScript.valueToCode(block, 'p1', Blockly.JavaScript.ORDER_ATOMIC);
  var p2 = Blockly.JavaScript.valueToCode(block, 'p2', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = "'?'+"+cmd+"+'='+"+p1+"+';'+"+p2;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['command_parameter'] = function (block) {
  var cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "'?'+"+cmd;
  return [code, Blockly.JavaScript.ORDER_NONE];
};