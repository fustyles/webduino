Blockly.Blocks['boardevent_ready'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("BoardEvent.READY");
    this.appendStatementInput("do_");
    this.appendStatementInput("do2_");
    this.appendStatementInput("do3_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['boardevent_error'] = {
  init: function () { 
    this.appendDummyInput()
      .appendField("BoardEvent.ERROR");
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['boardevent_message'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("BoardEvent.STRING_MESSAGE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};
