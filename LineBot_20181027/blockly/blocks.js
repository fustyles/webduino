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
  this.appendValueInput("bot_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINENOTIFY_KIND_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['linebot_type'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINENOTIFY_TEXT_SHOW,"text"], [Blockly.Msg.LINENOTIFY_STICKER_SHOW,"sticker"], [Blockly.Msg.LINENOTIFY_IMAGE_SHOW,"image"], [Blockly.Msg.LINENOTIFY_VIDEO_SHOW,"video"], [Blockly.Msg.LINENOTIFY_AUDIO_SHOW,"audio"], [Blockly.Msg.LINENOTIFY_LOCATION_SHOW,"location"]]), "value_type");
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
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(event) {
    //if (event.type=="change") {
      if (this.getField('value_type').getValue() == 'text') {
        this.getField('p1').setValue(Blockly.Msg.LINENOTIFY_TEXT_SHOW);  
        this.getField('p2').setValue("");
        this.getField('p3').setValue("");
        this.getField('p4').setValue("");
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(false);
        this.getField('p3').setVisible(false);
        this.getField('p4').setVisible(false);
        this.getInput('value_parameter1').setVisible(true);
        if (this.getInput('value_parameter2').visible_==true||this.getInput('value_parameter3').visible_==true||this.getInput('value_parameter4').visible_==true) 
          this.unplugBlocks();
        this.getInput('value_parameter2').setVisible(false);
        this.getInput('value_parameter3').setVisible(false);
        this.getInput('value_parameter4').setVisible(false);
      } else if (this.getField('value_type').getValue() == "sticker") {
        this.getField('p1').setValue(Blockly.Msg.LINENOTIFY_PACKAGEID_SHOW);
        this.getField('p2').setValue(Blockly.Msg.LINENOTIFY_STICKERID_SHOW);  
        this.getField('p3').setValue("");
        this.getField('p4').setValue(""); 
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(false);
        this.getField('p4').setVisible(false);
        this.getInput('value_parameter1').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        if (this.getInput('value_parameter3').visible_==true||this.getInput('value_parameter4').visible_==true) 
          this.unplugBlocks();
        this.getInput('value_parameter3').setVisible(false);
        this.getInput('value_parameter4').setVisible(false);
      } else if (this.getField('value_type').getValue() == "image") {
        this.getField('p1').setValue(Blockly.Msg.LINENOTIFY_ORIGINALCONTENTURL_SHOW);
        this.getField('p2').setValue(Blockly.Msg.LINENOTIFY_PREVIEWIMAGEURL_SHOW); 
        this.getField('p3').setValue("");
        this.getField('p4').setValue(""); 
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(false);
        this.getField('p4').setVisible(false);
        this.getInput('value_parameter1').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        if (this.getInput('value_parameter3').visible_==true||this.getInput('value_parameter4').visible_==true) 
          this.unplugBlocks();
        this.getInput('value_parameter3').setVisible(false);
        this.getInput('value_parameter4').setVisible(false);
      } else if (this.getField('value_type').getValue() == "video") {
        this.getField('p1').setValue(Blockly.Msg.LINENOTIFY_ORIGINALCONTENTURL_VIDEO_SHOW);
        this.getField('p2').setValue(Blockly.Msg.LINENOTIFY_PREVIEWIMAGEURL_VIDEO_SHOW);  
        this.getField('p3').setValue("");
        this.getField('p4').setValue(""); 
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(false);
        this.getField('p4').setVisible(false);
        this.getInput('value_parameter1').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        if (this.getInput('value_parameter3').visible_==true||this.getInput('value_parameter4').visible_==true) 
          this.unplugBlocks();
        this.getInput('value_parameter3').setVisible(false);
        this.getInput('value_parameter4').setVisible(false);
      } else if (this.getField('value_type').getValue() == "audio") {
        this.getField('p1').setValue(Blockly.Msg.LINENOTIFY_ORIGINALCONTENTURL_AUDIO_SHOW);
        this.getField('p2').setValue(Blockly.Msg.LINENOTIFY_DURATION_SHOW);    
        this.getField('p3').setValue("");
        this.getField('p4').setValue(""); 
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(false);
        this.getField('p4').setVisible(false);
        this.getInput('value_parameter1').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        if (this.getInput('value_parameter3').visible_==true||this.getInput('value_parameter4').visible_==true) 
          this.unplugBlocks();
        this.getInput('value_parameter3').setVisible(false);
        this.getInput('value_parameter4').setVisible(false);
      } else if (this.getField('value_type').getValue() == "location") {
        this.getField('p1').setValue(Blockly.Msg.LINENOTIFY_TITLE_SHOW);
        this.getField('p2').setValue(Blockly.Msg.LINENOTIFY_ADDRESS_SHOW);        
        this.getField('p3').setValue(Blockly.Msg.LINENOTIFY_LATITUDE_SHOW);  
        this.getField('p4').setValue(Blockly.Msg.LINENOTIFY_LONGITUDE_SHOW);  
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(true);
        this.getField('p4').setVisible(true);
        this.getInput('value_parameter1').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        this.getInput('value_parameter3').setVisible(true);
        this.getInput('value_parameter4').setVisible(true);
      }
      this.setOutput(true, null);
    //}
  },
  mutationToDom : function() {
    var container = document.createElement('mutation');
    container.setAttribute('value_type', this.getField('value_type').getValue());
    return container;
  },
  domToMutation : function(xmlElement) {
    this.getField('value_type').setValue(xmlElement.getAttribute('value_type'));
    this.onchange();
  },
  unplugBlocks : function() {
    while (this.childBlocks_.length > 0) {
        this.childBlocks_[this.childBlocks_.length-1].unplug();
    }
  }
};

