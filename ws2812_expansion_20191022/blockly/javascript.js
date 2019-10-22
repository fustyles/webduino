Blockly.JavaScript['ws2812_expansion_code24'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812_'), Blockly.Variables.NAME_TYPE);
  var code = "";
  for (var i=0;i<=23;i++) {
      var value_color = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC);
      if ((value_color.indexOf("'")==0)&&(value_color.lastIndexOf("'")==value_color.length-1))
        value_color = value_color.substring(1,value_color.length-1);
      if ((value_color.indexOf("(")==0)&&(value_color.lastIndexOf(")")==value_color.length-1))
        value_color = value_color.substring(1,value_color.length-1);
      if (value_color!="#000000"&&value_color.length==7) {
        code += variable_ws2812+".setColor("+i+",'"+value_color+"');\n";
      }
  }
   return code;
};
