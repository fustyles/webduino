Blockly.Blocks['uart_server_initial'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["UART_SERVER"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		], this.validate), "serial");
    this.appendValueInput("rx","rx")
        .setCheck("Number")
		.appendField("RX");
    this.appendValueInput("tx","tx")
        .setCheck("Number")
		.appendField("TX");
	this.getInput("rx").setVisible(false);
	this.getInput("tx").setVisible(false);		
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.UART_BAUDRATE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");
	this.appendDummyInput()
        .appendField(Blockly.Msg["UART_SERVER_AFTER_READ_SHOW"]);			
    this.appendStatementInput("statement")
        .setCheck(null);
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(150);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (newValue=="Serial") {
		 block.getInput("rx").setVisible(false);
		 block.getInput("tx").setVisible(false);		 
	 }
	 else {
		 block.getInput("rx").setVisible(true);
		 block.getInput("tx").setVisible(true);		 
	 } 
  }
};

Blockly.Blocks['chart_switch_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_SWITCH_CREATE"]);
	this.appendValueInput("id")
		.setCheck("String")	
      .setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendValueInput("text")
		.setCheck("String")	
      .setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["CHART_NAME"]);		
	this.appendValueInput("width")
		.setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["CHART_WIDTH"]);  
	this.appendValueInput("height")
		.setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["CHART_HEIGHT"]);	
	this.appendValueInput("left")
		.setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["CHART_LEFT"]);  
	this.appendValueInput("top")
		.setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["CHART_TOP"]);		
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg["CHART_VAL"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["CHART_ON"],"1"],
			[Blockly.Msg["CHART_OFF"],"0"]	  
		]), "val"); 
	this.appendValueInput("size")
        .setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LABELSIZE"]);
	this.appendValueInput("color")
        .setAlign(Blockly.ALIGN_RIGHT)	
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_COLOR"]);
    this.appendStatementInput("do")
        .appendField(Blockly.Msg["CHART_SWITCH_DO"]);		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(150);
  }
};

Blockly.Blocks['chart_switch_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_SWITCH_SET"]);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendDummyInput()  
		.appendField(Blockly.Msg["CHART_VAL"])
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["CHART_ON"],"1"],
			[Blockly.Msg["CHART_OFF"],"0"]	  
		]), "val");
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(150);
  }
};

Blockly.Blocks['chart_switch_get'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_SWITCH_GET"]);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(150);
  }
};

Blockly.Blocks['chart_analoggauge_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_CREATE"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendValueInput("name")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_NAME"]);			
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_WIDTH"]);  
	this.appendValueInput("height")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_HEIGHT"]);	
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LEFT"]);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_TOP"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]);  
	this.appendValueInput("min")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_MIN"]);	
	this.appendValueInput("max")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_MAX"]);  
	this.appendValueInput("decimal")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_DECIMAL"]);  
	this.appendValueInput("unit")
		.setCheck("String")	
		.appendField(Blockly.Msg["CHART_UNIT"]);
	this.appendValueInput("count")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_COUNT"]);
	this.appendValueInput("angle")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_ANGLE"]);		
	this.appendValueInput("color")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_COLOR"]); 		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(280);
  }
};

Blockly.Blocks['chart_analoggauge_colorset'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_COLOR"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]); 		
	this.appendValueInput("color")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_COLOR"]); 		
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(280);
  }
};

Blockly.Blocks['chart_analoggauge_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_ANALOGGAUGE_SET"]);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(280);
  }
};	

Blockly.Blocks['chart_doughnut_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_DOUGHNUT_CREATE"]);
	this.appendValueInput("name")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_NAME"]);
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_WIDTH"]);  
	this.appendValueInput("height")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_HEIGHT"]);	
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LEFT"]);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_TOP"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]);  
	this.appendValueInput("min")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_MIN"]);	
	this.appendValueInput("max")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_MAX"]);  
	this.appendValueInput("decimal")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_DECIMAL"]);  
	this.appendValueInput("labelsize")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LABELSIZE"]);	
	this.appendValueInput("valuesize")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VALUESIZE"]); 
	this.appendValueInput("unit")
		.setCheck("String")	
		.appendField(Blockly.Msg["CHART_UNIT"]);
	this.appendValueInput("color")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_COLOR"]);			
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(210);
  }
};

Blockly.Blocks['chart_doughnut_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_DOUGHNUT_SET"]);	  
	this.appendValueInput("name")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_NAME"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(210);
  }
};	

Blockly.Blocks['chart_gauge_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_GAUGE_CREATE"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);		
	this.appendValueInput("name")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_NAME"]);
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_WIDTH"]);
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LEFT"]);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_TOP"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]);  
	this.appendValueInput("min")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_MIN"]);	
	this.appendValueInput("max")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_MAX"]);  
	this.appendValueInput("decimal")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_DECIMAL"]);  
	this.appendValueInput("labelsize")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LABELSIZE"]);
	this.appendValueInput("unit")
		.setCheck("String")	
		.appendField(Blockly.Msg["CHART_UNIT"]);
	this.appendValueInput("color")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_COLOR"]);			
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(130);
  }
};

Blockly.Blocks['chart_gauge_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_GAUGE_SET"]);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(130);
  }
};

Blockly.Blocks['chart_waterbubble_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_WATERBUBBLE_CREATE"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);		
	this.appendValueInput("name")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_NAME"]);
	this.appendValueInput("radius")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_RADIUS"]);
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LEFT"]);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_TOP"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]);  
	this.appendValueInput("min")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_MIN"]);	
	this.appendValueInput("max")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_MAX"]);  
	this.appendValueInput("decimal")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_DECIMAL"]);
	this.appendValueInput("unit")
		.setCheck("String")	
		.appendField(Blockly.Msg["CHART_UNIT"]);
	this.appendValueInput("watercolor")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_WATERCOLOR"]);	
	this.appendValueInput("textcolor")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_TEXTCOLOR"]);		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(170);
  }
};

Blockly.Blocks['chart_waterbubble_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_WATERBUBBLE_SET"]);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_VAL"]); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(170);
  }
};

Blockly.Blocks['chart_line_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_LINE_CREATE"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);			
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_WIDTH"]);  
	this.appendValueInput("height")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_HEIGHT"]);	
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LEFT"]);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_TOP"]);
	this.appendValueInput("count")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_COUNT"]);
	this.appendValueInput("title")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_TITLE"]);
	this.appendValueInput("titlex")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_TITLE_X"]);
	this.appendValueInput("titley")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_TITLE_Y"]);
	this.appendValueInput("dataset")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_DATASET"]); 		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(330);
  }
};

Blockly.Blocks['chart_line_dataset'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_LINE_DATASET"]);
	this.appendValueInput("label")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_LABEL"]);
	this.appendValueInput("borderColor")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_BORDERCOLOR"]);	
	this.appendValueInput("backgroundColor")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_BACKGROUNDCOLOR"]);			
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(330);
  }
};

Blockly.Blocks['chart_line_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_LINE_SET"]);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendValueInput("datax")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_DATA_X"]); 		
	this.appendValueInput("dataset")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_DATASET"]); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(330);
  }
};

Blockly.Blocks['chart_line_clear'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_LINE_CLEAR"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(330);
  }
};

Blockly.Blocks['chart_bar_create'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_BAR_CREATE"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);			
	this.appendValueInput("width")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_WIDTH"]);  
	this.appendValueInput("height")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_HEIGHT"]);	
	this.appendValueInput("left")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_LEFT"]);  
	this.appendValueInput("top")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_TOP"]);
	this.appendValueInput("count")
		.setCheck("Number")
		.appendField(Blockly.Msg["CHART_COUNT"]);
	this.appendValueInput("title")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_TITLE"]);
	this.appendValueInput("titlex")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_TITLE_X"]);
	this.appendValueInput("titley")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_TITLE_Y"]);
	this.appendValueInput("dataset")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_DATASET"]); 		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(20);
  }
};

Blockly.Blocks['chart_bar_dataset'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_BAR_DATASET"]);
	this.appendValueInput("label")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_LABEL"]);
	this.appendValueInput("borderColor")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_BORDERCOLOR"]);	
	this.appendValueInput("backgroundColor")
		.setCheck(null)	
		.appendField(Blockly.Msg["CHART_BACKGROUNDCOLOR"]);			
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(20);
  }
};

Blockly.Blocks['chart_bar_set'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_BAR_SET"]);	  
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);
	this.appendValueInput("datax")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_DATA_X"]); 		
	this.appendValueInput("dataset")
		.setCheck(null)
		.appendField(Blockly.Msg["CHART_DATASET"]); 
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(20);
  }
};

Blockly.Blocks['chart_bar_clear'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["CHART_BAR_CLEAR"]);
	this.appendValueInput("id")
		.setCheck("String")		
		.appendField(Blockly.Msg["CHART_ID"]);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(20);
  }
};


Blockly.Blocks['system_datetime_get'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(Blockly.Msg["SYSTEM_DATETIME"]); 
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["SYSTEM_DATETIME_DATETIME"],"datetime"],
		[Blockly.Msg["SYSTEM_DATETIME_DATE"],"date"],
		[Blockly.Msg["SYSTEM_DATETIME_TIME"],"time"],
		[Blockly.Msg["SYSTEM_DATETIME_YEAR"],"year"],
		[Blockly.Msg["SYSTEM_DATETIME_MONTH"],"month"],
		[Blockly.Msg["SYSTEM_DATETIME_DAY"],"day"],
		[Blockly.Msg["SYSTEM_DATETIME_WEEK"],"week"],
		[Blockly.Msg["SYSTEM_DATETIME_HOUR"],"hour"],
		[Blockly.Msg["SYSTEM_DATETIME_MINUTE"],"minute"],
		[Blockly.Msg["SYSTEM_DATETIME_SECOND"],"second"]
	  ]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(90);
  }
};

Blockly.Blocks['page_mqtt_setup_js'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PAGE_MQTT"])
        .appendField(Blockly.Msg["PAGE_MQTT_INITIAL_JS"]);
    this.appendValueInput("server")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["PAGE_MQTT_ADDRESS_JS"]);
    this.appendValueInput("user")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["PAGE_MQTT_ID_JS"]);
    this.appendValueInput("password")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["PAGE_MQTT_PASSWORD_JS"]);	
    this.appendStatementInput("topic_subscribe")
        .appendField(Blockly.Msg["PAGE_MQTT_SUBSCRIBE_TOPIC_JS"]);		
    this.appendStatementInput("topic_getdata")
        .appendField(Blockly.Msg["PAGE_MQTT_WHEN_GETDATA_JS"]);			
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_29"]);
  }
};

Blockly.Blocks['page_mqtt_subscribe_js'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PAGE_MQTT"]);	  
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg["PAGE_MQTT_SUBSCRIBE_TOPIC_JS"]);	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_29"]);
  }
};

Blockly.Blocks['page_mqtt_gettopic_js'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PAGE_MQTT"]);	  
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg["PAGE_MQTT_GETDATA_TOPIC_JS"]);
    this.appendStatementInput("topic_getdata");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_29"]);
  }
};

Blockly.Blocks['page_mqtt_senddata_js'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PAGE_MQTT"]);	  
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg["PAGE_MQTT_TO_TOPIC_JS"]);
    this.appendValueInput("text")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["PAGE_MQTT_PUBLISH_TEXT_JS"]);	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_29"]);
  }
};	

Blockly.Blocks['page_mqtt_getdata_js'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PAGE_MQTT"])
        .appendField(Blockly.Msg["PAGE_MQTT_GETDATA_JS"]);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["PAGE_MQTT_GETDATA_TEXT_JS"],"text"],
			[Blockly.Msg["PAGE_MQTT_GETDATA_NUMBER_JS"],"number"]
		]),"format");				
	this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_29"])
  }
};	

Blockly.Blocks['include_file'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.INCLUDE);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.INCLUDE_TYPE) 
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INCLUDE_JS,"js"], [Blockly.Msg.INCLUDE_CSS,"css"]],this.validate), "type");
  this.appendDummyInput("pos")  
      .appendField(Blockly.Msg.INCLUDE_POSITION)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INCLUDE_HEADER,"header"], [Blockly.Msg.INCLUDE_HERE,"here"]]), "position");	  
  this.appendValueInput("value")
      .appendField(Blockly.Msg.INCLUDE_URL)   
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_1"]);
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="js") {
		block.getInput("pos").setVisible(true);
	}
	else if (newValue=="css") {
		block.getInput("pos").setVisible(false);
	}
  }
};

Blockly.Blocks['esp32_telegrambot_reply_markup'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_REPLYKEYBOARD_SHOW);
  this.appendValueInput("telegram_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_TOKEN_SHOW);  
  this.appendValueInput("telegram_chatid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_CHATID_SHOW); 
  this.appendValueInput("telegram_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_TEXT_SHOW);
  this.appendValueInput("telegram_keyboard")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_KEYBOARD_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_ONTIME_SHOW)  
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.PROPERTY_FALSE,"false"],	  
		[Blockly.Msg.PROPERTY_TRUE,"true"]
  ]), "telegram_ontime");
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(Blockly.Msg["HUE_11"]);  
  }
};

Blockly.Blocks['taskhandle_initial'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
        .appendField(Blockly.Msg["TASKHANDLE_INITIAL_SHOW"]);		
	this.appendValueInput("stack")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)	  
        .appendField(Blockly.Msg["TASKHANDLE_STACK_SHOW"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_PRIORITY_SHOW"])	
        .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],
		["6","6"],
		["7","7"],
		["8","8"]		
		]), "priority");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_CORE_SHOW"])	
        .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],
		["6","6"],
		["7","7"]
		]), "core");		
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  }
};

Blockly.Blocks['taskhandle_statement'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"]);	    
    this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_CORE_SHOW"])	
        .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],
		["6","6"],
		["7","7"]
		]), "core");
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_STATEMENT_SHOW"]);
    this.appendStatementInput("statement")
        .setCheck(null);	
	this.setInputsInline(true);
    this.setColour(290);
  }
};

Blockly.Blocks['taskhandle_delay'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_DELAY_SHOW"]);		
	this.appendValueInput("delay")
		.setCheck("Number");
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_MS_SHOW"]);	
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  }
};

Blockly.Blocks['taskhandle_getcore'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_GETCORE_SHOW"]);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(65);
  }
};

Blockly.Blocks['taskhandle_yield'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_YIELD_SHOW"]);	
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  }
};

Blockly.Blocks['taskhandle_delete'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_DELETE_SHOW"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_CORE_SHOW"])	
        .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],
		["6","6"],
		["7","7"]
		]), "core");		
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  }
};

Blockly.Blocks['taskhandle_suspend'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_SUSPEND_SHOW"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_CORE_SHOW"])	
        .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],
		["6","6"],
		["7","7"]
		]), "core");		
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  }
};

Blockly.Blocks['taskhandle_resume'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_RESUME_SHOW"]);	
    this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_CORE_SHOW"])	
        .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],
		["6","6"],
		["7","7"]
		]), "core");		
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  }
};

Blockly.Blocks['taskhandle_getpriority'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_GETPRIORITY_SHOW"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_CORE_SHOW"])	
        .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],
		["6","6"],
		["7","7"]
		]), "core");		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(65);
  }
};

Blockly.Blocks['taskhandle_setpriority'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_SETPRIORITY_SHOW"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_CORE_SHOW"])	
        .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],
		["6","6"],
		["7","7"]
		]), "core");
    this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_PRIORITY_SHOW"])	
        .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],
		["6","6"],
		["7","7"],
		["8","8"]		
		]), "priority");	
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  }
};

Blockly.Blocks['taskhandle_resetdog'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_RESETDOG_SHOW"]);	
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  }
};

Blockly.Blocks['taskhandle_disabledog'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_DISABLEDOG_SHOW"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_CORE_SHOW"])	
        .appendField(new Blockly.FieldDropdown([
		["0","0"],
		["1","1"],
		["2","2"],
		["3","3"],
		["4","4"],
		["5","5"],
		["6","6"],
		["7","7"]
		]), "core");		
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
  }
};

Blockly.Blocks['page_spreadsheet_function'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg["CONTROLS_SPREADSHEET"]);	  
  this.appendValueInput("spreadsheeturl")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_URL_SHOW"]);
  this.appendValueInput("spreadsheetname")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_NAME_SHOW"]);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["SPREADSHEET_SET_CELL_SHOW"],"setcell"],
		[Blockly.Msg["SPREADSHEET_CLEAR_CELL_SHOW"],"clearcell"],
		[Blockly.Msg["SPREADSHEET_CLEAR_ROW_SHOW"],"clearrow"],
		[Blockly.Msg["SPREADSHEET_CLEAR_COL_SHOW"],"clearcol"],		
		[Blockly.Msg["SPREADSHEET_CLEAR_AFTERROW2_SHOW"],"clearafterrow2"],		
		[Blockly.Msg["SPREADSHEET_CLEAR_SHEET_SHOW"],"clearsheet"]	  
		],this.validate), "func");
  this.appendValueInput("col")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_COL_SHOW"]);		
  this.appendValueInput("row")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_ROW_SHOW"]);
  this.appendValueInput("text")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_TEXT_SHOW"]);
  this.appendValueInput("spreadsheet_script")
	.setCheck("String")	  
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL);
  this.getInput("spreadsheet_script").setVisible(false);	  
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/Spreadsheet_function.gs");	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_1"]);
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="setcell") {
		block.getInput("row").setVisible(true);
		block.getInput("col").setVisible(true);
		block.getInput("text").setVisible(true);
	}
	else if (newValue=="clearcell") {
		block.getInput("row").setVisible(true);
		block.getInput("col").setVisible(true);
		block.getInput("text").setVisible(false);
	}
	else if (newValue=="clearrow") {
		block.getInput("row").setVisible(true);
		block.getInput("col").setVisible(false);
		block.getInput("text").setVisible(false);
	}
	else if (newValue=="clearcol") {
		block.getInput("row").setVisible(false);
		block.getInput("col").setVisible(true);
		block.getInput("text").setVisible(false);
	}	
	else if (newValue=="clearafterrow2") {
		block.getInput("row").setVisible(false);
		block.getInput("col").setVisible(false);
		block.getInput("text").setVisible(false);
	}
	else if (newValue=="clearsheet") {
		block.getInput("row").setVisible(false);
		block.getInput("col").setVisible(false);
		block.getInput("text").setVisible(false);
	}	
  }
};

Blockly.Blocks['video_base64_spreadsheet_new'] = {
  init: function() {
	  this.appendDummyInput()
		  .setAlign(Blockly.ALIGN_RIGHT)		  
		  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.VIDEO,"video"], [Blockly.Msg.CANVAS,"canvas"], [Blockly.Msg.IMAGE,"image"]]), "source");
	  this.appendValueInput("id")
		  .setCheck(null)
		  .setAlign(Blockly.ALIGN_RIGHT)	  
		  .appendField(Blockly.Msg.ID);  
	  this.appendDummyInput()  
		  .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEET);
	this.appendValueInput("spreadsheeturl")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETURL);
	this.appendValueInput("spreadsheetname")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETNAME);
	this.appendDummyInput()  
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["CONTROLS_SPREADSHEET_INSERT"])
		.appendField(new Blockly.FieldDropdown([
			["　",""],		
			["A("+Blockly.Msg["CONTROLS_SPREADSHEET_DATE"]+"),B("+Blockly.Msg["CONTROLS_SPREADSHEET_TIME"]+")","gmt_datetime"],
			["A("+Blockly.Msg["CONTROLS_SPREADSHEET_DATE"]+")","gmt_date"],
			["A("+Blockly.Msg["CONTROLS_SPREADSHEET_TIME"]+")","gmt_time"]	
		]), "datetime");
	this.appendDummyInput()  
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_CAM_SPREADSHEET_ROW_SHOW)
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_CUSTOMROW_SHOW,"custom"],
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_FIRSTROW_SHOW,"first"],
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_SECONDROW_SHOW,"second"],
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_INSERTFIRSTROW_SHOW,"insertfirst"],
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_LASTROW_SHOW,"last"],
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_INSERTLASTROW_SHOW,"insertlast"]	
	], this.validate), "position");		
	this.appendValueInput("row")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_ROW);		
	this.appendValueInput("column")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_COLUMN);	
	this.appendValueInput("spreadsheet_script")
		.setCheck("String")	  
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL);
	this.getInput("spreadsheet_script").setVisible(false);
	this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_1"]);
	this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/SendCapturedImageToSpreadsheet_base64_doPost.gs");	
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (newValue=="custom") {
		 block.getInput("row").setVisible(true);
	 }
	 else {
		 block.getInput("row").setVisible(false);	 
	 }	 
  }
};

Blockly.Blocks['variable_urldecode'] = {
  init: function() {
    this.appendValueInput("url")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT);
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_URLDECODE_SHOW);    
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(Blockly.Msg["HUE_21"]);
  }
};

Blockly.Blocks['loop_asynchronous'] = {
  init: function() {	
	this.appendValueInput("count")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg["LOOP_COUNT_SHOW"]);
    this.appendDummyInput()		
		.appendField(Blockly.Msg["LOOP_EXECUTE_SHOW"]);
    this.appendStatementInput("statement")
        .setCheck(null); 		
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(160);
	}
};

Blockly.Blocks['esp32_telegrambot_getupdates'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_GETUPDATES_SHOW);
  this.appendValueInput("token")
	  .setCheck("String")
	  .setAlign(Blockly.ALIGN_RIGHT)		
	  .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_TOKEN_SHOW);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['esp32_telegrambot_spreadsheet_sendcell'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("Telegram Bot")
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_SEND_SHOW);		
    this.appendValueInput("token")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_TOKEN_SHOW);
    this.appendValueInput("chat_id")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_CHATID_SHOW);
	  this.appendValueInput("spreadsheeturl")
		  .setCheck("String")
		  .setAlign(Blockly.ALIGN_RIGHT)	  
		  .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_URL_SHOW"]);
	  this.appendValueInput("spreadsheetname")
		  .setCheck("String")
		  .setAlign(Blockly.ALIGN_RIGHT)	  
		  .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_NAME_SHOW"]);
	  this.appendValueInput("col")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)	  
		  .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_COL_SHOW"]);		
	  this.appendValueInput("row")
		  .setCheck("Number")
		  .setAlign(Blockly.ALIGN_RIGHT)	  
		  .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_ROW_SHOW"]); 
	  this.appendDummyInput()
		  .setAlign(Blockly.ALIGN_RIGHT)		  
		  .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_FORMAT_SHOW)	  
		  .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.ESP32_TELEGRAMBOT_TEXT_SHOW,"text"],
			[Blockly.Msg.ESP32_TELEGRAMBOT_IMAGEURL_SHOW,"imageurl"],
			[Blockly.Msg.ESP32_TELEGRAMBOT_IMAGEBASE64_SHOW,"imagebase64"]
			]), "type");	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_11"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/telegrambot_spreadsheet_sendcell.gs");
  }
};



Blockly.defineBlocksWithJsonArray([
	{type:"controls_spreadsheet"
	,message0:"%{BKY_CONTROLS_SPREADSHEET}"
	,message1:"%{BKY_SPREADSHEET_INSERT_SHOW}"
	,message2:"%{BKY_SPREADSHEET_SPREADSHEET_URL_SHOW} %1"	
	,args2:[{type:"input_value",name:"spreadsheeturl",check:null,align:"RIGHT"}]	
	,message3:"%{BKY_SPREADSHEET_SPREADSHEET_NAME_SHOW} %1"	
	,args3:[{type:"input_value",name:"spreadsheetname",check:null,align:"RIGHT"}]		
	,message4:"%1"
	,args4:[{type:"field_dropdown",name:"func",options:[["%{BKY_SPREADSHEET_INSERTFIRSTROW_SHOW}","insertfirst"],["%{BKY_SPREADSHEET_ROW2_SHOW}","insertrow2"],["%{BKY_SPREADSHEET_INSERTLASTROW_SHOW}","insertlast"]],align:"RIGHT"}]		
	,message5:"%{BKY_SPREADSHEET_COLUMN_SHOW}A %1"	
	,args5:[{type:"input_value",name:"VALUE",check:null,align:"RIGHT"}]	
	,previousStatement:null
	,nextStatement:null
	,style:"logic_blocks"
	,inputsInline:0
	,helpUrl:"https://github.com/fustyles/webduino/blob/gs/Spreadsheet_function.gs"
	,mutator:"controls_spreadsheet_mutator"
	}
	,{type:"controls_spreadsheet_main"
	,message0:"%{BKY_SPREADSHEET_COLUMN_SHOW}"
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}	
	,{type:"controls_spreadsheet_value"
	,message0:"%{BKY_SPREADSHEET_COLUMN_SHOW}"
	,previousStatement:null
	,nextStatement:null
	,enableContextMenu:!1
	,style:"logic_blocks"
	}
]);

Blockly.Constants.Logic.CONTROLS_SPREADSHEET_MUTATOR_MIXIN={
	allCount_:0
	,suppressPrefixSuffix:!0
	,mutationToDom:function(){		
		if(!this.allCount_)return null;
		var a=Blockly.utils.xml.createElement("mutation");
		this.allCount_&&a.setAttribute("all",this.allCount_);
		return a
	}
	,domToMutation:function(a){		
		this.allCount_=parseInt(a.getAttribute("all"),10)||0;
		this.rebuildShape_()
	}
	,decompose:function(a){
		var b=a.newBlock("controls_spreadsheet_main");
		b.initSvg();
		
		for(var c=b.nextConnection,d=1;d<=this.allCount_;d++){
			var e=a.newBlock("controls_spreadsheet_value");
			e.initSvg();
			c.connect(e.previousConnection);
			c=e.nextConnection
		}
		return b
	}
	,compose:function(a){
		a=a.nextConnection.targetBlock();
		this.allCount_=0;
		for(var b=[null];a&&!a.isInsertionMarker();){
			this.allCount_++;
			b.push(a.valueConnection_);
			a=a.nextConnection&&a.nextConnection.targetBlock()
		}
		this.updateShape_();
		this.reconnectChildBlocks_(b)
	}
	,saveConnections:function(a){	
		a=a.nextConnection.targetBlock();
		for(var b=1;a;){
			switch(a.type){
				case "controls_spreadsheet_value":
					var c=this.getInput(String.fromCharCode(b+65));
					a.valueConnection_=c&&c.connection.targetConnection;
					b++;
					break;				
				default:throw TypeError("Unknown block type: "+a.type);
			}
			a=a.nextConnection&&a.nextConnection.targetBlock()
		}
	}
	,rebuildShape_:function(){	
		var a=[null];
		for(var d=1;this.getInput(String.fromCharCode(d+65));){
			var e=this.getInput(String.fromCharCode(d+65));
			a.push(e.connection.targetConnection);d++
		}
		this.updateShape_();
		this.reconnectChildBlocks_(a)
	}
	,updateShape_:function(){	
		for(var a=1;this.getInput(String.fromCharCode(a+65));)
			this.removeInput(String.fromCharCode(a+65)),a++;
		for(a=1;a<=this.allCount_;a++)
			this.appendValueInput(String.fromCharCode(a+65))
			.setCheck(null)
			.appendField(Blockly.Msg["SPREADSHEET_COLUMN_SHOW"]+String.fromCharCode(a+65))
			.setAlign(Blockly.ALIGN_RIGHT)
	}
	,reconnectChildBlocks_:function(a,b){	
		for(var d=1;d<=this.allCount_;d++)
			Blockly.Mutator.reconnect(a[d],this,String.fromCharCode(d+65));
	}
};
Blockly.Extensions.unregister("controls_spreadsheet_mutator");
Blockly.Extensions.registerMutator("controls_spreadsheet_mutator",Blockly.Constants.Logic.CONTROLS_SPREADSHEET_MUTATOR_MIXIN,null,["controls_spreadsheet_value"]);

Blockly.defineBlocksWithJsonArray([
	{type:"controls_spreadsheet_datetime"
	,message0:"%{BKY_SPREADSHEET_SPREADSHEET_TEXT_SHOW}"	
	,message1:"%1"
	,args1:[{type:"field_dropdown",name:"datetime",options:[["%{BKY_CONTROLS_SPREADSHEET_DATETIME}","gmt_datetime"],["%{BKY_CONTROLS_SPREADSHEET_DATE}","gmt_date"],["%{BKY_CONTROLS_SPREADSHEET_TIME}","gmt_time"]],align:"RIGHT"}]		
	,output:null
	,inputsInline:!0
	,style:"logic_blocks"
	,helpUrl:"https://github.com/fustyles/webduino/blob/gs/Spreadsheet_function.gs"
	}
]);

Blockly.Blocks['controls_spreadsheet_function'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg["CONTROLS_SPREADSHEET"]);
  this.appendValueInput("spreadsheeturl")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_URL_SHOW"]);
  this.appendValueInput("spreadsheetname")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_NAME_SHOW"]);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["SPREADSHEET_SET_CELL_SHOW"],"setcell"],
		[Blockly.Msg["SPREADSHEET_CLEAR_CELL_SHOW"],"clearcell"],
		[Blockly.Msg["SPREADSHEET_CLEAR_ROW_SHOW"],"clearrow"],
		[Blockly.Msg["SPREADSHEET_CLEAR_COL_SHOW"],"clearcol"],		
		[Blockly.Msg["SPREADSHEET_CLEAR_AFTERROW2_SHOW"],"clearafterrow2"],		
		[Blockly.Msg["SPREADSHEET_CLEAR_SHEET_SHOW"],"clearsheet"]	  
		],this.validate), "func");
  this.appendValueInput("col")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_COL_SHOW"]);		
  this.appendValueInput("row")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_ROW_SHOW"]);
  this.appendValueInput("text")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_TEXT_SHOW"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/Spreadsheet_function.gs");	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="setcell") {
		block.getInput("row").setVisible(true);
		block.getInput("col").setVisible(true);
		block.getInput("text").setVisible(true);
	}
	else if (newValue=="clearcell") {
		block.getInput("row").setVisible(true);
		block.getInput("col").setVisible(true);
		block.getInput("text").setVisible(false);
	}
	else if (newValue=="clearrow") {
		block.getInput("row").setVisible(true);
		block.getInput("col").setVisible(false);
		block.getInput("text").setVisible(false);
	}
	else if (newValue=="clearcol") {
		block.getInput("row").setVisible(false);
		block.getInput("col").setVisible(true);
		block.getInput("text").setVisible(false);
	}	
	else if (newValue=="clearafterrow2") {
		block.getInput("row").setVisible(false);
		block.getInput("col").setVisible(false);
		block.getInput("text").setVisible(false);
	}
	else if (newValue=="clearsheet") {
		block.getInput("row").setVisible(false);
		block.getInput("col").setVisible(false);
		block.getInput("text").setVisible(false);
	}	
  }
};

Blockly.Blocks['controls_spreadsheet_get'] = {
  init: function () {
	  this.appendDummyInput()  
		  .appendField(Blockly.Msg["CONTROLS_SPREADSHEET"] + " (API)");
	  this.appendDummyInput()
		  .appendField(Blockly.Msg["SPREADSHEET_GET_CELL_SHOW"]);		  
	  this.appendValueInput("spreadsheetid")
		  .setCheck("String")
		  .setAlign(Blockly.ALIGN_RIGHT)	  
		  .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_ID_SHOW"]);
	  this.appendValueInput("spreadsheetname")
		  .setCheck("String")
		  .setAlign(Blockly.ALIGN_RIGHT)	  
		  .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_NAME_SHOW"]);	  
	  this.appendValueInput("cell")
		  .setCheck("String")
		  .setAlign(Blockly.ALIGN_RIGHT)	  
		  .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_CELL_SHOW"]);
	  this.appendValueInput("apikey")
		  .setCheck("String")
		  .setAlign(Blockly.ALIGN_RIGHT)	  
		  .appendField("API_KEY");		  
	  this.setHelpUrl("https://console.cloud.google.com/apis/library/sheets.googleapis.com");	  
	  this.setInputsInline(false);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(120)
  }
};

Blockly.Blocks['controls_spreadsheet_getcell'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg["SPREADSHEET_GET_CELL_ARRAY_SHOW"] + " (API)");
  this.appendValueInput("col")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_COL_SHOW"]);	  
  this.appendValueInput("row")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_ROW_SHOW"]);	  
  this.setHelpUrl("https://console.cloud.google.com/apis/library/sheets.googleapis.com");	  
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(120);
  }
};

Blockly.Blocks['controls_spreadsheet_getcell_number'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg["SPREADSHEET_GET_CELL_NUMBER_SHOW"] + " (API)"); 
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["SPREADSHEET_SPREADSHEET_COL_SHOW"],"col"],	  
		[Blockly.Msg["SPREADSHEET_SPREADSHEET_ROW_SHOW"],"row"]
  ]), "record");		  
  this.setHelpUrl("https://console.cloud.google.com/apis/library/sheets.googleapis.com");	  
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(120);
  }
};

Blockly.Blocks['controls_spreadsheet_query'] = {
  init: function() {
  this.appendDummyInput()  
	  .appendField(Blockly.Msg["CONTROLS_SPREADSHEET"]);  
  this.appendDummyInput()
	  .appendField(Blockly.Msg["SPREADSHEET_GET_CELL_SHOW"]);	  	  
  this.appendValueInput("spreadsheetid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_ID_SHOW"]);    
  this.appendValueInput("spreadsheetname")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_NAME_SHOW"]);
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT) 
      .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["SPREADSHEET_SPREADSHEET_SQL_SHOW"],"sql"],  
			[Blockly.Msg["SPREADSHEET_SPREADSHEET_RANGE_SHOW"],"range"]  
		], this.validate), "option");	  
  this.appendValueInput("sql","sql")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField("SQL");	  
  this.appendValueInput("cols","cols")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_COLS_SHOW"]);
  this.appendValueInput("rows","rows")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_ROWS_SHOW"]);		  
  this.appendValueInput("cole","cole")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_COLE_SHOW"]);
  this.appendValueInput("rowe","rowe")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_ROWE_SHOW"]);	  
  this.getInput("rows").setVisible(false);
  this.getInput("cols").setVisible(false);
  this.getInput("rowe").setVisible(false);
  this.getInput("cole").setVisible(false);		  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(250);
  this.setHelpUrl("https://developers.google.com/chart/interactive/docs/querylanguage");
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="sql") {
		block.getInput("sql").setVisible(true);
		block.getInput("cols").setVisible(false);
		block.getInput("rows").setVisible(false);		
		block.getInput("cole").setVisible(false);
		block.getInput("rowe").setVisible(false);		
	}
	else if (newValue=="range") {
		block.getInput("sql").setVisible(false);
		block.getInput("cols").setVisible(true);
		block.getInput("rows").setVisible(true);
		block.getInput("cole").setVisible(true);
		block.getInput("rowe").setVisible(true);
	}	
  }
};

Blockly.Blocks['controls_spreadsheet_getcell_query'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg["SPREADSHEET_GET_CELL_ARRAY_SHOW"]); 
  this.appendValueInput("col")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_COL_SHOW"]);	  
  this.appendValueInput("row")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg["SPREADSHEET_SPREADSHEET_ROW_SHOW"]);	  	  
  this.setHelpUrl("https://console.cloud.google.com/apis/library/sheets.googleapis.com");	  
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(250);
  }
};

Blockly.Blocks['controls_spreadsheet_getcell_query_number'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg["SPREADSHEET_GET_CELL_NUMBER_SHOW"]); 
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["SPREADSHEET_SPREADSHEET_COL_SHOW"],"col"],	  
		[Blockly.Msg["SPREADSHEET_SPREADSHEET_ROW_SHOW"],"row"]  
  ]), "record");		  
  this.setHelpUrl("https://console.cloud.google.com/apis/library/sheets.googleapis.com");	  
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(250);
  }
};

Blockly.Blocks['hands_esp32cam'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERVERMODULE_JAVASCRIPT_SHOW);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_HANDS_SHOW);		
    this.appendStatementInput("javascript_initial")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_HANDS_INITIAL_SHOW);	
    this.appendStatementInput("javascript_recognition")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_HANDS_RECOGNITION_SHOW);		
	this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_10"])
	}
};

Blockly.Blocks['hands_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_VIDEO_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "video_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_HAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	
  ]), "hand_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_10"]);
  this.setHelpUrl("https://google.github.io/mediapipe/solutions/hands.html");   
  }
};

Blockly.Blocks['hands_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_SHOW)
  this.appendValueInput("hand_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HANDS_INDEX_SHOW);	
  this.appendDummyInput() 
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HANDS_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HANDS_HAND1_SHOW,"1"],
		[Blockly.Msg.HANDS_HAND2_SHOW,"2"],
		[Blockly.Msg.HANDS_HAND3_SHOW,"3"],
		[Blockly.Msg.HANDS_HAND4_SHOW,"4"],
		[Blockly.Msg.HANDS_HAND5_SHOW,"5"],
		[Blockly.Msg.HANDS_HAND6_SHOW,"6"],
		[Blockly.Msg.HANDS_HAND7_SHOW,"7"],
		[Blockly.Msg.HANDS_HAND8_SHOW,"8"],
		[Blockly.Msg.HANDS_HAND9_SHOW,"9"],
		[Blockly.Msg.HANDS_HAND10_SHOW,"10"],
		[Blockly.Msg.HANDS_HAND11_SHOW,"11"],
		[Blockly.Msg.HANDS_HAND12_SHOW,"12"],
		[Blockly.Msg.HANDS_HAND13_SHOW,"13"],
		[Blockly.Msg.HANDS_HAND14_SHOW,"14"],
		[Blockly.Msg.HANDS_HAND15_SHOW,"15"],
		[Blockly.Msg.HANDS_HAND16_SHOW,"16"],
		[Blockly.Msg.HANDS_HAND17_SHOW,"17"],
		[Blockly.Msg.HANDS_HAND18_SHOW,"18"],
		[Blockly.Msg.HANDS_HAND19_SHOW,"19"],
		[Blockly.Msg.HANDS_HAND20_SHOW,"20"]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.HANDS_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_10"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/hands_20201012/hand_landmarks.png");   
  }
};

Blockly.Blocks['hands_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_DISTANCE_SHOW);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X0");
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y0"); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X1");
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y1");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['hands_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_ANGLE_SHOW);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X0");
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y0"); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X1");
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y1");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['hands_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_STATE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["Y","1"],
        ["N","0"]
  ]), "state_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['hands_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HANDS_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HANDS_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['hands_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['hands_number'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_NUMBER_SHOW);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['hands_part_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_ANGLE_SHOW);
  this.appendValueInput("hand_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HANDS_INDEX_SHOW);		  
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HANDS_AXIS_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HANDS_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HANDS_HAND1_SHOW,"1"],
		[Blockly.Msg.HANDS_HAND2_SHOW,"2"],
		[Blockly.Msg.HANDS_HAND3_SHOW,"3"],
		[Blockly.Msg.HANDS_HAND4_SHOW,"4"],
		[Blockly.Msg.HANDS_HAND5_SHOW,"5"],
		[Blockly.Msg.HANDS_HAND6_SHOW,"6"],
		[Blockly.Msg.HANDS_HAND7_SHOW,"7"],
		[Blockly.Msg.HANDS_HAND8_SHOW,"8"],
		[Blockly.Msg.HANDS_HAND9_SHOW,"9"],
		[Blockly.Msg.HANDS_HAND10_SHOW,"10"],
		[Blockly.Msg.HANDS_HAND11_SHOW,"11"],
		[Blockly.Msg.HANDS_HAND12_SHOW,"12"],
		[Blockly.Msg.HANDS_HAND13_SHOW,"13"],
		[Blockly.Msg.HANDS_HAND14_SHOW,"14"],
		[Blockly.Msg.HANDS_HAND15_SHOW,"15"],
		[Blockly.Msg.HANDS_HAND16_SHOW,"16"],
		[Blockly.Msg.HANDS_HAND17_SHOW,"17"],
		[Blockly.Msg.HANDS_HAND18_SHOW,"18"],
		[Blockly.Msg.HANDS_HAND19_SHOW,"19"],
		[Blockly.Msg.HANDS_HAND20_SHOW,"20"]
  ]), "part1_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HANDS_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HANDS_HAND1_SHOW,"1"],
		[Blockly.Msg.HANDS_HAND2_SHOW,"2"],
		[Blockly.Msg.HANDS_HAND3_SHOW,"3"],
		[Blockly.Msg.HANDS_HAND4_SHOW,"4"],
		[Blockly.Msg.HANDS_HAND5_SHOW,"5"],
		[Blockly.Msg.HANDS_HAND6_SHOW,"6"],
		[Blockly.Msg.HANDS_HAND7_SHOW,"7"],
		[Blockly.Msg.HANDS_HAND8_SHOW,"8"],
		[Blockly.Msg.HANDS_HAND9_SHOW,"9"],
		[Blockly.Msg.HANDS_HAND10_SHOW,"10"],
		[Blockly.Msg.HANDS_HAND11_SHOW,"11"],
		[Blockly.Msg.HANDS_HAND12_SHOW,"12"],
		[Blockly.Msg.HANDS_HAND13_SHOW,"13"],
		[Blockly.Msg.HANDS_HAND14_SHOW,"14"],
		[Blockly.Msg.HANDS_HAND15_SHOW,"15"],
		[Blockly.Msg.HANDS_HAND16_SHOW,"16"],
		[Blockly.Msg.HANDS_HAND17_SHOW,"17"],
		[Blockly.Msg.HANDS_HAND18_SHOW,"18"],
		[Blockly.Msg.HANDS_HAND19_SHOW,"19"],
		[Blockly.Msg.HANDS_HAND20_SHOW,"20"]
  ]), "part2_"); 
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HANDS_ADJUST_SHOW);	 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['hands_pause'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_PAUSE_SHOW);
  this.appendValueInput("time_")
      .setCheck("Number")    
      .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['hands_clear'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HANDS_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['fu_servo'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO"]);
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO_PIN"]);
    this.appendValueInput("angle")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO_ANGLE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(155);
    
    
  }
};

Blockly.Blocks['esp32_pixelbit_stream_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_PIXELBIT_STREAM_SERVERMODULE_SHOW"]);
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
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["96X96(96x96)","96X96"],
			["QQVGA(160x120)","QQVGA"],
			["QCIF,(176x144)","QCIF"],
			["HQVGA(240x176)","HQVGA"],
			["240X240(240x240)","240X240"],
			["QVGA(320x240)","QVGA"],
			["CIF(400x296)","CIF"],
			["HVGA(480x320)","HVGA"],
			["VGA(640x480)","VGA"],
			["SVGA(800x600)","SVGA"],
			["XGA(1024x768)","XGA"],
			["HD(1280x720)","HD"],
			["SXGA(1280x1024)","SXGA"],
			["UXGA(1600x1200)","UXGA"],
			["FHD(1920x1080)","FHD"],
			["P_HD( 720x1280)","P_HD"],
			["P_3MP( 864x1536)","P_3MP"],
			["QXGA(2048x1536)","QXGA"],
			["QHD(2560x1440)","QHD"],
			["WQXGA(2560x1600)","WQXGA"],
			["P_FHD(1080x1920)","P_FHD"],
			["QSXGA(2560x1920)","QSXGA"]
		]), "framesize");		
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_3"]);
  }
};

Blockly.Blocks['esp32_pixelbit_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_PIXELBIT_SERVERMODULE_SHOW"]);
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
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.SERVERMODULE_FRAMESIZE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["96X96(96x96)","96X96"],
			["QQVGA(160x120)","QQVGA"],
			["QCIF,(176x144)","QCIF"],
			["HQVGA(240x176)","HQVGA"],
			["240X240(240x240)","240X240"],
			["QVGA(320x240)","QVGA"],
			["CIF(400x296)","CIF"],
			["HVGA(480x320)","HVGA"],
			["VGA(640x480)","VGA"],
			["SVGA(800x600)","SVGA"],
			["XGA(1024x768)","XGA"],
			["HD(1280x720)","HD"],
			["SXGA(1280x1024)","SXGA"],
			["UXGA(1600x1200)","UXGA"],
			["FHD(1920x1080)","FHD"],
			["P_HD( 720x1280)","P_HD"],
			["P_3MP( 864x1536)","P_3MP"],
			["QXGA(2048x1536)","QXGA"],
			["QHD(2560x1440)","QHD"],
			["WQXGA(2560x1600)","WQXGA"],
			["P_FHD(1080x1920)","P_FHD"],
			["QSXGA(2560x1920)","QSXGA"]
		]), "framesize");		
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_3"]);
  }
};

Blockly.Blocks['fu_dfplayer_initial'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["DFPLAYER_INITIAL_SHOW"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		], this.validate), "serial");
    this.appendValueInput("rx","rx")
        .setCheck("Number")
		.appendField("RX");
    this.appendValueInput("tx","tx")
        .setCheck("Number")
		.appendField("TX");
	this.getInput("rx").setVisible(false);
	this.getInput("tx").setVisible(false);		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
	this.setHelpUrl("https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299");	
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (newValue=="Serial") {
		 block.getInput("rx").setVisible(false);
		 block.getInput("tx").setVisible(false);		 
	 }
	 else {
		 block.getInput("rx").setVisible(true);
		 block.getInput("tx").setVisible(true);		 
	 } 
  }
};

Blockly.Blocks['fu_dfplayer_command0'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["DFPLAYER_COMMAND_SHOW"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["DFPLAYER_COMMAND_PLAY_SHOW"]+" (1~255)","play"],
			[Blockly.Msg["DFPLAYER_COMMAND_LOOP_SHOW"]+" (1~255)","loop"],
			[Blockly.Msg["DFPLAYER_COMMAND_VOLUME_SHOW"]+" (0~30)","volume"],
			[Blockly.Msg["DFPLAYER_COMMAND_PLAYMP3FOLDER_SHOW"]+" (1~255)","playMp3Folder"],
			[Blockly.Msg["DFPLAYER_COMMAND_ADVERTISE_SHOW"]+" (1~255)","advertise"],
			[Blockly.Msg["DFPLAYER_COMMAND_LOOPFOLDER_SHOW"]+" (1~99)","loopFolder"]			
		], this.validate), "cmd");
    this.appendValueInput("p1")
        .setCheck("Number")
		.appendField(Blockly.Msg.VALUE);			
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
	this.setHelpUrl("https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299");		
  } 
};

Blockly.Blocks['fu_dfplayer_command1'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["DFPLAYER_COMMAND_SHOW"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["DFPLAYER_COMMAND_PLAYFOLDER_SHOW"]+" (1~99, 1~255)","playFolder"],
			[Blockly.Msg["DFPLAYER_COMMAND_PLAYLARGEFOLDER_SHOW"]+" (1~10, 1~1000)","playLargeFolder"],
			[Blockly.Msg["DFPLAYER_COMMAND_OUTPUTSETTING_SHOW"]+" (boolean, value)","outputSetting"]		
		], this.validate), "cmd");
    this.appendValueInput("p1")
        .setCheck(null)
		.appendField(Blockly.Msg.VALUE+" 1");
    this.appendValueInput("p2")
        .setCheck(null)
		.appendField(Blockly.Msg.VALUE+" 2");		
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
	this.setHelpUrl("https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299");		
  } 
};

Blockly.Blocks['fu_dfplayer_command2'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["DFPLAYER_COMMAND_SHOW"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["DFPLAYER_COMMAND_NEXT_SHOW"],"next"],
			[Blockly.Msg["DFPLAYER_COMMAND_PREVIOUS_SHOW"],"previous"],
			[Blockly.Msg["DFPLAYER_COMMAND_RANDOMALL_SHOW"],"randomAll"],			
			[Blockly.Msg["DFPLAYER_COMMAND_PAUSE_SHOW"],"pause"],
			[Blockly.Msg["DFPLAYER_COMMAND_START_SHOW"],"start"],		
			[Blockly.Msg["DFPLAYER_COMMAND_ENABLELOOPALL_SHOW"],"enableLoopAll"],
			[Blockly.Msg["DFPLAYER_COMMAND_DISABLELOOPALL_SHOW"],"disableLoopAll"],
			[Blockly.Msg["DFPLAYER_COMMAND_ENABLELOOP_SHOW"],"enableLoop"],
			[Blockly.Msg["DFPLAYER_COMMAND_DISABLELOOP_SHOW"],"disableLoop"],
			[Blockly.Msg["DFPLAYER_COMMAND_STOPADVERTISE_SHOW"],"stopAdvertise"],
			[Blockly.Msg["DFPLAYER_COMMAND_ENABLEDAC_SHOW"],"enableDAC"],
			[Blockly.Msg["DFPLAYER_COMMAND_DISABLEDAC_SHOW"],"disableDAC"],
			[Blockly.Msg["DFPLAYER_COMMAND_RESET_SHOW"],"reset"],			
			[Blockly.Msg["DFPLAYER_COMMAND_SLEEP_SHOW"],"sleep"]			
		]), "cmd");	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
	this.setHelpUrl("https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299");		
  }
};

	
	
Blockly.Blocks['fu_dfplayer_command3'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["DFPLAYER_COMMAND_SHOW"]);
	this.optionsEQ = [
		[Blockly.Msg["DFPLAYER_COMMAND_NORMAL_SHOW"],'NORMAL'],
		[Blockly.Msg["DFPLAYER_COMMAND_POP_SHOW"],'POP'],
		[Blockly.Msg["DFPLAYER_COMMAND_ROCK_SHOW"],'ROCK'],		
		[Blockly.Msg["DFPLAYER_COMMAND_JAZZ_SHOW"],'JAZZ'],
		[Blockly.Msg["DFPLAYER_COMMAND_CLASSIC_SHOW"],'CLASSIC'],		
		[Blockly.Msg["DFPLAYER_COMMAND_BASS_SHOW"],'BASS']
	];
	this.optionsDEVICE = [
		[Blockly.Msg["DFPLAYER_COMMAND_U_DISK_SHOW"],'U_DISK'],
		[Blockly.Msg["DFPLAYER_COMMAND_SD_SHOW"],'SD'],		
		[Blockly.Msg["DFPLAYER_COMMAND_AUX_SHOW"],'AUX'],
		[Blockly.Msg["DFPLAYER_COMMAND_SLEEP_SHOW"],'SLEEP'],		
		[Blockly.Msg["DFPLAYER_COMMAND_FLASH_SHOW"],'FLASH']
	];
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["DFPLAYER_COMMAND_EQ_SHOW"],"EQ"],
			[Blockly.Msg["DFPLAYER_COMMAND_DEVICE_SHOW"],"DEVICE"]	
		], this.validate), "cmd");
    this.appendDummyInput("opt")	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["DFPLAYER_COMMAND_NORMAL_SHOW"],'NORMAL'],
			[Blockly.Msg["DFPLAYER_COMMAND_POP_SHOW"],'POP'],
			[Blockly.Msg["DFPLAYER_COMMAND_ROCK_SHOW"],'ROCK'],		
			[Blockly.Msg["DFPLAYER_COMMAND_JAZZ_SHOW"],'JAZZ'],
			[Blockly.Msg["DFPLAYER_COMMAND_CLASSIC_SHOW"],'CLASSIC'],		
			[Blockly.Msg["DFPLAYER_COMMAND_BASS_SHOW"],'BASS']
		]), "value");			
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
	this.setHelpUrl("https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299");		
  },
  validate: function(newValue) {
	 const sourceBlock = this.sourceBlock_;
	 sourceBlock.getInput("opt").removeField("value");
	 if (newValue=="EQ") {
		 sourceBlock.getInput("opt").appendField(new Blockly.FieldDropdown(sourceBlock.optionsEQ),"value");		 
	 }
	 else if (newValue=="DEVICE") {
		 sourceBlock.getInput("opt").appendField(new Blockly.FieldDropdown(sourceBlock.optionsDEVICE),"value"); 
	 }	 
  }
};





Blockly.Blocks['uart_initial'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		], this.validate), "serial");
    this.appendValueInput("rx","rx")
        .setCheck("Number")
		.appendField("RX");
    this.appendValueInput("tx","tx")
        .setCheck("Number")
		.appendField("TX");
	this.getInput("rx").setVisible(false);
	this.getInput("tx").setVisible(false);		
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.UART_BAUDRATE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["UART_READ_ALL_SHOW"],"all"],
			[Blockly.Msg["UART_READ_STRING_SHOW"],"string"],			
			[Blockly.Msg["UART_READ_ROW_SHOW"],"row"],
			[Blockly.Msg["UART_READ_CHAR_SHOW"],"char"]
		]), "read");
	this.appendDummyInput()
        .appendField(Blockly.Msg.UART_AFTER_READ_SHOW);			
    this.appendStatementInput("statement")
        .setCheck(null);
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (newValue=="Serial") {
		 block.getInput("rx").setVisible(false);
		 block.getInput("tx").setVisible(false);		 
	 }
	 else {
		 block.getInput("rx").setVisible(true);
		 block.getInput("tx").setVisible(true);		 
	 } 
  }
};

Blockly.Blocks['uart_initial_esp32'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]+" (ESP32)");
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		], this.validate), "serial");
    this.appendValueInput("baudrate")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.UART_BAUDRATE_SHOW);		
    this.appendValueInput("rx","rx")
        .setCheck("Number")
		.appendField("RX");
    this.appendValueInput("tx","tx")
        .setCheck("Number")
		.appendField("TX");	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["FU_SERIAL_HUE"]);
  }
};

Blockly.Blocks['uart_getdata'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);	  
	this.appendDummyInput()
        .appendField(Blockly.Msg["UART_GETDATA_SHOW"]);   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};



Blockly.Blocks['fu_ntpserver_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.NTPSERVER_INITIAL_SHOW);
    this.appendValueInput("gmtOffset")
        .setCheck("Number")
		.appendField(Blockly.Msg.NTPSERVER_GMTOFFSET_SHOW);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
  }
};

Blockly.Blocks['fu_ntpserver_getlocaltime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.NTPSERVER_GETLOCALTIME_SHOW);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
  }
};

Blockly.Blocks['fu_ntpserver_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.NTPSERVER_GET_SHOW);
	this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.NTPSERVER_GET_YEAR_SHOW,"year"],
		  [Blockly.Msg.NTPSERVER_GET_MONTH_SHOW,"month"],		  
		  [Blockly.Msg.NTPSERVER_GET_DAY_SHOW,"day"],
		  [Blockly.Msg.NTPSERVER_GET_HOUR_SHOW,"hour"],		  
		  [Blockly.Msg.NTPSERVER_GET_MINUTE_SHOW,"minute"],
		  [Blockly.Msg.NTPSERVER_GET_SECOND_SHOW,"second"],		  
		  [Blockly.Msg.NTPSERVER_GET_DATE_SHOW,"date"],		  
		  [Blockly.Msg.NTPSERVER_GET_TIME_SHOW,"time"],		  
		  [Blockly.Msg.NTPSERVER_GET_FULL_SHOW,"full"]				  
	  ]), "option"); 
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    
    
  }
};



Blockly.Blocks['esp32_telegrambot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_SHOW);
    this.appendValueInput("ssid")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_PASSWORD_SHOW);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");		
    this.appendValueInput("token")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_TOKEN_SHOW);
    this.appendValueInput("chat_id")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_CHATID_SHOW);	
    this.appendValueInput("command")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_COMMAND_SHOW);	
    this.appendValueInput("keyboard")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_KEYBOARD_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_LOOP_SHOW);		
    this.appendStatementInput("loop")
        .setCheck(null);		
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['esp32cam_telegrambot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32CAM_TELEGRAMBOT_SHOW);
    this.appendValueInput("ssid")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_PASSWORD_SHOW);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");
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
    this.appendValueInput("token")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_TOKEN_SHOW);
    this.appendValueInput("chat_id")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_CHATID_SHOW);	
    this.appendValueInput("command")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_COMMAND_SHOW);	
    this.appendValueInput("keyboard")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_KEYBOARD_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_LOOP_SHOW);		
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['esp32_telegrambot_sendmessage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Telegram Bot")	
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_SENDMESSAGE_SHOW);		
    this.appendValueInput("message")
        .setCheck("String");
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['esp32_telegrambot_sendmessage_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Telegram Bot");
    this.appendValueInput("token")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_TOKEN_SHOW);
    this.appendValueInput("chat_id")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_CHATID_SHOW);
    this.appendValueInput("message")
        .setCheck("String")
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_SENDMESSAGE_SHOW);			
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['esp32_telegrambot_sendlink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Telegram Bot")	
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_SENDLINK_SHOW);		
    this.appendValueInput("link")
        .setCheck("String");
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['esp32_telegrambot_sendlink_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Telegram Bot");
    this.appendValueInput("token")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_TOKEN_SHOW);
    this.appendValueInput("chat_id")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_TELEGRAMBOT_CHATID_SHOW);			
    this.appendValueInput("link")
        .setCheck("String")
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_SENDLINK_SHOW);			
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['esp32_telegrambot_get_token'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_GET_TOKEN_SHOW);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['esp32_telegrambot_get_chatid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_TELEGRAMBOT_GET_CHATID_SHOW);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['fu_servo_esp'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO_ESP32"]);
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO_PIN"]);
    this.appendValueInput("angle")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO_ANGLE"]);
    this.appendValueInput("channel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO_CHANNEL"]);	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(155);
    
    
  }
};

Blockly.Blocks['fu_taiwan_aqi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AIRQUALITY_ESP32"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg["AIRQUALITY_SITE"])		
        .appendField(new Blockly.FieldDropdown([
          ["基隆市-基隆","基隆"],
          ["新北市-汐止","汐止"],
          ["新北市-萬里","萬里"],
          ["新北市-新店","新店"],
          ["新北市-土城","土城"],
          ["新北市-板橋","板橋"],
          ["新北市-新莊","新莊"],
          ["新北市-菜寮","菜寮"],
          ["新北市-林口","林口"],
          ["新北市-淡水","淡水"],
          ["新北市-永和","永和"],  
          ["新北市-三重","三重"],
          ["新北市-富貴角","富貴角"],
          ["臺北市-士林","士林"],
          ["臺北市-中山","中山"],
          ["臺北市-萬華","萬華"],
          ["臺北市-古亭","古亭"],
          ["臺北市-松山","松山"],
          ["臺北市-大同","大同"],
          ["臺北市-陽明","陽明"],  
          ["桃園市-桃園","桃園"],
          ["桃園市-大園","大園"],
          ["桃園市-觀音","觀音"],
          ["桃園市-平鎮","平鎮"],
          ["桃園市-龍潭","龍潭"],
          ["桃園市-中壢","中壢"],
          ["新竹縣-湖口","湖口"],
          ["新竹縣-竹東","竹東"],
          ["新竹市-新竹","新竹"],
          ["苗栗縣-頭份","頭份"],
          ["苗栗縣-苗栗","苗栗"],
          ["苗栗縣-三義","三義"],
          ["臺中市-豐原","豐原"],
          ["臺中市-沙鹿","沙鹿"],
          ["臺中市-大里","大里"],
          ["臺中市-忠明","忠明"],
          ["臺中市-西屯","西屯"],
          ["彰化縣-彰化","彰化"],
          ["彰化縣-線西","線西"],
          ["彰化縣-二林","二林"],
          ["南投縣-南投","南投"],
          ["南投縣-竹山","竹山"], 
          ["南投縣-埔里","埔里"],  
          ["雲林縣-斗六","斗六"],
          ["雲林縣-崙背","崙背"],
          ["雲林縣-臺西","臺西"],
          ["雲林縣-麥寮","麥寮"],
          ["嘉義縣-新港","新港"],
          ["嘉義縣-朴子","朴子"],
          ["嘉義市-嘉義","嘉義"],
          ["臺南市-新營","新營"],
          ["臺南市-善化","善化"],
          ["臺南市-安南","安南"],
          ["臺南市-臺南","臺南"],
          ["高雄市-美濃","美濃"],
          ["高雄市-橋頭","橋頭"],
          ["高雄市-仁武","仁武"],
          ["高雄市-鳳山","鳳山"],
          ["高雄市-大寮","大寮"],
          ["高雄市-林園","林園"],
          ["高雄市-楠梓","楠梓"],
          ["高雄市-左營","左營"],
          ["高雄市-前金","前金"],
          ["高雄市-前鎮","前鎮"],
          ["高雄市-小港","小港"],
          ["高雄市-復興","復興"],  
          ["屏東縣-屏東","屏東"],
          ["屏東縣-潮州","潮州"],
          ["屏東縣-恆春","恆春"],
          ["臺東縣-臺東","臺東"],
          ["臺東縣-關山","關山"],  
          ["花蓮縣-花蓮","花蓮"],
          ["宜蘭縣-宜蘭","宜蘭"],
          ["宜蘭縣-冬山","冬山"],
          ["連江縣-馬祖","馬祖"],
          ["金門縣-金門","金門"],
          ["澎湖縣-馬公","馬公"]
		]), "sitename");
    this.appendValueInput("Authorization")
        .setCheck("String")
        .appendField(Blockly.Msg["AIRQUALITY_AUTHORIZATION"]);			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    
    
  }
};

Blockly.Blocks['fu_taiwan_aqi_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AIRQUALITY_ESP32"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg["AIRQUALITY_DATA"])		
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg["AIRQUALITY_SITE"],"0"],
          [Blockly.Msg["AIRQUALITY_AQI"],"1"],
          [Blockly.Msg["AIRQUALITY_PM25"],"2"],	  
          [Blockly.Msg["AIRQUALITY_STATE"],"3"],
          [Blockly.Msg["AIRQUALITY_TIME"],"4"]	  
		]), "data");	
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    
    
  }
};

Blockly.Blocks['fu_taiwan_weather'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["WEATHER_ESP32_36HR"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg["WEATHER_LOCATION"])		
        .appendField(new Blockly.FieldDropdown([
          ["宜蘭縣","宜蘭縣"],
          ["花蓮縣","花蓮縣"],
          ["臺東縣","臺東縣"],
          ["澎湖縣","澎湖縣"],
          ["金門縣","金門縣"],
          ["連江縣","連江縣"],
          ["臺北市","臺北市"],
          ["新北市","新北市"],
          ["桃園市","桃園市"],
          ["臺中市","臺中市"],
          ["臺南市","臺南市"],
          ["高雄市","高雄市"],
          ["基隆市","基隆市"],
          ["新竹縣","新竹縣"],
          ["新竹市","新竹市"],
          ["苗栗縣","苗栗縣"],
          ["彰化縣","彰化縣"],
          ["南投縣","南投縣"],
          ["雲林縣","雲林縣"],
          ["嘉義縣","嘉義縣"],
          ["嘉義市","嘉義市"],
          ["屏東縣","屏東縣"]
		]), "locationname");
    this.appendValueInput("Authorization")
        .setCheck("String")
        .appendField(Blockly.Msg["WEATHER_AUTHORIZATION"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    
    
  }
};

Blockly.Blocks['fu_taiwan_weather_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["WEATHER_ESP32_36HR"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg["WEATHER_PERIOD"])		
        .appendField(new Blockly.FieldDropdown([
          ["前12小時","0"],
          ["中12小時","1"],
          ["後12小時","2"]
		]), "period");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg["WEATHER_DATA"])		
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg["WEATHER_LOCATION"],"0"],
          [Blockly.Msg["WEATHER_STARTTIME"],"1"],
          [Blockly.Msg["WEATHER_ENDTIME"],"2"],	  
          [Blockly.Msg["WEATHER_WX"],"3"],
          [Blockly.Msg["WEATHER_POP"],"4"],
          [Blockly.Msg["WEATHER_MINT"],"5"],
          [Blockly.Msg["WEATHER_CI"],"6"],
          [Blockly.Msg["WEATHER_MAXT"],"7"]		  
		]), "data");	
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    
    
  }
};

//https://github.com/opentypejs/opentype.js
var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://opentype.js.org/dist/opentype.js";
document.getElementsByTagName('head')[0].append(s);

Blockly.Blocks['fu_oled_PROGMEM_truetype'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["EZ_SET"]);
	var ttfToXbm = function() {
		var block = this.sourceBlock_;
        var input = block.getInputTargetBlock("PROGMEM");
	    if (input) {
		    if (input.type="text") {
				
				var file=document.createElement('input');
				file.type="file";
				file.onchange = function (event) {
					var target = event.target || window.event.srcElement;
					var files = target.files;
					if (FileReader && files && files.length) {
						var reader = new FileReader();
						reader.onload = function (e) {    
							try {
								font = opentype.parse(e.target.result);
								window.font = font;
								var options = {
									kerning: true,
									hinting: false,
									features: {
										liga: true,
										rlig: true
									}
								};
								
								const canvas = document.createElement('canvas');
								const context = canvas.getContext('2d');
								canvas.width = 960;
								canvas.height = 480;
								
								var dropdown_size = Number(block.getFieldValue("fontsize"));
								var value_str = block.getFieldValue("str");

								context.clearRect(0, 0, canvas.width, canvas.height);
								context.fillStyle="#000000";
								context.textBaseline = "top";
								var textWidth = font.getAdvanceWidth(value_str, dropdown_size, options);
								var width = (textWidth%8>0)?Math.round(textWidth-textWidth%8+8):Math.round(textWidth);
								font.draw(context, value_str, 0, 240, dropdown_size, options);

								var pixels = context.getImageData(0, 0, width, canvas.height);
								var fontTop = null, fontBottom = null;
								var y;
								for (var i = 0; i < pixels.data.length; i += 4) {
									if (pixels.data[i+3] !== 0) {
										y = ((i / 4) / width);			
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
								
								block.getField("size").setValue("( "+width + " * " + height + " )", "size");

								const imageData = context.getImageData(0, fontTop, width, height);
								const data = imageData.data;

								let xbmString = "";
								let pixel = 0;
								let value = 0;
								
								for(let h = 0; h < height; h++) {
									for(let w = 0; w < width / 8; w++) {
										value = 0;
										for(let p = 0; p < 8; p++) {
											const isBlack = !(data[pixel * 4+3]);
											if(!isBlack)
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
								input.setFieldValue(xbmString, 'TEXT');								
								file.parentNode.removeChild(file);
							} catch (err) {
								alert(err.toString());
								file.parentNode.removeChild(file);
							}
						}
						reader.onerror = function(err) {
							alert(err.toString());
							file.parentNode.removeChild(file);
						};
						reader.readAsArrayBuffer(target.files[0]);
					}
				}
				document.body.appendChild(file);
				file.click();
		    }
		}
    };
	var field = new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADyUlEQVRIieXVS0xcVRzH8e85l3nAUBCsaZHUqrDQAsWZdGekj8RXVzR10qUwJERXLtTEREPARle6Nl3AMEljGmnorlZjBNpoWzVAQoFKIRFqB9raymNGZu7ce/8uhiG8hOFRY+JvdW/yP+dz/+feew7836KyKQoGg7k+n++w1vopx3GKtNZ/ish4LBa73NHRMb/jcENDQ7lt281KqRNA3holfwGdjuM0RyKRsR2BQ6HQ+yLyCeDClYvaW4EqfBI8+ZCMITNRZOoGpBIAJvBhOBz+bFtwfX39GaCRHA/6wHEoq0EZ7lV1YpvIaDcyfAmsJMCZcDj8VjawsVanwAfkFaFr3kGVVqN0ukwr8OQoHAEBlDZQu8vQJZXI5ABYiUOBQCDW19d3dVMdh0KhZ0VkmByPWx99L720wO5cRcUTBnvyFEql0btxYfC+zR/zkh48cwe763OwkqbWuqK1tXV0PVgvvXEc52PArQ8cX0TLizTH9ueQsISe2xYXx1L0TFgkLOHY/hzKixamKCxFP/8agFtEmjbqeBEOBoO5SqlaXLlQVrNYUJqvuBa1uR61uRsX5sx0t9ejNteiNvsKljx7+RFweRGRk42NjWv9Bavh/Pz8GsCnSiqXfUg9t20mZp01B0/MOnSNW4v3ynCj91YC5Jmm+WJWMPA0AAtLvNVIQUl6Yq2fyRYuBlBu37Zg5d2VfgCRx7OClVIPAEjGtgWTnMtc3c8KFpFxAJmJbsvNjM/MtyEci8UuA3GZuoHY5tZU20SmhgBiwJWs4IVT5gKpBDLavSVXbn0PqXmAzvb29kRWMIBhGE1AUoYvwcydzaHTv+Pc/BbAXNiI1s2yvbq3t3fa7/cncOxXZHIAvec58BZkhcoPX4AZR0TaI5FIZFMwQH9//49+v78EK3FIJn5CKQVF+xYPimWxTWTkO5xfzmZQWylV5ff7B/r7+39dD17vPH5XRD4F3Li86R2psAQ8uyA5t3AeD2XeqQmEgTcBbyJlpaYTqdNfnz93OuuOM+nr67saCAS+VEoVY1vlMht1y70RZHIAuTcCs5PgWHHgnGEYb7S1tZ0NBAI/z5vWqYmHc+75ZOrowepqbg0p9myq46Wpq6vzAi+R3laLgYfAb8CVlV/vyyeCLXPzZpNIevJin6f5YudXLVuCN5tXTwRbZjbA/3Gpt5Oxm0PdFZVVRtJ2DguQSNlHVi77I4EX8K6KqoOupGXXZPCqF6qjo8ODvbBiA9npfHOh46PCPE+TUgqvy3igE/Hzj9JblddPnnq7trb2sX8V/c/lbwo9q8gJVNowAAAAAElFTkSuQmCC", 30, 30, { alt: "*", flipRtl: "FALSE" });
	field.setOnClickHandler(ttfToXbm);		
	this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg["EZ_SIZE"])
      .appendField(new Blockly.FieldDropdown([
		  ["8px","8"],
		  ["9px","9"],		  
		  ["10px","10"],
		  ["11px","11"],		  
		  ["12px","12"],
		  ["14px","14"],		  
		  ["16px","16"],		  
		  ["18px","18"],		  
		  ["20px","20"],
		  ["24px","24"],		  
		  ["32px","32"],
		  ["42px","42"]					  
	  ]), "fontsize");
    this.appendDummyInput()
        .appendField(Blockly.Msg["EZ_TEXT"])	
        .appendField(new Blockly.FieldTextInput("hello"), "str");
    this.appendDummyInput()
	.appendField(Blockly.Msg["OLED_FONT_TTF"])
	.appendField(field);		  
    this.appendValueInput("PROGMEM")
        .setCheck("String")
        .appendField(Blockly.Msg["OLED_XBM_VALUE"]);		
    this.appendDummyInput()
	.appendField(new Blockly.FieldLabelSerializable(""), "size");
  
		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 
 this.setHelpUrl("https://github.com/opentypejs/");
  }
};

Blockly.Blocks['fu_ez_digitalwrite'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
		.appendField("Led")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_RED"],"0"], [Blockly.Msg["EZ_YELLOW"],"1"], [Blockly.Msg["EZ_GREEN"],"2"]]), "led");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_STATE"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_OPEN"],"1"], [Blockly.Msg["EZ_CLOSE"],"0"]]), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    
    
  }
};

Blockly.Blocks['fu_ez_digitalwrite_input'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
		.appendField("Led")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_RED"],"0"], [Blockly.Msg["EZ_YELLOW"],"1"], [Blockly.Msg["EZ_GREEN"],"2"]]), "led");
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_DIGITALWRITE"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    
    
  }
};

Blockly.Blocks['fu_ez_digitalwrite_relay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_RELAY"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_STATE"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_OPEN"],"1"], [Blockly.Msg["EZ_CLOSE"],"0"]]), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    
    
  }
};

Blockly.Blocks['fu_ez_digitalwrite_input_relay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_RELAY"])
        .appendField(Blockly.Msg["EZ_DIGITALWRITE"]); 
   this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    
    
  }
};

Blockly.Blocks['fu_ez_analogwrite_input'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
		.appendField("Led")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_RED"],"0"], [Blockly.Msg["EZ_YELLOW"],"1"], [Blockly.Msg["EZ_GREEN"],"2"]]), "led");
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_ANALOGWRITE"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
    
    
  }
};

Blockly.Blocks['fu_ez_analogwrite_input_esp'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
		.appendField("Led")
        .appendField("(ESP32)")		
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_RED"],"0"], [Blockly.Msg["EZ_YELLOW"],"1"], [Blockly.Msg["EZ_GREEN"],"2"]]), "led");
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_ANALOGWRITE"]);
    this.appendValueInput("channel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_CHANNEL"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    
    
  }
};

Blockly.Blocks['fu_ez_digitalread'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
		.appendField(Blockly.Msg["EZ_BUTTON"])
		.appendField(Blockly.Msg["EZ_DIGITALREAD"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_BUTTONA"],"0"],[Blockly.Msg["EZ_BUTTONB"],"1"]]), "button");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    
    
  }
};

Blockly.Blocks['fu_ez_digitalread_button'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
		.appendField(Blockly.Msg["EZ_BUTTON"])
		.appendField(Blockly.Msg["EZ_PRESS"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_BUTTONA"],"A"],[Blockly.Msg["EZ_BUTTONB"],"B"],[Blockly.Msg["EZ_BUTTONAB"],"AB"]]), "type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(80);
    
    
  }
};

Blockly.Blocks['fu_ez_digitalread_button_statement'] = {
  init: function() {
    this.appendDummyInput()	  
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
		.appendField(Blockly.Msg["EZ_BUTTON"])
		.appendField(Blockly.Msg["EZ_PRESS"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_BUTTONA"],"A"],[Blockly.Msg["EZ_BUTTONB"],"B"],[Blockly.Msg["EZ_BUTTONAB"],"AB"]]), "type");	  
    this.appendStatementInput("execute");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
  }
};

Blockly.Blocks['fu_ez_analogread_potentiometer'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_POTENTIOMETER"])
        .appendField(Blockly.Msg["EZ_ANALOGINREAD"]);         
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    
    
  }
};

Blockly.Blocks['fu_ez_analogread_photoresistor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_PHOTORESISTER"])
        .appendField(Blockly.Msg["EZ_ANALOGINREAD"]);         
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(110);
    
    
  }
};

Blockly.Blocks['fu_ez_buzzer_tone'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_BUZZER"]);
    this.appendValueInput("frequency")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_FREQUENCY"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
    
    
  }
};

Blockly.Blocks['fu_ez_buzzer_tone_duration'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_BUZZER"]);
    this.appendValueInput("frequency")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_FREQUENCY"]);
    this.appendValueInput("duration")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_DELAY_MS"]);	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
    
    
  }
};

Blockly.Blocks['fu_ez_buzzer_tone_duration_array'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_BUZZER"]);
    this.appendValueInput("frequency")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_FREQUENCY"]);
    this.appendValueInput("duration")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_DELAY_MS"]);	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
    
    
  }
};

Blockly.Blocks['fu_ez_buzzer_notone'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_BUZZER"])
        .appendField(Blockly.Msg["EZ_STOP"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
 
 
  }
};

Blockly.Blocks['fu_ez_buzzer_tone_duration_esp'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_BUZZER_ESP32"]);
    this.appendValueInput("frequency")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_FREQUENCY"]);
    this.appendValueInput("duration")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_DELAY_MS"]);
    this.appendValueInput("channel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_CHANNEL"]);	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(155);
    
    
  }
};

Blockly.Blocks['fu_ez_buzzer_tone_duration_esp_array'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_BUZZER_ESP32"]);
    this.appendValueInput("frequency")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_FREQUENCY"]);
    this.appendValueInput("duration")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_DELAY_MS"]);
    this.appendValueInput("channel")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["EZ_CHANNEL"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(155);
    
    
  }
};

Blockly.Blocks['fu_ez_buzzer_tone1']={
	init:function(){
		this.appendDummyInput()
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
		this.setColour(155);			
	}
};

Blockly.Blocks['fu_ez_buzzer_tone2']={
	init:function(){
		this.appendDummyInput()
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
		this.setColour(155);			
	}
};

Blockly.Blocks['fu_ez_buzzer_tone3']={
	init:function(){
		this.appendDummyInput()
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
		this.setColour(155);		
	}
};

Blockly.Blocks['fu_ez_dht11'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField("DHT11");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
         [Blockly.Msg["EZ_HUMIDITY"],"humidity"], 
         [Blockly.Msg["EZ_TEMPERATURE"],"temperature"]
         ]), "type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(170);
 
 
  }
};

Blockly.Blocks['fu_ez_pixel_rgb'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_RGB"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_RGB1"],"0"], [Blockly.Msg["EZ_RGB2"],"1"], [Blockly.Msg["EZ_RGB3"],"2"]]), "no");
    this.appendDummyInput()
        .appendField(Blockly.Msg["EZ_RGB_COLOR"]);		
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField("R");
    this.appendValueInput("G")
        .setCheck("Number")
        .appendField("G");
    this.appendValueInput("B")
        .setCheck("Number")
        .appendField("B");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 
 
  }
};

Blockly.Blocks['fu_ez_pixel_picker'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_RGB"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["EZ_RGB_NUMBER_NO"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["EZ_RGB1"],"0"], [Blockly.Msg["EZ_RGB2"],"1"], [Blockly.Msg["EZ_RGB3"],"2"]]), "no");
	this.appendValueInput("colour")
		.appendField(Blockly.Msg["EZ_RGB_COLOR"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 
 
  }
};

Blockly.Blocks['fu_ez_pixel_clear'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_RGB"])
        .appendField(Blockly.Msg["EZ_RGB_CLEAR"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 
 
  }
};

Blockly.Blocks['fu_ez_pixel_brightness'] = {
	init:function(){
		this.appendDummyInput()
			.appendField("EZ+")
			.appendField(Blockly.Msg["EZ_RGB"]);
		this.appendValueInput("brightness")
			.appendField(Blockly.Msg["EZ_RGB_BRIGHTNESS"])
			.setCheck("Number");
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(200);			
	}
};

Blockly.Blocks['fu_ez_pixel_color'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("EZ+")
		.appendField(Blockly.Msg["EZ_RGB"]);	
	this.appendValueInput("L1")
		.setCheck("String")
        .appendField(Blockly.Msg["EZ_RGB1"]);
	this.appendValueInput("L2")
		.setCheck("String")
        .appendField(Blockly.Msg["EZ_RGB2"]);
	this.appendValueInput("L3")
		.setCheck("String")
        .appendField(Blockly.Msg["EZ_RGB3"]);		
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);	
  }
};

Blockly.Blocks['fu_ez_pixel_color_n'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("EZ+")
		.appendField(Blockly.Msg["EZ_RGB"]);
	this.appendValueInput("num")
		.appendField(Blockly.Msg["EZ_RGB_NUMBER"])	
		.setCheck("Number");	
	this.appendValueInput("colour")
		.appendField(Blockly.Msg["EZ_RGB_COLOR"]);
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);	
  }
};

Blockly.Blocks['fu_color'] = {
  init: function() {	
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"RGB");
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(200);	
  }
};

Blockly.Blocks['fu_color_random'] = {
  init: function() {	
    this.appendDummyInput()
        .appendField(Blockly.Msg["EZ_RGB_COLOR_RANDOM"]);
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(200);	
  }
};

Blockly.Blocks['fu_ez_ir_receive'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("EZ+")
        .appendField(Blockly.Msg["EZ_IR"])
        .appendField(Blockly.Msg["EZ_IR_GET_EXECUTE"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(new Blockly.FieldVariable("irValue"), "value")
        .appendField(Blockly.Msg["EZ_IR_GET_STRING"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(new Blockly.FieldVariable("irType"), "type")
        .appendField(Blockly.Msg["EZ_IR_GET_PROTOCOL"]);
    this.appendStatementInput("execute")
        .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 
 
  }
};

Blockly.Blocks['fu_oled_initial'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
		.appendField("OLED")
        .appendField(Blockly.Msg["OLED_INITIAL"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)	
        .appendField(Blockly.Msg["OLED_SPECIFICATION"])
        .appendField(new Blockly.FieldDropdown([
			["U8G2_SSD1306_128X64_NONAME_F_HW_I2C","U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_NULL","U8G2_NULL u8g2(U8G2_R0);"],
			["U8G2_SSD1306_128X64_NONAME_F_4W_SW_SPI","U8G2_SSD1306_128X64_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI","U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 12, /* dc=*/ 4, /* reset=*/ 6);"],
			["U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI","U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_NONAME_F_3W_SW_SPI","U8G2_SSD1306_128X64_NONAME_F_3W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_NONAME_F_3W_HW_SPI","U8G2_SSD1306_128X64_NONAME_F_3W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_ALT0_F_HW_I2C","U8G2_SSD1306_128X64_ALT0_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X64_NONAME_F_SW_I2C","U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_NONAME_F_SW_I2C","U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X64_NONAME_F_SW_I2C","U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ 16, /* data=*/ 17, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X64_NONAME_F_HW_I2C","U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE, /* clock=*/ 16, /* data=*/ 17);"],
			["U8G2_SSD1306_128X64_NONAME_F_6800","U8G2_SSD1306_128X64_NONAME_F_6800 u8g2(U8G2_R0, 13, 11, 2, 3, 4, 5, 6, A4, /*enable=*/ 7, /*cs=*/ 10, /*dc=*/ 9, /*reset=*/ 8);"],
			["U8G2_SSD1306_128X64_NONAME_F_8080","U8G2_SSD1306_128X64_NONAME_F_8080 u8g2(U8G2_R0, 13, 11, 2, 3, 4, 5, 6, A4, /*enable=*/ 7, /*cs=*/ 10, /*dc=*/ 9, /*reset=*/ 8);"],
			["U8G2_SSD1306_128X64_VCOMH0_F_4W_HW_SPI","U8G2_SSD1306_128X64_VCOMH0_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X64_ALT0_F_4W_HW_SPI","U8G2_SSD1306_128X64_ALT0_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1306_102X64_EA_OLEDS102_F_4W_HW_SPI","U8G2_SSD1306_102X64_EA_OLEDS102_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1106_128X64_NONAME_F_4W_HW_SPI","U8G2_SH1106_128X64_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1106_128X64_NONAME_F_HW_I2C","U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SH1106_128X64_VCOMH0_F_4W_HW_SPI","U8G2_SH1106_128X64_VCOMH0_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1106_128X64_WINSTAR_F_4W_HW_SPI","U8G2_SH1106_128X64_WINSTAR_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1106_128X32_VISIONOX_F_HW_I2C","U8G2_SH1106_128X32_VISIONOX_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SH1106_128X32_VISIONOX_F_4W_HW_SPI","U8G2_SH1106_128X32_VISIONOX_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1106_72X40_WISE_F_4W_HW_SPI","U8G2_SH1106_72X40_WISE_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1107_64X128_F_4W_HW_SPI","U8G2_SH1107_64X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1107_128X128_F_4W_HW_SPI","U8G2_SH1107_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1107_128X128_F_HW_I2C","U8G2_SH1107_128X128_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ 8);"],
			["U8G2_SH1107_PIMORONI_128X128_F_HW_I2C","U8G2_SH1107_PIMORONI_128X128_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ 8);"],
			["U8G2_SH1107_SEEED_128X128_F_SW_I2C","U8G2_SH1107_SEEED_128X128_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SH1107_SEEED_128X128_F_HW_I2C","U8G2_SH1107_SEEED_128X128_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SH1107_SEEED_96X96_F_4W_HW_SPI","U8G2_SH1107_SEEED_96X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1108_160X160_F_4W_HW_SPI","U8G2_SH1108_160X160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SH1122_256X64_F_4W_HW_SPI","U8G2_SH1122_256X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1306_128X32_UNIVISION_F_SW_I2C","U8G2_SSD1306_128X32_UNIVISION_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ 21, /* data=*/ 20, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X32_UNIVISION_F_SW_I2C","U8G2_SSD1306_128X32_UNIVISION_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C","U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C","U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE, /* clock=*/ SCL, /* data=*/ SDA);"],
			["U8G2_SSD1306_128X32_WINSTAR_F_HW_I2C","U8G2_SSD1306_128X32_WINSTAR_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE, /* clock=*/ SCL, /* data=*/ SDA);"],
			["U8G2_SSD1306_64X48_ER_F_HW_I2C","U8G2_SSD1306_64X48_ER_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_48X64_WINSTAR_F_HW_I2C","U8G2_SSD1306_48X64_WINSTAR_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_64X32_NONAME_F_HW_I2C","U8G2_SSD1306_64X32_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_64X32_1F_F_HW_I2C","U8G2_SSD1306_64X32_1F_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_96X16_ER_F_HW_I2C","U8G2_SSD1306_96X16_ER_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1306_72X40_ER_F_HW_I2C","U8G2_SSD1306_72X40_ER_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1320_160X132_F_4W_SW_SPI","U8G2_SSD1320_160X132_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1320_160X132_F_4W_HW_SPI","U8G2_SSD1320_160X132_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1322_NHD_256X64_F_4W_SW_SPI","U8G2_SSD1322_NHD_256X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1322_NHD_256X64_F_4W_HW_SPI","U8G2_SSD1322_NHD_256X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1322_NHD_128X64_F_4W_SW_SPI","U8G2_SSD1322_NHD_128X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1322_NHD_128X64_F_4W_HW_SPI","U8G2_SSD1322_NHD_128X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1325_NHD_128X64_F_4W_SW_SPI","U8G2_SSD1325_NHD_128X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1325_NHD_128X64_F_4W_HW_SPI","U8G2_SSD1325_NHD_128X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD0323_OS128064_F_4W_SW_SPI","U8G2_SSD0323_OS128064_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD0323_OS128064_F_4W_HW_SPI","U8G2_SSD0323_OS128064_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1326_ER_256X32_1_4W_SW_SPI","U8G2_SSD1326_ER_256X32_1_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_SEEED_96X96_F_SW_I2C","U8G2_SSD1327_SEEED_96X96_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1327_SEEED_96X96_F_HW_I2C","U8G2_SSD1327_SEEED_96X96_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1327_EA_W128128_F_4W_SW_SPI","U8G2_SSD1327_EA_W128128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_EA_W128128_F_4W_HW_SPI","U8G2_SSD1327_EA_W128128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_EA_W128128_F_SW_I2C","U8G2_SSD1327_EA_W128128_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ 5, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1327_EA_W128128_F_HW_I2C","U8G2_SSD1327_EA_W128128_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1327_MIDAS_128X128_F_4W_SW_SPI","U8G2_SSD1327_MIDAS_128X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_MIDAS_128X128_F_4W_HW_SPI","U8G2_SSD1327_MIDAS_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_MIDAS_128X128_F_HW_I2C","U8G2_SSD1327_MIDAS_128X128_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1327_WS_128X128_F_4W_SW_SPI","U8G2_SSD1327_WS_128X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_WS_128X128_F_4W_HW_SPI","U8G2_SSD1327_WS_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_VISIONOX_128X96_F_4W_SW_SPI","U8G2_SSD1327_VISIONOX_128X96_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1327_VISIONOX_128X96_F_4W_HW_SPI","U8G2_SSD1327_VISIONOX_128X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1329_128X96_NONAME_F_4W_SW_SPI","U8G2_SSD1329_128X96_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1329_128X96_NONAME_F_4W_HW_SPI","U8G2_SSD1329_128X96_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1329_96X96_NONAME_F_4W_SW_SPI","U8G2_SSD1329_96X96_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1329_96X96_NONAME_F_4W_HW_SPI","U8G2_SSD1329_96X96_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1329_96X96_NONAME_F_4W_HW_SPI","U8G2_SSD1329_96X96_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ A4, /* dc=*/ A2, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_SSD1305_128X32_NONAME_F_4W_SW_SPI","U8G2_SSD1305_128X32_NONAME_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X32_NONAME_F_4W_HW_SPI","U8G2_SSD1305_128X32_NONAME_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X32_ADAFRUIT_F_4W_SW_SPI","U8G2_SSD1305_128X32_ADAFRUIT_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X32_ADAFRUIT_F_4W_HW_SPI","U8G2_SSD1305_128X32_ADAFRUIT_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X64_ADAFRUIT_F_4W_SW_SPI","U8G2_SSD1305_128X64_ADAFRUIT_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X64_ADAFRUIT_F_4W_HW_SPI","U8G2_SSD1305_128X64_ADAFRUIT_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X64_RAYSTAR_F_4W_SW_SPI","U8G2_SSD1305_128X64_RAYSTAR_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1305_128X64_RAYSTAR_F_4W_HW_SPI","U8G2_SSD1305_128X64_RAYSTAR_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1309_128X64_NONAME0_F_4W_SW_SPI","U8G2_SSD1309_128X64_NONAME0_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1309_128X64_NONAME0_F_4W_HW_SPI","U8G2_SSD1309_128X64_NONAME0_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1309_128X64_NONAME2_F_4W_SW_SPI","U8G2_SSD1309_128X64_NONAME2_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1309_128X64_NONAME2_F_4W_HW_SPI","U8G2_SSD1309_128X64_NONAME2_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1316_128X32_F_4W_SW_SPI","U8G2_SSD1316_128X32_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1316_128X32_F_4W_HW_SPI","U8G2_SSD1316_128X32_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1317_96X96_F_4W_SW_SPI","U8G2_SSD1317_96X96_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1317_96X96_F_4W_HW_SPI","U8G2_SSD1317_96X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1318_128X96_F_4W_SW_SPI","U8G2_SSD1318_128X96_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1318_128X96_F_4W_HW_SPI","U8G2_SSD1318_128X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_LD7032_60X32_F_4W_SW_SPI","U8G2_LD7032_60X32_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* cs=*/ 9, /* dc=*/ 10, /* reset=*/ 8);"],
			["U8G2_LD7032_60X32_F_4W_SW_I2C","U8G2_LD7032_60X32_F_4W_SW_I2C u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_LD7032_60X32_ALT_F_4W_SW_SPI","U8G2_LD7032_60X32_ALT_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* cs=*/ 9, /* dc=*/ 10, /* reset=*/ 8);"],
			["U8G2_LD7032_60X32_ALT_F_4W_SW_I2C","U8G2_LD7032_60X32_ALT_F_4W_SW_I2C u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_UC1701_EA_DOGS102_F_4W_SW_SPI","U8G2_UC1701_EA_DOGS102_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1701_EA_DOGS102_F_4W_HW_SPI","U8G2_UC1701_EA_DOGS102_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_PCD8544_84X48_F_4W_SW_SPI","U8G2_PCD8544_84X48_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_PCD8544_84X48_F_4W_HW_SPI","U8G2_PCD8544_84X48_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_PCF8812_96X65_F_4W_SW_SPI","U8G2_PCF8812_96X65_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_PCF8812_96X65_F_4W_HW_SPI","U8G2_PCF8812_96X65_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_HX1230_96X68_F_3W_SW_SPI","U8G2_HX1230_96X68_F_3W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* reset=*/ 8);"],
			["U8G2_HX1230_96X68_F_4W_SW_SPI","U8G2_HX1230_96X68_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_KS0108_128X64_F","U8G2_KS0108_128X64_F u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*dc=*/ 17, /*cs0=*/ 14, /*cs1=*/ 15, /*cs2=*/ U8X8_PIN_NONE, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_KS0108_ERM19264_F","U8G2_KS0108_ERM19264_F u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*dc=*/ 17, /*cs0=*/ 14, /*cs1=*/ 15, /*cs2=*/ 16, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_HD44102_100X64_F","U8G2_HD44102_100X64_F u8g2(U8G2_R0, 4, 5, 6, 7, 8, 9, 10, 11, /*enable=*/ 2, /*dc=*/ 3, /*cs0=*/ A0, /*cs1=*/ A1, /*cs2=*/ A2, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_T7932_150X32_F","U8G2_T7932_150X32_F u8g2(U8G2_R0, 4, 5, 6, 7, 8, 9, 10, 11, /*enable=*/ 2, /*dc=*/ 3, /*cs0=*/ A0, /*cs1=*/ A1, /*cs2=*/ A2, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_ST7920_192X32_F_8080","U8G2_ST7920_192X32_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*cs=*/ U8X8_PIN_NONE, /*dc=*/ 17, /*reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7920_192X32_F_SW_SPI","U8G2_ST7920_192X32_F_SW_SPI u8g2(U8G2_R0, /* clock=*/ 18 /* A4 */ , /* data=*/ 16 /* A2 */, /* CS=*/ 17 /* A3 */, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7920_128X64_F_8080","U8G2_ST7920_128X64_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18 /* A4 */, /*cs=*/ U8X8_PIN_NONE, /*dc/rs=*/ 17 /* A3 */, /*reset=*/ 15 /* A1 */);"],
			["U8G2_ST7920_128X64_F_SW_SPI","U8G2_ST7920_128X64_F_SW_SPI u8g2(U8G2_R0, /* clock=*/ 18 /* A4 */ , /* data=*/ 16 /* A2 */, /* CS=*/ 17 /* A3 */, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7920_128X64_F_SW_SPI","U8G2_ST7920_128X64_F_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* CS=*/ 10, /* reset=*/ 8);"],
			["U8G2_ST7920_128X64_F_SW_SPI","U8G2_ST7920_128X64_F_SW_SPI u8g2(U8G2_R0, /* clock=*/ 14, /* data=*/ 13, /* CS=*/ 15, /* reset=*/ 16);"],
			["U8G2_ST7920_128X64_F_HW_SPI","U8G2_ST7920_128X64_F_HW_SPI u8g2(U8G2_R0, /* CS=*/ 10, /* reset=*/ 8);"],
			["U8G2_ST7920_128X64_F_HW_SPI","U8G2_ST7920_128X64_F_HW_SPI u8g2(U8G2_R0, /* CS=*/ 15, /* reset=*/ 16);"],
			["U8G2_ST7528_ERC16064_F_4W_SW_SPI","U8G2_ST7528_ERC16064_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7528_ERC16064_F_4W_HW_SPI","U8G2_ST7528_ERC16064_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_EA_DOGM128_F_4W_SW_SPI","U8G2_ST7565_EA_DOGM128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_EA_DOGM128_F_4W_HW_SPI","U8G2_ST7565_EA_DOGM128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_64128N_F_4W_SW_SPI","U8G2_ST7565_64128N_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_64128N_F_4W_HW_SPI","U8G2_ST7565_64128N_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_EA_DOGM132_F_4W_SW_SPI","U8G2_ST7565_EA_DOGM132_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7565_EA_DOGM132_F_4W_HW_SPI","U8G2_ST7565_EA_DOGM132_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7565_ZOLEN_128X64_F_4W_SW_SPI","U8G2_ST7565_ZOLEN_128X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_ZOLEN_128X64_F_4W_HW_SPI","U8G2_ST7565_ZOLEN_128X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_LM6059_F_4W_SW_SPI","U8G2_ST7565_LM6059_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_LM6059_F_4W_HW_SPI","U8G2_ST7565_LM6059_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_KS0713_F_4W_SW_SPI","U8G2_ST7565_KS0713_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_KS0713_F_4W_HW_SPI","U8G2_ST7565_KS0713_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_LX12864_F_4W_SW_SPI","U8G2_ST7565_LX12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_LX12864_F_4W_HW_SPI","U8G2_ST7565_LX12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_ERC12864_F_4W_SW_SPI","U8G2_ST7565_ERC12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_ERC12864_F_4W_HW_SPI","U8G2_ST7565_ERC12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_ERC12864_ALT_F_4W_SW_SPI","U8G2_ST7565_ERC12864_ALT_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_ERC12864_ALT_F_4W_HW_SPI","U8G2_ST7565_ERC12864_ALT_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_NHD_C12832_F_4W_SW_SPI","U8G2_ST7565_NHD_C12832_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_NHD_C12832_F_4W_HW_SPI","U8G2_ST7565_NHD_C12832_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_NHD_C12864_F_4W_SW_SPI","U8G2_ST7565_NHD_C12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_NHD_C12864_F_4W_HW_SPI","U8G2_ST7565_NHD_C12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_JLX12864_F_4W_SW_SPI","U8G2_ST7565_JLX12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7565_JLX12864_F_4W_HW_SPI","U8G2_ST7565_JLX12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_PI_132X64_F_4W_SW_SPI","U8G2_ST7567_PI_132X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_PI_132X64_F_4W_HW_SPI","U8G2_ST7567_PI_132X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_JLX12864_F_4W_SW_SPI","U8G2_ST7567_JLX12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_JLX12864_F_4W_HW_SPI","U8G2_ST7567_JLX12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_OS12864_F_4W_SW_SPI","U8G2_ST7567_OS12864_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_OS12864_F_4W_HW_SPI","U8G2_ST7567_OS12864_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 7, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_ENH_DG128064_F_4W_SW_SPI","U8G2_ST7567_ENH_DG128064_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_ENH_DG128064_F_4W_HW_SPI","U8G2_ST7567_ENH_DG128064_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_ENH_DG128064I_F_4W_SW_SPI","U8G2_ST7567_ENH_DG128064I_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_ENH_DG128064I_F_4W_HW_SPI","U8G2_ST7567_ENH_DG128064I_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7567_64X32_F_HW_I2C","U8G2_ST7567_64X32_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7567_HEM6432_F_HW_I2C","U8G2_ST7567_HEM6432_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_ST7571_128X128_F_4W_SW_SPI","U8G2_ST7571_128X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7571_128X128_F_4W_HW_SPI","U8G2_ST7571_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7571_128X96_F_4W_SW_SPI","U8G2_ST7571_128X96_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7571_128X96_F_4W_HW_SPI","U8G2_ST7571_128X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7586S_ERC240160_F_4W_HW_SPI","U8G2_ST7586S_ERC240160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7586S_YMC240160_F_4W_HW_SPI","U8G2_ST7586S_YMC240160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX172104_F_4W_SW_SPI","U8G2_ST75256_JLX172104_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX172104_F_4W_HW_SPI","U8G2_ST75256_JLX172104_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX19296_F_4W_SW_SPI","U8G2_ST75256_JLX19296_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX19296_F_4W_HW_SPI","U8G2_ST75256_JLX19296_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256128_F_4W_SW_SPI","U8G2_ST75256_JLX256128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256128_F_4W_HW_SPI","U8G2_ST75256_JLX256128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_WO256X128_F_4W_SW_SPI","U8G2_ST75256_WO256X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_WO256X128_F_4W_HW_SPI","U8G2_ST75256_WO256X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256128_F_4W_SW_SPI","U8G2_ST75256_JLX256128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 9, /* data=*/ 8, /* cs=*/ 7, /* dc=*/ 6, /* reset=*/ 5);"],
			["U8G2_ST75256_JLX256128_F_4W_HW_SPI","U8G2_ST75256_JLX256128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 7, /* dc=*/ 6, /* reset=*/ 5);"],
			["U8G2_ST75256_JLX256160_F_4W_SW_SPI","U8G2_ST75256_JLX256160_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256160_F_4W_HW_SPI","U8G2_ST75256_JLX256160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256160M_F_4W_SW_SPI","U8G2_ST75256_JLX256160M_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256160M_F_4W_HW_SPI","U8G2_ST75256_JLX256160M_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256160_ALT_F_4W_SW_SPI","U8G2_ST75256_JLX256160_ALT_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX256160_ALT_F_4W_HW_SPI","U8G2_ST75256_JLX256160_ALT_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX240160_F_4W_SW_SPI","U8G2_ST75256_JLX240160_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX240160_F_4W_HW_SPI","U8G2_ST75256_JLX240160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75256_JLX25664_F_2ND_HW_I2C","U8G2_ST75256_JLX25664_F_2ND_HW_I2C u8g2(U8G2_R0, /* reset=*/ 8);"],
			["U8G2_ST75320_JLX320240_F_4W_SW_SPI","U8G2_ST75320_JLX320240_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST75320_JLX320240_F_4W_HW_SPI","U8G2_ST75320_JLX320240_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_NT7534_TG12864R_F_4W_SW_SPI","U8G2_NT7534_TG12864R_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_NT7534_TG12864R_F_4W_HW_SPI","U8G2_NT7534_TG12864R_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_ST7588_JLX12864_F_SW_I2C","U8G2_ST7588_JLX12864_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ 5);"],
			["U8G2_ST7588_JLX12864_F_HW_I2C","U8G2_ST7588_JLX12864_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ 5);"],
			["U8G2_IST3020_ERC19264_F_6800","U8G2_IST3020_ERC19264_F_6800 u8g2(U8G2_R0, 44, 43, 42, 41, 40, 39, 38, 37,  /*enable=*/ 28, /*cs=*/ 32, /*dc=*/ 30, /*reset=*/ 31);"],
			["U8G2_IST3020_ERC19264_F_8080","U8G2_IST3020_ERC19264_F_8080 u8g2(U8G2_R0, 44, 43, 42, 41, 40, 39, 38, 37,  /*enable=*/ 29, /*cs=*/ 32, /*dc=*/ 30, /*reset=*/ 31);"],
			["U8G2_IST3020_ERC19264_F_4W_SW_SPI","U8G2_IST3020_ERC19264_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_IST7920_128X128_F_4W_SW_SPI","U8G2_IST7920_128X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_IST7920_128X128_F_4W_HW_SPI","U8G2_IST7920_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_LC7981_160X80_F_6800","U8G2_LC7981_160X80_F_6800 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_LC7981_160X160_F_6800","U8G2_LC7981_160X160_F_6800 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_LC7981_240X128_F_6800","U8G2_LC7981_240X128_F_6800 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_LC7981_240X64_F_6800","U8G2_LC7981_240X64_F_6800 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 18, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_SED1520_122X32_F","U8G2_SED1520_122X32_F u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*dc=*/ A0, /*e1=*/ A3, /*e2=*/ A2, /* reset=*/  A4);"],
			["U8G2_T6963_240X128_F_8080","U8G2_T6963_240X128_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable/wr=*/ 17, /*cs/ce=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_T6963_256X64_F_8080","U8G2_T6963_256X64_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable/wr=*/ 17, /*cs/ce=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_T6963_160X80_F_8080","U8G2_T6963_160X80_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable/wr=*/ 17, /*cs/ce=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_T6963_128X64_F_8080","U8G2_T6963_128X64_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable/wr=*/ 17, /*cs/ce=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_T6963_128X64_ALT_F_8080","U8G2_T6963_128X64_ALT_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable/wr=*/ 17, /*cs/ce=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_SED1330_240X128_F_8080","U8G2_SED1330_240X128_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 17, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_SED1330_240X128_F_6800","U8G2_SED1330_240X128_F_6800 u8g2(U8G2_R0, 13, 11, 2, 3, 4, 5, 6, A4, /*enable=*/ 7, /*cs=*/ 10, /*dc=*/ 9, /*reset=*/ 8);"],
			["U8G2_RA8835_NHD_240X128_F_8080","U8G2_RA8835_NHD_240X128_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7, /*enable=*/ 17, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_RA8835_NHD_240X128_F_6800","U8G2_RA8835_NHD_240X128_F_6800 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7,  /*enable=*/ 17, /*cs=*/ 14, /*dc=*/ 15, /*reset=*/ 16);"],
			["U8G2_UC1601_128X32_F_4W_SW_SPI","U8G2_UC1601_128X32_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1601_128X64_F_4W_SW_SPI","U8G2_UC1601_128X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1604_JLX19264_F_4W_SW_SPI","U8G2_UC1604_JLX19264_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1604_JLX19264_F_4W_HW_SPI","U8G2_UC1604_JLX19264_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1608_ERC24064_F_4W_SW_SPI","U8G2_UC1608_ERC24064_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1608_DEM240064_F_4W_SW_SPI","U8G2_UC1608_DEM240064_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1608_ERC240120_F_4W_SW_SPI","U8G2_UC1608_ERC240120_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1608_240X128_F_4W_SW_SPI","U8G2_UC1608_240X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1610_EA_DOGXL160_F_4W_SW_SPI","U8G2_UC1610_EA_DOGXL160_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_UC1610_EA_DOGXL160_F_4W_HW_SPI","U8G2_UC1610_EA_DOGXL160_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/  U8X8_PIN_NONE);"],
			["U8G2_UC1611_EA_DOGM240_F_2ND_HW_I2C","U8G2_UC1611_EA_DOGM240_F_2ND_HW_I2C u8g2(U8G2_R0, /* reset=*/ 8);"],
			["U8G2_UC1611_EA_DOGM240_F_4W_SW_SPI","U8G2_UC1611_EA_DOGM240_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1611_EA_DOGXL240_F_2ND_HW_I2C","U8G2_UC1611_EA_DOGXL240_F_2ND_HW_I2C u8g2(U8G2_R0, /* reset=*/ 8);"],
			["U8G2_UC1611_EA_DOGXL240_F_4W_SW_SPI","U8G2_UC1611_EA_DOGXL240_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1611_EW50850_F_8080","U8G2_UC1611_EW50850_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7,  /*enable=*/ 18, /*cs=*/ 3, /*dc=*/ 16, /*reset=*/ 17);"],
			["U8G2_UC1611_CG160160_F_8080","U8G2_UC1611_CG160160_F_8080 u8g2(U8G2_R0, 8, 9, 10, 11, 4, 5, 6, 7,  /*enable=*/ 18, /*cs=*/ 3, /*dc=*/ 16, /*reset=*/ 17);"],
			["U8G2_UC1611_IDS4073_F_4W_SW_SPI","U8G2_UC1611_IDS4073_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1611_IDS4073_F_4W_HW_SPI","U8G2_UC1611_IDS4073_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1617_JLX128128_F_4W_SW_SPI","U8G2_UC1617_JLX128128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1617_JLX128128_F_4W_HW_SPI","U8G2_UC1617_JLX128128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1638_192X96_F_4W_SW_SPI","U8G2_UC1638_192X96_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1638_192X96_F_4W_HW_SPI","U8G2_UC1638_192X96_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_UC1638_192X96_F_SW_I2C","U8G2_UC1638_192X96_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* reset=*/ 8);"],
			["U8G2_SSD1606_172X72_F_4W_SW_SPI","U8G2_SSD1606_172X72_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1607_200X200_F_4W_SW_SPI","U8G2_SSD1607_200X200_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1607_GD_200X200_F_4W_SW_SPI","U8G2_SSD1607_GD_200X200_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_SSD1607_WS_200X200_F_4W_SW_SPI","U8G2_SSD1607_WS_200X200_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_IL3820_296X128_F_4W_SW_SPI","U8G2_IL3820_296X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_IL3820_V2_296X128_F_4W_SW_SPI","U8G2_IL3820_V2_296X128_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_MAX7219_64X8_F_4W_SW_SPI","U8G2_MAX7219_64X8_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_MAX7219_32X8_F_4W_SW_SPI","U8G2_MAX7219_32X8_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_MAX7219_8X8_F_4W_SW_SPI","U8G2_MAX7219_8X8_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 11, /* data=*/ 12, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ U8X8_PIN_NONE);"],
			["U8G2_LS013B7DH03_128X128_F_4W_HW_SPI","U8G2_LS013B7DH03_128X128_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ 8);"],
			["U8G2_LS027B7DH01_400X240_F_4W_HW_SPI","U8G2_LS027B7DH01_400X240_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ 8);"],
			["U8G2_LS027B7DH01_M0_400X240_F_4W_HW_SPI","U8G2_LS027B7DH01_M0_400X240_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ 8);"],
			["U8G2_LS013B7DH05_144X168_F_4W_HW_SPI","U8G2_LS013B7DH05_144X168_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ U8X8_PIN_NONE, /* reset=*/ 8);"],
			["U8G2_ST7511_AVD_320X240_F_8080","U8G2_ST7511_AVD_320X240_F_8080 u8g2(U8G2_R0, 13, 11, 2, 3, 4, 5, 6, A4, /*enable/WR=*/ 7, /*cs=*/ 10, /*dc=*/ 9, /*reset=*/ 8);"],
			["U8G2_S1D15721_240X64_F_4W_SW_SPI","U8G2_S1D15721_240X64_F_4W_SW_SPI u8g2(U8G2_R0, /* clock=*/ 13, /* data=*/ 11, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"],
			["U8G2_S1D15721_240X64_F_4W_HW_SPI","U8G2_S1D15721_240X64_F_4W_HW_SPI u8g2(U8G2_R0, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);"]	
	]), "format");		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)	
        .appendField(Blockly.Msg["OLED_DISPLAY_MODE_DEFAULT"])
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_ROTATE_NO_HORIZONTAL"],"U8G2_R0"], 
		[Blockly.Msg["OLED_ROTATE_90"],"U8G2_R1"], 
		[Blockly.Msg["OLED_ROTATE_180"],"U8G2_R2"],
		[Blockly.Msg["OLED_ROTATE_270"],"U8G2_R3"], 
		[Blockly.Msg["OLED_ROTATE_NO_HORIZONTAL_MIRROR"],"U8G2_MIRROR"], 
		[Blockly.Msg["OLED_ROTATE_NO_VERTICAL_MIRROR"],"U8G2_MIRROR_VERTICAL"]				
	]), "display");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)	
        .appendField(Blockly.Msg["OLED_UTF8_CHINESE"])
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_DISABLE"],"0"], 
		[Blockly.Msg["OLED_ENABLE"],"1"]			
	]), "utf8");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)	
        .appendField(Blockly.Msg["OLED_FONT_DEFAULT"])
        .appendField(new Blockly.FieldDropdown(opt), "font");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
 
 
  }
};


Blockly.Blocks['fu_oled_home'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_CURSOR_HOME"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 
  }
};

Blockly.Blocks['fu_oled_setContrast'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_CONTRAST"]);
    this.appendValueInput("value")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 
  }
};

Blockly.Blocks['fu_oled_setFont'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_FONT_SET"]);
    this.appendValueInput("font")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 this.setHelpUrl("https://github.com/olikraus/u8g2/wiki/fntlistall");
  }
};

Blockly.Blocks['fu_oled_setFont_chinese'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_FONT_SET_CHINESE"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		["u8g2_font_unifont_t_chinese1","u8g2_font_unifont_t_chinese1"],
		["u8g2_font_unifont_t_chinese2","u8g2_font_unifont_t_chinese2"],
		["u8g2_font_unifont_t_chinese3","u8g2_font_unifont_t_chinese3"],
		["u8g2_font_wqy12_t_chinese1","u8g2_font_wqy12_t_chinese1"],
		["u8g2_font_wqy12_t_chinese2","u8g2_font_wqy12_t_chinese2"],
		["u8g2_font_wqy12_t_chinese3","u8g2_font_wqy12_t_chinese3"],
		["u8g2_font_wqy13_t_chinese1","u8g2_font_wqy13_t_chinese1"],
		["u8g2_font_wqy13_t_chinese2","u8g2_font_wqy13_t_chinese2"],
		["u8g2_font_wqy13_t_chinese3","u8g2_font_wqy13_t_chinese3"],
		["u8g2_font_wqy14_t_chinese1","u8g2_font_wqy14_t_chinese1"],
		["u8g2_font_wqy14_t_chinese2","u8g2_font_wqy14_t_chinese2"],
		["u8g2_font_wqy14_t_chinese3","u8g2_font_wqy14_t_chinese3"],
		["u8g2_font_wqy15_t_chinese1","u8g2_font_wqy15_t_chinese1"],
		["u8g2_font_wqy15_t_chinese2","u8g2_font_wqy15_t_chinese2"],
		["u8g2_font_wqy15_t_chinese3","u8g2_font_wqy15_t_chinese3"],
		["u8g2_font_wqy16_t_chinese1","u8g2_font_wqy16_t_chinese1"],
		["u8g2_font_wqy16_t_chinese2","u8g2_font_wqy16_t_chinese2"],
		["u8g2_font_wqy16_t_chinese3","u8g2_font_wqy16_t_chinese3"]		
	]), "font");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 this.setHelpUrl("https://github.com/olikraus/u8g2/wiki/fntlistall");
  }
};

Blockly.Blocks['fu_oled_setFont_icon'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_FONT_SET_IMAGE"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
			["u8g2_font_6x12_t_symbols","u8g2_font_6x12_t_symbols"],
			["u8g2_font_7x13_t_symbols","u8g2_font_7x13_t_symbols"],
			["u8g2_font_8x13_t_symbols","u8g2_font_8x13_t_symbols"],
			["u8g2_font_9x15_t_symbols","u8g2_font_9x15_t_symbols"],
			["u8g2_font_battery19_tn","u8g2_font_battery19_tn"],
			["u8g2_font_cu12_h_symbols","u8g2_font_cu12_h_symbols"],
			["u8g2_font_cu12_t_symbols","u8g2_font_cu12_t_symbols"],
			["u8g2_font_emoticons21_tr","u8g2_font_emoticons21_tr"],
			["u8g2_font_iconquadpix_m_all","u8g2_font_iconquadpix_m_all"],
			["u8g2_font_m2icon_5_tf","u8g2_font_m2icon_5_tf"],
			["u8g2_font_m2icon_7_tf","u8g2_font_m2icon_7_tf"],
			["u8g2_font_m2icon_9_tf","u8g2_font_m2icon_9_tf"],
			["u8g2_font_open_iconic_all_1x_t","u8g2_font_open_iconic_all_1x_t"],
			["u8g2_font_open_iconic_all_2x_t","u8g2_font_open_iconic_all_2x_t"],
			["u8g2_font_open_iconic_all_4x_t","u8g2_font_open_iconic_all_4x_t"],
			["u8g2_font_open_iconic_all_6x_t","u8g2_font_open_iconic_all_6x_t"],
			["u8g2_font_open_iconic_all_8x_t","u8g2_font_open_iconic_all_8x_t"],
			["u8g2_font_open_iconic_app_1x_t","u8g2_font_open_iconic_app_1x_t"],
			["u8g2_font_open_iconic_app_2x_t","u8g2_font_open_iconic_app_2x_t"],
			["u8g2_font_open_iconic_app_4x_t","u8g2_font_open_iconic_app_4x_t"],
			["u8g2_font_open_iconic_app_6x_t","u8g2_font_open_iconic_app_6x_t"],
			["u8g2_font_open_iconic_app_8x_t","u8g2_font_open_iconic_app_8x_t"],
			["u8g2_font_open_iconic_arrow_1x_t","u8g2_font_open_iconic_arrow_1x_t"],
			["u8g2_font_open_iconic_arrow_2x_t","u8g2_font_open_iconic_arrow_2x_t"],
			["u8g2_font_open_iconic_arrow_4x_t","u8g2_font_open_iconic_arrow_4x_t"],
			["u8g2_font_open_iconic_arrow_6x_t","u8g2_font_open_iconic_arrow_6x_t"],
			["u8g2_font_open_iconic_arrow_8x_t","u8g2_font_open_iconic_arrow_8x_t"],
			["u8g2_font_open_iconic_check_1x_t","u8g2_font_open_iconic_check_1x_t"],
			["u8g2_font_open_iconic_check_2x_t","u8g2_font_open_iconic_check_2x_t"],
			["u8g2_font_open_iconic_check_4x_t","u8g2_font_open_iconic_check_4x_t"],
			["u8g2_font_open_iconic_check_6x_t","u8g2_font_open_iconic_check_6x_t"],
			["u8g2_font_open_iconic_check_8x_t","u8g2_font_open_iconic_check_8x_t"],
			["u8g2_font_open_iconic_email_1x_t","u8g2_font_open_iconic_email_1x_t"],
			["u8g2_font_open_iconic_email_2x_t","u8g2_font_open_iconic_email_2x_t"],
			["u8g2_font_open_iconic_email_4x_t","u8g2_font_open_iconic_email_4x_t"],
			["u8g2_font_open_iconic_email_6x_t","u8g2_font_open_iconic_email_6x_t"],
			["u8g2_font_open_iconic_email_8x_t","u8g2_font_open_iconic_email_8x_t"],
			["u8g2_font_open_iconic_embedded_1x_t","u8g2_font_open_iconic_embedded_1x_t"],
			["u8g2_font_open_iconic_embedded_2x_t","u8g2_font_open_iconic_embedded_2x_t"],
			["u8g2_font_open_iconic_embedded_4x_t","u8g2_font_open_iconic_embedded_4x_t"],
			["u8g2_font_open_iconic_embedded_6x_t","u8g2_font_open_iconic_embedded_6x_t"],
			["u8g2_font_open_iconic_embedded_8x_t","u8g2_font_open_iconic_embedded_8x_t"],
			["u8g2_font_open_iconic_gui_1x","u8g2_font_open_iconic_gui_1x"],
			["u8g2_font_open_iconic_gui_1x_t","u8g2_font_open_iconic_gui_1x_t"],
			["u8g2_font_open_iconic_gui_2x_t","u8g2_font_open_iconic_gui_2x_t"],
			["u8g2_font_open_iconic_gui_4x_t","u8g2_font_open_iconic_gui_4x_t"],
			["u8g2_font_open_iconic_gui_6x_t","u8g2_font_open_iconic_gui_6x_t"],
			["u8g2_font_open_iconic_gui_8x_t","u8g2_font_open_iconic_gui_8x_t"],
			["u8g2_font_open_iconic_human_1x_t","u8g2_font_open_iconic_human_1x_t"],
			["u8g2_font_open_iconic_human_2x_t","u8g2_font_open_iconic_human_2x_t"],
			["u8g2_font_open_iconic_human_4x_t","u8g2_font_open_iconic_human_4x_t"],
			["u8g2_font_open_iconic_human_6x_t","u8g2_font_open_iconic_human_6x_t"],
			["u8g2_font_open_iconic_human_8x_t","u8g2_font_open_iconic_human_8x_t"],
			["u8g2_font_open_iconic_mime_1x_t","u8g2_font_open_iconic_mime_1x_t"],
			["u8g2_font_open_iconic_mime_2x_t","u8g2_font_open_iconic_mime_2x_t"],
			["u8g2_font_open_iconic_mime_4x_t","u8g2_font_open_iconic_mime_4x_t"],
			["u8g2_font_open_iconic_mime_6x_t","u8g2_font_open_iconic_mime_6x_t"],
			["u8g2_font_open_iconic_mime_8x_t","u8g2_font_open_iconic_mime_8x_t"],
			["u8g2_font_open_iconic_other_1x_t","u8g2_font_open_iconic_other_1x_t"],
			["u8g2_font_open_iconic_other_2x_t","u8g2_font_open_iconic_other_2x_t"],
			["u8g2_font_open_iconic_other_4x_t","u8g2_font_open_iconic_other_4x_t"],
			["u8g2_font_open_iconic_other_6x_t","u8g2_font_open_iconic_other_6x_t"],
			["u8g2_font_open_iconic_other_8x_t","u8g2_font_open_iconic_other_8x_t"],
			["u8g2_font_open_iconic_play_1x_t","u8g2_font_open_iconic_play_1x_t"],
			["u8g2_font_open_iconic_play_2x_t","u8g2_font_open_iconic_play_2x_t"],
			["u8g2_font_open_iconic_play_4x_t","u8g2_font_open_iconic_play_4x_t"],
			["u8g2_font_open_iconic_play_6x_t","u8g2_font_open_iconic_play_6x_t"],
			["u8g2_font_open_iconic_play_8x_t","u8g2_font_open_iconic_play_8x_t"],
			["u8g2_font_open_iconic_text_1x_t","u8g2_font_open_iconic_text_1x_t"],
			["u8g2_font_open_iconic_text_2x_t","u8g2_font_open_iconic_text_2x_t"],
			["u8g2_font_open_iconic_text_4x_t","u8g2_font_open_iconic_text_4x_t"],
			["u8g2_font_open_iconic_text_6x_t","u8g2_font_open_iconic_text_6x_t"],
			["u8g2_font_open_iconic_text_8x_t","u8g2_font_open_iconic_text_8x_t"],
			["u8g2_font_open_iconic_thing_1x_t","u8g2_font_open_iconic_thing_1x_t"],
			["u8g2_font_open_iconic_thing_2x_t","u8g2_font_open_iconic_thing_2x_t"],
			["u8g2_font_open_iconic_thing_4x_t","u8g2_font_open_iconic_thing_4x_t"],
			["u8g2_font_open_iconic_thing_6x_t","u8g2_font_open_iconic_thing_6x_t"],
			["u8g2_font_open_iconic_thing_8x_t","u8g2_font_open_iconic_thing_8x_t"],
			["u8g2_font_open_iconic_thing_8x8","u8g2_font_open_iconic_thing_8x8"],
			["u8g2_font_open_iconic_weather_1x_t","u8g2_font_open_iconic_weather_1x_t"],
			["u8g2_font_open_iconic_weather_2x_t","u8g2_font_open_iconic_weather_2x_t"],
			["u8g2_font_open_iconic_weather_4x_t","u8g2_font_open_iconic_weather_4x_t"],
			["u8g2_font_open_iconic_weather_6x_t","u8g2_font_open_iconic_weather_6x_t"],
			["u8g2_font_open_iconic_weather_8x_t","u8g2_font_open_iconic_weather_8x_t"],
			["u8g2_font_open_iconic_www_1x_t","u8g2_font_open_iconic_www_1x_t"],
			["u8g2_font_open_iconic_www_2x_t","u8g2_font_open_iconic_www_2x_t"],
			["u8g2_font_open_iconic_www_4x_t","u8g2_font_open_iconic_www_4x_t"],
			["u8g2_font_open_iconic_www_6x_t","u8g2_font_open_iconic_www_6x_t"],
			["u8g2_font_open_iconic_www_8x_t","u8g2_font_open_iconic_www_8x_t"],
			["u8g2_font_siji_t_6x10","u8g2_font_siji_t_6x10"],
			["u8g2_font_streamline_all","u8g2_font_streamline_all"],
			["u8g2_font_streamline_building_real_estate","u8g2_font_streamline_building_real_estate"],
			["u8g2_font_streamline_business","u8g2_font_streamline_business"],
			["u8g2_font_streamline_coding_apps_websites","u8g2_font_streamline_coding_apps_websites"],
			["u8g2_font_streamline_computers_devices_electronics","u8g2_font_streamline_computers_devices_electronics"],
			["u8g2_font_streamline_content_files","u8g2_font_streamline_content_files"],
			["u8g2_font_streamline_design","u8g2_font_streamline_design"],
			["u8g2_font_streamline_ecology","u8g2_font_streamline_ecology"],
			["u8g2_font_streamline_email","u8g2_font_streamline_email"],
			["u8g2_font_streamline_entertainment_events_hobbies","u8g2_font_streamline_entertainment_events_hobbies"],
			["u8g2_font_streamline_food_drink","u8g2_font_streamline_food_drink"],
			["u8g2_font_streamline_hand_signs","u8g2_font_streamline_hand_signs"],
			["u8g2_font_streamline_health_beauty","u8g2_font_streamline_health_beauty"],
			["u8g2_font_streamline_interface_essential_action","u8g2_font_streamline_interface_essential_action"],
			["u8g2_font_streamline_interface_essential_alert","u8g2_font_streamline_interface_essential_alert"],
			["u8g2_font_streamline_interface_essential_audio","u8g2_font_streamline_interface_essential_audio"],
			["u8g2_font_streamline_interface_essential_calendar","u8g2_font_streamline_interface_essential_calendar"],
			["u8g2_font_streamline_interface_essential_chart","u8g2_font_streamline_interface_essential_chart"],
			["u8g2_font_streamline_interface_essential_circle_triangle","u8g2_font_streamline_interface_essential_circle_triangle"],
			["u8g2_font_streamline_interface_essential_cog","u8g2_font_streamline_interface_essential_cog"],
			["u8g2_font_streamline_interface_essential_cursor","u8g2_font_streamline_interface_essential_cursor"],
			["u8g2_font_streamline_interface_essential_dial_pad","u8g2_font_streamline_interface_essential_dial_pad"],
			["u8g2_font_streamline_interface_essential_edit","u8g2_font_streamline_interface_essential_edit"],
			["u8g2_font_streamline_interface_essential_expand_shrink","u8g2_font_streamline_interface_essential_expand_shrink"],
			["u8g2_font_streamline_interface_essential_eye","u8g2_font_streamline_interface_essential_eye"],
			["u8g2_font_streamline_interface_essential_file","u8g2_font_streamline_interface_essential_file"],
			["u8g2_font_streamline_interface_essential_help","u8g2_font_streamline_interface_essential_help"],
			["u8g2_font_streamline_interface_essential_hierarchy","u8g2_font_streamline_interface_essential_hierarchy"],
			["u8g2_font_streamline_interface_essential_home_menu","u8g2_font_streamline_interface_essential_home_menu"],
			["u8g2_font_streamline_interface_essential_id","u8g2_font_streamline_interface_essential_id"],
			["u8g2_font_streamline_interface_essential_key_lock","u8g2_font_streamline_interface_essential_key_lock"],
			["u8g2_font_streamline_interface_essential_link","u8g2_font_streamline_interface_essential_link"],
			["u8g2_font_streamline_interface_essential_loading","u8g2_font_streamline_interface_essential_loading"],
			["u8g2_font_streamline_interface_essential_login","u8g2_font_streamline_interface_essential_login"],
			["u8g2_font_streamline_interface_essential_other","u8g2_font_streamline_interface_essential_other"],
			["u8g2_font_streamline_interface_essential_paginate","u8g2_font_streamline_interface_essential_paginate"],
			["u8g2_font_streamline_interface_essential_search","u8g2_font_streamline_interface_essential_search"],
			["u8g2_font_streamline_interface_essential_setting","u8g2_font_streamline_interface_essential_setting"],
			["u8g2_font_streamline_interface_essential_share","u8g2_font_streamline_interface_essential_share"],
			["u8g2_font_streamline_interface_essential_text","u8g2_font_streamline_interface_essential_text"],
			["u8g2_font_streamline_interface_essential_wifi","u8g2_font_streamline_interface_essential_wifi"],
			["u8g2_font_streamline_interface_essential_zoom","u8g2_font_streamline_interface_essential_zoom"],
			["u8g2_font_streamline_internet_network","u8g2_font_streamline_internet_network"],
			["u8g2_font_streamline_logo","u8g2_font_streamline_logo"],
			["u8g2_font_streamline_map_navigation","u8g2_font_streamline_map_navigation"],
			["u8g2_font_streamline_money_payments","u8g2_font_streamline_money_payments"],
			["u8g2_font_streamline_music_audio","u8g2_font_streamline_music_audio"],
			["u8g2_font_streamline_pet_animals","u8g2_font_streamline_pet_animals"],
			["u8g2_font_streamline_phone","u8g2_font_streamline_phone"],
			["u8g2_font_streamline_photography","u8g2_font_streamline_photography"],
			["u8g2_font_streamline_romance","u8g2_font_streamline_romance"],
			["u8g2_font_streamline_school_science","u8g2_font_streamline_school_science"],
			["u8g2_font_streamline_shopping_shipping","u8g2_font_streamline_shopping_shipping"],
			["u8g2_font_streamline_social_rewards","u8g2_font_streamline_social_rewards"],
			["u8g2_font_streamline_technology","u8g2_font_streamline_technology"],
			["u8g2_font_streamline_transportation","u8g2_font_streamline_transportation"],
			["u8g2_font_streamline_travel_wayfinding","u8g2_font_streamline_travel_wayfinding"],
			["u8g2_font_streamline_users","u8g2_font_streamline_users"],
			["u8g2_font_streamline_video_movies","u8g2_font_streamline_video_movies"],
			["u8g2_font_streamline_weather","u8g2_font_streamline_weather"],
			["u8g2_font_twelvedings_t_all","u8g2_font_twelvedings_t_all"],
			["u8g2_font_unifont_t_75","u8g2_font_unifont_t_75"],
			["u8g2_font_unifont_t_76","u8g2_font_unifont_t_76"],
			["u8g2_font_unifont_t_77","u8g2_font_unifont_t_77"],
			["u8g2_font_unifont_t_78_79","u8g2_font_unifont_t_78_79"],
			["u8g2_font_unifont_t_animals","u8g2_font_unifont_t_animals"],
			["u8g2_font_unifont_t_cards","u8g2_font_unifont_t_cards"],
			["u8g2_font_unifont_t_domino","u8g2_font_unifont_t_domino"],
			["u8g2_font_unifont_t_emoticons","u8g2_font_unifont_t_emoticons"],
			["u8g2_font_unifont_t_symbols","u8g2_font_unifont_t_symbols"],
			["u8g2_font_unifont_t_weather","u8g2_font_unifont_t_weather"]
	]), "font");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 this.setHelpUrl("https://github.com/olikraus/u8g2/wiki/fntgrpiconic");
  }
};

Blockly.Blocks['fu_oled_setFont_all'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_FONT_SET"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown(opt), "font");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 this.setHelpUrl("https://github.com/olikraus/u8g2/wiki/fntlistall");
  }
};

Blockly.Blocks['fu_oled_setFontDirection'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
		.appendField("OLED")
        .appendField(Blockly.Msg["OLED_FONT_DRAW_DIRECTION"]);		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_DISPLAY_LEFT_RIGHT"],"0"], 
		[Blockly.Msg["OLED_DISPLAY_TOP_BOTTOM"],"1"], 
		[Blockly.Msg["OLED_DISPLAY_RIGHT_LEFT"],"2"],
		[Blockly.Msg["OLED_DISPLAY_BOTTOM_TOP"],"3"]
	]), "display");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 
  }
};

Blockly.Blocks['fu_oled_setDrawColor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
		.appendField(Blockly.Msg["OLED_DRAW_COLOR"]);		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_DRAW_YANG"],"1"], 
		[Blockly.Msg["OLED_DRAW_YIN"],"0"]			
	]), "mode");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 
  }
};

Blockly.Blocks['fu_oled_setDisplayRotation'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
		.appendField(Blockly.Msg["OLED_DISPLAY_MODE"]);		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_ROTATE_NO_HORIZONTAL"],"U8G2_R0"], 
		[Blockly.Msg["OLED_ROTATE_90"],"U8G2_R1"], 
		[Blockly.Msg["OLED_ROTATE_180"],"U8G2_R2"],
		[Blockly.Msg["OLED_ROTATE_270"],"U8G2_R3"], 
		[Blockly.Msg["OLED_ROTATE_NO_HORIZONTAL_MIRROR"],"U8G2_MIRROR"], 
		[Blockly.Msg["OLED_ROTATE_NO_VERTICAL_MIRROR"],"U8G2_MIRROR_VERTICAL"]				
	]), "display");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 
  }
};

Blockly.Blocks['fu_oled_setPowerSave'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
		.appendField(Blockly.Msg["OLED_SAVE_POWER"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_DISABLE"],"0"], 
		[Blockly.Msg["OLED_ENABLE"],"1"]			
	]), "power");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 
  }
};

Blockly.Blocks['fu_oled_clear'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_CLEAR"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 
 
  }
};

Blockly.Blocks['fu_oled_sendBuffer'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_BUFFER"]);
    this.appendStatementInput("draw")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 
 
  }
};

Blockly.Blocks['fu_oled_nextPage'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW"]);
    this.appendStatementInput("draw")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 
 
  }
};

Blockly.Blocks['fu_oled_drawStr'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_TEXT_ENGLISH_NUMBER"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("str")
        .setCheck(null)
        .appendField(Blockly.Msg["OLED_TEXT"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(70);
 
 
  }
};

Blockly.Blocks['fu_oled_drawFont'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_LOCAL_TTF"]);
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg["OLED_NAME"])
      .appendField(new Blockly.FieldDropdown([
		["Abadi MT","Abadi MT"],
		["Agency FB","Agency FB"],
		["Aharoni Bold","Aharoni Bold"],
		["Aldhabi","Aldhabi"],
		["Algerian","Algerian"],
		["Almanac MT","Almanac MT"],
		["American Uncial","American Uncial"],
		["Andale Mono","Andale Mono"],
		["Andalus","Andalus"],
		["Andy","Andy"],
		["Angsana New","Angsana New"],
		["AngsanaUPC","AngsanaUPC"],
		["Aparajita","Aparajita"],
		["Arabic Transparent","Arabic Transparent"],
		["Arabic Typesetting","Arabic Typesetting"],
		["Arial","Arial"],
		["Arial Black","Arial Black"],
		["Arial Narrow","Arial Narrow"],
		["Arial Narrow Special","Arial Narrow Special"],
		["Arial Rounded MT","Arial Rounded MT"],
		["Arial Special","Arial Special"],
		["Arial Unicode MS","Arial Unicode MS"],
		["Augsburger Initials","Augsburger Initials"],
		["Avenir Next LT Pro","Avenir Next LT Pro"],
		["Bahnschrift","Bahnschrift"],
		["Baskerville Old Face","Baskerville Old Face"],
		["Batang & BatangChe","Batang & BatangChe"],
		["Bauhaus 93","Bauhaus 93"],
		["Beesknees ITC","Beesknees ITC"],
		["Bell MT","Bell MT"],
		["Bembo","Bembo"],
		["Berlin Sans FB","Berlin Sans FB"],
		["Bernard MT Condensed","Bernard MT Condensed"],
		["Bickley Script","Bickley Script"],
		["Biome","Biome"],
		["BIZ UDGothic","BIZ UDGothic"],
		["BIZ UDMincho Medium","BIZ UDMincho Medium"],
		["Blackadder ITC","Blackadder ITC"],
		["Bodoni MT","Bodoni MT"],
		["Bodoni MT Condensed","Bodoni MT Condensed"],
		["Bon Apetit MT","Bon Apetit MT"],
		["Book Antiqua","Book Antiqua"],
		["Bookman Old Style","Bookman Old Style"],
		["Bookshelf Symbol","Bookshelf Symbol"],
		["Bradley Hand ITC","Bradley Hand ITC"],
		["Braggadocio","Braggadocio"],
		["BriemScript","BriemScript"],
		["Britannic Bold","Britannic Bold"],
		["Broadway","Broadway"],
		["Browallia New","Browallia New"],
		["BrowalliaUPC","BrowalliaUPC"],
		["Brush Script MT","Brush Script MT"],
		["Calibri","Calibri"],
		["Californian FB","Californian FB"],
		["Calisto MT","Calisto MT"],
		["Cambria","Cambria"],
		["Cambria Math","Cambria Math"],
		["Candara","Candara"],
		["Cariadings","Cariadings"],
		["Castellar","Castellar"],
		["Cavolini","Cavolini"],
		["Centaur","Centaur"],
		["Century","Century"],
		["Century Gothic","Century Gothic"],
		["Century Schoolbook","Century Schoolbook"],
		["Chiller","Chiller"],
		["Colonna MT","Colonna MT"],
		["Comic Sans MS","Comic Sans MS"],
		["Consolas","Consolas"],
		["Constantia","Constantia"],
		["Contemporary Brush","Contemporary Brush"],
		["Cooper Black","Cooper Black"],
		["Copperplate Gothic","Copperplate Gothic"],
		["Corbel","Corbel"],
		["Cordia New","Cordia New"],
		["CordiaUPC","CordiaUPC"],
		["Courier New","Courier New"],
		["Curlz MT","Curlz MT"],
		["Dante","Dante"],
		["DaunPenh","DaunPenh"],
		["David","David"],
		["Daytona","Daytona"],
		["Desdemona","Desdemona"],
		["DFKai-SB","DFKai-SB"],
		["DilleniaUPC","DilleniaUPC"],
		["Directions MT","Directions MT"],
		["DokChampa","DokChampa"],
		["Dotum & DotumChe","Dotum & DotumChe"],
		["Ebrima","Ebrima"],
		["Eckmann","Eckmann"],
		["Edda","Edda"],
		["Edwardian Script ITC","Edwardian Script ITC"],
		["Elephant","Elephant"],
		["Engravers MT","Engravers MT"],
		["Enviro","Enviro"],
		["Eras ITC","Eras ITC"],
		["Estrangelo Edessa","Estrangelo Edessa"],
		["EucrosiaUPC","EucrosiaUPC"],
		["Euphemia","Euphemia"],
		["Eurostile","Eurostile"],
		["FangSong","FangSong"],
		["Felix Titling","Felix Titling"],
		["Fine Hand","Fine Hand"],
		["Fixed Miriam Transparent","Fixed Miriam Transparent"],
		["Flexure","Flexure"],
		["Footlight MT","Footlight MT"],
		["Forte","Forte"],
		["Franklin Gothic","Franklin Gothic"],
		["Franklin Gothic Medium","Franklin Gothic Medium"],
		["FrankRuehl","FrankRuehl"],
		["FreesiaUPC","FreesiaUPC"],
		["Freestyle Script","Freestyle Script"],
		["French Script MT","French Script MT"],
		["Futura","Futura"],
		["Gabriola","Gabriola"],
		["Gadugi","Gadugi"],
		["Garamond","Garamond"],
		["Garamond MT","Garamond MT"],
		["Gautami","Gautami"],
		["Georgia","Georgia"],
		["Georgia Ref","Georgia Ref"],
		["Gigi","Gigi"],
		["Gill Sans MT","Gill Sans MT"],
		["Gill Sans MT Condensed","Gill Sans MT Condensed"],
		["Gisha","Gisha"],
		["Gloucester","Gloucester"],
		["Goudy Old Style","Goudy Old Style"],
		["Goudy Stout","Goudy Stout"],
		["Gradl","Gradl"],
		["Grotesque","Grotesque"],
		["Gulim & GulimChe","Gulim & GulimChe"],
		["Gungsuh & GungsuhChe","Gungsuh & GungsuhChe"],
		["Hadassah Friedlaender","Hadassah Friedlaender"],
		["Haettenschweiler","Haettenschweiler"],
		["Harlow Solid Italic","Harlow Solid Italic"],
		["Harrington","Harrington"],
		["HGGothicE","HGGothicE"],
		["HGMinchoE","HGMinchoE"],
		["HGSoeiKakugothicUB","HGSoeiKakugothicUB"],
		["High Tower Text","High Tower Text"],
		["Holidays MT","Holidays MT"],
		["HoloLens MDL2 Assets","HoloLens MDL2 Assets"],
		["Impact","Impact"],
		["Imprint MT Shadow","Imprint MT Shadow"],
		["Informal Roman","Informal Roman"],
		["IrisUPC","IrisUPC"],
		["Iskoola Pota","Iskoola Pota"],
		["JasmineUPC","JasmineUPC"],
		["Javanese Text","Javanese Text"],
		["Jokerman","Jokerman"],
		["Juice ITC","Juice ITC"],
		["KaiTi","KaiTi"],
		["Kalinga","Kalinga"],
		["Kartika","Kartika"],
		["Keystrokes MT","Keystrokes MT"],
		["Khmer UI","Khmer UI"],
		["Kino MT","Kino MT"],
		["KodchiangUPC","KodchiangUPC"],
		["Kokila","Kokila"],
		["Kristen ITC","Kristen ITC"],
		["Kunstler Script","Kunstler Script"],
		["Lao UI","Lao UI"],
		["Latha","Latha"],
		["LCD","LCD"],
		["Leelawadee","Leelawadee"],
		["Levenim MT","Levenim MT"],
		["LilyUPC","LilyUPC"],
		["Lucida Blackletter","Lucida Blackletter"],
		["Lucida Bright","Lucida Bright"],
		["Lucida Bright Math","Lucida Bright Math"],
		["Lucida Calligraphy","Lucida Calligraphy"],
		["Lucida Console","Lucida Console"],
		["Lucida Fax","Lucida Fax"],
		["Lucida Handwriting","Lucida Handwriting"],
		["Lucida Sans","Lucida Sans"],
		["Lucida Sans Typewriter","Lucida Sans Typewriter"],
		["Lucida Sans Unicode","Lucida Sans Unicode"],
		["Magneto","Magneto"],
		["Maiandra GD","Maiandra GD"],
		["Malgun Gothic","Malgun Gothic"],
		["Mangal","Mangal"],
		["Map Symbols","Map Symbols"],
		["Marlett","Marlett"],
		["Matisse ITC","Matisse ITC"],
		["Matura MT Script Capitals","Matura MT Script Capitals"],
		["McZee","McZee"],
		["Mead Bold","Mead Bold"],
		["Meiryo","Meiryo"],
		["Mercurius Script MT Bold","Mercurius Script MT Bold"],
		["Microsoft GothicNeo","Microsoft GothicNeo"],
		["Microsoft Himalaya","Microsoft Himalaya"],
		["Microsoft JhengHei","Microsoft JhengHei"],
		["Microsoft JhengHei UI","Microsoft JhengHei UI"],
		["Microsoft New Tai Lue","Microsoft New Tai Lue"],
		["Microsoft PhagsPa","Microsoft PhagsPa"],
		["Microsoft Sans Serif","Microsoft Sans Serif"],
		["Microsoft Tai Le","Microsoft Tai Le"],
		["Microsoft Uighur","Microsoft Uighur"],
		["Microsoft YaHei","Microsoft YaHei"],
		["Microsoft YaHei UI","Microsoft YaHei UI"],
		["Microsoft Yi Baiti","Microsoft Yi Baiti"],
		["MingLiU","MingLiU"],
		["MingLiU_HKSCS","MingLiU_HKSCS"],
		["MingLiU_HKSCS-ExtB","MingLiU_HKSCS-ExtB"],
		["MingLiU-ExtB","MingLiU-ExtB"],
		["Minion Web","Minion Web"],
		["Minion Web","Minion Web"],
		["Miriam","Miriam"],
		["Miriam Fixed","Miriam Fixed"],
		["Mistral","Mistral"],
		["Modern Love","Modern Love"],
		["Modern No. 20","Modern No. 20"],
		["Mongolian Baiti","Mongolian Baiti"],
		["Monotype Corsiva","Monotype Corsiva"],
		["Monotype Sorts","Monotype Sorts"],
		["Monotype.com","Monotype.com"],
		["MoolBoran","MoolBoran"],
		["MS Gothic","MS Gothic"],
		["MS LineDraw","MS LineDraw"],
		["MS Mincho","MS Mincho"],
		["MS Outlook","MS Outlook"],
		["MS PGothic","MS PGothic"],
		["MS PMincho","MS PMincho"],
		["MS Reference","MS Reference"],
		["MS UI Gothic","MS UI Gothic"],
		["MT Extra","MT Extra"],
		["MV Boli","MV Boli"],
		["Myanmar Text","Myanmar Text"],
		["Narkisim","Narkisim"],
		["New Caledonia","New Caledonia"],
		["News Gothic MT","News Gothic MT"],
		["Niagara","Niagara"],
		["Nirmala UI","Nirmala UI"],
		["NSimSun","NSimSun"],
		["Nyala","Nyala"],
		["OCR A Extended","OCR A Extended"],
		["OCRB","OCRB"],
		["OCR-B-Digits","OCR-B-Digits"],
		["Old English Text MT","Old English Text MT"],
		["Onyx","Onyx"],
		["Palace Script MT","Palace Script MT"],
		["Palatino Linotype","Palatino Linotype"],
		["Papyrus","Papyrus"],
		["Parade","Parade"],
		["Pellipsehment","Pellipsehment"],
		["Parties MT","Parties MT"],
		["Peignot Medium","Peignot Medium"],
		["Pepita MT","Pepita MT"],
		["Perpetua","Perpetua"],
		["Perpetua Titling MT","Perpetua Titling MT"],
		["Placard Condensed","Placard Condensed"],
		["Plantagenet Cherokee","Plantagenet Cherokee"],
		["Playbill","Playbill"],
		["PMingLiU","PMingLiU"],
		["PMingLiU-ExtB","PMingLiU-ExtB"],
		["Poor Richard","Poor Richard"],
		["Posterama","Posterama"],
		["Pristina","Pristina"],
		["Quire Sans","Quire Sans"],
		["Raavi","Raavi"],
		["Rage Italic","Rage Italic"],
		["Ransom","Ransom"],
		["Ravie","Ravie"],
		["RefSpecialty","RefSpecialty"],
		["Rockwell","Rockwell"],
		["Rockwell Nova","Rockwell Nova"],
		["Rod","Rod"],
		["Runic MT Condensed","Runic MT Condensed"],
		["Sabon Next LT","Sabon Next LT"],
		["Sagona","Sagona"],
		["Sakkal Majalla","Sakkal Majalla"],
		["Script MT Bold","Script MT Bold"],
		["Segoe Chess","Segoe Chess"],
		["Segoe Print","Segoe Print"],
		["Segoe Script","Segoe Script"],
		["Segoe UI","Segoe UI"],
		["Segoe UI Symbol","Segoe UI Symbol"],
		["Selawik","Selawik"],
		["Shonar Bangla","Shonar Bangla"],
		["Showcard Gothic","Showcard Gothic"],
		["Shruti","Shruti"],
		["Signs MT","Signs MT"],
		["SimHei","SimHei"],
		["Simplified Arabic Fixed","Simplified Arabic Fixed"],
		["SimSun","SimSun"],
		["SimSun-ExtB","SimSun-ExtB"],
		["Sitka","Sitka"],
		["Snap ITC","Snap ITC"],
		["Sports MT","Sports MT"],
		["STCaiyun","STCaiyun"],
		["Stencil","Stencil"],
		["STFangsong","STFangsong"],
		["STHupo","STHupo"],
		["STKaiti","STKaiti"],
		["Stop","Stop"],
		["STXihei","STXihei"],
		["STXingkai","STXingkai"],
		["STXinwei","STXinwei"],
		["STZhongsong","STZhongsong"],
		["Sylfaen","Sylfaen"],
		["Symbol","Symbol"],
		["Tahoma","Tahoma"],
		["Temp Installer Font","Temp Installer Font"],
		["Tempo Grunge","Tempo Grunge"],
		["Tempus Sans ITC","Tempus Sans ITC"],
		["The Hand","The Hand"],
		["The Serif Hand","The Serif Hand"],
		["Times New Roman","Times New Roman"],
		["Times New Roman Special","Times New Roman Special"],
		["Tisa Offc Serif Pro","Tisa Offc Serif Pro"],
		["Traditional Arabic","Traditional Arabic"],
		["Transport MT","Transport MT"],
		["Trebuchet MS","Trebuchet MS"],
		["Tunga","Tunga"],
		["Tw Cen MT","Tw Cen MT"],
		["Univers","Univers"],
		["Urdu Typesetting","Urdu Typesetting"],
		["Utsaah","Utsaah"],
		["Vacation MT","Vacation MT"],
		["Vani","Vani"],
		["Verdana","Verdana"],
		["Verdana Ref","Verdana Ref"],
		["Vijaya","Vijaya"],
		["Viner Hand ITC","Viner Hand ITC"],
		["Vivaldi","Vivaldi"],
		["Vixar ASCI","Vixar ASCI"],
		["Vladimir Script","Vladimir Script"],
		["Vrinda","Vrinda"],
		["Walbaum","Walbaum"],
		["Webdings","Webdings"],
		["Westminster","Westminster"],
		["Wide Latin","Wide Latin"],
		["Wingdings","Wingdings"]
	  ]), "font");
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg["OLED_SIZE"])
      .appendField(new Blockly.FieldDropdown([
		  ["8px","8"],
		  ["9px","9"],		  
		  ["10px","10"],
		  ["11px","11"],		  
		  ["12px","12"],
		  ["14px","14"],		  
		  ["16px","16"],		  
		  ["18px","18"],		  
		  ["20px","20"],
		  ["24px","24"],		  
		  ["32px","32"],
		  ["42px","42"]					  
	  ]), "size"); 
    this.appendValueInput("x")
        .setAlign(Blockly.ALIGN_RIGHT)  	
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setAlign(Blockly.ALIGN_RIGHT)  	
        .setCheck("Number")
        .appendField("y");
	this.appendDummyInput()
		.appendField(Blockly.Msg["OLED_TEXT"])
		.appendField(new Blockly.FieldTextInput(""), "str");
    this.appendValueInput("str");
	this.getInput("str").setVisible(false);	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
	
	this.setHelpUrl("https://docs.microsoft.com/en-us/typography/font-list/");
  },onchange: function(event) {
		var str = Blockly.Arduino.blockToCode(this.getInputTargetBlock("str"))[0];
		if ((str.indexOf('"')==0)&&(str.lastIndexOf('"')==str.length-1))
		str = str.substring(1,str.length-1);
		if (str!="") {
			this.getField("str").setValue(str);
			if (this.getInputTargetBlock("str").getField("TEXT"))
				this.getInputTargetBlock("str").getField("TEXT").setValue("");			
			this.getField("str").isDirty_=true;
		}
	} 
};

Blockly.Blocks['fu_oled_drawCustomFont'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_LOCAL_TTF"]);
    this.appendValueInput("font")
        .setAlign(Blockly.ALIGN_RIGHT)  	
        .setCheck("String");
	this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("大小")
      .appendField(new Blockly.FieldDropdown([
		  ["8px","8"],
		  ["9px","9"],		  
		  ["10px","10"],
		  ["11px","11"],		  
		  ["12px","12"],
		  ["14px","14"],		  
		  ["16px","16"],		  
		  ["18px","18"],		  
		  ["20px","20"],
		  ["24px","24"],		  
		  ["32px","32"],
		  ["42px","42"]					  
	  ]), "size"); 
    this.appendValueInput("x")
        .setAlign(Blockly.ALIGN_RIGHT)  	
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setAlign(Blockly.ALIGN_RIGHT)  	
        .setCheck("Number")
        .appendField("y");
	this.appendDummyInput()
		.appendField(Blockly.Msg["OLED_TEXT"])
		.appendField(new Blockly.FieldTextInput(""), "str");
    this.appendValueInput("str");
	this.getInput("str").setVisible(false);			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
	
	this.setHelpUrl("https://docs.microsoft.com/en-us/typography/font-list/");
  },onchange: function(event) {
		var str = Blockly.Arduino.blockToCode(this.getInputTargetBlock("str"))[0];
		if ((str.indexOf('"')==0)&&(str.lastIndexOf('"')==str.length-1))
		str = str.substring(1,str.length-1);
		if (str!="") {
			this.getField("str").setValue(str);
			if (this.getInputTargetBlock("str").getField("TEXT"))
				this.getInputTargetBlock("str").getField("TEXT").setValue("");
			this.getField("str").isDirty_=true;
		}
	}  
};

Blockly.Blocks['fu_oled_setCursor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_CURSOR_SET"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 
 
  }
};

Blockly.Blocks['fu_oled_Print'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_TEXT_CURSOR"]);
    this.appendValueInput("str")
        .setCheck(null)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 
 
  }
};

Blockly.Blocks['fu_oled_drawGlyph'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_IMAGE_UNICODE"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("position")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_POSITION"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
 
 
  }
};

Blockly.Blocks['fu_oled_drawUTF8'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_TEXT_UTF8"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("str")
        .setCheck(null)
        .appendField(Blockly.Msg["OLED_STRING"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
 
 
  }
};

//https://www.fileformat.info/info/charset/UTF-16/list.htm
//Blockly.FieldCheckbox.CHECK_CHAR="\u2615";

Blockly.Blocks['fu_oled_PROGMEM'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["OLED_SET"]);		
	var imageToXbm = function() {
		var block = this.sourceBlock_;
        var input = block.getInputTargetBlock("PROGMEM");
	    if (input) {
		    if (input.type="text") {
				var img=document.createElement('img');
				img.onload = function (event) {
					const canvas = document.createElement('canvas');
					const context = canvas.getContext('2d');
					
					canvas.width=img.width;
					canvas.height=img.height; 
					canvas.width = (canvas.width%8>0)?Math.round(canvas.width-canvas.width%8+8):Math.round(canvas.width);
					block.getField("size").setValue("( "+canvas.width + " * " + canvas.height + " )", "size");
					
					context.fillStyle="#FFFFFF";
					context.fillRect(0, 0, canvas.width, canvas.height);
					context.drawImage(img,0,0,img.width,img.height);

					const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
					const data = imageData.data;

					let xbmString = "";
					let pixel = 0;
					let value = 0;
					
					for(let h = 0; h < canvas.height; h++) {
						for(let w = 0; w < canvas.width / 8; w++) {
							value = 0;
							for(let p = 0; p < 8; p++) {
								const isBlack = !(data[pixel * 4]);
								if(isBlack)
									value += Math.pow(2, p);
								pixel++;
								const isNewRow = pixel/canvas.width === 1;
								if(isNewRow) break;
							}
							xbmString += ("0x"+("0"+(Number(value).toString(16))).slice(-2).toUpperCase()+",");
						}
					}
					
					document.body.appendChild(canvas);
					canvas.parentNode.removeChild(canvas);
					input.setFieldValue(xbmString, 'TEXT');
					file.parentNode.removeChild(file);
				}
				
				var file=document.createElement('input');
				file.type="file";
				file.onchange = function (event) {
					var target = event.target || window.event.srcElement;
					var files = target.files;
					if (FileReader && files && files.length) {
						var fr = new FileReader();
							fr.onload = function () {    
							img.src = fr.result;
						}
						fr.readAsDataURL(files[0]);
						file.parentNode.removeChild(file);
					}
				}
				document.body.appendChild(file);
				file.click();
		    }
		}
    };
    this.appendValueInput("PROGMEM")
        .setCheck("String")
        .appendField(Blockly.Msg["OLED_XBM"]);
		
	var field = new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADyUlEQVRIieXVS0xcVRzH8e85l3nAUBCsaZHUqrDQAsWZdGekj8RXVzR10qUwJERXLtTEREPARle6Nl3AMEljGmnorlZjBNpoWzVAQoFKIRFqB9raymNGZu7ce/8uhiG8hOFRY+JvdW/yP+dz/+feew7836KyKQoGg7k+n++w1vopx3GKtNZ/ish4LBa73NHRMb/jcENDQ7lt281KqRNA3holfwGdjuM0RyKRsR2BQ6HQ+yLyCeDClYvaW4EqfBI8+ZCMITNRZOoGpBIAJvBhOBz+bFtwfX39GaCRHA/6wHEoq0EZ7lV1YpvIaDcyfAmsJMCZcDj8VjawsVanwAfkFaFr3kGVVqN0ukwr8OQoHAEBlDZQu8vQJZXI5ABYiUOBQCDW19d3dVMdh0KhZ0VkmByPWx99L720wO5cRcUTBnvyFEql0btxYfC+zR/zkh48cwe763OwkqbWuqK1tXV0PVgvvXEc52PArQ8cX0TLizTH9ueQsISe2xYXx1L0TFgkLOHY/hzKixamKCxFP/8agFtEmjbqeBEOBoO5SqlaXLlQVrNYUJqvuBa1uR61uRsX5sx0t9ejNteiNvsKljx7+RFweRGRk42NjWv9Bavh/Pz8GsCnSiqXfUg9t20mZp01B0/MOnSNW4v3ynCj91YC5Jmm+WJWMPA0AAtLvNVIQUl6Yq2fyRYuBlBu37Zg5d2VfgCRx7OClVIPAEjGtgWTnMtc3c8KFpFxAJmJbsvNjM/MtyEci8UuA3GZuoHY5tZU20SmhgBiwJWs4IVT5gKpBDLavSVXbn0PqXmAzvb29kRWMIBhGE1AUoYvwcydzaHTv+Pc/BbAXNiI1s2yvbq3t3fa7/cncOxXZHIAvec58BZkhcoPX4AZR0TaI5FIZFMwQH9//49+v78EK3FIJn5CKQVF+xYPimWxTWTkO5xfzmZQWylV5ff7B/r7+39dD17vPH5XRD4F3Li86R2psAQ8uyA5t3AeD2XeqQmEgTcBbyJlpaYTqdNfnz93OuuOM+nr67saCAS+VEoVY1vlMht1y70RZHIAuTcCs5PgWHHgnGEYb7S1tZ0NBAI/z5vWqYmHc+75ZOrowepqbg0p9myq46Wpq6vzAi+R3laLgYfAb8CVlV/vyyeCLXPzZpNIevJin6f5YudXLVuCN5tXTwRbZjbA/3Gpt5Oxm0PdFZVVRtJ2DguQSNlHVi77I4EX8K6KqoOupGXXZPCqF6qjo8ODvbBiA9npfHOh46PCPE+TUgqvy3igE/Hzj9JblddPnnq7trb2sX8V/c/lbwo9q8gJVNowAAAAAElFTkSuQmCC", 30, 30, { alt: "*", flipRtl: "FALSE" });
	field.setOnClickHandler(imageToXbm);
	
	this.appendDummyInput()
		.appendField(new Blockly.FieldLabelSerializable(Blockly.Msg["OLED_WHITEBACK_BLACKWORD"]), "size")
		.appendField(field);
		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 
 this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
  }
};

Blockly.Blocks['fu_oled_qrcode_PROGMEM'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED");
	this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["OLED_SET"]);	
	this.appendDummyInput()
        .appendField("QRCODE")	
        .appendField(new Blockly.FieldDropdown([
		["64x64","64x64"]		
	]), "size");			
    var field = new Blockly.FieldTextInput();
    field.onFinishEditing_ = this.onFinishEditing;	
    this.appendDummyInput()		
        .appendField(Blockly.Msg["OLED_TEXT"])
		.appendField(field);	
    this.appendValueInput("PROGMEM")
        .setCheck("String");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
    
	this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
    this.getInput('PROGMEM').setVisible(false);
  },
  
	onFinishEditing: function(val) {
		var block = this.sourceBlock_;
		var input = block.getInputTargetBlock("PROGMEM");
		var img=document.createElement('img');
		var url = "https://chart.googleapis.com/chart?chs=64x64&cht=qr&chl=" + val + "&choe=UTF-8&chld=M|0";
		img.src = url;
		
		img.onload = function (event) {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			
			canvas.width=img.width;
			canvas.height=img.height; 
			canvas.width = (canvas.width%8>0)?Math.round(canvas.width-canvas.width%8+8):Math.round(canvas.width);
			
			context.fillStyle="#FFFFFF";
			context.fillRect(0, 0, canvas.width, canvas.height);
			context.drawImage(img,0,0,img.width,img.height);

			const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
			const data = imageData.data;

			let xbmString = "";
			let pixel = 0;
			let value = 0;
			
			for(let h = 0; h < canvas.height; h++) {
				for(let w = 0; w < canvas.width / 8; w++) {
					value = 0;
					for(let p = 0; p < 8; p++) {
						const isBlack = !(data[pixel * 4]);
						if(isBlack)
							value += Math.pow(2, p);
						pixel++;
						const isNewRow = pixel/canvas.width === 1;
						if(isNewRow) break;
					}
					xbmString += ("0x"+("0"+(Number(value).toString(16))).slice(-2).toUpperCase()+",");
				}
			}
			
			document.body.appendChild(canvas);
			canvas.parentNode.removeChild(canvas);
			input.setFieldValue(xbmString, 'TEXT');
		}
    }
};

Blockly.Blocks['fu_oled_PROGMEM_array'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED");
    this.appendDummyInput()
        .appendField(Blockly.Msg["OLED_ARRAY"])	
        .appendField(new Blockly.FieldVariable("logo"), "variable")
	.appendField(Blockly.Msg["OLED_SET"]);		
    this.appendValueInput("PROGMEM")
        .setCheck("Array")
        .appendField(Blockly.Msg["OLED_XBM"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 
 this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
  }
};

Blockly.Blocks['fu_oled_setBitmapMode'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_BACKGROUND_COLOR"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_TRANSPARENT_NO"],"0"], 
		[Blockly.Msg["OLED_TRANSPARENT"],"1"]		
	]), "mode");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 
 
  }
};

Blockly.Blocks['fu_oled_drawXBMP'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_IMAGE"]);
    this.appendValueInput("PROGMEM")
        .setCheck("String")
        .appendField(Blockly.Msg["OLED_XBM"]);	
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_HEIGHT"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 
 
  }
};

Blockly.Blocks['fu_oled_drawXBMP_PROGMEM'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_IMAGE"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable");		
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_HEIGHT"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 
 
  }
};

Blockly.Blocks['fu_oled_drawXBMP_PROGMEM_array'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_IMAGE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["OLED_ARRAY"])	
        .appendField(new Blockly.FieldVariable("logo"), "variable");
    this.appendValueInput("index")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_INDEX"]);		
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_HEIGHT"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 
 
  }
};

Blockly.Blocks['fu_oled_drawPixelMap'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_PIXEL_IMAGE"]);
		
	var block = this;
    var validator_width = function(newValue) {
	    var width = Number(newValue);
		var height = Number(block.getFieldValue("height"));
	  	var field;
		var input;
		for (var i=0;i<(64*64);i++) {
			if (block.getField("chk"+i)) {
				block.getField("chk"+i).dispose();
			}
			if (block.getInput("input"+i)) {
				block.removeInput("input"+i);
			}			
		}
		for (var j=0;j<(width*height);j++) {
			if (j%width==0) 
				input = block.appendDummyInput("input"+j);
			field = new Blockly.FieldCheckbox("FALSE");
			input.appendField(field, "chk"+j);
		}
    };
    var validator_height = function(newValue) {
	    var width = Number(block.getFieldValue("width"));
		var height = Number(newValue);
	  	var field;
		var input;
		for (var i=0;i<(64*64);i++) {
			if (block.getField("chk"+i)) {
				block.getField("chk"+i).dispose();
			}
			if (block.getInput("input"+i)) {
				block.removeInput("input"+i);
			}			
		}
		for (var j=0;j<(width*height);j++) {
			if (j%width==0) 
				input = block.appendDummyInput("input"+j);
			field = new Blockly.FieldCheckbox("FALSE");
			input.appendField(field, "chk"+j);
		}
    };	
	
	var opt = [];
	for (var k=8;k<=128;k+=8) {
		opt.push([k.toString(),k.toString()]);
	}
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(Blockly.Msg["OLED_WIDTH"])
        .appendField(new Blockly.FieldDropdown(opt, validator_width), "width")
        .appendField(Blockly.Msg["OLED_HEIGHT"])
        .appendField(new Blockly.FieldDropdown(opt, validator_height), "height");
    this.appendValueInput("x")
        .setAlign(Blockly.ALIGN_RIGHT)		
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setAlign(Blockly.ALIGN_RIGHT)		
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
  }
};

Blockly.Blocks['fu_oled_drawBox'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_SQUARE_SOLID"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_CENTER_X"]);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_HEIGHT"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
 
 
  }
};

Blockly.Blocks['fu_oled_drawRBox'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_SQUARE_SOLID_ROUND"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_CENTER_X"]);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_HEIGHT"]);
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_REDIUS_ROUND"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
 
 
  }
};

Blockly.Blocks['fu_oled_drawFrame'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_SQUARE_HOLLOW"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_CENTER_X"]);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_HEIGHT"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 
 
  }
};

Blockly.Blocks['fu_oled_drawRFrame'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_SQUARE_HOLLOW_ROUND"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_CENTER_X"]);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_HEIGHT"]);
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_REDIUS_ROUND"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 
 
  }
};

Blockly.Blocks['fu_oled_drawCircle'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_CIRCLE_HOLLOW"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_CIRCLE_CENTER_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_REDIUS"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["OLED_OPTION"])
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_CIRCLE"],"U8G_DRAW_ALL"], 
		[Blockly.Msg["OLED_ARC_RIGHT_TOP"],"U8G2_DRAW_UPPER_RIGHT"], 
		[Blockly.Msg["OLED_ARC_LEFT_TOP"],"U8G2_DRAW_UPPER_LEFT"],
		[Blockly.Msg["OLED_ARC_LEFT_BOTTOM"],"U8G2_DRAW_LOWER_LEFT"], 
		[Blockly.Msg["OLED_ARC_RIGHT_BOTTOM"],"U8G2_DRAW_LOWER_RIGHT"]			
	]), "option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
 
 
  }
};

Blockly.Blocks['fu_oled_drawDisc'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_CIRCLE_SOLID"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_CIRCLE_CENTER_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_REDIUS"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["OLED_OPTION"])
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_CIRCLE"],"U8G_DRAW_ALL"], 
		[Blockly.Msg["OLED_ARC_RIGHT_TOP"],"U8G2_DRAW_UPPER_RIGHT"], 
		[Blockly.Msg["OLED_ARC_LEFT_TOP"],"U8G2_DRAW_UPPER_LEFT"],
		[Blockly.Msg["OLED_ARC_LEFT_BOTTOM"],"U8G2_DRAW_LOWER_LEFT"], 
		[Blockly.Msg["OLED_ARC_RIGHT_BOTTOM"],"U8G2_DRAW_LOWER_RIGHT"]			
	]), "option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 
 
  }
};

Blockly.Blocks['fu_oled_drawEllipse'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_OVAL_HOLLOW"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_CIRCLE_CENTER_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("rx")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_REDIUS_HORIZONTAL"]);
    this.appendValueInput("ry")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_REDIUS_VERTICAL"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["OLED_OPTION"])
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_CIRCLE"],"U8G_DRAW_ALL"], 
		[Blockly.Msg["OLED_ARC_RIGHT_TOP"],"U8G2_DRAW_UPPER_RIGHT"], 
		[Blockly.Msg["OLED_ARC_LEFT_TOP"],"U8G2_DRAW_UPPER_LEFT"],
		[Blockly.Msg["OLED_ARC_LEFT_BOTTOM"],"U8G2_DRAW_LOWER_LEFT"], 
		[Blockly.Msg["OLED_ARC_RIGHT_BOTTOM"],"U8G2_DRAW_LOWER_RIGHT"]			
	]), "option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
 
 
  }
};

Blockly.Blocks['fu_oled_drawFilledEllipse'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_OVAL_SOLID"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_CIRCLE_CENTER_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("rx")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_REDIUS_HORIZONTAL"]);
    this.appendValueInput("ry")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_REDIUS_VERTICAL"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["OLED_OPTION"])
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_CIRCLE"],"U8G_DRAW_ALL"], 
		[Blockly.Msg["OLED_ARC_RIGHT_TOP"],"U8G2_DRAW_UPPER_RIGHT"], 
		[Blockly.Msg["OLED_ARC_LEFT_TOP"],"U8G2_DRAW_UPPER_LEFT"],
		[Blockly.Msg["OLED_ARC_LEFT_BOTTOM"],"U8G2_DRAW_LOWER_LEFT"], 
		[Blockly.Msg["OLED_ARC_RIGHT_BOTTOM"],"U8G2_DRAW_LOWER_RIGHT"]			
	]), "option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 
 
  }
};

Blockly.Blocks['fu_oled_drawHLine'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_LINE_HORIZONTAL"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_START_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_WIDTH"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 
 
  }
};

Blockly.Blocks['fu_oled_drawVLine'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_LINE_VERTICAL"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_START_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_HEIGHT"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 
 
  }
};

Blockly.Blocks['fu_oled_drawLine'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_LINE_DIP"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_START_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_END_X"]);
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(250);
 
 
  }
};

Blockly.Blocks['fu_oled_drawTriangle'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_TRIANGLE"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_POINT1_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_POINT2_X"]);
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField(Blockly.Msg["OLED_POINT3_X"]);
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(250);
 
 
  }
};

Blockly.Blocks['fu_oled_drawPixel'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("OLED")
        .appendField(Blockly.Msg["OLED_DRAW_PIXEL_POINT"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 
 
  }
};

var opt = [
	["u8g2_font_10x20_me","u8g2_font_10x20_me"],
	["u8g2_font_10x20_mf","u8g2_font_10x20_mf"],
	["u8g2_font_10x20_mn","u8g2_font_10x20_mn"],
	["u8g2_font_10x20_mr","u8g2_font_10x20_mr"],
	["u8g2_font_10x20_t_arabic","u8g2_font_10x20_t_arabic"],
	["u8g2_font_10x20_t_cyrillic","u8g2_font_10x20_t_cyrillic"],
	["u8g2_font_10x20_t_greek","u8g2_font_10x20_t_greek"],
	["u8g2_font_10x20_te","u8g2_font_10x20_te"],
	["u8g2_font_10x20_tf","u8g2_font_10x20_tf"],
	["u8g2_font_10x20_tn","u8g2_font_10x20_tn"],
	["u8g2_font_10x20_tr","u8g2_font_10x20_tr"],
	["u8g2_font_4x6_mf","u8g2_font_4x6_mf"],
	["u8g2_font_4x6_mn","u8g2_font_4x6_mn"],
	["u8g2_font_4x6_mr","u8g2_font_4x6_mr"],
	["u8g2_font_4x6_t_cyrillic","u8g2_font_4x6_t_cyrillic"],
	["u8g2_font_4x6_tf","u8g2_font_4x6_tf"],
	["u8g2_font_4x6_tn","u8g2_font_4x6_tn"],
	["u8g2_font_4x6_tr","u8g2_font_4x6_tr"],
	["u8g2_font_5x7_mf","u8g2_font_5x7_mf"],
	["u8g2_font_5x7_mn","u8g2_font_5x7_mn"],
	["u8g2_font_5x7_mr","u8g2_font_5x7_mr"],
	["u8g2_font_5x7_t_cyrillic","u8g2_font_5x7_t_cyrillic"],
	["u8g2_font_5x7_tf","u8g2_font_5x7_tf"],
	["u8g2_font_5x7_tn","u8g2_font_5x7_tn"],
	["u8g2_font_5x7_tr","u8g2_font_5x7_tr"],
	["u8g2_font_5x8_mf","u8g2_font_5x8_mf"],
	["u8g2_font_5x8_mn","u8g2_font_5x8_mn"],
	["u8g2_font_5x8_mr","u8g2_font_5x8_mr"],
	["u8g2_font_5x8_t_cyrillic","u8g2_font_5x8_t_cyrillic"],
	["u8g2_font_5x8_tf","u8g2_font_5x8_tf"],
	["u8g2_font_5x8_tn","u8g2_font_5x8_tn"],
	["u8g2_font_5x8_tr","u8g2_font_5x8_tr"],
	["u8g2_font_6x10_mf","u8g2_font_6x10_mf"],
	["u8g2_font_6x10_mn","u8g2_font_6x10_mn"],
	["u8g2_font_6x10_mr","u8g2_font_6x10_mr"],
	["u8g2_font_6x10_tf","u8g2_font_6x10_tf"],
	["u8g2_font_6x10_tn","u8g2_font_6x10_tn"],
	["u8g2_font_6x10_tr","u8g2_font_6x10_tr"],
	["u8g2_font_6x12_m_symbols","u8g2_font_6x12_m_symbols"],
	["u8g2_font_6x12_me","u8g2_font_6x12_me"],
	["u8g2_font_6x12_mf","u8g2_font_6x12_mf"],
	["u8g2_font_6x12_mn","u8g2_font_6x12_mn"],
	["u8g2_font_6x12_mr","u8g2_font_6x12_mr"],
	["u8g2_font_6x12_t_cyrillic","u8g2_font_6x12_t_cyrillic"],
	["u8g2_font_6x12_t_symbols","u8g2_font_6x12_t_symbols"],
	["u8g2_font_6x12_te","u8g2_font_6x12_te"],
	["u8g2_font_6x12_tf","u8g2_font_6x12_tf"],
	["u8g2_font_6x12_tn","u8g2_font_6x12_tn"],
	["u8g2_font_6x12_tr","u8g2_font_6x12_tr"],
	["u8g2_font_6x13_me","u8g2_font_6x13_me"],
	["u8g2_font_6x13_mf","u8g2_font_6x13_mf"],
	["u8g2_font_6x13_mn","u8g2_font_6x13_mn"],
	["u8g2_font_6x13_mr","u8g2_font_6x13_mr"],
	["u8g2_font_6x13_t_cyrillic","u8g2_font_6x13_t_cyrillic"],
	["u8g2_font_6x13_t_hebrew","u8g2_font_6x13_t_hebrew"],
	["u8g2_font_6x13_te","u8g2_font_6x13_te"],
	["u8g2_font_6x13_tf","u8g2_font_6x13_tf"],
	["u8g2_font_6x13_tn","u8g2_font_6x13_tn"],
	["u8g2_font_6x13_tr","u8g2_font_6x13_tr"],
	["u8g2_font_6x13B_mf","u8g2_font_6x13B_mf"],
	["u8g2_font_6x13B_mn","u8g2_font_6x13B_mn"],
	["u8g2_font_6x13B_mr","u8g2_font_6x13B_mr"],
	["u8g2_font_6x13B_t_cyrillic","u8g2_font_6x13B_t_cyrillic"],
	["u8g2_font_6x13B_t_hebrew","u8g2_font_6x13B_t_hebrew"],
	["u8g2_font_6x13B_tf","u8g2_font_6x13B_tf"],
	["u8g2_font_6x13B_tn","u8g2_font_6x13B_tn"],
	["u8g2_font_6x13B_tr","u8g2_font_6x13B_tr"],
	["u8g2_font_6x13O_mf","u8g2_font_6x13O_mf"],
	["u8g2_font_6x13O_mn","u8g2_font_6x13O_mn"],
	["u8g2_font_6x13O_mr","u8g2_font_6x13O_mr"],
	["u8g2_font_6x13O_tf","u8g2_font_6x13O_tf"],
	["u8g2_font_6x13O_tn","u8g2_font_6x13O_tn"],
	["u8g2_font_6x13O_tr","u8g2_font_6x13O_tr"],
	["u8g2_font_7Segments_26x42_mn","u8g2_font_7Segments_26x42_mn"],
	["u8g2_font_7x13_m_symbols","u8g2_font_7x13_m_symbols"],
	["u8g2_font_7x13_me","u8g2_font_7x13_me"],
	["u8g2_font_7x13_mf","u8g2_font_7x13_mf"],
	["u8g2_font_7x13_mn","u8g2_font_7x13_mn"],
	["u8g2_font_7x13_mr","u8g2_font_7x13_mr"],
	["u8g2_font_7x13_t_cyrillic","u8g2_font_7x13_t_cyrillic"],
	["u8g2_font_7x13_t_symbols","u8g2_font_7x13_t_symbols"],
	["u8g2_font_7x13_te","u8g2_font_7x13_te"],
	["u8g2_font_7x13_tf","u8g2_font_7x13_tf"],
	["u8g2_font_7x13_tn","u8g2_font_7x13_tn"],
	["u8g2_font_7x13_tr","u8g2_font_7x13_tr"],
	["u8g2_font_7x13B_mf","u8g2_font_7x13B_mf"],
	["u8g2_font_7x13B_mn","u8g2_font_7x13B_mn"],
	["u8g2_font_7x13B_mr","u8g2_font_7x13B_mr"],
	["u8g2_font_7x13B_tf","u8g2_font_7x13B_tf"],
	["u8g2_font_7x13B_tn","u8g2_font_7x13B_tn"],
	["u8g2_font_7x13B_tr","u8g2_font_7x13B_tr"],
	["u8g2_font_7x13O_mf","u8g2_font_7x13O_mf"],
	["u8g2_font_7x13O_mn","u8g2_font_7x13O_mn"],
	["u8g2_font_7x13O_mr","u8g2_font_7x13O_mr"],
	["u8g2_font_7x13O_tf","u8g2_font_7x13O_tf"],
	["u8g2_font_7x13O_tn","u8g2_font_7x13O_tn"],
	["u8g2_font_7x13O_tr","u8g2_font_7x13O_tr"],
	["u8g2_font_7x14_mf","u8g2_font_7x14_mf"],
	["u8g2_font_7x14_mn","u8g2_font_7x14_mn"],
	["u8g2_font_7x14_mr","u8g2_font_7x14_mr"],
	["u8g2_font_7x14_tf","u8g2_font_7x14_tf"],
	["u8g2_font_7x14_tn","u8g2_font_7x14_tn"],
	["u8g2_font_7x14_tr","u8g2_font_7x14_tr"],
	["u8g2_font_7x14B_mf","u8g2_font_7x14B_mf"],
	["u8g2_font_7x14B_mn","u8g2_font_7x14B_mn"],
	["u8g2_font_7x14B_mr","u8g2_font_7x14B_mr"],
	["u8g2_font_7x14B_tf","u8g2_font_7x14B_tf"],
	["u8g2_font_7x14B_tn","u8g2_font_7x14B_tn"],
	["u8g2_font_7x14B_tr","u8g2_font_7x14B_tr"],
	["u8g2_font_8x13_m_symbols","u8g2_font_8x13_m_symbols"],
	["u8g2_font_8x13_me","u8g2_font_8x13_me"],
	["u8g2_font_8x13_mf","u8g2_font_8x13_mf"],
	["u8g2_font_8x13_mn","u8g2_font_8x13_mn"],
	["u8g2_font_8x13_mr","u8g2_font_8x13_mr"],
	["u8g2_font_8x13_t_cyrillic","u8g2_font_8x13_t_cyrillic"],
	["u8g2_font_8x13_t_symbols","u8g2_font_8x13_t_symbols"],
	["u8g2_font_8x13_te","u8g2_font_8x13_te"],
	["u8g2_font_8x13_tf","u8g2_font_8x13_tf"],
	["u8g2_font_8x13_tn","u8g2_font_8x13_tn"],
	["u8g2_font_8x13_tr","u8g2_font_8x13_tr"],
	["u8g2_font_8x13B_mf","u8g2_font_8x13B_mf"],
	["u8g2_font_8x13B_mn","u8g2_font_8x13B_mn"],
	["u8g2_font_8x13B_mr","u8g2_font_8x13B_mr"],
	["u8g2_font_8x13B_tf","u8g2_font_8x13B_tf"],
	["u8g2_font_8x13B_tn","u8g2_font_8x13B_tn"],
	["u8g2_font_8x13B_tr","u8g2_font_8x13B_tr"],
	["u8g2_font_8x13O_mf","u8g2_font_8x13O_mf"],
	["u8g2_font_8x13O_mn","u8g2_font_8x13O_mn"],
	["u8g2_font_8x13O_mr","u8g2_font_8x13O_mr"],
	["u8g2_font_8x13O_tf","u8g2_font_8x13O_tf"],
	["u8g2_font_8x13O_tn","u8g2_font_8x13O_tn"],
	["u8g2_font_8x13O_tr","u8g2_font_8x13O_tr"],
	["u8g2_font_9x15_m_symbols","u8g2_font_9x15_m_symbols"],
	["u8g2_font_9x15_me","u8g2_font_9x15_me"],
	["u8g2_font_9x15_mf","u8g2_font_9x15_mf"],
	["u8g2_font_9x15_mn","u8g2_font_9x15_mn"],
	["u8g2_font_9x15_mr","u8g2_font_9x15_mr"],
	["u8g2_font_9x15_t_cyrillic","u8g2_font_9x15_t_cyrillic"],
	["u8g2_font_9x15_t_symbols","u8g2_font_9x15_t_symbols"],
	["u8g2_font_9x15_te","u8g2_font_9x15_te"],
	["u8g2_font_9x15_tf","u8g2_font_9x15_tf"],
	["u8g2_font_9x15_tn","u8g2_font_9x15_tn"],
	["u8g2_font_9x15_tr","u8g2_font_9x15_tr"],
	["u8g2_font_9x15B_mf","u8g2_font_9x15B_mf"],
	["u8g2_font_9x15B_mn","u8g2_font_9x15B_mn"],
	["u8g2_font_9x15B_mr","u8g2_font_9x15B_mr"],
	["u8g2_font_9x15B_tf","u8g2_font_9x15B_tf"],
	["u8g2_font_9x15B_tn","u8g2_font_9x15B_tn"],
	["u8g2_font_9x15B_tr","u8g2_font_9x15B_tr"],
	["u8g2_font_9x18_mf","u8g2_font_9x18_mf"],
	["u8g2_font_9x18_mn","u8g2_font_9x18_mn"],
	["u8g2_font_9x18_mr","u8g2_font_9x18_mr"],
	["u8g2_font_9x18_tf","u8g2_font_9x18_tf"],
	["u8g2_font_9x18_tn","u8g2_font_9x18_tn"],
	["u8g2_font_9x18_tr","u8g2_font_9x18_tr"],
	["u8g2_font_9x18B_mf","u8g2_font_9x18B_mf"],
	["u8g2_font_9x18B_mn","u8g2_font_9x18B_mn"],
	["u8g2_font_9x18B_mr","u8g2_font_9x18B_mr"],
	["u8g2_font_9x18B_tf","u8g2_font_9x18B_tf"],
	["u8g2_font_9x18B_tn","u8g2_font_9x18B_tn"],
	["u8g2_font_9x18B_tr","u8g2_font_9x18B_tr"],
	["u8g2_font_adventurer_t_all","u8g2_font_adventurer_t_all"],
	["u8g2_font_adventurer_tf","u8g2_font_adventurer_tf"],
	["u8g2_font_adventurer_tr","u8g2_font_adventurer_tr"],
	["u8g2_font_amstrad_cpc_extended_8f","u8g2_font_amstrad_cpc_extended_8f"],
	["u8g2_font_amstrad_cpc_extended_8n","u8g2_font_amstrad_cpc_extended_8n"],
	["u8g2_font_amstrad_cpc_extended_8r","u8g2_font_amstrad_cpc_extended_8r"],
	["u8g2_font_amstrad_cpc_extended_8u","u8g2_font_amstrad_cpc_extended_8u"],
	["u8g2_font_artossans8_8n","u8g2_font_artossans8_8n"],
	["u8g2_font_artossans8_8r","u8g2_font_artossans8_8r"],
	["u8g2_font_artossans8_8u","u8g2_font_artossans8_8u"],
	["u8g2_font_artosserif8_8n","u8g2_font_artosserif8_8n"],
	["u8g2_font_artosserif8_8r","u8g2_font_artosserif8_8r"],
	["u8g2_font_artosserif8_8u","u8g2_font_artosserif8_8u"],
	["u8g2_font_astragal_nbp_tf","u8g2_font_astragal_nbp_tf"],
	["u8g2_font_astragal_nbp_tn","u8g2_font_astragal_nbp_tn"],
	["u8g2_font_astragal_nbp_tr","u8g2_font_astragal_nbp_tr"],
	["u8g2_font_b10_b_t_japanese1","u8g2_font_b10_b_t_japanese1"],
	["u8g2_font_b10_b_t_japanese2","u8g2_font_b10_b_t_japanese2"],
	["u8g2_font_b10_t_japanese1","u8g2_font_b10_t_japanese1"],
	["u8g2_font_b10_t_japanese2","u8g2_font_b10_t_japanese2"],
	["u8g2_font_b12_b_t_japanese1","u8g2_font_b12_b_t_japanese1"],
	["u8g2_font_b12_b_t_japanese2","u8g2_font_b12_b_t_japanese2"],
	["u8g2_font_b12_b_t_japanese3","u8g2_font_b12_b_t_japanese3"],
	["u8g2_font_b12_t_japanese1","u8g2_font_b12_t_japanese1"],
	["u8g2_font_b12_t_japanese2","u8g2_font_b12_t_japanese2"],
	["u8g2_font_b12_t_japanese3","u8g2_font_b12_t_japanese3"],
	["u8g2_font_b16_b_t_japanese1","u8g2_font_b16_b_t_japanese1"],
	["u8g2_font_b16_b_t_japanese2","u8g2_font_b16_b_t_japanese2"],
	["u8g2_font_b16_b_t_japanese3","u8g2_font_b16_b_t_japanese3"],
	["u8g2_font_b16_t_japanese1","u8g2_font_b16_t_japanese1"],
	["u8g2_font_b16_t_japanese2","u8g2_font_b16_t_japanese2"],
	["u8g2_font_b16_t_japanese3","u8g2_font_b16_t_japanese3"],
	["u8g2_font_baby_tf","u8g2_font_baby_tf"],
	["u8g2_font_baby_tn","u8g2_font_baby_tn"],
	["u8g2_font_baby_tr","u8g2_font_baby_tr"],
	["u8g2_font_balthasar_regular_nbp_tf","u8g2_font_balthasar_regular_nbp_tf"],
	["u8g2_font_balthasar_regular_nbp_tn","u8g2_font_balthasar_regular_nbp_tn"],
	["u8g2_font_balthasar_regular_nbp_tr","u8g2_font_balthasar_regular_nbp_tr"],
	["u8g2_font_balthasar_titling_nbp_tf","u8g2_font_balthasar_titling_nbp_tf"],
	["u8g2_font_balthasar_titling_nbp_tn","u8g2_font_balthasar_titling_nbp_tn"],
	["u8g2_font_balthasar_titling_nbp_tr","u8g2_font_balthasar_titling_nbp_tr"],
	["u8g2_font_battery19_tn","u8g2_font_battery19_tn"],
	["u8g2_font_bauhaus2015_tn","u8g2_font_bauhaus2015_tn"],
	["u8g2_font_bauhaus2015_tr","u8g2_font_bauhaus2015_tr"],
	["u8g2_font_BBSesque_te","u8g2_font_BBSesque_te"],
	["u8g2_font_BBSesque_tf","u8g2_font_BBSesque_tf"],
	["u8g2_font_BBSesque_tr","u8g2_font_BBSesque_tr"],
	["u8g2_font_beanstalk_mel_tn","u8g2_font_beanstalk_mel_tn"],
	["u8g2_font_beanstalk_mel_tr","u8g2_font_beanstalk_mel_tr"],
	["u8g2_font_bitcasual_t_all","u8g2_font_bitcasual_t_all"],
	["u8g2_font_bitcasual_tf","u8g2_font_bitcasual_tf"],
	["u8g2_font_bitcasual_tn","u8g2_font_bitcasual_tn"],
	["u8g2_font_bitcasual_tr","u8g2_font_bitcasual_tr"],
	["u8g2_font_bitcasual_tu","u8g2_font_bitcasual_tu"],
	["u8g2_font_BitTypeWriter_te","u8g2_font_BitTypeWriter_te"],
	["u8g2_font_BitTypeWriter_tr","u8g2_font_BitTypeWriter_tr"],
	["u8g2_font_blipfest_07_tn","u8g2_font_blipfest_07_tn"],
	["u8g2_font_blipfest_07_tr","u8g2_font_blipfest_07_tr"],
	["u8g2_font_Born2bSportySlab_t_all","u8g2_font_Born2bSportySlab_t_all"],
	["u8g2_font_Born2bSportySlab_te","u8g2_font_Born2bSportySlab_te"],
	["u8g2_font_Born2bSportySlab_tf","u8g2_font_Born2bSportySlab_tf"],
	["u8g2_font_Born2bSportySlab_tr","u8g2_font_Born2bSportySlab_tr"],
	["u8g2_font_Born2bSportyV2_te","u8g2_font_Born2bSportyV2_te"],
	["u8g2_font_Born2bSportyV2_tf","u8g2_font_Born2bSportyV2_tf"],
	["u8g2_font_Born2bSportyV2_tr","u8g2_font_Born2bSportyV2_tr"],
	["u8g2_font_bracketedbabies_tr","u8g2_font_bracketedbabies_tr"],
	["u8g2_font_bubble_tn","u8g2_font_bubble_tn"],
	["u8g2_font_bubble_tr","u8g2_font_bubble_tr"],
	["u8g2_font_calibration_gothic_nbp_t_all","u8g2_font_calibration_gothic_nbp_t_all"],
	["u8g2_font_calibration_gothic_nbp_tf","u8g2_font_calibration_gothic_nbp_tf"],
	["u8g2_font_calibration_gothic_nbp_tn","u8g2_font_calibration_gothic_nbp_tn"],
	["u8g2_font_calibration_gothic_nbp_tr","u8g2_font_calibration_gothic_nbp_tr"],
	["u8g2_font_cardimon_pixel_tf","u8g2_font_cardimon_pixel_tf"],
	["u8g2_font_cardimon_pixel_tn","u8g2_font_cardimon_pixel_tn"],
	["u8g2_font_cardimon_pixel_tr","u8g2_font_cardimon_pixel_tr"],
	["u8g2_font_celibatemonk_tr","u8g2_font_celibatemonk_tr"],
	["u8g2_font_chikita_tf","u8g2_font_chikita_tf"],
	["u8g2_font_chikita_tn","u8g2_font_chikita_tn"],
	["u8g2_font_chikita_tr","u8g2_font_chikita_tr"],
	["u8g2_font_chroma48medium8_8n","u8g2_font_chroma48medium8_8n"],
	["u8g2_font_chroma48medium8_8r","u8g2_font_chroma48medium8_8r"],
	["u8g2_font_chroma48medium8_8u","u8g2_font_chroma48medium8_8u"],
	["u8g2_font_courB08_tf","u8g2_font_courB08_tf"],
	["u8g2_font_courB08_tn","u8g2_font_courB08_tn"],
	["u8g2_font_courB08_tr","u8g2_font_courB08_tr"],
	["u8g2_font_courB10_tf","u8g2_font_courB10_tf"],
	["u8g2_font_courB10_tn","u8g2_font_courB10_tn"],
	["u8g2_font_courB10_tr","u8g2_font_courB10_tr"],
	["u8g2_font_courB12_tf","u8g2_font_courB12_tf"],
	["u8g2_font_courB12_tn","u8g2_font_courB12_tn"],
	["u8g2_font_courB12_tr","u8g2_font_courB12_tr"],
	["u8g2_font_courB14_tf","u8g2_font_courB14_tf"],
	["u8g2_font_courB14_tn","u8g2_font_courB14_tn"],
	["u8g2_font_courB14_tr","u8g2_font_courB14_tr"],
	["u8g2_font_courB18_tf","u8g2_font_courB18_tf"],
	["u8g2_font_courB18_tn","u8g2_font_courB18_tn"],
	["u8g2_font_courB18_tr","u8g2_font_courB18_tr"],
	["u8g2_font_courB24_tf","u8g2_font_courB24_tf"],
	["u8g2_font_courB24_tn","u8g2_font_courB24_tn"],
	["u8g2_font_courB24_tr","u8g2_font_courB24_tr"],
	["u8g2_font_courR08_tf","u8g2_font_courR08_tf"],
	["u8g2_font_courR08_tn","u8g2_font_courR08_tn"],
	["u8g2_font_courR08_tr","u8g2_font_courR08_tr"],
	["u8g2_font_courR10_tf","u8g2_font_courR10_tf"],
	["u8g2_font_courR10_tn","u8g2_font_courR10_tn"],
	["u8g2_font_courR10_tr","u8g2_font_courR10_tr"],
	["u8g2_font_courR12_tf","u8g2_font_courR12_tf"],
	["u8g2_font_courR12_tn","u8g2_font_courR12_tn"],
	["u8g2_font_courR12_tr","u8g2_font_courR12_tr"],
	["u8g2_font_courR14_tf","u8g2_font_courR14_tf"],
	["u8g2_font_courR14_tn","u8g2_font_courR14_tn"],
	["u8g2_font_courR14_tr","u8g2_font_courR14_tr"],
	["u8g2_font_courR18_tf","u8g2_font_courR18_tf"],
	["u8g2_font_courR18_tn","u8g2_font_courR18_tn"],
	["u8g2_font_courR18_tr","u8g2_font_courR18_tr"],
	["u8g2_font_courR24_tf","u8g2_font_courR24_tf"],
	["u8g2_font_courR24_tn","u8g2_font_courR24_tn"],
	["u8g2_font_courR24_tr","u8g2_font_courR24_tr"],
	["u8g2_font_crox1c_mf","u8g2_font_crox1c_mf"],
	["u8g2_font_crox1c_mn","u8g2_font_crox1c_mn"],
	["u8g2_font_crox1c_mr","u8g2_font_crox1c_mr"],
	["u8g2_font_crox1c_tf","u8g2_font_crox1c_tf"],
	["u8g2_font_crox1c_tn","u8g2_font_crox1c_tn"],
	["u8g2_font_crox1c_tr","u8g2_font_crox1c_tr"],
	["u8g2_font_crox1cb_mf","u8g2_font_crox1cb_mf"],
	["u8g2_font_crox1cb_mn","u8g2_font_crox1cb_mn"],
	["u8g2_font_crox1cb_mr","u8g2_font_crox1cb_mr"],
	["u8g2_font_crox1cb_tf","u8g2_font_crox1cb_tf"],
	["u8g2_font_crox1cb_tn","u8g2_font_crox1cb_tn"],
	["u8g2_font_crox1cb_tr","u8g2_font_crox1cb_tr"],
	["u8g2_font_crox1h_tf","u8g2_font_crox1h_tf"],
	["u8g2_font_crox1h_tn","u8g2_font_crox1h_tn"],
	["u8g2_font_crox1h_tr","u8g2_font_crox1h_tr"],
	["u8g2_font_crox1hb_tf","u8g2_font_crox1hb_tf"],
	["u8g2_font_crox1hb_tn","u8g2_font_crox1hb_tn"],
	["u8g2_font_crox1hb_tr","u8g2_font_crox1hb_tr"],
	["u8g2_font_crox1t_tf","u8g2_font_crox1t_tf"],
	["u8g2_font_crox1t_tn","u8g2_font_crox1t_tn"],
	["u8g2_font_crox1t_tr","u8g2_font_crox1t_tr"],
	["u8g2_font_crox1tb_tf","u8g2_font_crox1tb_tf"],
	["u8g2_font_crox1tb_tn","u8g2_font_crox1tb_tn"],
	["u8g2_font_crox1tb_tr","u8g2_font_crox1tb_tr"],
	["u8g2_font_crox2c_mf","u8g2_font_crox2c_mf"],
	["u8g2_font_crox2c_mn","u8g2_font_crox2c_mn"],
	["u8g2_font_crox2c_mr","u8g2_font_crox2c_mr"],
	["u8g2_font_crox2c_tf","u8g2_font_crox2c_tf"],
	["u8g2_font_crox2c_tn","u8g2_font_crox2c_tn"],
	["u8g2_font_crox2c_tr","u8g2_font_crox2c_tr"],
	["u8g2_font_crox2cb_mf","u8g2_font_crox2cb_mf"],
	["u8g2_font_crox2cb_mn","u8g2_font_crox2cb_mn"],
	["u8g2_font_crox2cb_mr","u8g2_font_crox2cb_mr"],
	["u8g2_font_crox2cb_tf","u8g2_font_crox2cb_tf"],
	["u8g2_font_crox2cb_tn","u8g2_font_crox2cb_tn"],
	["u8g2_font_crox2cb_tr","u8g2_font_crox2cb_tr"],
	["u8g2_font_crox2h_tf","u8g2_font_crox2h_tf"],
	["u8g2_font_crox2h_tn","u8g2_font_crox2h_tn"],
	["u8g2_font_crox2h_tr","u8g2_font_crox2h_tr"],
	["u8g2_font_crox2hb_tf","u8g2_font_crox2hb_tf"],
	["u8g2_font_crox2hb_tn","u8g2_font_crox2hb_tn"],
	["u8g2_font_crox2hb_tr","u8g2_font_crox2hb_tr"],
	["u8g2_font_crox2t_tf","u8g2_font_crox2t_tf"],
	["u8g2_font_crox2t_tn","u8g2_font_crox2t_tn"],
	["u8g2_font_crox2t_tr","u8g2_font_crox2t_tr"],
	["u8g2_font_crox2tb_tf","u8g2_font_crox2tb_tf"],
	["u8g2_font_crox2tb_tn","u8g2_font_crox2tb_tn"],
	["u8g2_font_crox2tb_tr","u8g2_font_crox2tb_tr"],
	["u8g2_font_crox3c_mf","u8g2_font_crox3c_mf"],
	["u8g2_font_crox3c_mn","u8g2_font_crox3c_mn"],
	["u8g2_font_crox3c_mr","u8g2_font_crox3c_mr"],
	["u8g2_font_crox3c_tf","u8g2_font_crox3c_tf"],
	["u8g2_font_crox3c_tn","u8g2_font_crox3c_tn"],
	["u8g2_font_crox3c_tr","u8g2_font_crox3c_tr"],
	["u8g2_font_crox3cb_mf","u8g2_font_crox3cb_mf"],
	["u8g2_font_crox3cb_mn","u8g2_font_crox3cb_mn"],
	["u8g2_font_crox3cb_mr","u8g2_font_crox3cb_mr"],
	["u8g2_font_crox3cb_tf","u8g2_font_crox3cb_tf"],
	["u8g2_font_crox3cb_tn","u8g2_font_crox3cb_tn"],
	["u8g2_font_crox3cb_tr","u8g2_font_crox3cb_tr"],
	["u8g2_font_crox3h_tf","u8g2_font_crox3h_tf"],
	["u8g2_font_crox3h_tn","u8g2_font_crox3h_tn"],
	["u8g2_font_crox3h_tr","u8g2_font_crox3h_tr"],
	["u8g2_font_crox3hb_tf","u8g2_font_crox3hb_tf"],
	["u8g2_font_crox3hb_tn","u8g2_font_crox3hb_tn"],
	["u8g2_font_crox3hb_tr","u8g2_font_crox3hb_tr"],
	["u8g2_font_crox3t_tf","u8g2_font_crox3t_tf"],
	["u8g2_font_crox3t_tn","u8g2_font_crox3t_tn"],
	["u8g2_font_crox3t_tr","u8g2_font_crox3t_tr"],
	["u8g2_font_crox3tb_tf","u8g2_font_crox3tb_tf"],
	["u8g2_font_crox3tb_tn","u8g2_font_crox3tb_tn"],
	["u8g2_font_crox3tb_tr","u8g2_font_crox3tb_tr"],
	["u8g2_font_crox4h_tf","u8g2_font_crox4h_tf"],
	["u8g2_font_crox4h_tn","u8g2_font_crox4h_tn"],
	["u8g2_font_crox4h_tr","u8g2_font_crox4h_tr"],
	["u8g2_font_crox4hb_tf","u8g2_font_crox4hb_tf"],
	["u8g2_font_crox4hb_tn","u8g2_font_crox4hb_tn"],
	["u8g2_font_crox4hb_tr","u8g2_font_crox4hb_tr"],
	["u8g2_font_crox4t_tf","u8g2_font_crox4t_tf"],
	["u8g2_font_crox4t_tn","u8g2_font_crox4t_tn"],
	["u8g2_font_crox4t_tr","u8g2_font_crox4t_tr"],
	["u8g2_font_crox4tb_tf","u8g2_font_crox4tb_tf"],
	["u8g2_font_crox4tb_tn","u8g2_font_crox4tb_tn"],
	["u8g2_font_crox4tb_tr","u8g2_font_crox4tb_tr"],
	["u8g2_font_crox5h_tf","u8g2_font_crox5h_tf"],
	["u8g2_font_crox5h_tn","u8g2_font_crox5h_tn"],
	["u8g2_font_crox5h_tr","u8g2_font_crox5h_tr"],
	["u8g2_font_crox5hb_tf","u8g2_font_crox5hb_tf"],
	["u8g2_font_crox5hb_tn","u8g2_font_crox5hb_tn"],
	["u8g2_font_crox5hb_tr","u8g2_font_crox5hb_tr"],
	["u8g2_font_crox5t_tf","u8g2_font_crox5t_tf"],
	["u8g2_font_crox5t_tn","u8g2_font_crox5t_tn"],
	["u8g2_font_crox5t_tr","u8g2_font_crox5t_tr"],
	["u8g2_font_crox5tb_tf","u8g2_font_crox5tb_tf"],
	["u8g2_font_crox5tb_tn","u8g2_font_crox5tb_tn"],
	["u8g2_font_crox5tb_tr","u8g2_font_crox5tb_tr"],
	["u8g2_font_cu12_h_symbols","u8g2_font_cu12_h_symbols"],
	["u8g2_font_cu12_he","u8g2_font_cu12_he"],
	["u8g2_font_cu12_hf","u8g2_font_cu12_hf"],
	["u8g2_font_cu12_hn","u8g2_font_cu12_hn"],
	["u8g2_font_cu12_hr","u8g2_font_cu12_hr"],
	["u8g2_font_cu12_me","u8g2_font_cu12_me"],
	["u8g2_font_cu12_mf","u8g2_font_cu12_mf"],
	["u8g2_font_cu12_mn","u8g2_font_cu12_mn"],
	["u8g2_font_cu12_mr","u8g2_font_cu12_mr"],
	["u8g2_font_cu12_t_arabic","u8g2_font_cu12_t_arabic"],
	["u8g2_font_cu12_t_cyrillic","u8g2_font_cu12_t_cyrillic"],
	["u8g2_font_cu12_t_greek","u8g2_font_cu12_t_greek"],
	["u8g2_font_cu12_t_hebrew","u8g2_font_cu12_t_hebrew"],
	["u8g2_font_cu12_t_symbols","u8g2_font_cu12_t_symbols"],
	["u8g2_font_cu12_t_tibetan","u8g2_font_cu12_t_tibetan"],
	["u8g2_font_cu12_te","u8g2_font_cu12_te"],
	["u8g2_font_cu12_tf","u8g2_font_cu12_tf"],
	["u8g2_font_cu12_tn","u8g2_font_cu12_tn"],
	["u8g2_font_cu12_tr","u8g2_font_cu12_tr"],
	["u8g2_font_cube_mel_tn","u8g2_font_cube_mel_tn"],
	["u8g2_font_cube_mel_tr","u8g2_font_cube_mel_tr"],
	["u8g2_font_cupcakemetoyourleader_tn","u8g2_font_cupcakemetoyourleader_tn"],
	["u8g2_font_cupcakemetoyourleader_tr","u8g2_font_cupcakemetoyourleader_tr"],
	["u8g2_font_cupcakemetoyourleader_tu","u8g2_font_cupcakemetoyourleader_tu"],
	["u8g2_font_CursivePixel_tr","u8g2_font_CursivePixel_tr"],
	["u8g2_font_cursor_tf","u8g2_font_cursor_tf"],
	["u8g2_font_cursor_tr","u8g2_font_cursor_tr"],
	["u8g2_font_DigitalDisco_te","u8g2_font_DigitalDisco_te"],
	["u8g2_font_DigitalDisco_tf","u8g2_font_DigitalDisco_tf"],
	["u8g2_font_DigitalDisco_tn","u8g2_font_DigitalDisco_tn"],
	["u8g2_font_DigitalDisco_tr","u8g2_font_DigitalDisco_tr"],
	["u8g2_font_DigitalDisco_tu","u8g2_font_DigitalDisco_tu"],
	["u8g2_font_DigitalDiscoThin_te","u8g2_font_DigitalDiscoThin_te"],
	["u8g2_font_DigitalDiscoThin_tf","u8g2_font_DigitalDiscoThin_tf"],
	["u8g2_font_DigitalDiscoThin_tn","u8g2_font_DigitalDiscoThin_tn"],
	["u8g2_font_DigitalDiscoThin_tr","u8g2_font_DigitalDiscoThin_tr"],
	["u8g2_font_DigitalDiscoThin_tu","u8g2_font_DigitalDiscoThin_tu"],
	["u8g2_font_diodesemimono_tr","u8g2_font_diodesemimono_tr"],
	["u8g2_font_disrespectfulteenager_tu","u8g2_font_disrespectfulteenager_tu"],
	["u8g2_font_emoticons21_tr","u8g2_font_emoticons21_tr"],
	["u8g2_font_Engrish_tf","u8g2_font_Engrish_tf"],
	["u8g2_font_Engrish_tr","u8g2_font_Engrish_tr"],
	["u8g2_font_etl14thai_t","u8g2_font_etl14thai_t"],
	["u8g2_font_etl16thai_t","u8g2_font_etl16thai_t"],
	["u8g2_font_etl24thai_t","u8g2_font_etl24thai_t"],
	["u8g2_font_f10_b_t_japanese1","u8g2_font_f10_b_t_japanese1"],
	["u8g2_font_f10_b_t_japanese2","u8g2_font_f10_b_t_japanese2"],
	["u8g2_font_f10_t_japanese1","u8g2_font_f10_t_japanese1"],
	["u8g2_font_f10_t_japanese2","u8g2_font_f10_t_japanese2"],
	["u8g2_font_f12_b_t_japanese1","u8g2_font_f12_b_t_japanese1"],
	["u8g2_font_f12_b_t_japanese2","u8g2_font_f12_b_t_japanese2"],
	["u8g2_font_f12_t_japanese1","u8g2_font_f12_t_japanese1"],
	["u8g2_font_f12_t_japanese2","u8g2_font_f12_t_japanese2"],
	["u8g2_font_f16_b_t_japanese1","u8g2_font_f16_b_t_japanese1"],
	["u8g2_font_f16_b_t_japanese2","u8g2_font_f16_b_t_japanese2"],
	["u8g2_font_f16_t_japanese1","u8g2_font_f16_t_japanese1"],
	["u8g2_font_f16_t_japanese2","u8g2_font_f16_t_japanese2"],
	["u8g2_font_fancypixels_tf","u8g2_font_fancypixels_tf"],
	["u8g2_font_fancypixels_tr","u8g2_font_fancypixels_tr"],
	["u8g2_font_fewture_tf","u8g2_font_fewture_tf"],
	["u8g2_font_fewture_tn","u8g2_font_fewture_tn"],
	["u8g2_font_fewture_tr","u8g2_font_fewture_tr"],
	["u8g2_font_finderskeepers_tf","u8g2_font_finderskeepers_tf"],
	["u8g2_font_finderskeepers_tn","u8g2_font_finderskeepers_tn"],
	["u8g2_font_finderskeepers_tr","u8g2_font_finderskeepers_tr"],
	["u8g2_font_freedoomr10_mu","u8g2_font_freedoomr10_mu"],
	["u8g2_font_freedoomr10_tu","u8g2_font_freedoomr10_tu"],
	["u8g2_font_freedoomr25_mn","u8g2_font_freedoomr25_mn"],
	["u8g2_font_freedoomr25_tn","u8g2_font_freedoomr25_tn"],
	["u8g2_font_frikativ_t_all","u8g2_font_frikativ_t_all"],
	["u8g2_font_frikativ_tf","u8g2_font_frikativ_tf"],
	["u8g2_font_frikativ_tr","u8g2_font_frikativ_tr"],
	["u8g2_font_fub11_t_symbol","u8g2_font_fub11_t_symbol"],
	["u8g2_font_fub11_tf","u8g2_font_fub11_tf"],
	["u8g2_font_fub11_tn","u8g2_font_fub11_tn"],
	["u8g2_font_fub11_tr","u8g2_font_fub11_tr"],
	["u8g2_font_fub14_t_symbol","u8g2_font_fub14_t_symbol"],
	["u8g2_font_fub14_tf","u8g2_font_fub14_tf"],
	["u8g2_font_fub14_tn","u8g2_font_fub14_tn"],
	["u8g2_font_fub14_tr","u8g2_font_fub14_tr"],
	["u8g2_font_fub17_t_symbol","u8g2_font_fub17_t_symbol"],
	["u8g2_font_fub17_tf","u8g2_font_fub17_tf"],
	["u8g2_font_fub17_tn","u8g2_font_fub17_tn"],
	["u8g2_font_fub17_tr","u8g2_font_fub17_tr"],
	["u8g2_font_fub20_t_symbol","u8g2_font_fub20_t_symbol"],
	["u8g2_font_fub20_tf","u8g2_font_fub20_tf"],
	["u8g2_font_fub20_tn","u8g2_font_fub20_tn"],
	["u8g2_font_fub20_tr","u8g2_font_fub20_tr"],
	["u8g2_font_fub25_t_symbol","u8g2_font_fub25_t_symbol"],
	["u8g2_font_fub25_tf","u8g2_font_fub25_tf"],
	["u8g2_font_fub25_tn","u8g2_font_fub25_tn"],
	["u8g2_font_fub25_tr","u8g2_font_fub25_tr"],
	["u8g2_font_fub30_t_symbol","u8g2_font_fub30_t_symbol"],
	["u8g2_font_fub30_tf","u8g2_font_fub30_tf"],
	["u8g2_font_fub30_tn","u8g2_font_fub30_tn"],
	["u8g2_font_fub30_tr","u8g2_font_fub30_tr"],
	["u8g2_font_fub35_t_symbol","u8g2_font_fub35_t_symbol"],
	["u8g2_font_fub35_tf","u8g2_font_fub35_tf"],
	["u8g2_font_fub35_tn","u8g2_font_fub35_tn"],
	["u8g2_font_fub35_tr","u8g2_font_fub35_tr"],
	["u8g2_font_fub42_t_symbol","u8g2_font_fub42_t_symbol"],
	["u8g2_font_fub42_tf","u8g2_font_fub42_tf"],
	["u8g2_font_fub42_tn","u8g2_font_fub42_tn"],
	["u8g2_font_fub42_tr","u8g2_font_fub42_tr"],
	["u8g2_font_fub49_t_symbol","u8g2_font_fub49_t_symbol"],
	["u8g2_font_fub49_tn","u8g2_font_fub49_tn"],
	["u8g2_font_fur11_t_symbol","u8g2_font_fur11_t_symbol"],
	["u8g2_font_fur11_tf","u8g2_font_fur11_tf"],
	["u8g2_font_fur11_tn","u8g2_font_fur11_tn"],
	["u8g2_font_fur11_tr","u8g2_font_fur11_tr"],
	["u8g2_font_fur14_t_symbol","u8g2_font_fur14_t_symbol"],
	["u8g2_font_fur14_tf","u8g2_font_fur14_tf"],
	["u8g2_font_fur14_tn","u8g2_font_fur14_tn"],
	["u8g2_font_fur14_tr","u8g2_font_fur14_tr"],
	["u8g2_font_fur17_t_symbol","u8g2_font_fur17_t_symbol"],
	["u8g2_font_fur17_tf","u8g2_font_fur17_tf"],
	["u8g2_font_fur17_tn","u8g2_font_fur17_tn"],
	["u8g2_font_fur17_tr","u8g2_font_fur17_tr"],
	["u8g2_font_fur20_t_symbol","u8g2_font_fur20_t_symbol"],
	["u8g2_font_fur20_tf","u8g2_font_fur20_tf"],
	["u8g2_font_fur20_tn","u8g2_font_fur20_tn"],
	["u8g2_font_fur20_tr","u8g2_font_fur20_tr"],
	["u8g2_font_fur25_t_symbol","u8g2_font_fur25_t_symbol"],
	["u8g2_font_fur25_tf","u8g2_font_fur25_tf"],
	["u8g2_font_fur25_tn","u8g2_font_fur25_tn"],
	["u8g2_font_fur25_tr","u8g2_font_fur25_tr"],
	["u8g2_font_fur30_t_symbol","u8g2_font_fur30_t_symbol"],
	["u8g2_font_fur30_tf","u8g2_font_fur30_tf"],
	["u8g2_font_fur30_tn","u8g2_font_fur30_tn"],
	["u8g2_font_fur30_tr","u8g2_font_fur30_tr"],
	["u8g2_font_fur35_t_symbol","u8g2_font_fur35_t_symbol"],
	["u8g2_font_fur35_tf","u8g2_font_fur35_tf"],
	["u8g2_font_fur35_tn","u8g2_font_fur35_tn"],
	["u8g2_font_fur35_tr","u8g2_font_fur35_tr"],
	["u8g2_font_fur42_t_symbol","u8g2_font_fur42_t_symbol"],
	["u8g2_font_fur42_tf","u8g2_font_fur42_tf"],
	["u8g2_font_fur42_tn","u8g2_font_fur42_tn"],
	["u8g2_font_fur42_tr","u8g2_font_fur42_tr"],
	["u8g2_font_fur49_t_symbol","u8g2_font_fur49_t_symbol"],
	["u8g2_font_fur49_tn","u8g2_font_fur49_tn"],
	["u8g2_font_ganj_nameh_sans10_t_all","u8g2_font_ganj_nameh_sans10_t_all"],
	["u8g2_font_ganj_nameh_sans12_t_all","u8g2_font_ganj_nameh_sans12_t_all"],
	["u8g2_font_ganj_nameh_sans14_t_all","u8g2_font_ganj_nameh_sans14_t_all"],
	["u8g2_font_ganj_nameh_sans16_t_all","u8g2_font_ganj_nameh_sans16_t_all"],
	["u8g2_font_gb16st_t_1","u8g2_font_gb16st_t_1"],
	["u8g2_font_gb16st_t_2","u8g2_font_gb16st_t_2"],
	["u8g2_font_gb16st_t_3","u8g2_font_gb16st_t_3"],
	["u8g2_font_gb24st_t_1","u8g2_font_gb24st_t_1"],
	["u8g2_font_gb24st_t_2","u8g2_font_gb24st_t_2"],
	["u8g2_font_gb24st_t_3","u8g2_font_gb24st_t_3"],
	["u8g2_font_Georgia7px_te","u8g2_font_Georgia7px_te"],
	["u8g2_font_Georgia7px_tf","u8g2_font_Georgia7px_tf"],
	["u8g2_font_Georgia7px_tr","u8g2_font_Georgia7px_tr"],
	["u8g2_font_glasstown_nbp_t_all","u8g2_font_glasstown_nbp_t_all"],
	["u8g2_font_glasstown_nbp_tf","u8g2_font_glasstown_nbp_tf"],
	["u8g2_font_glasstown_nbp_tn","u8g2_font_glasstown_nbp_tn"],
	["u8g2_font_glasstown_nbp_tr","u8g2_font_glasstown_nbp_tr"],
	["u8g2_font_guildenstern_nbp_t_all","u8g2_font_guildenstern_nbp_t_all"],
	["u8g2_font_guildenstern_nbp_tf","u8g2_font_guildenstern_nbp_tf"],
	["u8g2_font_guildenstern_nbp_tn","u8g2_font_guildenstern_nbp_tn"],
	["u8g2_font_guildenstern_nbp_tr","u8g2_font_guildenstern_nbp_tr"],
	["u8g2_font_habsburgchancery_t_all","u8g2_font_habsburgchancery_t_all"],
	["u8g2_font_habsburgchancery_tf","u8g2_font_habsburgchancery_tf"],
	["u8g2_font_habsburgchancery_tn","u8g2_font_habsburgchancery_tn"],
	["u8g2_font_habsburgchancery_tr","u8g2_font_habsburgchancery_tr"],
	["u8g2_font_halftone_tf","u8g2_font_halftone_tf"],
	["u8g2_font_halftone_tn","u8g2_font_halftone_tn"],
	["u8g2_font_halftone_tr","u8g2_font_halftone_tr"],
	["u8g2_font_haxrcorp4089_t_cyrillic","u8g2_font_haxrcorp4089_t_cyrillic"],
	["u8g2_font_haxrcorp4089_tn","u8g2_font_haxrcorp4089_tn"],
	["u8g2_font_haxrcorp4089_tr","u8g2_font_haxrcorp4089_tr"],
	["u8g2_font_heavybottom_tr","u8g2_font_heavybottom_tr"],
	["u8g2_font_helvB08_te","u8g2_font_helvB08_te"],
	["u8g2_font_helvB08_tf","u8g2_font_helvB08_tf"],
	["u8g2_font_helvB08_tn","u8g2_font_helvB08_tn"],
	["u8g2_font_helvB08_tr","u8g2_font_helvB08_tr"],
	["u8g2_font_helvB10_te","u8g2_font_helvB10_te"],
	["u8g2_font_helvB10_tf","u8g2_font_helvB10_tf"],
	["u8g2_font_helvB10_tn","u8g2_font_helvB10_tn"],
	["u8g2_font_helvB10_tr","u8g2_font_helvB10_tr"],
	["u8g2_font_helvB12_te","u8g2_font_helvB12_te"],
	["u8g2_font_helvB12_tf","u8g2_font_helvB12_tf"],
	["u8g2_font_helvB12_tn","u8g2_font_helvB12_tn"],
	["u8g2_font_helvB12_tr","u8g2_font_helvB12_tr"],
	["u8g2_font_helvB14_te","u8g2_font_helvB14_te"],
	["u8g2_font_helvB14_tf","u8g2_font_helvB14_tf"],
	["u8g2_font_helvB14_tn","u8g2_font_helvB14_tn"],
	["u8g2_font_helvB14_tr","u8g2_font_helvB14_tr"],
	["u8g2_font_helvB18_te","u8g2_font_helvB18_te"],
	["u8g2_font_helvB18_tf","u8g2_font_helvB18_tf"],
	["u8g2_font_helvB18_tn","u8g2_font_helvB18_tn"],
	["u8g2_font_helvB18_tr","u8g2_font_helvB18_tr"],
	["u8g2_font_helvB24_te","u8g2_font_helvB24_te"],
	["u8g2_font_helvB24_tf","u8g2_font_helvB24_tf"],
	["u8g2_font_helvB24_tn","u8g2_font_helvB24_tn"],
	["u8g2_font_helvB24_tr","u8g2_font_helvB24_tr"],
	["u8g2_font_HelvetiPixel_tr","u8g2_font_HelvetiPixel_tr"],
	["u8g2_font_HelvetiPixelOutline_te","u8g2_font_HelvetiPixelOutline_te"],
	["u8g2_font_HelvetiPixelOutline_tr","u8g2_font_HelvetiPixelOutline_tr"],
	["u8g2_font_helvR08_te","u8g2_font_helvR08_te"],
	["u8g2_font_helvR08_tf","u8g2_font_helvR08_tf"],
	["u8g2_font_helvR08_tn","u8g2_font_helvR08_tn"],
	["u8g2_font_helvR08_tr","u8g2_font_helvR08_tr"],
	["u8g2_font_helvR10_te","u8g2_font_helvR10_te"],
	["u8g2_font_helvR10_tf","u8g2_font_helvR10_tf"],
	["u8g2_font_helvR10_tn","u8g2_font_helvR10_tn"],
	["u8g2_font_helvR10_tr","u8g2_font_helvR10_tr"],
	["u8g2_font_helvR12_te","u8g2_font_helvR12_te"],
	["u8g2_font_helvR12_tf","u8g2_font_helvR12_tf"],
	["u8g2_font_helvR12_tn","u8g2_font_helvR12_tn"],
	["u8g2_font_helvR12_tr","u8g2_font_helvR12_tr"],
	["u8g2_font_helvR14_te","u8g2_font_helvR14_te"],
	["u8g2_font_helvR14_tf","u8g2_font_helvR14_tf"],
	["u8g2_font_helvR14_tn","u8g2_font_helvR14_tn"],
	["u8g2_font_helvR14_tr","u8g2_font_helvR14_tr"],
	["u8g2_font_helvR18_te","u8g2_font_helvR18_te"],
	["u8g2_font_helvR18_tf","u8g2_font_helvR18_tf"],
	["u8g2_font_helvR18_tn","u8g2_font_helvR18_tn"],
	["u8g2_font_helvR18_tr","u8g2_font_helvR18_tr"],
	["u8g2_font_helvR24_te","u8g2_font_helvR24_te"],
	["u8g2_font_helvR24_tf","u8g2_font_helvR24_tf"],
	["u8g2_font_helvR24_tn","u8g2_font_helvR24_tn"],
	["u8g2_font_helvR24_tr","u8g2_font_helvR24_tr"],
	["u8g2_font_iconquadpix_m_all","u8g2_font_iconquadpix_m_all"],
	["u8g2_font_ImpactBits_tr","u8g2_font_ImpactBits_tr"],
	["u8g2_font_inb16_mf","u8g2_font_inb16_mf"],
	["u8g2_font_inb16_mn","u8g2_font_inb16_mn"],
	["u8g2_font_inb16_mr","u8g2_font_inb16_mr"],
	["u8g2_font_inb19_mf","u8g2_font_inb19_mf"],
	["u8g2_font_inb19_mn","u8g2_font_inb19_mn"],
	["u8g2_font_inb19_mr","u8g2_font_inb19_mr"],
	["u8g2_font_inb21_mf","u8g2_font_inb21_mf"],
	["u8g2_font_inb21_mn","u8g2_font_inb21_mn"],
	["u8g2_font_inb21_mr","u8g2_font_inb21_mr"],
	["u8g2_font_inb24_mf","u8g2_font_inb24_mf"],
	["u8g2_font_inb24_mn","u8g2_font_inb24_mn"],
	["u8g2_font_inb24_mr","u8g2_font_inb24_mr"],
	["u8g2_font_inb27_mf","u8g2_font_inb27_mf"],
	["u8g2_font_inb27_mn","u8g2_font_inb27_mn"],
	["u8g2_font_inb27_mr","u8g2_font_inb27_mr"],
	["u8g2_font_inb30_mf","u8g2_font_inb30_mf"],
	["u8g2_font_inb30_mn","u8g2_font_inb30_mn"],
	["u8g2_font_inb30_mr","u8g2_font_inb30_mr"],
	["u8g2_font_inb33_mf","u8g2_font_inb33_mf"],
	["u8g2_font_inb33_mn","u8g2_font_inb33_mn"],
	["u8g2_font_inb33_mr","u8g2_font_inb33_mr"],
	["u8g2_font_inb38_mf","u8g2_font_inb38_mf"],
	["u8g2_font_inb38_mn","u8g2_font_inb38_mn"],
	["u8g2_font_inb38_mr","u8g2_font_inb38_mr"],
	["u8g2_font_inb42_mf","u8g2_font_inb42_mf"],
	["u8g2_font_inb42_mn","u8g2_font_inb42_mn"],
	["u8g2_font_inb42_mr","u8g2_font_inb42_mr"],
	["u8g2_font_inb46_mf","u8g2_font_inb46_mf"],
	["u8g2_font_inb46_mn","u8g2_font_inb46_mn"],
	["u8g2_font_inb46_mr","u8g2_font_inb46_mr"],
	["u8g2_font_inb49_mf","u8g2_font_inb49_mf"],
	["u8g2_font_inb49_mn","u8g2_font_inb49_mn"],
	["u8g2_font_inb49_mr","u8g2_font_inb49_mr"],
	["u8g2_font_inb53_mf","u8g2_font_inb53_mf"],
	["u8g2_font_inb53_mn","u8g2_font_inb53_mn"],
	["u8g2_font_inb53_mr","u8g2_font_inb53_mr"],
	["u8g2_font_inb57_mn","u8g2_font_inb57_mn"],
	["u8g2_font_inb63_mn","u8g2_font_inb63_mn"],
	["u8g2_font_inr16_mf","u8g2_font_inr16_mf"],
	["u8g2_font_inr16_mn","u8g2_font_inr16_mn"],
	["u8g2_font_inr16_mr","u8g2_font_inr16_mr"],
	["u8g2_font_inr19_mf","u8g2_font_inr19_mf"],
	["u8g2_font_inr19_mn","u8g2_font_inr19_mn"],
	["u8g2_font_inr19_mr","u8g2_font_inr19_mr"],
	["u8g2_font_inr21_mf","u8g2_font_inr21_mf"],
	["u8g2_font_inr21_mn","u8g2_font_inr21_mn"],
	["u8g2_font_inr21_mr","u8g2_font_inr21_mr"],
	["u8g2_font_inr24_mf","u8g2_font_inr24_mf"],
	["u8g2_font_inr24_mn","u8g2_font_inr24_mn"],
	["u8g2_font_inr24_mr","u8g2_font_inr24_mr"],
	["u8g2_font_inr24_t_cyrillic","u8g2_font_inr24_t_cyrillic"],
	["u8g2_font_inr27_mf","u8g2_font_inr27_mf"],
	["u8g2_font_inr27_mn","u8g2_font_inr27_mn"],
	["u8g2_font_inr27_mr","u8g2_font_inr27_mr"],
	["u8g2_font_inr27_t_cyrillic","u8g2_font_inr27_t_cyrillic"],
	["u8g2_font_inr30_mf","u8g2_font_inr30_mf"],
	["u8g2_font_inr30_mn","u8g2_font_inr30_mn"],
	["u8g2_font_inr30_mr","u8g2_font_inr30_mr"],
	["u8g2_font_inr30_t_cyrillic","u8g2_font_inr30_t_cyrillic"],
	["u8g2_font_inr33_mf","u8g2_font_inr33_mf"],
	["u8g2_font_inr33_mn","u8g2_font_inr33_mn"],
	["u8g2_font_inr33_mr","u8g2_font_inr33_mr"],
	["u8g2_font_inr33_t_cyrillic","u8g2_font_inr33_t_cyrillic"],
	["u8g2_font_inr38_mf","u8g2_font_inr38_mf"],
	["u8g2_font_inr38_mn","u8g2_font_inr38_mn"],
	["u8g2_font_inr38_mr","u8g2_font_inr38_mr"],
	["u8g2_font_inr38_t_cyrillic","u8g2_font_inr38_t_cyrillic"],
	["u8g2_font_inr42_mf","u8g2_font_inr42_mf"],
	["u8g2_font_inr42_mn","u8g2_font_inr42_mn"],
	["u8g2_font_inr42_mr","u8g2_font_inr42_mr"],
	["u8g2_font_inr42_t_cyrillic","u8g2_font_inr42_t_cyrillic"],
	["u8g2_font_inr46_mf","u8g2_font_inr46_mf"],
	["u8g2_font_inr46_mn","u8g2_font_inr46_mn"],
	["u8g2_font_inr46_mr","u8g2_font_inr46_mr"],
	["u8g2_font_inr46_t_cyrillic","u8g2_font_inr46_t_cyrillic"],
	["u8g2_font_inr49_mf","u8g2_font_inr49_mf"],
	["u8g2_font_inr49_mn","u8g2_font_inr49_mn"],
	["u8g2_font_inr49_mr","u8g2_font_inr49_mr"],
	["u8g2_font_inr49_t_cyrillic","u8g2_font_inr49_t_cyrillic"],
	["u8g2_font_inr53_mf","u8g2_font_inr53_mf"],
	["u8g2_font_inr53_mn","u8g2_font_inr53_mn"],
	["u8g2_font_inr53_mr","u8g2_font_inr53_mr"],
	["u8g2_font_inr53_t_cyrillic","u8g2_font_inr53_t_cyrillic"],
	["u8g2_font_inr57_mn","u8g2_font_inr57_mn"],
	["u8g2_font_inr62_mn","u8g2_font_inr62_mn"],
	["u8g2_font_IPAandRUSLCD_te","u8g2_font_IPAandRUSLCD_te"],
	["u8g2_font_IPAandRUSLCD_tf","u8g2_font_IPAandRUSLCD_tf"],
	["u8g2_font_IPAandRUSLCD_tr","u8g2_font_IPAandRUSLCD_tr"],
	["u8g2_font_iranian_sans_10_t_all","u8g2_font_iranian_sans_10_t_all"],
	["u8g2_font_iranian_sans_12_t_all","u8g2_font_iranian_sans_12_t_all"],
	["u8g2_font_iranian_sans_14_t_all","u8g2_font_iranian_sans_14_t_all"],
	["u8g2_font_iranian_sans_16_t_all","u8g2_font_iranian_sans_16_t_all"],
	["u8g2_font_iranian_sans_8_t_all","u8g2_font_iranian_sans_8_t_all"],
	["u8g2_font_jinxedwizards_tr","u8g2_font_jinxedwizards_tr"],
	["u8g2_font_koleeko_tf","u8g2_font_koleeko_tf"],
	["u8g2_font_koleeko_tn","u8g2_font_koleeko_tn"],
	["u8g2_font_koleeko_tr","u8g2_font_koleeko_tr"],
	["u8g2_font_koleeko_tu","u8g2_font_koleeko_tu"],
	["u8g2_font_lastapprenticebold_tr","u8g2_font_lastapprenticebold_tr"],
	["u8g2_font_lastapprenticethin_tr","u8g2_font_lastapprenticethin_tr"],
	["u8g2_font_lastpriestess_tr","u8g2_font_lastpriestess_tr"],
	["u8g2_font_lastpriestess_tu","u8g2_font_lastpriestess_tu"],
	["u8g2_font_logisoso16_tf","u8g2_font_logisoso16_tf"],
	["u8g2_font_logisoso16_tn","u8g2_font_logisoso16_tn"],
	["u8g2_font_logisoso16_tr","u8g2_font_logisoso16_tr"],
	["u8g2_font_logisoso18_tf","u8g2_font_logisoso18_tf"],
	["u8g2_font_logisoso18_tn","u8g2_font_logisoso18_tn"],
	["u8g2_font_logisoso18_tr","u8g2_font_logisoso18_tr"],
	["u8g2_font_logisoso20_tf","u8g2_font_logisoso20_tf"],
	["u8g2_font_logisoso20_tn","u8g2_font_logisoso20_tn"],
	["u8g2_font_logisoso20_tr","u8g2_font_logisoso20_tr"],
	["u8g2_font_logisoso22_tf","u8g2_font_logisoso22_tf"],
	["u8g2_font_logisoso22_tn","u8g2_font_logisoso22_tn"],
	["u8g2_font_logisoso22_tr","u8g2_font_logisoso22_tr"],
	["u8g2_font_logisoso24_tf","u8g2_font_logisoso24_tf"],
	["u8g2_font_logisoso24_tn","u8g2_font_logisoso24_tn"],
	["u8g2_font_logisoso24_tr","u8g2_font_logisoso24_tr"],
	["u8g2_font_logisoso26_tf","u8g2_font_logisoso26_tf"],
	["u8g2_font_logisoso26_tn","u8g2_font_logisoso26_tn"],
	["u8g2_font_logisoso26_tr","u8g2_font_logisoso26_tr"],
	["u8g2_font_logisoso28_tf","u8g2_font_logisoso28_tf"],
	["u8g2_font_logisoso28_tn","u8g2_font_logisoso28_tn"],
	["u8g2_font_logisoso28_tr","u8g2_font_logisoso28_tr"],
	["u8g2_font_logisoso30_tf","u8g2_font_logisoso30_tf"],
	["u8g2_font_logisoso30_tn","u8g2_font_logisoso30_tn"],
	["u8g2_font_logisoso30_tr","u8g2_font_logisoso30_tr"],
	["u8g2_font_logisoso32_tf","u8g2_font_logisoso32_tf"],
	["u8g2_font_logisoso32_tn","u8g2_font_logisoso32_tn"],
	["u8g2_font_logisoso32_tr","u8g2_font_logisoso32_tr"],
	["u8g2_font_logisoso34_tf","u8g2_font_logisoso34_tf"],
	["u8g2_font_logisoso34_tn","u8g2_font_logisoso34_tn"],
	["u8g2_font_logisoso34_tr","u8g2_font_logisoso34_tr"],
	["u8g2_font_logisoso38_tf","u8g2_font_logisoso38_tf"],
	["u8g2_font_logisoso38_tn","u8g2_font_logisoso38_tn"],
	["u8g2_font_logisoso38_tr","u8g2_font_logisoso38_tr"],
	["u8g2_font_logisoso42_tf","u8g2_font_logisoso42_tf"],
	["u8g2_font_logisoso42_tn","u8g2_font_logisoso42_tn"],
	["u8g2_font_logisoso42_tr","u8g2_font_logisoso42_tr"],
	["u8g2_font_logisoso46_tf","u8g2_font_logisoso46_tf"],
	["u8g2_font_logisoso46_tn","u8g2_font_logisoso46_tn"],
	["u8g2_font_logisoso46_tr","u8g2_font_logisoso46_tr"],
	["u8g2_font_logisoso50_tf","u8g2_font_logisoso50_tf"],
	["u8g2_font_logisoso50_tn","u8g2_font_logisoso50_tn"],
	["u8g2_font_logisoso50_tr","u8g2_font_logisoso50_tr"],
	["u8g2_font_logisoso54_tf","u8g2_font_logisoso54_tf"],
	["u8g2_font_logisoso54_tn","u8g2_font_logisoso54_tn"],
	["u8g2_font_logisoso54_tr","u8g2_font_logisoso54_tr"],
	["u8g2_font_logisoso58_tf","u8g2_font_logisoso58_tf"],
	["u8g2_font_logisoso58_tn","u8g2_font_logisoso58_tn"],
	["u8g2_font_logisoso58_tr","u8g2_font_logisoso58_tr"],
	["u8g2_font_logisoso62_tn","u8g2_font_logisoso62_tn"],
	["u8g2_font_logisoso78_tn","u8g2_font_logisoso78_tn"],
	["u8g2_font_logisoso92_tn","u8g2_font_logisoso92_tn"],
	["u8g2_font_lubB08_te","u8g2_font_lubB08_te"],
	["u8g2_font_lubB08_tf","u8g2_font_lubB08_tf"],
	["u8g2_font_lubB08_tn","u8g2_font_lubB08_tn"],
	["u8g2_font_lubB08_tr","u8g2_font_lubB08_tr"],
	["u8g2_font_lubB10_te","u8g2_font_lubB10_te"],
	["u8g2_font_lubB10_tf","u8g2_font_lubB10_tf"],
	["u8g2_font_lubB10_tn","u8g2_font_lubB10_tn"],
	["u8g2_font_lubB10_tr","u8g2_font_lubB10_tr"],
	["u8g2_font_lubB12_te","u8g2_font_lubB12_te"],
	["u8g2_font_lubB12_tf","u8g2_font_lubB12_tf"],
	["u8g2_font_lubB12_tn","u8g2_font_lubB12_tn"],
	["u8g2_font_lubB12_tr","u8g2_font_lubB12_tr"],
	["u8g2_font_lubB14_te","u8g2_font_lubB14_te"],
	["u8g2_font_lubB14_tf","u8g2_font_lubB14_tf"],
	["u8g2_font_lubB14_tn","u8g2_font_lubB14_tn"],
	["u8g2_font_lubB14_tr","u8g2_font_lubB14_tr"],
	["u8g2_font_lubB18_te","u8g2_font_lubB18_te"],
	["u8g2_font_lubB18_tf","u8g2_font_lubB18_tf"],
	["u8g2_font_lubB18_tn","u8g2_font_lubB18_tn"],
	["u8g2_font_lubB18_tr","u8g2_font_lubB18_tr"],
	["u8g2_font_lubB19_te","u8g2_font_lubB19_te"],
	["u8g2_font_lubB19_tf","u8g2_font_lubB19_tf"],
	["u8g2_font_lubB19_tn","u8g2_font_lubB19_tn"],
	["u8g2_font_lubB19_tr","u8g2_font_lubB19_tr"],
	["u8g2_font_lubB24_te","u8g2_font_lubB24_te"],
	["u8g2_font_lubB24_tf","u8g2_font_lubB24_tf"],
	["u8g2_font_lubB24_tn","u8g2_font_lubB24_tn"],
	["u8g2_font_lubB24_tr","u8g2_font_lubB24_tr"],
	["u8g2_font_lubBI08_te","u8g2_font_lubBI08_te"],
	["u8g2_font_lubBI08_tf","u8g2_font_lubBI08_tf"],
	["u8g2_font_lubBI08_tn","u8g2_font_lubBI08_tn"],
	["u8g2_font_lubBI08_tr","u8g2_font_lubBI08_tr"],
	["u8g2_font_lubBI10_te","u8g2_font_lubBI10_te"],
	["u8g2_font_lubBI10_tf","u8g2_font_lubBI10_tf"],
	["u8g2_font_lubBI10_tn","u8g2_font_lubBI10_tn"],
	["u8g2_font_lubBI10_tr","u8g2_font_lubBI10_tr"],
	["u8g2_font_lubBI12_te","u8g2_font_lubBI12_te"],
	["u8g2_font_lubBI12_tf","u8g2_font_lubBI12_tf"],
	["u8g2_font_lubBI12_tn","u8g2_font_lubBI12_tn"],
	["u8g2_font_lubBI12_tr","u8g2_font_lubBI12_tr"],
	["u8g2_font_lubBI14_te","u8g2_font_lubBI14_te"],
	["u8g2_font_lubBI14_tf","u8g2_font_lubBI14_tf"],
	["u8g2_font_lubBI14_tn","u8g2_font_lubBI14_tn"],
	["u8g2_font_lubBI14_tr","u8g2_font_lubBI14_tr"],
	["u8g2_font_lubBI18_te","u8g2_font_lubBI18_te"],
	["u8g2_font_lubBI18_tf","u8g2_font_lubBI18_tf"],
	["u8g2_font_lubBI18_tn","u8g2_font_lubBI18_tn"],
	["u8g2_font_lubBI18_tr","u8g2_font_lubBI18_tr"],
	["u8g2_font_lubBI19_te","u8g2_font_lubBI19_te"],
	["u8g2_font_lubBI19_tf","u8g2_font_lubBI19_tf"],
	["u8g2_font_lubBI19_tn","u8g2_font_lubBI19_tn"],
	["u8g2_font_lubBI19_tr","u8g2_font_lubBI19_tr"],
	["u8g2_font_lubBI24_te","u8g2_font_lubBI24_te"],
	["u8g2_font_lubBI24_tf","u8g2_font_lubBI24_tf"],
	["u8g2_font_lubBI24_tn","u8g2_font_lubBI24_tn"],
	["u8g2_font_lubBI24_tr","u8g2_font_lubBI24_tr"],
	["u8g2_font_lubI08_te","u8g2_font_lubI08_te"],
	["u8g2_font_lubI08_tf","u8g2_font_lubI08_tf"],
	["u8g2_font_lubI08_tn","u8g2_font_lubI08_tn"],
	["u8g2_font_lubI08_tr","u8g2_font_lubI08_tr"],
	["u8g2_font_lubI10_te","u8g2_font_lubI10_te"],
	["u8g2_font_lubI10_tf","u8g2_font_lubI10_tf"],
	["u8g2_font_lubI10_tn","u8g2_font_lubI10_tn"],
	["u8g2_font_lubI10_tr","u8g2_font_lubI10_tr"],
	["u8g2_font_lubI12_te","u8g2_font_lubI12_te"],
	["u8g2_font_lubI12_tf","u8g2_font_lubI12_tf"],
	["u8g2_font_lubI12_tn","u8g2_font_lubI12_tn"],
	["u8g2_font_lubI12_tr","u8g2_font_lubI12_tr"],
	["u8g2_font_lubI14_te","u8g2_font_lubI14_te"],
	["u8g2_font_lubI14_tf","u8g2_font_lubI14_tf"],
	["u8g2_font_lubI14_tn","u8g2_font_lubI14_tn"],
	["u8g2_font_lubI14_tr","u8g2_font_lubI14_tr"],
	["u8g2_font_lubI18_te","u8g2_font_lubI18_te"],
	["u8g2_font_lubI18_tf","u8g2_font_lubI18_tf"],
	["u8g2_font_lubI18_tn","u8g2_font_lubI18_tn"],
	["u8g2_font_lubI18_tr","u8g2_font_lubI18_tr"],
	["u8g2_font_lubI19_te","u8g2_font_lubI19_te"],
	["u8g2_font_lubI19_tf","u8g2_font_lubI19_tf"],
	["u8g2_font_lubI19_tn","u8g2_font_lubI19_tn"],
	["u8g2_font_lubI19_tr","u8g2_font_lubI19_tr"],
	["u8g2_font_lubI24_te","u8g2_font_lubI24_te"],
	["u8g2_font_lubI24_tf","u8g2_font_lubI24_tf"],
	["u8g2_font_lubI24_tn","u8g2_font_lubI24_tn"],
	["u8g2_font_lubI24_tr","u8g2_font_lubI24_tr"],
	["u8g2_font_luBIS08_te","u8g2_font_luBIS08_te"],
	["u8g2_font_luBIS08_tf","u8g2_font_luBIS08_tf"],
	["u8g2_font_luBIS08_tn","u8g2_font_luBIS08_tn"],
	["u8g2_font_luBIS08_tr","u8g2_font_luBIS08_tr"],
	["u8g2_font_luBIS10_te","u8g2_font_luBIS10_te"],
	["u8g2_font_luBIS10_tf","u8g2_font_luBIS10_tf"],
	["u8g2_font_luBIS10_tn","u8g2_font_luBIS10_tn"],
	["u8g2_font_luBIS10_tr","u8g2_font_luBIS10_tr"],
	["u8g2_font_luBIS12_te","u8g2_font_luBIS12_te"],
	["u8g2_font_luBIS12_tf","u8g2_font_luBIS12_tf"],
	["u8g2_font_luBIS12_tn","u8g2_font_luBIS12_tn"],
	["u8g2_font_luBIS12_tr","u8g2_font_luBIS12_tr"],
	["u8g2_font_luBIS14_te","u8g2_font_luBIS14_te"],
	["u8g2_font_luBIS14_tf","u8g2_font_luBIS14_tf"],
	["u8g2_font_luBIS14_tn","u8g2_font_luBIS14_tn"],
	["u8g2_font_luBIS14_tr","u8g2_font_luBIS14_tr"],
	["u8g2_font_luBIS18_te","u8g2_font_luBIS18_te"],
	["u8g2_font_luBIS18_tf","u8g2_font_luBIS18_tf"],
	["u8g2_font_luBIS18_tn","u8g2_font_luBIS18_tn"],
	["u8g2_font_luBIS18_tr","u8g2_font_luBIS18_tr"],
	["u8g2_font_luBIS19_te","u8g2_font_luBIS19_te"],
	["u8g2_font_luBIS19_tf","u8g2_font_luBIS19_tf"],
	["u8g2_font_luBIS19_tn","u8g2_font_luBIS19_tn"],
	["u8g2_font_luBIS19_tr","u8g2_font_luBIS19_tr"],
	["u8g2_font_luBIS24_te","u8g2_font_luBIS24_te"],
	["u8g2_font_luBIS24_tf","u8g2_font_luBIS24_tf"],
	["u8g2_font_luBIS24_tn","u8g2_font_luBIS24_tn"],
	["u8g2_font_luBIS24_tr","u8g2_font_luBIS24_tr"],
	["u8g2_font_lubR08_te","u8g2_font_lubR08_te"],
	["u8g2_font_lubR08_tf","u8g2_font_lubR08_tf"],
	["u8g2_font_lubR08_tn","u8g2_font_lubR08_tn"],
	["u8g2_font_lubR08_tr","u8g2_font_lubR08_tr"],
	["u8g2_font_lubR10_te","u8g2_font_lubR10_te"],
	["u8g2_font_lubR10_tf","u8g2_font_lubR10_tf"],
	["u8g2_font_lubR10_tn","u8g2_font_lubR10_tn"],
	["u8g2_font_lubR10_tr","u8g2_font_lubR10_tr"],
	["u8g2_font_lubR12_te","u8g2_font_lubR12_te"],
	["u8g2_font_lubR12_tf","u8g2_font_lubR12_tf"],
	["u8g2_font_lubR12_tn","u8g2_font_lubR12_tn"],
	["u8g2_font_lubR12_tr","u8g2_font_lubR12_tr"],
	["u8g2_font_lubR14_te","u8g2_font_lubR14_te"],
	["u8g2_font_lubR14_tf","u8g2_font_lubR14_tf"],
	["u8g2_font_lubR14_tn","u8g2_font_lubR14_tn"],
	["u8g2_font_lubR14_tr","u8g2_font_lubR14_tr"],
	["u8g2_font_lubR18_te","u8g2_font_lubR18_te"],
	["u8g2_font_lubR18_tf","u8g2_font_lubR18_tf"],
	["u8g2_font_lubR18_tn","u8g2_font_lubR18_tn"],
	["u8g2_font_lubR18_tr","u8g2_font_lubR18_tr"],
	["u8g2_font_lubR19_te","u8g2_font_lubR19_te"],
	["u8g2_font_lubR19_tf","u8g2_font_lubR19_tf"],
	["u8g2_font_lubR19_tn","u8g2_font_lubR19_tn"],
	["u8g2_font_lubR19_tr","u8g2_font_lubR19_tr"],
	["u8g2_font_lubR24_te","u8g2_font_lubR24_te"],
	["u8g2_font_lubR24_tf","u8g2_font_lubR24_tf"],
	["u8g2_font_lubR24_tn","u8g2_font_lubR24_tn"],
	["u8g2_font_lubR24_tr","u8g2_font_lubR24_tr"],
	["u8g2_font_luBS08_te","u8g2_font_luBS08_te"],
	["u8g2_font_luBS08_tf","u8g2_font_luBS08_tf"],
	["u8g2_font_luBS08_tn","u8g2_font_luBS08_tn"],
	["u8g2_font_luBS08_tr","u8g2_font_luBS08_tr"],
	["u8g2_font_luBS10_te","u8g2_font_luBS10_te"],
	["u8g2_font_luBS10_tf","u8g2_font_luBS10_tf"],
	["u8g2_font_luBS10_tn","u8g2_font_luBS10_tn"],
	["u8g2_font_luBS10_tr","u8g2_font_luBS10_tr"],
	["u8g2_font_luBS12_te","u8g2_font_luBS12_te"],
	["u8g2_font_luBS12_tf","u8g2_font_luBS12_tf"],
	["u8g2_font_luBS12_tn","u8g2_font_luBS12_tn"],
	["u8g2_font_luBS12_tr","u8g2_font_luBS12_tr"],
	["u8g2_font_luBS14_te","u8g2_font_luBS14_te"],
	["u8g2_font_luBS14_tf","u8g2_font_luBS14_tf"],
	["u8g2_font_luBS14_tn","u8g2_font_luBS14_tn"],
	["u8g2_font_luBS14_tr","u8g2_font_luBS14_tr"],
	["u8g2_font_luBS18_te","u8g2_font_luBS18_te"],
	["u8g2_font_luBS18_tf","u8g2_font_luBS18_tf"],
	["u8g2_font_luBS18_tn","u8g2_font_luBS18_tn"],
	["u8g2_font_luBS18_tr","u8g2_font_luBS18_tr"],
	["u8g2_font_luBS19_te","u8g2_font_luBS19_te"],
	["u8g2_font_luBS19_tf","u8g2_font_luBS19_tf"],
	["u8g2_font_luBS19_tn","u8g2_font_luBS19_tn"],
	["u8g2_font_luBS19_tr","u8g2_font_luBS19_tr"],
	["u8g2_font_luBS24_te","u8g2_font_luBS24_te"],
	["u8g2_font_luBS24_tf","u8g2_font_luBS24_tf"],
	["u8g2_font_luBS24_tn","u8g2_font_luBS24_tn"],
	["u8g2_font_luBS24_tr","u8g2_font_luBS24_tr"],
	["u8g2_font_lucasarts_scumm_subtitle_o_tf","u8g2_font_lucasarts_scumm_subtitle_o_tf"],
	["u8g2_font_lucasarts_scumm_subtitle_o_tn","u8g2_font_lucasarts_scumm_subtitle_o_tn"],
	["u8g2_font_lucasarts_scumm_subtitle_o_tr","u8g2_font_lucasarts_scumm_subtitle_o_tr"],
	["u8g2_font_lucasarts_scumm_subtitle_r_tf","u8g2_font_lucasarts_scumm_subtitle_r_tf"],
	["u8g2_font_lucasarts_scumm_subtitle_r_tn","u8g2_font_lucasarts_scumm_subtitle_r_tn"],
	["u8g2_font_lucasarts_scumm_subtitle_r_tr","u8g2_font_lucasarts_scumm_subtitle_r_tr"],
	["u8g2_font_lucasfont_alternate_tf","u8g2_font_lucasfont_alternate_tf"],
	["u8g2_font_lucasfont_alternate_tn","u8g2_font_lucasfont_alternate_tn"],
	["u8g2_font_lucasfont_alternate_tr","u8g2_font_lucasfont_alternate_tr"],
	["u8g2_font_luIS08_te","u8g2_font_luIS08_te"],
	["u8g2_font_luIS08_tf","u8g2_font_luIS08_tf"],
	["u8g2_font_luIS08_tn","u8g2_font_luIS08_tn"],
	["u8g2_font_luIS08_tr","u8g2_font_luIS08_tr"],
	["u8g2_font_luIS10_te","u8g2_font_luIS10_te"],
	["u8g2_font_luIS10_tf","u8g2_font_luIS10_tf"],
	["u8g2_font_luIS10_tn","u8g2_font_luIS10_tn"],
	["u8g2_font_luIS10_tr","u8g2_font_luIS10_tr"],
	["u8g2_font_luIS12_te","u8g2_font_luIS12_te"],
	["u8g2_font_luIS12_tf","u8g2_font_luIS12_tf"],
	["u8g2_font_luIS12_tn","u8g2_font_luIS12_tn"],
	["u8g2_font_luIS12_tr","u8g2_font_luIS12_tr"],
	["u8g2_font_luIS14_te","u8g2_font_luIS14_te"],
	["u8g2_font_luIS14_tf","u8g2_font_luIS14_tf"],
	["u8g2_font_luIS14_tn","u8g2_font_luIS14_tn"],
	["u8g2_font_luIS14_tr","u8g2_font_luIS14_tr"],
	["u8g2_font_luIS18_te","u8g2_font_luIS18_te"],
	["u8g2_font_luIS18_tf","u8g2_font_luIS18_tf"],
	["u8g2_font_luIS18_tn","u8g2_font_luIS18_tn"],
	["u8g2_font_luIS18_tr","u8g2_font_luIS18_tr"],
	["u8g2_font_luIS19_te","u8g2_font_luIS19_te"],
	["u8g2_font_luIS19_tf","u8g2_font_luIS19_tf"],
	["u8g2_font_luIS19_tn","u8g2_font_luIS19_tn"],
	["u8g2_font_luIS19_tr","u8g2_font_luIS19_tr"],
	["u8g2_font_luIS24_te","u8g2_font_luIS24_te"],
	["u8g2_font_luIS24_tf","u8g2_font_luIS24_tf"],
	["u8g2_font_luIS24_tn","u8g2_font_luIS24_tn"],
	["u8g2_font_luIS24_tr","u8g2_font_luIS24_tr"],
	["u8g2_font_luRS08_te","u8g2_font_luRS08_te"],
	["u8g2_font_luRS08_tf","u8g2_font_luRS08_tf"],
	["u8g2_font_luRS08_tn","u8g2_font_luRS08_tn"],
	["u8g2_font_luRS08_tr","u8g2_font_luRS08_tr"],
	["u8g2_font_luRS10_te","u8g2_font_luRS10_te"],
	["u8g2_font_luRS10_tf","u8g2_font_luRS10_tf"],
	["u8g2_font_luRS10_tn","u8g2_font_luRS10_tn"],
	["u8g2_font_luRS10_tr","u8g2_font_luRS10_tr"],
	["u8g2_font_luRS12_te","u8g2_font_luRS12_te"],
	["u8g2_font_luRS12_tf","u8g2_font_luRS12_tf"],
	["u8g2_font_luRS12_tn","u8g2_font_luRS12_tn"],
	["u8g2_font_luRS12_tr","u8g2_font_luRS12_tr"],
	["u8g2_font_luRS14_te","u8g2_font_luRS14_te"],
	["u8g2_font_luRS14_tf","u8g2_font_luRS14_tf"],
	["u8g2_font_luRS14_tn","u8g2_font_luRS14_tn"],
	["u8g2_font_luRS14_tr","u8g2_font_luRS14_tr"],
	["u8g2_font_luRS18_te","u8g2_font_luRS18_te"],
	["u8g2_font_luRS18_tf","u8g2_font_luRS18_tf"],
	["u8g2_font_luRS18_tn","u8g2_font_luRS18_tn"],
	["u8g2_font_luRS18_tr","u8g2_font_luRS18_tr"],
	["u8g2_font_luRS19_te","u8g2_font_luRS19_te"],
	["u8g2_font_luRS19_tf","u8g2_font_luRS19_tf"],
	["u8g2_font_luRS19_tn","u8g2_font_luRS19_tn"],
	["u8g2_font_luRS19_tr","u8g2_font_luRS19_tr"],
	["u8g2_font_luRS24_te","u8g2_font_luRS24_te"],
	["u8g2_font_luRS24_tf","u8g2_font_luRS24_tf"],
	["u8g2_font_luRS24_tn","u8g2_font_luRS24_tn"],
	["u8g2_font_luRS24_tr","u8g2_font_luRS24_tr"],
	["u8g2_font_m2icon_5_tf","u8g2_font_m2icon_5_tf"],
	["u8g2_font_m2icon_7_tf","u8g2_font_m2icon_7_tf"],
	["u8g2_font_m2icon_9_tf","u8g2_font_m2icon_9_tf"],
	["u8g2_font_mademoiselle_mel_tn","u8g2_font_mademoiselle_mel_tn"],
	["u8g2_font_mademoiselle_mel_tr","u8g2_font_mademoiselle_mel_tr"],
	["u8g2_font_maniac_te","u8g2_font_maniac_te"],
	["u8g2_font_maniac_tf","u8g2_font_maniac_tf"],
	["u8g2_font_maniac_tn","u8g2_font_maniac_tn"],
	["u8g2_font_maniac_tr","u8g2_font_maniac_tr"],
	["u8g2_font_mercutio_basic_nbp_t_all","u8g2_font_mercutio_basic_nbp_t_all"],
	["u8g2_font_mercutio_basic_nbp_tf","u8g2_font_mercutio_basic_nbp_tf"],
	["u8g2_font_mercutio_basic_nbp_tn","u8g2_font_mercutio_basic_nbp_tn"],
	["u8g2_font_mercutio_basic_nbp_tr","u8g2_font_mercutio_basic_nbp_tr"],
	["u8g2_font_mercutio_sc_nbp_t_all","u8g2_font_mercutio_sc_nbp_t_all"],
	["u8g2_font_mercutio_sc_nbp_tf","u8g2_font_mercutio_sc_nbp_tf"],
	["u8g2_font_mercutio_sc_nbp_tn","u8g2_font_mercutio_sc_nbp_tn"],
	["u8g2_font_mercutio_sc_nbp_tr","u8g2_font_mercutio_sc_nbp_tr"],
	["u8g2_font_michaelmouse_tu","u8g2_font_michaelmouse_tu"],
	["u8g2_font_micro_mn","u8g2_font_micro_mn"],
	["u8g2_font_micro_mr","u8g2_font_micro_mr"],
	["u8g2_font_micro_tn","u8g2_font_micro_tn"],
	["u8g2_font_micro_tr","u8g2_font_micro_tr"],
	["u8g2_font_miranda_nbp_tf","u8g2_font_miranda_nbp_tf"],
	["u8g2_font_miranda_nbp_tn","u8g2_font_miranda_nbp_tn"],
	["u8g2_font_miranda_nbp_tr","u8g2_font_miranda_nbp_tr"],
	["u8g2_font_missingplanet_t_all","u8g2_font_missingplanet_t_all"],
	["u8g2_font_missingplanet_tf","u8g2_font_missingplanet_tf"],
	["u8g2_font_missingplanet_tn","u8g2_font_missingplanet_tn"],
	["u8g2_font_missingplanet_tr","u8g2_font_missingplanet_tr"],
	["u8g2_font_mozart_nbp_h_all","u8g2_font_mozart_nbp_h_all"],
	["u8g2_font_mozart_nbp_t_all","u8g2_font_mozart_nbp_t_all"],
	["u8g2_font_mozart_nbp_tf","u8g2_font_mozart_nbp_tf"],
	["u8g2_font_mozart_nbp_tn","u8g2_font_mozart_nbp_tn"],
	["u8g2_font_mozart_nbp_tr","u8g2_font_mozart_nbp_tr"],
	["u8g2_font_ncenB08_te","u8g2_font_ncenB08_te"],
	["u8g2_font_ncenB08_tf","u8g2_font_ncenB08_tf"],
	["u8g2_font_ncenB08_tn","u8g2_font_ncenB08_tn"],
	["u8g2_font_ncenB08_tr","u8g2_font_ncenB08_tr"],
	["u8g2_font_ncenB10_te","u8g2_font_ncenB10_te"],
	["u8g2_font_ncenB10_tf","u8g2_font_ncenB10_tf"],
	["u8g2_font_ncenB10_tn","u8g2_font_ncenB10_tn"],
	["u8g2_font_ncenB10_tr","u8g2_font_ncenB10_tr"],
	["u8g2_font_ncenB12_te","u8g2_font_ncenB12_te"],
	["u8g2_font_ncenB12_tf","u8g2_font_ncenB12_tf"],
	["u8g2_font_ncenB12_tn","u8g2_font_ncenB12_tn"],
	["u8g2_font_ncenB12_tr","u8g2_font_ncenB12_tr"],
	["u8g2_font_ncenB14_te","u8g2_font_ncenB14_te"],
	["u8g2_font_ncenB14_tf","u8g2_font_ncenB14_tf"],
	["u8g2_font_ncenB14_tn","u8g2_font_ncenB14_tn"],
	["u8g2_font_ncenB14_tr","u8g2_font_ncenB14_tr"],
	["u8g2_font_ncenB18_te","u8g2_font_ncenB18_te"],
	["u8g2_font_ncenB18_tf","u8g2_font_ncenB18_tf"],
	["u8g2_font_ncenB18_tn","u8g2_font_ncenB18_tn"],
	["u8g2_font_ncenB18_tr","u8g2_font_ncenB18_tr"],
	["u8g2_font_ncenB24_te","u8g2_font_ncenB24_te"],
	["u8g2_font_ncenB24_tf","u8g2_font_ncenB24_tf"],
	["u8g2_font_ncenB24_tn","u8g2_font_ncenB24_tn"],
	["u8g2_font_ncenB24_tr","u8g2_font_ncenB24_tr"],
	["u8g2_font_ncenR08_te","u8g2_font_ncenR08_te"],
	["u8g2_font_ncenR08_tf","u8g2_font_ncenR08_tf"],
	["u8g2_font_ncenR08_tn","u8g2_font_ncenR08_tn"],
	["u8g2_font_ncenR08_tr","u8g2_font_ncenR08_tr"],
	["u8g2_font_ncenR10_te","u8g2_font_ncenR10_te"],
	["u8g2_font_ncenR10_tf","u8g2_font_ncenR10_tf"],
	["u8g2_font_ncenR10_tn","u8g2_font_ncenR10_tn"],
	["u8g2_font_ncenR10_tr","u8g2_font_ncenR10_tr"],
	["u8g2_font_ncenR12_te","u8g2_font_ncenR12_te"],
	["u8g2_font_ncenR12_tf","u8g2_font_ncenR12_tf"],
	["u8g2_font_ncenR12_tn","u8g2_font_ncenR12_tn"],
	["u8g2_font_ncenR12_tr","u8g2_font_ncenR12_tr"],
	["u8g2_font_ncenR14_te","u8g2_font_ncenR14_te"],
	["u8g2_font_ncenR14_tf","u8g2_font_ncenR14_tf"],
	["u8g2_font_ncenR14_tn","u8g2_font_ncenR14_tn"],
	["u8g2_font_ncenR14_tr","u8g2_font_ncenR14_tr"],
	["u8g2_font_ncenR18_te","u8g2_font_ncenR18_te"],
	["u8g2_font_ncenR18_tf","u8g2_font_ncenR18_tf"],
	["u8g2_font_ncenR18_tn","u8g2_font_ncenR18_tn"],
	["u8g2_font_ncenR18_tr","u8g2_font_ncenR18_tr"],
	["u8g2_font_ncenR24_te","u8g2_font_ncenR24_te"],
	["u8g2_font_ncenR24_tf","u8g2_font_ncenR24_tf"],
	["u8g2_font_ncenR24_tn","u8g2_font_ncenR24_tn"],
	["u8g2_font_ncenR24_tr","u8g2_font_ncenR24_tr"],
	["u8g2_font_nerhoe_tf","u8g2_font_nerhoe_tf"],
	["u8g2_font_nerhoe_tn","u8g2_font_nerhoe_tn"],
	["u8g2_font_nerhoe_tr","u8g2_font_nerhoe_tr"],
	["u8g2_font_nine_by_five_nbp_t_all","u8g2_font_nine_by_five_nbp_t_all"],
	["u8g2_font_nine_by_five_nbp_tf","u8g2_font_nine_by_five_nbp_tf"],
	["u8g2_font_nine_by_five_nbp_tn","u8g2_font_nine_by_five_nbp_tn"],
	["u8g2_font_nine_by_five_nbp_tr","u8g2_font_nine_by_five_nbp_tr"],
	["u8g2_font_nokiafc22_tf","u8g2_font_nokiafc22_tf"],
	["u8g2_font_nokiafc22_tn","u8g2_font_nokiafc22_tn"],
	["u8g2_font_nokiafc22_tr","u8g2_font_nokiafc22_tr"],
	["u8g2_font_nokiafc22_tu","u8g2_font_nokiafc22_tu"],
	["u8g2_font_oldwizard_tf","u8g2_font_oldwizard_tf"],
	["u8g2_font_oldwizard_tn","u8g2_font_oldwizard_tn"],
	["u8g2_font_oldwizard_tr","u8g2_font_oldwizard_tr"],
	["u8g2_font_oldwizard_tu","u8g2_font_oldwizard_tu"],
	["u8g2_font_open_iconic_all_1x_t","u8g2_font_open_iconic_all_1x_t"],
	["u8g2_font_open_iconic_all_2x_t","u8g2_font_open_iconic_all_2x_t"],
	["u8g2_font_open_iconic_all_4x_t","u8g2_font_open_iconic_all_4x_t"],
	["u8g2_font_open_iconic_all_6x_t","u8g2_font_open_iconic_all_6x_t"],
	["u8g2_font_open_iconic_all_8x_t","u8g2_font_open_iconic_all_8x_t"],
	["u8g2_font_open_iconic_app_1x_t","u8g2_font_open_iconic_app_1x_t"],
	["u8g2_font_open_iconic_app_2x_t","u8g2_font_open_iconic_app_2x_t"],
	["u8g2_font_open_iconic_app_4x_t","u8g2_font_open_iconic_app_4x_t"],
	["u8g2_font_open_iconic_app_6x_t","u8g2_font_open_iconic_app_6x_t"],
	["u8g2_font_open_iconic_app_8x_t","u8g2_font_open_iconic_app_8x_t"],
	["u8g2_font_open_iconic_arrow_1x_t","u8g2_font_open_iconic_arrow_1x_t"],
	["u8g2_font_open_iconic_arrow_2x_t","u8g2_font_open_iconic_arrow_2x_t"],
	["u8g2_font_open_iconic_arrow_4x_t","u8g2_font_open_iconic_arrow_4x_t"],
	["u8g2_font_open_iconic_arrow_6x_t","u8g2_font_open_iconic_arrow_6x_t"],
	["u8g2_font_open_iconic_arrow_8x_t","u8g2_font_open_iconic_arrow_8x_t"],
	["u8g2_font_open_iconic_check_1x_t","u8g2_font_open_iconic_check_1x_t"],
	["u8g2_font_open_iconic_check_2x_t","u8g2_font_open_iconic_check_2x_t"],
	["u8g2_font_open_iconic_check_4x_t","u8g2_font_open_iconic_check_4x_t"],
	["u8g2_font_open_iconic_check_6x_t","u8g2_font_open_iconic_check_6x_t"],
	["u8g2_font_open_iconic_check_8x_t","u8g2_font_open_iconic_check_8x_t"],
	["u8g2_font_open_iconic_email_1x_t","u8g2_font_open_iconic_email_1x_t"],
	["u8g2_font_open_iconic_email_2x_t","u8g2_font_open_iconic_email_2x_t"],
	["u8g2_font_open_iconic_email_4x_t","u8g2_font_open_iconic_email_4x_t"],
	["u8g2_font_open_iconic_email_6x_t","u8g2_font_open_iconic_email_6x_t"],
	["u8g2_font_open_iconic_email_8x_t","u8g2_font_open_iconic_email_8x_t"],
	["u8g2_font_open_iconic_embedded_1x_t","u8g2_font_open_iconic_embedded_1x_t"],
	["u8g2_font_open_iconic_embedded_2x_t","u8g2_font_open_iconic_embedded_2x_t"],
	["u8g2_font_open_iconic_embedded_4x_t","u8g2_font_open_iconic_embedded_4x_t"],
	["u8g2_font_open_iconic_embedded_6x_t","u8g2_font_open_iconic_embedded_6x_t"],
	["u8g2_font_open_iconic_embedded_8x_t","u8g2_font_open_iconic_embedded_8x_t"],
	["u8g2_font_open_iconic_gui_1x_t","u8g2_font_open_iconic_gui_1x_t"],
	["u8g2_font_open_iconic_gui_2x_t","u8g2_font_open_iconic_gui_2x_t"],
	["u8g2_font_open_iconic_gui_4x_t","u8g2_font_open_iconic_gui_4x_t"],
	["u8g2_font_open_iconic_gui_6x_t","u8g2_font_open_iconic_gui_6x_t"],
	["u8g2_font_open_iconic_gui_8x_t","u8g2_font_open_iconic_gui_8x_t"],
	["u8g2_font_open_iconic_human_1x_t","u8g2_font_open_iconic_human_1x_t"],
	["u8g2_font_open_iconic_human_2x_t","u8g2_font_open_iconic_human_2x_t"],
	["u8g2_font_open_iconic_human_4x_t","u8g2_font_open_iconic_human_4x_t"],
	["u8g2_font_open_iconic_human_6x_t","u8g2_font_open_iconic_human_6x_t"],
	["u8g2_font_open_iconic_human_8x_t","u8g2_font_open_iconic_human_8x_t"],
	["u8g2_font_open_iconic_mime_1x_t","u8g2_font_open_iconic_mime_1x_t"],
	["u8g2_font_open_iconic_mime_2x_t","u8g2_font_open_iconic_mime_2x_t"],
	["u8g2_font_open_iconic_mime_4x_t","u8g2_font_open_iconic_mime_4x_t"],
	["u8g2_font_open_iconic_mime_6x_t","u8g2_font_open_iconic_mime_6x_t"],
	["u8g2_font_open_iconic_mime_8x_t","u8g2_font_open_iconic_mime_8x_t"],
	["u8g2_font_open_iconic_other_1x_t","u8g2_font_open_iconic_other_1x_t"],
	["u8g2_font_open_iconic_other_2x_t","u8g2_font_open_iconic_other_2x_t"],
	["u8g2_font_open_iconic_other_4x_t","u8g2_font_open_iconic_other_4x_t"],
	["u8g2_font_open_iconic_other_6x_t","u8g2_font_open_iconic_other_6x_t"],
	["u8g2_font_open_iconic_other_8x_t","u8g2_font_open_iconic_other_8x_t"],
	["u8g2_font_open_iconic_play_1x_t","u8g2_font_open_iconic_play_1x_t"],
	["u8g2_font_open_iconic_play_2x_t","u8g2_font_open_iconic_play_2x_t"],
	["u8g2_font_open_iconic_play_4x_t","u8g2_font_open_iconic_play_4x_t"],
	["u8g2_font_open_iconic_play_6x_t","u8g2_font_open_iconic_play_6x_t"],
	["u8g2_font_open_iconic_play_8x_t","u8g2_font_open_iconic_play_8x_t"],
	["u8g2_font_open_iconic_text_1x_t","u8g2_font_open_iconic_text_1x_t"],
	["u8g2_font_open_iconic_text_2x_t","u8g2_font_open_iconic_text_2x_t"],
	["u8g2_font_open_iconic_text_4x_t","u8g2_font_open_iconic_text_4x_t"],
	["u8g2_font_open_iconic_text_6x_t","u8g2_font_open_iconic_text_6x_t"],
	["u8g2_font_open_iconic_text_8x_t","u8g2_font_open_iconic_text_8x_t"],
	["u8g2_font_open_iconic_thing_1x_t","u8g2_font_open_iconic_thing_1x_t"],
	["u8g2_font_open_iconic_thing_2x_t","u8g2_font_open_iconic_thing_2x_t"],
	["u8g2_font_open_iconic_thing_4x_t","u8g2_font_open_iconic_thing_4x_t"],
	["u8g2_font_open_iconic_thing_6x_t","u8g2_font_open_iconic_thing_6x_t"],
	["u8g2_font_open_iconic_thing_8x_t","u8g2_font_open_iconic_thing_8x_t"],
	["u8g2_font_open_iconic_weather_1x_t","u8g2_font_open_iconic_weather_1x_t"],
	["u8g2_font_open_iconic_weather_2x_t","u8g2_font_open_iconic_weather_2x_t"],
	["u8g2_font_open_iconic_weather_4x_t","u8g2_font_open_iconic_weather_4x_t"],
	["u8g2_font_open_iconic_weather_6x_t","u8g2_font_open_iconic_weather_6x_t"],
	["u8g2_font_open_iconic_weather_8x_t","u8g2_font_open_iconic_weather_8x_t"],
	["u8g2_font_open_iconic_www_1x_t","u8g2_font_open_iconic_www_1x_t"],
	["u8g2_font_open_iconic_www_2x_t","u8g2_font_open_iconic_www_2x_t"],
	["u8g2_font_open_iconic_www_4x_t","u8g2_font_open_iconic_www_4x_t"],
	["u8g2_font_open_iconic_www_6x_t","u8g2_font_open_iconic_www_6x_t"],
	["u8g2_font_open_iconic_www_8x_t","u8g2_font_open_iconic_www_8x_t"],
	["u8g2_font_ordinarybasis_t_all","u8g2_font_ordinarybasis_t_all"],
	["u8g2_font_ordinarybasis_tf","u8g2_font_ordinarybasis_tf"],
	["u8g2_font_ordinarybasis_tn","u8g2_font_ordinarybasis_tn"],
	["u8g2_font_ordinarybasis_tr","u8g2_font_ordinarybasis_tr"],
	["u8g2_font_osb18_tf","u8g2_font_osb18_tf"],
	["u8g2_font_osb18_tn","u8g2_font_osb18_tn"],
	["u8g2_font_osb18_tr","u8g2_font_osb18_tr"],
	["u8g2_font_osb21_tf","u8g2_font_osb21_tf"],
	["u8g2_font_osb21_tn","u8g2_font_osb21_tn"],
	["u8g2_font_osb21_tr","u8g2_font_osb21_tr"],
	["u8g2_font_osb26_tf","u8g2_font_osb26_tf"],
	["u8g2_font_osb26_tn","u8g2_font_osb26_tn"],
	["u8g2_font_osb26_tr","u8g2_font_osb26_tr"],
	["u8g2_font_osb29_tf","u8g2_font_osb29_tf"],
	["u8g2_font_osb29_tn","u8g2_font_osb29_tn"],
	["u8g2_font_osb29_tr","u8g2_font_osb29_tr"],
	["u8g2_font_osb35_tf","u8g2_font_osb35_tf"],
	["u8g2_font_osb35_tn","u8g2_font_osb35_tn"],
	["u8g2_font_osb35_tr","u8g2_font_osb35_tr"],
	["u8g2_font_osb41_tf","u8g2_font_osb41_tf"],
	["u8g2_font_osb41_tn","u8g2_font_osb41_tn"],
	["u8g2_font_osb41_tr","u8g2_font_osb41_tr"],
	["u8g2_font_oskool_tf","u8g2_font_oskool_tf"],
	["u8g2_font_oskool_tn","u8g2_font_oskool_tn"],
	["u8g2_font_oskool_tr","u8g2_font_oskool_tr"],
	["u8g2_font_osr18_tf","u8g2_font_osr18_tf"],
	["u8g2_font_osr18_tn","u8g2_font_osr18_tn"],
	["u8g2_font_osr18_tr","u8g2_font_osr18_tr"],
	["u8g2_font_osr21_tf","u8g2_font_osr21_tf"],
	["u8g2_font_osr21_tn","u8g2_font_osr21_tn"],
	["u8g2_font_osr21_tr","u8g2_font_osr21_tr"],
	["u8g2_font_osr26_tf","u8g2_font_osr26_tf"],
	["u8g2_font_osr26_tn","u8g2_font_osr26_tn"],
	["u8g2_font_osr26_tr","u8g2_font_osr26_tr"],
	["u8g2_font_osr29_tf","u8g2_font_osr29_tf"],
	["u8g2_font_osr29_tn","u8g2_font_osr29_tn"],
	["u8g2_font_osr29_tr","u8g2_font_osr29_tr"],
	["u8g2_font_osr35_tf","u8g2_font_osr35_tf"],
	["u8g2_font_osr35_tn","u8g2_font_osr35_tn"],
	["u8g2_font_osr35_tr","u8g2_font_osr35_tr"],
	["u8g2_font_osr41_tf","u8g2_font_osr41_tf"],
	["u8g2_font_osr41_tn","u8g2_font_osr41_tn"],
	["u8g2_font_osr41_tr","u8g2_font_osr41_tr"],
	["u8g2_font_p01type_tf","u8g2_font_p01type_tf"],
	["u8g2_font_p01type_tn","u8g2_font_p01type_tn"],
	["u8g2_font_p01type_tr","u8g2_font_p01type_tr"],
	["u8g2_font_pcsenior_8f","u8g2_font_pcsenior_8f"],
	["u8g2_font_pcsenior_8n","u8g2_font_pcsenior_8n"],
	["u8g2_font_pcsenior_8r","u8g2_font_pcsenior_8r"],
	["u8g2_font_pcsenior_8u","u8g2_font_pcsenior_8u"],
	["u8g2_font_pearfont_tr","u8g2_font_pearfont_tr"],
	["u8g2_font_pieceofcake_mel_tn","u8g2_font_pieceofcake_mel_tn"],
	["u8g2_font_pieceofcake_mel_tr","u8g2_font_pieceofcake_mel_tr"],
	["u8g2_font_Pixellari_te","u8g2_font_Pixellari_te"],
	["u8g2_font_Pixellari_tf","u8g2_font_Pixellari_tf"],
	["u8g2_font_Pixellari_tn","u8g2_font_Pixellari_tn"],
	["u8g2_font_Pixellari_tr","u8g2_font_Pixellari_tr"],
	["u8g2_font_Pixellari_tu","u8g2_font_Pixellari_tu"],
	["u8g2_font_pixelle_micro_tn","u8g2_font_pixelle_micro_tn"],
	["u8g2_font_pixelle_micro_tr","u8g2_font_pixelle_micro_tr"],
	["u8g2_font_pixelmordred_t_all","u8g2_font_pixelmordred_t_all"],
	["u8g2_font_pixelmordred_tf","u8g2_font_pixelmordred_tf"],
	["u8g2_font_pixelmordred_tn","u8g2_font_pixelmordred_tn"],
	["u8g2_font_pixelmordred_tr","u8g2_font_pixelmordred_tr"],
	["u8g2_font_pixelpoiiz_tr","u8g2_font_pixelpoiiz_tr"],
	["u8g2_font_press_mel_tn","u8g2_font_press_mel_tn"],
	["u8g2_font_press_mel_tr","u8g2_font_press_mel_tr"],
	["u8g2_font_pressstart2p_8f","u8g2_font_pressstart2p_8f"],
	["u8g2_font_pressstart2p_8n","u8g2_font_pressstart2p_8n"],
	["u8g2_font_pressstart2p_8r","u8g2_font_pressstart2p_8r"],
	["u8g2_font_pressstart2p_8u","u8g2_font_pressstart2p_8u"],
	["u8g2_font_profont10_mf","u8g2_font_profont10_mf"],
	["u8g2_font_profont10_mn","u8g2_font_profont10_mn"],
	["u8g2_font_profont10_mr","u8g2_font_profont10_mr"],
	["u8g2_font_profont10_tf","u8g2_font_profont10_tf"],
	["u8g2_font_profont10_tn","u8g2_font_profont10_tn"],
	["u8g2_font_profont10_tr","u8g2_font_profont10_tr"],
	["u8g2_font_profont11_mf","u8g2_font_profont11_mf"],
	["u8g2_font_profont11_mn","u8g2_font_profont11_mn"],
	["u8g2_font_profont11_mr","u8g2_font_profont11_mr"],
	["u8g2_font_profont11_tf","u8g2_font_profont11_tf"],
	["u8g2_font_profont11_tn","u8g2_font_profont11_tn"],
	["u8g2_font_profont11_tr","u8g2_font_profont11_tr"],
	["u8g2_font_profont12_mf","u8g2_font_profont12_mf"],
	["u8g2_font_profont12_mn","u8g2_font_profont12_mn"],
	["u8g2_font_profont12_mr","u8g2_font_profont12_mr"],
	["u8g2_font_profont12_tf","u8g2_font_profont12_tf"],
	["u8g2_font_profont12_tn","u8g2_font_profont12_tn"],
	["u8g2_font_profont12_tr","u8g2_font_profont12_tr"],
	["u8g2_font_profont15_mf","u8g2_font_profont15_mf"],
	["u8g2_font_profont15_mn","u8g2_font_profont15_mn"],
	["u8g2_font_profont15_mr","u8g2_font_profont15_mr"],
	["u8g2_font_profont15_tf","u8g2_font_profont15_tf"],
	["u8g2_font_profont15_tn","u8g2_font_profont15_tn"],
	["u8g2_font_profont15_tr","u8g2_font_profont15_tr"],
	["u8g2_font_profont17_mf","u8g2_font_profont17_mf"],
	["u8g2_font_profont17_mn","u8g2_font_profont17_mn"],
	["u8g2_font_profont17_mr","u8g2_font_profont17_mr"],
	["u8g2_font_profont17_tf","u8g2_font_profont17_tf"],
	["u8g2_font_profont17_tn","u8g2_font_profont17_tn"],
	["u8g2_font_profont17_tr","u8g2_font_profont17_tr"],
	["u8g2_font_profont22_mf","u8g2_font_profont22_mf"],
	["u8g2_font_profont22_mn","u8g2_font_profont22_mn"],
	["u8g2_font_profont22_mr","u8g2_font_profont22_mr"],
	["u8g2_font_profont22_tf","u8g2_font_profont22_tf"],
	["u8g2_font_profont22_tn","u8g2_font_profont22_tn"],
	["u8g2_font_profont22_tr","u8g2_font_profont22_tr"],
	["u8g2_font_profont29_mf","u8g2_font_profont29_mf"],
	["u8g2_font_profont29_mn","u8g2_font_profont29_mn"],
	["u8g2_font_profont29_mr","u8g2_font_profont29_mr"],
	["u8g2_font_profont29_tf","u8g2_font_profont29_tf"],
	["u8g2_font_profont29_tn","u8g2_font_profont29_tn"],
	["u8g2_font_profont29_tr","u8g2_font_profont29_tr"],
	["u8g2_font_prospero_bold_nbp_tf","u8g2_font_prospero_bold_nbp_tf"],
	["u8g2_font_prospero_bold_nbp_tn","u8g2_font_prospero_bold_nbp_tn"],
	["u8g2_font_prospero_bold_nbp_tr","u8g2_font_prospero_bold_nbp_tr"],
	["u8g2_font_prospero_nbp_tf","u8g2_font_prospero_nbp_tf"],
	["u8g2_font_prospero_nbp_tn","u8g2_font_prospero_nbp_tn"],
	["u8g2_font_prospero_nbp_tr","u8g2_font_prospero_nbp_tr"],
	["u8g2_font_px437wyse700a_mf","u8g2_font_px437wyse700a_mf"],
	["u8g2_font_px437wyse700a_mn","u8g2_font_px437wyse700a_mn"],
	["u8g2_font_px437wyse700a_mr","u8g2_font_px437wyse700a_mr"],
	["u8g2_font_px437wyse700a_tf","u8g2_font_px437wyse700a_tf"],
	["u8g2_font_px437wyse700a_tn","u8g2_font_px437wyse700a_tn"],
	["u8g2_font_px437wyse700a_tr","u8g2_font_px437wyse700a_tr"],
	["u8g2_font_px437wyse700b_mf","u8g2_font_px437wyse700b_mf"],
	["u8g2_font_px437wyse700b_mn","u8g2_font_px437wyse700b_mn"],
	["u8g2_font_px437wyse700b_mr","u8g2_font_px437wyse700b_mr"],
	["u8g2_font_px437wyse700b_tf","u8g2_font_px437wyse700b_tf"],
	["u8g2_font_px437wyse700b_tn","u8g2_font_px437wyse700b_tn"],
	["u8g2_font_px437wyse700b_tr","u8g2_font_px437wyse700b_tr"],
	["u8g2_font_pxplusibmcga_8f","u8g2_font_pxplusibmcga_8f"],
	["u8g2_font_pxplusibmcga_8n","u8g2_font_pxplusibmcga_8n"],
	["u8g2_font_pxplusibmcga_8r","u8g2_font_pxplusibmcga_8r"],
	["u8g2_font_pxplusibmcga_8u","u8g2_font_pxplusibmcga_8u"],
	["u8g2_font_pxplusibmcgathin_8f","u8g2_font_pxplusibmcgathin_8f"],
	["u8g2_font_pxplusibmcgathin_8n","u8g2_font_pxplusibmcgathin_8n"],
	["u8g2_font_pxplusibmcgathin_8r","u8g2_font_pxplusibmcgathin_8r"],
	["u8g2_font_pxplusibmcgathin_8u","u8g2_font_pxplusibmcgathin_8u"],
	["u8g2_font_pxplusibmvga8_m_all","u8g2_font_pxplusibmvga8_m_all"],
	["u8g2_font_pxplusibmvga8_mf","u8g2_font_pxplusibmvga8_mf"],
	["u8g2_font_pxplusibmvga8_mn","u8g2_font_pxplusibmvga8_mn"],
	["u8g2_font_pxplusibmvga8_mr","u8g2_font_pxplusibmvga8_mr"],
	["u8g2_font_pxplusibmvga8_t_all","u8g2_font_pxplusibmvga8_t_all"],
	["u8g2_font_pxplusibmvga8_tf","u8g2_font_pxplusibmvga8_tf"],
	["u8g2_font_pxplusibmvga8_tn","u8g2_font_pxplusibmvga8_tn"],
	["u8g2_font_pxplusibmvga8_tr","u8g2_font_pxplusibmvga8_tr"],
	["u8g2_font_pxplusibmvga9_m_all","u8g2_font_pxplusibmvga9_m_all"],
	["u8g2_font_pxplusibmvga9_mf","u8g2_font_pxplusibmvga9_mf"],
	["u8g2_font_pxplusibmvga9_mn","u8g2_font_pxplusibmvga9_mn"],
	["u8g2_font_pxplusibmvga9_mr","u8g2_font_pxplusibmvga9_mr"],
	["u8g2_font_pxplusibmvga9_t_all","u8g2_font_pxplusibmvga9_t_all"],
	["u8g2_font_pxplusibmvga9_tf","u8g2_font_pxplusibmvga9_tf"],
	["u8g2_font_pxplusibmvga9_tn","u8g2_font_pxplusibmvga9_tn"],
	["u8g2_font_pxplusibmvga9_tr","u8g2_font_pxplusibmvga9_tr"],
	["u8g2_font_pxplustandynewtv_8_all","u8g2_font_pxplustandynewtv_8_all"],
	["u8g2_font_pxplustandynewtv_8f","u8g2_font_pxplustandynewtv_8f"],
	["u8g2_font_pxplustandynewtv_8n","u8g2_font_pxplustandynewtv_8n"],
	["u8g2_font_pxplustandynewtv_8r","u8g2_font_pxplustandynewtv_8r"],
	["u8g2_font_pxplustandynewtv_8u","u8g2_font_pxplustandynewtv_8u"],
	["u8g2_font_pxplustandynewtv_t_all","u8g2_font_pxplustandynewtv_t_all"],
	["u8g2_font_questgiver_tr","u8g2_font_questgiver_tr"],
	["u8g2_font_repress_mel_tn","u8g2_font_repress_mel_tn"],
	["u8g2_font_repress_mel_tr","u8g2_font_repress_mel_tr"],
	["u8g2_font_robot_de_niro_tf","u8g2_font_robot_de_niro_tf"],
	["u8g2_font_robot_de_niro_tn","u8g2_font_robot_de_niro_tn"],
	["u8g2_font_robot_de_niro_tr","u8g2_font_robot_de_niro_tr"],
	["u8g2_font_roentgen_nbp_h_all","u8g2_font_roentgen_nbp_h_all"],
	["u8g2_font_roentgen_nbp_t_all","u8g2_font_roentgen_nbp_t_all"],
	["u8g2_font_roentgen_nbp_tf","u8g2_font_roentgen_nbp_tf"],
	["u8g2_font_roentgen_nbp_tn","u8g2_font_roentgen_nbp_tn"],
	["u8g2_font_roentgen_nbp_tr","u8g2_font_roentgen_nbp_tr"],
	["u8g2_font_rosencrantz_nbp_t_all","u8g2_font_rosencrantz_nbp_t_all"],
	["u8g2_font_rosencrantz_nbp_tf","u8g2_font_rosencrantz_nbp_tf"],
	["u8g2_font_rosencrantz_nbp_tn","u8g2_font_rosencrantz_nbp_tn"],
	["u8g2_font_rosencrantz_nbp_tr","u8g2_font_rosencrantz_nbp_tr"],
	["u8g2_font_saikyosansbold8_8n","u8g2_font_saikyosansbold8_8n"],
	["u8g2_font_saikyosansbold8_8u","u8g2_font_saikyosansbold8_8u"],
	["u8g2_font_samim_10_t_all","u8g2_font_samim_10_t_all"],
	["u8g2_font_samim_12_t_all","u8g2_font_samim_12_t_all"],
	["u8g2_font_samim_14_t_all","u8g2_font_samim_14_t_all"],
	["u8g2_font_samim_16_t_all","u8g2_font_samim_16_t_all"],
	["u8g2_font_samim_fd_10_t_all","u8g2_font_samim_fd_10_t_all"],
	["u8g2_font_samim_fd_12_t_all","u8g2_font_samim_fd_12_t_all"],
	["u8g2_font_samim_fd_14_t_all","u8g2_font_samim_fd_14_t_all"],
	["u8g2_font_samim_fd_16_t_all","u8g2_font_samim_fd_16_t_all"],
	["u8g2_font_sandyforest_tn","u8g2_font_sandyforest_tn"],
	["u8g2_font_sandyforest_tr","u8g2_font_sandyforest_tr"],
	["u8g2_font_sandyforest_tu","u8g2_font_sandyforest_tu"],
	["u8g2_font_secretaryhand_t_all","u8g2_font_secretaryhand_t_all"],
	["u8g2_font_secretaryhand_tf","u8g2_font_secretaryhand_tf"],
	["u8g2_font_secretaryhand_tn","u8g2_font_secretaryhand_tn"],
	["u8g2_font_secretaryhand_tr","u8g2_font_secretaryhand_tr"],
	["u8g2_font_seraphimb1_tr","u8g2_font_seraphimb1_tr"],
	["u8g2_font_shylock_nbp_t_all","u8g2_font_shylock_nbp_t_all"],
	["u8g2_font_shylock_nbp_tf","u8g2_font_shylock_nbp_tf"],
	["u8g2_font_shylock_nbp_tn","u8g2_font_shylock_nbp_tn"],
	["u8g2_font_shylock_nbp_tr","u8g2_font_shylock_nbp_tr"],
	["u8g2_font_siji_t_6x10","u8g2_font_siji_t_6x10"],
	["u8g2_font_sirclive_tn","u8g2_font_sirclive_tn"],
	["u8g2_font_sirclive_tr","u8g2_font_sirclive_tr"],
	["u8g2_font_sirclivethebold_tn","u8g2_font_sirclivethebold_tn"],
	["u8g2_font_sirclivethebold_tr","u8g2_font_sirclivethebold_tr"],
	["u8g2_font_smart_patrol_nbp_tf","u8g2_font_smart_patrol_nbp_tf"],
	["u8g2_font_smart_patrol_nbp_tn","u8g2_font_smart_patrol_nbp_tn"],
	["u8g2_font_smart_patrol_nbp_tr","u8g2_font_smart_patrol_nbp_tr"],
	["u8g2_font_squirrel_tn","u8g2_font_squirrel_tn"],
	["u8g2_font_squirrel_tr","u8g2_font_squirrel_tr"],
	["u8g2_font_squirrel_tu","u8g2_font_squirrel_tu"],
	["u8g2_font_sticker_mel_tn","u8g2_font_sticker_mel_tn"],
	["u8g2_font_sticker_mel_tr","u8g2_font_sticker_mel_tr"],
	["u8g2_font_synchronizer_nbp_tf","u8g2_font_synchronizer_nbp_tf"],
	["u8g2_font_synchronizer_nbp_tn","u8g2_font_synchronizer_nbp_tn"],
	["u8g2_font_synchronizer_nbp_tr","u8g2_font_synchronizer_nbp_tr"],
	["u8g2_font_t0_11_me","u8g2_font_t0_11_me"],
	["u8g2_font_t0_11_mf","u8g2_font_t0_11_mf"],
	["u8g2_font_t0_11_mn","u8g2_font_t0_11_mn"],
	["u8g2_font_t0_11_mr","u8g2_font_t0_11_mr"],
	["u8g2_font_t0_11_t_all","u8g2_font_t0_11_t_all"],
	["u8g2_font_t0_11_te","u8g2_font_t0_11_te"],
	["u8g2_font_t0_11_tf","u8g2_font_t0_11_tf"],
	["u8g2_font_t0_11_tn","u8g2_font_t0_11_tn"],
	["u8g2_font_t0_11_tr","u8g2_font_t0_11_tr"],
	["u8g2_font_t0_11b_me","u8g2_font_t0_11b_me"],
	["u8g2_font_t0_11b_mf","u8g2_font_t0_11b_mf"],
	["u8g2_font_t0_11b_mn","u8g2_font_t0_11b_mn"],
	["u8g2_font_t0_11b_mr","u8g2_font_t0_11b_mr"],
	["u8g2_font_t0_11b_te","u8g2_font_t0_11b_te"],
	["u8g2_font_t0_11b_tf","u8g2_font_t0_11b_tf"],
	["u8g2_font_t0_11b_tn","u8g2_font_t0_11b_tn"],
	["u8g2_font_t0_11b_tr","u8g2_font_t0_11b_tr"],
	["u8g2_font_t0_12_me","u8g2_font_t0_12_me"],
	["u8g2_font_t0_12_mf","u8g2_font_t0_12_mf"],
	["u8g2_font_t0_12_mn","u8g2_font_t0_12_mn"],
	["u8g2_font_t0_12_mr","u8g2_font_t0_12_mr"],
	["u8g2_font_t0_12_te","u8g2_font_t0_12_te"],
	["u8g2_font_t0_12_tf","u8g2_font_t0_12_tf"],
	["u8g2_font_t0_12_tn","u8g2_font_t0_12_tn"],
	["u8g2_font_t0_12_tr","u8g2_font_t0_12_tr"],
	["u8g2_font_t0_12b_me","u8g2_font_t0_12b_me"],
	["u8g2_font_t0_12b_mf","u8g2_font_t0_12b_mf"],
	["u8g2_font_t0_12b_mn","u8g2_font_t0_12b_mn"],
	["u8g2_font_t0_12b_mr","u8g2_font_t0_12b_mr"],
	["u8g2_font_t0_12b_te","u8g2_font_t0_12b_te"],
	["u8g2_font_t0_12b_tf","u8g2_font_t0_12b_tf"],
	["u8g2_font_t0_12b_tn","u8g2_font_t0_12b_tn"],
	["u8g2_font_t0_12b_tr","u8g2_font_t0_12b_tr"],
	["u8g2_font_t0_13_me","u8g2_font_t0_13_me"],
	["u8g2_font_t0_13_mf","u8g2_font_t0_13_mf"],
	["u8g2_font_t0_13_mn","u8g2_font_t0_13_mn"],
	["u8g2_font_t0_13_mr","u8g2_font_t0_13_mr"],
	["u8g2_font_t0_13_te","u8g2_font_t0_13_te"],
	["u8g2_font_t0_13_tf","u8g2_font_t0_13_tf"],
	["u8g2_font_t0_13_tn","u8g2_font_t0_13_tn"],
	["u8g2_font_t0_13_tr","u8g2_font_t0_13_tr"],
	["u8g2_font_t0_13b_me","u8g2_font_t0_13b_me"],
	["u8g2_font_t0_13b_mf","u8g2_font_t0_13b_mf"],
	["u8g2_font_t0_13b_mn","u8g2_font_t0_13b_mn"],
	["u8g2_font_t0_13b_mr","u8g2_font_t0_13b_mr"],
	["u8g2_font_t0_13b_te","u8g2_font_t0_13b_te"],
	["u8g2_font_t0_13b_tf","u8g2_font_t0_13b_tf"],
	["u8g2_font_t0_13b_tn","u8g2_font_t0_13b_tn"],
	["u8g2_font_t0_13b_tr","u8g2_font_t0_13b_tr"],
	["u8g2_font_t0_14_me","u8g2_font_t0_14_me"],
	["u8g2_font_t0_14_mf","u8g2_font_t0_14_mf"],
	["u8g2_font_t0_14_mn","u8g2_font_t0_14_mn"],
	["u8g2_font_t0_14_mr","u8g2_font_t0_14_mr"],
	["u8g2_font_t0_14_te","u8g2_font_t0_14_te"],
	["u8g2_font_t0_14_tf","u8g2_font_t0_14_tf"],
	["u8g2_font_t0_14_tn","u8g2_font_t0_14_tn"],
	["u8g2_font_t0_14_tr","u8g2_font_t0_14_tr"],
	["u8g2_font_t0_14b_me","u8g2_font_t0_14b_me"],
	["u8g2_font_t0_14b_mf","u8g2_font_t0_14b_mf"],
	["u8g2_font_t0_14b_mn","u8g2_font_t0_14b_mn"],
	["u8g2_font_t0_14b_mr","u8g2_font_t0_14b_mr"],
	["u8g2_font_t0_14b_te","u8g2_font_t0_14b_te"],
	["u8g2_font_t0_14b_tf","u8g2_font_t0_14b_tf"],
	["u8g2_font_t0_14b_tn","u8g2_font_t0_14b_tn"],
	["u8g2_font_t0_14b_tr","u8g2_font_t0_14b_tr"],
	["u8g2_font_t0_15_me","u8g2_font_t0_15_me"],
	["u8g2_font_t0_15_mf","u8g2_font_t0_15_mf"],
	["u8g2_font_t0_15_mn","u8g2_font_t0_15_mn"],
	["u8g2_font_t0_15_mr","u8g2_font_t0_15_mr"],
	["u8g2_font_t0_15_te","u8g2_font_t0_15_te"],
	["u8g2_font_t0_15_tf","u8g2_font_t0_15_tf"],
	["u8g2_font_t0_15_tn","u8g2_font_t0_15_tn"],
	["u8g2_font_t0_15_tr","u8g2_font_t0_15_tr"],
	["u8g2_font_t0_15b_me","u8g2_font_t0_15b_me"],
	["u8g2_font_t0_15b_mf","u8g2_font_t0_15b_mf"],
	["u8g2_font_t0_15b_mn","u8g2_font_t0_15b_mn"],
	["u8g2_font_t0_15b_mr","u8g2_font_t0_15b_mr"],
	["u8g2_font_t0_15b_te","u8g2_font_t0_15b_te"],
	["u8g2_font_t0_15b_tf","u8g2_font_t0_15b_tf"],
	["u8g2_font_t0_15b_tn","u8g2_font_t0_15b_tn"],
	["u8g2_font_t0_15b_tr","u8g2_font_t0_15b_tr"],
	["u8g2_font_t0_16_me","u8g2_font_t0_16_me"],
	["u8g2_font_t0_16_mf","u8g2_font_t0_16_mf"],
	["u8g2_font_t0_16_mn","u8g2_font_t0_16_mn"],
	["u8g2_font_t0_16_mr","u8g2_font_t0_16_mr"],
	["u8g2_font_t0_16_te","u8g2_font_t0_16_te"],
	["u8g2_font_t0_16_tf","u8g2_font_t0_16_tf"],
	["u8g2_font_t0_16_tn","u8g2_font_t0_16_tn"],
	["u8g2_font_t0_16_tr","u8g2_font_t0_16_tr"],
	["u8g2_font_t0_16b_me","u8g2_font_t0_16b_me"],
	["u8g2_font_t0_16b_mf","u8g2_font_t0_16b_mf"],
	["u8g2_font_t0_16b_mn","u8g2_font_t0_16b_mn"],
	["u8g2_font_t0_16b_mr","u8g2_font_t0_16b_mr"],
	["u8g2_font_t0_16b_te","u8g2_font_t0_16b_te"],
	["u8g2_font_t0_16b_tf","u8g2_font_t0_16b_tf"],
	["u8g2_font_t0_16b_tn","u8g2_font_t0_16b_tn"],
	["u8g2_font_t0_16b_tr","u8g2_font_t0_16b_tr"],
	["u8g2_font_t0_17_me","u8g2_font_t0_17_me"],
	["u8g2_font_t0_17_mf","u8g2_font_t0_17_mf"],
	["u8g2_font_t0_17_mn","u8g2_font_t0_17_mn"],
	["u8g2_font_t0_17_mr","u8g2_font_t0_17_mr"],
	["u8g2_font_t0_17_te","u8g2_font_t0_17_te"],
	["u8g2_font_t0_17_tf","u8g2_font_t0_17_tf"],
	["u8g2_font_t0_17_tn","u8g2_font_t0_17_tn"],
	["u8g2_font_t0_17_tr","u8g2_font_t0_17_tr"],
	["u8g2_font_t0_17b_me","u8g2_font_t0_17b_me"],
	["u8g2_font_t0_17b_mf","u8g2_font_t0_17b_mf"],
	["u8g2_font_t0_17b_mn","u8g2_font_t0_17b_mn"],
	["u8g2_font_t0_17b_mr","u8g2_font_t0_17b_mr"],
	["u8g2_font_t0_17b_te","u8g2_font_t0_17b_te"],
	["u8g2_font_t0_17b_tf","u8g2_font_t0_17b_tf"],
	["u8g2_font_t0_17b_tn","u8g2_font_t0_17b_tn"],
	["u8g2_font_t0_17b_tr","u8g2_font_t0_17b_tr"],
	["u8g2_font_t0_18_me","u8g2_font_t0_18_me"],
	["u8g2_font_t0_18_mf","u8g2_font_t0_18_mf"],
	["u8g2_font_t0_18_mn","u8g2_font_t0_18_mn"],
	["u8g2_font_t0_18_mr","u8g2_font_t0_18_mr"],
	["u8g2_font_t0_18_te","u8g2_font_t0_18_te"],
	["u8g2_font_t0_18_tf","u8g2_font_t0_18_tf"],
	["u8g2_font_t0_18_tn","u8g2_font_t0_18_tn"],
	["u8g2_font_t0_18_tr","u8g2_font_t0_18_tr"],
	["u8g2_font_t0_18b_me","u8g2_font_t0_18b_me"],
	["u8g2_font_t0_18b_mf","u8g2_font_t0_18b_mf"],
	["u8g2_font_t0_18b_mn","u8g2_font_t0_18b_mn"],
	["u8g2_font_t0_18b_mr","u8g2_font_t0_18b_mr"],
	["u8g2_font_t0_18b_te","u8g2_font_t0_18b_te"],
	["u8g2_font_t0_18b_tf","u8g2_font_t0_18b_tf"],
	["u8g2_font_t0_18b_tn","u8g2_font_t0_18b_tn"],
	["u8g2_font_t0_18b_tr","u8g2_font_t0_18b_tr"],
	["u8g2_font_t0_22_me","u8g2_font_t0_22_me"],
	["u8g2_font_t0_22_mf","u8g2_font_t0_22_mf"],
	["u8g2_font_t0_22_mn","u8g2_font_t0_22_mn"],
	["u8g2_font_t0_22_mr","u8g2_font_t0_22_mr"],
	["u8g2_font_t0_22_te","u8g2_font_t0_22_te"],
	["u8g2_font_t0_22_tf","u8g2_font_t0_22_tf"],
	["u8g2_font_t0_22_tn","u8g2_font_t0_22_tn"],
	["u8g2_font_t0_22_tr","u8g2_font_t0_22_tr"],
	["u8g2_font_t0_22b_me","u8g2_font_t0_22b_me"],
	["u8g2_font_t0_22b_mf","u8g2_font_t0_22b_mf"],
	["u8g2_font_t0_22b_mn","u8g2_font_t0_22b_mn"],
	["u8g2_font_t0_22b_mr","u8g2_font_t0_22b_mr"],
	["u8g2_font_t0_22b_te","u8g2_font_t0_22b_te"],
	["u8g2_font_t0_22b_tf","u8g2_font_t0_22b_tf"],
	["u8g2_font_t0_22b_tn","u8g2_font_t0_22b_tn"],
	["u8g2_font_t0_22b_tr","u8g2_font_t0_22b_tr"],
	["u8g2_font_tallpix_tr","u8g2_font_tallpix_tr"],
	["u8g2_font_tenfatguys_t_all","u8g2_font_tenfatguys_t_all"],
	["u8g2_font_tenfatguys_tf","u8g2_font_tenfatguys_tf"],
	["u8g2_font_tenfatguys_tn","u8g2_font_tenfatguys_tn"],
	["u8g2_font_tenfatguys_tr","u8g2_font_tenfatguys_tr"],
	["u8g2_font_tenfatguys_tu","u8g2_font_tenfatguys_tu"],
	["u8g2_font_tenstamps_mf","u8g2_font_tenstamps_mf"],
	["u8g2_font_tenstamps_mn","u8g2_font_tenstamps_mn"],
	["u8g2_font_tenstamps_mr","u8g2_font_tenstamps_mr"],
	["u8g2_font_tenstamps_mu","u8g2_font_tenstamps_mu"],
	["u8g2_font_tenthinguys_t_all","u8g2_font_tenthinguys_t_all"],
	["u8g2_font_tenthinguys_tf","u8g2_font_tenthinguys_tf"],
	["u8g2_font_tenthinguys_tn","u8g2_font_tenthinguys_tn"],
	["u8g2_font_tenthinguys_tr","u8g2_font_tenthinguys_tr"],
	["u8g2_font_tenthinguys_tu","u8g2_font_tenthinguys_tu"],
	["u8g2_font_tenthinnerguys_t_all","u8g2_font_tenthinnerguys_t_all"],
	["u8g2_font_tenthinnerguys_tf","u8g2_font_tenthinnerguys_tf"],
	["u8g2_font_tenthinnerguys_tn","u8g2_font_tenthinnerguys_tn"],
	["u8g2_font_tenthinnerguys_tr","u8g2_font_tenthinnerguys_tr"],
	["u8g2_font_tenthinnerguys_tu","u8g2_font_tenthinnerguys_tu"],
	["u8g2_font_timB08_tf","u8g2_font_timB08_tf"],
	["u8g2_font_timB08_tn","u8g2_font_timB08_tn"],
	["u8g2_font_timB08_tr","u8g2_font_timB08_tr"],
	["u8g2_font_timB10_tf","u8g2_font_timB10_tf"],
	["u8g2_font_timB10_tn","u8g2_font_timB10_tn"],
	["u8g2_font_timB10_tr","u8g2_font_timB10_tr"],
	["u8g2_font_timB12_tf","u8g2_font_timB12_tf"],
	["u8g2_font_timB12_tn","u8g2_font_timB12_tn"],
	["u8g2_font_timB12_tr","u8g2_font_timB12_tr"],
	["u8g2_font_timB14_tf","u8g2_font_timB14_tf"],
	["u8g2_font_timB14_tn","u8g2_font_timB14_tn"],
	["u8g2_font_timB14_tr","u8g2_font_timB14_tr"],
	["u8g2_font_timB18_tf","u8g2_font_timB18_tf"],
	["u8g2_font_timB18_tn","u8g2_font_timB18_tn"],
	["u8g2_font_timB18_tr","u8g2_font_timB18_tr"],
	["u8g2_font_timB24_tf","u8g2_font_timB24_tf"],
	["u8g2_font_timB24_tn","u8g2_font_timB24_tn"],
	["u8g2_font_timB24_tr","u8g2_font_timB24_tr"],
	["u8g2_font_TimesNewPixel_tr","u8g2_font_TimesNewPixel_tr"],
	["u8g2_font_timR08_tf","u8g2_font_timR08_tf"],
	["u8g2_font_timR08_tn","u8g2_font_timR08_tn"],
	["u8g2_font_timR08_tr","u8g2_font_timR08_tr"],
	["u8g2_font_timR10_tf","u8g2_font_timR10_tf"],
	["u8g2_font_timR10_tn","u8g2_font_timR10_tn"],
	["u8g2_font_timR10_tr","u8g2_font_timR10_tr"],
	["u8g2_font_timR12_tf","u8g2_font_timR12_tf"],
	["u8g2_font_timR12_tn","u8g2_font_timR12_tn"],
	["u8g2_font_timR12_tr","u8g2_font_timR12_tr"],
	["u8g2_font_timR14_tf","u8g2_font_timR14_tf"],
	["u8g2_font_timR14_tn","u8g2_font_timR14_tn"],
	["u8g2_font_timR14_tr","u8g2_font_timR14_tr"],
	["u8g2_font_timR18_tf","u8g2_font_timR18_tf"],
	["u8g2_font_timR18_tn","u8g2_font_timR18_tn"],
	["u8g2_font_timR18_tr","u8g2_font_timR18_tr"],
	["u8g2_font_timR24_tf","u8g2_font_timR24_tf"],
	["u8g2_font_timR24_tn","u8g2_font_timR24_tn"],
	["u8g2_font_timR24_tr","u8g2_font_timR24_tr"],
	["u8g2_font_tinytim_tf","u8g2_font_tinytim_tf"],
	["u8g2_font_tinytim_tn","u8g2_font_tinytim_tn"],
	["u8g2_font_tinytim_tr","u8g2_font_tinytim_tr"],
	["u8g2_font_tom_thumb_4x6_me","u8g2_font_tom_thumb_4x6_me"],
	["u8g2_font_tom_thumb_4x6_mf","u8g2_font_tom_thumb_4x6_mf"],
	["u8g2_font_tom_thumb_4x6_mn","u8g2_font_tom_thumb_4x6_mn"],
	["u8g2_font_tom_thumb_4x6_mr","u8g2_font_tom_thumb_4x6_mr"],
	["u8g2_font_tom_thumb_4x6_t_all","u8g2_font_tom_thumb_4x6_t_all"],
	["u8g2_font_tom_thumb_4x6_te","u8g2_font_tom_thumb_4x6_te"],
	["u8g2_font_tom_thumb_4x6_tf","u8g2_font_tom_thumb_4x6_tf"],
	["u8g2_font_tom_thumb_4x6_tn","u8g2_font_tom_thumb_4x6_tn"],
	["u8g2_font_tom_thumb_4x6_tr","u8g2_font_tom_thumb_4x6_tr"],
	["u8g2_font_tooseornament_tf","u8g2_font_tooseornament_tf"],
	["u8g2_font_tooseornament_tn","u8g2_font_tooseornament_tn"],
	["u8g2_font_tooseornament_tr","u8g2_font_tooseornament_tr"],
	["u8g2_font_torussansbold8_8n","u8g2_font_torussansbold8_8n"],
	["u8g2_font_torussansbold8_8r","u8g2_font_torussansbold8_8r"],
	["u8g2_font_torussansbold8_8u","u8g2_font_torussansbold8_8u"],
	["u8g2_font_trixel_square_tf","u8g2_font_trixel_square_tf"],
	["u8g2_font_trixel_square_tn","u8g2_font_trixel_square_tn"],
	["u8g2_font_trixel_square_tr","u8g2_font_trixel_square_tr"],
	["u8g2_font_twelvedings_t_all","u8g2_font_twelvedings_t_all"],
	["u8g2_font_u8glib_4_hf","u8g2_font_u8glib_4_hf"],
	["u8g2_font_u8glib_4_hr","u8g2_font_u8glib_4_hr"],
	["u8g2_font_u8glib_4_tf","u8g2_font_u8glib_4_tf"],
	["u8g2_font_u8glib_4_tr","u8g2_font_u8glib_4_tr"],
	["u8g2_font_unifont_h_symbols","u8g2_font_unifont_h_symbols"],
	["u8g2_font_unifont_t_0_72_73","u8g2_font_unifont_t_0_72_73"],
	["u8g2_font_unifont_t_0_75","u8g2_font_unifont_t_0_75"],
	["u8g2_font_unifont_t_0_76","u8g2_font_unifont_t_0_76"],
	["u8g2_font_unifont_t_0_77","u8g2_font_unifont_t_0_77"],
	["u8g2_font_unifont_t_0_78_79","u8g2_font_unifont_t_0_78_79"],
	["u8g2_font_unifont_t_0_86","u8g2_font_unifont_t_0_86"],
	["u8g2_font_unifont_t_72_73","u8g2_font_unifont_t_72_73"],
	["u8g2_font_unifont_t_75","u8g2_font_unifont_t_75"],
	["u8g2_font_unifont_t_76","u8g2_font_unifont_t_76"],
	["u8g2_font_unifont_t_77","u8g2_font_unifont_t_77"],
	["u8g2_font_unifont_t_78_79","u8g2_font_unifont_t_78_79"],
	["u8g2_font_unifont_t_86","u8g2_font_unifont_t_86"],
	["u8g2_font_unifont_t_animals","u8g2_font_unifont_t_animals"],
	["u8g2_font_unifont_t_arabic","u8g2_font_unifont_t_arabic"],
	["u8g2_font_unifont_t_bengali","u8g2_font_unifont_t_bengali"],
	["u8g2_font_unifont_t_cards","u8g2_font_unifont_t_cards"],
	["u8g2_font_unifont_t_chinese1","u8g2_font_unifont_t_chinese1"],
	["u8g2_font_unifont_t_chinese2","u8g2_font_unifont_t_chinese2"],
	["u8g2_font_unifont_t_chinese3","u8g2_font_unifont_t_chinese3"],
	["u8g2_font_unifont_t_cyrillic","u8g2_font_unifont_t_cyrillic"],
	["u8g2_font_unifont_t_devanagari","u8g2_font_unifont_t_devanagari"],
	["u8g2_font_unifont_t_domino","u8g2_font_unifont_t_domino"],
	["u8g2_font_unifont_t_emoticons","u8g2_font_unifont_t_emoticons"],
	["u8g2_font_unifont_t_extended","u8g2_font_unifont_t_extended"],
	["u8g2_font_unifont_t_greek","u8g2_font_unifont_t_greek"],
	["u8g2_font_unifont_t_hebrew","u8g2_font_unifont_t_hebrew"],
	["u8g2_font_unifont_t_japanese1","u8g2_font_unifont_t_japanese1"],
	["u8g2_font_unifont_t_japanese2","u8g2_font_unifont_t_japanese2"],
	["u8g2_font_unifont_t_japanese3","u8g2_font_unifont_t_japanese3"],
	["u8g2_font_unifont_t_korean1","u8g2_font_unifont_t_korean1"],
	["u8g2_font_unifont_t_korean2","u8g2_font_unifont_t_korean2"],
	["u8g2_font_unifont_t_latin","u8g2_font_unifont_t_latin"],
	["u8g2_font_unifont_t_polish","u8g2_font_unifont_t_polish"],
	["u8g2_font_unifont_t_symbols","u8g2_font_unifont_t_symbols"],
	["u8g2_font_unifont_t_tibetan","u8g2_font_unifont_t_tibetan"],
	["u8g2_font_unifont_t_urdu","u8g2_font_unifont_t_urdu"],
	["u8g2_font_unifont_t_vietnamese1","u8g2_font_unifont_t_vietnamese1"],
	["u8g2_font_unifont_t_vietnamese2","u8g2_font_unifont_t_vietnamese2"],
	["u8g2_font_unifont_t_weather","u8g2_font_unifont_t_weather"],
	["u8g2_font_unifont_te","u8g2_font_unifont_te"],
	["u8g2_font_unifont_tf","u8g2_font_unifont_tf"],
	["u8g2_font_unifont_tr","u8g2_font_unifont_tr"],
	["u8g2_font_Untitled16PixelSansSerifBitmap_tr","u8g2_font_Untitled16PixelSansSerifBitmap_tr"],
	["u8g2_font_VCR_OSD_mf","u8g2_font_VCR_OSD_mf"],
	["u8g2_font_VCR_OSD_mn","u8g2_font_VCR_OSD_mn"],
	["u8g2_font_VCR_OSD_mr","u8g2_font_VCR_OSD_mr"],
	["u8g2_font_VCR_OSD_mu","u8g2_font_VCR_OSD_mu"],
	["u8g2_font_VCR_OSD_tf","u8g2_font_VCR_OSD_tf"],
	["u8g2_font_VCR_OSD_tn","u8g2_font_VCR_OSD_tn"],
	["u8g2_font_VCR_OSD_tr","u8g2_font_VCR_OSD_tr"],
	["u8g2_font_VCR_OSD_tu","u8g2_font_VCR_OSD_tu"],
	["u8g2_font_victoriabold8_8n","u8g2_font_victoriabold8_8n"],
	["u8g2_font_victoriabold8_8r","u8g2_font_victoriabold8_8r"],
	["u8g2_font_victoriabold8_8u","u8g2_font_victoriabold8_8u"],
	["u8g2_font_victoriamedium8_8n","u8g2_font_victoriamedium8_8n"],
	["u8g2_font_victoriamedium8_8r","u8g2_font_victoriamedium8_8r"],
	["u8g2_font_victoriamedium8_8u","u8g2_font_victoriamedium8_8u"],
	["u8g2_font_Wizzard_tr","u8g2_font_Wizzard_tr"],
	["u8g2_font_wqy12_t_chinese1","u8g2_font_wqy12_t_chinese1"],
	["u8g2_font_wqy12_t_chinese2","u8g2_font_wqy12_t_chinese2"],
	["u8g2_font_wqy12_t_chinese3","u8g2_font_wqy12_t_chinese3"],
	["u8g2_font_wqy12_t_gb2312","u8g2_font_wqy12_t_gb2312"],
	["u8g2_font_wqy12_t_gb2312a","u8g2_font_wqy12_t_gb2312a"],
	["u8g2_font_wqy12_t_gb2312b","u8g2_font_wqy12_t_gb2312b"],
	["u8g2_font_wqy13_t_chinese1","u8g2_font_wqy13_t_chinese1"],
	["u8g2_font_wqy13_t_chinese2","u8g2_font_wqy13_t_chinese2"],
	["u8g2_font_wqy13_t_chinese3","u8g2_font_wqy13_t_chinese3"],
	["u8g2_font_wqy13_t_gb2312","u8g2_font_wqy13_t_gb2312"],
	["u8g2_font_wqy13_t_gb2312a","u8g2_font_wqy13_t_gb2312a"],
	["u8g2_font_wqy13_t_gb2312b","u8g2_font_wqy13_t_gb2312b"],
	["u8g2_font_wqy14_t_chinese1","u8g2_font_wqy14_t_chinese1"],
	["u8g2_font_wqy14_t_chinese2","u8g2_font_wqy14_t_chinese2"],
	["u8g2_font_wqy14_t_chinese3","u8g2_font_wqy14_t_chinese3"],
	["u8g2_font_wqy14_t_gb2312","u8g2_font_wqy14_t_gb2312"],
	["u8g2_font_wqy14_t_gb2312a","u8g2_font_wqy14_t_gb2312a"],
	["u8g2_font_wqy14_t_gb2312b","u8g2_font_wqy14_t_gb2312b"],
	["u8g2_font_wqy15_t_chinese1","u8g2_font_wqy15_t_chinese1"],
	["u8g2_font_wqy15_t_chinese2","u8g2_font_wqy15_t_chinese2"],
	["u8g2_font_wqy15_t_chinese3","u8g2_font_wqy15_t_chinese3"],
	["u8g2_font_wqy15_t_gb2312","u8g2_font_wqy15_t_gb2312"],
	["u8g2_font_wqy15_t_gb2312a","u8g2_font_wqy15_t_gb2312a"],
	["u8g2_font_wqy15_t_gb2312b","u8g2_font_wqy15_t_gb2312b"],
	["u8g2_font_wqy16_t_chinese1","u8g2_font_wqy16_t_chinese1"],
	["u8g2_font_wqy16_t_chinese2","u8g2_font_wqy16_t_chinese2"],
	["u8g2_font_wqy16_t_chinese3","u8g2_font_wqy16_t_chinese3"],
	["u8g2_font_wqy16_t_gb2312","u8g2_font_wqy16_t_gb2312"],
	["u8g2_font_wqy16_t_gb2312a","u8g2_font_wqy16_t_gb2312a"],
	["u8g2_font_wqy16_t_gb2312b","u8g2_font_wqy16_t_gb2312b"]
	];










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

Blockly.Blocks['tcp_https_esp32'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE4_HEAD_HTTPS_SHOW);
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE2_REQUEST_TYPE_SHOW)
		.appendField(new Blockly.FieldDropdown([
			["GET","GET"],
			["POST","POST"]  
			]), "type");		
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
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE2_REQUEST_TYPE_SHOW)
		.appendField(new Blockly.FieldDropdown([
			["GET","GET"],
			["POST","POST"]  
			]), "type");		
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

Blockly.Blocks['linenotify_all'] = {
  init: function() {
	this.appendValueInput("token_")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.FRANCE5_HEAD_LINE_SHOW)
		.appendField(Blockly.Msg.ESP32_LINE_TOKEN_SHOW);  	  
	this.appendDummyInput()  
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.ESP32_LINE_TEXT_SHOW,"text"],
			[Blockly.Msg.ESP32_LINE_STICKER_SHOW,"sticker"], 
			[Blockly.Msg.ESP32_LINE_IMAGE_SHOW,"image"]
		], this.validate), "type_"); 	  
    this.appendValueInput("text_")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_MESSAGE_SHOW);
    this.appendValueInput("packageId_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_PACKAGEID_SHOW,"S1");
    this.appendValueInput("stickerId_")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_STICKERID_SHOW,"S2");
    this.appendValueInput("originalContentUrl_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_ORIGINALCONTENTURL_SHOW,"I1");
    this.appendValueInput("previewImageUrl_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESP32_LINE_PREVIEWIMAGEURL_SHOW,"I2");		
	this.setInputsInline(true);	  
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
	this.getInput("packageId_").setVisible(false);
	this.getField("S1").setVisible(false);
	this.getInput("stickerId_").setVisible(false);
	this.getField("S2").setVisible(false);
	this.getInput("originalContentUrl_").setVisible(false);
	this.getField("I1").setVisible(false);
	this.getInput("previewImageUrl_").setVisible(false);
	this.getField("I2").setVisible(false);	
	
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (newValue=="text") {
		 block.getInput("packageId_").setVisible(false);
		 block.getField("S1").setVisible(false);
		 block.getInput("stickerId_").setVisible(false);
		 block.getField("S2").setVisible(false);
		 block.getInput("originalContentUrl_").setVisible(false);
		 block.getField("I1").setVisible(false);
		 block.getInput("previewImageUrl_").setVisible(false);
		 block.getField("I2").setVisible(false);
		 block.setInputsInline(true);
	 }
	 else if (newValue=="sticker") {
		 block.getInput("packageId_").setVisible(true);
		 block.getField("S1").setVisible(true);
		 block.getInput("stickerId_").setVisible(true);
		 block.getField("S2").setVisible(true);
		 block.getInput("originalContentUrl_").setVisible(false);
		 block.getField("I1").setVisible(false);
		 block.getInput("previewImageUrl_").setVisible(false);
		 block.getField("I2").setVisible(false); 
		 block.setInputsInline(false);		 
	 }
	 else if (newValue=="image") {
		 block.getInput("packageId_").setVisible(false);
		 block.getField("S1").setVisible(false);
		 block.getInput("stickerId_").setVisible(false);
		 block.getField("S2").setVisible(false);
		 block.getInput("originalContentUrl_").setVisible(true);
		 block.getField("I1").setVisible(true);
		 block.getInput("previewImageUrl_").setVisible(true);
		 block.getField("I2").setVisible(true);
		 block.setInputsInline(false);		 
	 }	 
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
	this.appendDummyInput().appendField(Blockly.Msg.SET_WIFI_UNTIL_READY_TITLE);
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

Blockly.Blocks['thingspeak_update_noreturn'] = {
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
	this.setPreviousStatement(!0);
	this.setNextStatement(!0); 
	this.setColour(20);
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
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");		
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
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
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");	
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
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.ESP32_SERVERMODULE_FLASH_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["Y","Y"],
			["N","N"]	
		]), "flash");		
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['esp32_cam_stream_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_CAM_STREAM_SERVERMODULE_SHOW);
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
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");
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
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.ESP32_SERVERMODULE_FLASH_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["Y","Y"],
			["N","N"]	
		]), "flash");		
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['esp32_bluetooth_initial'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_BLUETOOTH_INITIAL_SHOW);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_BAUDRATE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");		
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
	this.appendStatementInput("execute");		
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
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_BAUDRATE_SHOW)	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");
    this.appendValueInput("blename")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_NAME_SHOW);		
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
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
    this.setColour(Blockly.Msg["HUE_21"]);
  }
};

Blockly.Blocks['servermodule_cmd_if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_CMD_IF_SHOW);
    this.appendValueInput("text")
        .setCheck(null);
    this.appendStatementInput("statement")
        .setCheck(null);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_21"]);
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
	this.setColour(Blockly.Msg["HUE_22"]);
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
	this.setColour(Blockly.Msg["HUE_22"]);
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
	this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['servermodule_parameter'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["cmd","cmd"],	  
		["p1","p1"],
		["p2","p2"],
		["p3","p3"],	
		["p4","p4"],
		["p5","p5"],
		["p6","p6"],
		["p7","p7"],	
		["p8","p8"],
		["p9","p9"],
		["Command","Command"]  
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
	this.setColour(Blockly.Msg["HUE_21"]);
  }
};

Blockly.Blocks['servermodule_parameter_variable'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["cmd","cmd"],	  
		["p1","p1"],
		["p2","p2"],
		["p3","p3"],	
		["p4","p4"],
		["p5","p5"],
		["p6","p6"],
		["p7","p7"],	
		["p8","p8"],
		["p9","p9"],
		["Command","Command"]
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
    this.setColour(Blockly.Msg["HUE_21"]);
  }
};

Blockly.Blocks['servermodule_parameter_variable_urldecode'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["cmd","cmd"],	  
		["p1","p1"],
		["p2","p2"],
		["p3","p3"],	
		["p4","p4"],
		["p5","p5"],
		["p6","p6"],
		["p7","p7"],	
		["p8","p8"],
		["p9","p9"],
		["Command","Command"]
	]), "parameter"); 
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_URLDECODE_SHOW);    
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(Blockly.Msg["HUE_21"]);
  }
};

Blockly.Blocks['servermodule_parameter_get'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["cmd","cmd"],		  
			["p1","p1"],
			["p2","p2"],
			["p3","p3"],	
			["p4","p4"],
			["p5","p5"],
			["p6","p6"],
			["p7","p7"],	
			["p8","p8"],
			["p9","p9"],
			["Command","Command"]
	  ]), "parameter");   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(Blockly.Msg["HUE_21"]);
  }
};

Blockly.Blocks['servermodule_parameter_set'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_SHOW);
	this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["cmd","cmd"],		  
			["p1","p1"],
			["p2","p2"],
			["p3","p3"],	
			["p4","p4"],
			["p5","p5"],
			["p6","p6"],
			["p7","p7"],	
			["p8","p8"],
			["p9","p9"],
			["Command","Command"] 
	  ]), "parameter"); 
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_EQUAL_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_21"]);
  }
};

Blockly.Blocks['servermodule_parameter_set_address'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
    this.appendValueInput("cmd")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("cmd")	
        .setCheck(null);   
    this.appendValueInput("p1")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p1")	
        .setCheck(null); 
    this.appendValueInput("p2")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p2")	
        .setCheck(null); 
	this.appendValueInput("p3")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p3")	
        .setCheck(null); 
    this.appendValueInput("p4")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p4")	
        .setCheck(null); 
    this.appendValueInput("p5")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p5")	
        .setCheck(null); 		
    this.appendValueInput("p6")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p6")	
        .setCheck(null); 
    this.appendValueInput("p7")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p7")	
        .setCheck(null); 
    this.appendValueInput("p8")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p8")	
        .setCheck(null);
    this.appendValueInput("p9")
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField("p9")	
        .setCheck(null);  		
	this.setInputsInline(false);
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
    this.appendValueInput("p1")
        .appendField("p1")	
        .setCheck(null); 
    this.appendValueInput("p2")
        .appendField("p2")	
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

Blockly.Blocks['servermodule_parameter_stream'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_STREAM_SHOW);
    this.appendValueInput("cmd")
        .setCheck(null);	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_stream_url'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_STREAM_URL_SHOW);
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(Blockly.Msg["HUE_12"]);
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
	this.setHelpUrl("https://github.com/fustyles/Arduino/blob/master/ESP32_MLX90615.ino");
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
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");		
    this.appendValueInput("mainpage")
        .setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);	
    this.setColour(190);
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
  this.appendValueInput("trcount_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TRCOUNT);    
  this.appendValueInput("tdcount_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TDCOUNT);  	  
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
      .appendField(Blockly.Msg.TABLE_TD_WIDTH);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TABLE_TD_HEIGHT); 	  
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_ONCLICK_COLUMN_ROW,"onclick[Column,Row]"], [Blockly.Msg.PROPERTY_ONCLICKIMAGE,"onclickImage"], [Blockly.Msg.PROPERTY_COLUMNS,"columns"], [Blockly.Msg.PROPERTY_ROWS,"rows"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_BACKGROUNDIMAGE,"backgroundimage"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.ELEMENTID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_9"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['music_delete'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MUSIC_DELETE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_1"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_ROTATE,"rotate"], [Blockly.Msg.PROPERTY_ROTATEX,"rotateX"], [Blockly.Msg.PROPERTY_ROTATEY,"rotateY"], [Blockly.Msg.PROPERTY_ROTATEZ,"rotateZ"], [Blockly.Msg.PROPERTY_MOVEX,"moveX"], [Blockly.Msg.PROPERTY_MOVEY,"moveY"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_BORDER,"border"], [Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['canvas_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CANVAS_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GET)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_EXIST,"exist"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_ROTATE,"rotate"], [Blockly.Msg.PROPERTY_ROTATEX,"rotateX"], [Blockly.Msg.PROPERTY_ROTATEY,"rotateY"], [Blockly.Msg.PROPERTY_ROTATEZ,"rotateZ"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_BORDER,"border"], [Blockly.Msg.PROPERTY_BACKGROUNDCOLOR,"backgroundColor"], [Blockly.Msg.ELEMENTID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
  }
};

Blockly.Blocks['canvas_ellipse'] = {
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
      .appendField(Blockly.Msg.CANVAS_Cp1X);
  this.appendValueInput("cp1y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Cp1Y);    
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
      .appendField(Blockly.Msg.CANVAS_Cp1X);
  this.appendValueInput("cp1y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Cp1Y); 
  this.appendValueInput("cp2x_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Cp2X);
  this.appendValueInput("cp2y_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CANVAS_Cp2Y);    
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_10"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
  }
};

Blockly.Blocks['image_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GET)    
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_EXIST,"exist"], [Blockly.Msg.URL,"url"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_NATURALWIDTH,"naturalwidth"], [Blockly.Msg.PROPERTY_NATURALHEIGHT,"naturalheight"], [Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ROTATE,"rotate"], [Blockly.Msg.PROPERTY_ROTATEX,"rotateX"], [Blockly.Msg.PROPERTY_ROTATEY,"rotateY"], [Blockly.Msg.PROPERTY_ROTATEZ,"rotateZ"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
  }
};

Blockly.Blocks['image_sys_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SYS_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WIDTH,"screen_width"], [Blockly.Msg.HEIGHT,"screen_height"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['image_onclick_listener'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ONCLICK_LISTENER);
    this.appendStatementInput("do_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
  }
};

Blockly.Blocks['image_binarytobase64'] = {
  init: function() {
  this.appendValueInput("array_")
      .setCheck(null)
      .appendField(Blockly.Msg.IMAGE_BINARY_TO_BASE64);
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_3"]);   
  }
};

Blockly.Blocks['mouse_coordinate_get_start'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_COORDINATE_GET_START);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['mouse_coordinate_get'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_COORDINATE_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_PAGEX,"pageX"], [Blockly.Msg.PROPERTY_PAGEY,"pageY"], [Blockly.Msg.PROPERTY_OFFSETX,"offsetX"], [Blockly.Msg.PROPERTY_OFFSETY,"offsetY"], [Blockly.Msg.PROPERTY_CLIENTX,"clientX"], [Blockly.Msg.PROPERTY_CLIENTY,"clientY"], [Blockly.Msg.PROPERTY_SCREENX,"screenX"], [Blockly.Msg.PROPERTY_SCREENY,"screenY"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_1"]);
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
    this.setColour(Blockly.Msg["HUE_1"]);
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
    this.setColour(Blockly.Msg["HUE_1"]);
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
    this.setColour(Blockly.Msg["HUE_1"]);
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
    this.setColour(Blockly.Msg["HUE_1"]);
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
    this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['text_to_number'] = {
  init: function() {
    this.appendValueInput("value_text_")
        .setCheck(null)
        .appendField(Blockly.Msg.TEXT_TO_NUMBER);
    this.setOutput(true);  
    this.setColour(Blockly.Msg["HUE_1"]);
  }  
};

Blockly.Blocks['loop_break'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP_BREAK);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['loop_continue'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP_CONTINUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_1"]);
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
    this.setColour(Blockly.Msg["HUE_1"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.setColour(Blockly.Msg["HUE_3"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);
  this.appendValueInput("fontsize_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FONTSIZE);  	  
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
  this.setColour(Blockly.Msg["HUE_4"]);
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
  this.setColour(Blockly.Msg["HUE_4"]);
  }
};

Blockly.Blocks['button_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.BUTTON_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.FONTCOLOR,"color"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_4"]);
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
  this.setColour(Blockly.Msg["HUE_4"]);
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
  this.setColour(Blockly.Msg["HUE_4"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['transform_async_function'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TRANSFORM_ASYNC_FUNCTION);    
  this.appendStatementInput("do_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['element_event'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.ELEMENT_WINDOW,"window"],
	  [Blockly.Msg.ELEMENT_DOCUMENT,"document"],
	  [Blockly.Msg.ELEMENT_TABLE,"table"],
	  [Blockly.Msg.ELEMENT_IMAGE,"image"],
	  [Blockly.Msg.ELEMENT_CANVAS,"canvas"],
	  [Blockly.Msg.ELEMENT_BUTTON,"button"],
	  [Blockly.Msg.ELEMENT_COLOR,"color"],
	  [Blockly.Msg.ELEMENT_SELECT,"select"],
	  [Blockly.Msg.ELEMENT_RANGE,"range"],
	  [Blockly.Msg.ELEMENT_TEXT,"text"],[
	  Blockly.Msg.ELEMENT_DIV,"div"],
	  [Blockly.Msg.ELEMENT_IFRAME,"iframe"],
	  [Blockly.Msg.ELEMENT_A,"a"],
	  [Blockly.Msg.ELEMENT_RADIO,"radio"],
	  [Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],
	  [Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],
	  [Blockly.Msg.ELEMENT_NUMBER,"number"],
	  [Blockly.Msg.ELEMENT_DATE,"date"],
	  [Blockly.Msg.ELEMENT_TIME,"time"],
	  [Blockly.Msg.ELEMENT_DATETIME,"datetime"],
	  [Blockly.Msg.ELEMENT_PROGRESS,"progress"],
	  [Blockly.Msg.ELEMENT_PASSWORD,"password"]
	  ],this.validate), "element");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.getInput("id_").setVisible(false);
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
		["seellipseh","seellipseh"],
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
  this.setColour(Blockly.Msg["HUE_1"]);
  this.setHelpUrl("https://fustyles.github.io/webduino/GameElements_20190131/HTML%20DOM%20EVENTS.txt");
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="window"||newValue=="document") {
		block.getInput("id_").setVisible(false);
	}
	else {
		block.getInput("id_").setVisible(true);
	}
  }
};

Blockly.Blocks['element_event_stop'] = {
  init: function () {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.ELEMENT)
      .appendField(new Blockly.FieldDropdown([
	  [Blockly.Msg.ELEMENT_WINDOW,"window"],
	  [Blockly.Msg.ELEMENT_DOCUMENT,"document"],
	  [Blockly.Msg.ELEMENT_TABLE,"table"],
	  [Blockly.Msg.ELEMENT_IMAGE,"image"],
	  [Blockly.Msg.ELEMENT_CANVAS,"canvas"],
	  [Blockly.Msg.ELEMENT_BUTTON,"button"],
	  [Blockly.Msg.ELEMENT_COLOR,"color"],
	  [Blockly.Msg.ELEMENT_SELECT,"select"],
	  [Blockly.Msg.ELEMENT_RANGE,"range"],
	  [Blockly.Msg.ELEMENT_TEXT,"text"],
	  [Blockly.Msg.ELEMENT_DIV,"div"],
	  [Blockly.Msg.ELEMENT_IFRAME,"iframe"],
	  [Blockly.Msg.ELEMENT_A,"a"],
	  [Blockly.Msg.ELEMENT_RADIO,"radio"],
	  [Blockly.Msg.ELEMENT_CHECKBOX,"checkbox"],
	  [Blockly.Msg.ELEMENT_TEXTAREA,"textarea"],
	  [Blockly.Msg.ELEMENT_NUMBER,"number"],
	  [Blockly.Msg.ELEMENT_DATE,"date"],
	  [Blockly.Msg.ELEMENT_TIME,"time"],
	  [Blockly.Msg.ELEMENT_DATETIME,"datetime"],
	  [Blockly.Msg.ELEMENT_PROGRESS,"progress"],
	  [Blockly.Msg.ELEMENT_PASSWORD,"password"]
	  ],this.validate), "element");
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.ID); 
  this.getInput("id_").setVisible(false);  
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
		["seellipseh","seellipseh"],
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
  this.setColour(Blockly.Msg["HUE_1"]);
  this.setHelpUrl("https://fustyles.github.io/webduino/GameElements_20190131/HTML%20DOM%20EVENTS.txt");
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="window"||newValue=="document") {
		block.getInput("id_").setVisible(false);
	}
	else {
		block.getInput("id_").setVisible(true);
	}
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLORPICKER_COLOR); 	  
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
  this.setColour(Blockly.Msg["HUE_5"]);
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
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};

Blockly.Blocks['colorpicker_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.COLORPICKER_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COLORPICKER_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_5"]);
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
  this.setColour(Blockly.Msg["HUE_5"]);
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
  this.setColour(Blockly.Msg["HUE_5"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SELECT_VALUE); 		  
  this.appendValueInput("option_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SELECT_OPTION); 
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);  	  
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
  this.setColour(Blockly.Msg["HUE_6"]);
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
  this.setColour(Blockly.Msg["HUE_6"]);
  }
};

Blockly.Blocks['select_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SELECT_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SELECT_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_SELECTEDVALUE,"selectedValue"], [Blockly.Msg.PROPERTY_SELECTEDTEXT,"selectedText"], [Blockly.Msg.PROPERTY_SELECTEDINDEX,"selectedIndex"], [Blockly.Msg.PROPERTY_LENGTH,"length"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_6"]);
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
  this.setColour(Blockly.Msg["HUE_6"]);
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
  this.setColour(Blockly.Msg["HUE_6"]);
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
  this.appendValueInput("value_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE); 	  
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
  this.setColour(Blockly.Msg["HUE_7"]);
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
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['range_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RANGE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RANGE_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_STEP,"step"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
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
  this.setColour(Blockly.Msg["HUE_7"]);
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
  this.setColour(Blockly.Msg["HUE_7"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT_VALUE);
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);	  
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
  this.setColour(Blockly.Msg["HUE_8"]);
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
  this.setColour(Blockly.Msg["HUE_8"]);
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
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_8"]);
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
  this.setColour(Blockly.Msg["HUE_8"]);
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
  this.setColour(Blockly.Msg["HUE_8"]);
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
  this.appendValueInput("innerHTML_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DIV_VALUE); 
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);	  
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
  this.setColour(Blockly.Msg["HUE_11"]);
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
  this.setColour(Blockly.Msg["HUE_11"]);
  }
};

Blockly.Blocks['div_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DIV_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DIV_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_11"]);
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
  this.setColour(Blockly.Msg["HUE_11"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
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
  this.appendValueInput("src_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFRAME_SRC); 
  this.appendValueInput("srcdoc_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFRAME_SRCDOC); 	  
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
  this.setColour(Blockly.Msg["HUE_12"]);
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
  this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['iframe_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.IFRAME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.IFRAME_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_FRAMEBORDER,"frameborder"], [Blockly.Msg.PROPERTY_SCROLLING,"scrolling"], [Blockly.Msg.PROPERTY_SRC,"src"], [Blockly.Msg.PROPERTY_SRCDOC,"srcdoc"], [Blockly.Msg.PROPERTY_SANDBOX,"sandbox"], [Blockly.Msg.PROPERTY_ALLOW,"allow"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_12"]);
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
  this.setColour(Blockly.Msg["HUE_12"]);
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
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_FALSE,"false"], [Blockly.Msg.PROPERTY_TRUE,"true"]]), "async_"); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_26"]);
  }
};

Blockly.Blocks['ajax_get_board'] = {
  init: function () {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.AJAX_BOARD);
  this.appendValueInput("url_")
      .setCheck(null); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AJAX_ASYNC)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_FALSE,"false"], [Blockly.Msg.PROPERTY_TRUE,"true"]]), "async_"); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_26"]);
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
      .appendField(new Blockly.FieldDropdown([["　",""], [Blockly.Msg.AJAX_JSONTOSTRING,"JSON to String"], [Blockly.Msg.AJAX_XMLTOSTRING,"XML to String"]]), "format_"); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_26"]);
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
  this.setColour(Blockly.Msg["HUE_26"]);
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
  this.setColour(Blockly.Msg["HUE_26"]);
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
  this.setColour(Blockly.Msg["HUE_26"]);
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
  this.appendValueInput("innerHTML_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DIV_VALUE); 
  this.appendValueInput("href_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.A_HREF); 
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);	  
  this.appendValueInput("color_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(Blockly.Msg.FONTCOLOR);
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
  this.appendValueInput("opacity_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPACITY);
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
  this.setColour(Blockly.Msg["HUE_13"]);
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
  this.setColour(Blockly.Msg["HUE_13"]);
  }
};

Blockly.Blocks['a_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.A_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.A_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_HREF,"href"], [Blockly.Msg.PROPERTY_TARGET,"target"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_13"]);
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
  this.setColour(Blockly.Msg["HUE_13"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);
  this.appendValueInput("checked_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_CHECKED);	  
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
  this.setColour(Blockly.Msg["HUE_14"]);
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
  this.setColour(Blockly.Msg["HUE_14"]);
  }
};

Blockly.Blocks['radio_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.RADIO_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.RADIO_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.SIZE,"size"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_CHECKED,"checked"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_14"]);
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
  this.setColour(Blockly.Msg["HUE_14"]);
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
  this.setColour(Blockly.Msg["HUE_14"]);
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
  this.setColour(Blockly.Msg["HUE_14"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);
  this.appendValueInput("checked_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_CHECKED);	  
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
  this.setColour(Blockly.Msg["HUE_15"]);
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
  this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['checkbox_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.CHECKBOX_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.CHECKBOX_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.SIZE,"size"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_CHECKED,"checked"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_15"]);
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
  this.setColour(Blockly.Msg["HUE_15"]);
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
  this.setColour(Blockly.Msg["HUE_15"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_VALUE);	 	  
  this.appendValueInput("cols_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_COLUMNS);
  this.appendValueInput("rows_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_ROWS);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
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
  this.setColour(Blockly.Ms);
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
  this.setColour(Blockly.Ms);
  }
};

Blockly.Blocks['textarea_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TEXTAREA_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEXTAREA_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_COLUMNS,"cols"], [Blockly.Msg.PROPERTY_ROWS,"rows"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_READONLY,"readonly"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Ms);
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
  this.setColour(Blockly.Ms);
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
  this.setColour(Blockly.Ms);
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
  this.appendValueInput("value_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE); 	  
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
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);	  
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
  this.setColour(Blockly.Msg["HUE_17"]);
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
  this.setColour(Blockly.Msg["HUE_17"]);
  }
};

Blockly.Blocks['number_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.NUMBER_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.NUMBER_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_STEP,"step"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_17"]);
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
  this.setColour(Blockly.Msg["HUE_17"]);
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
  this.setColour(Blockly.Msg["HUE_17"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(YYYY-MM-DD)"); 	  
  this.appendValueInput("min_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MIN+"(YYYY-MM-DD)"); 
  this.appendValueInput("max_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX+"(YYYY-MM-DD)");
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
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
  this.setColour(Blockly.Msg["HUE_18"]);
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
  this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['date_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATE_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATE_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_MIN,"min"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_18"]);
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
  this.setColour(Blockly.Msg["HUE_18"]);
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
  this.setColour(Blockly.Msg["HUE_18"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(HH:mm:ss)"); 	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
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
  this.setColour(Blockly.Msg["HUE_19"]);
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
  this.setColour(Blockly.Msg["HUE_19"]);
  }
};

Blockly.Blocks['time_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.TIME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TIME_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_19"]);
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
  this.setColour(Blockly.Msg["HUE_19"]);
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
  this.setColour(Blockly.Msg["HUE_19"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE+"(yyyy-mm-dd HH:mm)");   	  
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
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
  this.setColour(Blockly.Msg["HUE_20"]);
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
  this.setColour(Blockly.Msg["HUE_20"]);
  }
};

Blockly.Blocks['datetime_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.DATETIME_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.DATETIME_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_20"]);
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
  this.setColour(Blockly.Msg["HUE_20"]);
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
  this.setColour(Blockly.Msg["HUE_20"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);
  this.appendValueInput("max_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAX); 
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP);
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
  this.setColour(Blockly.Msg["HUE_21"]);
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
  this.setColour(Blockly.Msg["HUE_21"]);
  }
};

Blockly.Blocks['progress_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.PROGRESS_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.PROGRESS_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_MAX,"max"], [Blockly.Msg.PROPERTY_VALUE,"value"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_21"]);
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
  this.setColour(Blockly.Msg["HUE_21"]);
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
  this.appendValueInput("value_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);	  
  this.appendValueInput("maxlength_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAXLENGTH);
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
  this.setColour(Blockly.Msg["HUE_22"]);
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
  this.setColour(Blockly.Msg["HUE_22"]);
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
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.MAXLENGTH,"maxlength"], [Blockly.Msg.VALUE,"value"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_22"]);
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
  this.setColour(Blockly.Msg["HUE_22"]);
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
  this.setColour(Blockly.Msg["HUE_23"]);
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
  this.setColour(Blockly.Msg["HUE_23"]);
  }
};

Blockly.Blocks['form_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.FORM_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FORM_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FORM_ACTION,"action"], [Blockly.Msg.FORM_TARGET,"target"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_23"]);
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
  this.setColour(Blockly.Msg["HUE_23"]);
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
  this.setColour(Blockly.Msg["HUE_23"]);
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
  this.setColour(Blockly.Msg["HUE_23"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
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
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]], this.validate), "cam_");
  this.appendValueInput("src_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROPERTY_SRC); 		  
  this.appendDummyInput("v1")  
      .appendField(Blockly.Msg.PROPERTY_AUTOPLAY)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "autoplay_");
  this.appendDummyInput("v2")  
      .appendField(Blockly.Msg.PROPERTY_LOOP)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "loop_");
  this.appendDummyInput("v3")  
      .appendField(Blockly.Msg.PROPERTY_MUTED)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_NO,"false"], [Blockly.Msg.PROPERTY_YES,"true"]]), "muted_");
  this.appendDummyInput("v4")  
      .appendField(Blockly.Msg.PROPERTY_CONTROLS)
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PROPERTY_YES,"true"], [Blockly.Msg.PROPERTY_NO,"false"]]), "controls_");
  this.appendDummyInput("v5")  
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
  this.setColour(Blockly.Msg["HUE_24"]);
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (newValue=="true") {
		 block.getInput("src_").setVisible(false);
		 block.getInput("v1").setVisible(false);
		 block.getInput("v2").setVisible(false);
		 block.getInput("v3").setVisible(false);
		 block.getInput("v4").setVisible(false);
		 block.getInput("v5").setVisible(false);
	 }
	 else {
		 block.getInput("src_").setVisible(true);
		 block.getInput("v1").setVisible(true);
		 block.getInput("v2").setVisible(true);
		 block.getInput("v3").setVisible(true);
		 block.getInput("v4").setVisible(true);
		 block.getInput("v5").setVisible(true);		 
	 }	 
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
  this.setColour(Blockly.Msg["HUE_24"]);
  }
};

Blockly.Blocks['video_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.WIDTH,"width"], [Blockly.Msg.HEIGHT,"height"], [Blockly.Msg.PROPERTY_SRC,"src"], [Blockly.Msg.PROPERTY_AUTOPLAY,"autoplay"], [Blockly.Msg.PROPERTY_LOOP,"loop"], [Blockly.Msg.PROPERTY_MUTED,"muted"], [Blockly.Msg.PROPERTY_CONTROLS,"controls"], [Blockly.Msg.PROPERTY_PRELOAD,"preload"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DISABLED,"disabled"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"], [Blockly.Msg.ELEMENTID,"id"], [Blockly.Msg.PROPERTY_NAME,"name"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_24"]);
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
  this.setColour(Blockly.Msg["HUE_24"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
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
      .appendField(Blockly.Msg.VIDEO_SPREADSHEET);
  this.appendValueInput("spreadsheeturl_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETURL);
  this.appendValueInput("spreadsheetname_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETNAME);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.VIDEO_BASE64_FORMAT)
	  .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown([["image","image"], ["base64","string"]],this.validate), "format_");	  
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
  this.appendValueInput("spreadsheet_script_")
      .setCheck("String")	  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL);
  this.getInput("spreadsheet_script_").setVisible(false);	  
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/WebduinoSpreadsheet.gs");	  
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_1"]);
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="image") {
		block.getInput("height_").setVisible(true);
	}
	else
		block.getInput("height_").setVisible(false);
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
  this.appendValueInput("drive_script_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL);	  
  this.appendValueInput("foldername_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_FOLDERNAME);	  
  this.appendValueInput("filename_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)	  
      .appendField(Blockly.Msg.VIDEO_BASE64_FILENAME);	  	  
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/WebduinoDrive.gs");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_1"]);
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
  this.getInput("email_script_").setVisible(false);	  
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/SendCapturedImageByGmail_doPost.gs");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_1"]);
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
  this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['colour_picker'] = {
  init: function() {	
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"COLOUR");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(Blockly.Msg["HUE_1"]);  
  }
};

Blockly.Blocks['fu_color'] = {
  init: function() {	
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"RGB");
	this.setInputsInline(true);
	this.setOutput(true);
	this.setColour(200);	
  }
};

Blockly.Blocks['text_br'] = {
  init: function() {	
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_BR_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
	  ["<br>","<br>"]
	  ,["\\n","\\n"]
	  ,["\\\\n","\\\\n"]	  
	  ]), "newline"); 		
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(Blockly.Msg["HUE_1"]);  
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
  this.setColour(Blockly.Msg["HUE_1"]);   
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
  this.setColour(Blockly.Msg["HUE_25"]); 
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
  this.setColour(Blockly.Msg["HUE_25"]);  
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
  this.setColour(Blockly.Msg["HUE_25"]); 
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
  this.setColour(Blockly.Msg["HUE_25"]);
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
  this.setColour(Blockly.Msg["HUE_25"]); 
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
  this.setColour(Blockly.Msg["HUE_25"]);  
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
  this.setColour(Blockly.Msg["HUE_25"]);  
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
  this.setColour(Blockly.Msg["HUE_25"]);  
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
  this.setColour(Blockly.Msg["HUE_25"]); 
  }
};

Blockly.Blocks['span_create'] = {
  init: function() {
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SPAN_CREATE);
  this.appendValueInput("id_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ID);  
  this.appendValueInput("innerHTML_")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SPAN_VALUE); 
  this.appendValueInput("fontsize_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck("Number")
      .appendField(Blockly.Msg.FONTSIZE);	  
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
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_2"]);
  }
};

Blockly.Blocks['span_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SPAN_ID);      
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SPAN_SET) 
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BORDERRADIUS,"borderradius"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.PROPERTY_STYLE,"style"]]), "property_");
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_2"]);
  }
};

Blockly.Blocks['span_get'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SPAN_ID);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SPAN_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT,"left"], [Blockly.Msg.TOP,"top"], [Blockly.Msg.PROPERTY_BORDERSTYLE,"borderstyle"], [Blockly.Msg.PROPERTY_BORDERWIDTH,"borderwidth"], [Blockly.Msg.PROPERTY_BORDERCOLOR,"bordercolor"], [Blockly.Msg.PROPERTY_BACKGROUND,"background"], [Blockly.Msg.PROPERTY_COLOR,"color"], [Blockly.Msg.PROPERTY_FONTSIZE,"fontsize"], [Blockly.Msg.PROPERTY_OPACITY,"opacity"], [Blockly.Msg.PROPERTY_INNERHTML,"innerHTML"], [Blockly.Msg.PROPERTY_ZINDEX,"zindex"], [Blockly.Msg.PROPERTY_DISPLAY,"display"], [Blockly.Msg.PROPERTY_POSITION,"position"], [Blockly.Msg.PROPERTY_DRAGGABLE,"draggable"], [Blockly.Msg.ELEMENTID,"id"]]), "property_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_2"]);
  }
};

Blockly.Blocks['span_delete'] = {
  init: function () {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.SPAN_ID); 
  this.appendDummyInput()   
      .appendField(Blockly.Msg.SPAN_DELETE);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_2"]);
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
          [Blockly.Msg.LOCATION_SEARCH_SHOW,"seellipseh"],
          [Blockly.Msg.LOCATION_HASH_SHOW,"hash"]		  
        ]), "value_property");
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(Blockly.Msg["HUE_1"]); 
  }  
};

Blockly.Blocks['console_log'] = {
  init: function() {	
  this.appendDummyInput()
	  .appendField(Blockly.Msg.CONSOLE_LOG);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_1"]);  
  }
};

Blockly.Blocks['button_ouput_file_text'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.BUTTON_ID);  	  
  this.appendDummyInput()
	  .appendField(Blockly.Msg.BUTTON_OUTPUT_FILE_TEXT);
  this.appendValueInput("text_")
      .setCheck(null);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_4"]);  
  }
};

Blockly.Blocks['video_output_jpg'] = {
  init: function() {
this.appendValueInput("id_")
      .setCheck(null)
      .appendField(Blockly.Msg.VIDEO_ID);	  
  this.appendDummyInput()
	  .appendField(Blockly.Msg.VEDIO_OUTPUT_JPG);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_24"]);  
  }
};

Blockly.Blocks['window_open'] = {
  init: function() {
  this.appendValueInput("url_")
      .setCheck(null)
      .appendField(Blockly.Msg.WINDOW_OPEN);  	  
  this.appendDummyInput()
	  .appendField(Blockly.Msg.WINDOW_NAME)
	  .appendField(new Blockly.FieldDropdown([
		  [Blockly.Msg.WINDOW_NAME_NEW,"_blank"],
		  [Blockly.Msg.WINDOW_NAME_PARENT,"_parent"],
		  [Blockly.Msg.WINDOW_NAME_SELF,"_self"],
		  [Blockly.Msg.WINDOW_NAME_TOP,"_top"]
	  ]),"name_");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_1"]);  
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

Blockly.Blocks['BitMatrixLed_matrix_onecolor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX);
	this.appendValueInput("RGB")
		.setCheck("String")
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR);
	this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
		this.setColour(190);			
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
		this.setColour(190);			
	}
};

Blockly.Blocks['webbit_mooncar_ws2812_clear'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.FRANCEFU_WS2812_CLEAR);
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(190);			
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
    this.setColour(190);	
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
    this.setColour(190);	
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
    this.setColour(190);	
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
      .appendField(new Blockly.FieldDropdown([
		  ["NEC","NEC"],
		  ["NEC_8bits","NEC_8bits"], 
		  ["NEC_16bits","NEC_16bits"], 
		  ["Onkyo","Onkyo"], 
		  ["Apple","Apple"], 
		  ["Panasonic","Panasonic"], 
		  ["Kaseikyo","Kaseikyo"], 
		  ["Kaseikyo_Denon","Kaseikyo_Denon"], 
		  ["Denon","Denon"], 
		  ["Sharp","Sharp"], 
		  ["Sony_5bits","Sony_5bits"], 
		  ["Sony_8bits","Sony_8bits"], 
		  ["Sony_13bits","Sony_13bits"], 
		  ["RC5","RC5"], 
		  ["RC5X","RC5X"], 
		  ["RC6","RC6"]
	  ]),"IR_TYPE");
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



Blockly.Blocks['servermodule_parameter_set_address3_0'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
	this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["PARAMETER_IP"],"ip"],
		[Blockly.Msg["PARAMETER_MAC"],"mac"],
		[Blockly.Msg["PARAMETER_RESTART"],"restart"],	
		[Blockly.Msg["PARAMETER_GETSTILL"],"getstill"]	
		]), "cmd");	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_set_address3_1'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
	this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["PARAMETER_INPUTPULLUP"],"inputpullup"],
		[Blockly.Msg["PARAMETER_PINMODE"],"pinmode"],	  
		[Blockly.Msg["PARAMETER_DIGITALREAD"],"digitalread"],
		[Blockly.Msg["PARAMETER_ANALOGREAD"],"analogread"],
		[Blockly.Msg["PARAMETER_TOUCHREAD"],"touchread"],		
		[Blockly.Msg["PARAMETER_FLASH"],"flash"],		
		[Blockly.Msg["PARAMETER_FRAMESIZE"],"framesize"],
		[Blockly.Msg["PARAMETER_QUALITY"],"quality"],
		[Blockly.Msg["PARAMETER_CONTRAST"],"contrast"],
		[Blockly.Msg["PARAMETER_BRIGHTNESS"],"brightness"],
		[Blockly.Msg["PARAMETER_SATURATION"],"saturation"],
		[Blockly.Msg["PARAMETER_SPECIAL_EFFECT"],"special_effect"],
		[Blockly.Msg["PARAMETER_HMIRROR"],"hmirror"],
		[Blockly.Msg["PARAMETER_VFLIP"],"vflip"],
		[Blockly.Msg["PARAMETER_PRINT"],"print"],
		[Blockly.Msg["PARAMETER_PRINTLN"],"println"],
		[Blockly.Msg["PARAMETER_DELAY"],"delay"]		
		]), "cmd"); 
    this.appendValueInput("p1")
        .appendField("p1")	
        .setCheck(null);	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_set_address3_2'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
	this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["PARAMETER_RESETWIFI"],"resetwifi"],	  
		[Blockly.Msg["PARAMETER_DIGITALWRITE"],"digitalwrite"],
		[Blockly.Msg["PARAMETER_ANALOGWRITE"],"analogwrite"],
		[Blockly.Msg["PARAMETER_SERVO"],"servo"],		
		[Blockly.Msg["PARAMETER_RELAY"],"relay"]	
		]), "cmd"); 
    this.appendValueInput("p1")
        .appendField("p1")	
        .setCheck(null); 
    this.appendValueInput("p2")
        .appendField("p2")	
        .setCheck(null);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_set_address3'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
	this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["PARAMETER_BUZZER"],"buzzer"],
		[Blockly.Msg["PARAMETER_SERVO_ESP"],"servo"],		
		]), "cmd"); 
    this.appendValueInput("p1")
        .appendField("p1")	
        .setCheck(null); 
    this.appendValueInput("p2")
        .appendField("p2")	
        .setCheck(null);
    this.appendValueInput("p3")
        .appendField("p3")	
        .setCheck(null);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);	
  }
};

Blockly.Blocks['servermodule_parameter_set_address4'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_ADDRESS_SHOW);
	this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["PARAMETER_BUZZER_ESP"],"buzzer"]		
		]), "cmd"); 
    this.appendValueInput("p1")
        .appendField("p1")	
        .setCheck(null); 
    this.appendValueInput("p2")
        .appendField("p2")	
        .setCheck(null);
    this.appendValueInput("p3")
        .appendField("p3")	
        .setCheck(null);
    this.appendValueInput("p4")
        .appendField("p4")	
        .setCheck(null);		
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);	
  }
};


//SERIAL
Blockly.Blocks['fu_serial_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		]), "serial");		
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

Blockly.Blocks['fu_serial_begin_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["FU_SERIAL"]);
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		]), "serial");		
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["FU_SERIAL_BAUDRATE"])	
		.appendField(new Blockly.FieldDropdown([
			["300","300"],
			["1200","1200"],
			["2400","2400"],
			["4800","4800"],
			["9600","9600"],	    
			["19200","19200"],
			["38400","38400"],
			["57600","57600"],
			["74880","74880"],
			["115200","115200"],	
			["230400","230400"],
			["250000","250000"],
			["500000","500000"],
			["1000000","1000000"],	
			["2000000","2000000"]
		]), "baudrate");
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
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"]			
		]), "serial");		
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
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		]), "serial");		
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
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		]), "serial");		
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
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		]), "serial");		
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
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		]), "serial");		
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
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		]), "serial");		
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
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		]), "serial");		
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
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		]), "serial");		
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
    this.appendDummyInput()	 
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			["Serial","Serial"],
			["Serial1","mySerial1"],
			["Serial2","mySerial2"]			
		]), "serial");		
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

Blockly.Blocks['fu_mqtt_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT")
        .appendField(Blockly.Msg["MQTT_FU_INITIAL"]);
    this.appendValueInput("server")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["MQTT_FU_ADDRESS"]);
    this.appendValueInput("port")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["MQTT_FU_PORT"]);
    this.appendValueInput("user")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["MQTT_FU_ID"]);
    this.appendValueInput("password")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["MQTT_FU_PASSWORD"]);	
    this.appendValueInput("clientid")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["MQTT_FU_CLIENTID"]);		
    this.appendStatementInput("topic_subscribe")
        .appendField(Blockly.Msg["MQTT_FU_SUBSCRIBE_TOPIC"]);			
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
  }
};

Blockly.Blocks['fu_mqtt_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT")
		.appendField(Blockly.Msg["MQTT_FU_LOOP"]);	  
    this.appendDummyInput()
		.appendField(Blockly.Msg["MQTT_FU_WHEN_GETDATA"]);
    this.appendStatementInput("topic_getdata");	
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
  }
};

Blockly.Blocks['fu_mqtt_subscribe'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField("MQTT")
		.appendField(Blockly.Msg["MQTT_FU_SUBSCRIBE_TOPIC"]);	
    this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
  }
};

Blockly.Blocks['fu_mqtt_gettopic'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField("MQTT")
		.appendField(Blockly.Msg["MQTT_FU_GETDATA_TOPIC"]);
    this.appendStatementInput("topic_getdata");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
  }
};

Blockly.Blocks['fu_mqtt_senddata'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField("MQTT")
		.appendField(Blockly.Msg["MQTT_FU_TO_TOPIC"]);
    this.appendValueInput("text")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["MQTT_FU_PUBLISH_TEXT"]);	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
  }
};	

Blockly.Blocks['fu_mqtt_getdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT")
        .appendField(Blockly.Msg["MQTT_FU_GETDATA"]);
	this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(20)
  }
};	

Blockly.Blocks['fu_mqtt_sendimage'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField("MQTT")
		.appendField(Blockly.Msg["MQTT_FU_TO_TOPIC"]);
    this.appendDummyInput()	
		.appendField(Blockly.Msg["MQTT_FU_PUBLISH_IMAGE"]);	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
  }
};

Blockly.Blocks['cocossd_esp32cam'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERVERMODULE_JAVASCRIPT_SHOW);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_TFJS_COCOSSD_SHOW);		
    this.appendStatementInput("javascript_initial")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_TFJS_COCOSSD_INITIAL_SHOW);	
    this.appendStatementInput("javascript_recognition")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_TFJS_COCOSSD_RECOGNITION_SHOW);		
	this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_5"])
	}
};

Blockly.Blocks['cocossd_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_FRAME_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "frame_");	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_");	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};

Blockly.Blocks['cocossd_list'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OBJECT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[" ",""],
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
		["person","person"],
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
  ]), "object_");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};

Blockly.Blocks['cocossd_object'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OBJECT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[" ",""],	  
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
		["person","person"],
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
  ]), "object_");    
  this.appendValueInput("index_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_INDEX_SHOW);
  this.appendDummyInput()
      .appendField(Blockly.Msg.COCOSSD_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[" ",""],
		[Blockly.Msg.COCOSSD_DATA_CLASS_SHOW,"class"],
		[Blockly.Msg.COCOSSD_DATA_SCORE_SHOW,"score"],
		["X","x"],
		["Y","y"],
		[Blockly.Msg.COCOSSD_DATA_UPPERX_SHOW,"upperx"],
		[Blockly.Msg.COCOSSD_DATA_UPPERY_SHOW,"uppery"],	  
		[Blockly.Msg.COCOSSD_DATA_MIDDLEX_SHOW,"middlex"],
		[Blockly.Msg.COCOSSD_DATA_MIDDLEY_SHOW,"middley"],
		[Blockly.Msg.COCOSSD_DATA_BOTTOMX_SHOW,"bottomx"],
		[Blockly.Msg.COCOSSD_DATA_BOTTOMY_SHOW,"bottomy"],	  
		[Blockly.Msg.COCOSSD_WIDTH_SHOW,"width"],
		[Blockly.Msg.COCOSSD_HEIGHT_SHOW,"height"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};

Blockly.Blocks['cocossd_object_number'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_OBJECT_NUMBER_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[" ",""],
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
		["person","person"],
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
  ]), "object_");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};

Blockly.Blocks['cocossd_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_STATE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["Y","1"],
        ["N","0"]
  ]), "state_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};

Blockly.Blocks['cocossd_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};


Blockly.Blocks['cocossd_startvideo_media'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_FACING_SHOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.COCOSSD_FACING_FRONT_SHOW,"front"],
        [Blockly.Msg.COCOSSD_FACING_BACK_SHOW,"back"]
  ]), "facing_");  
  this.appendValueInput("index_")
      .setCheck("Number");  
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.COCOSSD_HEIGHT_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};

Blockly.Blocks['cocossd_startvideo_stream'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_SHOW);    
  this.appendValueInput("src_")
      .setCheck("String")
      .appendField(Blockly.Msg.COCOSSD_SRC_SHOW);	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};

Blockly.Blocks['cocossd_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};

Blockly.Blocks['cocossd_clear'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_5"]);
  }
};

Blockly.Blocks['cocossd_pause'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.COCOSSD_PAUSE_SHOW);
  this.appendValueInput("time_")
      .setCheck("Number")    
      .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_5"]);
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
    this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['declare_variable'] = {
  init: function () {
	this.appendDummyInput()
        .appendField(Blockly.Msg.DECLARE_VARIABLE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("i"), "variable")		
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['holistic_esp32cam'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERVERMODULE_JAVASCRIPT_SHOW);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_HOLISTIC_SHOW);		
    this.appendStatementInput("javascript_initial")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_HOLISTIC_INITIAL_SHOW);	
    this.appendStatementInput("javascript_recognition")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_HOLISTIC_RECOGNITION_SHOW);		
	this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_7"])
	}
};

Blockly.Blocks['holistic_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_SHOW);	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_VIDEO_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "video_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	
  ]), "face_");	
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_POSE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	
  ]), "pose_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_LEFTHAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	
  ]), "lefthand_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_RIGHTHAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	
  ]), "righthand_");  	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_7"]);
  this.setHelpUrl("https://google.github.io/mediapipe/solutions/holistic.html");   
  }
};

Blockly.Blocks['holistic_face_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" [1-468]");
  this.appendValueInput("part_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/face_landmarks.xlsx");  
  }
};

Blockly.Blocks['holistic_face_lefteye_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_LEFTEYE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["363"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","362"],
		["399","398"],	
		["385","384"],
		["386","385"],
		["387"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","386"],
		["388","387"],	
		["389","388"],
		["467","466"],
		["264"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","263"],
		["250","249"],	
		["391","390"],
		["374","373"],
		["375"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","374"],
		["381","380"],	
		["382","381"],
		["383","382"]
  ]), "part_"); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/face_landmarks.xlsx");   
  }
};

Blockly.Blocks['holistic_face_righteye_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["34"+" ("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","33"],
		["247","246"],	
		["162","161"],
		["161","160"],
		["160"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","159"],
		["159","158"],	
		["158","157"],
		["174","173"],
		["134"+" ("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","133"],
		["156","155"],	
		["155","154"],
		["154","153"],
		["146"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","145"],
		["145","144"],	
		["164","163"],
		["8","7"]
  ]), "part_"); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/face_landmarks.xlsx");   
  }
};

Blockly.Blocks['holistic_face_nose_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_NOSE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["7"+" ("+Blockly.Msg.HOLISTIC_UP_SHOW+")","6"],
		["198","197"],	
		["196","195"],
		["6","5"],	
		["5","4"],
		["2","1"],
		["20","19"],
		["95","94"],
		["3"+" ("+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","2"]
  ]), "part_"); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/face_landmarks.xlsx");   
  }
};

Blockly.Blocks['holistic_face_mouth_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_SHOW+" "+Blockly.Msg.HOLISTIC_MOUTH_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["1"+" ("+Blockly.Msg.HOLISTIC_OUT_SHOW+" "+Blockly.Msg.HOLISTIC_UP_SHOW+")","0"],
		["268","267"],	
		["270","269"],
		["271","270"],
		["410","409"],
		["292"+" ("+Blockly.Msg.HOLISTIC_OUT_SHOW+" "+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","291"],	
		["376","375"],
		["322","321"],
		["406","405"],
		["315","314"],	
		["18"+" ("+Blockly.Msg.HOLISTIC_OUT_SHOW+" "+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","17"],
		["85","84"],
		["182","181"],
		["92","91"],	
		["147","146"],
		["62"+" ("+Blockly.Msg.HOLISTIC_OUT_SHOW+" "+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","61"],	
		["186","185"],
		["41","40"],	
		["40","39"],		
		["38","37"],
		["14"+" ("+Blockly.Msg.HOLISTIC_IN_SHOW+" "+Blockly.Msg.HOLISTIC_UP_SHOW+")","13"],
		["313","312"],	
		["312","311"],
		["311","310"],
		["416","415"],
		["309"+" ("+Blockly.Msg.HOLISTIC_IN_SHOW+" "+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","308"],	
		["325","324"],
		["319","318"],
		["403","402"],
		["318","317"],	
		["15"+" ("+Blockly.Msg.HOLISTIC_IN_SHOW+" "+Blockly.Msg.HOLISTIC_DOWN_SHOW+")","14"],
		["88","87"],
		["179","178"],
		["89","88"],	
		["96","95"],
		["79"+" ("+Blockly.Msg.HOLISTIC_IN_SHOW+" "+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","78"],	
		["192","191"],
		["81","80"],	
		["82","81"],		
		["83","82"]		
  ]), "part_"); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/face_landmarks.xlsx");   
  }
};

Blockly.Blocks['holistic_pose_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_POSE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_NOSE_SHOW,"0"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","1"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_CENTER_SHOW+")","2"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","3"],		
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","4"],
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_CENTER_SHOW+")","5"],
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","6"],		
		[Blockly.Msg.HOLISTIC_LEFTEAR_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_RIGHTEAR_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_MOUTH_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","9"],
		[Blockly.Msg.HOLISTIC_MOUTH_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","10"],		
		[Blockly.Msg.HOLISTIC_LEFTSHOULDER_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_RIGHTSHOULDER_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_LEFTELBOW_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_RIGHTELBOW_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_LEFTWRIST_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_RIGHTWRIST_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_LEFTPINKY_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_RIGHTPINKY_SHOW,"18"],		
		[Blockly.Msg.HOLISTIC_LEFTINDEX_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_RIGHTINDEX_SHOW,"20"],
		[Blockly.Msg.HOLISTIC_LEFTTHUMB_SHOW,"21"],
		[Blockly.Msg.HOLISTIC_RIGHTTHUMB_SHOW,"22"],
		[Blockly.Msg.HOLISTIC_LEFTHIP_SHOW,"23"],
		[Blockly.Msg.HOLISTIC_RIGHTHIP_SHOW,"24"],
		[Blockly.Msg.HOLISTIC_LEFTKNEE_SHOW,"25"],
		[Blockly.Msg.HOLISTIC_RIGHTKNEE_SHOW,"26"],
		[Blockly.Msg.HOLISTIC_LEFTANKLE_SHOW,"27"],
		[Blockly.Msg.HOLISTIC_RIGHTANKLE_SHOW,"28"],
		[Blockly.Msg.HOLISTIC_LEFTHEEL_SHOW,"29"],
		[Blockly.Msg.HOLISTIC_RIGHTHEEL_SHOW,"30"],
		[Blockly.Msg.HOLISTIC_LEFTFOOTINDEX_SHOW,"31"],
		[Blockly.Msg.HOLISTIC_RIGHTFOOTINDEX_SHOW,"32"]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/pose_landmarks.png");  
  }
};

Blockly.Blocks['holistic_lefthand_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_LEFTHAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HOLISTIC_HAND1_SHOW,"1"],
		[Blockly.Msg.HOLISTIC_HAND2_SHOW,"2"],
		[Blockly.Msg.HOLISTIC_HAND3_SHOW,"3"],
		[Blockly.Msg.HOLISTIC_HAND4_SHOW,"4"],
		[Blockly.Msg.HOLISTIC_HAND5_SHOW,"5"],
		[Blockly.Msg.HOLISTIC_HAND6_SHOW,"6"],
		[Blockly.Msg.HOLISTIC_HAND7_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_HAND8_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_HAND9_SHOW,"9"],
		[Blockly.Msg.HOLISTIC_HAND10_SHOW,"10"],
		[Blockly.Msg.HOLISTIC_HAND11_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_HAND12_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_HAND13_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_HAND14_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_HAND15_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_HAND16_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_HAND17_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_HAND18_SHOW,"18"],
		[Blockly.Msg.HOLISTIC_HAND19_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_HAND20_SHOW,"20"]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/hand_landmarks.png");   
  }
};

Blockly.Blocks['holistic_righthand_position'] = {
  init: function() {	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_RIGHTHAND_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HOLISTIC_HAND1_SHOW,"1"],
		[Blockly.Msg.HOLISTIC_HAND2_SHOW,"2"],
		[Blockly.Msg.HOLISTIC_HAND3_SHOW,"3"],
		[Blockly.Msg.HOLISTIC_HAND4_SHOW,"4"],
		[Blockly.Msg.HOLISTIC_HAND5_SHOW,"5"],
		[Blockly.Msg.HOLISTIC_HAND6_SHOW,"6"],
		[Blockly.Msg.HOLISTIC_HAND7_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_HAND8_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_HAND9_SHOW,"9"],
		[Blockly.Msg.HOLISTIC_HAND10_SHOW,"10"],
		[Blockly.Msg.HOLISTIC_HAND11_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_HAND12_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_HAND13_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_HAND14_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_HAND15_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_HAND16_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_HAND17_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_HAND18_SHOW,"18"],
		[Blockly.Msg.HOLISTIC_HAND19_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_HAND20_SHOW,"20"]
  ]), "part_");  	
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_DATA_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["x","x"],
		["y","y"],
		["z","z"]
  ]), "data_");   
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  this.setHelpUrl("https://github.com/fustyles/webduino/blob/master/holistic_20201012/hand_landmarks.png");   
  }
};

Blockly.Blocks['holistic_distance'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_DISTANCE_SHOW);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X0");
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y0"); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X1");
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y1");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['holistic_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_ANGLE_SHOW);
  this.appendValueInput("x0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X0");
  this.appendValueInput("y0_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y0"); 
  this.appendValueInput("x1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField("X1");
  this.appendValueInput("y1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Y1");     
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['holistic_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_STATE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["Y","1"],
        ["N","0"]
  ]), "state_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['holistic_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HOLISTIC_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HOLISTIC_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['holistic_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['holistic_all_poistion'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_ALL_SHOW); 
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_FACE_SHOW,"face"],
		[Blockly.Msg.HOLISTIC_POSE_SHOW,"pose"],
		[Blockly.Msg.HOLISTIC_LEFTHAND_SHOW,"lefthand"],
		[Blockly.Msg.HOLISTIC_RIGHTHAND_SHOW,"righthand"]		
  ]), "part_"); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['holistic_face_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_FACE_ANGLE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_AXIS_SHOW);  
  this.appendValueInput("part1_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW);
  this.appendValueInput("part2_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW);
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_ADJUST_SHOW);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['holistic_pose_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_POSE_ANGLE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_AXIS_SHOW);  
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_NOSE_SHOW,"0"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","1"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_CENTER_SHOW+")","2"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","3"],		
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","4"],
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_CENTER_SHOW+")","5"],
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","6"],		
		[Blockly.Msg.HOLISTIC_LEFTEAR_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_RIGHTEAR_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_MOUTH_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","9"],
		[Blockly.Msg.HOLISTIC_MOUTH_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","10"],		
		[Blockly.Msg.HOLISTIC_LEFTSHOULDER_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_RIGHTSHOULDER_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_LEFTELBOW_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_RIGHTELBOW_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_LEFTWRIST_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_RIGHTWRIST_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_LEFTPINKY_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_RIGHTPINKY_SHOW,"18"],		
		[Blockly.Msg.HOLISTIC_LEFTINDEX_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_RIGHTINDEX_SHOW,"20"],
		[Blockly.Msg.HOLISTIC_LEFTTHUMB_SHOW,"21"],
		[Blockly.Msg.HOLISTIC_RIGHTTHUMB_SHOW,"22"],
		[Blockly.Msg.HOLISTIC_LEFTHIP_SHOW,"23"],
		[Blockly.Msg.HOLISTIC_RIGHTHIP_SHOW,"24"],
		[Blockly.Msg.HOLISTIC_LEFTKNEE_SHOW,"25"],
		[Blockly.Msg.HOLISTIC_RIGHTKNEE_SHOW,"26"],
		[Blockly.Msg.HOLISTIC_LEFTANKLE_SHOW,"27"],
		[Blockly.Msg.HOLISTIC_RIGHTANKLE_SHOW,"28"],
		[Blockly.Msg.HOLISTIC_LEFTHEEL_SHOW,"29"],
		[Blockly.Msg.HOLISTIC_RIGHTHEEL_SHOW,"30"],
		[Blockly.Msg.HOLISTIC_LEFTFOOTINDEX_SHOW,"31"],
		[Blockly.Msg.HOLISTIC_RIGHTFOOTINDEX_SHOW,"32"]
  ]), "part1_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)  
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_NOSE_SHOW,"0"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","1"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_CENTER_SHOW+")","2"],
		[Blockly.Msg.HOLISTIC_LEFTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","3"],		
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","4"],
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_CENTER_SHOW+")","5"],
		[Blockly.Msg.HOLISTIC_RIGHTEYE_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","6"],		
		[Blockly.Msg.HOLISTIC_LEFTEAR_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_RIGHTEAR_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_MOUTH_SHOW+"("+Blockly.Msg.HOLISTIC_LEFT_SHOW+")","9"],
		[Blockly.Msg.HOLISTIC_MOUTH_SHOW+"("+Blockly.Msg.HOLISTIC_RIGHT_SHOW+")","10"],		
		[Blockly.Msg.HOLISTIC_LEFTSHOULDER_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_RIGHTSHOULDER_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_LEFTELBOW_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_RIGHTELBOW_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_LEFTWRIST_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_RIGHTWRIST_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_LEFTPINKY_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_RIGHTPINKY_SHOW,"18"],		
		[Blockly.Msg.HOLISTIC_LEFTINDEX_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_RIGHTINDEX_SHOW,"20"],
		[Blockly.Msg.HOLISTIC_LEFTTHUMB_SHOW,"21"],
		[Blockly.Msg.HOLISTIC_RIGHTTHUMB_SHOW,"22"],
		[Blockly.Msg.HOLISTIC_LEFTHIP_SHOW,"23"],
		[Blockly.Msg.HOLISTIC_RIGHTHIP_SHOW,"24"],
		[Blockly.Msg.HOLISTIC_LEFTKNEE_SHOW,"25"],
		[Blockly.Msg.HOLISTIC_RIGHTKNEE_SHOW,"26"],
		[Blockly.Msg.HOLISTIC_LEFTANKLE_SHOW,"27"],
		[Blockly.Msg.HOLISTIC_RIGHTANKLE_SHOW,"28"],
		[Blockly.Msg.HOLISTIC_LEFTHEEL_SHOW,"29"],
		[Blockly.Msg.HOLISTIC_RIGHTHEEL_SHOW,"30"],
		[Blockly.Msg.HOLISTIC_LEFTFOOTINDEX_SHOW,"31"],
		[Blockly.Msg.HOLISTIC_RIGHTFOOTINDEX_SHOW,"32"]
  ]), "part2_");
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_ADJUST_SHOW);		  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['holistic_lefthand_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_LEFTHAND_ANGLE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_AXIS_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HOLISTIC_HAND1_SHOW,"1"],
		[Blockly.Msg.HOLISTIC_HAND2_SHOW,"2"],
		[Blockly.Msg.HOLISTIC_HAND3_SHOW,"3"],
		[Blockly.Msg.HOLISTIC_HAND4_SHOW,"4"],
		[Blockly.Msg.HOLISTIC_HAND5_SHOW,"5"],
		[Blockly.Msg.HOLISTIC_HAND6_SHOW,"6"],
		[Blockly.Msg.HOLISTIC_HAND7_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_HAND8_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_HAND9_SHOW,"9"],
		[Blockly.Msg.HOLISTIC_HAND10_SHOW,"10"],
		[Blockly.Msg.HOLISTIC_HAND11_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_HAND12_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_HAND13_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_HAND14_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_HAND15_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_HAND16_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_HAND17_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_HAND18_SHOW,"18"],
		[Blockly.Msg.HOLISTIC_HAND19_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_HAND20_SHOW,"20"]
  ]), "part1_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HOLISTIC_HAND1_SHOW,"1"],
		[Blockly.Msg.HOLISTIC_HAND2_SHOW,"2"],
		[Blockly.Msg.HOLISTIC_HAND3_SHOW,"3"],
		[Blockly.Msg.HOLISTIC_HAND4_SHOW,"4"],
		[Blockly.Msg.HOLISTIC_HAND5_SHOW,"5"],
		[Blockly.Msg.HOLISTIC_HAND6_SHOW,"6"],
		[Blockly.Msg.HOLISTIC_HAND7_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_HAND8_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_HAND9_SHOW,"9"],
		[Blockly.Msg.HOLISTIC_HAND10_SHOW,"10"],
		[Blockly.Msg.HOLISTIC_HAND11_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_HAND12_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_HAND13_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_HAND14_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_HAND15_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_HAND16_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_HAND17_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_HAND18_SHOW,"18"],
		[Blockly.Msg.HOLISTIC_HAND19_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_HAND20_SHOW,"20"]
  ]), "part2_"); 
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_ADJUST_SHOW);	 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['holistic_righthand_angle'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_RIGHTHAND_ANGLE_SHOW);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
		["X","x"],	
		["Y","y"],
		["Z","z"]
  ]), "axis_");
  this.appendDummyInput()
      .appendField(Blockly.Msg.HOLISTIC_AXIS_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HOLISTIC_HAND1_SHOW,"1"],
		[Blockly.Msg.HOLISTIC_HAND2_SHOW,"2"],
		[Blockly.Msg.HOLISTIC_HAND3_SHOW,"3"],
		[Blockly.Msg.HOLISTIC_HAND4_SHOW,"4"],
		[Blockly.Msg.HOLISTIC_HAND5_SHOW,"5"],
		[Blockly.Msg.HOLISTIC_HAND6_SHOW,"6"],
		[Blockly.Msg.HOLISTIC_HAND7_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_HAND8_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_HAND9_SHOW,"9"],
		[Blockly.Msg.HOLISTIC_HAND10_SHOW,"10"],
		[Blockly.Msg.HOLISTIC_HAND11_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_HAND12_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_HAND13_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_HAND14_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_HAND15_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_HAND16_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_HAND17_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_HAND18_SHOW,"18"],
		[Blockly.Msg.HOLISTIC_HAND19_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_HAND20_SHOW,"20"]
  ]), "part1_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.HOLISTIC_HAND0_SHOW,"0"],	  
		[Blockly.Msg.HOLISTIC_HAND1_SHOW,"1"],
		[Blockly.Msg.HOLISTIC_HAND2_SHOW,"2"],
		[Blockly.Msg.HOLISTIC_HAND3_SHOW,"3"],
		[Blockly.Msg.HOLISTIC_HAND4_SHOW,"4"],
		[Blockly.Msg.HOLISTIC_HAND5_SHOW,"5"],
		[Blockly.Msg.HOLISTIC_HAND6_SHOW,"6"],
		[Blockly.Msg.HOLISTIC_HAND7_SHOW,"7"],
		[Blockly.Msg.HOLISTIC_HAND8_SHOW,"8"],
		[Blockly.Msg.HOLISTIC_HAND9_SHOW,"9"],
		[Blockly.Msg.HOLISTIC_HAND10_SHOW,"10"],
		[Blockly.Msg.HOLISTIC_HAND11_SHOW,"11"],
		[Blockly.Msg.HOLISTIC_HAND12_SHOW,"12"],
		[Blockly.Msg.HOLISTIC_HAND13_SHOW,"13"],
		[Blockly.Msg.HOLISTIC_HAND14_SHOW,"14"],
		[Blockly.Msg.HOLISTIC_HAND15_SHOW,"15"],
		[Blockly.Msg.HOLISTIC_HAND16_SHOW,"16"],
		[Blockly.Msg.HOLISTIC_HAND17_SHOW,"17"],
		[Blockly.Msg.HOLISTIC_HAND18_SHOW,"18"],
		[Blockly.Msg.HOLISTIC_HAND19_SHOW,"19"],
		[Blockly.Msg.HOLISTIC_HAND20_SHOW,"20"]
  ]), "part2_"); 
  this.appendValueInput("adjust_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg.HOLISTIC_ADJUST_SHOW);	 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['holistic_pause'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.HOLISTIC_PAUSE_SHOW);
  this.appendValueInput("time_")
      .setCheck("Number")    
      .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_7"]);
  }
};

Blockly.Blocks['teachablemachine_esp32cam'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERVERMODULE_JAVASCRIPT_SHOW);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_TEACHABLEMACHINE_SHOW);		
    this.appendStatementInput("javascript_initial")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_TEACHABLEMACHINE_INITIAL_SHOW);	
    this.appendStatementInput("javascript_teachablemachine")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_TEACHABLEMACHINE_RECOGNITION_SHOW);		
	this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_12"])
	}
};

Blockly.Blocks['teachablemachine_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_MIRRORIMAGE_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "mirrorimage_"); 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['teachablemachine_model'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_PROJECT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["image","image"],
		["pose","pose"]	  
  ]), "project_"); 	  
  this.appendValueInput("model_")
      .setCheck("String")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_MODEL_SHOW);  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['teachablemachine_result'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_PROPORTION_SHOW)
      .appendField(new Blockly.FieldDropdown([
	  ["",""],
	  [Blockly.Msg.TEACHABLEMACHINE_MAXCLASS_SHOW,"maxClass"], 
	  [Blockly.Msg.TEACHABLEMACHINE_MAXPROBABILITY_SHOW,"maxProbability"]
	  ]), "result_");
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['teachablemachine_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.TEACHABLEMACHINE_STATE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["Y","1"],
        ["N","0"]
  ]), "state_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['teachablemachine_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TEACHABLEMACHINE_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['teachablemachine_pause'] = {
  init: function() {
  this.appendDummyInput()  
	  .appendField(Blockly.Msg.TEACHABLEMACHINE_PAUSE_SHOW);
  this.appendValueInput("time_")
	  .setCheck("Number")    
	  .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['esp32_cam_googledrive'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_CAM_GOOGLEDRIVE_SHOW);
    this.appendValueInput("scriptid")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_SCRIPTID_SHOW);		
    this.appendValueInput("linetoken")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_LINETOKEN_SHOW);	
    this.appendValueInput("foldername")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_FOLDERNAME_SHOW);		
    this.appendValueInput("filename")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_FILENAME_SHOW);			
	this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/SendCapturedImageToGoogleDriveAndLinenotify_doPost.gs");
  }
};

Blockly.Blocks['esp32_cam_spreadsheet'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_CAM_SPREADSHEET_SHOW);
	this.appendValueInput("spreadsheeturl")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETURL);
	this.appendValueInput("spreadsheetname")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_SPREADSHEETNAME);
	this.appendDummyInput()  
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["CONTROLS_SPREADSHEET_INSERT"])
		.appendField(new Blockly.FieldDropdown([
			["　",""],		
			["A("+Blockly.Msg["CONTROLS_SPREADSHEET_DATE"]+"),B("+Blockly.Msg["CONTROLS_SPREADSHEET_TIME"]+")","gmt_datetime"],
			["A("+Blockly.Msg["CONTROLS_SPREADSHEET_DATE"]+")","gmt_date"],
			["A("+Blockly.Msg["CONTROLS_SPREADSHEET_TIME"]+")","gmt_time"]	
		]), "datetime");
	this.appendDummyInput() 
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_CAM_SPREADSHEET_ROW_SHOW)
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_CUSTOMROW_SHOW,"custom"],
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_FIRSTROW_SHOW,"first"],
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_SECONDROW_SHOW,"second"],
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_INSERTFIRSTROW_SHOW,"insertfirst"],
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_LASTROW_SHOW,"last"],
		[Blockly.Msg.ESP32_CAM_SPREADSHEET_INSERTLASTROW_SHOW,"insertlast"]	
	], this.validate), "position");		
	this.appendValueInput("row")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_ROW);		
	this.appendValueInput("column")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)	  
		.appendField(Blockly.Msg.VIDEO_BASE64_COLUMN);		
	this.appendValueInput("spreadsheet_script")
		.setCheck("String")	  
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.VIDEO_BASE64_SCRIPTURL);
	this.getInput("spreadsheet_script").setVisible(false);		
	this.setInputsInline(false);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://github.com/fustyles/webduino/blob/gs/SendCapturedImageToSpreadsheet_base64_doPost.gs");
  },
  validate: function(newValue) {
	 const block = this.sourceBlock_;
	 if (newValue=="custom") {
		 block.getInput("row").setVisible(true);
	 }
	 else {
		 block.getInput("row").setVisible(false);	 
	 }	 
  }
};

Blockly.Blocks['esp32_cam_linenotify'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_CAM_LINENOTIFY_SHOW);	
    this.appendValueInput("linetoken")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_LINETOKEN_SHOW);
    this.appendValueInput("linemessage")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_LINEMESSAGE_SHOW);			
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['esp32_cam_telegrambot'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_CAM_TELEGRAMBOT_SHOW);	
    this.appendValueInput("token")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_TOKEN_SHOW);
    this.appendValueInput("chatid")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESP32_CAM_CHATID_SHOW);			
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['server_getrequest'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVER_GETREQUEST_SHOW);			
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(65);
  }
};

Blockly.Blocks['faceapidetect_esp32cam'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERVERMODULE_JAVASCRIPT_SHOW);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_FACEAPIDETECT_SHOW);		
    this.appendStatementInput("javascript_initial")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_FACEAPIDETECT_INITIAL_SHOW);	
    this.appendStatementInput("javascript_faceapidetect")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_FACEAPIDETECT_RECOGNITION_SHOW);		
	this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_14"])
	}
};

Blockly.Blocks['faceapidetect_video'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_SHOW);
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_FRAME_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","1"],
		["N","0"]	  
  ]), "frame_");    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_14"]);
  }
};

Blockly.Blocks['faceapidetect_face'] = {
  init: function() {
  this.appendValueInput("face_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIDETECT_INDEX_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_PROPERTY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.FACEAPIDETECT_AGE_SHOW,"age"],
		[Blockly.Msg.FACEAPIDETECT_GENDER_SHOW,"gender"],
		[Blockly.Msg.FACEAPIDETECT_GENDERPROBABILITY_SHOW,"genderProbability"],
		[Blockly.Msg.FACEAPIDETECT_EMOTION_SHOW,"emotion"],
		[Blockly.Msg.FACEAPIDETECT_EMOTIONPROBABILITY_SHOW,"emotionProbability"],	  
		[Blockly.Msg.FACEAPIDETECT_BOXX_SHOW,"boxX"],
		[Blockly.Msg.FACEAPIDETECT_BOXY_SHOW,"boxY"],
		[Blockly.Msg.FACEAPIDETECT_BOXWIDTH_SHOW,"boxWidth"],
		[Blockly.Msg.FACEAPIDETECT_BOXHEIGHT_SHOW,"boxHeight"],	  
		[Blockly.Msg.FACEAPIDETECT_NEUTRAL_SHOW,"neutral"],
		[Blockly.Msg.FACEAPIDETECT_HAPPY_SHOW,"happy"],
		[Blockly.Msg.FACEAPIDETECT_SAD_SHOW,"sad"],
		[Blockly.Msg.FACEAPIDETECT_ANGRY_SHOW,"angry"],
		[Blockly.Msg.FACEAPIDETECT_FEARFUL_SHOW,"fearful"],
		[Blockly.Msg.FACEAPIDETECT_DISGUSTED_SHOW,"disgusted"],
		[Blockly.Msg.FACEAPIDETECT_SURPRISED_SHOW,"surprised"]
  ]), "property_");  	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_14"]);
  }
};

Blockly.Blocks['faceapidetect_number'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.FACEAPIDETECT_NUMBER_SHOW); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_14"]);
  }
};

Blockly.Blocks['faceapidetect_state'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_STATE_SHOW)
      .appendField(new Blockly.FieldDropdown([
        ["Y","1"],
        ["N","0"]
  ]), "state_");   
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_14"]);
  }
};

Blockly.Blocks['faceapidetect_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIDETECT_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIDETECT_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_14"]);
  }
};

Blockly.Blocks['faceapidetect_pause'] = {
  init: function() {
  this.appendDummyInput()  
	  .appendField(Blockly.Msg.FACEAPIDETECT_PAUSE_SHOW);
  this.appendValueInput("time_")
	  .setCheck("Number")    
	  .appendField("(ms)"); 	  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_14"]);
  }
};

Blockly.Blocks['faceapidetect_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIDETECT_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_14"]);
  }
};

Blockly.Blocks['faceapirecognize_esp32cam'] = {
  init: function() {
    this.appendDummyInput()
		.appendField(Blockly.Msg.SERVERMODULE_JAVASCRIPT_SHOW);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ESP32_CAM_FACEAPIRECOGNIZE_SHOW);		
    this.appendStatementInput("javascript_initial")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_FACEAPIRECOGNIZE_INITIAL_SHOW);	
    this.appendStatementInput("javascript_faceapirecognize")
        .setCheck(null)
		.appendField(Blockly.Msg.ESP32_CAM_FACEAPIRECOGNIZE_RECOGNITION_SHOW);		
	this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg["HUE_18"])
	}
};

Blockly.Blocks['faceapirecognize_video'] = {
  init: function() {
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_VIDEO_SHOW);	 
  this.appendValueInput("facelabel")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACELABEL_SHOW); 
  this.appendValueInput("faceimagepath")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("String")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACEIMAGEPATH_SHOW);	  
  this.appendValueInput("faceimagecount")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_FACEIMAGECOUNT_SHOW); 
  this.appendValueInput("distancelimit")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_DISTANCELIMIT_SHOW); 
  this.appendValueInput("timer")
      .setAlign(Blockly.ALIGN_RIGHT)  
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_TIMER_SHOW);   
  this.appendDummyInput() 
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]	  
  ]), "result_");
  this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_");  
  this.setInputsInline(false);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['faceapirecognize_detect'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_DETECT_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['faceapirecognize_number'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_NUMBER_SHOW); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['faceapirecognize_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_GET_SHOW); 
  this.appendValueInput("index")
	  .setCheck("Number");  
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.FACEAPIRECOGNIZE_NAME_SHOW,"name"],
		[Blockly.Msg.FACEAPIRECOGNIZE_DISTANCE_SHOW,"distance"]	  
  ]), "column"); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['faceapirecognize_clear'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_CLEAR_SHOW); 
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['faceapirecognize_video_position'] = {
  init: function() {
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_VIDEO_LEFT_SHOW);  
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_VIDEO_TOP_SHOW);   	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_18"]);
  }
};

Blockly.Blocks['faceapirecognize_canvas_get'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.FACEAPIRECOGNIZE_CANVAS_GET_SHOW); 
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(Blockly.Msg["HUE_18"]);
  }
};
