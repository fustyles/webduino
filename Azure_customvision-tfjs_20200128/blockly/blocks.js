Blockly.Blocks['customvision_tfjs_object'] = {
  init: function() {
  this.appendValueInput("object_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_OBJECT_SHOW); 
  this.appendValueInput("index_")
      .setCheck("Number")
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_INDEX_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['customvision_tfjs_object_number'] = {
  init: function() {
  this.appendValueInput("object_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_OBJECT_NUMBER_SHOW);   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['customvision_tfjs_object_max'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_MAX_SHOW);   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['customvision_tfjs_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_OBJECT_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_FUNCTION_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Classification","Classification"],
		["ObjectDetection","ObjectDetection"] 
  ]), "func_"); 
  this.appendValueInput("path_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_PATH_SHOW); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_HEIGHT_SHOW);	 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_"); 	 
  this.appendValueInput("timer_")
      .setCheck("Number")
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_TIMER_SHOW);    
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['customvision_tfjs_detect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_DETECT_SHOW);
  this.appendValueInput("scorelimit_")
      .setCheck("Number")
      .appendField(Blockly.Msg.CUSTOMVISION_TFJS_SCORELIMIT_SHOW);  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
