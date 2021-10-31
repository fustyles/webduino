Blockly.Blocks['customcode_head'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_HEAD_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);    
  }
};

Blockly.Blocks['customcode_code'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_CODE_SHOW);  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  }
};

Blockly.Blocks['customcode_variable'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_VARIABLE_SHOW);
	this.appendDummyInput() 
		.appendField(" = ");	
    this.appendValueInput("text")
        .setCheck(null);
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  }
};

Blockly.Blocks['customcode_code_input'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");   
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(20);
  }
};

Blockly.Blocks['customcode_comment'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_COMMENT_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['customcode_comment_block'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_COMMENT_BLOCK_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['customcode_instruction1'] = {
  init: function() {
	  this.appendValueInput("instruction")
		  .setCheck("String")
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);   
	  this.appendDummyInput()
		  .appendField("( ");      
	  this.appendValueInput("text")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction2'] = {
  init: function() {
	  this.appendValueInput("instruction")
		  .setCheck("String")
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);
	  this.appendDummyInput()
		  .appendField("( ");    
	  this.appendValueInput("text1")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(", ");       
	  this.appendValueInput("text2")
		  .setCheck(null);     
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction3'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField("( ");
	  this.appendValueInput("text1")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(", "); 	  
	  this.appendValueInput("text2")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(", ");       
	  this.appendValueInput("text3")
		  .setCheck(null);     
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction4'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField(".");
	  this.appendValueInput("text1")
		  .setCheck(null);       
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction5'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_VARIABLE_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField(".");
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["toInt()","toInt()"],
			["toDouble()","toDouble()"],	
			["toFloat()","toFloat()"],
			["toLowerCase()","toLowerCase()"],	
			["toUpperCase()","toUpperCase()"],
			["trim()","trim()"],	
			["c_str()","c_str()"],
			["length()","length()"]		  
	  ]), "type");     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
  }
};

Blockly.Blocks['customcode_instruction5_get'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_VARIABLE_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField(".");
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["toInt()","toInt()"],
			["toDouble()","toDouble()"],	
			["toFloat()","toFloat()"],
			["toLowerCase()","toLowerCase()"],	
			["toUpperCase()","toUpperCase()"],
			["trim()","trim()"],	
			["c_str()","c_str()"],
			["length()","length()"]		  
	  ]), "type");     
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction6'] = {
  init: function() {
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["String","String"],
			["byte","byte"],
			["char","char"],
			["float","float"],
			["int","int"],
			["long","long"],
			["word","word"],
			["sizeof","sizeof"],		  
			["isAlpha","isAlpha"],
			["isAlphaNumeric","isAlphaNumeric"],
			["isAscii","isAscii"],
			["isControl","isControl"],
			["isDigit","isDigit"],
			["isGraph","isGraph"],
			["isHexadecimalDigit","isHexadecimalDigit"],
			["isLowerCase","isLowerCase"],
			["isPrintable","isPrintable"],
			["isPunct","isPunct"],
			["isSpace","isSpace"],
			["isUpperCase","isUpperCase"],
			["isWhitespace","isWhitespace"]	  
			]), "instruction");    
	  this.appendDummyInput()
		  .appendField("( ");      
	  this.appendValueInput("text")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['linenotify_text'] = {
  init: function() {
    this.appendValueInput("value_text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_MESSAGE_SHOW);
	this.setInputsInline(true);		
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['linenotify_sticker'] = {
  init: function() {
    this.appendValueInput("value_text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_MESSAGE_SHOW);
    this.appendValueInput("value_packageId")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_PACKAGEID_SHOW);
    this.appendValueInput("value_stickerId")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_STICKERID_SHOW);
	this.setInputsInline(true);			
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['linenotify_image'] = {
  init: function() {
    this.appendValueInput("value_text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_MESSAGE_SHOW);
    this.appendValueInput("value_originalContentUrl")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_ORIGINALCONTENTURL_SHOW);
    this.appendValueInput("value_previewImageUrl")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_PREVIEWIMAGEURL_SHOW);
	this.setInputsInline(true);			
    this.setOutput(true, null);  
    this.setColour(50);
  }
};


Blockly.Blocks['tcp_https_esp32'] = {
  init: function() {
	this.appendDummyInput() 
	.appendField(Blockly.Msg.FRANCE4_HEAD_HTTPS_SHOW);
    this.appendValueInput("domain")
        .setCheck("String")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_DOMAIN_SHOW);
    this.appendValueInput("request")
        .setCheck("String")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_REQUEST_SHOW); 	  
    this.appendValueInput("port")
        .setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_PORT_SHOW); 
    this.appendValueInput("timeout")
        .setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_TIMEOUT_SHOW)
	.appendField(Blockly.Msg.FRANCE2_SECOND_SHOW);	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(20);   
  }
};

Blockly.Blocks['tcp_http_esp32'] = {
  init: function() {
	this.appendDummyInput() 
	.appendField(Blockly.Msg.FRANCE4_HEAD_HTTP_SHOW);
    this.appendValueInput("domain")
        .setCheck("String")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_DOMAIN_SHOW); 
    this.appendValueInput("request")
        .setCheck("String")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_REQUEST_SHOW); 	  
    this.appendValueInput("port")
        .setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_PORT_SHOW); 
    this.appendValueInput("timeout")
        .setCheck("Number")
	.setAlign(Blockly.ALIGN_RIGHT)		
        .appendField(Blockly.Msg.FRANCE2_TIMEOUT_SHOW)
	.appendField(Blockly.Msg.FRANCE2_SECOND_SHOW);	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(20);   
  }
};

Blockly.Blocks['linenotify_esp32'] = {
  init: function() {
  this.appendValueInput("linenotify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FRANCE5_HEAD_LINE_SHOW)
      .appendField(Blockly.Msg.ESP32_LINE_TOKEN_SHOW);  
  this.appendValueInput("linenotify_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ESP32_LINE_NOTIFY_SHOW);
	this.setInputsInline(true);		  
    this.setOutput(true, null);  
    this.setColour(200);
  }
};

Blockly.Blocks['linenotify_esp32_no'] = {
  init: function() {
	this.appendValueInput("linenotify_token")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.FRANCE5_HEAD_LINE_SHOW)
		.appendField(Blockly.Msg.ESP32_LINE_TOKEN_SHOW);  
	this.appendValueInput("linenotify_msg")
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_LINE_NOTIFY_SHOW);
	this.setInputsInline(true);		  
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['linenotify_esp32_br'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.ESP32_LINE_BR_SHOW);
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['linenotify_http'] = {
  init: function() {
	this.appendDummyInput() 
      .appendField(Blockly.Msg.FRANCE5_LINE_HTTP_SHOW)  
  this.appendValueInput("linenotify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ESP32_LINE_TOKEN_SHOW);  
  this.appendValueInput("linenotify_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ESP32_LINE_NOTIFY_SHOW);
	this.setInputsInline(true);	  
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['close_powerdog'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE6_CLOSE_POWERDOG_SHOW);    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
  }
};

Blockly.Blocks['esp32_wifi_wait_until_ready'] = {
  init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.ESP32_SET_WIFI_UNTIL_READY_TITLE);
	this.appendValueInput("SSID")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
	this.appendValueInput("PASSWORD")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};


Blockly.Blocks['thingspeak_update'] = {
  init: function() {   
  this.appendValueInput("key")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ThingSpeak ")
      .appendField("Write API Key");
  this.appendValueInput("field1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field1");
  this.appendValueInput("field2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field2");
  this.appendValueInput("field3")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field3");  
  this.appendValueInput("field4")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field4");
  this.appendValueInput("field5")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field5");
  this.appendValueInput("field6")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field6");  
  this.appendValueInput("field7")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field7");
  this.appendValueInput("field8")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field8");  
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_read1'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Get a Channel Feed");
	this.appendValueInput("key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("https://api.thingspeak.com/channels/");
	this.appendValueInput("count")
	  .setCheck("Number")
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("/feeds.json?results=");
	this.appendValueInput("api_key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("&api_key=");    
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_read2'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Get a Channel Feed");
	this.appendValueInput("key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("https://api.thingspeak.com/channels/");
	this.appendValueInput("field")
	  .setCheck("Number")
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("/fields/");    
	this.appendValueInput("count")
	  .setCheck("Number")
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(".json?results=");
	this.appendValueInput("api_key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("&api_key=");     
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_read3'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Get Channel Status Updates");
	this.appendValueInput("key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("https://api.thingspeak.com/channels/");
	this.appendDummyInput()
	  .appendField("/status.json"); 
	this.appendValueInput("api_key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("?api_key=");     
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_format'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Data to Json");
	this.appendValueInput("text")
	  .setCheck(null);
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['thingspeak_field'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("Get ThingSpeak Json Data");
	this.appendValueInput("text")
	  .setCheck(null);
	this.appendDummyInput()
	  .appendField("RecordNumber");
	this.appendValueInput("recordnumber")
	  .setCheck("Number"); 
	this.appendDummyInput()
	  .appendField("FieldName");
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["created_at","created_at"],
		["entry_id","entry_id"], 
		["field1","field1"],
		["field2","field2"],
		["field3","field3"],
		["field4","field4"],
		["field5","field5"],
		["field6","field6"],
		["field7","field7"],
		["field8","field8"]	
		]), "fieldname"); 
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['esp32_analogwrite'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_ANALOGWRITE_SHOW);
	this.appendValueInput("pin")
	  .setCheck("Number")
      .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);	  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_ANALOGWRITE_VALUE_SHOW);
	this.appendValueInput("val")
	  .setCheck("Number"); 	
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_CHANNEL_SHOW);
	this.appendValueInput("channel")
	  .setCheck("Number"); 	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['arduino_analogwrite'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ARDUINO_ANALOGWRITE_SHOW);
	this.appendValueInput("pin")
	  .setCheck("Number")
      .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);	  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_ANALOGWRITE_VALUE_SHOW);
	this.appendValueInput("val")
	  .setCheck("Number");
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_digitalwrite'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DIGITALWRITE_SHOW);
	this.appendValueInput("pin")
	  .setCheck("Number")
	  .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DIGITALWRITE_VALUE_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ESP32_DIGITALWRITE_HIGH_SHOW,"HIGH"],
		[Blockly.Msg.ESP32_DIGITALWRITE_LOW_SHOW,"LOW"]	  
		]), "val"); 
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SERVERMODULE_SHOW);
    this.appendValueInput("ssid")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
  }
};

Blockly.Blocks['esp32_cam_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_CAM_SERVERMODULE_SHOW);
    this.appendValueInput("ssid")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
    this.appendValueInput("ssid_ap")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_AP_SHOW);
    this.appendValueInput("password_ap")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_AP_SHOW);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["UXGA(1600x1200)","UXGA"],
			["SXGA(1280x1024)","SXGA"], 
			["XGA(1024x768)","XGA"],
			["SVGA(800x600)","SVGA"],
			["VGA(640x480)","VGA"],
			["CIF(400x296)","CIF"],
			["QVGA(320x240)","QVGA"],
			["HQVGA(240x176)","HQVGA"],
			["QQVGA(160x120)","QQVGA"],
			["QXGA(2048x1564)","QXGA"]	
		]), "framesize");		
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
  }
};

Blockly.Blocks['esp32_bluetooth_initial'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_INITIAL_SHOW);
    this.appendValueInput("baudrate")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_BAUDRATE_SHOW);
    this.appendValueInput("blename")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_NAME_SHOW);		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_bluetooth_readdata'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_READDATA_SHOW);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_bluetooth_getdata'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_GETDATA_SHOW);   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['esp32_myfirmata_bluetooth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_SHOW);
    this.appendValueInput("baudrate")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_BAUDRATE_SHOW);
    this.appendValueInput("blename")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_NAME_SHOW);		
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
  }
};

