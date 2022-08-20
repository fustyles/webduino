/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Blocks Flydown.
 * @author https://www.facebook.com/francefu/
 * @Update 12/9/2021 00:00 (Taiwan Standard Time)
 */

/*
Add JS file placed in <head> or replace the old functions in "blockly_compressed.js" file. 
https://github.com/pigeonmal/Blockly-Flydown/blob/main/flyout_base.js

//blocks.js
Blockly.Blocks["test"] = {
    init:  function() {
		var workspace = Blockly.getMainWorkspace();
		var blocksXML = ['<block type="math_number"><field name="NUM">0</field></block>','<block type="variables_get"><field name="VAR">i</field></block>'];
		this.appendDummyInput()
			.appendField(new myBlocksFlydown.eventparam('\u2615', '#fff', workspace, blocksXML, 'fieldName'));
		etc...
    }
}    
*/


'use strict';

goog.provide('myBlocksFlydown.eventparam');
goog.provide('AI.Blockly.Flydown');


Blockly.Flydown = function(workspaceOptions) {
  Blockly.Flydown.superClass_.constructor.call(this, workspaceOptions);
};
Blockly.utils.object.inherits(Blockly.Flydown, Blockly.VerticalFlyout);

/**
 * Previous CSS class for this flydown
 * @type {number}
 * @const
 */
Blockly.Flydown.prototype.previousCSSClassName_ = '';

/**
 * Override flyout factor to be smaller for flydowns
 * @type {number}
 * @const
 */
Blockly.Flydown.prototype.VERTICAL_SEPARATION_FACTOR = 1;

/**
 * Creates the flydown's DOM.  Only needs to be called once.  Overrides the flyout createDom method.
 * @param {!String} cssClassName The name of the CSS class for this flydown. 
 * @return {!Element} The flydown's SVG group.
 */
Blockly.Flydown.prototype.createDom = function(cssClassName, backgroundCOLOR) {
  /*
  <g>
    <path class={cssClassName}/>
    <g></g>
  </g>
  */
  this.previousCSSClassName_ = cssClassName; // Remember class name for later
  this.svgGroup_ = Blockly.utils.dom.createSvgElement('g', {'class': cssClassName}, null);
  this.svgBackground_ = Blockly.utils.dom.createSvgElement('path', {
    'stroke': backgroundCOLOR,
    'fill': backgroundCOLOR}, this.svgGroup_);
  this.svgGroup_.appendChild(this.workspace_.createDom());
  return this.svgGroup_;
};

/**
 * Set the CSS class of the flydown SVG group. Need to remove previous class if there is one.
 * @param {!String} newCSSClassName The name of the new CSS class replacing the old one
 */
Blockly.Flydown.prototype.setCSSClass = function(newCSSClassName) {
  if (newCSSClassName !== this.previousCSSClassName_) {
    Blockly.utils.dom.removeClass(this.svgGroup_, this.previousCSSClassName_);
    Blockly.utils.dom.addClass(this.svgGroup_, newCSSClassName);
    this.previousCSSClassName_ = newCSSClassName;
  }
}

/**
 * Initializes the Flydown.
 * @param {!Blockly.Workspace} workspace The workspace in which to create new
 *     blocks.
 */
Blockly.Flydown.prototype.init = function(workspace) {
  Blockly.VerticalFlyout.prototype.init.call(this, workspace, false); // Flydowns have no scrollbar
}

/**
 * Override the flyout position method to do nothing instead
 * @private
 */
Blockly.Flydown.prototype.position = function() {
  return;
}

/**
 * Show and populate the flydown.
 * @param {!Array|string} xmlList List of blocks to show.
 * @param {!num} x x-position of upper-left corner of flydown
 * @param {!num} y y-position of upper-left corner of flydown
 */
