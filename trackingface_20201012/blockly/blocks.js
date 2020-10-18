Blockly.Blocks['trackingface_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKINGFACE_SET_SHOW);	  	  
    this.appendValueInput("display_")
	.setCheck(null)
        .appendField(Blockly.Msg.TRACKINGFACE_DISPLAY_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGFACE_FRAME_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "frame_");    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGFACE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGFACE_OPACITY_SHOW)
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

Blockly.Blocks['trackingface_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGFACE_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGFACE_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['trackingface_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKINGFACE_GET_SHOW);
    this.appendValueInput("index_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TRACKINGFACE_INDEX_SHOW);    	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["faceX","faceX"], 
          ["faceY","faceY"],
          ["faceWidth","faceWidth"], 
          ["faceHeight","faceHeight"],
          ["jaw1X","jaw1X"],
          ["jaw1Y","jaw1Y"],	
          ["jaw2X","jaw2X"],
          ["jaw2Y","jaw2Y"],
          ["jaw3X","jaw3X"],
          ["jaw3Y","jaw3Y"],	
          ["jaw4X","jaw4X"],
          ["jaw4Y","jaw4Y"],
          ["jaw5X","jaw5X"],
          ["jaw5Y","jaw5Y"],
          ["jaw6X","jaw6X"],	
          ["jaw6Y","jaw6Y"],
          ["jaw7X","jaw7X"],
          ["jaw7Y","jaw7Y"],
          ["jaw8X","jaw8X"],
          ["jaw8Y","jaw8Y"],
          ["jaw9X","jaw9X"],	
          ["jaw9Y","jaw9Y"],
          ["nose1X","nose1X"],
          ["nose1Y","nose1Y"],
          ["nose2X","nose2X"],
          ["nose2Y","nose2Y"],
          ["nose3X","nose3X"],
          ["nose3Y","nose3Y"],	
          ["nose4X","nose4X"],
          ["nose4Y","nose4Y"],
          ["mouth1X","mouth1X"],	
          ["mouth1Y","mouth1Y"],	
          ["mouth2X","mouth2X"],
          ["mouth2Y","mouth2Y"],
          ["mouth3X","mouth3X"],
          ["mouth3Y","mouth3Y"],
          ["mouth4X","mouth4X"],
          ["mouth4Y","mouth4Y"],
          ["eyeL1X","eyeL1X"],	
          ["eyeL1Y","eyeL1Y"],
          ["eyeL2X","eyeL2X"],	
          ["eyeL2Y","eyeL2Y"],
          ["eyeL3X","eyeL3X"],	
          ["eyeL3Y","eyeL3Y"],
          ["eyeL4X","eyeL4X"],	
          ["eyeL4Y","eyeL4Y"],
          ["eyeR1X","eyeR1X"],
          ["eyeR1Y","eyeR1Y"],	
          ["eyeR2X","eyeR2X"],	
          ["eyeR2Y","eyeR2Y"],
          ["eyeR3X","eyeR3X"],
          ["eyeR3Y","eyeR3Y"],
          ["eyeR4X","eyeR4X"],
          ["eyeR4Y","eyeR4Y"],
          ["eyeBrowL1X","eyeBrowL1X"],
          ["eyeBrowL1Y","eyeBrowL1Y"],
          ["eyeBrowL2X","eyeBrowL2X"],
          ["eyeBrowL2Y","eyeBrowL2Y"],
          ["eyeBrowL3X","eyeBrowL3X"],
          ["eyeBrowL3Y","eyeBrowL3Y"],
          ["eyeBrowR1X","eyeBrowR1X"],
          ["eyeBrowR1Y","eyeBrowR1Y"],
          ["eyeBrowR2X","eyeBrowR2X"],
          ["eyeBrowR2Y","eyeBrowR2Y"],
          ["eyeBrowR3X","eyeBrowR3X"],
          ["eyeBrowR3Y","eyeBrowR3Y"]
        ]), "property_");
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};

Blockly.Blocks['trackingface_drawimage'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGFACE_DRAWIMAGE_SHOW);    
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.CANVAS_ID_SHOW); 
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TRACKINGFACE_LEFT_SHOW);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TRACKINGFACE_TOP_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['trackingface_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGFACE_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGFACE_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.TRACKINGFACE_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.TRACKINGFACE_FACING_BACK_SHOW,"back"]
		]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGFACE_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGFACE_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['trackingface_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGFACE_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.TRACKINGFACE_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};