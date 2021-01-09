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
  this.appendValueInput("telegram_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Token");  
  this.appendValueInput("telegram_chatid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ChatID"); 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TELEGRAM_VIDEO_SHOW,"video"], [Blockly.Msg.TELEGRAM_CANVAS_SHOW,"canvas"], [Blockly.Msg.TELEGRAM_IMAGE_SHOW,"image"]]), "telegram_source");
  this.appendValueInput("telegram_videoid")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_ID_SHOW);
  this.appendValueInput("telegram_script")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ScriptURL"); 
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['telegram_getupdates'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TELEGRAM_GETUPDATES_SHOW);
  this.appendValueInput("telegram_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Token");
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['telegram_getmessage'] = {
  init: function() {
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(new Blockly.FieldVariable("telegram_response"), "telegram_response")
	  .appendField(Blockly.Msg.TELEGRAM_GETMESSAGE_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['telegram_br'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TELEGRAM_BR_SHOW);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  this.setTooltip('Line-Break: ***'); 	  
  }
};

Blockly.Blocks['telegram_reply_markup'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TELEGRAM_REPLYMARKUP_SHOW);
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
  this.appendValueInput("telegram_keyboard")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("replyKeyboard");
  this.appendDummyInput()
      .appendField("onTime")  
      .appendField(new Blockly.FieldDropdown([
		["true","true"],
		["false","false"]
  ]), "telegram_ontime");
  this.setInputsInline(false);	  
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
