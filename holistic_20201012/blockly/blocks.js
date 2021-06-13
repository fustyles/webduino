Blockly.Blocks['holistic_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_VIDEO_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "video_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	
  ]), "face_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_POSE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	
  ]), "pose_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_LEFTHAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	
  ]), "lefthand_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_RIGHTHAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	
  ]), "righthand_");  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SCORELIMIT_SHOW)
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
      .appendField(Blockly.Msg.HOLISTIC_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_OPACITY_SHOW)
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

Blockly.Blocks['holistic_face_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_NOSE_SHOW,"nose"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW,"leftEye"],
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW,"rightEye"],
		[Blockly.Msg.HOLISTIC_LEFTEAR_SHOW,"leftEar"],
		[Blockly.Msg.HOLISTIC_RIGHTEAR_SHOW,"rightEar"],
		[Blockly.Msg.HOLISTIC_LEFTSHOULDER_SHOW,"leftShoulder"],
		[Blockly.Msg.HOLISTIC_RIGHTSHOULDER_SHOW,"rightShoulder"],
		[Blockly.Msg.HOLISTIC_LEFTELBOW_SHOW,"leftElbow"],
		[Blockly.Msg.HOLISTIC_RIGHTELBOW_SHOW,"rightElbow"],
		[Blockly.Msg.HOLISTIC_LEFTWRIST_SHOW,"leftWrist"],
		[Blockly.Msg.HOLISTIC_RIGHTWRIST_SHOW,"rightWrist"],
		[Blockly.Msg.HOLISTIC_LEFTHIP_SHOW,"leftHip"],
		[Blockly.Msg.HOLISTIC_RIGHTHIP_SHOW,"rightHip"],
		[Blockly.Msg.HOLISTIC_LEFTKNEE_SHOW,"leftKnee"],
		[Blockly.Msg.HOLISTIC_RIGHTKNEE_SHOW,"rightKnee"],
		[Blockly.Msg.HOLISTIC_LEFTANKLE_SHOW,"leftAnkle"],
		[Blockly.Msg.HOLISTIC_RIGHTANKLE_SHOW,"rightAnkle"],
		[Blockly.Msg.HOLISTIC_ALL_SHOW,""]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['holistic_pose_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_POSE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_NOSE_SHOW,"0"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","1"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_CENTER_SHOW+")","2"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","3"],		
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","4"],
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_CENTER_SHOW+")","5"],
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","6"],		
		[Blockly.Msg.HOLISTIC_LEFTEAR_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_RIGHTEAR_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_MOUTH_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","9"],
		[Blockly.Msg.HOLISTIC_MOUTH_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","10"],		
		[Blockly.Msg.HOLISTIC_LEFTSHOULDER_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_RIGHTSHOULDER_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_LEFTELBOW_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_RIGHTELBOW_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_LEFTWRIST_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_RIGHTWRIST_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_LEFTPINKY_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_RIGHTPINKY_SHOW,"18"],		
		[Blockly.Msg.HOLISTIC_LEFTINDEX_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_RIGHTINDEX_SHOW,"20"],
		[Blockly.Msg.HOLISTIC_LEFTTHUMB_SHOW,"21"],
		[Blockly.Msg.HOLISTIC_RIGHTTHUMB_SHOW,"22"],
		[Blockly.Msg.HOLISTIC_LEFTHIP_SHOW,"23"],
		[Blockly.Msg.HOLISTIC_RIGHTHIP_SHOW,"24"],
		[Blockly.Msg.HOLISTIC_LEFTKNEE_SHOW,"25"],
		[Blockly.Msg.HOLISTIC_RIGHTKNEE_SHOW,"26"],
		[Blockly.Msg.HOLISTIC_LEFTANKLE_SHOW,"27"],
		[Blockly.Msg.HOLISTIC_RIGHTANKLE_SHOW,"28"],
		[Blockly.Msg.HOLISTIC_LEFTHEEL_SHOW,"29"],
		[Blockly.Msg.HOLISTIC_RIGHTHEEL_SHOW,"30"],
		[Blockly.Msg.HOLISTIC_LEFTFOOTINDEX_SHOW,"31"],
		[Blockly.Msg.HOLISTIC_RIGHTFOOTINDEX_SHOW,"32"]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['holistic_lefthand_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_LEFTHAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HOLISTIC_HAND1_SHOW,"1"],
		[Blockly.Msg.HOLISTIC_HAND2_SHOW,"2"],
		[Blockly.Msg.HOLISTIC_HAND3_SHOW,"3"],
		[Blockly.Msg.HOLISTIC_HAND4_SHOW,"4"],
		[Blockly.Msg.HOLISTIC_HAND5_SHOW,"5"],
		[Blockly.Msg.HOLISTIC_HAND6_SHOW,"6"],
		[Blockly.Msg.HOLISTIC_HAND7_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_HAND8_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_HAND9_SHOW,"9"],
		[Blockly.Msg.HOLISTIC_HAND10_SHOW,"10"],
		[Blockly.Msg.HOLISTIC_HAND11_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_HAND12_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_HAND13_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_HAND14_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_HAND15_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_HAND16_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_HAND17_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_HAND18_SHOW,"18"],
		[Blockly.Msg.HOLISTIC_HAND19_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_HAND20_SHOW,"20"]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['holistic_righthand_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_RIGHTHAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HOLISTIC_HAND1_SHOW,"1"],
		[Blockly.Msg.HOLISTIC_HAND2_SHOW,"2"],
		[Blockly.Msg.HOLISTIC_HAND3_SHOW,"3"],
		[Blockly.Msg.HOLISTIC_HAND4_SHOW,"4"],
		[Blockly.Msg.HOLISTIC_HAND5_SHOW,"5"],
		[Blockly.Msg.HOLISTIC_HAND6_SHOW,"6"],
		[Blockly.Msg.HOLISTIC_HAND7_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_HAND8_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_HAND9_SHOW,"9"],
		[Blockly.Msg.HOLISTIC_HAND10_SHOW,"10"],
		[Blockly.Msg.HOLISTIC_HAND11_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_HAND12_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_HAND13_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_HAND14_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_HAND15_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_HAND16_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_HAND17_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_HAND18_SHOW,"18"],
		[Blockly.Msg.HOLISTIC_HAND19_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_HAND20_SHOW,"20"]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['holistic_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_DISTANCE_SHOW);
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

Blockly.Blocks['holistic_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_ANGLE_SHOW);
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

Blockly.Blocks['holistic_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_STATE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["Y","1"],
        ["N","0"]
  ]), "state_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['holistic_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HOLISTIC_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HOLISTIC_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['holistic_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.HOLISTIC_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.HOLISTIC_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HOLISTIC_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HOLISTIC_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['holistic_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.HOLISTIC_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};