Blockly.Blocks['linebot_notify'] = {
  init: function() {
  this.appendValueInput("bot_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Line Bot   ")
      .appendField("TOKEN");    
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

Blockly.Blocks['linebot_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Message (Line Bot)");    
    this.appendDummyInput()
        .appendField("Type")
        .appendField(new Blockly.FieldDropdown([["text (text)","text"], ["sticker (packageId, stickerId)","sticker"], ["image (originalContentUrl, previewImageUrl)","image"], ["video (originalContentUrl, previewImageUrl)","video"], ["audio (originalContentUrl, duration)","audio"], ["location (title, address, latitude, longitude)","location"]]), "value_type");
    this.appendValueInput("value_parameter1")
        .setCheck(null)
        .appendField("Parameter1");
    this.appendValueInput("value_parameter2")
        .setCheck(null)
        .appendField("Parameter2");
    this.appendValueInput("value_parameter3")
        .setCheck(null)
        .appendField("Parameter3");
    this.appendValueInput("value_parameter4")
        .setCheck(null)
        .appendField("Parameter4"); 
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

Blockly.Blocks['linenotify'] = {
  init: function() {
  this.appendValueInput("notify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Line Notify   ")
      .appendField("TOKEN");  
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

Blockly.Blocks['linenotify_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Message (Line Notify)");    
    this.appendDummyInput()
        .appendField("Type")
        .appendField(new Blockly.FieldDropdown([["text (text)","text"], ["sticker (text, packageId, stickerId)","sticker"], ["image (text, originalContentUrl, previewImageUrl)","image"]]), "value_type");
    this.appendValueInput("value_parameter1")
        .setCheck(null)
        .appendField("Parameter1","p1");
    this.appendValueInput("value_parameter2")
        .setCheck(null)
        .appendField("Parameter2","p2");
    this.appendValueInput("value_parameter3")
        .setCheck(null)
        .appendField("Parameter3","p3");    
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(event) {
    if (event.type=="change") {
      if (this.getField('value_type').getValue() == 'text') {
        this.getField('p2').setVisible(false);
        this.getField('value_parameter2').setVisible(false);
        this.getField('p3').setVisible(false);
        this.getField('value_parameter3').setVisible(false);
      } else {
        this.getField('p2').setVisible(true);
        this.getField('value_parameter2').setVisible(true);
        this.getField('p3').setVisible(true);
        this.getField('value_parameter3').setVisible(true);
      }
    }
  }
};
