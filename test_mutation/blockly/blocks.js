
Blockly.Blocks["mutation_container"] = {
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

Blockly.Blocks["input_with_item"] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField("Input");
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

Blockly.Blocks["mutators_test"] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.inputcount = 0;
    this.listcount = 0;
    this.list = [];
    this.updateShape_();    
    this.setMutator(new Blockly.Mutator(['input_with_item','list_with_item']));
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('inputcount', this.inputcount);
    container.setAttribute('listcount', this.listcount);
    container.setAttribute('list', this.list);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.inputcount = parseInt(xmlElement.getAttribute('inputcount'), 10);
    this.listcount = parseInt(xmlElement.getAttribute('listcount'), 10);
    console.log(xmlElement.getAttribute('list'));
    this.list = xmlElement.getAttribute('list').split(",");
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
      connection = itemBlock_list.nextConnection;
    }    
    return containerBlock;
  },
  compose: function(containerBlock) {
    
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    this.inputcount = 0;
    this.listcount = 0;
    this.list = [];
    var inputConnections = [null];
    var listConnections = [null];
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'input_with_item':
          this.inputcount++;
          this.list.push("input");
          inputConnections.push(clauseBlock.inputConnection_);
          break;
        case 'list_with_item':
          this.listcount++;
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
    
    for (var i = 1; i <= this.inputcount; i++) {
      Blockly.Mutator.reconnect(inputConnections[i], this, 'input' + i);
    }
    for (var j = 1; j <= this.listcount; j++) {
      Blockly.Mutator.reconnect(listConnections[j], this, 'list' + j);
    }
  },
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 1;
    var j = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'input_with_item':
          var input = this.getInput('input' + i);
          clauseBlock.inputConnection_ =
              input && input.connection.targetConnection;
          i++;
          break;
        case 'list_with_item':
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
    // Delete everything.
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
    // Rebuild block.
    i=1;
    j=1;
    for (var k = 0; k < this.list.length; k++) {
      if (this.list[k]=="input") {
        this.appendValueInput('input' + i)
            .appendField('input' + i);
        i++;
      } else if (this.list[k]=="list") {
        this.appendValueInput('list' + j)
            .appendField('list' + j);
        j++;
      }
    }
  }
};
