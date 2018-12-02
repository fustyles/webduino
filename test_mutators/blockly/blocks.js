Blockly.Blocks["mutators_test"] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.inputcount = 1;
    this.updateShape_();    
    this.setMutator(new Blockly.Mutator(['input_value_with_item']));
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('inputcount', this.inputcount);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.inputcount = parseInt(xmlElement.getAttribute('inputcount'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('input_value_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.inputcount ; i++) {
      var itemBlock = workspace.newBlock('input_value_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.inputcount ; i++) {
      var connection = this.getInput('input_value' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.inputcount = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.inputcount ; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'input_value' + i);
    }
  },
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('input_value' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField("Mutator");
    }
    // Add new inputs.
    for (var i = 0; i < this.inputcount ; i++) {
      if (!this.getInput('input_value' + i)) {
        var input = this.appendValueInput('input_value' + i);
        input.appendField('input_value' + i);
      }
    }
    // Remove deleted inputs.
    while (this.getInput('input_value' + i)) {
      this.removeInput('input_value' + i);
      i++;
    }
  }
};

Blockly.Blocks["input_value_with_container"] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("Mutator_Sub");
    this.appendStatementInput('STACK');
    this.contextMenu = false;
  }
};

Blockly.Blocks["input_value_with_item"] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("Input_value");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.contextMenu = false;
  }
};
