/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Blocks Flydown.
 * @author https://www.facebook.com/francefu/
 * @Update 12/13/2021 10:00 (Taiwan Standard Time)
 */

/*
Add JS file placed in <head> or replace the old functions in "blockly_compressed.js" file. 
https://github.com/pigeonmal/Blockly-Flydown/blob/main/flyout_base.js 

//blocks.js
Blockly.Blocks["test"] = {
	init:  function() {
	
		this.field = {};
		
		var fieldImageName1 = "imageName1";
		var blocksXML1 = ['<block type="controls_if"><value name="IF0"></value></block>','<block type="logic_compare"><field name="OP">EQ</field></block>'];
		const icon1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAyCAYAAADx/eOPAAAAAXNSR0IArs4c6QAAA09JREFUaEPtmj1MFEEUgD+ggsJGiRYQbRBNIDQ2IIVwJiTkLlQeWFDTUCjaeIKF4NkoWtBQUwhnRY6QkHhggdDYEEgUaTRQaNCGAirADJu9ndufm2VvV7iJW5HjzXvve2/em5mdrcDHk/u8dexDLFKR2K2GCpWBogLnAcIOUAzKFcYN4sd32N6BvT04OvKIUZD8eYSzshIuXID6Orh6zWnPDcqhSgY5PISFBfi0DL//qJIc3f8vXYTb7dDVBVVVlh07UAGMDLK+DtPvzhbCHh4B1XcfmpvdgfIwMsjyMkxNRRfpUjX390N7uxPIASMyMjFRqrnoxw8OWhkyp9sJjJkVUSPPRs7X1PIKi5hyz0etGhJABTDz8zA7G31Uw7LQ0wPd3Ya2Exi5Vp6mwstKY6Pl8vExGGEzns3NcHBEdl6kLV15GLGOpF+GY6S3Fzo7vXUtLsLMTDi2Uk+sdSgPE2YHe/wIGq57O7v1DV69DgdG7mx5mDDrZXJS7ejAgFrGj4RcN3mYuTnIZv0MV8v8S5hEAuJxw6dAMDU1UFPtbBaiIJO90NKiBl5bg8yMu479A9jfV+sQEiXBiC41NGQYEg7lcrC9DbGYFSF/bhhSYkYIHfX1hg4zEOPj/rpeSTAjI1BXdxp3g8nu7MDoqHpsYJi7MbiXVBsIS+J9Bj7kimsLBCPqJJ2G6mp/ru7uwsYG/PppyV++Ak1NUFvrT8fBAaRSxevHHSYL2TlvI6qFUB4pjg5LH711ddwxtvJ+HtUCm4hDPGHvZgoYOQLFnHj7Br58Vbt58wY8eKiWUy0ZgWDENEsmobXV2wFVRuwjVRlaXYVMRjHNgmTGdKStzYCy146okeFhdaTtEmNjzhoStSIgVlbU+gJlRlbrtvdaWoLpabVxu0RfH3R0FP56mr1bJDCnnWKm+25T7T9Mwd5M0c20nGZaNACtWrNWi2Z5bWcUJ83y2mj6ODZrcwQwW7M2hzMBpNWxWQBp80LDz1byzF81afUSUKvXs1q9OBe1ENWVhr3OIrvSEIbMO5ow68ZPoyhVxnHZJMNocQ0oA5X9Ba0MI/4Os7OVOpXcxiuvzu1AZf1RgxkBbT43cQMyfyvLD4HkOarFJ1r2ojsPUH4+nvsLSHVosUCTiPwAAAAASUVORK5CYII=";
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(icon1, 18, 18, { alt: "*", flipRtl: "FALSE" }), fieldImageName1);
		this.field[fieldImageName1] = new myBlocksFlydownImage.eventparam(this.getField(fieldImageName1), blocksXML1);
		
		
		var fieldImageName2 = "imageName2";
		var blocksXML2 = ['<block type="variables_get"><field name="VAR">i</field></block>','<block type="math_number"><field name="NUM">0</field></block>'];
		const icon2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAyCAYAAADx/eOPAAAAAXNSR0IArs4c6QAAA09JREFUaEPtmj1MFEEUgD+ggsJGiRYQbRBNIDQ2IIVwJiTkLlQeWFDTUCjaeIKF4NkoWtBQUwhnRY6QkHhggdDYEEgUaTRQaNCGAirADJu9ndufm2VvV7iJW5HjzXvve2/em5mdrcDHk/u8dexDLFKR2K2GCpWBogLnAcIOUAzKFcYN4sd32N6BvT04OvKIUZD8eYSzshIuXID6Orh6zWnPDcqhSgY5PISFBfi0DL//qJIc3f8vXYTb7dDVBVVVlh07UAGMDLK+DtPvzhbCHh4B1XcfmpvdgfIwMsjyMkxNRRfpUjX390N7uxPIASMyMjFRqrnoxw8OWhkyp9sJjJkVUSPPRs7X1PIKi5hyz0etGhJABTDz8zA7G31Uw7LQ0wPd3Ya2Exi5Vp6mwstKY6Pl8vExGGEzns3NcHBEdl6kLV15GLGOpF+GY6S3Fzo7vXUtLsLMTDi2Uk+sdSgPE2YHe/wIGq57O7v1DV69DgdG7mx5mDDrZXJS7ejAgFrGj4RcN3mYuTnIZv0MV8v8S5hEAuJxw6dAMDU1UFPtbBaiIJO90NKiBl5bg8yMu479A9jfV+sQEiXBiC41NGQYEg7lcrC9DbGYFSF/bhhSYkYIHfX1hg4zEOPj/rpeSTAjI1BXdxp3g8nu7MDoqHpsYJi7MbiXVBsIS+J9Bj7kimsLBCPqJJ2G6mp/ru7uwsYG/PppyV++Ak1NUFvrT8fBAaRSxevHHSYL2TlvI6qFUB4pjg5LH711ddwxtvJ+HtUCm4hDPGHvZgoYOQLFnHj7Br58Vbt58wY8eKiWUy0ZgWDENEsmobXV2wFVRuwjVRlaXYVMRjHNgmTGdKStzYCy146okeFhdaTtEmNjzhoStSIgVlbU+gJlRlbrtvdaWoLpabVxu0RfH3R0FP56mr1bJDCnnWKm+25T7T9Mwd5M0c20nGZaNACtWrNWi2Z5bWcUJ83y2mj6ODZrcwQwW7M2hzMBpNWxWQBp80LDz1byzF81afUSUKvXs1q9OBe1ENWVhr3OIrvSEIbMO5ow68ZPoyhVxnHZJMNocQ0oA5X9Ba0MI/4Os7OVOpXcxiuvzu1AZf1RgxkBbT43cQMyfyvLD4HkOarFJ1r2ojsPUH4+nvsLSHVosUCTiPwAAAAASUVORK5CYII=";
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(icon2, 18, 18, { alt: "*", flipRtl: "FALSE" }), fieldImageName2);
		this.field[fieldImageName2] = new myBlocksFlydownImage.eventparam(this.getField(fieldImageName2), blocksXML2);	
		
		etc...
	}
}
*/


