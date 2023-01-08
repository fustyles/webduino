Blockly.Blocks['webusb_server_initial'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["WEBUSB_SHOW"]);	
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
	this.setColour(190);
  }
};

Blockly.Blocks['esp32_blekeyboard'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_SHOW"])	
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_INITIAL_SHOW"]);
    this.appendValueInput("blename")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.ESP32_BLUETOOTH_NAME_SHOW);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(110);
  }
};

Blockly.Blocks['esp32_blekeyboard_press'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_SHOW"])	
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_PRESS_SHOW"]);		
    this.appendValueInput("keycode1")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["ESP32_BLEKEYBOARD_KEYCODE_SHOW"]+"1");
    this.appendValueInput("keycode2")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["ESP32_BLEKEYBOARD_KEYCODE_SHOW"]+"2");	
    this.appendValueInput("keycode3")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["ESP32_BLEKEYBOARD_KEYCODE_SHOW"]+"3");	
    this.appendValueInput("presstime")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["ESP32_BLEKEYBOARD_PRESSTIME_SHOW"]);			
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(110);
  }
};

Blockly.Blocks['esp32_blekeyboard_print'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_SHOW"])	
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_PRINT_SHOW"]);		
    this.appendValueInput("characters")
        .setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["ESP32_BLEKEYBOARD_CHARACTERS_SHOW"]);			
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(110);
  }
};

Blockly.Blocks['esp32_blekeyboard_write'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_SHOW"])	
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_WRITE_SHOW"]);		
    this.appendValueInput("keycode")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg["ESP32_BLEKEYBOARD_KEYCODE_SHOW"]);	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(110);
  }
};

Blockly.Blocks['esp32_blekeyboard_keycode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
			["space","32"],
			["!","33"],
			["\"","34"],
			["#","35"],
			["$","36"],
			["%","37"],
			["&","38"],
			["'","39"],
			["(","40"],
			[")","41"],
			["*","42"],
			["+","43"],
			[",","44"],
			["-","45"],
			[".","46"],
			["/","47"],
			["0","48"],
			["1","49"],
			["2","50"],
			["3","51"],
			["4","52"],
			["5","53"],
			["6","54"],
			["7","55"],
			["8","56"],
			["9","57"],
			[":","58"],
			[";","59"],
			["<","60"],
			["=","61"],
			[">","62"],
			["?","63"],
			["@","64"],
			["A","65"],
			["B","66"],
			["C","67"],
			["D","68"],
			["E","69"],
			["F","70"],
			["G","71"],
			["H","72"],
			["I","73"],
			["J","74"],
			["K","75"],
			["L","76"],
			["M","77"],
			["N","78"],
			["O","79"],
			["P","80"],
			["Q","81"],
			["R","82"],
			["S","83"],
			["T","84"],
			["U","85"],
			["V","86"],
			["W","87"],
			["X","88"],
			["Y","89"],
			["Z","90"],
			["[","91"],
			["\\","92"],
			["]","93"],
			["^","94"],
			["_","95"],
			["`","96"],
			["a","97"],
			["b","98"],
			["c","99"],
			["d","100"],
			["e","101"],
			["f","102"],
			["g","103"],
			["h","104"],
			["i","105"],
			["j","106"],
			["k","107"],
			["l","108"],
			["m","109"],
			["n","110"],
			["o","111"],
			["p","112"],
			["q","113"],
			["r","114"],
			["s","115"],
			["t","116"],
			["u","117"],
			["v","118"],
			["w","119"],
			["x","120"],
			["y","121"],
			["z","122"],
			["{","123"],
			["|","124"],
			["}","125"],
			["~","126"],
			["KEY_LEFT_CTRL","128"],
			["KEY_LEFT_SHIFT","129"],
			["KEY_LEFT_ALT","130"],
			["KEY_LEFT_GUI","131"],
			["KEY_RIGHT_CTRL","132"],
			["KEY_RIGHT_SHIFT","133"],
			["KEY_RIGHT_ALT","134"],
			["KEY_RIGHT_GUI","135"],
			["KEY_UP_ARROW","218"],
			["KEY_DOWN_ARROW","217"],
			["KEY_LEFT_ARROW","216"],
			["KEY_RIGHT_ARROW","215"],
			["KEY_BACKSPACE","178"],
			["KEY_TAB","179"],
			["KEY_RETURN","176"],
			["KEY_ESC","177"],
			["KEY_INSERT","209"],
			["KEY_DELETE","212"],
			["KEY_PAGE_UP","211"],
			["KEY_PAGE_DOWN","214"],
			["KEY_HOME","210"],
			["KEY_END","213"],
			["KEY_CAPS_LOCK","193"],
			["KEY_F1","194"],
			["KEY_F2","195"],
			["KEY_F3","196"],
			["KEY_F4","197"],
			["KEY_F5","198"],
			["KEY_F6","199"],
			["KEY_F7","200"],
			["KEY_F8","201"],
			["KEY_F9","202"],
			["KEY_F10","203"],
			["KEY_F11","204"],
			["KEY_F12","205"]			
		]), "keycode");
	this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_ASCII_SHOW"]);		
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(150);
  }
};

Blockly.Blocks['esp32_blekeyboard_chartoascii'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_CHARACTER_SHOW"]);
	this.appendValueInput("character")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT);
	this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_TRANSFER_ASCII_SHOW"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["ESP32_BLEKEYBOARD_INTEGER_SHOW"],"integer"],		
			[Blockly.Msg["ESP32_BLEKEYBOARD_STRING_SHOW"],"string"]		
		]), "type");		
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(110);
  }
};

Blockly.Blocks['gy30_getdata'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["GY30_GETDATA_SHOW"]);
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_22"]);
  }
};

Blockly.Blocks['openai_text_request'] = {
  init: function() {
  this.appendDummyInput()
	  .appendField(Blockly.Msg.OPENAI_TEXT_SHOW);
  this.appendValueInput("token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_TEXT_TOKEN_SHOW); 	  
  this.appendValueInput("tokens")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_TEXT_TOKENS_SHOW);
  this.appendValueInput("words")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.OPENAI_TEXT_REQUEST_SHOW);	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(250);
  }
};

Blockly.Blocks['adxl345_getdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["ADXL345"]);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
		.appendField(Blockly.Msg["ADXL345_GETDATA"])
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['adxl345_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["ADXL345"]);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
			["x","x"],		
			["y","y"],
			["z","z"]		
		]), "acceleration");
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
		.appendField(Blockly.Msg["ADXL345_GET"])
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['fu_servo_initial'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO"]);	
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO_PIN"]);		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
		.appendField(Blockly.Msg["FU_SERVO_PULSEWIDTH"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["FU_SERVO_DEFAULT"],""],		
			[Blockly.Msg["FU_SERVO_CUSTOM"],"custom"]		
		], this.validate), "custom");
	this.appendValueInput("min","min")
		.appendField(Blockly.Msg["FU_SERVO_MIN_PULSEWIDTH"])
		.setCheck("Number");
	this.appendValueInput("max","max")
		.appendField(Blockly.Msg["FU_SERVO_MAX_PULSEWIDTH"])
		.setCheck("Number");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
		.appendField(Blockly.Msg["FU_SERVO_INDEX"])
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
		]), "index");			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (newValue=="") {
			block.getInput("min").setVisible(false);
			block.getInput("max").setVisible(false);	
		} else {
			block.getInput("min").setVisible(true);
			block.getInput("max").setVisible(true);	
		}
  }
};

Blockly.Blocks['fu_servo_angle'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO"]);		
    this.appendValueInput("angle")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["FU_SERVO_ANGLE"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
		.appendField(Blockly.Msg["FU_SERVO_INDEX"])
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
		]), "index");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
  }
};

Blockly.Blocks['PN532_initial'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_SHOW"])
		.appendField(Blockly.Msg["PN532_INITIAL_SHOW"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["PN52_PIN_DEFAULT"],"0"],		
			[Blockly.Msg["PN52_PIN_CUSTOM"],"1"]			
		], this.validate), "mode");
	this.appendValueInput("sda","sda")
		.appendField("SDA")
		.setCheck("Number");
	this.appendValueInput("scl","scl")
		.appendField("SCL")
		.setCheck("Number");			
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(Blockly.Msg["HUE_25"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (newValue==0) {
			block.getInput("sda").setVisible(false);
			block.getInput("scl").setVisible(false);	
		} else {
			block.getInput("sda").setVisible(true);
			block.getInput("scl").setVisible(true);	
		}
  }
};

Blockly.Blocks['PN532_read'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_SHOW"])
		.appendField(Blockly.Msg["PN532_READ_UID_SHOW"]);
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_25"]);
  }
};

Blockly.Blocks['PN532_write_data'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_SHOW"]);
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_SECTOR_SHOW"])
		.appendField(new Blockly.FieldDropdown([
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
		]), "sector_");
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_BLOCK_SHOW"])
		.appendField(new Blockly.FieldDropdown([
			["0","0"],	
			["1","1"],
			["2","2"]		
		]), "block_");		
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_WRITE_DATA_SHOW"]);		
	this.appendValueInput("data")
		.appendField(Blockly.Msg["PN532_DATA"])
		.setCheck("String");		
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_25"]);
  }
};

Blockly.Blocks['PN532_write_data_NDEF'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_SHOW"]);	
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["PN532_HTTP_WWWDOT"],"NDEF_URIPREFIX_HTTP_WWWDOT"],	
			[Blockly.Msg["PN532_MAILTO"],"NDEF_URIPREFIX_MAILTO"],
			[Blockly.Msg["PN532_TEL"],"NDEF_URIPREFIX_TEL"]
		]), "ndefprefix");
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_WRITE_DATA_NDEF_SHOW"]);		
	this.appendValueInput("data")
		.appendField(Blockly.Msg["PN532_DATA"])
		.setCheck("String");		
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_25"]);
  }
};

Blockly.Blocks['PN532_read_data'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_SHOW"]);
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_SECTOR_SHOW"])
		.appendField(new Blockly.FieldDropdown([
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
		]), "sector_");
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_BLOCK_SHOW"])
		.appendField(new Blockly.FieldDropdown([
			["0","0"],	
			["1","1"],
			["2","2"]		
		]), "block_");
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_READ_DATA_SHOW"]);		
	this.setInputsInline(true);	
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_25"]);
  }
};

