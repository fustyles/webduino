/**
 * @license
 * Copyright 2022 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview my Mutator.
 * @author https://www.facebook.com/francefu/
 * @Update 8/20/2022 14:30 (Taiwan Standard Time)
 */

Blockly.Blocks['test'] = {
  init: function() {
	this.appendValueInput("value_if").appendField("if");
	this.appendStatementInput("do_if").appendField("do");  		
	this.appendValueInput("value_elseIf").appendField("else if");
	this.appendStatementInput("do_elseif").appendField("do");
	this.appendStatementInput("do_else").appendField("else");
	this.getInput("value_elseIf").setVisible(false);
	this.getInput("do_elseif").setVisible(false);	
	this.getInput("do_else").setVisible(false);
	
	var myMutator = new Blockly.myMutator([]);
	myMutator.parentBlockId_ = this.id;
	this.setMutator(myMutator);
	
	//this.setMutator(new Blockly.myMutator([]));
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(110);
	
  },myWorkspaceInitial: function(myWorkspace) {
		myWorkspace.parentBlock_=this;
		
		var xml = '<block type="test1" x="0" y="0"></block>';
		xml += '<block type="test2" x="140" y="0"></block>';
		xml += '<block type="test3" x="260" y="0"></block>';
		xml = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">'+xml+'</xml>');
		myWorkspace.clear();
		Blockly.Xml.domToWorkspace(xml, myWorkspace);
	  
		var blocks = myWorkspace.getAllBlocks();
		for (var i =0;i<blocks.length;i++)
			blocks[i].setMovable(false);	  
	
		function onMyMutatorBlocksChange(event) {
			if (event.type=="click") {
				var block = myWorkspace.getBlockById(event.blockId);
				var parentBlock = myWorkspace.options.parentWorkspace.getBlockById(myWorkspace.parentBlock_.mutator.parentBlockId_);
				//var parentBlock = myWorkspace.options.parentWorkspace.getBlockById(myWorkspace.parentBlock_.id);
				
				if (block) {
					if (block.type=="test1") {
						parentBlock.getInput("value_elseIf").setVisible(false);
						parentBlock.getInput("do_elseif").setVisible(false);
						parentBlock.getInput("do_else").setVisible(false);		
					}
					else if (block.type=="test2") {
						parentBlock.getInput("value_elseIf").setVisible(false);
						parentBlock.getInput("do_elseif").setVisible(false);
						parentBlock.getInput("do_else").setVisible(true);	
					}
					if (block.type=="test3") {
						parentBlock.getInput("value_elseIf").setVisible(true);
						parentBlock.getInput("do_elseif").setVisible(true);
						parentBlock.getInput("do_else").setVisible(true);	
					}	
					parentBlock.render();
				}
			}
		}
		myWorkspace.addChangeListener(onMyMutatorBlocksChange);

	}
	,myWorkspaceChanged: function(myWorkspace) {
	}
};

Blockly.JavaScript['test'] = function(block) {
  
  var value_if = Blockly.JavaScript.valueToCode(block, 'value_if', Blockly.JavaScript.ORDER_ATOMIC);
  var do_if = Blockly.JavaScript.statementToCode(block, 'do_if');
  var value_elseIf = Blockly.JavaScript.valueToCode(block, 'value_elseIf', Blockly.JavaScript.ORDER_ATOMIC);
  var do_elseif = Blockly.JavaScript.statementToCode(block, 'do_elseif');
  var do_else = Blockly.JavaScript.statementToCode(block, 'do_else');  
  
  var code = "if (" + value_if + ") {\n" + do_if + "\n}\n";
  if (block.getInput("do_elseif").isVisible())
	  code += "else if (" + value_elseIf + ") {\n" + do_elseif + "\n}\n";
  if (block.getInput("do_else").isVisible())
	  code += "else {\n" + do_else + "\n}\n";  
  return code;
};

Blockly.Blocks['test1'] = {
  init: function() {
	this.appendValueInput("value_if").appendField("if");
	this.appendStatementInput("do_if").appendField("do");
	this.setColour(200);
  }
};

