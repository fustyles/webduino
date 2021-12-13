var workspace = Blockly.getMainWorkspace();
var flydown = new  Blockly.Flydown(new Blockly.Options({scrollbars:  true }));
workspace.flydown_ = flydown;
Blockly.utils.dom.insertAfter(flydown.createDom('g', 'rgba(0, 0, 0, 1)'), workspace.svgBubbleCanvas_);

const iconFlydown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAyCAYAAADx/eOPAAAAAXNSR0IArs4c6QAAA09JREFUaEPtmj1MFEEUgD+ggsJGiRYQbRBNIDQ2IIVwJiTkLlQeWFDTUCjaeIKF4NkoWtBQUwhnRY6QkHhggdDYEEgUaTRQaNCGAirADJu9ndufm2VvV7iJW5HjzXvve2/em5mdrcDHk/u8dexDLFKR2K2GCpWBogLnAcIOUAzKFcYN4sd32N6BvT04OvKIUZD8eYSzshIuXID6Orh6zWnPDcqhSgY5PISFBfi0DL//qJIc3f8vXYTb7dDVBVVVlh07UAGMDLK+DtPvzhbCHh4B1XcfmpvdgfIwMsjyMkxNRRfpUjX390N7uxPIASMyMjFRqrnoxw8OWhkyp9sJjJkVUSPPRs7X1PIKi5hyz0etGhJABTDz8zA7G31Uw7LQ0wPd3Ya2Exi5Vp6mwstKY6Pl8vExGGEzns3NcHBEdl6kLV15GLGOpF+GY6S3Fzo7vXUtLsLMTDi2Uk+sdSgPE2YHe/wIGq57O7v1DV69DgdG7mx5mDDrZXJS7ejAgFrGj4RcN3mYuTnIZv0MV8v8S5hEAuJxw6dAMDU1UFPtbBaiIJO90NKiBl5bg8yMu479A9jfV+sQEiXBiC41NGQYEg7lcrC9DbGYFSF/bhhSYkYIHfX1hg4zEOPj/rpeSTAjI1BXdxp3g8nu7MDoqHpsYJi7MbiXVBsIS+J9Bj7kimsLBCPqJJ2G6mp/ru7uwsYG/PppyV++Ak1NUFvrT8fBAaRSxevHHSYL2TlvI6qFUB4pjg5LH711ddwxtvJ+HtUCm4hDPGHvZgoYOQLFnHj7Br58Vbt58wY8eKiWUy0ZgWDENEsmobXV2wFVRuwjVRlaXYVMRjHNgmTGdKStzYCy146okeFhdaTtEmNjzhoStSIgVlbU+gJlRlbrtvdaWoLpabVxu0RfH3R0FP56mr1bJDCnnWKm+25T7T9Mwd5M0c20nGZaNACtWrNWi2Z5bWcUJ83y2mj6ODZrcwQwW7M2hzMBpNWxWQBp80LDz1byzF81afUSUKvXs1q9OBe1ENWVhr3OIrvSEIbMO5ow68ZPoyhVxnHZJMNocQ0oA5X9Ba0MI/4Os7OVOpXcxiuvzu1AZf1RgxkBbT43cQMyfyvLD4HkOarFJ1r2ojsPUH4+nvsLSHVosUCTiPwAAAAASUVORK5CYII=";

Blockly.Blocks["test_blocksFlydown1"] = {
	init:  function() {
		
		this.field = {};
		var fieldImageName = "imageName";
		
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(iconFlydown, 18, 18, { alt: "*", flipRtl: "FALSE" }), fieldImageName);
		var blocksXML = ['<block type="controls_if"><value name="IF0"></value></block>','<block type="logic_compare"><field name="OP">EQ</field></block>','<block type="variables_get"><field name="VAR">i</field></block>','<block type="math_number"><field name="NUM">0</field></block>'];
		this.field[fieldImageName] = new myBlocksFlydownImage.eventparam(this.getField(fieldImageName), blocksXML);
		
		this.setInputsInline(true);		
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
	}
}

Blockly.Arduino['test_blocksFlydown1'] = function(block) {
  return '';
};

Blockly.Blocks["test_blocksFlydown2"] = {
	init:  function() {
		this.field = {};
		var fieldImageName = "";
		
		fieldImageName = "imageName1";
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(iconFlydown, 18, 18, { alt: "*", flipRtl: "FALSE" }), fieldImageName);
		var blocksXML1 = ['<block type="controls_if"><value name="IF0"></value></block>','<block type="logic_compare"><field name="OP">EQ</field></block>'];
		this.field[fieldImageName] = new myBlocksFlydownImage.eventparam(this.getField(fieldImageName), blocksXML1);
		
		fieldImageName = "imageName2";
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(iconFlydown, 18, 18, { alt: "*", flipRtl: "FALSE" }), fieldImageName);
		var blocksXML2 = ['<block type="variables_get"><field name="VAR">i</field></block>','<block type="math_number"><field name="NUM">0</field></block>'];
		this.field[fieldImageName] = new myBlocksFlydownImage.eventparam(this.getField(fieldImageName), blocksXML2);
		
		this.setInputsInline(true);		
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
	}
}

Blockly.Arduino['test_blocksFlydown2'] = function(block) {
  return '';
};
