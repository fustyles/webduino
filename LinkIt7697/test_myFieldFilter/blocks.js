/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Field Filter.
 * @author https://www.facebook.com/francefu/
 * @Update 10/10/2022 21:00 (Taiwan Standard Time)
 */

Blockly.Blocks["test_fieldFilter"] = {
  init: function() {
	this.options = ['','aaa','abc','add','bbb','bcd','ccc','def','deg'];
    this.appendDummyInput()
        .appendField('Filter')
        .appendField(new fuFilterFields.eventparam('', this.options), 'FILTER');
    this.setStyle('loop_blocks');
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	
  }
};

Blockly.Blocks["test_fieldFilter1"] = {
  init: function() {
	this.options = [
		['',''],	
		['ap','apple'],
		['ba','banana'],
		['ch','cherry']
	];
	
	this.field = new fuFilterFields.eventparam('', this.options, this.validate);
    this.appendDummyInput()
        .appendField('Filter')
        .appendField(this.field, 'FILTER');
		
    this.appendDummyInput()
        .appendField('', 'VALUE');
    this.setStyle('loop_blocks');
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="") {
		if (block.field.WORDS) {
			if (block.field.WORDS.length>0) {
				block.options.forEach(function(element) {
					if (element[0]==block.field.WORDS[0]) {
						block.setFieldValue(element[1], 'VALUE');
					}
				})				
			}
		}
		else
			block.setFieldValue('', 'VALUE');
	}
	else {
		block.options.forEach(function(element) {
			if (element[0]==block.field.WORDS[Number(newValue)]) {
				block.setFieldValue(element[1], 'VALUE');
			}
		})
	}
  }
};



Blockly.JavaScript['test_fieldFilter'] = function(block) {
  return '';
};

Blockly.JavaScript['test_fieldFilter1'] = function(block) {
  return this.getFieldValue('VALUE');
};