Blockly.Blocks['PN532_clear_data'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_SHOW"]);
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_SECTOR_SHOW"])
		.appendField(new Blockly.FieldDropdown([
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
		]), "sector_");
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_BLOCK_SHOW"])
		.appendField(new Blockly.FieldDropdown([
			["0","0"],	
			["1","1"],
			["2","2"]		
		]), "block_");
	this.appendDummyInput()
		.appendField(Blockly.Msg["PN532_CLEAR_DATA_SHOW"]);
	this.setInputsInline(true);
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_25"]);
  }
};

Blockly.Blocks['taskhandle_statement_pico'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_PICO_SHOW"])
		.appendField(Blockly.Msg["TASKHANDLE_SETUP1_SHOW"]);
    this.appendStatementInput("setup1")
        .setCheck(null);
	this.appendDummyInput()
        .appendField(Blockly.Msg["TASKHANDLE_LOOP1_SHOW"]);
    this.appendStatementInput("loop1")
        .setCheck(null);		
	this.setInputsInline(false);
    this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['preferences_write'] = {
  init: function () {
  this.appendDummyInput()
	  .appendField(Blockly.Msg["PREFERENCES"]) 
	  .appendField(Blockly.Msg["PREFERENCES_WRITE"]); 
  this.appendValueInput("namespace")
	  .appendField(Blockly.Msg["PREFERENCES_NAMESPACE"])
      .setCheck("String");
  this.appendValueInput("key")
	  .appendField(Blockly.Msg["PREFERENCES_KEY"])
      .setCheck("String");
  this.appendValueInput("value")
	  .appendField(Blockly.Msg["PREFERENCES_VALUE"])
      .setCheck(null);	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_13"]);
  }
};

Blockly.Blocks['preferences_read'] = {
  init: function () {
	this.appendDummyInput()
		.appendField(Blockly.Msg["PREFERENCES"]) 
		.appendField(Blockly.Msg["PREFERENCES_READ"]); 
	this.appendValueInput("namespace")
		.appendField(Blockly.Msg["PREFERENCES_NAMESPACE"])
		.setCheck("String");
	this.appendValueInput("key")
		.appendField(Blockly.Msg["PREFERENCES_KEY"])
		.setCheck("String"); 
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_13"]);
  }
};

Blockly.Blocks['preferences_clear_namespace'] = {
  init: function () {
	this.appendDummyInput()
		.appendField(Blockly.Msg["PREFERENCES"]) 
		.appendField(Blockly.Msg["PREFERENCES_CLEAR_NAMESPACE"]); 
	this.appendValueInput("namespace")
		.appendField(Blockly.Msg["PREFERENCES_NAMESPACE"])
		.setCheck("String");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_13"]);
  }
};

Blockly.Blocks['preferences_remove_key'] = {
  init: function () {
	this.appendDummyInput()
		.appendField(Blockly.Msg["PREFERENCES"]) 
		.appendField(Blockly.Msg["PREFERENCES_REMOVE_KEY"]); 
	this.appendValueInput("namespace")
		.appendField(Blockly.Msg["PREFERENCES_NAMESPACE"])
		.setCheck("String");
	this.appendValueInput("key")
		.appendField(Blockly.Msg["PREFERENCES_KEY"])
		.setCheck("String"); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_13"]);
  }
};

Blockly.Blocks['window_messagebox'] = {
  init: function () {
  this.appendValueInput("message")
	  .appendField(Blockly.Msg["WINDOW_MESSAGEBOX"])
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_25"]);
  }
};

Blockly.Blocks['window_confirm'] = {
  init: function () {
  this.appendValueInput("message")
	  .appendField(Blockly.Msg["WINDOW_CONFIRM"])
      .setCheck("String");
  this.appendDummyInput()
	  .appendField(Blockly.Msg["WINDOW_CONFIRM_YES"]); 
  this.appendStatementInput("yes");
  this.appendDummyInput()
      .appendField(Blockly.Msg["WINDOW_CONFIRM_NO"]);   
  this.appendStatementInput("no");
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(Blockly.Msg["HUE_25"]);
  }
};

Blockly.Blocks['javascript_function_string_split'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["JAVASCRIPT_FUNCTIONS_STRING_SPLIT"]);
	this.appendValueInput("text")
		.setCheck("String");		
	this.appendValueInput("delimiter")
		.appendField(Blockly.Msg["JAVASCRIPT_FUNCTIONS_STRING_DELIMITER"])
		.setCheck("String");		
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['javascript_function_math_constant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_CONSTANT"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_E"],"Math.E"],		
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_LN2"],"Math.LN2"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_LN10"],"Math.LN10"],		
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_LOG2E"],"Math.LOG2E"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_LOG10E"],"Math.LOG10E"],		
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_PI"],"Math.PI"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_SQRT1_2"],"Math.SQRT1_2"],		
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_SQRT2"],"Math.SQRT2"]			
		]), "function");		
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['javascript_function_math_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_FUNCTION"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_ABS"],"Math.abs(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_ACOS"],"Math.acos(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_ACOSH"],"Math.acosh(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_ASIN"],"Math.asin(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_ASINH"],"Math.asinh(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_ATAN"],"Math.atan(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_ATAN2"],"Math.atan2(%1, %2)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_ATANH"],"Math.atanh(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_CBRT"],"Math.cbrt(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_CEIL"],"Math.ceil(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_CLZ32"],"Math.clz32(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_COS"],"Math.cos(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_COSH"],"Math.cosh(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_EXP"],"Math.exp(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_EXPM1"],"Math.expm1(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_FLOOR"],"Math.floor(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_FROUND"],"Math.fround(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_HYPOT"],"Math.hypot(%1, %2)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_IMUL"],"Math.imul(%1, %2)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_LOG"],"Math.log(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_LOG10"],"Math.log10(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_LOG1P"],"Math.log1p(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_LOG2"],"Math.log2(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_MAX"],"Math.max(%1, %2)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_MIN"],"Math.min(%1, %2)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_POW"],"Math.pow(%1, %2)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_RANDOM"],"Math.random()"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_ROUND"],"Math.round(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_SIGN"],"Math.sign(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_SIN"],"Math.sin(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_SINH"],"Math.sinh(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_SQRT"],"Math.sqrt(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_TAN"],"Math.tan(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_TANH"],"Math.tanh(%1)"],
			[Blockly.Msg["JAVASCRIPT_FUNCTIONS_MATH_TRUNC"],"Math.trunc(%1)"]
		], this.validate), "function");
    this.appendDummyInput()
		.appendField("(");		
	this.appendValueInput("p1")
		.setCheck(null);
    this.appendDummyInput("comma")
		.appendField(", ");		
	this.appendValueInput("p2")
		.setCheck(null);
    this.appendDummyInput()
		.appendField(")");			
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_15"]);
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (newValue.indexOf("%1")!=-1)
		 	block.getInput("p1").setVisible(true);
		else {
			block.getInput("p1").setVisible(false);
			block.getInput("comma").setVisible(false);
			block.getInput("p2").setVisible(false);			
		}
		if (newValue.indexOf("%2")!=-1) {
		 	block.getInput("p1").setVisible(true);
			block.getInput("comma").setVisible(true);		
		 	block.getInput("p2").setVisible(true);
		}
		else {
			block.getInput("comma").setVisible(false);			
			block.getInput("p2").setVisible(false);
		}
  }
};

Blockly.Blocks['linkit7697_webbluetooth_uuid'] = {
  init: function() {	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_LINKIT7697_SHOW)
		.appendField(Blockly.Msg.WEBBLUETOOTH_UUID_SHOW);
	this.appendValueInput("blename")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_BLENAME_SHOW)
		.setCheck("String");
	this.appendValueInput("service")
      .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_SERVICE_SHOW)
		.setCheck("String");
	this.appendValueInput("rx")
      .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_RX_SHOW)
		.setCheck("String");  
	this.appendValueInput("tx")
      .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_TX_SHOW)
		.setCheck("String");
	this.setInputsInline(false);	  
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(140);
	this.setHelpUrl("https://www.uuidgenerator.net/");
  }
};

Blockly.Blocks['linkit7697_webbluetooth_listen'] = {
  init: function() {	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_LINKIT7697_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_GETDATA_ONCES_SHOW);
    this.appendStatementInput("do_");		
	this.setInputsInline(true);	  
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(140);
	this.setHelpUrl("https://www.uuidgenerator.net/");
  }
};

Blockly.Blocks['linkit7697_webbluetooth_sendtext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_LINKIT7697_SHOW);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_SENDTEXT_SHOW);
	this.appendValueInput("cmd_")
		.setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(140);
  }  
};

Blockly.Blocks['linkit7697_webbluetooth_getstate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_LINKIT7697_SHOW);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_GETSTATE_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(140);
  }  
};

Blockly.Blocks['linkit7697_webbluetooth_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_LINKIT7697_SHOW);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_WAIT_SHOW);   
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(140);
  }  
};

Blockly.Blocks['linkit7697_webbluetooth_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_LINKIT7697_SHOW);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_GET_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(140);
  }  
};

Blockly.Blocks['linkit7697_webbluetooth_getmac'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_LINKIT7697_SHOW);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_GETMAC_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(140);
  }  
};

Blockly.Blocks['esp32_webbluetooth_uuid'] = {
  init: function() {	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_ESP32_SHOW)
		.appendField(Blockly.Msg.WEBBLUETOOTH_UUID_SHOW);
	this.appendValueInput("blename")
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_BLENAME_SHOW)
		.setCheck("String");
	this.appendValueInput("service")
      .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_SERVICE_SHOW)
		.setCheck("String");
	this.appendValueInput("rx")
      .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_RX_SHOW)
		.setCheck("String");  
	this.appendValueInput("tx")
      .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.WEBBLUETOOTH_TX_SHOW)
		.setCheck("String");  	
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_GETDATA_SHOW);
    this.appendStatementInput("do_");		
	this.setInputsInline(false);	  
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setColour(140);
	this.setHelpUrl("https://www.uuidgenerator.net/");
  }
};

Blockly.Blocks['esp32_webbluetooth_sendtext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_ESP32_SHOW);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_SENDTEXT_SHOW);
	this.appendValueInput("cmd_")
		.setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(140);
  }  
};

Blockly.Blocks['esp32_webbluetooth_getstate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_ESP32_SHOW);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_GETSTATE_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(140);
  }  
};

