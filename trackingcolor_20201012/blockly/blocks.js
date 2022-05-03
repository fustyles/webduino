Blockly.Blocks['trackingcolor_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKINGCOLOR_SET_SHOW);	  
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.TRACKINGCOLOR_VIDEO_SHOW)
	  .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
		]), "display_"); 
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.TRACKINGCOLOR_PIXEL_SHOW)
	  .appendField(new Blockly.FieldDropdown([
		["N","none"],	  
		["Y","block"]
		]), "pixel_"); 
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.TRACKINGCOLOR_RESULT_SHOW)
	  .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
		]), "result_"); 
	this.appendDummyInput()  
	    .appendField(Blockly.Msg.TRACKINGCOLOR_MIRRORIMAGE_SHOW)
	    .appendField(new Blockly.FieldDropdown([
		  ["Y","1"],
		  ["N","0"]	  
	  ]), "mirrorimage_");
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.TRACKINGCOLOR_OPACITY_SHOW)
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
    this.setColour(60);
  }
};

Blockly.Blocks['trackingcolor_range_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKINGCOLOR_RANGE_SET_SHOW);
	this.appendDummyInput()	
		.appendField(Blockly.Msg.TRACKINGCOLOR_RECT_SHOW)
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.TRACKINGCOLOR_REDRECT_SHOW,"red"], 
          [Blockly.Msg.TRACKINGCOLOR_GREENRECT_SHOW,"green"],
          [Blockly.Msg.TRACKINGCOLOR_BLUERECT_SHOW,"blue"]
        ]), "rect_"); 
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.TRACKINGCOLOR_DISPLAY_SHOW)
	  .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
		]), "display_"); 
    this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGCOLOR_VIDEO_LEFT_SHOW);  
    this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGCOLOR_VIDEO_TOP_SHOW);    
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  }
};

Blockly.Blocks['trackingcolor_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKINGCOLOR_SHOW)
        .appendField(Blockly.Msg.TRACKINGCOLOR_CUSTOM_SHOW);	  
    this.appendDummyInput()
		.appendField(Blockly.Msg.TRACKINGCOLOR_RECT_SHOW)
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.TRACKINGCOLOR_REDRECT_SHOW,"red"], 
          [Blockly.Msg.TRACKINGCOLOR_GREENRECT_SHOW,"green"],
          [Blockly.Msg.TRACKINGCOLOR_BLUERECT_SHOW,"blue"]
        ]), "rect_");
    this.appendValueInput("rmin_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKINGCOLOR_RED_SHOW); 	
    this.appendValueInput("rmax_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKINGCOLOR_TO_SHOW); 
    this.appendValueInput("gmin_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKINGCOLOR_GREEN_SHOW); 	
    this.appendValueInput("gmax_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKINGCOLOR_TO_SHOW);
    this.appendValueInput("bmin_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKINGCOLOR_BLUE_SHOW); 	
    this.appendValueInput("bmax_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKINGCOLOR_TO_SHOW);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  }
};

Blockly.Blocks['trackingcolor_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGCOLOR_SHOW)	  
      .appendField(Blockly.Msg.TRACKINGCOLOR_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGCOLOR_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['trackingcolor_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKINGCOLOR_GET_SHOW);   	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.TRACKINGCOLOR_GET_MAGENTA_SHOW,"magenta"], 
          [Blockly.Msg.TRACKINGCOLOR_GET_CYAN_SHOW,"cyan"],
          [Blockly.Msg.TRACKINGCOLOR_GET_YELLOW_SHOW,"yellow"], 
          [Blockly.Msg.TRACKINGCOLOR_GET_RED_SHOW,"red"],
          [Blockly.Msg.TRACKINGCOLOR_GET_GREEN_SHOW,"green"],
          [Blockly.Msg.TRACKINGCOLOR_GET_BLUE_SHOW,"blue"],
          [Blockly.Msg.TRACKINGCOLOR_GET_ALL_SHOW,"all"]
        ]), "rect_");
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};

Blockly.Blocks['trackingcolor_get_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKINGCOLOR_GET_NUMBER_SHOW);   	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.TRACKINGCOLOR_GET_MAGENTA_SHOW,"magenta"], 
          [Blockly.Msg.TRACKINGCOLOR_GET_CYAN_SHOW,"cyan"],
          [Blockly.Msg.TRACKINGCOLOR_GET_YELLOW_SHOW,"yellow"], 
          [Blockly.Msg.TRACKINGCOLOR_GET_RED_SHOW,"red"],
          [Blockly.Msg.TRACKINGCOLOR_GET_GREEN_SHOW,"green"],
          [Blockly.Msg.TRACKINGCOLOR_GET_BLUE_SHOW,"blue"],
          [Blockly.Msg.TRACKINGCOLOR_GET_ALL_SHOW,"all"]
        ]), "rect_");
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};

Blockly.Blocks['trackingcolor_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGCOLOR_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGCOLOR_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.TRACKINGCOLOR_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.TRACKINGCOLOR_FACING_BACK_SHOW,"back"]
		]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGCOLOR_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGCOLOR_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['trackingcolor_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGCOLOR_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.TRACKINGCOLOR_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['trackingcolor_object'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(Blockly.Msg.TRACKINGCOLOR_GET_SHOW)	
		.appendField(Blockly.Msg.TRACKINGCOLOR_RECT_SHOW)
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.TRACKINGCOLOR_REDRECT_SHOW,"red"], 
          [Blockly.Msg.TRACKINGCOLOR_GREENRECT_SHOW,"green"],
          [Blockly.Msg.TRACKINGCOLOR_BLUERECT_SHOW,"blue"]
        ]), "rect_");  
  this.appendValueInput("index_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TRACKINGCOLOR_RECT_INDEX_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.TRACKINGCOLOR_RECT_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[" ",""],
		[Blockly.Msg.TRACKINGCOLOR_RECT_SHOW,"color"],
		["X","x"],
		["Y","y"],
		[Blockly.Msg.TRACKINGCOLOR_MIDDLEX_SHOW,"middlex"],
		[Blockly.Msg.TRACKINGCOLOR_MIDDLEY_SHOW,"middley"],
		[Blockly.Msg.TRACKINGCOLOR_WIDTH_SHOW,"width"],
		[Blockly.Msg.TRACKINGCOLOR_HEIGHT_SHOW,"height"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['trackingcolor_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGCOLOR_STATE_SHOW)
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

Blockly.Blocks['trackingcolor_clear'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGCOLOR_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['trackingcolor_pause'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRACKINGCOLOR_PAUSE_SHOW);
  this.appendValueInput("time_")
      .setCheck("Number")    
      .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['trackingcolor_recognitied'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(Blockly.Msg.TRACKINGCOLOR_RECOGNITIED_SHOW);
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};