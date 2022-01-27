Blockly.JavaScript['webserial_button'] = function(block) {
  var value_id = block.getFieldValue('id_');  
  var value_show = block.getFieldValue('show_');
  var code = 'webserial_button("'+value_id+'","'+value_show+'");\n';
  return code;
};

Blockly.JavaScript['webserial_button_position'] = function(block) { 
  var value_id = block.getFieldValue('id_');   
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'webserial_button_position("'+value_id+'",' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['webserial_sendtext'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_end = block.getFieldValue('end_');
  var code = 'webserial_sendText('+value_cmd+',"'+value_end+'");\n';
  return code;
};

Blockly.JavaScript['webserial_senduint8'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'webserial_sendUint8('+value_cmd+');\n';
  return code;
};

Blockly.JavaScript['webserial_get'] = function(block) {
  var code = 'webserial_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webserial_getstate'] = function(block) {
  var code = 'webserial_getState()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webserial_clear'] = function(block) { 
  var code = 'webserial_clear();\n';
  return code;
};

Blockly.JavaScript['webserial_baudrate'] = function(block) {
  var value_baudrate = block.getFieldValue('baudrate_');
  var code = 'webserial_baudrate('+value_baudrate+');\n';
  return code;
};

Blockly.JavaScript['webserial_getid'] = function(block) {
  var code = "'"+block.getFieldValue('id_')+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webserial_robotfly'] = function(block) {
  var value_roll = Blockly.JavaScript.valueToCode(block, 'roll_', Blockly.JavaScript.ORDER_ATOMIC);   //左右roll: 1500+-500
  var value_pitch = Blockly.JavaScript.valueToCode(block, 'pitch_', Blockly.JavaScript.ORDER_ATOMIC);   //前後pitch: 1500+-500
  var value_yaw = Blockly.JavaScript.valueToCode(block, 'yaw_', Blockly.JavaScript.ORDER_ATOMIC);   //水平旋轉yaw: 1500+-500
  var value_throttle = Blockly.JavaScript.valueToCode(block, 'throttle_', Blockly.JavaScript.ORDER_ATOMIC);   //垂直升降throttle: 1000+-1000

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

  var code = "'0x24,0x4d,0x3c,0x10,0xc8,"+roll0+","+roll1+","+pitch0+","+pitch1+","+yaw0+","+yaw1+","+throttle0+","+throttle1+",0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,"+crc+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webserial_robotfly_lock'] = function(block) {
  var value_lock = block.getFieldValue('lock_');
  var code;
  if (value_lock=="1")
    code = "'0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xE8,0x03,0xE8,0x03,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8'";
  else
    code = "'0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xD0,0x07,0xE8,0x03,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE4'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};