Blockly.Blocks['servermodule_cmd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_CMD_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_feedback'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_FEEDBACK_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_bluetooth_feedback'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_FEEDBACK_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_bluetooth_feedback_newline'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_FEEDBACK_NEWLINE_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_parameter'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["P1","P1"],
		["P2","P2"],
		["P3","P3"],	
		["P4","P4"],
		["P5","P5"],
		["P6","P6"],
		["P7","P7"],	
		["P8","P8"],
		["P9","P9"],	  
	]), "parameter"); 
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_FORMAT_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.SERVERMODULE_TOINT_SHOW,"toInt()"],
		[Blockly.Msg.SERVERMODULE_TODOUBLE_SHOW,"toDouble()"],	
		[Blockly.Msg.SERVERMODULE_TOFLOAT_SHOW,"toFloat()"],
		[Blockly.Msg.SERVERMODULE_TOLOWERCASE_SHOW,"toLowerCase()"],	
		[Blockly.Msg.SERVERMODULE_TOUPPERCASE_SHOW,"toUpperCase()"],
		[Blockly.Msg.SERVERMODULE_TRIM_SHOW,"trim()"],	
		[Blockly.Msg.SERVERMODULE_C_STR_SHOW,"c_str()"],
		[Blockly.Msg.SERVERMODULE_LENGTH_SHOW,"length()"]		  
	]), "type");     
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_parameter_variable'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["P1","P1"],
		["P2","P2"],
		["P3","P3"],	
		["P4","P4"],
		["P5","P5"],
		["P6","P6"],
		["P7","P7"],	
		["P8","P8"],
		["P9","P9"],	  
	]), "parameter"); 
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_FORMAT_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.SERVERMODULE_TOINT_SHOW,"toInt()"],
		[Blockly.Msg.SERVERMODULE_TODOUBLE_SHOW,"toDouble()"],	
		[Blockly.Msg.SERVERMODULE_TOFLOAT_SHOW,"toFloat()"],
		[Blockly.Msg.SERVERMODULE_TOLOWERCASE_SHOW,"toLowerCase()"],	
		[Blockly.Msg.SERVERMODULE_TOUPPERCASE_SHOW,"toUpperCase()"],
		[Blockly.Msg.SERVERMODULE_TRIM_SHOW,"trim()"],	
		[Blockly.Msg.SERVERMODULE_C_STR_SHOW,"c_str()"],
		[Blockly.Msg.SERVERMODULE_LENGTH_SHOW,"length()"]		  
	]), "type");     
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_variable_urldecode'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["P1","P1"],
		["P2","P2"],
		["P3","P3"],	
		["P4","P4"],
		["P5","P5"],
		["P6","P6"],
		["P7","P7"],	
		["P8","P8"],
		["P9","P9"],	  
	]), "parameter"); 
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_URLDECODE_SHOW);    
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_get'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["P1","P1"],
			["P2","P2"],
			["P3","P3"],	
			["P4","P4"],
			["P5","P5"],
			["P6","P6"],
			["P7","P7"],	
			["P8","P8"],
			["P9","P9"],	  
	  ]), "parameter");   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_set'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_SHOW);
	this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["P1","P1"],
			["P2","P2"],
			["P3","P3"],	
			["P4","P4"],
			["P5","P5"],
			["P6","P6"],
			["P7","P7"],	
			["P8","P8"],
			["P9","P9"],	  
	  ]), "parameter"); 
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_EQUAL_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_parameter_set_address'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
    this.appendValueInput("cmd")
        .appendField("cmd")	
        .setCheck(null);   
    this.appendValueInput("P1")
        .appendField("P1")	
        .setCheck(null); 
    this.appendValueInput("P2")
        .appendField("P2")	
        .setCheck(null); 
	this.appendValueInput("P3")
        .appendField("P3")	
        .setCheck(null); 
    this.appendValueInput("P4")
        .appendField("P4")	
        .setCheck(null); 
    this.appendValueInput("P5")
        .appendField("P5")	
        .setCheck(null); 		
    this.appendValueInput("P6")
        .appendField("P6")	
        .setCheck(null); 
    this.appendValueInput("P7")
        .appendField("P7")	
        .setCheck(null); 
    this.appendValueInput("P8")
        .appendField("P8")	
        .setCheck(null);
    this.appendValueInput("P9")
        .appendField("P9")	
        .setCheck(null);  		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_set_address1'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
    this.appendValueInput("cmd")
        .appendField("cmd")		
        .setCheck(null);   
    this.appendValueInput("P1")
        .appendField("P1")	
        .setCheck(null); 
    this.appendValueInput("P2")
        .appendField("P2")	
        .setCheck(null);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_set_address2'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
    this.appendValueInput("cmd")
        .appendField("cmd")		
        .setCheck(null);	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['esp32_pinmode'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SET_SHOW)
        .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
    this.appendValueInput("pin")
        .setCheck("Number");   
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_MODE_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["OUTPUT","OUTPUT"],
		["INPUT","INPUT"],	
		["INPUT_PULLUP","INPUT_PULLUP"]	  
	]), "mode");     
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_pinwrite'] = {
  init: function() {
	this.appendDummyInput()    
	    .appendField(Blockly.Msg.ESP32_DIGITALWRITE_SHOW);
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
    this.appendValueInput("pin")
        .setCheck("Number");   
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_VALUE_SHOW);
    this.appendValueInput("val")
        .setCheck("Number");     
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_pinread'] = {
  init: function() {
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.SERVERMODULE_DIGITALREAD_SHOW,"digitalRead"],
		[Blockly.Msg.SERVERMODULE_ANALOGREAD_SHOW,"analogRead"] 
	]), "type");
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
    this.appendValueInput("pin")
        .setCheck("Number");   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['MLX90614'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.MLX90614_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		["MLX90615","MLX90615"],
		["MLX90614","MLX90614"]  
		]), "sensor");
    this.appendValueInput("sda")
        .appendField("SDA")
        .setCheck("Number");   
    this.appendValueInput("scl")
        .appendField("SCL")
        .setCheck("Number");
	this.appendDummyInput()    
        .appendField(" ");		
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.MLX90614_KIND_OBJECT_SHOW,"object"],
		[Blockly.Msg.MLX90614_KIND_AMBIENT_SHOW,"ambient"]  
		]), "kind");
	this.appendDummyInput()    
        .appendField(Blockly.Msg.MLX90614_SCALE_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.MLX90614_SCALE_CELCIUS_SHOW,"0"],
		[Blockly.Msg.MLX90614_SCALE_FAHRENHEIT_SHOW,"1"],	
		[Blockly.Msg.MLX90614_SCALE_KELVIN_SHOW,"2"]	  
		]), "scale");
	this.appendDummyInput()    
		.appendField(Blockly.Msg.MLX90614_COMPENSATION_SHOW);	
    this.appendValueInput("compensation")
        .setCheck("Number");	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['dht11_pin'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DHT11_PIN_SHOW);
	this.appendValueInput("pin")
	  .setCheck("Number");	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['dht11_read'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DHT11_READ_SHOW);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['dht11_get'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DHT11_GET_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ESP32_DHT11_TEMPERATURE_SHOW,"temperature"],
		[Blockly.Msg.ESP32_DHT11_HUMIDITY_SHOW,"humidity"]	  
		]), "type");	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};


Blockly.Blocks['lcd1602_initial'] = {
  init: function() {  
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ESP32_LCD1602_SHOW)
		.appendField(Blockly.Msg.ESP32_LCD1602_ADDRESS_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
			["0x27","0x27"],
			["0x3F","0x3F"]	  
		]), "address");
	this.appendValueInput("sda")
	    .setCheck("Number")
	    .appendField(Blockly.Msg.ESP32_LCD1602_SDA_SHOW);	  
	this.appendValueInput("scl")
	    .setCheck("Number") 
	    .appendField(Blockly.Msg.ESP32_LCD1602_SCL_SHOW);
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['lcd1602_backlight'] = {
  init: function() {  
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ESP32_LCD1602_SHOW)
	    .appendField(Blockly.Msg.ESP32_LCD1602_BACKLIGHT_SHOW);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['lcd1602_clear'] = {
  init: function() {  
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ESP32_LCD1602_SHOW)
	    .appendField(Blockly.Msg.ESP32_LCD1602_CLEAR_SHOW);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['lcd1602_print'] = {
  init: function() {  
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ESP32_LCD1602_SHOW)
	    .appendField(Blockly.Msg.ESP32_LCD1602_PRINT_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
			["0","0"],
			["1","1"]	
		]), "row")
	    .appendField(Blockly.Msg.ESP32_LCD1602_ROW_SHOW);		
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
			["0","0"],
			["1","1"],	
			["2","2"],
			["3","3"],
			["4","4"],
			["5","5"],
			["6","6"],
			["7","7"],
			["8","8"],
			["9","9"],	
			["10","10"],
			["11","11"],
			["12","12"],
			["13","13"],
			["14","14"],
			["15","15"]			  
		]), "col")
	    .appendField(Blockly.Msg.ESP32_LCD1602_COL_SHOW);	  
	this.appendValueInput("str")
	    .setCheck(null)	
	    .appendField(Blockly.Msg.ESP32_LCD1602_STR_SHOW);	  
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_setuploop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(40);
  }
};