Blockly.Flydown.prototype.showAt = function(xmlList,x,y) {
  Blockly.Events.disable();
  try {
    this.show(xmlList); // invoke flyout method, which adds blocks to flydown and calculates width and height.
  } finally {
    Blockly.Events.enable();
  }
  // this.svgGroup_.setAttribute('transform', 'translate(' + x + ',' + y + ')');
  // Calculate path around flydown blocks. Based on code in flyout position_ method.

  // Start at bottom of top left arc and proceed clockwise
  // Flydown outline shape is symmetric about vertical axis, so no need to differentiate LTR and RTL paths.
  var margin = this.CORNER_RADIUS * this.workspace_.scale;
  var edgeWidth = this.width_ - 2*margin;
  var edgeHeight = this.height_ - 2*margin;


  var path = ['M 0,' + margin];
  path.push('a', margin, margin, 0, 0, 1, margin, -margin); // upper left arc
  path.push('h', edgeWidth);  // top edge
  path.push('a', margin, margin, 0, 0, 1, margin, margin); // upper right arc
  path.push('v', edgeHeight); // right edge
  path.push('a', margin, margin, 0, 0, 1, -margin, margin); // bottom right arc
  path.push('h', -edgeWidth); // bottom edge, drawn backwards
  path.push('a', margin, margin, 0, 0, 1, -margin, -margin); // bottom left arc
  path.push('z'); // complete path by drawing left edge
  this.svgBackground_.setAttribute('d', path.join(' '));
  this.svgGroup_.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
}

/**
 * Compute width and height of Flydown.  Position button under each block.
 * Overrides the reflow method of flyout
 * For RTL: Lay out the blocks right-aligned.
 */
Blockly.Flydown.prototype.reflow = function() {
  this.workspace_.scale = this.targetWorkspace_.scale;
  var scale = this.workspace_.scale;
  var flydownWidth = 0;
  var flydownHeight = 0;
  var margin = this.CORNER_RADIUS * scale;
  var blocks = this.workspace_.getTopBlocks(false);
  for (var i = 0, block; block = blocks[i]; i++) {
    var root = block.getSvgRoot();
    var blockHW = block.getHeightWidth();
    flydownWidth = Math.max(flydownWidth, blockHW.width * scale);
    flydownHeight += blockHW.height * scale * 1.3;
  }
  
  var constantes = this.targetWorkspace_.getRenderer().getConstants();

  flydownWidth += 2 * margin + constantes.TAB_WIDTH * scale; // TAB_WIDTH is with of plug
  flydownHeight += 2 * margin + margin * this.VERTICAL_SEPARATION_FACTOR * (blocks.length - 1) + constantes.START_HAT_HEIGHT*scale/2.0;


  if (this.width_ != flydownWidth) {
    for (var j = 0, block; block = blocks[j]; j++) {
      var blockHW = block.getHeightWidth();
      var blockXY = block.getRelativeToSurfaceXY();
      if (this.RTL) {
        // With the FlydownWidth known, right-align the blocks.
        var dx = flydownWidth - margin - scale * (constantes.TAB_WIDTH - blockXY.x);
        block.moveBy(dx, 0);
        blockXY.x += dx;
      }
      if (block.flyoutRect_) {
        block.flyoutRect_.setAttribute('width', blockHW.width);
        block.flyoutRect_.setAttribute('height', blockHW.height);
        block.flyoutRect_.setAttribute('x',
            this.RTL ? blockXY.x - blockHW.width : blockXY.x);
        block.flyoutRect_.setAttribute('y', blockXY.y);
      }
    }
    // Record the width for us in showAt method

    this.width_ = flydownWidth;
    this.height_ = flydownHeight;
  }
};

Blockly.Flydown.prototype.onMouseMove_ = function(e) {
  // override Blockly's flyout behavior for moving the flyout.
  return;
};

Blockly.Flydown.prototype.getX = function () {
  return 0;
};

/**
 * Copy a block from the flyout to the workspace and position it correctly.
 * @param {!Blockly.Block} originBlock The flyout block to copy..
 * @return {!Blockly.Block} The new block in the main workspace.
 * @private
 */
