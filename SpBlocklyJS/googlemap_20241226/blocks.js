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
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
        	.appendField(Blockly.Msg["GOOGLEMAP_MAP_TYPE"])			
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["GOOGLEMAP_MAP_ROADMAP"],"roadmap"],
			[Blockly.Msg["GOOGLEMAP_MAP_SATELLITE"],"satellite"],
			[Blockly.Msg["GOOGLEMAP_MAP_HYBRID"],"hybrid"],
			[Blockly.Msg["GOOGLEMAP_MAP_TERRAIN"],"terrain"]
		]), "type");	  
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

Blockly.Blocks['googlemap_addstreetview'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GOOGLEMAP"])
	.appendField(Blockly.Msg["GOOGLEMAP_ADDSTREETVIEW"]);  
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
	this.appendValueInput("heading")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["GOOGLEMAP_HEADING"]);
	this.appendValueInput("pitch")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["GOOGLEMAP_PITCH"]);	  
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  }
};

Blockly.Blocks['googlemap_map_event_add'] = {
  init: function () {
	this.appendDummyInput()
		.appendField(Blockly.Msg["GOOGLEMAP"]);
	this.appendValueInput("divid")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_DIVID"]);
	this.appendDummyInput() 
		.appendField(Blockly.Msg["GOOGLEMAP_MAP_EVENT_ADD"]);	  
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)			
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["GOOGLEMAP_MAP_CLICK"], "click"],			
			[Blockly.Msg["GOOGLEMAP_MAP_BOUNDS_CHANGED"], "bounds_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_CENTER_CHANGED"], "center_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_CONTEXTMENU"], "contextmenu"],
			[Blockly.Msg["GOOGLEMAP_MAP_DBLCLICK"], "dblclick"],
			[Blockly.Msg["GOOGLEMAP_MAP_DRAG"], "drag"],
			[Blockly.Msg["GOOGLEMAP_MAP_DRAGEND"], "dragend"],
			[Blockly.Msg["GOOGLEMAP_MAP_DRAGSTART"], "dragstart"],
			[Blockly.Msg["GOOGLEMAP_MAP_HEADING_CHANGED"], "heading_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_IDLE"], "idle"],
			[Blockly.Msg["GOOGLEMAP_MAP_ISFRACTIONALZOOMENABLED_CHANGED"], "isfractionalzoomenabled_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_MAPCAPABILITIES_CHANGED"], "mapcapabilities_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_MAPTYPEID_CHANGED"], "maptypeid_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_MOUSEMOVE"], "mousemove"],
			[Blockly.Msg["GOOGLEMAP_MAP_MOUSEOUT"], "mouseout"],
			[Blockly.Msg["GOOGLEMAP_MAP_MOUSEOVER"], "mouseover"],
			[Blockly.Msg["GOOGLEMAP_MAP_PROJECTION_CHANGED"], "projection_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_RENDERINGTYPE_CHANGED"], "renderingtype_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_TILESLOADED"], "tilesloaded"],
			[Blockly.Msg["GOOGLEMAP_MAP_TILT_CHANGED"], "tilt_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_ZOOM_CHANGED"], "zoom_changed"]
		]), "event");	  
	this.appendStatementInput("statement");
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(210);
	this.setHelpUrl("https://developers.google.com/maps/documentation/javascript/reference?hl=zh-tw");	  
  }
};

Blockly.Blocks['googlemap_map_event_remove'] = {
  init: function () {
	this.appendDummyInput()
		.appendField(Blockly.Msg["GOOGLEMAP"]);
	this.appendValueInput("divid")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_DIVID"]);
	this.appendDummyInput() 
		.appendField(Blockly.Msg["GOOGLEMAP_MAP_EVENT_REMOVE"]);	  
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)			
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["GOOGLEMAP_MAP_CLICK"], "click"],			
			[Blockly.Msg["GOOGLEMAP_MAP_BOUNDS_CHANGED"], "bounds_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_CENTER_CHANGED"], "center_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_CONTEXTMENU"], "contextmenu"],
			[Blockly.Msg["GOOGLEMAP_MAP_DBLCLICK"], "dblclick"],
			[Blockly.Msg["GOOGLEMAP_MAP_DRAG"], "drag"],
			[Blockly.Msg["GOOGLEMAP_MAP_DRAGEND"], "dragend"],
			[Blockly.Msg["GOOGLEMAP_MAP_DRAGSTART"], "dragstart"],
			[Blockly.Msg["GOOGLEMAP_MAP_HEADING_CHANGED"], "heading_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_IDLE"], "idle"],
			[Blockly.Msg["GOOGLEMAP_MAP_ISFRACTIONALZOOMENABLED_CHANGED"], "isfractionalzoomenabled_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_MAPCAPABILITIES_CHANGED"], "mapcapabilities_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_MAPTYPEID_CHANGED"], "maptypeid_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_MOUSEMOVE"], "mousemove"],
			[Blockly.Msg["GOOGLEMAP_MAP_MOUSEOUT"], "mouseout"],
			[Blockly.Msg["GOOGLEMAP_MAP_MOUSEOVER"], "mouseover"],
			[Blockly.Msg["GOOGLEMAP_MAP_PROJECTION_CHANGED"], "projection_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_RENDERINGTYPE_CHANGED"], "renderingtype_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_TILESLOADED"], "tilesloaded"],
			[Blockly.Msg["GOOGLEMAP_MAP_TILT_CHANGED"], "tilt_changed"],
			[Blockly.Msg["GOOGLEMAP_MAP_ZOOM_CHANGED"], "zoom_changed"]
		]), "event");	  
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(210);
	this.setHelpUrl("https://developers.google.com/maps/documentation/javascript/reference?hl=zh-tw");	  
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

