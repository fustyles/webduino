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
