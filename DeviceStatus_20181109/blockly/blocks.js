// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks["boardevent_mutator"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("STRING_MESSAGE")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "chkmessage");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ERROR")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "chkerror");
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['boardevent'] = {
  init: function () {
    this.appendValueInput("device")
      .setCheck("String")
      .appendField("Sampling Interval (ms)")
      .appendField(new Blockly.FieldDropdown([["20","20"], ["50","50"], ["75","75"], ["100","100"], ["250","250"], ["500","500"], ["1000","1000"]]), "samplingInterval")
      .appendField("    Device ID");
    this.appendStatementInput("do_ready")
        .appendField("READY");   
    this.appendStatementInput("do_message")
        .appendField("STRING_MESSAGE","title_message");
    this.appendStatementInput("do_error")
        .appendField("ERROR","title_error");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.getField('samplingInterval').setValue('250');
    this.messageVisible_= "TRUE";
    this.errorVisible_= "TRUE";
    this.updateShape_();
    this.setMutator(new Blockly.Mutator([]));
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    if (this.messageVisible_)
      container.setAttribute('message', this.messageVisible_);
    if (this.errorVisible_)
      container.setAttribute('error', this.errorVisible_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.messageVisible_ = xmlElement.getAttribute('message');
    this.errorVisible_ = xmlElement.getAttribute('error');
    this.updateShape_();
  },
  decompose: function (workspace) {      
    var containerBlock = workspace.newBlock('boardevent_mutator');
    containerBlock.setFieldValue(this.messageVisible_, "chkmessage");
    containerBlock.setFieldValue(this.errorVisible_, "chkerror");
    containerBlock.initSvg();
    return containerBlock;
  },
  compose: function(containerBlock) {
    this.messageVisible_ = containerBlock.getFieldValue("chkmessage");
    this.errorVisible_ = containerBlock.getFieldValue("chkerror"); 
    this.updateShape_();
    Blockly.Mutator.reconnect(containerBlock.messageConnection_, this, 'chkmessage');
    Blockly.Mutator.reconnect(containerBlock.errorConnection_, this, 'chkerror');
  },
  saveConnections: function(containerBlock) {
    var message = this.getInput('chkmessage');
    containerBlock.messageConnection_ = message && message.connection.targetConnection;
    var error = this.getInput('chkerror');
    containerBlock.errorConnection_ = error && error.connection.targetConnection; 
  },
  updateShape_: function() {
    if (this.getInput('do_message')) this.removeInput('do_message');
    if (this.getInput('do_error')) this.removeInput('do_error');
    if (this.messageVisible_=="TRUE") {
      this.appendStatementInput("do_message")
          .appendField("STRING_MESSAGE","title_message");
    }
    if (this.errorVisible_=="TRUE") {
      this.appendStatementInput("do_error")
          .appendField("ERROR","title_error");
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
