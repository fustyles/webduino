Blockly.Blocks['linenotify'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.LINENOTIFY_SHOW);
	this.appendValueInput("token_")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINENOTIFY_TOKEN_SHOW);  	  
	this.appendDummyInput()  
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.LINENOTIFY_TEXT_SHOW,"text"],
			[Blockly.Msg.LINENOTIFY_STICKER_SHOW,"sticker"], 
			[Blockly.Msg.LINENOTIFY_IMAGE_SHOW,"image"]
		], this.validate), "type_"); 	  
    this.appendValueInput("text_")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINENOTIFY_MESSAGE_SHOW);
    this.appendValueInput("packageId_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINENOTIFY_PACKAGEID_SHOW,"S1");
    this.appendValueInput("stickerId_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINENOTIFY_STICKERID_SHOW,"S2");
    this.appendValueInput("originalContentUrl_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINENOTIFY_ORIGINALCONTENTURL_SHOW,"I1");
    this.appendValueInput("previewImageUrl_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINENOTIFY_PREVIEWIMAGEURL_SHOW,"I2");		
	this.setInputsInline(true);	  
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(250);
	this.getInput("packageId_").setVisible(false);
	this.getField("S1").setVisible(false);
	this.getInput("stickerId_").setVisible(false);
	this.getField("S2").setVisible(false);
	this.getInput("originalContentUrl_").setVisible(false);
	this.getField("I1").setVisible(false);
	this.getInput("previewImageUrl_").setVisible(false);
	this.getField("I2").setVisible(false);	
	
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (!block) return;
	 if (newValue=="text") {
		 block.getInput("packageId_").setVisible(false);
		 block.getField("S1").setVisible(false);
		 block.getInput("stickerId_").setVisible(false);
		 block.getField("S2").setVisible(false);
		 block.getInput("originalContentUrl_").setVisible(false);
		 block.getField("I1").setVisible(false);
		 block.getInput("previewImageUrl_").setVisible(false);
		 block.getField("I2").setVisible(false);
		 block.setInputsInline(true);
	 }
	 else if (newValue=="sticker") {
		 block.getInput("packageId_").setVisible(true);
		 block.getField("S1").setVisible(true);
		 block.getInput("stickerId_").setVisible(true);
		 block.getField("S2").setVisible(true);
		 block.getInput("originalContentUrl_").setVisible(false);
		 block.getField("I1").setVisible(false);
		 block.getInput("previewImageUrl_").setVisible(false);
		 block.getField("I2").setVisible(false); 
		 block.setInputsInline(false);		 
	 }
	 else if (newValue=="image") {
		 block.getInput("packageId_").setVisible(false);
		 block.getField("S1").setVisible(false);
		 block.getInput("stickerId_").setVisible(false);
		 block.getField("S2").setVisible(false);
		 block.getInput("originalContentUrl_").setVisible(true);
		 block.getField("I1").setVisible(true);
		 block.getInput("previewImageUrl_").setVisible(true);
		 block.getField("I2").setVisible(true);
		 block.setInputsInline(false);		 
	 }	 
  } 
};

Blockly.Blocks['linenotify_image'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.LINENOTIFY_SHOW)	  
      .appendField(Blockly.Msg.LINENOTIFY_IMAGE_SHOW);
  this.appendValueInput("notify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINENOTIFY_TOKEN_SHOW);  
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.LINENOTIFY_VIDEO_SHOW,"video"], 
		  [Blockly.Msg.LINENOTIFY_CANVAS_SHOW,"canvas"], 
		  [Blockly.Msg.LINENOTIFY_IMAGE_SHOW,"image"]
	  ]), "notify_source");
  this.appendValueInput("notify_id")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINENOTIFY_ID_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(250);
  }
};

