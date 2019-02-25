Blockly.Blocks['BitMatrixLed_host'] = {
  init: function () {
    this.appendValueInput('host_')
        .setCheck(null)
        .appendField(Blockly.Msg.WEBBIT_HOST_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  }
};

Blockly.Blocks['BitMatrixLed_showstate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_SHOWSTATE_SHOW)
        .appendField(new Blockly.FieldDropdown([["on","1"], ["off","0"]]), "value_showstate_");     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  }  
};

Blockly.Blocks['BitMatrixLed_char'] = {
  init: function() {
    this.appendValueInput("value_char_")
        .setCheck(null)   
        .appendField(Blockly.Msg.WEBBIT_CHAR_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
}; 

  
Blockly.Blocks['BitMatrixLed_texttocode'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck("String")
        .appendField(Blockly.Msg.WEBBIT_TEXTTOCODE_SHOW);
    this.setOutput(true, null);  
    this.setColour(60);
  }  
};

Blockly.Blocks['BitMatrixLed_indentcode'] = {
  init: function() {
    this.appendValueInput("value_indentcode_")
        .setCheck("String")
        .appendField(Blockly.Msg.WEBBIT_INDENTCODE_SHOW);
    this.setOutput(true, null);  
    this.setColour(60);
  }  
};

Blockly.Blocks['BitMatrixLed_marquee'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_SHOW); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);   
  }
};  

Blockly.Blocks['BitMatrixLed_marquee_once'] = {
  init: function() {
    this.appendValueInput("value_times_")
        .setCheck("Number")       
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_ONCE_SHOW);  
    this.appendValueInput("value_marquee_")
        .setCheck("String")
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_TIMES_SHOW);  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);     
  }
};

Blockly.Blocks['BitMatrixLed_marquee_color'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_COLOR_SHOW); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
};  

Blockly.Blocks['BitMatrixLed_marquee_color_once'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_COLOR_ONCE_SHOW); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);   
  }
}; 

Blockly.Blocks['BitMatrixLed_marquee_degree'] = {
  init: function() {
    this.appendValueInput("value_marquee_degree_")
        .setCheck("Number")
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_DIRECTION_SHOW)
        .appendField(new Blockly.FieldDropdown([["left","1"], ["right","2"]]), "value_marquee_direction_")
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_DEGREE_SHOW);      
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  }  
};

Blockly.Blocks['BitMatrixLed_marquee_color_degree'] = {
  init: function() {
    this.appendValueInput("value_marquee_degree_")
        .setCheck("Number")
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_DIRECTION_COLOR_SHOW)
        .appendField(new Blockly.FieldDropdown([["left","1"], ["right","2"]]), "value_marquee_direction_")
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_DEGREE_SHOW);      
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  }  
};

Blockly.Blocks['BitMatrixLed_marquee_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_STOP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
}; 

Blockly.Blocks['BitMatrixLed_marquee_resume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_RESUME_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);     
  }
}; 

Blockly.Blocks['BitMatrixLed_marquee_reverse'] = {
  init: function() {
    this.appendDummyInput() 
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_REVERSE_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
};

Blockly.Blocks['BitMatrixLed_marquee_time'] = {
  init: function() {
    this.appendValueInput("value_marquee_time_")
        .setCheck("Number")  
        .appendField(Blockly.Msg.WEBBIT_MARQUEE_TIME_SHOW);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
};  

Blockly.Blocks['BitMatrixLed_sample'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_SAMPLE_SHOW)
        .appendField(new Blockly.FieldDropdown([["♥","♥"], ["♡","♡"], ["↑","↑"], ["↓","↓"], ["←","←"], ["→","→"], ["↖","↖"], ["↙","↙"], ["↗","↗"], ["↘","↘"], ["▲","▲"], ["▼","▼"], ["◄","◄"], ["►","►"], ["O","O"], ["X","X"], ["V","V"]]), "value_sample_");     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  }
};