Blockly.Blocks['linkit7697_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LINKIT7697_SERVERMODULE_SHOW);
    this.appendValueInput("ssid")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
  }
};
Blockly.Blocks['table_create'] = {
  init: function() {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID);     
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"],  [Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);       
  this.appendValueInput("trcount_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TRCOUNT);    
  this.appendValueInput("tdcount_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TDCOUNT);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_HEIGHT);    
  this.appendValueInput("bgcolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BGCOLOR); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID);     
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_SET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_CELLWIDTH,"cellwidth"], [Blockly.Msg.PROPERTY_CELLHEIGHT,"cellheight"], [Blockly.Msg.PROPERTY_CELLCOLOR,"cellcolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_BACKGROUNDIMAGE,"backgroundimage"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_get'] = {
  init: function () {   
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_GET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ONCLICK_COLUMN_ROW,"onclick[Column,Row]"], [Blockly.Msg.PROPERTY_ONCLICKIMAGE,"onclickImage"], [Blockly.Msg.PROPERTY_COLUMNS,"columns"], [Blockly.Msg.PROPERTY_ROWS,"rows"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_BACKGROUNDIMAGE,"backgroundimage"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['table_clear'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.TABLE_CLEAR);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_change_colsrows'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_CHANGE_COLSROWS);       
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ADD,"add"], [Blockly.Msg.PROPERTY_REMOVE,"remove"]]), "cmd_");  
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(" ")    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_COL,"col"], [Blockly.Msg.PROPERTY_ROW,"row"]]), "target_");     
  this.appendValueInput("index_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_INDEX);   
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_SET)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);       
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_TEXTALIGN,"textalign"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_border_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDER_SET)
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"],  [Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);       
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_border_set'] = {
  init: function() {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_TD_BORDER_SET);    
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);       
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"],  [Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_GET)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_TEXT_SHOW,"text"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_IMAGE,"image"], [Blockly.Msg.PROPERTY_CHILDLENGTH,"childlength"], [Blockly.Msg.PROPERTY_CHILDID,"childid"], [Blockly.Msg.PROPERTY_TDID,"tdid"]]), "property_");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['table_td_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID);     
  this.appendValueInput("x_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck(null)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.TABLE_TD_ONCLICK_DO);    
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_insert_img'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_TD_INSERT_IMAGE);        
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.ID);      
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.URL);     
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.IMAGE)
      .appendField(Blockly.Msg.HEIGHT);   
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_img_move'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_IMAGE_MOVE)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);     
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_canvas_move'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("canvasid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_CANVAS_MOVE)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);     
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_copy_move'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_TD_COPY_MOVE);       
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);     
this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_COPYTO,"copy"], [Blockly.Msg.PROPERTY_MOVETO,"move"]]), "property_");
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_img_get'] = {
  init: function () {
  this.appendValueInput("imgid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_IMAGE_GET)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_COLUMN,"column"], [Blockly.Msg.PROPERTY_ROW,"row"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_NATURALWIDTH,"naturalwidth"], [Blockly.Msg.PROPERTY_NATURALHEIGHT,"naturalheight"], [Blockly.Msg.PROPERTY_IMAGEID,"imageid"]]), "property_");  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['table_td_insert_text'] = {
  init: function () {
  this.appendDummyInput()     
      .appendField(Blockly.Msg.TABLE_TD_INSERT_TEXT);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.appendValueInput("text_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CONTEXT);
  this.appendValueInput("fontname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTNAME);    
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE); 
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTCOLOR);       
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_td_clear'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_CLEAR)
      .appendField(Blockly.Msg.TABLE_TD_X);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_Y); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['table_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
	  .appendField(Blockly.Msg.TABLE)
      .appendField(Blockly.Msg.TABLE_ID); 
  this.appendDummyInput() 
      .appendField(Blockly.Msg.TABLE_DELETE);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['music_create'] = {
  init: function() {
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_CREATE)
      .appendField(Blockly.Msg.URL);
  this.appendValueInput("length_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_LENGTH);
  this.appendValueInput("loop_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MUSIC_LOOP);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['music_delete'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MUSIC_DELETE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['canvas_create'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CREATE);    
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);    
  this.appendDummyInput() 
      .appendField(Blockly.Msg.SET)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_MOVEX,"moveX"], [Blockly.Msg.PROPERTY_MOVEY,"moveY"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_BORDER,"border"], [Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GET)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_EXIST,"exist"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_BORDER,"border"], [Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['canvas_line'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_LINE);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X1);    
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y1);  
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);  
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);      
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_rect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_RECT);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);     
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);   
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_arc'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_ARC);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("r_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_R);    
  this.appendValueInput("sAngle_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SANGLE);  
  this.appendValueInput("eAngle_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_EANGLE);
  this.appendValueInput("counterclockwise_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_COUNTERCLOCKWISE);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);      
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);  
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_img_url'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.CANVAS_IMG);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.URL,"url"], [Blockly.Msg.IMAGE+Blockly.Msg.ID,"imageid"]]), "source_");
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_img'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_IMG);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("sx_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SX);
  this.appendValueInput("sy_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SY);
  this.appendValueInput("swidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SWIDTH);
  this.appendValueInput("sheight_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SHEIGHT);     
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT); 
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_capturevideo'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CAPTUREVIDEO);      
  this.appendValueInput("canvasid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_ID); 
  this.appendValueInput("videoid_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_ID);   
  this.appendValueInput("sx_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SX);
  this.appendValueInput("sy_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SY);
  this.appendValueInput("swidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SWIDTH);
  this.appendValueInput("sheight_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_SHEIGHT);     
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT); 
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_text'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_TEXT);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("text_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.CONTEXT);    
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("fontname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTNAME);    
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTALIGN)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_START,"start"], [Blockly.Msg.PROPERTY_END,"end"], [Blockly.Msg.PROPERTY_CENTER,"center"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "textalign_");
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);     
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTCOLOR); 
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_quadraticcurve'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_QUADRATICCURVE);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)     
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("cp1x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1X);
  this.appendValueInput("cp1y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1Y);    
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X);    
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y);  
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);      
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);  
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);      
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_beziercurve'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_BEZIERCURVE);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("cp1x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1X);
  this.appendValueInput("cp1y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP1Y); 
  this.appendValueInput("cp2x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP2X);
  this.appendValueInput("cp2y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_CP2Y);    
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X);    
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y);  
  this.appendValueInput("linewidth_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_LINEWIDTH);      
  this.appendValueInput("color_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOR);
  this.appendValueInput("fill_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_FILL);      
  this.appendValueInput("rotate_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);     
  this.appendValueInput("globalAlpha_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);     
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_clearrect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CLEARRECT);     
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)     
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_clear'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_CLEAR);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_delete'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_DELETE);      
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_ONCLICK_DO_IF); 
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['canvas_onclick_dom'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_ONCLICK_DO); 
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['canvas_onclick_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID)
  this.appendDummyInput()
      .appendField(Blockly.Msg.ONCLICK);    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['canvas_getcolor'] = {
  init: function() {  
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_GETCOLOR);       
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['canvas_getimagedata'] = {
  init: function() {  
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_GETIMAGEDATA);	  
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);	   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['canvas_setimagedata'] = {
  init: function() {  
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.CANVAS_ID);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CANVAS_SETIMAGEDATA);	  
  this.appendValueInput("data_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Y0);  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IMAGE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.URL);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);      
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_create_stream'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IMAGE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STREAMURL);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);      
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);    
  this.appendDummyInput() 
      .appendField(Blockly.Msg.SET)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.URL,"url"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ROTATE,"rotate"], [Blockly.Msg.PROPERTY_ROTATEX,"rotateX"], [Blockly.Msg.PROPERTY_ROTATEY,"rotateY"], [Blockly.Msg.PROPERTY_ROTATEZ,"rotateZ"], [Blockly.Msg.PROPERTY_MOVEX,"moveX"], [Blockly.Msg.PROPERTY_MOVEY,"moveY"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GET)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_EXIST,"exist"], [Blockly.Msg.URL,"url"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_NATURALWIDTH,"naturalwidth"], [Blockly.Msg.PROPERTY_NATURALHEIGHT,"naturalheight"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ROTATE,"rotate"], [Blockly.Msg.PROPERTY_ROTATEX,"rotateX"], [Blockly.Msg.PROPERTY_ROTATEY,"rotateY"], [Blockly.Msg.PROPERTY_ROTATEZ,"rotateZ"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_delete'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.DELETE);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(60);
  }
};

Blockly.Blocks['elements_collision'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"]]), "element1_");    
  this.appendValueInput("id1_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AND)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"]]), "element2_");    
  this.appendValueInput("id2_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID);    
  this.appendDummyInput()
      .appendField(Blockly.Msg.COLLISION_SIDE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "position_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['elements_collision_color'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"]]), "element1_");    
  this.appendValueInput("id1_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("id2_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(Blockly.Msg.AND)     
      .appendField(Blockly.Msg.CANVAS_ID);      
  this.appendValueInput("color_")
      .setCheck(null) 
      .setAlign(Blockly.ALIGN_RIGHT)   
      .appendField(Blockly.Msg.COLOR);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_collision'] = {
  init: function() {
  this.appendValueInput("id1_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLLISION)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("id2_")
      .setCheck(null)
      .appendField(Blockly.Msg.AND)
      .appendField(Blockly.Msg.ID);    
  this.appendDummyInput()
      .appendField(Blockly.Msg.COLLISION_SIDE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "position_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_boundary'] = {
  init: function() {
  this.appendValueInput("left_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.BOUNDARY)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("top_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.HEIGHT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_boundary_collision'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);       
  this.appendDummyInput()
      .appendField(Blockly.Msg.BOUNDARY_COLLISION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "property_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_boundary_collision_do'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);      
  this.appendDummyInput()
      .appendField(Blockly.Msg.BOUNDARY_COLLISION_DO) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ANY,"any"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "property_");
  this.appendStatementInput("do_");
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_sys_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SYS_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"screen_width"], [Blockly.Msg.HEIGHT,"screen_height"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_onclick_listener'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ONCLICK_LISTENER);
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['image_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_ONCLICK_DO_IF);  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_onclick_dom'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_ONCLICK_DO);  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['image_onload_dom'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_ONLOAD_DO);  
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['image_onclick_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ONCLICK);    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['image_move'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGE_MOVE_DIRECTION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"]]), "property_");   
  this.appendValueInput("step_")
      .setCheck("Number")
      .appendField(Blockly.Msg.IMAGE_MOVE_STEP);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['image_resize'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendValueInput("percentage_")
      .setCheck("Number")
      .appendField(Blockly.Msg.IMAGE_RESIZE); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.PERCENTAGE);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['mouse_coordinate_get_start'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_COORDINATE_GET_START);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['mouse_coordinate_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_COORDINATE_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_PAGEX,"pageX"], [Blockly.Msg.PROPERTY_PAGEY,"pageY"], [Blockly.Msg.PROPERTY_OFFSETX,"offsetX"], [Blockly.Msg.PROPERTY_OFFSETY,"offsetY"], [Blockly.Msg.PROPERTY_CLIENTX,"clientX"], [Blockly.Msg.PROPERTY_CLIENTY,"clientY"], [Blockly.Msg.PROPERTY_SCREENX,"screenX"], [Blockly.Msg.PROPERTY_SCREENY,"screenY"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  this.setHelpUrl("https://www.w3schools.com/jsref/obj_mouseevent.asp");
  }
};

Blockly.Blocks['document_timer_novar'] = {
  init: function () {
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.DOCUMENT_TIMER);
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['document_timer_once_novar'] = {
  init: function () {  
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.DOCUMENT_TIMER_ONCE);
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['document_timer'] = {
  init: function () {
	this.appendValueInput("var_")
        .setCheck("String")
        .appendField(Blockly.Msg.VARIABLE_NAME);		  
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.DOCUMENT_TIMER);  
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['document_timer_once'] = {
  init: function () {
	this.appendValueInput("var_")
        .setCheck("String")
        .appendField(Blockly.Msg.VARIABLE_NAME);	  
    this.appendValueInput("intervals_")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.DOCUMENT_TIMER_ONCE);   
    this.setInputsInline(true);    
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['document_timer_stop'] = {
  init: function () {
	this.appendValueInput("var_")
        .setCheck("String")
        .appendField(Blockly.Msg.VARIABLE_NAME);	  
    this.appendDummyInput()
      .appendField(Blockly.Msg.DOCUMENT_TIMER_STOP);
    this.setInputsInline(true);  	  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['text_to_number'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck(null)
        .appendField(Blockly.Msg.TEXT_TO_NUMBER);
    this.setOutput(true);  
    this.setColour(300);
  }  
};

Blockly.Blocks['loop_break'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP_BREAK);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['loop_continue'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP_CONTINUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['function_return'] = {
  init: function () {
    this.appendValueInput("value_")
        .setCheck(null)
        .appendField(Blockly.Msg.FUNCTION_RETURN);   
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['gameelements_1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOAD_JS); 
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['move_to_mouse'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_TO_MOUSE);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_CENTER,"center"], [Blockly.Msg.PROPERTY_UP,"up"], [Blockly.Msg.PROPERTY_DOWN,"down"], [Blockly.Msg.PROPERTY_LEFT,"left"], [Blockly.Msg.PROPERTY_RIGHT,"right"], [Blockly.Msg.PROPERTY_UPPERLEFT,"upperLeft"], [Blockly.Msg.PROPERTY_LOWERLEFT,"lowerLeft"], [Blockly.Msg.PROPERTY_UPPERRIGHT,"upperRight"], [Blockly.Msg.PROPERTY_LOWERRIGHT,"lowerRight"]]), "position");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['move_to_coordinate'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_TO_COORDINATE);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotatez_degrees'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATEZ_DEGREES);  
  this.appendValueInput("degrees_")
      .setCheck("Number"); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotate_vertical_flip'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATE_VERTICAL_FLIP);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['rotate_horizontal_flip'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.ROTATE_HORIZONTAL_FLIP);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.BUTTON_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);  
  this.appendValueInput("bgcolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.BACKCOLOR);     
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE); 
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BUTTON_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.FONTCOLOR,"color"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BUTTON_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.FONTCOLOR,"color"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['button_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.BUTTON_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['button_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.BUTTON_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.BUTTON_ONCLICK);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['async_function'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck("String")   
      .appendField(Blockly.Msg.ASYNC_FUNCTION);
  this.appendDummyInput()  
      .appendField("(");    
  this.appendValueInput("parameter_")
      .setCheck("String");    
  this.appendDummyInput()  
      .appendField(")");    
  this.appendStatementInput("do_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['call_async_function'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck("String")   
      .appendField(Blockly.Msg.CALL_ASYNC_FUNCTION);
  this.appendDummyInput()  
      .appendField("(");
  this.appendValueInput("parameter_")
      .setCheck("String");   
  this.appendDummyInput()  
      .appendField(")");    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['transform_async_function'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRANSFORM_ASYNC_FUNCTION);    
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};


Blockly.Blocks['element_event'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_WINDOW,"window"],[Blockly.Msg.ELEMENT_DOCUMENT,"document"],[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"],[Blockly.Msg.ELEMENT_BUTTON,"button"],[Blockly.Msg.ELEMENT_COLOR,"color"],[Blockly.Msg.ELEMENT_SELECT,"select"],[Blockly.Msg.ELEMENT_RANGE,"range"],[Blockly.Msg.ELEMENT_TEXT,"text"],[Blockly.Msg.ELEMENT_DIV,"div"],[Blockly.Msg.ELEMENT_IFRAME,"iframe"],[Blockly.Msg.ELEMENT_A,"a"],[Blockly.Msg.ELEMENT_RADIO,"radio"],[Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],[Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],[Blockly.Msg.ELEMENT_NUMBER,"number"],[Blockly.Msg.ELEMENT_DATE,"date"],[Blockly.Msg.ELEMENT_TIME,"time"],[Blockly.Msg.ELEMENT_DATETIME,"datetime"],[Blockly.Msg.ELEMENT_PROGRESS,"progress"],[Blockly.Msg.ELEMENT_PASSWORD,"password"]]), "element");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT_EVENT)
      .appendField(new Blockly.FieldDropdown([
		["abort","abort"],
		["afterprint","afterprint"],
		["animationend","animationend"],
		["animationiteration","animationiteration"],
		["animationstart","animationstart"],
		["beforeprint","beforeprint"],
		["beforeunload","beforeunload"],
		["blur","blur"],
		["canplay","canplay"],
		["canplaythrough","canplaythrough"],
		["change","change"],
		["click","click"],
		["contextmenu","contextmenu"],
		["copy","copy"],
		["cut","cut"],
		["dblclick","dblclick"],
		["drag","drag"],
		["dragend","dragend"],
		["dragenter","dragenter"],
		["dragleave","dragleave"],
		["dragover","dragover"],
		["dragstart","dragstart"],
		["drop","drop"],
		["durationchange","durationchange"],
		["ended","ended"],
		["error","error"],
		["focus","focus"],
		["focusin","focusin"],
		["focusout","focusout"],
		["fullscreenchange","fullscreenchange"],
		["fullscreenerror","fullscreenerror"],
		["hashchange","hashchange"],
		["input","input"],
		["invalid","invalid"],
		["keydown","keydown"],
		["keypress","keypress"],
		["keyup","keyup"],
		["load","load"],
		["loadeddata","loadeddata"],
		["loadedmetadata","loadedmetadata"],
		["loadstart","loadstart"],
		["message","message"],
		["mousedown","mousedown"],
		["mouseenter","mouseenter"],
		["mouseleave","mouseleave"],
		["mousemove","mousemove"],
		["mouseover","mouseover"],
		["mouseout","mouseout"],
		["mouseup","mouseup"],
		["mousewheel","mousewheel"],
		["offline","offline"],
		["online","online"],
		["open","open"],
		["pagehide","pagehide"],
		["pageshow","pageshow"],
		["paste","paste"],
		["pause","pause"],
		["play","play"],
		["playing","playing"],
		["popstate","popstate"],
		["progress","progress"],
		["ratechange","ratechange"],
		["resize","resize"],
		["reset","reset"],
		["scroll","scroll"],
		["search","search"],
		["seeked","seeked"],
		["seeking","seeking"],
		["select","select"],
		["show","show"],
		["stalled","stalled"],
		["storage","storage"],
		["submit","submit"],
		["suspend","suspend"],
		["timeupdate","timeupdate"],
		["toggle","toggle"],
		["touchcancel","touchcancel"],
		["touchend","touchend"],
		["touchmove","touchmove"],
		["touchstart","touchstart"],
		["transitionend","transitionend"],
		["unload","unload"],
		["volumechange","volumechange"],
		["waiting","waiting"],
		["wheel","wheel"]
	  ]), "event");
  this.appendStatementInput("statement");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  this.setHelpUrl("https://fustyles.github.io/webduino/GameElements_20190131/HTML%20DOM%20EVENTS.txt");
  }
};

Blockly.Blocks['element_event_stop'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_WINDOW,"window"],[Blockly.Msg.ELEMENT_DOCUMENT,"document"],[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"],[Blockly.Msg.ELEMENT_BUTTON,"button"],[Blockly.Msg.ELEMENT_COLOR,"color"],[Blockly.Msg.ELEMENT_SELECT,"select"],[Blockly.Msg.ELEMENT_RANGE,"range"],[Blockly.Msg.ELEMENT_TEXT,"text"],[Blockly.Msg.ELEMENT_DIV,"div"],[Blockly.Msg.ELEMENT_IFRAME,"iframe"],[Blockly.Msg.ELEMENT_A,"a"],[Blockly.Msg.ELEMENT_RADIO,"radio"],[Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],[Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],[Blockly.Msg.ELEMENT_NUMBER,"number"],[Blockly.Msg.ELEMENT_DATE,"date"],[Blockly.Msg.ELEMENT_TIME,"time"],[Blockly.Msg.ELEMENT_DATETIME,"datetime"],[Blockly.Msg.ELEMENT_PROGRESS,"progress"],[Blockly.Msg.ELEMENT_PASSWORD,"password"]]), "element");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID);    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT_EVENT_STOP)
      .appendField(new Blockly.FieldDropdown([
		["abort","abort"],
		["afterprint","afterprint"],
		["animationend","animationend"],
		["animationiteration","animationiteration"],
		["animationstart","animationstart"],
		["beforeprint","beforeprint"],
		["beforeunload","beforeunload"],
		["blur","blur"],
		["canplay","canplay"],
		["canplaythrough","canplaythrough"],
		["change","change"],
		["click","click"],
		["contextmenu","contextmenu"],
		["copy","copy"],
		["cut","cut"],
		["dblclick","dblclick"],
		["drag","drag"],
		["dragend","dragend"],
		["dragenter","dragenter"],
		["dragleave","dragleave"],
		["dragover","dragover"],
		["dragstart","dragstart"],
		["drop","drop"],
		["durationchange","durationchange"],
		["ended","ended"],
		["error","error"],
		["focus","focus"],
		["focusin","focusin"],
		["focusout","focusout"],
		["fullscreenchange","fullscreenchange"],
		["fullscreenerror","fullscreenerror"],
		["hashchange","hashchange"],
		["input","input"],
		["invalid","invalid"],
		["keydown","keydown"],
		["keypress","keypress"],
		["keyup","keyup"],
		["load","load"],
		["loadeddata","loadeddata"],
		["loadedmetadata","loadedmetadata"],
		["loadstart","loadstart"],
		["message","message"],
		["mousedown","mousedown"],
		["mouseenter","mouseenter"],
		["mouseleave","mouseleave"],
		["mousemove","mousemove"],
		["mouseover","mouseover"],
		["mouseout","mouseout"],
		["mouseup","mouseup"],
		["mousewheel","mousewheel"],
		["offline","offline"],
		["online","online"],
		["open","open"],
		["pagehide","pagehide"],
		["pageshow","pageshow"],
		["paste","paste"],
		["pause","pause"],
		["play","play"],
		["playing","playing"],
		["popstate","popstate"],
		["progress","progress"],
		["ratechange","ratechange"],
		["resize","resize"],
		["reset","reset"],
		["scroll","scroll"],
		["search","search"],
		["seeked","seeked"],
		["seeking","seeking"],
		["select","select"],
		["show","show"],
		["stalled","stalled"],
		["storage","storage"],
		["submit","submit"],
		["suspend","suspend"],
		["timeupdate","timeupdate"],
		["toggle","toggle"],
		["touchcancel","touchcancel"],
		["touchend","touchend"],
		["touchmove","touchmove"],
		["touchstart","touchstart"],
		["transitionend","transitionend"],
		["unload","unload"],
		["volumechange","volumechange"],
		["waiting","waiting"],
		["wheel","wheel"]
	  ]), "event");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  this.setHelpUrl("https://fustyles.github.io/webduino/GameElements_20190131/HTML%20DOM%20EVENTS.txt");
  }
};

Blockly.Blocks['colorpicker_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.COLORPICKER_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);   
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLORPICKER_COLOR); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['colorpicker_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLORPICKER_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COLORPICKER_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['colorpicker_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLORPICKER_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COLORPICKER_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['colorpicker_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLORPICKER_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.COLORPICKER_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['colorpicker_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.COLORPICKER_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.COLORPICKER_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['select_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SELECT_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);    
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);   
  this.appendValueInput("option_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SELECT_OPTION); 
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SELECT_VALUE);     
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['select_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SELECT_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SELECT_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_OPTION,"option"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['select_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SELECT_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SELECT_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_SELECTEDVALUE,"selectedValue"], [Blockly.Msg.PROPERTY_SELECTEDTEXT,"selectedText"], [Blockly.Msg.PROPERTY_SELECTEDINDEX,"selectedIndex"], [Blockly.Msg.PROPERTY_LENGTH,"length"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['select_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SELECT_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SELECT_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['select_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.SELECT_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.SELECT_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['range_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RANGE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("min_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MIN); 
  this.appendValueInput("max_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX); 
  this.appendValueInput("step_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STEP); 
  this.appendValueInput("value_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE); 
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['range_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RANGE_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RANGE_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_STEP,"step"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['range_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RANGE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RANGE_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_STEP,"step"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['range_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RANGE_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RANGE_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['range_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.RANGE_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.RANGE_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['text_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT_VALUE); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['text_set'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXT_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXT_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['text_get'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXT_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXT_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['text_delete'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXT_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['text_onchange_do'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXT);
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.TEXT_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.TEXT_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['div_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DIV_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);         
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("innerHTML_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DIV_VALUE); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['div_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DIV_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DIV_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['div_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DIV_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DIV_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['div_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DIV_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DIV_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['color_hextorgb'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COLOR_HEXTORGB);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['time_delay'] = {
  init: function () {
    this.appendValueInput("seconds")
        .setCheck("Number")
        .appendField(Blockly.Msg.TIME_DELAY);   
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['body_set'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SETWINDOW)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], [Blockly.Msg.PROPERTY_BACKGROUNDIMAGE,"backgroundImage"], [Blockly.Msg.PROPERTY_BACKGROUNDREPEAT,"backgroundRepeat"], [Blockly.Msg.PROPERTY_OVERFLOW,"overflow"], [Blockly.Msg.PROPERTY_FULLSCREEN,"fullscreen"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_DROPPABLE,"droppable"]]), "property_");
  this.appendValueInput("value_")
      .setCheck(null)
	  .appendField(Blockly.Msg.PROPERTY_VALUE);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};  

Blockly.Blocks['position_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSITION_DISTANCE);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y0); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)  
	  .appendField("  ")
      .appendField(Blockly.Msg.X1);
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y1);     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['position_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSITION_ANGLE);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.X0);
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y0); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("  ")
      .appendField(Blockly.Msg.X1);
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.Y1);     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['iframe_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IFRAME_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_FRAMEBORDER)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"0"], [Blockly.Msg.PROPERTY_YES,"1"]]), "frameborder_");  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_SCROLLING)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"yes"], [Blockly.Msg.PROPERTY_NO,"no"], [Blockly.Msg.PROPERTY_AUTO,"auto"]]), "scrolling_");     
  this.appendValueInput("src_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFRAME_SRC); 
  this.appendValueInput("srcdoc_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFRAME_SRCDOC); 
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['iframe_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IFRAME_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_FRAMEBORDER,"frameborder"], [Blockly.Msg.PROPERTY_SCROLLING,"scrolling"], [Blockly.Msg.PROPERTY_SRC,"src"], [Blockly.Msg.PROPERTY_SRCDOC,"srcdoc"], [Blockly.Msg.PROPERTY_SANDBOX,"sandbox"], [Blockly.Msg.PROPERTY_ALLOW,"allow"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['iframe_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IFRAME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_FRAMEBORDER,"frameborder"], [Blockly.Msg.PROPERTY_SCROLLING,"scrolling"], [Blockly.Msg.PROPERTY_SRC,"src"], [Blockly.Msg.PROPERTY_SRCDOC,"srcdoc"], [Blockly.Msg.PROPERTY_SANDBOX,"sandbox"], [Blockly.Msg.PROPERTY_ALLOW,"allow"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['iframe_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IFRAME_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.IFRAME_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['ajax_get'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.AJAX_ID); 
  this.appendValueInput("url_")
      .setCheck(null)
      .appendField(Blockly.Msg.AJAX_URL); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_TYPE)
      .appendField(new Blockly.FieldDropdown([["GET","GET"], ["POST","POST"], ["DELETE","DELETE"]]), "type_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_DATATYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_TEXT_SHOW,"text"],["html","html"], ["xml","xml"], ["script","script"], ["json","json"], ["jsonp","jsonp"]]), "datatype_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_ASYNC)
      .appendField(new Blockly.FieldDropdown([["false","false"], ["true","true"]]), "async_"); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['ajax_getdata'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.AJAX_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX_GETDATA);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_FORMAT)
      .appendField(new Blockly.FieldDropdown([["　",""], ["JSON to String","JSON to String"], ["XML to String","XML to String"]]), "format_"); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['ajax_getdata_json'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("json_")
      .setCheck(null) 
      .appendField(Blockly.Msg.AJAX_DATA);
  this.appendValueInput("index_")
      .setCheck("Number") 
      .appendField(Blockly.Msg.AJAX_INDEX);	  
  this.appendValueInput("fieldname_")
      .setCheck("String") 
      .appendField(Blockly.Msg.AJAX_FIELDNAME);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['ajax_getdata_json_count'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("json_")
      .setCheck(null) 
      .appendField(Blockly.Msg.AJAX_DATA);
  this.appendDummyInput()   	  
      .appendField(Blockly.Msg.AJAX_DATA_COUNT);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['ajax_cleardata'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.AJAX_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX_CLEARDATA);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['a_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.A_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TABLE_BORDERSTYLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_SOLID,"solid"], [Blockly.Msg.PROPERTY_DASHED,"dashed"], [Blockly.Msg.PROPERTY_DOUBLE,"double"], [Blockly.Msg.PROPERTY_DOTTED,"dotted"], [Blockly.Msg.PROPERTY_GROOVE,"groove"], [Blockly.Msg.PROPERTY_RIDGE,"ridge"], [Blockly.Msg.PROPERTY_INSET,"inset"], [Blockly.Msg.PROPERTY_OUTSET,"outset"],  [Blockly.Msg.PROPERTY_NONE,"none"], [Blockly.Msg.PROPERTY_HIDDEN,"hidden"]]), "borderstyle_");  
  this.appendValueInput("borderwidth_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERWIDTH);       
  this.appendValueInput("bordercolor_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_BORDERCOLOR);         
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("innerHTML_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DIV_VALUE); 
  this.appendValueInput("href_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.A_HREF); 
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.A_TARGET)
      .appendField(new Blockly.FieldDropdown([["_blank","_blank"], ["_parent","_parent"], ["_self","_self"], ["_top","_top"]]), "target_"); 
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['a_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.A_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.A_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_HREF,"href"], [Blockly.Msg.PROPERTY_TARGET,"target"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['a_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.A_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.A_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_HREF,"href"], [Blockly.Msg.PROPERTY_TARGET,"target"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['a_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.A_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.A_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['radio_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RADIO_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("name_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_NAME);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("size_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SIZE);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);
  this.appendValueInput("checked_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_CHECKED);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['radio_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RADIO_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RADIO_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.SIZE,"size"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_CHECKED,"checked"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['radio_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RADIO_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RADIO_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.SIZE,"size"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_CHECKED,"checked"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['radio_name_get'] = {
  init: function () {
  this.appendValueInput("name_")
      .setCheck(null)
	  .appendField(Blockly.Msg.ELEMENT_RADIO)
	  .appendField(Blockly.Msg.PROPERTY_NAME_GET)
      .appendField(Blockly.Msg.PROPERTY_NAME);  
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VALUE); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};


Blockly.Blocks['radio_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RADIO_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.RADIO_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['radio_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.RADIO_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.RADIO_ONCLICK);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};


Blockly.Blocks['checkbox_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.CHECKBOX_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("size_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SIZE);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);
  this.appendValueInput("checked_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_CHECKED);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['checkbox_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CHECKBOX_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CHECKBOX_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.SIZE,"size"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_CHECKED,"checked"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['checkbox_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CHECKBOX_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CHECKBOX_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.SIZE,"size"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_CHECKED,"checked"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['checkbox_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CHECKBOX_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.CHECKBOX_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['checkbox_onclick_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.CHECKBOX_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.CHECKBOX_ONCLICK);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['textarea_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXTAREA_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("cols_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_COLUMNS);
  this.appendValueInput("rows_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_ROWS);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['textarea_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXTAREA_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTAREA_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_COLUMNS,"cols"], [Blockly.Msg.PROPERTY_ROWS,"rows"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_READONLY,"readonly"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['textarea_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXTAREA_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTAREA_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_COLUMNS,"cols"], [Blockly.Msg.PROPERTY_ROWS,"rows"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_READONLY,"readonly"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['textarea_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXTAREA_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TEXTAREA_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['textarea_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.TEXTAREA_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.TEXTAREA_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['number_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.NUMBER_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);  
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("min_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MIN); 
  this.appendValueInput("max_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX); 
  this.appendValueInput("step_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STEP); 
  this.appendValueInput("value_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);   
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['number_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.NUMBER_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.NUMBER_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_STEP,"step"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['number_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.NUMBER_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.NUMBER_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_STEP,"step"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['number_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.NUMBER_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.NUMBER_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['number_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.NUMBER_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.NUMBER_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['date_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATE_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("min_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MIN+"(YYYY-MM-DD)"); 
  this.appendValueInput("max_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX+"(YYYY-MM-DD)");
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(YYYY-MM-DD)");   
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['date_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATE_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATE_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['date_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATE_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['date_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATE_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATE_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['date_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.DATE_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.DATE_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['time_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TIME_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(HH:mm:ss)");   
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['time_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TIME_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TIME_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['time_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TIME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TIME_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['time_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TIME_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.TIME_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['time_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.TIME_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.TIME_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['datetime_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATETIME_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(yyyy-mm-dd HH:mm)");   
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['datetime_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATETIME_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATETIME_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['datetime_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATETIME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATETIME_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['datetime_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATETIME_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.DATETIME_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['datetime_onchange_do'] = {
  init: function () {
  this.appendValueInput("id_")
    .setCheck(null)
    .appendField(Blockly.Msg.DATETIME_ID);
  this.appendDummyInput()   
    .appendField(Blockly.Msg.DATETIME_ONCHANGE);
  this.setInputsInline(true);
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(220);
  }
};

Blockly.Blocks['progress_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PROGRESS_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendValueInput("max_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX); 
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);   
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['progress_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PROGRESS_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROGRESS_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['progress_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PROGRESS_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROGRESS_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['progress_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PROGRESS_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PROGRESS_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['password_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID); 
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);   
  this.appendValueInput("maxlength_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAXLENGTH);
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE); 
  this.appendValueInput("background_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.BACKCOLOR);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['password_set'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PASSWORD_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PASSWORD_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.MAXLENGTH,"maxlength"], [Blockly.Msg.VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['password_get'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PASSWORD_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PASSWORD_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.MAXLENGTH,"maxlength"], [Blockly.Msg.VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['password_delete'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD);
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PASSWORD_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.PASSWORD_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};


Blockly.Blocks['form_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);
  this.appendValueInput("action_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FORM_ACTION); 
  this.appendValueInput("target_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FORM_TARGET);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_METHOD)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_GET,"get"], [Blockly.Msg.PROPERTY_POST,"post"]]), "method_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_ENCTYPE) 
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_APPLICATION,"application/x-www-form-urlencoded"], [Blockly.Msg.PROPERTY_MULTIPART,"multipart/form-data"], [Blockly.Msg.PROPERTY_TEXT_SHOW,"text/plain"]]), "enctype_");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['form_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FORM_ACTION,"action"], [Blockly.Msg.FORM_TARGET,"target"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['form_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FORM_ACTION,"action"], [Blockly.Msg.FORM_TARGET,"target"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['form_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['form_insert'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_INSERT);
 this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_SELECT,"select"],[Blockly.Msg.ELEMENT_RANGE,"range"],[Blockly.Msg.ELEMENT_TEXT,"text"],[Blockly.Msg.ELEMENT_RADIO,"radio"],[Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],[Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],[Blockly.Msg.ELEMENT_NUMBER,"number"],[Blockly.Msg.ELEMENT_DATE,"date"],[Blockly.Msg.ELEMENT_TIME,"time"],[Blockly.Msg.ELEMENT_DATETIME,"datetime"],[Blockly.Msg.ELEMENT_PROGRESS,"progress"],[Blockly.Msg.ELEMENT_PASSWORD,"password"],[Blockly.Msg.ELEMENT_COLOR,"color"]]), "element_");
  this.appendValueInput("elementid_")
      .setCheck(null)
      .appendField(Blockly.Msg.ELEMENT_ID);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['form_submit'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);
  this.appendDummyInput()   
      .appendField(Blockly.Msg.FORM_SUBMIT);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['head_add_viewport'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VIEWPORT);
  this.appendValueInput("initialscale_")
      .setCheck(null)
      .appendField(Blockly.Msg.INITIALSCALE);
  this.appendValueInput("minimumscale_")
      .setCheck(null)
      .appendField(Blockly.Msg.MINIMUMSCALE);
  this.appendValueInput("maximumscale_")
      .setCheck(null)
      .appendField(Blockly.Msg.MAXIMUMSCALE);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SCALABLE)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"yes"], [Blockly.Msg.PROPERTY_NO,"no"]]), "scalable_");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VIDEO_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);    
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT);  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_CAM)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]]), "cam_");  
  this.appendValueInput("src_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_SRC); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_AUTOPLAY)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "autoplay_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_LOOP)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "loop_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_MUTED)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "muted_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_CONTROLS)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]]), "controls_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROPERTY_PRELOAD)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]]), "preload_");
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX);   
  this.appendValueInput("display_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY); 
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_SRC,"src"], [Blockly.Msg.PROPERTY_AUTOPLAY,"autoplay"], [Blockly.Msg.PROPERTY_LOOP,"loop"], [Blockly.Msg.PROPERTY_MUTED,"muted"], [Blockly.Msg.PROPERTY_CONTROLS,"controls"], [Blockly.Msg.PROPERTY_PRELOAD,"preload"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_SRC,"src"], [Blockly.Msg.PROPERTY_AUTOPLAY,"autoplay"], [Blockly.Msg.PROPERTY_LOOP,"loop"], [Blockly.Msg.PROPERTY_MUTED,"muted"], [Blockly.Msg.PROPERTY_CONTROLS,"controls"], [Blockly.Msg.PROPERTY_PRELOAD,"preload"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.ID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['video_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.VIDEO_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_base64'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['video_base64_spreadsheet'] = {
  init: function () {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)		  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEET);
  this.appendValueInput("spreadsheeturl_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETURL);
  this.appendValueInput("spreadsheetname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETNAME);
  this.appendValueInput("column_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_COLUMN);
  this.appendValueInput("row_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_ROW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.TABLE_TD_HEIGHT);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_FORMAT)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([["image","image"], ["base64","string"]]), "format_");	  
  this.appendValueInput("spreadsheet_script_")
      .setCheck("String")	  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL); 	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_base64_drive'] = {
  init: function () {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)		  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_DRIVE);
  this.appendValueInput("foldername_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_FOLDERNAME);	  
  this.appendValueInput("filename_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_FILENAME);	  	  
  this.appendValueInput("drive_script_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/WebduinoDrive.gs");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['video_base64_email'] = {
  init: function () {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)		  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source_");
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_EMAIL);
  this.appendValueInput("recipient_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_RECIPIENT);		  
  this.appendValueInput("subject_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SUBJECT);		  
  this.appendValueInput("email_script_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL); 
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/SendCapturedImageByGmail_doPost.gs");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['custom_comment'] = {
  init: function() {
  this.appendValueInput("text")
      .setCheck(null)
      .appendField(Blockly.Msg.CUSTOM_COMMENT_SHOW); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  }
};

Blockly.Blocks['variable_board'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VARIABLE_BOARD);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['servermodule_javascript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_JAVASCRIPT_SHOW);
    this.appendStatementInput("js")
        .setCheck(null);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['choice_color'] = {
  init: function() {	
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"RGB");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(110);  
  }
};

Blockly.Blocks['text_br'] = {
  init: function() {	
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_BR_SHOW);
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(110);  
  }
};

Blockly.Blocks['custom_style'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.CUSTOM_STYLE_SHOW);
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ELEMENT_WINDOW,"window"],[Blockly.Msg.ELEMENT_DOCUMENT,"document"],[Blockly.Msg.ELEMENT_TABLE,"table"],[Blockly.Msg.ELEMENT_IMAGE,"image"],[Blockly.Msg.ELEMENT_CANVAS,"canvas"],[Blockly.Msg.ELEMENT_BUTTON,"button"],[Blockly.Msg.ELEMENT_COLOR,"color"],[Blockly.Msg.ELEMENT_SELECT,"select"],[Blockly.Msg.ELEMENT_RANGE,"range"],[Blockly.Msg.ELEMENT_TEXT,"text"],[Blockly.Msg.ELEMENT_DIV,"div"],[Blockly.Msg.ELEMENT_IFRAME,"iframe"],[Blockly.Msg.ELEMENT_A,"a"],[Blockly.Msg.ELEMENT_RADIO,"radio"],[Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],[Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],[Blockly.Msg.ELEMENT_NUMBER,"number"],[Blockly.Msg.ELEMENT_DATE,"date"],[Blockly.Msg.ELEMENT_TIME,"time"],[Blockly.Msg.ELEMENT_DATETIME,"datetime"],[Blockly.Msg.ELEMENT_PROGRESS,"progress"],[Blockly.Msg.ELEMENT_PASSWORD,"password"]]), "element");
  this.appendValueInput("id")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.ID);   
  this.appendDummyInput()
	  .appendField(".")  
      .appendField(new Blockly.FieldDropdown([["style","style"],["　",""]]), "style");    
  this.appendValueInput("property")
      .setCheck("String")
	  .appendField(".");
  this.appendValueInput("val")
      .setCheck(null)
	  .appendField(" = ");	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(110);   
  }
};

Blockly.Blocks['font_text'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_TEXT_SHOW);
  this.appendValueInput("size_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
	  .appendField(Blockly.Msg.FONT_SIZE_SHOW);
  this.appendValueInput("color_")
      .setCheck(null)
	  .appendField(Blockly.Msg.PROPERTY_COLOR);
  this.appendValueInput("face_")
      .setCheck("String")
	  .appendField(Blockly.Msg.FONT_FACE_SHOW);	  
  this.appendValueInput("text_")
      .setCheck(null)
	  .appendField(Blockly.Msg.PROPERTY_TEXT_SHOW);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200); 
  }
};

Blockly.Blocks['font_b'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_B_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);  
  }
};

Blockly.Blocks['font_i'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_I_SHOW);
  this.appendValueInput("text_")
      .setCheck(null); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200); 
  }
};

Blockly.Blocks['font_u'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_U_SHOW);
  this.appendValueInput("text_")
      .setCheck(null); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);
  }
};

Blockly.Blocks['font_sup'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_SPU_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200); 
  }
};

Blockly.Blocks['font_sub'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_SBU_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);  
  }
};

Blockly.Blocks['font_em'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_EM_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);  
  }
};

Blockly.Blocks['font_strong'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_STRONG_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200);  
  }
};

Blockly.Blocks['font_code'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.FONT_CODE_SHOW);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(200); 
  }
};

Blockly.Blocks['location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LOCATION_SHOW)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.LOCATION_HOSTURL_SHOW,"hosturl"],	
          [Blockly.Msg.LOCATION_HOST_SHOW,"host"],
          [Blockly.Msg.LOCATION_HOSTNAME_SHOW,"hostname"],    
          [Blockly.Msg.LOCATION_HREF_SHOW,"href"],
          [Blockly.Msg.LOCATION_PATHNAME_SHOW,"pathname"],    
          [Blockly.Msg.LOCATION_PORT_SHOW,"port"],
          [Blockly.Msg.LOCATION_PROTOCAL_SHOW,"protocol"],    
          [Blockly.Msg.LOCATION_SEARCH_SHOW,"search"],
          [Blockly.Msg.LOCATION_HASH_SHOW,"hash"]		  
        ]), "value_property");
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(200); 
  }  
};
Blockly.Blocks.esp32_button_pin={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUTTON_PIN);
		this.appendValueInput("PINA")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_BUTTON_PIN_A);
		this.appendValueInput("PINB")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_BUTTON_PIN_B);
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(80);		
	}
};

