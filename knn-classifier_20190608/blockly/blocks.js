Blockly.Blocks['knn_classifier_open'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNN_CLASSIFIER_OPEN_SHOW);      
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};

Blockly.Blocks['knn_classifier_proportion'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNN_CLASSIFIER_PROPORTION_SHOW)
      .appendField(new Blockly.FieldDropdown([["train","train"], ["probability","probability"]]), "property_");    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['knn_classifier_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.KNN_CLASSIFIER_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.KNN_CLASSIFIER_HEIGHT_SHOW);	 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNN_CLASSIFIER_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["show","block"],
		["hide","none"]	  
  ]), "result_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNN_CLASSIFIER_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["yes","1"],
		["no","0"]	  
  ]), "mirrorimage_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNN_CLASSIFIER_OPACITY_SHOW)
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

Blockly.Blocks['knn_classifier_train'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNN_CLASSIFIER_TRAIN_SHOW)
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
  ]), "class_"); 	   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['knn_classifier_startdetect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.KNN_CLASSIFIER_STARTDETECT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	   
  ]), "check_"); 	   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
