Blockly.Blocks['addMyBlocks'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.ADDCUSTOMBLOCKS_SHOW);
  this.appendValueInput("url")
      .setCheck("String"); 
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["",""],
        ["add","add"], 
        ["remove","remove"]
      ]), "func");
  this.setTooltip('');
  this.setColour(20);
  },
  onchange: function (event) {
    if (event.element=="field") {
      if (this.id==event.blockId) {
	  
          if (event.name=='func') {
            var url = this.getInputTargetBlock("url").getFieldValue("TEXT");
            if (this.getFieldValue('func')=='add') {
                  Code.customTab.$__add__(url);
                  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
            else if (this.getFieldValue('func')=='remove') {
                  Code.customTab.$__remove__(url);
                  this.getInputTargetBlock("url").setFieldValue("", "TEXT");
            }
            this.getField('func').setValue("");
          }
      }
    }
  }
};    
