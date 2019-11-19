Blockly.Blocks['ws2812_expansion_1to24'] = {
  init: function() {
    this.appendDummyInput() 
        .appendField(new Blockly.FieldVariable('ws2812'), 'ws2812_');
    this.appendDummyInput() 
        .appendField("red ←→ green")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "change_");
    this.appendValueInput("color0_")
        .appendField("1")
        .setCheck("Colour"); 
    this.appendValueInput("color1_")
        .appendField("2")
        .setCheck("Colour"); 
    this.appendValueInput("color2_")
        .appendField("3")
        .setCheck("Colour"); 
    this.appendValueInput("color3_")
        .appendField("4")
        .setCheck("Colour"); 
    this.appendValueInput("color4_")
        .appendField("5")
        .setCheck("Colour"); 
    this.appendValueInput("color5_")
        .appendField("6")
        .setCheck("Colour"); 
    this.appendValueInput("color6_")
        .appendField("7")
        .setCheck("Colour"); 
    this.appendValueInput("color7_")
        .appendField("8")
        .setCheck("Colour"); 
    this.appendValueInput("color8_")
        .appendField("9")
        .setCheck("Colour"); 
    this.appendValueInput("color9_")
        .appendField("10")
        .setCheck("Colour"); 
    this.appendValueInput("color10_")
        .appendField("11")
        .setCheck("Colour"); 
    this.appendValueInput("color11_")
        .appendField("12")
        .setCheck("Colour");  
    this.appendValueInput("color12_")
        .appendField("13")
        .setCheck("Colour");    
    this.appendValueInput("color13_")
        .appendField("14")
        .setCheck("Colour"); 
    this.appendValueInput("color14_")
        .appendField("15")
        .setCheck("Colour"); 
    this.appendValueInput("color15_")
        .appendField("16")
        .setCheck("Colour");  
    this.appendValueInput("color16_")
        .appendField("17")
        .setCheck("Colour"); 
    this.appendValueInput("color17_")
        .appendField("18")
        .setCheck("Colour");  
    this.appendValueInput("color18_")
        .appendField("19")
        .setCheck("Colour");    
    this.appendValueInput("color19_")
        .appendField("20")
        .setCheck("Colour"); 
    this.appendValueInput("color20_")
        .appendField("21")
        .setCheck("Colour"); 
    this.appendValueInput("color21_")
        .appendField("22")
        .setCheck("Colour"); 
    this.appendValueInput("color22_")
        .appendField("23")
        .setCheck("Colour"); 
    this.appendValueInput("color23_")
        .appendField("24")
        .setCheck("Colour");     
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }
};


Blockly.Blocks['ws2812_expansion_1to4'] = {
  init: function() {
    this.appendDummyInput() 
        .appendField(new Blockly.FieldVariable('ws2812'), 'ws2812_');
    this.appendDummyInput()     
        .appendField("red ←→ green")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "change_");
    this.appendValueInput("color0_")
        .appendField("1")
        .setCheck("Colour"); 
    this.appendValueInput("color1_")
        .appendField("2")
        .setCheck("Colour"); 
    this.appendValueInput("color2_")
        .appendField("3")
        .setCheck("Colour"); 
    this.appendValueInput("color3_")
        .appendField("4")
        .setCheck("Colour"); 
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }
};

Blockly.Blocks['ws2812_expansion_1to8'] = {
  init: function() {
    this.appendDummyInput() 
        .appendField(new Blockly.FieldVariable('ws2812'), 'ws2812_');
    this.appendDummyInput()     
        .appendField("red ←→ green")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "change_");
    this.appendValueInput("color0_")
        .appendField("1")
        .setCheck("Colour"); 
    this.appendValueInput("color1_")
        .appendField("2")
        .setCheck("Colour"); 
    this.appendValueInput("color2_")
        .appendField("3")
        .setCheck("Colour"); 
    this.appendValueInput("color3_")
        .appendField("4")
        .setCheck("Colour"); 
    this.appendValueInput("color4_")
        .appendField("5")
        .setCheck("Colour"); 
    this.appendValueInput("color5_")
        .appendField("6")
        .setCheck("Colour"); 
    this.appendValueInput("color6_")
        .appendField("7")
        .setCheck("Colour"); 
    this.appendValueInput("color7_")
        .appendField("8")
        .setCheck("Colour"); 
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }
};

Blockly.Blocks['ws2812_expansion_9to16'] = {
  init: function() {
    this.appendDummyInput() 
        .appendField(new Blockly.FieldVariable('ws2812'), 'ws2812_');
    this.appendDummyInput()     
        .appendField("red ←→ green")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "change_");
    this.appendValueInput("color8_")
        .appendField("9")
        .setCheck("Colour"); 
    this.appendValueInput("color9_")
        .appendField("10")
        .setCheck("Colour"); 
    this.appendValueInput("color10_")
        .appendField("11")
        .setCheck("Colour"); 
    this.appendValueInput("color11_")
        .appendField("12")
        .setCheck("Colour");  
    this.appendValueInput("color12_")
        .appendField("13")
        .setCheck("Colour");    
    this.appendValueInput("color13_")
        .appendField("14")
        .setCheck("Colour"); 
    this.appendValueInput("color14_")
        .appendField("15")
        .setCheck("Colour"); 
    this.appendValueInput("color15_")
        .appendField("16")
        .setCheck("Colour"); 
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }
};


Blockly.Blocks['ws2812_expansion_17to24'] = {
  init: function() {
    this.appendDummyInput() 
        .appendField(new Blockly.FieldVariable('ws2812'), 'ws2812_');
    this.appendDummyInput()     
        .appendField("red ←→ green")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "change_");
    this.appendValueInput("color16_")
        .appendField("17")
        .setCheck("Colour"); 
    this.appendValueInput("color17_")
        .appendField("18")
        .setCheck("Colour");  
    this.appendValueInput("color18_")
        .appendField("19")
        .setCheck("Colour");    
    this.appendValueInput("color19_")
        .appendField("20")
        .setCheck("Colour"); 
    this.appendValueInput("color20_")
        .appendField("21")
        .setCheck("Colour"); 
    this.appendValueInput("color21_")
        .appendField("22")
        .setCheck("Colour"); 
    this.appendValueInput("color22_")
        .appendField("23")
        .setCheck("Colour"); 
    this.appendValueInput("color23_")
        .appendField("24")
        .setCheck("Colour"); 
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
  }
};

