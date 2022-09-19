
Blockly.Blocks['command_parameter9'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["COMMAND_PARAMETER"]);
    this.appendValueInput("cmd")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("cmd")	
        .setCheck(null);   
    this.appendValueInput("p1")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p1")	
        .setCheck(null); 
    this.appendValueInput("p2")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p2")	
        .setCheck(null); 
	this.appendValueInput("p3")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p3")	
        .setCheck(null); 
    this.appendValueInput("p4")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p4")	
        .setCheck(null); 
    this.appendValueInput("p5")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p5")	
        .setCheck(null); 		
    this.appendValueInput("p6")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p6")	
        .setCheck(null); 
    this.appendValueInput("p7")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p7")	
        .setCheck(null); 
    this.appendValueInput("p8")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p8")	
        .setCheck(null);
    this.appendValueInput("p9")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p9")	
        .setCheck(null);  		
	this.setInputsInline(false);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['command_parameter3'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["COMMAND_PARAMETER"]);
    this.appendValueInput("cmd")
        .appendField("cmd")		
        .setCheck(null);   
    this.appendValueInput("p1")
        .appendField("p1")	
        .setCheck(null); 
    this.appendValueInput("p2")
        .appendField("p2")	
        .setCheck(null);
    this.appendValueInput("p3")
        .appendField("p3")	
        .setCheck(null);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['command_parameter2'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["COMMAND_PARAMETER"]);
    this.appendValueInput("cmd")
        .appendField("cmd")		
        .setCheck(null);   
    this.appendValueInput("p1")
        .appendField("p1")	
        .setCheck(null); 
    this.appendValueInput("p2")
        .appendField("p2")	
        .setCheck(null);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['command_parameter1'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["COMMAND_PARAMETER"]);
    this.appendValueInput("cmd")
        .appendField("cmd")		
        .setCheck(null);   
    this.appendValueInput("p1")
        .appendField("p1")	
        .setCheck(null);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['command_parameter'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["COMMAND_PARAMETER"]);
    this.appendValueInput("cmd")
        .appendField("cmd")		
        .setCheck(null);	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};