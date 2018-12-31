Blockly.JavaScript['keyboard_listener'] = function (block) {
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

Blockly.JavaScript['stop_keyboard_listener'] = function (block) {
  var event = block.getFieldValue('event');
  if (event=="keydown")
    var code = 'window.removeEventListener("keydown", function (event) {}, true);\n';
  else if (event=="keyup")
    var code = 'window.removeEventListener("keyup", function (event) {}, true);\n';
  else if (event=="keypress")
    var code = 'window.removeEventListener("keypress", function (event) {}, true);\n';
  return code;
};

Blockly.JavaScript['get_keycode'] = function(block) {
  var code = 'event.keyCode';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['keyboard_keycode'] = function(block) {
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
