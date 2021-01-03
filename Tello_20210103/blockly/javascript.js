Blockly.JavaScript['tello_initial'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'execURL("http://127.0.0.1:8001/"+'+value_ip + '+"/command");\nawait delay(' + value_delaytime + ', true);;\n';
  return code;
};

Blockly.JavaScript['tello_basic'] = function (block) {
  var value_ip = Blockly.JavaScript.valueToCode(block, 'ip_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_command = block.getFieldValue('command_');  
  var value_val = Blockly.JavaScript.valueToCode(block, 'val_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delaytime = Blockly.JavaScript.valueToCode(block, 'delaytime_', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'execURL("http://127.0.0.1:8001/"+'+value_ip + '+"/"+"' + value_command + '"+" "+'+ value_val+');\nawait delay(' + value_delaytime + ', true);;\n';
  return code;
};