Blockly.JavaScript['boardevent_ready'] = function (block) {
  var value_intervals = Blockly.JavaScript.valueToCode(block, 'intervals', Blockly.JavaScript.ORDER_ATOMIC);
  var do_ready = Blockly.JavaScript.statementToCode(block, 'do_ready');
  var do_error = Blockly.JavaScript.statementToCode(block, 'do_error');
  var do_message = Blockly.JavaScript.statementToCode(block, 'do_message');
  var code = 'board.on(BoardEvent.READY,async function() {\nsetInterval(async function(){\n    board.send([0xF0, 0x0E, 0x07, 0xF7]);\n    }, ' + value_intervals + ');\n' + do_ready + '\n});\nboard.on(BoardEvent.ERROR,async function() {\n' + do_error + '});\nboard.on(webduino.BoardEvent.STRING_MESSAGE,async function(event) {\n' + do_message + '});\n';
  return code;
};
