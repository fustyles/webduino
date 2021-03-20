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
Blockly.Arduino.webbit_mooncar_init_tcs=function(){
  Blockly.Arduino.definitions_.define_write="#include <Wire.h>";
  Blockly.Arduino.definitions_.define_tcs="#include \"Adafruit_TCS34725.h\"";
  Blockly.Arduino.definitions_.define_tcs_var="int now[3], rec_r[3], rec_g[3], rec_b[3], rec_y[3], rec_a[3], rec_p[3], rec_c1[3], rec_c2[3], rec_c3[3], range_ = 50;";
  Blockly.Arduino.definitions_["define_class_tcs_"]="Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_24MS, TCS34725_GAIN_1X);";
  Blockly.Arduino.definitions_["define_class_tcs_init"]="uint16_t r_, g_, b_, c_;";
  Blockly.Arduino.definitions_.define_tcs_red="int tcs_read_red()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);\n  return r_;\n}\n";
  Blockly.Arduino.definitions_.define_tcs_green="int tcs_read_green()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);\n  return g_;\n}\n";
  Blockly.Arduino.definitions_.define_tcs_blue="int tcs_read_blue()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);\n  return b_;\n}\n";
  Blockly.Arduino.setups_["tcs_"]||(Blockly.Arduino.setups_["tcs_"]="tcs.begin();");
  return"digitalWrite(7, LOW);\n";
};
Blockly.Arduino.webbit_mooncar_read_tcs=function(){
  var a=this.getFieldValue("TCS");
  if (a == "RED") {
    return["tcs_read_red()",Blockly.Arduino.ORDER_ATOMIC];
  }
  else if (a == "GREEN") {
    return["tcs_read_green()",Blockly.Arduino.ORDER_ATOMIC];
  }
  else {
    return["tcs_read_blue()",Blockly.Arduino.ORDER_ATOMIC];
  }
};
Blockly.Arduino.webbit_mooncar_flash_light=function(){
  var a=this.getFieldValue("TCS_LIGHT");
  Blockly.Arduino.setups_["setup_flash_light_"]="pinMode(7, OUTPUT);\n";
  if (a == "ON") {
    return"digitalWrite(7, LOW);\n";
  }
  else {
    return"digitalWrite(7, HIGH);\n";
  }
};
Blockly.Arduino.webbit_mooncar_record_tcs=function(){
  var a=this.getFieldValue("RECORD_TCS");
  if (a == "RED") {
    return"delay(100);\ntcs.getRawData(&r_, &g_, &b_, &c_);\nrec_r[0] = r_;\nrec_r[1] = g_;\nrec_r[2] = b_;\n";
  }
  else if (a == "GREEN") {
    return"delay(100);\ntcs.getRawData(&r_, &g_, &b_, &c_);\nrec_g[0] = r_;\nrec_g[1] = g_;\nrec_g[2] = b_;\n";
  }
  else if (a == "BLUE") {
    return"delay(100);\ntcs.getRawData(&r_, &g_, &b_, &c_);\nrec_b[0] = r_;\nrec_b[1] = g_;\nrec_b[2] = b_;\n";
  }
  else if (a == "YELLO") {
    return"delay(100);\ntcs.getRawData(&r_, &g_, &b_, &c_);\nrec_y[0] = r_;\nrec_y[1] = g_;\nrec_y[2] = b_;\n";
  }
  else if (a == "AZURE") {
    return"delay(100);\ntcs.getRawData(&r_, &g_, &b_, &c_);\nrec_a[0] = r_;\nrec_a[1] = g_;\nrec_a[2] = b_;\n";
  }
  else if (a == "PURPLE") {
    return"delay(100);\ntcs.getRawData(&r_, &g_, &b_, &c_);\nrec_p[0] = r_;\nrec_p[1] = g_;\nrec_p[2] = b_;\n";
  }
  else if (a == "C1") {
    return"delay(100);\ntcs.getRawData(&r_, &g_, &b_, &c_);\nrec_c1[0] = r_;\nrec_c1[1] = g_;\nrec_c1[2] = b_;\n";
  }
  else if (a == "C2") {
    return"delay(100);\ntcs.getRawData(&r_, &g_, &b_, &c_);\nrec_c2[0] = r_;\nrec_c2[1] = g_;\nrec_c2[2] = b_;\n";
  }
  else {
    return"delay(100);\ntcs.getRawData(&r_, &g_, &b_, &c_);\nrec_c3[0] = r_;\nrec_c3[1] = g_;\nrec_c3[2] = b_;\n";
  }
};
Blockly.Arduino.webbit_mooncar_chack_tcs=function(){
  var a=this.getFieldValue("RECORD_TCS");
  if (a == "RED") {
    Blockly.Arduino.definitions_.define_color_1="int tcs_check_1()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);now[0] = r_;now[1] = g_;now[2] = b_;int count = 0;for (int i=0;i<3;i++) {if (abs(now[i] - rec_r[i]) < range_) {count += 1;}}if (count == 3) {return true;} else {return false;}\n}\n";
    return["tcs_check_1()",Blockly.Arduino.ORDER_ATOMIC];
  }
  else if (a == "GREEN") {
    Blockly.Arduino.definitions_.define_color_2="int tcs_check_2()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);now[0] = r_;now[1] = g_;now[2] = b_;int count = 0;for (int i=0;i<3;i++) {if (abs(now[i] - rec_g[i]) < range_) {count += 1;}}if (count == 3) {return true;} else {return false;}\n}\n";
    return["tcs_check_2()",Blockly.Arduino.ORDER_ATOMIC];
  }
  else if (a == "BLUE") {
    Blockly.Arduino.definitions_.define_color_3="int tcs_check_3()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);now[0] = r_;now[1] = g_;now[2] = b_;int count = 0;for (int i=0;i<3;i++) {if (abs(now[i] - rec_b[i]) < range_) {count += 1;}}if (count == 3) {return true;} else {return false;}\n}\n";
    return["tcs_check_3()",Blockly.Arduino.ORDER_ATOMIC];
  }
  else if (a == "YELLO") {
    Blockly.Arduino.definitions_.define_color_4="int tcs_check_4()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);now[0] = r_;now[1] = g_;now[2] = b_;int count = 0;for (int i=0;i<3;i++) {if (abs(now[i] - rec_y[i]) < range_) {count += 1;}}if (count == 3) {return true;} else {return false;}\n}\n";
    return["tcs_check_4()",Blockly.Arduino.ORDER_ATOMIC];
  }
  else if (a == "AZURE") {
    Blockly.Arduino.definitions_.define_color_5="int tcs_check_5()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);now[0] = r_;now[1] = g_;now[2] = b_;int count = 0;for (int i=0;i<3;i++) {if (abs(now[i] - rec_a[i]) < range_) {count += 1;}}if (count == 3) {return true;} else {return false;}\n}\n";
    return["tcs_check_5()",Blockly.Arduino.ORDER_ATOMIC];
  }
  else if (a == "PURPLE") {
    Blockly.Arduino.definitions_.define_color_6="int tcs_check_6()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);now[0] = r_;now[1] = g_;now[2] = b_;int count = 0;for (int i=0;i<3;i++) {if (abs(now[i] - rec_p[i]) < range_) {count += 1;}}if (count == 3) {return true;} else {return false;}\n}\n";
    return["tcs_check_6()",Blockly.Arduino.ORDER_ATOMIC];
  }
  else if (a == "C1") {
    Blockly.Arduino.definitions_.define_color_7="int tcs_check_7()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);now[0] = r_;now[1] = g_;now[2] = b_;int count = 0;for (int i=0;i<3;i++) {if (abs(now[i] - rec_c1[i]) < range_) {count += 1;}}if (count == 3) {return true;} else {return false;}\n}\n";
    return["tcs_check_7()",Blockly.Arduino.ORDER_ATOMIC];
  }
  else if (a == "C2") {
    Blockly.Arduino.definitions_.define_color_8="int tcs_check_8()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);now[0] = r_;now[1] = g_;now[2] = b_;int count = 0;for (int i=0;i<3;i++) {if (abs(now[i] - rec_c2[i]) < range_) {count += 1;}}if (count == 3) {return true;} else {return false;}\n}\n";
    return["tcs_check_8()",Blockly.Arduino.ORDER_ATOMIC];
  }
  else {
    Blockly.Arduino.definitions_.define_color_9="int tcs_check_9()\n{\n  tcs.getRawData(&r_, &g_, &b_, &c_);now[0] = r_;now[1] = g_;now[2] = b_;int count = 0;for (int i=0;i<3;i++) {if (abs(now[i] - rec_c3[i]) < range_) {count += 1;}}if (count == 3) {return true;} else {return false;}\n}\n";
    return["tcs_check_9()",Blockly.Arduino.ORDER_ATOMIC];
  }
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