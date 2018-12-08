// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['dropdown'] = {
  init: function () {
    this.Dropdown="A";
    this.appendDummyInput()
        .appendField("List1")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown1")
        .appendField("List2")
        .appendField(new Blockly.FieldDropdown([["A1","A1"], ["A2","A2"]]), "Dropdown2")
        .appendField(new Blockly.FieldDropdown([["B1","B1"], ["B2","B2"]]), "Dropdown3");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.updateShape_();
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
    if (event.element=="selected") {
      this.Dropdown = this.getFieldValue('Dropdown1');
      this.updateShape_();
    }
  },
  updateShape_: function() {  
    if (this.Dropdown=="A") {
      this.getField('Dropdown2').setVisible(true);
      this.getField('Dropdown3').setValue("");
      this.getField('Dropdown3').setVisible(false);
    }
    else if (this.Dropdown=="B") {
      this.getField('Dropdown2').setValue("");
      this.getField('Dropdown2').setVisible(false);
      this.getField('Dropdown3').setVisible(true);
    }
    this.setNextStatement(true);
  }
};