Blockly.Blocks['esp32_webbluetooth_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_ESP32_SHOW);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_WAIT_SHOW);   
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(140);
  }  
};

Blockly.Blocks['esp32_webbluetooth_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_ESP32_SHOW);	  
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBLUETOOTH_GET_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(140);
  }  
};

Blockly.Blocks['tft_sd_drawjpg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_SD_DRAWJPG_SHOW"]);
    this.appendValueInput("filename")
		.appendField(Blockly.Msg["TFT_SD_FILENAME_SHOW"])
		.appendField("/")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".jpg");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['esp32_cam_sd_savejpg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_CAM_CAMERA_SD_SHOW"]);
    this.appendValueInput("filename")
		.appendField(Blockly.Msg["ESP32_CAM_CAMERA_FILENAME_SHOW"])
		.appendField("/")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".jpg");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['tft_PROGMEM_icon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["TFT_SET"])
		.appendField(Blockly.Msg["TFT_XBM"]);	
	this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_WIDTH"])	
        .appendField(new Blockly.FieldTextInput("40", this.sizeChanged), "width");
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_HEIGHT"])	
        .appendField(new Blockly.FieldTextInput("40", this.sizeChanged), "height");
	this.appendDummyInput("preview")
		.appendField(new Blockly.FieldLabelSerializable(""), "realsize");
		
    this.options = [
        ['　', '0'],	
        [{'src': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAABJ0AAASdAHeZh94AAAhVUlEQVR4Xu2dCXAUx7nHdaMbCd0SAh0IIQlJgBDCCBAQwCHGfmCn6lFJUQmxCVWOHRPjpBJil2PjOKSewVQSJ0URY4wT+1WIYxsMmNPc933I3Ic4LIEOhGSQEKD3//btyItYaQ/t7szs/Keqa3XMTHf/uv/b19df+/jwIgESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAES0DcBX30nn6nvjMD27dvDrl69mtDQ0BCD+5SytvyUnx2tA614RsJ986f8LNf9yMjI2uTk5Kphw4bdZsl4hoCjheeZVDGWLhPYtWuX37Fjx/KPHj06/vr167l4YTez6O6ZPyUORXzKp2W89tQNucfP/CXQkpCQcLx///5r8/Pzy4cMGSIC5+VmAgFufj9frxKBqqqqxPLy8pHbtm17qqKiordZwCI2a2K1V7gdCV3+3pKenl4QEBDQBCFX4/dKlbJuqGgpYJ0X98GDB5VucFuLefPmzZDdu3cXXbx4saCysjIVLXCCuZV0a26Dg4N9L1y4MDQxMfEiuu9rSktL77o1Qr7c4fEPkXmYwIYNG4IhxMzq6mppRS27tUrXVflU/td6+/btiNOnTw9BGIqQXVtbG+6JZMfExLT07dv3RFZW1maEHd26dWswd9ctx8uW42f5u4SWuLi489OmTWOr7WBBsQV2EJinbz916lTegQMHJkDEAxB3oLkLrIw9RbyKgJXJJZ+WlpYQiDa1pqYmAWL2iHiFC+IKvHz5cuatW7eC8dkP3elb5vS273pbfhGJgG+h+71r4cKFK2fMmHHe04z1HB8FrOHS+/zzzxPWr1//yM6dOx87fvx4sTmp9kwuya1+ra22hruuzTyE64MQCvFm4c2ZNt7+QOIKCgp6h4eH3/ziiy+qv/vd70rLzcsOAhSwHZA8ccumTZvC7t69G2yOqxWtqN/+/ftHYAJq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', 'width': 30, 'height': 30, 'alt': ''}, '1'],
        [{'src': 'data:image/png;base64,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', 'width': 30, 'height': 30, 'alt': ''}, '2'],
        [{'src': 'data:image/png;base64,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', 'width': 30, 'height': 30, 'alt': ''}, '3'],
        [{'src': 'data:image/png;base64,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', 'width': 30, 'height': 30, 'alt': ''}, '4'],
        [{'src': 'data:image/png;base64,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', 'width': 30, 'height': 30, 'alt': ''}, '5'],
        [{'src': 'data:image/png;base64,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', 'width': 30, 'height': 30, 'alt': ''}, '6']		
    ];
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_ICON"])
        .appendField(new Blockly.FieldDropdown(this.options, this.validate), 'icon');
    this.appendValueInput("PROGMEM")
        .setCheck("String");
	this.getInput('PROGMEM').setVisible(false);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");		
  },
	validate: function(newValue) {
		var block = this.sourceBlock_;
		var input = block.getInputTargetBlock("PROGMEM");
		if (!input) return;
		input.setFieldValue('', 'TEXT');
		block.setFieldValue('', "realsize");		
		var width_resize = block.getFieldValue("width");
		var height_resize = block.getFieldValue("height");

		var img=document.createElement('img');
		img.onload = function (event) {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			canvas.width=width_resize;
			canvas.height=height_resize; 
			canvas.width = (canvas.width%8>0)?Math.round(canvas.width-canvas.width%8+8):Math.round(canvas.width);
			block.getField("realsize").setValue("( "+canvas.width + " * " + canvas.height + " ) ");
			
			context.fillStyle="#FFFFFF";
			context.fillRect(0, 0, canvas.width, canvas.height);
			context.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);

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
			document.body.appendChild(img);
			img.parentNode.removeChild(img);
			input.setFieldValue(xbmString, 'TEXT');
		}
		if (newValue!=0) {
			img.src = block.options[Number(newValue)][0]["src"];
		}
	},
	sizeChanged: function(newValue) {
		var block = this.sourceBlock_;
		block.setFieldValue("0", "icon");
	}
};

