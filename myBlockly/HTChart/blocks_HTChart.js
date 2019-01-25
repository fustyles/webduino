Blockly.Blocks['DHT_chart'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BLOCK1_SHOW)
        .appendField(new Blockly.FieldDropdown([["LineChart","LineChart"], ["AreaChart","AreaChart"]]), "type_");     
    this.appendValueInput("value_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VALUE_SHOW);
    this.appendValueInput("width_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.WIDTH_SHOW);
    this.appendValueInput("height_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.HEIGHT_SHOW);
    this.appendValueInput("title_x_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TITLE_X_SHOW);
    this.appendValueInput("title_y_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TITLE_Y_SHOW);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};

Blockly.Blocks['DHT_datasetcheck'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)    
        .appendField(Blockly.Msg.BLOCK2_SHOW);     
    this.appendValueInput("dataset_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DATASET_SHOW);
    this.appendValueInput("count_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.COUNT_SHOW);
    this.setOutput(true, null);
    this.setTooltip("");
    this.setColour(65);    
    this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};  
