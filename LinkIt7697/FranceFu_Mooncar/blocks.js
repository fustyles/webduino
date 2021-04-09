Blockly.Blocks.webbit_mooncar_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN);
  this.appendValueInput("R1")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_R1);
  this.appendValueInput("R2")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_R2);
  this.appendValueInput("L1")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_L1);
  this.appendValueInput("L2")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_L2);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(90);  
}
};
Blockly.Blocks.webbit_mooncar_move_car={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_CAR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRANCEFU_FORWARD,"FORWARD"],[Blockly.Msg.FRANCEFU_BACKWARD,"BACKWARD"],[Blockly.Msg.FRANCEFU_TURNLEFT,"LEFT"],[Blockly.Msg.FRANCEFU_TURNRIGHT,"RIGHT"],[Blockly.Msg.FRANCEFU_STOP,"STOP"]]),"STAT");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_MOTOR_R);
  this.appendValueInput("RSPEED")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_MOTOR_L);
  this.appendValueInput("LSPEED")
      .setCheck("Number");	  
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(90);  
}
};
Blockly.Blocks.webbit_mooncar_tracker_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_TRACKER_PIN);
  this.appendValueInput("PINR")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_TRACKER_PIN_R);
  this.appendValueInput("PINL")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_TRACKER_PIN_L);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(300);  
}
};
Blockly.Blocks.webbit_mooncar_tracker={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TRACKER);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(300);
}
};
Blockly.Blocks.webbit_mooncar_sonar_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN);
  this.appendValueInput("TRIG")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN_TRIG);
  this.appendValueInput("ECHO")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN_ECHO);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(240);  
}
};
Blockly.Blocks.webbit_mooncar_sonar={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_SONAR);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(240);  
}
};
Blockly.Blocks.webbit_mooncar_tcs_init={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_INIT);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);  
}
};
Blockly.Blocks.webbit_mooncar_tcs_read={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_READ)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.FRANCEFU_RED,"r"],
		  [Blockly.Msg.FRANCEFU_GREEN,"g"],
		  [Blockly.Msg.FRANCEFU_BLUE,"b"],
		  [Blockly.Msg.FRANCEFU_LUX,"l"]
	  ]),"color");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_READ_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_tcs_set={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_SET)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.FRANCEFU_RED,"0"],
		  [Blockly.Msg.FRANCEFU_GREEN,"1"],
		  [Blockly.Msg.FRANCEFU_BLUE,"2"],		  
		  [Blockly.Msg.FRANCEFU_YELLO,"3"],
		  [Blockly.Msg.FRANCEFU_CYAN,"4"],
		  [Blockly.Msg.FRANCEFU_MAGENTA,"5"],
		  [Blockly.Msg.FRANCEFU_CUSTOM1,"6"],
		  [Blockly.Msg.FRANCEFU_CUSTOM2,"7"],
		  [Blockly.Msg.FRANCEFU_CUSTOM3,"8"]	  
	  ]),"color");
  this.appendValueInput("R")
      .setCheck("Number")
	  .appendField("R");
  this.appendValueInput("G")
      .setCheck("Number")
	  .appendField("G");
	    this.appendValueInput("B")
      .setCheck("Number")
	  .appendField("B");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_tcs_detect={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_DETECT)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.FRANCEFU_RED,"0"],
		  [Blockly.Msg.FRANCEFU_GREEN,"1"],
		  [Blockly.Msg.FRANCEFU_BLUE,"2"],		  
		  [Blockly.Msg.FRANCEFU_YELLO,"3"],
		  [Blockly.Msg.FRANCEFU_CYAN,"4"],
		  [Blockly.Msg.FRANCEFU_MAGENTA,"5"],
		  [Blockly.Msg.FRANCEFU_CUSTOM1,"6"],
		  [Blockly.Msg.FRANCEFU_CUSTOM2,"7"],
		  [Blockly.Msg.FRANCEFU_CUSTOM3,"8"]
	  ]),"color");
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_tcs_range={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_RANGE);
  this.appendValueInput("range")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_flash_light={init:function(){
  this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg.FRANCEFU_FLASH_LIGHT);
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRANCEFU_ON,"LOW"],[Blockly.Msg.FRANCEFU_OFF,"HIGH"]]),"state");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);   
}
};

Blockly.Blocks['webbit_mooncar_ws2812_pin'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.FRANCEFU_WS2812_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");			
		this.appendValueInput("leds")
			.setCheck("Number")
			.appendField(Blockly.Msg.FRANCEFU_WS2812_LEDS);
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(210);			
	}
};

Blockly.Blocks['webbit_mooncar_ws2812_brightness'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.FRANCEFU_WS2812_BRIGHTNESS);
		this.appendValueInput("brightness")
			.setCheck("Number");
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(210);			
	}
};

Blockly.Blocks['webbit_mooncar_ws2812_clear'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.FRANCEFU_WS2812_CLEAR);
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(210);			
	}
};

Blockly.Blocks['webbit_mooncar_ws2812_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.FRANCEFU_WS2812_COLOR_SHOW);
    this.appendDummyInput()
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L06')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L16')
        .appendField('   ');
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L22');
    this.appendDummyInput()
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ');
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L24');
    this.appendDummyInput()
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L10')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L20')
        .appendField('   ');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);	
  }
};

Blockly.Blocks['webbit_mooncar_ws2812_color_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_WS2812_COLOR_SHOW);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.FRANCEFU_WS2812_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.FRANCEFU_WS2812_CHOICECOLOR_SHOW);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);	
  }
};

Blockly.Blocks['webbit_mooncar_ws2812_rgb_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_WS2812_COLOR_SHOW);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.FRANCEFU_WS2812_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.FRANCEFU_WS2812_CHOICECOLOR_SHOW+"[0~255]");		
	this.appendValueInput("R")
        .appendField("R")	
		.setCheck("Number");
	this.appendValueInput("G")
        .appendField("G")	
		.setCheck("Number");
	this.appendValueInput("B")
        .appendField("B")	
		.setCheck("Number");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);	
  }
};

Blockly.Blocks['webbit_mooncar_choice_color'] = {
  init: function() {	
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"RGB");
	this.setInputsInline(!0);
	this.setOutput(!0,"Boolean");	
  }
};

Blockly.Blocks.webbit_mooncar_ir_remote_read_pin = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ_PIN);
	this.appendValueInput("pin")	
		.setCheck("Number");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);  	
  }
};
Blockly.Blocks.webbit_mooncar_ir_remote_read={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ);
  this.setInputsInline(!0);
  this.appendStatementInput("IR_READ");
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setColour(10);    
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_read_value={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(10);   
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_read_type={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ_TYPE);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(10);   
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_send_pin = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_SEND_PIN);
	this.appendValueInput("pin")	
		.setCheck("Number");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);  	
  }
};
Blockly.Blocks.webbit_mooncar_ir_remote_send={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_TYPE)
      .appendField(new Blockly.FieldDropdown([["NEC","NEC"],["Sony","SONY"],["RC5","RC5"],["RC6","RC6"]]),"IR_TYPE");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_SEND);
  this.appendValueInput("IR_SEND")
      .setCheck("String");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(10);  
}
};