Blockly.Blocks['tft_PROGMEM_resize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["TFT_SET"])
		.appendField(Blockly.Msg["TFT_XBM"]);
    this.appendValueInput("PROGMEM")
        .setCheck("String");	
	this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_RESIZE"])	
        .appendField(Blockly.Msg["TFT_WIDTH"])	
        .appendField(new Blockly.FieldTextInput("40",this.validate), "width");
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_HEIGHT"])	
        .appendField(new Blockly.FieldTextInput("40",this.validate), "height");
    this.appendDummyInput()
		.appendField(new Blockly.FieldLabelSerializable(""), "base64image");
	this.getField("base64image").setVisible(false);
	this.getField("base64image").setValidator(this.previewChanged)
	
	this.appendDummyInput("preview")
		.appendField(new Blockly.FieldLabelSerializable(""), "realsize");
	
	var imageToXbm = function() {
		var block = this.sourceBlock_;
        var input = block.getInputTargetBlock("PROGMEM");
		input.setFieldValue('', 'TEXT');
		block.setFieldValue('', "realsize");
		var width_resize = block.getFieldValue("width");
		var height_resize = block.getFieldValue("height");
	    if (input) {
		    if (input.type="text") {
				var img=document.createElement('img');
				img.onload = function (event) {
					const canvas = document.createElement('canvas');
					const context = canvas.getContext('2d');
					canvas.width=width_resize;
					canvas.height=height_resize; 
					canvas.width = (canvas.width%8>0)?Math.round(canvas.width-canvas.width%8+8):Math.round(canvas.width);
					block.getField("realsize").setValue("( "+canvas.width + " * " + canvas.height + " ) ");
					
					context.fillStyle="#FFFFFF";
					context.fillRect(0, 0, canvas.width, canvas.height);
					context.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);

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
					
					context.putImageData(imageData,0,0);
					const canvas1 = document.createElement('canvas');
					const context1 = canvas1.getContext('2d');
					canvas1.width = canvas.width*30/canvas.height;
					canvas1.height = 30;
					context1.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,canvas1.width,canvas1.height);
					block.getField("base64image").setValue(canvas1.toDataURL()+" "+canvas1.width+" "+canvas1.height);
					
					document.body.appendChild(canvas1);
					canvas1.parentNode.removeChild(canvas1);
					document.body.appendChild(canvas);
					canvas.parentNode.removeChild(canvas);
					document.body.appendChild(img);
					img.parentNode.removeChild(img);					
					input.setFieldValue(xbmString, 'TEXT');
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
		
	var field = new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADyUlEQVRIieXVS0xcVRzH8e85l3nAUBCsaZHUqrDQAsWZdGekj8RXVzR10qUwJERXLtTEREPARle6Nl3AMEljGmnorlZjBNpoWzVAQoFKIRFqB9raymNGZu7ce/8uhiG8hOFRY+JvdW/yP+dz/+feew7836KyKQoGg7k+n++w1vopx3GKtNZ/ish4LBa73NHRMb/jcENDQ7lt281KqRNA3holfwGdjuM0RyKRsR2BQ6HQ+yLyCeDClYvaW4EqfBI8+ZCMITNRZOoGpBIAJvBhOBz+bFtwfX39GaCRHA/6wHEoq0EZ7lV1YpvIaDcyfAmsJMCZcDj8VjawsVanwAfkFaFr3kGVVqN0ukwr8OQoHAEBlDZQu8vQJZXI5ABYiUOBQCDW19d3dVMdh0KhZ0VkmByPWx99L720wO5cRcUTBnvyFEql0btxYfC+zR/zkh48cwe763OwkqbWuqK1tXV0PVgvvXEc52PArQ8cX0TLizTH9ueQsISe2xYXx1L0TFgkLOHY/hzKixamKCxFP/8agFtEmjbqeBEOBoO5SqlaXLlQVrNYUJqvuBa1uR61uRsX5sx0t9ejNteiNvsKljx7+RFweRGRk42NjWv9Bavh/Pz8GsCnSiqXfUg9t20mZp01B0/MOnSNW4v3ynCj91YC5Jmm+WJWMPA0AAtLvNVIQUl6Yq2fyRYuBlBu37Zg5d2VfgCRx7OClVIPAEjGtgWTnMtc3c8KFpFxAJmJbsvNjM/MtyEci8UuA3GZuoHY5tZU20SmhgBiwJWs4IVT5gKpBDLavSVXbn0PqXmAzvb29kRWMIBhGE1AUoYvwcydzaHTv+Pc/BbAXNiI1s2yvbq3t3fa7/cncOxXZHIAvec58BZkhcoPX4AZR0TaI5FIZFMwQH9//49+v78EK3FIJn5CKQVF+xYPimWxTWTkO5xfzmZQWylV5ff7B/r7+39dD17vPH5XRD4F3Li86R2psAQ8uyA5t3AeD2XeqQmEgTcBbyJlpaYTqdNfnz93OuuOM+nr67saCAS+VEoVY1vlMht1y70RZHIAuTcCs5PgWHHgnGEYb7S1tZ0NBAI/z5vWqYmHc+75ZOrowepqbg0p9myq46Wpq6vzAi+R3laLgYfAb8CVlV/vyyeCLXPzZpNIevJin6f5YudXLVuCN5tXTwRbZjbA/3Gpt5Oxm0PdFZVVRtJ2DguQSNlHVi77I4EX8K6KqoOupGXXZPCqF6qjo8ODvbBiA9npfHOh46PCPE+TUgqvy3igE/Hzj9JblddPnnq7trb2sX8V/c/lbwo9q8gJVNowAAAAAElFTkSuQmCC", 30, 30, { alt: "*", flipRtl: "FALSE" });
	field.setOnClickHandler(imageToXbm);
	
	this.appendDummyInput()
		.appendField(Blockly.Msg["TFT_WHITEBACK_BLACKWORD"])
		.appendField(field);
		
	this.getInput('PROGMEM').setVisible(false);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (block.getInputTargetBlock("PROGMEM"))
			block.getInputTargetBlock("PROGMEM").setFieldValue('', 'TEXT');
		if (block.getField("realsize"))
		 	block.getField("realsize").setValue("");		
		if (block.getField("tmp"))
			block.getInput("preview").removeField("tmp");	
		if (block.getField("base64image"))
			block.getField("base64image").setValue("");		
  },
	previewChanged: function(newValue) {
		const block = this.sourceBlock_;
		if (newValue!="") {
			var image = newValue.split(" ");
			var previewFieldImage = new Blockly.FieldImage(image[0], image[1]||30, image[2]||30, { alt: "*", flipRtl: "FALSE" });
			if (block.getField("tmp"))
				block.getInput("preview").removeField("tmp");
			block.getInput("preview").appendField(previewFieldImage, "tmp");
		}	
	}
};

Blockly.Blocks['tft_drawXBMP'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["TFT_SET"])
		.appendField(Blockly.Msg["TFT_XBM"]);
    this.appendValueInput("PROGMEM")
        .setCheck("String");		
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_WIDTH"])
		.appendField(new Blockly.FieldTextInput('0'), "width");
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_HEIGHT"])
		.appendField(new Blockly.FieldTextInput('0'), "height");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['tft_PROGMEM'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["TFT_SET"])
		.appendField(Blockly.Msg["TFT_XBM"]);
    this.appendDummyInput()
		.appendField(new Blockly.FieldLabelSerializable(""), "base64image");
	this.getField("base64image").setValidator(this.previewChanged)
	this.getField("base64image").setVisible(false);
	this.appendDummyInput("preview")
		.appendField(new Blockly.FieldLabelSerializable(""), "realsize");
    this.appendValueInput("PROGMEM")
        .setCheck("String");	
	this.getInput('PROGMEM').setVisible(false);	
	var imageToXbm = function() {
		var block = this.sourceBlock_;
        var input = block.getInputTargetBlock("PROGMEM");
		input.setFieldValue('', 'TEXT');
		block.setFieldValue('', "realsize");
		
		if (block.getField("base64image"))
			block.getField("base64image").setValue("");		
  
	    if (input) {
		    if (input.type="text") {
				var img=document.createElement('img');
				img.onload = function (event) {
					const canvas = document.createElement('canvas');
					const context = canvas.getContext('2d');
					
					canvas.width=img.width;
					canvas.height=img.height; 
					canvas.width = (canvas.width%8>0)?Math.round(canvas.width-canvas.width%8+8):Math.round(canvas.width);
					block.getField("realsize").setValue("( "+canvas.width + " * " + canvas.height + " )");
					
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
					
					context.putImageData(imageData,0,0);
					const canvas1 = document.createElement('canvas');
					const context1 = canvas1.getContext('2d');
					canvas1.width = canvas.width*30/canvas.height;
					canvas1.height = 30;
					context1.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,canvas1.width,canvas1.height);
					block.getField("base64image").setValue(canvas1.toDataURL()+" "+canvas1.width+" "+canvas1.height);
					
					document.body.appendChild(canvas1);
					canvas1.parentNode.removeChild(canvas1);
					document.body.appendChild(canvas);
					canvas.parentNode.removeChild(canvas);
					document.body.appendChild(img);
					img.parentNode.removeChild(img);					
					input.setFieldValue(xbmString, 'TEXT');
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
		
	var field = new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADyUlEQVRIieXVS0xcVRzH8e85l3nAUBCsaZHUqrDQAsWZdGekj8RXVzR10qUwJERXLtTEREPARle6Nl3AMEljGmnorlZjBNpoWzVAQoFKIRFqB9raymNGZu7ce/8uhiG8hOFRY+JvdW/yP+dz/+feew7836KyKQoGg7k+n++w1vopx3GKtNZ/ish4LBa73NHRMb/jcENDQ7lt281KqRNA3holfwGdjuM0RyKRsR2BQ6HQ+yLyCeDClYvaW4EqfBI8+ZCMITNRZOoGpBIAJvBhOBz+bFtwfX39GaCRHA/6wHEoq0EZ7lV1YpvIaDcyfAmsJMCZcDj8VjawsVanwAfkFaFr3kGVVqN0ukwr8OQoHAEBlDZQu8vQJZXI5ABYiUOBQCDW19d3dVMdh0KhZ0VkmByPWx99L720wO5cRcUTBnvyFEql0btxYfC+zR/zkh48cwe763OwkqbWuqK1tXV0PVgvvXEc52PArQ8cX0TLizTH9ueQsISe2xYXx1L0TFgkLOHY/hzKixamKCxFP/8agFtEmjbqeBEOBoO5SqlaXLlQVrNYUJqvuBa1uR61uRsX5sx0t9ejNteiNvsKljx7+RFweRGRk42NjWv9Bavh/Pz8GsCnSiqXfUg9t20mZp01B0/MOnSNW4v3ynCj91YC5Jmm+WJWMPA0AAtLvNVIQUl6Yq2fyRYuBlBu37Zg5d2VfgCRx7OClVIPAEjGtgWTnMtc3c8KFpFxAJmJbsvNjM/MtyEci8UuA3GZuoHY5tZU20SmhgBiwJWs4IVT5gKpBDLavSVXbn0PqXmAzvb29kRWMIBhGE1AUoYvwcydzaHTv+Pc/BbAXNiI1s2yvbq3t3fa7/cncOxXZHIAvec58BZkhcoPX4AZR0TaI5FIZFMwQH9//49+v78EK3FIJn5CKQVF+xYPimWxTWTkO5xfzmZQWylV5ff7B/r7+39dD17vPH5XRD4F3Li86R2psAQ8uyA5t3AeD2XeqQmEgTcBbyJlpaYTqdNfnz93OuuOM+nr67saCAS+VEoVY1vlMht1y70RZHIAuTcCs5PgWHHgnGEYb7S1tZ0NBAI/z5vWqYmHc+75ZOrowepqbg0p9myq46Wpq6vzAi+R3laLgYfAb8CVlV/vyyeCLXPzZpNIevJin6f5YudXLVuCN5tXTwRbZjbA/3Gpt5Oxm0PdFZVVRtJ2DguQSNlHVi77I4EX8K6KqoOupGXXZPCqF6qjo8ODvbBiA9npfHOh46PCPE+TUgqvy3igE/Hzj9JblddPnnq7trb2sX8V/c/lbwo9q8gJVNowAAAAAElFTkSuQmCC", 30, 30, { alt: "*", flipRtl: "FALSE" });
	field.setOnClickHandler(imageToXbm);
	
	this.appendDummyInput()
		.appendField(Blockly.Msg["TFT_WHITEBACK_BLACKWORD"])
		.appendField(field);

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (block.getInputTargetBlock("PROGMEM"))
			block.getInputTargetBlock("PROGMEM").setFieldValue('', 'TEXT');
		if (block.getField("realsize"))
		 	block.getField("realsize").setValue("");		
		if (block.getField("tmp"))
			block.getInput("preview").removeField("tmp");	
		if (block.getField("base64image"))
			block.getField("base64image").setValue("");		
  },
	previewChanged: function(newValue) {
		const block = this.sourceBlock_;
		if (newValue!="") {
			var image = newValue.split(" ");
			var previewFieldImage = new Blockly.FieldImage(image[0], image[1]||30, image[2]||30, { alt: "*", flipRtl: "FALSE" });
			if (block.getField("tmp"))
				block.getInput("preview").removeField("tmp");
			block.getInput("preview").appendField(previewFieldImage, "tmp");
		}	
	}
};

//https://github.com/opentypejs/opentype.js
var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://opentype.js.org/dist/opentype.js";
document.getElementsByTagName('head')[0].append(s);

Blockly.Blocks['tft_PROGMEM_truetype'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["TFT_SET"])
		.appendField(Blockly.Msg["TFT_XBM"]);
		
	var opt = [];
	for (var i=8;i<=240;i++) {
	  opt.push([i+"px",String(i)]);
	}
	
	this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg["EZ_SIZE"])
      .appendField(new Blockly.FieldDropdown(opt, this.validate), "fontsize");
    this.appendDummyInput()
        .appendField(Blockly.Msg["EZ_TEXT"])	
        .appendField(new Blockly.FieldTextInput("hello", this.validate), "str");
		
    this.appendDummyInput()
		.appendField(new Blockly.FieldLabelSerializable(""), "base64image");
	this.getField("base64image").setVisible(false);
	this.getField("base64image").setValidator(this.previewChanged)
	
	this.appendDummyInput("preview")
		.appendField(new Blockly.FieldLabelSerializable(""), "realsize");
		
    this.appendValueInput("PROGMEM")
        .setCheck("String");
	var ttfToXbm = function() {
		var block = this.sourceBlock_;
        var input = block.getInputTargetBlock("PROGMEM");
		input.setFieldValue('', 'TEXT');
		block.setFieldValue('', "realsize");
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
								block.getField("realsize").setValue("( "+width + " * " + height + " )");

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
								
								canvas.width = width;
								canvas.height = height;
								context.putImageData(imageData,0,0);
								const canvas1 = document.createElement('canvas');
								const context1 = canvas1.getContext('2d');
								canvas1.width = width*30/height;
								canvas1.height = 30;
								context1.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,canvas1.width,canvas1.height);
								block.getField("base64image").setValue(canvas1.toDataURL()+" "+canvas1.width+" "+canvas1.height);
								
								document.body.appendChild(canvas1);
								canvas1.parentNode.removeChild(canvas1);
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
		.appendField(Blockly.Msg["TFT_FONT_TTF"])
		.appendField(field);
	this.getInput('PROGMEM').setVisible(false);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://github.com/opentypejs/");
  },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (block.getInputTargetBlock("PROGMEM"))
			block.getInputTargetBlock("PROGMEM").setFieldValue('', 'TEXT');
		if (block.getField("realsize"))
		 	block.getField("realsize").setValue("");		
		if (block.getField("tmp"))
			block.getInput("preview").removeField("tmp");	
		if (block.getField("base64image"))
			block.getField("base64image").setValue("");		
  },
	previewChanged: function(newValue) {
		const block = this.sourceBlock_;
		if (newValue!="") {
			var image = newValue.split(" ");
			var previewFieldImage = new Blockly.FieldImage(image[0], image[1]||30, image[2]||30, { alt: "*", flipRtl: "FALSE" });
			if (block.getField("tmp"))
				block.getInput("preview").removeField("tmp");
			block.getInput("preview").appendField(previewFieldImage, "tmp");
		}	
	}
};

