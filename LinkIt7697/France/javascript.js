Blockly.Arduino['page_mqtt_setup_js'] = function(block) {
  var server = Blockly.Arduino.valueToCode(block, 'server', Blockly.Arduino.ORDER_ATOMIC);
  var user = Blockly.Arduino.valueToCode(block, 'user', Blockly.Arduino.ORDER_ATOMIC);
  var password = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var topic_subscribe = Blockly.Arduino.statementToCode(block, 'topic_subscribe');
  var topic_getdata = Blockly.Arduino.statementToCode(block, 'topic_getdata');
  

  var code = "";
  code += 'include_file("js", "header", "https://unpkg.com/mqtt/dist/mqtt.min.js");\nawait delay(3);\n';
  code += 'const clientId = "mqtt_" + Math.random().toString(16).substr(2, 8);\n'+			
											'const options = {\n'+
											'	username: '+user+',\n'+
											'	password: '+password+',\n'+
											'	keepalive: 60,\n'+
											'	clientId: clientId,\n'+
											'	protocolId: "MQTT",\n'+
											'	protocolVersion: 4,\n'+
											'	clean: true,\n'+
											'	reconnectPeriod: 1000,\n'+
											'	connectTimeout: 30 * 1000\n'+
											'};\n\n';										
  code += 'var mqtt_client = mqtt.connect('+server+',options);\n'+				
															'mqtt_client.on("connect", ()=>{\n'+
															'	console.log("connected");\n'+topic_subscribe+
															'	mqtt_client.on("message", async function (topic, payload) {\n'+topic_getdata+
															'   });\n'+
															'  }\n'+															
															');\n\n';	
												
  return code;
};

Blockly.Arduino['page_mqtt_subscribe_js'] = function(block) {
  var topic = Blockly.Arduino.valueToCode(block, 'topic', Blockly.Arduino.ORDER_ATOMIC);
  code = 'mqtt_client.subscribe('+topic+');\n';
  return code;
};

Blockly.Arduino['page_mqtt_gettopic_js'] = function(block) {
  var topic = Blockly.Arduino.valueToCode(block, 'topic', Blockly.Arduino.ORDER_ATOMIC);
  var topic_getdata = Blockly.Arduino.statementToCode(block, 'topic_getdata'); 
  code = 'if (topic=='+topic+') {\n'+topic_getdata+'};\n';
  return code;
};

Blockly.Arduino['page_mqtt_senddata_js'] = function(block) {
  var topic = Blockly.Arduino.valueToCode(block, 'topic', Blockly.Arduino.ORDER_ATOMIC);
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC); 
  code = 'mqtt_client.publish('+topic+', String('+text+'));\n';
  return code;
};

Blockly.Arduino['page_mqtt_getdata_js'] = function(block) {
  code = 'payload';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['include_file'] = function (block) {
  var type = block.getFieldValue('type');
  var position = block.getFieldValue('position');
  var value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC); 
  if (type=="css") position = "";
  
  var code = 'include_file("'+type+'", "'+position+'", '+value+');\n';
  return code;
};

Blockly.Arduino['esp32_telegrambot_reply_markup'] = function (block) {
  var telegram_token = Blockly.Arduino.valueToCode(block, 'telegram_token', Blockly.Arduino.ORDER_ATOMIC); 
  var telegram_chatid = Blockly.Arduino.valueToCode(block, 'telegram_chatid', Blockly.Arduino.ORDER_ATOMIC);
  var telegram_msg = Blockly.Arduino.valueToCode(block, 'telegram_msg', Blockly.Arduino.ORDER_ATOMIC);
  var telegram_keyboard = Blockly.Arduino.valueToCode(block, 'telegram_keyboard', Blockly.Arduino.ORDER_ATOMIC); 
  var telegram_ontime = block.getFieldValue('telegram_ontime');
  
  var code = 'telegram_reply_markup('+telegram_token+','+telegram_chatid+','+telegram_msg+','+telegram_keyboard+','+telegram_ontime+');\n';
  return code;
};

Blockly.Arduino['taskhandle_initial'] = function(block){
	var stack = Blockly.Arduino.valueToCode(block,"stack",Blockly.Arduino.ORDER_NONE);
	var priority = block.getFieldValue('priority');
	var core = block.getFieldValue('core');
	
	Blockly.Arduino.definitions_['TaskHandle_task'+core] ='TaskHandle_t Task'+core+';\n';		
	
	var code = 'xTaskCreatePinnedToCore(\n  codeForTask'+core+',\n  "Task '+core+'",\n  '+stack+',\n  NULL,\n  '+priority+',\n  &Task'+core+',\n  '+core+'\n);\nvTaskDelay(100);\n';
	return code;
};

Blockly.Arduino['taskhandle_statement'] = function(block){
	var core = block.getFieldValue('core');			
	var statement = Blockly.Arduino.statementToCode(block, 'statement');
	Blockly.Arduino.definitions_['TaskHandle_codeForTask'+core] = 'void codeForTask'+core+'( void * parameter ) {\n'+statement+'\n}\n';
	
	var code = ''; 
	return code;
};

Blockly.Arduino['taskhandle_delay'] = function(block){
	var delay = Blockly.Arduino.valueToCode(block,"delay",Blockly.Arduino.ORDER_NONE);
	
	var code = 'vTaskDelay('+delay+');\n'; 
	return code;
};

Blockly.Arduino['taskhandle_getcore'] = function(block){
	var code = 'xPortGetCoreID()'; 
	return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['taskhandle_yield'] = function(block){
	var code = 'yield();\n'; 
	return code;
};

Blockly.Arduino['taskhandle_delete'] = function(block){
	var core = block.getFieldValue('core');		
	var code = 'vTaskDelete(Task'+core+');\n'; 
	return code;
};

Blockly.Arduino['taskhandle_suspend'] = function(block){
	var core = block.getFieldValue('core');		
	var code = 'vTaskSuspend(Task'+core+');\n';
	return code;
};

Blockly.Arduino['taskhandle_resume'] = function(block){
	var core = block.getFieldValue('core');		
	var code = 'vTaskResume(Task'+core+');\n';
	return code;
};

Blockly.Arduino['taskhandle_getpriority'] = function(block){
	var core = block.getFieldValue('core');	
	var code = 'vTaskPriorityGet(Task'+core+')'; 
	return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['taskhandle_setpriority'] = function(block){
	var core = block.getFieldValue('core');	
	var priority = block.getFieldValue('priority');
	var code = 'vTaskPrioritySet(Task'+core+', '+priority+');\n'; 
	return code;
};

Blockly.Arduino['taskhandle_resetdog'] = function(block){
	var code = 'esp_task_wdt_reset();\n'; 
	return code;
};

Blockly.Arduino['taskhandle_disabledog'] = function(block){
	var core = block.getFieldValue('core');	
	var code = 'disableCore'+core+'WDT();\n'; 
	return code;
};

Blockly.Arduino['page_spreadsheet_function'] = function(block){
	var spreadsheeturl = Blockly.Arduino.valueToCode(block,"spreadsheeturl",Blockly.Arduino.ORDER_NONE)||"";
	var spreadsheetname = Blockly.Arduino.valueToCode(block,"spreadsheetname",Blockly.Arduino.ORDER_NONE)||"";
	var func = block.getFieldValue('func');
	var row = Blockly.Arduino.valueToCode(block,"row",Blockly.Arduino.ORDER_NONE)||"";
	var col = Blockly.Arduino.valueToCode(block,"col",Blockly.Arduino.ORDER_NONE)||"";
	var text = Blockly.Arduino.valueToCode(block,"text",Blockly.Arduino.ORDER_NONE)||"";
	var value_spreadsheet_script = Blockly.Arduino.valueToCode(block, 'spreadsheet_script', Blockly.Arduino.ORDER_ATOMIC);
			
	var code = 'spreadsheet_function(' + spreadsheeturl + ', ' + spreadsheetname + ',"' + func + '", ' + text + ', ' + row + ', ' + col + ', ' + value_spreadsheet_script + ');\n';
	return code;
};

Blockly.Arduino['video_base64_spreadsheet_new'] = function(block) {
  var value_source = block.getFieldValue('source');
  var value_id = Blockly.Arduino.valueToCode(block, 'id', Blockly.Arduino.ORDER_ATOMIC);	
  var value_spreadsheeturl = Blockly.Arduino.valueToCode(block, 'spreadsheeturl', Blockly.Arduino.ORDER_ATOMIC);
  var value_spreadsheetname = Blockly.Arduino.valueToCode(block, 'spreadsheetname', Blockly.Arduino.ORDER_ATOMIC);
  var value_datetime = block.getFieldValue('datetime');    
  var value_position = block.getFieldValue('position');  
  var value_column = Blockly.Arduino.valueToCode(block, 'column', Blockly.Arduino.ORDER_ATOMIC);
  var value_row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
  var value_spreadsheet_script = Blockly.Arduino.valueToCode(block, 'spreadsheet_script', Blockly.Arduino.ORDER_ATOMIC);
	
  if ((value_id.indexOf("(")==0)&&(value_id.lastIndexOf(")")==value_id.length-1))
    value_id = value_id.substring(1,value_id.length-1);	
  if ((value_id.indexOf("'")==0)&&(value_id.lastIndexOf("'")==value_id.length-1))
    value_id = value_id.substring(1,value_id.length-1);
  if ((value_id.indexOf('"')==0)&&(value_id.lastIndexOf('"')==value_id.length-1))
    value_id = value_id.substring(1,value_id.length-1);	
	
  if (value_source=="video")
	value_source = 'gamevideo_'+value_id;
  else if (value_source=="canvas")
	value_source = 'gamecanvas_'+value_id;
  else if (value_source=="image")
	value_source = 'gameimage_'+value_id;
  
  var code = 'video_base64_spreadsheet_new("' + value_source + '",'+value_spreadsheeturl+','+value_spreadsheetname+',"'+value_datetime+'","'+value_position+'",'+value_column+','+value_row+','+value_spreadsheet_script+');\n';
  return code;		
}

Blockly.Arduino['variable_urldecode'] = function (block) {
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
  var url = Blockly.Arduino.valueToCode(block, 'url', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'urldecode('+url+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino['loop_asynchronous'] = function(block) {
	var id = "count_"+this.id.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
	Blockly.Arduino.definitions_[id] = 'long ' +id+" = 0;";
	
	var count = Blockly.Arduino.valueToCode(block, 'count', Blockly.Arduino.ORDER_ATOMIC);
	var statement = Blockly.Arduino.statementToCode(block, 'statement');	
	var code = id +'++;\nif ('+id+'%'+count+'==0) {\n'+id+'=0;\n'+statement+'\n}';
	return code;
};

Blockly.Arduino['esp32_telegrambot_getupdates'] = function(block) {
	var token = Blockly.Arduino.valueToCode(block, 'token', Blockly.Arduino.ORDER_ATOMIC); 

	Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';			
	Blockly.Arduino.definitions_['ArduinoJson'] = '#include <ArduinoJson.h>';
	Blockly.Arduino.definitions_.message_id = 'long messageid_last = 0;';
	
	Blockly.Arduino.definitions_.telegrambot_getUpdates = ''+		
			'String telegrambot_getUpdates(String token) {\n'+
			'  const char* myDomain = "api.telegram.org";\n'+
			'  String getAll="", getBody = "";\n'+
			'  JsonObject obj;\n'+
			'  DynamicJsonDocument doc(1024);\n'+
			'  String result;\n'+
			'  long update_id;\n'+
			'  String message;\n'+
			'  long message_id;\n'+
			'  String text;\n'+
			'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.telegrambot_getUpdates += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.telegrambot_getUpdates += '  if (client_tcp.connect(myDomain, 443)) {\n'+
			'    while (client_tcp.connected()) {\n'+
			'      getAll = "";\n'+
			'      getBody = "";\n'+
			'      String request = "limit=1&offset=-1&allowed_updates=message";\n'+
			'      client_tcp.println("POST /bot"+token+"/getUpdates HTTP/1.1");\n'+
			'      client_tcp.println("Host: " + String(myDomain));\n'+
			'      client_tcp.println("Content-Length: " + String(request.length()));\n'+
			'      client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
			'      client_tcp.println("Connection: keep-alive");\n'+
			'      client_tcp.println();\n'+
			'      client_tcp.print(request);\n'+
			'      int waitTime = 5000;\n'+
			'      long startTime = millis();\n'+
			'      boolean state = false;\n'+
			'      while ((startTime + waitTime) > millis()){\n'+
			'        delay(100);\n'+
			'        while (client_tcp.available()){\n'+
			'            char c = client_tcp.read();\n'+
			'            if (c == \'\\n\') {\n'+
			'              if (getAll.length()==0) state=true;\n'+
			'              getAll = "";\n'+
			'            }\n'+
			'            else if (c != \'\\r\')\n'+
			'              getAll += String(c);\n'+
			'            if (state==true) getBody += String(c);\n'+
			'            startTime = millis();\n'+
			'         }\n'+
			'         if (getBody.length()>0) break;\n'+
			'      }\n'+
			'      deserializeJson(doc, getBody);\n'+
			'      obj = doc.as<JsonObject>();\n'+
			'      message_id = obj["result"][0]["message"]["message_id"].as<String>().toInt();\n'+
			'      if (message_id!=messageid_last) {\n'+
			'      	 if (messageid_last!=0)\n'+
			'      	 	text = obj["result"][0]["message"]["text"].as<String>();\n'+
			'      	 messageid_last = message_id;\n'+			
			'      }\n'+
			'      return text;\n' +
			'    }\n'+
			'    return "";\n' +
			'  }\n'+			
			'}\n';

	var code = 'telegrambot_getUpdates('+token+')';
	return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['esp32_telegrambot_spreadsheet_sendcell'] = function(block){
    var token = Blockly.Arduino.valueToCode(block, 'token', Blockly.Arduino.ORDER_ATOMIC);
    var chat_id = Blockly.Arduino.valueToCode(block, 'chat_id', Blockly.Arduino.ORDER_ATOMIC); 	
	var spreadsheeturl = Blockly.Arduino.valueToCode(block,"spreadsheeturl",Blockly.Arduino.ORDER_NONE)||"";
	var spreadsheetname = Blockly.Arduino.valueToCode(block,"spreadsheetname",Blockly.Arduino.ORDER_NONE)||"";
	var row = Blockly.Arduino.valueToCode(block,"row",Blockly.Arduino.ORDER_NONE)||"";
	var col = Blockly.Arduino.valueToCode(block,"col",Blockly.Arduino.ORDER_NONE)||"";
	var type = block.getFieldValue('type');
	
	Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';		

	Blockly.Arduino.definitions_.telegram_Spreadsheet_send = '\n'+
			'String telegram_Spreadsheet_send(int row, int col, String type, String token, String chat_id, String mySpreadsheeturl, String mySpreadsheetname, String myScript) {\n'+
			'  mySpreadsheeturl = urlencode(mySpreadsheeturl);\n'+
			'  mySpreadsheetname = urlencode(mySpreadsheetname);\n'+			
			'  const char* myDomain = "script.google.com";\n'+
			'  String getAll="", getBody = "";\n'+
			'  Serial.println("Connect to " + String(myDomain));\n'+
			'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.telegram_Spreadsheet_send += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.telegram_Spreadsheet_send +='  if (client_tcp.connect(myDomain, 443)) {\n'+
			'    Serial.println("Connection successful");\n'+
			'    String Data = "&myToken="+token+"&myChatID="+chat_id;\n'+
			'    Data += "&spreadsheeturl="+mySpreadsheeturl+"&spreadsheetname="+mySpreadsheetname;\n'+			
			'    Data += "&row="+String(row)+"&col="+String(col)+"&type="+type;\n'+			
			'    client_tcp.println("POST " + myScript + " HTTP/1.1");\n'+
			'    client_tcp.println("Host: " + String(myDomain));\n'+
			'    client_tcp.println("Content-Length: " + String(Data.length()));\n'+
			'    client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
			'    client_tcp.println("Connection: keep-alive");\n'+
			'    client_tcp.println();\n'+
			'    int Index;\n'+
			'    for (Index = 0; Index < Data.length(); Index = Index+1024) {\n'+
			'      client_tcp.print(Data.substring(Index, Index+1024));\n'+
			'    }\n'+
			'    int waitTime = 10000;\n'+
			'    long startTime = millis();\n'+
			'    boolean state = false;\n'+
			'    \n'+
			'    while ((startTime + waitTime) > millis())\n'+
			'    {\n'+
			'      Serial.print(".");\n'+
			'      delay(100);\n'+
			'      while (client_tcp.available())\n'+
			'      {\n'+
			'          char c = client_tcp.read();\n'+
			'          if (state==true) getBody += String(c);\n'+        
			'          if (c == \'\\n\')\n'+
			'          {\n'+
			'            if (getAll.length()==0) state=true;\n'+
			'            getAll = "";\n'+
			'          }\n'+
			'          else if (c != \'\\r\')\n'+
			'            getAll += String(c);\n'+
			'          startTime = millis();\n'+
			'       }\n'+
			'       if (getBody.length()>0) break;\n'+
			'    }\n'+
			'    client_tcp.stop();\n'+
			'    Serial.println(getBody);\n'+	
			'  }\n'+
			'  else {\n'+
			'    Serial.println("Connected to " + String(myDomain) + " failed.");\n'+
			'  }\n'+
			'  \n'+
			'  return getBody;\n'+
			'}\n';
				
	Blockly.Arduino.definitions_.urlencode = '\n'+
			'String urlencode(String str)\n'+
			'{\n'+
			'  String encodedString="";\n'+
			'  char c;\n'+
			'  char code0;\n'+
			'  char code1;\n'+
			'  char code2;\n'+
			'  for (int i =0; i < str.length(); i++){\n'+
			'    c=str.charAt(i);\n'+
			'    if (c == \' \'){\n'+
			'      encodedString+= \'+\';\n'+
			'    } else if (isalnum(c)){\n'+
			'      encodedString+=c;\n'+
			'    } else{\n'+
			'      code1=(c & 0xf)+\'0\';\n'+
			'      if ((c & 0xf) >9){\n'+
			'          code1=(c & 0xf) - 10 + \'A\';\n'+
			'      }\n'+
			'      c=(c>>4)&0xf;\n'+
			'      code0=c+\'0\';\n'+
			'      if (c > 9){\n'+
			'          code0=c - 10 + \'A\';\n'+
			'      }\n'+
			'      code2=\'\\0\';\n'+
			'      encodedString+=\'%\';\n'+
			'      encodedString+=code0;\n'+
			'      encodedString+=code1;\n'+
			'      \/\/encodedString+=code2;\n'+
			'    }\n'+
			'    yield();\n'+
			'  }\n'+
			'  return encodedString;\n'+
			'}\n';			
			
	var code = 'telegram_Spreadsheet_send(' + row + ', ' + col + ',"' + type + '", ' + token + ', ' + chat_id + ', String(' + spreadsheeturl + '), String(' + spreadsheetname + '), ' +  '"/macros/s/AKfycbyQmCDrY9cJyjXp71fliwPr1xmbTQgTgfDb0j8rIjuJ44Ci61clvWBZnZ_upDDlSnjHNA/exec");\n';
	return code;
};



Blockly.Arduino['controls_spreadsheet'] = function(block){
	var spreadsheeturl = Blockly.Arduino.valueToCode(block,"spreadsheeturl",Blockly.Arduino.ORDER_NONE)||"";
	var spreadsheetname = Blockly.Arduino.valueToCode(block,"spreadsheetname",Blockly.Arduino.ORDER_NONE)||"";	
	var func = block.getFieldValue('func');
	var data = Blockly.Arduino.valueToCode(block,"VALUE",Blockly.Arduino.ORDER_NONE)||"";
	data = 'String('+data+')+"|"';
	for (var i=0;i<26;i++) {
		var text = Blockly.Arduino.valueToCode(block,String.fromCharCode(i+65),Blockly.Arduino.ORDER_NONE);
		if (block.getInput(String.fromCharCode(i+65)))
			data += '+String('+text+')+"|"';
	}
	data = data.substring(0, data.length-4);

	Blockly.Arduino.definitions_.Spreadsheet_insert = '\n'+
			'String Spreadsheet_insert(String func, String data, int row, int col, String text, String mySpreadsheeturl, String mySpreadsheetname, String myScript) {\n'+
			'  data = urlencode(data);\n'+
			'  text = urlencode(text);\n'+
			'  mySpreadsheeturl = urlencode(mySpreadsheeturl);\n'+
			'  mySpreadsheetname = urlencode(mySpreadsheetname);\n'+
			'  const char* myDomain = "script.google.com";\n'+
			'  String getAll="", getBody = "";\n'+
			'  Serial.println("Connect to " + String(myDomain));\n'+
			'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.Spreadsheet_insert += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.Spreadsheet_insert +='  if (client_tcp.connect(myDomain, 443)) {\n'+
			'    Serial.println("Connection successful");\n'+
			'    String Data = "&func="+func+"&data="+data+"&spreadsheeturl="+mySpreadsheeturl+"&spreadsheetname="+mySpreadsheetname;\n'+
			'    Data += "&row="+String(row)+"&col="+String(col)+"&text="+text;\n'+			
			'    client_tcp.println("POST " + myScript + " HTTP/1.1");\n'+
			'    client_tcp.println("Host: " + String(myDomain));\n'+
			'    client_tcp.println("Content-Length: " + String(Data.length()));\n'+
			'    client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
			'    client_tcp.println("Connection: keep-alive");\n'+
			'    client_tcp.println();\n'+
			'    int Index;\n'+
			'    for (Index = 0; Index < Data.length(); Index = Index+1024) {\n'+
			'      client_tcp.print(Data.substring(Index, Index+1024));\n'+
			'    }\n'+
			'    int waitTime = 10000;\n'+
			'    long startTime = millis();\n'+
			'    boolean state = false;\n'+
			'    \n'+
			'    while ((startTime + waitTime) > millis())\n'+
			'    {\n'+
			'      Serial.print(".");\n'+
			'      delay(100);\n'+
			'      while (client_tcp.available())\n'+
			'      {\n'+
			'          char c = client_tcp.read();\n'+
			'          if (state==true) getBody += String(c);\n'+        
			'          if (c == \'\\n\')\n'+
			'          {\n'+
			'            if (getAll.length()==0) state=true;\n'+
			'            getAll = "";\n'+
			'          }\n'+
			'          else if (c != \'\\r\')\n'+
			'            getAll += String(c);\n'+
			'          startTime = millis();\n'+
			'       }\n'+
			'       if (getBody.length()>0) break;\n'+
			'    }\n'+
			'    client_tcp.stop();\n'+
			'  }\n'+
			'  else {\n'+
			'    Serial.println("Connected to " + String(myDomain) + " failed.");\n'+
			'  }\n'+
			'  \n'+
			'  return getBody;\n'+
			'}\n';
			
	Blockly.Arduino.definitions_.urlencode = '\n'+
			'String urlencode(String str)\n'+
			'{\n'+
			'  String encodedString="";\n'+
			'  char c;\n'+
			'  char code0;\n'+
			'  char code1;\n'+
			'  char code2;\n'+
			'  for (int i =0; i < str.length(); i++){\n'+
			'    c=str.charAt(i);\n'+
			'    if (c == \' \'){\n'+
			'      encodedString+= \'+\';\n'+
			'    } else if (isalnum(c)){\n'+
			'      encodedString+=c;\n'+
			'    } else{\n'+
			'      code1=(c & 0xf)+\'0\';\n'+
			'      if ((c & 0xf) >9){\n'+
			'          code1=(c & 0xf) - 10 + \'A\';\n'+
			'      }\n'+
			'      c=(c>>4)&0xf;\n'+
			'      code0=c+\'0\';\n'+
			'      if (c > 9){\n'+
			'          code0=c - 10 + \'A\';\n'+
			'      }\n'+
			'      code2=\'\\0\';\n'+
			'      encodedString+=\'%\';\n'+
			'      encodedString+=code0;\n'+
			'      encodedString+=code1;\n'+
			'      \/\/encodedString+=code2;\n'+
			'    }\n'+
			'    yield();\n'+
			'  }\n'+
			'  return encodedString;\n'+
			'}\n';			
			
	var code = 'Spreadsheet_insert("' + func + '", ' + data + ', 0, 0, "", String(' + spreadsheeturl + '), String(' + spreadsheetname + '), ' +  '"/macros/s/AKfycbxA3hhTlntwVTOcqngOC_iJL_zLmRwzcDbMYDs7FD8iinNsY9XZsMkD7AcXTIUbEc33EA/exec");\n';
	return code;
};

Blockly.Arduino['controls_spreadsheet_datetime'] = function(block){
	var datetime = block.getFieldValue('datetime');	
	var code = '"'+datetime+'"';
	return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['controls_spreadsheet_function'] = function(block){
	var spreadsheeturl = Blockly.Arduino.valueToCode(block,"spreadsheeturl",Blockly.Arduino.ORDER_NONE)||"";
	var spreadsheetname = Blockly.Arduino.valueToCode(block,"spreadsheetname",Blockly.Arduino.ORDER_NONE)||"";
	var func = block.getFieldValue('func');
	var row = Blockly.Arduino.valueToCode(block,"row",Blockly.Arduino.ORDER_NONE)||"";
	var col = Blockly.Arduino.valueToCode(block,"col",Blockly.Arduino.ORDER_NONE)||"";
	var text = Blockly.Arduino.valueToCode(block,"text",Blockly.Arduino.ORDER_NONE)||"";
	
	Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';		

	Blockly.Arduino.definitions_.Spreadsheet_insert = '\n'+
			'String Spreadsheet_insert(String func, String data, int row, int col, String text, String mySpreadsheeturl, String mySpreadsheetname, String myScript) {\n'+
			'  data = urlencode(data);\n'+
			'  text = urlencode(text);\n'+
			'  mySpreadsheeturl = urlencode(mySpreadsheeturl);\n'+
			'  mySpreadsheetname = urlencode(mySpreadsheetname);\n'+			
			'  const char* myDomain = "script.google.com";\n'+
			'  String getAll="", getBody = "";\n'+
			'  Serial.println("Connect to " + String(myDomain));\n'+
			'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.Spreadsheet_insert += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.Spreadsheet_insert +='  if (client_tcp.connect(myDomain, 443)) {\n'+
			'    Serial.println("Connection successful");\n'+
			'    String Data = "&func="+func+"&data="+data+"&spreadsheeturl="+mySpreadsheeturl+"&spreadsheetname="+mySpreadsheetname;\n'+
			'    Data += "&row="+String(row)+"&col="+String(col)+"&text="+text;\n'+			
			'    client_tcp.println("POST " + myScript + " HTTP/1.1");\n'+
			'    client_tcp.println("Host: " + String(myDomain));\n'+
			'    client_tcp.println("Content-Length: " + String(Data.length()));\n'+
			'    client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
			'    client_tcp.println("Connection: keep-alive");\n'+
			'    client_tcp.println();\n'+
			'    int Index;\n'+
			'    for (Index = 0; Index < Data.length(); Index = Index+1024) {\n'+
			'      client_tcp.print(Data.substring(Index, Index+1024));\n'+
			'    }\n'+
			'    int waitTime = 10000;\n'+
			'    long startTime = millis();\n'+
			'    boolean state = false;\n'+
			'    \n'+
			'    while ((startTime + waitTime) > millis())\n'+
			'    {\n'+
			'      Serial.print(".");\n'+
			'      delay(100);\n'+
			'      while (client_tcp.available())\n'+
			'      {\n'+
			'          char c = client_tcp.read();\n'+
			'          if (state==true) getBody += String(c);\n'+        
			'          if (c == \'\\n\')\n'+
			'          {\n'+
			'            if (getAll.length()==0) state=true;\n'+
			'            getAll = "";\n'+
			'          }\n'+
			'          else if (c != \'\\r\')\n'+
			'            getAll += String(c);\n'+
			'          startTime = millis();\n'+
			'       }\n'+
			'       if (getBody.length()>0) break;\n'+
			'    }\n'+
			'    client_tcp.stop();\n'+
			'    Serial.println("");\n'+	
			'  }\n'+
			'  else {\n'+
			'    Serial.println("Connected to " + String(myDomain) + " failed.");\n'+
			'  }\n'+
			'  \n'+
			'  return getBody;\n'+
			'}\n';
			
	Blockly.Arduino.definitions_.urlencode = '\n'+
			'String urlencode(String str)\n'+
			'{\n'+
			'  String encodedString="";\n'+
			'  char c;\n'+
			'  char code0;\n'+
			'  char code1;\n'+
			'  char code2;\n'+
			'  for (int i =0; i < str.length(); i++){\n'+
			'    c=str.charAt(i);\n'+
			'    if (c == \' \'){\n'+
			'      encodedString+= \'+\';\n'+
			'    } else if (isalnum(c)){\n'+
			'      encodedString+=c;\n'+
			'    } else{\n'+
			'      code1=(c & 0xf)+\'0\';\n'+
			'      if ((c & 0xf) >9){\n'+
			'          code1=(c & 0xf) - 10 + \'A\';\n'+
			'      }\n'+
			'      c=(c>>4)&0xf;\n'+
			'      code0=c+\'0\';\n'+
			'      if (c > 9){\n'+
			'          code0=c - 10 + \'A\';\n'+
			'      }\n'+
			'      code2=\'\\0\';\n'+
			'      encodedString+=\'%\';\n'+
			'      encodedString+=code0;\n'+
			'      encodedString+=code1;\n'+
			'      \/\/encodedString+=code2;\n'+
			'    }\n'+
			'    yield();\n'+
			'  }\n'+
			'  return encodedString;\n'+
			'}\n';			
			
	var code = 'Spreadsheet_insert("' + func + '", "", ' + row + ', ' + col + ', String(' + text + '), String(' + spreadsheeturl + '), String(' + spreadsheetname + '), ' +  '"/macros/s/AKfycbxA3hhTlntwVTOcqngOC_iJL_zLmRwzcDbMYDs7FD8iinNsY9XZsMkD7AcXTIUbEc33EA/exec");\n';
	return code;
};

Blockly.Arduino['controls_spreadsheet_get'] = function(block){
	var spreadsheetid = Blockly.Arduino.valueToCode(block,"spreadsheetid",Blockly.Arduino.ORDER_NONE);
	var spreadsheetname = Blockly.Arduino.valueToCode(block,"spreadsheetname",Blockly.Arduino.ORDER_NONE);
	var cell = Blockly.Arduino.valueToCode(block,"cell",Blockly.Arduino.ORDER_NONE);
	var apikey = Blockly.Arduino.valueToCode(block,"apikey",Blockly.Arduino.ORDER_NONE);
	
	Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';	
	Blockly.Arduino.definitions_['ArduinoJson'] = '#include <ArduinoJson.h>';
	Blockly.Arduino.definitions_['spreadsheetData'] = 'String spreadsheetData = "{\\"values\\":[]}";';

	Blockly.Arduino.definitions_.Spreadsheet_get = '\n'+
			'String Spreadsheet_get(String cell, String mySpreadsheetid, String mySpreadsheetname, String apikey) {\n'+			
			'  const char* myDomain = "sheets.googleapis.com";\n'+
			'  String getAll="", getBody = "";\n'+
			'  Serial.println("Connect to " + String(myDomain));\n'+
			'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.Spreadsheet_get += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.Spreadsheet_get +='  if (client_tcp.connect(myDomain, 443)) {\n'+
			'    Serial.println("Connection successful");\n'+
			'    if (apikey=="") apikey="AIzaSyBDp5oSNkjqJYTJkdL1veFEyLPtSm7Bbm4";\n'+
			'    client_tcp.println("GET https://sheets.googleapis.com/v4/spreadsheets/"+mySpreadsheetid+"/values/"+mySpreadsheetname+"!"+String(cell)+"?alt=json&key="+apikey+" HTTP/1.1");\n'+
			'    client_tcp.println("Host: " + String(myDomain));\n'+
			'    client_tcp.println("Content-Type: application/json");\n'+
			'    client_tcp.println();\n'+
			'    int waitTime = 10000;\n'+
			'    long startTime = millis();\n'+
			'    boolean state = false;\n'+
			'    boolean start = false;\n'+			
			'    \n'+
			'    while ((startTime + waitTime) > millis())\n'+
			'    {\n'+
			'      Serial.print(".");\n'+
			'      delay(100);\n'+
			'      while (client_tcp.available())\n'+
			'      {\n'+
			'          char c = client_tcp.read();\n'+
			'          if (String(c)=="{") start = true;\n'+			
			'          if (state==true&&start==true&&c!=\'\\n\'&&c!=\'\\r\') getBody += String(c);\n'+ 
			'          if (String(c)=="}") start = false;\n'+			
			'          if (c == \'\\n\')\n'+
			'          {\n'+
			'            if (getAll.length()==0) state=true;\n'+
			'            getAll = "";\n'+
			'          }\n'+
			'          else if (c != \'\\r\')\n'+
			'            getAll += String(c);\n'+
			'          startTime = millis();\n'+
			'       }\n'+
			'       if (getBody.length()>0) break;\n'+
			'    }\n'+	
			'    Serial.println("");\n'+
			'    if (getBody.indexOf("error")!=-1||getBody=="")\n'+
			'    	return "{\\"values\\":[]}";\n'+
			'    return getBody;\n'+
			'  }\n'+
			'  else {\n'+
			'    Serial.println("Connected to " + String(myDomain) + " failed.");\n'+
			'    return "{\\"values\\":[]}";\n'+
			'  }\n'+
			'}\n';
			
	var code = 'spreadsheetData = Spreadsheet_get(String(' + cell + '), String(' + spreadsheetid + '), String(' + spreadsheetname + '), String(' + apikey + '));\n';
	return code;
};

Blockly.Arduino['controls_spreadsheet_getcell'] = function(block){	
	var row = Blockly.Arduino.valueToCode(block,"row",Blockly.Arduino.ORDER_NONE);
	var col = Blockly.Arduino.valueToCode(block,"col",Blockly.Arduino.ORDER_NONE);		

	Blockly.Arduino.definitions_.Spreadsheet_getcell = '\n'+
			'String Spreadsheet_getcell(int row, int col) {\n'+
			'    if (spreadsheetData!="") {\n'+
			'    	JsonObject obj;\n'+
			'    	DynamicJsonDocument doc(1024);\n'+
			'    	deserializeJson(doc, spreadsheetData);\n'+
			'    	obj = doc.as<JsonObject>();\n'+
			'		if ((obj["values"].size()<row+1)||(obj["values"][0].size()<col+1))\n'+ 
			'			return "";\n'+			
			'    	return obj["values"][row][col].as<String>();\n'+
			'    }\n'+ 
			'    else\n'+
			'		return "";\n'+
			'}\n';
			
	var code = 'Spreadsheet_getcell((' + row + '-1), (' + col + '-1))';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['controls_spreadsheet_getcell_number'] = function(block){	
	var record = block.getFieldValue('record');	
	
	Blockly.Arduino.definitions_.Spreadsheet_getcell_number = '\n'+
			'int Spreadsheet_getcell_number(String option) {\n'+
			'    if (spreadsheetData!="") {\n'+
			'    	JsonObject obj;\n'+
			'    	DynamicJsonDocument doc(1024);\n'+
			'    	deserializeJson(doc, spreadsheetData);\n'+
			'    	obj = doc.as<JsonObject>();\n'+
			'		if (option=="row")\n'+
			'			return obj["values"].size();\n'+
			'		else if (option=="col")\n'+ 
			'			return obj["values"][0].size();\n'+			
			'    }\n'+ 			
			'    return 0;\n'+			
			'}\n';
			
	var code = 'Spreadsheet_getcell_number("'+record+'")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['controls_spreadsheet_query'] = function(block){
	var spreadsheetid = Blockly.Arduino.valueToCode(block,"spreadsheetid",Blockly.Arduino.ORDER_NONE);
	var spreadsheetname = Blockly.Arduino.valueToCode(block,"spreadsheetname",Blockly.Arduino.ORDER_NONE);
	
	var option = block.getFieldValue('option');		
	var sql = Blockly.Arduino.valueToCode(block,"sql",Blockly.Arduino.ORDER_NONE);
	
	var cols = Blockly.Arduino.valueToCode(block,"cols",Blockly.Arduino.ORDER_NONE);
	var rows = Blockly.Arduino.valueToCode(block,"rows",Blockly.Arduino.ORDER_NONE);
	var cole = Blockly.Arduino.valueToCode(block,"cole",Blockly.Arduino.ORDER_NONE);
	var rowe = Blockly.Arduino.valueToCode(block,"rowe",Blockly.Arduino.ORDER_NONE);
	
	Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';	
	Blockly.Arduino.definitions_['ArduinoJson'] = '#include <ArduinoJson.h>';
	Blockly.Arduino.definitions_['spreadsheetQueryData'] = 'String spreadsheetQueryData = "{\\"values\\":[]}";';		

	Blockly.Arduino.definitions_.Spreadsheet_get = '\n'+
			'String Spreadsheet_query(String sql, String mySpreadsheetid, String mySpreadsheetname) {\n'+
			'  sql = urlencode(sql);\n'+			
			'  mySpreadsheetname = urlencode(mySpreadsheetname);\n'+				
			'  const char* myDomain = "docs.google.com";\n'+
			'  String getAll="", getBody = "", getData = "";\n'+
			'  Serial.println("Connect to " + String(myDomain));\n'+
			'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.Spreadsheet_get += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.Spreadsheet_get +='  if (client_tcp.connect(myDomain, 443)) {\n'+
			'    Serial.println("Connection successful");\n'+
			'    String url = "https://docs.google.com/spreadsheets/d/"+mySpreadsheetid+"/gviz/tq?tqx=out:json&sheet="+mySpreadsheetname+"&tq="+sql;\n'+	
			'    client_tcp.println("GET "+url+" HTTP/1.1");\n'+
			'    client_tcp.println("Host: " + String(myDomain));\n'+
			'    client_tcp.println("Content-Type: application/json");\n'+
			'    client_tcp.println();\n'+
			'    int waitTime = 10000;\n'+
			'    long startTime = millis();\n'+
			'    boolean state = false;\n'+	
			'    boolean start = false;\n'+				
			'    \n'+
			'    while ((startTime + waitTime) > millis())\n'+
			'    {\n'+
			'      Serial.print(".");\n'+
			'      delay(100);\n'+
			'      while (client_tcp.available())\n'+
			'      {\n'+
			'          char c = client_tcp.read();\n'+
			'          if (getBody.indexOf("\\"rows\\":[")!=-1) start = true;\n'+	
			'          if (getData.indexOf("],")!=-1) start = false;\n'+				
			'          if (state==true&&c!=\'\\n\'&&c!=\'\\r\') getBody += String(c);\n'+ 
			'          if (start==true&&c!=\'\\n\'&&c!=\'\\r\') getData += String(c);\n'+ 
			'          if (c == \'\\n\')\n'+
			'          {\n'+
			'            if (getAll.length()==0) state=true;\n'+
			'            getAll = "";\n'+
			'          }\n'+
			'          else if (c != \'\\r\')\n'+
			'            getAll += String(c);\n'+
			'          startTime = millis();\n'+
			'       }\n'+
			'       if (getBody.length()>0) break;\n'+
			'    }\n'+
			'    Serial.println("");\n'+	
			'    if (getBody.indexOf("error")!=-1||getData=="")\n'+
			'    	return "{\\"values\\":[]}";\n'+			
			'    getData = "{\\"values\\":[" + getData.substring(0, getData.length()-2) + "]}";\n'+			
			'    return getData;\n'+
			'  }\n'+
			'  else {\n'+
			'    Serial.println("Connected to " + String(myDomain) + " failed.");\n'+
			'    return "{\\"values\\":[]}";\n'+
			'  }\n'+
			'}\n';
			
	Blockly.Arduino.definitions_.urlencode = '\n'+
			'String urlencode(String str)\n'+
			'{\n'+
			'  String encodedString="";\n'+
			'  char c;\n'+
			'  char code0;\n'+
			'  char code1;\n'+
			'  char code2;\n'+
			'  for (int i =0; i < str.length(); i++){\n'+
			'    c=str.charAt(i);\n'+
			'    if (c == \' \'){\n'+
			'      encodedString+= \'+\';\n'+
			'    } else if (isalnum(c)){\n'+
			'      encodedString+=c;\n'+
			'    } else{\n'+
			'      code1=(c & 0xf)+\'0\';\n'+
			'      if ((c & 0xf) >9){\n'+
			'          code1=(c & 0xf) - 10 + \'A\';\n'+
			'      }\n'+
			'      c=(c>>4)&0xf;\n'+
			'      code0=c+\'0\';\n'+
			'      if (c > 9){\n'+
			'          code0=c - 10 + \'A\';\n'+
			'      }\n'+
			'      code2=\'\\0\';\n'+
			'      encodedString+=\'%\';\n'+
			'      encodedString+=code0;\n'+
			'      encodedString+=code1;\n'+
			'      \/\/encodedString+=code2;\n'+
			'    }\n'+
			'    yield();\n'+
			'  }\n'+
			'  return encodedString;\n'+
			'}\n';			
			
	if (option=="sql")
		var code = 'spreadsheetQueryData = Spreadsheet_query(String(' + sql + '), String(' + spreadsheetid + '), String(' + spreadsheetname + '));\n';
	else if (option=="range") {
		Blockly.Arduino.definitions_.colsToList = '\n'+
				'String colsToList(int cols, int cole)\n'+
				'{\n'+
				'  String colList = "";\n'+
				'  for (int i=cols;i<=cole;i++){\n'+
				'    colList += String(char(i-1+65))+",";\n'+
				'  }\n'+
				'  colList = colList.substring(0, colList.length()-1);\n'+
				'  return colList;\n'+
				'}\n';
			
		var code = 'spreadsheetQueryData = Spreadsheet_query("select " + colsToList(' + cols + ', ' + cole + ') + " limit " + String(' + rowe + '-' + rows + '+1)+ " offset "+ String('+rows+'-1), String(' + spreadsheetid + '), String(' + spreadsheetname + '));\n';
	}
	return code;
};

Blockly.Arduino['controls_spreadsheet_getcell_query'] = function(block){	
	var row = Blockly.Arduino.valueToCode(block,"row",Blockly.Arduino.ORDER_NONE);
	var col = Blockly.Arduino.valueToCode(block,"col",Blockly.Arduino.ORDER_NONE);		

	Blockly.Arduino.definitions_.Spreadsheet_getcell = '\n'+
			'String Spreadsheet_getcell_query(int row, int col) {\n'+
			'    if (spreadsheetQueryData!="") {\n'+
			'    	JsonObject obj;\n'+
			'    	DynamicJsonDocument doc(1024);\n'+
			'    	deserializeJson(doc, spreadsheetQueryData);\n'+
			'    	obj = doc.as<JsonObject>();\n'+
			'		if ((obj["values"].size()<row+1)||(obj["values"][0]["c"].size()<col+1))\n'+ 
			'			return "";\n'+			
			'    	return obj["values"][row]["c"][col]["v"].as<String>();\n'+
			'    }\n'+ 
			'    else\n'+
			'		return "";\n'+
			'}\n';
			
	var code = 'Spreadsheet_getcell_query((' + row + '-1), (' + col + '-1))';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['controls_spreadsheet_getcell_query_number'] = function(block){	
	var record = block.getFieldValue('record');		

	Blockly.Arduino.definitions_.Spreadsheet_getcell_query_number = '\n'+
			'int Spreadsheet_getcell_query_number(String option) {\n'+
			'    if (spreadsheetQueryData!="") {\n'+
			'    	JsonObject obj;\n'+
			'    	DynamicJsonDocument doc(1024);\n'+
			'    	deserializeJson(doc, spreadsheetQueryData);\n'+
			'    	obj = doc.as<JsonObject>();\n'+
			'		if (option=="row")\n'+
			'			return obj["values"].size();\n'+
			'		else if (option=="col")\n'+ 
			'			return obj["values"][0]["c"].size();\n'+
			'    }\n'+
			'    return 0;\n'+			
			'}\n';
			
	var code = 'Spreadsheet_getcell_query_number("'+record+'")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['hands_esp32cam'] = function(block) {
	var javascript_initial = Blockly.Arduino.statementToCode(block, 'javascript_initial');
	var javascript_recognition = Blockly.Arduino.statementToCode(block, 'javascript_recognition');
		
	var code = "\"<!DOCTYPE html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js'></script><script src='https:\/\/fustyles.github.io/webduino/hands_20220614/hands.js'></script><script src='https:\/\/fustyles.github.io/webduino/hands_20220614/hands_esp32cam.js'></script><script src='https:\/\/fustyles.github.io/webduino/GameElements_20190131/gameelements.js'></script><script src='https:\/\/cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js' crossorigin='anonymous'></script></head><body><script>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{hands_video('block', '1', '1', '1');"+javascript_initial.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"/var ")+" recognitionFinish = async function() {"+javascript_recognition.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"var ")+"}};main();</script></body></html>\"";

  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['hands_video'] = function(block) { 
  var value_video_ = block.getFieldValue('video_');
  var value_hand_ = block.getFieldValue('hand_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'hands_video("' + value_video_ + '","' + value_hand_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.Arduino['hands_position'] = function(block) {
  var value_hand_ = Blockly.Arduino.valueToCode(block, 'hand_', Blockly.Arduino.ORDER_ATOMIC);	
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'hands_position(' + value_hand_ + ',"' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['hands_distance'] = function (block) {
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1_ = Blockly.Arduino.valueToCode(block, 'x1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1_ = Blockly.Arduino.valueToCode(block, 'y1_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'hands_distance(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['hands_angle'] = function (block) {
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1_ = Blockly.Arduino.valueToCode(block, 'x1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1_ = Blockly.Arduino.valueToCode(block, 'y1_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'hands_angle(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['hands_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'hands_state(' + value_state_ + ');\n';
  return code;
};

Blockly.Arduino['hands_video_position'] = function(block) { 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'hands_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.Arduino['hands_canvas_get'] = function(block) { 
  var code = '"canvasElement"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['hands_number'] = function(block) {
  var code = 'hands_number()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['hands_part_angle'] = function (block) {
  var value_hand = Blockly.Arduino.valueToCode(block, 'hand_', Blockly.Arduino.ORDER_ATOMIC);	
  var value_part1 = block.getFieldValue('part1_');
  var value_part2 = block.getFieldValue('part2_'); 
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.Arduino.valueToCode(block, 'adjust_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'hands_part_angle('+ value_hand + ', Number(' + value_part1 + '), Number(' + value_part2 + '),"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.Arduino.ORDER_NONE];  
};

Blockly.Arduino['hands_pause'] = function(block) { 
  var value_time = Blockly.Arduino.valueToCode(block, 'time_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'hands_state(0);setTimeout(function(){hands_state(1);}, '+value_time+');\n';
  return code;
};

Blockly.Arduino['hands_clear'] = function(block) { 
  var code = 'hands_clear();\n';
  return code;
};

Blockly.Arduino['hands_recognitied'] = function(block) { 
  var statements_do = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'hands_recognitionFinish = async function() {\nhands_state(0);\n' + statements_do + '\nhands_state(1);};\n';
  return code;
};



Blockly.Arduino['fu_servo'] = function(block) {	
  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_servo'] = 'include <Servo.h>\nServo myServo;';
  Blockly.Arduino.setups_['setup_servo_'+ value_pin] = 'myServo.attach('+value_pin+');'; 

  var code = 'myServo.write('+ value_angle +');\n' ;
  return code;
};

Blockly.Arduino['esp32_pixelbit_stream_myfirmata'] = function(block) {
	
  var mainpage = Blockly.Arduino.valueToCode(block, 'mainpage', Blockly.Arduino.ORDER_ATOMIC);
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var ssid_ap = Blockly.Arduino.valueToCode(block, 'ssid_ap', Blockly.Arduino.ORDER_ATOMIC);
  var pass_ap = Blockly.Arduino.valueToCode(block, 'password_ap', Blockly.Arduino.ORDER_ATOMIC);
  var baudrate = block.getFieldValue('baudrate');  
  var framesize = block.getFieldValue('framesize');
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');
	
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>\n';
  Blockly.Arduino.definitions_.define_esp_http_server_h_include ='#include <esp32-hal-ledc.h>\n#include "img_converters.h"\n#include "esp_camera.h"\n#include "esp_http_server.h"\n#include <tca5405.h>\nTCA5405 tca5405;\n#include "soc/soc.h"\n#include "soc/rtc_cntl_reg.h"\nchar _lwifi_ssid[] = '+ssid+';\nchar _lwifi_pass[] = '+pass+';\nconst char* apssid = '+ssid_ap+';\nconst char* appassword = '+pass_ap+';\nString Feedback="",Command="",cmd="",p1="",p2="",p3="",p4="",p5="",p6="",p7="",p8="",p9="";\nbyte receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;\ntypedef struct {httpd_req_t *req;size_t len;} jpg_chunking_t;\n#define PART_BOUNDARY "123456789000000000000987654321"\nstatic const char* _STREAM_CONTENT_TYPE = "multipart/x-mixed-replace;boundary=" PART_BOUNDARY;\nstatic const char* _STREAM_BOUNDARY = "\\r\\n--" PART_BOUNDARY "\\r\\n";\nstatic const char* _STREAM_PART = "Content-Type: image/jpeg\\r\\nContent-Length: %u\\r\\n\\r\\n";\nhttpd_handle_t stream_httpd = NULL;\nhttpd_handle_t camera_httpd = NULL;\n';
  
  if (selectBoardType()=="esp32")
	Blockly.Arduino.definitions_.define_base64 ='#include "Base64_tool.h"';
  else
	Blockly.Arduino.definitions_.define_base64 ='#include "Base64.h"';

  Blockly.Arduino.definitions_.define_esp32_cam_gpio_include ='\n'+
																'#define PWDN_GPIO_NUM     -1\n'+
																'#define RESET_GPIO_NUM    -1\n'+
																'#define XCLK_GPIO_NUM      0\n'+
																'#define SIOD_GPIO_NUM     22\n'+
																'#define SIOC_GPIO_NUM     19\n'+
																'#define Y9_GPIO_NUM       25\n'+
																'#define Y8_GPIO_NUM       33\n'+
																'#define Y7_GPIO_NUM       32\n'+
																'#define Y6_GPIO_NUM       34\n'+
																'#define Y5_GPIO_NUM       38\n'+
																'#define Y4_GPIO_NUM       36\n'+
																'#define Y3_GPIO_NUM       37\n'+
																'#define Y2_GPIO_NUM       39\n'+
																'#define VSYNC_GPIO_NUM    27\n'+
																'#define HREF_GPIO_NUM     26\n'+
																'#define PCLK_GPIO_NUM     35\n';



  Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void executeCommand() {\n'+
			'  if (cmd=="ip") {\n'+
			'    Feedback="AP IP: "+WiFi.softAPIP().toString();\n'+
			'    Feedback+="<br>";\n'+
			'    Feedback+="STA IP: "+WiFi.localIP().toString();\n'+
			'  } else if (cmd=="mac") {\n'+
			'    Feedback="STA MAC: "+WiFi.macAddress();\n'+
			'  } else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  } else if (cmd=="digitalwrite") {\n'+
			'    ledcDetachPin(p1.toInt());\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  } else if (cmd=="digitalread") {\n'+
			'    Feedback=String(digitalRead(p1.toInt()));\n'+
			'  } else if (cmd=="analogwrite") {\n'+
			'    if (p1=="4") {\n'+
			'      ledcAttachPin(4, 4);\n'+
			'      ledcSetup(4, 5000, 8);\n'+
			'      ledcWrite(4,p2.toInt());\n'+
			'    } else {\n'+
			'      ledcAttachPin(p1.toInt(), 9);\n'+
			'      ledcSetup(9, 5000, 8);\n'+
			'      ledcWrite(9,p2.toInt());\n'+
			'    }\n'+
			'  } else if (cmd=="analogread") {\n'+
			'    Feedback=String(analogRead(p1.toInt()));\n'+
			'  } else if (cmd=="touchread") {\n'+
			'    Feedback=String(touchRead(p1.toInt()));\n'+
			'  } else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  } else if (cmd=="flash") {\n'+
			'    ledcAttachPin(4, 4);\n'+
			'    ledcSetup(4, 5000, 8);\n'+
			'    int val = p1.toInt();\n'+
			'    ledcWrite(4,val);\n'+
			'  } else if(cmd=="servo") {\n'+
			'    ledcAttachPin(p1.toInt(), p3.toInt());\n'+
			'    ledcSetup(p3.toInt(), 50, 16);\n'+
			'    int val = 7864-p2.toInt()*34.59;\n'+
			'    if (val > 7864)\n'+
			'       val = 7864;\n'+
			'    else if (val < 1638)\n'+
			'      val = 1638;\n'+
			'    ledcWrite(p3.toInt(), val);\n'+
			'  } else if (cmd=="relay") {\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  } else if (cmd=="buzzer") { \n'+
			'    pinMode(p1.toInt(),OUTPUT);\n'+
			'    if (p4=="") p4="9";\n'+
			'    ledcSetup(p4.toInt(), 2000, 8);\n'+
			'    ledcAttachPin(p1.toInt(), p4.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), p2.toInt());\n'+
			'    delay(p3.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), 0);\n'+
			'  } else if (cmd=="resetwifi") {\n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(p1.c_str(), p2.c_str());\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(p1);\n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      Serial.println("");\n'+
			'      Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'      Feedback="STAIP: "+WiFi.localIP().toString();\n'+
			'      if (WiFi.status() == WL_CONNECTED) {\n'+
			'        WiFi.softAP((WiFi.localIP().toString()+"_"+p1).c_str(), p2.c_str());\n'+
 			'        break;\n'+
			'      }\n'+
			'    }\n'+
			'  } else if (cmd=="print") {\n'+
			'    Serial.print(p1);\n'+
			'  } else if (cmd=="println") {\n'+
			'    Serial.println(p1);\n'+
			'  } else if (cmd=="delay") {\n'+
			'    delay(p1.toInt());\n'+				
			'  } else if (cmd=="framesize") {\n'+
			'    int val = p1.toInt();\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_framesize(s, (framesize_t)val);\n'+
			'  } else if (cmd=="quality") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_quality(s, p1.toInt());\n'+
			'  } else if (cmd=="contrast") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_contrast(s, p1.toInt());\n'+
			'  } else if (cmd=="brightness") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_brightness(s, p1.toInt());\n'+
			'  } else if (cmd=="saturation") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_saturation(s, p1.toInt());\n'+ 
			'  } else if (cmd=="special_effect") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_special_effect(s, p1.toInt());\n'+
			'  } else if (cmd=="hmirror") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_hmirror(s, p1.toInt());\n'+
			'  } else if (cmd=="vflip") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_vflip(s, p1.toInt());\n'+
			'  } else {\n  '+ 
			statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';
	
	Blockly.Arduino.setups_.setup_serial="WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);\n  Serial.begin("+baudrate+");\n  delay(10);";
	Blockly.Arduino.setups_.setup_cam_initial=''+
			'  tca5405.init(21);\n'+
			'  tca5405.set_gpo(PIXELBIT_CAMERA_POWER, 0);\n'+
			'  tca5405.transmit();\n'+
			'  delay(100);\n'+
			'  tca5405.set_gpo(PIXELBIT_CAMERA_POWER, 1);\n'+
			'  tca5405.transmit();\n'+
			'  delay(100);\n\n'+	
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
			'  pinMode(25,INPUT_PULLUP);\n'+
			'  pinMode(26,INPUT_PULLUP);\n'+
			'  pinMode(27,INPUT_PULLUP);\n'+
			'  pinMode(32,INPUT_PULLUP);\n'+
			'  pinMode(33,INPUT_PULLUP);\n'+
			'  esp_err_t err = esp_camera_init(&config);\n'+
			'  if (err != ESP_OK) {\n'+
			'    Serial.printf("Camera init failed with error 0x%x", err);\n'+
			'    delay(1000);\n'+
			'    ESP.restart();\n'+
			'  }\n'+
			'  sensor_t * s = esp_camera_sensor_get();\n'+
			'  if (s->id.PID == OV3660_PID) {\n'+
			'    s->set_vflip(s, 1);\n'+
			'    s->set_brightness(s, 1);\n'+
			'    s->set_saturation(s, -2);\n'+
			'  }\n'+			
			'  s->set_framesize(s, FRAMESIZE_'+framesize+');\n'+
			'  WiFi.mode(WIFI_AP_STA);\n'+
			'  \n'+
			'  for (int i=0;i<2;i++) {\n'+
			'    WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+
			'    \n'+
			'    delay(1000);\n'+
			'    Serial.println("");\n'+
			'    Serial.print("Connecting to ");\n'+
			'    Serial.println(_lwifi_ssid);\n'+
			'    \n'+
			'    long int StartTime=millis();\n'+
			'    while (WiFi.status() != WL_CONNECTED) {\n'+
			'        delay(500);\n'+
			'        if ((StartTime+5000) < millis()) break;\n'+
			'    }\n'+
			'    \n'+
			'    if (WiFi.status() == WL_CONNECTED) {\n'+
			'      WiFi.softAP((WiFi.localIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+      
			'      Serial.println("");\n'+
			'      Serial.println("STAIP address: ");\n'+
			'      Serial.println(WiFi.localIP());\n'+
			'      Serial.println("");\n'+
			'      break;\n'+
			'    }\n'+
			'  }\n'+
			'  \n'+
			'  if (WiFi.status() != WL_CONNECTED) {\n'+
			'    WiFi.softAP((WiFi.softAPIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+
			'  }\n'+
			'  \n'+
			'  Serial.println("");\n'+
			'  Serial.println("APIP address: ");\n'+
			'  Serial.println(WiFi.softAPIP());\n'+
			'  \n'+
			'  startCameraServer();\n';	
	

	Blockly.Arduino.definitions_.getCommand = ''+
			'  void getCommand(char c) {\n'+
			'    if (c==\'?\') receiveState=1;\n'+
			'    if ((c==\' \')||(c==\'\\r\')||(c==\'\\n\')) receiveState=0;\n'+
			'    \n'+
			'    if (receiveState==1) {\n'+
			'      Command=Command+String(c);\n'+
			'      \n'+
			'      if (c==\'=\') cmdState=0;\n'+
			'      if (c==\';\') pState++;\n'+
			'      \n'+
			'      if ((cmdState==1)&&((c!=\'?\')||(questionState==1))) cmd=cmd+String(c);\n'+
			'      if ((cmdState==0)&&(pState==1)&&((c!=\'=\')||(equalState==1))) p1=p1+String(c);\n'+
			'      if ((cmdState==0)&&(pState==2)&&(c!=\';\')) p2=p2+String(c);\n'+
			'      if ((cmdState==0)&&(pState==3)&&(c!=\';\')) p3=p3+String(c);\n'+
			'      if ((cmdState==0)&&(pState==4)&&(c!=\';\')) p4=p4+String(c);\n'+
			'      if ((cmdState==0)&&(pState==5)&&(c!=\';\')) p5=p5+String(c);\n'+
			'      if ((cmdState==0)&&(pState==6)&&(c!=\';\')) p6=p6+String(c);\n'+
			'      if ((cmdState==0)&&(pState==7)&&(c!=\';\')) p7=p7+String(c);\n'+
			'      if ((cmdState==0)&&(pState==8)&&(c!=\';\')) p8=p8+String(c);\n'+
			'      if ((cmdState==0)&&(pState>=9)&&((c!=\';\')||(semicolonState==1))) p9=p9+String(c);\n'+
			'      \n'+
			'      if (c==\'?\') questionState=1;\n'+
			'      if (c==\'=\') equalState=1;\n'+
			'      if ((pState>=9)&&(c==\';\')) semicolonState=1;\n'+
			'    }\n'+
			'  }\n';
	Blockly.Arduino.definitions_.stream_function = ''+
			'  void servo_rotate(int channel, int angle) {\n'+
			'      int val = 7864-angle*34.59;\n'+ 
			'      if (val > 7864)\n'+
			'         val = 7864;\n'+
			'      else if (val < 1638)\n'+
			'        val = 1638;\n'+
			'      ledcWrite(channel, val);\n'+
			'  }\n'+
			'  static size_t jpg_encode_stream(void * arg, size_t index, const void* data, size_t len){\n'+
			'      jpg_chunking_t *j = (jpg_chunking_t *)arg;\n'+
			'      if(!index){\n'+
			'          j->len = 0;\n'+
			'      }\n'+
			'      if(httpd_resp_send_chunk(j->req, (const char *)data, len) != ESP_OK){\n'+
			'          return 0;\n'+
			'      }\n'+
			'      j->len += len;\n'+
			'      return len;\n'+
			'  }\n'+
			'  static esp_err_t capture_handler(httpd_req_t *req){\n'+
			'      camera_fb_t * fb = NULL;\n'+
			'      esp_err_t res = ESP_OK;\n'+
			'      fb = esp_camera_fb_get();\n'+
			'      if (!fb) {\n'+
			'          Serial.println("Camera capture failed");\n'+
			'          httpd_resp_send_500(req);\n'+
			'          return ESP_FAIL;\n'+
			'      }\n'+
			'      httpd_resp_set_type(req, "image/jpeg");\n'+
			'      httpd_resp_set_hdr(req, "Content-Disposition", "inline; filename=capture.jpg");\n'+
			'      httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");\n'+
			'      size_t fb_len = 0;\n'+
			'      if(fb->format == PIXFORMAT_JPEG){\n'+
			'          fb_len = fb->len;\n'+
			'          res = httpd_resp_send(req, (const char *)fb->buf, fb->len);\n'+
			'      } else {\n'+
			'          jpg_chunking_t jchunk = {req, 0};\n'+
			'          res = frame2jpg_cb(fb, 80, jpg_encode_stream, &jchunk)?ESP_OK:ESP_FAIL;\n'+
			'          httpd_resp_send_chunk(req, NULL, 0);\n'+
			'          fb_len = jchunk.len;\n'+
			'      }\n'+
			'      esp_camera_fb_return(fb);\n'+
			'      return res;\n'+
			'  }\n'+
			'  static esp_err_t stream_handler(httpd_req_t *req){\n'+
			'      camera_fb_t * fb = NULL;\n'+
			'      esp_err_t res = ESP_OK;\n'+
			'      size_t _jpg_buf_len = 0;\n'+
			'      uint8_t * _jpg_buf = NULL;\n'+
			'      char * part_buf[128];\n'+
			'      res = httpd_resp_set_type(req, _STREAM_CONTENT_TYPE);\n'+
			'      if(res != ESP_OK){\n'+
			'          return res;\n'+
			'      }\n'+
			'      httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");\n'+
			'      httpd_resp_set_hdr(req, "X-Framerate", "60");\n'+
			'      while(true){\n'+
			'          fb = esp_camera_fb_get();\n'+
			'          if (!fb) {\n'+
			'              Serial.println("Camera capture failed");\n'+
			'              res = ESP_FAIL;\n'+
			'          } else {\n'+
			'            if(fb->format != PIXFORMAT_JPEG){\n'+
			'                bool jpeg_converted = frame2jpg(fb, 80, &_jpg_buf, &_jpg_buf_len);\n'+
			'                esp_camera_fb_return(fb);\n'+
			'                fb = NULL;\n'+
			'                if(!jpeg_converted){\n'+
			'                    Serial.println("JPEG compression failed");\n'+
			'                    res = ESP_FAIL;\n'+
			'                }\n'+
			'            } else {\n'+
			'                _jpg_buf_len = fb->len;\n'+
			'                _jpg_buf = fb->buf;\n'+
			'            }\n'+
			'          }\n'+
			'          if(res == ESP_OK){\n'+
			'              res = httpd_resp_send_chunk(req, (const char *)_jpg_buf, _jpg_buf_len);\n'+
			'          }\n'+
			'          if(res == ESP_OK){\n'+
			'              res = httpd_resp_send_chunk(req, _STREAM_BOUNDARY, strlen(_STREAM_BOUNDARY));\n'+
			'          }\n'+
			'          if(res == ESP_OK){\n'+
			'              size_t hlen = snprintf((char *)part_buf, 128, _STREAM_PART, _jpg_buf_len);\n'+
			'              res = httpd_resp_send_chunk(req, (const char *)part_buf, hlen);\n'+
			'          }\n'+
			'          if(fb){\n'+
			'              esp_camera_fb_return(fb);\n'+
			'              fb = NULL;\n'+
			'              _jpg_buf = NULL;\n'+
			'          } else if(_jpg_buf){\n'+
			'              free(_jpg_buf);\n'+
			'              _jpg_buf = NULL;\n'+
			'          }\n'+
			'          if(res != ESP_OK){\n'+
			'              break;\n'+
			'          }\n'+
			'      }\n'+
			'      return res;\n'+
			'  }\n'+
			'  static esp_err_t cmd_handler(httpd_req_t *req){\n'+
			'      char*  buf;\n'+
			'      size_t buf_len;\n'+
			'      char variable[128] = {0,};\n'+
			'      char value[128] = {0,};\n'+
			'      String myCmd = "";\n'+
			'      buf_len = httpd_req_get_url_query_len(req) + 1;\n'+
			'      if (buf_len > 1) {\n'+
			'          buf = (char*)malloc(buf_len);\n'+
			'          if(!buf){\n'+
			'              httpd_resp_send_500(req);\n'+
			'              return ESP_FAIL;\n'+
			'          }\n'+
			'          if (httpd_req_get_url_query_str(req, buf, buf_len) == ESP_OK) {\n'+
			'            if (httpd_query_key_value(buf, "var", variable, sizeof(variable)) == ESP_OK&&httpd_query_key_value(buf, "val", value, sizeof(value)) == ESP_OK) {\n'+
			'            } \n'+
			'            else {\n'+
			'              myCmd = String(buf);\n'+
			'            }\n'+
			'          }\n'+
			'      } else {\n'+
			'          httpd_resp_send_404(req);\n'+
			'          return ESP_FAIL;\n'+
			'      }\n'+			
			'      Feedback="";Command="";cmd="";p1="";p2="";p3="";p4="";p5="";p6="";p7="";p8="";p9="";\n'+
			'      receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;\n'+
			'      if (myCmd.length()>0) {\n'+
			'        myCmd = "?"+myCmd;\n'+
			'        for (int i=0;i<myCmd.length();i++) {\n'+
			'          getCommand(char(myCmd.charAt(i)));\n'+
			'        }\n'+
			'      }\n'+
			'      if (cmd.length()>0) {\n'+
			'        if (cmd=="ip") {\n'+
			'          Feedback="AP IP: "+WiFi.softAPIP().toString();\n'+
			'          Feedback+="<br>";\n'+
			'          Feedback+="STA IP: "+WiFi.localIP().toString();\n'+
			'        }\n'+
			'        else if (cmd=="mac") {\n'+
			'          Feedback="STA MAC: "+WiFi.macAddress();\n'+
			'        }\n'+
			'        else if (cmd=="restart") {\n'+
			'          ESP.restart();\n'+
			'        }\n'+
			'        else if (cmd=="digitalwrite") {\n'+
			'          ledcDetachPin(p1.toInt());\n'+
			'          pinMode(p1.toInt(), OUTPUT);\n'+
			'          digitalWrite(p1.toInt(), p2.toInt());\n'+
			'        }\n'+
			'        else if (cmd=="digitalread") {\n'+
			'          Feedback=String(digitalRead(p1.toInt()));\n'+
			'        }\n'+
			'        else if (cmd=="analogwrite") {\n'+
			'          if (p1=="4") {\n'+
			'            ledcAttachPin(4, 4);\n'+
			'            ledcSetup(4, 5000, 8);\n'+
			'            ledcWrite(4,p2.toInt());\n'+
			'          }\n'+
			'          else {\n'+
			'            ledcAttachPin(p1.toInt(), 9);\n'+
			'            ledcSetup(9, 5000, 8);\n'+
			'            ledcWrite(9,p2.toInt());\n'+
			'          }\n'+
			'        }\n'+
			'        else if (cmd=="analogread") {\n'+
			'          Feedback=String(analogRead(p1.toInt()));\n'+
			'        }\n'+
			'        else if (cmd=="touchread") {\n'+
			'          Feedback=String(touchRead(p1.toInt()));\n'+
			'        }\n'+
			'        else if (cmd=="resetwifi") {\n'+
			'          for (int i=0;i<2;i++) {\n'+
			'            WiFi.begin(p1.c_str(), p2.c_str());\n'+
			'            Serial.print("Connecting to ");\n'+
			'            Serial.println(p1);\n'+
			'            long int StartTime=millis();\n'+
			'            while (WiFi.status() != WL_CONNECTED) {\n'+
			'                delay(500);\n'+
			'                if ((StartTime+5000) < millis()) break;\n'+
			'            }\n'+
			'            Serial.println("");\n'+
			'            Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'            Feedback=WiFi.localIP().toString();\n'+
			'            if (WiFi.status() == WL_CONNECTED) {\n'+
			'              WiFi.softAP((WiFi.localIP().toString()+"_"+p1).c_str(), p2.c_str());\n'+
			'              break;\n'+
			'            }\n'+
			'          }\n'+
			'        }\n'+
			'        else if (cmd=="flash") {\n'+
			'          ledcAttachPin(4, 4);\n'+
			'          ledcSetup(4, 5000, 8);\n'+  
			'          int val = p1.toInt();\n'+
			'          ledcWrite(4,val);\n'+
			' 		 } else if (cmd=="print") {\n'+
			' 		   Serial.print(p1);\n'+
			' 		 } else if (cmd=="println") {\n'+
			' 		   Serial.println(p1);\n'+
			' 		 } else if (cmd=="delay") {\n'+
			' 		   delay(p1.toInt());\n'+				
			' 		 } else if (cmd=="framesize") {\n'+
			' 	 	   int val = p1.toInt();\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			' 	       s->set_framesize(s, (framesize_t)val);\n'+
			' 	   	 } else if (cmd=="quality") {\n'+
			' 	 	   sensor_t * s = esp_camera_sensor_get();\n'+
			' 	 	   s->set_quality(s, p1.toInt());\n'+
			' 		 } else if (cmd=="contrast") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			' 	 	   s->set_contrast(s, p1.toInt());\n'+
			' 		 } else if (cmd=="brightness") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			' 		   s->set_brightness(s, p1.toInt());\n'+
			' 		 } else if (cmd=="saturation") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			'		   s->set_saturation(s, p1.toInt());\n'+ 
			'		 } else if (cmd=="special_effect") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			' 		   s->set_special_effect(s, p1.toInt());\n'+
			' 		 } else if (cmd=="hmirror") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			'  		   s->set_hmirror(s, p1.toInt());\n'+
			' 		 } else if (cmd=="vflip") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			' 		   s->set_vflip(s, p1.toInt());\n'+
			'        } else if (cmd=="servo") {\n'+
			'            ledcAttachPin(p1.toInt(), p3.toInt());\n'+
			'            ledcSetup(p3.toInt(), 50, 16);\n'+
			'            servo_rotate(p3.toInt(), p2.toInt());\n'+
			'            delay(100);\n'+
		    ' 		   } else {\n  '+ 
						 statements_executecommand.replace(/\n/g,"\n  ")+
		    '		   }\n'+ 
			'          const char *resp = Feedback.c_str();\n'+
			'          httpd_resp_set_type(req, "text/html");\n'+
			'          httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");\n'+
			'          return httpd_resp_send(req, resp, strlen(resp));\n'+
			'        }\n'+
			'    }\n'+
			'    static const char PROGMEM INDEX_HTML[] = R"rawliteral(\n'+mainpage+
			'    \n)rawliteral";\n'+
			'    static esp_err_t index_handler(httpd_req_t *req){\n'+
			'        httpd_resp_set_type(req, "text/html");\n'+
			'        return httpd_resp_send(req, (const char *)INDEX_HTML, strlen(INDEX_HTML));\n'+
			'    }\n'+
			'    void startCameraServer(){\n'+
			'      httpd_config_t config = HTTPD_DEFAULT_CONFIG();\n'+
			'      httpd_uri_t index_uri = {\n'+
			'          .uri       = "/",\n'+
			'          .method    = HTTP_GET,\n'+
			'          .handler   = index_handler,\n'+
			'          .user_ctx  = NULL\n'+
			'      };\n'+
			'      httpd_uri_t cmd_uri = {\n'+
			'          .uri       = "/control",\n'+
			'          .method    = HTTP_GET,\n'+
			'          .handler   = cmd_handler,\n'+
			'          .user_ctx  = NULL\n'+
			'      };\n'+
			'      httpd_uri_t capture_uri = {\n'+
			'          .uri       = "/capture",\n'+
			'          .method    = HTTP_GET,\n'+
			'          .handler   = capture_handler,\n'+
			'          .user_ctx  = NULL\n'+
			'      };\n'+
			'      httpd_uri_t stream_uri = {\n'+
			'          .uri       = "/stream",\n'+
			'          .method    = HTTP_GET,\n'+
			'          .handler   = stream_handler,\n'+
			'          .user_ctx  = NULL\n'+
			'      };\n'+
			'      Serial.printf("Starting web server on port: \'%d\'\\n", config.server_port);\n'+
			'      if (httpd_start(&camera_httpd, &config) == ESP_OK) {\n'+
			'          httpd_register_uri_handler(camera_httpd, &index_uri);\n'+
			'          httpd_register_uri_handler(camera_httpd, &cmd_uri);\n'+
			'          httpd_register_uri_handler(camera_httpd, &capture_uri);\n'+
			'      }\n'+
			'      config.server_port += 1;\n'+
			'      config.ctrl_port += 1;\n'+
			'      Serial.printf("Starting stream server on port: \'%d\'\\n", config.server_port);\n'+
			'      if (httpd_start(&stream_httpd, &config) == ESP_OK) {\n'+
			'          httpd_register_uri_handler(stream_httpd, &stream_uri);\n'+
			'      }\n'+
			'    }\n';			
			
    return '';
};

Blockly.Arduino['esp32_pixelbit_myfirmata'] = function(block) {
	
  var mainpage = Blockly.Arduino.valueToCode(block, 'mainpage', Blockly.Arduino.ORDER_ATOMIC);
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var ssid_ap = Blockly.Arduino.valueToCode(block, 'ssid_ap', Blockly.Arduino.ORDER_ATOMIC);
  var pass_ap = Blockly.Arduino.valueToCode(block, 'password_ap', Blockly.Arduino.ORDER_ATOMIC);
  var baudrate = block.getFieldValue('baudrate');  
  var framesize = block.getFieldValue('framesize');
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');	
																
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>\n#include <WiFiClientSecure.h>\n#include "esp_camera.h"\n#include <tca5405.h>\nTCA5405 tca5405;\n#include "soc/soc.h"\n#include "soc/rtc_cntl_reg.h"\nchar _lwifi_ssid[] = '+ssid+';\nchar _lwifi_pass[] = '+pass+';\nconst char* apssid = '+ssid_ap+';\nconst char* appassword = '+pass_ap+';\nWiFiServer server(80);\n\nString Feedback="",Command="",cmd="",p1="",p2="",p3="",p4="",p5="",p6="",p7="",p8="",p9="";\nbyte receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;\n'+
																'#define PWDN_GPIO_NUM     -1\n'+
																'#define RESET_GPIO_NUM    -1\n'+
																'#define XCLK_GPIO_NUM      0\n'+
																'#define SIOD_GPIO_NUM     22\n'+
																'#define SIOC_GPIO_NUM     19\n'+
																'#define Y9_GPIO_NUM       25\n'+
																'#define Y8_GPIO_NUM       33\n'+
																'#define Y7_GPIO_NUM       32\n'+
																'#define Y6_GPIO_NUM       34\n'+
																'#define Y5_GPIO_NUM       38\n'+
																'#define Y4_GPIO_NUM       36\n'+
																'#define Y3_GPIO_NUM       37\n'+
																'#define Y2_GPIO_NUM       39\n'+
																'#define VSYNC_GPIO_NUM    27\n'+
																'#define HREF_GPIO_NUM     26\n'+
																'#define PCLK_GPIO_NUM     35\n';

  
  if (selectBoardType()=="esp32")
	Blockly.Arduino.definitions_.define_base64 ='#include "Base64_tool.h"';
  else
	Blockly.Arduino.definitions_.define_base64 ='#include "Base64.h"';

  Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void executeCommand() {\n'+
			'  //Serial.println("");\n'+
			'  //Serial.println("Command: "+Command);\n'+
			'  //Serial.println("cmd= "+cmd+" ,p1= "+p1+" ,p2= "+p2+" ,p3= "+p3+" ,p4= "+p4+" ,p5= "+p5+" ,p6= "+p6+" ,p7= "+p7+" ,p8= "+p8+" ,p9= "+p9);\n'+
			'  //Serial.println("");\n'+
			'  if (cmd=="ip") {\n'+
			'    Feedback="AP IP: "+WiFi.softAPIP().toString();\n'+
			'    Feedback+="<br>";\n'+
			'    Feedback+="STA IP: "+WiFi.localIP().toString();\n'+
			'  } else if (cmd=="mac") {\n'+
			'    Feedback="STA MAC: "+WiFi.macAddress();\n'+
			'  } else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  } else if (cmd=="digitalwrite") {\n'+
			'    ledcDetachPin(p1.toInt());\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  } else if (cmd=="digitalread") {\n'+
			'    Feedback=String(digitalRead(p1.toInt()));\n'+
			'  } else if (cmd=="analogwrite") {\n'+
			'    if (p1=="4") {\n'+
			'      ledcAttachPin(4, 4);\n'+
			'      ledcSetup(4, 5000, 8);\n'+
			'      ledcWrite(4,p2.toInt());\n'+
			'    } else {\n'+
			'      ledcAttachPin(p1.toInt(), 9);\n'+
			'      ledcSetup(9, 5000, 8);\n'+
			'      ledcWrite(9,p2.toInt());\n'+
			'    }\n'+
			'  } else if (cmd=="analogread") {\n'+
			'    Feedback=String(analogRead(p1.toInt()));\n'+
			'  } else if (cmd=="touchread") {\n'+
			'    Feedback=String(touchRead(p1.toInt()));\n'+
			'  } else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  } else if (cmd=="flash") {\n'+
			'    ledcAttachPin(4, 4);\n'+
			'    ledcSetup(4, 5000, 8);\n'+
			'    int val = p1.toInt();\n'+
			'    ledcWrite(4,val);\n'+
			'  } else if(cmd=="servo") {\n'+
			'    ledcAttachPin(p1.toInt(), p3.toInt());\n'+
			'    ledcSetup(p3.toInt(), 50, 16);\n'+
			'    int val = 7864-p2.toInt()*34.59;\n'+
			'    if (val > 7864)\n'+
			'       val = 7864;\n'+
			'    else if (val < 1638)\n'+
			'      val = 1638;\n'+
			'    ledcWrite(p3.toInt(), val);\n'+
			'  } else if (cmd=="relay") {\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  } else if (cmd=="buzzer") { \n'+
			'    pinMode(p1.toInt(),OUTPUT);\n'+
			'    if (p4=="") p4="9";\n'+
			'    ledcSetup(p4.toInt(), 2000, 8);\n'+
			'    ledcAttachPin(p1.toInt(), p4.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), p2.toInt());\n'+
			'    delay(p3.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), 0);\n'+
			'  } else if (cmd=="resetwifi") {\n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(p1.c_str(), p2.c_str());\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(p1);\n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      Serial.println("");\n'+
			'      Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'      Feedback="STAIP: "+WiFi.localIP().toString();\n'+
			'      if (WiFi.status() == WL_CONNECTED) {\n'+
			'        WiFi.softAP((WiFi.localIP().toString()+"_"+p1).c_str(), p2.c_str());\n'+
 			'        break;\n'+
			'      }\n'+
			'    }\n'+
			'  } else if (cmd=="print") {\n'+
			'    Serial.print(p1);\n'+
			'  } else if (cmd=="println") {\n'+
			'    Serial.println(p1);\n'+
			'  } else if (cmd=="delay") {\n'+
			'    delay(p1.toInt());\n'+				
			'  } else if (cmd=="framesize") {\n'+
			'    int val = p1.toInt();\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_framesize(s, (framesize_t)val);\n'+
			'  } else if (cmd=="quality") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_quality(s, p1.toInt());\n'+
			'  } else if (cmd=="contrast") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_contrast(s, p1.toInt());\n'+
			'  } else if (cmd=="brightness") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_brightness(s, p1.toInt());\n'+
			'  } else if (cmd=="saturation") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_saturation(s, p1.toInt());\n'+ 
			'  } else if (cmd=="special_effect") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_special_effect(s, p1.toInt());\n'+
			'  } else if (cmd=="hmirror") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_hmirror(s, p1.toInt());\n'+
			'  } else if (cmd=="vflip") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_vflip(s, p1.toInt());\n'+
			'  } else {\n  '+ 
			statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';
	
	Blockly.Arduino.setups_.setup_serial="WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);\n  Serial.begin("+baudrate+");\n  delay(10);";
	Blockly.Arduino.setups_.setup_cam_initial=''+
			'  tca5405.init(21);\n'+
			'  tca5405.set_gpo(PIXELBIT_CAMERA_POWER, 0);\n'+
			'  tca5405.transmit();\n'+
			'  delay(100);\n'+
			'  tca5405.set_gpo(PIXELBIT_CAMERA_POWER, 1);\n'+
			'  tca5405.transmit();\n'+
			'  delay(100);\n\n'+
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
			'  pinMode(25,INPUT_PULLUP);\n'+
			'  pinMode(26,INPUT_PULLUP);\n'+
			'  pinMode(27,INPUT_PULLUP);\n'+
			'  pinMode(32,INPUT_PULLUP);\n'+
			'  pinMode(33,INPUT_PULLUP);\n'+			
			'  esp_err_t err = esp_camera_init(&config);\n'+
			'  if (err != ESP_OK) {\n'+
			'    Serial.printf("Camera init failed with error 0x%x", err);\n'+
			'    delay(1000);\n'+
			'    ESP.restart();\n'+
			'  }\n'+
			'  sensor_t * s = esp_camera_sensor_get();\n'+
			'  if (s->id.PID == OV3660_PID) {\n'+
			'    s->set_vflip(s, 1);\n'+
			'    s->set_brightness(s, 1);\n'+
			'    s->set_saturation(s, -2);\n'+
			'  }\n'+
			'  s->set_framesize(s, FRAMESIZE_'+framesize+');\n'+
			'  initWiFi();\n\n';	
	
	Blockly.Arduino.definitions_.initWiFi = ''+
			'  void initWiFi() {\n'+
			'    WiFi.mode(WIFI_AP_STA);\n'+
			'    \n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+
			'      \n'+
			'      delay(1000);\n'+
			'      Serial.println("");\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(_lwifi_ssid);\n'+
			'      \n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      \n'+
			'      if (WiFi.status() == WL_CONNECTED) {\n'+
			'        WiFi.softAP((WiFi.localIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+      
			'        Serial.println("");\n'+
			'        Serial.println("STAIP address: ");\n'+
			'        Serial.println(WiFi.localIP());\n'+
			'        Serial.println("");\n'+
			'      \n'+
			'        break;\n'+
			'      }\n'+
			'    }\n'+
			'    \n'+
			'    if (WiFi.status() != WL_CONNECTED) {\n'+
			'      WiFi.softAP((WiFi.softAPIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+
			'  	   \n'+
			'    }\n'+
			'    \n'+
			'    Serial.println("");\n'+
			'    Serial.println("APIP address: ");\n'+
			'    Serial.println(WiFi.softAPIP());\n'+
			'    \n'+
			'    server.begin();\n'+ 
			'  }\n';

	Blockly.Arduino.definitions_.getRequest = ''+
			'  void getRequest() {\n'+
			'    Command="";cmd="";p1="";p2="";p3="";p4="";p5="";p6="";p7="";p8="";p9="";\n'+
			'    receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;\n'+
			'  	 \n'+
			'    WiFiClient client = server.available();\n'+
			'    \n'+
			'    if (client) {\n'+
			'      String currentLine = "";\n'+
			'  	   \n'+
			'      while (client.connected()) {\n'+
			'        if (client.available()) {\n'+
			'          char c = client.read();\n'+             
			'          \n'+
			'          getCommand(c);\n'+
			'          \n'+
			'          if (c == \'\\n\') {\n'+
			'            if (currentLine.length() == 0) {\n'+          
			'   	        if (cmd=="getstill") {\n'+
			'     	            camera_fb_t * fb = NULL;\n'+
			'     	            fb = esp_camera_fb_get();\n'+  
			'   	            if(!fb) {\n'+
			'   	                Serial.println("Camera capture failed");\n'+
			'   	                delay(1000);\n'+
			'   	                ESP.restart();\n'+
			'   	            }\n'+
			'   	            client.println("HTTP/1.1 200 OK");\n'+
			'   	            client.println("Access-Control-Allow-Origin: *");\n'+            
			'   	            client.println("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");\n'+
			'   	            client.println("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");\n'+
			'   	            client.println("Content-Type: image/jpeg");\n'+
			'   	            client.println("Content-Disposition: form-data; name=\\\"imageFile\\\"; filename=\\\"picture.jpg\\\"");\n'+ 
			'   	            client.println("Content-Length: " + String(fb->len));\n'+             
			'   	            client.println("Connection: close");\n'+
			'   	            client.println();\n'+
			'   	            uint8_t *fbBuf = fb->buf;\n'+
			'   	            size_t fbLen = fb->len;\n'+
			'   	            for (size_t n=0;n<fbLen;n=n+1024) {\n'+
			'   	                if (n+1024<fbLen) {\n'+
			'   	                client.write(fbBuf, 1024);\n'+
			'   	                fbBuf += 1024;\n'+
			'   	            }\n'+
			'   	            else if (fbLen%1024>0) {\n'+
			'   	                size_t remainder = fbLen%1024;\n'+
			'   	                client.write(fbBuf, remainder);\n'+
			'   	              }\n'+
			'   	            }\n'+
			'   	            esp_camera_fb_return(fb);\n'+
			'   	            pinMode(4, OUTPUT);\n'+
			'   	            digitalWrite(4, LOW);\n'+ 
			'   	        } else {\n'+
			'   	        	client.println("HTTP/1.1 200 OK");\n'+
			'   	        	client.println("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");\n'+
			'   	        	client.println("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");\n'+
			'   	        	client.println("Content-Type: text/html; charset=utf-8");\n'+
			'   	        	client.println("Access-Control-Allow-Origin: *");\n'+
			'   	        	client.println("X-Content-Type-Options: nosniff");\n'+
			'   	        	client.println();\n'+
			'   	        	if (Feedback=="")\n'+
			'   	        		Feedback='+mainpage+';\n'+
			'   	        	for (int index = 0; index < Feedback.length(); index = index+1024) {\n'+
			'   	        	  client.print(Feedback.substring(index, index+1024));\n'+
			'   	        	}\n'+
			'   	        }\n'+
			'   	        Feedback="";\n'+
			'   	        break;\n'+
			'            } else {\n'+
			'              currentLine = "";\n'+
			'            }\n'+
			'          }\n'+ 
			'          else if (c != \'\\r\') {\n'+
			'            currentLine += c;\n'+
			'          }\n'+
			'  		   \n'+
			'          if ((currentLine.indexOf("\/?")!=-1)&&(currentLine.indexOf(" HTTP")!=-1)) {\n'+
			'            if (Command.indexOf("stop")!=-1) {\n'+
			'              client.println();\n'+
			'              client.println();\n'+
 			'             client.stop();\n'+
			'            }\n'+
			'            currentLine="";\n'+
			'            Feedback="";\n'+
			'            executeCommand();\n'+
			'          }\n'+
			'        }\n'+
			'      }\n'+
			'      delay(1);\n'+
			'      client.stop();\n'+
			'    }\n'+
			'  }\n';	

	Blockly.Arduino.definitions_.getCommand = ''+
			'  void getCommand(char c) {\n'+
			'    if (c==\'?\') receiveState=1;\n'+
			'    if ((c==\' \')||(c==\'\\r\')||(c==\'\\n\')) receiveState=0;\n'+
			'    \n'+
			'    if (receiveState==1) {\n'+
			'      Command=Command+String(c);\n'+
			'      \n'+
			'      if (c==\'=\') cmdState=0;\n'+
			'      if (c==\';\') pState++;\n'+
			'      \n'+
			'      if ((cmdState==1)&&((c!=\'?\')||(questionState==1))) cmd=cmd+String(c);\n'+
			'      if ((cmdState==0)&&(pState==1)&&((c!=\'=\')||(equalState==1))) p1=p1+String(c);\n'+
			'      if ((cmdState==0)&&(pState==2)&&(c!=\';\')) p2=p2+String(c);\n'+
			'      if ((cmdState==0)&&(pState==3)&&(c!=\';\')) p3=p3+String(c);\n'+
			'      if ((cmdState==0)&&(pState==4)&&(c!=\';\')) p4=p4+String(c);\n'+
			'      if ((cmdState==0)&&(pState==5)&&(c!=\';\')) p5=p5+String(c);\n'+
			'      if ((cmdState==0)&&(pState==6)&&(c!=\';\')) p6=p6+String(c);\n'+
			'      if ((cmdState==0)&&(pState==7)&&(c!=\';\')) p7=p7+String(c);\n'+
			'      if ((cmdState==0)&&(pState==8)&&(c!=\';\')) p8=p8+String(c);\n'+
			'      if ((cmdState==0)&&(pState>=9)&&((c!=\';\')||(semicolonState==1))) p9=p9+String(c);\n'+
			'      \n'+
			'      if (c==\'?\') questionState=1;\n'+
			'      if (c==\'=\') equalState=1;\n'+
			'      if ((pState>=9)&&(c==\';\')) semicolonState=1;\n'+
			'    }\n'+
			'  }\n';		
			
    return '';
};

Blockly.Arduino['fu_dfplayer_initial'] = function(block) {
	var serial = block.getFieldValue('serial');
	var rx = Blockly.Arduino.valueToCode(block, 'rx', Blockly.Arduino.ORDER_ATOMIC);  	
	var tx = Blockly.Arduino.valueToCode(block, 'tx', Blockly.Arduino.ORDER_ATOMIC);

	if (serial=="Serial") {
		Blockly.Arduino.setups_["define_HardwareSerial_"+serial] = serial+'.begin(9600);\n  delay(10);\n';
	}
	else if (serial=="mySerial1") {
		Blockly.Arduino.definitions_["define_HardwareSerial"+serial] = 'HardwareSerial mySerial1(1);';
		Blockly.Arduino.setups_["define_HardwareSerial_"+serial] = serial+'.begin(9600, SERIAL_8N1, '+rx+', '+tx+');\n  delay(10);\n';
	}
	else if  (serial=="mySerial2") {
		Blockly.Arduino.definitions_["define_HardwareSerial"+serial] = 'HardwareSerial mySerial2(2);';		
		Blockly.Arduino.setups_["define_HardwareSerial_"+serial] = serial+'.begin(9600, SERIAL_8N1, '+rx+', '+tx+');\n  delay(10);\n';
	}
	
	Blockly.Arduino.definitions_["define_DFRobotDFPlayerMini"] = '#include "DFRobotDFPlayerMini.h"\nDFRobotDFPlayerMini myDFPlayer;';	
	
	Blockly.Arduino.setups_["define_DFRobotDFPlayerMini"] = ''+
															'if (!myDFPlayer.begin('+serial+')) {\n'+
															'    Serial.println(F("Unable to begin:"));\n'+
															'    Serial.println(F("1.Please recheck the connection!"));\n'+
															'    Serial.println(F("2.Please insert the SD card!"));\n'+
															'  }\n  delay(3000);\n  DFPlayermini("volume", String(20), "");\n';
															
	Blockly.Arduino.definitions_["define_DFRobotDFPlayerMini_command"] = ''+
															'void DFPlayermini(String cmd, String p1, String p2) {\n'+
															' if (cmd=="volume") {\n'+
															'    myDFPlayer.pause();\n'+
															'    delay(300);\n'+
															'    if (p1.toInt()>30)\n'+
															'      p1="30";\n'+
															'    else if (p1.toInt()<0)\n'+
															'      p1="0";\n'+
															'    myDFPlayer.volume(p1.toInt());\n'+
															'    delay(300);\n'+
															'    myDFPlayer.start();\n'+
															'  } else if (cmd=="volumeUp") {\n'+
															'    myDFPlayer.pause();\n'+
															'    delay(300);\n'+
															'    myDFPlayer.volumeUp();\n'+
															'    delay(300);\n'+
															'    myDFPlayer.start();\n'+
															'  } else if (cmd=="volumeDown") {\n'+
															'    myDFPlayer.pause();\n'+
															'    delay(300);\n'+
															'    myDFPlayer.volumeDown();\n'+
															'    delay(300);\n'+
															'    myDFPlayer.start();\n'+
															'  } else if (cmd=="EQ") {\n'+
															'    if (p1=="NORMAL")\n'+
															'      myDFPlayer.EQ(DFPLAYER_EQ_NORMAL);\n'+
															'    else if  (p1=="POP")\n'+
															'      myDFPlayer.EQ(DFPLAYER_EQ_POP);\n'+
															'    else if  (p1=="ROCK")\n'+
															'      myDFPlayer.EQ(DFPLAYER_EQ_ROCK);\n'+
															'    else if  (p1=="JAZZ")\n'+
															'      myDFPlayer.EQ(DFPLAYER_EQ_JAZZ);\n'+
															'    else if  (p1=="CLASSIC")\n'+
															'      myDFPlayer.EQ(DFPLAYER_EQ_CLASSIC);\n'+
															'    else if  (p1=="BASS")\n'+
															'      myDFPlayer.EQ(DFPLAYER_EQ_BASS);\n'+
															'  } else if (cmd=="DEVICE") {\n'+
															'    if (p1=="U_DISK")\n'+
															'      myDFPlayer.outputDevice(DFPLAYER_DEVICE_U_DISK);\n'+
															'    else if  (p1=="SD")\n'+
															'      myDFPlayer.outputDevice(DFPLAYER_DEVICE_SD);\n'+
															'    else if  (p1=="AUX")\n'+
															'      myDFPlayer.outputDevice(DFPLAYER_DEVICE_AUX);\n'+
															'    else if  (p1=="SLEEP")\n'+
															'      myDFPlayer.outputDevice(DFPLAYER_DEVICE_SLEEP);\n'+
															'    else if  (p1=="FLASH")\n'+
															'      myDFPlayer.outputDevice(DFPLAYER_DEVICE_FLASH);\n'+
															'  } else if (cmd=="sleep") {\n'+
															'    myDFPlayer.sleep();\n'+
															'  } else if (cmd=="reset") {\n'+
															'    myDFPlayer.reset();\n'+
															'  } else if (cmd=="enableDAC") {\n'+
															'    myDFPlayer.enableDAC();\n'+
															'  } else if (cmd=="disableDAC") {\n'+
															'    myDFPlayer.disableDAC();\n'+
															'  } else if (cmd=="outputSetting") {\n'+
															'    myDFPlayer.outputSetting(p1.toInt(), p2.toInt());\n'+
															'  } else if (cmd=="next") {\n'+
															'    myDFPlayer.next();\n'+
															'  } else if (cmd=="previous") {\n'+
															'    myDFPlayer.previous();\n'+
															'  } else if (cmd=="play") {\n'+
															'    myDFPlayer.play(p1.toInt());\n'+
															'  } else if (cmd=="loop") {\n'+
															'    myDFPlayer.loop(p1.toInt());\n'+
															'  } else if (cmd=="pause") {\n'+
															'    myDFPlayer.pause();\n'+
															'  } else if (cmd=="start") {\n'+
															'    myDFPlayer.start();\n'+
															'  }  else if (cmd=="playFolder") {\n'+
															'    myDFPlayer.playFolder(p1.toInt(), p2.toInt());\n'+
															'  }  else if (cmd=="enableLoopAll") {\n'+
															'    myDFPlayer.enableLoopAll();\n'+
															'  }  else if (cmd=="disableLoopAll") {\n'+
															'    myDFPlayer.disableLoopAll();\n'+
															'  }  else if (cmd=="playMp3Folder") {\n'+
															'    myDFPlayer.playMp3Folder(p1.toInt());\n'+
															'  }  else if (cmd=="advertise") {\n'+
															'    myDFPlayer.advertise(p1.toInt());\n'+
															'  }  else if (cmd=="stopAdvertise") {\n'+
															'    myDFPlayer.stopAdvertise();\n'+
															'  }  else if (cmd=="playLargeFolder") {\n'+
															'    myDFPlayer.playLargeFolder(p1.toInt(), p2.toInt());\n'+
															'  } else if (cmd=="loopFolder") {\n'+
															'    myDFPlayer.loopFolder(p1.toInt());\n'+
															'  }  else if (cmd=="randomAll") {\n'+
															'    myDFPlayer.randomAll();\n'+
															'  } else if (cmd=="enableLoop") {\n'+
															'    myDFPlayer.enableLoop();\n'+
															'  }  else if (cmd=="disableLoop") {\n'+
															'    myDFPlayer.disableLoop();\n'+
															'  }\n'+
															'}\n';
	
	return "";
};

Blockly.Arduino['fu_dfplayer_command0'] = function(block) {
	var cmd = block.getFieldValue('cmd'); 	
	var p1 = Blockly.Arduino.valueToCode(block, 'p1', Blockly.Arduino.ORDER_ATOMIC); 		
	var code = 'DFPlayermini("'+cmd+'", String('+p1+'), "");\n';
	return code;
};

Blockly.Arduino['fu_dfplayer_command1'] = function(block) {
	var cmd = block.getFieldValue('cmd'); 	
	var p1 = Blockly.Arduino.valueToCode(block, 'p1', Blockly.Arduino.ORDER_ATOMIC); 	
	var p2 = Blockly.Arduino.valueToCode(block, 'p2', Blockly.Arduino.ORDER_ATOMIC); 	
	var code = 'DFPlayermini("'+cmd+'", String('+p1+'), String('+p2+'));\n';
	return code;
};

Blockly.Arduino['fu_dfplayer_command2'] = function(block) {
	var cmd = block.getFieldValue('cmd'); 	
	var code = 'DFPlayermini("'+cmd+'", "", "");\n';
	return code;
};

Blockly.Arduino['fu_dfplayer_command3'] = function(block) {
	var cmd = block.getFieldValue('cmd'); 	
	var value = block.getFieldValue('value'); 		
	var code = 'DFPlayermini("'+cmd+'", "'+value+'", "");\n';
	return code;
};






Blockly.Arduino['uart_initial'] = function(block) {
	var serial = block.getFieldValue('serial');
	var rx = Blockly.Arduino.valueToCode(block, 'rx', Blockly.Arduino.ORDER_ATOMIC);  	
	var tx = Blockly.Arduino.valueToCode(block, 'tx', Blockly.Arduino.ORDER_ATOMIC); 	
    var baudrate = block.getFieldValue('baudrate');
	var read = block.getFieldValue('read');
	var statement = Blockly.Arduino.statementToCode(block, 'statement');
	
	Blockly.Arduino.definitions_["define_HardwareSerial_uartData"] = 'String uartData = "";';
	if (serial=="Serial") {
		Blockly.Arduino.setups_["define_HardwareSerial_"+serial] = serial+'.begin('+baudrate+');\n  delay(10);\n';
	}
	else if (serial=="mySerial1") {
		Blockly.Arduino.definitions_["define_HardwareSerial"+serial] = 'HardwareSerial mySerial1(1);';
		Blockly.Arduino.setups_["define_HardwareSerial_"+serial] = serial+'.begin('+baudrate+', SERIAL_8N1, '+rx+', '+tx+');\n  delay(10);\n';
	}
	else if  (serial=="mySerial2") {
		Blockly.Arduino.definitions_["define_HardwareSerial"+serial] = 'HardwareSerial mySerial2(2);';		
		Blockly.Arduino.setups_["define_HardwareSerial_"+serial] = serial+'.begin('+baudrate+', SERIAL_8N1, '+rx+', '+tx+');\n  delay(10);\n';
	}
	
	var code;
	if (read=="all") {
		code =	'if ('+serial+'.available()) {\n'+
				'  uartData = "";\n'+
				'  while ('+serial+'.available()) {\n'+
				'    char c='+serial+'.read();\n'+
				'    if (c!=\'\\n\'&&c!=\'\\r\')\n'+				
				'      uartData+=String(c);\n'+
				'    delay(1);\n'+
				'  }\n'+statement+		
				'}\n';
	}
	else if (read=="string") {
		code =	'if ('+serial+'.available()) {\n'+
				'  uartData = "";\n'+
				'  while ('+serial+'.available()) {\n'+
				'    uartData='+serial+'.readString();\n  '+statement+
				'    delay(1);\n'+
				'  }\n'+	
				'}\n';
	}	
	else if (read=="row") {
		code =	'if ('+serial+'.available()) {\n'+
				'  uartData = "";\n'+
				'  while ('+serial+'.available()) {\n'+
				'    uartData='+serial+'.readStringUntil(\'\\n\');\n  '+statement+
				'    delay(1);\n'+
				'  }\n'+	
				'}\n';
	}
	else if  (read=="char") {
		code =	'if ('+serial+'.available()) {\n'+
				'  uartData = "";\n'+
				'  while ('+serial+'.available()) {\n'+
				'    char c='+serial+'.read();\n'+
				'    uartData=String(c);\n  '+statement+
				'    delay(1);\n'+
				'  }\n'+	
				'}\n';
	}
	
  return code;
};

Blockly.Arduino['uart_initial_esp32'] = function(block) {
	var serial = block.getFieldValue('serial');
	var rx = Blockly.Arduino.valueToCode(block, 'rx', Blockly.Arduino.ORDER_ATOMIC);  	
	var tx = Blockly.Arduino.valueToCode(block, 'tx', Blockly.Arduino.ORDER_ATOMIC); 	
    var baudrate = Blockly.Arduino.valueToCode(block, 'baudrate', Blockly.Arduino.ORDER_ATOMIC);
	
	if (serial=="mySerial1") {
		Blockly.Arduino.definitions_["define_HardwareSerial"+serial] = 'HardwareSerial mySerial1(1);';
		Blockly.Arduino.setups_["define_HardwareSerial_"+serial] = serial+'.begin('+baudrate+', SERIAL_8N1, '+rx+', '+tx+');\n  delay(10);\n';
	}
	else if  (serial=="mySerial2") {
		Blockly.Arduino.definitions_["define_HardwareSerial"+serial] = 'HardwareSerial mySerial2(2);';		
		Blockly.Arduino.setups_["define_HardwareSerial_"+serial] = serial+'.begin('+baudrate+', SERIAL_8N1, '+rx+', '+tx+');\n  delay(10);\n';
	}
	
  return '';
};

Blockly.Arduino['uart_getdata'] = function(block) {
  code = 'uartData';
  return [code, Blockly.Arduino.ORDER_NONE];
};



Blockly.Arduino['fu_ntpserver_initial'] = function(block) {
  var gmtOffset = Blockly.Arduino.valueToCode(block, 'gmtOffset', Blockly.Arduino.ORDER_ATOMIC);  

  Blockly.Arduino.definitions_.define_time_h='#include "time.h"';
  Blockly.Arduino.definitions_.define_ntpserver='const char* ntpServer = "pool.ntp.org";\n'+
												  'const long  gmtOffset_sec = ' + Number(gmtOffset)*3600 + ';\n'+
												  'const int   daylightOffset_sec = 0;\n'+
												  'struct tm timeinfo;\n'+
												  'int currentTimeValue[6] = {0,0,0,0,0,0};\n'+
												  'String currentTime[3] = {"","",""};';
  Blockly.Arduino.setups_.configTime="configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);\n";
  Blockly.Arduino.definitions_.define_getLocalTime = '\n'+
			'void getLocalTime() {\n'+
			'  if(!getLocalTime(&timeinfo)){\n'+
			'    return;\n'+
			'  }\n'+
			'  currentTimeValue[0] = timeinfo.tm_year+1900;\n'+
			'  currentTimeValue[1] = timeinfo.tm_mon+1;\n'+
			'  currentTimeValue[2] = timeinfo.tm_mday;\n'+
			'  currentTimeValue[3] = timeinfo.tm_hour;\n'+
			'  currentTimeValue[4] = timeinfo.tm_min;\n'+
			'  currentTimeValue[5] = timeinfo.tm_sec;\n'+
			'  currentTime[0] = String(timeinfo.tm_year+1900)+"/"+ ((timeinfo.tm_mon+1)<10?"0":"") + String(timeinfo.tm_mon+1)+"/"+(timeinfo.tm_mday<10?"0":"")+String(timeinfo.tm_mday);\n'+
			'  currentTime[1] = (timeinfo.tm_mday<10?"0":"")+String(timeinfo.tm_hour)+":"+(timeinfo.tm_min<10?"0":"")+String(timeinfo.tm_min)+":"+(timeinfo.tm_sec<10?"0":"")+String(timeinfo.tm_sec);\n'+
			'  currentTime[2] = currentTime[0] + " "+ currentTime[1];\n'+
			'}\n';
  var code = '';
  return code;
};

Blockly.Arduino['fu_ntpserver_getlocaltime'] = function(block) {
  var gmtOffset = Blockly.Arduino.valueToCode(block, 'gmtOffset', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'getLocalTime();\n';
  return code;
};

Blockly.Arduino['fu_ntpserver_get'] = function(block) {
  var option = block.getFieldValue('option');
  var code ="";
  if (option=="year")
	code = 'currentTimeValue[0]';
  else if (option=="month")
	code = 'currentTimeValue[1]';
  else if (option=="day")
	code = 'currentTimeValue[2]';
  else if (option=="hour")
	code = 'currentTimeValue[3]';
  else if (option=="minute")
	code = 'currentTimeValue[4]';
  else if (option=="second")
	code = 'currentTimeValue[5]';
  else if (option=="date")
	code = 'currentTime[0]';
  else if (option=="time")
	code = 'currentTime[1]';
  else if (option=="full")
	code = 'currentTime[2]';
  return code;
};

Blockly.Arduino['esp32_telegrambot'] = function(block) {
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var baudrate = block.getFieldValue('baudrate');
  var token = Blockly.Arduino.valueToCode(block, 'token', Blockly.Arduino.ORDER_ATOMIC);
  var chat_id = Blockly.Arduino.valueToCode(block, 'chat_id', Blockly.Arduino.ORDER_ATOMIC);   
  var command = Blockly.Arduino.valueToCode(block, 'command', Blockly.Arduino.ORDER_ATOMIC); 
  var keyboard = Blockly.Arduino.valueToCode(block, 'keyboard', Blockly.Arduino.ORDER_ATOMIC);
  if ((keyboard.indexOf("'")==0)&&(keyboard.lastIndexOf("'")==keyboard.length-1))
    keyboard = keyboard.substring(1,keyboard.length-1);
  if ((keyboard.indexOf('"')==0)&&(keyboard.lastIndexOf('"')==keyboard.length-1))
    keyboard = keyboard.substring(1,keyboard.length-1);
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'loop');  

  Blockly.Arduino.definitions_['ArduinoJson'] = '#include <ArduinoJson.h>\n#include <WiFi.h>\n#include <WiFiClientSecure.h>\n#include "soc/soc.h"\n#include "soc/rtc_cntl_reg.h"\nchar _lwifi_ssid[] = '+ssid+';\nchar _lwifi_pass[] = '+pass+';\nString token = '+token+';\nString chat_id = '+chat_id+';\nWiFiClientSecure client_tcp;\nlong message_id_last = 0;\nboolean sendHelp = false;';

	Blockly.Arduino.definitions_.sendMessageToTelegram = ''+
		'void sendMessageToTelegram(String token, String chatid, String text, String keyboard) {\n'+
		'  const char* myDomain = "api.telegram.org";\n'+
		'  String getAll="", getBody = "";\n'+
		'  String request = "parse_mode=HTML&chat_id="+chatid+"&text="+text;\n'+
		'  if (keyboard!="") request += "&reply_markup="+keyboard;\n'+
		'  client_tcp.println("POST /bot"+token+"/sendMessage HTTP/1.1");\n'+
		'  client_tcp.println("Host: " + String(myDomain));\n'+
		'  client_tcp.println("Content-Length: " + String(request.length()));\n'+
		'  client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
		'  client_tcp.println("Connection: keep-alive");\n'+
		'  client_tcp.println();\n'+
		'  client_tcp.print(request);\n'+
		'  int waitTime = 5000;\n'+
		'  long startTime = millis();\n'+
		'  boolean state = false;\n'+
		'  while ((startTime + waitTime) > millis()) {\n'+
		'    delay(100);\n'+
		'    while (client_tcp.available())  {\n'+
		'        char c = client_tcp.read();\n'+
		'        if (state==true) getBody += String(c);\n'+ 
		'        if (c == \'\\n\')  {\n'+
		'          if (getAll.length()==0) state=true;\n'+
		'          getAll = "";\n'+
		'        }\n'+
		'        else if (c != \'\\r\')\n'+
		'          getAll += String(c);\n'+
		'        startTime = millis();\n'+
		'     }\n'+
		'     if (getBody.length()>0) break;\n'+
		'  }\n'+
		'}\n';
		
	Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void ExecuteCommand(String cmd) {\n'+
			'  if (!cmd||cmd=="") return;\n'+
			'  if (cmd=="help"||cmd=="/help"||cmd=="/start") {\n'+
			'    String command = '+command.replace(/\\\\/g,'\\')+';\n'+
			'    String keyboard = "'+keyboard.replace(/"/g,'\\"')+'";\n'+
			'    sendMessageToTelegram(token, chat_id, command, keyboard);\n'+
			'  }\n'+
			'  else if (cmd=="/restart") {\n'+
			'    sendMessageToTelegram(token, chat_id, "Restart the board", "");\n'+
			'    ESP.restart();\n'+
			'  }\n'+
			'  else if (cmd=="null") {\n'+
			'    client_tcp.stop();\n'+
			'    getTelegramMessage();\n'+
			'  }\n'+
			'  else {\n'+
				statements_executecommand.replace(/\n/g,"\n  ")+
			'  }\n'+ 
			'}\n';

	Blockly.Arduino.setups_.setup_serial='WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);\n  Serial.begin('+baudrate+');\n  delay(10);\n';
	Blockly.Arduino.setups_.setup_wifi='initWiFi();\n';

	Blockly.Arduino.definitions_.initWiFi = ''+
			'void initWiFi() {\n'+
			'  WiFi.mode(WIFI_STA);\n'+
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
			'      Serial.println("");\n'+
			'      Serial.println("STAIP address: ");\n'+
			'      Serial.println(WiFi.localIP());\n'+
			'      Serial.println("");\n'+			
			'  	 	pinMode(2, OUTPUT);\n'+ 
			'  	 	for (int i=0;i<5;i++) {\n'+ 
			'  	   	digitalWrite(2, HIGH);\n'+ 
			'  	   	delay(100);\n'+ 
			'  	   	digitalWrite(2, LOW);\n'+ 
			'  	   	delay(100);\n'+ 
			'  	 	}\n'+ 
			'      break;\n'+
			'    }\n'+
			'  }\n'+
			'  if (WiFi.status() != WL_CONNECTED) {\n'+
			'  	pinMode(2, OUTPUT);\n'+ 
			'  	for (int i=0;i<3;i++) {\n'+ 
			'  	  digitalWrite(2, HIGH);\n'+ 
			'  	  delay(500);\n'+ 
			'  	  digitalWrite(2, LOW);\n'+ 
			'  	  delay(500);\n'+ 
			'  	}\n'+ 
			'  }\n'+
			'  Serial.println("");\n'+
			'}\n';

	Blockly.Arduino.definitions_.getTelegramMessage = ''+		
			'void getTelegramMessage() {\n'+
			'  const char* myDomain = "api.telegram.org";\n'+
			'  String getAll="", getBody = "";\n'+
			'  JsonObject obj;\n'+
			'  DynamicJsonDocument doc(1024);\n'+
			'  String result;\n'+
			'  long update_id;\n'+
			'  String message;\n'+
			'  long message_id;\n'+
			'  String text;\n'+
			'  if (message_id_last == 0) Serial.println("Connect to " + String(myDomain));\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.getTelegramMessage += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.getTelegramMessage += '  if (client_tcp.connect(myDomain, 443)) {\n'+
			'    if (message_id_last == 0) Serial.println("Connection successful");\n'+
			'    while (client_tcp.connected()) {\n'+
			'      getAll = "";\n'+
			'      getBody = "";\n'+
			'      String request = "limit=1&offset=-1&allowed_updates=message";\n'+
			'      client_tcp.println("POST /bot"+token+"/getUpdates HTTP/1.1");\n'+
			'      client_tcp.println("Host: " + String(myDomain));\n'+
			'      client_tcp.println("Content-Length: " + String(request.length()));\n'+
			'      client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
			'      client_tcp.println("Connection: keep-alive");\n'+
			'      client_tcp.println();\n'+
			'      client_tcp.print(request);\n'+
			'      int waitTime = 5000;\n'+
			'      long startTime = millis();\n'+
			'      boolean state = false;\n'+
			'      while ((startTime + waitTime) > millis()){\n'+
			'        delay(100);\n'+
			'        while (client_tcp.available()){\n'+
			'            char c = client_tcp.read();\n'+
			'            if (c == \'\\n\') {\n'+
			'              if (getAll.length()==0) state=true;\n'+
			'              getAll = "";\n'+
			'            }\n'+
			'            else if (c != \'\\r\')\n'+
			'              getAll += String(c);\n'+
			'            if (state==true) getBody += String(c);\n'+
			'            startTime = millis();\n'+
			'         }\n'+
			'         if (getBody.length()>0) break;\n'+
			'      }\n'+
			'      deserializeJson(doc, getBody);\n'+
			'      obj = doc.as<JsonObject>();\n'+
			'      message_id = obj["result"][0]["message"]["message_id"].as<String>().toInt();\n'+
			'      text = obj["result"][0]["message"]["text"].as<String>();\n'+
			'      if (message_id!=message_id_last&&message_id) {\n'+
			'        int id_last = message_id_last;\n'+
			'        message_id_last = message_id;\n'+
			'        if (id_last==0) {\n'+
			'          message_id = 0;\n'+
			'          if (sendHelp == true)\n'+
			'            text = "/help";\n'+
			'          else\n'+
			'            text = "";\n'+
			'        }\n'+
			'        if (text!="") {\n'+
			'          ExecuteCommand(text);\n'+
			'        }\n'+
			'      }\n    '+ statements_loop.replace(/\n/g,"\n  ")+
			'  delay(1000);\n'+
			'    }\n'+
			'  }\n'+
			'  if (WiFi.status() != WL_CONNECTED) {\n'+
			'    WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+
			'    long int StartTime=millis();\n'+
			'    while (WiFi.status() != WL_CONNECTED) {\n'+
			'      delay(500);\n'+
			'      if ((StartTime+10000) < millis()) break;\n'+
			'    }\n'+
			'    if (WiFi.status() != WL_CONNECTED) {\n'+
			'      ESP.restart();\n'+
			'    }\n'+
			'  }\n'+
			'  getTelegramMessage();\n'+
			'}\n';	
			
	Blockly.Arduino.setups_.getTelegramMessage="getTelegramMessage();\n";

  var code = '';
  return code;
};

Blockly.Arduino['esp32cam_telegrambot'] = function(block) {
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var baudrate = block.getFieldValue('baudrate');
  var framesize = block.getFieldValue('framesize');  
  var token = Blockly.Arduino.valueToCode(block, 'token', Blockly.Arduino.ORDER_ATOMIC);
  var chat_id = Blockly.Arduino.valueToCode(block, 'chat_id', Blockly.Arduino.ORDER_ATOMIC);   
  var command = Blockly.Arduino.valueToCode(block, 'command', Blockly.Arduino.ORDER_ATOMIC); 
  var keyboard = Blockly.Arduino.valueToCode(block, 'keyboard', Blockly.Arduino.ORDER_ATOMIC);
  if ((keyboard.indexOf("'")==0)&&(keyboard.lastIndexOf("'")==keyboard.length-1))
    keyboard = keyboard.substring(1,keyboard.length-1);
  if ((keyboard.indexOf('"')==0)&&(keyboard.lastIndexOf('"')==keyboard.length-1))
    keyboard = keyboard.substring(1,keyboard.length-1);
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'loop');
  
  Blockly.Arduino.definitions_['ArduinoJson'] = '#include <ArduinoJson.h>\n#include <WiFi.h>\n#include <WiFiClientSecure.h>\n#include "esp_camera.h"\n#include "soc/soc.h"\n#include "soc/rtc_cntl_reg.h"\n#include "Base64_tool.h"\n#include "Base64.h"\nchar _lwifi_ssid[] = '+ssid+';\nchar _lwifi_pass[] = '+pass+';\nString token = '+token+';\nString chat_id = '+chat_id+';\nWiFiClientSecure client_tcp;\nlong message_id_last = 0;\nboolean sendHelp = false;\n'+
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
  

	Blockly.Arduino.definitions_.sendMessageToTelegram = ''+
		'void sendMessageToTelegram(String token, String chatid, String text, String keyboard) {\n'+
		'  const char* myDomain = "api.telegram.org";\n'+
		'  String getAll="", getBody = "";\n'+
		'  String request = "parse_mode=HTML&chat_id="+chatid+"&text="+text;\n'+
		'  if (keyboard!="") request += "&reply_markup="+keyboard;\n'+
		'  client_tcp.println("POST /bot"+token+"/sendMessage HTTP/1.1");\n'+
		'  client_tcp.println("Host: " + String(myDomain));\n'+
		'  client_tcp.println("Content-Length: " + String(request.length()));\n'+
		'  client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
		'  client_tcp.println("Connection: keep-alive");\n'+
		'  client_tcp.println();\n'+
		'  client_tcp.print(request);\n'+
		'  int waitTime = 5000;\n'+
		'  long startTime = millis();\n'+
		'  boolean state = false;\n'+
		'  while ((startTime + waitTime) > millis()) {\n'+
		'    delay(100);\n'+
		'    while (client_tcp.available())  {\n'+
		'        char c = client_tcp.read();\n'+
		'        if (state==true) getBody += String(c);\n'+ 
		'        if (c == \'\\n\')  {\n'+
		'          if (getAll.length()==0) state=true;\n'+
		'          getAll = "";\n'+
		'        }\n'+
		'        else if (c != \'\\r\')\n'+
		'          getAll += String(c);\n'+
		'        startTime = millis();\n'+
		'     }\n'+
		'     if (getBody.length()>0) break;\n'+
		'  }\n'+
		'}\n';  
		
	Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void ExecuteCommand(String cmd) {\n'+
			'  if (!cmd||cmd=="") return;\n'+
			'  if (cmd=="help"||cmd=="/help"||cmd=="/start") {\n'+
			'    String command = '+command.replace(/\\\\/g,'\\')+';\n'+
			'    String keyboard = "'+keyboard.replace(/"/g,'\\"')+'";\n'+
			'    sendMessageToTelegram(token, chat_id, command, keyboard);\n'+
			'  }\n'+
			'  else if (cmd=="/restart") {\n'+
			'    sendMessageToTelegram(token, chat_id, "Restart the board", "");\n'+
			'    ESP.restart();\n'+
			'  }\n'+
			'  else if (cmd=="null") {\n'+
			'    client_tcp.stop();\n'+
			'    getTelegramMessage();\n'+
			'  }\n'+
			'  else {\n'+
				statements_executecommand.replace(/\n/g,"\n  ")+
			'  }\n'+ 
			'}\n';

	Blockly.Arduino.setups_.setup_serial="WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);\n  Serial.begin("+baudrate+");\n  delay(10);";
	Blockly.Arduino.setups_.setup_cam_initial=''+
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
			'  if (s->id.PID == OV3660_PID) {\n'+
			'    s->set_vflip(s, 1);\n'+
			'    s->set_brightness(s, 1);\n'+
			'    s->set_saturation(s, -2);\n'+
			'  }\n'+			
			'  s->set_framesize(s, FRAMESIZE_'+framesize+');\n'+
			'  Serial.println();\n'+			
			'  delay(10);\n\n'+
			'  initWiFi();\n\n';	

	Blockly.Arduino.definitions_.initWiFi = ''+
			'void initWiFi() {\n'+
			'  WiFi.mode(WIFI_STA);\n'+
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
			'      Serial.println("");\n'+
			'      Serial.println("STAIP address: ");\n'+
			'      Serial.println(WiFi.localIP());\n'+
			'      Serial.println("");\n'+			
			'      break;\n'+
			'    }\n'+
			'  }\n'+
			'}\n';

	Blockly.Arduino.definitions_.getTelegramMessage = ''+		
			'void getTelegramMessage() {\n'+
			'  const char* myDomain = "api.telegram.org";\n'+
			'  String getAll="", getBody = "";\n'+
			'  JsonObject obj;\n'+
			'  DynamicJsonDocument doc(1024);\n'+
			'  String result;\n'+
			'  long update_id;\n'+
			'  String message;\n'+
			'  long message_id;\n'+
			'  String text;\n'+
			'  if (message_id_last == 0) Serial.println("Connect to " + String(myDomain));\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.getTelegramMessage += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.getTelegramMessage +='  if (client_tcp.connect(myDomain, 443)) {\n'+
			'    if (message_id_last == 0) Serial.println("Connection successful");\n'+
			'    while (client_tcp.connected()) {\n'+
			'      getAll = "";\n'+
			'      getBody = "";\n'+
			'      String request = "limit=1&offset=-1&allowed_updates=message";\n'+
			'      client_tcp.println("POST /bot"+token+"/getUpdates HTTP/1.1");\n'+
			'      client_tcp.println("Host: " + String(myDomain));\n'+
			'      client_tcp.println("Content-Length: " + String(request.length()));\n'+
			'      client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
			'      client_tcp.println("Connection: keep-alive");\n'+
			'      client_tcp.println();\n'+
			'      client_tcp.print(request);\n'+
			'      int waitTime = 5000;\n'+
			'      long startTime = millis();\n'+
			'      boolean state = false;\n'+
			'      while ((startTime + waitTime) > millis()){\n'+
			'        delay(100);\n'+
			'        while (client_tcp.available()){\n'+
			'            char c = client_tcp.read();\n'+
			'            if (c == \'\\n\') {\n'+
			'              if (getAll.length()==0) state=true;\n'+
			'              getAll = "";\n'+
			'            }\n'+
			'            else if (c != \'\\r\')\n'+
			'              getAll += String(c);\n'+
			'            if (state==true) getBody += String(c);\n'+
			'            startTime = millis();\n'+
			'         }\n'+
			'         if (getBody.length()>0) break;\n'+
			'      }\n'+
			'      deserializeJson(doc, getBody);\n'+
			'      obj = doc.as<JsonObject>();\n'+
			'      message_id = obj["result"][0]["message"]["message_id"].as<String>().toInt();\n'+
			'      text = obj["result"][0]["message"]["text"].as<String>();\n'+
			'      if (message_id!=message_id_last&&message_id) {\n'+
			'        int id_last = message_id_last;\n'+
			'        message_id_last = message_id;\n'+
			'        if (id_last==0) {\n'+
			'          message_id = 0;\n'+
			'          if (sendHelp == true)\n'+
			'            text = "/help";\n'+
			'          else\n'+
			'            text = "";\n'+
			'        }\n'+
			'        if (text!="") {\n'+
			'          ExecuteCommand(text);\n'+
			'        }\n'+
			'      }\n    '+ statements_loop.replace(/\n/g,"\n  ")+
			'  delay(1000);\n'+
			'    }\n'+
			'  }\n'+
			'  if (WiFi.status() != WL_CONNECTED) {\n'+
			'    WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+
			'    long int StartTime=millis();\n'+
			'    while (WiFi.status() != WL_CONNECTED) {\n'+
			'      delay(500);\n'+
			'      if ((StartTime+10000) < millis()) break;\n'+
			'    }\n'+
			'    if (WiFi.status() != WL_CONNECTED) {\n'+
			'      ESP.restart();\n'+
			'    }\n'+
			'  }\n'+
			'  getTelegramMessage();\n'+
			'}\n';	
			
	Blockly.Arduino.setups_.getTelegramMessage="getTelegramMessage();\n";

  var code = '';
  return code;
};

Blockly.Arduino['esp32_telegrambot_sendmessage'] = function(block) {	
  var value_message = Blockly.Arduino.valueToCode(block, 'message', Blockly.Arduino.ORDER_ATOMIC); 
  
	Blockly.Arduino.definitions_.sendMessageToTelegram = ''+
		'void sendMessageToTelegram(String token, String chatid, String text, String keyboard) {\n'+
		'  const char* myDomain = "api.telegram.org";\n'+
		'  String getAll="", getBody = "";\n'+
		'  String request = "parse_mode=HTML&chat_id="+chatid+"&text="+text;\n'+
		'  if (keyboard!="") request += "&reply_markup="+keyboard;\n'+
		'  client_tcp.println("POST /bot"+token+"/sendMessage HTTP/1.1");\n'+
		'  client_tcp.println("Host: " + String(myDomain));\n'+
		'  client_tcp.println("Content-Length: " + String(request.length()));\n'+
		'  client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
		'  client_tcp.println("Connection: keep-alive");\n'+
		'  client_tcp.println();\n'+
		'  client_tcp.print(request);\n'+
		'  int waitTime = 5000;\n'+
		'  long startTime = millis();\n'+
		'  boolean state = false;\n'+
		'  while ((startTime + waitTime) > millis()) {\n'+
		'    delay(100);\n'+
		'    while (client_tcp.available())  {\n'+
		'        char c = client_tcp.read();\n'+
		'        if (state==true) getBody += String(c);\n'+ 
		'        if (c == \'\\n\')  {\n'+
		'          if (getAll.length()==0) state=true;\n'+
		'          getAll = "";\n'+
		'        }\n'+
		'        else if (c != \'\\r\')\n'+
		'          getAll += String(c);\n'+
		'        startTime = millis();\n'+
		'     }\n'+
		'     if (getBody.length()>0) break;\n'+
		'  }\n'+
		'}\n';  
		
  var code = 'sendMessageToTelegram(token, chat_id,'+ value_message +',"");\n' ;
  return code;
};

Blockly.Arduino['esp32_telegrambot_sendmessage_custom'] = function(block) {	
	var value_message = Blockly.Arduino.valueToCode(block, 'message', Blockly.Arduino.ORDER_ATOMIC);
	var value_token = Blockly.Arduino.valueToCode(block, 'token', Blockly.Arduino.ORDER_ATOMIC);
	var value_chatid = Blockly.Arduino.valueToCode(block, 'chat_id', Blockly.Arduino.ORDER_ATOMIC);
	
	Blockly.Arduino.definitions_.sendMessageToTelegram_custom = ''+
		'void sendMessageToTelegram_custom(String token, String chatid, String text, String keyboard) {\n'+
		'  const char* myDomain = "api.telegram.org";\n'+
		'  String getAll="", getBody = "";\n'+
		'  String request = "parse_mode=HTML&chat_id="+chatid+"&text="+text;\n'+
		'  if (keyboard!="") request += "&reply_markup="+keyboard;\n'+
		'  Serial.println("Connect to " + String(myDomain));\n'+
		'  WiFiClientSecure client_tcp;\n';		
		if (arduinoCore_ESP32)
			Blockly.Arduino.definitions_.sendMessageToTelegram_custom += '  client_tcp.setInsecure();\n';
		Blockly.Arduino.definitions_.sendMessageToTelegram_custom +='  if (client_tcp.connect(myDomain, 443)) {\n'+		
		'    client_tcp.println("POST /bot"+token+"/sendMessage HTTP/1.1");\n'+
		'    client_tcp.println("Host: " + String(myDomain));\n'+
		'    client_tcp.println("Content-Length: " + String(request.length()));\n'+
		'    client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
		'    client_tcp.println("Connection: keep-alive");\n'+
		'    client_tcp.println();\n'+
		'    client_tcp.print(request);\n'+
		'    int waitTime = 5000;\n'+
		'    long startTime = millis();\n'+
		'    boolean state = false;\n'+
		'    while ((startTime + waitTime) > millis()) {\n'+
		'      delay(100);\n'+
		'      while (client_tcp.available())  {\n'+
		'          char c = client_tcp.read();\n'+
		'          if (state==true) getBody += String(c);\n'+ 
		'          if (c == \'\\n\')  {\n'+
		'            if (getAll.length()==0) state=true;\n'+
		'            getAll = "";\n'+
		'          }\n'+
		'          else if (c != \'\\r\')\n'+
		'            getAll += String(c);\n'+
		'          startTime = millis();\n'+
		'       }\n'+
		'       if (getBody.length()>0) break;\n'+
		'    }\n'+
		'  }\n'+		
		'}\n';  
  
  var code = 'sendMessageToTelegram_custom('+ value_token +','+ value_chatid+','+ value_message +',"");\n' ;
  return code;
};

Blockly.Arduino['esp32_telegrambot_sendlink'] = function(block) {	
	var value_link = Blockly.Arduino.valueToCode(block, 'link', Blockly.Arduino.ORDER_ATOMIC); 
  
	Blockly.Arduino.definitions_.sendLinkToTelegram = ''+
		'void sendLinkToTelegram(String token, String chatid, String link, String keyboard) {\n'+
		'  const char* myDomain = "api.telegram.org";\n'+
		'  String getAll="", getBody = "";\n'+
		'  String request = "chat_id="+chatid+"&photo="+link;\n'+
		'  if (keyboard!="") request += "&reply_markup="+keyboard;\n'+
		'  client_tcp.println("POST /bot"+token+"/sendPhoto HTTP/1.1");\n'+
		'  client_tcp.println("Host: " + String(myDomain));\n'+
		'  client_tcp.println("Content-Length: " + String(request.length()));\n'+
		'  client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
		'  client_tcp.println("Connection: keep-alive");\n'+
		'  client_tcp.println();\n'+
		'  client_tcp.print(request);\n'+
		'  int waitTime = 5000;\n'+
		'  long startTime = millis();\n'+
		'  boolean state = false;\n'+
		'  while ((startTime + waitTime) > millis()) {\n'+
		'    delay(100);\n'+
		'    while (client_tcp.available())  {\n'+
		'        char c = client_tcp.read();\n'+
		'        if (state==true) getBody += String(c);\n'+ 
		'        if (c == \'\\n\')  {\n'+
		'          if (getAll.length()==0) state=true;\n'+
		'          getAll = "";\n'+
		'        }\n'+
		'        else if (c != \'\\r\')\n'+
		'          getAll += String(c);\n'+
		'        startTime = millis();\n'+
		'     }\n'+
		'     if (getBody.length()>0) break;\n'+
		'  }\n'+
		'}\n';  
		
  var code = 'sendLinkToTelegram(token, chat_id,'+ value_link +',"");\n' ;
  return code;
};

Blockly.Arduino['esp32_telegrambot_sendlink_custom'] = function(block) {
	var value_link = Blockly.Arduino.valueToCode(block, 'link', Blockly.Arduino.ORDER_ATOMIC);
	var value_token = Blockly.Arduino.valueToCode(block, 'token', Blockly.Arduino.ORDER_ATOMIC);
	var value_chatid = Blockly.Arduino.valueToCode(block, 'chat_id', Blockly.Arduino.ORDER_ATOMIC);
	
	Blockly.Arduino.definitions_.sendLinkToTelegram_custom = ''+
		'void sendLinkToTelegram_custom(String token, String chatid, String link, String keyboard) {\n'+
		'  const char* myDomain = "api.telegram.org";\n'+
		'  String getAll="", getBody = "";\n'+
		'  String request = "chat_id="+chatid+"&photo="+link;\n'+
		'  if (keyboard!="") request += "&reply_markup="+keyboard;\n'+
		'  Serial.println("Connect to " + String(myDomain));\n'+
		'  WiFiClientSecure client_tcp;\n';		
		if (arduinoCore_ESP32)
			Blockly.Arduino.definitions_.sendLinkToTelegram_custom += '  client_tcp.setInsecure();\n';
		Blockly.Arduino.definitions_.sendLinkToTelegram_custom +='  if (client_tcp.connect(myDomain, 443)) {\n'+			
		'    client_tcp.println("POST /bot"+token+"/sendPhoto HTTP/1.1");\n'+
		'    client_tcp.println("Host: " + String(myDomain));\n'+
		'    client_tcp.println("Content-Length: " + String(request.length()));\n'+
		'    client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
		'    client_tcp.println("Connection: keep-alive");\n'+
		'    client_tcp.println();\n'+
		'    client_tcp.print(request);\n'+
		'    int waitTime = 5000;\n'+
		'    long startTime = millis();\n'+
		'    boolean state = false;\n'+
		'    while ((startTime + waitTime) > millis()) {\n'+
		'      delay(100);\n'+
		'      while (client_tcp.available())  {\n'+
		'          char c = client_tcp.read();\n'+
		'          if (state==true) getBody += String(c);\n'+ 
		'          if (c == \'\\n\')  {\n'+
		'            if (getAll.length()==0) state=true;\n'+
		'            getAll = "";\n'+
		'          }\n'+
		'          else if (c != \'\\r\')\n'+
		'            getAll += String(c);\n'+
		'          startTime = millis();\n'+
		'       }\n'+
		'       if (getBody.length()>0) break;\n'+
		'    }\n'+
		'  }\n'+		
		'}\n';  
  
  var code = 'sendLinkToTelegram_custom('+ value_token +','+ value_chatid+','+ value_link +',"");\n' ;
  return code;
};

Blockly.Arduino['esp32_telegrambot_get_token'] = function(block) {
	var code = 'token';
	return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['esp32_telegrambot_get_chatid'] = function(block) {
	var code = 'chat_id';
	return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_servo_esp'] = function(block) {	
  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  var value_channel = Blockly.Arduino.valueToCode(block, 'channel', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.setups_['ledc_'+ value_pin] = 'ledcSetup('+value_channel+', 50, 16);\n'+
										  '  ledcAttachPin('+value_pin+', '+value_channel+');'; 
  Blockly.Arduino.definitions_['servo_rotate_esp'] = ''+
			'void servo_rotate_esp(int channel, int angle) {\n'+
			'  int val = 7864-angle*34.59;\n'+ 
			'  if (val > 7864)\n'+
			'    val = 7864;\n'+
			'  else if (val < 1638)\n'+
			'    val = 1638;\n'+
			'  ledcWrite(channel, val);\n'+
			'}\n';

  var code = 'servo_rotate_esp('+ value_channel +','+ value_angle +');\n' ;
  return code;
};

Blockly.Arduino['fu_taiwan_aqi'] = function(block) {
	var dropdown_sitename = block.getFieldValue('sitename');
	var value_Authorization = Blockly.Arduino.valueToCode(block, 'Authorization', Blockly.Arduino.ORDER_ATOMIC);
	
	Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';	
	Blockly.Arduino.definitions_['ArduinoJson'] = '#include <ArduinoJson.h>';
	Blockly.Arduino.definitions_['airSite'] = 'String airSite = "";';	
	Blockly.Arduino.definitions_['airAQI'] = 'String airAQI = "";';	
	Blockly.Arduino.definitions_['airPM25'] = 'String airPM25 = "";';
	Blockly.Arduino.definitions_['airStatus'] = 'String airStatus = "";';
	Blockly.Arduino.definitions_['airTime'] = 'String airTime = "";';	
	Blockly.Arduino.definitions_['opendataAirQuality'] = '\n' +
			'void opendataAirQuality(String Site, String Authorization) {\n'+
			'  WiFiClientSecure client_tcp;\n'+
			'  String request = "/api/v1/aqx_p_432?format=json&limit=5&api_key="+Authorization+"&filters=SiteName,EQ,"+urlencode(Site);\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_['opendataAirQuality'] += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_['opendataAirQuality'] +='  if (client_tcp.connect("data.epa.gov.tw", 443)) {\n'+
			'    client_tcp.println("GET " + request + " HTTP/1.1");\n'+
			'    client_tcp.println("Host: data.epa.gov.tw");\n'+
			'    client_tcp.println("Connection: keep-alive");\n'+
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
			'    airSite = Site;\n'+
			'    airAQI = obj["AQI"].as<String>().toInt();\n'+
			'    airPM25 = obj["PM2.5"].as<String>().toInt();\n'+
			'    airStatus = obj["Status"].as<String>();\n'+			
			'    airTime = obj["PublishTime"].as<String>();\n'+
			'  }\n'+
			'}';
			
	Blockly.Arduino.definitions_['getAQI'] = '' +			
			'String getAQI(int index) {\n'+
			'  if (index==0) {\n'+
			'    return airSite;\n'+
			'  } else if (index==1) {\n'+
			'    return airAQI;\n'+
			'  } else if (index==2) {\n'+
			'    return airPM25;\n'+
			'  } else if (index==3) {\n'+
			'    return airStatus;\n'+
			'  } else if (index==4) {\n'+
			'    return airTime;\n'+
			'  }\n'+			
			'  return "";\n'+
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
	var code = 'opendataAirQuality("'+dropdown_sitename+'",'+value_Authorization+');\n';
	return code;
};

Blockly.Arduino['fu_taiwan_aqi_get'] = function(block) {
	var dropdown_data = block.getFieldValue('data');
	var code = 'getAQI('+ dropdown_data +')';
	return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_taiwan_weather'] = function(block) {
	var dropdown_locationname = block.getFieldValue('locationname');
	var value_Authorization = Blockly.Arduino.valueToCode(block, 'Authorization', Blockly.Arduino.ORDER_ATOMIC);
	
	Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';	
	Blockly.Arduino.definitions_['ArduinoJson'] = '#include <ArduinoJson.h>';

	Blockly.Arduino.definitions_['Weather0012'] = 'String Weather0012[8] = {"","","","","","","",""};';
	Blockly.Arduino.definitions_['Weather1224'] = 'String Weather1224[8] = {"","","","","","","",""};';
	Blockly.Arduino.definitions_['Weather2436'] = 'String Weather2436[8] = {"","","","","","","",""};';
	
	Blockly.Arduino.definitions_['opendataWeather'] = '\n' +
			'void opendataWeather(String location, String Authorization) {\n'+
			'  WiFiClientSecure client_tcp;\n'+
			'  String request = "/api/v1/rest/datastore/F-C0032-001?Authorization="+Authorization+"&locationName="+urlencode(location);\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_['opendataWeather'] += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_['opendataWeather'] +='  if (client_tcp.connect("opendata.cwb.gov.tw", 443)) {\n'+
			'    client_tcp.println("GET " + request + " HTTP/1.1");\n'+
			'    client_tcp.println("Host: opendata.cwb.gov.tw");\n'+
			'    client_tcp.println("Connection: keep-alive");\n'+
			'    client_tcp.println();\n'+
			'    String getResponse="",Feedback="";\n'+
			'    boolean state = false;\n'+
			'    int waitTime = 10000;\n'+
			'    long startTime = millis();\n'+
			'    char c;\n'+
			'    String temp = "";\n'+
			'    int i = 0;\n'+
			'    while ((startTime + waitTime) > millis()) {\n'+
			'      while (client_tcp.available()) {\n'+
			'        if (state==true) {\n'+
			'          temp = client_tcp.readStringUntil(\'\\r\');\n'+
			'          i++;\n'+
			'          if (i%2==0) {\n'+
			'            Feedback += temp;\n'+
			'          }\n'+
			'        }\n'+
			'        else\n'+
			'          c = client_tcp.read();\n'+
			'        if (c == \'\\n\') {\n'+
			'          if (getResponse.length()==0) state=true;\n'+
			'          getResponse = "";\n'+
			'        }\n'+
			'        else if (c != \'\\r\')\n'+
			'          getResponse += String(c);\n'+
			'        startTime = millis();\n'+
			'      }\n'+
			'      if (Feedback.length()!= 0) break;\n'+
			'    }\n'+
			'    client_tcp.stop();\n'+
			'    temp = "";\n'+
			'    for (i=0;i<Feedback.length();i++) {\n'+
			'      c = Feedback[i];\n'+
			'      if (c!=\'\\r\'&&c!=\'\\n\')\n'+
			'      temp += Feedback[i];\n'+
			'    }\n'+
			'    Feedback = temp;\n'+
			'    Weather0012[0] = location;\n'+
			'    Weather1224[0] = location;\n'+
			'    Weather2436[0] = location;\n'+
			'    JsonObject obj;\n'+
			'    DynamicJsonDocument doc(1024);\n'+
			'    Feedback = Feedback.substring(Feedback.indexOf("\\"weatherElement\\":[")+18,Feedback.length()-5);\n'+
			'    temp = Feedback.substring(Feedback.indexOf("\\"Wx\\",")+5,Feedback.indexOf("}}]}")+3);\n'+
			'    deserializeJson(doc, "{"+temp+"}");\n'+
			'    obj = doc.as<JsonObject>();\n'+
			'    Weather0012[1] = obj["time"][0]["startTime"].as<String>();\n'+
			'    Weather0012[2] = obj["time"][0]["endTime"].as<String>();\n'+
			'    Weather1224[1] = obj["time"][1]["startTime"].as<String>();\n'+
			'    Weather1224[2] = obj["time"][1]["endTime"].as<String>();\n'+
			'    Weather2436[1] = obj["time"][2]["startTime"].as<String>();\n'+
			'    Weather2436[2] = obj["time"][2]["endTime"].as<String>();\n'+
			'    Weather0012[3] = obj["time"][0]["parameter"]["parameterName"].as<String>();\n'+
			'    Weather1224[3] = obj["time"][1]["parameter"]["parameterName"].as<String>();\n'+
			'    Weather2436[3] = obj["time"][2]["parameter"]["parameterName"].as<String>();\n'+
			'    Feedback.replace(temp,"");\n'+
			'    temp = Feedback.substring(Feedback.indexOf("\\"PoP\\",")+6,Feedback.indexOf("}}]}")+3);\n'+
			'    deserializeJson(doc, "{"+temp+"}");\n'+
			'    obj = doc.as<JsonObject>();\n'+
			'    Weather0012[4] = obj["time"][0]["parameter"]["parameterName"].as<String>();\n'+
			'    Weather1224[4] = obj["time"][1]["parameter"]["parameterName"].as<String>();\n'+
			'    Weather2436[4] = obj["time"][2]["parameter"]["parameterName"].as<String>();\n'+
			'    Feedback.replace(temp,"");\n'+
			'    temp = Feedback.substring(Feedback.indexOf("\\"MinT\\",")+7,Feedback.indexOf("}}]}")+3);\n'+
			'    deserializeJson(doc, "{"+temp+"}");\n'+
			'    obj = doc.as<JsonObject>();\n'+
			'    Weather0012[5] = obj["time"][0]["parameter"]["parameterName"].as<String>();\n'+
			'    Weather1224[5] = obj["time"][1]["parameter"]["parameterName"].as<String>();\n'+
			'    Weather2436[5] = obj["time"][2]["parameter"]["parameterName"].as<String>();\n'+
			'    Feedback.replace(temp,"");\n'+
			'    temp = Feedback.substring(Feedback.indexOf("\\"CI\\",")+5,Feedback.indexOf("}}]}")+3);\n'+
			'    deserializeJson(doc, "{"+temp+"}");\n'+
			'    obj = doc.as<JsonObject>();\n'+
			'    Weather0012[6] = obj["time"][0]["parameter"]["parameterName"].as<String>();\n'+
			'    Weather1224[6] = obj["time"][1]["parameter"]["parameterName"].as<String>();\n'+
			'    Weather2436[6] = obj["time"][2]["parameter"]["parameterName"].as<String>();\n'+
			'    Feedback.replace(temp,"");\n'+
			'    temp = Feedback.substring(Feedback.indexOf("\\"MaxT\\",")+7,Feedback.indexOf("}}]}")+3);\n'+
			'    deserializeJson(doc, "{"+temp+"}");\n'+
			'    obj = doc.as<JsonObject>();\n'+
			'    Weather0012[7] = obj["time"][0]["parameter"]["parameterName"].as<String>();\n'+
			'    Weather1224[7] = obj["time"][1]["parameter"]["parameterName"].as<String>();\n'+
			'    Weather2436[7] = obj["time"][2]["parameter"]["parameterName"].as<String>();\n'+
			'  }\n'+
			'}';

	Blockly.Arduino.definitions_['getWeather'] = '' +			
			'String getWeather(int period,int index) {\n'+
			'  if (period==0) {\n'+
			'    return Weather0012[index];\n'+
			'  } else if (period==1) {\n'+
			'    return Weather1224[index];\n'+
			'  } else if (period==2) {\n'+
			'    return Weather2436[index];\n'+
			'  }\n'+			
			'  return "";\n'+
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
	var code = 'opendataWeather("'+dropdown_locationname+'",'+value_Authorization+');\n';
	return code;
};

Blockly.Arduino['fu_taiwan_weather_get'] = function(block) {
	var dropdown_period = block.getFieldValue('period');
	var dropdown_data = block.getFieldValue('data');
	var code = 'getWeather('+ dropdown_period +','+ dropdown_data +')';
	return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_oled_PROGMEM_truetype'] = function(block) {
  var variable_variable = Blockly.Arduino.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  var value_PROGMEM = Blockly.Arduino.valueToCode(block, 'PROGMEM', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['u8g2_progmem_'+variable_variable] = 'static const unsigned char PROGMEM '+variable_variable+'[] = {\n'+
			  value_PROGMEM.replace(/"/g,'').replace(/'/g,"") +
			  '\n};\n';
  return '';
};

Blockly.Arduino['fu_ez_digitalwrite'] = function(block) {
  var dropdown_led = block.getFieldValue('led');
  var pinRYG = [[16,12,13],[13,12,11],[13,14,15],[18,19,23],[13,12,11]];
  var pin = pinRYG[0][dropdown_led];
  console.log(selectBoardType());
  if (selectBoardType()=="esp32")
	pin = pinRYG[0][dropdown_led]; 
  else if (selectBoardType()=="LinkIt")
	pin = pinRYG[1][dropdown_led];
  else if (selectBoardType()=="sandeepmistry")
	pin = pinRYG[2][dropdown_led];
  else if (selectBoardType()=="BPI-BIT")
	pin = pinRYG[3][dropdown_led];
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = pinRYG[4][dropdown_led];

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
  var pinRYG = [[16,12,13],[13,12,11],[13,14,15],[18,19,23],[13,12,11]];
  var pin = pinRYG[0][dropdown_led]; 
  if (selectBoardType()=="esp32")
	pin = pinRYG[0][dropdown_led]; 
  else if (selectBoardType()=="LinkIt")
	pin = pinRYG[1][dropdown_led];
  else if (selectBoardType()=="sandeepmistry")
	pin = pinRYG[2][dropdown_led];
  else if (selectBoardType()=="BPI-BIT")
	pin = pinRYG[3][dropdown_led];
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = pinRYG[4][dropdown_led];

  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC); 

  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
  var code = 'digitalWrite('+ pin + ', ' + value_value +');\n';
  return code;
};

Blockly.Arduino['fu_ez_digitalwrite_relay'] = function(block) {
  var pin = 25;
  if (selectBoardType()=="esp32")
	pin = 25; 
  else if (selectBoardType()=="LinkIt")
	pin = 5;
  else if (selectBoardType()=="sandeepmistry")
	pin = 9; 
  else if (selectBoardType()=="BPI-BIT")
	pin = 17;
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = 8;

  var dropdown_value = block.getFieldValue('value');

  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
  
  var code = 'digitalWrite('+ pin +', '+ dropdown_value +');\n';
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
  else if (selectBoardType()=="BPI-BIT")
	pin = 17;
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = 8;

  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC); 

  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
  
  var code = 'digitalWrite('+ pin +', '+ value_value +');\n';
  return code;
};

Blockly.Arduino['fu_ez_analogwrite_input'] = function(block) {
  if (selectBoardType()=="esp32"||selectBoardType()=="BPI-BIT") 
	  var code = "";
  else {	
	  var dropdown_led = block.getFieldValue('led');
	  var pinRYG = [[16,12,13],[13,12,11],[13,14,15],[18,19,23],[13,12,11]];
	  var pin = pinRYG[0][dropdown_led]; 
	  if (selectBoardType()=="esp32")
		pin = pinRYG[0][dropdown_led]; 
	  else if (selectBoardType()=="LinkIt")
		pin = pinRYG[1][dropdown_led];
	  else if (selectBoardType()=="sandeepmistry")
		pin = pinRYG[2][dropdown_led];
	  else if (selectBoardType()=="BPI-BIT")
		pin = pinRYG[3][dropdown_led];
	  else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = pinRYG[4][dropdown_led];
	
	  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);

	  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
	  var code = 'analogWrite('+ pin +', '+ value_value +');\n';
  }
  return code;
};

Blockly.Arduino['fu_ez_analogwrite_input_esp'] = function(block) {
  if (selectBoardType()!="esp32"&&selectBoardType()!="BPI-BIT") 
	  var code = "";
  else {	
	  var dropdown_led = block.getFieldValue('led');
	  var pinRYG = [[16,12,13],[13,12,11],[13,14,15],[18,19,23],[13,12,11]];
	  var pin = pinRYG[0][dropdown_led]; 
	  if (selectBoardType()=="esp32")
		pin = pinRYG[0][dropdown_led]; 
	  else if (selectBoardType()=="LinkIt")
		pin = pinRYG[1][dropdown_led];
	  else if (selectBoardType()=="sandeepmistry")
		pin = pinRYG[2][dropdown_led];
	  else if (selectBoardType()=="BPI-BIT")
		pin = pinRYG[3][dropdown_led];
	  else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = pinRYG[4][dropdown_led];	
	
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
  var pinButton = [[5,36],[0,7],[5,11],[35,27],[4,5]];  
  var pin = pinButton[0][dropdown_button];
  if (selectBoardType()=="esp32")
	pin = pinButton[0][dropdown_button];
  else if (selectBoardType()=="LinkIt")
	pin = pinButton[1][dropdown_button];
  else if (selectBoardType()=="sandeepmistry")
	pin = pinButton[2][dropdown_button];
  else if (selectBoardType()=="BPI-BIT")
	pin = pinButton[3][dropdown_button];
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = pinRYG[4][dropdown_led];
  
  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', INPUT_PULLUP);';
  
  var code = 'digitalRead('+ pin +')' ;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_ez_digitalread_button'] = function(block) {
  var dropdown_type = block.getFieldValue('type');	
  var pinButton = [[5,36],[0,7],[5,11],[35,27],[4,5]]; 
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
  else if (selectBoardType()=="BPI-BIT") {
	pinA = pinButton[3][0];
	pinB = pinButton[3][1];
  }
  else if (selectBoardType()=="Arduino Pro or Pro Mini") {
	pinA = pinButton[4][0];
	pinB = pinButton[4][1];
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

Blockly.Arduino['fu_ez_digitalread_button_statement'] = function(block) {
  var statements = Blockly.Arduino.statementToCode(block, 'execute');
  var dropdown_type = block.getFieldValue('type');	
  var pinButton = [[5,36],[0,7],[5,11],[35,27],[4,5]]; 
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
  else if (selectBoardType()=="BPI-BIT") {
	pinA = pinButton[3][0];
	pinB = pinButton[3][1];
  }
  else if (selectBoardType()=="Arduino Pro or Pro Mini") {
	pinA = pinButton[4][0];
	pinB = pinButton[4][1];
  }    
  
  var condition = "";
  if (dropdown_type == "A") {
	Blockly.Arduino.setups_['pinmode_'+ pinA] = 'pinMode('+ pinA +', INPUT_PULLUP);';	  
	condition = 'digitalRead('+ pinA +')==0' ;
  }
  else if (dropdown_type == "B") {
	Blockly.Arduino.setups_['pinmode_'+ pinB] = 'pinMode('+ pinB +', INPUT_PULLUP);';
	condition = 'digitalRead('+ pinB +')==0' ;
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
	condition = 'pressButtonAB()';
  }
  
  var code = 'if ('+condition+') {\n'+statements+'}\n';
  return code;
};

Blockly.Arduino['fu_ez_analogread_potentiometer'] = function(block) {
  var pin = 34; 
  if (selectBoardType()=="esp32")
	pin = 34; 
  else if (selectBoardType()=="LinkIt")
	pin = 16;
  else if (selectBoardType()=="sandeepmistry")
	pin = 2;
  else if (selectBoardType()=="BPI-BIT")
	pin = 33; 
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = 15; 

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
  else if (selectBoardType()=="BPI-BIT")
	pin = 32; 
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = 14; 

  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', INPUT);';
  
  var code = 'analogRead('+ pin +')' ;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_ez_buzzer_tone'] = function(block) {
  if (selectBoardType()=="esp32"||selectBoardType()=="BPI-BIT") 
	  var code = "";
  else {
      var pin = 14;	  
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 
	  else if (selectBoardType()=="BPI-BIT")
		pin = 25;
	  else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = 3;	
	
	  var value_frequency = Blockly.Arduino.valueToCode(block, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
	 
	  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
	  var code = 'tone('+ pin +', '+ value_frequency +');\n' ;
  }
  return code;
};

Blockly.Arduino['fu_ez_buzzer_tone_duration'] = function(block) {
  if (selectBoardType()=="esp32"||selectBoardType()=="BPI-BIT") 
	  var code = "";
  else {
	  var pin = 14;
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 
	  else if (selectBoardType()=="BPI-BIT")
		pin = 25; 
	  else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = 3;	
	
	  var value_frequency = Blockly.Arduino.valueToCode(block, 'frequency', Blockly.Arduino.ORDER_ATOMIC);
	  var value_duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC);

	  Blockly.Arduino.setups_['pinmode_'+ pin] = 'pinMode('+ pin +', OUTPUT);';
	  var code = 'tone('+ pin +', '+ value_frequency +', '+ value_duration +');\n' ;
  }
  return code;
};

Blockly.Arduino['fu_ez_buzzer_tone_duration_array'] = function(block) {
  if (selectBoardType()=="esp32"||selectBoardType()=="BPI-BIT") 
	  var code = "";
  else {
	  var pin = 14; 
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 
	  else if (selectBoardType()=="BPI-BIT")
		pin = 25; 
	  else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = 3;	
	
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
  if (selectBoardType()!="esp32"&&selectBoardType()!="BPI-BIT") 
	  var code = "";
  else {	
	  var pin = 14; 
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 
	  else if (selectBoardType()=="BPI-BIT")
		pin = 25;
	  else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = 3;	
	
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
  if (selectBoardType()!="esp32"&&selectBoardType()!="BPI-BIT") 
	  var code = "";
  else {
	  var pin = 14; 
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 
	  else if (selectBoardType()=="BPI-BIT")
		pin = 25; 
	  else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = 3;	
	
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
  if (selectBoardType()=="esp32"||selectBoardType()=="BPI-BIT") 
	  var code = "";
  else {
	  var pin = 14;
	  if (selectBoardType()=="esp32")
		pin = 14; 
	  else if (selectBoardType()=="LinkIt")
		pin = 14;
	  else if (selectBoardType()=="sandeepmistry")
		pin = 0; 
	  else if (selectBoardType()=="BPI-BIT")
		pin = 25;
	  else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = 3;	
	
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
  else if (selectBoardType()=="BPI-BIT")
	pin = 5; 
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = 10; 

  var dropdown_type = block.getFieldValue('type');

  if (selectBoardType()=="Arduino Pro or Pro Mini")
	  Blockly.Arduino.definitions_['dht11_library'] = '#include <DHT_mini.h>';
  else
	  Blockly.Arduino.definitions_['dht11_library'] = '#include <DHT.h>';
  Blockly.Arduino.definitions_['dht11_'+ pin] = 'DHT dht ('+ pin +', DHT11);';
  Blockly.Arduino.setups_['dht11_begin'] = 'dht.begin();';
  if (dropdown_type=="humidity")		 
	var code = "dht.readHumidity()";
  else if (dropdown_type=="temperature")	
	var code = "dht.readTemperature()";
  else
	var code = ""; 
  
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
  else if (selectBoardType()=="BPI-BIT")
	pin = 2;
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = 9;

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
  var pin = 26;
  if (selectBoardType()=="esp32")
	pin = 26; 
  else if (selectBoardType()=="LinkIt")
	pin = 4;
  else if (selectBoardType()=="sandeepmistry")
	pin = 12; 
  else if (selectBoardType()=="BPI-BIT")
	pin = 2; 
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = 9;

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
											
	var code = 'ez_pixel_color("000000000000000000");\n';
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
  else if (selectBoardType()=="BPI-BIT")
	pin = 2; 
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = 9;

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

Blockly.Arduino['fu_ez_pixel_brightness'] = function(block){
	var pin = 26;
	if (selectBoardType()=="esp32")
		pin = 26; 
	else if (selectBoardType()=="LinkIt")
		pin = 4;
	else if (selectBoardType()=="sandeepmistry")
		pin = 12; 
	else if (selectBoardType()=="BPI-BIT")
		pin = 2;
	else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = 9;	
	
	Blockly.Arduino.definitions_['pixel_'+ pin] = '#include <Adafruit_NeoPixel.h>\n'+
												'Adafruit_NeoPixel pixels(3, '+ pin +', NEO_GRB + NEO_KHZ800);';
	Blockly.Arduino.setups_['pixel_'+ pin] = 'pixels.begin();\n'+
										   '  pixels.setBrightness(100);\n'+
										   '  pixels.clear();';
	
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
	else if (selectBoardType()=="BPI-BIT")
		pin = 2; 
	else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = 9;	
	
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
	else if (selectBoardType()=="BPI-BIT")
		pin = 2;
	else if (selectBoardType()=="Arduino Pro or Pro Mini")
		pin = 9;	
	
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
  else if (selectBoardType()=="BPI-BIT")
	pin = 16; 
  else if (selectBoardType()=="Arduino Pro or Pro Mini")
	pin = 2; 

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
	var value_str = block.getFieldValue('str');
	var temp_str = Blockly.Arduino.valueToCode(block, 'str', Blockly.Arduino.ORDER_ATOMIC);	
	var variable = "xbm_"+this.id.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
 
	if (temp_str!='""') value_str=temp_str;
	if (value_str!=''&&value_str!='""') {
		var text = value_str;
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
		var code = '';
	return code;
};

Blockly.Arduino['fu_oled_drawCustomFont'] = function(block) {
	var value_font = Blockly.Arduino.valueToCode(block, 'font', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_size = block.getFieldValue('size');
	var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
	var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
	var value_str = block.getFieldValue('str');
	var temp_str = Blockly.Arduino.valueToCode(block, 'str', Blockly.Arduino.ORDER_ATOMIC);		
	var variable = "xbm_"+this.id.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
 
	if (temp_str!='""') value_str=temp_str;
	if (value_str!=''&&value_str!='""') {
		var text = value_str;
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
		var code = '';
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

Blockly.Arduino['tcp_https_esp32'] = function(block) { 
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_https_esp32'] ='\n'+
											'String tcp_https_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_['tcp_https_esp32'] += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_['tcp_https_esp32'] +='  if (client_tcp.connect(domain.c_str(), port)) {\n'+
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
											'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_['linenotify_esp32'] += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_['linenotify_esp32'] +='  if (client_tcp.connect("notify-api.line.me", 443)) {\n'+
											'    client_tcp.println("POST /api/notify HTTP/1.1");\n'+
											'    client_tcp.println("Connection: close");\n'+
											'    client_tcp.println("Host: notify-api.line.me");\n'+
											'    client_tcp.println("User-Agent: ESp8266/1.0");\n'+
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
											'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_['linenotify_esp32'] += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_['linenotify_esp32'] +='  if (client_tcp.connect("notify-api.line.me", 443)) {\n'+
											'    client_tcp.println("POST /api/notify HTTP/1.1");\n'+
											'    client_tcp.println("Connection: close");\n'+
											'    client_tcp.println("Host: notify-api.line.me");\n'+
											'    client_tcp.println("User-Agent: ESp8266/1.0");\n'+
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

Blockly.Arduino['linenotify_all'] = function(block) {
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
											'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_['linenotify_esp32'] += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_['linenotify_esp32'] +='  if (client_tcp.connect("notify-api.line.me", 443)) {\n'+
											'    client_tcp.println("POST /api/notify HTTP/1.1");\n'+
											'    client_tcp.println("Connection: close");\n'+
											'    client_tcp.println("Host: notify-api.line.me");\n'+
											'    client_tcp.println("User-Agent: ESp8266/1.0");\n'+
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

  var token = Blockly.Arduino.valueToCode(block, 'token_', Blockly.Arduino.ORDER_ATOMIC);
  var type = block.getFieldValue('type_');
  var text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC); 
  var packageId = Blockly.Arduino.valueToCode(block, 'packageId_', Blockly.Arduino.ORDER_ATOMIC);
  var stickerId = Blockly.Arduino.valueToCode(block, 'stickerId_', Blockly.Arduino.ORDER_ATOMIC);  
  var originalContentUrl = Blockly.Arduino.valueToCode(block, 'originalContentUrl_', Blockly.Arduino.ORDER_ATOMIC);
  var previewImageUrl = Blockly.Arduino.valueToCode(block, 'previewImageUrl_', Blockly.Arduino.ORDER_ATOMIC);    
  
  if (!text) text='" "';
  if (!packageId) packageId='""';
  if (!stickerId) stickerId='""';
  if (!originalContentUrl) originalContentUrl='""';
  if (!previewImageUrl) previewImageUrl='""'; 
  var message = "";

  if (type=="text")
	message = '"message="+String(' + text + ')';
  else if (type=="sticker")
	message = '"message="+String(' + text + ')+"&stickerPackageId="+String('+packageId+')+"&stickerId="+String('+stickerId+')';
  else if (type=="image")
	message = '"message="+String(' + text + ')+"&imageThumbnail="+String('+previewImageUrl + ')+"&imageFullsize="+String('+originalContentUrl+')';

  var code = 'LineNotify_esp32('+token+','+message.replace(/\\\\/g,"\\")+');\n';
  return code;
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
  Blockly.Arduino.definitions_['close_powerdog'] ='#include "soc/soc.h"\n#include "soc/rtc_cntl_reg.h"';
  var code = 'WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);\n';
  return code; 
};

Blockly.Arduino['esp32_wifi_wait_until_ready']  = function(block){
  var ssid = Blockly.Arduino.valueToCode(block,"SSID",Blockly.Arduino.ORDER_ATOMIC)||"";
  var pass = Blockly.Arduino.valueToCode(block,"PASSWORD",Blockly.Arduino.ORDER_ATOMIC)||"";
  ssid = ssid.replace(/"/g,"");
  pass = pass.replace(/"/g,"");
  
  if (selectBoardType()=="LinkIt")
	Blockly.Arduino.definitions_.define_linkit_wifi_include="#include <LWiFi.h>";
  else if (selectBoardType()=="esp8266")
	Blockly.Arduino.definitions_.define_linkit_wifi_include="#include <ESP8266WiFi.h>";
  else 
	Blockly.Arduino.definitions_.define_linkit_wifi_include="#include <WiFi.h>";

  Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = "'+ssid+'";';
  Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = "'+pass+'";';
  Blockly.Arduino.setups_.setup_initWiFi='initWiFi();';
  Blockly.Arduino.definitions_.initWiFi = ''+
		'void initWiFi() {\n'+
		'  \n'+
		'  for (int i=0;i<2;i++) {\n'+
		'    WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+
		'    \n'+
		'    delay(1000);\n'+
		'    Serial.println("");\n'+
		'    Serial.print("Connecting to ");\n'+
		'    Serial.println(_lwifi_ssid);\n'+
		'    \n'+
		'    long int StartTime=millis();\n'+
		'    while (WiFi.status() != WL_CONNECTED) {\n'+
		'        delay(500);\n'+
		'        if ((StartTime+5000) < millis()) break;\n'+
		'    }\n'+
		'    \n'+
		'    if (WiFi.status() == WL_CONNECTED) {\n'+     
		'      Serial.println("");\n'+
		'      Serial.println("STAIP address: ");\n'+
		'      Serial.println(WiFi.localIP());\n'+
		'      Serial.println("");\n'+
		'    \n'+
		'      break;\n'+
		'    }\n'+
		'  }\n'+	
		'}\n';  
  var code = '';
  return code; 
};

Blockly.Arduino['thingspeak_update_noreturn'] = function (block) {
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_http_esp32'] ='\n'+
											'String tcp_http_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_['tcp_http_esp32'] += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_['tcp_http_esp32'] +='  if (client_tcp.connect(domain.c_str(), port)) {\n'+
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
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_http_esp32'] ='\n'+
											'String tcp_http_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_['tcp_http_esp32'] += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_['tcp_http_esp32'] +='  if (client_tcp.connect(domain.c_str(), port)) {\n'+
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
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_http_esp32'] ='\n'+
											'String tcp_http_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_['tcp_http_esp32'] += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_['tcp_http_esp32'] +='  if (client_tcp.connect(domain.c_str(), port)) {\n'+
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
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_['tcp_http_esp32'] ='\n'+
											'String tcp_http_esp32(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_['tcp_http_esp32'] += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_['tcp_http_esp32'] +='  if (client_tcp.connect(domain.c_str(), port)) {\n'+
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
  var value_pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
  var value_channel = Blockly.Arduino.valueToCode(block, 'channel', Blockly.Arduino.ORDER_ATOMIC);	
  Blockly.Arduino.setups_['ledc_'+ value_pin] = 'ledcSetup('+value_channel+', 5000, 8);\n'+
										  '  ledcAttachPin('+value_pin+', '+value_channel+');'; 

  var code = 'ledcWrite('+value_channel+', '+value_val+');\n';
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
  var mainpage = Blockly.Arduino.valueToCode(block, 'mainpage', Blockly.Arduino.ORDER_ATOMIC);
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var ssid_ap = Blockly.Arduino.valueToCode(block, 'ssid_ap', Blockly.Arduino.ORDER_ATOMIC);
  var pass_ap = Blockly.Arduino.valueToCode(block, 'password_ap', Blockly.Arduino.ORDER_ATOMIC);
  var baudrate = block.getFieldValue('baudrate');  
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');
  
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['WiFiClientSecure'] ='#include <WiFiClientSecure.h>';	
  Blockly.Arduino.definitions_.define_soc_h_include ='#include "soc/soc.h"';
  Blockly.Arduino.definitions_.define_rtc_cntl_reg_h_include ='#include "soc/rtc_cntl_reg.h"';
  
  Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = '+ssid+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = '+pass+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_apssid='const char* apssid = '+ssid_ap+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_appass='const char* appassword = '+pass_ap+';';   
  Blockly.Arduino.definitions_.define_linkit_wifi_server= 'WiFiServer server(80);\n';
  Blockly.Arduino.definitions_.define_linkit_wifi_command= 'String Feedback="",Command="",cmd="",p1="",p2="",p3="",p4="",p5="",p6="",p7="",p8="",p9="";\nbyte receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;';
  
  Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void ExecuteCommand() {\n'+
			'  //Serial.println("");\n'+
			'  //Serial.println("Command: "+Command);\n'+
			'  //Serial.println("cmd= "+cmd+" ,p1= "+p1+" ,p2= "+p2+" ,p3= "+p3+" ,p4= "+p4+" ,p5= "+p5+" ,p6= "+p6+" ,p7= "+p7+" ,p8= "+p8+" ,p9= "+p9);\n'+
			'  //Serial.println("");\n'+
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
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(p1.c_str(), p2.c_str());\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(p1);\n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      Serial.println("");\n'+
			'      Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'      Feedback="STAIP: "+WiFi.localIP().toString();\n'+
			'      if (WiFi.status() == WL_CONNECTED) {\n'+
			'          WiFi.softAP((WiFi.localIP().toString()+"_"+p1).c_str(), p2.c_str());\n'+
			'    	   pinMode(2, OUTPUT);\n'+ 
			'    	   for (int i=0;i<5;i++) {\n'+ 
			'    	       digitalWrite(2, HIGH);\n'+ 
			'    	       delay(100);\n'+ 
			'    	       digitalWrite(2, LOW);\n'+ 
			'    	       delay(100);\n'+ 
			'    	   }\n'+ 
 			'        break;\n'+
			'      }\n'+
			'    }\n'+			
			'  }\n'+
  			'  else if (cmd=="inputpullup") {\n'+
  			'    pinMode(p1.toInt(), INPUT_PULLUP);\n'+
  			'  }\n'+
  			'  else if (cmd=="pinmode") {\n'+
  			'    if (p2.toInt()==1)\n'+
  			'      pinMode(p1.toInt(), OUTPUT);\n'+
  			'    else\n'+
  			'      pinMode(p1.toInt(), INPUT);\n'+
  			'  }\n'+
			'  else if (cmd=="digitalwrite") {\n'+
			'    ledcDetachPin(p1.toInt());\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  }\n'+
 			'  else if (cmd=="digitalread") {\n'+
 			'   Feedback=String(digitalRead(p1.toInt()));\n'+
			'  }\n'+
			'  else if (cmd=="analogwrite") {\n'+
			'    ledcAttachPin(p1.toInt(), 1);\n'+
			'    ledcSetup(1, 5000, 8);\n'+
			'    ledcWrite(1,p2.toInt());\n'+
			'  }\n'+
			'  else if (cmd=="analogread") {\n'+
			'    Feedback=String(analogRead(p1.toInt()));\n'+
			'  }\n'+
			'  else if (cmd=="touchread") {\n'+
			'    Feedback=String(touchRead(p1.toInt()));\n'+
			'  }\n'+
			'  else if (cmd=="servo") {\n'+
			'    ledcAttachPin(p1.toInt(), p3.toInt());\n'+
			'    ledcSetup(p3.toInt(), 50, 16);\n'+
			'    int val = 7864-p2.toInt()*34.59;\n'+
			'    if (val > 7864)\n'+
			'       val = 7864;\n'+
			'    else if (val < 1638)\n'+
			'      val = 1638;\n'+
			'    ledcWrite(p3.toInt(), val);\n'+
			'  }\n'+
			'  else if (cmd=="relay") {\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  }\n'+
			'  else if (cmd=="print") {\n'+
			'    Serial.print(p1);\n'+
			'  }\n'+
			'  else if (cmd=="println") {\n'+
			'    Serial.println(p1);\n'+
			'  }\n'+	
			'  else if (cmd=="delay") {\n'+
			'    delay(p1.toInt());\n'+
			'  }\n'+			
			'  else if (cmd=="buzzer") { \n'+
			'    pinMode(p1.toInt(),OUTPUT);\n'+
			'    if (p4=="") p4="9";\n'+
			'    ledcSetup(p4.toInt(), 2000, 8);\n'+
			'    ledcAttachPin(p1.toInt(), p4.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), p2.toInt());\n'+
			'    delay(p3.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), 0);\n'+			
			'  }\n'+
			'  else {\n  '+ 
			statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';

	Blockly.Arduino.setups_.setup_serial="WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);\n  Serial.begin("+baudrate+");\n  delay(10);\n";
	Blockly.Arduino.setups_.setup_wifi=''+
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
			'  initWiFi();\n\n';

	Blockly.Arduino.definitions_.initWiFi = ''+
			'  void initWiFi() {\n'+
			'    WiFi.mode(WIFI_AP_STA);\n'+
			'    \n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+
			'      \n'+
			'      delay(1000);\n'+
			'      Serial.println("");\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(_lwifi_ssid);\n'+
			'      \n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      \n'+
			'      if (WiFi.status() == WL_CONNECTED) {\n'+
			'        WiFi.softAP((WiFi.localIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+      
			'        Serial.println("");\n'+
			'        Serial.println("STAIP address: ");\n'+
			'        Serial.println(WiFi.localIP());\n'+
			'        Serial.println("");\n'+
			'      	 \n'+
			'    	 pinMode(2, OUTPUT);\n'+ 
			'    	 for (int i=0;i<5;i++) {\n'+ 
			'    	   digitalWrite(2, HIGH);\n'+ 
			'    	   delay(100);\n'+ 
			'    	   digitalWrite(2, LOW);\n'+ 
			'    	   delay(100);\n'+ 
			'    	 }\n'+ 
			'        break;\n'+
			'      }\n'+
			'    }\n'+
			'    \n'+
			'    if (WiFi.status() != WL_CONNECTED) {\n'+
			'      WiFi.softAP((WiFi.softAPIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+
			'  	   \n'+
			'    	pinMode(2, OUTPUT);\n'+ 
			'    	for (int i=0;i<3;i++) {\n'+ 
			'    	  digitalWrite(2, HIGH);\n'+ 
			'    	  delay(500);\n'+ 
			'    	  digitalWrite(2, LOW);\n'+ 
			'    	  delay(500);\n'+ 
			'    	}\n'+ 
			'    }\n'+
			'    \n'+
			'    Serial.println("");\n'+
			'    Serial.println("APIP address: ");\n'+
			'    Serial.println(WiFi.softAPIP());\n'+
			'    \n'+
			'    server.begin();\n'+ 
			'  }\n';
			
	Blockly.Arduino.definitions_.getRequest = ''+
			'  void getRequest() {\n'+
			'    Command="";cmd="";p1="";p2="";p3="";p4="";p5="";p6="";p7="";p8="";p9="";\n'+
			'    receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;\n'+
			'  	 \n'+
			'    WiFiClient client = server.available();\n'+
			'    \n'+
			'    if (client) {\n'+
			'      String currentLine = "";\n'+
			'  	   \n'+
			'      while (client.connected()) {\n'+
			'        if (client.available()) {\n'+
			'          char c = client.read();\n'+             
			'          \n'+
			'          getCommand(c);\n'+
			'          \n'+
			'          if (c == \'\\n\') {\n'+
			'            if (currentLine.length() == 0) {\n'+    
			'   	        client.println("HTTP/1.1 200 OK");\n'+
			'   	        client.println("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");\n'+
			'   	        client.println("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");\n'+
			'   	        client.println("Content-Type: text/html; charset=utf-8");\n'+
			'   	        client.println("Access-Control-Allow-Origin: *");\n'+
			'   	        client.println("X-Content-Type-Options: nosniff");\n'+
			'   	        client.println();\n'+
			'   	        if (Feedback=="")\n'+
			'   	        	Feedback='+mainpage+';\n'+
			'   	        for (int index = 0; index < Feedback.length(); index = index+1024) {\n'+
			'   	          client.print(Feedback.substring(index, index+1024));\n'+
			'   	        }\n'+
			'   	        Feedback="";\n'+
			'   	        break;\n'+
			'            } else {\n'+
			'              currentLine = "";\n'+
			'            }\n'+
			'          }\n'+ 
			'          else if (c != \'\\r\') {\n'+
			'            currentLine += c;\n'+
			'          }\n'+
			'  		   \n'+
			'          if ((currentLine.indexOf("\/?")!=-1)&&(currentLine.indexOf(" HTTP")!=-1)) {\n'+
			'            if (Command.indexOf("stop")!=-1) {\n'+
			'              client.println();\n'+
			'              client.println();\n'+
 			'             client.stop();\n'+
			'            }\n'+
			'            currentLine="";\n'+
			'            Feedback="";\n'+
			'            ExecuteCommand();\n'+
			'          }\n'+
			'        }\n'+
			'      }\n'+
			'      delay(1);\n'+
			'      client.stop();\n'+
			'    }\n'+
			'  }\n';	
			
	Blockly.Arduino.definitions_.getCommand = ''+
			'  void getCommand(char c) {\n'+
			'    if (c==\'?\') receiveState=1;\n'+
			'    if ((c==\' \')||(c==\'\\r\')||(c==\'\\n\')) receiveState=0;\n'+
			'    \n'+
			'    if (receiveState==1) {\n'+
			'      Command=Command+String(c);\n'+
			'      \n'+
			'      if (c==\'=\') cmdState=0;\n'+
			'      if (c==\';\') pState++;\n'+
			'      \n'+
			'      if ((cmdState==1)&&((c!=\'?\')||(questionState==1))) cmd=cmd+String(c);\n'+
			'      if ((cmdState==0)&&(pState==1)&&((c!=\'=\')||(equalState==1))) p1=p1+String(c);\n'+
			'      if ((cmdState==0)&&(pState==2)&&(c!=\';\')) p2=p2+String(c);\n'+
			'      if ((cmdState==0)&&(pState==3)&&(c!=\';\')) p3=p3+String(c);\n'+
			'      if ((cmdState==0)&&(pState==4)&&(c!=\';\')) p4=p4+String(c);\n'+
			'      if ((cmdState==0)&&(pState==5)&&(c!=\';\')) p5=p5+String(c);\n'+
			'      if ((cmdState==0)&&(pState==6)&&(c!=\';\')) p6=p6+String(c);\n'+
			'      if ((cmdState==0)&&(pState==7)&&(c!=\';\')) p7=p7+String(c);\n'+
			'      if ((cmdState==0)&&(pState==8)&&(c!=\';\')) p8=p8+String(c);\n'+
			'      if ((cmdState==0)&&(pState>=9)&&((c!=\';\')||(semicolonState==1))) p9=p9+String(c);\n'+
			'      \n'+
			'      if (c==\'?\') questionState=1;\n'+
			'      if (c==\'=\') equalState=1;\n'+
			'      if ((pState>=9)&&(c==\';\')) semicolonState=1;\n'+
			'    }\n'+
			'  }\n';		


  code = '';
  return code;
};

Blockly.Arduino['esp32_myfirmata_bluetooth'] = function(block) {
    var baudrate = block.getFieldValue('baudrate');
    var blename = Blockly.Arduino.valueToCode(block, 'blename', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_.define_esp32_bluetooth_include = '#include "BluetoothSerial.h"\n'+
																	'#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)\n'+
																	'  #error Bluetooth is not enabled! Please run `make menuconfig` to and enable it\n'+
																	'#endif\n'+
																	'BluetoothSerial SerialBT;\n';
	Blockly.Arduino.definitions_.define_esp32_bluetooth_command = 'String ReceiveData="", Command="",cmd="",p1="",p2="",p3="",p4="",p5="",p6="",p7="",p8="",p9="";\n'+
																  'byte ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;\n';

	var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');

	Blockly.Arduino.definitions_.define_esp32_ExecuteCommand = '\n'+
			'void ExecuteCommand() {\n'+
			'  Serial.println("");\n'+
			'  Serial.println("cmd= "+cmd+" ,p1= "+p1+" ,p2= "+p2+" ,p3= "+p3+" ,p4= "+p4+" ,p5= "+p5+" ,p6= "+p6+" ,p7= "+p7+" ,p8= "+p8+" ,p9= "+p9);\n'+
			'  Serial.println("");\n'+
			'  if (cmd=="yourcmd") {\n'+
			'    //you can do anything\n'+
			'  }\n'+
			'  else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  }\n'+			
			'  else if (cmd=="inputpullup") {\n'+
			'    pinMode(p1.toInt(), INPUT_PULLUP);\n'+
			'  }\n'+
			'  else if (cmd=="pinmode") {\n'+
			'    pinMode(p1.toInt(), p2.toInt());\n'+
			'  }\n'+     
			'  else if (cmd=="digitalwrite") {\n'+
			'    ledcDetachPin(p1.toInt());\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(),p2.toInt());\n'+
			'  }\n'+  
			'  else if (cmd=="digitalread") {\n'+
			'    SerialBT.println(String(digitalRead(p1.toInt())));\n'+
			'  }\n'+ 
			'  else if (cmd=="touchread") {\n'+
			'    SerialBT.println(String(touchRead(p1.toInt())));\n'+
			'  }\n'+
			'  else if (cmd=="analogwrite") {\n'+
			'    ledcAttachPin(p1.toInt(), 1);\n'+
			'    ledcSetup(1, 5000, 8);\n'+
			'    ledcWrite(1,p2.toInt());\n'+
			'  }\n'+   
			'  else if (cmd=="analogread") {\n'+
			'    SerialBT.println(String(analogRead(p1.toInt())));\n'+
			'  }\n'+
			'  else if (cmd=="servo") {\n'+
			'    ledcAttachPin(p1.toInt(), p3.toInt());\n'+
			'    ledcSetup(p3.toInt(), 50, 16);\n'+
			'    int val = 7864-p2.toInt()*34.59;\n'+
			'    if (val > 7864)\n'+
			'       val = 7864;\n'+
			'    else if (val < 1638)\n'+
			'      val = 1638;\n'+
			'    ledcWrite(p3.toInt(), val);\n'+
			'  }\n'+
			'  else if (cmd=="relay") {\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  }\n'+
			'  else if (cmd=="print") {\n'+
			'    Serial.print(p1);\n'+
			'  }\n'+
			'  else if (cmd=="println") {\n'+
			'    Serial.println(p1);\n'+
			'  }\n'+	
			'  else if (cmd=="delay") {\n'+
			'    delay(p1.toInt());\n'+
			'  }\n'+			
			'  else if (cmd=="buzzer") { \n'+
			'    pinMode(p1.toInt(),OUTPUT);\n'+
			'    if (p4=="") p4="9";\n'+
			'    ledcSetup(p4.toInt(), 2000, 8);\n'+
			'    ledcAttachPin(p1.toInt(), p4.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), p2.toInt());\n'+
			'    delay(p3.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), 0);\n'+			
			'  }\n'+			
			'  else {\n  '+statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';

	Blockly.Arduino.setups_.setup_serial = ''+
			'  Serial.begin('+baudrate+');\n'+ 
			'  SerialBT.begin('+blename+');\n'+ 
			'  delay(10);\n';	

    Blockly.Arduino.definitions_.define_bluetooth_getCommand = '\n'+
			'void getCommand() {\n'+
			'  ReceiveData="";Command="";cmd="";p1="";p2="";p3="";p4="";p5="";p6="";p7="";p8="";p9="";\n'+
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
  			'        if ((cmdState==0)&&(strState==1)&&((c!=\'=\')||(equalstate==1))) p1=p1+String(c);\n'+
  			'        if ((cmdState==0)&&(strState==2)&&(c!=\';\')) p2=p2+String(c);\n'+
  			'        if ((cmdState==0)&&(strState==3)&&(c!=\';\')) p3=p3+String(c);\n'+
  			'        if ((cmdState==0)&&(strState==4)&&(c!=\';\')) p4=p4+String(c);\n'+
 			'        if ((cmdState==0)&&(strState==5)&&(c!=\';\')) p5=p5+String(c);\n'+
 			'        if ((cmdState==0)&&(strState==6)&&(c!=\';\')) p6=p6+String(c);\n'+
 			'        if ((cmdState==0)&&(strState==7)&&(c!=\';\')) p7=p7+String(c);\n'+
 			'        if ((cmdState==0)&&(strState==8)&&(c!=\';\')) p8=p8+String(c);\n'+
 			'        if ((cmdState==0)&&(strState>=9)&&((c!=\';\')||(semicolonstate==1))) p9=p9+String(c);\n'+
  			'        if (c==\'?\') questionstate=1;\n'+
  			'        if (c==\'=\') equalstate=1;\n'+
  			'        if ((strState>=9)&&(c==\';\')) semicolonstate=1;\n'+
  			'      }\n'+
  			'      delay(1);\n'+
  			'     }\n'+
  			'  }\n'+
			'}';
			
  code = '\n  getCommand();\n'+ 
		 'if (ReceiveData.indexOf("?")==0) {\n'+
         '  ExecuteCommand();\n'+
         '}\n';
  return code;
};

Blockly.Arduino['servermodule_cmd'] = function (block) {
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'cmd == String(' + text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_cmd_if'] = function (block) {
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  var statement = Blockly.Arduino.statementToCode(block, 'statement');
  var code = 'if (cmd == String(' + text + ')) {\n'+statement+'}\n';
  return code;
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
  var p1 = Blockly.Arduino.valueToCode(block, 'p1', Blockly.Arduino.ORDER_ATOMIC);
  var p2 = Blockly.Arduino.valueToCode(block, 'p2', Blockly.Arduino.ORDER_ATOMIC);
  var p3 = Blockly.Arduino.valueToCode(block, 'p3', Blockly.Arduino.ORDER_ATOMIC);
  var p4 = Blockly.Arduino.valueToCode(block, 'p4', Blockly.Arduino.ORDER_ATOMIC);
  var p5 = Blockly.Arduino.valueToCode(block, 'p5', Blockly.Arduino.ORDER_ATOMIC);
  var p6 = Blockly.Arduino.valueToCode(block, 'p6', Blockly.Arduino.ORDER_ATOMIC);
  var p7 = Blockly.Arduino.valueToCode(block, 'p7', Blockly.Arduino.ORDER_ATOMIC);
  var p8 = Blockly.Arduino.valueToCode(block, 'p8', Blockly.Arduino.ORDER_ATOMIC);
  var p9 = Blockly.Arduino.valueToCode(block, 'p9', Blockly.Arduino.ORDER_ATOMIC);  
  var code = '"?"+String('+cmd+')+"="+String('+p1+')+";"+String('+p2+')+";"+String('+p3+')+";"+String('+p4+')+";"+String('+p5+')+";"+String('+p6+')+";"+String('+p7+')+";"+String('+p8+')+";"+String('+p9+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_set_address1'] = function (block) {
  var cmd = Blockly.Arduino.valueToCode(block, 'cmd', Blockly.Arduino.ORDER_ATOMIC);
  var p1 = Blockly.Arduino.valueToCode(block, 'p1', Blockly.Arduino.ORDER_ATOMIC);
  var p2 = Blockly.Arduino.valueToCode(block, 'p2', Blockly.Arduino.ORDER_ATOMIC); 
  var code = '"?"+String('+cmd+')+"="+String('+p1+')+";"+String('+p2+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_set_address2'] = function (block) {
  var cmd = Blockly.Arduino.valueToCode(block, 'cmd', Blockly.Arduino.ORDER_ATOMIC);
  var code = '"?"+String('+cmd+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_stream'] = function (block) {
  var cmd = Blockly.Arduino.valueToCode(block, 'cmd', Blockly.Arduino.ORDER_ATOMIC);
  var code = '"/control"+'+cmd;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_stream_url'] = function (block) {
  var code = '"http:\/\/"+window.location.hostname+":81/stream"';
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
  Blockly.Arduino.setups_["pinRead_"+pin] = 'pinMode(' + pin + ', INPUT_PULLUP);';
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
    var baudrate = block.getFieldValue('baudrate');
    var blename = Blockly.Arduino.valueToCode(block, 'blename', Blockly.Arduino.ORDER_ATOMIC);
	var statements_setup = Blockly.Arduino.statementToCode(block, 'setup');

	Blockly.Arduino.definitions_.define_esp32_bluetooth_include = '#include "BluetoothSerial.h"\n'+
																	'#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)\n'+
																	'  #error Bluetooth is not enabled! Please run `make menuconfig` to and enable it\n'+
																	'#endif\n'+
																	'BluetoothSerial SerialBT;\n';

    code = 'Serial.begin('+baudrate+');\n'+ 
		   'SerialBT.begin('+blename+');\n'+ 
		   'delay(10);\n'+ statements_setup +
		   '\n';
  return code;
};

Blockly.Arduino['esp32_bluetooth_readdata'] = function(block) {
  var statements = Blockly.Arduino.statementToCode(block, 'execute');
  
  code ='if (SerialBT.available()) {\n'+
		'  String BluetoothData = "";\n'+
		'  while (SerialBT.available()) {\n'+
		'    char c=SerialBT.read();\n'+
		'    BluetoothData=BluetoothData+String(c);\n'+
		'    delay(1);\n'+
		'  }\n'+statements+		
		'}\n';
  return code;
};

Blockly.Arduino['esp32_bluetooth_getdata'] = function(block) {
  code = 'BluetoothData';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['linkit7697_myfirmata'] = function(block) {
  var mainpage = Blockly.Arduino.valueToCode(block, 'mainpage', Blockly.Arduino.ORDER_ATOMIC);
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var baudrate = block.getFieldValue('baudrate');
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand'); 
  
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <LWiFi.h>';  
  Blockly.Arduino.definitions_.define_linkit_wifi_ssid='char _lwifi_ssid[] = '+ssid+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_pass='char _lwifi_pass[] = '+pass+';';
  Blockly.Arduino.definitions_.define_linkit_wifi_server= 'WiFiServer server(80);';
  Blockly.Arduino.definitions_.define_linkit_wifi_command= 'String Feedback="",Command="",cmd="",p1="",p2="",p3="",p4="",p5="",p6="",p7="",p8="",p9="";\nbyte receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;';

  Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void ExecuteCommand() {\n'+
			'  //Serial.println("");\n'+
			'  //Serial.println("Command: "+Command);\n'+
			'  //Serial.println("cmd= "+cmd+" ,p1= "+p1+" ,p2= "+p2+" ,p3= "+p3+" ,p4= "+p4+" ,p5= "+p5+" ,p6= "+p6+" ,p7= "+p7+" ,p8= "+p8+" ,p9= "+p9);\n'+
			'  //Serial.println("");\n'+
			'  if (cmd=="ip") {\n'+
			'    Feedback=WiFi.localIP().toString();\n'+
			'  }\n'+
			'  else if (cmd=="resetwifi") {\n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(p1.c_str(), p2.c_str());\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(p1);\n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      Serial.println("");\n'+
			'      Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'      Feedback="STAIP: "+WiFi.localIP().toString();\n'+
			'    }\n'+			
			'  }\n'+
  			'  else if (cmd=="inputpullup") {\n'+
  			'    pinMode(p1.toInt(), INPUT_PULLUP);\n'+
  			'  }\n'+
  			'  else if (cmd=="pinmode") {\n'+
  			'    if (p2.toInt()==1)\n'+
  			'      pinMode(p1.toInt(), OUTPUT);\n'+
  			'    else\n'+
  			'      pinMode(p1.toInt(), INPUT);\n'+
  			'  }\n'+
			'  else if (cmd=="digitalwrite") {\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  }\n'+
 			'  else if (cmd=="digitalread") {\n'+
 			'   Feedback=String(digitalRead(p1.toInt()));\n'+
			'  }\n'+
			'  else if (cmd=="analogwrite") {\n'+
			'    analogWrite(p1.toInt(), p2.toInt());\n'+
			'  }\n'+
			'  else if (cmd=="analogread") {\n'+
			'    Feedback=String(analogRead(p1.toInt()));\n'+
			'  }\n'+
			'  else if (cmd=="print") {\n'+
			'    Serial.print(p1);\n'+
			'  }\n'+
			'  else if (cmd=="println") {\n'+
			'    Serial.println(p1);\n'+
			'  }\n'+
			'  else if (cmd=="delay") {\n'+
			'    delay(p1.toInt());\n'+
			'  }\n'+			
			'  else {\n  '+ 
			statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';

	Blockly.Arduino.setups_.setup_serial="Serial.begin("+baudrate+");\n  delay(10);\n";
	Blockly.Arduino.setups_.setup_wifi=''+
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
			'  initWiFi();\n\n';

	Blockly.Arduino.definitions_.initWiFi = ''+
			'  void initWiFi() {\n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+
			'      \n'+
			'      delay(1000);\n'+
			'      Serial.println("");\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(_lwifi_ssid);\n'+
			'      \n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      \n'+
			'      if (WiFi.status() == WL_CONNECTED) {\n'+    
			'        Serial.println("");\n'+
			'        Serial.println("STAIP address: ");\n'+
			'        Serial.println(WiFi.localIP());\n'+
			'        Serial.println("");\n'+
			'      	 \n'+
			'    	 pinMode(LED_BUILTIN, OUTPUT);\n'+ 
			'    	 for (int i=0;i<5;i++) {\n'+ 
			'    	   digitalWrite(LED_BUILTIN, HIGH);\n'+ 
			'    	   delay(100);\n'+ 
			'    	   digitalWrite(LED_BUILTIN, LOW);\n'+ 
			'    	   delay(100);\n'+ 
			'    	 }\n'+ 
			'        break;\n'+
			'      }\n'+
			'    }\n'+
			'    \n'+
			'    if (WiFi.status() != WL_CONNECTED) {\n'+
			'    	pinMode(LED_BUILTIN, OUTPUT);\n'+ 
			'    	for (int i=0;i<3;i++) {\n'+ 
			'    	  digitalWrite(LED_BUILTIN, HIGH);\n'+ 
			'    	  delay(500);\n'+ 
			'    	  digitalWrite(LED_BUILTIN, LOW);\n'+ 
			'    	  delay(500);\n'+ 
			'    	}\n'+ 
			'    }\n'+
			'    server.begin();\n'+ 
			'  }\n';
			
	Blockly.Arduino.definitions_.getRequest = ''+
			'  void getRequest() {\n'+
			'    Command="";cmd="";p1="";p2="";p3="";p4="";p5="";p6="";p7="";p8="";p9="";\n'+
			'    receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;\n'+
			'  	 \n'+
			'    WiFiClient client = server.available();\n'+
			'    \n'+
			'    if (client) {\n'+
			'      String currentLine = "";\n'+
			'  	   \n'+
			'      while (client.connected()) {\n'+
			'        if (client.available()) {\n'+
			'          char c = client.read();\n'+             
			'          \n'+
			'          getCommand(c);\n'+
			'          \n'+
			'          if (c == \'\\n\') {\n'+
			'            if (currentLine.length() == 0) {\n'+    
			'   	        client.println("HTTP/1.1 200 OK");\n'+
			'   	        client.println("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");\n'+
			'   	        client.println("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");\n'+
			'   	        client.println("Content-Type: text/html; charset=utf-8");\n'+
			'   	        client.println("Access-Control-Allow-Origin: *");\n'+
			'   	        client.println("X-Content-Type-Options: nosniff");\n'+
			'   	        client.println();\n'+
			'   	        if (Feedback=="")\n'+
			'   	        	Feedback='+mainpage+';\n'+
			'   	        for (int index = 0; index < Feedback.length(); index = index+1024) {\n'+
			'   	          client.print(Feedback.substring(index, index+1024));\n'+
			'   	        }\n'+
			'   	        Feedback="";\n'+
			'   	        break;\n'+
			'            } else {\n'+
			'              currentLine = "";\n'+
			'            }\n'+
			'          }\n'+ 
			'          else if (c != \'\\r\') {\n'+
			'            currentLine += c;\n'+
			'          }\n'+
			'  		   \n'+
			'          if ((currentLine.indexOf("\/?")!=-1)&&(currentLine.indexOf(" HTTP")!=-1)) {\n'+
			'            if (Command.indexOf("stop")!=-1) {\n'+
			'              client.println();\n'+
			'              client.println();\n'+
 			'             client.stop();\n'+
			'            }\n'+
			'            currentLine="";\n'+
			'            Feedback="";\n'+
			'            ExecuteCommand();\n'+
			'          }\n'+
			'        }\n'+
			'      }\n'+
			'      delay(1);\n'+
			'      client.stop();\n'+
			'    }\n'+
			'  }\n';	
			
	Blockly.Arduino.definitions_.getCommand = ''+
			'  void getCommand(char c) {\n'+
			'    if (c==\'?\') receiveState=1;\n'+
			'    if ((c==\' \')||(c==\'\\r\')||(c==\'\\n\')) receiveState=0;\n'+
			'    \n'+
			'    if (receiveState==1) {\n'+
			'      Command=Command+String(c);\n'+
			'      \n'+
			'      if (c==\'=\') cmdState=0;\n'+
			'      if (c==\';\') pState++;\n'+
			'      \n'+
			'      if ((cmdState==1)&&((c!=\'?\')||(questionState==1))) cmd=cmd+String(c);\n'+
			'      if ((cmdState==0)&&(pState==1)&&((c!=\'=\')||(equalState==1))) p1=p1+String(c);\n'+
			'      if ((cmdState==0)&&(pState==2)&&(c!=\';\')) p2=p2+String(c);\n'+
			'      if ((cmdState==0)&&(pState==3)&&(c!=\';\')) p3=p3+String(c);\n'+
			'      if ((cmdState==0)&&(pState==4)&&(c!=\';\')) p4=p4+String(c);\n'+
			'      if ((cmdState==0)&&(pState==5)&&(c!=\';\')) p5=p5+String(c);\n'+
			'      if ((cmdState==0)&&(pState==6)&&(c!=\';\')) p6=p6+String(c);\n'+
			'      if ((cmdState==0)&&(pState==7)&&(c!=\';\')) p7=p7+String(c);\n'+
			'      if ((cmdState==0)&&(pState==8)&&(c!=\';\')) p8=p8+String(c);\n'+
			'      if ((cmdState==0)&&(pState>=9)&&((c!=\';\')||(semicolonState==1))) p9=p9+String(c);\n'+
			'      \n'+
			'      if (c==\'?\') questionState=1;\n'+
			'      if (c==\'=\') equalState=1;\n'+
			'      if ((pState>=9)&&(c==\';\')) semicolonState=1;\n'+
			'    }\n'+
			'  }\n';
  code = '';
  return code;
};
Blockly.Arduino['table_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.Arduino.valueToCode(block, 'borderwidth_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.Arduino.valueToCode(block, 'bordercolor_', Blockly.Arduino.ORDER_ATOMIC);
  var value_trcount_ = Blockly.Arduino.valueToCode(block, 'trcount_', Blockly.Arduino.ORDER_ATOMIC);
  var value_tdcount_ = Blockly.Arduino.valueToCode(block, 'tdcount_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_bgcolor_ = Blockly.Arduino.valueToCode(block, 'bgcolor_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'table_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_trcount_ + ',' + value_tdcount_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_bgcolor_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['table_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['table_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['table_clear'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_clear(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['table_change_colsrows'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_target_ = block.getFieldValue('target_');
  var value_cmd_ = block.getFieldValue('cmd_');  
  var value_index_ = Blockly.Arduino.valueToCode(block, 'index_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_change_colsrows(' + value_id_ + ',"'+ value_target_ + '","' + value_cmd_ + '",' + value_index_+ ');\n'
  return code;
};

Blockly.Arduino['table_td_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['table_border_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.Arduino.valueToCode(block, 'borderwidth_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.Arduino.valueToCode(block, 'bordercolor_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_border_set(' + value_id_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  return code;
};

Blockly.Arduino['table_td_border_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.Arduino.valueToCode(block, 'borderwidth_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.Arduino.valueToCode(block, 'bordercolor_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_border_set(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ');\n';
  return code;
};

Blockly.Arduino['table_td_insert_img'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_imgid_ = Blockly.Arduino.valueToCode(block, 'imgid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);   
  var code = 'table_td_insert_img(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',' + value_imgid_ + ',' + value_url_ + ',' + value_width_ + ',' + value_height_ + ');\n';
  return code;
};

Blockly.Arduino['table_td_img_move'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_imgid_ = Blockly.Arduino.valueToCode(block, 'imgid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_img_move(' + value_id_ + ','+ value_imgid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.Arduino['table_td_canvas_move'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_canvasid_ = Blockly.Arduino.valueToCode(block, 'canvasid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_canvas_move(' + value_id_ + ','+ value_canvasid_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.Arduino['table_td_copy_move'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  if (value_property_=="copy")
    var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ','+ value_y_ + ',"innerHTML",(table_td_get(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML")));\n';
  else if (value_property_=="move")
    var code = 'table_td_set(' + value_id_ + ','+ value_x_ + ','+ value_y_ + ',"innerHTML",(table_td_get(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML")));\ntable_td_set(' + value_id_ + ','+ value_x0_ + ','+ value_y0_ + ',"innerHTML","");\n'; 
  return code;
};

Blockly.Arduino['table_td_img_get'] = function (block) {
  var value_imgid_ = Blockly.Arduino.valueToCode(block, 'imgid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_td_img_get('+ value_imgid_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['table_td_insert_text'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_text_ = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontname_ = Blockly.Arduino.valueToCode(block, 'fontname_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_insert_text(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',' + value_text_+ ',' + value_fontname_ + ',' + value_fontsize_ + ',' + value_color_+ ');\n';
  return code;
};

Blockly.Arduino['table_td_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'table_td_get(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ',"' + value_property_+ '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['table_td_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);  
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'if ((table_get(' + value_id_ + ',"onclick[Column,Row]")) == "'+ value_x_ + ',' + value_y_ + '") {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.Arduino['table_td_clear'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_td_clear(' + value_id_ + ','+ value_x_ + ',' + value_y_ + ');\n';
  return code;
};

Blockly.Arduino['table_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'table_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['music_create'] = function (block) {
  var value_url = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var value_length = Blockly.Arduino.valueToCode(block, 'length_', Blockly.Arduino.ORDER_ATOMIC);
  var value_loop = Blockly.Arduino.valueToCode(block, 'loop_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_loop=="true")&&(value_length>0))
    var code = 'music_create(' + value_url + ');\nvar musicTimer = setInterval(function(){\nmusic_create(' + value_url + ');},' + value_length + ');\n';
  else if ((value_loop=="false")&&(value_length>0))
    var code = 'music_create(' + value_url + ');\nvar musicTimer = setTimeout(function(){\nmusic_delete();},' + value_length + ');\n';
  else
    var code = 'music_create(' + value_url + ');\n';
  return code;
};

Blockly.Arduino['music_delete'] = function (block) {
  var code = 'clearInterval(musicTimer);\nmusic_delete();\n';
  return code;
};

Blockly.Arduino['canvas_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);   
  var code = 'canvas_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'canvas_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'canvas_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['canvas_line'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.Arduino.valueToCode(block, 'linewidth_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1_ = Blockly.Arduino.valueToCode(block, 'x1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1_ = Blockly.Arduino.valueToCode(block, 'y1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'canvas_line(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_x1_ + ',' + value_y1_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_rect'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.Arduino.valueToCode(block, 'linewidth_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fill_ = Blockly.Arduino.valueToCode(block, 'fill_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_rect(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_arc'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_linewidth_ = Blockly.Arduino.valueToCode(block, 'linewidth_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_r_ = Blockly.Arduino.valueToCode(block, 'r_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sAngle_ = Blockly.Arduino.valueToCode(block, 'sAngle_', Blockly.Arduino.ORDER_ATOMIC);
  var value_eAngle_ = Blockly.Arduino.valueToCode(block, 'eAngle_', Blockly.Arduino.ORDER_ATOMIC);
  var value_counterclockwise_ = Blockly.Arduino.valueToCode(block, 'counterclockwise_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fill_ = Blockly.Arduino.valueToCode(block, 'fill_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_arc(' + value_id_ + ',' + value_linewidth_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_r_ + ',' + value_sAngle_ + ',' + value_eAngle_ + ',' + value_counterclockwise_ + ',' + value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_img_url'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'canvas_img_url("' + value_source_ + '",' + value_url_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_img'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sx_ = Blockly.Arduino.valueToCode(block, 'sx_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sy_ = Blockly.Arduino.valueToCode(block, 'sy_', Blockly.Arduino.ORDER_ATOMIC);
  var value_swidth_ = Blockly.Arduino.valueToCode(block, 'swidth_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sheight_ = Blockly.Arduino.valueToCode(block, 'sheight_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_img(' + value_id_ + ',' + value_sx_ + ',' + value_sy_ + ',' + value_swidth_ + ','+ value_sheight_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_capturevideo'] = function (block) {
  var value_canvasid_ = Blockly.Arduino.valueToCode(block, 'canvasid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_videoid_ = Blockly.Arduino.valueToCode(block, 'videoid_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sx_ = Blockly.Arduino.valueToCode(block, 'sx_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sy_ = Blockly.Arduino.valueToCode(block, 'sy_', Blockly.Arduino.ORDER_ATOMIC);
  var value_swidth_ = Blockly.Arduino.valueToCode(block, 'swidth_', Blockly.Arduino.ORDER_ATOMIC);
  var value_sheight_ = Blockly.Arduino.valueToCode(block, 'sheight_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_capturevideo(' + value_canvasid_ + ',' + value_videoid_ + ',' + value_sx_ + ',' + value_sy_ + ',' + value_swidth_ + ','+ value_sheight_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_width_ + ',' + value_height_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_text'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_text_ = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_fontname_ = Blockly.Arduino.valueToCode(block, 'fontname_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_textalign_ = block.getFieldValue('textalign_');
  var value_fill_ = Blockly.Arduino.valueToCode(block, 'fill_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_text(' + value_id_ + ',' + value_text_ + ',' + value_x0_ + ','+ value_y0_ + ',' + value_fontname_ + ','+ value_fontsize_ + ',"' + value_textalign_ + '",'+ value_fill_ + ',' + value_color_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_quadraticcurve'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp1x_ = Blockly.Arduino.valueToCode(block, 'cp1x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp1y_ = Blockly.Arduino.valueToCode(block, 'cp1y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_linewidth_ = Blockly.Arduino.valueToCode(block, 'linewidth_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fill_ = Blockly.Arduino.valueToCode(block, 'fill_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_quadraticcurve(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ','+ value_cp1x_ + ',' + value_cp1y_ + ',' + value_x_ + ',' + value_y_ + ',' + value_linewidth_ + ',' + value_color_ + ',' + value_fill_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_beziercurve'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp1x_ = Blockly.Arduino.valueToCode(block, 'cp1x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp1y_ = Blockly.Arduino.valueToCode(block, 'cp1y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp2x_ = Blockly.Arduino.valueToCode(block, 'cp2x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cp2y_ = Blockly.Arduino.valueToCode(block, 'cp2y_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_linewidth_ = Blockly.Arduino.valueToCode(block, 'linewidth_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fill_ = Blockly.Arduino.valueToCode(block, 'fill_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_rotate_ = Blockly.Arduino.valueToCode(block, 'rotate_', Blockly.Arduino.ORDER_ATOMIC);
  var value_globalAlpha_ = Blockly.Arduino.valueToCode(block, 'globalAlpha_', Blockly.Arduino.ORDER_ATOMIC);    
  var code = 'canvas_beziercurve(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ','+ value_cp1x_ + ',' + value_cp1y_ + ','+ value_cp2x_ + ',' + value_cp2y_ + ',' + value_x_ + ',' + value_y_ + ',' + value_linewidth_ + ',' + value_color_ + ',' + value_fill_ + ',' + value_rotate_ + ',' + value_globalAlpha_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_clearrect'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x_ = Blockly.Arduino.valueToCode(block, 'x_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y_ = Blockly.Arduino.valueToCode(block, 'y_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'canvas_clearrect(' + value_id_ + ',' + value_x_ + ','+ value_y_ + ',' + value_width_ + ',' + value_height_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_clear'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'canvas_clear(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'canvas_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['canvas_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'if (canvas_onclick_get(' + value_id_ + ')==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.Arduino['canvas_onclick_dom'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamecanvas_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamecanvas_'+value_id_+'").addEventListener("click", gamecanvas_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['canvas_onclick_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'canvas_onclick_get(' + value_id_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['canvas_getcolor'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'canvas_getcolor(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['canvas_getimagedata'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'canvas_getimagedata(' + value_id_ + ',' + value_x0_ + ',' + value_y0_ + ',' + value_width_ + ',' + value_height_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['canvas_setimagedata'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_data_ = Blockly.Arduino.valueToCode(block, 'data_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'canvas_setimagedata(' + value_id_ + ',' + value_data_ + ',' + value_x0_ + ',' + value_y0_ + ');\n';
  return code;
};

Blockly.Arduino['image_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'image_create(' + value_id_ + ',' + value_url_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['image_create_stream'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'image_create_stream(' + value_id_ + ',' + value_url_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['image_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'image_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['image_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_delete'] = function(block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'image_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['elements_collision'] = function (block) {
  var value_element1_ = block.getFieldValue('element1_');
  var value_id1_ = Blockly.Arduino.valueToCode(block, 'id1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_element2_ = block.getFieldValue('element2_');
  var value_id2_ = Blockly.Arduino.valueToCode(block, 'id2_', Blockly.Arduino.ORDER_ATOMIC);
  var value_position_ = block.getFieldValue('position_');

  var obj1= 'game'+value_element1_+'_';    
  var obj2= 'game'+value_element2_+'_'; 

  var code = 'elements_collision("'+obj1+'",' + value_id1_ + ',"'+obj2+'",' + value_id2_ + ',"' + value_position_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['elements_collision_color'] = function (block) {
  var value_element1_ = block.getFieldValue('element1_');
  var value_id1_ = Blockly.Arduino.valueToCode(block, 'id1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_id2_ = Blockly.Arduino.valueToCode(block, 'id2_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);

  var obj1= 'game'+value_element1_+'_'; 

  var code = 'elements_collision_color("'+obj1+'",' + value_id1_ + ',' + value_id2_ + ',' + value_color_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_collision'] = function (block) {
  var value_id1_ = Blockly.Arduino.valueToCode(block, 'id1_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_id2_ = Blockly.Arduino.valueToCode(block, 'id2_', Blockly.Arduino.ORDER_ATOMIC);
  var value_position_ = block.getFieldValue('position_');
  var code = 'image_collision(' + value_id1_ + ',' + value_id2_ + ',"' + value_position_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_boundary'] = function (block) {
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'image_boundary(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.Arduino['image_boundary_collision'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_boundary_collision(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_boundary_collision_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'if (image_boundary_collision('+value_id_+',"'+value_property_+'")==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.Arduino['image_sys_get'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var code = 'image_sys_get("' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_onclick_listener'] = function (block) {
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'setInterval(async function(){\n' + statements_do_ + '},10);\n';
  return code;
};

Blockly.Arduino['image_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'if (image_onclick_get(' + value_id_ + ')==1) {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.Arduino['image_onclick_dom'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gameimage_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameimage_'+value_id_+'").addEventListener("click", gameimage_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['image_onload_dom'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gameimage_'+value_id_+'_onload (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameimage_'+value_id_+'").addEventListener("load", gameimage_'+value_id_+'_onload, true);\n';
  return code;
};

Blockly.Arduino['image_onclick_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'image_onclick_get(' + value_id_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['image_move'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_property_ = block.getFieldValue('property_');
  var value_step_ = Blockly.Arduino.valueToCode(block, 'step_', Blockly.Arduino.ORDER_ATOMIC);
  if (value_property_=="left")
    var code = 'image_set('+value_id_+',"left",(image_get('+value_id_+',"left")-'+value_step_+'));\n';
  else if (value_property_=="right")
    var code = 'image_set('+value_id_+',"left",(image_get('+value_id_+',"left")+'+value_step_+'));\n';
  else if (value_property_=="up")
    var code = 'image_set('+value_id_+',"top",(image_get('+value_id_+',"top")-'+value_step_+'));\n';
  else if (value_property_=="down")
    var code = 'image_set('+value_id_+',"top",(image_get('+value_id_+',"top")+'+value_step_+'));\n';
  return code;
};

Blockly.Arduino['image_resize'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_percentage_ = Blockly.Arduino.valueToCode(block, 'percentage_', Blockly.Arduino.ORDER_ATOMIC);
  value_percentage_ = value_percentage_/100;
  var code = 'image_set('+value_id_+',"width",((image_get('+value_id_+',"width")) * '+value_percentage_+'));\nimage_set('+value_id_+',"height",((image_get('+value_id_+',"height")) * '+value_percentage_+'));\n';
  return code;
};

Blockly.Arduino['image_binarytobase64'] = function (block) {
  var value_array = Blockly.Arduino.valueToCode(block, 'array_', Blockly.Arduino.ORDER_ATOMIC);
  var code = '"data:image/jpeg;base64,"+ binarytobase64('+value_array+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['mouse_coordinate_get_start'] = function (block) {
  var code = 'mouse_coordinate_get_start();\n';
  return code;
};

Blockly.Arduino['mouse_coordinate_get'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var code = 'mouse_coordinate_get("' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['document_timer_novar'] = function (block) {
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.Arduino.valueToCode(block, 'intervals_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'setInterval(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.Arduino['document_timer_once_novar'] = function (block) {
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.Arduino.valueToCode(block, 'intervals_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'setTimeout(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.Arduino['document_timer'] = function (block) {
  var value_var_ = Blockly.Arduino.valueToCode(block, 'var_', Blockly.Arduino.ORDER_ATOMIC);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.Arduino.valueToCode(block, 'intervals_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_var_.indexOf("'")==0)&&(value_var_.lastIndexOf("'")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf('"')==0)&&(value_var_.lastIndexOf('"')==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf("(")==0)&&(value_var_.lastIndexOf(")")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
	
  var code = 'var '+value_var_+' = setInterval(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.Arduino['document_timer_once'] = function (block) {
  var value_var_ = Blockly.Arduino.valueToCode(block, 'var_', Blockly.Arduino.ORDER_ATOMIC);
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var value_intervals_ = Blockly.Arduino.valueToCode(block, 'intervals_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_var_.indexOf("'")==0)&&(value_var_.lastIndexOf("'")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf('"')==0)&&(value_var_.lastIndexOf('"')==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf("(")==0)&&(value_var_.lastIndexOf(")")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
	
  var code = 'var '+value_var_+' = setTimeout(async function(){\n' + statements_do_ + '},' + value_intervals_ + ');\n';
  return code;
};

Blockly.Arduino['document_timer_stop'] = function (block) {
  var value_var_ = Blockly.Arduino.valueToCode(block, 'var_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_var_.indexOf("'")==0)&&(value_var_.lastIndexOf("'")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf('"')==0)&&(value_var_.lastIndexOf('"')==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
  if ((value_var_.indexOf("(")==0)&&(value_var_.lastIndexOf(")")==value_var_.length-1))
    value_var_ = value_var_.substring(1,value_var_.length-1);
	
  var code = 'clearInterval(' + value_var_ + ');\n';
  return code;
};

Blockly.Arduino['text_to_number'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'value_text_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'text_to_number(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['loop_break'] = function (block) {
  var code = 'break;\n';
  return code;
};

Blockly.Arduino['loop_continue'] = function (block) {
  var code = 'continue;\n';
  return code;
};

Blockly.Arduino['function_return'] = function (block) {
  var value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'return ' + value_ + ';\n';
  return code;
};

Blockly.Arduino['gameelements_1'] = function (block) {
  var code = '';
  return code;
};

Blockly.Arduino['move_to_mouse'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_position = block.getFieldValue('position');
  if (value_position=="center")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")/2));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")/2));\n';
  else if (value_position=="up")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")/2));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")));\n';
  else if (value_position=="down")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")/2));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")));\n';
  else if (value_position=="left")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")/2));\n';
  else if (value_position=="right")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")/2));\n';
  else if (value_position=="upperLeft")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")));\n';
  else if (value_position=="lowerLeft")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")));\n';
  else if (value_position=="upperRight")
    var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")));\n';
  else if (value_position=="lowerRight")
   var code = 'image_set('+value_id_+',"left",(mouse_coordinate_get("pageX")-image_get('+value_id_+',"width")));\nimage_set('+value_id_+',"top",(mouse_coordinate_get("pageY")-image_get('+value_id_+',"height")));\n';
  return code;
};

Blockly.Arduino['move_to_coordinate'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);   
  var code = 'image_set('+value_id_+',"left",'+value_left_+');\nimage_set('+value_id_+',"top",'+value_top_+');\n';
  return code;
};

Blockly.Arduino['rotatez_degrees'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_degrees_ = Blockly.Arduino.valueToCode(block, 'degrees_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'image_set('+value_id_+',"rotateZ",'+value_degrees_+');\n';
  return code;
};

Blockly.Arduino['rotate_vertical_flip'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'if (image_get('+value_id_+',"rotateX")<=90||image_get('+value_id_+',"rotateX")=="") \n  image_set('+value_id_+',"rotateX",180); \nelse \n  image_set('+value_id_+',"rotateX",0);\n';
  return code;
};

Blockly.Arduino['rotate_horizontal_flip'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'if (image_get('+value_id_+',"rotateY")<=90||image_get('+value_id_+',"rotateY")=="") \n  image_set('+value_id_+',"rotateY",180); \nelse \n  image_set('+value_id_+',"rotateY",0);\n';
  return code;
};

Blockly.Arduino['button_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_bgcolor_ = Blockly.Arduino.valueToCode(block, 'bgcolor_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);
  if (!value_fontsize_) value_fontsize_=12; 
  var code = 'button_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_bgcolor_ + ',' + value_value_ + ',' + value_fontsize_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['button_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'button_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['button_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'button_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['button_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'button_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['button_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamebutton_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamebutton_'+value_id_+'").addEventListener("click", gamebutton_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['async_function'] = function (block) {
  var value_name_ = Blockly.Arduino.valueToCode(block, 'name_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_name_.indexOf("'")==0)&&(value_name_.lastIndexOf("'")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  if ((value_name_.indexOf('"')==0)&&(value_name_.lastIndexOf('"')==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  if ((value_name_.indexOf("(")==0)&&(value_name_.lastIndexOf(")")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  
  var value_parameter_ = Blockly.Arduino.valueToCode(block, 'parameter_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_parameter_.indexOf("'")==0)&&(value_parameter_.lastIndexOf("'")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf('"')==0)&&(value_parameter_.lastIndexOf('"')==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf("(")==0)&&(value_parameter_.lastIndexOf(")")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function '+value_name_+'('+value_parameter_+') {\n' + statements_do_ + '};\n';
  return code;
};

Blockly.Arduino['call_async_function'] = function (block) {
  var value_name_ = Blockly.Arduino.valueToCode(block, 'name_', Blockly.Arduino.ORDER_ATOMIC);   
  if ((value_name_.indexOf("'")==0)&&(value_name_.lastIndexOf("'")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  if ((value_name_.indexOf('"')==0)&&(value_name_.lastIndexOf('"')==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  if ((value_name_.indexOf("(")==0)&&(value_name_.lastIndexOf(")")==value_name_.length-1))
    value_name_ = value_name_.substring(1,value_name_.length-1);
  var value_parameter_ = Blockly.Arduino.valueToCode(block, 'parameter_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_parameter_.indexOf("'")==0)&&(value_parameter_.lastIndexOf("'")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf('"')==0)&&(value_parameter_.lastIndexOf('"')==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);
  if ((value_parameter_.indexOf("(")==0)&&(value_parameter_.lastIndexOf(")")==value_parameter_.length-1))
    value_parameter_ = value_parameter_.substring(1,value_parameter_.length-1);  
  var code = value_name_ + '('+value_parameter_+');\n';
  return code;
};

Blockly.Arduino['transform_async_function'] = function (block) {
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = statements_do_.replace(/function/g,"async function").replace(/async async/g,"async");
  return code;
};


Blockly.Arduino['element_event'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var element = block.getFieldValue('element');
  var event = block.getFieldValue('event');
  var statement = Blockly.Arduino.statementToCode(block, 'statement');
  if (element=="window")
    var obj="window";
  else if (element=="document")
    var obj="document";
  else
    var obj="document.getElementById('game"+element+"_'+"+value_id_+")";

  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);

  var code = 'async function '+element+'_'+value_id_+'_'+event+'(event) {\n' + statement + '};\n'+obj+'.addEventListener("'+event+'", '+element+'_'+value_id_+'_'+event+', true);\n';
  return code;
};

Blockly.Arduino['element_event_stop'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var element = block.getFieldValue('element');
  var event = block.getFieldValue('event');
  if (element=="window")
    var obj="window";
  else if (element=="document")
    var obj="document";
  else
    var obj="document.getElementById('game"+element+"_'+"+value_id_+")";

  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);

  var code = obj+'.removeEventListener("'+event+'", '+element+'_'+value_id_+'_'+event+', true);\n';
  return code;
};

Blockly.Arduino['colorpicker_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'colorpicker_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['colorpicker_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'colorpicker_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['colorpicker_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'colorpicker_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['colorpicker_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'colorpicker_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['colorpicker_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamecolor_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamecolor_'+value_id_+'").addEventListener("change", gamecolor_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['select_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_background_ = Blockly.Arduino.valueToCode(block, 'background_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_option_ = Blockly.Arduino.valueToCode(block, 'option_', Blockly.Arduino.ORDER_ATOMIC); 
  value_option_ = value_option_.replace(/{/g,"[").replace(/}/g,"]");
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'select_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_option_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['select_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'select_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['select_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'select_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['select_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'select_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['select_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gameselect_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameselect_'+value_id_+'").addEventListener("change", gameselect_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['range_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_max_ = Blockly.Arduino.valueToCode(block, 'max_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_min_ = Blockly.Arduino.valueToCode(block, 'min_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_step_ = Blockly.Arduino.valueToCode(block, 'step_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'range_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_opacity_ + ',' + value_max_ + ',' + value_min_ + ',' + value_step_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['range_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'range_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['range_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'range_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['range_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'range_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['range_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamerange_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamerange_'+value_id_+'").addEventListener("change", gamerange_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['text_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_background_ = Blockly.Arduino.valueToCode(block, 'background_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'text_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_value_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['text_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'text_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['text_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'text_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['text_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'text_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['text_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gametext_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gametext_'+value_id_+'").addEventListener("change", gametext_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['div_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.Arduino.valueToCode(block, 'borderwidth_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.Arduino.valueToCode(block, 'bordercolor_', Blockly.Arduino.ORDER_ATOMIC);
  var value_background_ = Blockly.Arduino.valueToCode(block, 'background_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_innerHTML_ = Blockly.Arduino.valueToCode(block, 'innerHTML_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'div_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_innerHTML_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['div_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'div_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['div_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'div_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['div_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'div_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['color_hextorgb'] = function (block) {
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'HextoRgb(' + value_color_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['body_set'] = function (block) {
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'body_set("' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['time_delay'] = function (block) {
  var seconds = Blockly.Arduino.valueToCode(block, 'seconds', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'await delay(' + seconds + ');\n';
  return code;
};

Blockly.Arduino['position_distance'] = function (block) {
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1_ = Blockly.Arduino.valueToCode(block, 'x1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1_ = Blockly.Arduino.valueToCode(block, 'y1_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'position_distance(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['position_angle'] = function (block) {
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1_ = Blockly.Arduino.valueToCode(block, 'x1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1_ = Blockly.Arduino.valueToCode(block, 'y1_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'position_angle(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iframe_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_frameborder_ = block.getFieldValue('frameborder_');
  var value_scrolling_ = block.getFieldValue('scrolling_');
  var value_src_ = Blockly.Arduino.valueToCode(block, 'src_', Blockly.Arduino.ORDER_ATOMIC);
  var value_srcdoc_ = Blockly.Arduino.valueToCode(block, 'srcdoc_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC); 
  if (value_src_.replace(/"/g,"")!=""&&value_src_.toLowerCase().indexOf("http")==-1) {
	  value_src_ = "document.location.origin + '/' + " + value_src_;
  }
  
  var code = 'iframe_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',"'+ value_frameborder_ + '","' + value_scrolling_ + '",' + value_src_ + ',' + value_srcdoc_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['iframe_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  
  if (value_property_=="src"&&value_value_.replace(/"/g,"")!=""&&value_value_.toLowerCase().indexOf("http")==-1) {
	  value_value_ = "document.location.origin + '/' + " + value_value_;
  }
  
  var code = 'iframe_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['iframe_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'iframe_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iframe_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'iframe_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['ajax_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_type_ = block.getFieldValue('type_');
  var value_datatype_ = block.getFieldValue('datatype_');
  var value_async_ = block.getFieldValue('async_');
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  var code = 'var ajaxData_'+value_id_+';$.ajax({ \n  type: "'+value_type_+'" , \n  url: '+value_url_+' , \n  dataType: "'+value_datatype_+'", \n  timeout: 5000, \n  async: '+value_async_+', \n  success: function(data, textStatus) {\n    ajaxData_'+value_id_.replace(/'/g,"")+'=data;\n  },\nerror: function (jqXHR, textStatus, errorThrown) {\nconsole.log(jqXHR.statusText);}\n});\n';
  return code;
};

Blockly.Arduino['ajax_get_board'] = function (block) {
  var value_url_ = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_type_ = "GET";
  var value_datatype_ = "text";
  var value_async_ = block.getFieldValue('async_');
	
  var code = '$.ajax({type: "'+value_type_+'", url: '+value_url_+', dataType: "'+value_datatype_+'", timeout: 5000, async: '+value_async_+'});\n';
  return code;
};

Blockly.Arduino['ajax_getdata'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var value_format_ = block.getFieldValue('format_');
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  if (value_format_=="XML to String")
	var code = 'new XMLSerializer().serializeToString(ajaxData_'+value_id_.replace(/'/g,"")+')';
  else if (value_format_=="JSON to String")
	var code = 'JSON.stringify(ajaxData_'+value_id_.replace(/'/g,"")+')';
  else
	var code = 'ajaxData_'+value_id_;
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ajax_getdata_json'] = function (block) {
  var value_json_ = Blockly.Arduino.valueToCode(block, 'json_', Blockly.Arduino.ORDER_ATOMIC);
  var value_index_ = Blockly.Arduino.valueToCode(block, 'index_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fieldname_ = Blockly.Arduino.valueToCode(block, 'fieldname_', Blockly.Arduino.ORDER_ATOMIC);
  
  code = 'ajax_getdata_json('+value_json_+','+ value_index_+','+ value_fieldname_+')';
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ajax_getdata_json_count'] = function (block) {
  var value_json_ = Blockly.Arduino.valueToCode(block, 'json_', Blockly.Arduino.ORDER_ATOMIC);
  
  code = 'ajax_getdata_json_count('+value_json_+')';
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ajax_cleardata'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  var code = 'ajaxData_'+value_id_+' = "";\n';
  return code;
};

Blockly.Arduino['a_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_borderstyle_ = block.getFieldValue('borderstyle_');
  var value_borderwidth_ = Blockly.Arduino.valueToCode(block, 'borderwidth_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_bordercolor_ = Blockly.Arduino.valueToCode(block, 'bordercolor_', Blockly.Arduino.ORDER_ATOMIC);
  var value_background_ = Blockly.Arduino.valueToCode(block, 'background_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_innerHTML_ = Blockly.Arduino.valueToCode(block, 'innerHTML_', Blockly.Arduino.ORDER_ATOMIC);
  var value_href_ = Blockly.Arduino.valueToCode(block, 'href_', Blockly.Arduino.ORDER_ATOMIC);
  var value_target_ = block.getFieldValue('target_');
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'a_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',"'+ value_borderstyle_ + '",' + value_borderwidth_ + ',' + value_bordercolor_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_innerHTML_ + ',' + value_href_ + ',"' + value_target_ + '",' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['a_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'a_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['a_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'a_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['a_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'a_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['radio_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_name_ = Blockly.Arduino.valueToCode(block, 'name_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var value_size_ = Blockly.Arduino.valueToCode(block, 'size_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var value_checked_ = Blockly.Arduino.valueToCode(block, 'checked_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'radio_create(' + value_id_ + ',' + value_name_ + ','+ value_left_ + ',' + value_top_ + ',' + value_size_ + ',' + value_value_ + ',' + value_checked_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['radio_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'radio_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['radio_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'radio_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['radio_name_get'] = function (block) {
  var value_name_ = Blockly.Arduino.valueToCode(block, 'name_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'radio_name_get(' + value_name_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['radio_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'radio_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['radio_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gameradio_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gameradio_'+value_id_+'").addEventListener("click", gameradio_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['checkbox_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var value_size_ = Blockly.Arduino.valueToCode(block, 'size_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var value_checked_ = Blockly.Arduino.valueToCode(block, 'checked_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'checkbox_create(' + value_id_ + ','+ value_left_ + ',' + value_top_ + ',' + value_size_ + ',' + value_value_ + ',' + value_checked_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['checkbox_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'checkbox_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['checkbox_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'checkbox_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['checkbox_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'checkbox_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['checkbox_onclick_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamecheckbox_'+value_id_+'_onclick (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamecheckbox_'+value_id_+'").addEventListener("click", gamecheckbox_'+value_id_+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['textarea_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cols_ = Blockly.Arduino.valueToCode(block, 'cols_', Blockly.Arduino.ORDER_ATOMIC);
  var value_rows_ = Blockly.Arduino.valueToCode(block, 'rows_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'textarea_create(' + value_id_ + ','+ value_left_ + ',' + value_top_ + ',' + value_cols_ + ',' + value_rows_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['textarea_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'textarea_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['textarea_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'textarea_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['textarea_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'textarea_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['textarea_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gametextarea_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gametextarea_'+value_id_+'").addEventListener("change", gametextarea_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['number_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_max_ = Blockly.Arduino.valueToCode(block, 'max_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_min_ = Blockly.Arduino.valueToCode(block, 'min_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_step_ = Blockly.Arduino.valueToCode(block, 'step_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'number_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_width_ + ',' + value_height_ + ',' + value_fontsize_ + ',' + value_max_ + ',' + value_min_ + ',' + value_step_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['number_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'number_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['number_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'number_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['number_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'number_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['number_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamenumber_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamenumber_'+value_id_+'").addEventListener("change", gamenumber_'+value_id_+'_onchange, true);\n';
  return code;
};


Blockly.Arduino['date_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_max_ = Blockly.Arduino.valueToCode(block, 'max_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_min_ = Blockly.Arduino.valueToCode(block, 'min_', Blockly.Arduino.ORDER_ATOMIC);   
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'date_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_max_ + ',' + value_min_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['date_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'date_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['date_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'date_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['date_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'date_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['date_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamedate_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamedate_'+value_id_+'").addEventListener("change", gamedate_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['time_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);   
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'time_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['time_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'time_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['time_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'time_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['time_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'time_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['time_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gametime_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gametime_'+value_id_+'").addEventListener("change", gametime_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['datetime_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);   
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'datetime_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['datetime_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'datetime_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['datetime_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'datetime_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['datetime_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'datetime_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['datetime_onchange_do'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  var statements_do_ = Blockly.Arduino.statementToCode(block, 'do_');
  var code = 'async function gamedatetime_'+value_id_+'_onchange (event) {\n' + statements_do_ + '};\ndocument.getElementById("gamedatetime_'+value_id_+'").addEventListener("change", gamedatetime_'+value_id_+'_onchange, true);\n';
  return code;
};

Blockly.Arduino['progress_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var value_max_ = Blockly.Arduino.valueToCode(block, 'max_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC);
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'progress_create(' + value_id_ + ',' + value_left_ + ',' + value_top_ + ',' + value_max_ + ',' + value_value_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['progress_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'progress_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['progress_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'progress_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['progress_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'progress_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['password_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_maxlength_ = Blockly.Arduino.valueToCode(block, 'maxlength_', Blockly.Arduino.ORDER_ATOMIC);
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_background_ = Blockly.Arduino.valueToCode(block, 'background_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color_ = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'password_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_maxlength_ + ',' + value_value_ + ',' + value_background_ + ',' + value_color_ + ',' + value_fontsize_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['password_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'password_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['password_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'password_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['password_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'password_delete(' + value_id_ + ');\n';
  return code;
};


Blockly.Arduino['form_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_action_ = Blockly.Arduino.valueToCode(block, 'action_', Blockly.Arduino.ORDER_ATOMIC);
  var value_enctype_ = block.getFieldValue('enctype_');
  var value_method_ = block.getFieldValue('method_');
  var value_target_ = Blockly.Arduino.valueToCode(block, 'target_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'form_create(' + value_id_ + ','+ value_action_ + ',"' + value_enctype_ + '","' + value_method_ + '",' + value_target_ + ');\n';
  return code;
};

Blockly.Arduino['form_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'form_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['form_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'form_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['form_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'form_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['form_insert'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_element_ = block.getFieldValue('element_');
  var value_elementid_ = Blockly.Arduino.valueToCode(block, 'elementid_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'form_insert(' + value_id_ + ',"' + value_element_ + '",' + value_elementid_ + ');\n';
  return code;
};

Blockly.Arduino['form_submit'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'form_submit(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['head_add_viewport'] = function (block) {
  var value_initialscale_ = Blockly.Arduino.valueToCode(block, 'initialscale_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_minimumscale_ = Blockly.Arduino.valueToCode(block, 'minimumscale_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_maximumscale_ = Blockly.Arduino.valueToCode(block, 'maximumscale_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_scalable_ = block.getFieldValue('scalable_');
  var code = 'head_add_viewport(' + value_initialscale_ + ',' + value_minimumscale_ + ',' + value_maximumscale_ + ',"' + value_scalable_ + '");\n';
  return code;
};

Blockly.Arduino['video_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_src_ = Blockly.Arduino.valueToCode(block, 'src_', Blockly.Arduino.ORDER_ATOMIC);
  var value_cam_ = block.getFieldValue('cam_');
  var value_autoplay_ = block.getFieldValue('autoplay_');
  var value_loop_ = block.getFieldValue('loop_');
  var value_muted_ = block.getFieldValue('muted_');
  var value_controls_ = block.getFieldValue('controls_');
  var value_preload_ = block.getFieldValue('preload_');
  var value_opacity_ = Blockly.Arduino.valueToCode(block, 'opacity_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC);    
  var value_display_ = Blockly.Arduino.valueToCode(block, 'display_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'video_create(' + value_id_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ','+ value_cam_ + ','+ value_src_ + ',' + value_autoplay_ + ',' + value_loop_ + ',' + value_muted_ + ',' + value_controls_ + ',' + value_preload_ + ',' + value_opacity_ + ',' + value_zindex_ + ',' + value_display_ + ');\n';
  return code;
};

Blockly.Arduino['video_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'video_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['video_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'video_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['video_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'video_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['video_base64'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  var source_id;
  if (value_source_=="video")
	source_id = 'gamevideo_'+value_id_;
  else if (value_source_=="canvas")
	source_id = 'gamecanvas_'+value_id_;
  else if (value_source_=="image")
	source_id = 'gameimage_'+value_id_;
  var code = 'video_base64("' + source_id + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['video_base64_spreadsheet'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
	
  if ((value_id_.indexOf("(")==0)&&(value_id_.lastIndexOf(")")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  var source_id;
  if (value_source_=="video")
	source_id = 'gamevideo_'+value_id_;
  else if (value_source_=="canvas")
	source_id = 'gamecanvas_'+value_id_;
  else if (value_source_=="image")
	source_id = 'gameimage_'+value_id_;
	
  var value_spreadsheeturl_ = Blockly.Arduino.valueToCode(block, 'spreadsheeturl_', Blockly.Arduino.ORDER_ATOMIC);
  var value_spreadsheetname_ = Blockly.Arduino.valueToCode(block, 'spreadsheetname_', Blockly.Arduino.ORDER_ATOMIC);
  var value_column_ = Blockly.Arduino.valueToCode(block, 'column_', Blockly.Arduino.ORDER_ATOMIC);
  var value_row_ = Blockly.Arduino.valueToCode(block, 'row_', Blockly.Arduino.ORDER_ATOMIC);
  var value_spreadsheet_script_ = Blockly.Arduino.valueToCode(block, 'spreadsheet_script_', Blockly.Arduino.ORDER_ATOMIC);
  var value_format_ = block.getFieldValue('format_');
  
  var code = 'video_base64_spreadsheet("' + source_id + '",'+value_spreadsheeturl_+','+value_spreadsheetname_+','+value_column_+','+value_row_+','+value_height_+',"'+value_format_+'",'+value_spreadsheet_script_+');\n';
  return code;
};

Blockly.Arduino['video_base64_drive'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
	
  if ((value_id_.indexOf("(")==0)&&(value_id_.lastIndexOf(")")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  var source_id;
  if (value_source_=="video")
	source_id = 'gamevideo_'+value_id_;
  else if (value_source_=="canvas")
	source_id = 'gamecanvas_'+value_id_;
  else if (value_source_=="image")
	source_id = 'gameimage_'+value_id_;
	
  var value_foldername_ = Blockly.Arduino.valueToCode(block, 'foldername_', Blockly.Arduino.ORDER_ATOMIC);	
  var value_filename_ = Blockly.Arduino.valueToCode(block, 'filename_', Blockly.Arduino.ORDER_ATOMIC);
  var value_drive_script_ = Blockly.Arduino.valueToCode(block, 'drive_script_', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'video_base64_drive("' + source_id + '",'+value_foldername_+','+value_filename_+','+value_drive_script_+');\n';
  return code;
};

Blockly.Arduino['video_base64_email'] = function (block) {
  var value_source_ = block.getFieldValue('source_');
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
	
  if ((value_id_.indexOf("(")==0)&&(value_id_.lastIndexOf(")")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
  if ((value_id_.indexOf("'")==0)&&(value_id_.lastIndexOf("'")==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);
  if ((value_id_.indexOf('"')==0)&&(value_id_.lastIndexOf('"')==value_id_.length-1))
    value_id_ = value_id_.substring(1,value_id_.length-1);	
	
  var source_id;
  if (value_source_=="video")
	source_id = 'gamevideo_'+value_id_;
  else if (value_source_=="canvas")
	source_id = 'gamecanvas_'+value_id_;
  else if (value_source_=="image")
	source_id = 'gameimage_'+value_id_;

  var value_recipient_ = Blockly.Arduino.valueToCode(block, 'recipient_', Blockly.Arduino.ORDER_ATOMIC);
  var value_subject_ = Blockly.Arduino.valueToCode(block, 'subject_', Blockly.Arduino.ORDER_ATOMIC);	
  var value_email_script_ = Blockly.Arduino.valueToCode(block, 'email_script_', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'video_base64_email("' + source_id + '",'+value_recipient_+','+value_subject_+','+value_email_script_+');\n';
  return code;
};

Blockly.Arduino['custom_comment'] = function (block) {
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
  if ((text.indexOf("'")==0)&&(text.lastIndexOf("'")==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = '//' + text+'\n';
  return code;
};

Blockly.Arduino['variable_board'] = function (block) {
  var code = 'board';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_javascript'] = function(block) {
  var statements_js = Blockly.Arduino.statementToCode(block, 'js');
  code = '"<!DOCTYPE html><head><meta charset=\'utf-8\'><meta name=\'viewport\' content=\'width=device-width, initial-scale=1\'><script src=\'https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js\'></script><script src=\'https://fustyles.github.io/webduino/GameElements_20190131/gameelements.js\'></script></head><body><script>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{'+ statements_js.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"var ") +'};main();</script></body></html>"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['choice_color'] = function(block) {
	var rgb = "'"+this.getFieldValue("RGB")+"'";
	return[rgb, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['text_br'] = function (block) {
  var code = "'"+this.getFieldValue("newline")+"'";
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['custom_style'] = function (block) {
  var element = block.getFieldValue('element');
  var id = Blockly.Arduino.valueToCode(block, 'id', Blockly.Arduino.ORDER_ATOMIC);
  var style = block.getFieldValue('style');
  var property = Blockly.Arduino.valueToCode(block, 'property', Blockly.Arduino.ORDER_ATOMIC);
  var val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
  if ((id.indexOf("'")==0)&&(id.lastIndexOf("'")==id.length-1))
    id = id.substring(1,id.length-1);
  if ((id.indexOf('"')==0)&&(id.lastIndexOf('"')==id.length-1))
    id = id.substring(1,id.length-1);
  var el = element;
  if ((element.indexOf("'")==0)&&(element.lastIndexOf("'")==element.length-1))
    el = element.substring(1,element.length-1);
  if ((element.indexOf('"')==0)&&(element.lastIndexOf('"')==element.length-1))
    el = element.substring(1,element.length-1); 
  if ((property.indexOf("'")==0)&&(property.lastIndexOf("'")==property.length-1))
    property = property.substring(1,property.length-1);
  if ((property.indexOf('"')==0)&&(property.lastIndexOf('"')==property.length-1))
    property = property.substring(1,property.length-1); 

  var cmd = "";
  if (element=="window")
    cmd="window";
  else if (element=="document")
    cmd="document";
  else
    cmd="document.getElementById('game"+el+"_"+id+"')";

  if (style=="")
	cmd = cmd+"."+property+" = "+val+";";
  else
	cmd = cmd+".style."+property+" = "+val+";";
  var code = cmd;
  return code;
};

Blockly.Arduino['font_text'] = function (block) {
  var value_size = Blockly.Arduino.valueToCode(block, 'size_', Blockly.Arduino.ORDER_ATOMIC);
  var value_color = Blockly.Arduino.valueToCode(block, 'color_', Blockly.Arduino.ORDER_ATOMIC);
  var value_face = Blockly.Arduino.valueToCode(block, 'face_', Blockly.Arduino.ORDER_ATOMIC); 
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);
	
  var code = 'fontText('+value_size + ',' + value_color + ',' + value_face + ',' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_b'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontB(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_i'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontI(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_u'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontU(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_sup'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontSup(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_sub'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontSub(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_em'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontEm(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_strong'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'fontStrong(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['font_code'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);
	
  var code = 'fontCode(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['span_create'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var value_fontsize_ = Blockly.Arduino.valueToCode(block, 'fontsize_', Blockly.Arduino.ORDER_ATOMIC);
  var value_innerHTML_ = Blockly.Arduino.valueToCode(block, 'innerHTML_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.Arduino.valueToCode(block, 'zindex_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'span_create(' + value_id_ + ','+ value_left_ + ',' + value_top_ + ','+ value_fontsize_ + ',' + value_innerHTML_ + ',' + value_zindex_ + ');\n';
  return code;
};

Blockly.Arduino['span_set'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var value_value_ = Blockly.Arduino.valueToCode(block, 'value_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'span_set(' + value_id_ + ',"' + value_property_ + '",' + value_value_ + ');\n';
  return code;
};

Blockly.Arduino['span_get'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_property_ = block.getFieldValue('property_');
  var code = 'span_get(' + value_id_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['span_delete'] = function (block) {
  var value_id_ = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'span_delete(' + value_id_ + ');\n';
  return code;
};

Blockly.Arduino['location'] = function (block) {
  var value_property = block.getFieldValue('value_property'); 

  if (value_property=="hosturl")
	var code = 'window.location.protocol+"//"+window.location.host+"/"';
  else
	var code = 'window.location.' + value_property;
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['console_log'] = function (block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'console.log(' + value_text + ');\n';
  return code;
};

Blockly.Arduino['button_ouput_file_text'] = function (block) {
  var value_id = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC); 
  if ((value_id.indexOf('"')==0)&&(value_id.lastIndexOf('"')==value_id.length-1))
    value_id = value_id.substring(1,value_id.length-1);
  if ((value_id.indexOf("'")==0)&&(value_id.lastIndexOf("'")==value_id.length-1))
    value_id = value_id.substring(1,value_id.length-1);
  var value_text = Blockly.Arduino.valueToCode(block, 'text_', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'async function gamebutton_'+value_id+'_onclick (event) {\n  outputfile_text(' + value_text + ');\n};\ndocument.getElementById("gamebutton_'+value_id+'").addEventListener("click", gamebutton_'+value_id+'_onclick, true);\n';
  return code;
};

Blockly.Arduino['video_output_jpg'] = function (block) {
  var value_id = Blockly.Arduino.valueToCode(block, 'id_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'outputfile_jpg('+value_id+');\n';
  return code;
};

Blockly.Arduino['window_open'] = function (block) {
  var value_url = Blockly.Arduino.valueToCode(block, 'url_', Blockly.Arduino.ORDER_ATOMIC);
  var value_name = block.getFieldValue('name_');
  var code = 'window.open('+value_url+',"'+value_name+'");\n';
  return code;
};




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
	if (rgb.indexOf("#")==0) {
		rgb = rgb.toLowerCase().replace(/#/g,"");
		var code = 'MatrixLed("'+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+rgb+'");\n';	
	}
	else {
		rgb = rgb.replace(/"#"\+/g,"");
		var code = 'MatrixLed('+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+"+"+rgb+');\n';
	}
	
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
	if (rgb.indexOf("#")==0) {
		rgb = rgb.toLowerCase().replace(/#/g,"");
	}
	else {
		rgb = '"+'+rgb.replace(/"#"\+/g,"")+'+"';
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
	if (rgb.indexOf("#")==0)
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
	if (rgb.indexOf("#")==0)
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
	if (rgb.indexOf("#")==0)
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
	if ((rgb.indexOf('"')==0)&&(rgb.lastIndexOf('"')==rgb.length-1))
		rgb = rgb.substring(1,rgb.length-1);	
	if (rgb.indexOf("#")==0)
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
	
	var code = '"#"+MatrixLedGetColor((5-'+X+')*5 + ('+Y+'-1))';
	return[code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['BitMatrixLed_matrix_one_getcolor'] = function(block) {
	Blockly.Arduino.definitions_['define_webbit_matrix_getcolor']='\n'+
											'String MatrixLedGetColor(int i) {\n'+
											'  return matrixString.substring(i*6,i*6+6);\n'+
											'}\n'; 
											
	var N=Blockly.Arduino.valueToCode(this,"N",Blockly.Arduino.ORDER_ATOMIC);

	var code = '"#"+MatrixLedGetColor('+N+'-1)';
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
	if (rgb.indexOf("#")==0)
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
	if (rgb.indexOf("#")==0)
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
	if (rgb.indexOf("#")==0)
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
	if (rgb.indexOf("#")==0)
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
	if (rgb.indexOf("#")==0)
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
	if (rgb.indexOf("#")==0)
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
	if (rgb.indexOf("#")==0)
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
	if (rgb.indexOf("#")==0)
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

Blockly.Arduino['servermodule_parameter_set_address3_0'] = function (block) {
  var cmd = this.getFieldValue("cmd");
  if (cmd=="getstill")
	var code = '"?"+"'+cmd+'"+"="+(new Date().getTime())';
  else
	 var code = '"?"+"'+cmd+'"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_set_address3_1'] = function (block) {
  var cmd = this.getFieldValue("cmd");
  var p1 = Blockly.Arduino.valueToCode(block, 'p1', Blockly.Arduino.ORDER_ATOMIC);  
  var code = '"?"+"'+cmd+'"+"="+String('+p1+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_set_address3_2'] = function (block) {
  var cmd = this.getFieldValue("cmd");
  var p1 = Blockly.Arduino.valueToCode(block, 'p1', Blockly.Arduino.ORDER_ATOMIC);
  var p2 = Blockly.Arduino.valueToCode(block, 'p2', Blockly.Arduino.ORDER_ATOMIC);   
  var code = '"?"+"'+cmd+'"+"="+String('+p1+')+";"+String('+p2+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_set_address3'] = function (block) {
  var cmd = this.getFieldValue("cmd");
  var p1 = Blockly.Arduino.valueToCode(block, 'p1', Blockly.Arduino.ORDER_ATOMIC);
  var p2 = Blockly.Arduino.valueToCode(block, 'p2', Blockly.Arduino.ORDER_ATOMIC); 
  var p3 = Blockly.Arduino.valueToCode(block, 'p3', Blockly.Arduino.ORDER_ATOMIC);   
  var code = '"?"+"'+cmd+'"+"="+String('+p1+')+";"+String('+p2+')+";"+String('+p3+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['servermodule_parameter_set_address4'] = function (block) {
  var cmd = this.getFieldValue("cmd");
  var p1 = Blockly.Arduino.valueToCode(block, 'p1', Blockly.Arduino.ORDER_ATOMIC);
  var p2 = Blockly.Arduino.valueToCode(block, 'p2', Blockly.Arduino.ORDER_ATOMIC); 
  var p3 = Blockly.Arduino.valueToCode(block, 'p3', Blockly.Arduino.ORDER_ATOMIC);  
  var p4 = Blockly.Arduino.valueToCode(block, 'p4', Blockly.Arduino.ORDER_ATOMIC);    
  var code = '"?"+"'+cmd+'"+"="+String('+p1+')+";"+String('+p2+')+";"+String('+p3+')+";"+String('+p4+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

//SERIAL
Blockly.Arduino['fu_serial_begin'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var value_baudrate = Blockly.Arduino.valueToCode(block, 'baudrate', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['Serial.begin'] = serial+'.begin(%1);'.replace("%1", value_baudrate);
  return '';
};

Blockly.Arduino['fu_serial_begin_select'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var value_baudrate = block.getFieldValue('baudrate');
  Blockly.Arduino.setups_['Serial.begin'] = serial+'.begin(%1);'.replace("%1", value_baudrate);
  return '';
};

Blockly.Arduino['fu_serial_begin_config'] = function(block) {
  var value_baudrate = Blockly.Arduino.valueToCode(block, 'baudrate', Blockly.Arduino.ORDER_ATOMIC);
  var serial = block.getFieldValue('serial'); 
  var dropdown_config = block.getFieldValue('config');
  Blockly.Arduino.setups_['Serial.begin'] = serial+'.begin(%1, %2);'.replace("%1", value_baudrate).replace("%2", dropdown_config);
  return '';
};

Blockly.Arduino['fu_serial_ready'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var code = 'while (!'+serial+') {}\n';
  return code;
};

Blockly.Arduino['fu_serial_end'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var code = serial+'.end();\n';
  return code;
};

Blockly.Arduino['fu_serial_print'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = serial+'.print(%1);\n'.replace("%1", value_data);
  return code;
};

Blockly.Arduino['fu_serial_print_format'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_format = block.getFieldValue('format');
  var code = serial+'.print(%1, %2);\n'.replace("%1", value_data).replace("%2", dropdown_format);
  return code;
};

Blockly.Arduino['fu_serial_println'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = serial+'.println(%1);\n'.replace("%1", value_data);
  return code;
};

Blockly.Arduino['fu_serial_println_format'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_format = block.getFieldValue('format');
  var code = serial+'.println(%1, %2);\n'.replace("%1", value_data).replace("%2", dropdown_format);
  return code;
};

Blockly.Arduino['fu_serial_write'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = serial+'.write(%1);\n'.replace("%1", value_data);
  return code;
};

Blockly.Arduino['fu_serial_write_format'] = function(block) {
  var serial = block.getFieldValue('serial'); 
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_format = block.getFieldValue('format');
  var code = serial+'.write(%1, %2);\n'.replace("%1", value_data).replace("%2", dropdown_format);
  return code;
};



Blockly.Arduino['fu_mqtt_setup'] = function(block) {
  var server = Blockly.Arduino.valueToCode(block, 'server', Blockly.Arduino.ORDER_ATOMIC);
  var port = Blockly.Arduino.valueToCode(block, 'port', Blockly.Arduino.ORDER_ATOMIC);
  var user = Blockly.Arduino.valueToCode(block, 'user', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var topic_subscribe = Blockly.Arduino.statementToCode(block, 'topic_subscribe');
  
  Blockly.Arduino.definitions_.define_mqtt_library ='#include <PubSubClient.h>';
  Blockly.Arduino.definitions_.define_mqtt_server='const char* mqtt_server = '+server+';';
  Blockly.Arduino.definitions_.define_mqtt_port='const unsigned int mqtt_port = '+port+';';  
  Blockly.Arduino.definitions_.define_mqtt_user='#define MQTT_USER '+user;
  Blockly.Arduino.definitions_.define_mqtt_pass='#define MQTT_PASSWORD '+pass;

  Blockly.Arduino.definitions_.define_mqtt_client = 'WiFiClient espClient;\nPubSubClient mqtt_client(espClient);\nString mqtt_data = "";\n';
														
  Blockly.Arduino.definitions_.define_mqtt_sendtext = 'void mqtt_sendText(String topic, String text) {\n'+
														'    String clientId = "ESP32-"+String(random(0xffff), HEX);\n'+
														'    if (mqtt_client.connect(clientId.c_str(), MQTT_USER, MQTT_PASSWORD)) {\n'+
														'      mqtt_client.publish(topic.c_str(), text.c_str());\n'+
														'    }\n'+
														'}\n';
														
  Blockly.Arduino.definitions_.define_mqtt_reconnect = 'void reconnect() {\n'+
														'  while (!mqtt_client.connected()) {\n'+
														'    String mqtt_clientId = "ESP32-"+String(random(0xffff), HEX);\n'+
														'    if (mqtt_client.connect(mqtt_clientId.c_str(), MQTT_USER, MQTT_PASSWORD)) {\n    '+topic_subscribe+
														'    } else {\n'+
														'      delay(5000);\n'+
														'    }\n'+
														'  }\n'+
														'}\n';											
				
	Blockly.Arduino.setups_.setup_mqtt= 'randomSeed(micros());\n  '+
										'mqtt_client.setServer(mqtt_server,mqtt_port);\n  '+
										'mqtt_client.setCallback(callback);\n  '+
										'//mqtt_client.setBufferSize(1024);\n';

  code = '';
  return code;
};

Blockly.Arduino['fu_mqtt_loop'] = function(block) {
  var topic_getdata = Blockly.Arduino.statementToCode(block, 'topic_getdata');
				
  Blockly.Arduino.definitions_.define_mqtt_callback = 'void callback(char* topic, byte* payload, unsigned int length) {\n'+
														'  mqtt_data = "";\n'+
														'  for (int i = 0; i < length; i++) {\n'+
														'    char c = payload[i];\n'+
														'    mqtt_data+=c;\n'+
														'  }\n'+topic_getdata+
														'}\n';

  code = 'if (!mqtt_client.connected()) {\n  reconnect();\n}\nmqtt_client.loop();\n';
  return code;
};

Blockly.Arduino['fu_mqtt_subscribe'] = function(block) {
  var topic = Blockly.Arduino.valueToCode(block, 'topic', Blockly.Arduino.ORDER_ATOMIC);

  code = 'mqtt_client.subscribe('+topic+');\n';
  return code;
};

Blockly.Arduino['fu_mqtt_gettopic'] = function(block) {
  var topic = Blockly.Arduino.valueToCode(block, 'topic', Blockly.Arduino.ORDER_ATOMIC);
  var topic_getdata = Blockly.Arduino.statementToCode(block, 'topic_getdata'); 
  code = 'if (String(topic)=='+topic+'&&mqtt_data!="[]") {\n'+topic_getdata+'}\n';
  return code;
};

Blockly.Arduino['fu_mqtt_senddata'] = function(block) {
  var topic = Blockly.Arduino.valueToCode(block, 'topic', Blockly.Arduino.ORDER_ATOMIC);
  var text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC); 
  code = 'mqtt_sendText('+topic+', '+text+');\n';
  return code;
};

Blockly.Arduino['fu_mqtt_getdata'] = function(block) {
  code = 'mqtt_data';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['fu_mqtt_sendimage'] = function(block) {
  var topic = Blockly.Arduino.valueToCode(block, 'topic', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_.define_mqtt_sendimage = 'void mqtt_sendImage(String topic) {\n'+
														'  camera_fb_t * fb = NULL;\n'+
														'  fb = esp_camera_fb_get();\n'+
														'  if (!fb) {\n'+
														'    Serial.println("Camera capture failed, Reset");\n'+
														'    return;\n'+
														'  }\n'+
														'  int imgSize = fb->len;\n'+
														'  int ps = MQTT_MAX_PACKET_SIZE;\n'+
														'  mqtt_client.beginPublish(topic.c_str(), imgSize, false);\n'+
														'  for (int i = 0; i < imgSize; i += ps) {\n'+
														'    int s = (imgSize - i < s) ? (imgSize - i) : ps;\n'+
														'    mqtt_client.write((uint8_t *)(fb->buf) + i, s);\n'+
														'  }\n'+
														'  boolean isPublished = mqtt_client.endPublish();\n'+
														'  if (isPublished)\n'+
														'    Serial.println("Publishing Photo to MQTT Successfully");\n'+
														'  else\n'+
														'    Serial.println("Publishing Photo to MQTT Failed");\n'+														
														'  esp_camera_fb_return(fb);\n'+
														'}\n';
														
  code = 'mqtt_sendImage('+topic+');\n';
  return code;
};

Blockly.Arduino['esp32_cam_myfirmata'] = function(block) {
	
  var mainpage = Blockly.Arduino.valueToCode(block, 'mainpage', Blockly.Arduino.ORDER_ATOMIC);
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var ssid_ap = Blockly.Arduino.valueToCode(block, 'ssid_ap', Blockly.Arduino.ORDER_ATOMIC);
  var pass_ap = Blockly.Arduino.valueToCode(block, 'password_ap', Blockly.Arduino.ORDER_ATOMIC);
  var baudrate = block.getFieldValue('baudrate');  
  var framesize = block.getFieldValue('framesize');
  var flash = block.getFieldValue('flash');
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');	
	
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>\n#include <WiFiClientSecure.h>\n#include "esp_camera.h"\n#include "soc/soc.h"\n#include "soc/rtc_cntl_reg.h"\nchar _lwifi_ssid[] = '+ssid+';\nchar _lwifi_pass[] = '+pass+';\nconst char* apssid = '+ssid_ap+';\nconst char* appassword = '+pass_ap+';\nWiFiServer server(80);\n\nString Feedback="",Command="",cmd="",p1="",p2="",p3="",p4="",p5="",p6="",p7="",p8="",p9="";\nbyte receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;\n'+
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

  
  if (selectBoardType()=="esp32")
	Blockly.Arduino.definitions_.define_base64 ='#include "Base64_tool.h"';
  else
	Blockly.Arduino.definitions_.define_base64 ='#include "Base64.h"';

  Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void executeCommand() {\n'+
			'  //Serial.println("");\n'+
			'  //Serial.println("Command: "+Command);\n'+
			'  //Serial.println("cmd= "+cmd+" ,p1= "+p1+" ,p2= "+p2+" ,p3= "+p3+" ,p4= "+p4+" ,p5= "+p5+" ,p6= "+p6+" ,p7= "+p7+" ,p8= "+p8+" ,p9= "+p9);\n'+
			'  //Serial.println("");\n'+
			'  if (cmd=="ip") {\n'+
			'    Feedback="AP IP: "+WiFi.softAPIP().toString();\n'+
			'    Feedback+="<br>";\n'+
			'    Feedback+="STA IP: "+WiFi.localIP().toString();\n'+
			'  } else if (cmd=="mac") {\n'+
			'    Feedback="STA MAC: "+WiFi.macAddress();\n'+
			'  } else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  } else if (cmd=="digitalwrite") {\n'+
			'    ledcDetachPin(p1.toInt());\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  } else if (cmd=="digitalread") {\n'+
			'    Feedback=String(digitalRead(p1.toInt()));\n'+
			'  } else if (cmd=="analogwrite") {\n'+
			'    if (p1=="4") {\n'+
			'      ledcAttachPin(4, 4);\n'+
			'      ledcSetup(4, 5000, 8);\n'+
			'      ledcWrite(4,p2.toInt());\n'+
			'    } else {\n'+
			'      ledcAttachPin(p1.toInt(), 9);\n'+
			'      ledcSetup(9, 5000, 8);\n'+
			'      ledcWrite(9,p2.toInt());\n'+
			'    }\n'+
			'  } else if (cmd=="analogread") {\n'+
			'    Feedback=String(analogRead(p1.toInt()));\n'+
			'  } else if (cmd=="touchread") {\n'+
			'    Feedback=String(touchRead(p1.toInt()));\n'+
			'  } else if (cmd=="restart") {\n'+
			'    ESP.restart();\n';
			if (flash=="Y") {
				Blockly.Arduino.definitions_.define_linkit_ExecuteCommand += ''+
						'  } else if (cmd=="flash") {\n'+
						'    ledcAttachPin(4, 4);\n'+
						'    ledcSetup(4, 5000, 8);\n'+
						'    int val = p1.toInt();\n'+
						'    ledcWrite(4,val);\n';
			}
	Blockly.Arduino.definitions_.define_linkit_ExecuteCommand += ''+
			'  } else if(cmd=="servo") {\n'+
			'    ledcAttachPin(p1.toInt(), p3.toInt());\n'+
			'    ledcSetup(p3.toInt(), 50, 16);\n'+
			'    int val = 7864-p2.toInt()*34.59;\n'+
			'    if (val > 7864)\n'+
			'       val = 7864;\n'+
			'    else if (val < 1638)\n'+
			'      val = 1638;\n'+
			'    ledcWrite(p3.toInt(), val);\n'+
			'  } else if (cmd=="relay") {\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  } else if (cmd=="buzzer") { \n'+
			'    pinMode(p1.toInt(),OUTPUT);\n'+
			'    if (p4=="") p4="9";\n'+
			'    ledcSetup(p4.toInt(), 2000, 8);\n'+
			'    ledcAttachPin(p1.toInt(), p4.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), p2.toInt());\n'+
			'    delay(p3.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), 0);\n'+
			'  } else if (cmd=="resetwifi") {\n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(p1.c_str(), p2.c_str());\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(p1);\n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      Serial.println("");\n'+
			'      Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'      Feedback="STAIP: "+WiFi.localIP().toString();\n'+
			'      if (WiFi.status() == WL_CONNECTED) {\n'+
			'        WiFi.softAP((WiFi.localIP().toString()+"_"+p1).c_str(), p2.c_str());\n'+
 			'        break;\n'+
			'      }\n'+
			'    }\n'+
			'  } else if (cmd=="print") {\n'+
			'    Serial.print(p1);\n'+
			'  } else if (cmd=="println") {\n'+
			'    Serial.println(p1);\n'+
			'  } else if (cmd=="delay") {\n'+
			'    delay(p1.toInt());\n'+				
			'  } else if (cmd=="framesize") {\n'+
			'    int val = p1.toInt();\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_framesize(s, (framesize_t)val);\n'+
			'  } else if (cmd=="quality") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_quality(s, p1.toInt());\n'+
			'  } else if (cmd=="contrast") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_contrast(s, p1.toInt());\n'+
			'  } else if (cmd=="brightness") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_brightness(s, p1.toInt());\n'+
			'  } else if (cmd=="saturation") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_saturation(s, p1.toInt());\n'+ 
			'  } else if (cmd=="special_effect") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_special_effect(s, p1.toInt());\n'+
			'  } else if (cmd=="hmirror") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_hmirror(s, p1.toInt());\n'+
			'  } else if (cmd=="vflip") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_vflip(s, p1.toInt());\n'+
			'  } else {\n  '+ 
			statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';
	
	Blockly.Arduino.setups_.setup_serial="WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);\n  Serial.begin("+baudrate+");\n  delay(10);";
	Blockly.Arduino.setups_.setup_cam_initial=''+
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
			'  if (s->id.PID == OV3660_PID) {\n'+
			'    s->set_vflip(s, 1);\n'+
			'    s->set_brightness(s, 1);\n'+
			'    s->set_saturation(s, -2);\n'+
			'  }\n'+
			'  s->set_framesize(s, FRAMESIZE_'+framesize+');\n';
			if (flash=="Y") {
				Blockly.Arduino.setups_.setup_cam_initial += '  Serial.println();\n'+
															'  initWiFi();\n\n'+
															'  pinMode(4, OUTPUT);\n'+
															'  digitalWrite(4, LOW);\n';	
			} else {
				Blockly.Arduino.setups_.setup_cam_initial += '  initWiFi();\n';	
			}
	
	Blockly.Arduino.definitions_.initWiFi = ''+
			'  void initWiFi() {\n'+
			'    WiFi.mode(WIFI_AP_STA);\n'+
			'    \n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+
			'      \n'+
			'      delay(1000);\n'+
			'      Serial.println("");\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(_lwifi_ssid);\n'+
			'      \n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      \n'+
			'      if (WiFi.status() == WL_CONNECTED) {\n'+
			'        WiFi.softAP((WiFi.localIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+      
			'        Serial.println("");\n'+
			'        Serial.println("STAIP address: ");\n'+
			'        Serial.println(WiFi.localIP());\n'+
			'        Serial.println("");\n'+
			'      \n';
			if (flash=="Y") {
				Blockly.Arduino.definitions_.initWiFi += ''+
														'  		 ledcAttachPin(4, 4);\n'+
														'  		 ledcSetup(4, 5000, 8);\n'+				
														'        for (int i=0;i<5;i++) {\n'+
														'          ledcWrite(4,10);\n'+
														'          delay(200);\n'+
														'          ledcWrite(4,0);\n'+
														'          delay(200);\n'+
														'        }\n';
			}
	Blockly.Arduino.definitions_.initWiFi += ''+
			'        break;\n'+
			'      }\n'+
			'    }\n'+
			'    \n'+
			'    if (WiFi.status() != WL_CONNECTED) {\n'+
			'      WiFi.softAP((WiFi.softAPIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+
			'  	   \n'+
			'    }\n'+
			'    \n'+
			'    Serial.println("");\n'+
			'    Serial.println("APIP address: ");\n'+
			'    Serial.println(WiFi.softAPIP());\n'+
			'    \n'+
			'    server.begin();\n'+ 
			'  }\n';

	Blockly.Arduino.definitions_.getRequest = ''+
			'  void getRequest() {\n'+
			'    Command="";cmd="";p1="";p2="";p3="";p4="";p5="";p6="";p7="";p8="";p9="";\n'+
			'    receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;\n'+
			'  	 \n'+
			'    WiFiClient client = server.available();\n'+
			'    \n'+
			'    if (client) {\n'+
			'      String currentLine = "";\n'+
			'  	   \n'+
			'      while (client.connected()) {\n'+
			'        if (client.available()) {\n'+
			'          char c = client.read();\n'+             
			'          \n'+
			'          getCommand(c);\n'+
			'          \n'+
			'          if (c == \'\\n\') {\n'+
			'            if (currentLine.length() == 0) {\n'+          
			'   	        if (cmd=="getstill") {\n'+
			'     	            camera_fb_t * fb = NULL;\n'+
			'     	            fb = esp_camera_fb_get();\n'+  
			'   	            if(!fb) {\n'+
			'   	                Serial.println("Camera capture failed");\n'+
			'   	                delay(1000);\n'+
			'   	                ESP.restart();\n'+
			'   	            }\n'+
			'   	            client.println("HTTP/1.1 200 OK");\n'+
			'   	            client.println("Access-Control-Allow-Origin: *");\n'+            
			'   	            client.println("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");\n'+
			'   	            client.println("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");\n'+
			'   	            client.println("Content-Type: image/jpeg");\n'+
			'   	            client.println("Content-Disposition: form-data; name=\\\"imageFile\\\"; filename=\\\"picture.jpg\\\"");\n'+ 
			'   	            client.println("Content-Length: " + String(fb->len));\n'+             
			'   	            client.println("Connection: close");\n'+
			'   	            client.println();\n'+
			'   	            uint8_t *fbBuf = fb->buf;\n'+
			'   	            size_t fbLen = fb->len;\n'+
			'   	            for (size_t n=0;n<fbLen;n=n+1024) {\n'+
			'   	                if (n+1024<fbLen) {\n'+
			'   	                client.write(fbBuf, 1024);\n'+
			'   	                fbBuf += 1024;\n'+
			'   	            }\n'+
			'   	            else if (fbLen%1024>0) {\n'+
			'   	                size_t remainder = fbLen%1024;\n'+
			'   	                client.write(fbBuf, remainder);\n'+
			'   	              }\n'+
			'   	            }\n'+
			'   	            esp_camera_fb_return(fb);\n';
						if (flash=="Y") {
		Blockly.Arduino.definitions_.getRequest += ''+
			'   	            pinMode(4, OUTPUT);\n'+
			'   	            digitalWrite(4, LOW);\n';
						}
		Blockly.Arduino.definitions_.getRequest += ''+
			'   	        } else {\n'+
			'   	        	client.println("HTTP/1.1 200 OK");\n'+
			'   	        	client.println("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");\n'+
			'   	        	client.println("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");\n'+
			'   	        	client.println("Content-Type: text/html; charset=utf-8");\n'+
			'   	        	client.println("Access-Control-Allow-Origin: *");\n'+
			'   	        	client.println("X-Content-Type-Options: nosniff");\n'+
			'   	        	client.println();\n'+
			'   	        	if (Feedback=="")\n'+
			'   	        		Feedback='+mainpage+';\n'+
			'   	        	for (int index = 0; index < Feedback.length(); index = index+1024) {\n'+
			'   	        	  client.print(Feedback.substring(index, index+1024));\n'+
			'   	        	}\n'+
			'   	        }\n'+
			'   	        Feedback="";\n'+
			'   	        break;\n'+
			'            } else {\n'+
			'              currentLine = "";\n'+
			'            }\n'+
			'          }\n'+ 
			'          else if (c != \'\\r\') {\n'+
			'            currentLine += c;\n'+
			'          }\n'+
			'  		   \n'+
			'          if ((currentLine.indexOf("\/?")!=-1)&&(currentLine.indexOf(" HTTP")!=-1)) {\n'+
			'            if (Command.indexOf("stop")!=-1) {\n'+
			'              client.println();\n'+
			'              client.println();\n'+
 			'             client.stop();\n'+
			'            }\n'+
			'            currentLine="";\n'+
			'            Feedback="";\n'+
			'            executeCommand();\n'+
			'          }\n'+
			'        }\n'+
			'      }\n'+
			'      delay(1);\n'+
			'      client.stop();\n'+
			'    }\n'+
			'  }\n';	

	Blockly.Arduino.definitions_.getCommand = ''+
			'  void getCommand(char c) {\n'+
			'    if (c==\'?\') receiveState=1;\n'+
			'    if ((c==\' \')||(c==\'\\r\')||(c==\'\\n\')) receiveState=0;\n'+
			'    \n'+
			'    if (receiveState==1) {\n'+
			'      Command=Command+String(c);\n'+
			'      \n'+
			'      if (c==\'=\') cmdState=0;\n'+
			'      if (c==\';\') pState++;\n'+
			'      \n'+
			'      if ((cmdState==1)&&((c!=\'?\')||(questionState==1))) cmd=cmd+String(c);\n'+
			'      if ((cmdState==0)&&(pState==1)&&((c!=\'=\')||(equalState==1))) p1=p1+String(c);\n'+
			'      if ((cmdState==0)&&(pState==2)&&(c!=\';\')) p2=p2+String(c);\n'+
			'      if ((cmdState==0)&&(pState==3)&&(c!=\';\')) p3=p3+String(c);\n'+
			'      if ((cmdState==0)&&(pState==4)&&(c!=\';\')) p4=p4+String(c);\n'+
			'      if ((cmdState==0)&&(pState==5)&&(c!=\';\')) p5=p5+String(c);\n'+
			'      if ((cmdState==0)&&(pState==6)&&(c!=\';\')) p6=p6+String(c);\n'+
			'      if ((cmdState==0)&&(pState==7)&&(c!=\';\')) p7=p7+String(c);\n'+
			'      if ((cmdState==0)&&(pState==8)&&(c!=\';\')) p8=p8+String(c);\n'+
			'      if ((cmdState==0)&&(pState>=9)&&((c!=\';\')||(semicolonState==1))) p9=p9+String(c);\n'+
			'      \n'+
			'      if (c==\'?\') questionState=1;\n'+
			'      if (c==\'=\') equalState=1;\n'+
			'      if ((pState>=9)&&(c==\';\')) semicolonState=1;\n'+
			'    }\n'+
			'  }\n';		
			
    return '';
};

Blockly.Arduino['esp32_cam_stream_myfirmata'] = function(block) {
	
  var mainpage = Blockly.Arduino.valueToCode(block, 'mainpage', Blockly.Arduino.ORDER_ATOMIC);
  if ((mainpage.indexOf("(")==0)&&(mainpage.lastIndexOf(")")==mainpage.length-1))
    mainpage = mainpage.substring(1,mainpage.length-1);
  if ((mainpage.indexOf('"')==0)&&(mainpage.lastIndexOf('"')==mainpage.length-1))
    mainpage = mainpage.substring(1,mainpage.length-1);
  var ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var pass = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  var ssid_ap = Blockly.Arduino.valueToCode(block, 'ssid_ap', Blockly.Arduino.ORDER_ATOMIC);
  var pass_ap = Blockly.Arduino.valueToCode(block, 'password_ap', Blockly.Arduino.ORDER_ATOMIC);
  var baudrate = block.getFieldValue('baudrate');  
  var framesize = block.getFieldValue('framesize');
  var flash = block.getFieldValue('flash');  
  var statements_executecommand = Blockly.Arduino.statementToCode(block, 'ExecuteCommand');	
	
  Blockly.Arduino.definitions_['define_linkit_wifi_include'] ='#include <WiFi.h>\n#include <esp32-hal-ledc.h>\n#include "img_converters.h"\n#include "esp_camera.h"';
  Blockly.Arduino.definitions_.define_esp_http_server_h_include ='#include "esp_http_server.h"\n#include "soc/soc.h"\n#include "soc/rtc_cntl_reg.h"\nchar _lwifi_ssid[] = '+ssid+';\nchar _lwifi_pass[] = '+pass+';\nconst char* apssid = '+ssid_ap+';\nconst char* appassword = '+pass_ap+';\nString Feedback="",Command="",cmd="",p1="",p2="",p3="",p4="",p5="",p6="",p7="",p8="",p9="";\nbyte receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;\ntypedef struct {httpd_req_t *req;size_t len;} jpg_chunking_t;\n#define PART_BOUNDARY "123456789000000000000987654321"\nstatic const char* _STREAM_CONTENT_TYPE = "multipart/x-mixed-replace;boundary=" PART_BOUNDARY;\nstatic const char* _STREAM_BOUNDARY = "\\r\\n--" PART_BOUNDARY "\\r\\n";\nstatic const char* _STREAM_PART = "Content-Type: image/jpeg\\r\\nContent-Length: %u\\r\\n\\r\\n";\nhttpd_handle_t stream_httpd = NULL;\nhttpd_handle_t camera_httpd = NULL;\n';
  
  if (selectBoardType()=="esp32")
	Blockly.Arduino.definitions_.define_base64 ='#include "Base64_tool.h"';
  else
	Blockly.Arduino.definitions_.define_base64 ='#include "Base64.h"';

  Blockly.Arduino.definitions_.define_esp32_cam_gpio_include ='\n'+
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



  Blockly.Arduino.definitions_.define_linkit_ExecuteCommand = '\n'+
			'void executeCommand() {\n'+
			'  if (cmd=="ip") {\n'+
			'    Feedback="AP IP: "+WiFi.softAPIP().toString();\n'+
			'    Feedback+="<br>";\n'+
			'    Feedback+="STA IP: "+WiFi.localIP().toString();\n'+
			'  } else if (cmd=="mac") {\n'+
			'    Feedback="STA MAC: "+WiFi.macAddress();\n'+
			'  } else if (cmd=="restart") {\n'+
			'    ESP.restart();\n'+
			'  } else if (cmd=="digitalwrite") {\n'+
			'    ledcDetachPin(p1.toInt());\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  } else if (cmd=="digitalread") {\n'+
			'    Feedback=String(digitalRead(p1.toInt()));\n'+
			'  } else if (cmd=="analogwrite") {\n'+
			'    if (p1=="4") {\n'+
			'      ledcAttachPin(4, 4);\n'+
			'      ledcSetup(4, 5000, 8);\n'+
			'      ledcWrite(4,p2.toInt());\n'+
			'    } else {\n'+
			'      ledcAttachPin(p1.toInt(), 9);\n'+
			'      ledcSetup(9, 5000, 8);\n'+
			'      ledcWrite(9,p2.toInt());\n'+
			'    }\n'+
			'  } else if (cmd=="analogread") {\n'+
			'    Feedback=String(analogRead(p1.toInt()));\n'+
			'  } else if (cmd=="touchread") {\n'+
			'    Feedback=String(touchRead(p1.toInt()));\n'+
			'  } else if (cmd=="restart") {\n'+
			'    ESP.restart();\n';
			if (flash=="Y") {			
				Blockly.Arduino.definitions_.define_linkit_ExecuteCommand += ''+
				'  } else if (cmd=="flash") {\n'+
				'    ledcAttachPin(4, 4);\n'+
				'    ledcSetup(4, 5000, 8);\n'+
				'    int val = p1.toInt();\n'+
				'    ledcWrite(4,val);\n';
			}
			Blockly.Arduino.definitions_.define_linkit_ExecuteCommand += ''+
			'  } else if(cmd=="servo") {\n'+
			'    ledcAttachPin(p1.toInt(), p3.toInt());\n'+
			'    ledcSetup(p3.toInt(), 50, 16);\n'+
			'    int val = 7864-p2.toInt()*34.59;\n'+
			'    if (val > 7864)\n'+
			'       val = 7864;\n'+
			'    else if (val < 1638)\n'+
			'      val = 1638;\n'+
			'    ledcWrite(p3.toInt(), val);\n'+
			'  } else if (cmd=="relay") {\n'+
			'    pinMode(p1.toInt(), OUTPUT);\n'+
			'    digitalWrite(p1.toInt(), p2.toInt());\n'+
			'  } else if (cmd=="buzzer") { \n'+
			'    pinMode(p1.toInt(),OUTPUT);\n'+
			'    if (p4=="") p4="9";\n'+
			'    ledcSetup(p4.toInt(), 2000, 8);\n'+
			'    ledcAttachPin(p1.toInt(), p4.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), p2.toInt());\n'+
			'    delay(p3.toInt());\n'+
			'    ledcWriteTone(p4.toInt(), 0);\n'+
			'  } else if (cmd=="resetwifi") {\n'+
			'    for (int i=0;i<2;i++) {\n'+
			'      WiFi.begin(p1.c_str(), p2.c_str());\n'+
			'      Serial.print("Connecting to ");\n'+
			'      Serial.println(p1);\n'+
			'      long int StartTime=millis();\n'+
			'      while (WiFi.status() != WL_CONNECTED) {\n'+
			'          delay(500);\n'+
			'          if ((StartTime+5000) < millis()) break;\n'+
			'      }\n'+
			'      Serial.println("");\n'+
			'      Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'      Feedback="STAIP: "+WiFi.localIP().toString();\n'+
			'      if (WiFi.status() == WL_CONNECTED) {\n'+
			'        WiFi.softAP((WiFi.localIP().toString()+"_"+p1).c_str(), p2.c_str());\n'+
 			'        break;\n'+
			'      }\n'+
			'    }\n'+
			'  } else if (cmd=="print") {\n'+
			'    Serial.print(p1);\n'+
			'  } else if (cmd=="println") {\n'+
			'    Serial.println(p1);\n'+
			'  } else if (cmd=="delay") {\n'+
			'    delay(p1.toInt());\n'+				
			'  } else if (cmd=="framesize") {\n'+
			'    int val = p1.toInt();\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_framesize(s, (framesize_t)val);\n'+
			'  } else if (cmd=="quality") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_quality(s, p1.toInt());\n'+
			'  } else if (cmd=="contrast") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_contrast(s, p1.toInt());\n'+
			'  } else if (cmd=="brightness") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_brightness(s, p1.toInt());\n'+
			'  } else if (cmd=="saturation") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_saturation(s, p1.toInt());\n'+ 
			'  } else if (cmd=="special_effect") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_special_effect(s, p1.toInt());\n'+
			'  } else if (cmd=="hmirror") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_hmirror(s, p1.toInt());\n'+
			'  } else if (cmd=="vflip") {\n'+
			'    sensor_t * s = esp_camera_sensor_get();\n'+
			'    s->set_vflip(s, p1.toInt());\n'+
			'  } else {\n  '+ 
			statements_executecommand.replace(/\n/g,"\n  ")+
			'}\n'+ 
			'}\n';
	
	Blockly.Arduino.setups_.setup_serial="WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);\n  Serial.begin("+baudrate+");\n  delay(10);";
	Blockly.Arduino.setups_.setup_cam_initial = ''+
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
			'  if (s->id.PID == OV3660_PID) {\n'+
			'    s->set_vflip(s, 1);\n'+
			'    s->set_brightness(s, 1);\n'+
			'    s->set_saturation(s, -2);\n'+
			'  }\n'+			
			'  s->set_framesize(s, FRAMESIZE_'+framesize+');\n'+
			'  WiFi.mode(WIFI_AP_STA);\n'+
			'  \n'+
			'  for (int i=0;i<2;i++) {\n'+
			'    WiFi.begin(_lwifi_ssid, _lwifi_pass);\n'+
			'    \n'+
			'    delay(1000);\n'+
			'    Serial.println("");\n'+
			'    Serial.print("Connecting to ");\n'+
			'    Serial.println(_lwifi_ssid);\n'+
			'    \n'+
			'    long int StartTime=millis();\n'+
			'    while (WiFi.status() != WL_CONNECTED) {\n'+
			'        delay(500);\n'+
			'        if ((StartTime+5000) < millis()) break;\n'+
			'    }\n'+
			'    \n'+
			'    if (WiFi.status() == WL_CONNECTED) {\n'+
			'      WiFi.softAP((WiFi.localIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+      
			'      Serial.println("");\n'+
			'      Serial.println("STAIP address: ");\n'+
			'      Serial.println(WiFi.localIP());\n'+
			'      Serial.println("");\n';
			if (flash=="Y") {
				Blockly.Arduino.setups_.setup_cam_initial += ''+
				'  		 ledcAttachPin(4, 4);\n'+
				'  		 ledcSetup(4, 5000, 8);\n'+				
				'        for (int i=0;i<5;i++) {\n'+
				'          ledcWrite(4,10);\n'+
				'          delay(200);\n'+
				'          ledcWrite(4,0);\n'+
				'          delay(200);\n'+
				'        }\n';
			}		
		Blockly.Arduino.setups_.setup_cam_initial += ''+			
			'      break;\n'+
			'    }\n'+
			'  }\n'+
			'  \n'+
			'  if (WiFi.status() != WL_CONNECTED) {\n'+
			'    WiFi.softAP((WiFi.softAPIP().toString()+"_"+(String)apssid).c_str(), appassword);\n'+
			'  }\n'+
			'  \n'+
			'  Serial.println("");\n'+
			'  Serial.println("APIP address: ");\n'+
			'  Serial.println(WiFi.softAPIP());\n'+
			'  \n'+
			'  startCameraServer();\n\n';
			if (flash=="Y") {	
				Blockly.Arduino.setups_.setup_cam_initial += ''+			
				'  pinMode(4, OUTPUT);\n'+
				'  digitalWrite(4, LOW);\n';
			}			
	

	Blockly.Arduino.definitions_.getCommand = ''+
			'  void getCommand(char c) {\n'+
			'    if (c==\'?\') receiveState=1;\n'+
			'    if ((c==\' \')||(c==\'\\r\')||(c==\'\\n\')) receiveState=0;\n'+
			'    \n'+
			'    if (receiveState==1) {\n'+
			'      Command=Command+String(c);\n'+
			'      \n'+
			'      if (c==\'=\') cmdState=0;\n'+
			'      if (c==\';\') pState++;\n'+
			'      \n'+
			'      if ((cmdState==1)&&((c!=\'?\')||(questionState==1))) cmd=cmd+String(c);\n'+
			'      if ((cmdState==0)&&(pState==1)&&((c!=\'=\')||(equalState==1))) p1=p1+String(c);\n'+
			'      if ((cmdState==0)&&(pState==2)&&(c!=\';\')) p2=p2+String(c);\n'+
			'      if ((cmdState==0)&&(pState==3)&&(c!=\';\')) p3=p3+String(c);\n'+
			'      if ((cmdState==0)&&(pState==4)&&(c!=\';\')) p4=p4+String(c);\n'+
			'      if ((cmdState==0)&&(pState==5)&&(c!=\';\')) p5=p5+String(c);\n'+
			'      if ((cmdState==0)&&(pState==6)&&(c!=\';\')) p6=p6+String(c);\n'+
			'      if ((cmdState==0)&&(pState==7)&&(c!=\';\')) p7=p7+String(c);\n'+
			'      if ((cmdState==0)&&(pState==8)&&(c!=\';\')) p8=p8+String(c);\n'+
			'      if ((cmdState==0)&&(pState>=9)&&((c!=\';\')||(semicolonState==1))) p9=p9+String(c);\n'+
			'      \n'+
			'      if (c==\'?\') questionState=1;\n'+
			'      if (c==\'=\') equalState=1;\n'+
			'      if ((pState>=9)&&(c==\';\')) semicolonState=1;\n'+
			'    }\n'+
			'  }\n';
	Blockly.Arduino.definitions_.stream_function = ''+
			'  void servo_rotate(int channel, int angle) {\n'+
			'      int val = 7864-angle*34.59;\n'+ 
			'      if (val > 7864)\n'+
			'         val = 7864;\n'+
			'      else if (val < 1638)\n'+
			'        val = 1638;\n'+
			'      ledcWrite(channel, val);\n'+
			'  }\n'+
			'  static size_t jpg_encode_stream(void * arg, size_t index, const void* data, size_t len){\n'+
			'      jpg_chunking_t *j = (jpg_chunking_t *)arg;\n'+
			'      if(!index){\n'+
			'          j->len = 0;\n'+
			'      }\n'+
			'      if(httpd_resp_send_chunk(j->req, (const char *)data, len) != ESP_OK){\n'+
			'          return 0;\n'+
			'      }\n'+
			'      j->len += len;\n'+
			'      return len;\n'+
			'  }\n'+
			'  static esp_err_t capture_handler(httpd_req_t *req){\n'+
			'      camera_fb_t * fb = NULL;\n'+
			'      esp_err_t res = ESP_OK;\n'+
			'      fb = esp_camera_fb_get();\n'+
			'      if (!fb) {\n'+
			'          Serial.println("Camera capture failed");\n'+
			'          httpd_resp_send_500(req);\n'+
			'          return ESP_FAIL;\n'+
			'      }\n'+
			'      httpd_resp_set_type(req, "image/jpeg");\n'+
			'      httpd_resp_set_hdr(req, "Content-Disposition", "inline; filename=capture.jpg");\n'+
			'      httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");\n'+
			'      size_t fb_len = 0;\n'+
			'      if(fb->format == PIXFORMAT_JPEG){\n'+
			'          fb_len = fb->len;\n'+
			'          res = httpd_resp_send(req, (const char *)fb->buf, fb->len);\n'+
			'      } else {\n'+
			'          jpg_chunking_t jchunk = {req, 0};\n'+
			'          res = frame2jpg_cb(fb, 80, jpg_encode_stream, &jchunk)?ESP_OK:ESP_FAIL;\n'+
			'          httpd_resp_send_chunk(req, NULL, 0);\n'+
			'          fb_len = jchunk.len;\n'+
			'      }\n'+
			'      esp_camera_fb_return(fb);\n'+
			'      return res;\n'+
			'  }\n'+
			'  static esp_err_t stream_handler(httpd_req_t *req){\n'+
			'      camera_fb_t * fb = NULL;\n'+
			'      esp_err_t res = ESP_OK;\n'+
			'      size_t _jpg_buf_len = 0;\n'+
			'      uint8_t * _jpg_buf = NULL;\n'+
			'      char * part_buf[64];\n'+
			'      res = httpd_resp_set_type(req, _STREAM_CONTENT_TYPE);\n'+
			'      if(res != ESP_OK){\n'+
			'          return res;\n'+
			'      }\n'+
			'      httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");\n'+
			'      while(true){\n'+
			'          fb = esp_camera_fb_get();\n'+
			'          if (!fb) {\n'+
			'              Serial.println("Camera capture failed");\n'+
			'              res = ESP_FAIL;\n'+
			'          } else {\n'+
			'            if(fb->format != PIXFORMAT_JPEG){\n'+
			'                bool jpeg_converted = frame2jpg(fb, 80, &_jpg_buf, &_jpg_buf_len);\n'+
			'                esp_camera_fb_return(fb);\n'+
			'                fb = NULL;\n'+
			'                if(!jpeg_converted){\n'+
			'                    Serial.println("JPEG compression failed");\n'+
			'                    res = ESP_FAIL;\n'+
			'                }\n'+
			'            } else {\n'+
			'                _jpg_buf_len = fb->len;\n'+
			'                _jpg_buf = fb->buf;\n'+
			'            }\n'+
			'          }\n'+
			'          if(res == ESP_OK){\n'+
			'              res = httpd_resp_send_chunk(req, (const char *)_jpg_buf, _jpg_buf_len);\n'+
			'          }\n'+
			'          if(res == ESP_OK){\n'+
			'              res = httpd_resp_send_chunk(req, _STREAM_BOUNDARY, strlen(_STREAM_BOUNDARY));\n'+
			'          }\n'+
			'          if(res == ESP_OK){\n'+
			'              size_t hlen = snprintf((char *)part_buf, 64, _STREAM_PART, _jpg_buf_len);\n'+
			'              res = httpd_resp_send_chunk(req, (const char *)part_buf, hlen);\n'+
			'          }\n'+
			'          if(fb){\n'+
			'              esp_camera_fb_return(fb);\n'+
			'              fb = NULL;\n'+
			'              _jpg_buf = NULL;\n'+
			'          } else if(_jpg_buf){\n'+
			'              free(_jpg_buf);\n'+
			'              _jpg_buf = NULL;\n'+
			'          }\n'+
			'          if(res != ESP_OK){\n'+
			'              break;\n'+
			'          }\n'+
			'      }\n'+
			'      return res;\n'+
			'  }\n'+
			'  static esp_err_t cmd_handler(httpd_req_t *req){\n'+
			'      char*  buf;\n'+
			'      size_t buf_len;\n'+
			'      char variable[128] = {0,};\n'+
			'      char value[128] = {0,};\n'+
			'      String myCmd = "";\n'+
			'      buf_len = httpd_req_get_url_query_len(req) + 1;\n'+
			'      if (buf_len > 1) {\n'+
			'          buf = (char*)malloc(buf_len);\n'+
			'          if(!buf){\n'+
			'              httpd_resp_send_500(req);\n'+
			'              return ESP_FAIL;\n'+
			'          }\n'+
			'          if (httpd_req_get_url_query_str(req, buf, buf_len) == ESP_OK) {\n'+
			'            if (httpd_query_key_value(buf, "var", variable, sizeof(variable)) == ESP_OK&&httpd_query_key_value(buf, "val", value, sizeof(value)) == ESP_OK) {\n'+
			'            } \n'+
			'            else {\n'+
			'              myCmd = String(buf);\n'+
			'            }\n'+
			'          }\n'+
			'      } else {\n'+
			'          httpd_resp_send_404(req);\n'+
			'          return ESP_FAIL;\n'+
			'      }\n'+			
			'      Feedback="";Command="";cmd="";p1="";p2="";p3="";p4="";p5="";p6="";p7="";p8="";p9="";\n'+
			'      receiveState=0,cmdState=1,pState=1,questionState=0,equalState=0,semicolonState=0;\n'+
			'      if (myCmd.length()>0) {\n'+
			'        myCmd = "?"+myCmd;\n'+
			'        for (int i=0;i<myCmd.length();i++) {\n'+
			'          getCommand(char(myCmd.charAt(i)));\n'+
			'        }\n'+
			'      }\n'+
			'      if (cmd.length()>0) {\n'+
			'        if (cmd=="ip") {\n'+
			'          Feedback="AP IP: "+WiFi.softAPIP().toString();\n'+
			'          Feedback+="<br>";\n'+
			'          Feedback+="STA IP: "+WiFi.localIP().toString();\n'+
			'        } else if (cmd=="mac") {\n'+
			'          Feedback="STA MAC: "+WiFi.macAddress();\n'+
			'        } else if (cmd=="restart") {\n'+
			'          ESP.restart();\n'+
			'        } else if (cmd=="digitalwrite") {\n'+
			'          ledcDetachPin(p1.toInt());\n'+
			'          pinMode(p1.toInt(), OUTPUT);\n'+
			'          digitalWrite(p1.toInt(), p2.toInt());\n'+
			'        } else if (cmd=="digitalread") {\n'+
			'          Feedback=String(digitalRead(p1.toInt()));\n'+
			'        } else if (cmd=="analogwrite") {\n'+
			'          if (p1=="4") {\n'+
			'            ledcAttachPin(4, 4);\n'+
			'            ledcSetup(4, 5000, 8);\n'+
			'            ledcWrite(4,p2.toInt());\n'+
			'          }\n'+
			'          else {\n'+
			'            ledcAttachPin(p1.toInt(), 9);\n'+
			'            ledcSetup(9, 5000, 8);\n'+
			'            ledcWrite(9,p2.toInt());\n'+
			'          }\n'+
			'        } else if (cmd=="analogread") {\n'+
			'          Feedback=String(analogRead(p1.toInt()));\n'+
			'        } else if (cmd=="touchread") {\n'+
			'          Feedback=String(touchRead(p1.toInt()));\n'+
			'        } else if (cmd=="resetwifi") {\n'+
			'          for (int i=0;i<2;i++) {\n'+
			'            WiFi.begin(p1.c_str(), p2.c_str());\n'+
			'            Serial.print("Connecting to ");\n'+
			'            Serial.println(p1);\n'+
			'            long int StartTime=millis();\n'+
			'            while (WiFi.status() != WL_CONNECTED) {\n'+
			'                delay(500);\n'+
			'                if ((StartTime+5000) < millis()) break;\n'+
			'            }\n'+
			'            Serial.println("");\n'+
			'            Serial.println("STAIP: "+WiFi.localIP().toString());\n'+
			'            Feedback=WiFi.localIP().toString();\n'+
			'            if (WiFi.status() == WL_CONNECTED) {\n'+
			'              WiFi.softAP((WiFi.localIP().toString()+"_"+p1).c_str(), p2.c_str());\n'+
			'              break;\n'+
			'            }\n'+
			'          }\n';
			if (flash=="Y") {
				Blockly.Arduino.definitions_.stream_function += ''+				
					'        } else if (cmd=="flash") {\n'+
					'          ledcAttachPin(4, 4);\n'+
					'          ledcSetup(4, 5000, 8);\n'+  
					'          int val = p1.toInt();\n'+
					'          ledcWrite(4,val);\n';
			}
		Blockly.Arduino.definitions_.stream_function += ''+
			' 		 } else if (cmd=="print") {\n'+
			' 		   Serial.print(p1);\n'+
			' 		 } else if (cmd=="println") {\n'+
			' 		   Serial.println(p1);\n'+
			' 		 } else if (cmd=="delay") {\n'+
			' 		   delay(p1.toInt());\n'+				
			' 		 } else if (cmd=="framesize") {\n'+
			' 	 	   int val = p1.toInt();\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			' 	       s->set_framesize(s, (framesize_t)val);\n'+
			' 	   	 } else if (cmd=="quality") {\n'+
			' 	 	   sensor_t * s = esp_camera_sensor_get();\n'+
			' 	 	   s->set_quality(s, p1.toInt());\n'+
			' 		 } else if (cmd=="contrast") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			' 	 	   s->set_contrast(s, p1.toInt());\n'+
			' 		 } else if (cmd=="brightness") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			' 		   s->set_brightness(s, p1.toInt());\n'+
			' 		 } else if (cmd=="saturation") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			'		   s->set_saturation(s, p1.toInt());\n'+ 
			'		 } else if (cmd=="special_effect") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			' 		   s->set_special_effect(s, p1.toInt());\n'+
			' 		 } else if (cmd=="hmirror") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			'  		   s->set_hmirror(s, p1.toInt());\n'+
			' 		 } else if (cmd=="vflip") {\n'+
			' 		   sensor_t * s = esp_camera_sensor_get();\n'+
			' 		   s->set_vflip(s, p1.toInt());\n'+
			'        } else if (cmd=="servo") {\n'+
			'            ledcAttachPin(p1.toInt(), p3.toInt());\n'+
			'            ledcSetup(p3.toInt(), 50, 16);\n'+
			'            servo_rotate(p3.toInt(), p2.toInt());\n'+
			'            delay(100);\n'+
		    ' 		   } else {\n  '+ 
						 statements_executecommand.replace(/\n/g,"\n  ")+
		    '		   }\n'+ 
			'          const char *resp = Feedback.c_str();\n'+
			'          httpd_resp_set_type(req, "text/html");\n'+
			'          httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");\n'+
			'          return httpd_resp_send(req, resp, strlen(resp));\n'+
			'        }\n'+
			'    }\n'+
			'    static const char PROGMEM INDEX_HTML[] = R"rawliteral(\n'+mainpage+
			'    \n)rawliteral";\n'+
			'    static esp_err_t index_handler(httpd_req_t *req){\n'+
			'        httpd_resp_set_type(req, "text/html");\n'+
			'        return httpd_resp_send(req, (const char *)INDEX_HTML, strlen(INDEX_HTML));\n'+
			'    }\n'+
			'    void startCameraServer(){\n'+
			'      httpd_config_t config = HTTPD_DEFAULT_CONFIG();\n'+
			'      httpd_uri_t index_uri = {\n'+
			'          .uri       = "/",\n'+
			'          .method    = HTTP_GET,\n'+
			'          .handler   = index_handler,\n'+
			'          .user_ctx  = NULL\n'+
			'      };\n'+
			'      httpd_uri_t cmd_uri = {\n'+
			'          .uri       = "/control",\n'+
			'          .method    = HTTP_GET,\n'+
			'          .handler   = cmd_handler,\n'+
			'          .user_ctx  = NULL\n'+
			'      };\n'+
			'      httpd_uri_t capture_uri = {\n'+
			'          .uri       = "/capture",\n'+
			'          .method    = HTTP_GET,\n'+
			'          .handler   = capture_handler,\n'+
			'          .user_ctx  = NULL\n'+
			'      };\n'+
			'      httpd_uri_t stream_uri = {\n'+
			'          .uri       = "/stream",\n'+
			'          .method    = HTTP_GET,\n'+
			'          .handler   = stream_handler,\n'+
			'          .user_ctx  = NULL\n'+
			'      };\n'+
			'      Serial.printf("Starting web server on port: \'%d\'\\n", config.server_port);\n'+
			'      if (httpd_start(&camera_httpd, &config) == ESP_OK) {\n'+
			'          httpd_register_uri_handler(camera_httpd, &index_uri);\n'+
			'          httpd_register_uri_handler(camera_httpd, &cmd_uri);\n'+
			'          httpd_register_uri_handler(camera_httpd, &capture_uri);\n'+
			'      }\n'+
			'      config.server_port += 1;\n'+
			'      config.ctrl_port += 1;\n'+
			'      Serial.printf("Starting stream server on port: \'%d\'\\n", config.server_port);\n'+
			'      if (httpd_start(&stream_httpd, &config) == ESP_OK) {\n'+
			'          httpd_register_uri_handler(stream_httpd, &stream_uri);\n'+
			'      }\n'+
			'    }\n';			
			
			
			
			
    return '';
};

Blockly.Arduino['cocossd_esp32cam'] = function(block) {
	var javascript_initial = Blockly.Arduino.statementToCode(block, 'javascript_initial');
	var javascript_recognition = Blockly.Arduino.statementToCode(block, 'javascript_recognition');
		
	var code = "\"<!DOCTYPE html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js'></script><script src='https:\/\/cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js'></script><script src='https:\/\/cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.1.0'></script><script src='https:\/\/fustyles.github.io/webduino/GameElements_20190131/gameelements.js'></script><script src='https:\/\/fustyles.github.io/webduino/coco-ssd_20201012/coco-ssd.js'></script><script src='https:\/\/fustyles.github.io/webduino/coco-ssd_20201012/coco-ssd_esp32cam.js'></script></head><body><script>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{cocossd_video('block','1','1','1');"+javascript_initial.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"/var ")+" recognitionFinish = async function() {"+javascript_recognition.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"var ")+"}};main();</script></body></html>\"";

  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['cocossd_video'] = function(block) { 
  var value_result_ = block.getFieldValue('result_');
  var value_frame_ = block.getFieldValue('frame_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'cocossd_video("' + value_result_ + '","' + value_frame_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.Arduino['cocossd_list'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var code = 'cocossd_list("' + value_object_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['cocossd_object'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var value_index_ = Blockly.Arduino.valueToCode(block, 'index_', Blockly.Arduino.ORDER_ATOMIC);
  var value_data_ = block.getFieldValue('data_');
  var code = 'cocossd_object("' + value_object_ + '",' + value_index_ + ',"' + value_data_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['cocossd_object_number'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var code = 'cocossd_object_number("' + value_object_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['cocossd_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'cocossd_state(' + value_state_ + ');\n';
  return code;
};

Blockly.Arduino['cocossd_video_position'] = function(block) { 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'cocossd_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.Arduino['cocossd_startvideo_media'] = function(block) { 
  var value_width_ = Blockly.Arduino.valueToCode(block, 'width_', Blockly.Arduino.ORDER_ATOMIC);
  var value_height_ = Blockly.Arduino.valueToCode(block, 'height_', Blockly.Arduino.ORDER_ATOMIC);
  var value_facing_ = block.getFieldValue('facing_');
  var value_index_ = Blockly.Arduino.valueToCode(block, 'index_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'cocossd_startvideo_media(' + value_width_ + ',' + value_height_ + ',"' + value_facing_ + '",' + value_index_ + ');\n';
  return code;
};

Blockly.Arduino['cocossd_startvideo_stream'] = function(block) { 
  var value_src_ = Blockly.Arduino.valueToCode(block, 'src_', Blockly.Arduino.ORDER_ATOMIC); 
  var code = 'cocossd_startvideo_stream(' + value_src_ + ');\n';
  return code;
};

Blockly.Arduino['cocossd_canvas_get'] = function(block) { 
  var code = '"cocossd"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['cocossd_clear'] = function(block) { 
  var code = 'cocossd_clear();\n';
  return code;
};

Blockly.Arduino['cocossd_pause'] = function(block) { 
  var value_time = Blockly.Arduino.valueToCode(block, 'time_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'cocossd_state(0);setTimeout(function(){cocossd_state(1);}, '+value_time+');\n';
  return code;
};

Blockly.Arduino['declare_variable'] = function (block) {
  var variable_variable = Blockly.Arduino.nameDB_.getName(block.getFieldValue('variable'), Blockly.Variables.NAME_TYPE);
  var code = 'var ' + variable_variable + ';\n';
  return code;
};


Blockly.Arduino['holistic_esp32cam'] = function(block) {
	var javascript_initial = Blockly.Arduino.statementToCode(block, 'javascript_initial');
	var javascript_recognition = Blockly.Arduino.statementToCode(block, 'javascript_recognition');
		
	var code = "\"<!DOCTYPE html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js'></script><script src='https:\/\/fustyles.github.io/webduino/holistic_20201012/holistic.js'></script><script src='https:\/\/fustyles.github.io/webduino/holistic_20201012/holistic_esp32cam.js'></script><script src='https:\/\/fustyles.github.io/webduino/GameElements_20190131/gameelements.js'></script><script src='https:\/\/cdn.jsdelivr.net/npm/@mediapipe/holistic@0.4/holistic.js' crossorigin='anonymous'></script></head><body><script>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{holistic_video('block','1','1','1','1','1','1');"+javascript_initial.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"/var ")+" recognitionFinish = async function() {"+javascript_recognition.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"var ")+"}};main();</script></body></html>\"";

  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['holistic_video'] = function(block) { 
  var value_video_ = block.getFieldValue('video_');
  var value_face_ = block.getFieldValue('face_');
  var value_pose_ = block.getFieldValue('pose_');
  var value_lefthand_ = block.getFieldValue('lefthand_');
  var value_righthand_ = block.getFieldValue('righthand_');	
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'holistic_video("' + value_video_ + '","' + value_face_ + '","' + value_pose_ + '","' + value_lefthand_ + '","' + value_righthand_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.Arduino['holistic_face_position'] = function(block) {
  var value_part_ = Blockly.Arduino.valueToCode(block, 'part_', Blockly.Arduino.ORDER_ATOMIC);
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_face_position(Number(' + value_part_ + ')-1,"' + value_data_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_face_lefteye_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_face_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_face_righteye_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_face_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_face_nose_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_face_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_face_mouth_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_face_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_pose_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_pose_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_lefthand_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_lefthand_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_righthand_position'] = function(block) {
  var value_part_ = block.getFieldValue('part_');
  var value_data_ = block.getFieldValue('data_');
  var code = 'holistic_righthand_position("' + value_part_ + '","' + value_data_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_distance'] = function (block) {
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1_ = Blockly.Arduino.valueToCode(block, 'x1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1_ = Blockly.Arduino.valueToCode(block, 'y1_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'holistic_distance(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_angle'] = function (block) {
  var value_x0_ = Blockly.Arduino.valueToCode(block, 'x0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y0_ = Blockly.Arduino.valueToCode(block, 'y0_', Blockly.Arduino.ORDER_ATOMIC);
  var value_x1_ = Blockly.Arduino.valueToCode(block, 'x1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_y1_ = Blockly.Arduino.valueToCode(block, 'y1_', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'holistic_angle(' + value_x0_ + ',' + value_y0_ + ','+ value_x1_ + ',' + value_y1_ + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'holistic_state(' + value_state_ + ');\n';
  return code;
};

Blockly.Arduino['holistic_video_position'] = function(block) { 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'holistic_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.Arduino['holistic_canvas_get'] = function(block) { 
  var code = '"canvasElement"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_all_poistion'] = function(block) {
  var value_part_ = block.getFieldValue('part_'); 
  var code = 'holistic_all_position("' + value_part_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_face_angle'] = function (block) {
  var value_part1 = Blockly.Arduino.valueToCode(block, 'part1_', Blockly.Arduino.ORDER_ATOMIC);
  var value_part2 = Blockly.Arduino.valueToCode(block, 'part2_', Blockly.Arduino.ORDER_ATOMIC);  
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.Arduino.valueToCode(block, 'adjust_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'holistic_part_angle("face", Number(' + value_part1 + ')-1, Number(' + value_part2 + ')-1,"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['holistic_pose_angle'] = function (block) {
  var value_part1 = block.getFieldValue('part1_');
  var value_part2 = block.getFieldValue('part2_');
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.Arduino.valueToCode(block, 'adjust_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'holistic_part_angle("pose", Number(' + value_part1 + '), Number(' + value_part2 + '),"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.Arduino.ORDER_NONE];  
};

Blockly.Arduino['holistic_lefthand_angle'] = function (block) {
  var value_part1 = block.getFieldValue('part1_');
  var value_part2 = block.getFieldValue('part2_'); 
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.Arduino.valueToCode(block, 'adjust_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'holistic_part_angle("lefthand", Number(' + value_part1 + '), Number(' + value_part2 + '),"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.Arduino.ORDER_NONE];  
};

Blockly.Arduino['holistic_righthand_angle'] = function (block) {
  var value_part1 = block.getFieldValue('part1_');
  var value_part2 = block.getFieldValue('part2_');  
  var value_axis = block.getFieldValue('axis_');
  var value_adjust = Blockly.Arduino.valueToCode(block, 'adjust_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'holistic_part_angle("righthand", Number(' + value_part1 + '), Number(' + value_part2 + '),"' + value_axis + '",' + value_adjust + ')';
  return [code, Blockly.Arduino.ORDER_NONE];  
};

Blockly.Arduino['holistic_pause'] = function(block) { 
  var value_time = Blockly.Arduino.valueToCode(block, 'time_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'holistic_state(0);setTimeout(function(){holistic_state(1);}, '+value_time+');\n';
  return code;
};

Blockly.Arduino['teachablemachine_esp32cam'] = function(block) {
	var javascript_initial = Blockly.Arduino.statementToCode(block, 'javascript_initial');
	var javascript_teachablemachine = Blockly.Arduino.statementToCode(block, 'javascript_teachablemachine');
		
	var code = "\"<!DOCTYPE html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js'></script><script src='https:\/\/fustyles.github.io/webduino/teachablemachine_20201012/teachablemachine.js'></script><script src='https:\/\/fustyles.github.io/webduino/teachablemachine_20201012/teachablemachine_esp32cam.js'></script><script src='https:\/\/fustyles.github.io/webduino/GameElements_20190131/gameelements.js'></script><script src='https:\/\/cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js'></script><script src='https:\/\/cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js'></script><script src='https://cdn.jsdelivr.net/npm/@teachablemachine/pose@0.8/dist/teachablemachine-pose.min.js'></script></head><body><script>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{teachablemachine_video('block','1','1');"+javascript_initial.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"/var ")+" recognitionFinish = async function() {"+javascript_teachablemachine.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"var ")+"}};main();</script></body></html>\"";

  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['teachablemachine_video'] = function(block) { 
  var value_result_ = block.getFieldValue('result_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'teachablemachine_video("' + value_result_ + '","' + value_mirrorimage_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.Arduino['teachablemachine_model'] = function(block) {
  var value_project_ = block.getFieldValue('project_');
  var value_model_ = Blockly.Arduino.valueToCode(block, 'model_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'teachablemachine_model("' + value_project_ + '",' + value_model_ + ');\n';
  return code;
};

Blockly.Arduino['teachablemachine_result'] = function(block) { 
  var value_result_ = block.getFieldValue('result_');
  var code = 'teachablemachine_result("' + value_result_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['teachablemachine_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'teachablemachine_state(' + value_state_ + ');\n';
  return code;
};

Blockly.Arduino['teachablemachine_video_position'] = function(block) { 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'teachablemachine_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.Arduino['teachablemachine_pause'] = function(block) { 
  var value_time = Blockly.Arduino.valueToCode(block, 'time_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'teachablemachine_state(0);setTimeout(function(){teachablemachine_state(1);}, '+value_time+');\n';
  return code;
};

Blockly.Arduino['esp32_cam_googledrive'] = function(block) {
    var scriptid = Blockly.Arduino.valueToCode(block, 'scriptid', Blockly.Arduino.ORDER_ATOMIC);
    var linetoken = Blockly.Arduino.valueToCode(block, 'linetoken', Blockly.Arduino.ORDER_ATOMIC);
    var foldername = Blockly.Arduino.valueToCode(block, 'foldername', Blockly.Arduino.ORDER_ATOMIC);
    var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);

	if (selectBoardType()=="esp32")
	  Blockly.Arduino.definitions_.define_base64 ='#include "Base64_tool.h"';
	else
	  Blockly.Arduino.definitions_.define_base64 ='#include "Base64.h"';


	Blockly.Arduino.definitions_.SendCapturedImageToGoogleDrive = '\n'+
			'String SendStillToGoogleDrive(String myScript, String myFoldername, String myFilename, String myImage, String myLineNotifyToken) {\n'+
			'  const char* myDomain = "script.google.com";\n'+
			'  String getAll="", getBody = "";\n'+
			'  \n'+
			'  camera_fb_t * fb = NULL;\n'+
			'  fb = esp_camera_fb_get();\n'+
			'  if(!fb) {\n'+
			'    Serial.println("Camera capture failed");\n'+
			'    delay(1000);\n'+
			'    ESP.restart();\n'+
			'    return "Camera capture failed";\n'+
			'  }\n'+
			'  \n'+
			'  Serial.println("Connect to " + String(myDomain));\n'+
			'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.SendCapturedImageToGoogleDrive += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.SendCapturedImageToGoogleDrive +='  if (client_tcp.connect(myDomain, 443)) {\n'+
			'    Serial.println("Connection successful");\n'+
			'    \n'+
			'    char *input = (char *)fb->buf;\n'+
			'    char output[base64_enc_len(3)];\n'+
 			'    String imageFile = "data:image/jpeg;base64,";\n'+
			'    for (int i=0;i<fb->len;i++) {\n'+
			'      base64_encode(output, (input++), 3);\n'+
			'      if (i%3==0) imageFile += urlencode(String(output));\n'+
			'    }\n'+
			'    String Data = "myToken="+myLineNotifyToken+myFoldername+myFilename+myImage;\n'+
			'    \n'+
			'    client_tcp.println("POST " + myScript + " HTTP/1.1");\n'+
			'    client_tcp.println("Host: " + String(myDomain));\n'+
			'    client_tcp.println("Content-Length: " + String(Data.length()+imageFile.length()));\n'+
			'    client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
			'    client_tcp.println("Connection: keep-alive");\n'+
			'    client_tcp.println();\n'+
			'    \n'+
			'    client_tcp.print(Data);\n'+
			'    int Index;\n'+
			'    for (Index = 0; Index < imageFile.length(); Index = Index+1024) {\n'+
			'      client_tcp.print(imageFile.substring(Index, Index+1024));\n'+
			'    }\n'+
			'    esp_camera_fb_return(fb);\n'+
			'    \n'+
			'    int waitTime = 10000;\n'+
			'    long startTime = millis();\n'+
			'    boolean state = false;\n'+
			'    \n'+
			'    while ((startTime + waitTime) > millis())\n'+
			'    {\n'+
			'      Serial.print(".");\n'+
			'      delay(100);\n'+
			'      while (client_tcp.available())\n'+
			'      {\n'+
			'          char c = client_tcp.read();\n'+
			'          if (state==true) getBody += String(c);\n'+        
			'          if (c == \'\\n\')\n'+
			'          {\n'+
			'            if (getAll.length()==0) state=true;\n'+
			'            getAll = "";\n'+
			'          }\n'+
			'          else if (c != \'\\r\')\n'+
			'            getAll += String(c);\n'+
			'          startTime = millis();\n'+
			'       }\n'+
			'       if (getBody.length()>0) break;\n'+
			'    }\n'+
			'    client_tcp.stop();\n'+
			'    Serial.println(getBody);\n'+
			'  }\n'+
			'  else {\n'+
			'    getBody="Connected to " + String(myDomain) + " failed.";\n'+
			'    Serial.println("Connected to " + String(myDomain) + " failed.");\n'+
			'  }\n'+
			'  \n'+
			'  return getBody;\n'+
			'}\n';

	Blockly.Arduino.definitions_.urlencode = '\n'+
			'String urlencode(String str)\n'+
			'{\n'+
			'  String encodedString="";\n'+
			'  char c;\n'+
			'  char code0;\n'+
			'  char code1;\n'+
			'  char code2;\n'+
			'  for (int i =0; i < str.length(); i++){\n'+
			'    c=str.charAt(i);\n'+
			'    if (c == \' \'){\n'+
			'      encodedString+= \'+\';\n'+
			'    } else if (isalnum(c)){\n'+
			'      encodedString+=c;\n'+
			'    } else{\n'+
			'      code1=(c & 0xf)+\'0\';\n'+
			'      if ((c & 0xf) >9){\n'+
			'          code1=(c & 0xf) - 10 + \'A\';\n'+
			'      }\n'+
			'      c=(c>>4)&0xf;\n'+
			'      code0=c+\'0\';\n'+
			'      if (c > 9){\n'+
			'          code0=c - 10 + \'A\';\n'+
			'      }\n'+
			'      code2=\'\\0\';\n'+
			'      encodedString+=\'%\';\n'+
			'      encodedString+=code0;\n'+
			'      encodedString+=code1;\n'+
			'      \/\/encodedString+=code2;\n'+
			'    }\n'+
			'    yield();\n'+
			'  }\n'+
			'  return encodedString;\n'+
			'}\n';
			
  var code = 'SendStillToGoogleDrive("/macros/s/'+scriptid.replace(/"/g,'')+'/exec","&myFoldername='+foldername.replace(/"/g,'')+'","&myFilename='+filename.replace(/"/g,'')+'","&myFile=",'+linetoken+');\n';
  return code;			
}

Blockly.Arduino['esp32_cam_spreadsheet'] = function(block) {
  var value_spreadsheeturl = Blockly.Arduino.valueToCode(block, 'spreadsheeturl', Blockly.Arduino.ORDER_ATOMIC);
  var value_spreadsheetname = Blockly.Arduino.valueToCode(block, 'spreadsheetname', Blockly.Arduino.ORDER_ATOMIC);
  var value_datetime = block.getFieldValue('datetime');    
  var value_position = block.getFieldValue('position');  
  var value_column = Blockly.Arduino.valueToCode(block, 'column', Blockly.Arduino.ORDER_ATOMIC);
  var value_row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
  var value_spreadsheet_script = Blockly.Arduino.valueToCode(block, 'spreadsheet_script', Blockly.Arduino.ORDER_ATOMIC);
	
	if (selectBoardType()=="esp32")
	  Blockly.Arduino.definitions_.define_base64 ='#include "Base64_tool.h"';
	else
	  Blockly.Arduino.definitions_.define_base64 ='#include "Base64.h"';


	Blockly.Arduino.definitions_.SendStillToSpreadsheet = '\n'+
			'String SendStillToSpreadsheet(String Data, String myScript) {\n'+
			'  const char* myDomain = "script.google.com";\n'+
			'  String getAll="", getBody = "";\n'+
			'  \n'+
			'  camera_fb_t * fb = NULL;\n'+
			'  fb = esp_camera_fb_get();\n'+
			'  if(!fb) {\n'+
			'    Serial.println("Camera capture failed");\n'+
			'    delay(1000);\n'+
			'    ESP.restart();\n'+
			'    return "Camera capture failed";\n'+
			'  }\n'+
			'  \n'+
			'  Serial.println("Connect to " + String(myDomain));\n'+
			'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.SendStillToSpreadsheet += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.SendStillToSpreadsheet +='  if (client_tcp.connect(myDomain, 443)) {\n'+
			'    Serial.println("Connection successful");\n'+
			'    \n'+
			'    char *input = (char *)fb->buf;\n'+
			'    char output[base64_enc_len(3)];\n'+
 			'    String imageFile = "data:image/jpeg;base64,";\n'+
			'    for (int i=0;i<fb->len;i++) {\n'+
			'      base64_encode(output, (input++), 3);\n'+
			'      if (i%3==0) imageFile += urlencode(String(output));\n'+
			'    }\n'+
			'    client_tcp.println("POST " + myScript + " HTTP/1.1");\n'+
			'    client_tcp.println("Host: " + String(myDomain));\n'+
			'    client_tcp.println("Content-Length: " + String(Data.length()+imageFile.length()));\n'+
			'    client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n'+
			'    client_tcp.println("Connection: keep-alive");\n'+
			'    client_tcp.println();\n'+
			'    \n'+
			'    client_tcp.print(Data);\n'+
			'    int Index;\n'+
			'    for (Index = 0; Index < imageFile.length(); Index = Index+1024) {\n'+
			'      client_tcp.print(imageFile.substring(Index, Index+1024));\n'+
			'    }\n'+
			'    esp_camera_fb_return(fb);\n'+
			'    \n'+
			'    int waitTime = 10000;\n'+
			'    long startTime = millis();\n'+
			'    boolean state = false;\n'+
			'    \n'+
			'    while ((startTime + waitTime) > millis())\n'+
			'    {\n'+
			'      Serial.print(".");\n'+
			'      delay(100);\n'+
			'      while (client_tcp.available())\n'+
			'      {\n'+
			'          char c = client_tcp.read();\n'+
			'          if (state==true) getBody += String(c);\n'+        
			'          if (c == \'\\n\')\n'+
			'          {\n'+
			'            if (getAll.length()==0) state=true;\n'+
			'            getAll = "";\n'+
			'          }\n'+
			'          else if (c != \'\\r\')\n'+
			'            getAll += String(c);\n'+
			'          startTime = millis();\n'+
			'       }\n'+
			'       if (getBody.length()>0) break;\n'+
			'    }\n'+
			'    client_tcp.stop();\n'+
			'    Serial.println(getBody);\n'+
			'  }\n'+
			'  else {\n'+
			'    getBody="Connected to " + String(myDomain) + " failed.";\n'+
			'    Serial.println("Connected to " + String(myDomain) + " failed.");\n'+
			'  }\n'+
			'  \n'+
			'  return getBody;\n'+
			'}\n';

	Blockly.Arduino.definitions_.urlencode = '\n'+
			'String urlencode(String str)\n'+
			'{\n'+
			'  String encodedString="";\n'+
			'  char c;\n'+
			'  char code0;\n'+
			'  char code1;\n'+
			'  char code2;\n'+
			'  for (int i =0; i < str.length(); i++){\n'+
			'    c=str.charAt(i);\n'+
			'    if (c == \' \'){\n'+
			'      encodedString+= \'+\';\n'+
			'    } else if (isalnum(c)){\n'+
			'      encodedString+=c;\n'+
			'    } else{\n'+
			'      code1=(c & 0xf)+\'0\';\n'+
			'      if ((c & 0xf) >9){\n'+
			'          code1=(c & 0xf) - 10 + \'A\';\n'+
			'      }\n'+
			'      c=(c>>4)&0xf;\n'+
			'      code0=c+\'0\';\n'+
			'      if (c > 9){\n'+
			'          code0=c - 10 + \'A\';\n'+
			'      }\n'+
			'      code2=\'\\0\';\n'+
			'      encodedString+=\'%\';\n'+
			'      encodedString+=code0;\n'+
			'      encodedString+=code1;\n'+
			'      \/\/encodedString+=code2;\n'+
			'    }\n'+
			'    yield();\n'+
			'  }\n'+
			'  return encodedString;\n'+
			'}\n';
			
	var code = 'SendStillToSpreadsheet("&spreadsheeturl="+String('+value_spreadsheeturl+')+"&spreadsheetname="+String(urlencode('+value_spreadsheetname+'))+"&datetime='+value_datetime+'&position='+value_position+'&column="+String('+value_column+')+"&row="+String('+value_row+')+"&file=",'+value_spreadsheet_script+');\n';
  	return code;		
}

Blockly.Arduino['esp32_cam_linenotify'] = function(block) {
    var linetoken = Blockly.Arduino.valueToCode(block, 'linetoken', Blockly.Arduino.ORDER_ATOMIC);
    var linemessage = Blockly.Arduino.valueToCode(block, 'linemessage', Blockly.Arduino.ORDER_ATOMIC);
	
	Blockly.Arduino.definitions_.SendCapturedImageToLineNotify = '\n'+
			'String SendStillToLineNotify(String token, String message) {\n'+
			'  camera_fb_t * fb = NULL;\n'+
			'  fb = esp_camera_fb_get();\n'+
			'  if(!fb) {\n'+
			'    Serial.println("Camera capture failed");\n'+
			'    delay(1000);\n'+
			'    ESP.restart();\n'+
			'    return "Camera capture failed";\n'+
			'  }\n'+
			'  \n'+
			'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.SendCapturedImageToLineNotify += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.SendCapturedImageToLineNotify +='  if (client_tcp.connect("notify-api.line.me", 443)) {\n'+
			'    Serial.println("Connection successful");\n'+
			'    \n'+
			'    if (message=="") message = "ESP32-CAM";\n'+
			'    String head = "--Taiwan\\r\\nContent-Disposition: form-data; name=\\\"message\\\"; \\r\\n\\r\\n" + message + "\\r\\n--Taiwan\\r\\nContent-Disposition: form-data; name=\\\"imageFile\\\"; filename=\\\"esp32-cam.jpg\\\"\\r\\nContent-Type: image\/jpeg\\r\\n\\r\\n";\n'+
			'    String tail = "\\r\\n--Taiwan--\\r\\n";\n'+
			'    \n'+
 			'    uint16_t imageLen = fb->len;\n'+
			'    uint16_t extraLen = head.length() + tail.length();\n'+
			'    uint16_t totalLen = imageLen + extraLen;\n'+
			'    \n'+
			'    client_tcp.println("POST \/api\/notify HTTP\/1.1");\n'+
			'    client_tcp.println("Connection: close");\n'+
			'    client_tcp.println("Host: notify-api.line.me");\n'+
			'    client_tcp.println("Authorization: Bearer " + token);\n'+
			'    client_tcp.println("Content-Length: " + String(totalLen));\n'+
			'    client_tcp.println("Content-Type: multipart\/form-data; boundary=Taiwan");\n'+
			'    client_tcp.println();\n'+
			'    client_tcp.print(head);\n'+
			'    \n'+
			'    uint8_t *fbBuf = fb->buf;\n'+
			'    size_t fbLen = fb->len;\n'+
			'    for (size_t n=0;n<fbLen;n=n+1024) {\n'+
			'      if (n+1024<fbLen) {\n'+
			'        client_tcp.write(fbBuf, 1024);\n'+
			'        fbBuf += 1024;\n'+
			'      }\n'+
			'      else if (fbLen%1024>0) {\n'+
			'        size_t remainder = fbLen%1024;\n'+
			'        client_tcp.write(fbBuf, remainder);\n'+
			'      }\n'+
			'    }\n'+
			'    \n'+
			'    client_tcp.print(tail);\n'+
			'    esp_camera_fb_return(fb);\n'+
			'    \n'+
			'    String getResponse="",Feedback="";\n'+
			'    int waitTime = 10000;\n'+
			'    long startTime = millis();\n'+
			'    boolean state = false;\n'+
			'    \n'+
			'    while ((startTime + waitTime) > millis()) {\n'+
			'      Serial.print(".");\n'+
			'      delay(100);\n'+
			'      while (client_tcp.available())  {\n'+
			'          char c = client_tcp.read();\n'+
			'          if (state==true) Feedback += String(c);\n'+
			'          if (c == \'\\n\') {\n'+
			'            if (getResponse.length()==0) state=true;\n'+
			'            getResponse = "";\n'+
 			'         }\n'+
			'          else if (c != \'\\r\')\n'+
			'            getResponse += String(c);\n'+
			'          startTime = millis();\n'+
			'       }\n'+
			'       if (Feedback.length()>0) break;\n'+
			'    }\n'+
			'    Serial.println();\n'+
			'    client_tcp.stop();\n'+
			'    return Feedback;\n'+
			'  }\n'+
			'  else {\n'+
			'    return "Connected to notify-api.line.me failed.";\n'+
			'  }\n'+
			'};\n';
			
  var code = 'SendStillToLineNotify('+linetoken+', '+linemessage+');\n';
  return code;			
}

Blockly.Arduino['esp32_cam_telegrambot'] = function(block) {
    var token = Blockly.Arduino.valueToCode(block, 'token', Blockly.Arduino.ORDER_ATOMIC);
    var chatid = Blockly.Arduino.valueToCode(block, 'chatid', Blockly.Arduino.ORDER_ATOMIC);
	
	Blockly.Arduino.definitions_.sendCapturedImage2Telegram = '\n'+
	'String sendCapturedImage2Telegram(String token, String chat_id) {\n'+
	'  const char* myDomain = "api.telegram.org";\n'+
	'  String getAll="", getBody = "";\n'+
	'  camera_fb_t * fb = NULL;\n'+
	'  fb = esp_camera_fb_get();\n'+
	'  if(!fb) {\n'+
	'    Serial.println("Camera capture failed");\n'+
	'    delay(1000);\n'+
	'    return "Camera capture failed";\n'+
	'  }\n'+  
	'  Serial.println("Connect to " + String(myDomain));\n'+
	'  WiFiClientSecure client_tcp;\n';
	if (arduinoCore_ESP32)
		Blockly.Arduino.definitions_.sendCapturedImage2Telegram += '  client_tcp.setInsecure();\n';
	Blockly.Arduino.definitions_.sendCapturedImage2Telegram +='  if (client_tcp.connect(myDomain, 443)) {\n'+
	'    Serial.println("Connection successful");\n'+
	'    String head = "--Taiwan\\r\\nContent-Disposition: form-data; name=\\"chat_id\\"; \\r\\n\\r\\n" + chat_id + "\\r\\n--Taiwan\\r\\nContent-Disposition: form-data; name=\\"photo\\"; filename=\\"esp32-cam.jpg\\"\\r\\nContent-Type: image/jpeg\\r\\n\\r\\n";\n'+
	'    String tail = "\\r\\n--Taiwan--\\r\\n";\n'+
	'    uint16_t imageLen = fb->len;\n'+
	'    uint16_t extraLen = head.length() + tail.length();\n'+
	'    uint16_t totalLen = imageLen + extraLen;\n'+
	'    client_tcp.println("POST /bot"+token+"/sendPhoto HTTP/1.1");\n'+
	'    client_tcp.println("Host: " + String(myDomain));\n'+
	'    client_tcp.println("Content-Length: " + String(totalLen));\n'+
	'    client_tcp.println("Content-Type: multipart/form-data; boundary=Taiwan");\n'+
	'    client_tcp.println();\n'+
	'    client_tcp.print(head);\n'+
	'    uint8_t *fbBuf = fb->buf;\n'+
	'    size_t fbLen = fb->len;\n'+
	'    for (size_t n=0;n<fbLen;n=n+1024) {\n'+
	'      if (n+1024<fbLen) {\n'+
	'        client_tcp.write(fbBuf, 1024);\n'+
	'        fbBuf += 1024;\n'+
	'      } else if (fbLen%1024>0) {\n'+
	'        size_t remainder = fbLen%1024;\n'+
	'        client_tcp.write(fbBuf, remainder);\n'+
	'      }\n'+
	'    }\n'+
	'    client_tcp.print(tail);\n'+
	'    esp_camera_fb_return(fb);\n'+
	'    int waitTime = 10000;\n'+
	'    long startTime = millis();\n'+
	'    boolean state = false;\n'+
	'    while ((startTime + waitTime) > millis()) {\n'+
	'      Serial.print(".");\n'+
	'      delay(100);\n'+
	'      while (client_tcp.available()) {\n'+
	'          char c = client_tcp.read();\n'+
	'          if (state==true) getBody += String(c);\n'+
	'          if (c == \'\\n\') {\n'+
	'            if (getAll.length()==0) state=true;\n'+
	'            getAll = "";\n'+
	'          }\n'+
	'          else if (c != \'\\r\')\n'+
	'            getAll += String(c);\n'+
	'          startTime = millis();\n'+
	'       }\n'+
	'       if (getBody.length()>0) break;\n'+
	'    }\n'+
	'    client_tcp.stop();\n'+
	'    Serial.println();\n'+
	'    Serial.println(getBody);\n'+
	'  } else {\n'+
	'    getBody="Connected to api.telegram.org failed.";\n'+
	'    Serial.println("Connected to api.telegram.org failed.");\n'+
	'  }\n'+
	'  return getBody;\n'+
	'}\n';
			
	var code = 'sendCapturedImage2Telegram('+token+', '+chatid+');\n';
	return code;			
}

Blockly.Arduino['server_getrequest'] = function(block) {
	var code = 'getRequest();\n';
	return code;			
}	

Blockly.Arduino['faceapidetect_esp32cam'] = function(block) {
	var javascript_initial = Blockly.Arduino.statementToCode(block, 'javascript_initial');
	var javascript_faceapidetect = Blockly.Arduino.statementToCode(block, 'javascript_faceapidetect');
		
	var code = "\"<!DOCTYPE html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js'></script><script src='https:\/\/fustyles.github.io/webduino/faceapi_detect_20201012/faceapidetect.js'></script><script src='https:\/\/fustyles.github.io/webduino/faceapi_detect_20201012/faceapidetect_esp32cam.js'></script><script src='https:\/\/fustyles.github.io/webduino/GameElements_20190131/gameelements.js'></script><script src='https:\/\/fustyles.github.io/webduino/faceapi_detect_20201012/face-api.min.js'></script></head><body><script>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{faceapidetect_video('1','block','1');"+javascript_initial.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"/var ")+" recognitionFinish = async function() {"+javascript_faceapidetect.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"var ")+"}};main();</script></body></html>\"";

  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['faceapidetect_face'] = function(block) { 
  var value_face_ = Blockly.Arduino.valueToCode(block, 'face_', Blockly.Arduino.ORDER_ATOMIC);
  var value_property_ = block.getFieldValue('property_');
  var code = 'faceapidetect_face(' + value_face_ + ',"' + value_property_ + '")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['faceapidetect_video'] = function(block) { 
  var value_frame_ = block.getFieldValue('frame_');
  var value_result_ = block.getFieldValue('result_');
  var value_opacity_ = block.getFieldValue('opacity_');
  var code = 'faceapidetect_video("' + value_frame_ + '","' + value_result_ + '","' + value_opacity_ + '");\n';
  return code;
};

Blockly.Arduino['faceapidetect_state'] = function(block) {
  var value_state_ = block.getFieldValue('state_');
  var code = 'faceapidetect_state(' + value_state_ + ');\n';
  return code;
};

Blockly.Arduino['faceapidetect_video_position'] = function(block) { 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'faceapidetect_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.Arduino['faceapidetect_pause'] = function(block) { 
  var value_time = Blockly.Arduino.valueToCode(block, 'time_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'faceapidetect_state(0);setTimeout(function(){faceapidetect_state(1);}, '+value_time+');\n';
  return code;
};

Blockly.Arduino['faceapirecognize_esp32cam'] = function(block) {
	var javascript_initial = Blockly.Arduino.statementToCode(block, 'javascript_initial');
	var javascript_faceapirecognize = Blockly.Arduino.statementToCode(block, 'javascript_faceapirecognize');
		
	var code = "\"<!DOCTYPE html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https:\/\/ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js'></script><script src='https:\/\/fustyles.github.io/webduino/faceapi_recognize_20201012/faceapi-recognition_esp32cam.js'></script><script src='https:\/\/fustyles.github.io/webduino/faceapi_recognize_20201012/faceapi-recognition.js'></script><script src='https:\/\/fustyles.github.io/webduino/GameElements_20190131/gameelements.js'></script><script src='https:\/\/fustyles.github.io/webduino/faceapi_recognize_20201012/face-api.min.js'></script></head><body><script>const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{"+javascript_initial.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"/var ")+" recognitionFinish = async function() {"+javascript_faceapirecognize.replace(/"/g,"'").replace(/\n/g,"").replace(/NULL/g,"null").replace(/int /g,"var ")+"}};main();</script></body></html>\"";

  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['faceapirecognize_video'] = function(block) { 
  var value_result = block.getFieldValue('result_');
  var value_opacity = block.getFieldValue('opacity_');  
  var value_timer = Blockly.Arduino.valueToCode(block, 'timer', Blockly.Arduino.ORDER_ATOMIC);
  var value_faceimagepath = Blockly.Arduino.valueToCode(block, 'faceimagepath', Blockly.Arduino.ORDER_ATOMIC);
  var value_facelabel = Blockly.Arduino.valueToCode(block, 'facelabel', Blockly.Arduino.ORDER_ATOMIC);
  var value_faceimagecount = Blockly.Arduino.valueToCode(block, 'faceimagecount', Blockly.Arduino.ORDER_ATOMIC);
  var value_distancelimit = Blockly.Arduino.valueToCode(block, 'distancelimit', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'faceapirecognize1_video("' + value_result + '","' + value_opacity + '",' + value_timer + ',' + value_faceimagepath + ',' + value_facelabel + ',' + value_faceimagecount + ',' + value_distancelimit + ');\n';
  return code;
};

Blockly.Arduino['faceapirecognize_detect'] = function(block) { 
  var code = 'faceapirecognize_detect();\n';
  return code;
};

Blockly.Arduino['faceapirecognize_number'] = function(block) { 
  var code = 'faceapirecognize_number()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['faceapirecognize_get'] = function(block) {
  var index = Blockly.Arduino.valueToCode(block, 'index', Blockly.Arduino.ORDER_ATOMIC);	
  var column = block.getFieldValue('column');
  var code = 'faceapirecognize_get('+index+',"'+column+'")';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['faceapirecognize_clear'] = function(block) { 
  var code = 'faceapirecognize_clear();\n';
  return code;
};

Blockly.Arduino['faceapirecognize_video_position'] = function(block) { 
  var value_left_ = Blockly.Arduino.valueToCode(block, 'left_', Blockly.Arduino.ORDER_ATOMIC);
  var value_top_ = Blockly.Arduino.valueToCode(block, 'top_', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'faceapirecognize_video_position(' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.Arduino['faceapirecognize_canvas_get'] = function(block) { 
  var code = '"faceapirecognize"';
  return [code, Blockly.Arduino.ORDER_NONE];
};

function selectBoardType() {
	var selectBoard = document.getElementById('board-selector');
	if (selectBoard) {
		var state = [0,0,0,0,0];
		for (var i=0;i<selectBoard.options.length;i++) {
			if (selectBoard.options[i].value.indexOf("LinkIt")!=-1)
				state[0]=1;
			if (selectBoard.options[i].value.indexOf("esp32")!=-1)
				state[1]=1;
			if (selectBoard.options[i].value.indexOf("BBCmicrobitV2")!=-1)
				state[2]=1;	
			if (selectBoard.options[i].value.indexOf("BPI-BIT")!=-1)
				state[3]=1;
			if (selectBoard.options[i].value.indexOf("Arduino Pro or Pro Mini")!=-1)
				state[4]=1;				
		}
		if (state[0]==0)
			selectBoard.options.add(new Option("LinkIt 7697","LinkIt:linkit_rtos:linkit_7697"));
		if (state[1]==0) 
			selectBoard.options.add(new Option("ESp32 Wrover Module","esp32:esp32:esp32wrover"));
		if (state[2]==0) 
			selectBoard.options.add(new Option("BBC micro:bit V2","sandeepmistry:nRF5:BBCmicrobitV2"));	
		if (state[3]==0) 
			selectBoard.options.add(new Option("BPI-BIT","esp32:esp32:bpi-bit"));
		if (state[4]==0) 
			selectBoard.options.add(new Option("Arduino Pro or Pro Mini","arduino:avr:pro"));
		if (selectBoard.value.split(":")[2]=="bpi-bit")
			return "BPI-BIT";
		else if (selectBoard.value.split(":")[2]=="pro")
			return "Arduino Pro or Pro Mini";		
		else
			return selectBoard.value.split(":")[0];
	}
	else
		return "";
}