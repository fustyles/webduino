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

  if ((text.indexOf('"')==0)&&(text.lastIndexOf('"')==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = variable + ' = ' + text + ';\n';
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
  var code = '//' + text.replace(/<br>/mg,"\n//") +'\n';
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

Blockly.Arduino['tcp_https'] = function(block) { 
  var domain = Blockly.Arduino.valueToCode(block, 'domain', Blockly.Arduino.ORDER_ATOMIC);
  var port = Blockly.Arduino.valueToCode(block, 'port', Blockly.Arduino.ORDER_ATOMIC);
  var request = Blockly.Arduino.valueToCode(block, 'request', Blockly.Arduino.ORDER_ATOMIC);
  var timeout = Blockly.Arduino.valueToCode(block, 'timeout', Blockly.Arduino.ORDER_ATOMIC);
  var code = '';
  return [code, Blockly.Arduino.ORDER_NONE]; 
};

Blockly.Arduino['tcp_http'] = function(block) {
  Blockly.Arduino.definitions_['tcp_http'] ='\n'+
											'String tcp_http(String domain,String request,int port,int waittime) {\n'+
											'  String getAll="", getBody="";\n'+
											'  WiFiClient client_tcp;\n'+
											'  if (client_tcp.connect(domain.c_str(), port)) {\n'+
											'	Serial.println("GET " + request);\n'+
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
  var code = 'tcp_http('+domain+', '+request+', '+port+', '+timeout+')';
  return [code, Blockly.Arduino.ORDER_NONE]; 
};