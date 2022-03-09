Blockly.Arduino['fu_oled_PROGMEM_truetype'] = function(block) {
  var variable_variable = Blockly.Arduino.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  var value_PROGMEM = Blockly.Arduino.valueToCode(block, 'PROGMEM', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['u8g2_progmem_'+variable_variable] = 'static const unsigned char PROGMEM '+variable_variable+'[] = {\n'+
			  value_PROGMEM.replace(/"/g,'').replace(/'/g,"") +
			  '\n};\n';
  return '';
};

Blockly.Arduino['fu_taiwan_aqi'] = function(block) {
	var dropdown_sitename = block.getFieldValue('sitename');
	var variable_AQI = Blockly.Arduino.nameDB_.getName(block.getFieldValue('AQI'), Blockly.Variables.NAME_TYPE);
	var variable_PM25 = Blockly.Arduino.nameDB_.getName(block.getFieldValue('PM25'), Blockly.Variables.NAME_TYPE);
	var variable_STATUS = Blockly.Arduino.nameDB_.getName(block.getFieldValue('STATUS'), Blockly.Variables.NAME_TYPE);
	
	Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
	Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';	
	Blockly.Arduino.definitions_['ArduinoJson'] = '#include <ArduinoJson.h>';
	Blockly.Arduino.definitions_['TaiwanAQI'] = 'long '+variable_AQI+' = 0;';	
	Blockly.Arduino.definitions_['TaiwanPM25'] = 'long '+variable_PM25+' = 0;';
	Blockly.Arduino.definitions_['TaiwanStatus'] = 'String '+variable_STATUS+' = "";';
	Blockly.Arduino.definitions_['retrieveAirQuality'] = '\n' +
			'void retrieveAirQuality(String Site) {\n'+
			'  WiFiClientSecure client_tcp;\n'+
			'  String request = "/api/v1/aqx_p_432?format=json&limit=5&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&filters=SiteName,EQ,"+Site;\n'+
			'  if (client_tcp.connect("data.epa.gov.tw", 443)) {\n'+
			'    client_tcp.println("GET " + request + " HTTP/1.1");\n'+
			'    client_tcp.println("Host: data.epa.gov.tw");\n'+
			'    client_tcp.println("Connection: close");\n'+
			'    client_tcp.println();\n'+
			'    String getResponse="",Feedback="";\n'+
			'    boolean state = false;\n'+
			'    boolean cutstate = false;\n'+
			'    int waitTime = 10000;\n'+
			'    long startTime = millis();\n'+
			'    while ((startTime + waitTime) > millis()) {\n'+
			'      while (client_tcp.available()) {\n'+
			'        char c = client_tcp.read();\n'+
			'        if (state==true) {\n'+
			'          if (cutstate == false||(cutstate == true&&String(c)!="]")) {\n'+
			'            Feedback += String(c);\n'+
			'          }\n'+
			'          if (cutstate == true&&String(c)=="]")\n'+
			'            state=false;\n'+
			'          if (Feedback.indexOf("\\"records\\": [")!=-1) {\n'+
			'            Feedback="";\n'+
			'            cutstate = true;\n'+
			'          }\n'+
			'        }\n'+
			"        if (c == '\\n') {\n"+
			'          if (getResponse.length()==0) state=true;\n'+
			'          getResponse = "";\n'+
			'        }\n'+
			"        else if (c != '\\r')\n"+
			'          getResponse += String(c);\n'+      
			'        startTime = millis();\n'+
			'      }\n'+
			'      if (Feedback.length()!= 0) break;\n'+
			'    }\n'+
			'    client_tcp.stop();\n'+
			'    JsonObject obj;\n'+
			'    DynamicJsonDocument doc(1024);\n'+
			'    deserializeJson(doc, Feedback);\n'+
			'    obj = doc.as<JsonObject>();\n'+
			'    '+variable_AQI+' = obj["AQI"].as<String>().toInt();\n'+
			'    '+variable_PM25+' = obj["PM2.5"].as<String>().toInt();\n'+
			'    '+variable_STATUS+' = obj["Status"].as<String>();\n'+
			'  }\n'+
			'}';
	Blockly.Arduino.definitions_['urlencode'] = '' +
			'String urlencode(String str) {\n'+
			'    String encodedString="";\n'+
			'    char c;\n'+
			'    char code0;\n'+
			'    char code1;\n'+
			'    for (int i =0; i < str.length(); i++) {\n'+
			'      c=str.charAt(i);\n'+
			"      if (c == ' '){\n"+
			"        encodedString+= '+';\n"+
			'      } else if (isalnum(c)){\n'+
			'        encodedString+=c;\n'+
			'      } else{\n'+
			"        code1=(c & 0xf)+'0';\n"+
			'        if ((c & 0xf) >9){\n'+
			"            code1=(c & 0xf) - 10 + 'A';\n"+
			'        }\n'+
			'        c=(c>>4)&0xf;\n'+
			"        code0=c+'0';\n"+
			'        if (c > 9){\n'+
			"            code0=c - 10 + 'A';\n"+
			'        }\n'+
			'        encodedString+="%";\n'+
			'        encodedString+=code0;\n'+
			'        encodedString+=code1;\n'+
			'      }\n'+
			'      yield();\n'+
			'    }\n'+
			'    return encodedString;\n'+
			'}';								   
	var code = 'retrieveAirQuality(urlencode("'+dropdown_sitename+'"));\n';
	return code;
};

function selectBoardType() {
	var selectBoard = document.getElementById('board-selector');
	if (selectBoard) {
		var state = [0,0,0];
		for (var i=0;i<selectBoard.options.length;i++) {
			if (selectBoard.options[i].value.indexOf("LinkIt")!=-1)
				state[0]=1;
			if (selectBoard.options[i].value.indexOf("esp32")!=-1)
				state[1]=1;
			if (selectBoard.options[i].value.indexOf("BBCmicrobitV2")!=-1)
				state[2]=1;			
		}
		if (state[0]==0)
			selectBoard.options.add(new Option("LinkIt 7697","LinkIt:linkit_rtos:linkit_7697"));
		if (state[1]==0) 
			selectBoard.options.add(new Option("ESP32 Wrover Module","esp32:esp32:esp32wrover"));
		if (state[2]==0) 
			selectBoard.options.add(new Option("BBC micro:bit V2","sandeepmistry:nRF5:BBCmicrobitV2"));	
		return selectBoard.value.split(":")[0];
	}
	else
		return "";
}

Blockly.Arduino['fu_ez_digitalwrite'] = function(block) {
  var dropdown_led = block.getFieldValue('led');
  var pinRYG = [[16,12,13],[13,12,11],[13,14,15]];
  var pin = pinRYG[0][dropdown_led];
  if (selectBoardType()=="esp32")
	pin = pinRYG[0][dropdown_led]; 
  else if (selectBoardType()=="LinkIt")
	pin = pinRYG[1][dropdown_led];
  else if (selectBoardType()=="sandeepmistry")
	pin = pinRYG[2][dropdown_led];

  var dropdown_value = block.getFieldValue('value');

  //新增pinMode程式碼於setup區，NAME值須有固定格式綁定pin值。
  Blockly.Arduino.setups_['pinmode_' + pin] = 'pinMode('+ pin +', OUTPUT);';
  
  var code = 'digitalWrite(%1, %2);\n';
  code = code.replace("%1", pin );
  code = code.replace("%2", dropdown_value );
  return code;
};

Blockly.Arduino['fu_ez_digitalwrite_input'] = function(block) {
  var dropdown_led = block.getFieldValue('led');
  var pinRYG = [[16,12,13],[13,12,11],[13,14,15]];
  var pin = pinRYG[0][dropdown_led]; 
  if (selectBoardType()=="esp32")
	pin = pinRYG[0][dropdown_led]; 
  else if (selectBoardType()=="LinkIt")
	pin = pinRYG[1][dropdown_led];
  else if (selectBoardType()=="sandeepmistry")
	pin = pinRYG[2][dropdown_led];

  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC); 

  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
  var code = 'digitalWrite('+ pin + ', ' + value_value +');\n';
  return code;
};

Blockly.Arduino['fu_ez_digitalwrite_input_relay'] = function(block) {
  var pin = 25;
  if (selectBoardType()=="esp32")
	pin = 25; 
  else if (selectBoardType()=="LinkIt")
	pin = 5;
  else if (selectBoardType()=="sandeepmistry")
	pin = 9; 
  
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC); 

  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
  
  var code = 'digitalWrite('+ pin +', '+ value_value +');\n';
  return code;
};

Blockly.Arduino['fu_ez_analogwrite_input'] = function(block) {
  if (selectBoardType()=="esp32") 
	  var code = "";
  else {	
	  var dropdown_led = block.getFieldValue('led');
	  var pinRYG = [[16,12,13],[13,12,11],[13,14,15]];
	  var pin = pinRYG[0][dropdown_led]; 
	  if (selectBoardType()=="esp32")
		pin = pinRYG[0][dropdown_led]; 
	  else if (selectBoardType()=="LinkIt")
		pin = pinRYG[1][dropdown_led];
	  else if (selectBoardType()=="sandeepmistry")
		pin = pinRYG[2][dropdown_led];

	  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);

	  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
	  var code = 'analogWrite('+ pin +', '+ value_value +');\n';
  }
  return code;
};

Blockly.Arduino['fu_ez_analogwrite_input_esp'] = function(block) {
  if (selectBoardType()!="esp32") 
	  var code = "";
  else {	
	  var dropdown_led = block.getFieldValue('led');
	  var pinRYG = [[16,12,13],[13,12,11],[13,14,15]];
	  var pin = pinRYG[0][dropdown_led]; 
	  if (selectBoardType()=="esp32")
		pin = pinRYG[0][dropdown_led]; 
	  else if (selectBoardType()=="LinkIt")
		pin = pinRYG[1][dropdown_led];
	  else if (selectBoardType()=="sandeepmistry")
		pin = pinRYG[2][dropdown_led];

	  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
	  var value_channel = Blockly.Arduino.valueToCode(block, 'channel', Blockly.Arduino.ORDER_ATOMIC);
	 
	  Blockly.Arduino.setups_['ledc_'+ pin] = 'ledcAttachPin('+ pin +','+ value_channel +');\n  '+
													   'ledcSetup('+ value_channel +',5000,8);';
	  var code = 'ledcWrite(%1, %2);\n';
	  code = code.replace("%1", value_channel);
	  code = code.replace("%2", value_value);
  }
  return code;
};

