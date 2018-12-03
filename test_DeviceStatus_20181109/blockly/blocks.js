Blockly.Blocks["mutation_container"] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("BoardEvent");
    this.appendStatementInput('STACK');
    this.contextMenu = false;
  }
};

Blockly.Blocks["error_with_item"] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("event.Error");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.contextMenu = false;
  }
};

Blockly.Blocks["message_with_item"] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("Message");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
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
    this.appendDummyInput()
      .appendField("");
    this.appendDummyInput()
      .appendField("BoardEvent.READY");
    this.appendStatementInput("do_ready"); 
    this.appendDummyInput()
        .appendField("BoardEvent.ERROR","title_error");
    this.appendStatementInput("do_error");
    this.appendDummyInput()
        .appendField("BoardEvent.STRING_MESSAGE","title_message");
    this.appendStatementInput("do_message");    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.getField('samplingInterval').setValue('250');
    this.errorCount = 0;
    this.messageCount = 0;
    this.list = [];
    this.updateShape_();    
    this.setMutator(new Blockly.Mutator(['error_with_item','message_with_item']));
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('errorCount', this.errorCount);
    container.setAttribute('messageCount', this.messageCount);
    container.setAttribute('list', this.list);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.errorCount = parseInt(xmlElement.getAttribute('errorCount'), 10);
    this.messageCount = parseInt(xmlElement.getAttribute('messageCount'), 10);
    this.list = xmlElement.getAttribute('list').split(",");
    this.updateShape_();
  },
  decompose: function (workspace) {
    console.log("decompose");
    var containerBlock = workspace.newBlock('mutation_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    
    for (var k = 0; k < this.list.length; k++) {
      if (this.list[k]=="error") {
        var itemBlock_input = workspace.newBlock('error_with_item');
        itemBlock_input.initSvg();
        connection.connect(itemBlock_input.previousConnection);
        connection = itemBlock_input.nextConnection;
      } else if (this.list[k]=="message") {
        var itemBlock_list = workspace.newBlock('message_with_item');
        itemBlock_list.initSvg();
        connection.connect(itemBlock_list.previousConnection);
        connection = itemBlock_list.nextConnection;
      }
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    console.log("compose");
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    this.errorCount = 0;
    this.messageCount = 0;
    this.list = [];
    var inputConnections = [null];
    var listConnections = [null];
    var i=0;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'error_with_item':
          if (this.errorCount==0) {
            this.errorCount++;
            this.list.push("error");
            inputConnections.push(clauseBlock.inputConnection_);
          }
          i++;
          break;
        case 'message_with_item':
          if (this.messageCount==0) { 
            this.messageCount++;
            this.list.push("message");
            listConnections.push(clauseBlock.listConnection_);
          }
          i++;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    
    this.updateShape_();
    
    if (this.errorCount==1)
      Blockly.Mutator.reconnect(inputConnections[1], this, 'do_error');
    if (this.messageCount==1) 
      Blockly.Mutator.reconnect(listConnections[1], this, 'do_message');
    
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    
    for (var k = 0; k < this.list.length; k++) {
      if (this.list[k]=="error") {
        var itemBlock_input = workspace.newBlock('error_with_item');
        itemBlock_input.initSvg();
        connection.connect(itemBlock_input.previousConnection);
        connection = itemBlock_input.nextConnection;
      } else if (this.list[k]=="message") {
        var itemBlock_list = workspace.newBlock('message_with_item');
        itemBlock_list.initSvg();
        connection.connect(itemBlock_list.previousConnection);
        connection = itemBlock_list.nextConnection;
      }
    }
  },
  saveConnections: function(containerBlock) {
    console.log("saveConnections");
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    var j = 0;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'error_with_item':
          if (i==0) {
            var input = this.getInput('do_error');
            clauseBlock.inputConnection_ =
                input && input.connection.targetConnection;
          }
          i++;
          break;
        case 'message_with_item':
          if (i==0) {
            var list = this.getInput('do_message');
            clauseBlock.listConnection_ =
                list && list.connection.targetConnection;
          }
          j++;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function() {
    console.log("updateShape_");
    this.getField('title_error').setVisible(false);
    this.getInput('do_error').setVisible(false);
    this.getField('title_message').setVisible(false);
    this.getInput('do_message').setVisible(false);
      
    for (var k = 0; k < this.list.length; k++) {
      if (this.list[k]=="error") {
        this.getField('title_error').setVisible(true);
        this.getInput('do_error').setVisible(true);
      } else if (this.list[k]=="message") {
        this.getField('title_message').setVisible(true);
        this.getInput('do_message').setVisible(true);
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
