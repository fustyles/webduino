// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['dropdown'] = {
  init: function () {
    this.Dropdown1="A";
    this.listA = [["A1","A1"], ["A2","A2"]];
    this.listB = [["B1","B1"], ["B2","B2"]];
    this.appendDummyInput("a")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown1");
    this.appendDummyInput("b")
        .appendField(new Blockly.FieldDropdown(this.listA), "Dropdown2");
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
    if (xmlElement.getAttribute('Dropdown1'))
      this.Dropdown1 = xmlElement.getAttribute('Dropdown1');
    this.updateShape_();
  },
  updateShape_: function() {
    if (this.getInput('b')) this.removeInput('b');
    if (this.Dropdown1=="A") {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([this.listA]), "b");
    }
    else if (this.Dropdown1=="B") {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([this.listB]), "b");
    }
  }
};