Blockly.Blocks.esp32_button={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUTTON)
			.appendField(new Blockly.FieldDropdown([["A","A"],["B","B"]]),"AB_BUTTON");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUTTON_CHECK);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(80);			
	}
};

Blockly.Blocks.esp32_lum_pin={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_LUM_PIN);
		this.appendValueInput("l")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_LUM_PIN_LEFT);
		this.appendValueInput("r")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_LUM_PIN_RIGHT);
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(140);			
	}
};

Blockly.Blocks.esp32_lum={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_LUM)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.ESP32_LUM_PIN_LEFT,"l"],[Blockly.Msg.ESP32_LUM_PIN_RIGHT,"r"]]),"side");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(140);			
	}
};

Blockly.Blocks.esp32_temperature_pin={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_TEMPERATURE_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");			
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(200);			
	}
};

Blockly.Blocks.esp32_temperature={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_TEMPERATURE);
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(200);			
	}
};

Blockly.Blocks.esp32_buzzer={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 3 [131]","131"],
				["C# 3 [139]","139"],
				["D 3 [147]","147"],
				["D# 3 [156]","156"],
				["E 3 [165]","165"],
				["F 3 [175]","175"],
				["F# 3 [185]","185"],
				["G 3 [196]","196"],
				["G# 3 [208]","208"],
				["A 3 [220]","220"],
				["A# 3 [233]","233"],
				["B 3 [247]","247"],
				["C 4 [262]","262"],
				["C# 4 [277]","277"],
				["D 4 [294]","294"],
				["D# 4 [311]","311"],
				["E 4 [330]","330"],
				["F 4 [349]","349"],
				["F# 4 [370]","370"],
				["G 4 [392]","392"],
				["G# 4 [415]","415"],
				["A 4 [440]","440"],
				["A# 4 [466]","466"],
				["B 4 [494]","494"]
			]),"frequency");
		this.appendValueInput("delaytime")
			.setCheck("String")
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);			
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(260);			
	}
};

