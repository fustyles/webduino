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
    this.appendValueInput("display_")
		.setCheck(null)
        .appendField(Blockly.Msg.FACEMESH_DISPLAY_SHOW);
    this.appendValueInput("point_")
		.setCheck(null)
        .appendField(Blockly.Msg.FACEMESH_POINT_SHOW);
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