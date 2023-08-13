Blockly.Blocks['faceapirecognize_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_VIDEO_SHOW);	 
  this.appendValueInput("faceimagepath")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACEIMAGEPATH_SHOW);
  this.appendValueInput("facelabel")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACELABEL_SHOW); 
  this.appendValueInput("faceimagecount")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACEIMAGECOUNT_SHOW); 
  this.appendValueInput("distancelimit")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_DISTANCELIMIT_SHOW); 
  this.appendValueInput("timer")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_TIMER_SHOW);   
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_OPACITY_SHOW)
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
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_video_one'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_VIDEO_SHOW);	 
  this.appendValueInput("faceimagepath")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACEIMAGEPATH1_SHOW);
  this.appendValueInput("facelabel")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACELABEL_SHOW); 
  this.appendValueInput("distancelimit")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_DISTANCELIMIT_SHOW); 
  this.appendValueInput("timer")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_TIMER_SHOW);   
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_OPACITY_SHOW)
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
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_detect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_DETECT_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_number'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendDummyInput() 
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_NUMBER_SHOW); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['faceapirecognize_state'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_STATE_SHOW)
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

Blockly.Blocks['faceapirecognize_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_GET_SHOW); 
  this.appendValueInput("index")
	  .setCheck("Number");  
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.FACEAPIRECOGNIZE_NAME_SHOW,"name"],
		[Blockly.Msg.FACEAPIRECOGNIZE_DISTANCE_SHOW,"distance"]	  
  ]), "column"); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['faceapirecognize_unknown'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_UNKNOWN_SHOW); 
  this.appendValueInput("index")
	  .setCheck("Number");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['faceapirecognize_clear'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_video_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.FACEAPIRECOGNIZE_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.FACEAPIRECOGNIZE_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_startvideo_stream'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapirecognize_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['faceapirecognize_recognitied'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_SHOW);	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_RECOGNITIED_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.FACEAPIDETECT_RECOGNITIED_PERSONS_SHOW,"Y"],
		[Blockly.Msg.FACEAPIDETECT_RECOGNITIED_NOBODY_SHOW,"N"]	
  ]), "status_");	  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
