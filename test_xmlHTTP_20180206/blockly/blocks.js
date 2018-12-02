//**************************************************************************
//Definition of the enable block (optional connection depending on checkbox)
//**************************************************************************
Blockly.Blocks['en'] = {
  init: function() {
    this.setInputsInline(false);
    this.appendDummyInput()
       .appendField("Unit")
       .appendField(new Blockly.FieldTextInput("C01"), "ENName");
    this.appendDummyInput()
       .appendField("PX")
       .appendField(new Blockly.FieldCheckbox("TRUE"), 'HasPX');
    this.setPreviousStatement(true, ["C", "EN"]);
    this.setNextStatement(true, ["C", "EN"]);
    this.setColour(40);
  },
  /**
   * Create XML to represent whether the 'pxchecked' should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var pxchecked = (this.getFieldValue('HasPX') == 'TRUE');
    container.setAttribute('pxchecked', pxchecked);
    return container;
  },
  /**
   * Parse XML to restore the 'pxchecked'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var pxchecked = (xmlElement.getAttribute('pxchecked') == 'true');
    this.updateShape_(pxchecked);
  },
  /**
   * Modify this block to have (or not have) an input for 'HasPX'.
   * @param {boolean} pxchecked True if this block HasPX is pxchecked.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(pxchecked) {
    // Add or remove a Value Input.
    if (pxchecked) {
      this.appendValueInput("PX");
    } else {
      if (this.childBlocks_.length > 0) {
        for (var i = 0; i < this.childBlocks_.length; i++) {
          if (this.childBlocks_[i].type == 'px') {
            this.childBlocks_[i].unplug();
            break;
          }
        }
      }
      this.removeInput('PX');
    }
  }
};
