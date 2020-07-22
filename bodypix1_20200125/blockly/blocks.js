Blockly.Blocks['bodypix1_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BODYPIX1_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BODYPIX1_HEIGHT_SHOW);	 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BODYPIX1_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BODYPIX1_FUNCTION_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["backgroundDarkeningMask","1"],
		["segmentation","2"],
		["coloredPartImageData","3"],
		["coloredPartImage","4"],
		["drawPixelatedMask","5"]	  
  ]), "func_");  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
