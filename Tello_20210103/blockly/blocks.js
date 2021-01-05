Blockly.Blocks['tello_initial'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 	  
	  .appendField(Blockly.Msg.TELLO_INITIAL_SHOW);
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
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(new Blockly.FieldDropdown([	
		[Blockly.Msg.TELLO_WIFIMODE_SHOW,"wifi"],
		[Blockly.Msg.TELLO_APMODE_SHOW,"ap"]
  ]), "cmd_"); 
  this.appendValueInput("ssid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SSID_SHOW); 
  this.appendValueInput("pass_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_PASS_SHOW);	  	
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(20);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_iframe1'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(new Blockly.FieldDropdown([	  
		[Blockly.Msg.TELLO_TAKEOFF_SHOW,"takeoff"],
		[Blockly.Msg.TELLO_LAND_SHOW,"land"],
		[Blockly.Msg.TELLO_EMERGENCY_SHOW,"emergency"],	
		[Blockly.Msg.TELLO_STOP_SHOW,"stop"],
		[Blockly.Msg.TELLO_MON_SHOW,"mon"],	
		[Blockly.Msg.TELLO_MOFF_SHOW,"moff"],
		[Blockly.Msg.TELLO_COMMAND_SHOW,"command"]		
  ]), "cmd_"); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(70);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_iframe2'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
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
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(80);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_iframe3'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.TELLO_GO_SHOW); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("x [-500-500]"); 
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y [-500-500]");
  this.appendValueInput("z_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("z [-500-500]");
  this.appendValueInput("speed_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SPEED_SHOW+" [10-100]");
  this.appendValueInput("mid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_MID_SHOW+" m[-1/-2/1-8]");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_iframe4'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.TELLO_CURVE_SHOW); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("x1 [-500-500]"); 
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y1 [-500-500]");
  this.appendValueInput("z1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("z1 [-500-500]");
  this.appendValueInput("x2_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("x2 [-500-500]"); 
  this.appendValueInput("y2_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y2 [-500-500]");
  this.appendValueInput("z2_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("z2 [-500-500]");
  this.appendValueInput("speed_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SPEED_SHOW+" [10-100]");
  this.appendValueInput("mid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_MID_SHOW+" m[-1/-2/1-8]");	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_iframe5'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.TELLO_JUMP_SHOW); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("x [-500-500]"); 
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y [-500-500]");
  this.appendValueInput("z_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("z [-500-500]");
  this.appendValueInput("speed_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SPEED_SHOW+" [10-100]");
  this.appendValueInput("yaw_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_YAW_SHOW+" [1-360]"); 
  this.appendValueInput("mid1_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_MID_SHOW+"1 m[-1/-2/1-8]");
  this.appendValueInput("mid2_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_MID_SHOW+"2 m[-1/-2/1-8]");	  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_iframe6'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.TELLO_RC_SHOW); 
  this.appendValueInput("a_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_A_SHOW+" [-100-100]"); 
  this.appendValueInput("b_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_B_SHOW+" [-100-100]");
  this.appendValueInput("c_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_C_SHOW+" [-100-100]");
  this.appendValueInput("d_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_D_SHOW+" [-100-100]");
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};

Blockly.Blocks['tello_request'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.TELLO_IP_SHOW);
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.TELLO_REQUEST_SHOW)
	  .appendField(new Blockly.FieldVariable("tello_response"), "tello_response")
      .appendField(" = ");	  
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(new Blockly.FieldDropdown([	  
		[Blockly.Msg.TELLO_SPEED_SHOW,"speed?"],
		[Blockly.Msg.TELLO_BATTERY_SHOW,"battery?"],
		[Blockly.Msg.TELLO_TIME_SHOW,"time?"],	
		[Blockly.Msg.TELLO_WIFI_SHOW,"wifi?"],
		[Blockly.Msg.TELLO_SDK_SHOW,"sdk?"],	
		[Blockly.Msg.TELLO_SN_SHOW,"sn?"],	
		[Blockly.Msg.TELLO_STATE_SHOW,""]		
  ]), "state_");
  this.appendValueInput("delaytime_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_DELAYTIME_SHOW);  
  this.setInputsInline(true);  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(40);
  this.setHelpUrl('https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello_SDK_2.0_%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf');
  }
};