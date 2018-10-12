Blockly.Blocks['rgb_led'] = {
  init: function() {
    this.appendValueInput("VALUE_RED")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TITLE_SHOW)
        .appendField(Blockly.Msg.RED_SHOW)
        .appendField(new Blockly.FieldDropdown([["3","3"], ["5","5"], ["6","6"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["15","15"]]), "PIN_RED")
        .appendField(Blockly.Msg.VALE_RED_SHOW);
    this.appendValueInput("VALUE_GREEN")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GREEN_SHOW)
        .appendField(new Blockly.FieldDropdown([["3","3"], ["5","5"], ["6","6"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["15","15"]]), "PIN_GREEN")
        .appendField(Blockly.Msg.VALUE_GREEN_SHOW);
    this.appendValueInput("VALUE_BLUE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BLUE_SHOW)
        .appendField(new Blockly.FieldDropdown([["3","3"], ["5","5"], ["6","6"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["15","15"]]), "PIN_BLUE")
        .appendField(Blockly.Msg.VALUE_BLUE_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
