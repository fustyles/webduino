// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['boardevent'] = {
  init: function () {
    this.Dropdown1="A";
    this.listA = ["A1","A1"], ["A2","A2"];
    this.listA = ["B1","B1"], ["B2","B2"];
    this.appendValueInput("device")
      .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown1");
    this.appendValueInput("device")
      .appendField(new Blockly.FieldDropdown([this.listA]), "Dropdown2");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.updateShape_();
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('Dropdown1', this.getField('Dropdown1').getValue());
    return container;
  },
  domToMutation: function (xmlElement) {
    this.Dropdown1 = xmlElement.getAttribute('Dropdown1');
    this.updateShape_();
  },
  decompose: function (workspace) {      
    var containerBlock = workspace.newBlock('boardevent_mutator');
    containerBlock.setFieldValue(this.messageVisible_, "chkmessage");
    containerBlock.setFieldValue(this.errorVisible_, "chkerror");
    containerBlock.initSvg();
    return containerBlock;
  },
  updateShape_: function() {
    if (this.getInput('do_message')) this.removeInput('do_message');
    if (this.getInput('do_error')) this.removeInput('do_error');
    if (this.messageVisible_=="TRUE") {
      this.appendStatementInput("do_message")
          .appendField("BoardEvent.STRING_MESSAGE","title_message");
    }
    if (this.errorVisible_=="TRUE") {
      this.appendStatementInput("do_error")
          .appendField("BoardEvent.ERROR","title_error");
    }
    /*
    this.getInput('do_message').setVisible(false);    
    this.getInput('do_error').setVisible(false);
      
    if (this.messageVisible_=="TRUE")
        this.getInput('do_message').setVisible(true);
    if (this.errorVisible_=="TRUE")
        this.getInput('do_error').setVisible(true);
    */
  }
};

Blockly.Blocks['boardevent_sendmessage'] = {
  init: function () {
    this.appendValueInput("cmd")
      .setCheck("String")
      .appendField("Send Command");    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  }
};

Blockly.Blocks['boardevent_getmessage'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Get Message");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(45);
  }
};
