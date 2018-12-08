// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['boardevent'] = {
  init: function () {
    this.Dropdown1="A";
    this.listA = ["A1","A1"], ["A2","A2"];
    this.listA = ["B1","B1"], ["B2","B2"];
    this.appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown1");
    this.appendField(new Blockly.FieldDropdown([this.listA]), "Dropdown2");
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
  updateShape_: function() {
    if (this.getField('Dropdown2')) this.removeField('Dropdown2');
    if (this.Dropdown1=="A")
      this.appendField(new Blockly.FieldDropdown([this.listA]), "Dropdown2");
    else if (this.Dropdown1=="B")
      this.appendField(new Blockly.FieldDropdown([this.listB]), "Dropdown2");
  }
};
