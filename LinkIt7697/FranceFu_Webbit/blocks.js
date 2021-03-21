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
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
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
		this.setInputsInline(!0);
		this.setOutput(!0,"Boolean");
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
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(140);			
	}
};

Blockly.Blocks.esp32_lum={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_LUM)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.ESP32_LUM_PIN_LEFT,"l"],[Blockly.Msg.ESP32_LUM_PIN_RIGHT,"r"]]),"side");
		this.setInputsInline(!0);
		this.setOutput(!0,"Boolean");
		this.setColour(140);			
	}
};

Blockly.Blocks.esp32_temperature_pin={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_TEMPERATURE_PIN);
		this.appendValueInput("pin")
			.setCheck("Number");			
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(200);			
	}
};

Blockly.Blocks.esp32_temperature={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_TEMPERATURE);
		this.setInputsInline(!0);
		this.setOutput(!0,"Boolean");
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
				["B 5 [988]","988"]
			]),"frequency");
		this.appendValueInput("delaytime")
			.setCheck("String")
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);			
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
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
			.setCheck("String")
			.appendField(Blockly.Msg.ESP32_BUZZER_FREQUENCY);
		this.appendValueInput("delaytime")
			.setCheck("String")
			.appendField(Blockly.Msg.ESP32_BUZZER_DELAYTIME);			
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setHelpUrl("https://zh.wikipedia.org/wiki/%E9%9F%B3%E9%AB%98");
		this.setColour(260);			
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
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
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
		this.setInputsInline(!0);
		this.setOutput(!0,"Boolean");
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
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(20);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix_brightness'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MATRIX_BRIGHTNESS);
		this.appendValueInput("brightness")
			.setCheck("Number");
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(20);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix_clear'] = {
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_MATRIX_CLEAR);
		this.setInputsInline(!0);
		this.setPreviousStatement(!0,null);
		this.setNextStatement(!0,null);
		this.setColour(20);			
	}
};

Blockly.Blocks['BitMatrixLed_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX_SHOW);
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"RGB")
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR_SHOW);
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
    this.setColour(20);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR_SHOW);
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
    this.setColour(20);	
  }
};

Blockly.Blocks['BitMatrixLed_sample1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE_SHOW)
        .appendField(new Blockly.FieldDropdown([
			["♥","0110010010010011001001100"],
			["♡","0110011110011111111001100"],  
			["↑","0010001000111110100000100"],
			["↓","0010000010111110001000100"],
			["←","0010001110101010010000100"],
			["→","0010000100101010111000100"],
			["↖","1111011000101001001000001"],
			["↙","0111100011001010100110000"],
			["↗","0000110010101001100011110"],
			["↘","1000001001001010001101111"],
			["▲","0000100111111110011100001"],
			["▼","1000011100111111110010000"],
			["◄","0010000100011100111011111"],
			["►","1111101110011100010000100"],
			[",","0000000001000100000000000"],
			[".","0000000001000000000000000"],
			["?","0100010000100111010001000"],
			["!","0000000000111010000000000"],   
			[";","0000000001010100000000000"],
			[":","0000000000010100000000000"],
			["(","0000001110100010000000000"],
			[")","0000000000100010111000000"],
			["[","0000011111100010000000000"],
			["]","0000000000100011111100000"],
			["{","0000000100111111000100000"],
			["}","0000010001111110010000000"],
			["'","0000000000110000010000000"],
			["\\","1100000100110000010000000"],
			["-","0000000100001000010000000"],
			["", "0000000000000000000000000"]			
		]), "value_sample_");
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR_SHOW);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);	
  }
};