Blockly.Blocks['tft_qrcode_PROGMEM'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["TFT_SET"])
		.appendField(Blockly.Msg["TFT_XBM"]);
    this.appendValueInput("PROGMEM")
        .setCheck("String");
	this.appendDummyInput()
        .appendField("QRCODE")	
        .appendField(new Blockly.FieldDropdown([
		["64x64","64x64"],
		["128x128","128x128"],		
		["240x240","240x240"],	
		["320x320","320x320"],
		["480x480","480x480"],
		["600x600","600x600"],		
		["640x640","640x640"],
		["800x800","800x800"]		
	], this.validate), "size");	

    this.appendDummyInput()
		.appendField(new Blockly.FieldLabelSerializable(""), "base64image");
	this.getField("base64image").setVisible(false);
	this.getField("base64image").setValidator(this.previewChanged)
	
	this.appendDummyInput("preview")
		.appendField(new Blockly.FieldLabelSerializable(""), "realsize");
		
    var field = new Blockly.FieldTextInput();
    field.onFinishEditing_ = this.onFinishEditing;	
    this.appendDummyInput()		
        .appendField(Blockly.Msg["TFT_TEXT"])
		.appendField(field, "str");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
    this.getInput('PROGMEM').setVisible(false);
  },
	onFinishEditing: function(val) {
		var block = this.sourceBlock_;
		var input = block.getInputTargetBlock("PROGMEM");
		input.setFieldValue('', 'TEXT');
		block.setFieldValue('', "realsize");
		
		var img=document.createElement('img');
		var url = "https://chart.googleapis.com/chart?chs="+block.getFieldValue("size")+"&cht=qr&chl=" + val + "&choe=UTF-8&chld=M|0";
		img.src = url;
	
		img.onload = function (event) {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			
			canvas.width=img.width;
			canvas.height=img.height; 
			canvas.width = (canvas.width%8>0)?Math.round(canvas.width-canvas.width%8+8):Math.round(canvas.width);
			block.getField("realsize").setValue("( "+canvas.width + " * " + canvas.height + " ) ");
					
					
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
			
			context.putImageData(imageData,0,0);
			const canvas1 = document.createElement('canvas');
			const context1 = canvas1.getContext('2d');
			canvas1.width = canvas.width*30/canvas.height;
			canvas1.height = 30;
			context1.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,canvas1.width,canvas1.height);
			var dataURL = canvas1.toDataURL();
			block.getField("base64image").setValue(dataURL+" "+canvas1.width+" "+canvas1.height);
			
			document.body.appendChild(canvas1);
			canvas1.parentNode.removeChild(canvas1);
			document.body.appendChild(canvas);
			canvas.parentNode.removeChild(canvas);
			document.body.appendChild(img);
			img.parentNode.removeChild(img);			
			input.setFieldValue(xbmString, 'TEXT');
		}
    },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (block.getInputTargetBlock("PROGMEM"))
			block.getInputTargetBlock("PROGMEM").setFieldValue('', 'TEXT');
		if (block.getField("realsize"))
		 	block.getField("realsize").setValue("");	
		if (block.getField("str"))
		 	block.getField("str").setValue("");			
		if (block.getField("tmp"))
			block.getInput("preview").removeField("tmp");	
		if (block.getField("base64image"))
			block.getField("base64image").setValue("");		
  },
	previewChanged: function(newValue) {
		const block = this.sourceBlock_;
		if (newValue!="") {
			var image = newValue.split(" ");
			var previewFieldImage = new Blockly.FieldImage(image[0], image[1]||30, image[2]||30, { alt: "*", flipRtl: "FALSE" });
			if (block.getField("tmp"))
				block.getInput("preview").removeField("tmp");
			block.getInput("preview").appendField(previewFieldImage, "tmp");
		}	
	}
};

Blockly.Blocks['tft_drawXBMP_PROGMEM'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_IMAGE"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable");		
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_HEIGHT"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['tft_PROGMEM_array'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_ARRAY"])	
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["TFT_SET"]);		
    this.appendValueInput("PROGMEM")
        .setCheck("Array")
        .appendField(Blockly.Msg["TFT_XBM"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
  }
};

Blockly.Blocks['tft_drawXBMP_PROGMEM_array'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_IMAGE"]);
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_ARRAY"])	
        .appendField(new Blockly.FieldVariable("logo"), "variable");
    this.appendValueInput("index")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_INDEX"]);		
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_HEIGHT"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
  }
};

Blockly.Blocks['tft_getView'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["TFT_VIEWWIDTH"],"getViewportWidth"],
			[Blockly.Msg["TFT_VIEWHEIGHT"],"getViewportHeight"]
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_getCursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["TFT_CURSORX"],"getCursorX"],		
			[Blockly.Msg["TFT_CURSORY"],"getCursorY"]
		]), "property");		
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawChar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT_DRAWCHAR"]);
    this.appendValueInput("str")
        .setCheck(null)		
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawCharFont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAWCHAR"]);
    this.appendValueInput("str")
        .setCheck(null)		
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
		.appendField(Blockly.Msg["FONT_FACE_SHOW"])
        .appendField(new Blockly.FieldDropdown([
			["1","1"],		
			["2","2"],
			["4","4"],
			["6","6"],
			["7","7"],
			["8","8"],
			["9","9"],
			["15","15"]
		]), "font");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_invertDisplay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT_INVERTDISPLAY"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["PROPERTY_YES"],"1"], 
		[Blockly.Msg["PROPERTY_NO"],"0"]			
	]), "invert");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_setTextFont'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_SETTEXTFONT"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
			["1","1"],		
			["2","2"],
			["4","4"],
			["6","6"],
			["7","7"],
			["8","8"],
			["9","9"],
			["15","15"]
		]), "font");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_randomcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_COLOR_RANDOM"]);		
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_readPixel'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_READ_PIXEL_POINT"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");	
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawPixel'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_PIXEL_POINT"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_setTextDatum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_SETTEXTDATUM"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["TFT_Top_left"],"0"],
		[Blockly.Msg["TFT_Top_centre"],"1"],
		[Blockly.Msg["TFT_Top_right"],"2"],
		[Blockly.Msg["TFT_Middle_left"],"3"],
		[Blockly.Msg["TFT_Middle_centre"],"4"],
		[Blockly.Msg["TFT_Middle_right"],"5"],
		[Blockly.Msg["TFT_Bottom_left"],"6"],
		[Blockly.Msg["TFT_Bottom_centre"],"7"],
		[Blockly.Msg["TFT_Bottom_right"],"8"],
		[Blockly.Msg["TFT_Left_character_baseline"],"9"],
		[Blockly.Msg["TFT_Centre_character_baseline"],"10"],
		[Blockly.Msg["TFT_Right_character_baseline"],"11"]
	]), "type");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_setForegroundColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("U8g2")
		.appendField(Blockly.Msg["TFT_SETTEXTCOLOR"])
        .appendField(Blockly.Msg["TFT_FORECOLOR"]);
	this.appendValueInput("color");			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
  }
};

Blockly.Blocks['tft_setBackgroundColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("U8g2")
		.appendField(Blockly.Msg["TFT_SETTEXTCOLOR"])
        .appendField(Blockly.Msg["BACKCOLOR"]);
	this.appendValueInput("color");			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
  }
};

