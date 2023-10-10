Blockly.JavaScript['faceapirecognize_video'] = function(block) { 
  var value_result = block.getFieldValue('result_');
  var value_opacity = block.getFieldValue('opacity_');  
  var value_timer = Blockly.JavaScript.valueToCode(block, 'timer', Blockly.JavaScript.ORDER_ATOMIC);
  var value_faceimagepath = Blockly.JavaScript.valueToCode(block, 'faceimagepath', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facelabel = Blockly.JavaScript.valueToCode(block, 'facelabel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_faceimagecount = Blockly.JavaScript.valueToCode(block, 'faceimagecount', Blockly.JavaScript.ORDER_ATOMIC);
  var value_distancelimit = Blockly.JavaScript.valueToCode(block, 'distancelimit', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'faceapirecognize_video("' + value_result + '","' + value_opacity + '",' + value_timer + ',' + value_faceimagepath + ',' + value_facelabel + ',' + value_faceimagecount + ',' + value_distancelimit + ');\n';
  return code;
};

Blockly.JavaScript['faceapirecognize_video_one'] = function(block) { 
  var value_result = block.getFieldValue('result_');
  var value_opacity = block.getFieldValue('opacity_');  
  var value_timer = Blockly.JavaScript.valueToCode(block, 'timer', Blockly.JavaScript.ORDER_ATOMIC);
  var value_faceimagepath = Blockly.JavaScript.valueToCode(block, 'faceimagepath', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facelabel = Blockly.JavaScript.valueToCode(block, 'facelabel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_distancelimit = Blockly.JavaScript.valueToCode(block, 'distancelimit', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'faceapirecognize_video("' + value_result + '","' + value_opacity + '",' + value_timer + ',' + value_faceimagepath + ',' + value_facelabel + ',0,' + value_distancelimit + ');\n';
  return code;
};

Blockly.JavaScript['faceapirecognize_video_capture'] = function(block) {
  var value_faceimagecount = Blockly.JavaScript.valueToCode(block, 'faceimagecount', Blockly.JavaScript.ORDER_ATOMIC);	
  var value_result = block.getFieldValue('result_');
  var value_opacity = block.getFieldValue('opacity_');  
  var value_timer = Blockly.JavaScript.valueToCode(block, 'timer', Blockly.JavaScript.ORDER_ATOMIC);
  var value_distancelimit = Blockly.JavaScript.valueToCode(block, 'distancelimit', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'faceapirecognize_video("' + value_result + '","' + value_opacity + '",' + value_timer + ',"" ,"" ,'+value_faceimagecount*(-1)+',' + value_distancelimit + ');\n';
  return code;
};

Blockly.JavaScript['faceapirecognize_detect'] = function(block) { 
  var code = 'faceapirecognize_detect();\n';
  return code;
};

Blockly.JavaScript['faceapirecognize_number'] = function(block) { 
  var code = 'faceapirecognize_number()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faceapirecognize_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'faceapirecognize_state(' + value_state_ + ');\n';
  return code;
};

Blockly.JavaScript['faceapirecognize_get'] = function(block) {
  var index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);	
  var column = block.getFieldValue('column');
  var code = 'faceapirecognize_get('+index+',"'+column+'")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faceapirecognize_unknown'] = function(block) {
  var index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '(faceapirecognize_get('+index+',"name")=="unknown")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faceapirecognize_clear'] = function(block) { 
  var code = 'faceapirecognize_clear();\n';
  return code;
};

Blockly.JavaScript['faceapirecognize_video_position'] = function(block) { 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'faceapirecognize_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['faceapirecognize_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'faceapirecognize_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.JavaScript['faceapirecognize_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'faceapirecognize_startvideo_stream(' + value_src_ + ');\n';
  return code;
};

Blockly.JavaScript['faceapirecognize_canvas_get'] = function(block) { 
  var code = '"faceapirecognize"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['faceapirecognize_recognitied'] = function(block) { 
  var value_status = block.getFieldValue('status_');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  
  if (value_status=="Y")
	  var code = 'faceapirecognize_recognitionFinish = async function() {\n  faceapirecognize_state(0);\n' + statements_do + '\n  faceapirecognize_state(1);\n};\n';
  else
	  var code = 'faceapirecognize_unrecognitionFinish = async function() {\n  faceapirecognize_state(0);\n' + statements_do + '\n  faceapirecognize_state(1);\n};\n';
  return code;   
};