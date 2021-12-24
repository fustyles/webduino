/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Field Checkbox.
 * @author https://www.facebook.com/francefu/
 * @Update 12/24/2021 20:00 (Taiwan Standard Time)
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

CustomFields.FieldCheckbox = function(text, options, opt_id, opt_validate) {
  CustomFields.FieldCheckbox.superClass_.constructor.call(this, text, opt_validate);
  this.id = opt_id;
  this.list = options;

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
  if (!this.listHTML) {
	  this.listHTML = "";
	  for (var i=0;i<this.list.length;i++) {
		  this.listHTML += "<input type='checkbox' name='"+this.id+"' value='"+this.list[i][1]+"' title='"+this.list[i][0]+"'>"+this.list[i][0]+"<br>";
	  }
	  console.log(this.listHTML);
  }
  this.imageElement_.innerHTML = this.listHTML;
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
  var myCheckbox = document.getElementsByName(this.id);
  var result = "";
  this.listHTML = "";
  for (var i=0;i<myCheckbox.length;i++) {
	result += myCheckbox[i].checked?(myCheckbox[i].value+" "):"";
	this.listHTML += "<input type='checkbox' name='"+this.id+"' value='"+myCheckbox[i].value+"' title='"+myCheckbox[i].title+"' "+(myCheckbox[i].checked?"checked":"")+">"+myCheckbox[i].title+"<br>";
  }
  this.setEditorValue_(result.trim());
};

CustomFields.FieldCheckbox.prototype.valueToNote = function(value) {
	return value;
};

CustomFields.FieldCheckbox.prototype.noteToValue = function(text) {
  return -1;
};

CustomFields.FieldCheckbox.prototype.getText_ = function() {
  if (this.isBeingEdited_) {
    return CustomFields.FieldCheckbox.superClass_.getText_.call(this);
  }
  return this.valueToNote(this.getValue()) || null;
};

CustomFields.FieldCheckbox.prototype.getEditorText_ = function(value) {
  return this.valueToNote(value);
};

CustomFields.FieldCheckbox.prototype.getValueFromEditorText_ = function(text) {
  return this.noteToValue(text);
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