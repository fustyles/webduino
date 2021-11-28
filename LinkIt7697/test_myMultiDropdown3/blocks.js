/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Multi Dropdown.
 * @author https://www.facebook.com/francefu/
 * @Update 11/28/2021 14:00 (Taiwan Standard Time)
 */



var list = [
	["a","a1","a11"],
	["a","a1","a12"],	
	["a","a2","a21"],
	["a","a2","a22"],	
	["b","b1","b11"],
	["b","b1","b12"],	
	["b","b2","b21"],
	["b","b2","b22"]	
];

Blockly.Blocks["multidropdown_test"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hello World");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(this.getParentOptions, this.validate1),"S1");
    this.appendDummyInput("second")
        .appendField(new Blockly.FieldDropdown([["",""]], this.validate2),"S2");
    this.appendDummyInput("third")
        .appendField(new Blockly.FieldDropdown([["",""]]),"S3");			
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100); 
  },
  getParentOptions: function() {
	 var opt = [];
	 for (var i=0;i<list.length;i++) {
		 for (var j=0;j<opt.length;j++) {
			if (opt[j][0]==list[i][0]) {
				opt.splice(j, 1);
				break;
			}
		 }
		 opt.push([list[i][0],list[i][0]]);
	 }
	 if (opt.length==0)
		 opt.push(["",""]);	  
	 return opt;
  },
  validate1: function(newValue) {
	 const sourceBlock = this.getSourceBlock();
	 var opt = [];
	 for (var i=0;i<list.length;i++) {
		if (list[i][0]==newValue) {
			for (var j=0;j<opt.length;j++) {
				if (opt[j][1]==list[i][1]) {
					opt.splice(j, 1);
					break;
				}
			}				
			opt.push([list[i][1],list[i][1]]);
		}
	 }
	 if (opt.length==0)
		 opt.push(["",""]);
	 sourceBlock.getInput("second").removeField("S2");
	 sourceBlock.getInput("second").appendField(new Blockly.FieldDropdown(opt, sourceBlock.validate2),"S2");
	 sourceBlock.validate2([newValue, sourceBlock.getFieldValue("S2")]);
  },
  validate2: function(newValue) {
	 if (!this.type) {
		var sourceBlock = this.getSourceBlock();
		var firstValue = sourceBlock.getFieldValue("S1");
	 }
	 else {
		var sourceBlock = this;
		var firstValue = newValue[0];
		newValue = newValue[1];
	 }
	 var opt = [];
	 for (var i=0;i<list.length;i++) {
		 if (list[i][0]==firstValue&&list[i][1]==newValue) {
			 for (var j=0;j<opt.length;j++) {
				if (opt[j][1]==list[i][2]) {
					opt.splice(j, 1);
					break;
				}
			 }			 
			 opt.push([list[i][2],list[i][2]]);
		 }
	 }
	 if (opt.length==0)
		 opt.push(["",""]);	 
	 sourceBlock.getInput("third").removeField("S3");
	 sourceBlock.getInput("third").appendField(new Blockly.FieldDropdown(opt),"S3");
  }   
};
