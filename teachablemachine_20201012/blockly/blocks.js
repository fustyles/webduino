Blockly.Blocks['teachablemachine_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_OPACITY_SHOW)
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

Blockly.Blocks['teachablemachine_model'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_PROJECT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["image","image"],
		["pose","pose"]	  
  ]), "project_"); 	  
  this.appendValueInput("model_")
      .setCheck("String")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_MODEL_SHOW);  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['teachablemachine_result'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_PROPORTION_SHOW)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.TEACHABLEMACHINE_MAXCLASS_SHOW,"maxClass"], 
	  [Blockly.Msg.TEACHABLEMACHINE_MAXPROBABILITY_SHOW,"maxProbability"]
	  ]), "result_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['teachablemachine_result_array'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);		  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_PROPORTION_SHOW)
      .appendField(Blockly.Msg.TEACHABLEMACHINE_DATA_ARRAY_SHOW);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['teachablemachine_state'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_STATE_SHOW)
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

Blockly.Blocks['teachablemachine_video_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['teachablemachine_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.TEACHABLEMACHINE_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.TEACHABLEMACHINE_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['teachablemachine_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['teachablemachine_pause'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);	  
  this.appendDummyInput()  
	  .appendField(Blockly.Msg.TEACHABLEMACHINE_PAUSE_SHOW);
  this.appendValueInput("time_")
	  .setCheck("Number")    
	  .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['teachablemachine_clear'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['teachablemachine_recognitied'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.TEACHABLEMACHINE_RECOGNITIED_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['teachablemachine_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};
