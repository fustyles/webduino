Blockly.Blocks["mutators_test"] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.inputcount = 1;
    this.updateShape_();    
    this.setMutator(new Blockly.Mutator(['input_with_item','list_with_item']));
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('inputcount', this.inputcount);
    container.setAttribute('listcount', this.listcount);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.inputcount = parseInt(xmlElement.getAttribute('inputcount'), 10);
    this.listcount = parseInt(xmlElement.getAttribute('listcount'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('mutation_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.inputcount ; i++) {
      var itemBlock_input = workspace.newBlock('input_with_item');
      itemBlock_input.initSvg();
      connection.connect(itemBlock_input.previousConnection);
      connection = itemBlock_input.nextConnection;
    }
    for (var j = 0; j < this.listcount ; j++) {
      var itemBlock_list = workspace.newBlock('list_with_item');
      itemBlock_list.initSvg();
      connection.connect(itemBlock_list.previousConnection);
      if (j < this.listcount-1) connection = itemBlock_list.nextConnection;
    }    
    return containerBlock;
  },
  compose: function(containerBlock) {
    
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    this.inputcount_ = 0;
    this.listcount_ = 0;
    var inputConnections = [null];
    var listConnections = [null];
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'input_with_item':
          this.inputcount++;
          inputConnections.push(clauseBlock.inputConnection_);
          break;
        case 'list_with_item':
          this.listcount++;
          listConnections.push(clauseBlock.listConnection_);
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    
    for (var i = 1; i <= this.inputcount_; i++) {
      Blockly.Mutator.reconnect(inputConnections[i], this, 'AAA' + i);
    }
    for (var j = 1; j <= this.listcount_; j++) {
      Blockly.Mutator.reconnect(listConnections[i], this, 'BBB' + j);
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

Blockly.Blocks["list_with_item"] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("List");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.contextMenu = false;
  }
};
