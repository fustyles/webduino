Blockly.JavaScript['boardevent_ready'] = function (block) {
  var value_intervals = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'board.on(BoardEvent.READY, function() {setInterval(function(){board.send([0xF0, 0x0E, 0x07, 0xF7]);}, ' + value_intervals + ');});\n';
  return code;
};

Blockly.JavaScript['boardevent_error'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'board.on(BoardEvent.ERROR, function() {' + statements_do_ + '});\n';
  return code;
};

Blockly.JavaScript['boardevent_message'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'board.on(webduino.BoardEvent.STRING_MESSAGE, function(event) {' + statements_do_ + '});\n';
  return code;
};
