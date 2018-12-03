Blockly.Blocks["mutation_container"] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("Mutator_Sub");
    this.appendStatementInput('STACK');
    this.contextMenu = false;
  }
};

Blockly.Blocks["error_with_item"] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("Input");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.contextMenu = false;
  }
};

Blockly.Blocks["message_with_item"] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("List");
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
      .appendField("BoardEvent.ERROR");
    this.appendStatementInput("do_error");
    this.appendDummyInput()
      .appendField("BoardEvent.STRING_MESSAGE");
    this.appendStatementInput("do_message");
    this.appendDummyInput()
      .appendField("BoardEvent.READY");
    this.appendStatementInput("do_ready");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.getField('samplingInterval').setValue('250');
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
    var containerBlock = workspace.newBlock('mutation_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    
    for (var k = 0; k < this.list.length; k++) {
      if (this.list[k]=="input") {
        var itemBlock_input = workspace.newBlock('error_with_item');
        itemBlock_input.initSvg();
        connection.connect(itemBlock_input.previousConnection);
        connection = itemBlock_input.nextConnection;
      } else if (this.list[k]=="list") {
        var itemBlock_list = workspace.newBlock('message_with_item');
        itemBlock_list.initSvg();
        connection.connect(itemBlock_list.previousConnection);
        connection = itemBlock_list.nextConnection;
      }
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    this.errorCount = 0;
    this.messageCount = 0;
    this.list = [];
    var inputConnections = [null];
    var listConnections = [null];
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'error_with_item':
          this.errorCount++;
          this.list.push("input");
          inputConnections.push(clauseBlock.inputConnection_);
          break;
        case 'message_with_item':
          this.messageCount++;
          this.list.push("list");
          listConnections.push(clauseBlock.listConnection_);
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    
    this.updateShape_();
    
    if (this.errorCount>0) {
      for (var i = 1; i <= this.errorCount; i++)
          Blockly.Mutator.reconnect(inputConnections[i], this, 'input' + i);
    }
    if (this.messageCount>0) {
      for (var j = 1; j <= this.messageCount; j++)
          Blockly.Mutator.reconnect(listConnections[j], this, 'list' + j);
    }
  },
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 1;
    var j = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'error_with_item':
          var input = this.getInput('input' + i);
          clauseBlock.inputConnection_ =
              input && input.connection.targetConnection;
          i++;
          break;
        case 'message_with_item':
          var list = this.getInput('list' + j);
          clauseBlock.listConnection_ =
              list && list.connection.targetConnection;
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
    var i = 1;
    while (this.getInput('input' + i)) {
      this.removeInput('input' + i);
      i++;
    }
    var j = 1;
    while (this.getInput('list' + j)) {
      this.removeInput('list' + j);
      j++;
    }    
    i=1;
    j=1;
    for (var k = 0; k < this.list.length; k++) {
      if (this.list[k]=="input") {
        this.appendValueInput('input' + i)
            .appendField('input' + i);
        i++;
      } else if (this.list[k]=="list") {
        this.appendStatementInput('list' + j)
            .appendField('list' + j);
        j++;
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