Blockly.Blocks['BitMatrixLed_code'] = {
  init: function() {
    this.appendValueInput("value_code_")
        .setCheck("String")   
        .appendField(Blockly.Msg.WEBBIT_CODE_SHOW)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
}; 

Blockly.Blocks['BitMatrixLed_color'] = {
  init: function() {
    this.appendValueInput("value_color_")
        .setCheck(null)  
        .appendField(Blockly.Msg.WEBBIT_COLOR_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);     
  }
};  

Blockly.Blocks['BitMatrixLed_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.WEBBIT_MATRIX_SHOW);
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
    this.setColour(345);   
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.WEBBIT_MATRIX_COLOR_SHOW);
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
    this.setColour(345);
  }
};

Blockly.Blocks['BitMatrixLed_matrixcode'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.WEBBIT_MATRIXCODE_SHOW);
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
    this.setColour(60);   
  }
};

Blockly.Blocks['BitMatrixLed_matrixcode_line'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.WEBBIT_MATRIXCODE_LINE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L05");
    this.setOutput(true, null);
    this.setColour(60);  
  }
};

Blockly.Blocks['BitMatrixLed_matrixcode_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.WEBBIT_MATRIXCODE_COLOR_SHOW);
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
    this.setColour(60);
  }
};

Blockly.Blocks['BitMatrixLed_matrixcode_line_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.WEBBIT_MATRIXCODE_LINE_COLOR_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L01')
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField(new Blockly.FieldColour("#000000"), 'L03')
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField(new Blockly.FieldColour("#000000"), 'L05');
    this.setOutput(true, null);
    this.setColour(60);
  }
};

Blockly.Blocks['BitMatrixLed_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_CLEAR_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);     
  }
};    

Blockly.Blocks['BitMatrixLed_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_ON_SHOW);
    this.appendValueInput("value_x_on_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_on_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  }
};

Blockly.Blocks['BitMatrixLed_color_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_COLOR_ON_SHOW);
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
    this.setColour(345);
  }
};

