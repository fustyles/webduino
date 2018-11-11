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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["text","text"], ["sticker","sticker"], ["image","image"], ["video","video"], ["audio","audio"], ["location","location"]]), "value_type");
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
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(event) {
    //if (event.type=="change") {
      if (this.getField('value_type').getValue() == 'text') {
        this.getField('p1').setValue("text");  
        this.getField('p2').setValue("");
        this.getField('p3').setValue("");
        this.getField('p4').setValue("");
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(false);
        this.getField('p3').setVisible(false);
        this.getField('p4').setVisible(false);
        this.getInput('value_parameter1').setVisible(true);
        this.getInput('value_parameter2').setVisible(false);
        this.getInput('value_parameter3').setVisible(false);
        this.getInput('value_parameter4').setVisible(false);
      } else if (this.getField('value_type').getValue() == "sticker") {
        this.getField('p1').setValue("packageId");
        this.getField('p2').setValue("stickerId");  
        this.getField('p3').setValue("");
        this.getField('p4').setValue(""); 
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(false);
        this.getField('p4').setVisible(false);
        this.getInput('value_parameter1').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        this.getInput('value_parameter3').setVisible(false);
        this.getInput('value_parameter4').setVisible(false);
      } else if (this.getField('value_type').getValue() == "image") {
        this.getField('p1').setValue("originalContentUrl");
        this.getField('p2').setValue("previewImageUrl"); 
        this.getField('p3').setValue("");
        this.getField('p4').setValue(""); 
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(false);
        this.getField('p4').setVisible(false);
        this.getInput('value_parameter1').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        this.getInput('value_parameter3').setVisible(false);
        this.getInput('value_parameter4').setVisible(false);
      } else if (this.getField('value_type').getValue() == "vedio") {
        this.getField('p1').setValue("(originalContentUrl");
        this.getField('p2').setValue("previewImageUrl");  
        this.getField('p3').setValue("");
        this.getField('p4').setValue(""); 
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(false);
        this.getField('p4').setVisible(false);
        this.getInput('value_parameter1').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        this.getInput('value_parameter3').setVisible(false);
        this.getInput('value_parameter4').setVisible(false);
      } else if (this.getField('value_type').getValue() == "audio") {
        this.getField('p1').setValue("originalContentUrl");
        this.getField('p2').setValue("duration");    
        this.getField('p3').setValue("");
        this.getField('p4').setValue(""); 
        this.getField('p1').setVisible(true);
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(false);
        this.getField('p4').setVisible(false);
        this.getInput('value_parameter1').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        this.getInput('value_parameter3').setVisible(false);
        this.getInput('value_parameter4').setVisible(false);
      } else if (this.getField('value_type').getValue() == "location") {
        this.getField('p1').setValue("title");
        this.getField('p2').setValue("address");        
        this.getField('p3').setValue("latitude");  
        this.getField('p4').setValue("longitude");  
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["text","text"], ["sticker","sticker"], ["image","image"]]), "value_type");
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
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function(event) {
    //if (event.type=="change") {
      if (this.getField('value_type').getValue() == 'text') {
        this.getField('p1').setValue("text");
        this.getField('p2').setValue("");
        this.getField('p3').setValue("");
        this.getField('p2').setVisible(false);
        this.getField('p3').setVisible(false);
        this.getInput('value_parameter2').setVisible(false);
        this.getInput('value_parameter3').setVisible(false);
      } else if (this.getField('value_type').getValue() == "sticker") {
        this.getField('p1').setValue("text");
        this.getField('p2').setValue("packageId");
        this.getField('p3').setValue("stickerId");
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        this.getInput('value_parameter3').setVisible(true);
      } else if (this.getField('value_type').getValue() == "image") {
        this.getField('p1').setValue("text");
        this.getField('p2').setValue("originalContentUrl");
        this.getField('p3').setValue("previewImageUrl");
        this.getField('p2').setVisible(true);
        this.getField('p3').setVisible(true);
        this.getInput('value_parameter2').setVisible(true);
        this.getInput('value_parameter3').setVisible(true);
      }
      this.setOutput(true, null);
    //}
  }
};
