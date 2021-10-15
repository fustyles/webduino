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
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
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
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/");
  }
};

Blockly.Blocks['fu_serial_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_READY"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/ifserial/");
  }
};

Blockly.Blocks['fu_serial_end'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_END"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/end/");
  }
};

Blockly.Blocks['fu_serial_print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.Msg["FU_SERIAL_PRINT"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};

Blockly.Blocks['fu_serial_print_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_PRINT"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};

Blockly.Blocks['fu_serial_println'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.Msg["FU_SERIAL_PRINTLN"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/println/");
  }
};

Blockly.Blocks['fu_serial_println_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_PRINTLN"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/println/");
  }
};

Blockly.Blocks['fu_serial_write'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_WRITE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/write/");
  }
};

Blockly.Blocks['fu_serial_write_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_WRITE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};