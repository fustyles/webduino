Blockly.JavaScript['javascript_function_string_split'] = function(block) {
	var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC)||" ";	
	var delimiter = Blockly.JavaScript.valueToCode(block, 'delimiter', Blockly.JavaScript.ORDER_ATOMIC)||" ";
	var code = text+'.split('+delimiter+')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

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

Blockly.JavaScript['javascript_function_general'] = function(block) {
	var p1 = Blockly.JavaScript.valueToCode(block, 'p1', Blockly.JavaScript.ORDER_ATOMIC)||"";
	var code = block.getFieldValue('function').replace("%1", p1)+";\n";	
	return code;
};

Blockly.JavaScript['javascript_function_general_get'] = function(block) {
	var p1 = Blockly.JavaScript.valueToCode(block, 'p1', Blockly.JavaScript.ORDER_ATOMIC)||"";
	var code = block.getFieldValue('function').replace("%1", p1);	
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['javascript_function_replace'] = function(block) {
	var source = Blockly.JavaScript.valueToCode(block, 'source', Blockly.JavaScript.ORDER_ATOMIC)||"";	
	var type = block.getFieldValue('type');
	var str = Blockly.JavaScript.valueToCode(block, 'str', Blockly.JavaScript.ORDER_ATOMIC)||"";
	if (str.indexOf("'")==0||str.indexOf('"')==0)
		str = str.substring(1,str.length-1);
	var rep = Blockly.JavaScript.valueToCode(block, 'rep', Blockly.JavaScript.ORDER_ATOMIC)||"";	
	if (type=="ALL")
		var code = source+'.replace(/'+str+'/g, '+rep+')';
	else
		var code = source+'.replace('+str+', '+rep+')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};