Blockly.Blocks.esp32_buzzer2={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 5 [523]","523"],
				["C# 5 [554]","554"],
				["D 5 [587]","587"],
				["D# 5 [622]","622"],
				["E 5 [659]","659"],
				["F 5 [698]","698"],
				["F# 5 [740]","740"],
				["G 5 [784]","784"],
				["G# 5 [831]","831"],
				["A 5 [880]","880"],
				["A# 5 [932]","932"],
				["B 5 [988]","988"],			
				["C 6 [1047]","1047"],
				["C# 6 [1109]","1109"],
				["D 6 [1175]","1175"],
				["D# 6 [1245]","1245"],
				["E 6 [1319]","1319"],
				["F 6 [1397]","1397"],
				["F# 6 [1480]","1480"],
				["G 6 [1568]","1568"],
				["G# 6 [1661]","1661"],
				["A 6 [1760]","1760"],
				["A# 6 [1864]","1864"],
				["B 6 [1975]","1975"]
			]),"frequency");
		this.appendValueInput("delaytime")
			.setCheck("String")
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);			
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(260);			
	}
};

Blockly.Blocks.esp32_buzzer3={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 7 [2093]","2093"],
				["C# 7 [2218]","2218"],
				["D 7 [2349]","2349"],
				["D# 7 [2489]","2489"],
				["E 7 [2637]","2637"],
				["F 7 [2794]","2794"],
				["F# 7 [2960]","2960"],
				["G 7 [3136]","3136"],
				["G# 7 [3322]","3322"],
				["A 7 [3520]","3520"],
				["A# 7 [3729]","3729"],
				["B 7 [3951]","3951"],
				["C 8 [4186]","4186"],
				["C# 8 [4435]","4435"],
				["D 8 [4699]","4699"],
				["D# 8 [4978]","4978"],
				["E 8 [5274]","5274"],
				["F 8 [5588]","5588"],
				["F# 8 [5920]","5920"],
				["G 8 [6272]","6272"],
				["G# 8 [6645]","6645"],
				["A 8 [7040]","7040"],
				["A# 8 [7459]","7459"],
				["B 8 [7902]","7902"]
			]),"frequency");
		this.appendValueInput("delaytime")
			.setCheck("String")
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);			
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(260);			
	}
};

