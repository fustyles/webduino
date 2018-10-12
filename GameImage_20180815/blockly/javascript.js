Blockly.JavaScript['image_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'image_create(' + value_id_ + ',' + value_url_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['image_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'image_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['image_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_delete'] = function(block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'image_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['image_collision'] = function (block) {
  var value_id1_ = Blockly.JavaScript.valueToCode(block, 'id1_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_id2_ = Blockly.JavaScript.valueToCode(block, 'id2_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'image_collision(' + value_id1_ + ',' + value_id2_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_boundary'] = function (block) {
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'image_boundary(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['image_boundary_collision'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_boundary_collision(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_sys_get'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_sys_get("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_onclick_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'image_onclick_get(' + value_id_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mouse_coordinate_get'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var code = 'mouse_coordinate_get("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['document_timer'] = function (block) {
  var variable_fuTimer_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuTimer_'), Blockly.Variables.NAME_TYPE);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_fuTimer_+' = setInterval(function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer_once'] = function (block) {
  var variable_fuTimerOnce_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuTimerOnce_'), Blockly.Variables.NAME_TYPE);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_fuTimerOnce_+' = setTimeout(function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer_stop'] = function (block) {
  var variable_fuTimer_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuTimer_'), Blockly.Variables.NAME_TYPE);
  var code = 'clearInterval(' + variable_fuTimer_ + ');\n';
  return code;
};
