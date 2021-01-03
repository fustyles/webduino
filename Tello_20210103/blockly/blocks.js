Blockly.Blocks['tello_basic'] = {
  init: function() {
  this.appendValueInput("ip_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TELLO_SHOW)	  
      .appendField(Blockly.Msg.IP_SHOW);
  this.appendDummyInput() 
      .appendField(Blockly.Msg.COMMAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["command","command"],	  
		["takeoff","takeoff"],
		["land","land"],
		["emergency","emergency"],		
		["up [20-500]","up"],	
		["down [20-500]","down"],	
		["left [20-500])","left"],	
		["right [20-500]","right"],	
		["forward [20-500]","forward"],
		["back [20-500]","back"],	
		["cw [1-360]","cw"],	
		["ccw [1-360]","ccw"],	
		["flip (l/r/f/b)","flip"],	
		["go (x y z speed)","go"],	
		["stop","stop"],	
		["curve (x1 y1 z1 x2 y2 z2 speed)","curve"],
		["jump (x y z speed yaw mid1 mid2)","jump"],	
		["speed [10-100]","speed"],	
		["rc (a b c d)[-100-100]","rc"],	
		["wifi (ssid pass)","wifi"],	
		["mon","mon"],	
		["moff","moff"],	
		["mdirection[0/1/2]","mdirection"],
		["ap (ssid pass)","ap"],			
  ]), "command_"); 
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