Blockly.Blocks.esp32_buzzer1={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");
		this.appendValueInput("frequency")
			.setCheck(null)
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY);
		this.appendValueInput("delaytime")
			.setCheck(null)
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);			
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setHelpUrl("https://zh.wikipedia.org/wiki/%E9%9F%B3%E9%AB%98");
		this.setColour(260);			
	}
};

Blockly.Blocks.esp32_buzzer_tone1={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 3 [131]","131"],
				["C# 3 [139]","139"],
				["D 3 [147]","147"],
				["D# 3 [156]","156"],
				["E 3 [165]","165"],
				["F 3 [175]","175"],
				["F# 3 [185]","185"],
				["G 3 [196]","196"],
				["G# 3 [208]","208"],
				["A 3 [220]","220"],
				["A# 3 [233]","233"],
				["B 3 [247]","247"],
				["C 4 [262]","262"],
				["C# 4 [277]","277"],
				["D 4 [294]","294"],
				["D# 4 [311]","311"],
				["E 4 [330]","330"],
				["F 4 [349]","349"],
				["F# 4 [370]","370"],
				["G 4 [392]","392"],
				["G# 4 [415]","415"],
				["A 4 [440]","440"],
				["A# 4 [466]","466"],
				["B 4 [494]","494"]
			]),"frequency");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(320);			
	}
};

Blockly.Blocks.esp32_buzzer_tone2={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 5 [523]","523"],
				["C# 5 [554]","554"],
				["D 5 [587]","587"],
				["D# 5 [622]","622"],
				["E 5 [659]","659"],
				["F 5 [698]","698"],
				["F# 5 [740]","740"],
				["G 5 [784]","784"],
				["G# 5 [831]","831"],
				["A 5 [880]","880"],
				["A# 5 [932]","932"],
				["B 5 [988]","988"],			
				["C 6 [1047]","1047"],
				["C# 6 [1109]","1109"],
				["D 6 [1175]","1175"],
				["D# 6 [1245]","1245"],
				["E 6 [1319]","1319"],
				["F 6 [1397]","1397"],
				["F# 6 [1480]","1480"],
				["G 6 [1568]","1568"],
				["G# 6 [1661]","1661"],
				["A 6 [1760]","1760"],
				["A# 6 [1864]","1864"],
				["B 6 [1975]","1975"]
			]),"frequency");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(320);			
	}
};

Blockly.Blocks.esp32_buzzer_tone3={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["C 7 [2093]","2093"],
				["C# 7 [2218]","2218"],
				["D 7 [2349]","2349"],
				["D# 7 [2489]","2489"],
				["E 7 [2637]","2637"],
				["F 7 [2794]","2794"],
				["F# 7 [2960]","2960"],
				["G 7 [3136]","3136"],
				["G# 7 [3322]","3322"],
				["A 7 [3520]","3520"],
				["A# 7 [3729]","3729"],
				["B 7 [3951]","3951"],
				["C 8 [4186]","4186"],
				["C# 8 [4435]","4435"],
				["D 8 [4699]","4699"],
				["D# 8 [4978]","4978"],
				["E 8 [5274]","5274"],
				["F 8 [5588]","5588"],
				["F# 8 [5920]","5920"],
				["G 8 [6272]","6272"],
				["G# 8 [6645]","6645"],
				["A 8 [7040]","7040"],
				["A# 8 [7459]","7459"],
				["B 8 [7902]","7902"]
			]),"frequency");			
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(320);		
	}
};


Blockly.Blocks.esp32_mpu9250_pin={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MPU9250_PIN);
		this.appendValueInput("sda")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_MPU9250_SDA);			
		this.appendValueInput("scl")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_MPU9250_SCL);
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MPU9250_ADDRESS)		
		  	.appendField(new Blockly.FieldDropdown([
			["　",""],
			["0x68","0x68"],
			["0x69","0x69"]			
			]), "address");		
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(320);			
	}
};

Blockly.Blocks.esp32_mpu9250={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MPU9250);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				[Blockly.Msg.ESP32_MPU9250_ACCELX,"accelX"],
				[Blockly.Msg.ESP32_MPU9250_ACCELY,"accelY"],
				[Blockly.Msg.ESP32_MPU9250_ACCELZ,"accelZ"],
				[Blockly.Msg.ESP32_MPU9250_ACCELSQRT,"accelSqrt"],
				[Blockly.Msg.ESP32_MPU9250_GYROX,"gyroX"],
				[Blockly.Msg.ESP32_MPU9250_GYROY,"gyroY"],
				[Blockly.Msg.ESP32_MPU9250_GYROZ,"gyroZ"],
				[Blockly.Msg.ESP32_MPU9250_MAGX,"magX"],
				[Blockly.Msg.ESP32_MPU9250_MAGY,"magY"],	
				[Blockly.Msg.ESP32_MPU9250_MAGZ,"magZ"],
				[Blockly.Msg.ESP32_MPU9250_MAGHORIZDIRECTION,"magHorizDirection"]
			]),"mpu");		
		this.setInputsInline(true);
		this.setOutput(true);
		this.setHelpUrl("https://bit.webduino.io/site/en/docs/mpu9250.html");
		this.setColour(320);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix_pin'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MATRIX_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");			
		this.appendValueInput("leds")
			.setCheck("Number")
			.appendField(Blockly.Msg.ESP32_MATRIX_LEDS);
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(300);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix_brightness'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MATRIX_BRIGHTNESS);
		this.appendValueInput("brightness")
			.setCheck("Number");
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(300);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix_clear'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MATRIX_CLEAR);
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(300);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX);
	this.appendValueInput("RGB")
		.setCheck("String")
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L06")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L16")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L21");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L07")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L17")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L22");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L08")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L18")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L23");
    this.appendDummyInput()	
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L09")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L14")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L19")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L24");
    this.appendDummyInput()	
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L05")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L10")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L15")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L20")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L25");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_reverse'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX_REVERE);
	this.appendValueInput("RGB")
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR)
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L01')
        .appendField(new Blockly.FieldColour("#000000"), 'L06')
        .appendField(new Blockly.FieldColour("#000000"), 'L11')
        .appendField(new Blockly.FieldColour("#000000"), 'L16')
        .appendField(new Blockly.FieldColour("#000000"), 'L21')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField(new Blockly.FieldColour("#000000"), 'L07')
        .appendField(new Blockly.FieldColour("#000000"), 'L12')
        .appendField(new Blockly.FieldColour("#000000"), 'L17')
        .appendField(new Blockly.FieldColour("#000000"), 'L22')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L03')
        .appendField(new Blockly.FieldColour("#000000"), 'L08')
        .appendField(new Blockly.FieldColour("#000000"), 'L13')
        .appendField(new Blockly.FieldColour("#000000"), 'L18')
        .appendField(new Blockly.FieldColour("#000000"), 'L23')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField(new Blockly.FieldColour("#000000"), 'L09')
        .appendField(new Blockly.FieldColour("#000000"), 'L14')
        .appendField(new Blockly.FieldColour("#000000"), 'L19')
        .appendField(new Blockly.FieldColour("#000000"), 'L24')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L05')
        .appendField(new Blockly.FieldColour("#000000"), 'L10')
        .appendField(new Blockly.FieldColour("#000000"), 'L15')
        .appendField(new Blockly.FieldColour("#000000"), 'L20')
        .appendField(new Blockly.FieldColour("#000000"), 'L25')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_reverse'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR_REVERE);
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_rotate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_ROTATE);
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.ESP32_MATRIX_ROTATE_CLOCKWISE,"0"],
			[Blockly.Msg.ESP32_MATRIX_ROTATE_COUNTERCLOCKWISE,"1"]		  
	  ]), "direction");		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_flip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_FLIP);
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.ESP32_MATRIX_ROTATE_VERTICALFLIP,"0"],
			[Blockly.Msg.ESP32_MATRIX_ROTATE_HORIZONTALFLIP,"1"]		  
	  ]), "direction");		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_sample1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE)
        .appendField(new Blockly.FieldDropdown([
			["♥","0110011110011111111001100"],
			["♡","0110010010010011001001100"],			
			["↑","0010001000111110100000100"],
			["↓","0010000010111110001000100"],
			["←","0010000100101010111000100"],
			["→","0010001110101010010000100"],
			["↖","0000110010101001100011110"],
			["↙","1000001001001010001101111"],
			["↗","1111011000101001001000001"],
			["↘","0111100011001010100110000"],
			["▲","0000100111111110011100001"],
			["▼","1000011100111111110010000"],
			["◄","1111101110011100010000100"],
			["►","0010000100011100111011111"],
			[",","0000000000000100000100000"],
			["?","0100010100100111000001000"],
			["!","0000000000111010000000000"],
			[";","0000000000010100000100000"],
			[":","0000000000010100000000000"],
			["'","0000000100110000000000000"],
			["\\","0000100010001000100010000"],
			["/","1000001000001000001000001"],
			["#","0101011111010101111101010"],		
			["", "0000000000000000000000000"]
		]), "value_sample_");
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_sample2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE)
        .appendField(new Blockly.FieldDropdown([
			["0","0000011111100011111100000"],
			["1","0000000001111110100100000"],
			["2","0000011101101011011100000"],
			["3","0000011111101011010100000"],
			["4","0000011111001001110000000"],
			["5","0000010111101011110100000"],
			["6","0000010111101011111100000"],
			["7","0000011111100001100000000"],
			["8","0000011111101011111100000"],
			["9","0000011111101011110100000"],
			["(","0000000000100010111000000"],
			[")","0000001110100010000000000"],
			["[","0000000000100011111100000"],
			["]","0000011111100010000000000"],
			["{","0000010001111110010000000"],
			["}","0000000100111111000100000"],
			[".","0000000000000000000100000"],
			["+","0000000100011100010000000"],			
			["-","0000000100001000010000000"],			
			["", "0000000000000000000000000"]
		]), "value_sample_");  
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");	
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_sample3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE)
        .appendField(new Blockly.FieldDropdown([		
			["A","0111110010100101001001111"],
			["B","0101010101101011010111111"],
			["C","1000110001100011000101110"],
			["D","0111010001100011000111111"],
			["E","1010110101101011010111111"],
			["F","1010010100101001010011111"],
			["G","1011110101101011000101110"],
			["H","1111100100001000010011111"],
			["I","1000110001111111000110001"],
			["J","1000010000111111000110011"],
			["K","1000101010001000001011111"],
			["L","0000100001000010000111111"],
			["M","1111101000001000100011111"],
			["N","1111100010001000100011111"],
			["O","0111010001100011000101110"],
			["P","0110010010100101001011111"],
			["Q","0110110010101011000101110"],
			["R","0101110100101001010011111"],
			["S","1001010101101011010101001"],
			["T","1000010000111111000010000"],
			["U","1111000001000010000111110"],
			["V","1110000010000010001011100"],
			["W","1111000001111100000111110"],
			["X","1000101010001000101010001"],
			["Y","1000001000001110100010000"],
			["Z","1000111001101011001110001"],
			["", "0000000000000000000000000"]
		]), "value_sample_");  
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_sample4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE)
        .appendField(new Blockly.FieldDropdown([
			["a","0000100110010010011000000"],
			["b","0000000010001011111100000"],
			["c","0000001001010010011000000"],
			["d","0000011111001010001000000"],
			["e","0000000101010110011000000"],
			["f","0000010100111110010000000"],
			["g","0000000110010110010100000"],
			["h","0000000011001001111100000"],
			["i","0000000000101110000000000"],
			["j","0000000000101110000100000"],
			["k","0000000101000101111100000"],
			["l","0000000000111110000000000"],
			["m","0001100100000110010000111"],
			["n","0000000011001000011100000"],
			["o","0000000010001010001000000"],
			["p","0000000100010100111100000"],
			["q","0000001111010100010000000"],
			["r","0000000100000100011100000"],
			["s","0000010010101010100100000"],
			["t","0000000101011110010000000"],
			["u","0000100110000010011000000"],
			["v","0000000110000010011000000"],
			["w","0011000001001100000100110"],
			["x","0000000101000100010100000"],
			["y","0000000100000100010100000"],
			["z","0000001000011010101100001"],
			["", "0000000000000000000000000"]
		]), "value_sample_");  
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_sample5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE);
	this.appendValueInput("sample")
		.setCheck(null); 
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);
	this.appendValueInput("X")
        .appendField("X[1~5]")	
		.setCheck("Number"); 
	this.appendValueInput("Y")
        .appendField("Y[1~5]")	
		.setCheck("Number"); 		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.ESP32_MATRIX_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one_3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);	
	this.appendValueInput("L21")
		.setCheck("String")
        .appendField("1");
	this.appendValueInput("L22")
		.setCheck("String")
        .appendField("2");
	this.appendValueInput("L23")
		.setCheck("String")
        .appendField("3");		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one_8'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);	
	this.appendValueInput("L21")
		.setCheck("String")
        .appendField("1");
	this.appendValueInput("L22")
		.setCheck("String")
        .appendField("2");
	this.appendValueInput("L23")
		.setCheck("String")
        .appendField("3");
	this.appendValueInput("L24")
		.setCheck("String")
        .appendField("4");
	this.appendValueInput("L25")
		.setCheck("String")
        .appendField("5");
	this.appendValueInput("L16")
		.setCheck("String")
        .appendField("6");
	this.appendValueInput("L17")
		.setCheck("String")
        .appendField("7");
	this.appendValueInput("L18")
		.setCheck("String")
        .appendField("8");	
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one_12'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);	
	this.appendValueInput("L21")
		.setCheck("String")
        .appendField("1");
	this.appendValueInput("L22")
		.setCheck("String")
        .appendField("2");
	this.appendValueInput("L23")
		.setCheck("String")
        .appendField("3");
	this.appendValueInput("L24")
		.setCheck("String")
        .appendField("4");
	this.appendValueInput("L25")
		.setCheck("String")
        .appendField("5");
	this.appendValueInput("L16")
		.setCheck("String")
        .appendField("6");
	this.appendValueInput("L17")
		.setCheck("String")
        .appendField("7");
	this.appendValueInput("L18")
		.setCheck("String")
        .appendField("8");	
	this.appendValueInput("L19")
		.setCheck("String")
        .appendField("9");
	this.appendValueInput("L20")
		.setCheck("String")
        .appendField("10");
	this.appendValueInput("L11")
		.setCheck("String")
        .appendField("11");
	this.appendValueInput("L12")
		.setCheck("String")
        .appendField("12");	
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_rgb_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.ESP32_MATRIX_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR+"[0~255]");		
	this.appendValueInput("R")
        .appendField("R")	
		.setCheck("Number");
	this.appendValueInput("G")
        .appendField("G")	
		.setCheck("Number");
	this.appendValueInput("B")
        .appendField("B")	
		.setCheck("Number");
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_getcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_GETCOLOR);
	this.appendValueInput("X")
        .appendField("X[1~5]")	
		.setCheck("Number"); 
	this.appendValueInput("Y")
        .appendField("Y[1~5]")	
		.setCheck("Number"); 
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixLed_matrix_one_getcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_GETCOLOR);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.ESP32_MATRIX_LEDS_N)	
		.setCheck("Number");	
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixLed_color'] = {
  init: function() {	
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"RGB");
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(5);	
  }
};

