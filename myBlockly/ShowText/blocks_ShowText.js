Blockly.Blocks['showtext'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SHOWTEXT_SHOW);  
  this.appendValueInput("size")
      .setCheck("Number")
      .appendField(Blockly.Msg.SHOWTEXT_SIZE_SHOW); 
  this.appendValueInput("color")
      .appendField(Blockly.Msg.SHOWTEXT_COLOR_SHOW); 
  this.appendValueInput("text")
      .setCheck(null)
      .appendField(Blockly.Msg.SHOWTEXT_TEXT_SHOW);   
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['showtext_set'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SHOWTEXT_SHOW) 
      .appendField(Blockly.Msg.SHOWTEXT_SET_SHOW)     
      .appendField(new Blockly.FieldDropdown([["left","left"], ["top","top"], ["width","width"], ["height","height"], ["borderstyle","borderstyle"], ["borderwidth","borderwidth"], ["bordercolor","bordercolor"], ["background","background"], ["color","color"], ["fontsize","fontsize"], ["opacity","opacity"], ["innerHTML","innerHTML"], ["zindex","zindex"], ["display","display"], ["position","position"], ["disabled","disabled"], ["draggable","draggable"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['linebreak'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.LINEBREAK_SHOW);  
  this.setOutput(true, null); 
  this.setColour(90);
  }
};

Blockly.Blocks['comment'] = {
  init: function() {
  this.appendValueInput("text")
      .setCheck(null)
      .appendField(Blockly.Msg.COMMENT_SHOW); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  }
};
