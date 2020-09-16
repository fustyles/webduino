Blockly.Blocks['deeplab_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DEEPLAB_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DEEPLAB_HEIGHT_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEEPLAB_MODEL_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["pascal","pascal"],
		//["cityscapes","cityscapes"],	
		["ade20k","ade20k"]	  
  ]), "model_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEEPLAB_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEEPLAB_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['deeplab_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEEPLAB_GET_SHOW);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};
