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
    this.setColour(190);
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
    this.setColour(190);
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