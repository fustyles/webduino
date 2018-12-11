// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['dropdown'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("List1")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown")
        .appendField("List2")
        .appendField(new Blockly.FieldDropdown([["A1","A1"], ["A2","A2"]]), "DropdownA")
        .appendField(new Blockly.FieldDropdown([["B1","B1"], ["B2","B2"]]), "DropdownB");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    this.changeList(['Dropdown','DropdownA'],['DropdownB']);
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('d', this.getFieldValue('Dropdown'));
    container.setAttribute('da', this.getFieldValue('DropdownA'));
    container.setAttribute('db', this.getFieldValue('DropdownB'));
    return container;
  },
  domToMutation: function (xmlElement) {
    this.getField('Dropdown').setValue(xmlElement.getAttribute('d'));
    this.getField('DropdownA').setValue(xmlElement.getAttribute('da'));
    this.getField('DropdownB').setValue(xmlElement.getAttribute('db'));
    this.updateShape_("refresh",xmlElement);
  },
  onchange: function (event) {
    if (event.element=="field") {
      if ((this.id==event.blockId)&&(event.name.indexOf("Dropdown")!=-1))
        this.updateShape_(event.name,"");
    }
  },
  updateShape_: function(name,xmlElement) {  
    if (name=='Dropdown') {
      if (this.getFieldValue('Dropdown')=='A') 
        this.changeList(['DropdownA'],['DropdownB']);
      else if (this.getFieldValue('Dropdown')=='B') 
        this.changeList(['DropdownB'],['DropdownA']);
    }
    else if (name=='refresh') {
      this.getField('DropdownA').setVisible(xmlElement.getAttribute('da')!="");
      this.getField('DropdownB').setVisible(xmlElement.getAttribute('db')!="");
    }
    
    this.setNextStatement(true);
  },
    changeList: function (id_display,id_hide) {
    for (var i=0;i<id_display.length;i++) {
      this.getField(id_display[i]).setValue(this.getField(id_display[i]).menuGenerator_[0][0]);
      this.getField(id_display[i]).setVisible(true);
    }
    for (var j=0;j<id_hide.length;j++) {
      this.getField(id_hide[j]).setValue("");
      this.getField(id_hide[j]).setVisible(false);
    }
  }
};
