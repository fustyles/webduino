Blockly.Blocks['image_create'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CREATE_SHOW)
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
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY_SHOW);        
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_set'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SET_SHOW)
      .appendField(new Blockly.FieldDropdown([["url","url"], ["width","width"], ["height","height"], ["left","left"], ["top","top"], ["zindex","zindex"], ["display","display"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.appendValueInput("id_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null) 
      .appendField(Blockly.Msg.ID_SHOW);
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
      .appendField(Blockly.Msg.GET_SHOW)
      .appendField(new Blockly.FieldDropdown([["id","id"], ["url","url"], ["width","width"], ["height","height"], ["left","left"], ["top","top"], ["zindex","zindex"], ["display","display"]]), "property_")
      .appendField(Blockly.Msg.ID_SHOW);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_delete'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DELETE_SHOW)
      .appendField(Blockly.Msg.ID_SHOW); 
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
      .appendField(Blockly.Msg.COLLISION_SHOW);
  this.appendValueInput("id2_")
      .setCheck(null)
      .appendField(Blockly.Msg.AND_SHOW);   
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
  this.appendDummyInput()
      .appendField(Blockly.Msg.BOUNDARY_COLLISION_SHOW)
      .appendField(new Blockly.FieldDropdown([["up","up"], ["down","down"], ["left","left"], ["right","right"], ["any","any"]]), "property_");   
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID_SHOW);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
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

Blockly.Blocks['image_onclick_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ONCLICK_SHOW)
      .appendField(Blockly.Msg.ID_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['mouse_coordinate_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_COORDINATE_GET_SHOW)
      .appendField(new Blockly.FieldDropdown([["X","x"], ["Y","y"]]), "property_");
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
