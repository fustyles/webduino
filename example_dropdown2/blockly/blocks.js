// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['dropdown'] = {
  init: function () {
    this.Dropdown="A";
    this.appendDummyInput()
        .appendField("List1")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown")
        .appendField("List2")
        .appendField(new Blockly.FieldDropdown([["A1","A1"], ["A2","A2"]]), "Dropdown1")
        .appendField(new Blockly.FieldDropdown([["B1","B1"], ["B2","B2"]]), "Dropdown2");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.updateShape_();
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('d', this.getFieldValue('Dropdown'));
    container.setAttribute('d1', this.getFieldValue('Dropdown1'));
    container.setAttribute('d2', this.getFieldValue('Dropdown2'));
    return container;
  },
  domToMutation: function (xmlElement) {
    if (xmlElement.getAttribute('d'))
      this.getField('Dropdown').setValue(xmlElement.getAttribute('d'));
    if (xmlElement.getAttribute('d1'))
      this.getField('Dropdown1').setValue(xmlElement.getAttribute('d1'));
    if (xmlElement.getAttribute('d2'))
      this.getField('Dropdown2').setValue(xmlElement.getAttribute('d2'));
    this.updateShape_();
  },
  onchange: function (event) {
    if (event.element=="field") {
      if (event.name=="Dropdown") {
        this.Dropdown = this.getFieldValue('Dropdown');
        this.updateShape_();
      }
    }
  },
  updateShape_: function() {  
    if (this.getFieldValue('Dropdown')=="A") {
      this.getField('Dropdown1').setValue("A1");
      this.getField('Dropdown1').setVisible(true);
      this.getField('Dropdown2').setValue("");
      this.getField('Dropdown2').setVisible(false);
    }
    else if (this.getFieldValue('Dropdown')=="B") {
      this.getField('Dropdown1').setValue("");
      this.getField('Dropdown1').setVisible(false);
      this.getField('Dropdown2').setValue("B1");
      this.getField('Dropdown2').setVisible(true);
    }
    this.setNextStatement(true);
  }
};
