//TIME
Blockly.Blocks['fu_time_delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_TIME_DELAY"]);
    this.appendValueInput("ms")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_TIME_MILLISSECONDS"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_TIME_HUE"]);
 this.setTooltip("time");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/time/delay/");
  }
};

Blockly.Blocks['fu_time_delaymicroseconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_TIME_DELAY"]);
    this.appendValueInput("us")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_TIME_MICROSECONDS"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_TIME_HUE"]);
 this.setTooltip("time");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/time/delaymicroseconds/");
  }
};

Blockly.Blocks['fu_time_micros'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_TIME_DELAYMICROS"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["FU_TIME_HUE"]);
 this.setTooltip("time");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/time/micros/");
  }
};

Blockly.Blocks['fu_time_millis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_TIME_DELAYMILLIS"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["FU_TIME_HUE"]);
 this.setTooltip("time");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/time/millis/");
  }
};