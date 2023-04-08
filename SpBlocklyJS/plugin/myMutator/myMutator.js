/**
 * @license
 * Copyright 2023 Taiwan
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview My Mutator.
 * @author https://www.facebook.com/francefu/ (ChungYi Fu)
 * @Update 4/8/2023 13:00 (Taiwan Standard Time)
 */
 
 /*
 
//main.html
<script src="myMutator.js"></script>

//blocks.js
module$exports$Blockly$libraryBlocks$procedures.blocks.procedures_callnoreturn=Object.assign({},module$contents$Blockly$libraryBlocks$procedures_PROCEDURE_CALL_COMMON,{
	init:function(){
		this.appendDummyInput("TOPROW").appendField("","NAME");
		this.setInputsInline(true);
		this.setPreviousStatement(!0);
		this.setNextStatement(!0);
		this.setStyle("procedure_blocks");
		this.setHelpUrl(module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_CALLNORETURN_HELPURL);
		this.arguments_=[];
		this.argumentVarModels_=[];
		this.quarkConnections_={};
		this.quarkIds_=null;
		this.setMutator(new myMutator([], this));
		this.previousEnabledState_=!0
	},defType_:"procedures_defnoreturn"
	,myWorkspaceInitial: function(myWorkspace) {
		var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
		xml = new XMLSerializer().serializeToString(xml);
		xml = new DOMParser().parseFromString(xml,"text/xml").firstChild.childNodes;
		for (var i=0;i<xml.length;i++) {
			if (xml[i].getAttribute("type")=="procedures_defnoreturn") {	
				for (var j=0;j<xml[i].childNodes.length;j++) {			
					if (xml[i].childNodes[j].textContent==this.getFieldValue("NAME")) {
						xml = Blockly.Xml.domToPrettyText(xml[i]);
						xml = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">'+xml.replace("x=","xx=").replace("y=","yy=")+'</xml>');
						myWorkspace.clear();
						Blockly.Xml.domToWorkspace(xml, myWorkspace);							
						break;
					}
				}
			}
		}
	},myWorkspaceChanged: function(myWorkspace) {
	}
});
 */

'use strict';

class myMutator extends Blockly.Mutator {

