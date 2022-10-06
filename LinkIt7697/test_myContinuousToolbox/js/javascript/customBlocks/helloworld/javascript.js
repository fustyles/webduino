'use strict';

Blockly.JavaScript['test1'] = function(block) {
	var message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'document.write(' + message + ');\n';
	return code;
};

Blockly.JavaScript['test2'] = function(block) {
	Blockly.JavaScript.definitions_['messagebox'] = 'var message = "World Peace";\n';
	
	var code = "message";
	return [code, Blockly.JavaScript.ORDER_NONE];
};	

Blockly.JavaScript['test3'] = function(block) {
	var seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'await delay(' + seconds + ');\n';
	return code;
};