Blockly.Blocks['BitMatrixLed_sample2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE_SHOW)
        .appendField(new Blockly.FieldDropdown([
			["0","0000011111100011111100000"],
			["1","0000001001111110000100000"],
			["2","0000010111101011110100000"],
			["3","0000010101101011111100000"],
			["4","0000011100001001111100000"],
			["5","0000011101101011011100000"],
			["6","0000011111101011011100000"],
			["7","0000011000100001111100000"],
			["8","0000011111101011111100000"],
			["9","0000011101101011111100000"],
			["", "0000000000000000000000000"]
		]), "value_sample_");  
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR_SHOW);		
	this.appendValueInput("RGB")
		.setCheck("String");	
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);	
  }
};

Blockly.Blocks['BitMatrixLed_sample3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE_SHOW)
        .appendField(new Blockly.FieldDropdown([
			["A","0111110010100101001001111"],
			["B","1111110101101011010101010"],
			["C","0111010001100011000110001"],
			["D","1111110001100011000101110"],
			["E","1111110101101011010110101"],
			["F","1111110100101001010010100"],
			["G","0111010001101011010110111"],
			["H","1111100100001000010011111"],
			["I","1000110001111111000110001"],
			["J","1001110001111111000010000"],
			["K","1111100010001000101010001"],
			["L","1111100001000010000100001"],
			["M","1111101000001000100011111"],
			["N","1111101000001000001011111"],
			["O","0111010001100011000101110"],
			["P","1111110010100101001001100"],
			["Q","0111010001101011001001101"],
			["R","1111110100101001010001011"],
			["S","0100110101101011010110010"],
			["T","1000010000111111000010000"],
			["U","1111000001000010000111110"],
			["V","1110000010000010001011100"],
			["W","1111000001111100000111110"],
			["X","1000101010001000101010001"],
			["Y","1000001000001110100010000"],   
			["Z","1000110011101011100110001"],
			["", "0000000000000000000000000"]
		]), "value_sample_");  
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR_SHOW);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);	
  }
};

Blockly.Blocks['BitMatrixLed_sample4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SAMPLE_SHOW)
        .appendField(new Blockly.FieldDropdown([
			["a","0000000110010010011000001"],
			["b","0000011111001010001000000"],
			["c","0000000110010010100100000"],
			["d","0000000010001011111100000"],
			["e","0000000110010110010100000"],
			["f","0000000100111111010000000"],
			["g","0000000101010110011000000"],
			["h","0000011111001000001100000"],
			["i","0000000000101110000000000"],
			["j","0000000001101110000000000"],
			["k","0000011111000100010100000"],
			["l","0000000000111110000000000"],
			["m","0011100100000110010000011"],
			["n","0000000111001000001100000"],
			["o","0000000010001010001000000"],
			["p","0000001111010100010000000"],
			["q","0000000100010100111100000"],
			["r","0000000111000100010000000"],
			["s","0000001001101011001000000"],
			["t","0000000100011110010100000"],
			["u","0000000110000010011000001"],
			["v","0000000110000010011000000"],
			["w","0011000001001100000100110"],
			["x","0000000101000100010100000"],
			["y","0000000101000100010000000"],   
			["z","0000101011011010100000000"],
			["", "0000000000000000000000000"]			
		]), "value_sample_");  
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR_SHOW);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR_SHOW);
	this.appendValueInput("X")
        .appendField("X[1~5]")	
		.setCheck("Number"); 
	this.appendValueInput("Y")
        .appendField("Y[1~5]")	
		.setCheck("Number"); 		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR_SHOW);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR_SHOW);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.ESP32_MATRIX_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR_SHOW);		
	this.appendValueInput("RGB")
		.setCheck("String");
	this.setInputsInline(!0);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_rgb_one_n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_MATRIX_COLOR_SHOW);
	this.appendValueInput("N")
        .appendField(Blockly.Msg.ESP32_MATRIX_LEDS_N)	
		.setCheck("Number");		
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP32_MATRIX_CHOICECOLOR_SHOW+"[0~255]");		
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
    this.setColour(20);	
  }
};

Blockly.Blocks['BitMatrixLed_color'] = {
  init: function() {	
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#FF0000"),"RGB");
	this.setInputsInline(!0);
	this.setOutput(!0,"Boolean");	
  }
};