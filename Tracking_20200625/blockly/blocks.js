Blockly.Blocks['trackcolor_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKCOLOR_SET_SHOW);	  
    this.appendValueInput("width_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKCOLOR_WIDTH_SHOW);    
    this.appendValueInput("height_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKCOLOR_HEIGHT_SHOW); 
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.TRACKCOLOR_DISPLAY_SHOW)
	  .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
		]), "display_"); 
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.TRACKCOLOR_PIXEL_SHOW)
	  .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
		]), "pixel_"); 
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.TRACKCOLOR_RESULT_SHOW)
	  .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
		]), "result_"); 
	this.appendDummyInput()  
	    .appendField(Blockly.Msg.TRACKCOLOR_MIRRORIMAGE_SHOW)
	    .appendField(new Blockly.FieldDropdown([
		  ["Y","1"],
		  ["N","0"]	  
	  ]), "mirrorimage_");
	this.appendDummyInput()  
	  .appendField(Blockly.Msg.TRACKCOLOR_OPACITY_SHOW)
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

Blockly.Blocks['trackcolor_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKCOLOR_CUSTOM_SHOW);	  
    this.appendDummyInput()
		.appendField(Blockly.Msg.TRACKCOLOR_RECT_SHOW)
        .appendField(new Blockly.FieldDropdown([
          ["RedRect","red"], 
          ["GreenRect","green"],
          ["BlueRect","blue"]
        ]), "rect_");
    this.appendValueInput("rmin_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKCOLOR_RED_SHOW); 	
    this.appendValueInput("rmax_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKCOLOR_TO_SHOW); 
    this.appendValueInput("gmin_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKCOLOR_GREEN_SHOW); 	
    this.appendValueInput("gmax_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKCOLOR_TO_SHOW);
    this.appendValueInput("bmin_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKCOLOR_BLUE_SHOW); 	
    this.appendValueInput("bmax_")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TRACKCOLOR_TO_SHOW);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};

Blockly.Blocks['trackcolor_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKCOLOR_GET_SHOW);   	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["magenta","magenta"], 
          ["cyan","cyan"],
          ["yellow","yellow"], 
          ["RedRect","red"],
          ["GreenRect","green"],
          ["BlueRect","blue"],
          ["All","all"]
        ]), "rect_");
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};

Blockly.Blocks['trackcolor_get_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TRACKCOLOR_GET_NUMBER_SHOW);   	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["magenta","magenta"], 
          ["cyan","cyan"],
          ["yellow","yellow"], 
          ["RedRect","red"],
          ["GreenRect","green"],
          ["BlueRect","blue"],
          ["All","all"]
        ]), "rect_");
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};
