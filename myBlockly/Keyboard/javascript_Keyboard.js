Blockly.JavaScript['keydown_listener'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');  
  var code = 'window.addEventListener("keydown", function (event) {\n' + 
			    statement +  
			  '}, true);\n';
  return code;
};

Blockly.JavaScript['keydown_keycode'] = function(block) {
  var keycode = block.getFieldValue('keycode'); 
  var code = 'event.keyCode == ' + keycode;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
