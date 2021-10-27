Blockly.Arduino['table_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.Arduino.valueToCode(block, 'borderwidth_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.Arduino.valueToCode(block, 'bordercolor_', Blockly.Arduino.ORDER_ATOMIC);
  var value_trcount_ = Blockly.Arduino.valueToCode(block, 'trcount_', Blockly.Arduino.ORDER_ATOMIC);
  var value_tdcount_ = Blockly.Arduino.valueToCode(block, 'tdcount_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_bgcolor_ = Blockly.Arduino.valueToCode(block, 'bgcolor_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'table_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_trcount_ + ',' + value_tdcount_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_bgcolor_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['table_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['table_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['table_clear'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_clear(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['table_change_colsrows'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_target_ = block.getFieldValue('target_');
  var value_cmd_ = block.getFieldValue('cmd_');  
  var value_index_ = Blockly.Arduino.valueToCode(block, 'index_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_change_colsrows(' + value_id_ + ',"'+ value_target_ + '","' + value_cmd_ + '",' + value_index_+ ');\n'
  return code;
};

Blockly.Arduino['table_td_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['table_border_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.Arduino.valueToCode(block, 'borderwidth_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.Arduino.valueToCode(block, 'bordercolor_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_border_set(' + value_id_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  return code;
};

Blockly.Arduino['table_td_border_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.Arduino.valueToCode(block, 'borderwidth_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.Arduino.valueToCode(block, 'bordercolor_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_border_set(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  return code;
};

Blockly.Arduino['table_td_insert_img'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_imgid_ = Blockly.Arduino.valueToCode(block, 'imgid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);   
  var code = 'table_td_insert_img(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',' + value_imgid_ + ',' + value_url_ + ',' + value_width_ + ',' + value_height_ + ');\n';
  return code;
};

Blockly.Arduino['table_td_img_move'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_imgid_ = Blockly.Arduino.valueToCode(block, 'imgid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_img_move(' + value_id_ + ','+ value_imgid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.Arduino['table_td_canvas_move'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_canvasid_ = Blockly.Arduino.valueToCode(block, 'canvasid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_canvas_move(' + value_id_ + ','+ value_canvasid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.Arduino['table_td_copy_move'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  if (value_property_=="copy")
    var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ','+ value_y_ + ',"innerHTML",(table_td_get(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML")));\n';
  else if (value_property_=="move")
    var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ','+ value_y_ + ',"innerHTML",(table_td_get(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML")));\ntable_td_set(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML","");\n'; 
  return code;
};

Blockly.Arduino['table_td_img_get'] = function (block) {
  var value_imgid_ = Blockly.Arduino.valueToCode(block, 'imgid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_td_img_get('+ value_imgid_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['table_td_insert_text'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_text_ = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontname_ = Blockly.Arduino.valueToCode(block, 'fontname_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_insert_text(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',' + value_text_+ ',' + value_fontname_ + ',' + value_fontsize_ + ',' + value_color_+ ');\n';
  return code;
};

Blockly.Arduino['table_td_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_td_get(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"' + value_property_+ '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['table_td_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);  
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'if ((table_get(' + value_id_ + ',"onclick[Column,Row]")) == "'+ value_x_ + ',' + value_y_ + '") {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.Arduino['table_td_clear'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_clear(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.Arduino['table_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['music_create'] = function (block) {
  var value_url = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var value_length = Blockly.Arduino.valueToCode(block, 'length_', Blockly.Arduino.ORDER_ATOMIC);
  var value_loop = Blockly.Arduino.valueToCode(block, 'loop_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_loop=="true")&&(value_length>0))
    var code = 'music_create(' + value_url + ');\nvar musicTimer = setInterval(function(){\nmusic_create(' + value_url + ');},' + value_length + ');\n';
  else if ((value_loop=="false")&&(value_length>0))
    var code = 'music_create(' + value_url + ');\nvar musicTimer = setTimeout(function(){\nmusic_delete();},' + value_length + ');\n';
  else
    var code = 'music_create(' + value_url + ');\n';
  return code;
};

Blockly.Arduino['music_delete'] = function (block) {
  var code = 'clearInterval(musicTimer);\nmusic_delete();\n';
  return code;
};

Blockly.Arduino['canvas_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);   
  var code = 'canvas_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'canvas_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'canvas_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['canvas_line'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.Arduino.valueToCode(block, 'linewidth_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1_ = Blockly.Arduino.valueToCode(block, 'x1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1_ = Blockly.Arduino.valueToCode(block, 'y1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'canvas_line(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_x1_ + ',' + value_y1_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_rect'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.Arduino.valueToCode(block, 'linewidth_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fill_ = Blockly.Arduino.valueToCode(block, 'fill_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_rect(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_arc'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.Arduino.valueToCode(block, 'linewidth_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_r_ = Blockly.Arduino.valueToCode(block, 'r_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sAngle_ = Blockly.Arduino.valueToCode(block, 'sAngle_', Blockly.Arduino.ORDER_ATOMIC);
  var value_eAngle_ = Blockly.Arduino.valueToCode(block, 'eAngle_', Blockly.Arduino.ORDER_ATOMIC);
  var value_counterclockwise_ = Blockly.Arduino.valueToCode(block, 'counterclockwise_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fill_ = Blockly.Arduino.valueToCode(block, 'fill_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_arc(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_r_ + ',' + value_sAngle_ + ',' + value_eAngle_ + ',' + value_counterclockwise_ + ',' + value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_img_url'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'canvas_img_url("' + value_source_ + '",' + value_url_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_img'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sx_ = Blockly.Arduino.valueToCode(block, 'sx_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sy_ = Blockly.Arduino.valueToCode(block, 'sy_', Blockly.Arduino.ORDER_ATOMIC);
  var value_swidth_ = Blockly.Arduino.valueToCode(block, 'swidth_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sheight_ = Blockly.Arduino.valueToCode(block, 'sheight_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_img(' + value_id_ + ',' + value_sx_ + ',' + value_sy_ + ',' + value_swidth_ + ','+ value_sheight_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_capturevideo'] = function (block) {
  var value_canvasid_ = Blockly.Arduino.valueToCode(block, 'canvasid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_videoid_ = Blockly.Arduino.valueToCode(block, 'videoid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sx_ = Blockly.Arduino.valueToCode(block, 'sx_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sy_ = Blockly.Arduino.valueToCode(block, 'sy_', Blockly.Arduino.ORDER_ATOMIC);
  var value_swidth_ = Blockly.Arduino.valueToCode(block, 'swidth_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sheight_ = Blockly.Arduino.valueToCode(block, 'sheight_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_capturevideo(' + value_canvasid_ + ',' + value_videoid_ + ',' + value_sx_ + ',' + value_sy_ + ',' + value_swidth_ + ','+ value_sheight_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_text'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_text_ = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_fontname_ = Blockly.Arduino.valueToCode(block, 'fontname_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_textalign_ = block.getFieldValue('textalign_');
  var value_fill_ = Blockly.Arduino.valueToCode(block, 'fill_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_text(' + value_id_ + ',' + value_text_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_fontname_ + ','+ value_fontsize_ + ',"' + value_textalign_ + '",'+ value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_quadraticcurve'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp1x_ = Blockly.Arduino.valueToCode(block, 'cp1x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp1y_ = Blockly.Arduino.valueToCode(block, 'cp1y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_linewidth_ = Blockly.Arduino.valueToCode(block, 'linewidth_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fill_ = Blockly.Arduino.valueToCode(block, 'fill_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_quadraticcurve(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ','+ value_cp1x_ + ',' + value_cp1y_ + ',' + value_x_ + ',' + value_y_ + ',' + value_linewidth_ + ',' + value_color_ + ',' + value_fill_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_beziercurve'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp1x_ = Blockly.Arduino.valueToCode(block, 'cp1x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp1y_ = Blockly.Arduino.valueToCode(block, 'cp1y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp2x_ = Blockly.Arduino.valueToCode(block, 'cp2x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp2y_ = Blockly.Arduino.valueToCode(block, 'cp2y_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_linewidth_ = Blockly.Arduino.valueToCode(block, 'linewidth_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fill_ = Blockly.Arduino.valueToCode(block, 'fill_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_beziercurve(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ','+ value_cp1x_ + ',' + value_cp1y_ + ','+ value_cp2x_ + ',' + value_cp2y_ + ',' + value_x_ + ',' + value_y_ + ',' + value_linewidth_ + ',' + value_color_ + ',' + value_fill_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_clearrect'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'canvas_clearrect(' + value_id_ + ',' + value_x_ + ','+ value_y_ + ',' + value_width_ + ',' + value_height_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_clear'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'canvas_clear(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'canvas_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'if (canvas_onclick_get(' + value_id_ + ')==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.Arduino['canvas_onclick_dom'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamecanvas_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamecanvas_'+value_id_+'").addEventListener("click", gamecanvas_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['canvas_onclick_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'canvas_onclick_get(' + value_id_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['canvas_getcolor'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'canvas_getcolor(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['canvas_getimagedata'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'canvas_getimagedata(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ',' + value_width_ + ',' + value_height_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['canvas_setimagedata'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_data_ = Blockly.Arduino.valueToCode(block, 'data_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'canvas_setimagedata(' + value_id_ + ',' + value_data_ + ',' + value_x0_ + ',' + value_y0_ + ');\n';
  return code;
};

Blockly.Arduino['image_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'image_create(' + value_id_ + ',' + value_url_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['image_create_stream'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'image_create_stream(' + value_id_ + ',' + value_url_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['image_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'image_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['image_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_delete'] = function(block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'image_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['elements_collision'] = function (block) {
  var value_element1_ = block.getFieldValue('element1_');
  var value_id1_ = Blockly.Arduino.valueToCode(block, 'id1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_element2_ = block.getFieldValue('element2_');
  var value_id2_ = Blockly.Arduino.valueToCode(block, 'id2_', Blockly.Arduino.ORDER_ATOMIC);
  var value_position_ = block.getFieldValue('position_');

  var obj1= 'game'+value_element1_+'_';    
  var obj2= 'game'+value_element2_+'_'; 

  var code = 'elements_collision("'+obj1+'",' + value_id1_ + ',"'+obj2+'",' + value_id2_ + ',"' + value_position_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['elements_collision_color'] = function (block) {
  var value_element1_ = block.getFieldValue('element1_');
  var value_id1_ = Blockly.Arduino.valueToCode(block, 'id1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_id2_ = Blockly.Arduino.valueToCode(block, 'id2_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);

  var obj1= 'game'+value_element1_+'_'; 

  var code = 'elements_collision_color("'+obj1+'",' + value_id1_ + ',' + value_id2_ + ',' + value_color_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_collision'] = function (block) {
  var value_id1_ = Blockly.Arduino.valueToCode(block, 'id1_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_id2_ = Blockly.Arduino.valueToCode(block, 'id2_', Blockly.Arduino.ORDER_ATOMIC);
  var value_position_ = block.getFieldValue('position_');
  var code = 'image_collision(' + value_id1_ + ',' + value_id2_ + ',"' + value_position_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_boundary'] = function (block) {
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'image_boundary(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.Arduino['image_boundary_collision'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_boundary_collision(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_boundary_collision_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'if (image_boundary_collision('+value_id_+',"'+value_property_+'")==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.Arduino['image_sys_get'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_sys_get("' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_onclick_listener'] = function (block) {
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'setInterval(async function(){\n' + statements_do_ + '},10);\n';
  return code;
};

Blockly.Arduino['image_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'if (image_onclick_get(' + value_id_ + ')==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.Arduino['image_onclick_dom'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gameimage_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameimage_'+value_id_+'").addEventListener("click", gameimage_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['image_onload_dom'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gameimage_'+value_id_+'_onload (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameimage_'+value_id_+'").addEventListener("load", gameimage_'+value_id_+'_onload, true);\n';
  return code;
};

Blockly.Arduino['image_onclick_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'image_onclick_get(' + value_id_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_move'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var value_step_ = Blockly.Arduino.valueToCode(block, 'step_', Blockly.Arduino.ORDER_ATOMIC);
  if (value_property_=="left")
    var code = 'image_set('+value_id_+',"left",(image_get('+value_id_+',"left")-'+value_step_+'));\n';
  else if (value_property_=="right")
    var code = 'image_set('+value_id_+',"left",(image_get('+value_id_+',"left")+'+value_step_+'));\n';
  else if (value_property_=="up")
    var code = 'image_set('+value_id_+',"top",(image_get('+value_id_+',"top")-'+value_step_+'));\n';
  else if (value_property_=="down")
    var code = 'image_set('+value_id_+',"top",(image_get('+value_id_+',"top")+'+value_step_+'));\n';
  return code;
};

Blockly.Arduino['image_resize'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_percentage_ = Blockly.Arduino.valueToCode(block, 'percentage_', Blockly.Arduino.ORDER_ATOMIC);
  value_percentage_ = value_percentage_/100;
  var code = 'image_set('+value_id_+',"width",((image_get('+value_id_+',"width")) * '+value_percentage_+'));\nimage_set('+value_id_+',"height",((image_get('+value_id_+',"height")) * '+value_percentage_+'));\n';
  return code;
};

Blockly.Arduino['mouse_coordinate_get_start'] = function (block) {
  var code = 'mouse_coordinate_get_start();\n';
  return code;
};

Blockly.Arduino['mouse_coordinate_get'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var code = 'mouse_coordinate_get("' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['document_timer_novar'] = function (block) {
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.Arduino.valueToCode(block, 'intervals_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'setInterval(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.Arduino['document_timer_once_novar'] = function (block) {
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.Arduino.valueToCode(block, 'intervals_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'setTimeout(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.Arduino['document_timer'] = function (block) {
  var value_var_ = Blockly.Arduino.valueToCode(block, 'var_', Blockly.Arduino.ORDER_ATOMIC);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.Arduino.valueToCode(block, 'intervals_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_var_.indexOf("'")==0)&&(value_var_.lastIndexOf("'")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf('"')==0)&&(value_var_.lastIndexOf('"')==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf("(")==0)&&(value_var_.lastIndexOf(")")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
	
  var code = 'var '+value_var_+' = setInterval(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.Arduino['document_timer_once'] = function (block) {
  var value_var_ = Blockly.Arduino.valueToCode(block, 'var_', Blockly.Arduino.ORDER_ATOMIC);
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.Arduino.valueToCode(block, 'intervals_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_var_.indexOf("'")==0)&&(value_var_.lastIndexOf("'")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf('"')==0)&&(value_var_.lastIndexOf('"')==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf("(")==0)&&(value_var_.lastIndexOf(")")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
	
  var code = 'var '+value_var_+' = setTimeout(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.Arduino['document_timer_stop'] = function (block) {
  var value_var_ = Blockly.Arduino.valueToCode(block, 'var_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_var_.indexOf("'")==0)&&(value_var_.lastIndexOf("'")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf('"')==0)&&(value_var_.lastIndexOf('"')==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf("(")==0)&&(value_var_.lastIndexOf(")")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
	
  var code = 'clearInterval(' + value_var_ + ');\n';
  return code;
};

Blockly.Arduino['text_to_number'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'value_text_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'text_to_number(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['loop_break'] = function (block) {
  var code = 'break;\n';
  return code;
};

Blockly.Arduino['loop_continue'] = function (block) {
  var code = 'continue;\n';
  return code;
};

Blockly.Arduino['function_return'] = function (block) {
  var value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'return ' + value_ + ';\n';
  return code;
};

Blockly.Arduino['gameelements_1'] = function (block) {
  var code = '';
  return code;
};

Blockly.Arduino['move_to_mouse'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_position = block.getFieldValue('position');
  if (value_position=="center")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")/2));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")/2));\n';
  else if (value_position=="up")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")/2));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")));\n';
  else if (value_position=="down")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")/2));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")));\n';
  else if (value_position=="left")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")/2));\n';
  else if (value_position=="right")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")/2));\n';
  else if (value_position=="upperLeft")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")));\n';
  else if (value_position=="lowerLeft")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")));\n';
  else if (value_position=="upperRight")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")));\n';
  else if (value_position=="lowerRight")
   var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")));\n';
  return code;
};

Blockly.Arduino['move_to_coordinate'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);   
  var code = 'image_set('+value_id_+',"left",'+value_left_+');\nimage_set('+value_id_+',"top",'+value_top_+');\n';
  return code;
};

Blockly.Arduino['rotatez_degrees'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_degrees_ = Blockly.Arduino.valueToCode(block, 'degrees_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'image_set('+value_id_+',"rotateZ",'+value_degrees_+');\n';
  return code;
};

Blockly.Arduino['rotate_vertical_flip'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'if (image_get('+value_id_+',"rotateX")<=90||image_get('+value_id_+',"rotateX")=="") \n  image_set('+value_id_+',"rotateX",180); \nelse \n  image_set('+value_id_+',"rotateX",0);\n';
  return code;
};

Blockly.Arduino['rotate_horizontal_flip'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'if (image_get('+value_id_+',"rotateY")<=90||image_get('+value_id_+',"rotateY")=="") \n  image_set('+value_id_+',"rotateY",180); \nelse \n  image_set('+value_id_+',"rotateY",0);\n';
  return code;
};

Blockly.Arduino['button_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_bgcolor_ = Blockly.Arduino.valueToCode(block, 'bgcolor_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);
  if (!value_fontsize_) value_fontsize_=12; 
  var code = 'button_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_bgcolor_ + ',' + value_value_ + ',' + value_fontsize_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['button_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'button_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['button_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'button_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['button_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'button_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['button_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamebutton_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamebutton_'+value_id_+'").addEventListener("click", gamebutton_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['async_function'] = function (block) {
  var value_name_ = Blockly.Arduino.valueToCode(block, 'name_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_name_.indexOf("'")==0)&&(value_name_.lastIndexOf("'")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  if ((value_name_.indexOf("(")==0)&&(value_name_.lastIndexOf(")")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  
  var value_parameter_ = Blockly.Arduino.valueToCode(block, 'parameter_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_parameter_.indexOf("'")==0)&&(value_parameter_.lastIndexOf("'")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf("(")==0)&&(value_parameter_.lastIndexOf(")")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function '+value_name_+'('+value_parameter_+'){\n' + statements_do_ + '};\n';
  return code;
};

Blockly.Arduino['call_async_function'] = function (block) {
  var value_name_ = Blockly.Arduino.valueToCode(block, 'name_', Blockly.Arduino.ORDER_ATOMIC);   
  if ((value_name_.indexOf("'")==0)&&(value_name_.lastIndexOf("'")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  if ((value_name_.indexOf("(")==0)&&(value_name_.lastIndexOf(")")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  var value_parameter_ = Blockly.Arduino.valueToCode(block, 'parameter_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_parameter_.indexOf("'")==0)&&(value_parameter_.lastIndexOf("'")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf("(")==0)&&(value_parameter_.lastIndexOf(")")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);  
  var code = value_name_ + '('+value_parameter_+');\n';
  return code;
};

Blockly.Arduino['transform_async_function'] = function (block) {
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = statements_do_.replace(/function/g,"async function").replace(/async async/g,"async");
  return code;
};


Blockly.Arduino['element_event'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var element = block.getFieldValue('element');
  var event = block.getFieldValue('event');
  var statement = Blockly.Arduino.statementToCode(block, 'statement');
  if (element=="window")
    var obj="window";
  else if (element=="document")
    var obj="document";
  else
    var obj="document.getElementById('game"+element+"_'+"+value_id_+")";

  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
 
  var code = 'async function '+element+'_'+value_id_+'_'+event+'(event) {\n' + statement + '};\n'+obj+'.addEventListener("'+event+'", '+element+'_'+value_id_+'_'+event+', true);\n';
  return code;
};

Blockly.Arduino['element_event_stop'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var element = block.getFieldValue('element');
  var event = block.getFieldValue('event');
  if (element=="window")
    var obj="window";
  else if (element=="document")
    var obj="document";
  else
    var obj="document.getElementById('game"+element+"_'+"+value_id_+")";

  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);

  var code = obj+'.removeEventListener("'+event+'", '+element+'_'+value_id_+'_'+event+', true);\n';
  return code;
};

Blockly.Arduino['colorpicker_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'colorpicker_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['colorpicker_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'colorpicker_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['colorpicker_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'colorpicker_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['colorpicker_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'colorpicker_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['colorpicker_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamecolor_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamecolor_'+value_id_+'").addEventListener("change", gamecolor_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['select_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_background_ = Blockly.Arduino.valueToCode(block, 'background_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_option_ = Blockly.Arduino.valueToCode(block, 'option_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'select_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_option_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['select_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'select_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['select_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'select_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['select_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'select_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['select_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gameselect_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameselect_'+value_id_+'").addEventListener("change", gameselect_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['range_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_max_ = Blockly.Arduino.valueToCode(block, 'max_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_min_ = Blockly.Arduino.valueToCode(block, 'min_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_step_ = Blockly.Arduino.valueToCode(block, 'step_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'range_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_max_ + ',' + value_min_ + ',' + value_step_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['range_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'range_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['range_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'range_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['range_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'range_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['range_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamerange_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamerange_'+value_id_+'").addEventListener("change", gamerange_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['text_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_background_ = Blockly.Arduino.valueToCode(block, 'background_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'text_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['text_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'text_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['text_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'text_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['text_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'text_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['text_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gametext_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gametext_'+value_id_+'").addEventListener("change", gametext_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['div_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.Arduino.valueToCode(block, 'borderwidth_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.Arduino.valueToCode(block, 'bordercolor_', Blockly.Arduino.ORDER_ATOMIC);
  var value_background_ = Blockly.Arduino.valueToCode(block, 'background_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_innerHTML_ = Blockly.Arduino.valueToCode(block, 'innerHTML_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'div_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_innerHTML_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['div_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'div_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['div_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'div_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['div_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'div_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['color_hextorgb'] = function (block) {
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'HextoRgb(' + value_color_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['body_set'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'body_set("' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['time_delay'] = function (block) {
  var seconds = Blockly.Arduino.valueToCode(block, 'seconds', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'await delay(' + seconds + ');\n';
  return code;
};

Blockly.Arduino['position_distance'] = function (block) {
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1_ = Blockly.Arduino.valueToCode(block, 'x1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1_ = Blockly.Arduino.valueToCode(block, 'y1_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'position_distance(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['position_angle'] = function (block) {
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1_ = Blockly.Arduino.valueToCode(block, 'x1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1_ = Blockly.Arduino.valueToCode(block, 'y1_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'position_angle(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iframe_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_frameborder_ = block.getFieldValue('frameborder_');
  var value_scrolling_ = block.getFieldValue('scrolling_');
  var value_src_ = Blockly.Arduino.valueToCode(block, 'src_', Blockly.Arduino.ORDER_ATOMIC);
  var value_srcdoc_ = Blockly.Arduino.valueToCode(block, 'srcdoc_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC); 
  console.log(value_src_);
  if (value_src_.replace(/"/g,"")!=""&&value_src_.toLowerCase().indexOf("http")==-1) {
	  value_src_ = "document.location.origin + '/' + " + value_src_;
  }
  
  var code = 'iframe_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',"'+ value_frameborder_ + '","' + value_scrolling_ + '",' + value_src_ + ',' + value_srcdoc_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['iframe_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  
  if (value_property_=="src"&&value_value_.replace(/"/g,"")!=""&&value_value_.toLowerCase().indexOf("http")==-1) {
	  value_value_ = "document.location.origin + '/' + " + value_value_;
  }
  
  var code = 'iframe_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['iframe_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'iframe_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iframe_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'iframe_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['ajax_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_type_ = block.getFieldValue('type_');
  var value_datatype_ = block.getFieldValue('datatype_');
  var value_async_ = block.getFieldValue('async_');
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  var code = 'var ajaxData_'+value_id_+';$.ajax({ \n  type: "'+value_type_+'" , \n  url: '+value_url_+' , \n  dataType: "'+value_datatype_+'", \n  timeout: 5000, \n  async: '+value_async_+', \n  success: function(data, textStatus) {\n    ajaxData_'+value_id_.replace(/'/g,"")+'=data;\n  },\nerror: function (jqXHR, textStatus, errorThrown) {\nconsole.log(jqXHR.statusText);}\n});\n';
  return code;
};

Blockly.Arduino['ajax_getdata'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_format_ = block.getFieldValue('format_');
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  if (value_format_=="XML to String")
	var code = 'new XMLSerializer().serializeToString(ajaxData_'+value_id_.replace(/'/g,"")+')';
  else if (value_format_=="JSON to String")
	var code = 'JSON.stringify(ajaxData_'+value_id_.replace(/'/g,"")+')';
  else
	var code = 'ajaxData_'+value_id_;
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ajax_getdata_json'] = function (block) {
  var value_json_ = Blockly.Arduino.valueToCode(block, 'json_', Blockly.Arduino.ORDER_ATOMIC);
  var value_index_ = Blockly.Arduino.valueToCode(block, 'index_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fieldname_ = Blockly.Arduino.valueToCode(block, 'fieldname_', Blockly.Arduino.ORDER_ATOMIC);
  
  code = 'ajax_getdata_json('+value_json_+','+ value_index_+','+ value_fieldname_+')';
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ajax_getdata_json_count'] = function (block) {
  var value_json_ = Blockly.Arduino.valueToCode(block, 'json_', Blockly.Arduino.ORDER_ATOMIC);
  
  code = 'ajax_getdata_json_count('+value_json_+')';
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ajax_cleardata'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  var code = 'ajaxData_'+value_id_+' = "";\n';
  return code;
};

Blockly.Arduino['a_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.Arduino.valueToCode(block, 'borderwidth_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.Arduino.valueToCode(block, 'bordercolor_', Blockly.Arduino.ORDER_ATOMIC);
  var value_background_ = Blockly.Arduino.valueToCode(block, 'background_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_innerHTML_ = Blockly.Arduino.valueToCode(block, 'innerHTML_', Blockly.Arduino.ORDER_ATOMIC);
  var value_href_ = Blockly.Arduino.valueToCode(block, 'href_', Blockly.Arduino.ORDER_ATOMIC);
  var value_target_ = block.getFieldValue('target_');
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'a_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_innerHTML_ + ',' + value_href_ + ',"' + value_target_ + '",' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['a_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'a_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['a_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'a_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['a_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'a_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['radio_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_name_ = Blockly.Arduino.valueToCode(block, 'name_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var value_size_ = Blockly.Arduino.valueToCode(block, 'size_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var value_checked_ = Blockly.Arduino.valueToCode(block, 'checked_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'radio_create(' + value_id_ + ',' + value_name_ + ','+ value_left_ + ',' + value_top_ + ',' + value_size_ + ',' + value_value_ + ',' + value_checked_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['radio_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'radio_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['radio_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'radio_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['radio_name_get'] = function (block) {
  var value_name_ = Blockly.Arduino.valueToCode(block, 'name_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'radio_name_get(' + value_name_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['radio_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'radio_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['radio_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gameradio_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameradio_'+value_id_+'").addEventListener("click", gameradio_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['checkbox_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var value_size_ = Blockly.Arduino.valueToCode(block, 'size_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var value_checked_ = Blockly.Arduino.valueToCode(block, 'checked_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'checkbox_create(' + value_id_ + ','+ value_left_ + ',' + value_top_ + ',' + value_size_ + ',' + value_value_ + ',' + value_checked_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['checkbox_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'checkbox_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['checkbox_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'checkbox_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['checkbox_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'checkbox_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['checkbox_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamecheckbox_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamecheckbox_'+value_id_+'").addEventListener("click", gamecheckbox_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['textarea_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cols_ = Blockly.Arduino.valueToCode(block, 'cols_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rows_ = Blockly.Arduino.valueToCode(block, 'rows_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'textarea_create(' + value_id_ + ','+ value_left_ + ',' + value_top_ + ',' + value_cols_ + ',' + value_rows_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['textarea_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'textarea_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['textarea_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'textarea_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['textarea_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'textarea_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['textarea_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gametextarea_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gametextarea_'+value_id_+'").addEventListener("change", gametextarea_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['number_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_max_ = Blockly.Arduino.valueToCode(block, 'max_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_min_ = Blockly.Arduino.valueToCode(block, 'min_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_step_ = Blockly.Arduino.valueToCode(block, 'step_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'number_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_width_ + ',' + value_height_ + ',' + value_fontsize_ + ',' + value_max_ + ',' + value_min_ + ',' + value_step_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['number_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'number_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['number_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'number_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['number_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'number_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['number_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamenumber_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamenumber_'+value_id_+'").addEventListener("change", gamenumber_'+value_id_+'_onchange, true);\n';
  return code;
};


Blockly.Arduino['date_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_max_ = Blockly.Arduino.valueToCode(block, 'max_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_min_ = Blockly.Arduino.valueToCode(block, 'min_', Blockly.Arduino.ORDER_ATOMIC);   
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'date_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_max_ + ',' + value_min_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['date_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'date_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['date_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'date_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['date_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'date_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['date_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamedate_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamedate_'+value_id_+'").addEventListener("change", gamedate_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['time_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);   
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'time_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['time_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'time_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['time_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'time_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['time_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'time_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['time_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gametime_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gametime_'+value_id_+'").addEventListener("change", gametime_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['datetime_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);   
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'datetime_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['datetime_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'datetime_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['datetime_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'datetime_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['datetime_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'datetime_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['datetime_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamedatetime_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamedatetime_'+value_id_+'").addEventListener("change", gamedatetime_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['progress_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var value_max_ = Blockly.Arduino.valueToCode(block, 'max_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'progress_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_max_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['progress_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'progress_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['progress_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'progress_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['progress_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'progress_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['password_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_maxlength_ = Blockly.Arduino.valueToCode(block, 'maxlength_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_background_ = Blockly.Arduino.valueToCode(block, 'background_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'password_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_maxlength_ + ',' + value_value_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['password_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'password_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['password_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'password_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['password_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'password_delete(' + value_id_ + ');\n';
  return code;
};


Blockly.Arduino['form_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_action_ = Blockly.Arduino.valueToCode(block, 'action_', Blockly.Arduino.ORDER_ATOMIC);
  var value_enctype_ = block.getFieldValue('enctype_');
  var value_method_ = block.getFieldValue('method_');
  var value_target_ = Blockly.Arduino.valueToCode(block, 'target_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'form_create(' + value_id_ + ','+ value_action_ + ',"' + value_enctype_ + '","' + value_method_ + '",' + value_target_ + ');\n';
  return code;
};

Blockly.Arduino['form_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'form_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['form_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'form_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['form_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'form_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['form_insert'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_element_ = block.getFieldValue('element_');
  var value_elementid_ = Blockly.Arduino.valueToCode(block, 'elementid_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'form_insert(' + value_id_ + ',"' + value_element_ + '",' + value_elementid_ + ');\n';
  return code;
};

Blockly.Arduino['form_submit'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'form_submit(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['head_add_viewport'] = function (block) {
  var value_initialscale_ = Blockly.Arduino.valueToCode(block, 'initialscale_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_minimumscale_ = Blockly.Arduino.valueToCode(block, 'minimumscale_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_maximumscale_ = Blockly.Arduino.valueToCode(block, 'maximumscale_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_scalable_ = block.getFieldValue('scalable_');
  var code = 'head_add_viewport(' + value_initialscale_ + ',' + value_minimumscale_ + ',' + value_maximumscale_ + ',"' + value_scalable_ + '");\n';
  return code;
};

Blockly.Arduino['video_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_src_ = Blockly.Arduino.valueToCode(block, 'src_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cam_ = block.getFieldValue('cam_');
  var value_autoplay_ = block.getFieldValue('autoplay_');
  var value_loop_ = block.getFieldValue('loop_');
  var value_muted_ = block.getFieldValue('muted_');
  var value_controls_ = block.getFieldValue('controls_');
  var value_preload_ = block.getFieldValue('preload_');
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'video_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ','+ value_cam_ + ','+ value_src_ + ',' + value_autoplay_ + ',' + value_loop_ + ',' + value_muted_ + ',' + value_controls_ + ',' + value_preload_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['video_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'video_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['video_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'video_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['video_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'video_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['video_base64'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var source_id;
  if (value_source_=="video")
	source_id = 'gamevideo_'+value_id_;
  else if (value_source_=="canvas")
	source_id = 'gamecanvas_'+value_id_;
  else if (value_source_=="image")
	source_id = 'gameimage_'+value_id_;
  var code = 'video_base64("' + source_id + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['video_base64_spreadsheet'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
	
  if ((value_id_.indexOf("(")==0)&&(value_id_.lastIndexOf(")")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  var source_id;
  if (value_source_=="video")
	source_id = 'gamevideo_'+value_id_;
  else if (value_source_=="canvas")
	source_id = 'gamecanvas_'+value_id_;
  else if (value_source_=="image")
	source_id = 'gameimage_'+value_id_;
	
  var value_spreadsheeturl_ = Blockly.Arduino.valueToCode(block, 'spreadsheeturl_', Blockly.Arduino.ORDER_ATOMIC);
  var value_spreadsheetname_ = Blockly.Arduino.valueToCode(block, 'spreadsheetname_', Blockly.Arduino.ORDER_ATOMIC);
  var value_column_ = Blockly.Arduino.valueToCode(block, 'column_', Blockly.Arduino.ORDER_ATOMIC);
  var value_row_ = Blockly.Arduino.valueToCode(block, 'row_', Blockly.Arduino.ORDER_ATOMIC);
  var value_spreadsheet_script_ = Blockly.Arduino.valueToCode(block, 'spreadsheet_script_', Blockly.Arduino.ORDER_ATOMIC);
  var value_format_ = block.getFieldValue('format_');
  
  var code = 'video_base64_spreadsheet("' + source_id + '",'+value_spreadsheeturl_+','+value_spreadsheetname_+','+value_column_+','+value_row_+','+value_height_+',"'+value_format_+'",'+value_spreadsheet_script_+');\n';
  return code;
};

Blockly.Arduino['video_base64_drive'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
	
  if ((value_id_.indexOf("(")==0)&&(value_id_.lastIndexOf(")")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  var source_id;
  if (value_source_=="video")
	source_id = 'gamevideo_'+value_id_;
  else if (value_source_=="canvas")
	source_id = 'gamecanvas_'+value_id_;
  else if (value_source_=="image")
	source_id = 'gameimage_'+value_id_;
	
  var value_foldername_ = Blockly.Arduino.valueToCode(block, 'foldername_', Blockly.Arduino.ORDER_ATOMIC);	
  var value_filename_ = Blockly.Arduino.valueToCode(block, 'filename_', Blockly.Arduino.ORDER_ATOMIC);
  var value_drive_script_ = Blockly.Arduino.valueToCode(block, 'drive_script_', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'video_base64_drive("' + source_id + '",'+value_foldername_+','+value_filename_+','+value_drive_script_+');\n';
  return code;
};

Blockly.Arduino['video_base64_email'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
	
  if ((value_id_.indexOf("(")==0)&&(value_id_.lastIndexOf(")")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  var source_id;
  if (value_source_=="video")
	source_id = 'gamevideo_'+value_id_;
  else if (value_source_=="canvas")
	source_id = 'gamecanvas_'+value_id_;
  else if (value_source_=="image")
	source_id = 'gameimage_'+value_id_;

  var value_recipient_ = Blockly.Arduino.valueToCode(block, 'recipient_', Blockly.Arduino.ORDER_ATOMIC);
  var value_subject_ = Blockly.Arduino.valueToCode(block, 'subject_', Blockly.Arduino.ORDER_ATOMIC);	
  var value_email_script_ = Blockly.Arduino.valueToCode(block, 'email_script_', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'video_base64_email("' + source_id + '",'+value_recipient_+','+value_subject_+','+value_email_script_+');\n';
  return code;
};

Blockly.Arduino['custom_comment'] = function (block) {
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf("'")==0)&&(text.lastIndexOf("'")==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = '//' + text+'\n';
  return code;
};

Blockly.Arduino['variable_board'] = function (block) {
  var code = 'board';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_javascript'] = function(block) {
  var statements_js = Blockly.Arduino.statementToCode(block, 'js');

  code = '"<!DOCTYPE html><head><meta charset=\'utf-8\'><script src=\'https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js\'></script><script src=\'https://fustyles.github.io/webduino/GameElements_20190131/gameelements.js\'></script></head><body><script>'+ statements_js.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null") +'</script></body></html>"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['choice_color'] = function(block) {
	var rgb = "'"+this.getFieldValue("RGB")+"'";
	return[rgb, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['text_br'] = function (block) {
  var code = '"<br>"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['custom_style'] = function (block) {
  var element = block.getFieldValue('element');
  var id = Blockly.Arduino.valueToCode(block, 'id', Blockly.Arduino.ORDER_ATOMIC);
  var style = block.getFieldValue('style');
  var property = Blockly.Arduino.valueToCode(block, 'property', Blockly.Arduino.ORDER_ATOMIC);
  var val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
  if ((id.indexOf("'")==0)&&(id.lastIndexOf("'")==id.length-1))
    id = id.substring(1,id.length-1);
  if ((id.indexOf('"')==0)&&(id.lastIndexOf('"')==id.length-1))
    id = id.substring(1,id.length-1);
  var el = element;
  if ((element.indexOf("'")==0)&&(element.lastIndexOf("'")==element.length-1))
    el = element.substring(1,element.length-1);
  if ((element.indexOf('"')==0)&&(element.lastIndexOf('"')==element.length-1))
    el = element.substring(1,element.length-1); 
  if ((property.indexOf("'")==0)&&(property.lastIndexOf("'")==property.length-1))
    property = property.substring(1,property.length-1);
  if ((property.indexOf('"')==0)&&(property.lastIndexOf('"')==property.length-1))
    property = property.substring(1,property.length-1); 

  var cmd = "";
  if (element=="window")
    cmd="window";
  else if (element=="document")
    cmd="document";
  else
    cmd="document.getElementById('game"+el+"_"+id+"')";

  if (style=="")
	cmd = cmd+"."+property+" = "+val+";";
  else
	cmd = cmd+".style."+property+" = "+val+";";
  var code = cmd;
  return code;
};

Blockly.Arduino['font_text'] = function (block) {
  var value_size = Blockly.Arduino.valueToCode(block, 'size_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_face = Blockly.Arduino.valueToCode(block, 'face_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);
	
  var code = 'fontText('+value_size + ',' + value_color + ',' + value_face + ',' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_b'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontB(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_i'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontI(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_u'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontU(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_sup'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontSup(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_sub'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontSub(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_em'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontEm(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_strong'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontStrong(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_code'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);
	
  var code = 'fontCode(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['location'] = function (block) {
  var value_property = block.getFieldValue('value_property'); 

  if (value_property=="hosturl")
	var code = 'window.location.protocol+"//"+window.location.host+"/"';
  else
	var code = 'window.location.' + value_property;
  return [code, Blockly.Arduino.ORDER_NONE];
};
