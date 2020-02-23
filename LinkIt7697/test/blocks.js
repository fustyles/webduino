Blockly.Blocks['test_open'] = {
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

Blockly.Blocks['test_close'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.CLOSE_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};
