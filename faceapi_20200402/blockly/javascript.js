Blockly.JavaScript['faceapi_recognition_video'] = function(block) { 
  var value_result = block.getFieldValue('result'); 
  var value_timer = Blockly.JavaScript.valueToCode(block, 'timer', Blockly.JavaScript.ORDER_ATOMIC);
  var value_modelpath = Blockly.JavaScript.valueToCode(block, 'modelpath', Blockly.JavaScript.ORDER_ATOMIC);
  var value_faceimagepath = Blockly.JavaScript.valueToCode(block, 'faceimagepath', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facelabel = Blockly.JavaScript.valueToCode(block, 'facelabel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_faceimagecount = Blockly.JavaScript.valueToCode(block, 'faceimagecount', Blockly.JavaScript.ORDER_ATOMIC);
  var value_distancelimit = Blockly.JavaScript.valueToCode(block, 'distancelimit', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'faceapi_recognition_video("' + value_result + '",' + value_timer + ',' + value_modelpath + ',' + value_faceimagepath + ',' + value_facelabel + ',' + value_faceimagecount + ',' + value_distancelimit + ');\n';
  return code;
};

Blockly.JavaScript['faceapi_recognition_detect'] = function(block) { 
  var code = 'faceapi_recognition_detect();\n';
  return code;
};

Blockly.JavaScript['faceapi_recognition_number'] = function(block) { 
  var code = 'faceapi_recognition_number()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faceapi_recognition_get'] = function(block) {
  var index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);	
  var column = block.getFieldValue('column');
  var code = 'faceapi_recognition_get('+index+',"'+column+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faceapi_recognition_clear'] = function(block) { 
  var code = 'faceapi_recognition_clear();\n';
  return code;
};

Blockly.JavaScript['faceapi_recognition_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'faceapi_recognition_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};