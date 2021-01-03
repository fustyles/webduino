Blockly.Blocks['tello_initial'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)
      .appendField(Blockly.Msg.INITIAL_SHOW)
      .appendField(Blockly.Msg.IP_SHOW); 
  this.appendValueInput("delaytime_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DELAYTIME_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_basic'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.IP_SHOW);
  this.appendDummyInput() 
      .appendField(Blockly.Msg.CMD_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.COMMAND_SHOW,"command"],	  
		[Blockly.Msg.TAKEOFF_SHOW,"takeoff"],
		[Blockly.Msg.LAND_SHOW,"land"],
		[Blockly.Msg.EMERGENCY_SHOW,"emergency"],		
		[Blockly.Msg.UP_SHOW+" [20-500]","up"],	
		[Blockly.Msg.DOWN_SHOW+" [20-500]","down"],	
		[Blockly.Msg.LEFT_SHOW+" [20-500])","left"],	
		[Blockly.Msg.RIGHT_SHOW+" [20-500]","right"],	
		[Blockly.Msg.FORWARD_SHOW+" [20-500]","forward"],
		[Blockly.Msg.BACK_SHOW+" [20-500]","back"],	
		[Blockly.Msg.CW_SHOW+" [1-360]","cw"],	
		[Blockly.Msg.CCW_SHOW+" [1-360]","ccw"],	
		["flip (l/r/f/b)","flip"],	
		[Blockly.Msg.GO_SHOW+" (x y z speed)","go"],	
		[Blockly.Msg.STOP_SHOW,"stop"],	
		["curve (x1 y1 z1 x2 y2 z2 speed)","curve"],
		["jump (x y z speed yaw mid1 mid2)","jump"],	
		[Blockly.Msg.SPEED_SHOW+" [10-100]","speed"],	
		["rc (a b c d)[-100-100]","rc"],	
		[Blockly.Msg.WIFI_SHOW+" (ssid pass)","wifi"],	
		["mon","mon"],	
		["moff","moff"],	
		["mdirection[0/1/2]","mdirection"],
		[Blockly.Msg.AP_SHOW+" (ssid pass)","ap"]
  ]), "cmd_"); 
  this.appendValueInput("val_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE_SHOW); 
  this.appendValueInput("delaytime_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DELAYTIME_SHOW);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};