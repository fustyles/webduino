Blockly.Blocks["test_fieldCheckbox"] = {
  init: function() {
    this.options1 = [
        ['aaa','a'],
        ['bbb','b'],
        ['ccc','c']
    ];
    this.appendDummyInput()
        .appendField('Checkbox1')	
        .appendField(new CustomFields.FieldCheckbox('', this.options1, this.id+"_1"), 'myCheckbox1');
		
    this.options2 = [
        ['ddd','d'],
        ['eee','e'],
        ['fff','f']
    ];
    this.appendDummyInput()
        .appendField('Checkbox2')		
        .appendField(new CustomFields.FieldCheckbox('', this.options2, this.id+"_2"), 'myCheckbox2');
	  
    this.setStyle('loop_blocks');
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	
  }
};

Blockly.JavaScript['test_fieldCheckbox'] = function(block) {
  return '';
};
