Blockly.JavaScript['boardevent'] = function (block) {
  var value_intervals = Blockly.JavaScript.valueToCode(block, 'intervals', Blockly.JavaScript.ORDER_ATOMIC);
  var device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
  var cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var do_ready = Blockly.JavaScript.statementToCode(block, 'do_ready');
  var do_error = Blockly.JavaScript.statementToCode(block, 'do_error');
  var do_message = Blockly.JavaScript.statementToCode(block, 'do_message');
  var code = 'var board1 = new webduino.WebArduino('+device+');\nvar BoardEvent = webduino.BoardEvent;\nboard1.on(BoardEvent.READY,async function() {\n    setInterval(async function(){\n        board1.send('+cmd+');\n    }, ' + value_intervals + ');'+do_ready+'});\nboard1.on(BoardEvent.ERROR,async function() {\n' + do_error + '});\nboard1.on(webduino.BoardEvent.STRING_MESSAGE,async function(event) {\n' + do_message + '});\n';
  return code;
};

Blockly.JavaScript['boardevent_message'] = function (block) {
  var code = 'event.message.split(",")[0]';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
