/**
 * @license
 * Copyright 2013 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @license
 * Copyright 2022 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Field FieldsImageDropdown.
 * @author https://www.facebook.com/francefu/
 * @Update 9/23/2022 22:00 (Taiwan Standard Time)
 */
 
 /*
 //blocks.js
 
	Blockly.Blocks["test"] = {
	  init: function() {
		  
		var options = [
			['CLOUDY', "https://imgur.com/Hi33BEx.png"],
			['PARTLY CLOUDY', "https://imgur.com/rX0np7I.png"],
			['MOON', "https://imgur.com/ulJIWW4.png"],
			['RAIN', "https://imgur.com/wRwu4pZ.png"],
			['STAR', "https://imgur.com/KMWOcGf.png"]
		];
		var divDropdownWidth = 200;
		var divDropdownHeight = 100;		  
		  
		var imageField = new Blockly.FieldImage(options[0][1], 18, 18, { alt: "*", flipRtl: "FALSE" });
		var field = new fuFieldsImageDropdown.FieldsImageDropdown('', options, this.validate, divDropdownWidth, divDropdownHeight, imageField);
		//var field = new fuFieldsImageDropdown.FieldsImageDropdown('', options);
		
		this.appendDummyInput()
			.appendField(imageField, "image");
		this.appendDummyInput()
			.appendField(field, 'imageDropdown');
						
		this.setInputsInline(true);		
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
	  },
	  validate: function(newValue) {
	  }
	};
	
 */

