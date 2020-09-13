Blockly.Blocks['facemesh_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FACEMESH_SET_SHOW);	  
    this.appendValueInput("width_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.FACEMESH_WIDTH_SHOW);    
    this.appendValueInput("height_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.FACEMESH_HEIGHT_SHOW);
    this.appendDummyInput()  
	  .appendField(Blockly.Msg.FACEMESH_VIDEO_SHOW)
	  .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
	]), "video_");
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.FACEMESH_POINT_SHOW)
	  .appendField(new Blockly.FieldDropdown([
		["N","none"],
		["Y","block"]
	]), "point_");
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.FACEMESH_RESULT_SHOW)
	  .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
	]), "result_"); 
	this.appendDummyInput()  
	    .appendField(Blockly.Msg.FACEMESH_MIRRORIMAGE_SHOW)
	    .appendField(new Blockly.FieldDropdown([
		  ["Y","1"],
		  ["N","0"]	  
	  ]), "mirrorimage_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEMESH_OPACITY_SHOW)
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};

Blockly.Blocks['facemesh_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FACEMESH_GET_SHOW); 
    this.appendDummyInput()
		.appendField(Blockly.Msg.FACEMESH_PERSON_SHOW)
        .appendField(new Blockly.FieldDropdown([
			["0","0"]
        ]), "person_");	
    this.appendDummyInput()
		.appendField(Blockly.Msg.FACEMESH_PART_SHOW)
        .appendField(new Blockly.FieldDropdown([
			["leftCheek","leftCheek"],
			["leftEyeLower0","leftEyeLower0"],
			["leftEyeLower1","leftEyeLower1"],
			["leftEyeLower2","leftEyeLower2"],
			["leftEyeLower3","leftEyeLower3"],
			["leftEyeUpper0","leftEyeUpper0"],
			["leftEyeUpper1","leftEyeUpper1"],
			["leftEyeUpper2","leftEyeUpper2"],
			["leftEyebrowLower","leftEyebrowLower"],
			["leftEyebrowUpper","leftEyebrowUpper"],
			["lipsLowerInner","lipsLowerInner"],
			["lipsLowerOuter","lipsLowerOuter"],
			["lipsUpperInner","lipsUpperInner"],
			["lipsUpperOuter","lipsUpperOuter"],
			["midwayBetweenEyes","midwayBetweenEyes"],
			["noseBottom","noseBottom"],
			["noseLeftCorner","noseLeftCorner"],
			["noseRightCorner","noseRightCorner"],
			["noseTip","noseTip"],
			["rightCheek","rightCheek"],
			["rightEyeLower0","rightEyeLower0"],
			["rightEyeLower1","rightEyeLower1"],
			["rightEyeLower2","rightEyeLower2"],
			["rightEyeLower3","rightEyeLower3"],
			["rightEyeUpper0","rightEyeUpper0"],
			["rightEyeUpper1","rightEyeUpper1"],
			["rightEyeUpper2","rightEyeUpper2"],
			["rightEyebrowLower","rightEyebrowLower"],
			["rightEyebrowUpper","rightEyebrowUpper"],
			["silhouette","silhouette"],
			["All","all"]
        ]), "point_");
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};

Blockly.Blocks['facemesh_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEMESH_STATE_SHOW)
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

Blockly.Blocks['facemesh_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEMESH_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEMESH_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};