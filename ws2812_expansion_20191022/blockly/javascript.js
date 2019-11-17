Blockly.JavaScript['ws2812_expansion_1to24'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812_'), Blockly.Variables.NAME_TYPE);
  var change = (block.getFieldValue('change_') == 'TRUE')?"1":"0";
  var code = "";
  for (var i=0;i<=23;i++) {
      var value_color = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC);  
      if ((value_color.indexOf("#000000")==-1&&value_color!="")||value_color.indexOf("colour_")!=-1) {
        if (change==1)
          code += variable_ws2812+".setColor("+i+",'#'+"+value_color+".substr(3,2)+"+value_color+".substr(1,2)+"+value_color+".substr(5,2));\n";
        else
          code += variable_ws2812+".setColor("+i+","+value_color+");\n";
      }
  }
  
  /*
  var colorcode = "";
  var count = 0;
  for (var i=0;i<=23;i++) {
    var value_color = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC); 
    if ((value_color.indexOf("#000000")==-1&&value_color!="")||value_color.indexOf("colour_")!=-1) {
      if (change==1) {
        if (i<10)
          colorcode += "'0"+i+"'+"+value_color+".substr(3,2)+"+value_color+".substr(1,2)+"+value_color+".substr(5,2)+";
        else 
          colorcode += "'"+i+"'+"+value_color+".substr(3,2)+"+value_color+".substr(1,2)+"+value_color+".substr(5,2)+";
      }
      else {
        if (i<10)
          colorcode += "'0"+i+"'+"+value_color+".substr(1,6)+";
        else
          colorcode += "'"+i+"'+"+value_color+".substr(1,6)+";
      }
      count++;
      if (count==8) {
        //console.log(colorcode);
        if (colorcode!="") colorcode = colorcode.substr(0,colorcode.length-1)
        code += variable_ws2812+".setColor("+colorcode+");\n"; 
        count=0;
        colorcode="";
      }
    }
  }
  
  */
  
  return code;
};

Blockly.JavaScript['ws2812_expansion_1to8'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812_'), Blockly.Variables.NAME_TYPE);
  var change = (block.getFieldValue('change_') == 'TRUE')?"1":"0";
  var code = "";
  var colorcode = "";
  for (var i=0;i<=7;i++) {
    var value_color = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC); 
    if ((value_color.indexOf("#000000")==-1&&value_color!="")||value_color.indexOf("colour_")!=-1) {
      if (change==1) {
        if (i<10)
          colorcode += "'0"+i+"'+"+value_color+".substr(3,2)+"+value_color+".substr(1,2)+"+value_color+".substr(5,2)+";
        else 
          colorcode += "'"+i+"'+"+value_color+".substr(3,2)+"+value_color+".substr(1,2)+"+value_color+".substr(5,2)+";
      }
      else {
        if (i<10)
          colorcode += "'0"+i+"'+"+value_color+".substr(1,6)+";
        else
          colorcode += "'"+i+"'+"+value_color+".substr(1,6)+";
      }
    }
  }
  //console.log(colorcode);
  if (colorcode!="") colorcode = colorcode.substr(0,colorcode.length-1)
  code = variable_ws2812+".setColor("+colorcode+");\n";
   return code;
};

Blockly.JavaScript['ws2812_expansion_9to16'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812_'), Blockly.Variables.NAME_TYPE);
  var change = (block.getFieldValue('change_') == 'TRUE')?"1":"0";
  var code = "";
  for (var i=8;i<=15;i++) {
      var value_color = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC);  
      if ((value_color.indexOf("#000000")==-1&&value_color!="")||value_color.indexOf("colour_")!=-1) {
        if (change==1)
          code += variable_ws2812+".setColor("+i+",'#'+"+value_color+".substr(4,2)+"+value_color+".substr(2,2)+"+value_color+".substr(6,2));\n";
        else
          code += variable_ws2812+".setColor("+i+","+value_color+");\n";
      }
  }
   return code;
};

Blockly.JavaScript['ws2812_expansion_17to24'] = function (block) {
  var variable_ws2812 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ws2812_'), Blockly.Variables.NAME_TYPE);
  var change = (block.getFieldValue('change_') == 'TRUE')?"1":"0";
  var code = "";
  for (var i=16;i<=23;i++) {
      var value_color = Blockly.JavaScript.valueToCode(block, 'color'+i+'_', Blockly.JavaScript.ORDER_ATOMIC);  
      if ((value_color.indexOf("#000000")==-1&&value_color!="")||value_color.indexOf("colour_")!=-1) {
        if (change==1)
          code += variable_ws2812+".setColor("+i+",'#'+"+value_color+".substr(4,2)+"+value_color+".substr(2,2)+"+value_color+".substr(6,2));\n";
        else
          code += variable_ws2812+".setColor("+i+","+value_color+");\n";
      }
  }
   return code;
};
