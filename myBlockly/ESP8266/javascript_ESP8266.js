Blockly.JavaScript['esp8266_system'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmd = block.getFieldValue('cmd');
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  value_P1 = HextoRgb(value_P1);  //Color Hex to RGB
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  value_P2 = HextoRgb(value_P2);  //Color Hex to RGB
  var code = "esp8266_sendCommand("+value_url+",'"+value_cmd+"',"+value_P1+","+value_P2+",'','','','','','','');\n";
  return code;
};

Blockly.JavaScript['esp8266_custom'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  value_P1 = HextoRgb(value_P1);  //Color Hex to RGB
  if (value_P1.toLowerCase().indexOf("0x")!=-1) {
    if ((value_P1.indexOf("'")==0)&&(value_P1.lastIndexOf("'")==value_P1.length-1))
    value_P1 = value_P1.substring(1,value_P1.length-1);
    if ((value_P1.indexOf("(")==0)&&(value_P1.lastIndexOf(")")==value_P1.length-1))
      value_P1 = value_P1.substring(1,value_P1.length-1);
    value_P1=parseInt(value_P1, 16);
  }
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  value_P2 = HextoRgb(value_P2);  //Color Hex to RGB
  var value_P3 = Blockly.JavaScript.valueToCode(block, 'P3', Blockly.JavaScript.ORDER_ATOMIC);
  value_P3 = HextoRgb(value_P3);  //Color Hex to RGB
  var value_P4 = Blockly.JavaScript.valueToCode(block, 'P4', Blockly.JavaScript.ORDER_ATOMIC);
  value_P4 = HextoRgb(value_P4);  //Color Hex to RGB
  var value_P5 = Blockly.JavaScript.valueToCode(block, 'P5', Blockly.JavaScript.ORDER_ATOMIC);
  value_P5 = HextoRgb(color);  //Color Hex to RGB
  var value_P6 = Blockly.JavaScript.valueToCode(block, 'P6', Blockly.JavaScript.ORDER_ATOMIC);
  value_P6 = HextoRgb(value_P6);  //Color Hex to RGB
  var value_P7 = Blockly.JavaScript.valueToCode(block, 'P7', Blockly.JavaScript.ORDER_ATOMIC);
  value_P7 = HextoRgb(value_P7);  //Color Hex to RGB
  var value_P8 = Blockly.JavaScript.valueToCode(block, 'P8', Blockly.JavaScript.ORDER_ATOMIC);
  value_P8 = HextoRgb(value_P8);  //Color Hex to RGB
  var value_P9 = Blockly.JavaScript.valueToCode(block, 'P9', Blockly.JavaScript.ORDER_ATOMIC);
  value_P9 = HextoRgb(value_P9);  //Color Hex to RGB
  var code = "esp8266_sendCommand("+value_url+","+value_cmd+","+value_P1+","+value_P2+","+value_P3+","+value_P4+","+value_P5+","+value_P6+","+value_P7+","+value_P8+","+value_P9+");\n";
  return code;
};

Blockly.JavaScript['esp8266_car'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  value_P1 = HextoRgb(value_P1);  //Color Hex to RGB
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  value_P2 = HextoRgb(value_P2);  //Color Hex to RGB
  var value_P3 = Blockly.JavaScript.valueToCode(block, 'P3', Blockly.JavaScript.ORDER_ATOMIC);
  value_P3 = HextoRgb(value_P3);  //Color Hex to RGB
  var value_P4 = Blockly.JavaScript.valueToCode(block, 'P4', Blockly.JavaScript.ORDER_ATOMIC);
  value_P4 = HextoRgb(value_P4);  //Color Hex to RGB
  var value_P5 = Blockly.JavaScript.valueToCode(block, 'P5', Blockly.JavaScript.ORDER_ATOMIC);
  value_P5 = HextoRgb(color);  //Color Hex to RGB
  var value_P6 = Blockly.JavaScript.valueToCode(block, 'P6', Blockly.JavaScript.ORDER_ATOMIC);
  value_P6 = HextoRgb(value_P6);  //Color Hex to RGB
  var value_P7 = Blockly.JavaScript.valueToCode(block, 'P7', Blockly.JavaScript.ORDER_ATOMIC);
  value_P7 = HextoRgb(value_P7);  //Color Hex to RGB 
  var dropdown_P8 = block.getFieldValue('P8');
  var code = "esp8266_sendCommand("+value_url+","+value_cmd+","+value_P1+","+value_P2+","+value_P3+","+value_P4+","+value_P5+","+value_P6+","+value_P7+",'"+dropdown_P8+"','');\n";
  return code;
};

Blockly.JavaScript['esp8266_getresponse'] = function(block) {
  var code = "esp8266_getResponse()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['esp8266_cmd'] = function(block) {
  var value_cmd = block.getFieldValue('cmd');
  var code = "'"+value_cmd+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['esp8266_clearresponse'] = function(block) {
  var code = "esp8266_clearData();\n";
  return code;
};

function HextoRgb(color) {
  if (!color) return null;
  if (color.indexOf("'#")==0&&color.length==9) {
    var color_hex = color.substring(1,color.length-1);
    var color_rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color_hex);
    return "'rgb("+parseInt(color_rgb[1], 16)+","+parseInt(color_rgb[2], 16)+","+parseInt(color_rgb[3], 16)+")'";
  }
  else
    return color.replace(/#/g,"%23");
}
