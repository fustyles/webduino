Blockly.Arduino.esp32_button_pin = function(){
	var A=Blockly.Arduino.valueToCode(this,"PINA",Blockly.Arduino.ORDER_ATOMIC);
	var B=Blockly.Arduino.valueToCode(this,"PINB",Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_webbit_button']='\n'+
											'int pin_ButtonA = '+A+';\n'+
											'int pin_ButtonB = '+B+';\n';  
	Blockly.Arduino.setups_["setup_webbit_button"]="pinMode(pin_ButtonA, INPUT);\n  pinMode(pin_ButtonB, INPUT);\n";

	var code = '';
	return code;
};

Blockly.Arduino.esp32_button = function(){
	var kind=this.getFieldValue("AB_BUTTON");

	if (kind == "A") {
		var code = "(digitalRead(pin_ButtonA))";
	}
	else if (kind == "B") {
		var code = "(digitalRead(pin_ButtonB))";
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

Blockly.Arduino.esp32_buzzer2 = function(){
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

Blockly.Arduino.esp32_buzzer3 = function(){
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
	var frequency=Blockly.Arduino.valueToCode(this,"frequency",Blockly.Arduino.ORDER_ATOMIC).replace(/{/g,"").replace(/}/g,"").replace(/", "/g,",").replace(/ /g,"");
	if (frequency.indexOf('"')==-1)
		frequency = '"'+frequency+'"';
	var delaytime=Blockly.Arduino.valueToCode(this,"delaytime",Blockly.Arduino.ORDER_ATOMIC).replace(/{/g,"").replace(/}/g,"").replace(/", "/g,",").replace(/ /g,"");
	if (delaytime.indexOf('"')==-1)
		delaytime = '"'+delaytime+'"';	
	var code = "playBuzzer("+pin+", "+frequency+", "+delaytime+");\n";
	return code;
};

Blockly.Arduino.esp32_buzzer_tone1 = function(){											
	var frequency=this.getFieldValue("frequency");
	return[frequency, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.esp32_buzzer_tone2 = function(){											
	var frequency=this.getFieldValue("frequency");
	return[frequency, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.esp32_buzzer_tone3 = function(){											
	var frequency=this.getFieldValue("frequency");
	return[frequency, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.esp32_mpu9250_pin = function(){
	var sda=Blockly.Arduino.valueToCode(this,"sda",Blockly.Arduino.ORDER_ATOMIC);
	var scl=Blockly.Arduino.valueToCode(this,"scl",Blockly.Arduino.ORDER_ATOMIC);
	var address=this.getFieldValue("address");
	if (address!="") address="("+address+")";
	Blockly.Arduino.definitions_['define_webbit_mpu9250']='\n'+
											'#include \<MPU9250_asukiaaa.h\>\n'+
											'#include \<Wire.h\>\n'+
											'MPU9250_asukiaaa mySensor'+address+';\n'; 
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
	Blockly.Arduino.definitions_['define_webbit_matrix_variable']='String matrixString = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";\n';
    Blockly.Arduino.definitions_['define_webbit_matrix_marquee_time']='int MatrixLed_marquee_time = 500;\n';
 	Blockly.Arduino.definitions_['define_webbit_matrix_marquee_direction']='int MatrixLed_marquee_rotate = 0;\n';
	Blockly.Arduino.definitions_['define_webbit_matrix_NeoPixelBus']='\n'+
											'#include <Adafruit_NeoPixel.h>\n';
	if (!Blockly.Arduino.definitions_['define_webbit_matrix']) {											
		Blockly.Arduino.definitions_['define_webbit_matrix']='\n'+
												'Adafruit_NeoPixel pixels = Adafruit_NeoPixel('+leds+', '+pin+', NEO_GRB + NEO_KHZ800);\n';	
	} else {
		var tmp = Blockly.Arduino.definitions_['define_webbit_matrix'];
		Blockly.Arduino.definitions_['define_webbit_matrix']= tmp.replace("{0, 0}","{"+leds+", "+pin+"}");
	}
	Blockly.Arduino.definitions_['define_webbit_matrix_NeoPixelBus_strTemp']='\n'+												
													'String strTemp_ = "";\n';	
	Blockly.Arduino.definitions_['define_webbit_matrix_HextoRGB']='\n'+
											'int HextoRGB(char val) {\n'+
											'  String hex ="0123456789abcdef";\n'+
											'  return hex.indexOf(val);\n'+
											'}\n'; 												
	Blockly.Arduino.setups_["setup_webbit_matrix"]='pixels.begin();\n  pixels.show();\n';

	var code = '';
	return code;
};

Blockly.Arduino.BitMatrixLed_matrix_brightness = function(){
	var brightness=Blockly.Arduino.valueToCode(this,"brightness",Blockly.Arduino.ORDER_ATOMIC);
	var code = 'pixels.setBrightness('+ brightness+');\n';
	return code;
};

Blockly.Arduino.BitMatrixLed_matrix_clear = function(){
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = color.length()/6;\n'+							
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]));\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]));\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';	
	var code = 'MatrixLed("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_onecolor'] = function() {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = color.length()/6;\n'+								
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]));\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]));\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';	
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if (rgb.indexOf("#")!=-1)
		rgb = rgb.toLowerCase().replace(/#/g,"");
	else {
		Blockly.Arduino.definitions_['define_webbit_matrix_color_clear_poundsign']='\n'+
											'String color_clear_poundsign(String color) {\n'+
											'  color.replace("#","");\n'+
											'  return color;\n'+											
											'}\n';		
		rgb = '"+color_clear_poundsign('+rgb+')+"';
		
	}
	var code = 'MatrixLed("'+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+'");\n';
	return code;
};
  
Blockly.Arduino['BitMatrixLed_matrix'] = function() {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = color.length()/6;\n'+								
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]));\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]));\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';	
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if (rgb.indexOf("#")!=-1)
		rgb = rgb.toLowerCase().replace(/#/g,"");
	else {
		Blockly.Arduino.definitions_['define_webbit_matrix_color_clear_poundsign']='\n'+
											'String color_clear_poundsign(String color) {\n'+
											'  color.replace("#","");\n'+
											'  return color;\n'+											
											'}\n';		
		rgb = '"+color_clear_poundsign('+rgb+')+"';
		
	}
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
											'  int range;\n'+	
											'  range = matrixString.length()/6;\n'+							
											'  for (int i=0;i<range;i++) {\n'+
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
    										'    R = (HextoRGB(matrixString[i*6+0])*16+HextoRGB(matrixString[i*6+1]));\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]));\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]));\n'+											
											'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';	
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';
	
	var code = 'MatrixLedReverse('+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_color'] = function() {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = color.length()/6;\n'+									
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]));\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]));\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
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
    										'  R = (HextoRGB(color[0])*16+HextoRGB(color[1]));\n'+
    										'  G = (HextoRGB(color[2])*16+HextoRGB(color[3]));\n'+
    										'  B = (HextoRGB(color[4])*16+HextoRGB(color[5]));\n'+
    										'  pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  pixels.show();\n'+
											'}\n';
	var X=Blockly.Arduino.valueToCode(this,"X",Blockly.Arduino.ORDER_ATOMIC);
	var Y=Blockly.Arduino.valueToCode(this,"Y",Blockly.Arduino.ORDER_ATOMIC);
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';
	
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
    										'  R = (HextoRGB(color[0])*16+HextoRGB(color[1]));\n'+
    										'  G = (HextoRGB(color[2])*16+HextoRGB(color[3]));\n'+
    										'  B = (HextoRGB(color[4])*16+HextoRGB(color[5]));\n'+
    										'  pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  pixels.show();\n'+
											'}\n';
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';
	
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
    										'  R = (HextoRGB(color[0])*16+HextoRGB(color[1]));\n'+
    										'  G = (HextoRGB(color[2])*16+HextoRGB(color[3]));\n'+
    										'  B = (HextoRGB(color[4])*16+HextoRGB(color[5]));\n'+
    										'  pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  pixels.show();\n'+
											'}\n';	
	Blockly.Arduino.definitions_['define_webbit_matrix_hexReverse_s']='\n'+	
											'String HexReverse_s(int val, int pos) {\n'+
											'  int i = 0;\n'+
											'  String s = "0123456789abcdef";\n'+											
											'  if (pos==1)\n'+
											'    i = (val-val%16)/16;\n'+
											'  else if (pos==2)\n'+
											'    i = val%16;\n'+
											'  return String(s[i]);\n'+
											'}\n'; 	
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var R = Blockly.Arduino.valueToCode(this,"R",Blockly.Arduino.ORDER_ATOMIC);
	var G = Blockly.Arduino.valueToCode(this,"G",Blockly.Arduino.ORDER_ATOMIC);
	var B = Blockly.Arduino.valueToCode(this,"B",Blockly.Arduino.ORDER_ATOMIC);

	var code = 'strTemp_ = HexReverse_s('+R+', 1)+HexReverse_s('+R+', 2)+HexReverse_s('+G+', 1)+HexReverse_s('+G+', 2)+HexReverse_s('+B+', 1)+HexReverse_s('+B+', 2);\nMatrixLedOne(('+N+'-1), strTemp_);\n';
	return code;
};

