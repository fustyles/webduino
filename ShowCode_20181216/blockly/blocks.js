Blockly.Blocks['showcode'] = {
  init: function() {
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(20);
  }
},
  onchange: function (event) {
    console.log(event);
    //if (event.element=="field") {
      //if (this.id==event.blockId)
        //this.updateShape_(event.name,"");
    //}
  }
};    
