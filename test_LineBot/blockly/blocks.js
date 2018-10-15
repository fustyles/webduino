Blockly.Blocks['linebot_notify'] = {
  init: function() {
  this.appendValueInput("bot_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Line Bot   ")
      .appendField("CHANNEL ACCESS TOKEN");    
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
        .appendField("Type")
        .appendField(new Blockly.FieldDropdown([["text;text","text"], ["sticker;packageId;stickerId","sticker"]["image;originalContentUrl;previewImageUrl","image"], ["video;originalContentUrl;previewImageUrl","video"], ["audio;originalContentUrl;duration","audio"]]), "value_type");
        //.appendField(new Blockly.FieldDropdown([["text,text","text"], ["sticker,packageId,stickerId","sticker"]["image,originalContentUrl,previewImageUrl","image"], ["video,originalContentUrl,previewImageUrl","video"], ["audio,originalContentUrl,duration","audio"]]), "value_type");
    this.appendValueInput("value_paramter1")
        .setCheck(null)
        .appendField("Paramter1");
    this.appendValueInput("value_paramter2")
        .setCheck(null)
        .appendField("Paramter2");
    this.appendValueInput("value_paramter3")
        .setCheck(null)
        .appendField("Paramter3");
    this.appendValueInput("value_paramter4")
        .setCheck(null)
        .appendField("Paramter4");    
    this.appendValueInput("value_paramter5")
        .setCheck(null)
        .appendField("Paramter5"); 
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
      .appendField("CHANNEL ACCESS TOKEN");   
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
