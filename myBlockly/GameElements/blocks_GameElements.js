Blockly.Blocks['table_create'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_CREATE_SHOW)
      .appendField(Blockly.Msg.ID_SHOW);     
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT_SHOW);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE_SHOW)
      .appendField(new Blockly.FieldDropdown([["solid","solid"], ["dashed","dashed"], ["double","double"], ["dotted","dotted"], ["groove","groove"], ["ridge","ridge"], ["inset","inset"], ["outset","outset"], ["inherit","inherit"], ["none","none"], ["hidden","hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH_SHOW);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR_SHOW);       
  this.appendValueInput("trcount_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TRCOUNT_SHOW);    
  this.appendValueInput("tdcount_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TDCOUNT_SHOW);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_WIDTH_SHOW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_HEIGHT_SHOW);    
  this.appendValueInput("bgcolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BGCOLOR_SHOW); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX_SHOW);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY_SHOW); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW);     
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_SET_SHOW) 
      .appendField(new Blockly.FieldDropdown([["left","left"], ["top","top"], ["borderstyle","borderstyle"], ["borderwidth","borderwidth"], ["bordercolor","bordercolor"], ["cellwidth","cellwidth"], ["cellheight","cellheight"], ["cellcolor","cellcolor"], ["background","background"], ["backgroundimage","backgroundimage"], ["zindex","zindex"], ["display","display"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_GET_SHOW) 
      .appendField(new Blockly.FieldDropdown([["onclick[Column,Row]","onclick[Column,Row]"], ["onclickImage","onclickImage"], ["columns","columns"], ["rows","rows"], ["left","left"], ["top","top"], ["borderstyle","borderstyle"], ["borderwidth","borderwidth"], ["bordercolor","bordercolor"], ["background","background"], ["backgroundimage","backgroundimage"], ["zindex","zindex"], ["display","display"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['table_clear'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.TABLE_CLEAR_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_SET_SHOW)
      .appendField(Blockly.Msg.TABLE_TD_X_SHOW);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y_SHOW);       
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["width","width"], ["height","height"], ["textalign","textalign"], ["background","background"], ["innerHTML","innerHTML"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_border_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDER_SET_SHOW)
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE_SHOW)
      .appendField(new Blockly.FieldDropdown([["solid","solid"], ["dashed","dashed"], ["double","double"], ["dotted","dotted"], ["groove","groove"], ["ridge","ridge"], ["inset","inset"], ["outset","outset"], ["inherit","inherit"], ["none","none"], ["hidden","hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH_SHOW);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR_SHOW);       
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_border_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_BORDER_SET_SHOW)
      .appendField(Blockly.Msg.TABLE_TD_X_SHOW);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y_SHOW);       
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE_SHOW)
      .appendField(new Blockly.FieldDropdown([["solid","solid"], ["dashed","dashed"], ["double","double"], ["dotted","dotted"], ["groove","groove"], ["ridge","ridge"], ["inset","inset"], ["outset","outset"], ["inherit","inherit"], ["none","none"], ["hidden","hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH_SHOW);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR_SHOW);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_GET_SHOW)
      .appendField(Blockly.Msg.TABLE_TD_X_SHOW);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_SHOW)
      .appendField(new Blockly.FieldDropdown([["width","width"], ["height","height"], ["background","background"], ["text","text"], ["innerHTML","innerHTML"], ["image","image"], ["tdid","tdid"]]), "property_");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['table_td_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW);     
  this.appendValueInput("x_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_TD_X_SHOW);
  this.appendValueInput("y_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_TD_Y_SHOW); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.TABLE_TD_ONCLICK_DO_SHOW);    
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_insert_img'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_INSERT_IMAGE_SHOW)
      .appendField(Blockly.Msg.TABLE_TD_X_SHOW);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y_SHOW); 
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);      
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.URL_SHOW);     
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH_SHOW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT_SHOW);   
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_img_move'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_IMAGE_MOVE_SHOW)
      .appendField(Blockly.Msg.TABLE_TD_X_SHOW);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y_SHOW);     
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_copy_move'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_COPY_MOVE_SHOW)
      .appendField(Blockly.Msg.TABLE_TD_X_SHOW);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y_SHOW);     
this.appendDummyInput()  
      .appendField(" ")
      .appendField(new Blockly.FieldDropdown([["copy to","copy"], ["move to","move"]]), "property_")
      .appendField(" ");
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X_SHOW);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y_SHOW);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_img_get'] = {
  init: function () {
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_IMAGE_GET_SHOW)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW); 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["column","column"], ["row","row"], ["width","width"], ["height","height"], ["naturalwidth","naturalwidth"], ["naturalheight","naturalheight"], ["imageid","imageid"]]), "property_");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['table_td_insert_text'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_INSERT_TEXT_SHOW)
      .appendField(Blockly.Msg.TABLE_TD_X_SHOW);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y_SHOW); 
  this.appendValueInput("text_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CONTEXT_SHOW);
  this.appendValueInput("fontname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTNAME_SHOW);    
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE_SHOW); 
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTCOLOR_SHOW);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_clear'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_CLEAR_SHOW)
      .appendField(Blockly.Msg.TABLE_TD_X_SHOW);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y_SHOW); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_ID_SHOW); 
  this.appendDummyInput() 
      .appendField(Blockly.Msg.TABLE_DELETE_SHOW);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['music_create'] = {
  init: function() {
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_CREATE_SHOW)
      .appendField(Blockly.Msg.URL_SHOW);
  this.appendValueInput("length_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_LENGTH_SHOW);
  this.appendValueInput("loop_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_LOOP_SHOW);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['music_delete'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MUSIC_DELETE_SHOW);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['canvas_create'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_CREATE_SHOW)
      .appendField(Blockly.Msg.CANVAS_ID_SHOW); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH_SHOW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT_SHOW);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT_SHOW);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP_SHOW);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX_SHOW);   
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_line'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID_SHOW);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_LINE_SHOW)    
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH_SHOW);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0_SHOW);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0_SHOW);
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X1_SHOW);    
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y1_SHOW);  
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR_SHOW);  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_rect'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID_SHOW);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_RECT_SHOW)    
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH_SHOW);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0_SHOW);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0_SHOW);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH_SHOW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT_SHOW);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL_SHOW);     
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR_SHOW);   
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_arc'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID_SHOW);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_ARC_SHOW)    
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH_SHOW);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0_SHOW);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0_SHOW);
  this.appendValueInput("r_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_R_SHOW);    
  this.appendValueInput("sAngle_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SANGLE_SHOW);  
  this.appendValueInput("eAngle_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_EANGLE_SHOW);
  this.appendValueInput("counterclockwise_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_COUNTERCLOCKWISE_SHOW);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL_SHOW);      
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR_SHOW);   
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_img_url'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.CANVAS_IMG_SHOW);
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.URL_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_img'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_IMG_SHOW)
      .appendField(Blockly.Msg.ID_SHOW);  
  this.appendValueInput("sx_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SX_SHOW);
  this.appendValueInput("sy_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SY_SHOW);
  this.appendValueInput("swidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SWIDTH_SHOW);
  this.appendValueInput("sheight_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SHEIGHT_SHOW);     
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0_SHOW);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0_SHOW);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH_SHOW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT_SHOW); 
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_text'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_ID_SHOW);
  this.appendValueInput("text_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_TEXT_SHOW)    
      .appendField(Blockly.Msg.CONTEXT_SHOW);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0_SHOW);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0_SHOW);
  this.appendValueInput("fontname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTNAME_SHOW);    
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTALIGN_SHOW)
      .appendField(new Blockly.FieldDropdown([["start","start"], ["end","end"], ["center","center"], ["left","left"], ["right","right"]]), "textalign_");
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL_SHOW);     
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR_SHOW); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_clear'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID_SHOW);
  this.appendDummyInput() 
      .appendField(Blockly.Msg.CANVAS_CLEAR_SHOW);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.CANVAS_DELETE_SHOW);   
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_create'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IMAGE_CREATE_SHOW)
      .appendField(Blockly.Msg.ID_SHOW); 
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.URL_SHOW);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH_SHOW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT_SHOW);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT_SHOW);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP_SHOW);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX_SHOW);      
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY_SHOW);        
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);    
  this.appendDummyInput() 
      .appendField(Blockly.Msg.SET_SHOW)    
      .appendField(new Blockly.FieldDropdown([["url","url"], ["width","width"], ["height","height"], ["left","left"], ["top","top"], ["zindex","zindex"], ["display","display"], ["opacity","opacity"], ["rotate","rotate"], ["rotateX","rotateX"], ["rotateY","rotateY"], ["rotateZ","rotateZ"], ["moveX","moveX"], ["moveY","moveY"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GET_SHOW)    
      .appendField(new Blockly.FieldDropdown([["exist","exist"], ["url","url"], ["width","width"], ["height","height"], ["naturalwidth","naturalwidth"], ["naturalheight","naturalheight"], ["left","left"], ["top","top"], ["zindex","zindex"], ["display","display"], ["opacity","opacity"], ["rotate","rotate"], ["rotateX","rotateX"], ["rotateY","rotateY"], ["rotateZ","rotateZ"], ["id","id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_delete'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.DELETE_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(60);
  }
};

Blockly.Blocks['image_collision'] = {
  init: function() {
  this.appendValueInput("id1_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLLISION_SHOW)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW); 
  this.appendValueInput("id2_")
      .setCheck(null)
      .appendField(Blockly.Msg.AND_SHOW)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_boundary'] = {
  init: function() {
  this.appendValueInput("left_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.BOUNDARY_SHOW)
      .appendField(Blockly.Msg.WIDTH_SHOW);
  this.appendValueInput("top_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.HEIGHT_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_boundary_collision'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);       
  this.appendDummyInput()
      .appendField(Blockly.Msg.BOUNDARY_COLLISION_SHOW)
      .appendField(new Blockly.FieldDropdown([["up","up"], ["down","down"], ["left","left"], ["right","right"], ["any","any"]]), "property_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_boundary_collision_do'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);      
  this.appendDummyInput()
      .appendField(Blockly.Msg.BOUNDARY_COLLISION_DO_SHOW) 
      .appendField(new Blockly.FieldDropdown([["up","up"], ["down","down"], ["left","left"], ["right","right"], ["any","any"]]), "property_");
  this.appendStatementInput("do_");
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_sys_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SYS_GET_SHOW)
      .appendField(new Blockly.FieldDropdown([["width","screen_width"], ["height","screen_height"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_onclick_listener'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ONCLICK_LISTENER_SHOW);
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['image_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_ONCLICK_DO_SHOW);  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_onclick_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ONCLICK_SHOW);    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_move'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_MOVE_DIRECTION_SHOW)
      .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"], ["up","up"], ["down","down"]]), "property_");   
  this.appendValueInput("step_")
      .setCheck("Number")
      .appendField(Blockly.Msg.IMAGE_MOVE_STEP_SHOW);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_resize'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);
  this.appendValueInput("percentage_")
      .setCheck("Number")
      .appendField(Blockly.Msg.IMAGE_RESIZE_SHOW); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.PERCENTAGE_SHOW);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['mouse_coordinate_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_COORDINATE_GET_SHOW)
      .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"], ["offsetX","offsetX"], ["offsetY","offsetY"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['document_timer'] = {
  init: function () {
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(new Blockly.FieldVariable('fuTimer'), 'fuTimer_')
        .appendField(Blockly.Msg.DOCUMENT_TIMER_SHOW);     
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['document_timer_once'] = {
  init: function () {
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(new Blockly.FieldVariable('fuTimerOnce'), 'fuTimerOnce_')
        .appendField(Blockly.Msg.DOCUMENT_TIMER_ONCE_SHOW);     
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['document_timer_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DOCUMENT_TIMER_STOP_SHOW)
      .appendField(new Blockly.FieldVariable('fuTimer'), 'fuTimer_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['text_to_number'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck(null)
        .appendField(Blockly.Msg.TEXT_TO_NUMBER_SHOW);
    this.setOutput(true);  
    this.setColour(300);
  }  
};

Blockly.Blocks['loop_break'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP_BREAK_SHOW);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['loop_continue'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP_CONTINUE_SHOW);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['function_return'] = {
  init: function () {
    this.appendValueInput("value_")
        .setCheck(null)
        .appendField(Blockly.Msg.FUNCTION_RETURN_SHOW);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['time_delay'] = {
  init: function () {
    this.appendValueInput("seconds")
        .setCheck("Number")
        .appendField(Blockly.Msg.TIME_DELAY_SHOW);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['move_to_mouse'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_TO_MOUSE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["center","center"], ["up","up"], ["down","down"], ["left","left"], ["right","right"], ["upperLeft","upperLeft"], ["lowerLeft","lowerLeft"], ["upperRight","upperRight"], ["lowerRight","lowerRight"]]), "position");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['move_to_coordinate'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_TO_COORDINATE_SHOW);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT_SHOW);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP_SHOW); 
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotatez_degrees'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATEZ_DEGREES_SHOW);  
  this.appendValueInput("degrees_")
      .setCheck("Number"); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotate_vertical_flip'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATE_VERTICAL_FLIP_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotate_horizontal_flip'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID_SHOW); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATE_HORIZONTAL_FLIP_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_create'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_CREATE_SHOW)    
      .appendField(Blockly.Msg.ID_SHOW);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT_SHOW);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP_SHOW);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH_SHOW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT_SHOW);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY_SHOW);  
  this.appendValueInput("bgcolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR_SHOW);     
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.BUTTON_VALUE_SHOW); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX_SHOW);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY_SHOW); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID_SHOW);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BUTTON_SET_SHOW) 
      .appendField(new Blockly.FieldDropdown([["left","left"], ["top","top"], ["width","width"], ["height","height"], ["opacity","opacity"], ["background","background"], ["value","value"], ["zindex","zindex"], ["display","display"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BUTTON_GET_SHOW)
      .appendField(new Blockly.FieldDropdown([["left","left"], ["top","top"], ["width","width"], ["height","height"], ["opacity","opacity"], ["background","background"], ["value","value"], ["zindex","zindex"], ["display","display"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['button_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID_SHOW); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.BUTTON_DELETE_SHOW);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.BUTTON_ID_SHOW);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.BUTTON_ONCLICK_SHOW);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['async_function'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck("String")   
      .appendField(Blockly.Msg.ASYNC_FUNCTION_SHOW);
  this.appendDummyInput()  
      .appendField("(");    
  this.appendValueInput("parameter_")
      .setCheck("String");    
  this.appendDummyInput()  
      .appendField(")");    
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['call_async_function'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck("String")   
      .appendField(Blockly.Msg.CALL_ASYNC_FUNCTION_SHOW);
  this.appendDummyInput()  
      .appendField("(");
  this.appendValueInput("parameter_")
      .setCheck("String");   
  this.appendDummyInput()  
      .appendField(")");    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['transform_async_function'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRANSFORM_ASYNC_FUNCTION_SHOW);    
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
