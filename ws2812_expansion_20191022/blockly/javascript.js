Blockly.JavaScript['ws2812_expansion_code24'] = function (block) {
   var ws2812_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812_'), Blockly.Variables.NAME_TYPE);
   var ws2812Code = "";
   var code = "";
   for (var i=0;i<=23;i++) {
       var color_ = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC);
       if (color_ != "#000000"&&color_.length=="7") {
         if (i<10)
           ws2812Code += "0" + i + color_;
         else
           ws2812Code += i + color_;
       }
   }

   if (ws2812Code.substring(0, 55) != "") {
     code += ws2812_+".setColor('"+ws2812Code.substring(0, 55)+"');\n";
   }
   if (ws2812Code.substring(56, 111) != "") {
     code += ws2812_+".setColor('"+ws2812Code.substring(56, 111)+"');\n";
   }
   if (ws2812Code.substring(112, 167) != "") {
     code += ws2812_+".setColor('"+ws2812Code.substring(112, 167)+"');\n";
   }
   if (ws2812Code.substring(168, 191) != "") {
     code += ws2812_+".setColor('"+ws2812Code.substring(168, 191)+"');\n";
   }

    return code;
};
