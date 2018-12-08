// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['dropdown'] = {
  init: function () {
    this.Dropdown="A";
    this.listA = [["A1","A1"], ["A2","A2"]];
    this.listB = [["B1","B1"], ["B2","B2"]];
    this.appendDummyInput("d1")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown1");
    this.appendDummyInput("d2")
        .appendField(new Blockly.FieldDropdown(this.listA), "Dropdown2");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    //this.updateShape_();
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('Dropdown', this.getFieldValue('Dropdown1'));
    return container;
  },
  domToMutation: function (xmlElement) {
    if (xmlElement.getAttribute('Dropdown'))
      this.Dropdown = xmlElement.getAttribute('Dropdown');
    this.updateShape_();
  },
  onchange: function (event) {
    console.log(event.element);
    if (event.element=="selected") {
      this.Dropdown = this.getFieldValue('Dropdown1');
      this.updateShape_();
    }
  },
  updateShape_: function() {  
    if (this.getInput('d2')) this.removeInput('d2');
    
    if (this.Dropdown=="A")
      var d = new Blockly.FieldDropdown(this.listA);
    else if (this.Dropdown=="B")
      var d = new Blockly.FieldDropdown(this.listB);
    d.name = 'Dropdown2';
    this.appendDummyInput("d2")
        .appendField(d);
  }
};
