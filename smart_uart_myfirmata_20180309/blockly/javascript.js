Blockly.JavaScript['uart_car'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str1 = Blockly.JavaScript.valueToCode(block, 'str1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str2 = Blockly.JavaScript.valueToCode(block, 'str2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str3 = Blockly.JavaScript.valueToCode(block, 'str3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str4 = Blockly.JavaScript.valueToCode(block, 'str4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str5 = Blockly.JavaScript.valueToCode(block, 'str5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str6 = Blockly.JavaScript.valueToCode(block, 'str6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str7 = Blockly.JavaScript.valueToCode(block, 'str7', Blockly.JavaScript.ORDER_ATOMIC);  
  var dropdown_str8 = block.getFieldValue('str8');
  var code = "uartcar("+value_cmd+","+value_str1+","+value_str2+","+value_str3+","+value_str4+","+value_str5+","+value_str6+","+value_str7+",'"+dropdown_str8+"')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['uart_system'] = function(block) {
  var dropdown_cmd = block.getFieldValue('cmd');
  var value_str1 = Blockly.JavaScript.valueToCode(block, 'str1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str2 = Blockly.JavaScript.valueToCode(block, 'str2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str3 = Blockly.JavaScript.valueToCode(block, 'str3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "uartsystem('"+dropdown_cmd+"',"+value_str1+","+value_str2+","+value_str3+")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['uart_custom'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str1 = Blockly.JavaScript.valueToCode(block, 'str1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str2 = Blockly.JavaScript.valueToCode(block, 'str2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str3 = Blockly.JavaScript.valueToCode(block, 'str3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str4 = Blockly.JavaScript.valueToCode(block, 'str4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str5 = Blockly.JavaScript.valueToCode(block, 'str5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str6 = Blockly.JavaScript.valueToCode(block, 'str6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str7 = Blockly.JavaScript.valueToCode(block, 'str7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str8 = Blockly.JavaScript.valueToCode(block, 'str8', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str9 = Blockly.JavaScript.valueToCode(block, 'str9', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "uartcustom("+value_cmd+","+value_str1+","+value_str2+","+value_str3+","+value_str4+","+value_str5+","+value_str6+","+value_str7+","+value_str8+","+value_str9+")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};
