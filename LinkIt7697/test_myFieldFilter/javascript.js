/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Field Filter.
 * @author https://www.facebook.com/francefu/
 * @Update 12/2/2021 12:00 (Taiwan Standard Time)
 */
 
 /*
 //blocks.js
var options = ["","aaa","abc","add","bbb","bcd","ccc","def","deg"];	
this.appendDummyInput()
    .appendField(new CustomFields.FieldFilter('', options), 'FILTER');
 */


var CustomFields = CustomFields || {};

CustomFields.FieldFilter = function(text, options) {
  CustomFields.FieldFilter.superClass_.constructor.call(this, text);
  
  CustomFields.FieldFilter.INITWORDS = options;
  CustomFields.FieldFilter.WORDS = CustomFields.FieldFilter.INITWORDS;

  this.setSpellcheck(false);
  this.clickWrapper_ = null;
  this.moveWrapper_ = null;
  this.downWrapper_ = null;	
};
Blockly.utils.object.inherits(CustomFields.FieldFilter, Blockly.FieldTextInput);

CustomFields.FieldFilter.INITWORDS = [];
CustomFields.FieldFilter.WORDS = CustomFields.FieldFilter.INITWORDS;

CustomFields.FieldFilter.fromJson = function(options) {
  return new CustomFields.FieldFilter(options['fieldFilter']);
};

CustomFields.FieldFilter.prototype.showEditor_ = function() {
  CustomFields.FieldFilter.superClass_.showEditor_.call(this);

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
          this.hide_);
  this.moveWrapper_ =
      Blockly.bindEvent_(this.imageElement_, 'mousemove', this,
          this.onMouseMove);
  this.downWrapper_ =
      Blockly.bindEvent_(this.imageElement_, 'mousedown', this,
          this.onMouseDown);
		  
  this.updateGraph_();
};

CustomFields.FieldFilter.prototype.dropdownCreate_ = function() {
  this.imageElement_ = document.createElement('div');
  this.imageElement_.id = 'fieldFilter';
  CustomFields.FieldFilter.WORDS = CustomFields.FieldFilter.INITWORDS;
  var optionsLength = CustomFields.FieldFilter.WORDS.length;
  var height = 24.4 * optionsLength;
  this.imageElement_.style = 'border: 1px solid #ccc;height: '+height+'px;width: 150px;size: 12px;padding: 0px';
  this.imageElement_.innerHTML = CustomFields.FieldFilter.WORDS.join("<br>");
  return this.imageElement_;
};

CustomFields.FieldFilter.prototype.dropdownDispose_ = function() {
  if (this.clickWrapper_) {
    Blockly.unbindEvent_(this.clickWrapper_);
    this.clickWrapper_ = null;
  }
  if (this.moveWrapper_) {
    Blockly.unbindEvent_(this.moveWrapper_);
    this.moveWrapper_ = null;
  }
  if (this.downWrapper_) {
    Blockly.unbindEvent_(this.downWrapper_);
    this.downWrapper_ = null;
  }  
  this.imageElement_ = null;
};

CustomFields.FieldFilter.prototype.hide_ = function() {
  Blockly.WidgetDiv.hide();
  Blockly.DropDownDiv.hideWithoutAnimation();
};

CustomFields.FieldFilter.prototype.onMouseMove = function(e) {
  var bBox = this.imageElement_.getBoundingClientRect();
  var dy = e.clientY - bBox.top;
  
  var highLight = Array.from(CustomFields.FieldFilter.WORDS);
  var note = (Math.round((dy-5)/24.5)<highLight.length)?Math.round((dy-5)/24.5):-1;
  if (note!=-1)
    highLight[note] = "<font color='white'>" + highLight[note] + "</font>";
  this.imageElement_.innerHTML = highLight.join("<br>");
};

CustomFields.FieldFilter.prototype.onMouseDown = function(e) {
  var bBox = this.imageElement_.getBoundingClientRect();
  var dy = e.clientY - bBox.top;
  var highLight = Array.from(CustomFields.FieldFilter.WORDS);
  var note = (Math.round((dy-5)/24.5)<highLight.length)?Math.round((dy-5)/24.5):-1;
  this.setEditorValue_(note);
};

CustomFields.FieldFilter.prototype.valueToNote = function(value) {
  return CustomFields.FieldFilter.WORDS[Number(value)] || "";
};

CustomFields.FieldFilter.prototype.noteToValue = function(text) {
  var normalizedText = text.trim();
  var i = CustomFields.FieldFilter.WORDS.indexOf(normalizedText);
  CustomFields.FieldFilter.WORDS = [];
  var words = CustomFields.FieldFilter.WORDS;
  var initwords = CustomFields.FieldFilter.INITWORDS;
  for (var i=0;i<initwords.length;i++) {
	if (initwords[i].indexOf(normalizedText)!=-1||normalizedText=="")
		words.push(initwords[i]);
  }
  var optionsLength = CustomFields.FieldFilter.WORDS.length;
  var height = 24.4 * optionsLength;
  this.imageElement_.style = 'border: 1px solid #ccc;height: '+height+'px;width: 150px;;size: 12px;padding: 0px';
  this.imageElement_.innerHTML = CustomFields.FieldFilter.WORDS.join("<br>");
  return i > -1? i : -1;
};

CustomFields.FieldFilter.prototype.getText_ = function() {
  if (this.isBeingEdited_) {
    return CustomFields.FieldFilter.superClass_.getText_.call(this);
  }
  return this.valueToNote(this.getValue()) || null;
};

CustomFields.FieldFilter.prototype.getEditorText_ = function(value) {
  return this.valueToNote(value);
};

CustomFields.FieldFilter.prototype.getValueFromEditorText_ = function(text) {
  return this.noteToValue(text);
};

CustomFields.FieldFilter.prototype.render_ = function() {
  CustomFields.FieldFilter.superClass_.render_.call(this);
  this.updateGraph_();
};

CustomFields.FieldFilter.prototype.updateGraph_ = function() {
  if (!this.imageElement_) {
    return;
  }
};

CustomFields.FieldFilter.prototype.doClassValidation_ = function(opt_newValue) {
  if (opt_newValue === null || opt_newValue === undefined) {
    return null;
  }
  var note = this.valueToNote(opt_newValue);
  if (note) {
    return opt_newValue;
  }
  return null;
};

Blockly.fieldRegistry.register('field_filter', CustomFields.FieldFilter);
