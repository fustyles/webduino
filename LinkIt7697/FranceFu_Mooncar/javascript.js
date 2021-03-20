Blockly.Arduino.webbit_mooncar_pin=function(){
  var r1=Blockly.Arduino.valueToCode(this,"R1",Blockly.Arduino.ORDER_ATOMIC);
  var r2=Blockly.Arduino.valueToCode(this,"R2",Blockly.Arduino.ORDER_ATOMIC);
  var l1=Blockly.Arduino.valueToCode(this,"L1",Blockly.Arduino.ORDER_ATOMIC);
  var l2=Blockly.Arduino.valueToCode(this,"L2",Blockly.Arduino.ORDER_ATOMIC);  

  Blockly.Arduino.definitions_['mooncar_motor_pin'] ='\n'+
											'int pin_r1 = '+r1+';\n'+
											'int pin_r2 = '+r2+';\n'+
											'int pin_l1 = '+l1+';\n'+
											'int pin_l2 = '+l2+';\n';					
  var code = '';
  return code;
};
Blockly.Arduino.webbit_mooncar_move_car=function(){
  var a=this.getFieldValue("STAT");
  var rspeed=Blockly.Arduino.valueToCode(this,"RSPEED",Blockly.Arduino.ORDER_ATOMIC);
  var lspeed=Blockly.Arduino.valueToCode(this,"LSPEED",Blockly.Arduino.ORDER_ATOMIC);  
  Blockly.Arduino.setups_['analogwrite_12'] = 'ledcAttachPin(pin_r1, 5);\n  ledcSetup(5, 5000, 8);\n';
  Blockly.Arduino.setups_['analogwrite_18'] = 'ledcAttachPin(pin_r2, 6);\n  ledcSetup(6, 5000, 8);\n';
  Blockly.Arduino.setups_['analogwrite_16'] = 'ledcAttachPin(pin_l1, 7);\n  ledcSetup(7, 5000, 8);\n';
  Blockly.Arduino.setups_['analogwrite_19'] = 'ledcAttachPin(pin_l2, 8);\n  ledcSetup(8, 5000, 8);\n';
  Blockly.Arduino.definitions_['mooncar_motor'] ='\n'+
											'void mooncar_motor(int r1,int r2,int l1,int l2) {\n'+
											'  ledcWrite(5, r1);\n  ledcWrite(6, r2);\n  ledcWrite(7, l1);\n  ledcWrite(8, l2);\n'+
											'}\n';
											
  if (a == "FORWARD") {
	var code = 'mooncar_motor('+rspeed+', 0, '+lspeed+', 0);\n';
    return code;
  } else if (a == "BACKWARD"){
	var code = 'mooncar_motor(0, '+rspeed+', 0, '+lspeed+');\n';
    return code;
  } else if (a == "LEFT") {
	var code = 'mooncar_motor('+rspeed+', 0, 0, '+lspeed+');\n';
    return code;
  } else if (a == "RIGHT") {
	var code = 'mooncar_motor(0, '+rspeed+', '+lspeed+', 0);\n';
    return code;
  } else {
	var code = 'mooncar_motor(0, 0, 0, 0);\n';
    return code;
  }
};
Blockly.Arduino.webbit_mooncar_tracker_pin=function(){
  var r=Blockly.Arduino.valueToCode(this,"PINR",Blockly.Arduino.ORDER_ATOMIC);
  var l=Blockly.Arduino.valueToCode(this,"PINL",Blockly.Arduino.ORDER_ATOMIC);	
  Blockly.Arduino.definitions_.define_tracker="int tracker()\n{\n  if (digitalRead("+r+") == 1 && digitalRead("+l+") == 1) {\n    return 0;\n  } else if (digitalRead("+r+") == 0 && digitalRead("+l+") == 1) {\n    return 1;\n  } else if (digitalRead("+r+") == 1 && digitalRead("+l+") == 0){\n    return 2;\n  } else {\n    return 3;\n  }\n}\n";
  Blockly.Arduino.setups_["setup_tracker_"]="pinMode("+r+", INPUT);\n  pinMode("+l+", INPUT);\n";
  var code = '';
  return code;
};
Blockly.Arduino.webbit_mooncar_tracker=function(){
  return["tracker()",Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.webbit_mooncar_sonar_pin=function(){
  var trig=Blockly.Arduino.valueToCode(this,"TRIG",Blockly.Arduino.ORDER_ATOMIC);
  var echo=Blockly.Arduino.valueToCode(this,"ECHO",Blockly.Arduino.ORDER_ATOMIC);	
  Blockly.Arduino.definitions_['define_sonar_']="#include <Ultrasonic.h>\n";
  Blockly.Arduino.definitions_['define_sonar_set']="Ultrasonic ultrasonic_("+trig+", "+echo+");"
  var code = '';
  return code;
};
Blockly.Arduino.webbit_mooncar_sonar=function(){
  return ["ultrasonic_.convert(ultrasonic_.timing(), Ultrasonic::CM)", Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.webbit_mooncar_tcs_init=function(){
  Blockly.Arduino.definitions_['define_wire']='#include <Wire.h>';
  Blockly.Arduino.definitions_['define_tcs']='#include "Adafruit_TCS34725.h"\n'+
										     'Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_700MS, TCS34725_GAIN_1X);\n'+
										     'uint16_t r, g, b, c, colorTemp, lux;\n';
  Blockly.Arduino.definitions_['tcs_read']='\n'+
											'int tcs_read(String color) {\n'+
											'  tcs.getRawData(&r, &g, &b, &c);\n'+
											'  if (color=="r")\n'+
											'    return r;\n'+
											'  else if (color=="g")\n'+
											'    return g;\n'+	
											'  else if (color=="b")\n'+
											'    return b;\n'+
											'  else if (color=="lux")\n'+
											'    return tcs.calculateLux(r, g, b);\n'+											
											'  else\n'+
											'    return 0;\n'+												
											'}\n';											 
  Blockly.Arduino.setups_['tcs_begin'] = 'tcs.begin();\n';
  var code = '';
  return code;
};
Blockly.Arduino.webbit_mooncar_tcs_read=function(){
  var color=this.getFieldValue("color");
  if (color == "RED")
    var code = 'tcs_read("r")';
  else if (color == "GREEN")
    var code = 'tcs_read("g")';
  else if (color == "BLUE")
    var code = 'tcs_read("b")';
  else if (color == "LUX")
    var code = 'tcs_read("lux")';	
  else if (color == "YELLOW")
    var code = 'tcs_read("y")';
  else if (color == "AZURE")
    var code = 'tcs_read("a")';	
  else if (color == "PURPLE")
    var code = 'tcs_read("p")';
  return [code, Blockly.Arduino.ORDER_NONE];	
};

Blockly.Arduino.webbit_mooncar_flash_light=function(){
  var pin=Blockly.Arduino.valueToCode(this,"pin",Blockly.Arduino.ORDER_ATOMIC);
  var state=this.getFieldValue("state");
  Blockly.Arduino.setups_["setup_flash_light_"+pin]="pinMode("+pin+", OUTPUT);\n";
  
  code = "digitalWrite("+pin+", "+state+");\n";
  return code;
};

Blockly.Arduino.webbit_mooncar_ir_remote_read=function(){
  Blockly.Arduino.definitions_.define_irremote="#include <IRremote.h>";
  Blockly.Arduino.definitions_.define_irremote_init="IRrecv irrecv(15);";
  Blockly.Arduino.definitions_.define_irremote_decode="decode_results results;";
  Blockly.Arduino.setups_["irremote_"]||(Blockly.Arduino.setups_["irremote_"]="irrecv.enableIRIn();\n");
  return"if (irrecv.decode(&results)) {\n  "+Blockly.Arduino.statementToCode(this,"IR_READ")+"\n  irrecv.resume();\n}\n";
};
Blockly.Arduino.webbit_mooncar_ir_remote_read_value=function(){
  return["String(results.value, HEX)",Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.webbit_mooncar_ir_remote_read_type=function(){
  Blockly.Arduino.definitions_.define_ir_type="String ir_type(int tip)\n{\n  if (tip == 1) {\n    return\"RC5\";\n  } else if (tip == 2){\n    return\"RC6\";\n  } else if (tip == 3){\n    return\"NEC\";\n  } else {\n    return\"Sony\";\n  }\n}\n";
  return["ir_type(results.decode_type)",Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.webbit_mooncar_ir_remote_send=function(){
  var a=this.getFieldValue("IR_TYPE"),
      b=Blockly.Arduino.valueToCode(this,"IR_SEND",Blockly.Arduino.ORDER_ATOMIC)||"0";
  Blockly.Arduino.definitions_.define_irremote="#include <IRremote.h>";
  Blockly.Arduino.definitions_.define_irremote_init="IRsend irsend;";
  Blockly.Arduino.definitions_.define_ir_type="int x2i(char *s)\n{\n  int x = 0;\n  for(;;) {\n    char c = *s;\n    if (c >= '0' && c <= '9') {\n      x *= 16;\n      x += c - '0';\n    }    else if (c >= 'a' && c <= 'f') {\n      x *= 16;\n      x += (c - 'a') + 10;\n    }\n    else break;\n    s++;\n  }\n  return x;\n}";
  if (a == "NEC") {
    return"irsend.sendNEC(x2i("+b+"), 32);\n"
  } else if (a == "SONY"){
    return"irsend.sendSony(x2i("+b+"), 12);\n"
  } else if (a == "RC5") {
    return"irsend.sendRC5(x2i("+b+"), 12);\n"
  } else {
    return"irsend.sendRC6(x2i("+b+"), 20);\n"
  }
};