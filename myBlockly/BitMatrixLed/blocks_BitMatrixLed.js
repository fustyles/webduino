Blockly.Blocks['BitMatrixled_host'] = {
  init: function () {
    this.appendValueInput('host_')
        .setCheck(null)
        .appendField(Blockly.Msg.BITMATRIXLED_HOST_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixled_showstate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('myMatrixLed'), 'myMatrixLed_')
        .appendField(Blockly.Msg.BITMATRIXLED_SHOWSTATE_SHOW)
        .appendField(new Blockly.FieldDropdown([["on","1"], ["off","0"]]), "value_showstate_");     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixled_char'] = {
  init: function() {
    this.appendValueInput("value_char_")
        .setCheck(null)   
        .appendField(Blockly.Msg.BITMATRIXLED_CHAR_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

  
Blockly.Blocks['BitMatrixled_texttocode'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck("String")
        .appendField(Blockly.Msg.BITMATRIXLED_TEXTTOCODE_SHOW);
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixled_indentcode'] = {
  init: function() {
    this.appendValueInput("value_indentcode_")
        .setCheck("String")
        .appendField(Blockly.Msg.BITMATRIXLED_INDENTCODE_SHOW);
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixled_marquee'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_SHOW); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);   
  }
};  

Blockly.Blocks['BitMatrixled_marquee_once'] = {
  init: function() {
    this.appendValueInput("value_times_")
        .setCheck("Number")       
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_ONCE_SHOW);  
    this.appendValueInput("value_marquee_")
        .setCheck("String")
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_TIMES_SHOW);  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};

Blockly.Blocks['BitMatrixled_marquee_color'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_COLOR_SHOW); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
};  

Blockly.Blocks['BitMatrixled_marquee_color_once'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_COLOR_ONCE_SHOW); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);   
  }
}; 

Blockly.Blocks['BitMatrixled_marquee_degree'] = {
  init: function() {
    this.appendValueInput("value_marquee_degree_")
        .setCheck("Number")
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_DIRECTION_SHOW)
        .appendField(new Blockly.FieldDropdown([["left","1"], ["right","2"]]), "value_marquee_direction_")
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_DEGREE_SHOW);      
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixled_marquee_color_degree'] = {
  init: function() {
    this.appendValueInput("value_marquee_degree_")
        .setCheck("Number")
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_DIRECTION_COLOR_SHOW)
        .appendField(new Blockly.FieldDropdown([["left","1"], ["right","2"]]), "value_marquee_direction_")
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_DEGREE_SHOW);      
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixled_marquee_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_STOP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixled_marquee_resume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_RESUME_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);     
  }
}; 

Blockly.Blocks['BitMatrixled_marquee_reverse'] = {
  init: function() {
    this.appendDummyInput() 
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_REVERSE_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
};

Blockly.Blocks['BitMatrixled_marquee_time'] = {
  init: function() {
    this.appendValueInput("value_marquee_time_")
        .setCheck("Number")  
        .appendField(Blockly.Msg.BITMATRIXLED_MARQUEE_TIME_SHOW);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
};  

Blockly.Blocks['BitMatrixled_sample'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_SAMPLE_SHOW)
        .appendField(new Blockly.FieldDropdown([["♥","♥"], ["♡","♡"], ["↑","↑"], ["↓","↓"], ["←","←"], ["→","→"], ["↖","↖"], ["↙","↙"], ["↗","↗"], ["↘","↘"], ["▲","▲"], ["▼","▼"], ["◄","◄"], ["►","►"], ["O","O"], ["X","X"], ["V","V"]]), "value_sample_");     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixled_code'] = {
  init: function() {
    this.appendValueInput("value_code_")
        .setCheck("String")   
        .appendField(Blockly.Msg.BITMATRIXLED_CODE_SHOW)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixled_color'] = {
  init: function() {
    this.appendValueInput("value_color_")
        .setCheck(null)  
        .appendField(Blockly.Msg.BITMATRIXLED_COLOR_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);     
  }
};  

Blockly.Blocks['BitMatrixled_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.BITMATRIXLED_MATRIX_SHOW);
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
  }
};

Blockly.Blocks['BitMatrixled_matrix_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.BITMATRIXLED_MATRIX_COLOR_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L01')
        .appendField(new Blockly.FieldColour("#000000"), 'L06')
        .appendField(new Blockly.FieldColour("#000000"), 'L11')
        .appendField(new Blockly.FieldColour("#000000"), 'L16')
        .appendField(new Blockly.FieldColour("#000000"), 'L21')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField(new Blockly.FieldColour("#000000"), 'L07')
        .appendField(new Blockly.FieldColour("#000000"), 'L12')
        .appendField(new Blockly.FieldColour("#000000"), 'L17')
        .appendField(new Blockly.FieldColour("#000000"), 'L22')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L03')
        .appendField(new Blockly.FieldColour("#000000"), 'L08')
        .appendField(new Blockly.FieldColour("#000000"), 'L13')
        .appendField(new Blockly.FieldColour("#000000"), 'L18')
        .appendField(new Blockly.FieldColour("#000000"), 'L23')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField(new Blockly.FieldColour("#000000"), 'L09')
        .appendField(new Blockly.FieldColour("#000000"), 'L14')
        .appendField(new Blockly.FieldColour("#000000"), 'L19')
        .appendField(new Blockly.FieldColour("#000000"), 'L24')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L05')
        .appendField(new Blockly.FieldColour("#000000"), 'L10')
        .appendField(new Blockly.FieldColour("#000000"), 'L15')
        .appendField(new Blockly.FieldColour("#000000"), 'L20')
        .appendField(new Blockly.FieldColour("#000000"), 'L25')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixled_matrixcode'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.BITMATRIXLED_MATRIXCODE_SHOW);
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
  }
};

