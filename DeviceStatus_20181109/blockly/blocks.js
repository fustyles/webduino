Blockly.Blocks['boardevent'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("BoardEvent.READY");    
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

Blockly.Blocks['boardevent_sendmessage'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Send Message");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['boardevent_getmessage'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Get Message");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(200);
  }
};