Blockly.Flydown.prototype.placeNewBlock_ = function(originBlock) {
  var targetWorkspace = this.targetWorkspace_;
  var svgRootOld = originBlock.getSvgRoot();
  if (!svgRootOld) {
    throw 'originBlock is not rendered.';
  }
  // Figure out where the original block is on the screen, relative to the upper
  // left corner of the main workspace.
  var scale = this.workspace_.scale;
  var margin = this.CORNER_RADIUS * scale;
  var xyOld = this.workspace_.getSvgXY(svgRootOld);
  //var scrollX = this.svgGroup_.getScreenCTM().e + margin;
  var scrollX = xyOld.x;
  xyOld.x += scrollX / targetWorkspace.scale - scrollX;
  //var scrollY = this.svgGroup_.getScreenCTM().f + margin;
  var scrollY = xyOld.y;
  scale = targetWorkspace.scale;
  xyOld.y += scrollY / scale - scrollY;

  // Create the new block by cloning the block in the flyout (via XML).
  var xml = Blockly.Xml.blockToDom(originBlock);
  var block = Blockly.Xml.domToBlock(xml, targetWorkspace);
  var svgRootNew = block.getSvgRoot();
  if (!svgRootNew) {
    throw 'block is not rendered.';
  }
  // Figure out where the new block got placed on the screen, relative to the
  // upper left corner of the workspace.  This may not be the same as the
  // original block because the flyout's origin may not be the same as the
  // main workspace's origin.
  var xyNew = targetWorkspace.getSvgXY(svgRootNew);
  // Scale the scroll (getSvgXY did not do this).
  xyNew.x +=
      targetWorkspace.scrollX / targetWorkspace.scale - targetWorkspace.scrollX;
  xyNew.y +=
      targetWorkspace.scrollY / targetWorkspace.scale - targetWorkspace.scrollY;
  // If the flyout is collapsible and the workspace can't be scrolled.
  if (targetWorkspace.toolbox_ && !targetWorkspace.scrollbar) {
    xyNew.x += targetWorkspace.toolbox_.getWidth() / targetWorkspace.scale;
    xyNew.y += targetWorkspace.toolbox_.getHeight() / targetWorkspace.scale;
  }

  // Move the new block to where the old block is.
  block.moveBy(xyOld.x - xyNew.x, xyOld.y - xyNew.y);
  return block;
};

Blockly.Flydown.prototype.shouldHide = true;

Blockly.Flydown.prototype.hide = function() {
  if (this.shouldHide) {
    Blockly.VerticalFlyout.prototype.hide.call(this);
    myBlocksFlydown.eventparam.openFieldFlydown_ = null;
  }
  this.shouldHide = true;
}








myBlocksFlydown.eventparam = function (opt_value, opt_color, opt_workspace, opt_blocksXML, opt_fieldID, opt_validator) {
    opt_value = this.doClassValidation_(opt_value);
    if (opt_value === null) {
        opt_value = '';
    }  // Else the original value is fine.

	this.opt_fieldID_ = opt_fieldID;
    this.opt_color_ = opt_color;
    this.displayLocation = myBlocksFlydown.eventparam.DISPLAY_BELOW;
    this.opt_workspace = opt_workspace;
    if (opt_blocksXML)
		this.opt_blocksXML_ = '<xml>'+opt_blocksXML.join("")+'</xml>';
	
    myBlocksFlydown.eventparam.superClass_.constructor.call(
        this, opt_value, opt_validator);
};
Blockly.utils.object.inherits(myBlocksFlydown.eventparam, Blockly.Field);

myBlocksFlydown.eventparam.prototype.EDITABLE = false;
myBlocksFlydown.eventparam.timeout = 500;
myBlocksFlydown.eventparam.isInDrag = false;
myBlocksFlydown.eventparam.openFieldFlydown_ = null;
myBlocksFlydown.eventparam.showPid_ = 0;
myBlocksFlydown.eventparam.DISPLAY_BELOW = "BELOW";
myBlocksFlydown.eventparam.DISPLAY_RIGHT = "RIGHT";
myBlocksFlydown.eventparam.DISPLAY_LOCATION = myBlocksFlydown.eventparam.DISPLAY_BELOW;
myBlocksFlydown.eventparam.prototype.fieldCSSClassName = 'blocklyFieldFlydownField';
myBlocksFlydown.eventparam.prototype.flyoutCSSClassName = 'blocklyFieldFlydownFlydown';

