Blockly.JavaScript['table_create'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE);
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_trcount_ = Blockly.JavaScript.valueToCode(block, 'trcount_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tdcount_ = Blockly.JavaScript.valueToCode(block, 'tdcount_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_bgcolor_ = Blockly.JavaScript.valueToCode(block, 'bgcolor_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'table_create("' + variable_fuGameElements_ + '",'+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_trcount_ + ',' + value_tdcount_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_bgcolor_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['table_set'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE); 
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_set("' + variable_fuGameElements_ + '","' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['table_get'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_get("' + variable_fuGameElements_ + '","' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['table_clear'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE); 
  var code = 'table_clear("' + variable_fuGameElements_ + '");\n';
  return code;
};

Blockly.JavaScript['table_td_set'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE); 
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_set("' + variable_fuGameElements_ + '",'+ value_x_ + ',' + value_y_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['table_border_set'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE); 
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_border_set("' + variable_fuGameElements_ + '","'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_border_set'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE); 
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_border_set("' + variable_fuGameElements_ + '",'+ value_x_ + ',' + value_y_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_insert_img'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_imgid_ = Blockly.JavaScript.valueToCode(block, 'imgid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'table_td_insert_img("' + variable_fuGameElements_ + '",'+ value_x_ + ',' + value_y_ + ',' + value_imgid_ + ',' + value_url_ + ',' + value_width_ + ',' + value_height_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_img_move'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE);
  var value_imgid_ = Blockly.JavaScript.valueToCode(block, 'imgid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_img_move("' + variable_fuGameElements_ + '",'+ value_imgid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_img_get'] = function (block) {
  var value_imgid_ = Blockly.JavaScript.valueToCode(block, 'imgid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_td_img_get('+ value_imgid_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['table_td_insert_text'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontname_ = Blockly.JavaScript.valueToCode(block, 'fontname_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_insert_text("' + variable_fuGameElements_ + '",'+ value_x_ + ',' + value_y_ + ',' + value_text_+ ',' + value_fontname_ + ',' + value_fontsize_ + ',' + value_color_+ ');\n';
  return code;
};

Blockly.JavaScript['table_td_get'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_td_get("' + variable_fuGameElements_ + '",'+ value_x_ + ',' + value_y_ + ',"' + value_property_+ '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['table_td_clear'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_clear("' + variable_fuGameElements_ + '",'+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.JavaScript['table_delete'] = function (block) {
  var variable_fuGameElements_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuGameElements_'), Blockly.Variables.NAME_TYPE);
  var code = 'table_delete("' + variable_fuGameElements_ + '");\n';
  return code;
};

Blockly.JavaScript['music_create'] = function (block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_length = Blockly.JavaScript.valueToCode(block, 'length_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_loop = Blockly.JavaScript.valueToCode(block, 'loop_', Blockly.JavaScript.ORDER_ATOMIC);
  if ((value_loop=="true")&&(value_length>0))
    var code = 'music_create(' + value_url + ');\nvar musicTimer = setInterval(function(){\nmusic_create(' + value_url + ');},' + value_length + ');\n';
  else if ((value_loop=="false")&&(value_length>0))
    var code = 'music_create(' + value_url + ');\nvar musicTimer = setTimeout(function(){\nmusic_delete();},' + value_length + ');\n';
  else
    var code = 'music_create(' + value_url + ');\n';
  return code;
};

Blockly.JavaScript['music_delete'] = function (block) {
  var code = 'clearInterval(musicTimer);\nmusic_delete();\n';
  return code;
};

Blockly.JavaScript['canvas_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'canvas_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_line'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'canvas_line(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_x1_ + ',' + value_y1_ + ',' + value_color_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_rect'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fill_ = Blockly.JavaScript.valueToCode(block, 'fill_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'canvas_rect(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_fill_ + ',' + value_color_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_arc'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_r_ = Blockly.JavaScript.valueToCode(block, 'r_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sAngle_ = Blockly.JavaScript.valueToCode(block, 'sAngle_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_eAngle_ = Blockly.JavaScript.valueToCode(block, 'eAngle_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_counterclockwise_ = Blockly.JavaScript.valueToCode(block, 'counterclockwise_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fill_ = Blockly.JavaScript.valueToCode(block, 'fill_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'canvas_arc(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_r_ + ',' + value_sAngle_ + ',' + value_eAngle_ + ',' + value_counterclockwise_ + ',' + value_fill_ + ',' + value_color_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_img'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sx_ = Blockly.JavaScript.valueToCode(block, 'sx_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sy_ = Blockly.JavaScript.valueToCode(block, 'sy_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_swidth_ = Blockly.JavaScript.valueToCode(block, 'swidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sheight_ = Blockly.JavaScript.valueToCode(block, 'sheight_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'canvas_img(' + value_id_ + ',' + value_url_ + ',' + value_sx_ + ','+ value_sy_ + ',' + value_swidth_ + ','+ value_sheight_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_text'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_fontname_ = Blockly.JavaScript.valueToCode(block, 'fontname_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_textalign_ = block.getFieldValue('textalign_');
  var value_fill_ = Blockly.JavaScript.valueToCode(block, 'fill_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'canvas_text(' + value_id_ + ',' + value_text_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_fontname_ + ','+ value_fontsize_ + ',"' + value_textalign_ + '",'+ value_fill_ + ',' + value_color_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_clear'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'canvas_clear(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'canvas_delete(' + value_id_ + ');\n';
  return code;
};

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

Blockly.JavaScript['image_boundary_collision_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'if (image_boundary_collision('+value_id_+',"'+value_property_+'")==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.JavaScript['image_sys_get'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_sys_get("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_onclick_listener'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'setInterval(async function(){\n' + statements_do_ + '},10);\n';
  return code;
};

Blockly.JavaScript['image_onclick_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'if (image_onclick_get(' + value_id_ + ')==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.JavaScript['image_onclick_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'image_onclick_get(' + value_id_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_move'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var value_step_ = Blockly.JavaScript.valueToCode(block, 'step_', Blockly.JavaScript.ORDER_ATOMIC);
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

Blockly.JavaScript['image_resize'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_percentage_ = Blockly.JavaScript.valueToCode(block, 'percentage_', Blockly.JavaScript.ORDER_ATOMIC);
  value_percentage_ = value_percentage_/100;
  var code = 'image_set('+value_id_+',"width",((image_get('+value_id_+',"width")) * '+value_percentage_+'));\nimage_set('+value_id_+',"height",((image_get('+value_id_+',"height")) * '+value_percentage_+'));\n';
  return code;
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
  var code = variable_fuTimer_+' = setInterval(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer_once'] = function (block) {
  var variable_fuTimerOnce_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuTimerOnce_'), Blockly.Variables.NAME_TYPE);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_fuTimerOnce_+' = setTimeout(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer_stop'] = function (block) {
  var variable_fuTimer_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('fuTimer_'), Blockly.Variables.NAME_TYPE);
  var code = 'clearInterval(' + variable_fuTimer_ + ');\n';
  return code;
};

Blockly.JavaScript['text_to_number'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'value_text_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'text_to_number(' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['loop_break'] = function (block) {
  var code = 'break;\n';
  return code;
};

Blockly.JavaScript['loop_continue'] = function (block) {
  var code = 'continue;\n';
  return code;
};

Blockly.JavaScript['function_return'] = function (block) {
  var value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'return ' + value_ + ';\n';
  return code;
};

Blockly.JavaScript['time_delay'] = function (block) {
  var seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'await delay(' + seconds + ');\n';
  return code;
};

Blockly.JavaScript['move_to_mouse'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("x")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("y")));\n';
  return code;
};

Blockly.JavaScript['move_to_coordinate'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'image_set('+value_id_+',"left",'+value_left_+');\nimage_set('+value_id_+',"top",'+value_top_+');\n';
  return code;
};

Blockly.JavaScript['rotatez_degrees'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_degrees_ = Blockly.JavaScript.valueToCode(block, 'degrees_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'image_set('+value_id_+',"rotateZ",'+value_degrees_+');\n';
  return code;
};

Blockly.JavaScript['rotatey_degrees'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'if (image_get('+value_id_+',"rotateY").match(/\d+/)<=90) \n  image_set('+value_id_+',"rotateY",180); \nelse \n  image_set('+value_id_+',"rotateY",0);\n';
  return code;
};

Blockly.JavaScript['button_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'button_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['button_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'button_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['button_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'button_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['button_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'button_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['button_onclick_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf("(")==0)&&(value_id_.lastIndexOf(")")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'document.getElementById("gamebutton_' + value_id_ + '").onclick = function(){\n' + statements_do_ + '};\n';
  return code;
};
