Blockly.Blocks['hands_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_VIDEO_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "video_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_HAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	
  ]), "hand_");	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_OPACITY_SHOW)
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
  this.setHelpUrl("https://google.github.io/mediapipe/solutions/hands.html");   
  }
};

Blockly.Blocks['hands_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_SHOW)
  this.appendValueInput("hand_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HANDS_INDEX_SHOW);	
  this.appendDummyInput() 
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HANDS_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HANDS_HAND1_SHOW,"1"],
		[Blockly.Msg.HANDS_HAND2_SHOW,"2"],
		[Blockly.Msg.HANDS_HAND3_SHOW,"3"],
		[Blockly.Msg.HANDS_HAND4_SHOW,"4"],
		[Blockly.Msg.HANDS_HAND5_SHOW,"5"],
		[Blockly.Msg.HANDS_HAND6_SHOW,"6"],
		[Blockly.Msg.HANDS_HAND7_SHOW,"7"],
		[Blockly.Msg.HANDS_HAND8_SHOW,"8"],
		[Blockly.Msg.HANDS_HAND9_SHOW,"9"],
		[Blockly.Msg.HANDS_HAND10_SHOW,"10"],
		[Blockly.Msg.HANDS_HAND11_SHOW,"11"],
		[Blockly.Msg.HANDS_HAND12_SHOW,"12"],
		[Blockly.Msg.HANDS_HAND13_SHOW,"13"],
		[Blockly.Msg.HANDS_HAND14_SHOW,"14"],
		[Blockly.Msg.HANDS_HAND15_SHOW,"15"],
		[Blockly.Msg.HANDS_HAND16_SHOW,"16"],
		[Blockly.Msg.HANDS_HAND17_SHOW,"17"],
		[Blockly.Msg.HANDS_HAND18_SHOW,"18"],
		[Blockly.Msg.HANDS_HAND19_SHOW,"19"],
		[Blockly.Msg.HANDS_HAND20_SHOW,"20"]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.HANDS_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/hands_20201012/hand_landmarks.png");   
  }
};

Blockly.Blocks['hands_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_DISTANCE_SHOW);
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

Blockly.Blocks['hands_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_ANGLE_SHOW);
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

Blockly.Blocks['hands_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_STATE_SHOW)
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

Blockly.Blocks['hands_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HANDS_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HANDS_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['hands_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.HANDS_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.HANDS_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HANDS_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HANDS_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['hands_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.HANDS_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['hands_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['hands_number'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_NUMBER_SHOW);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['hands_part_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_ANGLE_SHOW);
  this.appendValueInput("hand_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HANDS_INDEX_SHOW);		  
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HANDS_AXIS_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HANDS_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HANDS_HAND1_SHOW,"1"],
		[Blockly.Msg.HANDS_HAND2_SHOW,"2"],
		[Blockly.Msg.HANDS_HAND3_SHOW,"3"],
		[Blockly.Msg.HANDS_HAND4_SHOW,"4"],
		[Blockly.Msg.HANDS_HAND5_SHOW,"5"],
		[Blockly.Msg.HANDS_HAND6_SHOW,"6"],
		[Blockly.Msg.HANDS_HAND7_SHOW,"7"],
		[Blockly.Msg.HANDS_HAND8_SHOW,"8"],
		[Blockly.Msg.HANDS_HAND9_SHOW,"9"],
		[Blockly.Msg.HANDS_HAND10_SHOW,"10"],
		[Blockly.Msg.HANDS_HAND11_SHOW,"11"],
		[Blockly.Msg.HANDS_HAND12_SHOW,"12"],
		[Blockly.Msg.HANDS_HAND13_SHOW,"13"],
		[Blockly.Msg.HANDS_HAND14_SHOW,"14"],
		[Blockly.Msg.HANDS_HAND15_SHOW,"15"],
		[Blockly.Msg.HANDS_HAND16_SHOW,"16"],
		[Blockly.Msg.HANDS_HAND17_SHOW,"17"],
		[Blockly.Msg.HANDS_HAND18_SHOW,"18"],
		[Blockly.Msg.HANDS_HAND19_SHOW,"19"],
		[Blockly.Msg.HANDS_HAND20_SHOW,"20"]
  ]), "part1_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HANDS_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HANDS_HAND1_SHOW,"1"],
		[Blockly.Msg.HANDS_HAND2_SHOW,"2"],
		[Blockly.Msg.HANDS_HAND3_SHOW,"3"],
		[Blockly.Msg.HANDS_HAND4_SHOW,"4"],
		[Blockly.Msg.HANDS_HAND5_SHOW,"5"],
		[Blockly.Msg.HANDS_HAND6_SHOW,"6"],
		[Blockly.Msg.HANDS_HAND7_SHOW,"7"],
		[Blockly.Msg.HANDS_HAND8_SHOW,"8"],
		[Blockly.Msg.HANDS_HAND9_SHOW,"9"],
		[Blockly.Msg.HANDS_HAND10_SHOW,"10"],
		[Blockly.Msg.HANDS_HAND11_SHOW,"11"],
		[Blockly.Msg.HANDS_HAND12_SHOW,"12"],
		[Blockly.Msg.HANDS_HAND13_SHOW,"13"],
		[Blockly.Msg.HANDS_HAND14_SHOW,"14"],
		[Blockly.Msg.HANDS_HAND15_SHOW,"15"],
		[Blockly.Msg.HANDS_HAND16_SHOW,"16"],
		[Blockly.Msg.HANDS_HAND17_SHOW,"17"],
		[Blockly.Msg.HANDS_HAND18_SHOW,"18"],
		[Blockly.Msg.HANDS_HAND19_SHOW,"19"],
		[Blockly.Msg.HANDS_HAND20_SHOW,"20"]
  ]), "part2_"); 
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HANDS_ADJUST_SHOW);	 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['hands_pause'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_PAUSE_SHOW);
  this.appendValueInput("time_")
      .setCheck("Number")    
      .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['hands_clear'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['hands_recognitied'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(Blockly.Msg.HANDS_RECOGNITIED_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};