'use strict';

goog.provide('myBlocksFlydownImage.eventparam');
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
  myBlocksFlydownImage.eventparam.isFlydownName = '';
  return block;
};

Blockly.Flydown.prototype.shouldHide = true;

Blockly.Flydown.prototype.hide = function() {
  if (this.shouldHide) {
    Blockly.VerticalFlyout.prototype.hide.call(this);
    myBlocksFlydownImage.eventparam.openFieldFlydown_ = null;
  }
  this.shouldHide = true;
}








myBlocksFlydownImage.eventparam = function (opt_image, opt_blocksXML, opt_validator) {
    this.opt_image_ = opt_image;
    this.opt_image_.setOnClickHandler(myBlocksFlydownImage.eventparam.clickHandler_);
    this.displayLocation = myBlocksFlydownImage.eventparam.DISPLAY_BELOW;
    this.opt_workspace = opt_image.sourceBlock_.workspace;
    if (opt_blocksXML)
        this.opt_blocksXML_ = '<xml>'+opt_blocksXML.join("")+'</xml>';
	
    myBlocksFlydownImage.eventparam.superClass_.constructor.call(this, '', opt_validator);
};
Blockly.utils.object.inherits(myBlocksFlydownImage.eventparam, Blockly.Field);

myBlocksFlydownImage.eventparam.clickHandler_ = function () {
    const eventparam_ = myBlocksFlydownImage.eventparam;
	if (eventparam_.isFlydownName==this.name) {
		eventparam_.hide();
		myBlocksFlydownImage.eventparam.isFlydownName = '';
	}
    else {
		this.sourceBlock_.field[this.name].showFlydown_();
		myBlocksFlydownImage.eventparam.isFlydownName = this.name;
	}
}	
myBlocksFlydownImage.eventparam.openFieldFlydown_ = null;
myBlocksFlydownImage.eventparam.DISPLAY_BELOW = "BELOW";
myBlocksFlydownImage.eventparam.DISPLAY_RIGHT = "RIGHT";
myBlocksFlydownImage.eventparam.DISPLAY_LOCATION = myBlocksFlydownImage.eventparam.DISPLAY_BELOW;
myBlocksFlydownImage.eventparam.prototype.fieldCSSClassName = 'blocklyFieldFlydownField';
myBlocksFlydownImage.eventparam.prototype.flyoutCSSClassName = 'blocklyFieldFlydownFlydown';
myBlocksFlydownImage.eventparam.isFlydownName = '';

