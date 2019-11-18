Blockly.Blocks['azure_facetofaceverify_settings'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.AZUREFACETOFACEVERIFY_SETTINGS_SHOW);
  this.appendValueInput("resourcename_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZUREFACETOFACEVERIFY_RESOURCENAME_SHOW);
  this.appendValueInput("key_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZUREFACETOFACEVERIFY_KEY_SHOW);
  this.appendValueInput("faceid1_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZUREFACETOFACEVERIFY_FACEID1_SHOW);
  this.appendValueInput("faceid2_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZUREFACETOFACEVERIFY_FACEID2_SHOW);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['azure_facetofaceverify_detect'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.AZUREFACETOFACEVERIFY_DETECT_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['azure_facetofaceverify_get'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZUREFACETOFACEVERIFY_GET_SHOW); 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([
      ["isIdentical","isidentical"],
      ["confidence","confidence"]	  
  ]), "property_"); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['azure_facetofaceverify_getdata'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZUREFACETOFACEVERIFY_GETDATA_SHOW);   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};
