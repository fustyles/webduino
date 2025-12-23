Blockly.Blocks['poses_video'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.POSES_SHOW);
        this.appendDummyInput()		    
            .appendField(Blockly.Msg.POSES_VIDEO_SHOW)
            .appendField(new Blockly.FieldDropdown([
                ["Y", "block"],
                ["N", "none"]
            ]), "video_")
            .appendField(Blockly.Msg.POSES_MIRRORIMAGE_SHOW)
            .appendField(new Blockly.FieldDropdown([
                ["Y", "1"],
                ["N", "0"]
            ]), "mirrorimage_")
            .appendField(Blockly.Msg.POSES_OPACITY_SHOW)
            .appendField(new Blockly.FieldDropdown([
                ["1", "1"],
                ["0.9", "0.9"],
                ["0.8", "0.8"],
                ["0.7", "0.7"],
                ["0.6", "0.6"],
                ["0.5", "0.5"],
                ["0.4", "0.4"],
                ["0.3", "0.3"],
                ["0.2", "0.2"],
                ["0.1", "0.1"],
                ["0", "0"]
            ]), "opacity_");
        this.appendDummyInput()
            .appendField(Blockly.Msg.POSES_SKELETON_SHOW)
            .appendField(new Blockly.FieldDropdown([
                ["Y", "1"],
                ["N", "0"]
            ]), "skeleton_");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(60);
    }
};

