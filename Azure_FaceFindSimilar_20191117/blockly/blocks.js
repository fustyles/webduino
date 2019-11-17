Blockly.Blocks['azure_facefindsimilar_settings'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_SETTINGS_SHOW);
  this.appendValueInput("resourcename_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_RESOURCENAME_SHOW);
  this.appendValueInput("key_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_KEY_SHOW);
  this.appendValueInput("facelistid_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_FACELISTID_SHOW);
  this.appendValueInput("faceid_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_FACEID_SHOW);
  this.appendValueInput("maxnum_")
      .setCheck("Number")
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_MAXNUM_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_MODE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["matchPerson","matchPerson"],
        ["matchFace","matchFace"]	  
      ]), "mode_");     
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['azure_facefindsimilar_detect'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_DETECT_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['azure_facefindsimilar_get'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_GET_SHOW); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['azure_facefindsimilar_get_persondata'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_GET_PERSONDATA_SHOW); 
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(65);
  }
};

Blockly.Blocks['azure_facefindsimilar_get_persons'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_GET_PERSONS_SHOW); 	  
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(65);
  }
};

Blockly.Blocks['azure_facefindsimilar_get_max'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZUREFACEFINDSIMILAR_GET_MAX_SHOW); 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([
      ["FaceId","faceid"],
      ["Confidence","confidence"]	  
  ]), "property_"); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};
