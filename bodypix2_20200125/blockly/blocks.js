Blockly.Blocks['bodypix2_list'] = {
  init: function() { 
  this.appendDummyInput()  
	  .appendField(Blockly.Msg.BODYPIX2_LIST_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['bodypix2_person'] = {
  init: function() {
  this.appendValueInput("person_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BODYPIX2_PERSON_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BODYPIX2_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["nose","nose"],
		["leftEye","leftEye"],
		["rightEye","rightEye"],
		["leftEar","leftEar"],
		["rightEar","rightEar"],
		["leftShoulder","leftShoulder"],
		["rightShoulder","rightShoulder"],
		["leftElbow","leftElbow"],
		["rightElbow","rightElbow"],
		["leftWrist","leftWrist"],
		["rightWrist","rightWrist"],
		["leftHip","leftHip"],
		["rightHip","rightHip"],
		["leftKnee","leftKnee"],
		["rightKnee","rightKnee"],
		["leftAnkle","leftAnkle"],
		["rightAnkle","rightAnkle"]
  ]), "part_");  
  this.appendDummyInput()
      .appendField(Blockly.Msg.BODYPIX2_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[" ",""],
		["score","score"],
		["x","x"],
		["y","y"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['bodypix2_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BODYPIX2_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BODYPIX2_HEIGHT_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BODYPIX2_FUNCTION_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["partMap","1"],
		["pixelation","2"],
		["blurBodyPart","3"]	  
  ]), "func_");   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BODYPIX2_SKELETON_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "skeleton_");	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BODYPIX2_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_");  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BODYPIX2_RESULT_SHOW)
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
