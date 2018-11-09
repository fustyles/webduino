Blockly.Blocks['boardevent'] = {
  init: function () {
    this.appendValueInput("device")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("String")
        .appendField("BoardEvent.READY    Device ID");
    this.appendValueInput("intervals")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField("Time Intervals (ms)");
    this.appendValueInput("cmd")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("String")
        .appendField("Send Command"); 
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
    this.setColour(200);
  }
};
