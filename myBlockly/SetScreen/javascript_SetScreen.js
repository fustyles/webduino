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

Blockly.JavaScript['comment'] = function (block) {
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  if ((text.indexOf("'")==0)&&(text.lastIndexOf("'")==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = '//' + text+'\n';
  return code;
};
