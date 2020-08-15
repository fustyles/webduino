Blockly.Blocks['telegram_message'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TELEGRAM_MESSAGE_SHOW);
  this.appendValueInput("telegram_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Token");  
  this.appendValueInput("telegram_chatid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ChatID"); 
  this.appendValueInput("telegram_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Message");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};
Blockly.Blocks['telegram_image'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TELEGRAM_IMAGE_SHOW);
  this.appendValueInput("telegram_script")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ScriptURL"); 
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

Blockly.Blocks['telegram_getid'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TELEGRAM_GETID_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["video","video"],
		["canvas","canvas"],
		["img","img"]
  ]), "tagname_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};