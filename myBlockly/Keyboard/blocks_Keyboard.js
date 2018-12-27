Blockly.Blocks['keydown_listener'] = {
	init: function() {
	this.appendDummyInput()
	    .appendField(Blockly.Msg.KEYDOWN_LISTENER_SHOW);
	this.appendStatementInput("statement");
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
	this.setColour(65);
	}
};

Blockly.Blocks['keydown_keycode'] = {
	init: function() {
    this.appendDummyInput()
		.appendField(Blockly.Msg.KEYDOWN_KEYCODE_SHOW)
		.appendField(new Blockly.FieldDropdown([
			["BackSpace","8"],
			["Tab","9"],
			["Clear","12"],
			["Enter","13"],
			["Shift_L","16"],
			["Control_L","17"],
			["Alt_L","18"],
			["Pause","19"],
			["Caps_Lock","20"],
			["Escape","27"],
			["space","32"],
			["Prior","33"],
			["Next","34"],
			["End","35"],
			["Home","36"],
			["Left","37"],
			["Up","38"],
			["Right","39"],
			["Down","40"],
			["Select","41"],
			["Print","42"],
			["Execute","43"],
			["Insert","45"],
			["Delete","46"],
			["Help","47"],
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
			["Z","90"]
			]), "keycode");
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(65);
  }
};
