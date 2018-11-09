Blockly.Blocks['boardevent_ready'] = {
  init: function () {
    this.appendValueInput("intervals")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField("BoardEvent.READY    Time Intervals");
    this.appendStatementInput("do_ready");
    this.appendDummyInput()
      .appendField("BoardEvent.ERROR");
    this.appendStatementInput("do_error");
    this.appendDummyInput()
      .appendField("BoardEvent.STRING_MESSAGE");
    this.appendStatementInput("do_message");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};
