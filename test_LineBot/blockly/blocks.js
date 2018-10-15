Blockly.Blocks['linebot_notify'] = {
  init: function() {
  this.appendValueInput("bot_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Line Bot   ")
      .appendField("CHANNEL ACCESS TOKEN");    
  this.appendValueInput("bot_userid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("USERID");
  this.appendValueInput("bot_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("MESSAGE");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['linebot_picture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_STATE_SHOW);
    this.appendValueInput("packageId")
        .setCheck("Number")
        .appendField("packageId");
    this.appendValueInput("stickerId")
        .setCheck("Number")
        .appendField("stickerId");
    this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};
