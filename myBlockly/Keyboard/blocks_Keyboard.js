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

Blockly.Blocks['keyup_listener'] = {
	init: function() {
	this.appendDummyInput()
	    .appendField(Blockly.Msg.KEYUP_LISTENER_SHOW);
	this.appendStatementInput("statement");
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
	this.setColour(65);
	}
};

Blockly.Blocks['keypress_listener'] = {
	init: function() {
	this.appendDummyInput()
	    .appendField(Blockly.Msg.KEYPRESS_LISTENER_SHOW);
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
			["A(a)","65"],
			["B(b)","66"],
			["C(c)","67"],
			["D(d)","68"],
			["E(e)","69"],
			["F(f)","70"],
			["G(g)","71"],
			["H(h)","72"],
			["I(i)","73"],
			["J(j)","74"],
			["K(k)","75"],
			["L(l)","76"],
			["M(m)","77"],
			["N(n)","78"],
			["O(o)","79"],
			["P(p)","80"],
			["Q(q)","81"],
			["R(r)","82"],
			["S(s)","83"],
			["T(t)","84"],
			["U(u)","85"],
			["V(v)","86"],
			["W(w)","87"],
			["X(x)","88"],
			["Y(y)","89"],
			["Z(z)","90"]
			]), "keycode");
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(65);
  }
};

Blockly.Blocks['keypress_key'] = {
	init: function() {
    	this.appendDummyInput()
	    .appendField(Blockly.Msg.KEYPRESS_KEY_SHOW)
	    .appendField(new Blockly.FieldDropdown([
	      ["Ctrl","Ctrl"],
	      ["Shift","Shift"],
	      ["Alt","Alt"]
	      ]), "keycode");
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(65);
  }
};
