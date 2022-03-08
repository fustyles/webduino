Blockly.Blocks['demo_text_add'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DEMO_TEXT_ADD_SHOW)
        .appendField("ID");
    this.appendValueInput("id_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("String");   	
    this.setInputsInline(true);	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};

Blockly.Blocks['demo_text_set'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEMO_TEXT_SHOW) 
      .appendField(Blockly.Msg.DEMO_TEXT_SET_SHOW)     
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.DEMO_LEFT,"left"], 
		  [Blockly.Msg.DEMO_TOP,"top"], 
		  [Blockly.Msg.DEMO_WIDTH,"width"], 
		  [Blockly.Msg.DEMO_HEIGHT,"height"], 
		  [Blockly.Msg.DEMO_BORDERSTYLE,"borderstyle"], 
		  [Blockly.Msg.DEMO_BORDERWIDTH,"borderwidth"], 
		  [Blockly.Msg.DEMO_BORDERCOLOR,"bordercolor"], 
		  [Blockly.Msg.DEMO_BORDERRADIUS,"borderradius"], 
		  [Blockly.Msg.DEMO_BACKGROUND,"background"], 
		  [Blockly.Msg.DEMO_BACKGROUNDCOLOR,"color"], 
		  [Blockly.Msg.DEMO_FONTSIZE,"fontsize"], 
		  [Blockly.Msg.DEMO_OPACITY,"opacity"], 
		  [Blockly.Msg.DEMO_INNERHTML,"innerHTML"], 
		  [Blockly.Msg.DEMO_INNERTEXT,"innerTEXT"], 		  
		  [Blockly.Msg.DEMO_ZINDEX,"zindex"], 
		  [Blockly.Msg.DEMO_DISPLAY,"display"], 
		  [Blockly.Msg.DEMO_POSITION,"position"], 
		  [Blockly.Msg.DEMO_DISABLED,"disabled"], 
		  [Blockly.Msg.DEMO_DRAGGABLE,"draggable"]
	  ]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};

