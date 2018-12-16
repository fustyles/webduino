Blockly.Blocks['showcode'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Show Code  ")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "check");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(20);
  },
  onchange: function (event) {
    if (event.element=="click"&&this.getFieldValue("check")=="FALSE") {
      if (this.id==event.blockId) {
        var workspace = Blockly.getMainWorkspace('blocklyDiv');
        console.clear();
        console.log(Blockly.JavaScript.workspaceToCode(workspace));
      }
    } else if (this.getFieldValue("check")=="TRUE") {
      var workspace = Blockly.getMainWorkspace('blocklyDiv');
      console.clear();
      console.log(Blockly.JavaScript.workspaceToCode(workspace));
    }
  }
};    
