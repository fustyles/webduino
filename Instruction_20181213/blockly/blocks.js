Blockly.Blocks['cmd1'] = {
  init: function() {
  this.appendValueInput("cmd1_0")
      .setCheck("String")
      .appendField("Code ");    
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['cmd2'] = {
  init: function() {
  this.appendValueInput("cmd2_0")
      .setCheck("String")
      .appendField("Code ");    
  this.appendValueInput("cmd2_1")
      .setCheck(null)
      .appendField("( ");  
  this.appendDummyInput()
      .appendField(" )");      
  this.setOutput(true, null);
  this.setInputsInline(true);
  this.setTooltip('');
  this.setColour(65);
  }
};
