var list = [
	["a","aaa"],
	["a","abc"],	
	["b","bbb"],
	["b","bcd"]
];

Blockly.Blocks["multidropdown_test"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hello World");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(this.getParentOptions, this.validate),"S1");
    this.appendDummyInput("second")
        .appendField(new Blockly.FieldDropdown([["",""]]),"S2");		
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
	 return opt;
  },
  validate: function(newValue) {
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
	 sourceBlock.getInput("second").removeField("S2");
	 sourceBlock.getInput("second").appendField(new Blockly.FieldDropdown(opt),"S2");
  }  
};