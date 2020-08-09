Blockly.Blocks['telegram_image'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField("Telegram Image ");
  this.appendValueInput("telegram_script")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ScriptUrl"); 
  this.appendValueInput("telegram_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Token");  
  this.appendValueInput("telegram_chatid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ChatID"); 
  this.appendValueInput("telegram_videoid")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Element ID");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};