Blockly.Blocks['BitMatrixLed_color_random'] = {
  init: function() {	
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR_RANDOM);
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(5);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_texttocode'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck("String")
        .appendField(Blockly.Msg.MATRIXLED_TEXTTOCODE_SHOW);
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixLed_matrix_indentcode'] = {
  init: function() {
    this.appendValueInput("value_indentcode_")
        .setCheck("String")
        .appendField(Blockly.Msg.MATRIXLED_INDENTCODE_SHOW);
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixLed_matrix_marquee_time'] = {
  init: function() {
    this.appendValueInput("value_marquee_time_")
        .setCheck("Number")  
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_TIME_SHOW);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixLed_matrix_marquee'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_SHOW);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);   
  }
};  

Blockly.Blocks['BitMatrixLed_matrix_marquee_times'] = {
  init: function() {
    this.appendValueInput("value_times_")
        .setCheck("Number")   
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_SHOW);		 
    this.appendValueInput("value_marquee_")
        .setCheck("String")
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_TIMES_SHOW); 		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);		
	this.appendValueInput("RGB")
		.setCheck("String");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);   
  }
};

Blockly.Blocks['BitMatrixLed_matrix_marquee_degree'] = {
  init: function() {
    this.appendValueInput("value_marquee_degree_")
        .setCheck("Number")
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_DIRECTION_SHOW)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MATRIXLED_MATRIXCODE_COLOR_LEFT_SHOW,"1"], [Blockly.Msg.MATRIXLED_MATRIXCODE_COLOR_RIGHT_SHOW,"2"]]), "value_marquee_direction_")
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_DEGREE_SHOW);
    this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixLed_matrix_marquee_color'] = {
  init: function() {
    this.appendValueInput("value_marquee_")
        .setCheck("String")   
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_COLOR_SHOW); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
};  

Blockly.Blocks['BitMatrixLed_matrix_marquee_color_times'] = {
  init: function() {
	this.appendDummyInput()	  
	    .appendField(Blockly.Msg.MATRIXLED_MARQUEE_COLOR_SHOW);	
    this.appendValueInput("value_times_")
        .setCheck("Number")
 		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_COLOR_TIMES_SHOW);  	  
    this.appendValueInput("value_marquee_")
        .setCheck("String");		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);   
  }
}; 

Blockly.Blocks['BitMatrixLed_matrix_marquee_color_degree'] = {
  init: function() {
    this.appendValueInput("value_marquee_degree_")
        .setCheck("Number")
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_DIRECTION_COLOR_SHOW)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MATRIXLED_MATRIXCODE_COLOR_LEFT_SHOW,"1"], [Blockly.Msg.MATRIXLED_MATRIXCODE_COLOR_RIGHT_SHOW,"2"]]), "value_marquee_direction_")
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_DEGREE_SHOW);      
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }  
};

Blockly.Blocks['BitMatrixLed_matrix_matrixcode'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_MATRIXCODE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L06")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L16")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L21");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L07")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L17")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L22");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L08")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L18")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L23");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L09")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L14")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L19")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L24");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L05")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L10")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L15")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L20")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L25");
    this.setOutput(true, null);
    this.setColour(300);   
  }
};

Blockly.Blocks['BitMatrixLed_matrix_matrixcode_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_MATRIXCODE_COLOR_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L01')
        .appendField(new Blockly.FieldColour("#000000"), 'L06')
        .appendField(new Blockly.FieldColour("#000000"), 'L11')
        .appendField(new Blockly.FieldColour("#000000"), 'L16')
        .appendField(new Blockly.FieldColour("#000000"), 'L21')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField(new Blockly.FieldColour("#000000"), 'L07')
        .appendField(new Blockly.FieldColour("#000000"), 'L12')
        .appendField(new Blockly.FieldColour("#000000"), 'L17')
        .appendField(new Blockly.FieldColour("#000000"), 'L22')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L03')
        .appendField(new Blockly.FieldColour("#000000"), 'L08')
        .appendField(new Blockly.FieldColour("#000000"), 'L13')
        .appendField(new Blockly.FieldColour("#000000"), 'L18')
        .appendField(new Blockly.FieldColour("#000000"), 'L23')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField(new Blockly.FieldColour("#000000"), 'L09')
        .appendField(new Blockly.FieldColour("#000000"), 'L14')
        .appendField(new Blockly.FieldColour("#000000"), 'L19')
        .appendField(new Blockly.FieldColour("#000000"), 'L24')
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L05')
        .appendField(new Blockly.FieldColour("#000000"), 'L10')
        .appendField(new Blockly.FieldColour("#000000"), 'L15')
        .appendField(new Blockly.FieldColour("#000000"), 'L20')
        .appendField(new Blockly.FieldColour("#000000"), 'L25')
    this.setOutput(true, null);
    this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixLed_matrix_matrixcode_line_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_MATRIXCODE_LINE_COLOR_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L01')
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField(new Blockly.FieldColour("#000000"), 'L03')
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField(new Blockly.FieldColour("#000000"), 'L05');
    this.setOutput(true, null);
    this.setColour(300);
  }
};

Blockly.Blocks['BitMatrixLed_matrix_marquee_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_STOP_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
}; 

Blockly.Blocks['BitMatrixLed_matrix_marquee_resume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_RESUME_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);     
  }
}; 

Blockly.Blocks['BitMatrixLed_matrix_marquee_rotate'] = {
  init: function() {
    this.appendDummyInput() 
        .appendField(Blockly.Msg.MATRIXLED_MARQUEE_ROTATE_SHOW);
	this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.ESP32_MATRIX_ROTATE_NOCLOCKWISE,"0"],		  
			[Blockly.Msg.ESP32_MATRIX_ROTATE_CLOCKWISE,"2"],
			[Blockly.Msg.ESP32_MATRIX_ROTATE_COUNTERCLOCKWISE,"1"]		  
	  ]), "direction");	
    this.setInputsInline(true);	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
  }
};

