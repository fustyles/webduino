Blockly.Blocks['chart_analoggauge_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_CREATE"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendValueInput("name")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_NAME"]);			
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_WIDTH"]);  
	this.appendValueInput("height")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_HEIGHT"]);	
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LEFT"]);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_TOP"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]);  
	this.appendValueInput("min")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_MIN"]);	
	this.appendValueInput("max")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_MAX"]);  
	this.appendValueInput("decimal")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_DECIMAL"]);  
	this.appendValueInput("unit")
		.setCheck("String")	
		.appendField(Blockly.Msg["CHART_UNIT"]);
	this.appendValueInput("count")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_COUNT"]);
	this.appendValueInput("angle")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_ANGLE"]);		
	this.appendValueInput("color")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_COLOR"]); 		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(280);
  }
};

Blockly.Blocks['chart_analoggauge_colorset'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_COLOR"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]); 		
	this.appendValueInput("color")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_COLOR"]); 		
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(280);
  }
};

Blockly.Blocks['chart_analoggauge_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_SET"]);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(280);
  }
};

Blockly.Blocks['chart_doughnut_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.CHART_DOUGHNUT_CREATE);
	this.appendValueInput("name")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_NAME);
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_WIDTH);  
	this.appendValueInput("height")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_HEIGHT);	
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_LEFT);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_TOP);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_VAL);  
	this.appendValueInput("min")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_MIN);	
	this.appendValueInput("max")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_MAX);  
	this.appendValueInput("decimal")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_DECIMAL);  
	this.appendValueInput("labelsize")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_LABELSIZE);	
	this.appendValueInput("valuesize")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_VALUESIZE); 
	this.appendValueInput("unit")
		.setCheck("String")	
		.appendField(Blockly.Msg.CHART_UNIT);
	this.appendValueInput("color")
		.setCheck(null)	
		.appendField(Blockly.Msg.CHART_COLOR);			
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(210);
  }
};

Blockly.Blocks['chart_doughnut_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.CHART_DOUGHNUT_SET);	  
	this.appendValueInput("name")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_NAME);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_VAL); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(210);
  }
};	

Blockly.Blocks['chart_gauge_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.CHART_GAUGE_CREATE);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_ID);		
	this.appendValueInput("name")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_NAME);
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_WIDTH);
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_LEFT);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_TOP);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_VAL);  
	this.appendValueInput("min")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_MIN);	
	this.appendValueInput("max")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_MAX);  
	this.appendValueInput("decimal")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_DECIMAL);  
	this.appendValueInput("labelsize")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_LABELSIZE);
	this.appendValueInput("unit")
		.setCheck("String")	
		.appendField(Blockly.Msg.CHART_UNIT);
	this.appendValueInput("color")
		.setCheck(null)	
		.appendField(Blockly.Msg.CHART_COLOR);			
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(130);
  }
};

Blockly.Blocks['chart_gauge_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.CHART_GAUGE_SET);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_ID);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_VAL); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(130);
  }
};

Blockly.Blocks['chart_waterbubble_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.CHART_WATERBUBBLE_CREATE);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_ID);		
	this.appendValueInput("name")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_NAME);
	this.appendValueInput("radius")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_RADIUS);
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_LEFT);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_TOP);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_VAL);  
	this.appendValueInput("min")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_MIN);	
	this.appendValueInput("max")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_MAX);  
	this.appendValueInput("decimal")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_DECIMAL);
	this.appendValueInput("unit")
		.setCheck("String")	
		.appendField(Blockly.Msg.CHART_UNIT);
	this.appendValueInput("watercolor")
		.setCheck(null)	
		.appendField(Blockly.Msg.CHART_WATERCOLOR);	
	this.appendValueInput("textcolor")
		.setCheck(null)	
		.appendField(Blockly.Msg.CHART_TEXTCOLOR);		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(170);
  }
};

Blockly.Blocks['chart_waterbubble_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.CHART_WATERBUBBLE_SET);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_ID);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_VAL); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(170);
  }
};

Blockly.Blocks['chart_line_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.CHART_LINE_CREATE);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_ID);			
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_WIDTH);  
	this.appendValueInput("height")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_HEIGHT);	
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_LEFT);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_TOP);
	this.appendValueInput("count")
		.setCheck("Number")
		.appendField(Blockly.Msg.CHART_COUNT);
	this.appendValueInput("title")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_TITLE);
	this.appendValueInput("titlex")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_TITLE_X);
	this.appendValueInput("titley")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_TITLE_Y);
	this.appendValueInput("dataset")
		.setCheck(null)
		.appendField(Blockly.Msg.CHART_DATASET); 		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(330);
  }
};

Blockly.Blocks['chart_line_dataset'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.CHART_LINE_DATASET);
	this.appendValueInput("label")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_LABEL);
	this.appendValueInput("borderColor")
		.setCheck(null)	
		.appendField(Blockly.Msg.CHART_BORDERCOLOR);	
	this.appendValueInput("backgroundColor")
		.setCheck(null)	
		.appendField(Blockly.Msg.CHART_BACKGROUNDCOLOR);			
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(330);
  }
};

Blockly.Blocks['chart_line_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.CHART_LINE_SET);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg.CHART_ID);
	this.appendValueInput("datax")
		.setCheck(null)
		.appendField(Blockly.Msg.CHART_DATA_X); 		
	this.appendValueInput("dataset")
		.setCheck(null)
		.appendField(Blockly.Msg.CHART_DATASET); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(330);
  }
};

Blockly.Blocks['chart_line_clear'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_LINE_CLEAR"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(330);
  }
};

Blockly.Blocks['chart_bar_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_BAR_CREATE"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);			
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_WIDTH"]);  
	this.appendValueInput("height")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_HEIGHT"]);	
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LEFT"]);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_TOP"]);
	this.appendValueInput("count")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_COUNT"]);
	this.appendValueInput("title")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_TITLE"]);
	this.appendValueInput("titlex")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_TITLE_X"]);
	this.appendValueInput("titley")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_TITLE_Y"]);
	this.appendValueInput("dataset")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_DATASET"]); 		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(330);
  }
};

Blockly.Blocks['chart_bar_dataset'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_BAR_DATASET"]);
	this.appendValueInput("label")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_LABEL"]);
	this.appendValueInput("borderColor")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_BORDERCOLOR"]);	
	this.appendValueInput("backgroundColor")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_BACKGROUNDCOLOR"]);			
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(330);
  }
};

Blockly.Blocks['chart_bar_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_BAR_SET"]);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendValueInput("datax")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_DATA_X"]); 		
	this.appendValueInput("dataset")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_DATASET"]); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(330);
  }
};

Blockly.Blocks['chart_bar_clear'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_BAR_CLEAR"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(330);
  }
};