myBlocksFlydownImage.eventparam.prototype.init = function (block) {
    myBlocksFlydownImage.eventparam.superClass_.init.call(this, block);
};

myBlocksFlydownImage.eventparam.prototype.showFlydown_ = function () {
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

    var xy = Blockly.getMainWorkspace().getSvgXY(this.opt_image_.getSvgRoot());
	xy.y += this.opt_image_.sourceBlock_.height * scale;
	flydown.showAt(blocksXMLList, xy.x, xy.y);
	
    myBlocksFlydownImage.eventparam.openFieldFlydown_ = this;
};

myBlocksFlydownImage.eventparam.hide = function () {
    // Hide any displayed flydown.
    var flydown = Blockly.getMainWorkspace().getFlydown();
    if (flydown) {
        flydown.hide();
    }
};

myBlocksFlydownImage.eventparam.prototype.dispose = function () {
      if (myBlocksFlydownImage.eventparam.openFieldFlydown_ == this) {
        myBlocksFlydownImage.eventparam.hide();
    }
    // Call parent's destructor.
    Blockly.FieldTextInput.prototype.dispose.call(this);
};





Blockly.WorkspaceSvg.prototype.flydown_ = null;
Blockly.WorkspaceSvg.prototype.getFlydown = function() {
  return this.flydown_;
};




var workspace = Blockly.getMainWorkspace();
var flydown = new  Blockly.Flydown(new Blockly.Options({scrollbars:  true }));
workspace.flydown_ = flydown;
Blockly.utils.dom.insertAfter(flydown.createDom('g', 'rgba(0, 0, 0, 1)'), workspace.svgBubbleCanvas_);




