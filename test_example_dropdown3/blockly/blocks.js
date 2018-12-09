// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['dropdown'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("List1")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown")
        .appendField("List2")
        .appendField(new Blockly.FieldDropdown([["A1","A1"], ["A2","A2"]]), "DropdownA")
        .appendField(new Blockly.FieldDropdown([["B1","B1"], ["B2","B2"]]), "DropdownB")
        .appendField(new Blockly.FieldDropdown([["A1_1","A1_1"], ["A1_2","A1_2"]]), "DropdownA1")
        .appendField(new Blockly.FieldDropdown([["A2_1","A2_1"], ["A2_2","A2_2"]]), "DropdownA2")
        .appendField(new Blockly.FieldDropdown([["B1_1","B1_1"], ["B1_2","B1_2"]]), "DropdownB1")
        .appendField(new Blockly.FieldDropdown([["B2_1","B2_1"], ["B2_2","B2_2"]]), "DropdownB2");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.updateShape_();
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('d', this.getFieldValue('Dropdown'));
    container.setAttribute('dA', this.getFieldValue('DropdownA'));
    container.setAttribute('dB', this.getFieldValue('DropdownB'));
    container.setAttribute('dA1', this.getFieldValue('DropdownA1'));
    container.setAttribute('dA2', this.getFieldValue('DropdownA2'));
    container.setAttribute('dB1', this.getFieldValue('DropdownB1'));
    container.setAttribute('dB2', this.getFieldValue('DropdownB2'));
    return container;
  },
  domToMutation: function (xmlElement) {
    if (xmlElement.getAttribute('d'))
      this.getField('Dropdown').setValue(xmlElement.getAttribute('d'));
    if (xmlElement.getAttribute('dA'))
      this.getField('DropdownA').setValue(xmlElement.getAttribute('dA'));
    if (xmlElement.getAttribute('dB'))
      this.getField('DropdownB').setValue(xmlElement.getAttribute('dB'));
    if (xmlElement.getAttribute('dA1'))
      this.getField('DropdownA1').setValue(xmlElement.getAttribute('dA1'));
    if (xmlElement.getAttribute('dA2'))
      this.getField('DropdownA2').setValue(xmlElement.getAttribute('dA2'));
    if (xmlElement.getAttribute('dB1'))
      this.getField('DropdownB1').setValue(xmlElement.getAttribute('dB1'));
    if (xmlElement.getAttribute('dB2'))
      this.getField('DropdownB2').setValue(xmlElement.getAttribute('dB2'));    
    this.updateShape_();
  },
  onchange: function (event) {
    if (event.element=="field") {
      if (event.name.indexOf("Dropdown")!=-1) {
        this.updateShape_();
      }
    }
  },
  updateShape_: function() {  
    if (this.getFieldValue('Dropdown')=="A") {
      this.getField('DropdownA').setValue("A1");
      this.getField('DropdownA').setVisible(true);
      this.getField('DropdownA1').setValue("A1_1");
      this.getField('DropdownA1').setVisible(true);
      
      this.getField('DropdownB').setValue("");
      this.getField('DropdownB').setVisible(false);
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
    }
    else if (this.getFieldValue('Dropdown')=="B") {
      this.getField('DropdownB').setValue("B1");
      this.getField('DropdownB').setVisible(true);
      this.getField('DropdownB1').setValue("B1_1");
      this.getField('DropdownB1').setVisible(true);
      
      this.getField('DropdownA').setValue("");
      this.getField('DropdownA').setVisible(false);
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(false);
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
    }
    else if (this.getFieldValue('Dropdown')=="A1") {
      this.getField('DropdownA1').setValue("A1_1");
      this.getField('DropdownA1').setVisible(true);
      
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
    }
    else if (this.getFieldValue('Dropdown')=="A2") {
      this.getField('DropdownA2').setValue("A2_1");
      this.getField('DropdownA2').setVisible(true);
      
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
    }    
    else if (this.getFieldValue('Dropdown')=="B1") {
      this.getField('Dropdown1_2').setValue("");
      this.getField('Dropdown1_2').setVisible(false);
      
      this.getField('Dropdown1_1').setValue("");
      this.getField('Dropdown1_1').setVisible(false);
      this.getField('Dropdown1_2').setValue("");
      this.getField('Dropdown1_2').setVisible(false);
      this.getField('Dropdown2_2').setValue("");
      this.getField('Dropdown2_2').setVisible(false);
    }    
    else if (this.getFieldValue('Dropdown')=="B2") {
      this.getField('Dropdown2_1').setValue("B2_1");
      this.getField('Dropdown2_1').setVisible(true);
      
      this.getField('Dropdown1_1').setValue("");
      this.getField('Dropdown1_1').setVisible(false);
      this.getField('Dropdown1_2').setValue("");
      this.getField('Dropdown1_2').setVisible(false);
      this.getField('Dropdown2_2').setValue("");
      this.getField('Dropdown2_2').setVisible(false);
    }      
    this.setNextStatement(true);
  }
};
