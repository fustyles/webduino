Blockly.Blocks['telegram_message'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TELEGRAM_SENDMESSAGE_SHOW);
  this.appendValueInput("telegram_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_TOKEN_SHOW);  
  this.appendValueInput("telegram_chatid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_CHATID_SHOW); 
  this.appendValueInput("telegram_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_TEXT_SHOW);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(350);
  }
};

Blockly.Blocks['telegram_photo'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.TELEGRAM_SENDPHOTO_SHOW);
  this.appendValueInput("telegram_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_TOKEN_SHOW);  
  this.appendValueInput("telegram_chatid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_CHATID_SHOW); 
  this.appendValueInput("telegram_url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_PHOTOURL_SHOW); 
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(350);
  }
};

Blockly.Blocks['telegram_image'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.TELEGRAM_SENDVIDEO_SHOW);
  this.appendValueInput("telegram_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_TOKEN_SHOW);  
  this.appendValueInput("telegram_chatid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_CHATID_SHOW); 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TELEGRAM_VIDEO_SHOW,"video"], [Blockly.Msg.TELEGRAM_CANVAS_SHOW,"canvas"], [Blockly.Msg.TELEGRAM_IMAGE_SHOW,"image"]]), "telegram_source");
  this.appendValueInput("telegram_videoid")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_ID_SHOW);
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(350);
  }
};

Blockly.Blocks['telegram_getupdates'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TELEGRAM_GETUPDATES_SHOW);
  this.appendValueInput("telegram_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_TOKEN_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(350);
  }
};

Blockly.Blocks['telegram_getmessage'] = {
  init: function() {
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TELEGRAM_GETMESSAGE_SHOW);
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(350);
  }
};

Blockly.Blocks['telegram_br'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TELEGRAM_BR_SHOW);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(350);	  
  }
};

Blockly.Blocks['telegram_reply_markup'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.TELEGRAM_REPLYMARKUP_SHOW);
  this.appendValueInput("telegram_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_TOKEN_SHOW);  
  this.appendValueInput("telegram_chatid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_CHATID_SHOW); 
  this.appendValueInput("telegram_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_TEXT_SHOW);
  this.appendValueInput("telegram_keyboard")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELEGRAM_REPLYKEYBOARD_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.TELEGRAM_ONTIME_SHOW)  
      .appendField(new Blockly.FieldDropdown([
		["false","false"],	  
		["true","true"]
  ]), "telegram_ontime");
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(350);  
  }
};