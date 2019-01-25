Blockly.Blocks['TextToSpeech_run'] = {
  init: function () {
  this.appendValueInput("text_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXTTOSPEECH_SHOW) 
      .appendField(Blockly.Msg.TEXTTOSPEECH_TEXT_SHOW);  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
