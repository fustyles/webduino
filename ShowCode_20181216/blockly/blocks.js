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
    //console.log(event);
    if (event.element=="click") {
      console.log(this.id);
      console.log(event.blockId);
      //if (this.id==event.blockId)
        //this.updateShape_(event.name,"");
    }
  }
};    
