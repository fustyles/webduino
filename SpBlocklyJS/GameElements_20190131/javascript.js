Blockly.JavaScript['table_insert_row'] = function(block){
	var value_id = Blockly.JavaScript.valueToCode(block,"id",Blockly.JavaScript.ORDER_NONE)||"";
	var value_func = block.getFieldValue('func');
	var value_row = Number(Blockly.JavaScript.valueToCode(block,"row",Blockly.JavaScript.ORDER_NONE)||-1);
	var value_data = Blockly.JavaScript.valueToCode(block,"VALUE",Blockly.JavaScript.ORDER_NONE)||"";
	value_data = 'String('+value_data+')+"|"';
	for (var i=0;i<26;i++) {
		var text = Blockly.JavaScript.valueToCode(block,String.fromCharCode(i+65),Blockly.JavaScript.ORDER_NONE);
		if (block.getInput(String.fromCharCode(i+65)))
			value_data += '+String('+text+')+"|"';
	}
	value_data = value_data.substring(0, value_data.length-4);
			
	var code = 'table_insert_row(' + value_id + ',"' + value_func + '",' + value_row + ', ' + value_data + ');\n';
	return code;
};

Blockly.JavaScript['table_insert_col'] = function(block){
	var value_id = Blockly.JavaScript.valueToCode(block,"id",Blockly.JavaScript.ORDER_NONE)||"";
	var value_func = block.getFieldValue('func');
	var value_col = Number(Blockly.JavaScript.valueToCode(block,"col",Blockly.JavaScript.ORDER_NONE)||-1);
	var value_data = Blockly.JavaScript.valueToCode(block,"VALUE",Blockly.JavaScript.ORDER_NONE)||"";
	value_data = 'String('+value_data+')+"|"';
	for (var i=0;i<26;i++) {
		var text = Blockly.JavaScript.valueToCode(block,String.fromCharCode(i+65),Blockly.JavaScript.ORDER_NONE);
		if (block.getInput(String.fromCharCode(i+65)))
			value_data += '+String('+text+')+"|"';
	}
	value_data = value_data.substring(0, value_data.length-4);
			
	var code = 'table_insert_col(' + value_id + ',"' + value_func + '",' + value_col + ', ' + value_data + ');\n';
	return code;
};








