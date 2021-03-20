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
	}
};

Blockly.Blocks.esp32_lum={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_LUM)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.ESP32_LUM_PIN_LEFT,"l"],[Blockly.Msg.ESP32_LUM_PIN_RIGHT,"r"]]),"side");
		this.setInputsInline(!0);
		this.setOutput(!0,"Boolean");
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
	}
};

Blockly.Blocks.esp32_temperature={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.ESP32_TEMPERATURE);
		this.setInputsInline(!0);
		this.setOutput(!0,"Boolean");
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
	}
};

Blockly.Blocks['BitMatrixLed_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.WEBBIT_MATRIX_SHOW);
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
    this.setColour(345);	
  }
};

Blockly.Blocks['BitMatrixLed_matrix_color'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.WEBBIT_MATRIX_COLOR_SHOW);
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
    this.setColour(345);	
  }
};

Blockly.Blocks['BitMatrixLed_sample'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBBIT_SAMPLE_SHOW)
        .appendField(new Blockly.FieldDropdown([["♥","♥"], ["♡","♡"], ["↑","↑"], ["↓","↓"], ["←","←"], ["→","→"], ["↖","↖"], ["↙","↙"], ["↗","↗"], ["↘","↘"], ["▲","▲"], ["▼","▼"], ["◄","◄"], ["►","►"], ["O","O"], ["X","X"], ["V","V"]]), "value_sample_");     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);	
  }
};