Blockly.Blocks['barcode_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BARCODE_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BARCODE_CODE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["EAN-13","ean-13"],
		["EAN-8","ean-8"],
		["Code-39","code-39"],
		["Code-2of5","code-2of5"],
		["Codabar","codabar"],
		["Code-128","code-128"]	  
  ]), "code_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BARCODE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BARCODE_OPACITY_SHOW)
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
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['barcode_get'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BARCODE_GET_SHOW); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['barcode_clear'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BARCODE_CLEAR_SHOW); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['barcode_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BARCODE_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BARCODE_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['barcode_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BARCODE_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BARCODE_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.BARCODE_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.BARCODE_FACING_BACK_SHOW,"back"]
  ]), "facing_"); 	  
  this.appendValueInput("index_")
      .setCheck("Number") 
	  .appendField(Blockly.Msg.BARCODE_CAMERAID_SHOW);
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BARCODE_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.BARCODE_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['barcode_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BARCODE_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.BARCODE_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};