Blockly.JavaScript['table_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
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
  var code = 'table_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_trcount_ + ',' + value_tdcount_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_bgcolor_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['table_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['table_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['table_clear'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_clear(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['table_change_colsrows'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_target_ = block.getFieldValue('target_');
  var value_cmd_ = block.getFieldValue('cmd_');  
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_change_colsrows(' + value_id_ + ',"'+ value_target_ + '","' + value_cmd_ + '",' + value_index_+ ');\n'
  return code;
};

Blockly.JavaScript['table_td_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['table_border_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_border_set(' + value_id_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_border_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_target_ = block.getFieldValue('target_');
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_target_=="cell")
	var code = 'table_td_border_set(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  else if (value_target_=="col")
	var code = 'table_td_border_set(' + value_id_ + ','+ value_x_ + ',-1,"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  else if (value_target_=="row")
	var code = 'table_td_border_set(' + value_id_ + ',-1,' + value_y_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  else if (value_target_=="all")
	var code = 'table_td_border_set(' + value_id_ + ',-1,-1,"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  else
	var code = 'table_td_border_set(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_insert_img'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_imgid_ = Blockly.JavaScript.valueToCode(block, 'imgid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'table_td_insert_img(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',' + value_imgid_ + ',' + value_url_ + ',' + value_width_ + ',' + value_height_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_img_move'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_element_ = block.getFieldValue('element_');
  var value_imgid_ = Blockly.JavaScript.valueToCode(block, 'imgid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_element_=="image")
	var code = 'table_td_img_move(' + value_id_ + ','+ value_imgid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  else if (value_element_=="canvas")
    var code = 'table_td_canvas_move(' + value_id_ + ','+ value_imgid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  else
	var code = 'table_td_img_move(' + value_id_ + ','+ value_imgid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_canvas_move'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_canvasid_ = Blockly.JavaScript.valueToCode(block, 'canvasid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_canvas_move(' + value_id_ + ','+ value_canvasid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.JavaScript['table_td_copy_move'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_property_=="copy")
    var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ','+ value_y_ + ',"innerHTML",(table_td_get(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML")));\n';
  else if (value_property_=="move")
    var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ','+ value_y_ + ',"innerHTML",(table_td_get(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML")));\ntable_td_set(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML","");\n'; 
  return code;
};

Blockly.JavaScript['table_td_img_get'] = function (block) {
  var value_imgid_ = Blockly.JavaScript.valueToCode(block, 'imgid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_td_img_get('+ value_imgid_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['table_td_insert_text'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_target_ = block.getFieldValue('target_');
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontname_ = Blockly.JavaScript.valueToCode(block, 'fontname_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_target_=="cell")
	var code = 'table_td_insert_text(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',' + value_text_+ ',' + value_fontname_ + ',' + value_fontsize_ + ',' + value_color_+ ');\n';
  else if  (value_target_=="col")
	var code = 'table_td_insert_text(' + value_id_ + ','+ value_x_ + ',-1,' + value_text_+ ',' + value_fontname_ + ',' + value_fontsize_ + ',' + value_color_+ ');\n';
  else if  (value_target_=="row")
	var code = 'table_td_insert_text(' + value_id_ + ',-1,' + value_y_ + ',' + value_text_+ ',' + value_fontname_ + ',' + value_fontsize_ + ',' + value_color_+ ');\n';
  return code;
};

Blockly.JavaScript['table_td_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_td_get(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"' + value_property_+ '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['table_td_onclick_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);  
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'if ((table_get(' + value_id_ + ',"onclick[Column,Row]")) == '+ value_x_ + '+","+' + value_y_ + ') {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.JavaScript['table_td_clear'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_td_clear(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.JavaScript['table_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'table_delete(' + value_id_ + ');\n';
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

Blockly.JavaScript['canvas_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'canvas_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'canvas_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['canvas_line'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'canvas_line(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_x1_ + ',' + value_y1_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
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
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_rect(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
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
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_arc(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_r_ + ',' + value_sAngle_ + ',' + value_eAngle_ + ',' + value_counterclockwise_ + ',' + value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_img_url'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'canvas_img_url("' + value_source_ + '",' + value_url_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_img'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sx_ = Blockly.JavaScript.valueToCode(block, 'sx_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sy_ = Blockly.JavaScript.valueToCode(block, 'sy_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_swidth_ = Blockly.JavaScript.valueToCode(block, 'swidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sheight_ = Blockly.JavaScript.valueToCode(block, 'sheight_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_img(' + value_id_ + ',' + value_sx_ + ',' + value_sy_ + ',' + value_swidth_ + ','+ value_sheight_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_capturevideo'] = function (block) {
  var value_canvasid_ = Blockly.JavaScript.valueToCode(block, 'canvasid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_videoid_ = Blockly.JavaScript.valueToCode(block, 'videoid_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sx_ = Blockly.JavaScript.valueToCode(block, 'sx_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sy_ = Blockly.JavaScript.valueToCode(block, 'sy_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_swidth_ = Blockly.JavaScript.valueToCode(block, 'swidth_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sheight_ = Blockly.JavaScript.valueToCode(block, 'sheight_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_capturevideo(' + value_canvasid_ + ',' + value_videoid_ + ',' + value_sx_ + ',' + value_sy_ + ',' + value_swidth_ + ','+ value_sheight_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
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
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_text(' + value_id_ + ',' + value_text_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_fontname_ + ','+ value_fontsize_ + ',"' + value_textalign_ + '",'+ value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_quadraticcurve'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp1x_ = Blockly.JavaScript.valueToCode(block, 'cp1x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp1y_ = Blockly.JavaScript.valueToCode(block, 'cp1y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fill_ = Blockly.JavaScript.valueToCode(block, 'fill_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_quadraticcurve(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ','+ value_cp1x_ + ',' + value_cp1y_ + ',' + value_x_ + ',' + value_y_ + ',' + value_linewidth_ + ',' + value_color_ + ',' + value_fill_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_beziercurve'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp1x_ = Blockly.JavaScript.valueToCode(block, 'cp1x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp1y_ = Blockly.JavaScript.valueToCode(block, 'cp1y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp2x_ = Blockly.JavaScript.valueToCode(block, 'cp2x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cp2y_ = Blockly.JavaScript.valueToCode(block, 'cp2y_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_linewidth_ = Blockly.JavaScript.valueToCode(block, 'linewidth_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fill_ = Blockly.JavaScript.valueToCode(block, 'fill_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_rotate_ = Blockly.JavaScript.valueToCode(block, 'rotate_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.JavaScript.valueToCode(block, 'globalAlpha_', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'canvas_beziercurve(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ','+ value_cp1x_ + ',' + value_cp1y_ + ','+ value_cp2x_ + ',' + value_cp2y_ + ',' + value_x_ + ',' + value_y_ + ',' + value_linewidth_ + ',' + value_color_ + ',' + value_fill_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.JavaScript['canvas_clearrect'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_ = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_ = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'canvas_clearrect(' + value_id_ + ',' + value_x_ + ','+ value_y_ + ',' + value_width_ + ',' + value_height_ + ');\n';
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

Blockly.JavaScript['canvas_onclick_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'if (canvas_onclick_get(' + value_id_ + ')==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.JavaScript['canvas_onclick_dom'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamecanvas_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamecanvas_'+value_id_+'").addEventListener("click", gamecanvas_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.JavaScript['canvas_onclick_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'canvas_onclick_get(' + value_id_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['canvas_getcolor'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'canvas_getcolor(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['canvas_getimagedata'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'canvas_getimagedata(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ',' + value_width_ + ',' + value_height_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['canvas_setimagedata'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_data_ = Blockly.JavaScript.valueToCode(block, 'data_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'canvas_setimagedata(' + value_id_ + ',' + value_data_ + ',' + value_x0_ + ',' + value_y0_ + ');\n';
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

Blockly.JavaScript['image_create_stream'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'image_create_stream(' + value_id_ + ',' + value_url_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
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

Blockly.JavaScript['elements_collision'] = function (block) {
  var value_element1_ = block.getFieldValue('element1_');
  var value_id1_ = Blockly.JavaScript.valueToCode(block, 'id1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_element2_ = block.getFieldValue('element2_');
  var value_id2_ = Blockly.JavaScript.valueToCode(block, 'id2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_position_ = block.getFieldValue('position_');

  var obj1= 'game'+value_element1_+'_';    
  var obj2= 'game'+value_element2_+'_'; 

  var code = 'elements_collision("'+obj1+'",' + value_id1_ + ',"'+obj2+'",' + value_id2_ + ',"' + value_position_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['elements_collision_color'] = function (block) {
  var value_element1_ = block.getFieldValue('element1_');
  var value_id1_ = Blockly.JavaScript.valueToCode(block, 'id1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_id2_ = Blockly.JavaScript.valueToCode(block, 'id2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);

  var obj1= 'game'+value_element1_+'_'; 

  var code = 'elements_collision_color("'+obj1+'",' + value_id1_ + ',' + value_id2_ + ',' + value_color_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['point_in_element'] = function (block) {
  var x = Blockly.JavaScript.valueToCode(block, 'x_', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'y_', Blockly.JavaScript.ORDER_ATOMIC);
  var element = block.getFieldValue('element_');
  var id = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  
  element = "'game"+element+"_'+"+id;
 
  var code = 'point_in_element('+x+', '+y+', '+element+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['image_collision'] = function (block) {
  var value_id1_ = Blockly.JavaScript.valueToCode(block, 'id1_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_id2_ = Blockly.JavaScript.valueToCode(block, 'id2_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_position_ = block.getFieldValue('position_');
  var code = 'image_collision(' + value_id1_ + ',' + value_id2_ + ',"' + value_position_ + '")';
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

Blockly.JavaScript['image_onclick_dom'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gameimage_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameimage_'+value_id_+'").addEventListener("click", gameimage_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.JavaScript['image_onload_dom'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gameimage_'+value_id_+'_onload (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameimage_'+value_id_+'").addEventListener("load", gameimage_'+value_id_+'_onload, true);\n';
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

Blockly.JavaScript['mouse_coordinate_get_start'] = function (block) {
  var code = 'mouse_coordinate_get_start();\n';
  return code;
};

Blockly.JavaScript['mouse_coordinate_get'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var code = 'mouse_coordinate_get("' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['document_timer_novar'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setInterval(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer_once_novar'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setTimeout(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer'] = function (block) {
  var variable_myTimer_ = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('myTimer_'), Blockly.VARIABLE_CATEGORY_NAME);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_myTimer_+' = setInterval(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer_once'] = function (block) {
  var variable_myTimerOnce_ = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('myTimerOnce_'), Blockly.VARIABLE_CATEGORY_NAME);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.JavaScript.valueToCode(block, 'intervals_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_myTimerOnce_+' = setTimeout(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.JavaScript['document_timer_stop'] = function (block) {
  var variable_myTimer_ = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('myTimer_'), Blockly.VARIABLE_CATEGORY_NAME);
  var code = 'clearInterval(' + variable_myTimer_ + ');\n';
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

Blockly.JavaScript['gameelements_1'] = function (block) {
  var code = '';
  return code;
};

Blockly.JavaScript['move_to_mouse'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_position = block.getFieldValue('position');
  if (value_position=="center")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX"))-(image_get('+value_id_+',"width"))/2);\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY"))-(image_get('+value_id_+',"height"))/2);\n';
  else if (value_position=="up")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX"))-(image_get('+value_id_+',"width"))/2);\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")));\n';
  else if (value_position=="down")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX"))-(image_get('+value_id_+',"width"))/2);\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY"))-(image_get('+value_id_+',"height")));\n';
  else if (value_position=="left")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY"))-(image_get('+value_id_+',"height"))/2);\n';
  else if (value_position=="right")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX"))-(image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY"))-(image_get('+value_id_+',"height"))/2);\n';
  else if (value_position=="upperLeft")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")));\n';
  else if (value_position=="lowerLeft")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY"))-(image_get('+value_id_+',"height")));\n';
  else if (value_position=="upperRight")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX"))-(image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")));\n';
  else if (value_position=="lowerRight")
   var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX"))-(image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY"))-(image_get('+value_id_+',"height")));\n';
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

Blockly.JavaScript['rotate_vertical_flip'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'if (image_get('+value_id_+',"rotateX")<=90||image_get('+value_id_+',"rotateX")=="") \n  image_set('+value_id_+',"rotateX",180); \nelse \n  image_set('+value_id_+',"rotateX",0);\n';
  return code;
};

Blockly.JavaScript['rotate_horizontal_flip'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'if (image_get('+value_id_+',"rotateY")<=90||image_get('+value_id_+',"rotateY")=="") \n  image_set('+value_id_+',"rotateY",180); \nelse \n  image_set('+value_id_+',"rotateY",0);\n';
  return code;
};

Blockly.JavaScript['button_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bgcolor_ = Blockly.JavaScript.valueToCode(block, 'bgcolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);
  if (!value_fontsize_) value_fontsize_=12; 
  var code = 'button_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_bgcolor_ + ',' + value_value_ + ',' + value_fontsize_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
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
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamebutton_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamebutton_'+value_id_+'").addEventListener("click", gamebutton_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.JavaScript['async_function'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_name_.indexOf("'")==0)&&(value_name_.lastIndexOf("'")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  if ((value_name_.indexOf("(")==0)&&(value_name_.lastIndexOf(")")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  
  var value_parameter_ = Blockly.JavaScript.valueToCode(block, 'parameter_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_parameter_.indexOf("'")==0)&&(value_parameter_.lastIndexOf("'")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf("(")==0)&&(value_parameter_.lastIndexOf(")")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf("[")==0)&&(value_parameter_.lastIndexOf("]")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function '+value_name_+'('+value_parameter_+'){\n' + statements_do_ + '};\n';
  return code;
};

Blockly.JavaScript['call_async_function'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);   
  if ((value_name_.indexOf("'")==0)&&(value_name_.lastIndexOf("'")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  if ((value_name_.indexOf("(")==0)&&(value_name_.lastIndexOf(")")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  var value_parameter_ = Blockly.JavaScript.valueToCode(block, 'parameter_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_parameter_.indexOf("'")==0)&&(value_parameter_.lastIndexOf("'")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf("(")==0)&&(value_parameter_.lastIndexOf(")")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1); 
  if ((value_parameter_.indexOf("[")==0)&&(value_parameter_.lastIndexOf("]")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  var code = 'await '+ value_name_ + '('+value_parameter_+');\n';
  return code;
};

Blockly.JavaScript['transform_async_function'] = function (block) {
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = statements_do_.replace(/function/g,"async function").replace(/async async/g,"async");
  return code;
};


Blockly.JavaScript['element_event'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var element = block.getFieldValue('element');
  var event = block.getFieldValue('event');
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');
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

Blockly.JavaScript['element_event_stop'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
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

Blockly.JavaScript['colorpicker_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'colorpicker_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['colorpicker_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'colorpicker_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['colorpicker_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'colorpicker_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['colorpicker_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'colorpicker_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['colorpicker_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamecolor_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamecolor_'+value_id_+'").addEventListener("change", gamecolor_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['select_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_background_ = Blockly.JavaScript.valueToCode(block, 'background_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_option_ = Blockly.JavaScript.valueToCode(block, 'option_', Blockly.JavaScript.ORDER_ATOMIC);
  value_option_ = value_option_.replace(/{/g,"[").replace(/}/g,"]");
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'select_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_option_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['select_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'select_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['select_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'select_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['select_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'select_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['select_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gameselect_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameselect_'+value_id_+'").addEventListener("change", gameselect_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['range_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max_ = Blockly.JavaScript.valueToCode(block, 'max_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_min_ = Blockly.JavaScript.valueToCode(block, 'min_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_step_ = Blockly.JavaScript.valueToCode(block, 'step_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'range_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_max_ + ',' + value_min_ + ',' + value_step_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['range_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'range_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['range_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'range_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['range_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'range_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['range_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamerange_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamerange_'+value_id_+'").addEventListener("change", gamerange_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['text_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_background_ = Blockly.JavaScript.valueToCode(block, 'background_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'text_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['text_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'text_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['text_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'text_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['text_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'text_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['text_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gametext_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gametext_'+value_id_+'").addEventListener("change", gametext_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['div_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background_ = Blockly.JavaScript.valueToCode(block, 'background_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_innerHTML_ = Blockly.JavaScript.valueToCode(block, 'innerHTML_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'div_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_innerHTML_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['div_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'div_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['div_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'div_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['div_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'div_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['color_hextorgb'] = function (block) {
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'HextoRgb(' + value_color_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['body_set'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'body_set("' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['time_delay'] = function (block) {
  var seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'await delay(' + seconds + ');\n';
  return code;
};

Blockly.JavaScript['position_distance'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'position_distance(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['position_angle'] = function (block) {
  var value_x0_ = Blockly.JavaScript.valueToCode(block, 'x0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y0_ = Blockly.JavaScript.valueToCode(block, 'y0_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x1_ = Blockly.JavaScript.valueToCode(block, 'x1_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1_ = Blockly.JavaScript.valueToCode(block, 'y1_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'position_angle(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['iframe_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frameborder_ = block.getFieldValue('frameborder_');
  var value_scrolling_ = block.getFieldValue('scrolling_');
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_srcdoc_ = Blockly.JavaScript.valueToCode(block, 'srcdoc_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'iframe_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',"'+ value_frameborder_ + '","' + value_scrolling_ + '",' + value_src_ + ',' + value_srcdoc_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['iframe_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'iframe_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['iframe_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'iframe_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['iframe_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'iframe_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['ajax_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_type_ = block.getFieldValue('type_');
  var value_datatype_ = block.getFieldValue('datatype_');
  var value_async_ = block.getFieldValue('async_');
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);  
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  Blockly.JavaScript.definitions_['ajaxData_'+value_id_.replace(/'/g,"")] = 'var ajaxData_'+value_id_.replace(/'/g,"")+';';

  var code = '$.ajax({ \n  type: "'+value_type_+'" , \n  url: '+value_url_+' , \n  dataType: "'+value_datatype_+'", \n  async: '+value_async_+', \n  success: function(data, textStatus) {\n    ajaxData_'+value_id_.replace(/'/g,"")+'=data;\n  '+ statements_do +'\n},\nerror: function (jqXHR, textStatus, errorThrown) {\nconsole.log(jqXHR.statusText);}\n});\n';
  return code;
};

Blockly.JavaScript['ajax_getdata'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_format_ = block.getFieldValue('format_');

  if (value_format_=="XML to String")
	var code = 'new XMLSerializer().serializeToString(ajaxData_'+value_id_.replace(/'/g,"")+')';
  else if (value_format_=="JSON to String")
	var code = 'JSON.stringify(ajaxData_'+value_id_.replace(/'/g,"")+')';
  else
	var code = 'ajaxData_'+value_id_.replace(/'/g,"");
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ajax_getdata_json'] = function (block) {
  var value_json_ = Blockly.JavaScript.valueToCode(block, 'json_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_index_ = Blockly.JavaScript.valueToCode(block, 'index_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fieldname_ = Blockly.JavaScript.valueToCode(block, 'fieldname_', Blockly.JavaScript.ORDER_ATOMIC);
  
  code = 'ajax_getdata_json('+value_json_+','+ value_index_+','+ value_fieldname_+')';
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ajax_getdata_json_count'] = function (block) {
  var value_json_ = Blockly.JavaScript.valueToCode(block, 'json_', Blockly.JavaScript.ORDER_ATOMIC);
  
  code = 'ajax_getdata_json_count('+value_json_+')';
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ajax_cleardata'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'ajaxData_'+value_id_.replace(/'/g,"")+' = "";\n';
  return code;
};

Blockly.JavaScript['a_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.JavaScript.valueToCode(block, 'borderwidth_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.JavaScript.valueToCode(block, 'bordercolor_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background_ = Blockly.JavaScript.valueToCode(block, 'background_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_innerHTML_ = Blockly.JavaScript.valueToCode(block, 'innerHTML_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_href_ = Blockly.JavaScript.valueToCode(block, 'href_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_target_ = block.getFieldValue('target_');
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'a_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_innerHTML_ + ',' + value_href_ + ',"' + value_target_ + '",' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['a_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'a_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['a_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'a_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['a_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'a_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['radio_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size_ = Blockly.JavaScript.valueToCode(block, 'size_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_checked_ = Blockly.JavaScript.valueToCode(block, 'checked_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'radio_create(' + value_id_ + ',' + value_name_ + ','+ value_left_ + ',' + value_top_ + ',' + value_size_ + ',' + value_value_ + ',' + value_checked_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['radio_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'radio_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['radio_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'radio_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['radio_name_get'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'radio_name_get(' + value_name_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['radio_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'radio_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['radio_onclick_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gameradio_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameradio_'+value_id_+'").addEventListener("click", gameradio_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.JavaScript['checkbox_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size_ = Blockly.JavaScript.valueToCode(block, 'size_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_checked_ = Blockly.JavaScript.valueToCode(block, 'checked_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'checkbox_create(' + value_id_ + ','+ value_left_ + ',' + value_top_ + ',' + value_size_ + ',' + value_value_ + ',' + value_checked_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['checkbox_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'checkbox_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['checkbox_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'checkbox_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['checkbox_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'checkbox_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['checkbox_onclick_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamecheckbox_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamecheckbox_'+value_id_+'").addEventListener("click", gamecheckbox_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.JavaScript['textarea_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cols_ = Blockly.JavaScript.valueToCode(block, 'cols_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rows_ = Blockly.JavaScript.valueToCode(block, 'rows_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'textarea_create(' + value_id_ + ','+ value_left_ + ',' + value_top_ + ',' + value_cols_ + ',' + value_rows_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['textarea_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'textarea_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['textarea_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'textarea_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['textarea_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'textarea_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['textarea_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gametextarea_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gametextarea_'+value_id_+'").addEventListener("change", gametextarea_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['number_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_max_ = Blockly.JavaScript.valueToCode(block, 'max_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_min_ = Blockly.JavaScript.valueToCode(block, 'min_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_step_ = Blockly.JavaScript.valueToCode(block, 'step_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'number_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_width_ + ',' + value_height_ + ',' + value_fontsize_ + ',' + value_max_ + ',' + value_min_ + ',' + value_step_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['number_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'number_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['number_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'number_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['number_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'number_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['number_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamenumber_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamenumber_'+value_id_+'").addEventListener("change", gamenumber_'+value_id_+'_onchange, true);\n';
  return code;
};


Blockly.JavaScript['date_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_max_ = Blockly.JavaScript.valueToCode(block, 'max_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_min_ = Blockly.JavaScript.valueToCode(block, 'min_', Blockly.JavaScript.ORDER_ATOMIC);   
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'date_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_max_ + ',' + value_min_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['date_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'date_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['date_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'date_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['date_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'date_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['date_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamedate_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamedate_'+value_id_+'").addEventListener("change", gamedate_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['time_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);   
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'time_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['time_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'time_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['time_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'time_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['time_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'time_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['time_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gametime_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gametime_'+value_id_+'").addEventListener("change", gametime_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['datetime_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);   
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'datetime_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['datetime_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'datetime_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['datetime_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'datetime_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['datetime_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'datetime_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['datetime_onchange_do'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'async function gamedatetime_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamedatetime_'+value_id_+'").addEventListener("change", gamedatetime_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.JavaScript['progress_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max_ = Blockly.JavaScript.valueToCode(block, 'max_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'progress_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_max_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['progress_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'progress_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['progress_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'progress_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['progress_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'progress_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['password_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_maxlength_ = Blockly.JavaScript.valueToCode(block, 'maxlength_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_background_ = Blockly.JavaScript.valueToCode(block, 'background_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC); 
  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'password_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_maxlength_ + ',' + value_value_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['password_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'password_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['password_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'password_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['password_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'password_delete(' + value_id_ + ');\n';
  return code;
};


Blockly.JavaScript['form_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_action_ = Blockly.JavaScript.valueToCode(block, 'action_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_enctype_ = block.getFieldValue('enctype_');
  var value_method_ = block.getFieldValue('method_');
  var value_target_ = Blockly.JavaScript.valueToCode(block, 'target_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'form_create(' + value_id_ + ','+ value_action_ + ',"' + value_enctype_ + '","' + value_method_ + '",' + value_target_ + ');\n';
  return code;
};

Blockly.JavaScript['form_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'form_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['form_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'form_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['form_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'form_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['form_insert'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_element_ = block.getFieldValue('element_');
  var value_elementid_ = Blockly.JavaScript.valueToCode(block, 'elementid_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'form_insert(' + value_id_ + ',"' + value_element_ + '",' + value_elementid_ + ');\n';
  return code;
};

Blockly.JavaScript['form_submit'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'form_submit(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['head_add_viewport'] = function (block) {
  var value_initialscale_ = Blockly.JavaScript.valueToCode(block, 'initialscale_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_minimumscale_ = Blockly.JavaScript.valueToCode(block, 'minimumscale_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_maximumscale_ = Blockly.JavaScript.valueToCode(block, 'maximumscale_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_scalable_ = block.getFieldValue('scalable_');
  var code = 'head_add_viewport(' + value_initialscale_ + ',' + value_minimumscale_ + ',' + value_maximumscale_ + ',"' + value_scalable_ + '");\n';
  return code;
};

Blockly.JavaScript['video_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_src_ = Blockly.JavaScript.valueToCode(block, 'src_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cam_ = block.getFieldValue('cam_');
  var value_autoplay_ = block.getFieldValue('autoplay_');
  var value_loop_ = block.getFieldValue('loop_');
  var value_muted_ = block.getFieldValue('muted_');
  var value_controls_ = block.getFieldValue('controls_');
  var value_preload_ = block.getFieldValue('preload_');
  var value_opacity_ = Blockly.JavaScript.valueToCode(block, 'opacity_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'video_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ','+ value_cam_ + ','+ value_src_ + ',' + value_autoplay_ + ',' + value_loop_ + ',' + value_muted_ + ',' + value_controls_ + ',' + value_preload_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.JavaScript['video_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'video_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['video_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'video_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['video_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'video_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['video_base64'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
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
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['video_base64_spreadsheet'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
	
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
	
  var value_spreadsheeturl_ = Blockly.JavaScript.valueToCode(block, 'spreadsheeturl_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_spreadsheetname_ = Blockly.JavaScript.valueToCode(block, 'spreadsheetname_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_column_ = Blockly.JavaScript.valueToCode(block, 'column_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row_ = Blockly.JavaScript.valueToCode(block, 'row_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_spreadsheet_script_ = Blockly.JavaScript.valueToCode(block, 'spreadsheet_script_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_format_ = block.getFieldValue('format_');
  
  var code = 'video_base64_spreadsheet("' + source_id + '",'+value_spreadsheeturl_+','+value_spreadsheetname_+','+value_column_+','+value_row_+','+value_height_+',"'+value_format_+'",'+value_spreadsheet_script_+');\n';
  return code;
};

Blockly.JavaScript['video_base64_drive'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
	
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
	
  var value_foldername_ = Blockly.JavaScript.valueToCode(block, 'foldername_', Blockly.JavaScript.ORDER_ATOMIC);	
  var value_filename_ = Blockly.JavaScript.valueToCode(block, 'filename_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_drive_script_ = Blockly.JavaScript.valueToCode(block, 'drive_script_', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'video_base64_drive("' + source_id + '",'+value_foldername_+','+value_filename_+','+value_drive_script_+');\n';
  return code;
};

Blockly.JavaScript['video_base64_email'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
	
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

  var value_recipient_ = Blockly.JavaScript.valueToCode(block, 'recipient_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_subject_ = Blockly.JavaScript.valueToCode(block, 'subject_', Blockly.JavaScript.ORDER_ATOMIC);	
  var value_email_script_ = Blockly.JavaScript.valueToCode(block, 'email_script_', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'video_base64_email("' + source_id + '",'+value_recipient_+','+value_subject_+','+value_email_script_+');\n';
  return code;
};

Blockly.JavaScript['custom_comment'] = function (block) {
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  if ((text.indexOf("'")==0)&&(text.lastIndexOf("'")==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = '//' + text+'\n';
  return code;
};

Blockly.JavaScript['variable_board'] = function (block) {
  var code = 'board';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['custom_style'] = function (block) {
  var element = block.getFieldValue('element');
  var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var style = block.getFieldValue('style');
  var property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_ATOMIC);
  var val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
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
	cmd = cmd+"."+property+" = "+val+";\n";
  else
	cmd = cmd+".style."+property+" = "+val+";\n";
  var code = cmd;
  return code;
};

Blockly.JavaScript['font_text'] = function (block) {
  var value_size = Blockly.JavaScript.valueToCode(block, 'size_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_face = Blockly.JavaScript.valueToCode(block, 'face_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'fontText('+value_size + ',' + value_color + ',' + value_face + ',' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['font_b'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'fontB(' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['font_i'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'fontI(' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['font_u'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'fontU(' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['font_sup'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'fontSup(' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['font_sub'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'fontSub(' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['font_em'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'fontEm(' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['font_strong'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'fontStrong(' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['font_code'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
	
  var code = 'fontCode(' + value_text + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['location'] = function (block) {
  var value_property = block.getFieldValue('value_property'); 

  if (value_property=="hosturl")
	var code = 'window.location.protocol+"//"+window.location.host+"/"';
  else
	var code = 'window.location.' + value_property;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['console_log'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console.log(' + value_text + ');\n';
  return code;
};

Blockly.JavaScript['button_ouput_file_text'] = function (block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC); 
  if ((value_id.indexOf("'")==0)&&(value_id.lastIndexOf("'")==value_id.length-1))
    value_id = value_id.substring(1,value_id.length-1);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'async function gamebutton_'+value_id+'_onclick (event) {\n  outputfile_text(' + value_text + ');\n};\ndocument.getElementById("gamebutton_'+value_id+'").addEventListener("click", gamebutton_'+value_id+'_onclick, true);\n';
  return code;
};

Blockly.JavaScript['video_output_jpg'] = function (block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'outputfile_jpg('+value_id+');\n';
  return code;
};

Blockly.JavaScript['window_open'] = function (block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = block.getFieldValue('name_');
  var code = 'window.open('+value_url+',"'+value_name+'");\n';
  return code;
};

Blockly.JavaScript['span_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.JavaScript.valueToCode(block, 'fontsize_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_innerHTML_ = Blockly.JavaScript.valueToCode(block, 'innerHTML_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'span_create(' + value_id_ + ','+ value_left_ + ',' + value_top_ + ','+ value_fontsize_ + ',' + value_innerHTML_ + ',' + value_zindex_ + ');\n';
  return code;
};

Blockly.JavaScript['span_set'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'span_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.JavaScript['span_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'span_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['span_delete'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'span_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.JavaScript['image_binarytobase64'] = function (block) {
  var value_array = Blockly.JavaScript.valueToCode(block, 'array_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '"data:image/jpeg;base64,"+ binarytobase64('+value_array+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['fetch_get'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_datatype_ = block.getFieldValue('datatype_');
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);  
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  Blockly.JavaScript.definitions_['fetchData_'+value_id_.replace(/'/g,"")] = 'var fetchData_'+value_id_.replace(/'/g,"")+';';

  var value_response_ = "response";
  if (value_datatype_=="json")
	  value_response_ = "return response.json();";
  else if (value_datatype_=="text")
	  value_response_ = "return response.text();";
  else if (value_datatype_=="blob")
	  value_response_ = "return response.blob();";
  
  var code = 'fetch('+value_url_+')\n.then(function (response) {\n    '+value_response_+'\n})\n.then(function (data) {\n    fetchData_'+value_id_.replace(/'/g,"")+'=data;\n  '+ statements_do +'\n})\n.catch(\n(error) => {\n    console.log(`Error: ${error}`);\n}\n);';

  return code;
};

Blockly.JavaScript['fetch_getdata'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_format_ = block.getFieldValue('format_');
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);  

  if (value_format_=="JSON to String")
	var code = 'JSON.stringify(fetchData_'+value_id_.replace(/'/g,"")+')';
  else if (value_format_=="BLOB to ObjectURL")
	var code = 'URL.createObjectURL(fetchData_'+value_id_.replace(/'/g,"")+')';
  else
	var code = 'fetchData_'+value_id_.replace(/'/g,"");
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['text_br'] = function (block) {
  var code = "'"+this.getFieldValue("newline")+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['procedures_return'] = function (block) {
  var value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'return ' + value_ + ';\n';
  return code;
};

Blockly.JavaScript['urlcode'] = function (block) {
  var command = block.getFieldValue('command');
  var url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)||"";
  var code = command+'('+url+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['code_text'] = function (block) {
  var code = Blockly.JavaScript.valueToCode(block, 'code', Blockly.JavaScript.ORDER_ATOMIC)||"";
  if ((code.indexOf("'")==0)&&(code.lastIndexOf("'")==code.length-1))
    code = code.substring(1,code.length-1);
  if ((code.indexOf('"')==0)&&(code.lastIndexOf('"')==code.length-1))
    code = code.substring(1,code.length-1);	
  return code;
};

Blockly.JavaScript['document_exitFullscreen'] = function (block) {
  var code = 'parent.document.exitFullscreen();\n';  
  return code;
};

Blockly.JavaScript['window_messagebox'] = function (block) {
  var message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'alert('+message+');\n';  
  return code;
};

Blockly.JavaScript['window_confirm'] = function (block) {
  var message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC); 	
  var statements_yes = Blockly.JavaScript.statementToCode(block, 'yes');
  var statements_no = Blockly.JavaScript.statementToCode(block, 'no');  
  var code = 'var windowConfirm = window.confirm('+message+');\nif (windowConfirm==true) {\n  '+statements_yes +'\n}\nelse {\n  '+ statements_no + '\n}\n';  
  return code;
};

Blockly.JavaScript['system_datetime_get'] = function (block) {
  var newdate = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('newdate'), Blockly.VARIABLE_CATEGORY_NAME);	
  var type = block.getFieldValue('type');
  var code = 'getDatetime('+newdate+', "' + type + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['system_datetime_set'] = function (block) {
  var newdate = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('newdate'), Blockly.VARIABLE_CATEGORY_NAME);
  var years = Blockly.JavaScript.valueToCode(block, 'years', Blockly.JavaScript.ORDER_ATOMIC)||0;
  var months = Blockly.JavaScript.valueToCode(block, 'months', Blockly.JavaScript.ORDER_ATOMIC)||0;  
  var days = Blockly.JavaScript.valueToCode(block, 'days', Blockly.JavaScript.ORDER_ATOMIC)||0;
  var hours = Blockly.JavaScript.valueToCode(block, 'hours', Blockly.JavaScript.ORDER_ATOMIC)||0;
  var minutes = Blockly.JavaScript.valueToCode(block, 'minutes', Blockly.JavaScript.ORDER_ATOMIC)||0;
  var seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC)||0; 
  var code = newdate + ' = setDatetime('+years+', '+months+', '+days+', '+hours+', '+minutes+', '+seconds+');\n';
  return code;
};

Blockly.JavaScript['include_file'] = function (block) {
  var type = block.getFieldValue('type');
  var position = block.getFieldValue('position');
  var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC); 
  if (type=="css") position = "";
  
  var code = 'include_file("'+type+'", "'+position+'", '+value+');\n';
  return code;
};
