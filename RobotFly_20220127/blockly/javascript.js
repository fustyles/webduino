var robotfly_variable = {"roll":1500,"pitch":1500,"yaw":1500,"throttle":1500,"roll_calibration":0,"pitch_calibration":0,"yaw_calibration":0,"throttle_calibration":0,"constantheight_calibration":0,"takeoff":1800,"land":1400};

Blockly.JavaScript['robotfly_initial'] = function(block) {
  robotfly_variable["roll"] = Math.floor(Number(Blockly.JavaScript.valueToCode(block, 'roll_', Blockly.JavaScript.ORDER_ATOMIC))+robotfly_variable["roll_calibration"]);   //左右roll: 1500+-500
  robotfly_variable["pitch"] = Math.floor(Number(Blockly.JavaScript.valueToCode(block, 'pitch_', Blockly.JavaScript.ORDER_ATOMIC))+robotfly_variable["pitch_calibration"]);   //前後pitch: 1500+-500
  robotfly_variable["yaw"] = Math.floor(Number(Blockly.JavaScript.valueToCode(block, 'yaw_', Blockly.JavaScript.ORDER_ATOMIC))+robotfly_variable["yaw_calibration"]);   //水平旋轉yaw: 1500+-500
  robotfly_variable["throttle"] = Math.floor(Number(Blockly.JavaScript.valueToCode(block, 'throttle_', Blockly.JavaScript.ORDER_ATOMIC))+robotfly_variable["throttle_calibration"]);   //垂直升降throttle: 1000+-1000

  var code = "";
  return code;
};

Blockly.JavaScript['robotfly_command1'] = function(block) {
  robotfly_variable["roll_calibration"] = Math.floor(Number(Blockly.JavaScript.valueToCode(block, 'roll_', Blockly.JavaScript.ORDER_ATOMIC)));
  robotfly_variable["pitch_calibration"] = Math.floor(Number(Blockly.JavaScript.valueToCode(block, 'pitch_', Blockly.JavaScript.ORDER_ATOMIC)));
  robotfly_variable["yaw_calibration"] = Math.floor(Number(Blockly.JavaScript.valueToCode(block, 'yaw_', Blockly.JavaScript.ORDER_ATOMIC)));
  robotfly_variable["throttle_calibration"] = Math.floor(Number(Blockly.JavaScript.valueToCode(block, 'throttle_', Blockly.JavaScript.ORDER_ATOMIC))); 

  var code = "";
  return code;
};

Blockly.JavaScript['robotfly_command2'] = function(block) {
  var value_func = block.getFieldValue('func_');
  var code = "";
  if (value_func =="unlock")
    code = "'0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xd0,0x07,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xe4'";
  else if (value_func =="lock")
    code = "'0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xe8,0x03,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xd8'"
  else if (value_func =="takeoff")
    code = robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["takeoff"]);
  else if (value_func =="land")
    code = robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["land"]);
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['robotfly_command3'] = function(block) {
  var value_func = block.getFieldValue('func_');
  var code = "";
  if (value_func =="forward")
    code = robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"]+100, robotfly_variable["yaw"], robotfly_variable["throttle"]);
  else if (value_func =="backward")
    code = robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"]-100, robotfly_variable["yaw"], robotfly_variable["throttle"]);
  else if (value_func =="left")
    code = robotfly_command(robotfly_variable["roll"]+100, robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["throttle"]);
  else if (value_func =="right")
    code = robotfly_command(robotfly_variable["roll"]-100, robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["throttle"]);
  else if (value_func =="up")
    code = 	robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["takeoff"]);
  else if (value_func =="down")
    code = 	robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["land"]);	
  else if (value_func =="stop")
    code = 	robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["throttle"]);			
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['robotfly_command4'] = function(block) {
  var value_distance = Blockly.JavaScript.valueToCode(block, 'distance_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "await delay("+(value_distance/50)+", true);";
  return code;
};

function robotfly_command(value_roll, value_pitch, value_yaw, value_throttle) {
  var roll0=value_roll%256;
  roll0="0x"+(roll0.toString(16).length==2?"":"0")+roll0.toString(16);
  var roll1=Math.floor(value_roll/256);
  roll1="0x"+(roll1.toString(16).length==2?"":"0")+roll1.toString(16);

  var pitch0=value_pitch%256;
  pitch0="0x"+(pitch0.toString(16).length==2?"":"0")+pitch0.toString(16);
  var pitch1=Math.floor(value_pitch/256);
  pitch1="0x"+(pitch1.toString(16).length==2?"":"0")+pitch1.toString(16);

  var yaw0=value_yaw%256;
  yaw0="0x"+(yaw0.toString(16).length==2?"":"0")+yaw0.toString(16);
  var yaw1=Math.floor(value_yaw/256);
  yaw1="0x"+(yaw1.toString(16).length==2?"":"0")+yaw1.toString(16);

  var throttle0=value_throttle%256;
  throttle0="0x"+(throttle0.toString(16).length==2?"":"0")+throttle0.toString(16);
  var throttle1=Math.floor(value_throttle/256);
  throttle1="0x"+(throttle1.toString(16).length==2?"":"0")+throttle1.toString(16);

  var crc = 0x10^0xC8^roll0^roll1^pitch0^pitch1^yaw0^yaw1^throttle0^throttle1^0xDC^0x05^0xDC^0x05^0xDC^0x05^0xDC^0x05;
  crc = "0x"+(crc.toString(16).length==2?"":"0")+crc.toString(16);

  return "'0x24,0x4d,0x3c,0x10,0xc8,"+roll0+","+roll1+","+pitch0+","+pitch1+","+yaw0+","+yaw1+","+throttle0+","+throttle1+",0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,"+crc+"'";
}
