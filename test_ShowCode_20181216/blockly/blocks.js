Blockly.Blocks['showcode'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Show Code  continued")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "check");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(20);
  },
  onchange: function (event) {
    console.log(containerBlock.getFieldValue("check"));
    if (event.element=="click"||containerBlock.getFieldValue("check")==TRUE) {
      if (this.id==event.blockId) {
        var workspace = Blockly.getMainWorkspace('blocklyDiv');
        console.clear();
        console.log(Blockly.JavaScript.workspaceToCode(workspace));
      }
    }
  }
};    