Blockly.Blocks['BitMatrixLed_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_OFF_SHOW);
    this.appendValueInput("value_x_off_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_off_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  }
};  

Blockly.Blocks['BitMatrixLed_reverse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_REVERSE_SHOW);
    this.appendValueInput("value_x_reverse_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_reverse_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  }
};  
  
Blockly.Blocks['BitMatrixLed_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_STATE_SHOW);
    this.appendValueInput("value_x_state_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_state_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(60);
  }  
};

Blockly.Blocks['BitMatrixLed_linechart'] = {
  init: function() {
    this.appendValueInput("value_value1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)    
        .appendField(Blockly.Msg.WEBBIT_LINECHART_SHOW)    
        .appendField(Blockly.Msg.WEBBIT_VALUE1_SHOW);
    this.appendValueInput("value_value2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.WEBBIT_VALUE2_SHOW);
    this.appendValueInput("value_value3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.WEBBIT_VALUE3_SHOW);
    this.appendValueInput("value_value4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.WEBBIT_VALUE4_SHOW);
    this.appendValueInput("value_value5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.WEBBIT_VALUE5_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  }  
};

Blockly.Blocks['BitMatrixLed_barchart'] = {
  init: function() {
    this.appendValueInput("value_value1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)    
        .appendField(Blockly.Msg.WEBBIT_BARCHART_SHOW)    
        .appendField(Blockly.Msg.WEBBIT_VALUE1_SHOW);
    this.appendValueInput("value_value2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.WEBBIT_VALUE2_SHOW);
    this.appendValueInput("value_value3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.WEBBIT_VALUE3_SHOW);
    this.appendValueInput("value_value4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.WEBBIT_VALUE4_SHOW);
    this.appendValueInput("value_value5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)     
        .appendField(Blockly.Msg.WEBBIT_VALUE5_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
  }  
};

Blockly.Blocks['BitMatrixLed_clockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_CLOCKWISE_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
}; 

Blockly.Blocks['BitMatrixLed_counterclockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_COUNTERCLOCKWISE_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
}; 

Blockly.Blocks['BitMatrixLed_verticalflip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_VERTICALFLIP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
}; 

Blockly.Blocks['BitMatrixLed_horizontalflip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_HORIZONTALFLIP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
}; 

Blockly.Blocks['BitMatrixLed_invert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_INVERT_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
}; 

Blockly.Blocks['BitMatrixLed_getcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_GETCOLOR_SHOW);
    this.appendValueInput("value_x_state_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_state_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(60);
  }  
};

Blockly.Blocks['BitMatrixLed_backcolor'] = {
  init: function() {
    this.appendValueInput("value_color_")
        .setCheck(null)  
        .appendField(Blockly.Msg.WEBBIT_BACKCOLOR_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);    
  }
}; 

Blockly.Blocks['BitMatrixLed_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WebBit Command");   
    this.appendValueInput("cmd")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cmd");
    this.appendValueInput("P1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P1");
    this.appendValueInput("P2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P2");
    this.appendValueInput("P3")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P3");
    this.appendValueInput("P4")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P4");
    this.appendValueInput("P5")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P5");
    this.appendValueInput("P6")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P6");
    this.appendValueInput("P7")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P7");
    this.appendValueInput("P8")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P8");
    this.appendValueInput("P9")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P9");
    this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(345);
  }
};

Blockly.Blocks['BitMatrixLed_car'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WebBit Car");       
    this.appendValueInput("cmd")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cmd");    
    this.appendValueInput("P1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinL1");
    this.appendValueInput("P2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinL2");
    this.appendValueInput("P3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinR1");
    this.appendValueInput("P4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinR2");
    this.appendValueInput("P5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("L speed");
    this.appendValueInput("P6")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("R speed");
    this.appendValueInput("P7")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Delay(ms)");
    this.appendValueInput("P8")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("State");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(345);
  }
};

Blockly.Blocks['BitMatrixLed_car_state'] = {
  init: function () {    
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["FORWARD","F"], ["BACKWARD","B"], ["TURNLEFT","L"], ["TURNRIGHT","R"], ["STOP","S"]]), "state");    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['BitMatrixLed_cmd'] = {
  init: function () {    
  this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([  
        ["ip","ip"],
        ["mac","mac"],
        ["restart","restart"],
        ["resetwifi(ssid,password)","resetwifi"],
        ["inputpullup(gpio)","inputpullup"],
        ["pinmode(gpio,value)","pinmode"],
        ["digitalwrite(gpio,value)","digitalwrite"],
        ["analogwrite(gpio,value)","analogwrite"],
        ["digitalread(gpio)","digitalread"],
        ["analogread(gpio)","analogread"],
        ["touchread(gpio)","touchread"],
        ["tcp(domain,port,request,wait)","tcp"],
        ["ifttt(event,key,value1,value2,value3)","ifttt"],
        ["thingspeakupdate(key,field1,~~~,field8)","thingspeakupdate"],
        ["thingspeakread(request)","thingspeakread"],
        ["linenotify(token,request)","linenotify"],
        ["car(gpioL1,gpioL2,gpioR1,gpioR2,L_speed,R_speed,Delay,state)","car"],
        ["i2cLcd(address,gpioSDA,gpioSCL,text1,text2)","i2cLcd"],
        ["brightness(value[0~1])","brightness"],
        ["rgb(number[0~24],rrggbb","rgb"],
        ["matrixled(rrggbbrrggbb......[0~24])","matrixled"],
        ["buzzer(frequency,delay)","buzzer"],
        ["buttonA","buttonA"],
        ["buttonB","buttonB"],
        ["buttonAB","buttonAB"],
        ["temperature","temperature"],
        ["lumL","lumL"],
        ["lumR","lumR"],
        ["Accelerometer(item[,x,y,z,s]","accel"],
        ["Gyroscope(item[,x,y,z]","gyro"],
        ["Magnetic(item[,x,y,z,d]","mag"]
      ]), "cmd");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['BitMatrixLed_getresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get WebBit response data");
    this.setInputsInline(false);
    this.setOutput(true, null); 
    this.setColour(60);
  }
};

Blockly.Blocks['BitMatrixLed_clearresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear WebBit response data");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(345);
  }
};
