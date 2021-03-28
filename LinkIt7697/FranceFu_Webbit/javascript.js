Blockly.Arduino.esp32_button_pin = function(){
	var A=Blockly.Arduino.valueToCode(this,"PINA",Blockly.Arduino.ORDER_ATOMIC);
	var B=Blockly.Arduino.valueToCode(this,"PINB",Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_webbit_button']='\n'+
											'int pin_ButtonA = '+A+';\n'+
											'int pin_ButtonB = '+B+';\n';  
	Blockly.Arduino.setups_["setup_webbit_button"]="pinMode(pin_ButtonA, INPUT_PULLUP);\n  pinMode(pin_ButtonB, INPUT_PULLUP);\n";

	var code = '';
	return code;
};

Blockly.Arduino.esp32_button = function(){
	var kind=this.getFieldValue("AB_BUTTON");

	if (kind == "A") {
		var code = "(!digitalRead(pin_ButtonA))";
	}
	else if (kind == "B") {
		var code = "(!digitalRead(pin_ButtonB))";
	}
	else
		var code = "";

	return[code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.esp32_lum_pin = function(){
	var leftPin=Blockly.Arduino.valueToCode(this,"l",Blockly.Arduino.ORDER_ATOMIC);
	var rightPin=Blockly.Arduino.valueToCode(this,"r",Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_webbit_lumLeft']='\n'+
											'int pin_lumLeft = '+leftPin+';\n'+
											'int pin_lumRight = '+rightPin+';\n';  
	Blockly.Arduino.setups_["setup_webbit_lumLeft"]="pinMode(pin_lumLeft, INPUT);\n  pinMode(pin_lumRight, INPUT);\n";

	var code = '';
	return code;
};

Blockly.Arduino.esp32_lum = function(){
	var side=this.getFieldValue("side");

	if (side == "l") {
		var code = "analogRead(pin_lumLeft)";
	}
	else if (side == "r") {
		var code = "analogRead(pin_lumRight)";
	}
	else
		var code = "";

	return[code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.esp32_temperature_pin = function(){
	var pin=Blockly.Arduino.valueToCode(this,"pin",Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_webbit_temperature']='\n'+
											'int pin_temperature = '+pin+';\n';  
	Blockly.Arduino.definitions_['define_webbit_temperature_func']='\n'+
											'double getTemperature(int pin) {\n'+
											'  double Temp_Value = analogRead(pin);\n'+
											'  double voltageValue = (Temp_Value / 4095) * 3.3;\n'+
											'  double Rt = ((3.3 - voltageValue) * 5.1) / voltageValue;\n'+
											'  double temperature = ((298.15 * 3950) / (3950 + 298.15 * log(Rt / 10))) - 273.15;\n'+
											'  return temperature;\n'+
											'}\n'; 
	Blockly.Arduino.setups_["setup_webbit_temperature"]="pinMode(pin_temperature, INPUT);\n";

	var code = '';
	return code;
};

Blockly.Arduino.esp32_temperature = function(){
	var code = "getTemperature(pin_temperature)";
	return[code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.esp32_buzzer = function(){
	Blockly.Arduino.definitions_['define_webbit_buzzer_func']='\n'+
											'void playBuzzer(int pin, String frequency, String delaytime) {\n'+
											'  int freq = 2000;\n'+
											'  int channel = 10;\n'+
											'  int resolution = 8;\n'+
											'  ledcSetup(channel, freq, resolution);\n'+
											'  ledcAttachPin(pin, channel);\n'+
											'  String f="",d="",split=",";\n'+
											'  int s1=0;\n'+
											'  frequency+=",";\n'+
											'  delaytime+=",";\n'+
											'  for (int i=0;i<frequency.length();i++) {\n'+
											'    if (frequency[i]==split[0]) {\n'+
											'  	   f=frequency.substring(s1,i);\n'+
											'  	   s1=i+1;\n'+
											'  	   for (int j=0;j<delaytime.length();j++) {\n'+
											'  	      if (delaytime[j]==split[0]) {\n'+
											'  		    d=delaytime.substring(0,j);\n'+
											'  		    ledcWriteTone(channel, f.toInt());\n'+
											'  		    delay(d.toInt());\n'+
											'  		    delaytime=delaytime.substring(j+1);\n'+
											'  		    break;\n'+
											'  	      }\n'+
											'  	    }\n'+
											'    }\n'+
											'  }\n'+
											'  ledcWriteTone(channel, 0); \n'+
											'}\n'; 

	var pin=Blockly.Arduino.valueToCode(this,"pin",Blockly.Arduino.ORDER_ATOMIC);											
	var frequency=this.getFieldValue("frequency");
	var delaytime=Blockly.Arduino.valueToCode(this,"delaytime",Blockly.Arduino.ORDER_ATOMIC);
	var code = 'playBuzzer('+pin+', "'+frequency+'", '+delaytime+');\n';
	return code;
};

Blockly.Arduino.esp32_buzzer1 = function(){
	Blockly.Arduino.definitions_['define_webbit_buzzer_func']='\n'+
											'void playBuzzer(int pin, String frequency, String delaytime) {\n'+
											'  int freq = 2000;\n'+
											'  int channel = 10;\n'+
											'  int resolution = 8;\n'+
											'  ledcSetup(channel, freq, resolution);\n'+
											'  ledcAttachPin(pin, channel);\n'+
											'  String f="",d="",split=",";\n'+
											'  int s1=0;\n'+
											'  frequency+=",";\n'+
											'  delaytime+=",";\n'+
											'  for (int i=0;i<frequency.length();i++) {\n'+
											'    if (frequency[i]==split[0]) {\n'+
											'  	   f=frequency.substring(s1,i);\n'+
											'  	   s1=i+1;\n'+
											'  	   for (int j=0;j<delaytime.length();j++) {\n'+
											'  	      if (delaytime[j]==split[0]) {\n'+
											'  		    d=delaytime.substring(0,j);\n'+
											'  		    ledcWriteTone(channel, f.toInt());\n'+
											'  		    delay(d.toInt());\n'+
											'  		    delaytime=delaytime.substring(j+1);\n'+
											'  		    break;\n'+
											'  	      }\n'+
											'  	    }\n'+
											'    }\n'+
											'  }\n'+
											'  ledcWriteTone(channel, 0); \n'+
											'}\n'; 

	var pin=Blockly.Arduino.valueToCode(this,"pin",Blockly.Arduino.ORDER_ATOMIC);											
	var frequency=Blockly.Arduino.valueToCode(this,"frequency",Blockly.Arduino.ORDER_ATOMIC);
	var delaytime=Blockly.Arduino.valueToCode(this,"delaytime",Blockly.Arduino.ORDER_ATOMIC);
	var code = "playBuzzer("+pin+", "+frequency+", "+delaytime+");\n";
	return code;
};

Blockly.Arduino.esp32_mpu9250_pin = function(){
	var sda=Blockly.Arduino.valueToCode(this,"sda",Blockly.Arduino.ORDER_ATOMIC);
	var scl=Blockly.Arduino.valueToCode(this,"scl",Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_webbit_mpu9250']='\n'+
											'#include \<MPU9250_asukiaaa.h\>\n'+
											'#include \<Wire.h\>\n'+
											'MPU9250_asukiaaa mySensor;\n'; 
	Blockly.Arduino.definitions_['define_webbit_mpu9250_func']='\n'+
																'float getMPU9250(String val) {\n'+
																'  if (val.indexOf("accel")!=-1) {	\n'+									
																'  	mySensor.accelUpdate();\n'+
																'  	if (val=="accelX")\n'+
																'  		return mySensor.accelX();\n'+
																'  	else if (val=="accelY")\n'+	
																'  		return mySensor.accelY();\n'+
																'  	else if (val=="accelZ")\n'+
																'  		return mySensor.accelZ();\n'+
																'  	else if (val=="accelSqrt")\n'+
																'  		return mySensor.accelSqrt();\n'+
																'  }\n'+
																'  else if (val.indexOf("gyro")!=-1) {\n'+
																'  	mySensor.gyroUpdate();\n'+
																'  	if (val=="gyroX")\n'+
																'  		return mySensor.gyroX();\n'+
																'  	else if (val=="gyroY")\n'+
																'  		return mySensor.gyroY();\n'+
																'  	else if (val=="gyroZ")\n'+
																'  		return mySensor.gyroZ();\n'+
																'  }\n'+
																'  else if (val.indexOf("mag")!=-1) {\n'+
																'  	mySensor.magUpdate();\n'+
																'  	if (val=="magX")\n'+
																'  		return mySensor.magX();\n'+
																'  	else if (val=="magY")\n'+
																'  		return mySensor.magY();\n'+
																'  	else if (val=="magZ")\n'+
																'  		return mySensor.magZ();\n'+
																'  	else if (val=="magHorizDirection")\n'+
																'  		return mySensor.magHorizDirection();\n'+
																'  }\n'+
																'  return 0;\n'+																
																'}\n'; 
	Blockly.Arduino.setups_["setup_webbit_mpu9250"]='\n'+
											'  Wire.begin('+sda+', '+scl+');\n'+
											'  mySensor.setWire(&Wire);\n'+
											'  mySensor.beginAccel();\n'+
											'  mySensor.beginGyro();\n'+
											'  mySensor.beginMag();\n'+
											'/*\n'+
											'// You can set your own offset for mag values\n'+
											'    maxXOffset = - (magXMax + magXMin) / 2\n'+
											'               = - (70 - 30) / 2\n'+
											'               = - 40 / 2\n'+
											'               = -20\n'+
											'    magYOffset = - (magYMax + magYMin) / 2\n'+
											'               = - (110 + 10) / 2\n'+
											'               = - 120 / 2\n'+
											'               = -60\n'+
											'    mySensor.magXOffset = -50;\n'+
											'    mySensor.magYOffset = -55;\n'+
											'    mySensor.magZOffset = -10;  \n'+
											'*/\n';
  
  
	var code = '';
	return code;
};

Blockly.Arduino.esp32_mpu9250 = function(){
	var mpu = this.getFieldValue('mpu');
	var code = 'getMPU9250("'+mpu+'")';
	return[code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.BitMatrixLed_matrix_pin = function(){
	var pin=Blockly.Arduino.valueToCode(this,"pin",Blockly.Arduino.ORDER_ATOMIC);
	var leds=Blockly.Arduino.valueToCode(this,"leds",Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_webbit_matrix_variable']='String matrixString = "";\n';
	Blockly.Arduino.definitions_['define_webbit_matrix_NeoPixelBus']='\n'+
											'#include <NeoPixelBus.h>\n';
	Blockly.Arduino.definitions_['define_webbit_matrix']='\n'+
											'NeoPixelBus<NeoGrbFeature, Neo800KbpsMethod> strip('+leds+', '+pin+');\n'+											
											'float matrixBrightness = 0.5;\n'+
											'String strTemp_ = "";\n';	
	Blockly.Arduino.definitions_['define_webbit_matrix_HextoRGB']='\n'+
											'int HextoRGB(char val) {\n'+
											'  String hex ="0123456789abcdef";\n'+
											'  return hex.indexOf(val);\n'+
											'}\n'; 												
	Blockly.Arduino.setups_["setup_webbit_matrix"]="strip.Begin();\n";

	var code = '';
	return code;
};

Blockly.Arduino.BitMatrixLed_matrix_brightness = function(){
	var brightness=Blockly.Arduino.valueToCode(this,"brightness",Blockly.Arduino.ORDER_ATOMIC);
	var code = 'matrixBrightness = '+brightness+';\n';
	return code;
};

Blockly.Arduino.BitMatrixLed_matrix_clear = function(){
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  for (int i=0;i<color.length()/6;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]))*matrixBrightness;\n'+
    										'    strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip.Show();\n'+
											'}\n';	
	var code = 'MatrixLed("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");\n';
	return code;
};
  
Blockly.Arduino['BitMatrixLed_matrix'] = function() {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  for (int i=0;i<color.length()/6;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]))*matrixBrightness;\n'+
    										'    strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip.Show();\n'+
											'}\n';	
	var rgb = this.getFieldValue("RGB").replace(/#/g,"");
	var L01 = (this.getFieldValue('L01') == 'TRUE')?rgb:"000000";
	var L02 = (this.getFieldValue('L02') == 'TRUE')?rgb:"000000";
	var L03 = (this.getFieldValue('L03') == 'TRUE')?rgb:"000000";
	var L04 = (this.getFieldValue('L04') == 'TRUE')?rgb:"000000";
	var L05 = (this.getFieldValue('L05') == 'TRUE')?rgb:"000000";
	var L06 = (this.getFieldValue('L06') == 'TRUE')?rgb:"000000";
	var L07 = (this.getFieldValue('L07') == 'TRUE')?rgb:"000000";
	var L08 = (this.getFieldValue('L08') == 'TRUE')?rgb:"000000";
	var L09 = (this.getFieldValue('L09') == 'TRUE')?rgb:"000000";
	var L10 = (this.getFieldValue('L10') == 'TRUE')?rgb:"000000";
	var L11 = (this.getFieldValue('L11') == 'TRUE')?rgb:"000000";
	var L12 = (this.getFieldValue('L12') == 'TRUE')?rgb:"000000";
	var L13 = (this.getFieldValue('L13') == 'TRUE')?rgb:"000000";
	var L14 = (this.getFieldValue('L14') == 'TRUE')?rgb:"000000";
	var L15 = (this.getFieldValue('L15') == 'TRUE')?rgb:"000000";
	var L16 = (this.getFieldValue('L16') == 'TRUE')?rgb:"000000";
	var L17 = (this.getFieldValue('L17') == 'TRUE')?rgb:"000000";
	var L18 = (this.getFieldValue('L18') == 'TRUE')?rgb:"000000";
	var L19 = (this.getFieldValue('L19') == 'TRUE')?rgb:"000000";
	var L20 = (this.getFieldValue('L20') == 'TRUE')?rgb:"000000";
	var L21 = (this.getFieldValue('L21') == 'TRUE')?rgb:"000000";
	var L22 = (this.getFieldValue('L22') == 'TRUE')?rgb:"000000";
	var L23 = (this.getFieldValue('L23') == 'TRUE')?rgb:"000000";
	var L24 = (this.getFieldValue('L24') == 'TRUE')?rgb:"000000";
	var L25 = (this.getFieldValue('L25') == 'TRUE')?rgb:"000000";
	var code = 'MatrixLed("'+L21+L22+L23+L24+L25+L16+L17+L18+L19+L20+L11+L12+L13+L14+L15+L06+L07+L08+L09+L10+L01+L02+L03+L04+L05+'");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_reverse'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_reverse']='\n'+
											'void MatrixLedReverse(String color) {\n'+
											'  color.replace("#","");\n'+
											'  int R,G,B;\n'+											
											'  for (int i=0;i<matrixString.length()/6;i++) {\n'+
    										'    if (matrixString.substring(i*6,i*6+6)=="000000") {\n'+
											'       matrixString[i*6+0] = color[0];\n'+
											'  		matrixString[i*6+1] = color[1];\n'+
											'  		matrixString[i*6+2] = color[2];\n'+
											'  		matrixString[i*6+3] = color[3];\n'+
											'  		matrixString[i*6+4] = color[4];\n'+
											'  		matrixString[i*6+5] = color[5];\n'+ 
											'    } else {\n'+
											'       matrixString[i*6+0] = \'0\';\n'+
											'  		matrixString[i*6+1] = \'0\';\n'+
											'  		matrixString[i*6+2] = \'0\';\n'+
											'  		matrixString[i*6+3] = \'0\';\n'+
											'  		matrixString[i*6+4] = \'0\';\n'+
											'  		matrixString[i*6+5] = \'0\';\n'+
											'    }\n'+
    										'    R = (HextoRGB(matrixString[i*6+0])*16+HextoRGB(matrixString[i*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]))*matrixBrightness;\n'+											
											'    strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip.Show();\n'+
											'}\n';	
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.replace(/#/g,"")+'"';
	
	var code = 'MatrixLedReverse('+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_color'] = function() {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  for (int i=0;i<color.length()/6;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]))*matrixBrightness;\n'+
    										'    strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip.Show();\n'+
											'}\n';	
	var L01 = this.getFieldValue('L01').replace(/#/g,"");
	var L02 = this.getFieldValue('L02').replace(/#/g,"");
	var L03 = this.getFieldValue('L03').replace(/#/g,"");
	var L04 = this.getFieldValue('L04').replace(/#/g,"");
	var L05 = this.getFieldValue('L05').replace(/#/g,"");
	var L06 = this.getFieldValue('L06').replace(/#/g,"");
	var L07 = this.getFieldValue('L07').replace(/#/g,"");
	var L08 = this.getFieldValue('L08').replace(/#/g,"");
	var L09 = this.getFieldValue('L09').replace(/#/g,"");
	var L10 = this.getFieldValue('L10').replace(/#/g,"");
	var L11 = this.getFieldValue('L11').replace(/#/g,"");
	var L12 = this.getFieldValue('L12').replace(/#/g,"");
	var L13 = this.getFieldValue('L13').replace(/#/g,"");
	var L14 = this.getFieldValue('L14').replace(/#/g,"");
	var L15 = this.getFieldValue('L15').replace(/#/g,"");
	var L16 = this.getFieldValue('L16').replace(/#/g,"");
	var L17 = this.getFieldValue('L17').replace(/#/g,"");
	var L18 = this.getFieldValue('L18').replace(/#/g,"");
	var L19 = this.getFieldValue('L19').replace(/#/g,"");
	var L20 = this.getFieldValue('L20').replace(/#/g,"");
	var L21 = this.getFieldValue('L21').replace(/#/g,"");
	var L22 = this.getFieldValue('L22').replace(/#/g,"");
	var L23 = this.getFieldValue('L23').replace(/#/g,"");
	var L24 = this.getFieldValue('L24').replace(/#/g,"");
	var L25 = this.getFieldValue('L25').replace(/#/g,"");
	var code = 'MatrixLed("'+L21+L22+L23+L24+L25+L16+L17+L18+L19+L20+L11+L12+L13+L14+L15+L06+L07+L08+L09+L10+L01+L02+L03+L04+L05+'");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_color_one'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds_one']='\n'+
											'void MatrixLedOne(int i, String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString[i*6+0] = color[0];\n'+
											'  matrixString[i*6+1] = color[1];\n'+
											'  matrixString[i*6+2] = color[2];\n'+
											'  matrixString[i*6+3] = color[3];\n'+
											'  matrixString[i*6+4] = color[4];\n'+
											'  matrixString[i*6+5] = color[5];\n'+
											'  int R,G,B;\n'+
    										'  R = (HextoRGB(color[0])*16+HextoRGB(color[1]))*matrixBrightness;\n'+
    										'  G = (HextoRGB(color[2])*16+HextoRGB(color[3]))*matrixBrightness;\n'+
    										'  B = (HextoRGB(color[4])*16+HextoRGB(color[5]))*matrixBrightness;\n'+
    										'  strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  strip.Show();\n'+
											'}\n';
	var X=Blockly.Arduino.valueToCode(this,"X",Blockly.Arduino.ORDER_ATOMIC);
	var Y=Blockly.Arduino.valueToCode(this,"Y",Blockly.Arduino.ORDER_ATOMIC);
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.replace(/#/g,"")+'"';
	
	var code = 'MatrixLedOne((5-'+X+')*5 + ('+Y+'-1),'+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_color_one_n'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds_one']='\n'+
											'void MatrixLedOne(int i, String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString[i*6+0] = color[0];\n'+
											'  matrixString[i*6+1] = color[1];\n'+
											'  matrixString[i*6+2] = color[2];\n'+
											'  matrixString[i*6+3] = color[3];\n'+
											'  matrixString[i*6+4] = color[4];\n'+
											'  matrixString[i*6+5] = color[5];\n'+
											'  int R,G,B;\n'+
    										'  R = (HextoRGB(color[0])*16+HextoRGB(color[1]))*matrixBrightness;\n'+
    										'  G = (HextoRGB(color[2])*16+HextoRGB(color[3]))*matrixBrightness;\n'+
    										'  B = (HextoRGB(color[4])*16+HextoRGB(color[5]))*matrixBrightness;\n'+
    										'  strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  strip.Show();\n'+
											'}\n';
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.replace(/#/g,"")+'"';
	
	var code = 'MatrixLedOne(('+N+'-1),'+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_rgb_one_n'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds_one']='\n'+
											'void MatrixLedOne(int i, String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString[i*6+0] = color[0];\n'+
											'  matrixString[i*6+1] = color[1];\n'+
											'  matrixString[i*6+2] = color[2];\n'+
											'  matrixString[i*6+3] = color[3];\n'+
											'  matrixString[i*6+4] = color[4];\n'+
											'  matrixString[i*6+5] = color[5];\n'+
											'  int R,G,B;\n'+
    										'  R = (HextoRGB(color[0])*16+HextoRGB(color[1]))*matrixBrightness;\n'+
    										'  G = (HextoRGB(color[2])*16+HextoRGB(color[3]))*matrixBrightness;\n'+
    										'  B = (HextoRGB(color[4])*16+HextoRGB(color[5]))*matrixBrightness;\n'+
    										'  strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  strip.Show();\n'+
											'}\n';	
	Blockly.Arduino.definitions_['define_webbit_matrix_hexReverse']='\n'+	
											'char HexReverse(int val, int pos) {\n'+
											'  int i = 0;\n'+
											'  String s = "0123456789abcdef";\n'+											
											'  if (pos==1)\n'+
											'    i = (val-val%16)/16;\n'+
											'  else if (pos==2)\n'+
											'    i = val%16;\n'+
											'  return s[i];\n'+
											'}\n'; 	
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var R = Blockly.Arduino.valueToCode(this,"R",Blockly.Arduino.ORDER_ATOMIC);
	var G = Blockly.Arduino.valueToCode(this,"G",Blockly.Arduino.ORDER_ATOMIC);
	var B = Blockly.Arduino.valueToCode(this,"B",Blockly.Arduino.ORDER_ATOMIC);

	var code = 'strTemp_ = HexReverse('+R+', 1)+HexReverse('+R+', 2)+HexReverse('+G+', 1)+HexReverse('+G+', 2)+HexReverse('+B+', 1)+HexReverse('+B+', 2);\nMatrixLedOne(('+N+'-1), strTemp_);\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_color_reverse'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_reverse']='\n'+
											'void MatrixLedColorReverse() {\n'+
											'  int R,G,B;\n'+											
											'  for (int i=0;i<matrixString.length()/6;i++) {\n'+
    										'    R = (255-HextoRGB(matrixString[i*6+0])*16+HextoRGB(matrixString[i*6+1]))*matrixBrightness;\n'+
    										'    G = (255-HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]))*matrixBrightness;\n'+
    										'    B = (255-HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]))*matrixBrightness;\n'+											
											'    strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
											'    matrixString[i*6+0] = HexReverse(R, 1);\n'+
											'    matrixString[i*6+1] = HexReverse(R, 2);\n'+
											'    matrixString[i*6+2] = HexReverse(G, 1);\n'+
											'    matrixString[i*6+3] = HexReverse(G, 2);\n'+
											'    matrixString[i*6+4] = HexReverse(B, 1);\n'+
											'    matrixString[i*6+5] = HexReverse(B, 2);\n'+													
    										'  }\n'+
    										'  strip.Show();\n'+						
											'}\n';
	Blockly.Arduino.definitions_['define_webbit_matrix_hexReverse']='\n'+	
											'char HexReverse(int val, int pos) {\n'+
											'  int i = 0;\n'+
											'  String s = "0123456789abcdef";\n'+											
											'  if (pos==1)\n'+
											'    i = (val-val%16)/16;\n'+
											'  else if (pos==2)\n'+
											'    i = val%16;\n'+
											'  return s[i];\n'+
											'}\n'; 
	var code = 'MatrixLedColorReverse();\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_rotate'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_rotate']='\n'+
											'void MatrixLedColorRotate(int direction) {\n'+
											'  int R,G,B;\n'+
											'  String s = matrixString;\n'+
											'  int n=0;\n'+
											'    if (direction==1) {\n'+
											'		for (int i=4;i>=0;i--) {\n'+
											'		  for (int j=0;j<=4;j++) {\n'+
											'			matrixString[n*6+0]=s[(i+5*j)*6+0];\n'+
											'			matrixString[n*6+1]=s[(i+5*j)*6+1];\n'+
											'			matrixString[n*6+2]=s[(i+5*j)*6+2];\n'+
											'			matrixString[n*6+3]=s[(i+5*j)*6+3];\n'+
											'			matrixString[n*6+4]=s[(i+5*j)*6+4];\n'+
											'			matrixString[n*6+5]=s[(i+5*j)*6+5];\n'+											
											'			n++;\n'+
											'		  }\n'+
											'		}\n'+
											'    }\n'+
											'    else {\n'+
											'		for (int i=0;i<=4;i++) {\n'+    
											'		  for (int j=4;j>=0;j--) {\n'+
											'			matrixString[n*6+0]=s[(i+5*j)*6+0];\n'+
											'			matrixString[n*6+1]=s[(i+5*j)*6+1];\n'+
											'			matrixString[n*6+2]=s[(i+5*j)*6+2];\n'+
											'			matrixString[n*6+3]=s[(i+5*j)*6+3];\n'+
											'			matrixString[n*6+4]=s[(i+5*j)*6+4];\n'+
											'			matrixString[n*6+5]=s[(i+5*j)*6+5];\n'+	
											'			n++;\n'+
											'		  }\n'+
											'		}\n'+	
											'    }\n'+
											'  for (int k=0;k<matrixString.length()/6;k++) {\n'+
    										'    R = (HextoRGB(matrixString[k*6+0])*16+HextoRGB(matrixString[k*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(matrixString[k*6+2])*16+HextoRGB(matrixString[k*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(matrixString[k*6+4])*16+HextoRGB(matrixString[k*6+5]))*matrixBrightness;\n'+											
											'    strip.SetPixelColor(k, RgbColor(R, G, B));\n'+													
    										'  }\n'+											
    										'  strip.Show();\n'+											
											'}\n'; 
	var direction = block.getFieldValue('direction');
	var code = 'MatrixLedColorRotate('+direction+');\n';
	return code;
};


Blockly.Arduino['BitMatrixLed_matrix_flip'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_flip']='\n'+
											'void MatrixLedColorFlip(int direction) {\n'+
											'  int R,G,B;\n'+
											'  String s = matrixString;\n'+
											'  int n=0;\n'+
											'    if (direction==1) {\n'+
											'		for (int i=0;i<=4;i++) {\n'+
											'		  for (int j=4;j>=0;j--) {\n'+
											'			matrixString[n*6+0]=s[(j+5*i)*6+0];\n'+
											'			matrixString[n*6+1]=s[(j+5*i)*6+1];\n'+
											'			matrixString[n*6+2]=s[(j+5*i)*6+2];\n'+
											'			matrixString[n*6+3]=s[(j+5*i)*6+3];\n'+
											'			matrixString[n*6+4]=s[(j+5*i)*6+4];\n'+
											'			matrixString[n*6+5]=s[(j+5*i)*6+5];\n'+											
											'			n++;\n'+
											'		  }\n'+
											'		}\n'+
											'    }\n'+
											'    else {\n'+
											'		for (int i=4;i>=0;i--) {\n'+    
											'		  for (int j=0;j<=4;j++) {\n'+
											'			matrixString[n*6+0]=s[(j+5*i)*6+0];\n'+
											'			matrixString[n*6+1]=s[(j+5*i)*6+1];\n'+
											'			matrixString[n*6+2]=s[(j+5*i)*6+2];\n'+
											'			matrixString[n*6+3]=s[(j+5*i)*6+3];\n'+
											'			matrixString[n*6+4]=s[(j+5*i)*6+4];\n'+
											'			matrixString[n*6+5]=s[(j+5*i)*6+5];\n'+	
											'			n++;\n'+
											'		  }\n'+
											'		}\n'+	
											'    }\n'+
											'  for (int k=0;k<matrixString.length()/6;k++) {\n'+
    										'    R = (HextoRGB(matrixString[k*6+0])*16+HextoRGB(matrixString[k*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(matrixString[k*6+2])*16+HextoRGB(matrixString[k*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(matrixString[k*6+4])*16+HextoRGB(matrixString[k*6+5]))*matrixBrightness;\n'+											
											'    strip.SetPixelColor(k, RgbColor(R, G, B));\n'+													
    										'  }\n'+											
    										'  strip.Show();\n'+											
											'}\n'; 
	var direction = block.getFieldValue('direction');
	var code = 'MatrixLedColorFlip('+direction+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_getcolor'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_getcolor']='\n'+
											'String MatrixLedGetColor(int i) {\n'+
											'  return matrixString.substring(i*6,i*6+6);\n'+
											'}\n'; 
											
	var X=Blockly.Arduino.valueToCode(this,"X",Blockly.Arduino.ORDER_ATOMIC);
	var Y=Blockly.Arduino.valueToCode(this,"Y",Blockly.Arduino.ORDER_ATOMIC);
	
	var code = '("#"+MatrixLedGetColor((5-'+X+')*5 + ('+Y+'-1)))';
	return[code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['BitMatrixLed_matrix_one_getcolor'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_getcolor']='\n'+
											'String MatrixLedGetColor(int i) {\n'+
											'  return matrixString.substring(i*6,i*6+6);\n'+
											'}\n'; 
											
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	
	var code = '("#"+MatrixLedGetColor('+N+'-1))';
	return[code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['BitMatrixLed_sample1'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_sample']='\n'+
											'void MatrixLed_sample(String str, String rgb) {\n'+
											'  rgb.replace("#","");\n'+
											'  String leds = "";\n'+
											'  int i = 0;\n'+
											'  for (i=0;i<25;i++) {\n'+											
											'  	if (str.substring(i,i+1)=="1")\n'+
											'  		leds += rgb;\n'+
											'  	else\n'+
											'  		leds += "000000";\n'+	
											'  }\n'+
											'  matrixString = leds;\n'+	
											'  int R,G,B;\n'+
											'  for (int i=0;i<matrixString.length()/6;i++) {\n'+
    										'    R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]))*matrixBrightness;\n'+
    										'    strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip.Show();\n'+
											'}\n';
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.replace(/#/g,"")+'"';	
	var leds = this.getFieldValue('value_sample_');

	var code = 'MatrixLed_sample("'+leds+'",'+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_sample2'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_sample']='\n'+
											'void MatrixLed_sample(String str, String rgb) {\n'+
											'  rgb.replace("#","");\n'+
											'  String leds = "";\n'+
											'  int i = 0;\n'+
											'  for (i=0;i<25;i++) {\n'+
											'  	if (str.substring(i,i+1)=="1")\n'+
											'  		leds += rgb;\n'+
											'  	else\n'+
											'  		leds += "000000";\n'+	
											'  }\n'+
											'  matrixString = leds;\n'+
											'  int R,G,B;\n'+
											'  for (int i=0;i<matrixString.length()/6;i++) {\n'+
    										'    R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]))*matrixBrightness;\n'+
    										'    strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip.Show();\n'+
											'}\n';
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.replace(/#/g,"")+'"';	
	var leds = this.getFieldValue('value_sample_');

	var code = 'MatrixLed_sample("'+leds+'",'+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_sample3'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_sample']='\n'+
											'void MatrixLed_sample(String str, String rgb) {\n'+
											'  rgb.replace("#","");\n'+
											'  String leds = "";\n'+
											'  int i = 0;\n'+
											'  for (i=0;i<25;i++) {\n'+
											'  	if (str.substring(i,i+1)=="1")\n'+
											'  		leds += rgb;\n'+
											'  	else\n'+
											'  		leds += "000000";\n'+	
											'  }\n'+
											'  matrixString = leds;\n'+
											'  int R,G,B;\n'+
											'  for (int i=0;i<matrixString.length()/6;i++) {\n'+
    										'    R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]))*matrixBrightness;\n'+
    										'    strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip.Show();\n'+
											'}\n';
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.replace(/#/g,"")+'"';	
	var leds = this.getFieldValue('value_sample_');

	var code = 'MatrixLed_sample("'+leds+'",'+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_sample4'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_sample']='\n'+
											'void MatrixLed_sample(String str, String rgb) {\n'+
											'  rgb.replace("#","");\n'+
											'  String leds = "";\n'+
											'  for (int i=0;i<25;i++) {\n'+										
											'  	if (str.substring(i,i+1)=="1")\n'+
											'  		leds += rgb;\n'+
											'  	else\n'+
											'  		leds += "000000";\n'+	
											'  }\n'+
											'  matrixString = leds;\n'+
											'  int R,G,B;\n'+
											'  for (int i=0;i<matrixString.length()/6;i++) {\n'+
    										'    R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]))*matrixBrightness;\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]))*matrixBrightness;\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]))*matrixBrightness;\n'+
    										'    strip.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip.Show();\n'+
											'}\n';
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.replace(/#/g,"")+'"';	
	var leds = this.getFieldValue('value_sample_');

	var code = 'MatrixLed_sample("'+leds+'",'+rgb+');\n';
	return code;
};



Blockly.Arduino['BitMatrixLed_color'] = function(block) {
	var rgb = '"'+this.getFieldValue("RGB")+'"';
	return[rgb, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['BitMatrixLed_color_random'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_color_random']='\n'+
											'String MatrixLedColorRandom() {\n'+	
											'  String s = "0123456789abcdef";\n'+
											'  String color = "#000000";\n'+												
											'  int R = random(0, 255);\n'+
											'  int G = random(0, 255);\n'+
											'  int B = random(0, 255);\n'+	
											'  int r1 = (R-R%16)/16;\n'+
											'  int r2 = R%16;\n'+
											'  int g1 = (G-G%16)/16;\n'+
											'  int g2 = G%16;\n'+
											'  int b1 = (B-B%16)/16;\n'+
											'  int b2 = B%16;\n'+
											'  color[1] = s[r1];\n'+
											'  color[2] = s[r2];\n'+
											'  color[3] = s[g1];\n'+
											'  color[4] = s[g2];\n'+
											'  color[5] = s[b1];\n'+
											'  color[6] = s[b2];\n'+		
											'  return color;\n'+
											'}\n'; 
	var code = 'MatrixLedColorRandom()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

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
	Blockly.Arduino.definitions_['define_webbit_matrix_variable_mooncar']='String matrixString_mooncar = "";\n';
	Blockly.Arduino.definitions_['define_webbit_matrix_NeoPixelBus']='\n'+
											'#include <NeoPixelBus.h>\n';
	Blockly.Arduino.definitions_['define_webbit_matrix_mooncar']='\n'+
											'NeoPixelBus<NeoGrbFeature, Neo800KbpsMethod> strip_mooncar('+leds+', '+pin+');\n'+
											'float matrixBrightness_mooncar = 0.5;\n'+
											'String strTemp_mooncar = "";\n';	
	Blockly.Arduino.definitions_['define_webbit_matrix_HextoRGB']='\n'+
											'int HextoRGB(char val) {\n'+
											'  String hex ="0123456789abcdef";\n'+
											'  return hex.indexOf(val);\n'+
											'}\n'; 												
	Blockly.Arduino.setups_["setup_webbit_matrix_mooncar"]="strip_mooncar.Begin();\n";

	var code = '';
	return code;
};

Blockly.Arduino.webbit_mooncar_ws2812_brightness = function(){
	var brightness=Blockly.Arduino.valueToCode(this,"brightness",Blockly.Arduino.ORDER_ATOMIC);

	var code = 'matrixBrightness_mooncar = '+brightness+';\n';
	return code;
};

Blockly.Arduino.webbit_mooncar_ws2812_clear = function(){
	Blockly.Arduino.definitions_['define_webbit_matrix_leds_mooncar']='\n'+
											'void MatrixLed_mooncar(String color) {\n'+
											'  matrixString_mooncar = color;\n'+
											'  int R,G,B;\n'+
											'  for (int i=0;i<color.length()/6;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]))*matrixBrightness_mooncar;\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]))*matrixBrightness_mooncar;\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]))*matrixBrightness_mooncar;\n'+
    										'    strip_mooncar.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip_mooncar.Show();\n'+
											'}\n';	
	var code = 'MatrixLed_mooncar("000000000000000000000000000000000000000000000000");\n';
	return code;
};

Blockly.Arduino['webbit_mooncar_ws2812_color'] = function() {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds_mooncar']='\n'+
											'void MatrixLed_mooncar(String color) {\n'+
											'  matrixString_mooncar = color;\n'+
											'  int R,G,B;\n'+
											'  for (int i=0;i<color.length()/6;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]))*matrixBrightness_mooncar;\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]))*matrixBrightness_mooncar;\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]))*matrixBrightness_mooncar;\n'+
    										'    strip_mooncar.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  }\n'+
    										'  strip_mooncar.Show();\n'+
											'}\n';		
	var L02 = this.getFieldValue('L02').replace(/#/g,"");
	var L04 = this.getFieldValue('L04').replace(/#/g,"");
	var L06 = this.getFieldValue('L06').replace(/#/g,"");
	var L10 = this.getFieldValue('L10').replace(/#/g,"");
	var L16 = this.getFieldValue('L16').replace(/#/g,"");
	var L20 = this.getFieldValue('L20').replace(/#/g,"");
	var L22 = this.getFieldValue('L22').replace(/#/g,"");
	var L24 = this.getFieldValue('L24').replace(/#/g,"");
	var code = 'MatrixLed_mooncar("'+L22+L16+L06+L02+L04+L10+L20+L24+'");\n';
	return code;
};

Blockly.Arduino['webbit_mooncar_ws2812_color_one_n'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds_one_mooncar']='\n'+
											'void MatrixLedOne_mooncar(int i, String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString_mooncar[i*6+0] = color[0];\n'+
											'  matrixString_mooncar[i*6+1] = color[1];\n'+
											'  matrixString_mooncar[i*6+2] = color[2];\n'+
											'  matrixString_mooncar[i*6+3] = color[3];\n'+
											'  matrixString_mooncar[i*6+4] = color[4];\n'+
											'  matrixString_mooncar[i*6+5] = color[5];\n'+
											'  int R,G,B;\n'+
    										'  R = (HextoRGB(color[0])*16+HextoRGB(color[1]))*matrixBrightness_mooncar;\n'+
    										'  G = (HextoRGB(color[2])*16+HextoRGB(color[3]))*matrixBrightness_mooncar;\n'+
    										'  B = (HextoRGB(color[4])*16+HextoRGB(color[5]))*matrixBrightness_mooncar;\n'+
    										'  strip_mooncar.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  strip_mooncar.Show();\n'+
											'}\n';
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.replace(/#/g,"")+'"';
	
	var code = 'MatrixLedOne_mooncar(('+N+'-1),'+rgb+');\n';
	return code;
};

Blockly.Arduino['webbit_mooncar_ws2812_rgb_one_n'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds_one_mooncar']='\n'+
											'void MatrixLedOne_mooncar(int i, String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString_mooncar[i*6+0] = color[0];\n'+
											'  matrixString_mooncar[i*6+1] = color[1];\n'+
											'  matrixString_mooncar[i*6+2] = color[2];\n'+
											'  matrixString_mooncar[i*6+3] = color[3];\n'+
											'  matrixString_mooncar[i*6+4] = color[4];\n'+
											'  matrixString_mooncar[i*6+5] = color[5];\n'+
											'  int R,G,B;\n'+
    										'  R = (HextoRGB(color[0])*16+HextoRGB(color[1]))*matrixBrightness_mooncar;\n'+
    										'  G = (HextoRGB(color[2])*16+HextoRGB(color[3]))*matrixBrightness_mooncar;\n'+
    										'  B = (HextoRGB(color[4])*16+HextoRGB(color[5]))*matrixBrightness_mooncar;\n'+
    										'  strip_mooncar.SetPixelColor(i, RgbColor(R, G, B));\n'+
    										'  strip_mooncar.Show();\n'+
											'}\n';	
	Blockly.Arduino.definitions_['define_webbit_matrix_hexReverse']='\n'+	
											'char HexReverse(int val, int pos) {\n'+
											'  int i = 0;\n'+
											'  String s = "0123456789abcdef";\n'+											
											'  if (pos==1)\n'+
											'    i = (val-val%16)/16;\n'+
											'  else if (pos==2)\n'+
											'    i = val%16;\n'+
											'  return s[i];\n'+
											'}\n'; 	
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var R = Blockly.Arduino.valueToCode(this,"R",Blockly.Arduino.ORDER_ATOMIC);
	var G = Blockly.Arduino.valueToCode(this,"G",Blockly.Arduino.ORDER_ATOMIC);
	var B = Blockly.Arduino.valueToCode(this,"B",Blockly.Arduino.ORDER_ATOMIC);

	var code = 'strTemp_mooncar = HexReverse('+R+', 1)+HexReverse('+R+', 2)+HexReverse('+G+', 1)+HexReverse('+G+', 2)+HexReverse('+B+', 1)+HexReverse('+B+', 2);\nMatrixLedOne_mooncar(('+N+'-1), strTemp_mooncar);\n';
	return code;
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