'use strict';

Blockly.Python['test1'] = function(block) {
	Blockly.Python.definitions_['messagebox'] =	'import tkinter as tk\n'
							+'from tkinter import messagebox\n'
							+'root = tk.Tk()\nroot.withdraw()';
	var message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
	var code = "messagebox.showwarning('Message Box'," + message + ")\n";
	return code;
};

Blockly.Python['test2'] = function(block) {
	var code = "'World Peace'";
	return [code, Blockly.Python.ORDER_NONE];
};	
