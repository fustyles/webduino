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

Blockly.Arduino.BitMatrixLed_matrix_brightness = function(){
	var brightness=Blockly.Arduino.valueToCode(this,"brightness",Blockly.Arduino.ORDER_ATOMIC);

	var code = 'matrixBrightness = '+brightness+';\n';
	return code;
};

Blockly.Arduino.BitMatrixLed_matrix_clear = function(){
	var code = 'MatrixLed("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");\n';
	return code;
};
  
Blockly.Arduino['BitMatrixLed_matrix'] = function() {
	var rgb = this.getFieldValue("RGB").substr(1,6);
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

Blockly.Arduino['BitMatrixLed_matrix_color'] = function() {
	var L01 = this.getFieldValue('L01').substr(1,6);
	var L02 = this.getFieldValue('L02').substr(1,6);
	var L03 = this.getFieldValue('L03').substr(1,6);
	var L04 = this.getFieldValue('L04').substr(1,6);
	var L05 = this.getFieldValue('L05').substr(1,6);
	var L06 = this.getFieldValue('L06').substr(1,6);
	var L07 = this.getFieldValue('L07').substr(1,6);
	var L08 = this.getFieldValue('L08').substr(1,6);
	var L09 = this.getFieldValue('L09').substr(1,6);
	var L10 = this.getFieldValue('L10').substr(1,6);
	var L11 = this.getFieldValue('L11').substr(1,6);
	var L12 = this.getFieldValue('L12').substr(1,6);
	var L13 = this.getFieldValue('L13').substr(1,6);
	var L14 = this.getFieldValue('L14').substr(1,6);
	var L15 = this.getFieldValue('L15').substr(1,6);
	var L16 = this.getFieldValue('L16').substr(1,6);
	var L17 = this.getFieldValue('L17').substr(1,6);
	var L18 = this.getFieldValue('L18').substr(1,6);
	var L19 = this.getFieldValue('L19').substr(1,6);
	var L20 = this.getFieldValue('L20').substr(1,6);
	var L21 = this.getFieldValue('L21').substr(1,6);
	var L22 = this.getFieldValue('L22').substr(1,6);
	var L23 = this.getFieldValue('L23').substr(1,6);
	var L24 = this.getFieldValue('L24').substr(1,6);
	var L25 = this.getFieldValue('L25').substr(1,6);
	var code = 'MatrixLed("'+L21+L22+L23+L24+L25+L16+L17+L18+L19+L20+L11+L12+L13+L14+L15+L06+L07+L08+L09+L10+L01+L02+L03+L04+L05+'");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_color_one'] = function(block) {
	var X=Blockly.Arduino.valueToCode(this,"X",Blockly.Arduino.ORDER_ATOMIC);
	var Y=Blockly.Arduino.valueToCode(this,"Y",Blockly.Arduino.ORDER_ATOMIC);
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC).substr(1,6);
	
	var code = 'MatrixLedOne((5-'+X+')*5 + ('+Y+'-1),"'+rgb+'");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_color_one_n'] = function(block) {
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC).substr(1,6);
	
	var code = 'MatrixLedOne(('+N+'-1),"'+rgb+'");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_matrix_rgb_one_n'] = function(block) {
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

Blockly.Arduino['BitMatrixLed_sample1'] = function(block) {
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC).substr(1,6);
	var leds = this.getFieldValue('value_sample_');
	leds = ledsMirror(leds, rgb);

	var code = 'MatrixLed("'+leds+'");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_sample2'] = function(block) {
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC).substr(1,6);
	var leds = this.getFieldValue('value_sample_');
	leds = ledsMirror(leds, rgb);

	var code = 'MatrixLed("'+leds+'");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_sample3'] = function(block) {
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC).substr(1,6);
	var leds = this.getFieldValue('value_sample_');
	leds = ledsMirror(leds, rgb);

	var code = 'MatrixLed("'+leds+'");\n';
	return code;
};

Blockly.Arduino['BitMatrixLed_sample4'] = function(block) {
	var rgb = Blockly.Arduino.valueToCode(this,"RGB",Blockly.Arduino.ORDER_ATOMIC).substr(1,6);
	var leds = this.getFieldValue('value_sample_');
	leds = ledsMirror(leds, rgb);

	var code = 'MatrixLed("'+leds+'");\n';
	return code;
};

function ledsMirror(str, rgb) {
	var leds = "";
	for (var i=20;i<25;i++) {
		if (str.substr(i, 1)=="1")
			leds += rgb;
		else
			leds += "000000";		
	}
	for (var i=15;i<20;i++) {
		if (str.substr(i, 1)=="1")
			leds += rgb;
		else
			leds += "000000";		
	}
	for (var i=10;i<15;i++) {
		if (str.substr(i, 1)=="1")
			leds += rgb;
		else
			leds += "000000";		
	}
	for (var i=5;i<10;i++) {
		if (str.substr(i, 1)=="1")
			leds += rgb;
		else
			leds += "000000";		
	}
	for (var i=0;i<5;i++) {
		if (str.substr(i, 1)=="1")
			leds += rgb;
		else
			leds += "000000";		
	}
	return leds;	
}

Blockly.Arduino['BitMatrixLed_color'] = function(block) {
	var rgb = this.getFieldValue("RGB");
	return[rgb, Blockly.Arduino.ORDER_ATOMIC];
};