const iconFlydown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAyCAYAAADx/eOPAAAAAXNSR0IArs4c6QAAA09JREFUaEPtmj1MFEEUgD+ggsJGiRYQbRBNIDQ2IIVwJiTkLlQeWFDTUCjaeIKF4NkoWtBQUwhnRY6QkHhggdDYEEgUaTRQaNCGAirADJu9ndufm2VvV7iJW5HjzXvve2/em5mdrcDHk/u8dexDLFKR2K2GCpWBogLnAcIOUAzKFcYN4sd32N6BvT04OvKIUZD8eYSzshIuXID6Orh6zWnPDcqhSgY5PISFBfi0DL//qJIc3f8vXYTb7dDVBVVVlh07UAGMDLK+DtPvzhbCHh4B1XcfmpvdgfIwMsjyMkxNRRfpUjX390N7uxPIASMyMjFRqrnoxw8OWhkyp9sJjJkVUSPPRs7X1PIKi5hyz0etGhJABTDz8zA7G31Uw7LQ0wPd3Ya2Exi5Vp6mwstKY6Pl8vExGGEzns3NcHBEdl6kLV15GLGOpF+GY6S3Fzo7vXUtLsLMTDi2Uk+sdSgPE2YHe/wIGq57O7v1DV69DgdG7mx5mDDrZXJS7ejAgFrGj4RcN3mYuTnIZv0MV8v8S5hEAuJxw6dAMDU1UFPtbBaiIJO90NKiBl5bg8yMu479A9jfV+sQEiXBiC41NGQYEg7lcrC9DbGYFSF/bhhSYkYIHfX1hg4zEOPj/rpeSTAjI1BXdxp3g8nu7MDoqHpsYJi7MbiXVBsIS+J9Bj7kimsLBCPqJJ2G6mp/ru7uwsYG/PppyV++Ak1NUFvrT8fBAaRSxevHHSYL2TlvI6qFUB4pjg5LH711ddwxtvJ+HtUCm4hDPGHvZgoYOQLFnHj7Br58Vbt58wY8eKiWUy0ZgWDENEsmobXV2wFVRuwjVRlaXYVMRjHNgmTGdKStzYCy146okeFhdaTtEmNjzhoStSIgVlbU+gJlRlbrtvdaWoLpabVxu0RfH3R0FP56mr1bJDCnnWKm+25T7T9Mwd5M0c20nGZaNACtWrNWi2Z5bWcUJ83y2mj6ODZrcwQwW7M2hzMBpNWxWQBp80LDz1byzF81afUSUKvXs1q9OBe1ENWVhr3OIrvSEIbMO5ow68ZPoyhVxnHZJMNocQ0oA5X9Ba0MI/4Os7OVOpXcxiuvzu1AZf1RgxkBbT43cQMyfyvLD4HkOarFJ1r2ojsPUH4+nvsLSHVosUCTiPwAAAAASUVORK5CYII=";

Blockly.Blocks["test_blocksFlydown1"] = {
	init:  function() {
		
		this.field = {};
		var fieldImageName = "imageName";
		
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(iconFlydown, 18, 18, { alt: "*", flipRtl: "FALSE" }), fieldImageName);
		var blocksXML = ['<block type="controls_if"><value name="IF0"></value></block>','<block type="logic_compare"><field name="OP">EQ</field></block>','<block type="variables_get"><field name="VAR">i</field></block>','<block type="math_number"><field name="NUM">0</field></block>'];
		this.field[fieldImageName] = new myBlocksFlydownImage.eventparam(this.getField(fieldImageName), blocksXML);
		
		this.setInputsInline(true);		
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
	}
}

Blockly.JavaScript['test_blocksFlydown1'] = function(block) {
  return '';
};

Blockly.Blocks["test_blocksFlydown2"] = {
	init:  function() {
		this.field = {};
		var fieldImageName = "";
		
		fieldImageName = "imageName1";
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(iconFlydown, 18, 18, { alt: "*", flipRtl: "FALSE" }), fieldImageName);
		var blocksXML1 = ['<block type="controls_if"><value name="IF0"></value></block>','<block type="logic_compare"><field name="OP">EQ</field></block>'];
		this.field[fieldImageName] = new myBlocksFlydownImage.eventparam(this.getField(fieldImageName), blocksXML1);
		
		fieldImageName = "imageName2";
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(iconFlydown, 18, 18, { alt: "*", flipRtl: "FALSE" }), fieldImageName);
		var blocksXML2 = ['<block type="variables_get"><field name="VAR">i</field></block>','<block type="math_number"><field name="NUM">0</field></block>'];
		this.field[fieldImageName] = new myBlocksFlydownImage.eventparam(this.getField(fieldImageName), blocksXML2);
		
		this.setInputsInline(true);		
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(100);
	}
}

Blockly.JavaScript['test_blocksFlydown2'] = function(block) {
  return '';
};
