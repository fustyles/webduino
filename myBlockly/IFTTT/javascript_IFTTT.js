Blockly.JavaScript['ifttt_open'] = function (block) {
  var ifttt_event = Blockly.JavaScript.valueToCode(block, 'ifttt_event', Blockly.JavaScript.ORDER_ATOMIC);  
  var ifttt_key = Blockly.JavaScript.valueToCode(block, 'ifttt_key', Blockly.JavaScript.ORDER_ATOMIC);
  var ifttt_value1 = Blockly.JavaScript.valueToCode(block, 'ifttt_value1', Blockly.JavaScript.ORDER_ATOMIC);
  ifttt_value1 = HextoRgb(ifttt_value1);  //Color Hex to RGB
  var ifttt_value2 = Blockly.JavaScript.valueToCode(block, 'ifttt_value2', Blockly.JavaScript.ORDER_ATOMIC);
  ifttt_value2 = HextoRgb(ifttt_value2);  //Color Hex to RGB
  var ifttt_value3 = Blockly.JavaScript.valueToCode(block, 'ifttt_value3', Blockly.JavaScript.ORDER_ATOMIC);
  ifttt_value3 = HextoRgb(ifttt_value3);  //Color Hex to RGB
  
  if (!ifttt_event) ifttt_event='""';
  if (!ifttt_key) ifttt_key='""';
  if (!ifttt_value1) ifttt_value1='""';
  if (!ifttt_value2) ifttt_value2='""';
  if (!ifttt_value3) ifttt_value3='""';
  
  var code = 'ifttt('+ifttt_event+','+ifttt_key+','+ifttt_value1+','+ifttt_value2+','+ifttt_value3+');\n';
  return code; 
};

function HextoRgb(color) {
  if (!color) return null;
  if (color.indexOf("#")!=-1&&color.indexOf("'")==0) {
    var color_hex = color.substring(1,color.length-1);
    var color_rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color_hex);
    return "'rgb("+parseInt(color_rgb[1], 16)+","+parseInt(color_rgb[2], 16)+","+parseInt(color_rgb[3], 16)+")'";
  }
  else
    return color.replace(/#/g,"%23");
}
