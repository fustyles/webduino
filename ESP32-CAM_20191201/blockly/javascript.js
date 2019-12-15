Blockly.JavaScript['esp32cam_system'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmd = block.getFieldValue('cmd');
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "esp32cam_sendCommand("+value_url+",'"+value_cmd+"',"+value_P1+","+value_P2+",'','','','','','','');\n";
  return code;
};

Blockly.JavaScript['esp32cam_getstill'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "esp32cam_getstill("+value_url+");\n";
  return code;
};

Blockly.JavaScript['esp32cam_stream'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '"<img id=\'gameimage_stream\' src='+value_url+'>"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['esp32cam_custom'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_P1.toLowerCase().indexOf("0x")!=-1) {
    if ((value_P1.indexOf("'")==0)&&(value_P1.lastIndexOf("'")==value_P1.length-1))
    value_P1 = value_P1.substring(1,value_P1.length-1);
    if ((value_P1.indexOf("(")==0)&&(value_P1.lastIndexOf(")")==value_P1.length-1))
      value_P1 = value_P1.substring(1,value_P1.length-1);
    value_P1=parseInt(value_P1, 16);
  }
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P3 = Blockly.JavaScript.valueToCode(block, 'P3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P4 = Blockly.JavaScript.valueToCode(block, 'P4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P5 = Blockly.JavaScript.valueToCode(block, 'P5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P6 = Blockly.JavaScript.valueToCode(block, 'P6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P7 = Blockly.JavaScript.valueToCode(block, 'P7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P8 = Blockly.JavaScript.valueToCode(block, 'P8', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P9 = Blockly.JavaScript.valueToCode(block, 'P9', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "esp32cam_sendCommand("+value_url+","+value_cmd+","+value_P1+","+value_P2+","+value_P3+","+value_P4+","+value_P5+","+value_P6+","+value_P7+","+value_P8+","+value_P9+");\n";
  return code;
};

Blockly.JavaScript['esp32cam_car'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_state = block.getFieldValue('state');
  var code = "esp32cam_sendCommand("+value_url+",'car','"+value_state+"','stop','','','','','','','');\n";
  return code;
};

Blockly.JavaScript['esp32cam_getangle'] = function(block) {
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "esp32cam_getAngle("+value_angle+")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['esp32cam_getresponse'] = function(block) {
  var code = "esp32cam_getResponse()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['esp32cam_cmd'] = function(block) {
  var value_cmd = block.getFieldValue('cmd');
  var code = "'"+value_cmd+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['esp32cam_clearresponse'] = function(block) {
  var code = "esp32cam_clearData();\n";
  return code;
};

Blockly.JavaScript['esp32cam_iframe'] = function (block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_= Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'esp32cam_iframe(' + value_url + ','+ value_width + ',' + value_height + ',' + value_left + ',' + value_top_ + ',' + value_zindex + ');\n';
  return code;
};
