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
  this.setHelpUrl("https://google.github.io/mediapipe/solutions/holistic.html");   
  }
};

Blockly.Blocks['holistic_face_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
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
  this.setColour(200);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/face_landmarks.xlsx");  
  }
};

Blockly.Blocks['holistic_face_lefteye_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
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
  this.setColour(200);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/face_landmarks.xlsx");   
  }
};

Blockly.Blocks['holistic_face_righteye_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["34"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","33"],
		["247","246"],	
		["162","161"],
		["161","160"],
		["160"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","159"],
		["159","158"],	
		["158","157"],
		["174","173"],
		["134"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","133"],
		["156","155"],	
		["155","154"],
		["154","153"],
		["146"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","145"],
		["145","144"],	
		["164","163"],
		["8","7"]
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
  this.setColour(200);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/face_landmarks.xlsx");   
  }
};

Blockly.Blocks['holistic_face_nose_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_NOSE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["7"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","6"],
		["198","197"],	
		["196","195"],
		["6","5"],	
		["5","4"],
		["2","1"],
		["20","19"],
		["95","94"],
		["3"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","2"]
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
  this.setColour(200);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/face_landmarks.xlsx");   
  }
};

Blockly.Blocks['holistic_face_mouth_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_MOUTH_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["1"+" ("+Blockly.Msg.HOLISTIC_OUT_SHOW+" "+Blockly.Msg.HOLISTIC_UP_SHOW+")","0"],
		["268","267"],	
		["270","269"],
		["271","270"],
		["410","409"],
		["292"+" ("+Blockly.Msg.HOLISTIC_OUT_SHOW+" "+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","291"],	
		["376","375"],
		["322","321"],
		["406","405"],
		["315","314"],	
		["18"+" ("+Blockly.Msg.HOLISTIC_OUT_SHOW+" "+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","17"],
		["85","84"],
		["182","181"],
		["92","91"],	
		["147","146"],
		["62"+" ("+Blockly.Msg.HOLISTIC_OUT_SHOW+" "+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","61"],	
		["186","185"],
		["41","40"],	
		["40","39"],		
		["38","37"],
		["14"+" ("+Blockly.Msg.HOLISTIC_IN_SHOW+" "+Blockly.Msg.HOLISTIC_UP_SHOW+")","13"],
		["313","312"],	
		["312","311"],
		["311","310"],
		["416","415"],
		["309"+" ("+Blockly.Msg.HOLISTIC_IN_SHOW+" "+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","308"],	
		["325","324"],
		["319","318"],
		["403","402"],
		["318","317"],	
		["15"+" ("+Blockly.Msg.HOLISTIC_IN_SHOW+" "+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","14"],
		["88","87"],
		["179","178"],
		["89","88"],	
		["96","95"],
		["79"+" ("+Blockly.Msg.HOLISTIC_IN_SHOW+" "+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","78"],	
		["192","191"],
		["81","80"],	
		["82","81"],		
		["83","82"]		
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
  this.setColour(200);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/face_landmarks.xlsx");   
  }
};

Blockly.Blocks['holistic_pose_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
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
  this.setColour(200);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/pose_landmarks.png");  
  }
};

Blockly.Blocks['holistic_lefthand_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
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
  this.setColour(200);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/hand_landmarks.png");   
  }
};

Blockly.Blocks['holistic_righthand_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
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
  this.setColour(200);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/hand_landmarks.png");   
  }
};

Blockly.Blocks['holistic_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
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
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
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
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
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
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
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
        [Blockly.Msg.HOLISTIC_FACING_BACK_SHOW,"back"],
        [Blockly.Msg.HOLISTIC_FACING_ALL_SHOW,""]
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

Blockly.Blocks['holistic_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['holistic_all_poistion'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_ALL_SHOW); 
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_FACE_SHOW,"face"],
		[Blockly.Msg.HOLISTIC_POSE_SHOW,"pose"],
		[Blockly.Msg.HOLISTIC_LEFTHAND_SHOW,"lefthand"],
		[Blockly.Msg.HOLISTIC_RIGHTHAND_SHOW,"righthand"]		
  ]), "part_"); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['holistic_face_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_ANGLE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_AXIS_SHOW);  
  this.appendValueInput("part1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW);
  this.appendValueInput("part2_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW);
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_ADJUST_SHOW);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['holistic_pose_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_POSE_ANGLE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_AXIS_SHOW);  
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
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
  ]), "part1_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)  
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
  ]), "part2_");
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_ADJUST_SHOW);		  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['holistic_lefthand_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_LEFTHAND_ANGLE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_AXIS_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
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
  ]), "part1_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
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
  ]), "part2_"); 
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_ADJUST_SHOW);	 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['holistic_righthand_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_RIGHTHAND_ANGLE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_AXIS_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
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
  ]), "part1_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
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
  ]), "part2_"); 
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_ADJUST_SHOW);	 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['holistic_recognitied'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_RECOGNITIED_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_RECOGNITIED_PERSONS_SHOW,"Y"],
		[Blockly.Msg.HOLISTIC_RECOGNITIED_NOBODY_SHOW,"N"]	
  ]), "status_");	  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['holistic_unrecognitied'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_UNRECOGNITIED_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['holistic_clip_element'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_CLIP_ELEMENT_SHOW);
  this.appendValueInput("canvasid")
      .setCheck(null)
      .appendField(Blockly.Msg.HOLISTIC_CANVAS_ID); 
  this.appendValueInput("alpha")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_ALPHA_SHOW);	  
  this.appendValueInput("drawpath")
      .setCheck(null)
      .appendField(Blockly.Msg.HOLISTIC_CLIP_PATH_SHOW); 	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['holistic_clip_color'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_CLIP_COLOR_SHOW);
  this.appendValueInput("canvasid")
      .setCheck(null)
      .appendField(Blockly.Msg.HOLISTIC_CANVAS_ID); 	  
  this.appendValueInput("drawcolor")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HOLISTIC_COLOR);
  this.appendValueInput("drawpath")
      .setCheck(null)
      .appendField(Blockly.Msg.HOLISTIC_CLIP_PATH_SHOW); 	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['holistic_clip_image'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_CLIP_IMAGE_SHOW);
  this.appendValueInput("canvasid")
      .setCheck(null)
      .appendField(Blockly.Msg.HOLISTIC_CANVAS_ID);
  this.appendValueInput("imageid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HOLISTIC_IMAGE_ID); 
  this.appendValueInput("alpha")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_ALPHA_SHOW);	  
  this.appendValueInput("drawpath")
      .setCheck(null)
      .appendField(Blockly.Msg.HOLISTIC_CLIP_PATH_SHOW); 	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['holistic_points'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);		  
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_CLIP_POINTS_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_REYE_I_SHOW,"134,174,158,159,160,161,162,247,34,8,164,145,146,154,155,156"],	  
		[Blockly.Msg.HOLISTIC_LEYE_I_SHOW,"363,399,385,386,387,388,389,467,264,250,391,374,375,381,382,383"],
		[Blockly.Msg.HOLISTIC_REYE_O_SHOW,"244,191,57,29,28,30,31,248,131,26,111,25,24,23,27,113"],
		[Blockly.Msg.HOLISTIC_LEYE_O_SHOW,"464,415,287,259,258,260,261,468,360,256,340,255,254,253,257,342"],
		[Blockly.Msg.HOLISTIC_REYEBROW_SHOW,"108,67,106,64,71,47,54,53,66,56"],
		[Blockly.Msg.HOLISTIC_LEYEBROW_SHOW,"337,297,335,294,284,283,296,286"],		
		[Blockly.Msg.HOLISTIC_NOSE_SHOW,"197,237,199,210,50,103,65,236,60,76,61,21,243,142,95,371,463,251,291,306,290,456,295,332,280,430,421,457,420"],
		[Blockly.Msg.HOLISTIC_MOUTH_SHOW,"292,410,271,270,268,1,38,40,41,186,62,147,92,182,85,18,315,406,322,376"],
		[Blockly.Msg.HOLISTIC_UMOUTH_SHOW,"292,410,271,270,268,1,38,40,41,186,62,79,192,81,82,83,14,313,312,311,416,309"],
		[Blockly.Msg.HOLISTIC_DMOUTH_SHOW,"292,376,322,406,315,18,85,182,92,147,62,79,96,89,179,88,15,318,403,319,325,309"],
		[Blockly.Msg.HOLISTIC_FACE_SHOW,"11,339,298,333,285,252,390,265,448,367,402,436,289,366,398,366,380,379,401,378,153,149,177,150,151,137,173,59,133,94,235,128,163,22,55,104,68,110"],
		[Blockly.Msg.HOLISTIC_FACE_3_SHOW,"200,209,33,212,211,215,188,112,144,157,71,64,106,67,108,10,337,297,335,294,301,384,266,341,412,435,431,432,263,429"]		
  ]), "points"); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};
