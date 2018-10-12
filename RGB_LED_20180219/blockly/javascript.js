Blockly.JavaScript['rgb_led'] = function(block) {
  var pin_red = block.getFieldValue('PIN_RED');
  var value_red = Blockly.JavaScript.valueToCode(block, 'VALUE_RED', Blockly.JavaScript.ORDER_ATOMIC);
  var pin_green = block.getFieldValue('PIN_GREEN');
  var value_green = Blockly.JavaScript.valueToCode(block, 'VALUE_GREEN', Blockly.JavaScript.ORDER_ATOMIC);
  var pin_blue = block.getFieldValue('PIN_BLUE');
  var value_blue = Blockly.JavaScript.valueToCode(block, 'VALUE_BLUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  Blockly.JavaScript.definitions_['var_rgbled_pin'] = 'var ledred,ledgreen,ledblue;';
 
  var code = 'ledred = getPin(board, '+pin_red+');\n'+
             'ledred.setMode(3);\n'+
             'ledred.write('+value_red+');\n'+
             'ledgreen = getPin(board, '+pin_green+');\n'+
             'ledgreen.setMode(3);\n'+
             'ledgreen.write('+value_green+');\n'+
             'ledblue = getPin(board, '+pin_blue+');\n'+
             'ledblue.setMode(3);\n'+
             'ledblue.write('+value_blue+');\n'+
             'funRGB_LED('+pin_red+','+value_red+','+pin_green+','+value_green+','+pin_blue+','+value_blue+');\n';
  return code;
};
