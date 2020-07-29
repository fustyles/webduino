Blockly.Blocks['teachablemachine_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_HEIGHT_SHOW);	 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['teachablemachine_model'] = {
  init: function() {
  this.appendValueInput("model_")
      .setCheck("String")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_MODEL_SHOW);  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['teachablemachine_result'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_PROPORTION_SHOW)
      .appendField(new Blockly.FieldDropdown([
	  ["",""],
	  ["maxClass","maxClass"], 
	  ["maxProbability","maxProbability"]
	  ]), "result_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

