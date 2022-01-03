/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Field Checkbox.
 * @author https://www.facebook.com/francefu/
 * @Update 1/1/2022 09:00 (Taiwan Standard Time)
 */
 
 /*
 //blocks.js
 
Blockly.Blocks["test_FieldCheckbox"] = {
  init: function() {
	this.options = [
		['aaa','a'],
		['bbb','b'],
		['ccc','c']
	];
	this.appendDummyInput()
            .appendField(new CustomFields.FieldCheckbox('', options, this.id), 'myCheckbox');
		
	etc...
  }
};
 */


var CustomFields = CustomFields || {};

CustomFields.FieldCheckbox = function(text, options, id, opt_validate) {
  CustomFields.FieldCheckbox.superClass_.constructor.call(this, text, opt_validate);
  this.id = id;
  this.list = options;
  this.listChecked = [];

  this.setSpellcheck(false);
  this.clickWrapper_ = null;
  this.downWrapper_ = null;	
};
Blockly.utils.object.inherits(CustomFields.FieldCheckbox, Blockly.FieldTextInput);

CustomFields.FieldCheckbox.fromJson = function(options) {
  return new CustomFields.FieldCheckbox(options['FieldCheckbox']);
};

CustomFields.FieldCheckbox.prototype.showEditor_ = function() {
  CustomFields.FieldCheckbox.superClass_.showEditor_.call(this);

  var div = Blockly.WidgetDiv.DIV;
  if (!div.firstChild) {
    return;
  }
  var editor = this.dropdownCreate_();
  Blockly.DropDownDiv.getContentDiv().appendChild(editor);

  Blockly.DropDownDiv.setColour(this.sourceBlock_.style.colourPrimary,this.sourceBlock_.style.colourTertiary);

  Blockly.DropDownDiv.showPositionedByField(
      this, this.dropdownDispose_.bind(this));

  this.clickWrapper_ =
      Blockly.bindEvent_(this.imageElement_, 'click', this,
          this.onMouseDown);
  this.downWrapper_ =
      Blockly.bindEvent_(this.imageElement_, 'mousedown', this,
          this.onMouseDown);
		  
  this.updateGraph_();
};

CustomFields.FieldCheckbox.prototype.dropdownCreate_ = function() {
  this.imageElement_ = document.createElement('div');
  this.imageElement_.id = 'FieldCheckbox';
  var height = 24.4 * this.list.length;
  this.imageElement_.style = 'border: 1px solid #ccc;height: '+height+'px;width: 150px;size: 12px;padding: 0px';  
  for (var i=0;i<this.list.length;i++) {
	  this.imageElement_.innerHTML += "<input type='checkbox' name='"+this.id+"' value='"+this.list[i][1]+"' " + (this.listChecked?this.listChecked[i]:"") +">"+this.list[i][0]+"<br>";
  }
  return this.imageElement_;
};

CustomFields.FieldCheckbox.prototype.dropdownDispose_ = function() {
  if (this.clickWrapper_) {
    Blockly.unbindEvent_(this.clickWrapper_);
    this.clickWrapper_ = null;
  }
  if (this.downWrapper_) {
    Blockly.unbindEvent_(this.downWrapper_);
    this.downWrapper_ = null;
  }  
  this.imageElement_ = null;
};

CustomFields.FieldCheckbox.prototype.hide_ = function() {
  Blockly.WidgetDiv.hide();
  Blockly.DropDownDiv.hideWithoutAnimation();
};

CustomFields.FieldCheckbox.prototype.onMouseDown = function(e) {
  var result = "";
  this.listChecked = [];
  var myCheckboxs = document.getElementsByName(this.id);
  for (var i=0;i<myCheckboxs.length;i++) {
	result += myCheckboxs[i].checked?(myCheckboxs[i].value+" "):"";
	this.listChecked.push(myCheckboxs[i].checked?"checked":"");
  }
  this.setEditorValue_(result.trim());
};

CustomFields.FieldCheckbox.prototype.getText_ = function() {
  if (this.isBeingEdited_) {
    return CustomFields.FieldCheckbox.superClass_.getText_.call(this);
  }
  return this.getValue() || null;
};

CustomFields.FieldCheckbox.prototype.getEditorText_ = function(value) {
  return value;
};

CustomFields.FieldCheckbox.prototype.getValueFromEditorText_ = function(text) {
  return text;
};

CustomFields.FieldCheckbox.prototype.render_ = function() {
  CustomFields.FieldCheckbox.superClass_.render_.call(this);
  this.updateGraph_();
};

CustomFields.FieldCheckbox.prototype.updateGraph_ = function() {
  if (!this.imageElement_) {
    return;
  }
};

CustomFields.FieldCheckbox.prototype.doClassValidation_ = function(opt_newValue) {
  if (opt_newValue === null || opt_newValue === undefined) {
    return null;
  }
  return opt_newValue;
};
