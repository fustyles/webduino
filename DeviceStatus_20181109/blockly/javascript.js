Blockly.JavaScript['boardevent'] = function (block) {
  var value_intervals = Blockly.JavaScript.valueToCode(block, 'intervals', Blockly.JavaScript.ORDER_ATOMIC);
  var device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
  var do_ready = Blockly.JavaScript.statementToCode(block, 'do_ready');
  var do_error = Blockly.JavaScript.statementToCode(block, 'do_error');
  var do_message = Blockly.JavaScript.statementToCode(block, 'do_message');
  var code = 'var board = new webduino.WebArduino('+device+');\nvar BoardEvent = webduino.BoardEvent;\nboard.on(BoardEvent.READY,async function() {\nboard.send([0xF0, 0x0E, 0x07, 0xF7]);\n    setInterval(async function(){\n        board.send([0xF0, 0x0E, 0x07, 0xF7]);\n    }, ' + value_intervals + ');\n' + do_ready + '});\nboard.on(BoardEvent.ERROR,async function() {\n' + do_error + '});\nboard.on(webduino.BoardEvent.STRING_MESSAGE,async function(event) {\n' + do_message + '});\n';
  return code;
};

Blockly.JavaScript['boardevent_message'] = function (block) {
  var code = 'event.message.split(",")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
