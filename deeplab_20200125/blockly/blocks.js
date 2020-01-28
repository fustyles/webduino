Blockly.Blocks['deeplab_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DEEPLAB_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DEEPLAB_HEIGHT_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEEPLAB_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["yes","1"],
		["no","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEEPLAB_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["show","block"],
		["hide","none"]	  
  ]), "result_");  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};