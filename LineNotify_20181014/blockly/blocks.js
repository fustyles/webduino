Blockly.Blocks['line_notify'] = {
  init: function() {
  this.appendValueInput("notify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Line Nofity   ")
      .appendField("CHANNEL ACCESS TOKEN");    
  this.appendValueInput("notify_userid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("USERID");
  this.appendValueInput("notify_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("MESSAGE");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};
