'use strict';

//*************** Custom Blocks ******************
	
Blockly.Blocks['test1'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["HELLOWORLD_MSG"]);
	this.appendValueInput("message")
		.setCheck(null);
	this.setInputsInline(!0);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);		  
	this.setColour(Blockly.Msg["HELLOWORLD_HUE"]);
  }
};

Blockly.Python['test1'] = function(block) {
	Blockly.Python.definitions_['messagebox'] =	'import tkinter as tk\n'
							+'from tkinter import messagebox\n'
							+'root = tk.Tk()\nroot.withdraw()';
	var message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
	var code = "messagebox.showwarning('Message Box'," + message + ")\n";
	return code;
};

Blockly.Blocks['test2'] = {
  init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg["HELLOWORLD_GET"]);
	this.setInputsInline(!0);
	this.setOutput(!0);	  
	this.setColour(Blockly.Msg["HELLOWORLD_HUE"]);
  }
};	

Blockly.Python['test2'] = function(block) {
	var code = "'World Peace'";
	return [code, Blockly.Python.ORDER_NONE];
};	


//*************** Custom Toolbox ******************
	
if (typeof toolbox_custom == 'undefined')
	var toolbox_custom = [];

toolbox_custom.push(''
+'    <category name="%{BKY_CUSTOM_NAME}" categorystyle="logic_category">'
+'      <block type="test1">'
+'			<value name="message">'
+'				<block type="text">'
+'					<field name="TEXT">Hello World</field>'
+'				</block>'
+'			</value>'
+'		</block>'
+'	  	<block type="test2"></block>'
+'    </category>'
);




