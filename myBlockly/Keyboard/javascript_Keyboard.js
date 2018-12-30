Blockly.JavaScript['keydown_listener'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');  
  var code = 'window.addEventListener("keydown", function (event) {\n' + statement + '}, true);\n';
  return code;
};

Blockly.JavaScript['keyup_listener'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');  
  var code = 'window.addEventListener("keyup", function (event) {\n' + statement + '}, true);\n';
  return code;
};

Blockly.JavaScript['keypress_listener'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');  
  var code = 'window.addEventListener("keypress", function (event) {\n' + statement + '}, true);\n';
  return code;
};

Blockly.JavaScript['get_keycode'] = function(block) {
  var code = 'event.keyCode';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['keydown_keycode'] = function(block) {
  var keycode = block.getFieldValue('keycode'); 
  var code = 'event.keyCode == ' + keycode;
  return [code, Blockly.JavaScript.ORDER_NONE];
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
