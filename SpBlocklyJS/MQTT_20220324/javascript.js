Blockly.JavaScript['fu_mqtt_setup_js'] = function(block) {
  var server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
  var user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_ATOMIC);
  var password = Blockly.JavaScript.valueToCode(block, 'password', Blockly.JavaScript.ORDER_ATOMIC);
  var topic_subscribe = Blockly.JavaScript.statementToCode(block, 'topic_subscribe');
  var topic_getdata = Blockly.JavaScript.statementToCode(block, 'topic_getdata');
  
  var code = "";
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
											'}\n\n';										
  code += 'var mqtt_client = mqtt.connect('+server+',options);\n'+				
															'mqtt_client.on("connect", ()=>{\n'+
															'	console.log("connected");\n'+topic_subscribe+
															'	mqtt_client.on("message", async function (topic, payload) {\n'+topic_getdata+
															'   })\n'+
															'  }\n'+															
															')\n\n';	
												
  return code;
};

Blockly.JavaScript['fu_mqtt_subscribe_js'] = function(block) {
  var topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mqtt_client.subscribe('+topic+');\n';
  return code;
};

Blockly.JavaScript['fu_mqtt_gettopic_js'] = function(block) {
  var topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC);
  var topic_getdata = Blockly.JavaScript.statementToCode(block, 'topic_getdata'); 
  var code = 'if (topic=='+topic+') {\n'+topic_getdata+'}\n';
  return code;
};

Blockly.JavaScript['fu_mqtt_senddata_js'] = function(block) {
  var topic = Blockly.JavaScript.valueToCode(block, 'topic', Blockly.JavaScript.ORDER_ATOMIC);
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'mqtt_client.publish('+topic+', String('+text+'));\n';
  return code;
};

Blockly.JavaScript['fu_mqtt_getdata_js'] = function(block) {
	var format = block.getFieldValue('format');
	if (format=="number")
	  var code = 'Number(payload)';
	else
	  var code = 'new TextDecoder().decode(payload)';	
	return [code, Blockly.JavaScript.ORDER_NONE];
};
