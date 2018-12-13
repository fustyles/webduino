Blockly.Blocks['cmd1'] = {
  init: function() {
  this.appendValueInput("cmd1_1")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Code ");    
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(65);
  }
};