Blockly.Blocks['tft_drawEllipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_OVAL"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["TFT_HOLLOW"],"hollow"], 
		[Blockly.Msg["TFT_SOLID"],"solid"]			
	]), "type");		
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_CIRCLE_CENTER_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("rx")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_REDIUS_HORIZONTAL"]);
    this.appendValueInput("ry")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_REDIUS_VERTICAL"]);
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawStringFont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAWSTRING"]);
    this.appendValueInput("str")
        .setCheck(null)
        .appendField(Blockly.Msg["TFT_TEXT"]);		
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
		.appendField(Blockly.Msg["FONT_FACE_SHOW"])
        .appendField(new Blockly.FieldDropdown([
			["1","1"],		
			["2","2"],
			["4","4"],
			["6","6"],
			["7","7"],
			["8","8"],
			["9","9"],
			["15","15"]
		]), "font");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawCustomFont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["TFT_SET"])
		.appendField(Blockly.Msg["TFT_XBM"]);
    this.appendValueInput("PROGMEM")
        .setCheck("String");		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT) 
		.appendField(Blockly.Msg["FONTNAME"])
		.appendField(new Blockly.FieldTextInput("Arial", this.validate), "font");
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_SIZE"])
		.appendField(new Blockly.FieldTextInput("40", this.validate), "size");
		
    this.appendDummyInput()
		.appendField(new Blockly.FieldLabelSerializable(""), "base64image");
	this.getField("base64image").setVisible(false);
	this.getField("base64image").setValidator(this.previewChanged)
	
	this.appendDummyInput("preview")
		.appendField(new Blockly.FieldLabelSerializable(""), "realsize");
		
    var field = new Blockly.FieldTextInput();
    field.onFinishEditing_ = this.onFinishEditing;	
    this.appendDummyInput()		
        .appendField(Blockly.Msg["TFT_TEXT"])
		.appendField(field, "str");	
	this.getInput('PROGMEM').setVisible(false);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://docs.microsoft.com/en-us/typography/font-list/");
  },
	onFinishEditing: function(val) {
		var block = this.sourceBlock_;
		var input = block.getInputTargetBlock("PROGMEM");
		input.setFieldValue('', 'TEXT');
		block.setFieldValue('', "realsize");
		var size = block.getFieldValue("size");
		var font = block.getFieldValue("font");		
		
		if (val!='') {
			var text = val;
			var c = document.getElementById("canvas_draw");
			if (document.getElementById("canvas_draw")) {
				c.parentElement.removeChild(c);
			}

			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			canvas.width = 800;
			canvas.height = 800;

			context.font = size + "px " + font;
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
			block.getField("realsize").setValue("( " + width + " * " + height + " ) ");

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
			
			canvas.width = width;
			canvas.height = height;
			context.putImageData(imageData,0,0);
			const canvas1 = document.createElement('canvas');
			const context1 = canvas1.getContext('2d');
			canvas1.width = width*30/height;
			canvas1.height = 30;
			context1.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,canvas1.width,canvas1.height);
			block.getField("base64image").setValue(canvas1.toDataURL()+" "+canvas1.width+" "+canvas1.height);
			
			document.body.appendChild(canvas1);
			canvas1.parentNode.removeChild(canvas1);
			document.body.appendChild(canvas);
			canvas.parentNode.removeChild(canvas);
			input.setFieldValue(xbmString, 'TEXT');
		}		
    },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (block.getInputTargetBlock("PROGMEM"))
			block.getInputTargetBlock("PROGMEM").setFieldValue('', 'TEXT');
		if (block.getField("realsize"))
		 	block.getField("realsize").setValue("");
		if (block.getField("str"))
		 	block.getField("str").setValue("");		
		if (block.getField("tmp"))
			block.getInput("preview").removeField("tmp");	
		if (block.getField("base64image"))
			block.getField("base64image").setValue("");		
  },
	previewChanged: function(newValue) {
		const block = this.sourceBlock_;
		if (newValue!="") {
			var image = newValue.split(" ");
			var previewFieldImage = new Blockly.FieldImage(image[0], image[1]||30, image[2]||30, { alt: "*", flipRtl: "FALSE" });
			if (block.getField("tmp"))
				block.getInput("preview").removeField("tmp");
			block.getInput("preview").appendField(previewFieldImage, "tmp");
		}	
	}
};

Blockly.Blocks['tft_drawFont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("logo"), "variable")
		.appendField(Blockly.Msg["TFT_SET"])
		.appendField(Blockly.Msg["TFT_XBM"]);
    this.appendValueInput("PROGMEM")
        .setCheck("String");		
    this.appendDummyInput()  
      .setAlign(Blockly.ALIGN_RIGHT)  
      .appendField(Blockly.Msg["FONTNAME"])
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
	  ], this.validate), "font");
	  
	var opt = [];
	for (var i=8;i<=240;i++) {
	  opt.push([i+"px",String(i)]);
	}
  
	this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)    
      .appendField(Blockly.Msg["TFT_SIZE"])
      .appendField(new Blockly.FieldDropdown(opt, this.validate), "size");
	  
    this.appendDummyInput()
		.appendField(new Blockly.FieldLabelSerializable(""), "base64image");
	this.getField("base64image").setVisible(false);
	this.getField("base64image").setValidator(this.previewChanged)
	
	this.appendDummyInput("preview")
		.appendField(new Blockly.FieldLabelSerializable(""), "realsize");
	
	  
	  
    var field = new Blockly.FieldTextInput();
    field.onFinishEditing_ = this.onFinishEditing;	
    this.appendDummyInput()		
        .appendField(Blockly.Msg["TFT_TEXT"])
		.appendField(field, "str");	
	this.getInput('PROGMEM').setVisible(false);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://docs.microsoft.com/en-us/typography/font-list/");
  },
	onFinishEditing: function(val) {
		var block = this.sourceBlock_;
		var input = block.getInputTargetBlock("PROGMEM");
		input.setFieldValue('', 'TEXT');
		block.setFieldValue('', "realsize");
		var dropdown_size = block.getFieldValue("size");
		var dropdown_font = block.getFieldValue("font");
		
		if (val!='') {
			var text = val;
			var c = document.getElementById("canvas_draw");
			if (document.getElementById("canvas_draw")) {
				c.parentElement.removeChild(c);
			}

			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			canvas.width = 800;
			canvas.height = 800;

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
			block.getField("realsize").setValue("( " + width + " * " + height + " ) ");

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
			
			canvas.width = width;
			canvas.height = height;
			context.putImageData(imageData,0,0);
			const canvas1 = document.createElement('canvas');
			const context1 = canvas1.getContext('2d');
			canvas1.width = canvas.width*30/canvas.height;
			canvas1.height = 30;
			context1.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,canvas1.width,canvas1.height);
			block.getField("base64image").setValue(canvas1.toDataURL()+" "+canvas1.width+" "+canvas1.height);
			
			document.body.appendChild(canvas1);
			canvas1.parentNode.removeChild(canvas1);
			document.body.appendChild(canvas);
			canvas.parentNode.removeChild(canvas);
			input.setFieldValue(xbmString, 'TEXT');			
		}		
    },
	validate: function(newValue) {
		const block = this.sourceBlock_;
		if (block.getInputTargetBlock("PROGMEM"))
			block.getInputTargetBlock("PROGMEM").setFieldValue('', 'TEXT');
		if (block.getField("realsize"))
		 	block.getField("realsize").setValue("");
		if (block.getField("str"))
		 	block.getField("str").setValue("");			
		if (block.getField("tmp"))
			block.getInput("preview").removeField("tmp");	
		if (block.getField("base64image"))
			block.getField("base64image").setValue("");		
  },
	previewChanged: function(newValue) {
		const block = this.sourceBlock_;
		if (newValue!="") {
			var image = newValue.split(" ");
			var previewFieldImage = new Blockly.FieldImage(image[0], image[1]||30, image[2]||30, { alt: "*", flipRtl: "FALSE" });
			if (block.getField("tmp"))
				block.getInput("preview").removeField("tmp");
			block.getInput("preview").appendField(previewFieldImage, "tmp");
		}	
	}
};

Blockly.Blocks['tft_drawLine'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_LINE_DIP"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_START_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_END_X"]);
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y");
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawFastVLine'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_LINE_VERTICAL"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_START_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_HEIGHT"]);
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawFastHLine'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_LINE_HORIZONTAL"]);
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_START_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_WIDTH"]);
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawRect'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_SQUARE"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["TFT_HOLLOW"],"hollow"], 
		[Blockly.Msg["TFT_SOLID"],"solid"]			
	]), "type");		
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_CENTER_X"]);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_HEIGHT"]);
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawCircle'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_CIRCLE"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["TFT_HOLLOW"],"hollow"], 
		[Blockly.Msg["TFT_SOLID"],"solid"]			
	]), "type");		
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_CIRCLE_CENTER_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_REDIUS"]);
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawTriangle'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_TRIANGLE"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["TFT_HOLLOW"],"hollow"], 
		[Blockly.Msg["TFT_SOLID"],"solid"]			
	]), "type");		
    this.appendValueInput("x0")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_POINT1_X"]);
    this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_POINT2_X"]);
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_POINT3_X"]);
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y");
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawRoundRect'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_DRAW_SQUARE_ROUND"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["TFT_HOLLOW"],"hollow"], 
		[Blockly.Msg["TFT_SOLID"],"solid"]			
	]), "type");		
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_CENTER_X"]);
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_WIDTH"]);
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_HEIGHT"]);
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField(Blockly.Msg["TFT_REDIUS_ROUND"]);		
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["COLOR"]);			
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_setRotation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT_SETROTATION"]);	
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["TFT_ROTATE_NO_HORIZONTAL"],"0"], 
		[Blockly.Msg["TFT_ROTATE_90"],"1"], 
		[Blockly.Msg["TFT_ROTATE_180"],"2"],
		[Blockly.Msg["TFT_ROTATE_270"],"3"]				
	]), "mode");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawStringCursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT_DRAWSTRINGCURSOR"]);
    this.appendValueInput("str")
        .setCheck(null);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["TFT_NEWLINE"])
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["PROPERTY_NO"],"print"], 
		[Blockly.Msg["PROPERTY_YES"],"println"]			
	]), "newline");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_drawString'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT_DRAWSTRING"]);
    this.appendValueInput("str")
        .setCheck(null);		
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_setCursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["TFT_SETCURSOR"]);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_setTextSize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);
    this.appendValueInput("size")
        .setCheck("Number")
        .appendField(Blockly.Msg["PROPERTY_FONTSIZE"]+"(1~7)");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_setTextFontColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);
	this.appendValueInput("color_font")
	    .appendField(Blockly.Msg["TFT_FORECOLOR"]);	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_setTextColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);
	this.appendValueInput("color_font")
	    .appendField(Blockly.Msg["TFT_FORECOLOR"]);
	this.appendValueInput("color_back")
	    .appendField(Blockly.Msg["TFT_BACKCOLOR"]);	
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["TFT_BACKTRANSPARENT"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["PROPERTY_YES"],"0"], 
			[Blockly.Msg["PROPERTY_NO"],"1"]			
		]), "fill");		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};


// Use the following when calling setFont()
//
// Reserved for GLCD font  // FF0
//

