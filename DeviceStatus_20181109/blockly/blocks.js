Blockly.Blocks['boardevent'] = {
  init: function () {
    this.appendValueInput("intervals")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField("BoardEvent.READY    Time Intervals");
    this.appendValueInput("device")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("String")
        .appendField("");    
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

Blockly.Blocks['boardevent_message'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Get Message");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(60);
  }
};