Blockly.Blocks['linenotify'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Line")
      .appendField(Blockly.Msg.LINENOTIFY_NOTIFY_SHOW);	  
  this.appendValueInput("notify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.LINENOTIFY_TOKEN_SHOW);  
  this.appendValueInput("notify_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINENOTIFY_KIND_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['linenotify_type'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINENOTIFY_TEXT_SHOW,"text"], [Blockly.Msg.LINENOTIFY_STICKER_SHOW,"sticker"], [Blockly.Msg.LINENOTIFY_IMAGE,"image"]]), "value_type");
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
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(event) {
    if (this.getField('value_type').getValue() == 'text') {
      this.getField('p1').setValue(Blockly.Msg.LINENOTIFY_TEXT_SHOW);
      this.getField('p2').setValue("");
      this.getField('p3').setValue("");
      this.getField('p2').setVisible(false);
      this.getField('p3').setVisible(false); 
      if (this.getInput('value_parameter2').visible_==true||this.getInput('value_parameter3').visible_==true) 
        this.unplugBlocks();
      this.getInput('value_parameter2').setVisible(false);
      this.getInput('value_parameter3').setVisible(false);
    } else if (this.getField('value_type').getValue() == "sticker") {
      this.getField('p1').setValue(Blockly.Msg.LINENOTIFY_TEXT_SHOW);
      this.getField('p2').setValue(Blockly.Msg.LINENOTIFY_PACKAGEID_SHOW);
      this.getField('p3').setValue(Blockly.Msg.LINENOTIFY_STICKERID_SHOW);
      this.getField('p2').setVisible(true);
      this.getField('p3').setVisible(true);
      this.getInput('value_parameter2').setVisible(true);
      this.getInput('value_parameter3').setVisible(true);
    } else if (this.getField('value_type').getValue() == "image") {
      this.getField('p1').setValue(Blockly.Msg.LINENOTIFY_TEXT_SHOW);
      this.getField('p2').setValue(Blockly.Msg.LINENOTIFY_ORIGINALCONTENTURL_SHOW);
      this.getField('p3').setValue(Blockly.Msg.LINENOTIFY_PREVIEWIMAGEURL_SHOW);
      this.getField('p2').setVisible(true);
      this.getField('p3').setVisible(true);
      this.getInput('value_parameter2').setVisible(true);
      this.getInput('value_parameter3').setVisible(true);
    }
    this.setOutput(true, null);
  },
  mutationToDom : function() {
    var container = document.createElement('mutation');
    container.setAttribute('value_type', this.getField('value_type').getValue());
    return container;
  },
  domToMutation : function(xmlElement) {
    this.getField('value_type').setValue(xmlElement.getAttribute('value_type'));
    this.onchange();
  },
  unplugBlocks : function() {
    while (this.childBlocks_.length > 0) {
        this.childBlocks_[this.childBlocks_.length-1].unplug();
    }
  }
};

Blockly.Blocks['linenotify_image'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Line")
      .appendField(Blockly.Msg.LINENOTIFY_NOTIFY_SHOW)	  
      .appendField(Blockly.Msg.LINENOTIFY_IMAGE_SHOW);
  this.appendValueInput("notify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINENOTIFY_TOKEN_SHOW);  
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINENOTIFY_VIDEO,"video"], [Blockly.Msg.LINENOTIFY_CANVAS,"canvas"], [Blockly.Msg.LINENOTIFY_IMAGE,"image"]]), "notify_source");
  this.appendValueInput("notify_videoid")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINENOTIFY_ID);
  this.appendValueInput("notify_script")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINENOTIFY_SCRIPTURL);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['linenotify_getid'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.LINENOTIFY_GETID_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ELEMENT_VIDEO,"video"],
		[Blockly.Msg.ELEMENT_CANVAS,"canvas"],
		[Blockly.Msg.ELEMENT_IMAGE,"img"]
  ]), "tagname_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};
