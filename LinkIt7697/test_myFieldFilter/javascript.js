/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Field Filter.
 * @author https://www.facebook.com/francefu/
 * @Update 12/15/2021 21:00 (Taiwan Standard Time)
 */
 
 /*
 //blocks.js
 
Blockly.Blocks["test_fieldFilter"] = {
  init: function() {
	this.options = ['','aaa','abc','add','bbb','bcd','ccc','def','deg'];
    this.appendDummyInput()
        .appendField('Filter')
        .appendField(new fuFilterFields.eventparam('', this.options), 'FILTER');
    this.setStyle('loop_blocks');
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	
  }
};

Blockly.Blocks["test_fieldFilter1"] = {
  init: function() {
	this.options = [
		['',''],	
		['ap','apple'],
		['ba','banana'],
		['ch','cherry']
	];
	
	this.field = new fuFilterFields.eventparam('', this.options, this.validate);
    this.appendDummyInput()
        .appendField('Filter')
        .appendField(this.field, 'FILTER');
		
    this.appendDummyInput()
        .appendField('', 'VALUE');
    this.setStyle('loop_blocks');
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	
  },
  validate: function(newValue) {
	const block = this.sourceBlock_;
	if (newValue=="") {
		if (block.field.WORDS) {
			if (block.field.WORDS.length>0) {
				block.options.forEach(function(element) {
					if (element[0]==block.field.WORDS[0]) {
						block.setFieldValue(element[1], 'VALUE');
					}
				})				
			}
		}
		else
			block.setFieldValue('', 'VALUE');
	}
	else {
		block.options.forEach(function(element) {
			if (element[0]==block.field.WORDS[Number(newValue)]) {
				block.setFieldValue(element[1], 'VALUE');
			}
		})
	}
  }
};
 */


var fuFilterFields = fuFilterFields || {};

fuFilterFields.eventparam = function(text, options, opt_validate) {
  fuFilterFields.eventparam.superClass_.constructor.call(this, text, opt_validate);
  if (options[0].length==0)
	this.INITWORDS = Array.from(options);
  else if (options[0].length==2) {
	this.INITWORDS = [];
	for (var i=0;i<options.length;i++)
		this.INITWORDS.push(options[i][0]);
  }
  this.WORDS = this.IINITWORDS;

  this.setSpellcheck(false);
  this.clickWrapper_ = null;
  this.moveWrapper_ = null;
  this.downWrapper_ = null;	
};
Blockly.utils.object.inherits(fuFilterFields.eventparam, Blockly.FieldTextInput);

fuFilterFields.eventparam.fromJson = function(options) {
  return new fuFilterFields.eventparam(options['fuFilterFields']);
};

fuFilterFields.eventparam.prototype.showEditor_ = function() {
  fuFilterFields.eventparam.superClass_.showEditor_.call(this);

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

fuFilterFields.eventparam.prototype.dropdownCreate_ = function() {
  this.imageElement_ = document.createElement('div');
  this.imageElement_.id = 'eventparam';
  this.WORDS = this.INITWORDS;
  var optionsLength = this.WORDS.length;
  var height = 24.4 * optionsLength;
  this.imageElement_.style = 'border: 1px solid #ccc;height: '+height+'px;width: 150px;size: 12px;padding: 0px';
  this.imageElement_.innerHTML = this.WORDS.join("<br>");
  return this.imageElement_;
};

fuFilterFields.eventparam.prototype.dropdownDispose_ = function() {
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

fuFilterFields.eventparam.prototype.hide_ = function() {
  Blockly.WidgetDiv.hide();
  Blockly.DropDownDiv.hideWithoutAnimation();
};

fuFilterFields.eventparam.prototype.onMouseMove = function(e) {
  var bBox = this.imageElement_.getBoundingClientRect();
  var dy = e.clientY - bBox.top;
  
  var highLight = Array.from(this.WORDS);
  var note = (Math.round((dy-5)/24.5)<highLight.length)?Math.round((dy-5)/24.5):-1;
  if (note!=-1)
    highLight[note] = "<font color='white'>" + highLight[note] + "</font>";
  this.imageElement_.innerHTML = highLight.join("<br>");
};

fuFilterFields.eventparam.prototype.onMouseDown = function(e) {
  var bBox = this.imageElement_.getBoundingClientRect();
  var dy = e.clientY - bBox.top;
  var highLight = Array.from(this.WORDS);
  var note = (Math.round((dy-5)/24.5)<highLight.length)?Math.round((dy-5)/24.5):-1;
  this.setEditorValue_(note);
};

fuFilterFields.eventparam.prototype.valueToNote = function(value) {
  if (this.WORDS)
	  return this.WORDS[Number(value)];
  else
	  return "";
};

fuFilterFields.eventparam.prototype.noteToValue = function(text) {
  var normalizedText = text.trim();
  var i = this.WORDS.indexOf(normalizedText);
  this.WORDS = [];
  var words = this.WORDS;
  var initwords = this.INITWORDS;
  for (var j=0;j<initwords.length;j++) {
	if (initwords[j].toUpperCase().indexOf(normalizedText.toUpperCase())!=-1||normalizedText=="")
		words.push(initwords[j]);
  }
  if (this.WORDS.length==0) 
		words.push([""]);  
  var optionsLength = this.WORDS.length;
  var height = 24.4 * optionsLength;
  this.imageElement_.style = 'border: 1px solid #ccc;height: '+height+'px;width: 150px;;size: 12px;padding: 0px';
  this.imageElement_.innerHTML = this.WORDS.join("<br>");
  return i > -1? 0 : -1;
};

fuFilterFields.eventparam.prototype.getText_ = function() {
  if (this.isBeingEdited_) {
    return fuFilterFields.eventparam.superClass_.getText_.call(this);
  }
  return this.valueToNote(this.getValue()) || null;
};

fuFilterFields.eventparam.prototype.getEditorText_ = function(value) {
  return this.valueToNote(value);
};

fuFilterFields.eventparam.prototype.getValueFromEditorText_ = function(text) {
  return this.noteToValue(text);
};

fuFilterFields.eventparam.prototype.render_ = function() {
  fuFilterFields.eventparam.superClass_.render_.call(this);
  this.updateGraph_();
};

fuFilterFields.eventparam.prototype.updateGraph_ = function() {
  if (!this.imageElement_) {
    return;
  }
};

fuFilterFields.eventparam.prototype.doClassValidation_ = function(opt_newValue) {
  if (opt_newValue === null || opt_newValue === undefined) {
    return null;
  }
  var note = this.valueToNote(opt_newValue); 
  if (note) {
    return opt_newValue;
  }
  return "";
};
