Blockly.Blocks["test_fieldDropdownFilter"] = {
  init: function() {
	var options = ['','aaa','abc','add','bbb','bcd','ccc','def','deg'];
    this.appendDummyInput()
        .appendField('Filter')
        .appendField(new CustomFields.FieldFilter('', options), 'FILTER');
    this.setStyle('loop_blocks');
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	
  }
};

Blockly.Arduino['test_fieldDropdownFilter'] = function(block) {
  return '';
};

Blockly.Blocks["test_fieldDropdownFilter1"] = {
  init: function() {
	this.options = [
		['',''],	
		['ap','apple'],
		['ba','banana'],
		['ch','cherry']
	];
	var options = [];
	this.options.forEach(
		element => options.push(element[0])
	);
	
	this.field = new CustomFields.FieldFilter('', options, this.validate);
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
	block.options.forEach(function(element) {
		if (element[0]==CustomFields.FieldFilter.WORDS[Number(newValue)]) {
			console.log(element[1]);
			block.setFieldValue(element[1], 'VALUE');
		}
	})
  }
};

Blockly.Arduino['test_fieldDropdownFilter1'] = function(block) {
  return '';
};
