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
										     'uint16_t r_, g_, b_, c_, colorTemp_, lux_;\n'+
											 'float range_ = 0.2;\n'+											 
										     'int rgb[27] = {2291, 838, 931 ,1166, 2210, 1331 ,580, 1000, 2071 ,4739, 4995, 1993, 1203, 3457, 6170 ,1388, 1119, 2211, 0, 0, 0, 0, 0, 0, 0, 0, 0};\n';											 
  Blockly.Arduino.definitions_['tcs_read']='\n'+
											'int tcs_read(String color) {\n'+
											'  tcs.getRawData(&r_, &g_, &b_, &c_);\n'+
											'  if (color=="r")\n'+
											'    return r_;\n'+
											'  else if (color=="g")\n'+
											'    return g_;\n'+	
											'  else if (color=="b")\n'+
											'    return b_;\n'+
											'  else if (color=="l")\n'+
											'    return tcs.calculateLux(r_, g_, b_);\n'+											
											'  else\n'+
											'    return 0;\n'+												
											'}\n'+
											'void tcs_set(int color, int r, int g, int b) {\n'+
											'    rgb[color*3+0] = r;\n'+
											'    rgb[color*3+1] = g;\n'+
											'    rgb[color*3+2] = b;\n'+											
											'}\n'+
											'boolean tcs_detect(int color) {\n'+
											'  tcs.getRawData(&r_, &g_, &b_, &c_);\n'+
											'  boolean rs=(((float)abs(rgb[color*3+0]-r_)/(float)rgb[color*3+0])<=range_);\n'+
											'  boolean gs=(((float)abs(rgb[color*3+1]-g_)/(float)rgb[color*3+1])<=range_);\n'+
											'  boolean bs=(((float)abs(rgb[color*3+2]-b_)/(float)rgb[color*3+2])<=range_); \n'+
											'  if (rs&&gs&&bs)\n'+
											'    return true;\n'+
											'  else\n'+
											'    return false;\n'+
											'}\n';						
  Blockly.Arduino.setups_['tcs_begin'] = 'tcs.begin();\n';
  var code = '';
  return code;
};

Blockly.Arduino.webbit_mooncar_tcs_read=function(){
  var color=this.getFieldValue("color");
  var code = 'tcs_read("'+color+'")';
  return [code, Blockly.Arduino.ORDER_NONE];	
};

