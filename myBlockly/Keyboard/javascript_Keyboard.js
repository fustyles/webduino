Blockly.JavaScript['keydown_listener'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');  
  var event = block.getFieldValue('event');
  if (event=="keydown")
    var code = 'window.addEventListener("keydown", function (event) {\n' + statement + '}, true);\n';
  else if (event=="keyup")
    var code = 'window.addEventListener("keyup", function (event) {\n' + statement + '}, true);\n';
  else if (event=="keypress")
    var code = 'window.addEventListener("keypress", function (event) {\n' + statement + '}, true);\n';
  return code;
};

Blockly.JavaScript['hotkey'] = function(block) {
  var keycode = block.getFieldValue('keycode');
  if (keycode=="Ctrl")
    var code = '(event.ctrlKey)';
  else if (keycode=="Shift")
    var code = '(event.shiftKey)';
  else if (keycode=="Alt")
    var code = '(event.altKey)';  
  return [code, Blockly.JavaScript.ORDER_NONE];
};
