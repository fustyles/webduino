Blockly.Blocks['robotfly_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTFLY_SHOW)
        .appendField(Blockly.Msg.ROBOTFLY_INITIAL_SHOW);		
    this.appendValueInput("roll_")
        .appendField(Blockly.Msg.ROBOTFLY_ROLL_SHOW+"[1500±500]")
		.setCheck("Number");
    this.appendValueInput("pitch_")
        .appendField(Blockly.Msg.ROBOTFLY_PITCH_SHOW+"[1500±500]")
		.setCheck("Number");
    this.appendValueInput("yaw_")
        .appendField(Blockly.Msg.ROBOTFLY_YAW_SHOW+"[1500±500]")
		.setCheck("Number");
    this.appendValueInput("throttle_")
        .appendField(Blockly.Msg.ROBOTFLY_THROTTLE_SHOW+"[1000±1000]")
		.setCheck("Number");	  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }  
};

Blockly.Blocks['robotfly_command1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTFLY_SHOW)
		.appendField(Blockly.Msg.ROBOTFLY_CALIBRATION_SHOW);	  
    this.appendValueInput("roll_")
        .appendField(Blockly.Msg.ROBOTFLY_ROLL_SHOW)
		.setCheck("Number");
    this.appendValueInput("pitch_")
        .appendField(Blockly.Msg.ROBOTFLY_PITCH_SHOW)
		.setCheck("Number");
    this.appendValueInput("yaw_")
        .appendField(Blockly.Msg.ROBOTFLY_YAW_SHOW)
		.setCheck("Number");
    this.appendValueInput("throttle_")
        .appendField(Blockly.Msg.ROBOTFLY_THROTTLE_SHOW)
		.setCheck("Number");		
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }  
};

Blockly.Blocks['robotfly_command2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTFLY_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ROBOTFLY_UNLOCK_SHOW,"unlock"],
		[Blockly.Msg.ROBOTFLY_LOCK_SHOW,"lock"],
		[Blockly.Msg.ROBOTFLY_TAKEOFF_SHOW,"takeoff"],
		[Blockly.Msg.ROBOTFLY_LAND_SHOW,"land"]		
  	]), "func_");   
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['robotfly_command3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTFLY_SHOW);		  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ROBOTFLY_UP_SHOW,"up"],
		[Blockly.Msg.ROBOTFLY_DOWN_SHOW,"down"],	    
		[Blockly.Msg.ROBOTFLY_FORWARD_SHOW,"forward"],
		[Blockly.Msg.ROBOTFLY_BACKARD_SHOW,"backward"],
		[Blockly.Msg.ROBOTFLY_LEFT_SHOW,"left"],
		[Blockly.Msg.ROBOTFLY_RIGHT_SHOW,"right"],
		[Blockly.Msg.ROBOTFLY_TURNRIGHT_SHOW,"turnright"],		
		[Blockly.Msg.ROBOTFLY_TURNLEFT_SHOW,"turnleft"]	,		
		[Blockly.Msg.ROBOTFLY_STOP_SHOW,"stop"]	    
  	]), "func_");
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['robotfly_command4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTFLY_SHOW)	
        .appendField(Blockly.Msg.ROBOTFLY_DISTANCE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ROBOTFLY_UP_SHOW,"up"],
		[Blockly.Msg.ROBOTFLY_DOWN_SHOW,"down"],	    
		[Blockly.Msg.ROBOTFLY_FORWARD_SHOW,"forward"],
		[Blockly.Msg.ROBOTFLY_BACKARD_SHOW,"backward"],
		[Blockly.Msg.ROBOTFLY_LEFT_SHOW,"left"],
		[Blockly.Msg.ROBOTFLY_RIGHT_SHOW,"right"]   
  	]), "func_");	  
    this.appendValueInput("distance_")
		.setCheck("Number");
    this.appendDummyInput()
        .appendField("(cm)");		
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }  
};

Blockly.Blocks['robotfly_command5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTFLY_SHOW)
	.appendField(Blockly.Msg.ROBOTFLY_SET_SHOW);	
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ROBOTFLY_ROLL_SHOW,"roll"],
		[Blockly.Msg.ROBOTFLY_PITCH_SHOW,"pitch"],
		[Blockly.Msg.ROBOTFLY_YAW_SHOW,"yaw"],
		[Blockly.Msg.ROBOTFLY_THROTTLE_SHOW,"throttle"],
		[Blockly.Msg.ROBOTFLY_TAKEOFF_SHOW,"takeoff"],
		[Blockly.Msg.ROBOTFLY_LAND_SHOW,"land"],
		[Blockly.Msg.ROBOTFLY_DEGREE_SHOW,"degree"],
		[Blockly.Msg.ROBOTFLY_ROLL_SHOW+Blockly.Msg.ROBOTFLY_CALIBRATION_SHOW,"roll_calibration"],
		[Blockly.Msg.ROBOTFLY_PITCH_SHOW+Blockly.Msg.ROBOTFLY_CALIBRATION_SHOW,"pitch_calibration"],
		[Blockly.Msg.ROBOTFLY_YAW_SHOW+Blockly.Msg.ROBOTFLY_CALIBRATION_SHOW,"yaw_calibration"],
		[Blockly.Msg.ROBOTFLY_THROTTLE_SHOW+Blockly.Msg.ROBOTFLY_CALIBRATION_SHOW,"throttle_calibration"]
  	]), "func_");
    this.appendValueInput("val_")
        .setCheck("Number");	  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }  
};

Blockly.Blocks['robotfly_command6'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTFLY_SHOW)
	.appendField(Blockly.Msg.ROBOTFLY_GET_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ROBOTFLY_ROLL_SHOW,"roll"],
		[Blockly.Msg.ROBOTFLY_PITCH_SHOW,"pitch"],
		[Blockly.Msg.ROBOTFLY_YAW_SHOW,"yaw"],
		[Blockly.Msg.ROBOTFLY_THROTTLE_SHOW,"throttle"],
		[Blockly.Msg.ROBOTFLY_TAKEOFF_SHOW,"takeoff"],
		[Blockly.Msg.ROBOTFLY_LAND_SHOW,"land"],
		[Blockly.Msg.ROBOTFLY_DEGREE_SHOW,"degree"],
		[Blockly.Msg.ROBOTFLY_ROLL_SHOW+Blockly.Msg.ROBOTFLY_CALIBRATION_SHOW,"roll_calibration"],
		[Blockly.Msg.ROBOTFLY_PITCH_SHOW+Blockly.Msg.ROBOTFLY_CALIBRATION_SHOW,"pitch_calibration"],
		[Blockly.Msg.ROBOTFLY_YAW_SHOW+Blockly.Msg.ROBOTFLY_CALIBRATION_SHOW,"yaw_calibration"],
		[Blockly.Msg.ROBOTFLY_THROTTLE_SHOW+Blockly.Msg.ROBOTFLY_CALIBRATION_SHOW,"throttle_calibration"]
  	]), "func_");		
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['robotfly_command7'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTFLY_SHOW)
		.appendField(Blockly.Msg.ROBOTFLY_VERTICAL_SHOW);	  
    this.appendValueInput("val_")
        .appendField("[1000±1000]")
		.setCheck("Number");		
    this.setInputsInline(true);	  
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};