var tft_font = [
	["Mono9pt7b", "&FreeMono9pt7b"],
	["Mono12pt7b", "&FreeMono12pt7b"],
	["Mono18pt7b", "&FreeMono18pt7b"],
	["Mono24pt7b", "&FreeMono24pt7b"],
	["MonoBold9pt7b", "&FreeMonoBold9pt7b"],
	["MonoBold12pt7b", "&FreeMonoBold12pt7b"],
	["MonoBold18pt7b", "&FreeMonoBold18pt7b"],
	["MonoBold24pt7b", "&FreeMonoBold24pt7b"],
	["MonoOblique9pt7b", "&FreeMonoOblique9pt7b"],
	["MonoOblique12pt7b", "&FreeMonoOblique12pt7b"],
	["MonoOblique18pt7b", "&FreeMonoOblique18pt7b"],
	["MonoOblique24pt7b", "&FreeMonoOblique24pt7b"],
	["MonoBoldOblique9pt7b", "&FreeMonoBoldOblique9pt7b"],
	["MonoBoldOblique12pt7b", "&FreeMonoBoldOblique12pt7b"],
	["MonoBoldOblique18pt7b", "&FreeMonoBoldOblique18pt7b"],
	["MonoBoldOblique24pt7b", "&FreeMonoBoldOblique24pt7b"],
	["Sans9pt7b", "&FreeSans9pt7b"],
	["Sans12pt7b", "&FreeSans12pt7b"],
	["Sans18pt7b", "&FreeSans18pt7b"],
	["Sans24pt7b", "&FreeSans24pt7b"],
	["SansBold9pt7b", "&FreeSansBold9pt7b"],
	["SansBold12pt7b", "&FreeSansBold12pt7b"],
	["SansBold18pt7b", "&FreeSansBold18pt7b"],
	["SansBold24pt7b", "&FreeSansBold24pt7b"],
	["SansOblique9pt7b", "&FreeSansOblique9pt7b"],
	["SansOblique12pt7b", "&FreeSansOblique12pt7b"],
	["SansOblique18pt7b", "&FreeSansOblique18pt7b"],
	["SansOblique24pt7b", "&FreeSansOblique24pt7b"],
	["SansBoldOblique9pt7b", "&FreeSansBoldOblique9pt7b"],
	["SansBoldOblique12pt7b", "&FreeSansBoldOblique12pt7b"],
	["SansBoldOblique18pt7b", "&FreeSansBoldOblique18pt7b"],
	["SansBoldOblique24pt7b", "&FreeSansBoldOblique24pt7b"],
	["Serif9pt7b", "&FreeSerif9pt7b"],
	["Serif12pt7b", "&FreeSerif12pt7b"],
	["Serif18pt7b", "&FreeSerif18pt7b"],
	["Serif24pt7b", "&FreeSerif24pt7b"],
	["SerifItalic9pt7b", "&FreeSerifItalic9pt7b"],
	["SerifItalic12pt7b", "&FreeSerifItalic12pt7b"],
	["SerifItalic18pt7b", "&FreeSerifItalic18pt7b"],
	["SerifItalic24pt7b", "&FreeSerifItalic24pt7b"],
	["SerifBold9pt7b", "&FreeSerifBold9pt7b"],
	["SerifBold12pt7b", "&FreeSerifBold12pt7b"],
	["SerifBold18pt7b", "&FreeSerifBold18pt7b"],
	["SerifBold24pt7b", "&FreeSerifBold24pt7b"],
	["SerifBoldItalic9pt7b", "&FreeSerifBoldItalic9pt7b"],
	["SerifBoldItalic12pt7b", "&FreeSerifBoldItalic12pt7b"],
	["SerifBoldItalic18pt7b", "&FreeSerifBoldItalic18pt7b"],
	["SerifBoldItalic24pt7b", "&FreeSerifBoldItalic24pt7b"]
];

Blockly.Blocks['tft_setFreeFont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["TFT_SETFREEFONT"])
        .appendField(new Blockly.FieldDropdown(tft_font), "font");	
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_fillScreen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);
	this.appendValueInput("color")
	    .appendField(Blockly.Msg["TFT_FILLSCREEN"]);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_COLOR"])	
		.appendField(new Blockly.FieldColour("#0000ff"), "colour");		
	this.setInputsInline(true);
	this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"])
        .appendField(Blockly.Msg["TFT_CLEAR"]);		
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['tft_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT"]);	
    this.appendDummyInput()
        .appendField(Blockly.Msg["TFT_INITIAL"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg["TFT_BOARD"])
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg["TFT_GENERAL"],""],
			["Pixel:Bit","Pixel:Bit"], 
			["TTGO T-Display","TTGO T-Display"]			
		]), "board");
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['esp32_pixelbit_tftshowcamera'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_PIXELBIT_TFTSHOWCAMERA"]);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['esp32_pixelbit_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_PIXELBIT_INITIAL"]);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_15"]);
  }
};

Blockly.Blocks['esp32_cam_camera_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_SHOW);	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_FRAMESIZE_SHOW,"framesize"],      		//解析度 value = 21->QSXGA(2560x1920), 20->P FHD(1080x1920), 19->WQXGA(2560x1600), 18->QHD(2560x1440), 17->QXGA(2048x1564), 16->P 3MP(864x1564), 15->P HD(720x1280), 14->FHD(1920x1080), 13->UXGA(1600x1200), 12->SXGA(1280x1024), 11->HD(1280x720), 10->XGA(1024x768), 9->SVGA(800x600), 8->VGA(640x480), 7->HVGA(480x320), 6->CIF(400x296), 5->QVGA(320x240), 4->240x240, 3->HQVGA(240x176), 2->QCIF(176x144), 1->QQVGA(160x120), 0->96x96
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_QUALITY_SHOW,"quality"],        			//畫質 value = 4 ~ 63
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_BRIGHTNESS_SHOW,"brightness"],     		//亮度 value = -3 ~ 3
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_CONTRAST_SHOW,"contrast"],       		//對比 value = -3 ~ 3
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_SATURATION_SHOW,"saturation"],     		//飽和度 value = -4 ~ 4
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_SHARPNESS_SHOW,"sharpness"],      		//清晰度 value = -3 ~ 3
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_DENOISE_SHOW,"denoise"],        			//降噪 0 ~ 8
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_AE_LEVEL_SHOW,"ae_level"],       		//自動曝光層級 value = -5 ~ 5 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_GAINCEILING_SHOW,"gainceiling"],    		//自動增益上限(開啟時) value = 0 ~ 511
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_SPECIAL_EFFECT_SHOW,"special_effect"], 	//特效 value = 0 ~ 6
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_AWB_SHOW,"awb"],            				//白平衡 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_DCW_SHOW,"dcw"],            				//使用自訂影像尺寸 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_AWB_GAIN_SHOW,"awb_gain"],       		//自動白平衡增益 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_WB_MODE_SHOW,"wb_mode"],        			//白平衡模式 value = 0自動，1晴天，2陰天，3日光燈，4鎢絲燈
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_AEC_SHOW,"aec"],            				//自動曝光感測器 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_AEC_value_SHOW,"aec_value"],      		//曝光值 value = 0 ~ 1920
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_AEC2_SHOW,"aec2"],           			//自動曝光控制 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_AGC_SHOW,"agc"],            				//自動增益控制 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_AGC_GAIN_SHOW,"agc_gain"],       		//自動增益(關閉時) value = 0 ~ 30
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_RAW_GMA_SHOW,"raw_gma"],        			//原始伽瑪 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_LENC_SHOW,"lenc"],           			//鏡頭校正 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_HMIRROR_SHOW,"hmirror"],        			//水平鏡像 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_VFLIP_SHOW,"vflip"],          			//垂直翻轉 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_BPC_SHOW,"bpc"],            				//黑色像素校正 value = 0 or 1
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_WPC_SHOW,"wpc"],            				//白色像素校正 value = 0 or 1 
			[Blockly.Msg.ESP32_CAM_CAMERA_PROPERTY_COLORBAR_SHOW,"colorbar"]        		//顏色條畫面 value = 0 or 1
		]), "property");	
    this.appendValueInput("value")
        .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)		
		.appendField(Blockly.Msg.SERVERMODULE_VALUE_SHOW);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);
	this.setHelpUrl("https://github.com/fustyles/Arduino/blob/master/ESP32-CAM_CameraWebServer_NoFaceDetection_NEW/ESP32-CAM_CameraWebServer_NoFaceDetection_NEW.ino");  	
  }
};


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
      .appendField(new Blockly.FieldVariable('newdate'), 'newdate');	  
  this.appendDummyInput()
      .appendField(Blockly.Msg.GET);
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
  this.setColour(50);
  }
};

Blockly.Blocks['system_datetime_set'] = {
  init: function () {
  this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('newdate'), 'newdate')
      .appendField(Blockly.Msg.SET);	  
  this.appendDummyInput()
      .appendField(Blockly.Msg["SYSTEM_DATETIME"]); 
  this.appendDummyInput()
      .appendField(Blockly.Msg["SYSTEM_DATETIME_ADD"]);
  this.appendValueInput("years")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_YEARS"]);
  this.appendValueInput("months")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_MONTHS"]); 	  
  this.appendValueInput("days")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_DAYS"]);
  this.appendValueInput("hours")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_HOURS"]);
  this.appendValueInput("minutes")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_MINUTES"]);	 
  this.appendValueInput("seconds")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg["SYSTEM_DATETIME_SECONDS"]);	  	  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(50);
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
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.SERVERMODULE_PARAMETER_URLDECODE_SHOW,"decode"],	  
		[Blockly.Msg.SERVERMODULE_PARAMETER_URLENCODE_SHOW,"encode"]
	]), "func");   
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

Blockly.Blocks['esp32_pixelbit_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["ESP32_PIXELBIT_INITIAL_SHOW"]);	
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
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_3"]);
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
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SERVERMODULE_REQUEST_SHOW)	
        .appendField(new Blockly.FieldCheckbox("TRUE"), "request");			
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
			[Blockly.Msg["UART_READ_CHAR_SHOW"],"char"],			
			[Blockly.Msg["UART_READ_NEWLINE_SHOW"],"newline"],
			[Blockly.Msg["UART_READ_RETURN_SHOW"],"return"],			
			[Blockly.Msg["UART_READ_CUSTOM_SHOW"],"custom"]			
		], this.validate1), "read");
    this.appendValueInput("custom","custom")
        .setCheck("String");		
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
  },
  validate1: function(newValue) {
	 const block = this.sourceBlock_;
	 if (newValue=="custom") {
		 block.getInput("custom").setVisible(true);		 
	 }
	 else {
		 block.getInput("custom").setVisible(false);	 
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
    this.setColour(190);
    
    
  }
};

Blockly.Blocks['fu_taiwan_aqi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AIRQUALITY_ESP32"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
    this.setHelpUrl("https://data.gov.tw/dataset/40448");
  }
};

