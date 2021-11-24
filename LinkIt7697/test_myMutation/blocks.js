/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Mutator.
 * @author https://www.facebook.com/francefu/
 * @Update 11/24/2021 20:30 (Taiwan Standard Time)
 */



Blockly.Blocks["mutation_test"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hello World");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(""), "xml");	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(""), "code");
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);  
	
    this.setMutator(new Blockly.myMutator(["controls_if","logic_compare","math_number"]));
	
    this.getField("xml").setVisible(false);
    var initBlocks = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></xml>';
    this.setFieldValue(initBlocks,"xml");
	  
    this.getField("code").setVisible(false);
    this.setFieldValue('if (0 > 0) {\n}\n',"code");
  },
  myWorkspaceInitial: function(myWorkspace) {
	var xmlDoc = Blockly.Xml.textToDom(this.getFieldValue("xml"));
	myWorkspace.clear();
	Blockly.Xml.domToWorkspace(xmlDoc, myWorkspace);
  },
  myWorkspaceChanged: function(myWorkspace) {
	var xmlDom = Blockly.Xml.workspaceToDom(myWorkspace);
	var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
	this.setFieldValue(xmlText,"xml");
	  
	this.setFieldValue(Blockly.Arduino.myMutatorWorkspaceToCode(myWorkspace),"code");
  }
};