Blockly.Blocks['googlemap_point_event_add'] = {
  init: function () {
	this.appendDummyInput()
		.appendField(Blockly.Msg["GOOGLEMAP"]);
	this.appendValueInput("pointid")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_POINTID"]);
	this.appendDummyInput()
		.appendField(Blockly.Msg["GOOGLEMAP_POINT_EVENT_ADD"]);	  
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)			
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["GOOGLEMAP_POINT_CLICK"], "click"],
			[Blockly.Msg["GOOGLEMAP_POINT_DRAG"], "drag"],
			[Blockly.Msg["GOOGLEMAP_POINT_DRAGEND"], "dragend"],
			[Blockly.Msg["GOOGLEMAP_POINT_DRAGSTART"], "dragstart"],
			[Blockly.Msg["GOOGLEMAP_POINT_BETAGMP_CLICK"], "Betagmp-click"]
		]), "event");	  
	this.appendStatementInput("statement");
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(210);
	this.setHelpUrl("https://developers.google.com/maps/documentation/javascript/reference?hl=zh-tw");	  
  }
};

Blockly.Blocks['googlemap_point_event_remove'] = {
  init: function () {
	this.appendDummyInput()
		.appendField(Blockly.Msg["GOOGLEMAP"]);
	this.appendValueInput("pointid")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_POINTID"]);
	this.appendDummyInput() 
		.appendField(Blockly.Msg["GOOGLEMAP_POINT_EVENT_REMOVE"]);	  
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)			
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["GOOGLEMAP_POINT_CLICK"], "click"],
			[Blockly.Msg["GOOGLEMAP_POINT_DRAG"], "drag"],
			[Blockly.Msg["GOOGLEMAP_POINT_DRAGEND"], "dragend"],
			[Blockly.Msg["GOOGLEMAP_POINT_DRAGSTART"], "dragstart"]
		]), "event");	  
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(210);
	this.setHelpUrl("https://developers.google.com/maps/documentation/javascript/reference?hl=zh-tw");	  
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
			[Blockly.Msg["GOOGLEMAP_POINT_OPEN_CONTENT"],"open_content"],
			[Blockly.Msg["GOOGLEMAP_POINT_CLOSE_CONTENT"],"close_content"],				
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_CONTENT"],"update_content"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_CONTENT_HEADER"],"update_headercontent"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_LATITUDE"],"update_latitude"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_LONGITUDE"],"update_longitude"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_POSITION"],"update_position"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_TITLE"],"update_title"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_ZINDEX"],"update_zindex"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_ICON"],"update_icon"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_GMPDRAGGABLE"],"update_gmpDraggable"],
			[Blockly.Msg["GOOGLEMAP_POINT_UPDATE_GEMCLICKABLE"],"update_gmpClickable"],
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
	 if (newValue=="update_content"||newValue=="update_headercontent"||newValue=="update_latitude"||newValue=="update_longitude"||newValue=="update_position"||newValue=="update_title"||newValue=="update_zindex"||newValue=="update_icon")
		 block.getInput("content").setVisible(true);
	 else
		 block.getInput("content").setVisible(false);
  }
};

Blockly.Blocks['googlemap_point_get'] = {
  init: function () {
	this.appendDummyInput()
		.appendField(Blockly.Msg["GOOGLEMAP"]);	  
	this.appendValueInput("pointid")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.setCheck("String")
		.appendField(Blockly.Msg["GOOGLEMAP_POINTID"]);	 	  
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["GOOGLEMAP_LATITUDE"],"latitude"],
			[Blockly.Msg["GOOGLEMAP_LONGITUDE"],"longtitude"],
			[Blockly.Msg["GOOGLEMAP_LATLNG"],"latLng"]
		]), "property");			  
	this.setInputsInline(true);
  	this.setOutput(true, null); 
	this.setColour(210);
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
    this.appendDummyInput()
	.setAlign(Blockly.ALIGN_RIGHT)	    
	.appendField(new Blockly.FieldDropdown([			
		[Blockly.Msg["GOOGLEMAP_MAP_CENTER"],"center"],
		[Blockly.Msg["GOOGLEMAP_MAP_POSITION"],"position"]	
	]), "type");	  
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
			[Blockly.Msg["GOOGLEMAP_MAP_POINTS_CLEAR"],"clear"],
			[Blockly.Msg["GOOGLEMAP_MAP_UPDATE_HEADING"],"heading"],			
			[Blockly.Msg["GOOGLEMAP_MAP_UPDATE_PITCH"],"pitch"]			
		], this.validate), "func");
    this.appendValueInput("val")
	.setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT);	  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (!block) return;
	 if (newValue=="zoom"||newValue=="heading"||newValue=="pitch")
		 block.getInput("val").setVisible(true);
	 else
		 block.getInput("val").setVisible(false);
  }
};
