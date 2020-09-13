Blockly.Blocks['faceapi_recognition_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_VIDEO_SHOW);	 
  this.appendValueInput("modelpath")
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_MODELPATH_SHOW); 
  this.appendValueInput("faceimagepath")
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_FACEIMAGEPATH_SHOW);
  this.appendValueInput("facelabel")
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_FACELABEL_SHOW); 
  this.appendValueInput("faceimagecount")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_FACEIMAGECOUNT_SHOW); 
  this.appendValueInput("distancelimit")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_DISTANCELIMIT_SHOW); 
  this.appendValueInput("timer")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_TIMER_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
		]), "result"); 	 
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapi_recognition_detect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_DETECT_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapi_recognition_number'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_NUMBER_SHOW); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['faceapi_recognition_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_GET_SHOW); 
  this.appendValueInput("index")
	  .setCheck("Number");  
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.FACEAPI_RECOGNITION_NAME_SHOW,"name"],
		[Blockly.Msg.FACEAPI_RECOGNITION_DISTANCE_SHOW,"distance"]	  
  ]), "column"); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['faceapi_recognition_clear'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['faceapi_recognition_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPI_RECOGNITION_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};