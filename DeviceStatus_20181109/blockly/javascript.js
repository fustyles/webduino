Blockly.JavaScript['boardevent'] = function (block) {
  var device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
  var do_ready = Blockly.JavaScript.statementToCode(block, 'do_ready');
  var do_error = Blockly.JavaScript.statementToCode(block, 'do_error');
  var do_message = Blockly.JavaScript.statementToCode(block, 'do_message');
  var code = 'var board1 = new webduino.WebArduino('+device+');\nvar BoardEvent = webduino.BoardEvent;\nboard1.on(BoardEvent.READY,async function() {\n'+do_ready+'});\nboard1.on(BoardEvent.ERROR,async function() {\n' + do_error + '});\nboard1.on(webduino.BoardEvent.STRING_MESSAGE,async function(event) {\n' + do_message + '});\n';
  return code;
};

Blockly.JavaScript['boardevent_sendmessage'] = function (block) {
  var cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  cmd = cmd.replace(/\'/g,"");
  var code = 'board1.send('+cmd+');\n';
  return code;
};

Blockly.JavaScript['boardevent_getmessage'] = function (block) {
  var code = 'event.message.split(",")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
