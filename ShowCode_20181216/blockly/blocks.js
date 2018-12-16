Blockly.Blocks['showcode'] = {
  init: function() {
  this.appendDummyInput()
      .appendField("Show Code");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(20);
  },
  onchange: function (event) {
    if (event.element=="click") {
      if (this.id==event.blockId) {
        var workspace = Blockly.inject('blocklyDiv',{ media: '../../media/',toolbox: document.getElementById('toolbox')});
        console.log(Blockly.JavaScript.workspaceToCode(workspace));
      }
    }
  }
};    
