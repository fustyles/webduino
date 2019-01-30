Blockly.JavaScript['setwindow'] = function (block) {
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var overflow = block.getFieldValue('overflow');
  document.getElementById("ifrLeft").value=left;
  document.getElementById("ifrTop").value=top;
  document.getElementById("ifrWidth").value=width;
  document.getElementById("ifrHeight").value=height;
  var code = 'body_set("overflow","' + overflow + '");\n';
  return code;
};

Blockly.JavaScript['body_set'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  value_value_ = HextoRgb(value_value_);  //Color Hex to RGB
  var code = 'body_set("' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['window_reload'] = function (block) {
  var code = 'window.location.reload();\n';
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
