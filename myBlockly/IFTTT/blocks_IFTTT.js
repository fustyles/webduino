Blockly.Blocks['ifttt_open'] = {
  init: function() {
  this.appendValueInput("ifttt_event")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("IFTTT   ")
      .appendField("Event");    
  this.appendValueInput("ifttt_key")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Key");
  this.appendValueInput("ifttt_value1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value1");
  this.appendValueInput("ifttt_value2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value2");
  this.appendValueInput("ifttt_value3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value3");  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};