function rgb2number(rgb) {
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';
	return 'String('+rgb+')';
}

Blockly.Arduino['BitMatrixLed_matrix_color_one_3'] = function() {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = color.length()/6;\n'+								
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]));\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]));\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';	

	var L21 = Blockly.Arduino.valueToCode(this,"L21",Blockly.Arduino.ORDER_ATOMIC);
	L21 = rgb2number(L21).replace(/""/g,'"');
	var L22 = Blockly.Arduino.valueToCode(this,"L22",Blockly.Arduino.ORDER_ATOMIC);
	L22 = rgb2number(L22).replace(/""/g,'"');
	var L23 = Blockly.Arduino.valueToCode(this,"L23",Blockly.Arduino.ORDER_ATOMIC);
	L23 = rgb2number(L23).replace(/""/g,'"');
	var code = 'MatrixLed('+L21+"+"+L22+"+"+L23+"+"+'"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_color_one_8'] = function() {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = color.length()/6;\n'+								
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]));\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]));\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';	

	var L16 = Blockly.Arduino.valueToCode(this,"L16",Blockly.Arduino.ORDER_ATOMIC);
	L16 = rgb2number(L16).replace(/""/g,'"');
	var L17 = Blockly.Arduino.valueToCode(this,"L17",Blockly.Arduino.ORDER_ATOMIC);
	L17 = rgb2number(L17).replace(/""/g,'"');
	var L18 = Blockly.Arduino.valueToCode(this,"L18",Blockly.Arduino.ORDER_ATOMIC);
	L18 = rgb2number(L18).replace(/""/g,'"');
	var L21 = Blockly.Arduino.valueToCode(this,"L21",Blockly.Arduino.ORDER_ATOMIC);
	L21 = rgb2number(L21).replace(/""/g,'"');
	var L22 = Blockly.Arduino.valueToCode(this,"L22",Blockly.Arduino.ORDER_ATOMIC);
	L22 = rgb2number(L22).replace(/""/g,'"');
	var L23 = Blockly.Arduino.valueToCode(this,"L23",Blockly.Arduino.ORDER_ATOMIC);
	L23 = rgb2number(L23).replace(/""/g,'"');
	var L24 = Blockly.Arduino.valueToCode(this,"L24",Blockly.Arduino.ORDER_ATOMIC);
	L24 = rgb2number(L24).replace(/""/g,'"');
	var L25 = Blockly.Arduino.valueToCode(this,"L25",Blockly.Arduino.ORDER_ATOMIC);
	L25 = rgb2number(L25).replace(/""/g,'"');
	var code = 'MatrixLed('+L21+"+"+L22+"+"+L23+"+"+L24+"+"+L25+"+"+L16+"+"+L17+"+"+L18+"+"+'"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_color_one_12'] = function() {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = color.length()/6;\n'+								
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]));\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]));\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';	

	var L11 = Blockly.Arduino.valueToCode(this,"L11",Blockly.Arduino.ORDER_ATOMIC);
	L11 = rgb2number(L11).replace(/""/g,'"');
	var L12 = Blockly.Arduino.valueToCode(this,"L12",Blockly.Arduino.ORDER_ATOMIC);
	L12 = rgb2number(L12).replace(/""/g,'"');
	var L16 = Blockly.Arduino.valueToCode(this,"L16",Blockly.Arduino.ORDER_ATOMIC);
	L16 = rgb2number(L16).replace(/""/g,'"');
	var L17 = Blockly.Arduino.valueToCode(this,"L17",Blockly.Arduino.ORDER_ATOMIC);
	L17 = rgb2number(L17).replace(/""/g,'"');
	var L18 = Blockly.Arduino.valueToCode(this,"L18",Blockly.Arduino.ORDER_ATOMIC);
	L18 = rgb2number(L18).replace(/""/g,'"');
	var L19 = Blockly.Arduino.valueToCode(this,"L19",Blockly.Arduino.ORDER_ATOMIC);
	L19 = rgb2number(L19).replace(/""/g,'"');
	var L20 = Blockly.Arduino.valueToCode(this,"L20",Blockly.Arduino.ORDER_ATOMIC);
	L20 = rgb2number(L20).replace(/""/g,'"');
	var L21 = Blockly.Arduino.valueToCode(this,"L21",Blockly.Arduino.ORDER_ATOMIC);
	L21 = rgb2number(L21).replace(/""/g,'"');
	var L22 = Blockly.Arduino.valueToCode(this,"L22",Blockly.Arduino.ORDER_ATOMIC);
	L22 = rgb2number(L22).replace(/""/g,'"');
	var L23 = Blockly.Arduino.valueToCode(this,"L23",Blockly.Arduino.ORDER_ATOMIC);
	L23 = rgb2number(L23).replace(/""/g,'"');
	var L24 = Blockly.Arduino.valueToCode(this,"L24",Blockly.Arduino.ORDER_ATOMIC);
	L24 = rgb2number(L24).replace(/""/g,'"');
	var L25 = Blockly.Arduino.valueToCode(this,"L25",Blockly.Arduino.ORDER_ATOMIC);
	L25 = rgb2number(L25).replace(/""/g,'"');
	var code = 'MatrixLed('+L21+"+"+L22+"+"+L23+"+"+L24+"+"+L25+"+"+L16+"+"+L17+"+"+L18+"+"+L19+"+"+L20+"+"+L11+"+"+L12+"+"+'"000000000000000000000000000000000000000000000000000000000000000000000000000000");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_color_reverse'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_reverse']='\n'+
											'void MatrixLedColorReverse() {\n'+
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = matrixString.length()/6;\n'+							
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (255-HextoRGB(matrixString[i*6+0])*16-HextoRGB(matrixString[i*6+1]));\n'+
    										'    G = (255-HextoRGB(matrixString[i*6+2])*16-HextoRGB(matrixString[i*6+3]));\n'+
    										'    B = (255-HextoRGB(matrixString[i*6+4])*16-HextoRGB(matrixString[i*6+5]));\n'+										
											'    pixels.setPixelColor(i, pixels.Color(int(R), int(G), int(B)));\n'+
											'    matrixString[i*6+0] = HexReverse(R, 1);\n'+
											'    matrixString[i*6+1] = HexReverse(R, 2);\n'+
											'    matrixString[i*6+2] = HexReverse(G, 1);\n'+
											'    matrixString[i*6+3] = HexReverse(G, 2);\n'+
											'    matrixString[i*6+4] = HexReverse(B, 1);\n'+
											'    matrixString[i*6+5] = HexReverse(B, 2);\n'+													
    										'  }\n'+
    										'  pixels.show();\n'+						
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
											'  int range;\n'+	
											'  range = matrixString.length()/6;\n'+							
											'  for (int k=0;k<range;k++) {\n'+
    										'    R = (HextoRGB(matrixString[k*6+0])*16+HextoRGB(matrixString[k*6+1]));\n'+
    										'    G = (HextoRGB(matrixString[k*6+2])*16+HextoRGB(matrixString[k*6+3]));\n'+
    										'    B = (HextoRGB(matrixString[k*6+4])*16+HextoRGB(matrixString[k*6+5]));\n'+											
											'    pixels.setPixelColor(k, pixels.Color(R, G, B));\n'+													
    										'  }\n'+											
    										'  pixels.show();\n'+											
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
											'  int range;\n'+	
											'  range = matrixString.length()/6;\n'+						
											'  for (int k=0;k<range;k++) {\n'+
    										'    R = (HextoRGB(matrixString[k*6+0])*16+HextoRGB(matrixString[k*6+1]));\n'+
    										'    G = (HextoRGB(matrixString[k*6+2])*16+HextoRGB(matrixString[k*6+3]));\n'+
    										'    B = (HextoRGB(matrixString[k*6+4])*16+HextoRGB(matrixString[k*6+5]));\n'+											
											'    pixels.setPixelColor(k, pixels.Color(R, G, B));\n'+													
    										'  }\n'+											
    										'  pixels.show();\n'+											
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
											'  for (int i=0;i<25;i++) {\n'+											
											'  	if (str.substring(i,i+1)=="1")\n'+
											'  		leds += rgb;\n'+
											'  	else\n'+
											'  		leds += "000000";\n'+	
											'  }\n'+
											'  matrixString = leds;\n'+											
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = matrixString.length()/6;\n'+							
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]));\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]));\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';	
	var leds = this.getFieldValue('value_sample_');

	var code = 'MatrixLed_sample("'+leds+'",'+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_sample2'] = function(block) {
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
											'  int range;\n'+	
											'  range = matrixString.length()/6;\n'+							
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]));\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]));\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';	
	var leds = this.getFieldValue('value_sample_');

	var code = 'MatrixLed_sample("'+leds+'",'+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_sample3'] = function(block) {
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
											'  int range;\n'+	
											'  range = matrixString.length()/6;\n'+						
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]));\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]));\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';	
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
											'  int range;\n'+	
											'  range = matrixString.length()/6;\n'+							
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]));\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]));\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';	
	var leds = this.getFieldValue('value_sample_');

	var code = 'MatrixLed_sample("'+leds+'",'+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_sample5'] = function(block) {
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
											'  int range;\n'+	
											'  range = matrixString.length()/6;\n'+							
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]));\n'+
    										'    G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]));\n'+
    										'    B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';
	Blockly.Arduino.definitions_['define_webbit_matrix_samplecode1']='\n'+  
											'String Sample2LedStringOne(String c) {\n'+
											'  String sample = "0000000000000000000000000";\n'+
											'  String s = String(c[0]);\n'+
											'  if (s=="♥") sample = "0110011110011111111001100";\n'+
											'  if (s=="♡") sample = "0110010010010011001001100";\n'+
											'  if (s=="↑") sample = "0010001000111110100000100";\n'+
											'  if (s=="↓") sample = "0010000010111110001000100";\n'+
											'  if (s=="←") sample = "0010000100101010111000100";\n'+
											'  if (s=="→") sample = "0010001110101010010000100";\n'+
											'  if (s=="↖") sample = "0000110010101001100011110";\n'+
											'  if (s=="↙") sample = "1000001001001010001101111";\n'+
											'  if (s=="↗") sample = "1111011000101001001000001";\n'+
											'  if (s=="↘") sample = "0111100011001010100110000";\n'+
											'  if (s=="▲") sample = "0000100111111110011100001";\n'+
											'  if (s=="▼") sample = "1000011100111111110010000";\n'+
											'  if (s=="◄") sample = "1111101110011100010000100";\n'+
											'  if (s=="►") sample = "0010000100011100111011111";\n'+
											'  if (s=="=") sample = "0000000000000100000100000";\n'+
											'  if (s==".") sample = "0000000000000000000100000";\n'+
											'  if (s=="?") sample = "0100010100100111000001000";\n'+
											'  if (s=="!") sample = "0000000000111010000000000";\n'+
											'  if (s==";") sample = "0000000000010100000100000";\n'+
											'  if (s==":") sample = "0000000000010100000000000";\n'+
											'  if (s=="(") sample = "0000000000100010111000000";\n'+
											'  if (s==")") sample = "0000001110100010000000000";\n'+
											'  if (s=="]") sample = "0000011111100010000000000";\n'+
											'  if (s=="{") sample = "0000010001111110010000000";\n'+
											'  if (s=="}") sample = "0000000100111111000100000";\n'+
											'  if (s=="\\\'") sample = "0000000100110000000000000";\n'+
											'  if (s=="\\\\") sample = "0000100010001000100010000";\n'+
											'  if (s=="/") sample = "1000001000001000001000001";\n'+
											'  if (s=="+") sample = "0000000100011100010000000";\n'+
											'  if (s=="-") sample = "0000000100001000010000000";\n'+
											'  if (s=="#") sample = "0101011111010101111101010";\n'+											
											'  if (s=="0") sample = "0000011111100011111100000";\n'+
											'  if (s=="1") sample = "0000000001111110100100000";\n'+
											'  if (s=="2") sample = "0000011101101011011100000";\n'+
											'  if (s=="3") sample = "0000011111101011010100000";\n'+
											'  if (s=="4") sample = "0000011111001001110000000";\n'+
											'  if (s=="5") sample = "0000010111101011110100000";\n'+
											'  if (s=="6") sample = "0000010111101011111100000";\n'+
											'  if (s=="7") sample = "0000011111100001100000000";\n'+
											'  if (s=="8") sample = "0000011111101011111100000";\n'+
											'  if (s=="9") sample = "0000011111101011110100000";\n'+
											'  if (s=="A") sample = "0111110010100101001001111";\n'+
											'  if (s=="B") sample = "0101010101101011010111111";\n'+
											'  if (s=="C") sample = "1000110001100011000101110";\n'+
											'  if (s=="D") sample = "0111010001100011000111111";\n'+
											'  if (s=="E") sample = "1010110101101011010111111";\n'+
											'  if (s=="F") sample = "1010010100101001010011111";\n'+
											'  if (s=="G") sample = "1011110101101011000101110";\n'+
											'  if (s=="H") sample = "1111100100001000010011111";\n'+
											'  if (s=="I") sample = "1000110001111111000110001";\n'+
											'  if (s=="J") sample = "1000010000111111000110011";\n'+
											'  if (s=="K") sample = "1000101010001000001011111";\n'+
											'  if (s=="L") sample = "0000100001000010000111111";\n'+
											'  if (s=="M") sample = "1111101000001000100011111";\n'+
											'  if (s=="N") sample = "1111100010001000100011111";\n'+
											'  if (s=="O") sample = "0111010001100011000101110";\n'+
											'  if (s=="P") sample = "0110010010100101001011111";\n'+
											'  if (s=="Q") sample = "0110110010101011000101110";\n'+
											'  if (s=="R") sample = "0101110100101001010011111";\n'+
											'  if (s=="S") sample = "1001010101101011010101001";\n'+
											'  if (s=="T") sample = "1000010000111111000010000";\n'+
											'  if (s=="U") sample = "1111000001000010000111110";\n'+
											'  if (s=="V") sample = "1110000010000010001011100";\n'+
											'  if (s=="W") sample = "1111000001111100000111110";\n'+
											'  if (s=="X") sample = "1000101010001000101010001";\n'+
											'  if (s=="Y") sample = "1000001000001110100010000";\n'+
											'  if (s=="Z") sample = "1000111001101011001110001";\n'+
											'  if (s=="a") sample = "0000100110010010011000000";\n'+
											'  if (s=="b") sample = "0000000010001011111100000";\n'+
											'  if (s=="c") sample = "0000001001010010011000000";\n'+
											'  if (s=="d") sample = "0000011111001010001000000";\n'+
											'  if (s=="e") sample = "0000000101010110011000000";\n'+
											'  if (s=="f") sample = "0000010100111110010000000";\n'+
											'  if (s=="g") sample = "0000000110010110010100000";\n'+
											'  if (s=="h") sample = "0000000011001001111100000";\n'+
											'  if (s=="i") sample = "0000000000101110000000000";\n'+
											'  if (s=="j") sample = "0000000000101110000100000";\n'+
											'  if (s=="k") sample = "0000000101000101111100000";\n'+
											'  if (s=="l") sample = "0000000000111110000000000";\n'+
											'  if (s=="m") sample = "0001100100000110010000111";\n'+
											'  if (s=="n") sample = "0000000011001000011100000";\n'+
											'  if (s=="o") sample = "0000000010001010001000000";\n'+
											'  if (s=="p") sample = "0000000100010100111100000";\n'+
											'  if (s=="q") sample = "0000001111010100010000000";\n'+
											'  if (s=="r") sample = "0000000100000100011100000";\n'+
											'  if (s=="s") sample = "0000010010101010100100000";\n'+
											'  if (s=="t") sample = "0000000101011110010000000";\n'+
											'  if (s=="u") sample = "0000100110000010011000000";\n'+
											'  if (s=="v") sample = "0000000110000010011000000";\n'+
											'  if (s=="w") sample = "0011000001001100000100110";\n'+
											'  if (s=="x") sample = "0000000101000100010100000";\n'+
											'  if (s=="y") sample = "0000000100000100010100000";\n'+
											'  if (s=="z") sample = "0000001000011010101100001";\n'+
											'  return sample;\n'+											
											'}\n'; 									
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';	
	var sample = Blockly.Arduino.valueToCode(this,"sample",Blockly.Arduino.ORDER_ATOMIC);
	if ((sample.indexOf("'")==0)&&(sample.lastIndexOf("'")==sample.length-1))
		sample = '"'+sample.substring(1,sample.length-1)+'"';
	else if ((sample.indexOf('"')==0)&&(sample.lastIndexOf('"')==sample.length-1))
		sample = '"'+sample.substring(1,sample.length-1)+'"';

	var code = 'MatrixLed_sample(Sample2LedStringOne(String('+sample+')),'+rgb+');\n';
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

