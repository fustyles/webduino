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
    this.getField("xml").setVisible(false);		
  },
  myWorkspaceInitial: function(myWorkspace) {
	var xmlDoc = "";
	if (this.getFieldValue("xml")) {
		xmlDoc = Blockly.Xml.textToDom(this.getFieldValue("xml"));
	} else {
		var blocks = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></xml>';
		xmlDoc = Blockly.Xml.textToDom(blocks);
	}
	myWorkspace.clear();
	Blockly.Xml.domToWorkspace(xmlDoc, myWorkspace);
  },
  myWorkspaceChanged: function(myWorkspace) {
	this.setFieldValue(workspaceToCode(myWorkspace),"code");
	
	function workspaceToCode(a){var b=[];Blockly.Arduino.init(a);a=a.getTopBlocks(!0);for(var c=0,d;d=a[c];c++){var e=Blockly.Arduino.blockToCode(d);Array.isArray(e)&&(e=e[0]);e&&(d.outputConnection&&(e=Blockly.Arduino.scrubNakedValue(e),Blockly.Arduino.STATEMENT_PREFIX&&!d.suppressPrefixSuffix&&(e=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX,d)+e),Blockly.Arduino.STATEMENT_SUFFIX&&!d.suppressPrefixSuffix&&(e+=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX,d))),b.push(e))}b=b.join("\n");b=Blockly.Arduino.finish(b);b=b.replace(/^\s+\n/,"");b=b.replace(/\n\s+$/,"\n");return b=b.replace(/[ \t]+\n/g,"\n")};
	
	var xmlDom = Blockly.Xml.workspaceToDom(myWorkspace);
	var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
	this.setFieldValue(xmlText,"xml");
	this.setEnabled(true);
  }
};
