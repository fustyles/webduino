// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['dropdown'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("List1")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown")
        .appendField("List2")
        .appendField(new Blockly.FieldDropdown([["A1","A1"], ["A2","A2"]]), "DropdownA")
        .appendField(new Blockly.FieldDropdown([["B1","B1"], ["B2","B2"]]), "DropdownB")
        .appendField("List3")
        .appendField(new Blockly.FieldDropdown([["A1_1","A1_1"], ["A1_2","A1_2"]]), "DropdownA1")
        .appendField(new Blockly.FieldDropdown([["A2_1","A2_1"], ["A2_2","A2_2"]]), "DropdownA2")
        .appendField(new Blockly.FieldDropdown([["B1_1","B1_1"], ["B1_2","B1_2"]]), "DropdownB1")
        .appendField(new Blockly.FieldDropdown([["B2_1","B2_1"], ["B2_2","B2_2"]]), "DropdownB2");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.updateShape_('refresh','<mutation d="A" da="A1" db="" da1="A1_1" da2="" db1="" db2=""></mutation>');
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('d', this.getFieldValue('Dropdown')+"");
    container.setAttribute('da', this.getFieldValue('DropdownA')+"");
    container.setAttribute('db', this.getFieldValue('DropdownB')+"");
    container.setAttribute('da1', this.getFieldValue('DropdownA1')+"");
    container.setAttribute('da2', this.getFieldValue('DropdownA2')+"");
    container.setAttribute('db1', this.getFieldValue('DropdownB1')+"");
    container.setAttribute('db2', this.getFieldValue('DropdownB2')+"");
    return container;
  },
  domToMutation: function (xmlElement) {
    this.getField('Dropdown').setValue(xmlElement.getAttribute('d'));
    this.getField('DropdownA').setValue(xmlElement.getAttribute('da'));
    this.getField('DropdownA1').setValue(xmlElement.getAttribute('da1'));
    this.getField('DropdownA2').setValue(xmlElement.getAttribute('da2'));
    this.getField('DropdownB').setValue(xmlElement.getAttribute('db'));
    this.getField('DropdownB1').setValue(xmlElement.getAttribute('db1'));
    this.getField('DropdownB2').setValue(xmlElement.getAttribute('db2'));
    this.updateShape_("refresh",xmlElement);
  },
  onchange: function (event) {
    if (event.element=="field") {
      if ((this.id==event.blockId)&&(event.name.indexOf("Dropdown")!=-1)) {
        this.updateShape_(event.name,"");
      }
    }
  },
  updateShape_: function(name,xmlElement) {  
    if ((name=='Dropdown')&&(this.getFieldValue('Dropdown')=='A')) {
      this.getField('DropdownA').setValue("");
      this.getField('DropdownA').setVisible(true);
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(true);
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB').setValue("");
      this.getField('DropdownB').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
    } else if ((name=='Dropdown')&&(this.getFieldValue('Dropdown')=='B')) {
      this.getField('DropdownB').setValue("");
      this.getField('DropdownB').setVisible(true);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(true);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
      this.getField('DropdownA').setValue("");
      this.getField('DropdownA').setVisible(false);
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(false);
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
    }
    if ((name=='DropdownA')&&(this.getFieldValue('DropdownA')=='A1')) {
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(true);
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
    } else if ((name=='DropdownA')&&(this.getFieldValue('DropdownA')=='A2')) {
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(true);
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
    } else if ((name=='DropdownB')&&(this.getFieldValue('DropdownB')=='B1')) {
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(true);
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(false);
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
    } else if ((name=='DropdownB')&&(this.getFieldValue('DropdownB')=='B2')) {
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(true);
      
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(false);
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
    }    
    if (name=='refresh') {
      console.log(xmlElement);
      console.log(xmlElement.getAttribute('db2'));
      this.getField('DropdownA').setVisible(xmlElement.getAttribute('da')!="");
      this.getField('DropdownB').setVisible(xmlElement.getAttribute('db')!="");
      this.getField('DropdownA1').setVisible(xmlElement.getAttribute('da1')!="");
      this.getField('DropdownA2').setVisible(xmlElement.getAttribute('da2')!="");
      this.getField('DropdownB1').setVisible(xmlElement.getAttribute('db1')!="");
      this.getField('DropdownB2').setVisible(xmlElement.getAttribute('db2')!="");
    } 
    this.setNextStatement(true);
  }
};
