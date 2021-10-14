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

//SERIAL
Blockly.Blocks['fu_serial_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("baudrate")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/");
  }
};

Blockly.Blocks['fu_serial_begin_config'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("baudrate")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_CONFIG"])
        .appendField(new Blockly.FieldDropdown([
			["SERIAL_5N1", "SERIAL_5N1"],
			["SERIAL_6N1", "SERIAL_6N1"],
			["SERIAL_7N1", "SERIAL_7N1"],
			["SERIAL_8N1", "SERIAL_8N1"],
			["SERIAL_5N2", "SERIAL_5N2"],
			["SERIAL_6N2", "SERIAL_6N2"],
			["SERIAL_7N2", "SERIAL_7N2"],
			["SERIAL_8N2", "SERIAL_8N2"],
			["SERIAL_5E1", "SERIAL_5E1"],
			["SERIAL_6E1", "SERIAL_6E1"],
			["SERIAL_7E1", "SERIAL_7E1"],
			["SERIAL_8E1", "SERIAL_8E1"],
			["SERIAL_5E2", "SERIAL_5E2"],
			["SERIAL_6E2", "SERIAL_6E2"],
			["SERIAL_7E2", "SERIAL_7E2"],
			["SERIAL_8E2", "SERIAL_8E2"],
			["SERIAL_5O1", "SERIAL_5O1"],
			["SERIAL_6O1", "SERIAL_6O1"],
			["SERIAL_7O1", "SERIAL_7O1"],
			["SERIAL_8O1", "SERIAL_8O1"],
			["SERIAL_5O2", "SERIAL_5O2"],
			["SERIAL_6O2", "SERIAL_6O2"],
			["SERIAL_7O2", "SERIAL_7O2"],
			["SERIAL_8O2", "SERIAL_8O2"]	
		]), "config");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/");
  }
};