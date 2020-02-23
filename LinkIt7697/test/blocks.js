Blockly.Blocks['test_code'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.OPEN_SHOW);   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
  }
};

Blockly.Blocks['test_comment'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.CLOSE_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
