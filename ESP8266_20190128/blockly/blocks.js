Blockly.Blocks['esp8266_system'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MyFirmata");
    this.appendValueInput("url")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url"); 
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
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['esp8266_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MyFirmata"); 
    this.appendValueInput("url")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url");     
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

Blockly.Blocks['esp8266_car'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MyFirmata Car");  
    this.appendValueInput("url")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url");       
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

Blockly.Blocks['esp8266_car_state'] = {
  init: function () {  
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["FORWARD","F"], ["BACKWARD","B"], ["TURNLEFT","L"], ["TURNRIGHT","R"], ["STOP","S"]]), "state");    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['esp8266_cmd'] = {
  init: function () {    
  this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
        ["inputPullup","inputpullup"], 
        ["pinMode(pin)","pinmode"],
        ["digitalWrite(pin\,value)","digitalwrite"], 
        ["digitalRead(pin)","digitalread"], 
        ["analogWrite(pin\,value)","analogwrite"], 
        ["analogRead(pin)","analogread"],
        ["touchread(pin) for ESP32","touchread"],    
        ["ip","ip"],
        ["mac","mac"],
        ["restart","restart"],
        ["resetwifi(ssid\,password)","resetwifi"],
        ["tcp(domain\,port\,request\,wait)","tcp"],
        ["ifttt(event\,key\,value1\,value2\,value3)","ifttt"],
        ["thingspeakupdate(key\,field1\,field2\,field3\,field4\,field5\,field6\,field7\,field8)","thingspeakupdate"],
        ["thingspeakread(request)","thingspeakread"],
        ["linenotify(token\,request)","linenotify"],
        ["car(pinL1\,pinL2\,pinR1\,pinR2\,L_speed\,R_speed\,Delay\,state)","car"],
        ["i2cLcd(address\,gpioSDA\,gpioSCL\,text1\,text2\) or (address\,text1\,text2\)","i2cLcd"]
      ]), "cmd");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['esp8266_getresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MyFirmata Get Response Data");
    this.setInputsInline(false);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};

Blockly.Blocks['esp8266_clearresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MyFirmata Clear Response Data");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};
