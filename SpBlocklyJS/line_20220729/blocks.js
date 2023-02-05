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
