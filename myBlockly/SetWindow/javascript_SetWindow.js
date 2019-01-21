Blockly.JavaScript['setscreen'] = function (block) {
  var left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var top = Blockly.JavaScript.valueToCode(block, 'top', Blockly.JavaScript.ORDER_ATOMIC);
  var width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = '';
  return code;
};

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
  var code = 'body_set("overflow",' + overflow + ');\n';
  return code;
};

Blockly.JavaScript['body_set'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'body_set("' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['window_reload'] = function (block) {
  var code = 'window.location.reload();\n';
  return code;
};

Blockly.JavaScript['window_event'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');  
  var event = block.getFieldValue('event');
  if ((event.indexOf("'")==0)&&(event.lastIndexOf("'")==event.length-1))
    event = event.substring(1,event.length-1);
  var code = 'window.addEventListener("'+event+'", my'+event+', true);\nasync function my'+event+'(event) {\n' + statement + '};\n';
  return code;
};
