Blockly.Blocks['blazeface_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_SHOW);	 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_SCORELIMIT_SHOW)
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
      .appendField(Blockly.Msg.BLAZEFACE_FRAME_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "frame_");  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_");   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_OPACITY_SHOW)
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

Blockly.Blocks['blazeface_person'] = {
  init: function() {
  this.appendValueInput("person_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BLAZEFACE_PERSON_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [" ",""],
        ["probability","probability"],
        ["rightEye","rightEye"],
        ["leftEye","leftEye"],
        ["nose","nose"],
        ["mouth","mouth"],
        ["rightEar","rightEar"],
        ["leftEar","leftEar"],
        ["bandingBox","bandingBox"]
  ]), "part_");  	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['blazeface_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_STATE_SHOW)
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

Blockly.Blocks['blazeface_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BLAZEFACE_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BLAZEFACE_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['blazeface_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.BLAZEFACE_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.BLAZEFACE_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BLAZEFACE_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BLAZEFACE_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['blazeface_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.BLAZEFACE_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['blazeface_clear'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['blazeface_pause'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BLAZEFACE_PAUSE_SHOW);
  this.appendValueInput("time_")
      .setCheck("Number")    
      .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['blazeface_recognitied'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(Blockly.Msg.BLAZEFACE_RECOGNITIED_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};