Blockly.Blocks.webbit_mooncar_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN);
  this.appendValueInput("R1")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_R1);
  this.appendValueInput("R2")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_R2);
  this.appendValueInput("L1")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_L1);
  this.appendValueInput("L2")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_PIN_L2);
  this.setInputsInline(true);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(90);  
}
};
Blockly.Blocks.webbit_mooncar_move_car={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_CAR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRANCEFU_FORWARD,"FORWARD"],[Blockly.Msg.FRANCEFU_BACKWARD,"BACKWARD"],[Blockly.Msg.FRANCEFU_TURNLEFT,"LEFT"],[Blockly.Msg.FRANCEFU_TURNRIGHT,"RIGHT"]]),"STAT");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_MOTOR_R);
  this.appendValueInput("RSPEED")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_MOTOR_L);
  this.appendValueInput("LSPEED")
      .setCheck("Number");	  
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(90);  
}
};
Blockly.Blocks.webbit_mooncar_move1_car={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_CAR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRANCEFU_LEFTFRONT,"LEFTFRONT"],[Blockly.Msg.FRANCEFU_RIGHTFRONT,"RIGHTFRONT"],[Blockly.Msg.FRANCEFU_LEFTREAR,"LEFTREAR"],[Blockly.Msg.FRANCEFU_RIGHTREAR,"RIGHTREAR"]]),"STAT");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_SPEED);
  this.appendValueInput("SPEED")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_MOTOR_RATIO);
  this.appendValueInput("RATIO")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(90);
}
};
Blockly.Blocks.webbit_mooncar_stop_car={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOVE_CAR + " " +Blockly.Msg.FRANCEFU_STOP);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(90);
}
};
Blockly.Blocks.webbit_mooncar_tracker_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_TRACKER_PIN);
  this.appendValueInput("PINR")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_TRACKER_PIN_R);
  this.appendValueInput("PINL")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_TRACKER_PIN_L);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(300);  
}
};
Blockly.Blocks.webbit_mooncar_tracker={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TRACKER);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(300);
}
};
Blockly.Blocks.webbit_mooncar_sonar_pin={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN);
  this.appendValueInput("TRIG")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN_TRIG);
  this.appendValueInput("ECHO")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN_ECHO);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(240);  
}
};
Blockly.Blocks.webbit_mooncar_sonar={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_SONAR);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(240);  
}
};
Blockly.Blocks.webbit_mooncar_tcs_init={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_INIT);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);  
}
};
Blockly.Blocks.webbit_mooncar_tcs_read={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_READ)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.FRANCEFU_RED,"r"],
		  [Blockly.Msg.FRANCEFU_GREEN,"g"],
		  [Blockly.Msg.FRANCEFU_BLUE,"b"],
		  [Blockly.Msg.FRANCEFU_LUX,"l"]
	  ]),"color");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_READ_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_tcs_set={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_SET)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.FRANCEFU_RED,"0"],
		  [Blockly.Msg.FRANCEFU_GREEN,"1"],
		  [Blockly.Msg.FRANCEFU_BLUE,"2"],		  
		  [Blockly.Msg.FRANCEFU_YELLO,"3"],
		  [Blockly.Msg.FRANCEFU_CYAN,"4"],
		  [Blockly.Msg.FRANCEFU_MAGENTA,"5"],
		  [Blockly.Msg.FRANCEFU_CUSTOM1,"6"],
		  [Blockly.Msg.FRANCEFU_CUSTOM2,"7"],
		  [Blockly.Msg.FRANCEFU_CUSTOM3,"8"]	  
	  ]),"color");
  this.appendValueInput("R")
      .setCheck("Number")
	  .appendField("R");
  this.appendValueInput("G")
      .setCheck("Number")
	  .appendField("G");
	    this.appendValueInput("B")
      .setCheck("Number")
	  .appendField("B");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_tcs_detect={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_DETECT)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.FRANCEFU_RED,"0"],
		  [Blockly.Msg.FRANCEFU_GREEN,"1"],
		  [Blockly.Msg.FRANCEFU_BLUE,"2"],		  
		  [Blockly.Msg.FRANCEFU_YELLO,"3"],
		  [Blockly.Msg.FRANCEFU_CYAN,"4"],
		  [Blockly.Msg.FRANCEFU_MAGENTA,"5"],
		  [Blockly.Msg.FRANCEFU_CUSTOM1,"6"],
		  [Blockly.Msg.FRANCEFU_CUSTOM2,"7"],
		  [Blockly.Msg.FRANCEFU_CUSTOM3,"8"]
	  ]),"color");
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_tcs_range={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_TCS_RANGE);
  this.appendValueInput("range")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);   
}
};
Blockly.Blocks.webbit_mooncar_flash_light={init:function(){
  this.appendValueInput("pin")
      .setCheck("Number")
      .appendField(Blockly.Msg.FRANCEFU_FLASH_LIGHT);
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRANCEFU_ON,"LOW"],[Blockly.Msg.FRANCEFU_OFF,"HIGH"]]),"state");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(180);   
}
};

Blockly.Blocks['webbit_mooncar_ws2812_pin'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.FRANCEFU_WS2812_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");			
		this.appendValueInput("leds")
			.setCheck("Number")
			.appendField(Blockly.Msg.FRANCEFU_WS2812_LEDS);
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(210);			
	}
};

Blockly.Blocks['webbit_mooncar_ws2812_brightness'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.FRANCEFU_WS2812_BRIGHTNESS);
		this.appendValueInput("brightness")
			.setCheck("Number");
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(210);			
	}
};

Blockly.Blocks['webbit_mooncar_ws2812_clear'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.FRANCEFU_WS2812_CLEAR);
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(210);			
	}
};

Blockly.Blocks['webbit_mooncar_ws2812_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.FRANCEFU_WS2812_COLOR_SHOW);
    this.appendDummyInput()
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L06')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L16')
        .appendField('   ');
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L02')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L22');
    this.appendDummyInput()
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ');
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), 'L04')
        .appendField('   ')
        .appendField('   ')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L24');
    this.appendDummyInput()
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L10')
        .appendField('   ')
        .appendField(new Blockly.FieldColour("#000000"), 'L20')
        .appendField('   ');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);	
  }
};

Blockly.Blocks['webbit_mooncar_ws2812_color_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_WS2812_COLOR_SHOW);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.FRANCEFU_WS2812_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.FRANCEFU_WS2812_CHOICECOLOR_SHOW);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);	
  }
};

Blockly.Blocks['webbit_mooncar_ws2812_rgb_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_WS2812_COLOR_SHOW);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.FRANCEFU_WS2812_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.FRANCEFU_WS2812_CHOICECOLOR_SHOW+"[0~255]");		
	this.appendValueInput("R")
        .appendField("R")	
		.setCheck("Number");
	this.appendValueInput("G")
        .appendField("G")	
		.setCheck("Number");
	this.appendValueInput("B")
        .appendField("B")	
		.setCheck("Number");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);	
  }
};

Blockly.Blocks.webbit_mooncar_ir_remote_read_pin = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ_PIN);
	this.appendValueInput("pin")	
		.setCheck("Number");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);  	
  }
};
Blockly.Blocks.webbit_mooncar_ir_remote_read={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ);
  this.setInputsInline(!0);
  this.appendStatementInput("IR_READ");
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setColour(10);    
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_read_value={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(10);   
}
};
Blockly.Blocks.webbit_mooncar_ir_remote_read_type={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_READ_TYPE);
  this.setInputsInline(!0);
  this.setOutput(!0,null);
  this.setColour(10);   
	}
};
Blockly.Blocks.webbit_mooncar_ir_remote_send_pin = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_SEND_PIN);
	this.appendValueInput("pin")	
		.setCheck("Number");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);  	
  }
};
Blockly.Blocks.webbit_mooncar_ir_remote_send={init:function(){
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_TYPE)
      .appendField(new Blockly.FieldDropdown([["NEC","NEC"],["Sony","SONY"],["RC5","RC5"],["RC6","RC6"]]),"IR_TYPE");
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_IR_REMOTE_SEND);
  this.appendValueInput("IR_SEND")
      .setCheck("String");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(10);  
}
};

Blockly.Blocks['esp32_cam_tfjs_cocossd'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_TFJS_COCOSSD_SHOW);
	this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_TFJS_COCOSSD_OBJECT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["person","person"],	  
		["airplane","airplane"],
		["apple","apple"],
		["backpack","backpack"],
		["banana","banana"],
		["baseball bat","baseball bat"],
		["baseball glove","baseball glove"],
		["bear","bear"],
		["bed","bed"],
		["bench","bench"],
		["bicycle","bicycle"],
		["bird","bird"],
		["boat","boat"],
		["book","book"],
		["bottle","bottle"],
		["bowl","bowl"],
		["broccoli","broccoli"],
		["bus","bus"],
		["cake","cake"],
		["car","car"],
		["carrot","carrot"],
		["cat","cat"],
		["cell phone","cell phone"],
		["chair","chair"],
		["clock","clock"],
		["couch","couch"],
		["cow","cow"],
		["cup","cup"],
		["dining table","dining table"],
		["dog","dog"],
		["donut","donut"],
		["elephant","elephant"],
		["fire hydrant","fire hydrant"],
		["fork","fork"],
		["frisbee","frisbee"],
		["giraffe","giraffe"],
		["hair drier","hair drier"],
		["handbag","handbag"],
		["horse","horse"],
		["hot dog","hot dog"],
		["keyboard","keyboard"],
		["kite","kite"],
		["knife","knife"],
		["laptop","laptop"],
		["microwave","microwave"],
		["motorcycle","motorcycle"],
		["mouse","mouse"],
		["orange","orange"],
		["oven","oven"],
		["parking meter","parking meter"],
		["pizza","pizza"],
		["potted plant","potted plant"],
		["refrigerator","refrigerator"],
		["remote","remote"],
		["sandwich","sandwich"],
		["scissors","scissors"],
		["sheep","sheep"],
		["sink","sink"],
		["skateboard","skateboard"],
		["skis","skis"],
		["snowboard","snowboard"],
		["spoon","spoon"],
		["sports ball","sports ball"],
		["stop sign","stop sign"],
		["suitcase","suitcase"],
		["surfboard","surfboard"],
		["teddy bear","teddy bear"],
		["tennis racket","tennis racket"],
		["tie","tie"],
		["toaster","toaster"],
		["toilet","toilet"],
		["toothbrush","toothbrush"],
		["traffic light","traffic light"],
		["train","train"],
		["truck","truck"],
		["tv","tv"],
		["umbrella","umbrella"],
		["vase","vase"],
		["wine glass","wine glass"],
		["zebra","zebra"]
		]), "object"); 
	this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_TFJS_COCOSSD_SCORE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["0.1","0.1"],
		["0.2","0.2"],
		["0.3","0.3"],
		["0.4","0.4"],
		["0.5","0.5"],
		["0.6","0.6"],
		["0.7","0.7"],
		["0.8","0.8"],
		["0.9","0.9"],		
		["1","0.999"]
	]), "score");
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERVERMODULE_JAVASCRIPT_SHOW);
    this.appendStatementInput("javascript")
        .setCheck(null);
	this.setInputsInline(false);
    this.setOutput(true, null);
	this.setTooltip("?result=object;score;x;y;width;height;count");
    this.setColour(20)
	}
};



Blockly.Blocks['servermodule_parameter_set_address3'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
	this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
		["ip(","ip"],
		["mac","mac"],
		["restart","restart"],
		["digitalwrite(pin,value)","digitalwrite"],
		["digitalread(pin)","digitalread"],
		["analogwrite(pin,value)","analogwrite"],
		["analogread(pin)","analogread"],
		["touchread(pin)","touchread"],
		["servo(pin,angle)","servo"],		
		["relay(pin,value)","relay"],
		["getstill","getstill"],		
		["flash(value)","flash"],		
		["framesize(value)","framesize"],
		["quality(value)","quality"],
		["contrast(value)","contrast"],
		["brightness(value)","brightness"],
		["saturation(value)","saturation"],
		["special_effect(value)","special_effect"],
		["hmirror(value)","hmirror"],
		["vflip(value)","vflip"],
		["result","result"]			
		]), "cmd"); 
    this.appendValueInput("P1")
        .appendField("P1")	
        .setCheck(null); 
    this.appendValueInput("P2")
        .appendField("P2")	
        .setCheck(null);
    this.appendValueInput("P3")
        .appendField("P3")	
        .setCheck(null);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
	this.setHelpUrl("https://github.com/fustyles/Arduino/blob/master/ESP32-CAM_CameraWebServer_FakeStream/ESP32-CAM_CameraWebServer_FakeStream.ino");	
  }
};

//SERIAL
Blockly.Blocks['fu_serial_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("baudrate")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/");
  }
};

Blockly.Blocks['fu_serial_begin_config'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("baudrate")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_CONFIG"])
        .appendField(new Blockly.FieldDropdown([
			["SERIAL_5N1", "SERIAL_5N1"],
			["SERIAL_6N1", "SERIAL_6N1"],
			["SERIAL_7N1", "SERIAL_7N1"],
			["SERIAL_8N1", "SERIAL_8N1"],
			["SERIAL_5N2", "SERIAL_5N2"],
			["SERIAL_6N2", "SERIAL_6N2"],
			["SERIAL_7N2", "SERIAL_7N2"],
			["SERIAL_8N2", "SERIAL_8N2"],
			["SERIAL_5E1", "SERIAL_5E1"],
			["SERIAL_6E1", "SERIAL_6E1"],
			["SERIAL_7E1", "SERIAL_7E1"],
			["SERIAL_8E1", "SERIAL_8E1"],
			["SERIAL_5E2", "SERIAL_5E2"],
			["SERIAL_6E2", "SERIAL_6E2"],
			["SERIAL_7E2", "SERIAL_7E2"],
			["SERIAL_8E2", "SERIAL_8E2"],
			["SERIAL_5O1", "SERIAL_5O1"],
			["SERIAL_6O1", "SERIAL_6O1"],
			["SERIAL_7O1", "SERIAL_7O1"],
			["SERIAL_8O1", "SERIAL_8O1"],
			["SERIAL_5O2", "SERIAL_5O2"],
			["SERIAL_6O2", "SERIAL_6O2"],
			["SERIAL_7O2", "SERIAL_7O2"],
			["SERIAL_8O2", "SERIAL_8O2"]	
		]), "config");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/");
  }
};

Blockly.Blocks['fu_serial_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_READY"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/ifserial/");
  }
};

Blockly.Blocks['fu_serial_end'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_END"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/end/");
  }
};

Blockly.Blocks['fu_serial_print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.Msg["FU_SERIAL_PRINT"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};

Blockly.Blocks['fu_serial_print_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_PRINT"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};

Blockly.Blocks['fu_serial_println'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.Msg["FU_SERIAL_PRINTLN"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/println/");
  }
};

Blockly.Blocks['fu_serial_println_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_PRINTLN"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/println/");
  }
};

Blockly.Blocks['fu_serial_write'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERIAL_WRITE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/write/");
  }
};

Blockly.Blocks['fu_serial_write_format'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(Blockly.Msg["FU_SERIAL_WRITE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL_FORMAT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERIAL_PRINT_BIN"],"BIN"], 
			[Blockly.Msg["FU_SERIAL_PRINT_OCT"],"OCT"], 
			[Blockly.Msg["FU_SERIAL_PRINT_DEC"],"DEC"], 
			[Blockly.Msg["FU_SERIAL_PRINT_HEX"],"HEX"]
		]), "format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
 this.setTooltip("serial");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/functions/communication/serial/print/");
  }
};