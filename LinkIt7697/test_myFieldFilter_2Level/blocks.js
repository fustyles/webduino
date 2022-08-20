/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Field Filter.
 * @author https://www.facebook.com/francefu/
 * @Update 12/15/2021 21:00 (Taiwan Standard Time)
 */

Blockly.Blocks["test_fieldFilter"] = {
  init: function() {
	this.options = [
		['','','',''],	
		['France','fr','Paris','CDG'],
		['France','fr','Laon','XLN'],
		['France','fr','Nice','NCE'],		
		['Taiwan','tw','Taipei','TPE'],
		['Taiwan','tw','Taichung','RMQ'],		
		['Taiwan','tw','Kaohsiung','KH']
	];
	var options1 = [];
	this.options.forEach(function(element) {
		if (!options1.includes(element[0]))
			options1.push(element[0])
	});
	
	this.field1 = new CustomFields.FieldFilter('', options1, this.validate1);
    this.appendDummyInput()
        .appendField(this.field1, 'FILTER1');
    this.appendDummyInput()
        .appendField('', 'VALUE1');
	//this.getField("VALUE1").setVisible(false);		
		
    this.appendDummyInput('zone')
		.appendField('', 'FILTER2');	
    this.appendDummyInput()
        .appendField('', 'VALUE2');	
	//this.getField("VALUE2").setVisible(false);	

    this.setStyle('loop_blocks');
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	
  },
  validate1: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="") {
		if (block.field1.WORDS) {
			if (block.field1.WORDS.length>0) {
				block.options.forEach(function(element1) {
					if (element1[0]==block.field1.WORDS[0]) {
						block.setFieldValue(element1[1], 'VALUE1');
						block.zoneOptions(element1);
					}
				})				
			}
		}
		else {
			block.setFieldValue('', 'VALUE1');
			block.setFieldValue('', 'VALUE2');
		}
	}
	else {
		block.options.forEach(function(element1) {
			if (element1[0]==block.field1.WORDS[Number(newValue)]) {
				block.setFieldValue(element1[1], 'VALUE1');
				block.zoneOptions(element1);
			}
		})
	}
  },
  validate2: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="") {
		if (block.field2.WORDS) {
			if (block.field2.WORDS.length>0) {
				block.options.forEach(function(element) {
					if (element[2]==block.field2.WORDS[0]) {
						block.setFieldValue(element[3], 'VALUE2');						
					}
				})				
			}
		}
		else {
			block.setFieldValue('', 'VALUE2');
		}
	}
	else {
		block.options.forEach(function(element) {
			if (element[2]==block.field2.WORDS[Number(newValue)]) {
				block.setFieldValue(element[3], 'VALUE2');
			}
		})
	}
  },
  zoneOptions: function(element1) {
		var options2 = [];
		this.options.forEach(function(element2) {
			if (element1[0]==element2[0])
				options2.push(element2[2])
		})
		this.field2 = new CustomFields.FieldFilter('', options2, this.validate2);
		if (this.getField("FILTER2"))
			this.getInput("zone").removeField("FILTER2");
		this.getInput("zone").appendField(this.field2, 'FILTER2');
		this.setFieldValue('', 'VALUE2');
  }
};

Blockly.JavaScript['test_fieldFilter'] = function(block) {
  return this.getFieldValue('VALUE1')+","+this.getFieldValue('VALUE2');
};
