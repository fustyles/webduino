Blockly.Blocks["test_fieldDropdownFilter"] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Filter')
        .appendField(new CustomFields.FieldFilter(''), 'FILTER');
    this.setStyle('loop_blocks');
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	
  }
};

Blockly.Arduino['test_fieldDropdownFilter'] = function(block) {
  return '';
};
