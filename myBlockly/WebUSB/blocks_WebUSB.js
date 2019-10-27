Blockly.Blocks['webusb_system'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WebUSB");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cmd")
        .appendField(new Blockly.FieldDropdown([["inputPullup","inputpullup"], ["pinMode","pinmode"], ["digitalWrite","digitalwrite"], ["digitalRead","digitalread"], ["analogWrite","analogwrite"], ["analogRead","analogread"]]), "cmd");
    this.appendValueInput("P1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pin");
    this.appendValueInput("P2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['webusb_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WebUSB");   
    this.appendValueInput("cmd")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cmd");
    this.appendValueInput("P1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P1");
    this.appendValueInput("P2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P2");
    this.appendValueInput("P3")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P3");
    this.appendValueInput("P4")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P4");
    this.appendValueInput("P5")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P5");
    this.appendValueInput("P6")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P6");
    this.appendValueInput("P7")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P7");
    this.appendValueInput("P8")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P8");
    this.appendValueInput("P9")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("P9");
    this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['webusb_car'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WebUSB Car");       
    this.appendValueInput("cmd")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cmd");    
    this.appendValueInput("P1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinL1");
    this.appendValueInput("P2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinL2");
    this.appendValueInput("P3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinR1");
    this.appendValueInput("P4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinR2");
    this.appendValueInput("P5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("L speed");
    this.appendValueInput("P6")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("R speed");
    this.appendValueInput("P7")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Delay(ms)");
    this.appendValueInput("P8")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("State");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['webusb_car_state'] = {
  init: function () {    
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["FORWARD","F"], ["BACKWARD","B"], ["TURNLEFT","L"], ["TURNRIGHT","R"], ["STOP","S"]]), "state");    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['webusb_cmd'] = {
  init: function () {    
  this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
        ["inputPullup","inputpullup"], 
        ["pinMode(pin)","pinmode"],
        ["digitalWrite(pin,value)","digitalwrite"], 
        ["digitalRead(pin)","digitalread"], 
        ["analogWrite(pin,value)","analogwrite"], 
        ["analogRead(pin)","analogread"],
        ["car(pinL1,pinL2,pinR1,pinR2,L_speed,R_speed,Delay,state)","car"],
        ["i2cLcd(address,text1,text2)","i2cLcd"],    
        ["SW1 for Ywbot V1","SW1"],
        ["SW2 for Ywbot V1","SW2"],
        ["DHT11 for Ywbot V1","DHT11"],
        ["Buzzer(frequency,delay) for Ywbot V1","Buzzer"],
        ["IRReceiver for Ywbot V1","IRReceiver"],
        ["RGBLED(Red,Green,Blue) for Ywbot V1","RGBLED"],
        ["LED1D(value) for Ywbot V1","LED1D"],
        ["LED2D(value) for Ywbot V1","LED2D"],
        ["LED2A(value) for Ywbot V1","LED2A"],
        ["Rotation for Ywbot V1","Rotation"],
        ["Light for Ywbot V1","Light"],
        ["LM35 for Ywbot V1","LM35"]
      ]), "cmd");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['webusb_getresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WebUSB get response data");
    this.setInputsInline(false);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};

Blockly.Blocks['webusb_clearresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WebUSB clear response data");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['webusb_custom_cmd'] = {
  init: function() {
    this.appendValueInput("cmd")
        .setCheck(null)
        .appendField("WebUSB Custom Command");    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};
