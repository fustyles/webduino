Blockly.Blocks['matrix_led_char'] = {
  init: function() {
    this.appendValueInput("value_char_")
        .setCheck(null)   
        .appendField(Blockly.Msg.MATRIXLED_CHAR_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
}; 

  
Blockly.Blocks['matrix_led_texttocode'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck("String")
        .appendField(Blockly.Msg.MATRIXLED_TEXTTOCODE_SHOW);
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

Blockly.Blocks['matrix_led_indentcode'] = {
  init: function() {
    this.appendValueInput("value_indentcode_")
        .setCheck("String")
        .appendField(Blockly.Msg.MATRIXLED_INDENTCODE_SHOW);
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

Blockly.Blocks['matrix_led_showstate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_SHOWSTATE_SHOW)
        .appendField(new Blockly.FieldDropdown([["on","1"], ["off","0"]]), "value_showstate_");     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

Blockly.Blocks['matrix_led_marquee'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_SHOW); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};  

Blockly.Blocks['matrix_led_marquee_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_STOP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
}; 

Blockly.Blocks['matrix_led_marquee_resume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_RESUME_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
}; 

Blockly.Blocks['matrix_led_marquee_reverse'] = {
  init: function() {
    this.appendDummyInput() 
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_REVERSE_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};

Blockly.Blocks['matrix_led_marquee_time'] = {
  init: function() {
    this.appendValueInput("value_marquee_time_")
        .setCheck("Number")  
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_TIME_SHOW);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};  

Blockly.Blocks['matrix_led_sample'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_SAMPLE_SHOW)
        .appendField(new Blockly.FieldDropdown([["♥","♥"], ["♡","♡"], ["↑","↑"], ["↓","↓"], ["←","←"], ["→","→"], ["↖","↖"], ["↙","↙"], ["↗","↗"], ["↘","↘"], ["▲","▲"], ["▼","▼"], ["◄","◄"], ["►","►"], ["O","O"], ["X","X"], ["V","V"]]), "value_sample_");     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(300);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_led_code'] = {
  init: function() {
    this.appendValueInput("value_code_")
        .setCheck("String")   
        .appendField(Blockly.Msg.MATRIXLED_CODE_SHOW)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
}; 

Blockly.Blocks['matrix_led_color'] = {
  init: function() {
    this.appendValueInput("value_color_")
        .setCheck(null)  
        .appendField(Blockly.Msg.MATRIXLED_COLOR_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};  

Blockly.Blocks['matrix_led_width'] = {
  init: function() {
    this.appendValueInput("value_width_")
        .setCheck("Number")  
        .appendField(Blockly.Msg.MATRIXLED_WIDTH_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};  

Blockly.Blocks['matrix_led_height'] = {
  init: function() {
    this.appendValueInput("value_height_")
        .setCheck("Number")  
        .appendField(Blockly.Msg.MATRIXLED_HEIGHT_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};   

Blockly.Blocks['matrix_led_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_MATRIX_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L06")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L16")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L21");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L07")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L17")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L22");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L08")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L18")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L23");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L09")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L14")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L19")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L24");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L05")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L10")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L15")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L20")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L25");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_led_matrix_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_MATRIX_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ffffff"), 'L01')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L06')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L11')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L16')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L21')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ffffff"), 'L02')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L07')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L12')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L17')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L22')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ffffff"), 'L03')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L08')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L13')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L18')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L23')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ffffff"), 'L04')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L09')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L14')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L19')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L24')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ffffff"), 'L05')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L10')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L15')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L20')
        .appendField(new Blockly.FieldColour("#ffffff"), 'L25')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['matrix_led_matrixcode'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_MATRIXCODE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L06")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L16")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L21");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L07")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L17")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L22");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L08")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L18")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L23");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L09")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L14")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L19")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L24");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L05")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L10")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L15")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L20")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L25");
    this.setOutput(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_led_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_CLEAR_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};    

Blockly.Blocks['matrix_led_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_ON_SHOW);
    this.appendValueInput("value_x_on_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_on_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_led_color_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_COLOR_ON_SHOW);
    this.appendValueInput("value_x_on_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_on_")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("value_color_on_")
        .setCheck("Colour")
        .appendField("color");    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_led_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_OFF_SHOW);
    this.appendValueInput("value_x_off_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_off_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};  

Blockly.Blocks['matrix_led_reverse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_REVERSE_SHOW);
    this.appendValueInput("value_x_reverse_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_reverse_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};  
  
Blockly.Blocks['matrix_led_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_STATE_SHOW);
    this.appendValueInput("value_x_state_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_state_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

Blockly.Blocks['matrix_led_linechart'] = {
  init: function() {
    this.appendValueInput("value_value1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)    
        .appendField(Blockly.Msg.MATRIXLED_LINECHART_SHOW)    
        .appendField(Blockly.Msg.MATRIXLED_VALUE1_SHOW);
    this.appendValueInput("value_value2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.MATRIXLED_VALUE2_SHOW);
    this.appendValueInput("value_value3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.MATRIXLED_VALUE3_SHOW);
    this.appendValueInput("value_value4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.MATRIXLED_VALUE4_SHOW);
    this.appendValueInput("value_value5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.MATRIXLED_VALUE5_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

Blockly.Blocks['matrix_led_barchart'] = {
  init: function() {
    this.appendValueInput("value_value1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)    
        .appendField(Blockly.Msg.MATRIXLED_BARCHART_SHOW)    
        .appendField(Blockly.Msg.MATRIXLED_VALUE1_SHOW);
    this.appendValueInput("value_value2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.MATRIXLED_VALUE2_SHOW);
    this.appendValueInput("value_value3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.MATRIXLED_VALUE3_SHOW);
    this.appendValueInput("value_value4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.MATRIXLED_VALUE4_SHOW);
    this.appendValueInput("value_value5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.MATRIXLED_VALUE5_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

Blockly.Blocks['matrix_led_clockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_CLOCKWISE_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
}; 

Blockly.Blocks['matrix_led_counterclockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_COUNTERCLOCKWISE_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
}; 

Blockly.Blocks['matrix_led_verticalflip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_VERTICALFLIP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
}; 

Blockly.Blocks['matrix_led_horizontalflip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_HORIZONTALFLIP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
}; 

Blockly.Blocks['matrix_led_invert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_INVERT_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
}; 

Blockly.Blocks['matrix_led_getcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_GETCOLOR_SHOW);
    this.appendValueInput("value_x_state_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_state_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

Blockly.Blocks['matrix_led_backcolor'] = {
  init: function() {
    this.appendValueInput("value_color_")
        .setCheck(null)  
        .appendField(Blockly.Msg.MATRIXLED_BACKCOLOR_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
}; 