	constructor(quarkNames, block) {
		super(quarkNames, block);
		
		this.workspace_=null;
		this.workspaceWidth_=0;
		this.workspaceHeight_=0;
		this.quarkNames_=quarkNames;
		this.block_= block;
		this.setBlock=function(a){this.block_=a};
		this.getWorkspace=function(){return this.workspace_};
		
		this.drawIcon_=function(a){
			a.innerHTML = '<image height="20px" width="20px" alt="[object Object]" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADyUlEQVRIieXVS0xcVRzH8e85l3nAUBCsaZHUqrDQAsWZdGekj8RXVzR10qUwJERXLtTEREPARle6Nl3AMEljGmnorlZjBNpoWzVAQoFKIRFqB9raymNGZu7ce/8uhiG8hOFRY+JvdW/yP+dz/+feew7836KyKQoGg7k+n++w1vopx3GKtNZ/ish4LBa73NHRMb/jcENDQ7lt281KqRNA3holfwGdjuM0RyKRsR2BQ6HQ+yLyCeDClYvaW4EqfBI8+ZCMITNRZOoGpBIAJvBhOBz+bFtwfX39GaCRHA/6wHEoq0EZ7lV1YpvIaDcyfAmsJMCZcDj8VjawsVanwAfkFaFr3kGVVqN0ukwr8OQoHAEBlDZQu8vQJZXI5ABYiUOBQCDW19d3dVMdh0KhZ0VkmByPWx99L720wO5cRcUTBnvyFEql0btxYfC+zR/zkh48cwe763OwkqbWuqK1tXV0PVgvvXEc52PArQ8cX0TLizTH9ueQsISe2xYXx1L0TFgkLOHY/hzKixamKCxFP/8agFtEmjbqeBEOBoO5SqlaXLlQVrNYUJqvuBa1uR61uRsX5sx0t9ejNteiNvsKljx7+RFweRGRk42NjWv9Bavh/Pz8GsCnSiqXfUg9t20mZp01B0/MOnSNW4v3ynCj91YC5Jmm+WJWMPA0AAtLvNVIQUl6Yq2fyRYuBlBu37Zg5d2VfgCRx7OClVIPAEjGtgWTnMtc3c8KFpFxAJmJbsvNjM/MtyEci8UuA3GZuoHY5tZU20SmhgBiwJWs4IVT5gKpBDLavSVXbn0PqXmAzvb29kRWMIBhGE1AUoYvwcydzaHTv+Pc/BbAXNiI1s2yvbq3t3fa7/cncOxXZHIAvec58BZkhcoPX4AZR0TaI5FIZFMwQH9//49+v78EK3FIJn5CKQVF+xYPimWxTWTkO5xfzmZQWylV5ff7B/r7+39dD17vPH5XRD4F3Li86R2psAQ8uyA5t3AeD2XeqQmEgTcBbyJlpaYTqdNfnz93OuuOM+nr67saCAS+VEoVY1vlMht1y70RZHIAuTcCs5PgWHHgnGEYb7S1tZ0NBAI/z5vWqYmHc+75ZOrowepqbg0p9myq46Wpq6vzAi+R3laLgYfAb8CVlV/vyyeCLXPzZpNIevJin6f5YudXLVuCN5tXTwRbZjbA/3Gpt5Oxm0PdFZVVRtJ2DguQSNlHVi77I4EX8K6KqoOupGXXZPCqF6qjo8ODvbBiA9npfHOh46PCPE+TUgqvy3igE/Hzj9JblddPnnq7trb2sX8V/c/lbwo9q8gJVNowAAAAAElFTkSuQmCC" style="cursor: pointer;"></image>';
		};	

		this.iconClick_=function(a){this.block_.isEditable()&&Blockly.Icon.prototype.iconClick_.call(this,a)};
		this.createEditor_=function(){
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
			a=c?this.workspace_.addFlyout(Blockly.utils.Svg.G):null;
			b=this.workspace_.createDom("blocklyMutatorBackground");
			a&&b.insertBefore(a,this.workspace_.svgBlockCanvas_);
			this.svgDialog_.appendChild(b);
			return this.svgDialog_
		};
		this.updateEditable=function(){
			this.block_.isInFlyout||(this.block_.isEditable()?this.iconGroup_&&Blockly.utils.dom.removeClass(this.iconGroup_,"blocklyIconGroupReadonly"):(this.setVisible(!1),this.iconGroup_&&Blockly.utils.dom.addClass(this.iconGroup_,"blocklyIconGroupReadonly")))
		};
		this.resizeBubble_=function(){
			var a=2*Blockly.Bubble.BORDER_WIDTH,b=this.workspace_.getCanvas().getBBox(),c=b.width+b.x,d=b.height+3*a,e=this.workspace_.getFlyout();
			if(e){var f=e.getWorkspace().getMetricsManager().getScrollMetrics();d=Math.max(d,f.height+20);c+=e.getWidth()}
			this.block_.RTL&&(c=-b.x);c+=3*a;if(Math.abs(this.workspaceWidth_-c)>a||Math.abs(this.workspaceHeight_-d)>a)this.workspaceWidth_=c,this.workspaceHeight_=d,this.bubble_.setBubbleSize(c+a,d+a),this.svgDialog_.setAttribute("width",this.workspaceWidth_),this.svgDialog_.setAttribute("height",this.workspaceHeight_),this.workspace_.setCachedParentSvgSize(this.workspaceWidth_,this.workspaceHeight_);this.block_.RTL&&(a="translate("+this.workspaceWidth_+",0)",this.workspace_.getCanvas().setAttribute("transform",a));this.workspace_.resize()
		};
		this.onBubbleMove_=function(){this.workspace_&&this.workspace_.recordDragTargets()};
		this.setVisible=function(a){
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
		this.workspaceChanged_=function(a){if(!(a.isUiEvent||a.type==Blockly.Events.CHANGE&&"disabled"==a.element)){
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
		this.dispose=function(){this.block_.mutator=null;Blockly.Icon.prototype.dispose.call(this)};
		this.updateBlockStyle=function(){var a=this.workspace_;if(a&&a.getAllBlocks(!1)){for(var b=a.getAllBlocks(!1),c=0,d;d=b[c];c++)d.setStyle(d.getStyleName());if(c=a.getFlyout())for(a=c.workspace_.getAllBlocks(!1),c=0;d=a[c];c++)d.setStyle(d.getStyleName())}};		

	}
}

//myMutatorWorkspaceToCode
Blockly.Generator.prototype.myMutatorWorkspaceToCode=function(a){var b=[];Blockly.Arduino.init(a);a=a.getTopBlocks(!0);for(var c=0,d;d=a[c];c++){var e=Blockly.Arduino.blockToCode(d);Array.isArray(e)&&(e=e[0]);e&&(d.outputConnection&&(e=Blockly.Arduino.scrubNakedValue(e),Blockly.Arduino.STATEMENT_PREFIX&&!d.suppressPrefixSuffix&&(e=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_PREFIX,d)+e),Blockly.Arduino.STATEMENT_SUFFIX&&!d.suppressPrefixSuffix&&(e+=Blockly.Arduino.injectId(Blockly.Arduino.STATEMENT_SUFFIX,d))),b.push(e))}b=b.join("\n");b=Blockly.Arduino.finish(b);b=b.replace(/^\s+\n/,"");b=b.replace(/\n\s+$/,"\n");return b=b.replace(/[ \t]+\n/g,"\n")};	
