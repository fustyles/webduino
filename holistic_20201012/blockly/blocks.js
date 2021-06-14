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
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" [1-468]");
  this.appendValueInput("part_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT);
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

Blockly.Blocks['holistic_face_lefteye_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_LEFTEYE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["363"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","362"],
		["399","398"],	
		["385","384"],
		["386","385"],
		["387"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","386"],
		["388","387"],	
		["389","388"],
		["467","466"],
		["264"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","263"],
		["250","249"],	
		["391","390"],
		["374","373"],
		["375"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","374"],
		["381","380"],	
		["382","381"],
		["383","382"]
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

Blockly.Blocks['holistic_face_righteye_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["134"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","133"],
		["174","173"],	
		["158","157"],
		["159","158"],
		["160"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","159"],
		["161","160"],	
		["162","161"],
		["247","246"],
		["34"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","33"],
		["8","7"],	
		["164","163"],
		["145","144"],
		["146"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","145"],
		["154","153"],	
		["155","154"],
		["156","155"]
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

Blockly.Blocks['holistic_face_nose_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_NOSE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["6"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","5"],
		["282","281"],	
		["364","363"],
		["361","360"],
		["280","279"],
		["332"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","331"],	
		["295","294"],
		["461","460"],
		["327","326"],
		["3"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","2"],	
		["98","97"],
		["241","240"],
		["65","64"],
		["103"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","102"],	
		["50","49"],
		["132","131"],	
		["135","134"],		
		["52","51"]
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

Blockly.Blocks['holistic_face_mouth_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_MOUTH_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["14"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","13"],
		["15"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","14"],	
		["313","312"],
		["318","317"],
		["312","311"],
		["403","402"],	
		["311","310"],
		["319","318"],
		["416","415"],
		["325","324"],	
		["309"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","308"],
		["83","82"],
		["88","87"],
		["82","81"],	
		["179","178"],
		["81","80"],	
		["89","88"],
		["192","191"],	
		["96","95"],		
		["79"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","78"]
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