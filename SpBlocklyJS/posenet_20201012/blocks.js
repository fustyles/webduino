Blockly.Blocks['posenet_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.POSENET_MODELNAME_SHOW)  
      .appendField(new Blockly.FieldDropdown([
		["MobileNetV1","MobileNetV1"],
		["ResNet50","ResNet50"]	  
  ]), "modelname_");	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_VIDEO_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "video_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SKELETON_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],	  
		["N","none"]
  ]), "skeleton_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_PERSONS_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],	  
		[Blockly.Msg.POSENET_LIMIT_SHOW,"999"]	  
  ]), "persons_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SCORELIMIT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["0.1","0.1"],
		["0.2","0.2"],
		["0.3","0.3"],
		["0.4","0.4"],	  
		["0.5","0.5"],
		["0.6","0.6"],
		["0.7","0.7"],
		["0.8","0.8"],
		["0.9","0.9"]	  
  ]), "scorelimit_"); 	 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_OPACITY_SHOW)
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
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_list'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW);	  
  this.appendDummyInput()  
	  .appendField(Blockly.Msg.POSENET_LIST_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_person'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW);	  
  this.appendValueInput("person_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_PERSON_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.POSENET_NOSE_SHOW,"nose"],
		[Blockly.Msg.POSENET_LEFTEYE_SHOW,"leftEye"],
		[Blockly.Msg.POSENET_RIGHTEYE_SHOW,"rightEye"],
		[Blockly.Msg.POSENET_LEFTEAR_SHOW,"leftEar"],
		[Blockly.Msg.POSENET_RIGHTEAR_SHOW,"rightEar"],
		[Blockly.Msg.POSENET_LEFTSHOULDER_SHOW,"leftShoulder"],
		[Blockly.Msg.POSENET_RIGHTSHOULDER_SHOW,"rightShoulder"],
		[Blockly.Msg.POSENET_LEFTELBOW_SHOW,"leftElbow"],
		[Blockly.Msg.POSENET_RIGHTELBOW_SHOW,"rightElbow"],
		[Blockly.Msg.POSENET_LEFTWRIST_SHOW,"leftWrist"],
		[Blockly.Msg.POSENET_RIGHTWRIST_SHOW,"rightWrist"],
		[Blockly.Msg.POSENET_LEFTHIP_SHOW,"leftHip"],
		[Blockly.Msg.POSENET_RIGHTHIP_SHOW,"rightHip"],
		[Blockly.Msg.POSENET_LEFTKNEE_SHOW,"leftKnee"],
		[Blockly.Msg.POSENET_RIGHTKNEE_SHOW,"rightKnee"],
		[Blockly.Msg.POSENET_LEFTANKLE_SHOW,"leftAnkle"],
		[Blockly.Msg.POSENET_RIGHTANKLE_SHOW,"rightAnkle"],
		[Blockly.Msg.POSENET_ALL_SHOW,""]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.POSENET_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["score","score"]		
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_DISTANCE_SHOW);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X0");
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y0"); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X1");
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y1");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_ANGLE_SHOW);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X0");
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y0"); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X1");
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y1");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_state'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_STATE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["Y","1"],
        ["N","0"]
  ]), "state_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_video_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_persons'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_PERSONS_NUMBER_SHOW);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};


Blockly.Blocks['posenet_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.POSENET_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.POSENET_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.POSENET_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};

Blockly.Blocks['posenet_recognitied'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_SHOW);	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.POSENET_RECOGNITIED_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.POSENET_RECOGNITIED_PERSONS_SHOW,"Y"],
		[Blockly.Msg.POSENET_RECOGNITIED_NOBODY_SHOW,"N"]	
  ]), "status_");		  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(200);
  }
};