Blockly.Blocks['poses_person'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW);	   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.POSES_NOSE, "0"],
		[Blockly.Msg.POSES_LEFT_EYE_INNER, "1"],
		[Blockly.Msg.POSES_LEFT_EYE, "2"],
		[Blockly.Msg.POSES_LEFT_EYE_OUTER, "3"],
		[Blockly.Msg.POSES_RIGHT_EYE_INNER, "4"],
		[Blockly.Msg.POSES_RIGHT_EYE, "5"],
		[Blockly.Msg.POSES_RIGHT_EYE_OUTER, "6"],
		[Blockly.Msg.POSES_LEFT_EAR, "7"],
		[Blockly.Msg.POSES_RIGHT_EAR, "8"],
		[Blockly.Msg.POSES_MOUTH_LEFT, "9"],
		[Blockly.Msg.POSES_MOUTH_RIGHT, "10"],
		[Blockly.Msg.POSES_LEFT_SHOULDER, "11"],
		[Blockly.Msg.POSES_RIGHT_SHOULDER, "12"],
		[Blockly.Msg.POSES_LEFT_ELBOW, "13"],
		[Blockly.Msg.POSES_RIGHT_ELBOW, "14"],
		[Blockly.Msg.POSES_LEFT_WRIST, "15"],
		[Blockly.Msg.POSES_RIGHT_WRIST, "16"],
		[Blockly.Msg.POSES_LEFT_PINKY, "17"],
		[Blockly.Msg.POSES_RIGHT_PINKY, "18"],
		[Blockly.Msg.POSES_LEFT_INDEX, "19"],
		[Blockly.Msg.POSES_RIGHT_INDEX, "20"],
		[Blockly.Msg.POSES_LEFT_THUMB, "21"],
		[Blockly.Msg.POSES_RIGHT_THUMB, "22"],
		[Blockly.Msg.POSES_LEFT_HIP, "23"],
		[Blockly.Msg.POSES_RIGHT_HIP, "24"],
		[Blockly.Msg.POSES_LEFT_KNEE, "25"],
		[Blockly.Msg.POSES_RIGHT_KNEE, "26"],
		[Blockly.Msg.POSES_LEFT_ANKLE, "27"],
		[Blockly.Msg.POSES_RIGHT_ANKLE, "28"],
		[Blockly.Msg.POSES_LEFT_HEEL, "29"],
		[Blockly.Msg.POSES_RIGHT_HEEL, "30"],
		[Blockly.Msg.POSES_LEFT_FOOT_INDEX, "31"],
		[Blockly.Msg.POSES_RIGHT_FOOT_INDEX, "32"]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.POSES_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"],
		["visibility","visibility"]		
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['poses_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_DISTANCE_SHOW);
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

Blockly.Blocks['poses_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_ANGLE_SHOW);
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

Blockly.Blocks['poses_angle_3points'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_ANGLE_3POINTS_SHOW);
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
  this.appendValueInput("x2_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X2");
  this.appendValueInput("y2_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y2"); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['poses_state'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_STATE_SHOW)
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

Blockly.Blocks['poses_part_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_ROTATE_ANGLE_SHOW);	  
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.POSES_AXIS_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.POSES_NOSE, "0"],
		[Blockly.Msg.POSES_LEFT_EYE_INNER, "1"],
		[Blockly.Msg.POSES_LEFT_EYE, "2"],
		[Blockly.Msg.POSES_LEFT_EYE_OUTER, "3"],
		[Blockly.Msg.POSES_RIGHT_EYE_INNER, "4"],
		[Blockly.Msg.POSES_RIGHT_EYE, "5"],
		[Blockly.Msg.POSES_RIGHT_EYE_OUTER, "6"],
		[Blockly.Msg.POSES_LEFT_EAR, "7"],
		[Blockly.Msg.POSES_RIGHT_EAR, "8"],
		[Blockly.Msg.POSES_MOUTH_LEFT, "9"],
		[Blockly.Msg.POSES_MOUTH_RIGHT, "10"],
		[Blockly.Msg.POSES_LEFT_SHOULDER, "11"],
		[Blockly.Msg.POSES_RIGHT_SHOULDER, "12"],
		[Blockly.Msg.POSES_LEFT_ELBOW, "13"],
		[Blockly.Msg.POSES_RIGHT_ELBOW, "14"],
		[Blockly.Msg.POSES_LEFT_WRIST, "15"],
		[Blockly.Msg.POSES_RIGHT_WRIST, "16"],
		[Blockly.Msg.POSES_LEFT_PINKY, "17"],
		[Blockly.Msg.POSES_RIGHT_PINKY, "18"],
		[Blockly.Msg.POSES_LEFT_INDEX, "19"],
		[Blockly.Msg.POSES_RIGHT_INDEX, "20"],
		[Blockly.Msg.POSES_LEFT_THUMB, "21"],
		[Blockly.Msg.POSES_RIGHT_THUMB, "22"],
		[Blockly.Msg.POSES_LEFT_HIP, "23"],
		[Blockly.Msg.POSES_RIGHT_HIP, "24"],
		[Blockly.Msg.POSES_LEFT_KNEE, "25"],
		[Blockly.Msg.POSES_RIGHT_KNEE, "26"],
		[Blockly.Msg.POSES_LEFT_ANKLE, "27"],
		[Blockly.Msg.POSES_RIGHT_ANKLE, "28"],
		[Blockly.Msg.POSES_LEFT_HEEL, "29"],
		[Blockly.Msg.POSES_RIGHT_HEEL, "30"],
		[Blockly.Msg.POSES_LEFT_FOOT_INDEX, "31"],
		[Blockly.Msg.POSES_RIGHT_FOOT_INDEX, "32"]
  ]), "part1_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.POSES_NOSE, "0"],
		[Blockly.Msg.POSES_LEFT_EYE_INNER, "1"],
		[Blockly.Msg.POSES_LEFT_EYE, "2"],
		[Blockly.Msg.POSES_LEFT_EYE_OUTER, "3"],
		[Blockly.Msg.POSES_RIGHT_EYE_INNER, "4"],
		[Blockly.Msg.POSES_RIGHT_EYE, "5"],
		[Blockly.Msg.POSES_RIGHT_EYE_OUTER, "6"],
		[Blockly.Msg.POSES_LEFT_EAR, "7"],
		[Blockly.Msg.POSES_RIGHT_EAR, "8"],
		[Blockly.Msg.POSES_MOUTH_LEFT, "9"],
		[Blockly.Msg.POSES_MOUTH_RIGHT, "10"],
		[Blockly.Msg.POSES_LEFT_SHOULDER, "11"],
		[Blockly.Msg.POSES_RIGHT_SHOULDER, "12"],
		[Blockly.Msg.POSES_LEFT_ELBOW, "13"],
		[Blockly.Msg.POSES_RIGHT_ELBOW, "14"],
		[Blockly.Msg.POSES_LEFT_WRIST, "15"],
		[Blockly.Msg.POSES_RIGHT_WRIST, "16"],
		[Blockly.Msg.POSES_LEFT_PINKY, "17"],
		[Blockly.Msg.POSES_RIGHT_PINKY, "18"],
		[Blockly.Msg.POSES_LEFT_INDEX, "19"],
		[Blockly.Msg.POSES_RIGHT_INDEX, "20"],
		[Blockly.Msg.POSES_LEFT_THUMB, "21"],
		[Blockly.Msg.POSES_RIGHT_THUMB, "22"],
		[Blockly.Msg.POSES_LEFT_HIP, "23"],
		[Blockly.Msg.POSES_RIGHT_HIP, "24"],
		[Blockly.Msg.POSES_LEFT_KNEE, "25"],
		[Blockly.Msg.POSES_RIGHT_KNEE, "26"],
		[Blockly.Msg.POSES_LEFT_ANKLE, "27"],
		[Blockly.Msg.POSES_RIGHT_ANKLE, "28"],
		[Blockly.Msg.POSES_LEFT_HEEL, "29"],
		[Blockly.Msg.POSES_RIGHT_HEEL, "30"],
		[Blockly.Msg.POSES_LEFT_FOOT_INDEX, "31"],
		[Blockly.Msg.POSES_RIGHT_FOOT_INDEX, "32"]
  ]), "part2_"); 
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.POSES_ADJUST_SHOW);	 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};


Blockly.Blocks['poses_video_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSES_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSES_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['poses_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.POSES_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.POSES_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSES_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSES_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['poses_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.POSES_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['poses_recognitied'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW);	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.POSES_RECOGNITIED_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.POSES_RECOGNITIED_PERSONS_SHOW,"Y"],
		[Blockly.Msg.POSES_RECOGNITIED_NOBODY_SHOW,"N"]	
  ]), "status_");		  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['poses_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.POSES_VIDEO_SHOW,"VIDEO"],
		[Blockly.Msg.POSES_IMAGE_SHOW,"IMAGE"],
		[Blockly.Msg.POSES_CANVAS_SHOW,"CANVAS"]	
  ]), "element_");	 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSES_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

