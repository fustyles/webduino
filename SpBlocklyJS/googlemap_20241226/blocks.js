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

Blockly.Blocks['googlemap_addmap'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GOOGLEMAP"]);	  
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