Blockly.Arduino.webbit_mooncar_tcs_set=function(){
  var color=this.getFieldValue("color");
  var r=Blockly.Arduino.valueToCode(this,"R",Blockly.Arduino.ORDER_ATOMIC);
  var g=Blockly.Arduino.valueToCode(this,"G",Blockly.Arduino.ORDER_ATOMIC);
  var b=Blockly.Arduino.valueToCode(this,"B",Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'tcs_set('+color+', '+r+', '+g+', '+b+');\n';
  return code;	
};

Blockly.Arduino.webbit_mooncar_tcs_detect=function(){
  var color=this.getFieldValue("color");
  var code = 'tcs_detect('+color+')';
  return [code, Blockly.Arduino.ORDER_NONE];	
};

Blockly.Arduino.webbit_mooncar_tcs_range=function(){
  var range=Blockly.Arduino.valueToCode(this,"range",Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'range_ = '+range+';\n';
  return code;	
};

Blockly.Arduino.webbit_mooncar_flash_light=function(){
  var pin=Blockly.Arduino.valueToCode(this,"pin",Blockly.Arduino.ORDER_ATOMIC);
  var state=this.getFieldValue("state");
  Blockly.Arduino.setups_["setup_flash_light_"+pin]="pinMode("+pin+", OUTPUT);\n";
  
  code = "digitalWrite("+pin+", "+state+");\n";
  return code;
};

Blockly.Arduino.webbit_mooncar_ws2812_pin = function(){
	var pin=Blockly.Arduino.valueToCode(this,"pin",Blockly.Arduino.ORDER_ATOMIC);
	var leds=Blockly.Arduino.valueToCode(this,"leds",Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_webbit_matrix']='\n'+
											'#include \<NeoPixelBus.h\>\n'+
											'const uint16_t PixelCount = '+leds+';\n'+
											'const uint8_t PixelPin = '+pin+';\n'+
											'NeoPixelBus<NeoGrbFeature, Neo800KbpsMethod> strip(PixelCount, PixelPin);\n'+											
											'float matrixBrightness = 0.5;\n';											
	Blockly.Arduino.definitions_['define_webbit_matrix_func']='\n'+
											'void MatrixLed(String leds) {\n'+
											'  int R,G,B;\n'+
											'  for (int i=0;i<leds.length()/6;i++) {\n'+
    										'    R = (HextoRGB(leds[i*6])*16+HextoRGB(leds[i*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(leds[i*6+2])*16+HextoRGB(leds[i*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(leds[i*6+4])*16+HextoRGB(leds[i*6+5]))*matrixBrightness;\n'+
    										'    strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip.Show();\n'+
											'}\n'+
											'\n'+
											'void MatrixLedOne(int i, String leds) {\n'+
											'  int R,G,B;\n'+
    										'  R = (HextoRGB(leds[0])*16+HextoRGB(leds[1]))*matrixBrightness;\n'+
    										'  G = (HextoRGB(leds[2])*16+HextoRGB(leds[3]))*matrixBrightness;\n'+
    										'  B = (HextoRGB(leds[4])*16+HextoRGB(leds[5]))*matrixBrightness;\n'+
    										'  strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  strip.Show();\n'+
											'}\n'+
											'\n'+											
											'int HextoRGB(char val) {\n'+
											'  String hex ="0123456789abcdef";\n'+
											'  return hex.indexOf(val);\n'+
											'}\n'; 
	Blockly.Arduino.setups_["setup_webbit_matrix"]="strip.Begin();\n";

	var code = '';
	return code;
};

Blockly.Arduino.webbit_mooncar_ws2812_brightness = function(){
	var brightness=Blockly.Arduino.valueToCode(this,"brightness",Blockly.Arduino.ORDER_ATOMIC);

	var code = 'matrixBrightness = '+brightness+';\n';
	return code;
};

Blockly.Arduino.webbit_mooncar_ws2812_clear = function(){
	var code = 'MatrixLed("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");\n';
	return code;
};

Blockly.Arduino['webbit_mooncar_ws2812_color'] = function() {
	var L02 = this.getFieldValue('L02').substr(1,6);
	var L04 = this.getFieldValue('L04').substr(1,6);
	var L06 = this.getFieldValue('L06').substr(1,6);
	var L10 = this.getFieldValue('L10').substr(1,6);
	var L16 = this.getFieldValue('L16').substr(1,6);
	var L20 = this.getFieldValue('L20').substr(1,6);
	var L22 = this.getFieldValue('L22').substr(1,6);
	var L24 = this.getFieldValue('L24').substr(1,6);
	var code = 'MatrixLed("'+L22+L16+L06+L02+L04+L10+L20+L24+'");\n';
	return code;
};

Blockly.Arduino['webbit_mooncar_ws2812_color_one_n'] = function(block) {
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC).substr(1,6);
	
	var code = 'MatrixLedOne(('+N+'-1),"'+rgb+'");\n';
	return code;
};

Blockly.Arduino['webbit_mooncar_ws2812_rgb_one_n'] = function(block) {
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var r = Number(Blockly.Arduino.valueToCode(this,"R",Blockly.Arduino.ORDER_ATOMIC));
	var g = Number(Blockly.Arduino.valueToCode(this,"G",Blockly.Arduino.ORDER_ATOMIC));
	var b = Number(Blockly.Arduino.valueToCode(this,"B",Blockly.Arduino.ORDER_ATOMIC));
    var r2 = r.toString(16).length==1?"0"+r.toString(16):r.toString(16);
    var g2 = g.toString(16).length==1?"0"+g.toString(16):g.toString(16);
    var b2 = b.toString(16).length==1?"0"+b.toString(16):b.toString(16);
	var code = 'MatrixLedOne(('+N+'-1),"'+r2+g2+b2+'");\n';
	return code;
};

Blockly.Arduino['webbit_mooncar_choice_color'] = function(block) {
	var rgb = this.getFieldValue("RGB");
	return[rgb, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.webbit_mooncar_ir_remote_read_pin=function(){
  var pin=Blockly.Arduino.valueToCode(this,"pin",Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_.define_irremote="#include <IRremote.h>";
  Blockly.Arduino.definitions_.define_irremote_init="IRrecv irrecv("+pin+");";
  Blockly.Arduino.definitions_.define_irremote_decode="decode_results results;";
  Blockly.Arduino.setups_.define_irremote_init = "irrecv.enableIRIn();";
  var code = '';
  return code;
};
Blockly.Arduino.webbit_mooncar_ir_remote_read=function(){
  var statement = Blockly.Arduino.statementToCode(this,"IR_READ");
  var code = "if (irrecv.decode(&results)) {\n  "+ statement +"\n  irrecv.resume();\n}\n";
  return code;
};
Blockly.Arduino.webbit_mooncar_ir_remote_read_value=function(){
  var code = "String(results.value, HEX)";
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.webbit_mooncar_ir_remote_read_type=function(){
  Blockly.Arduino.definitions_.define_ir_type="String ir_type(int tip)\n{\n  if (tip == 1) {\n    return\"RC5\";\n  } else if (tip == 2){\n    return\"RC6\";\n  } else if (tip == 3){\n    return\"NEC\";\n  } else {\n    return\"Sony\";\n  }\n}\n";
  var code = "ir_type(results.decode_type)";
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.webbit_mooncar_ir_remote_send_pin=function(){
  var pin=Blockly.Arduino.valueToCode(this,"pin",Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_.define_irremote="#include <IRremote.h>";
  Blockly.Arduino.definitions_.define_irremote_init1="IRsend irsend("+pin+");";
  Blockly.Arduino.definitions_.define_ir_type="int x2i(char *s)\n{\n  int x = 0;\n  for(;;) {\n    char c = *s;\n    if (c >= '0' && c <= '9') {\n      x *= 16;\n      x += c - '0';\n    }    else if (c >= 'a' && c <= 'f') {\n      x *= 16;\n      x += (c - 'a') + 10;\n    }\n    else break;\n    s++;\n  }\n  return x;\n}";
  var code = "";
  return code;
};
Blockly.Arduino.webbit_mooncar_ir_remote_send=function(){
  var a=this.getFieldValue("IR_TYPE"),
  b=Blockly.Arduino.valueToCode(this,"IR_SEND",Blockly.Arduino.ORDER_ATOMIC)||"0";
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
