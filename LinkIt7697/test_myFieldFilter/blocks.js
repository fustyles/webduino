Blockly.Blocks["test_fieldDropdownFilter"] = {
  init: function() {
	var options = ["","aaa","abc","add","bbb","bcd","ccc","def","deg"];
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
