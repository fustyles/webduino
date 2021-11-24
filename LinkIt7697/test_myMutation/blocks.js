Blockly.Blocks["mutation_test"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hello World");	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(""), "code");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(""), "xml");
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);  
	
    this.setMutator(new Blockly.myMutator(["controls_if","logic_compare","math_number"]));
	
	this.getField("code").setVisible(false);
	this.setFieldValue('if (0 > 0) {\n}\n',"code");
	
	this.getField("xml").setVisible(false);
	var initBlocks = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></xml>';
	this.setFieldValue(initBlocks,"xml");
  },
  myWorkspaceInitial: function(myWorkspace) {
	if (this.getFieldValue("xml")) {
		var xmlDoc = Blockly.Xml.textToDom(this.getFieldValue("xml"));
		myWorkspace.clear();
		Blockly.Xml.domToWorkspace(xmlDoc, myWorkspace);
	}
  },
  myWorkspaceChanged: function(myWorkspace) {
	this.setFieldValue(Blockly.Arduino.myMutatorWorkspaceToCode(myWorkspace),"code");
	
	var xmlDom = Blockly.Xml.workspaceToDom(myWorkspace);
	var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
	this.setFieldValue(xmlText,"xml");
  }
};
