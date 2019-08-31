Blockly.Blocks['azure_face_settings'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.AZUREFACE_SETTINGS_SHOW);
  this.appendValueInput("resourcename_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZUREFACE_RESOURCENAME_SHOW);
  this.appendValueInput("key_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZUREFACE_KEY_SHOW);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['azure_face_part'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZUREFACE_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["faceId","faceId"],
		["faceAttributes","faceAttributes"],
		["faceRectangle","faceRectangle"],
		["faceLandmarks","faceLandmarks"],
		["recognitionModel","recognitionModel"]
  ]), "part_");  	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['azure_face_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.AZUREFACE_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.AZUREFACE_HEIGHT_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZUREFACE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["show","block"],
		["hide","none"]	  
  ]), "result_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZUREFACE_OPACITY_SHOW)
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
