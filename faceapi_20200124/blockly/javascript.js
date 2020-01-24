Blockly.JavaScript['faceapi_face'] = function(block) { 
  var value_face_ = Blockly.JavaScript.valueToCode(block, 'face_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'faceapi_face(' + value_face_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faceapi_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_showvideo_ = block.getFieldValue('showvideo_');
  var value_result_ = block.getFieldValue('result_');
  var code = 'faceapi_video(' + value_width_ + ',' + value_height_ + ',"' + value_showvideo_ + '","' + value_result_ + '");\n';
  return code;
};