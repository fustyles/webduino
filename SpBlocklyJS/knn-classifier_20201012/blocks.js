Blockly.Blocks['knnclassifier_video'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_OPACITY_SHOW)
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

Blockly.Blocks['knnclassifier_train'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_TRAIN_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],	  
		["5","5"],
		["6","6"],
		["7","7"],
		["8","8"],
		["9","9"]	   
  ]), "index_"); 	   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knnclassifier_class'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);	 	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_CLASS_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],	  
		["5","5"],
		["6","6"],
		["7","7"],
		["8","8"],
		["9","9"]   
  ]), "index_"); 
  this.appendValueInput("classname_")
      .setCheck("String")
      .appendField(Blockly.Msg.KNNCLASSIFIER_CLASSNAME_SHOW);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knnclassifier_detect'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_DETECT_SHOW); 	   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knnclassifier_clearclasses'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);		  
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_CLEARCLASSES_SHOW);	   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knnclassifier_savemodel'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);		  
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SAVEMODEL_SHOW); 	   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knnclassifier_loadmodel'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);		  
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_LOADMODEL_SHOW);	   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knnclassifier_loadmodelurl'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);		  
  this.appendValueInput("url_")
      .appendField(Blockly.Msg.KNNCLASSIFIER_LOADMODELURL_SHOW)
	  .setCheck("String");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knnclassifier_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.KNNCLASSIFIER_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.KNNCLASSIFIER_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.KNNCLASSIFIER_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.KNNCLASSIFIER_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knnclassifier_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.KNNCLASSIFIER_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knnclassifier_recognitied'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_RECOGNITIED_SHOW);	  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knnclassifier_proportion'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_PROPORTION_SHOW)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.KNNCLASSIFIER_CLASSNAME_SHOW,"class"], 
	  [Blockly.Msg.KNNCLASSIFIER_PROBABILITY_SHOW,"probability"]
  ]), "property_");    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['knnclassifier_proportion_array'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.KNNCLASSIFIER_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNNCLASSIFIER_CLASS_ARRAY_SHOW);    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};
