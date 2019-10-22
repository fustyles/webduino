Blockly.JavaScript['ws2812_expansion_code24'] = function (block) {
   var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812_'), Blockly.Variables.NAME_TYPE);
   var ws2812Code = "";
   var code = "";
   for (var i=0;i<=23;i++) {
       var value_color = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC);
       console.log(value_color);
       if (value_color!="#000000"&&value_color.length==7) {
         if (i<10)
           ws2812Code += "0" + i + value_color.replace("#","");
         else
           ws2812Code += i + value_color.replace("#","");
       }
   }
   
   console.log(ws2812Code);

   if (ws2812Code.substring(0, 56) != "") {
     code += variable_ws2812+".setColor('"+ws2812Code.substring(0, 56)+"');\n";
   }
   if (ws2812Code.substring(56, 112) != "") {
     code += variable_ws2812+".setColor('"+ws2812Code.substring(56, 112)+"');\n";
   }
   if (ws2812Code.substring(112, 168) != "") {
     code += variable_ws2812+".setColor('"+ws2812Code.substring(112, 168)+"');\n";
   }
   if (ws2812Code.substring(168, 192) != "") {
     code += variable_ws2812+".setColor('"+ws2812Code.substring(168, 192)+"');\n";
   }

    return code;
};
