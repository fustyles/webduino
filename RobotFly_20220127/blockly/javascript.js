Blockly.JavaScript['robotfly_initial'] = function(block) {
  var roll = Blockly.JavaScript.valueToCode(block, 'roll_', Blockly.JavaScript.ORDER_ATOMIC);   //左右roll: 1500+-500
  var pitch = Blockly.JavaScript.valueToCode(block, 'pitch_', Blockly.JavaScript.ORDER_ATOMIC);   //前後pitch: 1500+-500
  var yaw = Blockly.JavaScript.valueToCode(block, 'yaw_', Blockly.JavaScript.ORDER_ATOMIC);   //水平旋轉yaw: 1500+-500
  var throttle = Blockly.JavaScript.valueToCode(block, 'throttle_', Blockly.JavaScript.ORDER_ATOMIC);   //垂直升降throttle: 1000+-1000

  var code = "robotfly_initial("+roll+","+pitch+","+yaw+","+throttle+");\n";
  return code;
};

Blockly.JavaScript['robotfly_command1'] = function(block) {
  var roll_calibration = Blockly.JavaScript.valueToCode(block, 'roll_', Blockly.JavaScript.ORDER_ATOMIC);
  var pitch_calibration = Blockly.JavaScript.valueToCode(block, 'pitch_', Blockly.JavaScript.ORDER_ATOMIC);
  var yaw_calibration = Blockly.JavaScript.valueToCode(block, 'yaw_', Blockly.JavaScript.ORDER_ATOMIC);
  var throttle_calibration = Blockly.JavaScript.valueToCode(block, 'throttle_', Blockly.JavaScript.ORDER_ATOMIC); 

  var code = "robotfly_calibration("+roll_calibration+","+pitch_calibration+","+yaw_calibration+","+throttle_calibration+");\n";
  return code;
};

Blockly.JavaScript['robotfly_command2'] = function(block) {
  var value_func = block.getFieldValue('func_');
  var code = "robotfly_basic('"+value_func+"')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['robotfly_command3'] = function(block) {
  var value_func = block.getFieldValue('func_');
  var code = "robotfly_move('"+value_func+"')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['robotfly_command4'] = function(block) {
  var value_func = block.getFieldValue('func_');
  var value_distance = Blockly.JavaScript.valueToCode(block, 'distance_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "await delay(robotfly_distance('"+value_func+"')*"+value_distance+"/50, true);\n";
  return code;
};

Blockly.JavaScript['robotfly_command5'] = function(block) {
  var value_func = block.getFieldValue('func_');
  var value_val = Blockly.JavaScript.valueToCode(block, 'val_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "robotfly_set('"+value_func+"',"+value_val+");\n";
  return code;
};

Blockly.JavaScript['robotfly_command6'] = function(block) {
  var value_func = block.getFieldValue('func_');
  var code = "robotfly_get('"+value_func+"')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['robotfly_command7'] = function(block) {
  var value_val = Blockly.JavaScript.valueToCode(block, 'val_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "robotfly_throttle("+value_val+")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};
