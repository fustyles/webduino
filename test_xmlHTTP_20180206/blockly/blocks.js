Blockly.Blocks['xmlHTTP_ResponseData'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.XMLHTTP_RESPONSEDATA)
        .appendField(new Blockly.FieldDropdown([
          ["JSON","JSON"],
          ["HTML","HTML"],    
          ["XML","XML"]
        ]), "value_format_");          
    this.appendValueInput("value_url_")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};



