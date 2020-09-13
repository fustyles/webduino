Blockly.Blocks['handpose_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HANDPOSE_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HANDPOSE_HEIGHT_SHOW);	 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDPOSE_VIDEO_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "video_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDPOSE_SKELETON_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["N","none"],
		["Y","block"]
  ]), "skeleton_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDPOSE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDPOSE_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDPOSE_OPACITY_SHOW)
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

Blockly.Blocks['handpose_point'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDPOSE_POINT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["0-wrist","0"],
		["1-thumb","1"],
		["2-thumb","2"],
		["3-thumb","3"],
		["4-thumb","4"],
		["5-indexFinger","5"],
		["6-indexFinger","6"],
		["7-indexFinger","7"],
		["8-indexFinger","8"],
		["9-middleFinger","9"],
		["10-middleFinger","10"],
		["11-middleFinger","11"],
		["12-middleFinger","12"],
		["13-ringFinger","13"],
		["14-ringFinger","14"],
		["15-ringFinger","15"],
		["16-ringFinger","16"],
		["17-pinky","17"],
		["18-pinky","18"],
		["19-pinky","19"],
        ["20-pinky","20"],
        ["ALL","A"]
  ]), "point_");  	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['handpose_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDPOSE_DISTANCE_SHOW);
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
	  .appendField("  ")
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

Blockly.Blocks['handpose_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDPOSE_ANGLE_SHOW);
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
	  .appendField("  ")
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

Blockly.Blocks['handpose_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDPOSE_STATE_SHOW)
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

Blockly.Blocks['handpose_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HANDPOSE_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HANDPOSE_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};