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

Blockly.Blocks["mutation_statement"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NAME");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "NAME");		
	this.appendStatementInput("STATEMENT")		
    this.setInputsInline(true);
    this.setColour(100);  
  }
};

Blockly.Blocks["mutation_preview"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NAME");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);  
	
    this.setMutator(new Blockly.myMutator([]));
  }
  ,myWorkspaceInitial: function(myWorkspace) {
		var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
		xml = new XMLSerializer().serializeToString(xml);
		xml = new DOMParser().parseFromString(xml,"text/xml").firstChild.childNodes;
		for (var i=0;i<xml.length;i++) {
			if (xml[i].getAttribute("type")=="mutation_statement") {
				if (xml[i].childNodes[0].textContent==this.getFieldValue("NAME")) {
					if (xml[i].childNodes[1]) {
						if (xml[i].childNodes[1].childNodes[0]) {
							xml = Blockly.Xml.domToText(xml[i].childNodes[1].childNodes[0], true);
							xml = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">'+xml+'</xml>');
							myWorkspace.clear();
							Blockly.Xml.domToWorkspace(xml, myWorkspace);                                                        
							break;
						}
					}
				}
			}
		}
  }
  ,myWorkspaceChanged: function(myWorkspace) {}
};

Blockly.JavaScript['mutation_preview'] = function(block) {
  return "";
};

Blockly.JavaScript['mutation_statement'] = function(block) {
  return "";
};