document.addEventListener('DOMContentLoaded', function() {

	Blockly.Flyout.prototype.updateDisplay_=function(){
		var a=this.containerVisible_?this.isVisible():!1;
		this.svgGroup_.style.display=a?"block":"none";
		if (this.workspace_.scrollbar)
			this.workspace_.scrollbar.setContainerVisible(a)
	};

	Blockly.Flyout.prototype.clearOldBlocks_=function(){
		for(var a=this.workspace_.getTopBlocks(!1),b=0,c;c=a[b];b++)
			this.blockIsRecyclable_(c)?this.recycleBlock_(c):c.dispose(!1,!1);
		for(a=0;a<this.mats_.length;a++)
			if(b=this.mats_[a])(0,Blockly.Tooltip.unbindMouseEvents)(b),(0,Blockly.utils.dom.removeNode)(b);
		for(a=this.mats_.length=0;b=this.buttons_[a];a++)
			b.dispose();
		this.buttons_.length=0;
		if (this.workspace_.getPotentialVariableMap())
			this.workspace_.getPotentialVariableMap().clear()
	};
	
	
	//************************************************
	

	var fuFieldsImageDropdown = fuFieldsImageDropdown||{};

	fuFieldsImageDropdown.FieldsImageDropdown = function(text, options, opt_validate, opt_width, opt_height, opt_imageField) {
	  fuFieldsImageDropdown.FieldsImageDropdown.superClass_.constructor.call(this, text, opt_validate);
	  this.textSize = 14;
	  this.imageSize = 24;
	  this.divRowHeight = 30.8;    //If you change textSize value or imageSize value, you need to get divRowHeight value by testing.
	  
	  this.divWidth = opt_width||200;
	  this.divHeight = opt_height||100;
	  
	  this.divPadding = 5;
	  this.originList = options;
	  this.showList = [];
	  this.imageField = opt_imageField||null;

	  this.setSpellcheck(false);
	  this.clickWrapper_ = null;
	  this.moveWrapper_ = null;
	  this.downWrapper_ = null;	
	};
	Blockly.utils.object.inherits(fuFieldsImageDropdown.FieldsImageDropdown, Blockly.FieldTextInput);

	fuFieldsImageDropdown.FieldsImageDropdown.fromJson = function(options) {
	  return new fuFieldsImageDropdown.FieldsImageDropdown(options['FieldsImageDropdown']);
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.showEditor_ = function() {
	  fuFieldsImageDropdown.FieldsImageDropdown.superClass_.showEditor_.call(this);

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

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.dropdownCreate_ = function() {
	  this.imageElement_ = document.createElement('div');
	  this.imageElement_.id = 'FieldsImageDropdown';
	  this.imageElement_.style = 'padding: '+this.divPadding+'px '+this.divPadding+'px '+this.divPadding+'px '+this.divPadding+'px; height: '+this.divHeight+'px;width: '+this.divWidth+'px;size: '+this.textSize+'px;white-space:nowrap;';
	  this.showList = [];
	  for (var j=0;j<this.originList.length;j++) {
		this.showList.push('<img src="'+this.originList[j][1]+'" style="width:'+this.imageSize+'px;height:'+this.imageSize+'px;">' + '　' + '<span style="width: 100%;display: inline-block;vertical-align: top;line-height: normal;">' + this.originList[j][0] + '</span>');
	  }	  
	  this.imageElement_.innerHTML = this.showList.join("<br>");
	  return this.imageElement_;
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.dropdownDispose_ = function() {
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

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.hide_ = function() {
	  Blockly.WidgetDiv.hide();
	  Blockly.DropDownDiv.hideWithoutAnimation();
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.onMouseMove = function(e) {
	  var bBox = this.imageElement_.getBoundingClientRect();
	  var scrolltop = this.imageElement_.firstChild.scrollTop;
	  var dy = e.clientY - bBox.top + scrolltop;
	  
	  var highLight = Array.from(this.showList);
	  var index = (Math.round((dy-this.divPadding)/this.divRowHeight)<highLight.length)?Math.round((dy-this.divPadding)/this.divRowHeight):-1;
	  if (index!=-1)
		highLight[index] = "<font color='white'>" + highLight[index] + "</font>";
	  this.imageElement_.innerHTML = highLight.join("<br>");
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.onMouseDown = function(e) {
	  var bBox = this.imageElement_.getBoundingClientRect();
	  var scrolltop = this.imageElement_.firstChild.scrollTop;
	  var dy = e.clientY - bBox.top + scrolltop;
	  var index = (Math.round((dy-this.divPadding)/this.divRowHeight)<this.showList.length)?Math.round((dy-this.divPadding)/this.divRowHeight):-1;
	  this.setEditorValue_(index);
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.valueToIndex = function(value) {
	  if (this.showList)
		  return this.originList[Number(value)][0];
	  else
		  return "";
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.indexToValue = function(text) {
	  var normalizedText = text.trim();
	  var i = this.showList.indexOf(normalizedText);
	  return i > -1? 0 : -1;
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.getText_ = function() {
	  if (this.isBeingEdited_) {
		return fuFieldsImageDropdown.FieldsImageDropdown.superClass_.getText_.call(this);
	  }
	  return this.valueToIndex(this.getValue()) || null;
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.getEditorText_ = function(value) {
	  return this.valueToIndex(value);
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.getValueFromEditorText_ = function(text) {
	  return this.indexToValue(text);
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.render_ = function() {
	  fuFieldsImageDropdown.FieldsImageDropdown.superClass_.render_.call(this);
	  this.updateGraph_();
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.updateGraph_ = function() {
	  if (!this.imageElement_) {
		return;
	  }
	};

	fuFieldsImageDropdown.FieldsImageDropdown.prototype.doClassValidation_ = function(opt_newValue) {
	  if (opt_newValue === null || opt_newValue === undefined || opt_newValue == -1) {
		return null;
	  }
	  var index = this.valueToIndex(opt_newValue); 
	  if (index) {
		if (this.imageField&&this.originList) {
			this.imageField.setValue(this.originList[opt_newValue][1]);
		}
		return opt_newValue;
	  }
	  return 0;
	};



	//************************************************


	Blockly.Blocks["test"] = {
	  init: function() {
		  
		var options = [
			['CLOUDY', "https://imgur.com/Hi33BEx.png"],
			['PARTLY CLOUDY', "https://imgur.com/rX0np7I.png"],
			['MOON', "https://imgur.com/ulJIWW4.png"],
			['RAIN', "https://imgur.com/wRwu4pZ.png"],
			['STAR', "https://imgur.com/KMWOcGf.png"]
		];
		var divDropdownWidth = 200;
		var divDropdownHeight = 100;		  
		  
		var imageField = new Blockly.FieldImage(options[0][1], 18, 18, { alt: "*", flipRtl: "FALSE" });
		var field = new fuFieldsImageDropdown.FieldsImageDropdown('', options, this.validate, divDropdownWidth, divDropdownHeight, imageField);
		
		this.appendDummyInput()
			.appendField(imageField, "image");
		this.appendDummyInput()
			.appendField(field, 'imageDropdown');
						
		this.setInputsInline(true);		
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
	  },
	  validate: function(newValue) {
	  }
	};
	
	Blockly.JavaScript['test'] = function(block) {
	  return '';
	};
	
})	
