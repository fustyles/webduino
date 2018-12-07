Blockly.Blocks['teachable_machine_open'] = {
  init: function() {
  this.appendValueInput("num_")
      .setCheck("Number") 
      .appendField(Blockly.Msg.TEACHABLE_MACHINE_OPEN_SHOW);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};

Blockly.Blocks['teachable_machine_proportion'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLE_MACHINE_PROPORTION_SHOW)
      .appendField(new Blockly.FieldDropdown([["train","train"], ["probability","probability"]]), "property_");    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};
