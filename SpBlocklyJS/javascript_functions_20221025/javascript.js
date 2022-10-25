Blockly.JavaScript['javascript_function_math_constant'] = function(block) {
	var code = block.getFieldValue('function');
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['javascript_function_math_function'] = function(block) {
	var p1 = Blockly.JavaScript.valueToCode(block, 'p1', Blockly.JavaScript.ORDER_ATOMIC)||"";
	var p2 = Blockly.JavaScript.valueToCode(block, 'p2', Blockly.JavaScript.ORDER_ATOMIC)||"";
	var code = block.getFieldValue('function').replace("%1", p1).replace("%2", p2);	
	return [code, Blockly.JavaScript.ORDER_NONE];
};