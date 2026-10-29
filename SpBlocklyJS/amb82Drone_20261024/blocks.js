Blockly.Blocks['Amb82Drone_object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AMB82DRONE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.AMB82DRONE_TCP_SHOW,"tcp"],
        [Blockly.Msg.AMB82DRONE_MQTT_SHOW,"mqtt"]
  	]), "type");         
	this.appendValueInput("path")
		.setCheck("String")
		.appendField(Blockly.Msg.AMB82DRONE_PATH_SHOW);  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
  }  
};

Blockly.Blocks['Amb82Drone_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AMB82DRONE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.AMB82DRONE_TCP_SHOW,"tcp"],        
		[Blockly.Msg.AMB82DRONE_BLUETOOTH_SHOW,"bluetooth"],
        [Blockly.Msg.AMB82DRONE_MQTT_SHOW,"mqtt"]
  	]), "type");         
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.AMB82DRONE_UNLOCK_SHOW,"LEDFFFA000000000000#"],
        [Blockly.Msg.AMB82DRONE_TAILLIGHT_SHOW,"LED0000FFFA00000000#"], 
		[Blockly.Msg.AMB82DRONE_BODYLIGHT_SHOW,"LED00000000FFFA0000#"],
		[Blockly.Msg.AMB82DRONE_MOTORSTART_SHOW,"LED000000000000FFFA#"],
		[Blockly.Msg.AMB82DRONE_HOVERING_SHOW,"SRT1500150015001500#"]		
  	]), "command");   
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
  }  
};

Blockly.Blocks['Amb82Drone_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AMB82DRONE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.AMB82DRONE_TCP_SHOW,"tcp"],        
		[Blockly.Msg.AMB82DRONE_BLUETOOTH_SHOW,"bluetooth"],
        [Blockly.Msg.AMB82DRONE_MQTT_SHOW,"mqtt"]
  	]), "type");           
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.AMB82DRONE_FORWARD_SHOW,"forward"],        
		[Blockly.Msg.AMB82DRONE_BACKARD_SHOW,"backward"],
		[Blockly.Msg.AMB82DRONE_LEFT_SHOW,"left"],
		[Blockly.Msg.AMB82DRONE_RIGHT_SHOW,"right"],        
		[Blockly.Msg.AMB82DRONE_UP_SHOW,"up"],
		[Blockly.Msg.AMB82DRONE_DOWN_SHOW,"down"],
		[Blockly.Msg.AMB82DRONE_TURNLEFT_SHOW,"turnleft"],
        [Blockly.Msg.AMB82DRONE_TURNRIGHT_SHOW,"turnright"]		
  	]), "command");
    this.appendValueInput("speed")
        .appendField(Blockly.Msg.AMB82DRONE_INCREMENT_SHOW)
		.setCheck("Number");    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
  }  
};

Blockly.Blocks['Amb82Drone_landing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AMB82DRONE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.AMB82DRONE_TCP_SHOW,"tcp"],        
		[Blockly.Msg.AMB82DRONE_BLUETOOTH_SHOW,"bluetooth"],
        [Blockly.Msg.AMB82DRONE_MQTT_SHOW,"mqtt"]
  	]), "type");
    this.appendDummyInput()	
        .appendField(Blockly.Msg.AMB82DRONE_LANDING_SHOW);    
    this.appendValueInput("seconds")	
        .appendField(Blockly.Msg.AMB82DRONE_SECONDS_SHOW)
		.setCheck("Number");    		
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
  }  
};


Blockly.Blocks['Amb82Drone_move_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AMB82DRONE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.AMB82DRONE_TCP_SHOW,"tcp"],        
		[Blockly.Msg.AMB82DRONE_BLUETOOTH_SHOW,"bluetooth"],
        [Blockly.Msg.AMB82DRONE_MQTT_SHOW,"mqtt"]
  	]), "type");           
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.AMB82DRONE_FORWARD_SHOW,"forward"],        
		[Blockly.Msg.AMB82DRONE_BACKARD_SHOW,"backward"],
		[Blockly.Msg.AMB82DRONE_LEFT_SHOW,"left"],
		[Blockly.Msg.AMB82DRONE_RIGHT_SHOW,"right"],        
		[Blockly.Msg.AMB82DRONE_UP_SHOW,"up"],
		[Blockly.Msg.AMB82DRONE_DOWN_SHOW,"down"],
		[Blockly.Msg.AMB82DRONE_TURNLEFT_SHOW,"turnleft"],
        [Blockly.Msg.AMB82DRONE_TURNRIGHT_SHOW,"turnright"]	
  	]), "command");
    this.appendValueInput("speed")
        .appendField(Blockly.Msg.AMB82DRONE_INCREMENT_SHOW)
		.setCheck("Number");     
    this.appendDummyInput()	
        .appendField(Blockly.Msg.AMB82DRONE_DISTANCE_RATIO_SHOW);  
    this.appendValueInput("ratio")
		.setCheck("Number");    
    this.appendValueInput("distance")	
        .appendField(Blockly.Msg.AMB82DRONE_DISTANCE_SHOW)
		.setCheck("Number");		
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
  }  
};
