Blockly.Blocks['create_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.create_button)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
