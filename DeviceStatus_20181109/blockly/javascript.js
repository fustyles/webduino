Blockly.JavaScript['boardevent_ready'] = function (block) {
  var value_intervals = Blockly.JavaScript.valueToCode(block, 'intervals', Blockly.JavaScript.ORDER_ATOMIC);
  var do_error = Blockly.JavaScript.statementToCode(block, 'do_error');
  var do_message = Blockly.JavaScript.statementToCode(block, 'do_message');
  var code = 'board.on(BoardEvent.READY, function() {\n    setInterval(function(){\n        board.send([0xF0, 0x0E, 0x07, 0xF7]);\n    }, ' + value_intervals + ');\n});\nboard.on(BoardEvent.ERROR, function() {\n' + do_error + '\n});\nboard.on(webduino.BoardEvent.STRING_MESSAGE, function(event) {\n' + do_error + '\n});\n';
  return code;
};

Blockly.JavaScript['boardevent_error'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'board.on(BoardEvent.ERROR, function() {\n' + statements_do_ + '\n});\n';
  return code;
};

Blockly.JavaScript['boardevent_message'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'board.on(webduino.BoardEvent.STRING_MESSAGE, function(event) {\n' + statements_do_ + '\n});\n';
  return code;
};
