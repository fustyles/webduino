Blockly.Blocks['demoexpansion1'] = {
  init: function() {   
  this.appendValueInput("id_")
      .appendField(Blockly.Msg.DEMOEXPANSION_ID_SHOW)       
      .setCheck(null);     
  this.appendValueInput("property_")
      .appendField(Blockly.Msg.DEMOEXPANSION_SET_SHOW, "設定")       
      .setCheck(null);      
  this.appendValueInput("value_")
      .appendField(Blockly.Msg.DEMOEXPANSION_VALUE_SHOW, "值")   
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};

Blockly.Blocks['demoexpansion2'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEMOEXPANSION_TEXT_SHOW, "顯示")    
      .appendField(new Blockly.FieldDropdown([
        ["Text", "demo-area-01-show"]
      ]), "id_")
    this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['demoexpansion3'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEMOEXPANSION_CONTROLLER_BTN_SHOW, "遙控器按鍵")    
      .appendField(new Blockly.FieldDropdown([
        ["○", "demo-area-09-btn btn-power"],
        ["1", "demo-area-09-btn btn-num1"],
        ["2", "demo-area-09-btn btn-num2"],
        ["3", "demo-area-09-btn btn-num3"],
        ["4", "demo-area-09-btn btn-num4"],
        ["5", "demo-area-09-btn btn-num5"],
        ["6", "demo-area-09-btn btn-num6"],
        ["7", "demo-area-09-btn btn-num7"],
        ["8", "demo-area-09-btn btn-num8"],
        ["9", "demo-area-09-btn btn-num9"],
        ["0", "demo-area-09-btn btn-num0"],
        ["#", "demo-area-09-btn btn-num11"],
        ["*", "demo-area-09-btn btn-num12"],
        ["▲", "demo-area-09-btn btn-up"],
        ["◀", "demo-area-09-btn btn-left"],
        ["▶", "demo-area-09-btn btn-right"],
        ["▼", "demo-area-09-btn btn-down"],
        ["●", "demo-area-09-btn btn-center"],
        ["◀◀", "demo-area-09-btn btn-pre"],
        ["■", "demo-area-09-btn btn-stop"],
        ["▶", "demo-area-09-btn btn-play"],
        ["❙ ❙", "demo-area-09-btn btn-pause"],
        ["▶▶", "demo-area-09-btn btn-next"],
        [Blockly.Msg.DEMOEXPANSION_CONTROLLER_BTN_RED_SHOW, "demo-area-09-btn btn-color1"],
        [Blockly.Msg.DEMOEXPANSION_CONTROLLER_BTN_GREEN_SHOW, "demo-area-09-btn btn-color2"],
        [Blockly.Msg.DEMOEXPANSION_CONTROLLER_BTN_BLUE_SHOW, "demo-area-09-btn btn-color3"],
        [Blockly.Msg.DEMOEXPANSION_CONTROLLER_BTN_YELLOW_SHOW, "demo-area-09-btn btn-color4"]
      ]), "id_")
    this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['demoexpansion4'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEMOEXPANSION_PROPERTY_SHOW, "屬性")
      .appendField(new Blockly.FieldDropdown([
      ["innerHTML","innerHTML"],         
      ["text","text"], 
      ["value","value"],   
      ["src","src"],     
      ["left","left"], 
      ["top","top"], 
      ["width","width"], 
      ["height","height"], 
      ["borderstyle","borderstyle"], 
      ["borderwidth","borderwidth"], 
      ["bordercolor","bordercolor"], 
      ["borderradius","borderradius"], 
      ["background","background"], 
      ["color","color"], 
      ["fontsize","fontsize"], 
      ["opacity","opacity"], 
      ["zindex","zindex"], 
      ["display","display"], 
      ["position","position"], 
      ["disabled","disabled"], 
      ["draggable","draggable"]
    ]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['demoexpansion5'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEMOEXPANSION_BTN_SHOW, "按鈕行為")    
      .appendField(new Blockly.FieldDropdown([
        ["Button1", "demo-area-05-btn1"],
        ["Button2", "demo-area-05-btn2"],
        ["Button3", "demo-area-05-btn3"],
        ["Button4", "demo-area-05-btn4"],
        ["Button5", "demo-area-05-btn5"]
      ]), "id_")
    this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['demoexpansion6'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DEMOEXPANSION_TEXT_ADD_SHOW, "顯示文字附加");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};
