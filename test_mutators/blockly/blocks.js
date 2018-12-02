Blockly.Blocks['demo_text_add'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DEMO_TEXT_ADD_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};
