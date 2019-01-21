Blockly.Blocks['setscreen'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Old block will be deleted");  
  this.appendValueInput("left")
      .setCheck("Number")
      .appendField(""); 
  this.appendValueInput("top")
      .setCheck("Number")
      .appendField("");   
  this.appendValueInput("width")
      .setCheck("Number")
      .appendField(""); 
  this.appendValueInput("height")
      .setCheck("Number")
      .appendField("");   
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
}; 

Blockly.Blocks['setwindow'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SETWINDOW_SHOW);  
  this.appendValueInput("left")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETWINDOW_LEFT_SHOW); 
  this.appendValueInput("top")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETWINDOW_TOP_SHOW);   
  this.appendValueInput("width")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETWINDOW_WIDTH_SHOW); 
  this.appendValueInput("height")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETWINDOW_HEIGHT_SHOW);   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.OVERFLOW_SHOW)
      .appendField(new Blockly.FieldDropdown([["auto","auto"], ["visible","visible"], ["hidden","hidden"], ["scroll","scroll"], ["inherit","inherit"]]), "overflow");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};   
  
Blockly.Blocks['body_set'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SETWINDOW_SHOW)
      .appendField(new Blockly.FieldDropdown([["backgroundColor","backgroundColor"], ["backgroundImage","backgroundImage"]]), "property_");
  this.appendValueInput("value_")
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};  

Blockly.Blocks['window_reload'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.WINDOW_RELOAD_SHOW);   
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(130);
  }
};  

Blockly.Blocks['window_event'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.WINDOW_EVENT_SHOW)
      .appendField(new Blockly.FieldDropdown([["blur","blur"],["focus","focus"],["change","change"],["mouseover","mouseover"],["mouseout","mouseout"],["mousemove","mousemove"],["mousedown","mousedown"],["mouseup","mouseup"],["click","click"],["dblclick","dblclick"],["keydown","keydown"],["keyup","keyup"],["keypress","keypress"],["submit","submit"],["load","load"],["unload","unload"]]), "event");
  this.setInputsInline(true);
  this.appendStatementInput("statement");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
