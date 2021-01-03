Blockly.Blocks['tello_initial'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)
      .appendField(Blockly.Msg.TELLO_IP_SHOW); 
  this.appendValueInput("delaytime_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_INITIAL_SHOW)
      .appendField(Blockly.Msg.TELLO_DELAYTIME_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(30);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_wifi'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
      .appendField(Blockly.Msg.TELLO_CMD_SHOW)
      .appendField(new Blockly.FieldDropdown([	
		[Blockly.Msg.TELLO_WIFI_SHOW,"wifi"],
		[Blockly.Msg.TELLO_AP_SHOW,"ap"]
  ]), "cmd_"); 
  this.appendValueInput("ssid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SSID_SHOW); 
  this.appendValueInput("pass_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_PASS_SHOW);	  
  this.appendValueInput("delaytime_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_DELAYTIME_SHOW);	
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(20);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_cmd1'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
      .appendField(Blockly.Msg.TELLO_CMD_SHOW)
      .appendField(new Blockly.FieldDropdown([	  
		[Blockly.Msg.TELLO_TAKEOFF_SHOW,"takeoff"],
		[Blockly.Msg.TELLO_LAND_SHOW,"land"],
		[Blockly.Msg.TELLO_EMERGENCY_SHOW,"emergency"],	
		[Blockly.Msg.TELLO_STOP_SHOW,"stop"],
		[Blockly.Msg.TELLO_MON_SHOW,"mon"],	
		[Blockly.Msg.TELLO_MOFF_SHOW,"moff"],
		[Blockly.Msg.TELLO_COMMAND_SHOW,"command"]		
  ]), "cmd_"); 
  this.appendValueInput("delaytime_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_DELAYTIME_SHOW);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};


Blockly.Blocks['tello_cmd2'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
      .appendField(Blockly.Msg.TELLO_CMD_SHOW)
      .appendField(new Blockly.FieldDropdown([		
		[Blockly.Msg.TELLO_UP_SHOW+" [20-500]","up"],	
		[Blockly.Msg.TELLO_DOWN_SHOW+" [20-500]","down"],	
		[Blockly.Msg.TELLO_LEFT_SHOW+" [20-500])","left"],	
		[Blockly.Msg.TELLO_RIGHT_SHOW+" [20-500]","right"],	
		[Blockly.Msg.TELLO_FORWARD_SHOW+" [20-500]","forward"],
		[Blockly.Msg.TELLO_BACK_SHOW+" [20-500]","back"],	
		[Blockly.Msg.TELLO_CW_SHOW+" [1-360]","cw"],	
		[Blockly.Msg.TELLO_CCW_SHOW+" [1-360]","ccw"],	
		[Blockly.Msg.TELLO_FLIP_SHOW+" [l/r/f/b]","flip"],	
		[Blockly.Msg.TELLO_SPEED_SHOW+" [10-100]","speed"],
		[Blockly.Msg.TELLO_MDIRECTION_SHOW+" [0/1/2]","mdirection"]
  ]), "cmd_"); 
  this.appendValueInput("val_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_VALUE_SHOW); 
  this.appendValueInput("delaytime_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_DELAYTIME_SHOW);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_cmd3'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
      .appendField(Blockly.Msg.TELLO_CMD_SHOW)
      .appendField(new Blockly.FieldDropdown([	
		[Blockly.Msg.TELLO_GO_SHOW+" (x y z speed)","go"],
		[Blockly.Msg.TELLO_CURVE_SHOW+" (x1 y1 z1 x2 y2 z2 speed)","curve"],
		[Blockly.Msg.TELLO_JUMP_SHOW+" (x y z speed yaw mid1 mid2)","jump"],	
		[Blockly.Msg.TELLO_RC_SHOW+" (a b c d)[-100-100]","rc"]
  ]), "cmd_"); 
  this.appendValueInput("val_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_VALUE_SHOW); 
  this.appendValueInput("delaytime_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_DELAYTIME_SHOW);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};