Blockly.Blocks['BitMatrixled_matrixcode_line'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.BITMATRIXLED_MATRIXCODE_LINE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L05");
    this.setOutput(true, null);
    this.setColour(300);  
  }
};

Blockly.Blocks['BitMatrixled_matrixcode_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.BITMATRIXLED_MATRIXCODE_COLOR_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L01')
        .appendField(new Blockly.FieldColour("#000000"), 'L06')
        .appendField(new Blockly.FieldColour("#000000"), 'L11')
        .appendField(new Blockly.FieldColour("#000000"), 'L16')
        .appendField(new Blockly.FieldColour("#000000"), 'L21')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField(new Blockly.FieldColour("#000000"), 'L07')
        .appendField(new Blockly.FieldColour("#000000"), 'L12')
        .appendField(new Blockly.FieldColour("#000000"), 'L17')
        .appendField(new Blockly.FieldColour("#000000"), 'L22')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L03')
        .appendField(new Blockly.FieldColour("#000000"), 'L08')
        .appendField(new Blockly.FieldColour("#000000"), 'L13')
        .appendField(new Blockly.FieldColour("#000000"), 'L18')
        .appendField(new Blockly.FieldColour("#000000"), 'L23')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField(new Blockly.FieldColour("#000000"), 'L09')
        .appendField(new Blockly.FieldColour("#000000"), 'L14')
        .appendField(new Blockly.FieldColour("#000000"), 'L19')
        .appendField(new Blockly.FieldColour("#000000"), 'L24')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L05')
        .appendField(new Blockly.FieldColour("#000000"), 'L10')
        .appendField(new Blockly.FieldColour("#000000"), 'L15')
        .appendField(new Blockly.FieldColour("#000000"), 'L20')
        .appendField(new Blockly.FieldColour("#000000"), 'L25')
    this.setOutput(true, null);
    this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixled_matrixcode_line_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.BITMATRIXLED_MATRIXCODE_LINE_COLOR_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L01')
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField(new Blockly.FieldColour("#000000"), 'L03')
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField(new Blockly.FieldColour("#000000"), 'L05');
    this.setOutput(true, null);
    this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixled_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_CLEAR_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);     
  }
};    

Blockly.Blocks['BitMatrixled_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_ON_SHOW);
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
  }
};

Blockly.Blocks['BitMatrixled_color_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_COLOR_ON_SHOW);
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
  }
};

Blockly.Blocks['BitMatrixled_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_OFF_SHOW);
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
  }
};  

Blockly.Blocks['BitMatrixled_reverse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_REVERSE_SHOW);
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
  }
};  
  
Blockly.Blocks['BitMatrixled_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_STATE_SHOW);
    this.appendValueInput("value_x_state_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_state_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixled_linechart'] = {
  init: function() {
    this.appendValueInput("value_value1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)    
        .appendField(Blockly.Msg.BITMATRIXLED_LINECHART_SHOW)    
        .appendField(Blockly.Msg.BITMATRIXLED_VALUE1_SHOW);
    this.appendValueInput("value_value2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.BITMATRIXLED_VALUE2_SHOW);
    this.appendValueInput("value_value3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.BITMATRIXLED_VALUE3_SHOW);
    this.appendValueInput("value_value4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.BITMATRIXLED_VALUE4_SHOW);
    this.appendValueInput("value_value5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.BITMATRIXLED_VALUE5_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixled_barchart'] = {
  init: function() {
    this.appendValueInput("value_value1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)    
        .appendField(Blockly.Msg.BITMATRIXLED_BARCHART_SHOW)    
        .appendField(Blockly.Msg.BITMATRIXLED_VALUE1_SHOW);
    this.appendValueInput("value_value2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.BITMATRIXLED_VALUE2_SHOW);
    this.appendValueInput("value_value3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.BITMATRIXLED_VALUE3_SHOW);
    this.appendValueInput("value_value4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.BITMATRIXLED_VALUE4_SHOW);
    this.appendValueInput("value_value5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.BITMATRIXLED_VALUE5_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixled_clockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_CLOCKWISE_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixled_counterclockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_COUNTERCLOCKWISE_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixled_verticalflip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_VERTICALFLIP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixled_horizontalflip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_HORIZONTALFLIP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixled_invert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_INVERT_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixled_getcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BITMATRIXLED_GETCOLOR_SHOW);
    this.appendValueInput("value_x_state_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_state_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixled_backcolor'] = {
  init: function() {
    this.appendValueInput("value_color_")
        .setCheck(null)  
        .appendField(Blockly.Msg.BITMATRIXLED_BACKCOLOR_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 
