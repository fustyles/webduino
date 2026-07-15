Blockly.Blocks['yolov8n_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW);
  this.appendValueInput("modelpath_")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("String")
      .appendField(Blockly.Msg.YOLOV8N_MODELPATH_SHOW);  
  this.appendValueInput("classes_")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .setCheck("String")
      .appendField(Blockly.Msg.YOLOV8N_CLASSES_SHOW); 
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.YOLOV8N_SCORELIMIT_SHOW)
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
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.YOLOV8N_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_"); 
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.YOLOV8N_FRAME_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "frame_");	  
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.YOLOV8N_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.YOLOV8N_OPACITY_SHOW)
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

Blockly.Blocks['yolov8n_object'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW);	      
  this.appendValueInput("class_")
      .setCheck("String")
      .appendField(Blockly.Msg.YOLOV8N_DATA_CLASS_SHOW);
  this.appendValueInput("index_")
      .setCheck("Number")
      .appendField(Blockly.Msg.YOLOV8N_INDEX_SHOW);      
  this.appendDummyInput()
      .appendField(Blockly.Msg.YOLOV8N_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.YOLOV8N_OBJECT_ALL_SHOW,""],
		[Blockly.Msg.YOLOV8N_DATA_CLASS_SHOW,"class"],
		[Blockly.Msg.YOLOV8N_DATA_SCORE_SHOW,"score"],
		["X","x"],
		["Y","y"],
		[Blockly.Msg.YOLOV8N_DATA_UPPERX_SHOW,"upperx"],
		[Blockly.Msg.YOLOV8N_DATA_UPPERY_SHOW,"uppery"],	  
		[Blockly.Msg.YOLOV8N_DATA_MIDDLEX_SHOW,"middlex"],
		[Blockly.Msg.YOLOV8N_DATA_MIDDLEY_SHOW,"middley"],
		[Blockly.Msg.YOLOV8N_DATA_BOTTOMX_SHOW,"bottomx"],
		[Blockly.Msg.YOLOV8N_DATA_BOTTOMY_SHOW,"bottomy"],	  
		[Blockly.Msg.YOLOV8N_WIDTH_SHOW,"width"],
		[Blockly.Msg.YOLOV8N_HEIGHT_SHOW,"height"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['yolov8n_object_number'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW)      
      .appendField(Blockly.Msg.YOLOV8N_OBJECT_NUMBER_SHOW);
  this.appendValueInput("class_")
      .setCheck("String")
      .appendField(Blockly.Msg.YOLOV8N_DATA_CLASS_SHOW);	      
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['yolov8n_state'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_STATE_SHOW)
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

Blockly.Blocks['yolov8n_video_position'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW);	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.YOLOV8N_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.YOLOV8N_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};


Blockly.Blocks['yolov8n_startvideo_media'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.YOLOV8N_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.YOLOV8N_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.YOLOV8N_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.YOLOV8N_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['yolov8n_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.YOLOV8N_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['yolov8n_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['yolov8n_clear'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['yolov8n_pause'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_PAUSE_SHOW);
  this.appendValueInput("time_")
      .setCheck("Number")    
      .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['yolov8n_recognitied'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW);	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.YOLOV8N_RECOGNITIED_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.YOLOV8N_RECOGNITIED_OBJECT_SHOW,"Y"],
		[Blockly.Msg.YOLOV8N_RECOGNITIED_NOTHING_SHOW,"N"]	
  ]), "status_");	  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['yolov8n_unrecognitied'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.YOLOV8N_SHOW);	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.YOLOV8N_UNRECOGNITIED_SHOW);	  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['yolov8n_xy_in_triangle'] = {
  init: function() {
    this.appendDummyInput()  
        .appendField(Blockly.Msg.YOLOV8N_SHOW)  
        .appendField(Blockly.Msg.YOLOV8N_GEOFENCE);	  
	this.appendValueInput("x")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X")
		.setCheck("Number");		
	this.appendValueInput("y")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y")
		.setCheck("Number");
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["YOLOV8N_XY_IN_TRIANGLE"]);			
	this.appendValueInput("x1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X1")
		.setCheck("Number");		
	this.appendValueInput("y1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y1")
		.setCheck("Number");
	this.appendValueInput("x2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X2")
		.setCheck("Number");		
	this.appendValueInput("y2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y2")
		.setCheck("Number");
	this.appendValueInput("x3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X3")
		.setCheck("Number");		
	this.appendValueInput("y3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y3")
		.setCheck("Number");			
	this.setInputsInline(false);
	this.setOutput(true, null); 
	this.setColour(200);
  }
};

Blockly.Blocks['yolov8n_xy_in_quadrilateral'] = {
  init: function() {
    this.appendDummyInput()  
        .appendField(Blockly.Msg.YOLOV8N_SHOW)  
        .appendField(Blockly.Msg.YOLOV8N_GEOFENCE);		  
	this.appendValueInput("x")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X")
		.setCheck("Number");		
	this.appendValueInput("y")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y")
		.setCheck("Number");
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["YOLOV8N_XY_IN_QUADRILATERAL"]);			
	this.appendValueInput("x1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X1")
		.setCheck("Number");		
	this.appendValueInput("y1")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y1")
		.setCheck("Number");
	this.appendValueInput("x2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X2")
		.setCheck("Number");		
	this.appendValueInput("y2")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y2")
		.setCheck("Number");
	this.appendValueInput("x3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X3")
		.setCheck("Number");		
	this.appendValueInput("y3")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y3")
		.setCheck("Number");
	this.appendValueInput("x4")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("X4")
		.setCheck("Number");		
	this.appendValueInput("y4")
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField("Y4")
		.setCheck("Number");
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT) 		
		.appendField(Blockly.Msg["YOLOV8N_XY_ARRANGE"]);
	this.setInputsInline(false);
	this.setOutput(true, null); 
	this.setColour(200);
  }

};