myBlocksFlydown.eventparam.prototype.init = function (block) {
    myBlocksFlydown.eventparam.superClass_.init.call(this, block);

    // Remove inherited field css classes ...
    Blockly.utils.dom.removeClass(/** @type {!Element} */(this.fieldGroup_),
        'blocklyEditableText');
    Blockly.utils.dom.removeClass(/** @type {!Element} */(this.fieldGroup_),
        'blocklyNoNEditableText');
    // ... and add new ones, so that look and feel of flyout fields can be customized
    Blockly.utils.dom.addClass(/** @type {!Element} */(this.fieldGroup_),
        this.fieldCSSClassName);

    this.mouseOverWrapper_ =
        Blockly.bindEvent_(this.fieldGroup_, 'mouseover', this, this.onMouseOver_);
    this.mouseOutWrapper_ =
        Blockly.bindEvent_(this.fieldGroup_, 'mouseout', this, this.onMouseOut_);
    this.mouseDownWrapper_ =
        Blockly.bindEventWithChecks_(this.fieldGroup_, 'mousedown', this,
            function (_event) {
                this.isInDrag = true;
            }
        );
    this.mouseUpWrapper_ =
        Blockly.bindEventWithChecks_(document, 'mouseup', this,
            function (_event) {
                this.isInDrag = false;
                myBlocksFlydown.eventparam.hide();
            }
        );
};

myBlocksFlydown.eventparam.prototype.onMouseOver_ = function (e) {
    if (!this.sourceBlock_.isInFlyout) { // [lyn, 10/22/13] No flydowns in a flyout!
        myBlocksFlydown.eventparam.showPid_ =
            window.setTimeout(this.showFlydownMaker_(), myBlocksFlydown.eventparam.timeout);
    }

    // This event has been handled.  No need to bubble up to the document.
    e.stopPropagation();
};

myBlocksFlydown.eventparam.prototype.onMouseOut_ = function (e) {
    // Clear any pending timer event to show flydown
    window.clearTimeout(myBlocksFlydown.eventparam.showPid_);
    e.stopPropagation();
};

myBlocksFlydown.eventparam.prototype.showFlydownMaker_ = function () {
    var field = this; // Name receiver in variable so can close over this variable in returned thunk

    return function () {
        if (myBlocksFlydown.eventparam.showPid_ !== 0 &&
            !this.isInDrag &&
            !Blockly.FieldTextInput.htmlInput_) {
            try {
                field.showFlydown_();
            } catch (e) {
                console.error('Failed to show flydown', e);
            }
        }
        myBlocksFlydown.eventparam.showPid_ = 0;
    };
};

myBlocksFlydown.eventparam.prototype.showFlydown_ = function () {
    Blockly.hideChaff();
    var flydown = Blockly.getMainWorkspace().getFlydown();

    // Add flydown to top-level svg, *not* to main workspace svg
    // This is essential for correct positioning of flydown via translation
    // (If it's in workspace svg, it will be additionally translated by
    //  workspace svg translation relative to Blockly.svg.)
    flydown.targetWorkspace = this.opt_workspace;
    flydown.targetWorkspace_ = this.opt_workspace;
    Blockly.getMainWorkspace().getParentSvg().appendChild(flydown.svgGroup_);

    // Adjust scale for current zoom level
    var scale = flydown.targetWorkspace_.scale;
    flydown.workspace_.setScale(scale);

    flydown.setCSSClass(this.flyoutCSSClassName);

    var blocksDom = Blockly.Xml.textToDom(this.opt_blocksXML_);
    // [lyn, 11/10/13] Use goog.dom.getChildren rather than .children or
    //    .childNodes to make this code work across browsers.
    var blocksXMLList = blocksDom.children;

    var xy = Blockly.getMainWorkspace().getSvgXY(this.borderRect_);
    var borderBBox = this.borderRect_.getBBox();
    if (this.displayLocation == myBlocksFlydown.eventparam.DISPLAY_BELOW) {
        xy.y += borderBBox.height * scale;
    } else { // Display right.
        xy.x += borderBBox.width * scale;
    }

    flydown.showAt(blocksXMLList, xy.x, xy.y);
    myBlocksFlydown.eventparam.openFieldFlydown_ = this;
};

