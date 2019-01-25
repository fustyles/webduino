Blockly.Blocks['uart_car'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("Uart Car"); 
    this.appendValueInput("cmd")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cmd");    
    this.appendValueInput("str1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinL1");
    this.appendValueInput("str2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinL2");
    this.appendValueInput("str3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinR1");
    this.appendValueInput("str4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinR2");
    this.appendValueInput("str5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("L speed");
    this.appendValueInput("str6")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("R speed");
    this.appendValueInput("str7")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Delay(ms)");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("State")
        .appendField(new Blockly.FieldDropdown([["FORWARD","F"], ["BACKWARD","B"], ["LEFT","L"], ["RIGHT","R"], ["STOP","S"]]), "str8");    
    this.setInputsInline(false);    
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['uart_system'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Uart System    cmd")
        .appendField(new Blockly.FieldDropdown([["inputPullup","inputpullup"], ["pinMode","pinmode"], ["digitalWrite","digitalwrite"], ["digitalRead","digitalread"], ["analogWrite","analogwrite"], ["analogRead","analogread"]]), "cmd");
    this.appendValueInput("str1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pin");
    this.appendValueInput("str2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("value");
    this.appendValueInput("str3")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str3~str9");
    this.setInputsInline(false);     
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['uart_custom'] = {
  init: function() {
    this.appendValueInput("cmd")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Uart Custom    cmd");
    this.appendValueInput("str1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str1");
    this.appendValueInput("str2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str2");
    this.appendValueInput("str3")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str3");
    this.appendValueInput("str4")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str4");
    this.appendValueInput("str5")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str5");
    this.appendValueInput("str6")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str6");
    this.appendValueInput("str7")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str7");
    this.appendValueInput("str8")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str8");
    this.appendValueInput("str9")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str9");
    this.setInputsInline(false);     
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