Blockly.Blocks['linebot_notify'] = {
  init: function() {
	this.appendDummyInput()
		.appendField("Line")
		.appendField(Blockly.Msg.LINEBOT_SHOW);
	this.appendValueInput("bot_token")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINENOTIFY_TOKEN_SHOW);    
	this.appendValueInput("bot_userid")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINENOTIFY_USERID_SHOW);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINENOTIFY_TEXT_SHOW,"text"], [Blockly.Msg.LINENOTIFY_STICKER_SHOW,"sticker"], [Blockly.Msg.LINENOTIFY_IMAGE_SHOW,"image"], [Blockly.Msg.LINENOTIFY_VIDEO_SHOW,"video"], [Blockly.Msg.LINENOTIFY_AUDIO_SHOW,"audio"], [Blockly.Msg.LINENOTIFY_LOCATION_SHOW,"location"]], this.validate), "value_type");
	this.appendValueInput("value_parameter1")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField("Parameter1","p1");
	this.appendValueInput("value_parameter2")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField("Parameter2","p2");
	this.appendValueInput("value_parameter3")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField("Parameter3","p3");
	this.appendValueInput("value_parameter4")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField("Parameter4","p4"); 
	this.setInputsInline(false);	  
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
	this.setColour(250);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (!block) return;
	  if (newValue == 'text') {
		block.getField('p1').setValue(Blockly.Msg.LINENOTIFY_TEXT_SHOW);  
		block.getField('p2').setValue("");
		block.getField('p3').setValue("");
		block.getField('p4').setValue("");
		block.getField('p1').setVisible(true);
		block.getField('p2').setVisible(false);
		block.getField('p3').setVisible(false);
		block.getField('p4').setVisible(false);
		block.getInput('value_parameter1').setVisible(true);
		block.getInput('value_parameter2').setVisible(false);
		block.getInput('value_parameter3').setVisible(false);
		block.getInput('value_parameter4').setVisible(false);
	  } 
	  else if (newValue == "sticker") {
		block.getField('p1').setValue(Blockly.Msg.LINENOTIFY_PACKAGEID_SHOW);
		block.getField('p2').setValue(Blockly.Msg.LINENOTIFY_STICKERID_SHOW);  
		block.getField('p3').setValue("");
		block.getField('p4').setValue(""); 
		block.getField('p1').setVisible(true);
		block.getField('p2').setVisible(true);
		block.getField('p3').setVisible(false);
		block.getField('p4').setVisible(false);
		block.getInput('value_parameter1').setVisible(true);
		block.getInput('value_parameter2').setVisible(true);
		block.getInput('value_parameter3').setVisible(false);
		block.getInput('value_parameter4').setVisible(false);
	  } 
	  else if (newValue == "image") {
		block.getField('p1').setValue(Blockly.Msg.LINENOTIFY_ORIGINALCONTENTURL_SHOW);
		block.getField('p2').setValue(Blockly.Msg.LINENOTIFY_PREVIEWIMAGEURL_SHOW); 
		block.getField('p3').setValue("");
		block.getField('p4').setValue(""); 
		block.getField('p1').setVisible(true);
		block.getField('p2').setVisible(true);
		block.getField('p3').setVisible(false);
		block.getField('p4').setVisible(false);
		block.getInput('value_parameter1').setVisible(true);
		block.getInput('value_parameter2').setVisible(true);
		block.getInput('value_parameter3').setVisible(false);
		block.getInput('value_parameter4').setVisible(false);
	  } 
	  else if (newValue == "video") {
		block.getField('p1').setValue(Blockly.Msg.LINENOTIFY_ORIGINALCONTENTURL_VIDEO_SHOW);
		block.getField('p2').setValue(Blockly.Msg.LINENOTIFY_PREVIEWIMAGEURL_VIDEO_SHOW);  
		block.getField('p3').setValue("");
		block.getField('p4').setValue(""); 
		block.getField('p1').setVisible(true);
		block.getField('p2').setVisible(true);
		block.getField('p3').setVisible(false);
		block.getField('p4').setVisible(false);
		block.getInput('value_parameter1').setVisible(true);
		block.getInput('value_parameter2').setVisible(true);
		block.getInput('value_parameter3').setVisible(false);
		block.getInput('value_parameter4').setVisible(false);
	  } 
	  else if (newValue == "audio") {
		block.getField('p1').setValue(Blockly.Msg.LINENOTIFY_ORIGINALCONTENTURL_AUDIO_SHOW);
		block.getField('p2').setValue(Blockly.Msg.LINENOTIFY_DURATION_SHOW);    
		block.getField('p3').setValue("");
		block.getField('p4').setValue(""); 
		block.getField('p1').setVisible(true);
		block.getField('p2').setVisible(true);
		block.getField('p3').setVisible(false);
		block.getField('p4').setVisible(false);
		block.getInput('value_parameter1').setVisible(true);
		block.getInput('value_parameter2').setVisible(true);
		block.getInput('value_parameter3').setVisible(false);
		block.getInput('value_parameter4').setVisible(false);
	  } 
	  else if (newValue == "location") {
		block.getField('p1').setValue(Blockly.Msg.LINENOTIFY_TITLE_SHOW);
		block.getField('p2').setValue(Blockly.Msg.LINENOTIFY_ADDRESS_SHOW);        
		block.getField('p3').setValue(Blockly.Msg.LINENOTIFY_LATITUDE_SHOW);  
		block.getField('p4').setValue(Blockly.Msg.LINENOTIFY_LONGITUDE_SHOW);  
		block.getField('p1').setVisible(true);
		block.getField('p2').setVisible(true);
		block.getField('p3').setVisible(true);
		block.getField('p4').setVisible(true);
		block.getInput('value_parameter1').setVisible(true);
		block.getInput('value_parameter2').setVisible(true);
		block.getInput('value_parameter3').setVisible(true);
		block.getInput('value_parameter4').setVisible(true);
	  }
  }
};