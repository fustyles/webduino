/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Mutator.
 * @author https://www.facebook.com/francefu/
 * @Update 11/24/2021 20:30 (Taiwan Standard Time)
 */



//myMutatorWorkspaceToCode
Blockly.Generator.prototype.myMutatorWorkspaceToCode=function(a){var b=[];Blockly.Arduino.init(a);a=a.getTopBlocks(!0);for(var c=0,d;d=a[c];c++){var e=Blockly.Arduino.blockToCode(d);Array.isArray(e)&&(e=e[0]);e&&(d.outputConnection&&(e=Blockly.Arduino.scrubNakedValue(e),Blockly.Arduino.STATEMENT_PREFIX&&!d.suppressPrefixSuffix&&(e=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX,d)+e),Blockly.Arduino.STATEMENT_SUFFIX&&!d.suppressPrefixSuffix&&(e+=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX,d))),b.push(e))}b=b.join("\n");b=Blockly.Arduino.finish(b);b=b.replace(/^\s+\n/,"");b=b.replace(/\n\s+$/,"\n");return b=b.replace(/[ \t]+\n/g,"\n")};	


//myMutator
Blockly.myMutator=function(a){Blockly.myMutator.superClass_.constructor.call(this,null);this.quarkNames_=a};
Blockly.utils.object.inherits(Blockly.myMutator,Blockly.Icon);
Blockly.myMutator.prototype.workspace_=null;
Blockly.myMutator.prototype.workspaceWidth_=0;
Blockly.myMutator.prototype.workspaceHeight_=0;
Blockly.myMutator.prototype.setBlock=function(a){this.block_=a};
Blockly.myMutator.prototype.getWorkspace=function(){return this.workspace_};
Blockly.myMutator.prototype.drawIcon_=function(a){
Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.RECT,{"class":"blocklyIconShape",rx:"4",ry:"4",height:"16",width:"16"},a);
Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.PATH,{"class":"blocklyIconSymbol",d:"m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"},
a);
Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.CIRCLE,{"class":"blocklyIconShape",r:"2.7",cx:"8",cy:"8"},a)
};
Blockly.myMutator.prototype.iconClick_=function(a){this.block_.isEditable()&&Blockly.Icon.prototype.iconClick_.call(this,a)};
Blockly.myMutator.prototype.createEditor_=function(){
	this.svgDialog_=Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.SVG,{x:Blockly.Bubble.BORDER_WIDTH,y:Blockly.Bubble.BORDER_WIDTH},null);
	if(this.quarkNames_.length)
		for(var a=Blockly.utils.xml.createElement("xml"),b=0,c;c=this.quarkNames_[b];b++){
			var d=Blockly.utils.xml.createElement("block");
			d.setAttribute("type",c);
			a.appendChild(d)
		}
	else 
		a=null;
	b=new Blockly.Options(
		{
		disable:!1
		,parentWorkspace:this.block_.workspace
		,media:this.block_.workspace.options.pathToMedia
		,rtl:this.block_.RTL
		,horizontalLayout:!1
		,renderer:this.block_.workspace.options.renderer
		,rendererOverrides:this.block_.workspace.options.rendererOverrides
		}
	);
	b.toolboxPosition=this.block_.RTL?Blockly.utils.toolbox.Position.RIGHT:Blockly.utils.toolbox.Position.LEFT;
	if(c=!!a)
		b.languageTree=Blockly.utils.toolbox.convertToolboxDefToJson(a);
	
	this.workspace_=new Blockly.WorkspaceSvg(b);
	this.workspace_.isMutator=!0;
	a=c?this.workspace_.addFlyout(Blockly.utils.Svg.G):null;
	b=this.workspace_.createDom("blocklyMutatorBackground");
	a&&b.insertBefore(a,this.workspace_.svgBlockCanvas_);
	this.svgDialog_.appendChild(b);
	return this.svgDialog_
};
Blockly.myMutator.prototype.updateEditable=function(){
	Blockly.myMutator.superClass_.updateEditable.call(this);
	this.block_.isInFlyout||(this.block_.isEditable()?this.iconGroup_&&Blockly.utils.dom.removeClass(this.iconGroup_,"blocklyIconGroupReadonly"):(this.setVisible(!1),this.iconGroup_&&Blockly.utils.dom.addClass(this.iconGroup_,"blocklyIconGroupReadonly")))
};
Blockly.myMutator.prototype.resizeBubble_=function(){
	var a=2*Blockly.Bubble.BORDER_WIDTH,b=this.workspace_.getCanvas().getBBox(),c=b.width+b.x,d=b.height+3*a,e=this.workspace_.getFlyout();
	if(e){var f=e.getWorkspace().getMetricsManager().getScrollMetrics();d=Math.max(d,f.height+20);c+=e.getWidth()}
	this.block_.RTL&&(c=-b.x);c+=3*a;if(Math.abs(this.workspaceWidth_-c)>a||Math.abs(this.workspaceHeight_-d)>a)this.workspaceWidth_=c,this.workspaceHeight_=d,this.bubble_.setBubbleSize(c+a,d+a),this.svgDialog_.setAttribute("width",this.workspaceWidth_),this.svgDialog_.setAttribute("height",this.workspaceHeight_),this.workspace_.setCachedParentSvgSize(this.workspaceWidth_,this.workspaceHeight_);this.block_.RTL&&(a="translate("+this.workspaceWidth_+",0)",this.workspace_.getCanvas().setAttribute("transform",a));this.workspace_.resize()
};
Blockly.myMutator.prototype.onBubbleMove_=function(){this.workspace_&&this.workspace_.recordDragTargets()};
Blockly.myMutator.prototype.setVisible=function(a){
	if(a!=this.isVisible())
		if(Blockly.Events.fire(new (Blockly.Events.get(Blockly.Events.BUBBLE_OPEN))(this.block_,a,"mutator")),a){
			this.bubble_=new Blockly.Bubble(this.block_.workspace,this.createEditor_(),this.block_.pathObject.svgPath,this.iconXY_,null,null);
			this.bubble_.setSvgId(this.block_.id);
			this.bubble_.registerMoveEvent(this.onBubbleMove_.bind(this));
			var b=this.workspace_.options.languageTree;
			a=this.workspace_.getFlyout();
			b&&(a.init(this.workspace_),a.show(b));
			
			this.resizeBubble_();
			this.workspace_.addChangeListener(this.workspaceChanged_.bind(this));
			this.applyColour()
			this.workspace_.render();
			
			this.block_.myWorkspaceInitial(this.workspace_);
		}
		else 
			this.svgDialog_=null,this.workspace_.dispose(),this.rootBlock_=this.workspace_=null,this.bubble_.dispose(),this.bubble_=null,this.workspaceHeight_=this.workspaceWidth_=0,this.sourceListener_&&(this.block_.workspace.removeChangeListener(this.sourceListener_),this.sourceListener_=null)
};
Blockly.myMutator.prototype.workspaceChanged_=function(a){if(!(a.isUiEvent||a.type==Blockly.Events.CHANGE&&"disabled"==a.element)){
	if(!this.workspace_.isDragging()){a=this.workspace_.getTopBlocks(!1);for(var b=0,c;c=a[b];b++){var d=c.getRelativeToSurfaceXY();20>d.y&&c.moveBy(0,20-d.y);if(c.RTL){var e=-20,f=this.workspace_.getFlyout();f&&(e-=f.getWidth());d.x>e&&c.moveBy(e-d.x,0)}else 20>d.x&&c.moveBy(20-d.x,0)}}
		Blockly.Events.setGroup(!0);
		c=this.block_;
		c.rendered=!1;
		c.rendered=b;
		c.initSvg();
		c.rendered&&c.render();
		this.workspace_.isDragging()||this.resizeBubble_();
		Blockly.Events.setGroup(!1)
		
		this.block_.myWorkspaceChanged(this.workspace_);		
	}
};
Blockly.myMutator.prototype.dispose=function(){this.block_.mutator=null;Blockly.Icon.prototype.dispose.call(this)};
Blockly.myMutator.prototype.updateBlockStyle=function(){var a=this.workspace_;if(a&&a.getAllBlocks(!1)){for(var b=a.getAllBlocks(!1),c=0,d;d=b[c];c++)d.setStyle(d.getStyleName());if(c=a.getFlyout())for(a=c.workspace_.getAllBlocks(!1),c=0;d=a[c];c++)d.setStyle(d.getStyleName())}};











Blockly.Blocks["mutation_test"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hello World");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(""), "xml");	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable(""), "code");
    this.setInputsInline(true);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);  
	
    this.setMutator(new Blockly.myMutator(["controls_if","logic_compare","math_number","variables_get"]));
	
    this.getField("xml").setVisible(false);
    var initBlocks = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></xml>';
    this.setFieldValue(initBlocks, "xml");
	  
    this.getField("code").setVisible(false);
    var initCode = 'if (0 > 0) {\n}\n';
    this.setFieldValue(initCode, "code");
  },
  myWorkspaceInitial: function(myWorkspace) {
	var xmlDoc = Blockly.Xml.textToDom(this.getFieldValue("xml"));
	myWorkspace.clear();
	Blockly.Xml.domToWorkspace(xmlDoc, myWorkspace);
  },
  myWorkspaceChanged: function(myWorkspace) {
	var xmlDom = Blockly.Xml.workspaceToDom(myWorkspace);
	var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
	this.setFieldValue(xmlText, "xml");
	  
	this.setFieldValue(Blockly.JavaScript.myMutatorWorkspaceToCode(myWorkspace), "code");
  }
};

Blockly.JavaScript['mutation_test'] = function(block) {
  return block.getFieldValue("code");
};
