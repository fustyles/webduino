Blockly.Blocks['posenet_person'] = {
  init: function() {
  this.appendValueInput("person_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_PERSON_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_PART_SHOW)
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
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['posenet_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_HEIGHT_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_PERSONS_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],	  
		["No Limit","999"]	  
  ]), "persons_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["",""]
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["YES","block"],
		["NO","none"]	  
  ]), "result_"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