Blockly.Arduino['fu_ez_digitalread'] = function(block) {
  var dropdown_button = block.getFieldValue('button');	
  var pinButton = [[5,36],[0,7],[5,11]];  
  var pin = pinButton[0][dropdown_button];
  if (selectBoardType()=="esp32")
	pin = pinButton[0][dropdown_button];
  else if (selectBoardType()=="LinkIt")
	pin = pinButton[1][dropdown_button];
  else if (selectBoardType()=="sandeepmistry")
	pin = pinButton[2][dropdown_button];
  
  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', INPUT_PULLUP);';
  
  var code = 'digitalRead('+ pin +')' ;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_ez_digitalread_button'] = function(block) {
  var dropdown_type = block.getFieldValue('type');	
  var pinButton = [[5,36],[0,7],[5,11]]; 
  var pinA = pinButton[0][0];
  var pinB = pinButton[0][1];  
  if (selectBoardType()=="esp32") {
	pinA = pinButton[0][0];
	pinB = pinButton[0][1];	
  }
  else if (selectBoardType()=="LinkIt") {
	pinA = pinButton[1][0];
	pinB = pinButton[1][1];
  }
  else if (selectBoardType()=="sandeepmistry") {
	pinA = pinButton[2][0];
	pinB = pinButton[2][1];
  }
  
  if (dropdown_type == "A") {
	Blockly.Arduino.setups_['pinmode_'+ pinA] = 'pinMode('+ pinA +', INPUT_PULLUP);';	  
	var code = 'digitalRead('+ pinA +')==0' ;
  }
  else if (dropdown_type == "B") {
	Blockly.Arduino.setups_['pinmode_'+ pinB] = 'pinMode('+ pinB +', INPUT_PULLUP);';
	var code = 'digitalRead('+ pinB +')==0' ;
  }
  else if (dropdown_type == "AB") {
	Blockly.Arduino.setups_['pinmode_'+ pinA] = 'pinMode('+ pinA +', INPUT_PULLUP);';
    Blockly.Arduino.setups_['pinmode_'+ pinB] = 'pinMode('+ pinB +', INPUT_PULLUP);';
	Blockly.Arduino.definitions_['digitalRead_AB'] = ''+
	    'int pressButtonAB() {\n'+
		'  if ((digitalRead('+ pinA +')==0) || (digitalRead('+ pinB +')==0)) {\n' +
		'    delay(200);\n'+
		'    return (digitalRead('+ pinA +')==0) && (digitalRead('+ pinB +')==0);\n'+
		'  }\n'+			
		'  else \n'+		
		'    return 0;\n'+
		'}';
	var code = 'pressButtonAB()';
  }
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_ez_analogread_potentiometer'] = function(block) {
  var pin = 34; 
  if (selectBoardType()=="esp32")
	pin = 34; 
  else if (selectBoardType()=="LinkIt")
	pin = 16;
  else if (selectBoardType()=="sandeepmistry")
	pin = 2; 

  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', INPUT);';
	
  var code = 'analogRead('+ pin +')' ;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_ez_analogread_photoresistor'] = function(block) {
  var pin = 39;
  if (selectBoardType()=="esp32")
	pin = 39; 
  else if (selectBoardType()=="LinkIt")
	pin = 15;
  else if (selectBoardType()=="sandeepmistry")
	pin = 1; 

  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', INPUT);';
  
  var code = 'analogRead('+ pin +')' ;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_ez_buzzer_tone'] = function(block) {
  if (selectBoardType()=="esp32") 
	  var code = "";
  else {
      var pin = 14;	  
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 

	  var value_frequency = Blockly.Arduino.valueToCode(block, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
	 
	  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
	  var code = 'tone('+ pin +', '+ value_frequency +');\n' ;
  }
  return code;
};

Blockly.Arduino['fu_ez_buzzer_tone_duration'] = function(block) {
  if (selectBoardType()=="esp32") 
	  var code = "";
  else {
	  var pin = 14;
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 

	  var value_frequency = Blockly.Arduino.valueToCode(block, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
	  var value_duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC);

	  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
	  var code = 'tone('+ pin +', '+ value_frequency +', '+ value_duration +');\n' ;
  }
  return code;
};

Blockly.Arduino['fu_ez_buzzer_tone_duration_array'] = function(block) {
  if (selectBoardType()=="esp32") 
	  var code = "";
  else {
	  var pin = 14; 
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 

	  var value_frequency = Blockly.Arduino.valueToCode(block, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
	  var value_duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC); 

	  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
	  Blockly.Arduino.definitions_['toneArray'] = 'void toneArray(int pin, String frequency, String delaytime) {\n'+
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
													  '				tone(pin, f.toInt(), d.toInt());\n'+
													  '  		    delay(d.toInt());\n'+													  
													  '  		    delaytime=delaytime.substring(j+1);\n'+
													  '  		    break;\n'+
													  '  	      }\n'+
													  '  	    }\n'+
													  '    }\n'+
													  '  }\n'+
													  '}';

	  var v = Blockly.getMainWorkspace().getVariablesOfType("");
	  var f1 = '"', f2 = '"', d1 = '"', d2 = '"'; 
	  for (var i=0;i<v.length;i++) {
		if (value_frequency==v[i].name) {
			f1="String(";
			f2=")";
		}
		if (value_duration==v[i].name) {
			d1="String(";
			d2=")";
		}
	  }
	  var code = 'toneArray('+ pin +', '+f1+value_frequency.toString().replace(/"|'|{|}| /g,"")+f2+','+d1+ value_duration.toString().replace(/"|'|{|}| /g,"") +d2+');\n' ;
  }
  return code;
};

Blockly.Arduino['fu_ez_buzzer_tone_duration_esp'] = function(block) {
  if (selectBoardType()!="esp32") 
	  var code = "";
  else {	
	  var pin = 14; 
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 

	  var value_frequency = Blockly.Arduino.valueToCode(block, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
	  var value_duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC);
	  var value_channel = Blockly.Arduino.valueToCode(block, 'channel', Blockly.Arduino.ORDER_ATOMIC);

	  Blockly.Arduino.setups_['ledc_'+ pin] = 'ledcSetup('+value_channel+',2000,8);\n'+
											  '  ledcAttachPin('+pin+','+value_channel+');'; 
	  Blockly.Arduino.definitions_['tone'] = 'void tone(int channel, int frequency, int delaytime) {\n'+
											 '  ledcWriteTone(channel, frequency);\n'+
											 '  delay(delaytime);\n'+
											 '  ledcWriteTone(channel, 0);\n'+
											 '}';

	  var code = 'tone('+ value_channel +','+ value_frequency +', '+ value_duration +');\n' ;
  }
  return code;
};

Blockly.Arduino['fu_ez_buzzer_tone_duration_esp_array'] = function(block) {
  if (selectBoardType()!="esp32") 
	  var code = "";
  else {
	  var pin = 14; 
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 

	  var value_frequency = Blockly.Arduino.valueToCode(block, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
	  var value_duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC);
	  var value_channel = Blockly.Arduino.valueToCode(block, 'channel', Blockly.Arduino.ORDER_ATOMIC);  

	  Blockly.Arduino.setups_['ledc_'+ pin] = 'ledcSetup('+value_channel+',2000,8);\n'+
											  '  ledcAttachPin('+pin+','+value_channel+');'; 
	  Blockly.Arduino.definitions_['toneArray'] = 'void toneArray(String frequency, String delaytime, int channel) {\n'+
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
													  '  ledcWriteTone(channel, 0);\n'+
													  '}';

	  var v = Blockly.getMainWorkspace().getVariablesOfType("");
	  var f1 = '"', f2 = '"', d1 = '"', d2 = '"'; 
	  for (var i=0;i<v.length;i++) {
		if (value_frequency==v[i].name) {
			f1="String(";
			f2=")";
		}
		if (value_duration==v[i].name) {
			d1="String(";
			d2=")";
		}
	  }
	  var code = 'toneArray('+f1+value_frequency.toString().replace(/"|'|{|}| /g,"")+f2+','+d1+ value_duration.toString().replace(/"|'|{|}| /g,"") +d2+','+ value_channel +');\n' ;
  }
  return code;
};

Blockly.Arduino['fu_ez_buzzer_notone'] = function(block) {
  if (selectBoardType()=="esp32") 
	  var code = "";
  else {
	  var pin = 14;
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 

	  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
	  
	  var code = 'noTone('+ pin +');\n';
  }
  return code;
};

Blockly.Arduino['fu_ez_buzzer_tone1'] = function(){											
	var frequency=this.getFieldValue("frequency");
	return[frequency, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['fu_ez_buzzer_tone2'] = function(){											
	var frequency=this.getFieldValue("frequency");
	return[frequency, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['fu_ez_buzzer_tone3'] = function(){											
	var frequency=this.getFieldValue("frequency");
	return[frequency, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['fu_ez_dht11'] = function(block) {
  var pin = 15;
  if (selectBoardType()=="esp32")
	pin = 15; 
  else if (selectBoardType()=="LinkIt")
	pin = 10;
  else if (selectBoardType()=="sandeepmistry")
	pin = 16; 

  var dropdown_type = block.getFieldValue('type');

  Blockly.Arduino.definitions_['dht11_library'] = '#include <DHT.h>';
  Blockly.Arduino.definitions_['dht11_'+ pin] = 'DHT dht ('+ pin +', DHT11);';
  Blockly.Arduino.setups_['dht11_begin'] = 'dht.begin();';
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_ez_pixel_rgb'] = function(block) {
  var pin = 26;
  if (selectBoardType()=="esp32")
	pin = 26; 
  else if (selectBoardType()=="LinkIt")
	pin = 4;
  else if (selectBoardType()=="sandeepmistry")
	pin = 12;

  var dropdown_no = block.getFieldValue('no');
  var value_r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var value_g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
  var value_b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['pixel_'+ pin] = '#include <Adafruit_NeoPixel.h>\n'+
												'Adafruit_NeoPixel pixels(3, '+ pin +', NEO_GRB + NEO_KHZ800);';
  Blockly.Arduino.setups_['pixel_'+ pin] = 'pixels.begin();\n'+
										   '  pixels.setBrightness(100);\n'+
										   '  pixels.clear();';

  var code= 'pixels.setPixelColor('+ dropdown_no +', pixels.Color('+value_r+', '+value_g+', '+value_b+'));\n'+
			'pixels.show();\n';
  return code;
};

Blockly.Arduino['fu_ez_pixel_clear'] = function(block) {
  var code = 'pixels.clear();\n';
  return code;
};

Blockly.Arduino['fu_ez_pixel_picker'] = function(block) {
  var pin = 26;
  if (selectBoardType()=="esp32")
	pin = 26; 
  else if (selectBoardType()=="LinkIt")
	pin = 4;
  else if (selectBoardType()=="sandeepmistry")
	pin = 12; 

  var dropdown_no = block.getFieldValue('no');
  var value_colour = Blockly.Arduino.valueToCode(this,"colour",Blockly.Arduino.ORDER_ATOMIC).replace(/"/g,'');

  Blockly.Arduino.definitions_['pixel_'+ pin] = '#include <Adafruit_NeoPixel.h>\n'+
												'Adafruit_NeoPixel pixels(3, '+ pin +', NEO_GRB + NEO_KHZ800);';
  Blockly.Arduino.setups_['pixel_'+ pin] = 'pixels.begin();\n'+
										   '  pixels.setBrightness(100);\n'+
										   '  pixels.clear();';

  var code= 'pixels.setPixelColor('+ dropdown_no +', pixels.Color('+hexToRgb(value_colour).r+', '+hexToRgb(value_colour).g+', '+hexToRgb(value_colour).b+'));\n'+'pixels.show();\n';
  return code;
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

Blockly.Arduino['fu_ez_pixel_clear'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_HextoRGB']='\n'+
											'int HextoRGB(char val) {\n'+
											'  String hex ="0123456789abcdef";\n'+
											'  return hex.indexOf(val);\n'+
											'}\n'; 										   
											   
	Blockly.Arduino.definitions_['ez_pixel_color']='\n'+
											'void ez_pixel_color(String color) {\n'+
											'  color.replace("#","");\n'+
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
											
	var code = 'ez_pixel_color("000000000000000000");\n';
	return code;
};

Blockly.Arduino['fu_ez_pixel_brightness'] = function(block){
	var brightness=Blockly.Arduino.valueToCode(this,"brightness",Blockly.Arduino.ORDER_ATOMIC);
	var code = 'pixels.setBrightness('+ brightness+');\n';
	return code;
};

Blockly.Arduino['fu_ez_pixel_color'] = function(block) {
	var pin = 26;
	if (selectBoardType()=="esp32")
		pin = 26; 
	else if (selectBoardType()=="LinkIt")
		pin = 4;
	else if (selectBoardType()=="sandeepmistry")
		pin = 12; 

	Blockly.Arduino.definitions_['pixel_'+ pin] = '#include <Adafruit_NeoPixel.h>\n'+
												'Adafruit_NeoPixel pixels(3, '+ pin +', NEO_GRB + NEO_KHZ800);';
	Blockly.Arduino.setups_['pixel_'+ pin] = 'pixels.begin();\n'+
										   '  pixels.setBrightness(100);\n'+
										   '  pixels.clear();';
										   
	Blockly.Arduino.definitions_['define_webbit_matrix_HextoRGB']='\n'+
											'int HextoRGB(char val) {\n'+
											'  String hex ="0123456789abcdef";\n'+
											'  return hex.indexOf(val);\n'+
											'}\n'; 										   
											   
	Blockly.Arduino.definitions_['ez_pixel_color']='\n'+
											'void ez_pixel_color(String color) {\n'+
											'  color.replace("#","");\n'+
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

	var L1 = Blockly.Arduino.valueToCode(this,"L1",Blockly.Arduino.ORDER_ATOMIC);
	L1 = rgb2number(L1).replace(/""/g,'"');
	var L2 = Blockly.Arduino.valueToCode(this,"L2",Blockly.Arduino.ORDER_ATOMIC);
	L2 = rgb2number(L2).replace(/""/g,'"');
	var L3 = Blockly.Arduino.valueToCode(this,"L3",Blockly.Arduino.ORDER_ATOMIC);
	L3 = rgb2number(L3).replace(/""/g,'"');
	var code = 'ez_pixel_color('+L1+'+'+L2+'+'+L3+');\n';
	return code;
};

Blockly.Arduino['fu_ez_pixel_color_n'] = function(block) {
	var pin = 26;
	if (selectBoardType()=="esp32")
		pin = 26; 
	else if (selectBoardType()=="LinkIt")
		pin = 4;
	else if (selectBoardType()=="sandeepmistry")
		pin = 12; 

	Blockly.Arduino.definitions_['pixel_'+ pin] = '#include <Adafruit_NeoPixel.h>\n'+
												'Adafruit_NeoPixel pixels(3, '+ pin +', NEO_GRB + NEO_KHZ800);';
	Blockly.Arduino.setups_['pixel_'+ pin] = 'pixels.begin();\n'+
									   '  pixels.setBrightness(100);\n'+
									   '  pixels.clear();';
										   
	var value_num = Blockly.Arduino.valueToCode(this,"num",Blockly.Arduino.ORDER_ATOMIC);
	var value_colour = Blockly.Arduino.valueToCode(this,"colour",Blockly.Arduino.ORDER_ATOMIC).replace(/"/g,'');											   

	var code= 'pixels.setPixelColor('+ (Number(value_num)-1) +', pixels.Color('+hexToRgb(value_colour).r+', '+hexToRgb(value_colour).g+', '+hexToRgb(value_colour).b+'));\n'+ 'pixels.show();\n';
	return code;
};

Blockly.Arduino['fu_color'] = function(block) {
	var rgb = '"'+this.getFieldValue("RGB")+'"';
	return[rgb, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['fu_color_random'] = function(block) {
	Blockly.Arduino.definitions_['ez_pixel_color_random']='\n'+
											'String ez_pixel_color_random() {\n'+	
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
	var code = 'ez_pixel_color_random()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['fu_ez_ir_receive'] = function(block) {
  var pin = 33;
  if (selectBoardType()=="esp32")
	pin = 33; 
  else if (selectBoardType()=="LinkIt")
	pin = 17;
  else if (selectBoardType()=="sandeepmistry")
	pin = 8; 

  var variable_value = Blockly.Arduino.nameDB_.getName(block.getFieldValue('value'), Blockly.Variables.NAME_TYPE);
  var variable_type = Blockly.Arduino.nameDB_.getName(block.getFieldValue('type'), Blockly.Variables.NAME_TYPE);
  var statements_execute = Blockly.Arduino.statementToCode(block, 'execute');
  
  Blockly.Arduino.definitions_['ir_definition'] = '#include <IRremote.h>\nIRrecv irrecv('+pin+');\ndecode_results results;';
  Blockly.Arduino.setups_['ir_setup'] = 'irrecv.enableIRIn();';
  Blockly.Arduino.definitions_['ir_getIrType'] = 'String getIrType(int type) {\n' +
										   '  if (type==1)\n' +
										   '   return "NEC";\n' +
										   '  else if (type==2)\n' +
										   '   return "SONY";\n' +
										   '  else if (type==3)\n' +
										   '   return "RC5";\n' +
										   '  else if (type==4)\n' +
										   '   return "RC6";\n' +
										   '  else if (type==5)\n' +
										   '   return "DISH";\n' +
										   '  else if (type==6)\n' +
										   '   return "SHARP";\n' +
										   '  else if (type==7)\n' +
										   '   return "PANASONIC";\n' +
										   '  else if (type==8)\n' +
										   '   return "JVC";\n' +
										   '  else if (type==9)\n' +
										   '   return "SANYO";\n' +
										   '  else if (type==10)\n' +
										   '   return "MITSUBISHI";\n' +
										   '  else\n' +
										   '   return "UNKNOWN";\n' +										   
										   '}';										   
  var code = 'if (irrecv.decode(&results)) {\n'+
			 '  String '+variable_value+' = String(results.value, HEX);\n'+
			 '  String '+variable_type+' = getIrType(results.decode_type);\n'+
			 statements_execute +
			 '  irrecv.resume();\n'+
			 '}\n'+
			 'delay(300);';
  return code;
};

//https://github.com/olikraus/u8g2/wiki/u8g2reference
Blockly.Arduino['fu_oled_initial'] = function(block) {
  var dropdown_format = block.getFieldValue('format');
  var dropdown_display = block.getFieldValue('display');
  var dropdown_utf8 = (block.getFieldValue('utf8')==1)?"  u8g2.enableUTF8Print();":"  u8g2.disableUTF8Print();";
  var text_font = block.getFieldValue('font');
  
  Blockly.Arduino.definitions_['u8g2_definition'] = '#include <U8g2lib.h>\n'+
												  '#include <Wire.h>\n'+
												  dropdown_format.replace('U8G2_R0',dropdown_display);												  
  Blockly.Arduino.setups_['u8g2_setup'] = 'u8g2.begin();\n  '+
										  'u8g2.setFont('+text_font+');\n'+
										  dropdown_utf8;
  
  var code = '';
  return code;
};

Blockly.Arduino['fu_oled_setDisplayRotation'] = function(block) {
  var dropdown_display = block.getFieldValue('display');
  
  var code = 'u8g2.setDisplayRotation('+dropdown_display+');\n';
  return code;
};

Blockly.Arduino['fu_oled_setPowerSave'] = function(block) {
  var dropdown_power = block.getFieldValue('power');

  var code = 'u8g2.setPowerSave('+dropdown_power+');\n';
  return code;
};

Blockly.Arduino['fu_oled_sendBuffer'] = function(block) {
  var statements_draw = Blockly.Arduino.statementToCode(block, 'draw');
  var code = 'u8g2.clearBuffer();\n'+ 
			 statements_draw +
			 'u8g2.sendBuffer();\n';
  return code;
};

Blockly.Arduino['fu_oled_nextPage'] = function(block) {
  var statements_draw = Blockly.Arduino.statementToCode(block, 'draw');
  var code = 'u8g2.firstPage();\ndo {\n'+ 
			 statements_draw +
			 '} while ( u8g2.nextPage() );\n';
  return code;
};

Blockly.Arduino['fu_oled_clear'] = function(block) {
  var code = 'u8g2.clear();\n';
  return code;
};

Blockly.Arduino['fu_oled_home'] = function(block) {
  var code = 'u8g2.home();\n';
  return code;
};

Blockly.Arduino['fu_oled_setContrast'] = function(block) {
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.setContrast('+value_value+');\n';
  return code;
};

Blockly.Arduino['fu_oled_setFont'] = function(block) {
  var value_font = Blockly.Arduino.valueToCode(block, 'font', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.setFont('+value_font.replace(/"/g,'').replace(/'/g,"")+');\n';
  return code;
};

Blockly.Arduino['fu_oled_setFont_chinese'] = function(block) {
  var dropdown_font = block.getFieldValue('font');

  var code = 'u8g2.setFont('+dropdown_font+');\n';
  return code;
};

Blockly.Arduino['fu_oled_setFont_icon'] = function(block) {
  var dropdown_font = block.getFieldValue('font');

  var code = 'u8g2.setFont('+dropdown_font+');\n';
  return code;
};

Blockly.Arduino['fu_oled_setFont_all'] = function(block) {
  var dropdown_font = block.getFieldValue('font');

  var code = 'u8g2.setFont('+dropdown_font+');\n';
  return code;
};

Blockly.Arduino['fu_oled_setFontDirection'] = function(block) {
  var dropdown_display = block.getFieldValue('display');
  
  var code = 'u8g2.setFontDirection('+dropdown_display+');\n';
  return code;
};

Blockly.Arduino['fu_oled_setDrawColor'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  
  var code = 'u8g2.setDrawColor('+dropdown_mode+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawStr'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value_str = Blockly.Arduino.valueToCode(block, 'str', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.drawStr('+value_x+','+value_y+',String('+value_str+').c_str());\n';
  return code;
}; 
	
Blockly.Arduino['fu_oled_drawFont'] = function(block) {
	var dropdown_font = block.getFieldValue('font');
	var dropdown_size = block.getFieldValue('size');
	var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
	var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
	var value_str = Blockly.Arduino.valueToCode(block, 'str', Blockly.Arduino.ORDER_ATOMIC);
	var variable = "xbm_"+this.id.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
 
	if (value_str!='""') {
		var text = value_str.replace(/"/g,"")
		var c = document.getElementById("canvas_draw");
		if (document.getElementById("canvas_draw")) {
			c.parentElement.removeChild(c);
		}

		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		canvas.width = 960;
		canvas.height = 480;

		context.font = dropdown_size + "px " + dropdown_font;
		let metrics = context.measureText(text);
		//let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
		//let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
		var width = (metrics.width%8>0)?Math.round(metrics.width-metrics.width%8+8):Math.round(metrics.width);

		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle="#000000";
		context.textBaseline = "top";
		context.fillText(text, 0, 1);

		var pixels = context.getImageData(0, 0, canvas.width, canvas.height);
		var fontTop = null, fontBottom = null;
		var y;
		for (var i = 0; i < pixels.data.length; i += 4) {
			if (pixels.data[i+3] !== 0) {
				y = ((i / 4) / canvas.width);			
				if (fontTop === null) {
					fontTop = y;
				}
				if (fontBottom === null) {
					fontBottom = y;
				} else if (fontBottom < y) {
					fontBottom = y;
				}
			}
		}

		var height = fontBottom-fontTop+1;	
		height = (height>Math.floor(height))?(Math.floor(height)+1):Math.floor(height);

		const imageData = context.getImageData(0, fontTop, width, height);
		const data = imageData.data;

		let xbmString = "";
		let pixel = 0;
		let value = 0;

		for(let h = 0; h < height; h++) {
			for(let w = 0; w < width / 8; w++) {
				value = 0;
				for (let p = 0; p < 8; p++) {
					const isBlack = !(data[pixel * 4+3]);
					if (!isBlack)
						value += Math.pow(2, p);
					pixel++;

					const isNewRow = pixel/width === 1;
					if(isNewRow) break;
				}
				xbmString += ("0x"+("0"+(Number(value).toString(16))).slice(-2).toUpperCase()+",");
			}
		}
		
		document.body.appendChild(canvas);
		canvas.parentNode.removeChild(canvas);
  		Blockly.Arduino.definitions_['u8g2_progmem_'+variable] = 'static const unsigned char PROGMEM '+variable+'[] = {\n'+
			  xbmString.substr(0,xbmString.length-1) +
			  '\n};\n';
		
		var code = 'u8g2.drawXBMP('+value_x+', '+value_y+', '+width+', '+height+', '+variable+');\n';
	}
	else
		var code = 'u8g2.drawXBMP('+value_x+', '+value_y+', , , );\n';
	return code;
};

Blockly.Arduino['fu_oled_drawCustomFont'] = function(block) {
	var value_font = Blockly.Arduino.valueToCode(block, 'font', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_size = block.getFieldValue('size');
	var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
	var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
	var value_str = Blockly.Arduino.valueToCode(block, 'str', Blockly.Arduino.ORDER_ATOMIC);
	var variable = "xbm_"+this.id.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
 
	if (value_str!='""') {
		var text = value_str.replace(/"/g,"")
		var c = document.getElementById("canvas_draw");
		if (document.getElementById("canvas_draw")) {
			c.parentElement.removeChild(c);
		}

		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		canvas.width = 960;
		canvas.height = 480;

		context.font = dropdown_size + "px " + value_font;
		let metrics = context.measureText(text);
		//let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
		//let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
		var width = (metrics.width%8>0)?Math.round(metrics.width-metrics.width%8+8):Math.round(metrics.width);

		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle="#000000";
		context.textBaseline = "top";
		context.fillText(text, 0, 1);

		var pixels = context.getImageData(0, 0, canvas.width, canvas.height);
		var fontTop = null, fontBottom = null;
		var y;
		for (var i = 0; i < pixels.data.length; i += 4) {
			if (pixels.data[i+3] !== 0) {
				y = ((i / 4) / canvas.width);			
				if (fontTop === null) {
					fontTop = y;
				}
				if (fontBottom === null) {
					fontBottom = y;
				} else if (fontBottom < y) {
					fontBottom = y;
				}
			}
		}

		var height = fontBottom-fontTop+1;	
		height = (height>Math.floor(height))?(Math.floor(height)+1):Math.floor(height);

		const imageData = context.getImageData(0, fontTop, width, height);
		const data = imageData.data;

		let xbmString = "";
		let pixel = 0;
		let value = 0;

		for(let h = 0; h < height; h++) {
			for(let w = 0; w < width / 8; w++) {
				value = 0;
				for (let p = 0; p < 8; p++) {
					const isBlack = !(data[pixel * 4+3]);
					if (!isBlack)
						value += Math.pow(2, p);
					pixel++;

					const isNewRow = pixel/width === 1;
					if(isNewRow) break;
				}
				xbmString += ("0x"+("0"+(Number(value).toString(16))).slice(-2).toUpperCase()+",");
			}
		}
		
		document.body.appendChild(canvas);
		canvas.parentNode.removeChild(canvas);
  		Blockly.Arduino.definitions_['u8g2_progmem_'+variable] = 'static const unsigned char PROGMEM '+variable+'[] = {\n'+
			  xbmString.substr(0,xbmString.length-1) +
			  '\n};\n';
		
		var code = 'u8g2.drawXBMP('+value_x+', '+value_y+', '+width+', '+height+', '+variable+');\n';
	}
	else
		var code = 'u8g2.drawXBMP('+value_x+', '+value_y+', , , );\n';
	return code;
};

Blockly.Arduino['fu_oled_drawPixelMap'] = function(block) {
	var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
	var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_width = block.getFieldValue('width');
	var dropdown_height = block.getFieldValue('height');
	let xbmString = "";
	let pixel = 0;
	let value = 0;
	let width = Number(dropdown_width);	
	let height = Number(dropdown_height);

	for(let h = 0; h < height; h++) {
		for(let w = 0; w < width / 8; w++) {
			value = 0;
			for (let p = 0; p < 8; p++) {
				const isBlack = (block.getFieldValue('chk'+pixel)=="TRUE");
				if (isBlack)
					value += Math.pow(2, p);
				pixel++;

				const isNewRow = pixel/width === 1;
				if(isNewRow) break;
			}
			xbmString += ("0x"+("0"+(Number(value).toString(16))).slice(-2).toUpperCase()+",");
		}
	}

  var variable = "xbm_"+this.id.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
	
  Blockly.Arduino.definitions_['u8g2_progmem_'+variable] = 'static const unsigned char PROGMEM '+variable+'[] = {\n'+
			  xbmString.replace(/"/g,'').replace(/'/g,"") +
			  '\n};\n';
			  
  var code = 'u8g2.drawXBMP('+value_x+', '+value_y+', '+width+', '+height+', '+variable+');\n';
  return code;  
};

Blockly.Arduino['fu_oled_setCursor'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.setCursor('+value_x+','+value_y+');\n';
  return code;
};

Blockly.Arduino['fu_oled_Print'] = function(block) {
  var value_str = Blockly.Arduino.valueToCode(block, 'str', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.print('+value_str+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawGlyph'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value_position = Blockly.Arduino.valueToCode(block, 'position', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.drawGlyph('+value_x+','+value_y+','+value_position+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawUTF8'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value_str = Blockly.Arduino.valueToCode(block, 'str', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.drawUTF8('+value_x+','+value_y+',String('+value_str+').c_str());\n';
  return code;
};

Blockly.Arduino['fu_oled_setBitmapMode'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  
  var code = 'u8g2.setBitmapMode('+dropdown_mode+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawXBMP'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var value_PROGMEM = Blockly.Arduino.valueToCode(block, 'PROGMEM', Blockly.Arduino.ORDER_ATOMIC);
  var variable = "xbm_"+this.id.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
  
  Blockly.Arduino.definitions_['u8g2_progmem_'+variable] = 'static const unsigned char PROGMEM '+variable+'[] = {\n'+
			  value_PROGMEM.replace(/"/g,'').replace(/'/g,"") +
			  '\n};\n';
			  
  var code = 'u8g2.drawXBMP('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+variable+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawXBMP_PROGMEM'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var variable_variable = Blockly.Arduino.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  
  var code = 'u8g2.drawXBMP('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+variable_variable+');\n';
  return code;
};

Blockly.Arduino['fu_oled_PROGMEM'] = function(block) {
  var variable_variable = Blockly.Arduino.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  var value_PROGMEM = Blockly.Arduino.valueToCode(block, 'PROGMEM', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['u8g2_progmem_'+variable_variable] = 'static const unsigned char PROGMEM '+variable_variable+'[] = {\n'+
			  value_PROGMEM.replace(/"/g,'').replace(/'/g,"") +
			  '\n};\n';
  return '';
};

Blockly.Arduino['fu_oled_qrcode_PROGMEM'] = function(block) {
  var variable_variable = Blockly.Arduino.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  var value_PROGMEM = Blockly.Arduino.valueToCode(block, 'PROGMEM', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['u8g2_progmem_'+variable_variable] = 'static const unsigned char PROGMEM '+variable_variable+'[] = {\n'+
			  value_PROGMEM.replace(/"/g,'').replace(/'/g,"") +
			  '\n};\n';
  return '';
};

Blockly.Arduino['fu_oled_drawXBMP_PROGMEM_array'] = function(block) {
  var value_index = Blockly.Arduino.valueToCode(block, 'index', Blockly.Arduino.ORDER_ATOMIC);
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var variable_variable = Blockly.Arduino.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  
  var code = 'u8g2.drawXBMP('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+variable_variable+'['+value_index +']);\n';
  return code;
};		

Blockly.Arduino['fu_oled_PROGMEM_array'] = function(block) {
  var variable_variable = Blockly.Arduino.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  var value_PROGMEM = Blockly.Arduino.valueToCode(block, 'PROGMEM', Blockly.Arduino.ORDER_ATOMIC);
  value_PROGMEM = value_PROGMEM.split('",');
  var PROGMEM = "";
  var len = "";
  if (value_PROGMEM.length>0) {
	  len = (value_PROGMEM[0].replace(/"/g,'').replace(/{/g,'')=="")?"":value_PROGMEM[0].split(",").length;
	  for (var i=0;i<value_PROGMEM.length;i++) {
		if (value_PROGMEM[i].replace(/"/g,'').replace(/{/g,'').replace(/}/g,'').trim()=="") break;
		PROGMEM += "{ "+value_PROGMEM[i].replace(/"/g,'').replace(/{/g,'').replace(/}/g,'').trim() +" },\n";
	  }
  }

  Blockly.Arduino.definitions_['u8g2_progmem_'+variable_variable] = 'static const unsigned char PROGMEM '+variable_variable+'[]['+len+'] = {\n'+
																		PROGMEM +
																	'\n};\n';
  return '';
};		

Blockly.Arduino['fu_oled_drawBox'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.drawBox('+value_x+', '+value_y+', '+value_width+', '+value_height+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawRBox'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var value_radius = Blockly.Arduino.valueToCode(block, 'radius', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'u8g2.drawRBox('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_radius+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawFrame'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.drawFrame('+value_x+', '+value_y+', '+value_width+', '+value_height+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawRFrame'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
  var value_width = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);
  var value_radius = Blockly.Arduino.valueToCode(block, 'radius', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'u8g2.drawRFrame('+value_x+', '+value_y+', '+value_width+', '+value_height+', '+value_radius+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawCircle'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'x0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'y0', Blockly.Arduino.ORDER_ATOMIC);
  var value_radius = Blockly.Arduino.valueToCode(block, 'radius', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue('option');

  var code = 'u8g2.drawCircle('+value_x0+', '+value_y0+', '+value_radius+', '+dropdown_option+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawDisc'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'x0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'y0', Blockly.Arduino.ORDER_ATOMIC);
  var value_radius = Blockly.Arduino.valueToCode(block, 'radius', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue('option');

  var code = 'u8g2.drawDisc('+value_x0+', '+value_y0+', '+value_radius+', '+dropdown_option+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawEllipse'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'x0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'y0', Blockly.Arduino.ORDER_ATOMIC);
  var value_rx = Blockly.Arduino.valueToCode(block, 'rx', Blockly.Arduino.ORDER_ATOMIC);
  var value_ry = Blockly.Arduino.valueToCode(block, 'ry', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue('option');

  var code = 'u8g2.drawEllipse('+value_x0+', '+value_y0+', '+value_rx+', '+value_ry+', '+dropdown_option+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawFilledEllipse'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'x0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'y0', Blockly.Arduino.ORDER_ATOMIC);
  var value_rx = Blockly.Arduino.valueToCode(block, 'rx', Blockly.Arduino.ORDER_ATOMIC);
  var value_ry = Blockly.Arduino.valueToCode(block, 'ry', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_option = block.getFieldValue('option');

  var code = 'u8g2.drawFilledEllipse('+value_x0+', '+value_y0+', '+value_rx+', '+value_ry+', '+dropdown_option+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawHLine'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'x0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'y0', Blockly.Arduino.ORDER_ATOMIC);
  var value_width = Blockly.Arduino.valueToCode(block, 'width', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.drawHLine('+value_x0+', '+value_y0+', '+value_width+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawVLine'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'x0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'y0', Blockly.Arduino.ORDER_ATOMIC);
  var value_height = Blockly.Arduino.valueToCode(block, 'height', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.drawVLine('+value_x0+', '+value_y0+', '+value_height+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawLine'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'x0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'y0', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1 = Blockly.Arduino.valueToCode(block, 'x1', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1 = Blockly.Arduino.valueToCode(block, 'y1', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.drawLine('+value_x0+', '+value_y0+', '+value_x1+', '+value_y1+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawTriangle'] = function(block) {
  var value_x0 = Blockly.Arduino.valueToCode(block, 'x0', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0 = Blockly.Arduino.valueToCode(block, 'y0', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1 = Blockly.Arduino.valueToCode(block, 'x1', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1 = Blockly.Arduino.valueToCode(block, 'y1', Blockly.Arduino.ORDER_ATOMIC);
  var value_x2 = Blockly.Arduino.valueToCode(block, 'x2', Blockly.Arduino.ORDER_ATOMIC);
  var value_y2 = Blockly.Arduino.valueToCode(block, 'y2', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'u8g2.drawTriangle('+value_x0+', '+value_y0+', '+value_x1+', '+value_y1+', '+value_x2+', '+value_y2+');\n';
  return code;
};

Blockly.Arduino['fu_oled_drawPixel'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'u8g2.drawPixel('+value_x+', '+value_y+');\n';
  return code;
};








Blockly.Arduino['customcode_head'] = function(block) { 
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  Blockly.Arduino.definitions_['custom_head_'+block.id] = text.replace(/<br>/mg,"\n");
  var code = '';
  return code;
};

Blockly.Arduino['customcode_code'] = function (block) { 
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = text.replace(/<br>/mg,"\n") + '\n';
  return code;
};

Blockly.Arduino['customcode_variable'] = function (block) {
  var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  
  if ((variable.indexOf('"')==0)&&(variable.lastIndexOf('"')==variable.length-1))
    variable = variable.substring(1,variable.length-1);
  if ((variable.indexOf("(")==0)&&(variable.lastIndexOf(")")==variable.length-1))
    variable = variable.substring(1,variable.length-1);

  if (text) 
	var code = variable + ' = ' + text + ';\n';
  else
	var code = variable + ';\n';
  return code;
};

Blockly.Arduino['customcode_code_input'] = function (block) { 
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = text;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['customcode_comment'] = function(block) { 
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = '//' + text.replace(/<br>/mg,"\n//").replace(/\\\\n/mg,"\n//") +'\n';
  return code;
};

Blockly.Arduino['customcode_comment_block'] = function(block) { 
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = '/*\n  ' + text.replace(/<br>/mg,"\n  ").replace(/\\\\n/mg,"\n  ") +'\n*/\n';
  return code;
};

Blockly.Arduino['customcode_instruction1'] = function (block) {
  var instruction = Blockly.Arduino.valueToCode(block, 'instruction', Blockly.Arduino.ORDER_ATOMIC);
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  
  if ((instruction.indexOf('"')==0)&&(instruction.lastIndexOf('"')==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
  if ((instruction.indexOf("(")==0)&&(instruction.lastIndexOf(")")==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
    
  var code = instruction + "(" + text + ")";
  return [code, Blockly.Arduino.ORDER_NONE]; 
};

Blockly.Arduino['customcode_instruction2'] = function (block) {
  var instruction = Blockly.Arduino.valueToCode(block, 'instruction', Blockly.Arduino.ORDER_ATOMIC);
  var text1 = Blockly.Arduino.valueToCode(block, 'text1', Blockly.Arduino.ORDER_ATOMIC);
  var text2 = Blockly.Arduino.valueToCode(block, 'text2', Blockly.Arduino.ORDER_ATOMIC);
  
  if ((instruction.indexOf('"')==0)&&(instruction.lastIndexOf('"')==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
  if ((instruction.indexOf("(")==0)&&(instruction.lastIndexOf(")")==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
    
  var code = instruction + "(" + text1 + ", " + text2 + ")";
  return [code, Blockly.Arduino.ORDER_NONE]; 
};

Blockly.Arduino['customcode_instruction3'] = function (block) {
  var instruction = Blockly.Arduino.valueToCode(block, 'instruction', Blockly.Arduino.ORDER_ATOMIC);
  var text1 = Blockly.Arduino.valueToCode(block, 'text1', Blockly.Arduino.ORDER_ATOMIC);
  var text2 = Blockly.Arduino.valueToCode(block, 'text2', Blockly.Arduino.ORDER_ATOMIC);
  var text3 = Blockly.Arduino.valueToCode(block, 'text3', Blockly.Arduino.ORDER_ATOMIC);
  
  if ((instruction.indexOf('"')==0)&&(instruction.lastIndexOf('"')==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
  if ((instruction.indexOf("(")==0)&&(instruction.lastIndexOf(")")==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
    
  var code = instruction + "(" + text1 + ", " + text2 + ", " + text3 + ")";
  return [code, Blockly.Arduino.ORDER_NONE]; 
};

Blockly.Arduino['customcode_instruction4'] = function (block) {
  var instruction = Blockly.Arduino.valueToCode(block, 'instruction', Blockly.Arduino.ORDER_ATOMIC);
  var text1 = Blockly.Arduino.valueToCode(block, 'text1', Blockly.Arduino.ORDER_ATOMIC);
  
  if ((instruction.indexOf('"')==0)&&(instruction.lastIndexOf('"')==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
  if ((instruction.indexOf("(")==0)&&(instruction.lastIndexOf(")")==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);

  if ((text1.indexOf('"')==0)&&(text1.lastIndexOf('"')==text1.length-1))
    text1 = text1.substring(1,text1.length-1);
  if ((text1.indexOf("(")==0)&&(text1.lastIndexOf(")")==text1.length-1))
    text1 = text1.substring(1,text1.length-1);
    
  var code = instruction + "." + text1;
  return [code, Blockly.Arduino.ORDER_NONE]; 
};

Blockly.Arduino['customcode_instruction5'] = function (block) {
  var instruction = Blockly.Arduino.valueToCode(block, 'instruction', Blockly.Arduino.ORDER_ATOMIC);
  var type = block.getFieldValue('type');  
  
  if ((instruction.indexOf('"')==0)&&(instruction.lastIndexOf('"')==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
  if ((instruction.indexOf("(")==0)&&(instruction.lastIndexOf(")")==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);

  if ((type.indexOf('"')==0)&&(type.lastIndexOf('"')==type.length-1))
    type = type.substring(1,type.length-1);
  if ((type.indexOf("(")==0)&&(type.lastIndexOf(")")==type.length-1))
    type = type.substring(1,type.length-1);
    
  var code = instruction + "." + type + ';\n';
  return code; 
};

Blockly.Arduino['customcode_instruction5_get'] = function (block) {
  var instruction = Blockly.Arduino.valueToCode(block, 'instruction', Blockly.Arduino.ORDER_ATOMIC);
  var type = block.getFieldValue('type');  
  
  if ((instruction.indexOf('"')==0)&&(instruction.lastIndexOf('"')==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
  if ((instruction.indexOf("(")==0)&&(instruction.lastIndexOf(")")==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);

  if ((type.indexOf('"')==0)&&(type.lastIndexOf('"')==type.length-1))
    type = type.substring(1,type.length-1);
  if ((type.indexOf("(")==0)&&(type.lastIndexOf(")")==type.length-1))
    type = type.substring(1,type.length-1);
    
  var code = instruction + "." + type;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['customcode_instruction6'] = function (block) {
  var instruction = block.getFieldValue('instruction');
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  
  if ((instruction.indexOf('"')==0)&&(instruction.lastIndexOf('"')==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
  if ((instruction.indexOf("(")==0)&&(instruction.lastIndexOf(")")==instruction.length-1))
    instruction = instruction.substring(1,instruction.length-1);
    
  var code = instruction + "(" + text + ")";
  return [code, Blockly.Arduino.ORDER_NONE]; 
};


Blockly.Arduino['linenotify_text'] = function(block) {
  var text = Blockly.Arduino.valueToCode(block, 'value_text', Blockly.Arduino.ORDER_ATOMIC); 
  if (!text) text='" "';

  var code = '"message="+String(' + text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['linenotify_sticker'] = function(block) {
  var text = Blockly.Arduino.valueToCode(block, 'value_text', Blockly.Arduino.ORDER_ATOMIC);
  var packageId = Blockly.Arduino.valueToCode(block, 'value_packageId', Blockly.Arduino.ORDER_ATOMIC);
  var stickerId = Blockly.Arduino.valueToCode(block, 'value_stickerId', Blockly.Arduino.ORDER_ATOMIC);  
  
  if (!text) text='" "';
  if (!packageId) packageId='""';
  if (!stickerId) stickerId='""';
  
  var code = '"message="+String(' + text + ')+"&stickerPackageId="+String('+packageId+')+"&stickerId="+String('+stickerId+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['linenotify_image'] = function(block) {
  var text = Blockly.Arduino.valueToCode(block, 'value_text', Blockly.Arduino.ORDER_ATOMIC);
  var originalContentUrl = Blockly.Arduino.valueToCode(block, 'value_originalContentUrl', Blockly.Arduino.ORDER_ATOMIC);
  var previewImageUrl = Blockly.Arduino.valueToCode(block, 'value_previewImageUrl', Blockly.Arduino.ORDER_ATOMIC);  
  
  if (!text) text='" "';
  if (!originalContentUrl) originalContentUrl='""';
  if (!previewImageUrl) previewImageUrl='""';
  
  var code = '"message="+String(' + text + ')+"&imageThumbnail="+String('+previewImageUrl + ')+"&imageFullsize="+String('+originalContentUrl+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['tcp_https_esp32'] = function(block) { 
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_https_esp32'] ='\n'+
											'String tcp_https_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClientSecure client_tcp;\n'+
											'  if (client_tcp.connect(domain.c_str(), port)) {\n'+
											'    //Serial.println("Connected to "+domain+" successfully.");\n'+
											'    client_tcp.println("GET " + request + " HTTP/1.1");\n'+
											'    client_tcp.println("Host: " + domain);\n'+
											'    client_tcp.println("Connection: close");\n'+
											'    client_tcp.println();\n'+
											'    boolean state = false;\n'+
											'    long startTime = millis();\n'+
											'    while ((startTime + waittime) > millis()) {\n'+
											'      while (client_tcp.available()) {\n'+
											'        char c = client_tcp.read();\n'+
											'        if (c == \'\\n\') {\n'+
											'          if (getAll.length()==0) state=true;\n'+
											'           getAll = "";\n'+
											'        }\n'+ 
											'        else if (c != \'\\r\')\n'+
											'          getAll += String(c);\n'+
											'          if (state==true) getBody += String(c);\n'+
											'          startTime = millis();\n'+
											'        }\n'+
											'        if (getBody.length()!= 0) break;\n'+
											'      }\n'+
											'      client_tcp.stop();\n'+
											'  }\n'+
											'  else {\n'+
											'    getBody="Connected to "+domain+" failed.";\n'+
											'    Serial.println("Connected to "+domain+" failed.");\n'+
											'  }\n'+
											'  return getBody;\n'+
											'}\n';

  var domain = Blockly.Arduino.valueToCode(block, 'domain', Blockly.Arduino.ORDER_ATOMIC);
  var port = Blockly.Arduino.valueToCode(block, 'port', Blockly.Arduino.ORDER_ATOMIC);
  var request = Blockly.Arduino.valueToCode(block, 'request', Blockly.Arduino.ORDER_ATOMIC);
  var timeout = Blockly.Arduino.valueToCode(block, 'timeout', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tcp_https_esp32('+domain+', '+request+', '+port+', '+timeout+')';
  return [code, Blockly.Arduino.ORDER_NONE]; 
};

Blockly.Arduino['tcp_http_esp32'] = function(block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_http_esp32'] ='\n'+
											'String tcp_http_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClient client_tcp;\n'+
											'  if (client_tcp.connect(domain.c_str(), port)) {\n'+
											'	//Serial.println("Connected to "+domain+" successfully.");\n'+
											'	client_tcp.println("GET " + request + " HTTP/1.1");\n'+
											'	client_tcp.println("Host: " + domain);\n'+
											'	client_tcp.println("Connection: close");\n'+
											'	client_tcp.println();\n'+
											'	boolean state = false;\n'+
											'	long startTime = millis();\n'+
											'	while ((startTime + waittime) > millis()) {\n'+
											'	  while (client_tcp.available()) {\n'+
											'		char c = client_tcp.read();\n'+
											'		if (c == \'\\n\') {\n'+
											'		  if (getAll.length()==0) state=true; \n'+
											'		  getAll = "";\n'+
											'		} \n'+
											'		else if (c != \'\\r\')\n'+
											'		  getAll += String(c);\n'+
											'		if (state==true) getBody += String(c);\n'+
											'		startTime = millis();\n'+
											'	  }\n'+
											'	  if (getBody.length()!= 0) break;\n'+
											'	}\n'+
											'	client_tcp.stop();\n'+
											'  }\n'+
											'  else {\n'+
											'	getBody="Connected to "+domain+" failed.";\n'+
											'	Serial.println("Connected to "+domain+" failed.");\n'+
											'  }\n'+
											'  return getBody;\n'+ 
											'}\n';

  var domain = Blockly.Arduino.valueToCode(block, 'domain', Blockly.Arduino.ORDER_ATOMIC);
  var port = Blockly.Arduino.valueToCode(block, 'port', Blockly.Arduino.ORDER_ATOMIC);
  var request = Blockly.Arduino.valueToCode(block, 'request', Blockly.Arduino.ORDER_ATOMIC);
  var timeout = Blockly.Arduino.valueToCode(block, 'timeout', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tcp_http_esp32('+domain+', '+request+', '+port+', '+timeout+')';
  return [code, Blockly.Arduino.ORDER_NONE]; 
};

Blockly.Arduino['linenotify_esp32'] = function (block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['linenotify_esp32'] ='\n'+
											'String LineNotify_esp32(String token, String request) {\n'+
											'  String getAll="", getBody="";\n'+
											'  request.replace("%","%25");\n'+
											'  request.replace(" ","%20");\n'+
											'  request.replace("&","%20");\n'+
											'  request.replace("#","%20");\n'+
											'  request.replace("\\"","%22");\n'+
											'  request.replace("\\n","%0D%0A");\n'+
											'  request.replace("%20stickerPackageId","&stickerPackageId");\n'+
											'  request.replace("%20stickerId","&stickerId");\n'+
											'  request.replace("%20imageFullsize","&imageFullsize");\n'+
											'  request.replace("%20imageThumbnail","&imageThumbnail");\n'+ 
											'  WiFiClientSecure client_tcp;\n'+
											'  if (client_tcp.connect("notify-api.line.me", 443)) {\n'+
											'    client_tcp.println("POST /api/notify HTTP/1.1");\n'+
											'    client_tcp.println("Connection: close");\n'+
											'    client_tcp.println("Host: notify-api.line.me");\n'+
											'    client_tcp.println("User-Agent: ESP8266/1.0");\n'+
											'    client_tcp.println("Authorization: Bearer " + token);\n'+
											'    client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
											'    client_tcp.println("Content-Length: " + String(request.length()));\n'+
											'    client_tcp.println();\n'+
											'    client_tcp.println(request);\n'+
											'    client_tcp.println();\n'+
											'    boolean state = false;\n'+
											'    long startTime = millis();\n'+
											'    while ((startTime + 3000) > millis()) {\n'+
											'      while (client_tcp.available()) {\n'+
											'        char c = client_tcp.read();\n'+
											'        if (c == \'\\n\') {\n'+
											'          if (getAll.length()==0) state=true;\n'+
											'           getAll = "";\n'+
											'        }\n'+ 
											'        else if (c != \'\\r\')\n'+
											'          getAll += String(c);\n'+
											'          if (state==true) getBody += String(c);\n'+
											'          startTime = millis();\n'+
											'        }\n'+
											'        if (getBody.length()!= 0) break;\n'+
											'      }\n'+
											'      client_tcp.stop();\n'+
											'      Serial.println(getBody);\n'+
											'  }\n'+
											'  else {\n'+
											'    getBody="Connected tonotify-api.line.me failed.";\n'+
											'    Serial.println("Connected to notify-api.line.me failed.");\n'+
											'  }\n'+
											'  return getBody;\n'+
											'}\n';

  var linenotify_token = Blockly.Arduino.valueToCode(block, 'linenotify_token', Blockly.Arduino.ORDER_ATOMIC);  
  var linenotify_msg = Blockly.Arduino.valueToCode(block, 'linenotify_msg', Blockly.Arduino.ORDER_ATOMIC);
  
  if ((linenotify_msg.indexOf('"')==0)&&(linenotify_msg.lastIndexOf('"')==linenotify_msg.length-1))
    linenotify_msg = linenotify_msg.substring(1,linenotify_msg.length-1);	
  if ((linenotify_msg.indexOf("(")==0)&&(linenotify_msg.lastIndexOf(")")==linenotify_msg.length-1))
    linenotify_msg = linenotify_msg.substring(1,linenotify_msg.length-1);

  var code = 'LineNotify_esp32('+linenotify_token+','+linenotify_msg.replace(/\\\\/g,"\\")+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['linenotify_esp32_no'] = function (block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['linenotify_esp32'] ='\n'+
											'String LineNotify_esp32(String token, String request) {\n'+
											'  String getAll="", getBody="";\n'+
											'  request.replace("%","%25");\n'+
											'  request.replace(" ","%20");\n'+
											'  request.replace("&","%20");\n'+
											'  request.replace("#","%20");\n'+
											'  request.replace("\\"","%22");\n'+
											'  request.replace("\\n","%0D%0A");\n'+
											'  request.replace("%20stickerPackageId","&stickerPackageId");\n'+
											'  request.replace("%20stickerId","&stickerId");\n'+
											'  request.replace("%20imageFullsize","&imageFullsize");\n'+
											'  request.replace("%20imageThumbnail","&imageThumbnail");\n'+ 
											'  WiFiClientSecure client_tcp;\n'+
											'  if (client_tcp.connect("notify-api.line.me", 443)) {\n'+
											'    client_tcp.println("POST /api/notify HTTP/1.1");\n'+
											'    client_tcp.println("Connection: close");\n'+
											'    client_tcp.println("Host: notify-api.line.me");\n'+
											'    client_tcp.println("User-Agent: ESP8266/1.0");\n'+
											'    client_tcp.println("Authorization: Bearer " + token);\n'+
											'    client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
											'    client_tcp.println("Content-Length: " + String(request.length()));\n'+
											'    client_tcp.println();\n'+
											'    client_tcp.println(request);\n'+
											'    client_tcp.println();\n'+
											'    boolean state = false;\n'+
											'    long startTime = millis();\n'+
											'    while ((startTime + 3000) > millis()) {\n'+
											'      while (client_tcp.available()) {\n'+
											'        char c = client_tcp.read();\n'+
											'        if (c == \'\\n\') {\n'+
											'          if (getAll.length()==0) state=true;\n'+
											'           getAll = "";\n'+
											'        }\n'+ 
											'        else if (c != \'\\r\')\n'+
											'          getAll += String(c);\n'+
											'          if (state==true) getBody += String(c);\n'+
											'          startTime = millis();\n'+
											'        }\n'+
											'        if (getBody.length()!= 0) break;\n'+
											'      }\n'+
											'      client_tcp.stop();\n'+
											'      Serial.println(getBody);\n'+
											'  }\n'+
											'  else {\n'+
											'    getBody="Connected tonotify-api.line.me failed.";\n'+
											'    Serial.println("Connected to notify-api.line.me failed.");\n'+
											'  }\n'+
											'  return getBody;\n'+
											'}\n';

  var linenotify_token = Blockly.Arduino.valueToCode(block, 'linenotify_token', Blockly.Arduino.ORDER_ATOMIC);  
  var linenotify_msg = Blockly.Arduino.valueToCode(block, 'linenotify_msg', Blockly.Arduino.ORDER_ATOMIC);
  
  if ((linenotify_msg.indexOf('"')==0)&&(linenotify_msg.lastIndexOf('"')==linenotify_msg.length-1))
    linenotify_msg = linenotify_msg.substring(1,linenotify_msg.length-1);	
  if ((linenotify_msg.indexOf("(")==0)&&(linenotify_msg.lastIndexOf(")")==linenotify_msg.length-1))
    linenotify_msg = linenotify_msg.substring(1,linenotify_msg.length-1);

  var code = 'LineNotify_esp32('+linenotify_token+','+linenotify_msg.replace(/\\\\/g,"\\")+');\n';
  return code;
};

Blockly.Arduino['linenotify_esp32_br'] = function (block) {
  var code = '"\\n"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['linenotify_http'] = function (block) {
  Blockly.Arduino.definitions_['define_httpclient'] ='WiFiClient client;\n';
  Blockly.Arduino.definitions_['linenotify_http'] ='\n'+
													'void LineNotify_http_get(String token, String message) {\n'+
													'  String getAll="", getBody="";\n'+
													'  message.replace("%","%25");\n'+
													'  message.replace(" ","%20");\n'+
													'  message.replace("&","%20");\n'+
													'  message.replace("#","%20");\n'+
													'  message.replace("\\"","%22");\n'+
													'  message.replace("\\n","%0D%0A");\n'+
													'  if (client.connect("linenotify.com", 80)) {\n'+
													'      client.println("GET /notify.php?token="+token+"&message="+message+" HTTP/1.0");\n'+
													'      client.println("Host: linenotify.com");\n'+
													'      client.println("Accept: */*");\n'+
													'      client.println("Connection: close");\n'+
													'      client.println();\n'+
													'      delay(10);\n'+
													'  }\n'+
													'}\n';													

  var linenotify_token = Blockly.Arduino.valueToCode(block, 'linenotify_token', Blockly.Arduino.ORDER_ATOMIC);  
  var linenotify_msg = Blockly.Arduino.valueToCode(block, 'linenotify_msg', Blockly.Arduino.ORDER_ATOMIC);
  
  if ((linenotify_msg.indexOf('"')==0)&&(linenotify_msg.lastIndexOf('"')==linenotify_msg.length-1))
    linenotify_msg = linenotify_msg.substring(1,linenotify_msg.length-1);	
  if ((linenotify_msg.indexOf("(")==0)&&(linenotify_msg.lastIndexOf(")")==linenotify_msg.length-1))
    linenotify_msg = linenotify_msg.substring(1,linenotify_msg.length-1);

  var code = 'LineNotify_http_get('+linenotify_token+','+linenotify_msg.replace(/\\\\/g,"\\")+');\n';
  return code;
};

Blockly.Arduino['close_powerdog'] = function(block) { 
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['close_powerdog'] ='#include "soc/soc.h"\n#include "soc/rtc_cntl_reg.h"';
  var code = 'WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);\n';
  return code; 
};

Blockly.Arduino['esp32_wifi_wait_until_ready']  = function(block){
  var ssid = Blockly.Arduino.valueToCode(block,"SSID",Blockly.Arduino.ORDER_ATOMIC)||"";
  var pass = Blockly.Arduino.valueToCode(block,"PASSWORD",Blockly.Arduino.ORDER_ATOMIC)||"";
  ssid = ssid.replace(/"/g,"");
  pass = pass.replace(/"/g,"");
  Blockly.Arduino.definitions_.define_linkit_wifi_include="#include <WiFi.h>";
  Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = "'+ssid+'";';
  Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = "'+pass+'";';
  var code = 'pinMode(2, OUTPUT);\n'+
			 'while (WiFi.begin(_lwifi_ssid, _lwifi_pass) != WL_CONNECTED){\n'+
			 '  digitalWrite(2, HIGH);\n'+
			 '  delay(100);\n'+
			 '  digitalWrite(2, LOW);\n'+
			 '  delay(900);\n'+
			 '}\n'+
			 'pinMode(2, OUTPUT);\n'+
			 'for (int i=0;i<5;i++) {\n'+
			 '  digitalWrite(2, HIGH);\n'+
			 '  delay(100);\n'+
			 '  digitalWrite(2, LOW);\n'+
			 '  delay(100);\n'+
			 '}\n';
  return code; 
};

Blockly.Arduino['thingspeak_update_noreturn'] = function (block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_http_esp32'] ='\n'+
											'String tcp_http_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClientSecure client_tcp;\n'+
											'  if (client_tcp.connect(domain.c_str(), port)) {\n'+
											'	//Serial.println("Connected to "+domain+" successfully.");\n'+
											'	client_tcp.println("GET " + request + " HTTP/1.1");\n'+
											'	client_tcp.println("Host: " + domain);\n'+
											'	client_tcp.println("Connection: close");\n'+
											'	client_tcp.println();\n'+
											'	boolean state = false;\n'+
											'	long startTime = millis();\n'+
											'	while ((startTime + waittime) > millis()) {\n'+
											'	  while (client_tcp.available()) {\n'+
											'		char c = client_tcp.read();\n'+
											'		if (c == \'\\n\') {\n'+
											'		  if (getAll.length()==0) state=true; \n'+
											'		  getAll = "";\n'+
											'		} \n'+
											'		else if (c != \'\\r\')\n'+
											'		  getAll += String(c);\n'+
											'		if (state==true) getBody += String(c);\n'+
											'		startTime = millis();\n'+
											'	  }\n'+
											'	  if (getBody.length()!= 0) break;\n'+
											'	}\n'+
											'	client_tcp.stop();\n'+
											'  }\n'+
											'  else {\n'+
											'	getBody="Connected to "+domain+" failed.";\n'+
											'	Serial.println("Connected to "+domain+" failed.");\n'+
											'  }\n'+
											'  return getBody;\n'+ 
											'}\n';

  var key = Blockly.Arduino.valueToCode(block, 'key', Blockly.Arduino.ORDER_ATOMIC);
  var field1 = Blockly.Arduino.valueToCode(block, 'field1', Blockly.Arduino.ORDER_ATOMIC);
  var field2 = Blockly.Arduino.valueToCode(block, 'field2', Blockly.Arduino.ORDER_ATOMIC);
  var field3 = Blockly.Arduino.valueToCode(block, 'field3', Blockly.Arduino.ORDER_ATOMIC);
  var field4 = Blockly.Arduino.valueToCode(block, 'field4', Blockly.Arduino.ORDER_ATOMIC);
  var field5 = Blockly.Arduino.valueToCode(block, 'field5', Blockly.Arduino.ORDER_ATOMIC);
  var field6 = Blockly.Arduino.valueToCode(block, 'field6', Blockly.Arduino.ORDER_ATOMIC);
  var field7 = Blockly.Arduino.valueToCode(block, 'field7', Blockly.Arduino.ORDER_ATOMIC);
  var field8 = Blockly.Arduino.valueToCode(block, 'field8', Blockly.Arduino.ORDER_ATOMIC);
  
  if (!key) key="";
  if (!field1) field1="";
  if (!field2) field2="";
  if (!field3) field3="";
  if (!field4) field4="";
  if (!field5) field5="";
  if (!field6) field6="";
  if (!field7) field7="";
  if (!field8) field8="";

  var request = '"/update?api_key="+String('+key+')+"&field1="+String('+field1+')+"&field2="+String('+field2+')+"&field3="+String('+field3+')+"&field4="+String('+field4+')+"&field5="+String('+field5+')+"&field6="+String('+field6+')+"&field7="+String('+field7+')+"&field8="+String('+field8+')';
  var code = 'tcp_http_esp32("api.thingspeak.com", '+request+', 443, 3000);\n';
  return code; 
};

Blockly.Arduino['thingspeak_update'] = function (block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_http_esp32'] ='\n'+
											'String tcp_http_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClientSecure client_tcp;\n'+
											'  if (client_tcp.connect(domain.c_str(), port)) {\n'+
											'	//Serial.println("Connected to "+domain+" successfully.");\n'+
											'	client_tcp.println("GET " + request + " HTTP/1.1");\n'+
											'	client_tcp.println("Host: " + domain);\n'+
											'	client_tcp.println("Connection: close");\n'+
											'	client_tcp.println();\n'+
											'	boolean state = false;\n'+
											'	long startTime = millis();\n'+
											'	while ((startTime + waittime) > millis()) {\n'+
											'	  while (client_tcp.available()) {\n'+
											'		char c = client_tcp.read();\n'+
											'		if (c == \'\\n\') {\n'+
											'		  if (getAll.length()==0) state=true; \n'+
											'		  getAll = "";\n'+
											'		} \n'+
											'		else if (c != \'\\r\')\n'+
											'		  getAll += String(c);\n'+
											'		if (state==true) getBody += String(c);\n'+
											'		startTime = millis();\n'+
											'	  }\n'+
											'	  if (getBody.length()!= 0) break;\n'+
											'	}\n'+
											'	client_tcp.stop();\n'+
											'  }\n'+
											'  else {\n'+
											'	getBody="Connected to "+domain+" failed.";\n'+
											'	Serial.println("Connected to "+domain+" failed.");\n'+
											'  }\n'+
											'  return getBody;\n'+ 
											'}\n';

  var key = Blockly.Arduino.valueToCode(block, 'key', Blockly.Arduino.ORDER_ATOMIC);
  var field1 = Blockly.Arduino.valueToCode(block, 'field1', Blockly.Arduino.ORDER_ATOMIC);
  var field2 = Blockly.Arduino.valueToCode(block, 'field2', Blockly.Arduino.ORDER_ATOMIC);
  var field3 = Blockly.Arduino.valueToCode(block, 'field3', Blockly.Arduino.ORDER_ATOMIC);
  var field4 = Blockly.Arduino.valueToCode(block, 'field4', Blockly.Arduino.ORDER_ATOMIC);
  var field5 = Blockly.Arduino.valueToCode(block, 'field5', Blockly.Arduino.ORDER_ATOMIC);
  var field6 = Blockly.Arduino.valueToCode(block, 'field6', Blockly.Arduino.ORDER_ATOMIC);
  var field7 = Blockly.Arduino.valueToCode(block, 'field7', Blockly.Arduino.ORDER_ATOMIC);
  var field8 = Blockly.Arduino.valueToCode(block, 'field8', Blockly.Arduino.ORDER_ATOMIC);
  
  if (!key) key="";
  if (!field1) field1="";
  if (!field2) field2="";
  if (!field3) field3="";
  if (!field4) field4="";
  if (!field5) field5="";
  if (!field6) field6="";
  if (!field7) field7="";
  if (!field8) field8="";

  var request = '"/update?api_key="+String('+key+')+"&field1="+String('+field1+')+"&field2="+String('+field2+')+"&field3="+String('+field3+')+"&field4="+String('+field4+')+"&field5="+String('+field5+')+"&field6="+String('+field6+')+"&field7="+String('+field7+')+"&field8="+String('+field8+')';
  var code = 'tcp_http_esp32("api.thingspeak.com", '+request+', 443, 3000)';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['thingspeak_read1'] = function (block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_http_esp32'] ='\n'+
											'String tcp_http_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClientSecure client_tcp;\n'+
											'  if (client_tcp.connect(domain.c_str(), port)) {\n'+
											'	//Serial.println("Connected to "+domain+" successfully.");\n'+
											'	client_tcp.println("GET " + request + " HTTP/1.1");\n'+
											'	client_tcp.println("Host: " + domain);\n'+
											'	client_tcp.println("Connection: close");\n'+
											'	client_tcp.println();\n'+
											'	boolean state = false;\n'+
											'	long startTime = millis();\n'+
											'	while ((startTime + waittime) > millis()) {\n'+
											'	  while (client_tcp.available()) {\n'+
											'		char c = client_tcp.read();\n'+
											'		if (c == \'\\n\') {\n'+
											'		  if (getAll.length()==0) state=true; \n'+
											'		  getAll = "";\n'+
											'		} \n'+
											'		else if (c != \'\\r\')\n'+
											'		  getAll += String(c);\n'+
											'		if (state==true) getBody += String(c);\n'+
											'		startTime = millis();\n'+
											'	  }\n'+
											'	  if (getBody.length()!= 0) break;\n'+
											'	}\n'+
											'	client_tcp.stop();\n'+
											'  }\n'+
											'  else {\n'+
											'	getBody="Connected to "+domain+" failed.";\n'+
											'	Serial.println("Connected to "+domain+" failed.");\n'+
											'  }\n'+
											'  return getBody;\n'+ 
											'}\n';

  var key = Blockly.Arduino.valueToCode(block, 'key', Blockly.Arduino.ORDER_ATOMIC);
  var count = Blockly.Arduino.valueToCode(block, 'count', Blockly.Arduino.ORDER_ATOMIC);
  var api_key = Blockly.Arduino.valueToCode(block, 'api_key', Blockly.Arduino.ORDER_ATOMIC); 
  var request = '"/channels/"+String('+key+')+"/feeds.json?results="+String('+count+')+"&api_key="+String('+api_key+')';
  var code = 'tcp_http_esp32("api.thingspeak.com", '+request+', 443, 3000)';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['thingspeak_read2'] = function (block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_http_esp32'] ='\n'+
											'String tcp_http_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClient client_tcp;\n'+
											'  if (client_tcp.connect(domain.c_str(), port)) {\n'+
											'	//Serial.println("Connected to "+domain+" successfully.");\n'+
											'	client_tcp.println("GET " + request + " HTTP/1.1");\n'+
											'	client_tcp.println("Host: " + domain);\n'+
											'	client_tcp.println("Connection: close");\n'+
											'	client_tcp.println();\n'+
											'	boolean state = false;\n'+
											'	long startTime = millis();\n'+
											'	while ((startTime + waittime) > millis()) {\n'+
											'	  while (client_tcp.available()) {\n'+
											'		char c = client_tcp.read();\n'+
											'		if (c == \'\\n\') {\n'+
											'		  if (getAll.length()==0) state=true; \n'+
											'		  getAll = "";\n'+
											'		} \n'+
											'		else if (c != \'\\r\')\n'+
											'		  getAll += String(c);\n'+
											'		if (state==true) getBody += String(c);\n'+
											'		startTime = millis();\n'+
											'	  }\n'+
											'	  if (getBody.length()!= 0) break;\n'+
											'	}\n'+
											'	client_tcp.stop();\n'+
											'  }\n'+
											'  else {\n'+
											'	getBody="Connected to "+domain+" failed.";\n'+
											'	Serial.println("Connected to "+domain+" failed.");\n'+
											'  }\n'+
											'  return getBody;\n'+ 
											'}\n';

  var key = Blockly.Arduino.valueToCode(block, 'key', Blockly.Arduino.ORDER_ATOMIC);
  var field = Blockly.Arduino.valueToCode(block, 'field', Blockly.Arduino.ORDER_ATOMIC);
  var count = Blockly.Arduino.valueToCode(block, 'count', Blockly.Arduino.ORDER_ATOMIC); 
  var api_key = Blockly.Arduino.valueToCode(block, 'api_key', Blockly.Arduino.ORDER_ATOMIC); 
  var request = '"/channels/"+String('+key+')+"/fields/"+String('+field+')+".json?results="+String('+count+')+"&api_key="+String('+api_key+')';
  var code = 'tcp_http_esp32("api.thingspeak.com", '+request+', 443, 3000)';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['thingspeak_read3'] = function (block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_http_esp32'] ='\n'+
											'String tcp_http_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClientSecure client_tcp;\n'+
											'  if (client_tcp.connect(domain.c_str(), port)) {\n'+
											'	//Serial.println("Connected to "+domain+" successfully.");\n'+
											'	client_tcp.println("GET " + request + " HTTP/1.1");\n'+
											'	client_tcp.println("Host: " + domain);\n'+
											'	client_tcp.println("Connection: close");\n'+
											'	client_tcp.println();\n'+
											'	boolean state = false;\n'+
											'	long startTime = millis();\n'+
											'	while ((startTime + waittime) > millis()) {\n'+
											'	  while (client_tcp.available()) {\n'+
											'		char c = client_tcp.read();\n'+
											'		if (c == \'\\n\') {\n'+
											'		  if (getAll.length()==0) state=true; \n'+
											'		  getAll = "";\n'+
											'		} \n'+
											'		else if (c != \'\\r\')\n'+
											'		  getAll += String(c);\n'+
											'		if (state==true) getBody += String(c);\n'+
											'		startTime = millis();\n'+
											'	  }\n'+
											'	  if (getBody.length()!= 0) break;\n'+
											'	}\n'+
											'	client_tcp.stop();\n'+
											'  }\n'+
											'  else {\n'+
											'	getBody="Connected to "+domain+" failed.";\n'+
											'	Serial.println("Connected to "+domain+" failed.");\n'+
											'  }\n'+
											'  return getBody;\n'+ 
											'}\n';

  var key = Blockly.Arduino.valueToCode(block, 'key', Blockly.Arduino.ORDER_ATOMIC);
  var api_key = Blockly.Arduino.valueToCode(block, 'api_key', Blockly.Arduino.ORDER_ATOMIC);
  var request = '"/channels/"+String('+key+')+"/status.json?api_key="+String('+api_key+')';
  var code = 'tcp_http_esp32("api.thingspeak.com", '+request+', 443, 3000)';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['thingspeak_format'] = function(block) { 
  Blockly.Arduino.definitions_['ThingspeakJson'] ='\n'+
											'String getThingspeakJson(String data) {\n'+
											'  int s = data.indexOf("feeds");\n'+
											'  int e = data.indexOf("}]}");\n'+
											'  if ((s!=-1)&&(e!=-1))  {\n'+
											'    String json = data.substring(s+9,e);\n'+
											'    return "{"+json+"}";\n'+
											'  }\n'+
											'  else\n'+
											'    return "";\n'+
											'}\n';
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'getThingspeakJson('+text+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['thingspeak_field'] = function(block) { 
  Blockly.Arduino.definitions_['ThingspeakJson_library'] ='#include <ArduinoJson.h>';
  Blockly.Arduino.definitions_['ThingspeakJson_field'] ='\n'+
											'String getThingspeakField(String json, int recordNumber, String fieldName) {\n'+
											'  String getRecord ="";\n'+
											'  int s;\n'+
											'  int e;\n'+
											'  String data = json;\n'+
											'  int fr=0;\n'+
											'  for (int i=1;i<=100;i++) {\n'+
 											'    s = data.indexOf("{\\"created_at", fr);\n'+
											'    e = data.indexOf("}", fr);\n'+
											'    if ((s!=-1)&&(e!=-1)&&(i==recordNumber))  {\n'+
											'      data = data.substring(s,e+1);\n'+
											'      break;\n'+
											'    }\n'+
 											'    else\n'+
 											'      fr = e+1;\n'+
 											'  }\n'+
											'  DynamicJsonDocument doc(1024);\n'+
											'  deserializeJson(doc, json);\n'+
											'  JsonObject obj = doc.as<JsonObject>();\n'+
											'  String res = obj[fieldName];\n'+
											'  return res;\n'+
											'}\n';
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  var recordnumber = Blockly.Arduino.valueToCode(block, 'recordnumber', Blockly.Arduino.ORDER_ATOMIC);
  var fieldname = block.getFieldValue('fieldname');
  var code = 'getThingspeakField('+text+', '+recordnumber+', "'+fieldname+'")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['esp32_analogwrite'] = function(block) { 
  var pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
  var channel = Blockly.Arduino.valueToCode(block, 'channel', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ledcAttachPin('+pin+', '+channel+');\nledcSetup('+channel+', 5000, 8);\nledcWrite('+channel+','+val+');\n';
  return code;
};

Blockly.Arduino['arduino_analogwrite'] = function(block) { 
  var pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'analogWrite('+pin+','+val+');\n';
  return code;
};

Blockly.Arduino['esp32_digitalwrite'] = function(block) { 
  var pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var val = block.getFieldValue('val');
  var code = 'pinMode('+pin+', OUTPUT);\ndigitalWrite('+pin+', '+val+');\n';
  return code;
};

Blockly.Arduino['esp32_myfirmata'] = function(block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  var mainpage = Blockly.Arduino.valueToCode(block, 'mainpage', Blockly.Arduino.ORDER_ATOMIC);
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = '+ssid+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = '+pass+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_server= 'WiFiServer server(80);';
  Blockly.Arduino.definitions_.define_linkit_wifi_command= 'String Feedback="",Command="",cmd="",P1="",P2="",P3="",P4="",P5="",P6="",P7="",P8="",P9="";\nbyte ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;';

  var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'loop');
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');

  Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void ExecuteCommand() {\n'+
			'  Serial.println("");\n'+
			'  //Serial.println("Command: "+Command);\n'+
			'  Serial.println("cmd= "+cmd+" ,P1= "+P1+" ,P2= "+P2+" ,P3= "+P3+" ,P4= "+P4+" ,P5= "+P5+" ,P6= "+P6+" ,P7= "+P7+" ,P8= "+P8+" ,P9= "+P9);\n'+
			'  Serial.println("");\n'+
			'  if (cmd=="ip") {\n'+
			'    Feedback=WiFi.localIP().toString();\n'+
			'  }\n'+
			'  else if (cmd=="mac") {\n'+
			'    Feedback="STA MAC: "+WiFi.macAddress();\n'+
			'  }\n'+
			'  else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  }\n'+
			'  else if (cmd=="resetwifi") {\n'+
			'    WiFi.begin(P1.c_str(), P2.c_str());\n'+
			'    Serial.print("Connecting to ");\n'+
			'    Serial.println(P1);\n'+
			'    long int StartTime=millis();\n'+
			'    while (WiFi.status() != WL_CONNECTED) {\n'+
			'        delay(500);\n'+
			'        if ((StartTime+5000) < millis()) break;\n'+
			'    }\n'+
			'    Serial.println("");\n'+
			'    Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'    Feedback=WiFi.localIP().toString();\n'+
			'  }\n'+
  			'  else if (cmd=="inputpullup") {\n'+
  			'    pinMode(P1.toInt(), INPUT_PULLUP);\n'+
  			'  }\n'+
  			'  else if (cmd=="pinmode") {\n'+
  			'    if (P2.toInt()==1)\n'+
  			'      pinMode(P1.toInt(), OUTPUT);\n'+
  			'    else\n'+
  			'      pinMode(P1.toInt(), INPUT);\n'+
  			'  }\n'+
			'  else if (cmd=="digitalwrite") {\n'+
			'    ledcDetachPin(P1.toInt());\n'+
			'    pinMode(P1.toInt(), OUTPUT);\n'+
			'    digitalWrite(P1.toInt(), P2.toInt());\n'+
			'  }\n'+
 			'  else if (cmd=="digitalread") {\n'+
 			'   Feedback=String(digitalRead(P1.toInt()));\n'+
			'  }\n'+
			'  else if (cmd=="analogwrite") {\n'+
			'    ledcAttachPin(P1.toInt(), 1);\n'+
			'    ledcSetup(1, 5000, 8);\n'+
			'    ledcWrite(1,P2.toInt());\n'+
			'  }\n'+
			'  else if (cmd=="analogread") {\n'+
			'    Feedback=String(analogRead(P1.toInt()));\n'+
			'  }\n'+
			'  else if (cmd=="touchread") {\n'+
			'    Feedback=String(touchRead(P1.toInt()));\n'+
			'  }\n'+
			'  else {\n  '+ 
			statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';

	Blockly.Arduino.setups_.manual_add = '\n'+
			'  Serial.begin(9600);\n'+ 
			'  delay(10);\n'+ 
			'  //WiFi.config(IPAddress(192, 168, 201, 100), IPAddress(192, 168, 201, 2), IPAddress(255, 255, 255, 0));\n'+ 
			'  WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+ 
			'  delay(1000);\n'+ 
			'  Serial.println("");\n'+ 
			'  Serial.print("Connecting to ");\n'+ 
			'  Serial.println(_lwifi_ssid);\n'+ 
			'  long int StartTime=millis();\n'+ 
			'  while (WiFi.status() != WL_CONNECTED) {\n'+ 
			'      delay(500);\n'+ 
			'      if ((StartTime+10000) < millis()) break;\n'+ 
			'  }\n'+ 
			'  if (WiFi.status() == WL_CONNECTED) {\n'+ 
			'    pinMode(2, OUTPUT);\n'+ 
			'    for (int i=0;i<5;i++) {\n'+ 
			'      digitalWrite(2, HIGH);\n'+ 
			'      delay(100);\n'+ 
			'      digitalWrite(2, LOW);\n'+ 
			'      delay(100);\n'+ 
			'    }\n'+ 
			'  }\n'+ 
			'  else {\n'+ 
			'    pinMode(2, OUTPUT);\n'+ 
			'    for (int i=0;i<3;i++) {\n'+ 
			'      digitalWrite(2, HIGH);\n'+ 
			'      delay(500);\n'+ 
			'      digitalWrite(2, LOW);\n'+ 
			'      delay(500);\n'+ 
			'    }\n'+ 
			'  }\n'+ 
			'  Serial.println("");\n'+ 
			'  Serial.println("STAIP address: ");\n'+ 
			'  Serial.println(WiFi.localIP());\n'+ 
			'  server.begin();\n'+ statements_setup +
			'\n';
	

  Blockly.Arduino.definitions_.define_linkit_getCommand = '\n'+
			'void getCommand() {\n'+
			'  Command="";cmd="";P1="";P2="";P3="";P4="";P5="";P6="";P7="";P8="";P9="";\n'+
			'  ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;\n'+
			'  WiFiClient client = server.available();\n'+
			'  if (client) { \n'+
			'    String currentLine = "";\n'+
			'    while (client.connected()) {\n'+
			'      if (client.available()) {\n'+
			'        char c = client.read(); \n'+
			'        if (c==\'?\') ReceiveState=1;\n'+
			'        if ((c==\' \')||(c==\'\\r\')||(c==\'\\n\')) ReceiveState=0;\n'+
			'        if (ReceiveState==1) {\n'+
			'          Command=Command+String(c);\n'+
			'          if (c==\'=\') cmdState=0;\n'+
			'          if (c==\';\') strState++;\n'+
			'          if ((cmdState==1)&&((c!=\'?\')||(questionstate==1))) cmd=cmd+String(c);\n'+
			'          if ((cmdState==0)&&(strState==1)&&((c!=\'=\')||(equalstate==1))) P1=P1+String(c);\n'+
			'          if ((cmdState==0)&&(strState==2)&&(c!=\';\')) P2=P2+String(c);\n'+
			'          if ((cmdState==0)&&(strState==3)&&(c!=\';\')) P3=P3+String(c);\n'+
			'          if ((cmdState==0)&&(strState==4)&&(c!=\';\')) P4=P4+String(c);\n'+
			'          if ((cmdState==0)&&(strState==5)&&(c!=\';\')) P5=P5+String(c);\n'+
			'          if ((cmdState==0)&&(strState==6)&&(c!=\';\')) P6=P6+String(c);\n'+
			'          if ((cmdState==0)&&(strState==7)&&(c!=\';\')) P7=P7+String(c);\n'+
			'          if ((cmdState==0)&&(strState==8)&&(c!=\';\')) P8=P8+String(c);\n'+
			'          if ((cmdState==0)&&(strState>=9)&&((c!=\';\')||(semicolonstate==1))) P9=P9+String(c);\n'+
			'          if (c==\'?\') questionstate=1;\n'+
			'          if (c==\'=\') equalstate=1;\n'+
			'          if ((strState>=9)&&(c==\';\')) semicolonstate=1;\n'+
			'        }\n'+
			'        if (c == \'\\n\') {\n'+
			'          if (currentLine.length() == 0) {\n'+
			'            client.println("HTTP/1.1 200 OK");\n'+
			'            client.println("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");\n'+
			'            client.println("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");\n'+
			'            client.println("Content-Type: text/html; charset=utf-8");\n'+
			'            client.println("Access-Control-Allow-Origin: *");\n'+
			'            client.println("X-Content-Type-Options: nosniff");\n'+
			'            client.println();\n'+
			'            if (Feedback=="")\n'+
			'              client.println('+mainpage+');\n'+
			'            else\n'+
			'              client.println(Feedback);\n'+
			'            client.println();\n'+
			'            Feedback="";\n'+
			'            break;\n'+
			'          } else {\n'+
			'            currentLine = "";\n'+
			'          }\n'+
			'        } \n'+
			'        else if (c != \'\\r\') {\n'+
			'          currentLine += c;\n'+
			'        }\n'+
			'        if ((currentLine.indexOf("/?")!=-1)&&(currentLine.indexOf(" HTTP")!=-1)) {\n'+
			'          if (Command.indexOf("stop")!=-1) {\n'+
			'            client.println();\n'+
			'            client.println();\n'+
			'            client.stop();\n'+
			'          }\n'+
			'          currentLine="";\n'+
			'          Feedback="";\n'+
			'          ExecuteCommand();\n'+
			'        }\n'+
			'      }\n'+
			'    }\n'+
			'    delay(1);\n'+
			'    client.stop();\n'+
			'  }\n'+
			'}';

  code = '\n  getCommand();\n'+ statements_loop +'\n';
  return code;
};

Blockly.Arduino['esp32_cam_myfirmata'] = function(block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['define_esp_camera.h_include'] ='#include "esp_camera.h"';
  Blockly.Arduino.definitions_['define_soc.h_include'] ='#include "soc/soc.h"';
  Blockly.Arduino.definitions_['define_rtc_cntl_reg.h_include'] ='#include "soc/rtc_cntl_reg.h"';

  Blockly.Arduino.definitions_['define_esp32-cam_gpio_include'] ='\n'+
																'#define PWDN_GPIO_NUM     32\n'+
																'#define RESET_GPIO_NUM    -1\n'+
																'#define XCLK_GPIO_NUM      0\n'+
																'#define SIOD_GPIO_NUM     26\n'+
																'#define SIOC_GPIO_NUM     27\n'+
																'#define Y9_GPIO_NUM       35\n'+
																'#define Y8_GPIO_NUM       34\n'+
																'#define Y7_GPIO_NUM       39\n'+
																'#define Y6_GPIO_NUM       36\n'+
																'#define Y5_GPIO_NUM       21\n'+
																'#define Y4_GPIO_NUM       19\n'+
																'#define Y3_GPIO_NUM       18\n'+
																'#define Y2_GPIO_NUM        5\n'+
																'#define VSYNC_GPIO_NUM    25\n'+
																'#define HREF_GPIO_NUM     23\n'+
																'#define PCLK_GPIO_NUM     22\n';

  var mainpage = Blockly.Arduino.valueToCode(block, 'mainpage', Blockly.Arduino.ORDER_ATOMIC);
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var ssid_ap = Blockly.Arduino.valueToCode(block, 'ssid_ap', Blockly.Arduino.ORDER_ATOMIC);
  var pass_ap = Blockly.Arduino.valueToCode(block, 'password_ap', Blockly.Arduino.ORDER_ATOMIC);  
  var framesize = block.getFieldValue('framesize');
  Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = '+ssid+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = '+pass+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_apssid='const char* apssid = '+ssid_ap+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_appass='const char* appassword = '+pass_ap+';';  
  Blockly.Arduino.definitions_.define_linkit_wifi_server= 'WiFiServer server(80);\n';
  Blockly.Arduino.definitions_.define_linkit_wifi_command= 'String Feedback="",Command="",cmd="",P1="",P2="",P3="",P4="",P5="",P6="",P7="",P8="",P9="";\nbyte ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;';

  var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'loop');
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');

  Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void ExecuteCommand() {\n'+
			'  Serial.println("");\n'+
			'  //Serial.println("Command: "+Command);\n'+
			'  Serial.println("cmd= "+cmd+" ,P1= "+P1+" ,P2= "+P2+" ,P3= "+P3+" ,P4= "+P4+" ,P5= "+P5+" ,P6= "+P6+" ,P7= "+P7+" ,P8= "+P8+" ,P9= "+P9);\n'+
			'  Serial.println("");\n'+
			'  if (cmd=="ip") {\n'+
			'    Feedback="AP IP: "+WiFi.softAPIP().toString();\n'+
			'    Feedback+="<br>";\n'+
			'    Feedback+="STA IP: "+WiFi.localIP().toString();\n'+
			'  } else if (cmd=="mac") {\n'+
			'    Feedback="STA MAC: "+WiFi.macAddress();\n'+
			'  } else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  } else if (cmd=="digitalwrite") {\n'+
			'    ledcDetachPin(P1.toInt());\n'+
			'    pinMode(P1.toInt(), OUTPUT);\n'+
			'    digitalWrite(P1.toInt(), P2.toInt());\n'+
			'  } else if (cmd=="digitalread") {\n'+
			'    Feedback=String(digitalRead(P1.toInt()));\n'+
			'  } else if (cmd=="analogwrite") {\n'+
			'    if (P1=="4") {\n'+
			'      ledcAttachPin(4, 4);\n'+
			'      ledcSetup(4, 5000, 8);\n'+
			'      ledcWrite(4,P2.toInt());\n'+
			'    } else {\n'+
			'      ledcAttachPin(P1.toInt(), 9);\n'+
			'      ledcSetup(9, 5000, 8);\n'+
			'      ledcWrite(9,P2.toInt());\n'+
			'    }\n'+
			'  }\n'+
			'  else if (cmd=="analogread") {\n'+
			'    Feedback=String(analogRead(P1.toInt()));\n'+
			'  } else if (cmd=="touchread") {\n'+
			'    Feedback=String(touchRead(P1.toInt()));\n'+
			'  } else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  } else if (cmd=="flash") {\n'+
			'    ledcAttachPin(4, 4);\n'+
			'    ledcSetup(4, 5000, 8);\n'+
			'    int val = P1.toInt();\n'+
			'    ledcWrite(4,val);\n'+
			'  } else if(cmd=="servo") {\n'+
			'    ledcAttachPin(P1.toInt(), 3);\n'+
			'    ledcSetup(3, 50, 16);\n'+
			'    int val = 7864-P2.toInt()*34.59;\n'+
			'    if (val > 7864)\n'+
			'       val = 7864;\n'+
			'    else if (val < 1638)\n'+
			'      val = 1638;\n'+
			'    ledcWrite(3, val);\n'+
			'  } else if (cmd=="relay") {\n'+
			'    pinMode(P1.toInt(), OUTPUT);\n'+
			'    digitalWrite(P1.toInt(), P2.toInt());\n'+
			'  } else if (cmd=="resetwifi") {\n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(P1.c_str(), P2.c_str());\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(P1);\n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      Serial.println("");\n'+
			'      Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'      Feedback="STAIP: "+WiFi.localIP().toString();\n'+
			'      if (WiFi.status() == WL_CONNECTED) {\n'+
			'        WiFi.softAP((WiFi.localIP().toString()+"_"+P1).c_str(), P2.c_str());\n'+
			'        for (int i=0;i<2;i++) {\n'+
			'          ledcWrite(4,10);\n'+
			'          delay(300);\n'+
			'          ledcWrite(4,0);\n'+
			'          delay(300);\n'+
			'        }\n'+
 			'       break;\n'+
			'      }\n'+
			'    }\n'+
			'  } else if (cmd=="framesize") {\n'+
			'    int val = P1.toInt();\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_framesize(s, (framesize_t)val);\n'+
			'  } else if (cmd=="quality") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_quality(s, P1.toInt());\n'+
			'  } else if (cmd=="contrast") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_contrast(s, P1.toInt());\n'+
			'  } else if (cmd=="brightness") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_brightness(s, P1.toInt());\n'+
			'  } else if (cmd=="saturation") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_saturation(s, P1.toInt());\n'+ 
			'  } else if (cmd=="special_effect") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_special_effect(s, P1.toInt());\n'+
			'  } else if (cmd=="hmirror") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_hmirror(s, P1.toInt());\n'+
			'  } else if (cmd=="vflip") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_vflip(s, P1.toInt());\n'+
			'  } else {\n  '+ 
			statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';

	Blockly.Arduino.setups_.manual_add = '\n'+
			'  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);\n'+
			'  Serial.begin(9600);\n'+
			'  Serial.setDebugOutput(true);\n'+
			'  Serial.println();\n'+
			'  camera_config_t config;\n'+
			'  config.ledc_channel = LEDC_CHANNEL_0;\n'+
			'  config.ledc_timer = LEDC_TIMER_0;\n'+
			'  config.pin_d0 = Y2_GPIO_NUM;\n'+
			'  config.pin_d1 = Y3_GPIO_NUM;\n'+
			'  config.pin_d2 = Y4_GPIO_NUM;\n'+
			'  config.pin_d3 = Y5_GPIO_NUM;\n'+
			'  config.pin_d4 = Y6_GPIO_NUM;\n'+
			'  config.pin_d5 = Y7_GPIO_NUM;\n'+
			'  config.pin_d6 = Y8_GPIO_NUM;\n'+
			'  config.pin_d7 = Y9_GPIO_NUM;\n'+
			'  config.pin_xclk = XCLK_GPIO_NUM;\n'+
			'  config.pin_pclk = PCLK_GPIO_NUM;\n'+
			'  config.pin_vsync = VSYNC_GPIO_NUM;\n'+
			'  config.pin_href = HREF_GPIO_NUM;\n'+
			'  config.pin_sscb_sda = SIOD_GPIO_NUM;\n'+
			'  config.pin_sscb_scl = SIOC_GPIO_NUM;\n'+
			'  config.pin_pwdn = PWDN_GPIO_NUM;\n'+
			'  config.pin_reset = RESET_GPIO_NUM;\n'+
			'  config.xclk_freq_hz = 20000000;\n'+
			'  config.pixel_format = PIXFORMAT_JPEG;\n'+
			'  if(psramFound()){\n'+
			'    config.frame_size = FRAMESIZE_UXGA;\n'+
			'    config.jpeg_quality = 10;\n'+
			'    config.fb_count = 2;\n'+
			'  } else {\n'+
			'    config.frame_size = FRAMESIZE_SVGA;\n'+
			'    config.jpeg_quality = 12;\n'+
			'    config.fb_count = 1;\n'+
			'  }\n'+
			'  esp_err_t err = esp_camera_init(&config);\n'+
			'  if (err != ESP_OK) {\n'+
			'    Serial.printf("Camera init failed with error 0x%x", err);\n'+
			'    delay(1000);\n'+
			'    ESP.restart();\n'+
			'  }\n'+
			'  sensor_t * s = esp_camera_sensor_get();\n'+
			'  s->set_framesize(s, FRAMESIZE_'+framesize+');\n'+
			'  Serial.println();\n'+
			'  ledcAttachPin(4, 4);\n'+
			'  ledcSetup(4, 5000, 8);\n'+
			'  Serial.println();\n'+			
			'  delay(10);\n'+ 
			'  for (int i=0;i<2;i++) {\n'+
			'    WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+ 
			'    delay(1000);\n'+
			'    Serial.println("");\n'+
			'    Serial.print("Connecting to ");\n'+
			'    Serial.println(_lwifi_ssid);\n'+
			'    long int StartTime=millis();\n'+
			'    while (WiFi.status() != WL_CONNECTED) {\n'+
			'        delay(500);\n'+
			'        if ((StartTime+5000) < millis()) break;\n'+
			'    }\n'+
			'    if (WiFi.status() == WL_CONNECTED) {\n'+
			'      WiFi.softAP((WiFi.localIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+
			'      Serial.println("");\n'+
			'      Serial.println("STAIP address: ");\n'+
			'      Serial.println(WiFi.localIP());\n'+
			'      Serial.println("");\n'+
			'      for (int i=0;i<5;i++) {\n'+
			'        ledcWrite(4,10);\n'+
			'        delay(200);\n'+
			'        ledcWrite(4,0);\n'+
			'        delay(200);\n'+    
			'      }\n'+
			'      break;\n'+
			'    }\n'+
			'  }\n'+
			'  if (WiFi.status() != WL_CONNECTED) {\n'+
			'    WiFi.softAP((WiFi.softAPIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      ledcWrite(4,10);\n'+
			'      delay(1000);\n'+
			'      ledcWrite(4,0);\n'+
			'      delay(1000); \n'+   
			'    }\n'+
			'  }\n'+ 
			'  Serial.println("");\n'+
			'  Serial.println("APIP address: ");\n'+
			'  Serial.println(WiFi.softAPIP());\n'+  
			'  Serial.println("");\n'+ 
			'  pinMode(4, OUTPUT);\n'+
			'  digitalWrite(4, LOW);\n'+  
			'  server.begin();\n'+ statements_setup +
			'\n';
	

  Blockly.Arduino.definitions_.define_linkit_getCommand = '\n'+
			'void getCommand() {\n'+
			'  Command="";cmd="";P1="";P2="";P3="";P4="";P5="";P6="";P7="";P8="";P9="";\n'+
			'  ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;\n'+
			'  WiFiClient client_cam = server.available();\n'+
			'  if (client_cam) { \n'+
			'    String currentLine = "";\n'+
			'    while (client_cam.connected()) {\n'+
			'      if (client_cam.available()) {\n'+
			'        char c = client_cam.read(); \n'+
			'        if (c==\'?\') ReceiveState=1;\n'+
			'        if ((c==\' \')||(c==\'\\r\')||(c==\'\\n\')) ReceiveState=0;\n'+
			'        if (ReceiveState==1) {\n'+
			'            Command=Command+String(c);\n'+
			'            if (c==\'=\') cmdState=0;\n'+
			'            if (c==\';\') strState++;\n'+
			'            if ((cmdState==1)&&((c!=\'?\')||(questionstate==1))) cmd=cmd+String(c);\n'+
			'            if ((cmdState==0)&&(strState==1)&&((c!=\'=\')||(equalstate==1))) P1=P1+String(c);\n'+
			'            if ((cmdState==0)&&(strState==2)&&(c!=\';\')) P2=P2+String(c);\n'+
			'            if ((cmdState==0)&&(strState==3)&&(c!=\';\')) P3=P3+String(c);\n'+
			'            if ((cmdState==0)&&(strState==4)&&(c!=\';\')) P4=P4+String(c);\n'+
			'            if ((cmdState==0)&&(strState==5)&&(c!=\';\')) P5=P5+String(c);\n'+
			'            if ((cmdState==0)&&(strState==6)&&(c!=\';\')) P6=P6+String(c);\n'+
			'            if ((cmdState==0)&&(strState==7)&&(c!=\';\')) P7=P7+String(c);\n'+
			'            if ((cmdState==0)&&(strState==8)&&(c!=\';\')) P8=P8+String(c);\n'+
			'            if ((cmdState==0)&&(strState>=9)&&((c!=\';\')||(semicolonstate==1))) P9=P9+String(c);\n'+
			'            if (c==\'?\') questionstate=1;\n'+
			'            if (c==\'=\') equalstate=1;\n'+
			'           if ((strState>=9)&&(c==\';\')) semicolonstate=1;\n'+
			'        }\n'+
			'        if (c == \'\\n\') {\n'+
			'            if (currentLine.length() == 0) {\n'+
			'   	        if (cmd=="getstill") {\n'+
			'     	            camera_fb_t * fb = NULL;\n'+
			'     	            fb = esp_camera_fb_get();\n'+  
			'   	            if(!fb) {\n'+
			'   	                Serial.println("Camera capture failed");\n'+
			'   	                delay(1000);\n'+
			'   	                ESP.restart();\n'+
			'   	            }\n'+
			'   	            client_cam.println("HTTP/1.1 200 OK");\n'+
			'   	            client_cam.println("Access-Control-Allow-Origin: *");\n'+            
			'   	            client_cam.println("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");\n'+
			'   	            client_cam.println("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");\n'+
			'   	            client_cam.println("Content-Type: image/jpeg");\n'+
			'   	            client_cam.println("Content-Disposition: form-data; name=\\\"imageFile\\\"; filename=\\\"picture.jpg\\\"");\n'+ 
			'   	            client_cam.println("Content-Length: " + String(fb->len));\n'+             
			'   	            client_cam.println("Connection: close");\n'+
			'   	            client_cam.println();\n'+
			'   	            uint8_t *fbBuf = fb->buf;\n'+
			'   	            size_t fbLen = fb->len;\n'+
			'   	            for (size_t n=0;n<fbLen;n=n+1024) {\n'+
			'   	                if (n+1024<fbLen) {\n'+
			'   	                client_cam.write(fbBuf, 1024);\n'+
			'   	                fbBuf += 1024;\n'+
			'   	            }\n'+
			'   	            else if (fbLen%1024>0) {\n'+
			'   	                size_t remainder = fbLen%1024;\n'+
			'   	                client_cam.write(fbBuf, remainder);\n'+
			'   	              }\n'+
			'   	            }\n'+
			'   	            esp_camera_fb_return(fb);\n'+
			'   	            pinMode(4, OUTPUT);\n'+
			'   	            digitalWrite(4, LOW);\n'+ 
			'   	        } else {\n'+
			'   	        	client_cam.println("HTTP/1.1 200 OK");\n'+
			'   	        	client_cam.println("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");\n'+
			'   	        	client_cam.println("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");\n'+
			'   	        	client_cam.println("Content-Type: text/html; charset=utf-8");\n'+
			'   	        	client_cam.println("Access-Control-Allow-Origin: *");\n'+
			'   	        	client_cam.println("X-Content-Type-Options: nosniff");\n'+
			'   	        	client_cam.println();\n'+
			'   	        	if (Feedback=="")\n'+
			'   	        		client_cam.println('+mainpage+');\n'+
			'   	        	else\n'+
			'   	        		client_cam.println(Feedback);\n'+
			'   	        	client_cam.println();\n'+
			'   	        }\n'+
			'   	        Feedback="";\n'+
			'   	        break;\n'+
			'          } else {\n'+
			'            currentLine = "";\n'+
			'        }\n'+
			'      } \n'+
			'      else if (c != \'\\r\') {\n'+
			'          currentLine += c;\n'+
			'      }\n'+
			'      if ((currentLine.indexOf("/?")!=-1)&&(currentLine.indexOf(" HTTP")!=-1)) {\n'+
			'          if (Command.indexOf("stop")!=-1) {\n'+
			'            client_cam.println();\n'+
			'            client_cam.println();\n'+
			'            client_cam.stop();\n'+
			'          }\n'+
			'          currentLine="";\n'+
			'          Feedback="";\n'+
			'          ExecuteCommand();\n'+
			'        }\n'+
			'      }\n'+
			'    }\n'+
			'    delay(1);\n'+
			'    client_cam.stop();\n'+
			'  }\n'+
			'}';
			
    code = '\n  getCommand();\n'+ statements_loop +'\n';
    return code;
};

Blockly.Arduino['esp32_myfirmata_bluetooth'] = function(block) {
    var baudrate = Blockly.Arduino.valueToCode(block, 'baudrate', Blockly.Arduino.ORDER_ATOMIC);
    var blename = Blockly.Arduino.valueToCode(block, 'blename', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_.define_esp32_bluetooth_include = '#include "BluetoothSerial.h"\n'+
																	'#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)\n'+
																	'  #error Bluetooth is not enabled! Please run `make menuconfig` to and enable it\n'+
																	'#endif\n'+
																	'BluetoothSerial SerialBT;\n';
	Blockly.Arduino.definitions_.define_esp32_bluetooth_command = 'String ReceiveData="", Command="",cmd="",P1="",P2="",P3="",P4="",P5="",P6="",P7="",P8="",P9="";\n'+
																  'byte ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;\n';

	var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');
	var statements_loop = Blockly.Arduino.statementToCode(block, 'loop');
	var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');

	Blockly.Arduino.definitions_.define_esp32_ExecuteCommand = '\n'+
			'void ExecuteCommand() {\n'+
			'  Serial.println("");\n'+
			'  Serial.println("cmd= "+cmd+" ,P1= "+P1+" ,P2= "+P2+" ,P3= "+P3+" ,P4= "+P4+" ,P5= "+P5+" ,P6= "+P6+" ,P7= "+P7+" ,P8= "+P8+" ,P9= "+P9);\n'+
			'  Serial.println("");\n'+
			'  if (cmd=="yourcmd") {\n'+
			'    //you can do anything\n'+
			'  }\n'+
			'  else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  }\n'+			
			'  else if (cmd=="inputpullup") {\n'+
			'    pinMode(P1.toInt(), INPUT_PULLUP);\n'+
			'  }\n'+
			'  else if (cmd=="pinmode") {\n'+
			'    pinMode(P1.toInt(), P2.toInt());\n'+
			'  }\n'+     
			'  else if (cmd=="digitalwrite") {\n'+
			'    ledcDetachPin(P1.toInt());\n'+
			'    pinMode(P1.toInt(), OUTPUT);\n'+
			'    digitalWrite(P1.toInt(),P2.toInt());\n'+
			'  }\n'+  
			'  else if (cmd=="digitalread") {\n'+
			'    SerialBT.println(String(digitalRead(P1.toInt())));\n'+
			'  }\n'+ 
			'  else if (cmd=="touchread") {\n'+
			'    SerialBT.println(String(touchRead(P1.toInt())));\n'+
			'  }\n'+
			'  else if (cmd=="analogwrite") {\n'+
			'    ledcAttachPin(P1.toInt(), 1);\n'+
			'    ledcSetup(1, 5000, 8);\n'+
			'    ledcWrite(1,P2.toInt());\n'+
			'  }\n'+   
			'  else if (cmd=="analogread") {\n'+
			'    SerialBT.println(String(analogRead(P1.toInt())));\n'+
			'  }\n'+
			'  else {\n  '+statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';

	Blockly.Arduino.setups_.manual_add = '\n'+
			'  Serial.begin('+baudrate+');\n'+ 
			'  SerialBT.begin('+blename+');\n'+ 
			'  delay(10);\n'+ statements_setup +
			'\n';	

    Blockly.Arduino.definitions_.define_bluetooth_getCommand = '\n'+
			'void getCommand() {\n'+
			'  ReceiveData="";Command="";cmd="";P1="";P2="";P3="";P4="";P5="";P6="";P7="";P8="";P9="";\n'+
			'  ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;\n'+
  			'  if (SerialBT.available()) {\n'+
  			'    while (SerialBT.available()) {\n'+
  			'      char c=SerialBT.read();\n'+
  			'      ReceiveData=ReceiveData+String(c);\n'+
  			'      if (c==\'?\') ReceiveState=1;\n'+
  			'      if ((c==\' \')||(c==\'\\r\')||(c==\'\\n\')) ReceiveState=0;\n'+
  			'      if (ReceiveState==1) {\n'+
  			'        Command=Command+String(c);\n'+
  			'        if (c==\'=\') cmdState=0;\n'+
  			'        if (c==\';\') strState++;\n'+
  			'        if ((cmdState==1)&&((c!=\'?\')||(questionstate==1))) cmd=cmd+String(c);\n'+
  			'        if ((cmdState==0)&&(strState==1)&&((c!=\'=\')||(equalstate==1))) P1=P1+String(c);\n'+
  			'        if ((cmdState==0)&&(strState==2)&&(c!=\';\')) P2=P2+String(c);\n'+
  			'        if ((cmdState==0)&&(strState==3)&&(c!=\';\')) P3=P3+String(c);\n'+
  			'        if ((cmdState==0)&&(strState==4)&&(c!=\';\')) P4=P4+String(c);\n'+
 			'        if ((cmdState==0)&&(strState==5)&&(c!=\';\')) P5=P5+String(c);\n'+
 			'        if ((cmdState==0)&&(strState==6)&&(c!=\';\')) P6=P6+String(c);\n'+
 			'        if ((cmdState==0)&&(strState==7)&&(c!=\';\')) P7=P7+String(c);\n'+
 			'        if ((cmdState==0)&&(strState==8)&&(c!=\';\')) P8=P8+String(c);\n'+
 			'        if ((cmdState==0)&&(strState>=9)&&((c!=\';\')||(semicolonstate==1))) P9=P9+String(c);\n'+
  			'        if (c==\'?\') questionstate=1;\n'+
  			'        if (c==\'=\') equalstate=1;\n'+
  			'        if ((strState>=9)&&(c==\';\')) semicolonstate=1;\n'+
  			'      }\n'+
  			'      delay(1);\n'+
  			'     }\n'+
  			'  }\n'+
			'}';
			
  code = '\n  getCommand();\n'+ 
		 '  if (ReceiveData.indexOf("?")==0) {\n'+
         '    ExecuteCommand();\n'+
         '  }\n'+ statements_loop +'\n';
  return code;
};

Blockly.Arduino['servermodule_cmd'] = function (block) {
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'cmd == String(' + text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_feedback'] = function (block) {
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Feedback = String(' + text + ');\n';
  return code;
};

Blockly.Arduino['servermodule_bluetooth_feedback'] = function (block) {
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'SerialBT.print(String('+text+'));\n';
  return code;
};

Blockly.Arduino['servermodule_bluetooth_feedback_newline'] = function (block) {
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'SerialBT.println(String('+text+'));\n';
  return code;
};

Blockly.Arduino['servermodule_parameter'] = function (block) {
  var parameter = block.getFieldValue('parameter'); 
  var type = block.getFieldValue('type');
  var code = parameter + "." + type + ';\n';
  return code;
};

Blockly.Arduino['servermodule_parameter_variable'] = function (block) {
  var parameter = block.getFieldValue('parameter'); 
  var type = block.getFieldValue('type');
  var code = parameter + "." + type;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_variable_urldecode'] = function (block) {
  Blockly.Arduino.definitions_['urldecode'] ="\n"+
											"String urldecode(String str) {\n"+
											"  String encodedString;\n"+
											"  char c;\n"+
											"  char code0;\n"+
											"  char code1;\n"+
											"  for (int i =0; i < str.length(); i++){\n"+
											"    c=str.charAt(i);\n"+
											"    if (c == '+'){\n"+
											"      encodedString+=' ';\n"+ 
											"    } else if (c == '%') {\n"+
											"      i++;\n"+
											"      code0=str.charAt(i);\n"+
											"      i++;\n"+
											"      code1=str.charAt(i);\n"+
											"      c = (h2int(code0) << 4) | h2int(code1);\n"+
											"      encodedString+=c;\n"+
											"    } else {\n"+
											"      encodedString+=c;\n"+  
											"    }\n"+
											"    yield();\n"+
											"  }\n"+							
											"  return encodedString;\n"+
											"}\n"+
											"unsigned char h2int(char c) {\n"+
											"  if (c >= '0' && c <='9'){\n"+
											"    return((unsigned char)c - '0');\n"+
											"  }\n"+
											"  if (c >= 'a' && c <='f'){\n"+
											"    return((unsigned char)c - 'a' + 10);\n"+
											"  }\n"+
											"  if (c >= 'A' && c <='F'){\n"+
											"    return((unsigned char)c - 'A' + 10);\n"+
											"  }\n"+
											"  return(0);\n"+
											"}\n";
  var parameter = block.getFieldValue('parameter');
  var code = 'urldecode('+parameter+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_get'] = function (block) {
  var parameter = block.getFieldValue('parameter');
  var code = parameter;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_set'] = function (block) {
  var parameter = block.getFieldValue('parameter');
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  var code = parameter + ' = String(' + text + ');\n';
  return code;
};

Blockly.Arduino['servermodule_parameter_set_address'] = function (block) {
  var cmd = Blockly.Arduino.valueToCode(block, 'cmd', Blockly.Arduino.ORDER_ATOMIC);
  var P1 = Blockly.Arduino.valueToCode(block, 'P1', Blockly.Arduino.ORDER_ATOMIC);
  var P2 = Blockly.Arduino.valueToCode(block, 'P2', Blockly.Arduino.ORDER_ATOMIC);
  var P3 = Blockly.Arduino.valueToCode(block, 'P3', Blockly.Arduino.ORDER_ATOMIC);
  var P4 = Blockly.Arduino.valueToCode(block, 'P4', Blockly.Arduino.ORDER_ATOMIC);
  var P5 = Blockly.Arduino.valueToCode(block, 'P5', Blockly.Arduino.ORDER_ATOMIC);
  var P6 = Blockly.Arduino.valueToCode(block, 'P6', Blockly.Arduino.ORDER_ATOMIC);
  var P7 = Blockly.Arduino.valueToCode(block, 'P7', Blockly.Arduino.ORDER_ATOMIC);
  var P8 = Blockly.Arduino.valueToCode(block, 'P8', Blockly.Arduino.ORDER_ATOMIC);
  var P9 = Blockly.Arduino.valueToCode(block, 'P9', Blockly.Arduino.ORDER_ATOMIC);  
  var code = '"?"+String('+cmd+')+"="+String('+P1+')+";"+String('+P2+')+";"+String('+P3+')+";"+String('+P4+')+";"+String('+P5+')+";"+String('+P6+')+";"+String('+P7+')+";"+String('+P8+')+";"+String('+P9+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_set_address1'] = function (block) {
  var cmd = Blockly.Arduino.valueToCode(block, 'cmd', Blockly.Arduino.ORDER_ATOMIC);
  var P1 = Blockly.Arduino.valueToCode(block, 'P1', Blockly.Arduino.ORDER_ATOMIC);
  var P2 = Blockly.Arduino.valueToCode(block, 'P2', Blockly.Arduino.ORDER_ATOMIC); 
  var code = '"?"+String('+cmd+')+"="+String('+P1+')+";"+String('+P2+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_set_address2'] = function (block) {
  var cmd = Blockly.Arduino.valueToCode(block, 'cmd', Blockly.Arduino.ORDER_ATOMIC);
  var code = '"?"+String('+cmd+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['esp32_pinmode'] = function (block) {
  var pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var mode = block.getFieldValue('mode');
  var code = 'pinMode(' + pin + ', ' + mode + ');\n';
  return code;
};

Blockly.Arduino['servermodule_pinwrite'] = function (block) {
  var pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'pinMode(' + pin + ', OUTPUT);\ndigitalWrite(' + pin + ', ' + val + ');\n';
  return code;
};

Blockly.Arduino['esp32_pinread'] = function (block) {
  var type = block.getFieldValue('type');
  var pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');
  Blockly.Arduino.setups_["pinRead_"+pin] = statements_setup + '\n  pinMode(' + pin + ', INPUT);\n';
  var code = type + '(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['MLX90614'] = function(block) {
  var sensor = block.getFieldValue('sensor');
  var kind = block.getFieldValue('kind');
  var addr, kindaddr;
  if (sensor=="MLX90615") {
      addr = "0x5B";
	  if (kind=="ambient")
		  obj = "0x26";
	  else if (kind=="object")
		  obj = "0x27";

  } else if (sensor=="MLX90614") {
      addr = "0x5A";
	  if (kind=="ambient")
		  obj = "0x06";
	  else if (kind=="object")
		  obj = "0x07";
  }
  var sda = Blockly.Arduino.valueToCode(block, 'sda', Blockly.Arduino.ORDER_ATOMIC);
  var scl = Blockly.Arduino.valueToCode(block, 'scl', Blockly.Arduino.ORDER_ATOMIC);
  var scale = block.getFieldValue('scale');
  var compensation = Blockly.Arduino.valueToCode(block, 'compensation', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['MLX9061X_pin'] ='#include <SlowSoftI2CMaster.h>\nSlowSoftI2CMaster si = SlowSoftI2CMaster(' + sda + ', ' + scl + ', true);';
  Blockly.Arduino.definitions_.getMLX9061X = '\n'+
			'float getMLX9061X(byte scale, float compensation, uint8_t addr ,uint8_t obj) {\n'+
			'  int dev = addr<<1;\n'+
			'  int data_low = 0;\n'+
			'  int data_high = 0;\n'+
			'  int pec = 0;\n'+
			'  si.i2c_start(dev+I2C_WRITE);\n'+
			'  si.i2c_write(obj);\n'+
			'  si.i2c_rep_start(dev+I2C_READ);\n'+
			'  data_low = si.i2c_read(false);\n'+
			'  data_high = si.i2c_read(false);\n'+
			'  pec = si.i2c_read(true);\n'+
			'  si.i2c_stop();\n'+
			'  double val = 0x0000;\n'+
			'  val = (double)(((data_high & 0x007F) << 8) + data_low);\n'+
			'  double myfactor = 0.02;\n'+
			'  float kelvin = (val * myfactor)-0.01;\n'+
			'  float celcius = kelvin - 273.15;\n'+
			'  float fahrenheit = (celcius*1.8) + 32;\n'+
 			' if (scale==0)\n'+
			'    return (celcius + compensation);\n'+
			'  else if (scale==1)\n'+
			'    return (fahrenheit + compensation);\n'+
			'  else if (scale==2)\n'+
			'    return (kelvin + compensation);\n'+
			'}\n';
	
  code = 'getMLX9061X(' + scale + ', ' + compensation + ', ' + addr + ', ' + obj + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['dht11_pin'] = function(block) { 
  var pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['dht11_initial'] = "#include \"SimpleDHT.h\"\nSimpleDHT11 dht11("+pin+");\nbyte dht11_temperature = 0;\nbyte dht11_humidity = 0;";
  Blockly.Arduino.definitions_['dht11_read'] ='\n'+
											'void dht11_read() {\n'+
											'  dht11_temperature = 0;\n'+ 											
											'  dht11_humidity = 0;\n'+
											'  dht11.read(&dht11_temperature, &dht11_humidity, NULL);\n'+
											'}\n';
  var code = '';
  return code;
};

Blockly.Arduino['dht11_read'] = function(block) {
  code = 'dht11_read();\n';
  return code;
};

Blockly.Arduino['dht11_get'] = function(block) { 
  var type = block.getFieldValue('type');
  if (type=="temperature")
	var code = 'dht11_temperature';
  else
	var code = 'dht11_humidity';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['lcd1602_initial'] = function(block) { 
  var address = block.getFieldValue('address');
  var sda = Blockly.Arduino.valueToCode(block, 'sda', Blockly.Arduino.ORDER_ATOMIC);
  var scl = Blockly.Arduino.valueToCode(block, 'scl', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['lcd1602_initial'] = "#include \"Wire.h\"\n#include \"LiquidCrystal_I2C.h\"\nLiquidCrystal_I2C lcd("+address+", 16, 2);";
  var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');
  Blockly.Arduino.setups_.lcd1602 = '\n  lcd.begin('+sda+', '+scl+');'+statements_setup;
  var code = '';
  return code;
};

Blockly.Arduino['lcd1602_backlight'] = function(block) {
  code = 'lcd.backlight();\n';
  return code;
};

Blockly.Arduino['lcd1602_clear'] = function(block) {
  code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino['lcd1602_print'] = function(block) { 
  var col = block.getFieldValue('col');
  var row = block.getFieldValue('row');
  var str = Blockly.Arduino.valueToCode(block, 'str', Blockly.Arduino.ORDER_ATOMIC);
  code = 'lcd.setCursor('+col+','+row+');\nlcd.print('+str+');\n';
  return code;
};

Blockly.Arduino['esp32_setuploop'] = function(block) {
  var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'loop');	
  Blockly.Arduino.setups_.manual_add = '\n'+ statements_setup + '\n';	
  
  code = '\n' + statements_loop +'\n';
  return code;
};

Blockly.Arduino['esp32_bluetooth_initial'] = function(block) {
    var baudrate = Blockly.Arduino.valueToCode(block, 'baudrate', Blockly.Arduino.ORDER_ATOMIC);
    var blename = Blockly.Arduino.valueToCode(block, 'blename', Blockly.Arduino.ORDER_ATOMIC);
	var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');

	Blockly.Arduino.definitions_.define_esp32_bluetooth_include = '#include "BluetoothSerial.h"\n'+
																	'#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)\n'+
																	'  #error Bluetooth is not enabled! Please run `make menuconfig` to and enable it\n'+
																	'#endif\n'+
																	'BluetoothSerial SerialBT;\n'+
																	'String BluetoothData = "";\n';

    code = 'Serial.begin('+baudrate+');\n'+ 
		   'SerialBT.begin('+blename+');\n'+ 
		   'delay(10);\n'+ statements_setup +
		   '\n';
  return code;
};

Blockly.Arduino['esp32_bluetooth_readdata'] = function(block) {
			
  code ='if (SerialBT.available()) {\n'+
		'  BluetoothData = "";\n'+
		'  while (SerialBT.available()) {\n'+
		'    char c=SerialBT.read();\n'+
		'    BluetoothData=BluetoothData+String(c);\n'+
		'    delay(1);\n'+
		'  }\n'+		
		'}\n';
  return code;
};

Blockly.Arduino['esp32_bluetooth_getdata'] = function(block) {
	Blockly.Arduino.definitions_.define_esp32_bluetooth_getdata = '\n'+
			'String BluetoothGetData() {\n'+
			'  String Data = BluetoothData;\n'+
			'  BluetoothData = "";\n'+
			'  return Data;\n'+
			'}\n';
			
  code = 'BluetoothGetData()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['linkit7697_myfirmata'] = function(block) {
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <LWiFi.h>';
  var mainpage = Blockly.Arduino.valueToCode(block, 'mainpage', Blockly.Arduino.ORDER_ATOMIC);
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = '+ssid+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = '+pass+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_server= 'WiFiServer server(80);';
  Blockly.Arduino.definitions_.define_linkit_wifi_command= 'String Feedback="",Command="",cmd="",P1="",P2="",P3="",P4="",P5="",P6="",P7="",P8="",P9="";\nbyte ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;';

  var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'loop');
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');

  Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void ExecuteCommand() {\n'+
			'  Serial.println("");\n'+
			'  //Serial.println("Command: "+Command);\n'+
			'  Serial.println("cmd= "+cmd+" ,P1= "+P1+" ,P2= "+P2+" ,P3= "+P3+" ,P4= "+P4+" ,P5= "+P5+" ,P6= "+P6+" ,P7= "+P7+" ,P8= "+P8+" ,P9= "+P9);\n'+
			'  Serial.println("");\n'+
			'  if (cmd=="ip") {\n'+
			'    Feedback=WiFi.localIP().toString();\n'+
			'  }\n'+
			'  else if (cmd=="resetwifi") {\n'+
			'    WiFi.begin(P1.c_str(), P2.c_str());\n'+
			'    Serial.print("Connecting to ");\n'+
			'    Serial.println(P1);\n'+
			'    long int StartTime=millis();\n'+
			'    while (WiFi.status() != WL_CONNECTED) {\n'+
			'        delay(500);\n'+
			'        if ((StartTime+5000) < millis()) break;\n'+
			'    }\n'+
			'    Serial.println("");\n'+
			'    Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'    Feedback=WiFi.localIP().toString();\n'+
			'  }\n'+
  			'  else if (cmd=="inputpullup") {\n'+
  			'    pinMode(P1.toInt(), INPUT_PULLUP);\n'+
  			'  }\n'+
  			'  else if (cmd=="pinmode") {\n'+
  			'    if (P2.toInt()==1)\n'+
  			'      pinMode(P1.toInt(), OUTPUT);\n'+
  			'    else\n'+
  			'      pinMode(P1.toInt(), INPUT);\n'+
  			'  }\n'+
			'  else if (cmd=="digitalwrite") {\n'+
			'    pinMode(P1.toInt(), OUTPUT);\n'+
			'    digitalWrite(P1.toInt(), P2.toInt());\n'+
			'  }\n'+
 			'  else if (cmd=="digitalread") {\n'+
 			'   Feedback=String(digitalRead(P1.toInt()));\n'+
			'  }\n'+
			'  else if (cmd=="analogwrite") {\n'+
			'    analogWrite(P1.toInt(), P2.toInt());\n'+
			'  }\n'+
			'  else if (cmd=="analogread") {\n'+
			'    Feedback=String(analogRead(P1.toInt()));\n'+
			'  }\n'+
			'  else {\n  '+ 
			statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';

	Blockly.Arduino.setups_.manual_add = '\n'+
			'  Serial.begin(9600);\n'+ 
			'  delay(10);\n'+ 
			'  //WiFi.config(IPAddress(192, 168, 201, 100), IPAddress(192, 168, 201, 2), IPAddress(255, 255, 255, 0));\n'+ 
			'  WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+ 
			'  delay(1000);\n'+ 
			'  Serial.println("");\n'+ 
			'  Serial.print("Connecting to ");\n'+ 
			'  Serial.println(_lwifi_ssid);\n'+ 
			'  long int StartTime=millis();\n'+ 
			'  while (WiFi.status() != WL_CONNECTED) {\n'+ 
			'      delay(500);\n'+ 
			'      if ((StartTime+10000) < millis()) break;\n'+ 
			'  }\n'+ 
			'  if (WiFi.status() == WL_CONNECTED) {\n'+ 
			'    pinMode(LED_BUILTIN, OUTPUT);\n'+ 
			'    for (int i=0;i<5;i++) {\n'+ 
			'      digitalWrite(LED_BUILTIN, HIGH);\n'+ 
			'      delay(100);\n'+ 
			'      digitalWrite(LED_BUILTIN, LOW);\n'+ 
			'      delay(100);\n'+ 
			'    }\n'+ 
			'  }\n'+ 
			'  else {\n'+ 
			'    pinMode(LED_BUILTIN, OUTPUT);\n'+ 
			'    for (int i=0;i<3;i++) {\n'+ 
			'      digitalWrite(LED_BUILTIN, HIGH);\n'+ 
			'      delay(500);\n'+ 
			'      digitalWrite(LED_BUILTIN, LOW);\n'+ 
			'      delay(500);\n'+ 
			'    }\n'+ 
			'  }\n'+ 
			'  Serial.println("");\n'+ 
			'  Serial.println("STAIP address: ");\n'+ 
			'  Serial.println(WiFi.localIP());\n'+ 
			'  server.begin();\n'+ statements_setup +
			'\n';
	

  Blockly.Arduino.definitions_.define_linkit_getCommand = '\n'+
			'void getCommand() {\n'+
			'  Command="";cmd="";P1="";P2="";P3="";P4="";P5="";P6="";P7="";P8="";P9="";\n'+
			'  ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;\n'+
			'  WiFiClient client = server.available();\n'+
			'  if (client) { \n'+
			'    String currentLine = "";\n'+
			'    while (client.connected()) {\n'+
			'      if (client.available()) {\n'+
			'        char c = client.read(); \n'+
			'        if (c==\'?\') ReceiveState=1;\n'+
			'        if ((c==\' \')||(c==\'\\r\')||(c==\'\\n\')) ReceiveState=0;\n'+
			'        if (ReceiveState==1) {\n'+
			'          Command=Command+String(c);\n'+
			'          if (c==\'=\') cmdState=0;\n'+
			'          if (c==\';\') strState++;\n'+
			'          if ((cmdState==1)&&((c!=\'?\')||(questionstate==1))) cmd=cmd+String(c);\n'+
			'          if ((cmdState==0)&&(strState==1)&&((c!=\'=\')||(equalstate==1))) P1=P1+String(c);\n'+
			'          if ((cmdState==0)&&(strState==2)&&(c!=\';\')) P2=P2+String(c);\n'+
			'          if ((cmdState==0)&&(strState==3)&&(c!=\';\')) P3=P3+String(c);\n'+
			'          if ((cmdState==0)&&(strState==4)&&(c!=\';\')) P4=P4+String(c);\n'+
			'          if ((cmdState==0)&&(strState==5)&&(c!=\';\')) P5=P5+String(c);\n'+
			'          if ((cmdState==0)&&(strState==6)&&(c!=\';\')) P6=P6+String(c);\n'+
			'          if ((cmdState==0)&&(strState==7)&&(c!=\';\')) P7=P7+String(c);\n'+
			'          if ((cmdState==0)&&(strState==8)&&(c!=\';\')) P8=P8+String(c);\n'+
			'          if ((cmdState==0)&&(strState>=9)&&((c!=\';\')||(semicolonstate==1))) P9=P9+String(c);\n'+
			'          if (c==\'?\') questionstate=1;\n'+
			'          if (c==\'=\') equalstate=1;\n'+
			'          if ((strState>=9)&&(c==\';\')) semicolonstate=1;\n'+
			'        }\n'+
			'        if (c == \'\\n\') {\n'+
			'          if (currentLine.length() == 0) {\n'+
			'            client.println("HTTP/1.1 200 OK");\n'+
			'            client.println("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");\n'+
			'            client.println("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");\n'+
			'            client.println("Content-Type: text/html; charset=utf-8");\n'+
			'            client.println("Access-Control-Allow-Origin: *");\n'+
			'            client.println("X-Content-Type-Options: nosniff");\n'+
			'            client.println();\n'+
			'            if (Feedback=="")\n'+
			'              client.println('+mainpage+');\n'+
			'            else\n'+
			'              client.println(Feedback);\n'+
			'            client.println();\n'+
			'            Feedback="";\n'+
			'            break;\n'+
			'          } else {\n'+
			'            currentLine = "";\n'+
			'          }\n'+
			'        } \n'+
			'        else if (c != \'\\r\') {\n'+
			'          currentLine += c;\n'+
			'        }\n'+
			'        if ((currentLine.indexOf("/?")!=-1)&&(currentLine.indexOf(" HTTP")!=-1)) {\n'+
			'          if (Command.indexOf("stop")!=-1) {\n'+
			'            client.println();\n'+
			'            client.println();\n'+
			'            client.stop();\n'+
			'          }\n'+
			'          currentLine="";\n'+
			'          Feedback="";\n'+
			'          ExecuteCommand();\n'+
			'        }\n'+
			'      }\n'+
			'    }\n'+
			'    delay(1);\n'+
			'    client.stop();\n'+
			'  }\n'+
			'}';

  code = '\n  getCommand();\n'+ statements_loop +'\n';
  return code;
};
