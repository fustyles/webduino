Blockly.JavaScript['showtext'] = function (block) {
  var size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  size = "'"+size+"px'";
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'document.getElementById("showText").style.fontSize='+size+';\ndocument.getElementById("showText").style.color='+color+';\ndocument.getElementById("showText").innerHTML = '+ text +';\n';
  return code;
};

Blockly.JavaScript['linebreak'] = function (block) {
  var code = "'<br>'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['setscreen'] = function (block) {
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  left = "'"+left+"px'";
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  top = "'"+top+"px'";
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  width = "'"+width+"px'";
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  height = "'"+height+"px'";
  document.getElementById("runArea").style.left='+left;
  document.getElementById("runArea").style.top='+top;
  document.getElementById("iframe_run").style.width='+width;
  document.getElementById("iframe_run").style.height='+height;
  
  var code = '//document.getElementById("runArea").style.left='+left+';\n//document.getElementById("runArea").style.top='+top+';\n//document.getElementById("iframe_run").style.width='+width+';\n//document.getElementById("iframe_run").style.height='+height+';\n';
  return code;
};
