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
		["362"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","361"],
		["398","397"],	
		["384","383"],
		["385","384"],
		["386"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","385"],
		["387","386"],	
		["388","387"],
		["466","465"],
		["263"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","262"],
		["249","248"],	
		["390","389"],
		["373","372"],
		["374"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","373"],
		["380","379"],	
		["381","380"],
		["382","381"]
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
		["133"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","132"],
		["173","172"],	
		["157","156"],
		["158","157"],
		["159"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","158"],
		["160","159"],	
		["161","160"],
		["246","245"],
		["33"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","32"],
		["7","6"],	
		["163","162"],
		["144","143"],
		["145"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","144"],
		["153","152"],	
		["154","153"],
		["155","154"]
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
		["5"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","4"],
		["281","280"],	
		["363","362"],
		["360","359"],
		["279","278"],
		["331"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","330"],	
		["294","293"],
		["460","459"],
		["326","325"],
		["2"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","1"],	
		["97","96"],
		["240","239"],
		["64","63"],
		["102"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","101"],	
		["49","48"],
		["131","130"],	
		["134","133"],		
		["51","50"]
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
		["13"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","12"],
		["14"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","13"],	
		["312","311"],
		["317","316"],
		["311","310"],
		["402","401"],	
		["310","309"],
		["318","317"],
		["415","414"],
		["324","323"],	
		["308"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","307"],
		["82","81"],
		["87","86"],
		["81","80"],	
		["178","177"],
		["80","79"],	
		["88","87"],
		["191","190"],	
		["95","94"],		
		["78"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","77"]
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