Blockly.Arduino['BitMatrixLed_matrix_texttocode'] = function(block) {
  var value_text_ = Blockly.Arduino.valueToCode(block, 'value_text_', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_webbit_matrix_samplecode']='\n'+  
											'String Sample2LedString(char sample) {\n'+
											'  String c = String(sample);\n'+
											'  String reverse = "0000000000000000000000000";\n'+
											'  if (c=="♥") reverse = "0110011110011111111001100";\n'+
											'  if (c=="♡") reverse = "0110010010010011001001100";\n'+
											'  if (c=="↑") reverse = "0010001000111110100000100";\n'+
											'  if (c=="↓") reverse = "0010000010111110001000100";\n'+
											'  if (c=="←") reverse = "0010000100101010111000100";\n'+
											'  if (c=="→") reverse = "0010001110101010010000100";\n'+
											'  if (c=="↖") reverse = "0000110010101001100011110";\n'+
											'  if (c=="↙") reverse = "1000001001001010001101111";\n'+
											'  if (c=="↗") reverse = "1111011000101001001000001";\n'+
											'  if (c=="↘") reverse = "0111100011001010100110000";\n'+
											'  if (c=="▲") reverse = "0000100111111110011100001";\n'+
											'  if (c=="▼") reverse = "1000011100111111110010000";\n'+
											'  if (c=="◄") reverse = "1111101110011100010000100";\n'+
											'  if (c=="►") reverse = "0010000100011100111011111";\n'+
											'  if (c=="=") reverse = "0000000000000100000100000";\n'+
											'  if (c==".") reverse = "0000000000000000000100000";\n'+
											'  if (c=="?") reverse = "0100010100100111000001000";\n'+
											'  if (c=="!") reverse = "0000000000111010000000000";\n'+
											'  if (c==";") reverse = "0000000000010100000100000";\n'+
											'  if (c==":") reverse = "0000000000010100000000000";\n'+
											'  if (c=="(") reverse = "0000000000100010111000000";\n'+
											'  if (c==")") reverse = "0000001110100010000000000";\n'+
											'  if (c=="]") reverse = "0000011111100010000000000";\n'+
											'  if (c=="{") reverse = "0000010001111110010000000";\n'+
											'  if (c=="}") reverse = "0000000100111111000100000";\n'+
											'  if (c=="\\\'") reverse = "0000000100110000000000000";\n'+
											'  if (c=="\\\\") reverse = "0000100010001000100010000";\n'+
											'  if (c=="/") reverse = "1000001000001000001000001";\n'+											
											'  if (c=="+") reverse = "0000000100011100010000000";\n'+
											'  if (c=="-") reverse = "0000000100001000010000000";\n'+
											'  if (c=="#") reverse = "0101011111010101111101010";\n'+											
											'  if (c=="0") reverse = "0000011111100011111100000";\n'+
											'  if (c=="1") reverse = "0000000001111110100100000";\n'+
											'  if (c=="2") reverse = "0000011101101011011100000";\n'+
											'  if (c=="3") reverse = "0000011111101011010100000";\n'+
											'  if (c=="4") reverse = "0000011111001001110000000";\n'+
											'  if (c=="5") reverse = "0000010111101011110100000";\n'+
											'  if (c=="6") reverse = "0000010111101011111100000";\n'+
											'  if (c=="7") reverse = "0000011111100001100000000";\n'+
											'  if (c=="8") reverse = "0000011111101011111100000";\n'+
											'  if (c=="9") reverse = "0000011111101011110100000";\n'+
											'  if (c=="A") reverse = "0111110010100101001001111";\n'+
											'  if (c=="B") reverse = "0101010101101011010111111";\n'+
											'  if (c=="C") reverse = "1000110001100011000101110";\n'+
											'  if (c=="D") reverse = "0111010001100011000111111";\n'+
											'  if (c=="E") reverse = "1010110101101011010111111";\n'+
											'  if (c=="F") reverse = "1010010100101001010011111";\n'+
											'  if (c=="G") reverse = "1011110101101011000101110";\n'+
											'  if (c=="H") reverse = "1111100100001000010011111";\n'+
											'  if (c=="I") reverse = "1000110001111111000110001";\n'+
											'  if (c=="J") reverse = "1000010000111111000110011";\n'+
											'  if (c=="K") reverse = "1000101010001000001011111";\n'+
											'  if (c=="L") reverse = "0000100001000010000111111";\n'+
											'  if (c=="M") reverse = "1111101000001000100011111";\n'+
											'  if (c=="N") reverse = "1111100010001000100011111";\n'+
											'  if (c=="O") reverse = "0111010001100011000101110";\n'+
											'  if (c=="P") reverse = "0110010010100101001011111";\n'+
											'  if (c=="Q") reverse = "0110110010101011000101110";\n'+
											'  if (c=="R") reverse = "0101110100101001010011111";\n'+
											'  if (c=="S") reverse = "1001010101101011010101001";\n'+
											'  if (c=="T") reverse = "1000010000111111000010000";\n'+
											'  if (c=="U") reverse = "1111000001000010000111110";\n'+
											'  if (c=="V") reverse = "1110000010000010001011100";\n'+
											'  if (c=="W") reverse = "1111000001111100000111110";\n'+
											'  if (c=="X") reverse = "1000101010001000101010001";\n'+
											'  if (c=="Y") reverse = "1000001000001110100010000";\n'+
											'  if (c=="Z") reverse = "1000111001101011001110001";\n'+
											'  if (c=="a") reverse = "0000100110010010011000000";\n'+
											'  if (c=="b") reverse = "0000000010001011111100000";\n'+
											'  if (c=="c") reverse = "0000001001010010011000000";\n'+
											'  if (c=="d") reverse = "0000011111001010001000000";\n'+
											'  if (c=="e") reverse = "0000000101010110011000000";\n'+
											'  if (c=="f") reverse = "0000010100111110010000000";\n'+
											'  if (c=="g") reverse = "0000000110010110010100000";\n'+
											'  if (c=="h") reverse = "0000000011001001111100000";\n'+
											'  if (c=="i") reverse = "0000000000101110000000000";\n'+
											'  if (c=="j") reverse = "0000000000101110000100000";\n'+
											'  if (c=="k") reverse = "0000000101000101111100000";\n'+
											'  if (c=="l") reverse = "0000000000111110000000000";\n'+
											'  if (c=="m") reverse = "0001100100000110010000111";\n'+
											'  if (c=="n") reverse = "0000000011001000011100000";\n'+
											'  if (c=="o") reverse = "0000000010001010001000000";\n'+
											'  if (c=="p") reverse = "0000000100010100111100000";\n'+
											'  if (c=="q") reverse = "0000001111010100010000000";\n'+
											'  if (c=="r") reverse = "0000000100000100011100000";\n'+
											'  if (c=="s") reverse = "0000010010101010100100000";\n'+
											'  if (c=="t") reverse = "0000000101011110010000000";\n'+
											'  if (c=="u") reverse = "0000100110000010011000000";\n'+
											'  if (c=="v") reverse = "0000000110000010011000000";\n'+
											'  if (c=="w") reverse = "0011000001001100000100110";\n'+
											'  if (c=="x") reverse = "0000000101000100010100000";\n'+
											'  if (c=="y") reverse = "0000000100000100010100000";\n'+
											'  if (c=="z") reverse = "0000001000011010101100001";\n'+
											'  String str = "";\n'+
											'  for (int i=reverse.length()-1;i>=0;i--) {\n'+
											'  	str = str + String(reverse[i]);\n'+
											'  }\n'+
											'  return str;\n'+											
											'}\n';  
	Blockly.Arduino.definitions_['define_webbit_matrix_texttocode']='\n'+
											'String MatrixLedTextToCode(String text) {\n'+
											'  String s = "";\n'+	
											'  if (text.length()>0) {	\n'+										
											'    for (int i=0;i<text.length();i++) {\n'+
    										'      s = s + Sample2LedString(text[i]);\n'+
    										'    }\n'+
											'  }\n'+
    										'  return s;\n'+
											'}\n'; 
  var code = 'MatrixLedTextToCode('+value_text_+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['BitMatrixLed_matrix_indentcode'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_indentcode']='\n'+
											'String MatrixLedIndentcode(String text) {\n'+
											'  int i=0,j=0;\n'+
											'  if (text.length()>=30) {\n'+
											'    for (i=0;i<(text.length()/5-1);i++) {\n'+
											'      if (text.substring(i*5,i*5+10)=="0000000000") {\n'+
											'	     for (j=i*5;j<i*5+10;j++) {\n'+
											'		   text[j]=\'2\';\n'+
											'	     }\n'+
											'        text.replace("2222222222","00000");\n'+
											'        i--;\n'+
											'	   }\n'+
    										'    }\n'+
											'  }\n'+
    										'  return text;\n'+
											'}\n'; 	
  var value_indentcode_ = Blockly.Arduino.valueToCode(block, 'value_indentcode_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'MatrixLedIndentcode('+value_indentcode_+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['BitMatrixLed_matrix_marquee_time'] = function(block) {		
  var value_marquee_time_ = Blockly.Arduino.valueToCode(block, 'value_marquee_time_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'MatrixLed_marquee_time = '+ value_marquee_time_ +';\n';
  return code;
};

Blockly.Arduino['BitMatrixLed_matrix_marquee'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_marquee']='\n'+
											'void MatrixLed_marquee(String str, String rgb) {\n'+
											'  int R,G,B;\n'+												
											'  rgb.replace("#","");\n'+										
											'  String leds = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";\n'+
											'  for (int i=0;i<str.length();i++) {\n'+										
											'  	if (str.substring(i,i+1)=="1")\n'+
											'  		leds += rgb;\n'+
											'  	else\n'+
											'  		leds += "000000";\n'+	
											'  }\n'+
											'  leds += "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";\n'+											
											'  while (true) {\n'+
											'    for (int k=0;k<(leds.length()/30-5);k++) {\n'+										
											'      matrixString = leds.substring(k*30,k*30+150);\n'+
											'    String s = matrixString;\n'+
											'    int n=0;\n'+
											'    if (MatrixLed_marquee_rotate==1) {\n'+
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
											'    else if (MatrixLed_marquee_rotate==2) {\n'+
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
											'    int range;\n'+	
											'    range = matrixString.length()/6;\n'+							
											'    for (int i=0;i<range;i++) {\n'+
    										'        R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]));\n'+
    										'        G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]));\n'+
    										'        B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]));\n'+    										
											'        pixels.setPixelColor(24-i, pixels.Color(R, G, B));\n'+									
    										'      }\n'+											
    										'      pixels.show();\n'+
    										'      delay(MatrixLed_marquee_time);\n'+
    										'    }\n'+
											'  }\n'+
											'}\n';
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';												
	var value_marquee_ = Blockly.Arduino.valueToCode(block, 'value_marquee_', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'MatrixLed_marquee('+ value_marquee_ +','+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_marquee_times'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_marquee_times']='\n'+
											'void MatrixLed_marquee_times(String str, int times, String rgb) {\n'+
											'  int R,G,B;\n'+											
											'  rgb.replace("#","");\n'+										
											'  String leds = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";\n'+
											'  for (int i=0;i<str.length();i++) {\n'+										
											'  	if (str.substring(i,i+1)=="1")\n'+
											'  		leds += rgb;\n'+
											'  	else\n'+
											'  		leds += "000000";\n'+	
											'  }\n'+
											'  leds += "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";\n'+											
											'  for (int k=0;k<times;k++) {\n'+											
											'    for (int j=0;j<(leds.length()/30-5);j++) {\n'+										
											'      matrixString = leds.substring(j*30,j*30+150);\n'+
											'    String s = matrixString;\n'+
											'    int n=0;\n'+
											'    if (MatrixLed_marquee_rotate==1) {\n'+
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
											'    else if (MatrixLed_marquee_rotate==2) {\n'+
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
											'  	  int range;\n'+	
											'  	  range = matrixString.length()/6;\n'+							
											'  	  for (int i=0;i<range;i++) {\n'+
    										'        R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]));\n'+
    										'        G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]));\n'+
    										'        B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]));\n'+    										
											'        pixels.setPixelColor(24-i, pixels.Color(R, G, B));\n'+
    										'      }\n'+											
    										'      pixels.show();\n'+
    										'      delay(MatrixLed_marquee_time);\n'+
    										'    }\n'+
											'  }\n'+
											'}\n';
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';		
	var value_marquee_ = Blockly.Arduino.valueToCode(block, 'value_marquee_', Blockly.Arduino.ORDER_ATOMIC);
	var value_times_ = Blockly.Arduino.valueToCode(block, 'value_times_', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'MatrixLed_marquee_times('+ value_marquee_ +','+value_times_+','+rgb+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_marquee_color'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_marquee_color']='\n'+
											'void MatrixLed_marquee_color(String str) {\n'+
											'  str.replace("#","");\n'+												
											'  int R,G,B,range;\n'+
											'  String leds = str;\n'+
											'  while (true) {\n'+
											'    range = leds.length()/30-4;\n'+
											'    for (int k=0;k<(leds.length()/30-4);k++) {\n'+										
											'      matrixString = leds.substring(k*30,k*30+150);\n'+
											'      String s = matrixString;\n'+
											'      int n=0;\n'+
											'	   for (int i=0;i<=4;i++) {\n'+
											'		 for (int j=4;j>=0;j--) {\n'+
											'		   matrixString[n*6+0]=s[(j+5*i)*6+0];\n'+
											'		   matrixString[n*6+1]=s[(j+5*i)*6+1];\n'+
											'		   matrixString[n*6+2]=s[(j+5*i)*6+2];\n'+
											'		   matrixString[n*6+3]=s[(j+5*i)*6+3];\n'+
											'		   matrixString[n*6+4]=s[(j+5*i)*6+4];\n'+
											'		   matrixString[n*6+5]=s[(j+5*i)*6+5];\n'+											
											'		   n++;\n'+
											'		 }\n'+
											'	   }\n'+
											'      s = matrixString;\n'+											
											'      n=0;\n'+
											'      if (MatrixLed_marquee_rotate==1) {\n'+
											'  		 for (int i=4;i>=0;i--) {\n'+
											'	  	   for (int j=0;j<=4;j++) {\n'+
											'  	  		  matrixString[n*6+0]=s[(i+5*j)*6+0];\n'+
											'	  		  matrixString[n*6+1]=s[(i+5*j)*6+1];\n'+
											'	  		  matrixString[n*6+2]=s[(i+5*j)*6+2];\n'+
											'	  		  matrixString[n*6+3]=s[(i+5*j)*6+3];\n'+
											'			  matrixString[n*6+4]=s[(i+5*j)*6+4];\n'+
											'	 		  matrixString[n*6+5]=s[(i+5*j)*6+5];\n'+											
											'			  n++;\n'+
											'		    }\n'+
											'		  }\n'+
											'      }\n'+
											'      else if (MatrixLed_marquee_rotate==2) {\n'+
											'		  for (int i=0;i<=4;i++) {\n'+    
											'		    for (int j=4;j>=0;j--) {\n'+
											'			  matrixString[n*6+0]=s[(i+5*j)*6+0];\n'+
											'			  matrixString[n*6+1]=s[(i+5*j)*6+1];\n'+
											'			  matrixString[n*6+2]=s[(i+5*j)*6+2];\n'+
											'			  matrixString[n*6+3]=s[(i+5*j)*6+3];\n'+
											'			  matrixString[n*6+4]=s[(i+5*j)*6+4];\n'+
											'			  matrixString[n*6+5]=s[(i+5*j)*6+5];\n'+	
											'			  n++;\n'+
											'		    }\n'+
											'		  }\n'+	
											'      }\n'+	
											'  	  range = matrixString.length()/6;\n'+							
											'  	  for (int i=0;i<range;i++) {\n'+
    										'        R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]));\n'+
    										'        G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]));\n'+
    										'        B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]));\n'+    										
											'        pixels.setPixelColor(24-i, pixels.Color(R, G, B));\n'+
    										'      }\n'+											
    										'      pixels.show();\n'+
    										'      delay(MatrixLed_marquee_time);\n'+
    										'    }\n'+
											'  }\n'+
											'}\n';	
  var value_marquee_ = Blockly.Arduino.valueToCode(block, 'value_marquee_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'MatrixLed_marquee_color('+ value_marquee_ +');\n';
  return code;
};

Blockly.Arduino['BitMatrixLed_matrix_marquee_color_times'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_marquee_color_times']='\n'+
											'void MatrixLed_marquee_color_times(String str, int times) {\n'+
											'  str.replace("#","");\n'+												
											'  int R,G,B,range;\n'+
											'  String leds = str;\n'+
											'  for (int k=0;k<times;k++) {\n'+
											'    range = leds.length()/30-4;\n'+
											'    for (int m=0;m<range;m++) {\n'+										
											'      matrixString = leds.substring(m*30,m*30+150);\n'+
											'      String s = matrixString;\n'+
											'      int n=0;\n'+
											'	   for (int i=0;i<=4;i++) {\n'+
											'		 for (int j=4;j>=0;j--) {\n'+
											'		   matrixString[n*6+0]=s[(j+5*i)*6+0];\n'+
											'		   matrixString[n*6+1]=s[(j+5*i)*6+1];\n'+
											'		   matrixString[n*6+2]=s[(j+5*i)*6+2];\n'+
											'		   matrixString[n*6+3]=s[(j+5*i)*6+3];\n'+
											'		   matrixString[n*6+4]=s[(j+5*i)*6+4];\n'+
											'		   matrixString[n*6+5]=s[(j+5*i)*6+5];\n'+											
											'		   n++;\n'+
											'		 }\n'+
											'	   }\n'+
											'      s = matrixString;\n'+											
											'      n=0;\n'+
											'      if (MatrixLed_marquee_rotate==1) {\n'+
											'  		 for (int i=4;i>=0;i--) {\n'+
											'	  	   for (int j=0;j<=4;j++) {\n'+
											'  	  		  matrixString[n*6+0]=s[(i+5*j)*6+0];\n'+
											'	  		  matrixString[n*6+1]=s[(i+5*j)*6+1];\n'+
											'	  		  matrixString[n*6+2]=s[(i+5*j)*6+2];\n'+
											'	  		  matrixString[n*6+3]=s[(i+5*j)*6+3];\n'+
											'			  matrixString[n*6+4]=s[(i+5*j)*6+4];\n'+
											'	 		  matrixString[n*6+5]=s[(i+5*j)*6+5];\n'+											
											'			  n++;\n'+
											'		    }\n'+
											'		  }\n'+
											'      }\n'+
											'      else if (MatrixLed_marquee_rotate==2) {\n'+
											'		  for (int i=0;i<=4;i++) {\n'+    
											'		    for (int j=4;j>=0;j--) {\n'+
											'			  matrixString[n*6+0]=s[(i+5*j)*6+0];\n'+
											'			  matrixString[n*6+1]=s[(i+5*j)*6+1];\n'+
											'			  matrixString[n*6+2]=s[(i+5*j)*6+2];\n'+
											'			  matrixString[n*6+3]=s[(i+5*j)*6+3];\n'+
											'			  matrixString[n*6+4]=s[(i+5*j)*6+4];\n'+
											'			  matrixString[n*6+5]=s[(i+5*j)*6+5];\n'+	
											'			  n++;\n'+
											'		    }\n'+
											'		  }\n'+	
											'      }\n'+	
											'  	  int range;\n'+	
											'  	  range = matrixString.length()/6;\n'+							
											'  	  for (int i=0;i<range;i++) {\n'+
    										'        R = (HextoRGB(matrixString[i*6])*16+HextoRGB(matrixString[i*6+1]));\n'+
    										'        G = (HextoRGB(matrixString[i*6+2])*16+HextoRGB(matrixString[i*6+3]));\n'+
    										'        B = (HextoRGB(matrixString[i*6+4])*16+HextoRGB(matrixString[i*6+5]));\n'+    										
											'        pixels.setPixelColor(24-i, pixels.Color(R, G, B));\n'+
    										'      }\n'+											
    										'      pixels.show();\n'+
    										'      delay(MatrixLed_marquee_time);\n'+
    										'    }\n'+
											'  }\n'+
											'}\n';		
	var value_marquee_ = Blockly.Arduino.valueToCode(block, 'value_marquee_', Blockly.Arduino.ORDER_ATOMIC);
	var value_times_ = Blockly.Arduino.valueToCode(block, 'value_times_', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'MatrixLed_marquee_color_times('+ value_marquee_ +','+value_times_+');\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_marquee_degree'] = function(block) {
  var value_marquee_direction_ = block.getFieldValue('value_marquee_direction_');
  var value_marquee_degree_ = Blockly.Arduino.valueToCode(block, 'value_marquee_degree_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'MatrixLed_marquee_degree('+ value_marquee_direction_ +','+ value_marquee_degree_ +');\n';
  return code;
};

Blockly.Arduino['BitMatrixLed_matrix_marquee_color_degree'] = function(block) {
  var value_marquee_direction_ = block.getFieldValue('value_marquee_direction_');
  var value_marquee_degree_ = Blockly.Arduino.valueToCode(block, 'value_marquee_degree_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'MatrixLed_marquee_color_degree('+ value_marquee_direction_ +','+ value_marquee_degree_ +');\n';
  return code;
};

Blockly.Arduino['BitMatrixLed_matrix_matrixcode'] = function(block) {
  var L01 = (block.getFieldValue('L01') == 'TRUE')?"1":"0";
  var L02 = (block.getFieldValue('L02') == 'TRUE')?"1":"0";
  var L03 = (block.getFieldValue('L03') == 'TRUE')?"1":"0";
  var L04 = (block.getFieldValue('L04') == 'TRUE')?"1":"0";
  var L05 = (block.getFieldValue('L05') == 'TRUE')?"1":"0";
  var L06 = (block.getFieldValue('L06') == 'TRUE')?"1":"0";
  var L07 = (block.getFieldValue('L07') == 'TRUE')?"1":"0";
  var L08 = (block.getFieldValue('L08') == 'TRUE')?"1":"0";
  var L09 = (block.getFieldValue('L09') == 'TRUE')?"1":"0";
  var L10 = (block.getFieldValue('L10') == 'TRUE')?"1":"0";
  var L11 = (block.getFieldValue('L11') == 'TRUE')?"1":"0";
  var L12 = (block.getFieldValue('L12') == 'TRUE')?"1":"0";
  var L13 = (block.getFieldValue('L13') == 'TRUE')?"1":"0";
  var L14 = (block.getFieldValue('L14') == 'TRUE')?"1":"0";
  var L15 = (block.getFieldValue('L15') == 'TRUE')?"1":"0";
  var L16 = (block.getFieldValue('L16') == 'TRUE')?"1":"0";
  var L17 = (block.getFieldValue('L17') == 'TRUE')?"1":"0";
  var L18 = (block.getFieldValue('L18') == 'TRUE')?"1":"0";
  var L19 = (block.getFieldValue('L19') == 'TRUE')?"1":"0";
  var L20 = (block.getFieldValue('L20') == 'TRUE')?"1":"0";
  var L21 = (block.getFieldValue('L21') == 'TRUE')?"1":"0";
  var L22 = (block.getFieldValue('L22') == 'TRUE')?"1":"0";
  var L23 = (block.getFieldValue('L23') == 'TRUE')?"1":"0";
  var L24 = (block.getFieldValue('L24') == 'TRUE')?"1":"0";
  var L25 = (block.getFieldValue('L25') == 'TRUE')?"1":"0";
  var code = '"'+L01+L02+L03+L04+L05+L06+L07+L08+L09+L10+L11+L12+L13+L14+L15+L16+L17+L18+L19+L20+L21+L22+L23+L24+L25+'"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['BitMatrixLed_matrix_matrixcode_color'] = function(block) {
  var L01 = block.getFieldValue('L01');
  var L02 = block.getFieldValue('L02');
  var L03 = block.getFieldValue('L03');
  var L04 = block.getFieldValue('L04');
  var L05 = block.getFieldValue('L05');
  var L06 = block.getFieldValue('L06');
  var L07 = block.getFieldValue('L07');
  var L08 = block.getFieldValue('L08');
  var L09 = block.getFieldValue('L09');
  var L10 = block.getFieldValue('L10');
  var L11 = block.getFieldValue('L11');
  var L12 = block.getFieldValue('L12');
  var L13 = block.getFieldValue('L13');
  var L14 = block.getFieldValue('L14');
  var L15 = block.getFieldValue('L15');
  var L16 = block.getFieldValue('L16');
  var L17 = block.getFieldValue('L17');
  var L18 = block.getFieldValue('L18');
  var L19 = block.getFieldValue('L19');
  var L20 = block.getFieldValue('L20');
  var L21 = block.getFieldValue('L21');
  var L22 = block.getFieldValue('L22');
  var L23 = block.getFieldValue('L23');
  var L24 = block.getFieldValue('L24');
  var L25 = block.getFieldValue('L25');
  var code = '"'+L01+L02+L03+L04+L05+L06+L07+L08+L09+L10+L11+L12+L13+L14+L15+L16+L17+L18+L19+L20+L21+L22+L23+L24+L25+'"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['BitMatrixLed_matrix_matrixcode_line_color'] = function(block) {
  var L01 = block.getFieldValue('L01');
  var L02 = block.getFieldValue('L02');
  var L03 = block.getFieldValue('L03');
  var L04 = block.getFieldValue('L04');
  var L05 = block.getFieldValue('L05');
  var code = '"'+L01+L02+L03+L04+L05+'"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['BitMatrixLed_matrix_marquee_stop'] = function(block) {
  var code = 'MatrixLed_marquee_stop();\n';
  return code;
};

Blockly.Arduino['BitMatrixLed_matrix_marquee_resume'] = function(block) {
  var code = 'MatrixLed_marquee_resume();\n';
  return code;
};

Blockly.Arduino['BitMatrixLed_matrix_marquee_rotate'] = function(block) {
	var direction = block.getFieldValue('direction');	
	var code = 'MatrixLed_marquee_rotate = '+direction+';\n';
	return code;
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
Blockly.Arduino.webbit_mooncar_move1_car=function(){
  var a=this.getFieldValue("STAT");
  var speed=Blockly.Arduino.valueToCode(this,"SPEED",Blockly.Arduino.ORDER_ATOMIC);
  var ratio=Blockly.Arduino.valueToCode(this,"RATIO",Blockly.Arduino.ORDER_ATOMIC);  
  Blockly.Arduino.setups_['analogwrite_12'] = 'ledcAttachPin(pin_r1, 5);\n  ledcSetup(5, 5000, 8);\n';
  Blockly.Arduino.setups_['analogwrite_18'] = 'ledcAttachPin(pin_r2, 6);\n  ledcSetup(6, 5000, 8);\n';
  Blockly.Arduino.setups_['analogwrite_16'] = 'ledcAttachPin(pin_l1, 7);\n  ledcSetup(7, 5000, 8);\n';
  Blockly.Arduino.setups_['analogwrite_19'] = 'ledcAttachPin(pin_l2, 8);\n  ledcSetup(8, 5000, 8);\n';
  Blockly.Arduino.definitions_['mooncar_motor'] ='\n'+
											'void mooncar_motor(int r1,int r2,int l1,int l2) {\n'+
											'  ledcWrite(5, r1);\n  ledcWrite(6, r2);\n  ledcWrite(7, l1);\n  ledcWrite(8, l2);\n'+
											'}\n';
											
  if (a == "LEFTFRONT") {
	var code = 'mooncar_motor('+speed+', 0, int('+speed+'*'+ratio+'), 0);\n';	  
    return code;
  } else if (a == "RIGHTFRONT") {
	var code = 'mooncar_motor(int('+speed+'*'+ratio+'), 0, '+speed+', 0);\n';
    return code;
  } else if (a == "LEFTREAR") {
	var code = 'mooncar_motor(0, '+speed+', 0, int('+speed+'*'+ratio+'));\n';	  
    return code;
  } else if (a == "RIGHTREAR") {
	var code = 'mooncar_motor(0, int('+speed+'*'+ratio+'), 0, '+speed+');\n';
    return code;
  } else {
	var code = 'mooncar_motor(0, 0, 0, 0);\n';
    return code;
  }
};
Blockly.Arduino.webbit_mooncar_stop_car=function(){
  var code = 'mooncar_motor(0, 0, 0, 0);\n';
  return code;
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
	Blockly.Arduino.definitions_['define_webbit_matrix_variable']='String matrixString = "000000000000000000000000000000000000000000000000";\n';
    Blockly.Arduino.definitions_['define_webbit_matrix_marquee_time']='int MatrixLed_marquee_time = 500;\n';
 	Blockly.Arduino.definitions_['define_webbit_matrix_marquee_direction']='int MatrixLed_marquee_rotate = 0;\n';
	Blockly.Arduino.definitions_['define_webbit_matrix_NeoPixelBus']='\n'+
											'#include <Adafruit_NeoPixel.h>\n';
	if (!Blockly.Arduino.definitions_['define_webbit_matrix']) {											
		Blockly.Arduino.definitions_['define_webbit_matrix']='\n'+
												'Adafruit_NeoPixel pixels = Adafruit_NeoPixel('+leds+', '+pin+', NEO_GRB + NEO_KHZ800);\n';	
	} else {
		var tmp = Blockly.Arduino.definitions_['define_webbit_matrix'];
		Blockly.Arduino.definitions_['define_webbit_matrix']= tmp.replace("{0, 0}","{"+leds+", "+pin+"}");
	}
	Blockly.Arduino.definitions_['define_webbit_matrix_NeoPixelBus_strTemp']='\n'+												
													'String strTemp_ = "";\n';	
	Blockly.Arduino.definitions_['define_webbit_matrix_HextoRGB']='\n'+
											'int HextoRGB(char val) {\n'+
											'  String hex ="0123456789abcdef";\n'+
											'  return hex.indexOf(val);\n'+
											'}\n'; 												
	Blockly.Arduino.setups_["setup_webbit_matrix"]='pixels.begin();\n  pixels.show();\n';

	var code = '';
	return code;
};

Blockly.Arduino.webbit_mooncar_ws2812_brightness = function(){
	var brightness=Blockly.Arduino.valueToCode(this,"brightness",Blockly.Arduino.ORDER_ATOMIC);
	var code = 'pixels.setBrightness('+ brightness+');\n';
	return code;
};

Blockly.Arduino.webbit_mooncar_ws2812_clear = function(){
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = color.length()/6;\n'+							
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]));\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]));\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';	
	var code = 'MatrixLed("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");\n';
	return code;
};

Blockly.Arduino['webbit_mooncar_ws2812_color'] = function() {
	Blockly.Arduino.definitions_['define_webbit_matrix_leds']='\n'+
											'void MatrixLed(String color) {\n'+
											'  color.replace("#","");\n'+
											'  matrixString = color;\n'+
											'  int R,G,B;\n'+
											'  int range;\n'+	
											'  range = color.length()/6;\n'+							
											'  for (int i=0;i<range;i++) {\n'+
    										'    R = (HextoRGB(color[i*6])*16+HextoRGB(color[i*6+1]));\n'+
    										'    G = (HextoRGB(color[i*6+2])*16+HextoRGB(color[i*6+3]));\n'+
    										'    B = (HextoRGB(color[i*6+4])*16+HextoRGB(color[i*6+5]));\n'+
    										'    pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  }\n'+
    										'  pixels.show();\n'+
											'}\n';		
	var L02 = this.getFieldValue('L02').replace(/#/g,"");
	var L04 = this.getFieldValue('L04').replace(/#/g,"");
	var L06 = this.getFieldValue('L06').replace(/#/g,"");
	var L10 = this.getFieldValue('L10').replace(/#/g,"");
	var L16 = this.getFieldValue('L16').replace(/#/g,"");
	var L20 = this.getFieldValue('L20').replace(/#/g,"");
	var L22 = this.getFieldValue('L22').replace(/#/g,"");
	var L24 = this.getFieldValue('L24').replace(/#/g,"");
	var code = 'MatrixLed("'+L22+L16+L06+L02+L04+L10+L20+L24+'");\n';
	return code;
};

Blockly.Arduino['webbit_mooncar_ws2812_color_one_n'] = function(block) {
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
    										'  R = (HextoRGB(color[0])*16+HextoRGB(color[1]));\n'+
    										'  G = (HextoRGB(color[2])*16+HextoRGB(color[3]));\n'+
    										'  B = (HextoRGB(color[4])*16+HextoRGB(color[5]));\n'+
    										'  pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  pixels.show();\n'+
											'}\n';
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC);
	if ((rgb.indexOf("'")==0)&&(rgb.lastIndexOf("'")==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")!=-1)
		rgb = '"'+rgb.toLowerCase().replace(/#/g,"")+'"';
	
	var code = 'MatrixLedOne(('+N+'-1),'+rgb+');\n';
	return code;
};

Blockly.Arduino['webbit_mooncar_ws2812_rgb_one_n'] = function(block) {
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
    										'  R = (HextoRGB(color[0])*16+HextoRGB(color[1]));\n'+
    										'  G = (HextoRGB(color[2])*16+HextoRGB(color[3]));\n'+
    										'  B = (HextoRGB(color[4])*16+HextoRGB(color[5]));\n'+
    										'  pixels.setPixelColor(i, pixels.Color(R, G, B));\n'+
    										'  pixels.show();\n'+
											'}\n';	
	Blockly.Arduino.definitions_['define_webbit_matrix_hexReverse_s']='\n'+	
											'String HexReverse_s(int val, int pos) {\n'+
											'  int i = 0;\n'+
											'  String s = "0123456789abcdef";\n'+											
											'  if (pos==1)\n'+
											'    i = (val-val%16)/16;\n'+
											'  else if (pos==2)\n'+
											'    i = val%16;\n'+
											'  return String(s[i]);\n'+
											'}\n'; 	
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var R = Blockly.Arduino.valueToCode(this,"R",Blockly.Arduino.ORDER_ATOMIC);
	var G = Blockly.Arduino.valueToCode(this,"G",Blockly.Arduino.ORDER_ATOMIC);
	var B = Blockly.Arduino.valueToCode(this,"B",Blockly.Arduino.ORDER_ATOMIC);

	var code = 'strTemp_ = HexReverse_s('+R+', 1)+HexReverse_s('+R+', 2)+HexReverse_s('+G+', 1)+HexReverse_s('+G+', 2)+HexReverse_s('+B+', 1)+HexReverse_s('+B+', 2);\nMatrixLedOne(('+N+'-1), strTemp_);\n';
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
