// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks["ready_with_item"] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("Ready");
    this.contextMenu = false;
  }
};

Blockly.Blocks["message_with_item"] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("Message");
    this.setNextStatement(true);
    this.contextMenu = false;
  }
};

Blockly.Blocks["error_with_item"] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("Error");
    this.setPreviousStatement(true);
    this.contextMenu = false;
  }
};

Blockly.Blocks['boardevent'] = {
  init: function () {
    this.appendValueInput("device")
      .setCheck("String")
      .appendField("Sampling Interval (ms)")
      .appendField(new Blockly.FieldDropdown([["20","20"], ["50","50"], ["75","75"], ["100","100"], ["250","250"], ["500","500"], ["1000","1000"]]), "samplingInterval")
      .appendField("    Device ID");
    this.appendDummyInput();
    this.appendDummyInput()
      .appendField("BoardEvent.READY");
    this.appendStatementInput("do_ready"); 
    this.appendDummyInput()
        .appendField("BoardEvent.STRING_MESSAGE","title_message");
    this.appendStatementInput("do_message");      
    this.appendDummyInput()
        .appendField("BoardEvent.ERROR","title_error");
    this.appendStatementInput("do_error");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.getField('samplingInterval').setValue('250');
    this.list = ["message","error"];
    this.updateShape_();    
    this.setMutator(new Blockly.Mutator(['ready_with_item','message_with_item','error_with_item']));
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('list', this.list);
    return container;
  },
  domToMutation: function (xmlElement) {
    if (xmlElement.getAttribute('list')!="")
      this.list = xmlElement.getAttribute('list').split(",");
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('ready_with_item');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    
    for (var i=0  ; i < this.list.length ; i++) {
      if (this.list[i]=="message") {
        var itemBlock_input = workspace.newBlock('message_with_item');
        itemBlock_input.initSvg();
        connection.connect(itemBlock_input.previousConnection);
        connection = containerBlock.nextConnection;        
      } else if (this.list[i]=="error") {
        var containerBlock = workspace.newBlock('error_with_item');  
        itemBlock_input.initSvg();
        connection.connect(itemBlock_input.previousConnection);
        connection = containerBlock.nextConnection;  
      }
    }
    this.updateShape_();
    return containerBlock;
  },
  compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var errorCount = 0;
    var messageCount = 0;
    this.list = [];
    var errorConnections = [null];
    var messageConnections = [null];
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'message_with_item':
          messageCount++;
          this.list.unshift("message");
          messageConnections.push(clauseBlock.messageConnection_);
          break;          
        case 'error_with_item':
          errorCount++;
          this.list.push("error");
          errorConnections.push(clauseBlock.errorConnection_);
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    
    this.updateShape_();
    
    if (messageCount==1) 
      Blockly.Mutator.reconnect(messageConnections[1], this, 'do_message');    
    if (errorCount==1)
      Blockly.Mutator.reconnect(errorConnections[1], this, 'do_error');
  },
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var errorCount = 0;
    var messageCount = 0;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'message_with_item':
          messageCount++;
          var message = this.getInput('do_message');
          clauseBlock.messageConnection_ =
              message && message.connection.targetConnection;
          break;          
        case 'error_with_item':
          errorCount++;
          var error = this.getInput('do_error');
          clauseBlock.errorConnection_ =
              error && error.connection.targetConnection;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function() {
    this.getField('title_message').setVisible(false);
    this.getInput('do_message').setVisible(false);    
    this.getField('title_error').setVisible(false);
    this.getInput('do_error').setVisible(false);
      
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i]=="message") {
        this.getField('title_message').setVisible(true);
        this.getInput('do_message').setVisible(true);
      } else if (this.list[i]=="error") {
        this.getField('title_error').setVisible(true);
        this.getInput('do_error').setVisible(true);
      } 
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
