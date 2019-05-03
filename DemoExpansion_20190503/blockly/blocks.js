Blockly.Blocks['demo_text_add'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DEMO_TEXT_ADD_SHOW);
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
      .appendField(new Blockly.FieldDropdown([["left","left"], ["top","top"], ["width","width"], ["height","height"], ["borderstyle","borderstyle"], ["borderwidth","borderwidth"], ["bordercolor","bordercolor"], ["borderradius","borderradius"], ["background","background"], ["color","color"], ["fontsize","fontsize"], ["opacity","opacity"], ["innerHTML","innerHTML"], ["zindex","zindex"], ["display","display"], ["position","position"], ["disabled","disabled"], ["draggable","draggable"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};
