Blockly.Blocks["boardevent_mutator"] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("BoardEvent.STRING_MESSAGE")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "chkmessage");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("BoardEvent.ERROR")
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
        .appendField("BoardEvent.READY");   
    this.appendStatementInput("do_message")
        .appendField("BoardEvent.STRING_MESSAGE","title_message");
    this.appendStatementInput("do_error")
        .appendField("BoardEvent.ERROR","title_error");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.getField('samplingInterval').setValue('250');
    this.messageVisible_= false;
    this.errorVisible_= false;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['boardevent_mutator']));
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
    this.messageVisible_ = (xmlElement.getAttribute('message')=="true");
    this.errorVisible_ = (xmlElement.getAttribute('error')=="true");
    this.updateShape_();
    console.log("domToMutation");
    console.log(this.messageVisible_);
    console.log(this.errorVisible_); 
  },
  decompose: function (workspace) {
    console.log("decompose");
    console.log(this.messageVisible_);
    console.log(this.errorVisible_);        
    var containerBlock = workspace.newBlock('boardevent_mutator');
    containerBlock.setFieldValue(new Blockly.FieldCheckbox(this.messageVisible_), "chkmessage");
    containerBlock.setFieldValue(new Blockly.FieldCheckbox(this.errorVisible_), "chkerror");
    containerBlock.initSvg();
  
    return containerBlock;
  },
  compose: function(containerBlock) {
    this.messageVisible_ = (containerBlock.getFieldValue("chkmessage")=="TRUE");
    this.errorVisible_ = (containerBlock.getFieldValue("chkerror")=="TRUE");
    this.updateShape_();
    Blockly.Mutator.reconnect(containerBlock.messageConnection_, this, 'chkmessage');
    Blockly.Mutator.reconnect(containerBlock.errorConnection_, this, 'chkerror');
    console.log("compose");
    console.log(this.messageVisible_);
    console.log(this.errorVisible_);    
  },
  saveConnections: function(containerBlock) {
    var message = this.getInput('chkmessage');
    containerBlock.messageConnection_ = message && message.connection.targetConnection;
    var error = this.getInput('chkerror');
    containerBlock.errorConnection_ = error && error.connection.targetConnection;
    console.log("saveConnections");
    console.log(this.messageVisible_);
    console.log(this.errorVisible_);      
  },
  updateShape_: function() {
    console.log("updateShape_");
    console.log(this.messageVisible_);
    console.log(this.errorVisible_);
    if (this.getInput('do_message')) this.removeInput('do_message');
    if (this.getInput('do_error')) this.removeInput('do_error');
    if (this.messageVisible_) {
      this.appendStatementInput("do_message")
          .appendField("BoardEvent.STRING_MESSAGE","title_message");
    }
    if (this.errorVisible_) {
      this.appendStatementInput("do_error")
          .appendField("BoardEvent.ERROR","title_error");
    }
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