Blockly.Blocks['fu_taiwan_aqi_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["AIRQUALITY_ESP32"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
    this.setHelpUrl("https://data.gov.tw/dataset/40448");
  }
};

Blockly.Blocks['fu_taiwan_weather'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["WEATHER_ESP32_36HR"]);	  
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg["WEATHER_PERIOD"])		
        .appendField(new Blockly.FieldDropdown([
          ["前12小時","0"],
          ["中12小時","1"],
          ["後12小時","2"]
		]), "period");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2");
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
        .appendField("EZ+")
		.appendField(Blockly.Msg["EZ_BUTTON"]);	  
    this.appendStatementInput("execute")
		.appendField(Blockly.Msg["EZ_PRESS"]+Blockly.Msg["EZ_BUTTONAB"]);
	this.appendStatementInput("executeA")
		.appendField(Blockly.Msg["EZ_PRESS"]+Blockly.Msg["EZ_BUTTONA"]);
	this.appendStatementInput("executeB")
		.appendField(Blockly.Msg["EZ_PRESS"]+Blockly.Msg["EZ_BUTTONB"]);
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

Blockly.Blocks['fu_ez_buzzer_tone4']={
	init:function(){
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
				["C3 (131)","131"],
				["C#3 (139)","139"],
				["D3 (147)","147"],
				["D#3 (156)","156"],
				["E3 (165)","165"],
				["F3 (175)","175"],
				["F#3 (185)","185"],
				["G3 (196)","196"],
				["G#3 (208)","208"],
				["A3 (220)","220"],
				["A#3 (233)","233"],
				["B3 (247)","247"],
				["C4 (262)","262"],
				["C#4 (277)","277"],
				["D4 (294)","294"],
				["D#4 (311)","311"],
				["E4 (330)","330"],
				["F4 (349)","349"],
				["F#4 (370)","370"],
				["G4 (392)","392"],
				["G#4 (415)","415"],
				["A4 (440)","440"],
				["A#4 (466)","466"],
				["B4 (494)","494"],
				["C5 (523)","523"],
				["C#5 (554)","554"],
				["D5 (587)","587"],
				["D#5 (622)","622"],
				["E5 (659)","659"],
				["F5 (698)","698"],
				["F#5 (740)","740"],
				["G5 (784)","784"],
				["G#5 (831)","831"],
				["A5 (880)","880"],
				["A#5 (932)","932"],
				["B5 (988)","988"],			
				["C6 (1047)","1047"],
				["C#6 (1109)","1109"],
				["D6 (1175)","1175"],
				["D#6 (1245)","1245"],
				["E6 (1319)","1319"],
				["F6 (1397)","1397"],
				["F#6 (1480)","1480"],
				["G6 (1568)","1568"],
				["G#6 (1661)","1661"],
				["A6 (1760)","1760"],
				["A#6 (1864)","1864"],
				["B6 (1975)","1975"],
				["C7 (2093)","2093"],
				["C#7 (2218)","2218"],
				["D7 (2349)","2349"],
				["D#7 (2489)","2489"],
				["E7 (2637)","2637"],
				["F7 (2794)","2794"],
				["F#7 (2960)","2960"],
				["G7 (3136)","3136"],
				["G#7 (3322)","3322"],
				["A7 (3520)","3520"],
				["A#7 (3729)","3729"],
				["B7 (3951)","3951"],
				["C8 (4186)","4186"],
				["C#8 (4435)","4435"],
				["D8 (4699)","4699"],
				["D#8 (4978)","4978"],
				["E8 (5274)","5274"],
				["F8 (5588)","5588"],
				["F#8 (5920)","5920"],
				["G8 (6272)","6272"],
				["G#8 (6645)","6645"],
				["A8 (7040)","7040"],
				["A#8 (7459)","7459"],
				["B8 (7902)","7902"]
			]),"frequency");			
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(155);		
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
		.appendField("U8g2")
        .appendField(Blockly.Msg["OLED_INITIAL"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
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
        .setAlign(Blockly.ALIGN_RIGHT)	
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
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(Blockly.Msg["OLED_UTF8_CHINESE"])
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["OLED_DISABLE"],"0"], 
		[Blockly.Msg["OLED_ENABLE"],"1"]			
	]), "utf8");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(Blockly.Msg["OLED_FONT_DEFAULT"])
        .appendField(new Blockly.FieldDropdown(opt_font), "font");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
 
 
  }
};


Blockly.Blocks['fu_oled_home'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
        .appendField(Blockly.Msg["OLED_FONT_SET_CHINESE"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
        .appendField(Blockly.Msg["OLED_FONT_SET_IMAGE"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
        .appendField(Blockly.Msg["OLED_FONT_SET"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown(opt_font), "font");
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
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField("U8g2")
        .appendField(Blockly.Msg["OLED_FONT_DRAW_DIRECTION"]);		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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

Blockly.Blocks['fu_oled_setFontMode'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField("U8g2")
        .appendField(Blockly.Msg["OLED_FONT_MODE"]);		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg["PROPERTY_YES"],"1"],		
		[Blockly.Msg["PROPERTY_NO"],"0"]
	]), "drawback");		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
  }
};

Blockly.Blocks['fu_oled_setDrawColor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
		.appendField(Blockly.Msg["OLED_DRAW_COLOR"]);		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
		.appendField(Blockly.Msg["OLED_DISPLAY_MODE"]);		
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
		.appendField(Blockly.Msg["OLED_SAVE_POWER"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
  }
  /*
  ,onchange: function(event) {
	  if (this.getInputTargetBlock("str")) {
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
	}
	*/	
};

Blockly.Blocks['fu_oled_drawCustomFont'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
  }
  /*
  ,onchange: function(event) {
	  if (this.getInputTargetBlock("str")) {
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
	}  
	*/
};

Blockly.Blocks['fu_oled_setCursor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2");
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
					block.getField("size").setValue("( "+canvas.width + " * " + canvas.height + " ) "+Blockly.Msg["OLED_WHITEBACK_BLACKWORD"], "size");
					
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
					document.body.appendChild(img);
					img.parentNode.removeChild(img);					
					input.setFieldValue(xbmString, 'TEXT');
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2");
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
			document.body.appendChild(img);
			img.parentNode.removeChild(img);			
			input.setFieldValue(xbmString, 'TEXT');
		}
    }
};

Blockly.Blocks['fu_oled_PROGMEM_array'] = {
  init: function() {
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
    this.setColour(Blockly.Msg["HUE_12"]);
 
 this.setHelpUrl("https://windows87.github.io/xbm-viewer-converter/");
  }
};

Blockly.Blocks['fu_oled_setBitmapMode'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
        .appendField(Blockly.Msg["OLED_DRAW_BACKGROUND_COLOR"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("U8g2")
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

var opt_font = [
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

Blockly.Blocks['esp32_wifi_localip'] = {
  init:function(){
	this.appendDummyInput()
		.appendField(Blockly.Msg.GET_WIFI_LOCALIP);
	this.setOutput(true, null);  
	this.setColour(20);
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

Blockly.Blocks['esp32_cam_initial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_CAM_INITIAL_SHOW);
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
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(Blockly.Msg["HUE_12"]);
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
        .appendField(Blockly.Msg["ESP32_BLEKEYBOARD_AFTER_READ_SHOW"]);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
    this.setColour(190);
  }
};

Blockly.Blocks['servermodule_cmd'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SHOW);
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
    this.setOutput(true, null); 
    this.setColour(Blockly.Msg["HUE_21"]);
  }
};

Blockly.Blocks['servermodule_cmd_if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_CMD_IF_SHOW);
	this.appendDummyInput()
			.appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SHOW);
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
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SHOW);
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
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SHOW);
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
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SHOW);
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
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.SERVERMODULE_PARAMETER_URLDECODE_SHOW,"decode"],	  
		[Blockly.Msg.SERVERMODULE_PARAMETER_URLENCODE_SHOW,"encode"]
	]), "func");   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(Blockly.Msg["HUE_21"]);
  }
};

Blockly.Blocks['servermodule_parameter_get'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SHOW);
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
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SHOW);
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
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_SHOW);
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
      .setCheck(null);    
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
      .setCheck(null);   
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
  this.appendStatementInput("do")
      .appendField(Blockly.Msg.AJAX_RESPONSE);	  
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
  this.setColour(Blockly.Msg["HUE_25"]);  
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
				["B 4 [494]","494"],
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
				["B 6 [1975]","1975"],
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
			.setCheck(null)
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_INDEX)
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
		  ]),"index");				
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
			.setCheck(null)
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_INDEX)
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
		  ]),"index");				
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
			.setCheck(null)
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_INDEX)
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
		  ]),"index");				
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
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_INDEX)
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
		  ]),"index");				
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
				["B 4 [494]","494"],
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
				["B 6 [1975]","1975"],
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

Blockly.Blocks['BitMatrixLed_matrix_color_one_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR);	
	this.appendValueInput("L21")
		.setCheck("String")
        .appendField("1");
	this.appendValueInput("L22")
		.setCheck("String")
        .appendField("2");		
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
      .appendField(Blockly.Msg.FRANCEFU_SONAR);
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN);	  
  this.appendValueInput("TRIG")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN_TRIG);
  this.appendValueInput("ECHO")
      .setCheck("Number")
	  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_PIN_ECHO); 
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_INDEX)
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
	  ]),"index");		  
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setColour(240);  
}
};
Blockly.Blocks.webbit_mooncar_sonar={
	init:function(){
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCEFU_SONAR);
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCEFU_MOONCAR_SONAR_INDEX)
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
		  ]),"index");	  
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

Blockly.Blocks['fu_mqtt_server_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT")
		.appendField(Blockly.Msg["MQTT_FU_LOOP"]);	  
    this.appendDummyInput()
		.appendField(Blockly.Msg["MQTT_FU_SERVER_WHEN_GETDATA"]);
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
        .appendField(new Blockly.FieldVariable("i"), "variable");
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg["HUE_1"]);
  }
};

Blockly.Blocks['declare_variable_set'] = {
  init: function () {
	this.appendDummyInput()
        .appendField(Blockly.Msg.DECLARE_VARIABLE_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("i"), "variable");
	this.appendValueInput("value")
		.appendField(Blockly.Msg.VALUE)
		.setCheck(null)
		.setAlign(Blockly.ALIGN_RIGHT);		
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


if (typeof topCheck !== "undefined") topCheck = false;

