Blockly.Blocks['googlemap_initial'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GOOGLEMAP"])  
        .appendField(Blockly.Msg["GOOGLEMAP_INITIAL"]);
	this.appendValueInput("key")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_APIKEY"]);
	this.appendStatementInput("statement")
		.appendField(Blockly.Msg["GOOGLEMAP_ADDMAP"]);
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(210);
	this.setHelpUrl("https://developers.google.com/maps/documentation/javascript?hl=zh-tw");
  }
};

Blockly.Blocks['googlemap_loaded'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GOOGLEMAP"])  
        .appendField(Blockly.Msg["GOOGLEMAP_LOADED"]);
	this.appendStatementInput("statement");
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(210);
  }
};

Blockly.Blocks['googlemap_addmap'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GOOGLEMAP"])
	.appendField(Blockly.Msg["GOOGLEMAP_ADDMAP"]);	  
	this.appendValueInput("divid")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_DIVID"]);	  
	this.appendValueInput("latitude")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["GOOGLEMAP_LATITUDE_CENTER"]);
	this.appendValueInput("longitude")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["GOOGLEMAP_LONGITUDE_CENTER"]);		
	this.appendValueInput("zoom")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["GOOGLEMAP_ZOOM"]);			  
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  }
};


Blockly.Blocks['googlemap_addpoint'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GOOGLEMAP"]) 
		.appendField(Blockly.Msg["GOOGLEMAP_ADDPOINT"]);
	this.appendValueInput("pointid")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_POINTID"]);	  
	this.appendValueInput("divid")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_DIVID"]);		
	this.appendValueInput("latitude")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["GOOGLEMAP_LATITUDE"]);
	this.appendValueInput("longitude")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["GOOGLEMAP_LONGITUDE"]);		
	this.appendValueInput("title")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_TITLE"]);
	this.appendValueInput("content")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_CONTENT"]);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  }
};

Blockly.Blocks['googlemap_point_function'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GOOGLEMAP"]);	  
	this.appendValueInput("pointid")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_POINTID"]);	 	  
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_CONTENT"],"update_content"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_LATITUDE"],"update_latitude"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_LONGITUDE"],"update_longitude"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_POSITION"],"update_position"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_TITLE"],"update_title"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_ICON"],"update_icon"],			
			[Blockly.Msg["GOOGLEMAP_POINT_OPEN_CONTENT"],"open_content"],
			[Blockly.Msg["GOOGLEMAP_POINT_CLOSE_CONTENT"],"close_content"],			
			[Blockly.Msg["GOOGLEMAP_POINT_CLEAR"],"clear"]	
		], this.validate), "func");	
	this.appendValueInput("content")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck(null)
		.appendField(Blockly.Msg["GOOGLEMAP_CONTENT"]);			  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (!block) return;
	 if (newValue=="update_content"||newValue=="update_latitude"||newValue=="update_longitude"||newValue=="update_position"||newValue=="update_title"||newValue=="update_icon")
		 block.getInput("content").setVisible(true);
	 else
		 block.getInput("content").setVisible(false);
  }
};

Blockly.Blocks['googlemap_map_center'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GOOGLEMAP"]) 
	.appendField(Blockly.Msg["GOOGLEMAP_CENTERMAP"]); 
    this.appendValueInput("divid")
	.setAlign(Blockly.ALIGN_RIGHT)	
	.setCheck("String")
	.appendField(Blockly.Msg["GOOGLEMAP_DIVID"]);		 	  
    this.appendValueInput("latitude")
	.setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(Blockly.Msg["GOOGLEMAP_LATITUDE"]);
    this.appendValueInput("longitude")
	.setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(Blockly.Msg["GOOGLEMAP_LONGITUDE"]);  
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  }
};

Blockly.Blocks['googlemap_map_function'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GOOGLEMAP"]);	  
	this.appendValueInput("divid")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_DIVID"]);		 	  
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["GOOGLEMAP_MAP_UPDATE_ZOOM"],"zoom"],
			[Blockly.Msg["GOOGLEMAP_POINT_CLEAR"],"clear"]	
		], this.validate), "func");
    this.appendValueInput("zoom")
	.setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(Blockly.Msg["GOOGLEMAP_ZOOM"]);	  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (!block) return;
	 if (newValue=="zoom")
		 block.getInput("zoom").setVisible(true);
	 else
		 block.getInput("zoom").setVisible(false);
  }
};
