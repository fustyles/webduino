Blockly.Blocks['thingspeak_update'] = {
  init: function() {   
  this.appendValueInput("key")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ThingSpeak   ")
      .appendField("Write API Key");
  this.appendValueInput("field1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field1");
  this.appendValueInput("field2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field2");
  this.appendValueInput("field3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field3");  
  this.appendValueInput("field4")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field4");
  this.appendValueInput("field5")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field5");
  this.appendValueInput("field6")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field6");  
  this.appendValueInput("field7")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field7");
  this.appendValueInput("field8")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field8");  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};


Blockly.Blocks['thingspeak_read1'] = {
  init: function() {  
  this.appendDummyInput()
      .appendField("Get a Channel Feed");
  this.appendValueInput("key")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("https://api.thingspeak.com/channels/");
  this.appendValueInput("count")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("/feeds.json?results=");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};

Blockly.Blocks['thingspeak_read2'] = {
  init: function() {  
  this.appendDummyInput()
      .appendField("Get a Channel Feed");
  this.appendValueInput("key")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("https://api.thingspeak.com/channels/");
  this.appendValueInput("field")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("/fields/");    
  this.appendValueInput("count")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(".json?results=");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};

Blockly.Blocks['thingspeak_read3'] = {
  init: function() {  
  this.appendDummyInput()
      .appendField("Get Channel Status Updates");
  this.appendValueInput("key")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("https://api.thingspeak.com/channels/");
  this.appendDummyInput()
      .appendField("/status.json");  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};

Blockly.Blocks['thingspeak_getresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ThingSpeak get response data");
    this.setInputsInline(false);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};

Blockly.Blocks['thingspeak_clearresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ThingSpeak clear response data");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};
