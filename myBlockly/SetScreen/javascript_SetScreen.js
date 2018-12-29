Blockly.JavaScript['setscreen'] = function (block) {
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  document.getElementById("ifrLeft").value=left;
  document.getElementById("ifrTop").value=top;
  document.getElementById("ifrWidth").value=width;
  document.getElementById("ifrHeight").value=height;
  
  var code = '';
  return code;
};
