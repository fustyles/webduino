Blockly.JavaScript['showtext'] = function (block) {
  var size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  color = HextoRgb(color);  //Color Hex to RGB
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'showtext('+size+', '+color+', '+text+');\n';
  return code;
};

Blockly.JavaScript['linebreak'] = function (block) {
  var code = "'<br>'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['comment'] = function (block) {
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  if ((text.indexOf("'")==0)&&(text.lastIndexOf("'")==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = '//' + text+'\n';
  return code;
};

function HextoRgb(color) {
  if (!color) return null;
  if (color.indexOf("#")==1&&color.indexOf("'")==0&&color.length==9) {
    var color_hex = color.substring(1,color.length-1);
    var color_rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color_hex);
    return "'rgb("+parseInt(color_rgb[1], 16)+","+parseInt(color_rgb[2], 16)+","+parseInt(color_rgb[3], 16)+")'";
  }
  else
    return color.replace(/#/g,"%23");
}
