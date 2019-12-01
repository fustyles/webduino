Blockly.Blocks['esp32cam_system'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP32-CAM System");
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

Blockly.Blocks['esp32cam_manager'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP32-CAM Manager");
    this.appendValueInput("url")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url"); 
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cmd")
        .appendField(new Blockly.FieldDropdown([        
		["saveimage","saveimage"],
        ["getstill","getstill"], 
        ["listimages","listimages"], 
        ["showimage","showimage"], 
        ["deleteimage","deleteimage"]
		]), "cmd");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['esp32cam_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP32-CAM Custom"); 
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

Blockly.Blocks['esp32cam_car'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP32-CAM Car");  
    this.appendValueInput("url")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url");       
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("state")
        .appendField(new Blockly.FieldDropdown([["Front","1"], ["Left","2"], ["Stop","3"], ["Right","4"], ["Back","5"], ["FrontLeft","6"], ["FrontRight","7"], ["LeftAfter","8"], ["RightAfter","9"]]), "state");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};      

Blockly.Blocks['esp32cam_cmd'] = {
  init: function () {    
  this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
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
        ["linenotify(token\,request)","linenotify"]
      ]), "cmd");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(60);
  }
};

Blockly.Blocks['esp32cam_getresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP32-CAM Get Response Data");
    this.setInputsInline(false);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};

Blockly.Blocks['esp32cam_clearresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP32-CAM Clear Response Data");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};
