Blockly.Blocks['trackface_open'] = {
  init: function() { 
    this.appendDummyInput()  
        .appendField(Blockly.Msg.TRACKFACE_OPEN_SHOW);
    this.appendValueInput("url_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.URL_SHOW);
    this.appendValueInput("left_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LEFT_SHOW);    
    this.appendValueInput("top_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TOP_SHOW); 	  
    this.appendValueInput("display_")
	.setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TRACKFACE_DISPLAY_SHOW); 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
  }
};

Blockly.Blocks['trackface_display'] = {
  init: function() {
    this.appendValueInput("display_")
	.setCheck(null)
        .appendField(Blockly.Msg.TRACKFACE_DISPLAY_SHOW);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};

Blockly.Blocks['trackface_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKFACE_GET_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["faceX","faceX"], 
          ["faceY","faceY"],
          ["faceWidth","faceWidth"], 
          ["faceHeight","faceHeight"]
        ]), "property_");
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};
