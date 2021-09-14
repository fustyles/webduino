/*
Last Update Time : 9/14/2021 16:30 (Taiwan Standard Time)

Author: ChungYi Fu, Taiwan
https://github.com/fustyles
https://www.facebook.com/francefu/
*/

Blockly.MYBACKPACK_CATEGORY_NAME="MYBACKPACK";

Blockly.myBackpack={};
Blockly.myBackpack.NAME_TYPE=Blockly.MYBACKPACK_CATEGORY_NAME;
Blockly.myBackpack.Blocks=[];

Blockly.myBackpack.flyoutCategory=function(a){
	var c=[];
	var b = Blockly.myBackpack.Blocks;
	console.log(b);
	for (var i=0;i<b.length;i++) {
		console.log(b[i]);
		c.push(b[i]);
	}
	return c
};

function registerMyBackpack(){
	if (Blockly.getMainWorkspace()) {
		
		Blockly.Flyout.prototype.show=function(a){this.hide();for(var b=this.workspace_.getTopBlocks(!1),c=0,d;d=b[c];c++)d.workspace==this.workspace_&&d.dispose(!1,!1);for(var c=0,e;e=this.buttons_[c];c++)goog.dom.removeNode(e);this.buttons_.length=0;
		
		a==Blockly.Variables.NAME_TYPE?a=Blockly.Variables.flyoutCategory(this.workspace_.targetWorkspace):
		a==Blockly.Procedures.NAME_TYPE&&(a=Blockly.Procedures.flyoutCategory(this.workspace_.targetWorkspace));
		a==Blockly.myBackpack.NAME_TYPE&&(a=Blockly.myBackpack.flyoutCategory(this.workspace_.targetWorkspace));
		
		var f=this.CORNER_RADIUS;this.svgGroup_.style.display=
		"block";for(var b=[],g=[],c=this.permanentlyDisabled_.length=0;e=a[c];c++)e.tagName&&"BLOCK"==e.tagName.toUpperCase()&&(d=Blockly.Xml.domToBlock(e,this.workspace_),d.disabled&&this.permanentlyDisabled_.push(d),b.push(d),d=parseInt(e.getAttribute("gap"),10),g.push(isNaN(d)?3*f:d));a=f;for(c=0;d=b[c];c++){e=d.getDescendants();for(var h=0,k;k=e[h];h++)k.isInFlyout=!0;d.render();h=d.getSvgRoot();e=d.getHeightWidth();d.moveBy(this.RTL?0:f/this.workspace_.scale+Blockly.BlockSvg.TAB_WIDTH,a);a+=e.height+
		g[c];e=Blockly.createSvgElement("rect",{"fill-opacity":0},null);this.workspace_.getCanvas().insertBefore(e,d.getSvgRoot());d.flyoutRect_=e;this.buttons_[c]=e;this.autoClose?this.listeners_.push(Blockly.bindEvent_(h,"mousedown",null,this.createBlockFunc_(d))):this.listeners_.push(Blockly.bindEvent_(h,"mousedown",null,this.blockMouseDown_(d)));this.listeners_.push(Blockly.bindEvent_(h,"mouseover",d,d.addSelect));this.listeners_.push(Blockly.bindEvent_(h,"mouseout",d,d.removeSelect));this.listeners_.push(Blockly.bindEvent_(e,
		"mousedown",null,this.createBlockFunc_(d)));this.listeners_.push(Blockly.bindEvent_(e,"mouseover",d,d.addSelect));this.listeners_.push(Blockly.bindEvent_(e,"mouseout",d,d.removeSelect))}this.listeners_.push(Blockly.bindEvent_(this.svgBackground_,"mouseover",this,function(a){a=this.workspace_.getTopBlocks(!1);for(var b=0,c;c=a[b];b++)c.removeSelect()}));this.width_=0;this.reflow();this.filterForCapacity_();Blockly.fireUiEventNow(window,"resize");this.reflowWrapper_=this.reflow.bind(this);this.workspace_.addChangeListener(this.reflowWrapper_)};
			
			
		Blockly.WorkspaceSvg.prototype.showContextMenu_=function(a){function b(a){if(a.isDeletable())m=m.concat(a.getDescendants());else{a=a.getChildren();for(var c=0;c<a.length;c++)b(a[c])}}function c(){Blockly.Events.setGroup(f);var a=m.shift();a&&(a.workspace?(a.dispose(!1,!0),setTimeout(c,10)):c());Blockly.Events.setGroup(!1)}if(!this.options.readOnly&&!this.isFlyout){var d=[],e=this.getTopBlocks(!0),f=Blockly.genUid()
		,g={};
		g.text=Blockly.Msg.UNDO;
		g.enabled=0<this.undoStack_.length;
		g.callback=this.undo.bind(this,
		!1);
		d.push(g);	
		
		g={};
		g.text=Blockly.Msg.REDO;
		g.enabled=0<this.redoStack_.length;
		g.callback=this.undo.bind(this,!0);
		d.push(g);
		
		this.scrollbar&&(g={},g.text=Blockly.Msg.CLEAN_UP,g.enabled=1<e.length,g.callback=this.cleanUp_.bind(this),d.push(g));
		if(this.options.collapse){for(var h=g=!1,k=0;k<e.length;k++)for(var l=e[k];l;)l.isCollapsed()?g=!0:h=!0,l=l.getNextBlock();var q=function(a){for(var b=0,c=0;c<e.length;c++)for(var d=e[c];d;)setTimeout(d.setCollapsed.bind(d,a),b),d=d.getNextBlock(),b+=10},h={enabled:h};
		h.text=Blockly.Msg.COLLAPSE_ALL;h.callback=function(){q(!0)};d.push(h);g={enabled:g};g.text=Blockly.Msg.EXPAND_ALL;g.callback=function(){q(!1)};d.push(g)}for(var m=[],k=0;k<e.length;k++)b(e[k]);g={text:1==m.length?Blockly.Msg.DELETE_BLOCK:Blockly.Msg.DELETE_X_BLOCKS.replace("%1",String(m.length)),enabled:0<m.length,callback:function(){(2>m.length||window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace("%1",String(m.length))))&&c()}};d.push(g);
		
		g={};
		g.text=Blockly.Msg.MYBACKPACK_IMPORT_WORKSPACE;
		g.enabled=1;
		g.callback=function(a) {
			var result = confirm(Blockly.Msg.MYBACKPACK_IMPORT_WORKSPACE_TITLE);
			if (result) {
				Blockly.myBackpack.Blocks = [];
				var t = Blockly.getMainWorkspace().getTopBlocks();
				
				for (var i=0;i<t.length;i++){
					var d = Blockly.Xml.blockToDom(t[i]);
					Blockly.myBackpack.Blocks.push(d);
				}
			}
		}
		d.push(g);	
		
		g={};
		g.text=Blockly.Msg.MYBACKPACK_WORKSPACE_EXPORT_FILE;
		g.enabled=1;
		g.callback=function(a) {
			var xml = '<xml xmlns="https://developers.google.com/blockly/xml">';
			var t = Blockly.getMainWorkspace().getTopBlocks();
			for (var i=0;i<t.length;i++){
				var d = Blockly.Xml.blockToDom(t[i]);
				var b = Blockly.Xml.domToText(d);
				xml += b;
			}
			xml += '</xml>';
			
			var link = document.createElement('a');
			link.download="backpack.xmlbp";
			link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml);
			document.body.appendChild(link);
			link.click();
			link.remove();	
		}
		d.push(g);

		g={};
		g.text=Blockly.Msg.MYBACKPACK_IMPORT_FILE;
		g.enabled=1;
		g.callback=function(a) {
			var e = document.getElementById("fileImportBlocksToMyBackpack");
			if (e) {
				e.click();
				return;
			}
			
			var input=document.createElement('input');
			input.type="file";
			input.id="fileImportBlocksToMyBackpack";
			input.style.display = "none";
			input.accept=".xmlbp";
			input.onchange = function(element) {
				try {	
					var file = this.files[0];
					if (file) {
						var fr = new FileReader();           
						fr.onload = function (event) {
							Blockly.myBackpack.Blocks = [];
							var blocks = Blockly.Xml.textToDom(event.target.result);
							var child = blocks.childNodes;
							Blockly.myBackpack.Blocks=[];
							for (var i=0;i<child.length;i++){
								if (child[i].nodeName!="#text") {
									Blockly.myBackpack.Blocks.push(child[i]);
								}
							}
						};
						fr.readAsText(file);
					}
				} catch (e) {
					alert(e);
				}	  
			}

			document.body.appendChild(input);
			setTimeout(function(){
				input.click();
			},500);	
		}
		d.push(g);
				
		Blockly.ContextMenu.show(a,d,this.RTL)}};
	}
	else
		setTimeout(function(){ registerMyBackpack(); }, 100);	
}
setTimeout(function(){ registerMyBackpack(); }, 100);
