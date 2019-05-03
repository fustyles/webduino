Blockly.Blocks['demoexpansion1'] = {
  init: function() {   
  this.appendValueInput("id_")
      .appendField("ID")       
      .setCheck(null);     
  this.appendValueInput("property_")
      .appendField("Set")       
      .setCheck(null);      
  this.appendValueInput("value_")
      .appendField("Value")    
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
      .appendField(Blockly.Msg.DEMO_SHOW, "顯示文字")    
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_SHOW, "demo-area-01-show"]
      ]), "id_")
    this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['demoexpansion3'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DEMO_CONTROLLER_BTN, "遙控器按鍵")    
      .appendField(new Blockly.FieldDropdown([
        ["○", "btn-power"],
        ["1", "btn-num1"],
        ["2", "btn-num2"],
        ["3", "btn-num3"],
        ["4", "btn-num4"],
        ["5", "btn-num5"],
        ["6", "btn-num6"],
        ["7", "btn-num7"],
        ["8", "btn-num8"],
        ["9", "btn-num9"],
        ["0", "btn-num0"],
        ["#", "btn-num11"],
        ["*", "btn-num12"],
        ["▲", "btn-up"],
        ["◀", "btn-left"],
        ["▶", "btn-right"],
        ["▼", "btn-down"],
        ["●", "btn-center"],
        ["◀◀", "btn-pre"],
        ["■", "btn-stop"],
        ["▶", "btn-play"],
        ["❙ ❙", "btn-pause"],
        ["▶▶", "btn-next"],
        [Blockly.Msg.DEMO_CONTROLLER_BTNRED, "btn-color1"],
        [Blockly.Msg.DEMO_CONTROLLER_BTNGREEN, "btn-color2"],
        [Blockly.Msg.DEMO_CONTROLLER_BTNBLUE, "btn-color3"],
        [Blockly.Msg.DEMO_CONTROLLER_BTNYELLOW, "btn-color4"]
      ]), "id_")
    this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['demoexpansion4'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([["innerHTML","innerHTML"], ["left","left"], ["top","top"], ["width","width"], ["height","height"], ["borderstyle","borderstyle"], ["borderwidth","borderwidth"], ["bordercolor","bordercolor"], ["borderradius","borderradius"], ["background","background"], ["color","color"], ["fontsize","fontsize"], ["opacity","opacity"], ["innerHTML","innerHTML"], ["zindex","zindex"], ["display","display"], ["position","position"], ["disabled","disabled"], ["draggable","draggable"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};
