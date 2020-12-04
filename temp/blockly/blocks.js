Blockly.Blocks['linenotify_image'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LINENOTIFY_IMAGE_SHOW);
  this.appendValueInput("notify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Token");  
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "notify_source");
  this.appendValueInput("notify_videoid")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINENOTIFY_ID);
  this.appendValueInput("notify_script")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINENOTIFY_SCRIPTURL);
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};