myBlocksFlydown.eventparam.hide = function () {
    // Clear any pending timer event to show flydown.
    window.clearTimeout(myBlocksFlydown.eventparam.showPid_);
    // Hide any displayed flydown.
    var flydown = Blockly.getMainWorkspace().getFlydown();
    if (flydown) {
        flydown.hide();
    }
};

myBlocksFlydown.eventparam.prototype.onHtmlInputChange_ = function (e) {
    goog.asserts.assertObject(Blockly.FieldTextInput.htmlInput_);
    var htmlInput = Blockly.FieldTextInput.htmlInput_;
    var text = htmlInput.value;
    if (text !== htmlInput.oldValue_) {
        htmlInput.oldValue_ = text;
        var valid = true;
        if (this.sourceBlock_) {
            valid = this.callValidator(htmlInput.value);
        }
        if (valid === null) {
            Blockly.utils.dom.addClass(htmlInput, 'blocklyInvalidInput');
        } else {
            Blockly.utils.dom.removeClass(htmlInput, 'blocklyInvalidInput');
            this.setText(valid);
        }
    } else if (goog.userAgent.WEBKIT) {
        // Cursor key.  Render the source block to show the caret moving.
        // Chrome only (version 26, OS X).
        this.sourceBlock_.render();
    }
    this.resizeEditor_();
    Blockly.svgResize(this.sourceBlock_.workspace);
};

myBlocksFlydown.eventparam.prototype.dispose = function () {
      if (myBlocksFlydown.eventparam.openFieldFlydown_ == this) {
        myBlocksFlydown.eventparam.hide();
    }
    // Call parent's destructor.
    Blockly.FieldTextInput.prototype.dispose.call(this);
};

myBlocksFlydown.eventparam.prototype.initView = function () {

    this.borderRect_ = Blockly.utils.dom.createSvgElement(
        Blockly.utils.Svg.RECT, {
        'x': 0,
        'y': 0,
        'height': this.size_.height,
        'width': this.size_.width,
        'stroke': this.opt_color_,
        'fill': this.opt_color_,

    }, this.fieldGroup_);

    this.createTextElement_();
}; 




Blockly.WorkspaceSvg.prototype.flydown_ = null;
Blockly.WorkspaceSvg.prototype.getFlydown = function() {
  return this.flydown_;
};






var workspace = Blockly.getMainWorkspace();
var flydown = new  Blockly.Flydown(new Blockly.Options({scrollbars:  true }));
workspace.flydown_ = flydown;
Blockly.utils.dom.insertAfter(flydown.createDom('g', 'rgba(192, 192, 192, 0.8)'), workspace.svgBubbleCanvas_);

Blockly.Blocks["test_blocksFlydown"] = {
	init:  function() {
		var workspace = Blockly.getMainWorkspace();
		this.appendDummyInput()
			.appendField("Flydown1");	
			
		var blocksXML1 = ['<block type="math_number"><field name="NUM">0</field></block>','<block type="variables_get"><field name="VAR">i</field></block>'];
		this.appendDummyInput()
			.appendField(new myBlocksFlydown.eventparam('\u2615', '#fff', workspace, blocksXML1, 'field1'));	
			
		this.appendDummyInput()
			.appendField("Flydown2");	
			
		var blocksXML2 = ['<block type="math_number"><field name="NUM">0</field></block>'];
		this.appendDummyInput()
			.appendField(new myBlocksFlydown.eventparam('\u2614', '#fff', workspace, blocksXML2, 'field2'));	
			
		this.setInputsInline(true);		
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100); 			
    }
}

Blockly.JavaScript['test_blocksFlydown'] = function(block) {
  return '';
};