Blockly.Blocks['test2'] = {
  init: function() {
	this.appendValueInput("value_if").appendField("if");
	this.appendStatementInput("do_if").appendField("do");
	this.appendValueInput("input_else").appendField("else");		
	this.appendStatementInput("do_else").appendField("do");
	this.setColour(200);
  }
};

Blockly.Blocks['test3'] = {
  init: function() {
	this.appendValueInput("value_if").appendField("if");
	this.appendStatementInput("do_if").appendField("do");  		
	this.appendValueInput("value_elseIf").appendField("else if");
	this.appendStatementInput("do_elseif").appendField("do");	
	this.appendStatementInput("do_else").appendField("else");
	this.setColour(200);
  }
};


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
	Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.PATH,{"class":"blocklyIconSymbol",d:"m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"},a);
	Blockly.utils.dom.createSvgElement(Blockly.utils.Svg.CIRCLE,{"class":"blocklyIconShape",r:"2.7",cx:"8",cy:"8"},a);
	/*
	a.innerHTML = '<image height="20px" width="20px" alt="[object Object]" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADyUlEQVRIieXVS0xcVRzH8e85l3nAUBCsaZHUqrDQAsWZdGekj8RXVzR10qUwJERXLtTEREPARle6Nl3AMEljGmnorlZjBNpoWzVAQoFKIRFqB9raymNGZu7ce/8uhiG8hOFRY+JvdW/yP+dz/+feew7836KyKQoGg7k+n++w1vopx3GKtNZ/ish4LBa73NHRMb/jcENDQ7lt281KqRNA3holfwGdjuM0RyKRsR2BQ6HQ+yLyCeDClYvaW4EqfBI8+ZCMITNRZOoGpBIAJvBhOBz+bFtwfX39GaCRHA/6wHEoq0EZ7lV1YpvIaDcyfAmsJMCZcDj8VjawsVanwAfkFaFr3kGVVqN0ukwr8OQoHAEBlDZQu8vQJZXI5ABYiUOBQCDW19d3dVMdh0KhZ0VkmByPWx99L720wO5cRcUTBnvyFEql0btxYfC+zR/zkh48cwe763OwkqbWuqK1tXV0PVgvvXEc52PArQ8cX0TLizTH9ueQsISe2xYXx1L0TFgkLOHY/hzKixamKCxFP/8agFtEmjbqeBEOBoO5SqlaXLlQVrNYUJqvuBa1uR61uRsX5sx0t9ejNteiNvsKljx7+RFweRGRk42NjWv9Bavh/Pz8GsCnSiqXfUg9t20mZp01B0/MOnSNW4v3ynCj91YC5Jmm+WJWMPA0AAtLvNVIQUl6Yq2fyRYuBlBu37Zg5d2VfgCRx7OClVIPAEjGtgWTnMtc3c8KFpFxAJmJbsvNjM/MtyEci8UuA3GZuoHY5tZU20SmhgBiwJWs4IVT5gKpBDLavSVXbn0PqXmAzvb29kRWMIBhGE1AUoYvwcydzaHTv+Pc/BbAXNiI1s2yvbq3t3fa7/cncOxXZHIAvec58BZkhcoPX4AZR0TaI5FIZFMwQH9//49+v78EK3FIJn5CKQVF+xYPimWxTWTkO5xfzmZQWylV5ff7B/r7+39dD17vPH5XRD4F3Li86R2psAQ8uyA5t3AeD2XeqQmEgTcBbyJlpaYTqdNfnz93OuuOM+nr67saCAS+VEoVY1vlMht1y70RZHIAuTcCs5PgWHHgnGEYb7S1tZ0NBAI/z5vWqYmHc+75ZOrowepqbg0p9myq46Wpq6vzAi+R3laLgYfAb8CVlV/vyyeCLXPzZpNIevJin6f5YudXLVuCN5tXTwRbZjbA/3Gpt5Oxm0PdFZVVRtJ2DguQSNlHVi77I4EX8K6KqoOupGXXZPCqF6qjo8ODvbBiA9npfHOh46PCPE+TUgqvy3igE/Hzj9JblddPnnq7trb2sX8V/c/lbwo9q8gJVNowAAAAAElFTkSuQmCC" style="cursor: pointer;"></image>';
	*/
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
