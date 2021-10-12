//IO
Blockly.Blocks['fu_io_pinmode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_IO_PIN"]);
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_IO_MODE"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["FU_IO_OUTPUT"],"OUTPUT"], [Blockly.Msg["FU_IO_INPUT"],"INPUT"], [Blockly.Msg["FU_IO_INPUT_PULLUP"],"INPUT_PULLUP"]]), "type");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_IO_HUE"]);
 this.setTooltip("I/O");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/");
  }
};

Blockly.Blocks['fu_io_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["FU_IO_DIGITALWRITE"],"digitalWrite(%1, %2);\n"], [Blockly.Msg["FU_IO_ANALOGWRITE"],"analogWrite(%1, %2);\n"]]), "type");
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_IO_PIN"]);
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_IO_VALUE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_IO_HUE"]);
 this.setTooltip("I/O");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/");
  }
};

Blockly.Blocks['fu_io_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["FU_IO_DIGITALREAD"],"digitalRead(%1)"], [Blockly.Msg["FU_IO_ANALOGREAD"],"analogRead(%1)"]]), "type");
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_IO_PIN"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["FU_IO_HUE"]);
 this.setTooltip("I/O");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/digital-io/digitalread/");
  }
};