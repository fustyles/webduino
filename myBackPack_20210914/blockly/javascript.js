/*
Last Update Time : 22/2/2022 18:00 (Taiwan Standard Time)
Author: ChungYi Fu, Taiwan
https://github.com/fustyles
https://www.facebook.com/francefu/
*/

Blockly.MYBACKPACK_CATEGORY_NAME="MYBACKPACK";

Blockly.myBackpack={};
Blockly.myBackpack.NAME_TYPE=Blockly.MYBACKPACK_CATEGORY_NAME;
Blockly.myBackpack.Blocks=[];

Blockly.mySelectedBlock={};
Blockly.mySelectedBlock.Block=null;

Blockly.myBackpack.flyoutCategory=function(a){
	var c=[];
	var b = Blockly.myBackpack.Blocks;
	for (var i=0;i<b.length;i++) {
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
			
		//Workspace Context Menu
		Blockly.WorkspaceSvg.prototype.showContextMenu_=function(a){function b(a){if(a.isDeletable())m=m.concat(a.getDescendants());else{a=a.getChildren();for(var c=0;c<a.length;c++)b(a[c])}}function c(){Blockly.Events.setGroup(f);var a=m.shift();a&&(a.workspace?(a.dispose(!1,!0),setTimeout(c,10)):c());Blockly.Events.setGroup(!1)}if(!this.options.readOnly&&!this.isFlyout){var d=[],e=this.getTopBlocks(!0),f=Blockly.genUid();
		
			g={};
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
			
			this.scrollbar&&(
			g={},
			g.text=Blockly.Msg.CLEAN_UP,
			g.enabled=1<e.length,
			g.callback=this.cleanUp_.bind(this),
			d.push(g)
			);
			
			if(this.options.collapse){for(var h=g=!1,k=0;k<e.length;k++)for(var l=e[k];l;)l.isCollapsed()?g=!0:h=!0,l=l.getNextBlock();var q=function(a){for(var b=0,c=0;c<e.length;c++)for(var d=e[c];d;)setTimeout(d.setCollapsed.bind(d,a),b),d=d.getNextBlock(),b+=10},h={enabled:h};
			h.text=Blockly.Msg.COLLAPSE_ALL;h.callback=function(){q(!0)};d.push(h);g={enabled:g};g.text=Blockly.Msg.EXPAND_ALL;g.callback=function(){q(!1)};d.push(g)}for(var m=[],k=0;k<e.length;k++)b(e[k]);g={text:1==m.length?Blockly.Msg.DELETE_BLOCK:Blockly.Msg.DELETE_X_BLOCKS.replace("%1",String(m.length)),enabled:0<m.length,callback:function(){(2>m.length||window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace("%1",String(m.length))))&&c()}};d.push(g);
			
			g={};
			g.text=Blockly.Msg.EXPORTIMAGE;
			g.enabled=1;
			g.callback=function(){Blockly.downloadScreenshot(Blockly.getMainWorkspace())};
			d.push(g);
			
			g={};
			g.text=Blockly.Msg.MYBACKPACK_IMPORT_WORKSPACE;
			g.enabled=1;
			g.callback=function(a) {
				var result = confirm(Blockly.Msg.MYBACKPACK_IMPORT_WORKSPACE_TITLE);
				if (result) {
					Blockly.myBackpack.Blocks = [];
					var b = Blockly.getMainWorkspace().getTopBlocks();
					for (var i=0;i<b.length;i++){
						var dom = Blockly.Xml.blockToDom(b[i]);
						Blockly.myBackpack.Blocks.push(dom);
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
					var dom = Blockly.Xml.blockToDom(t[i]);
					var b = Blockly.Xml.domToText(dom);
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
			
			
			g={};
			g.text=Blockly.Msg.INSERTBLOCKS_WORKSPACE_BLOCK_INSERT;
			g.enabled=1;
			g.callback=function(a) {
				var e = document.getElementById("workspace_insert_block");
				if (e) {
					e.click();
					return;
				}
				
				var input=document.createElement('input');
				input.type="file";
				input.id="fileInsertBlocks";
				input.style.display = "none";
				input.accept=".xmlone";
				input.onchange = function(element) {
					try {	
						var file = this.files[0];
						if (file) {
							var fr = new FileReader();           
							fr.onload = function (event) {
								var block = Blockly.Xml.textToDom('<xml>' + event.target.result.replace(/(?:\r\n|\r|\n|\t)/g, "") + '</xml>');
								var id = Blockly.Xml.appendDomToWorkspace(block, Blockly.getMainWorkspace());
								block = Blockly.getMainWorkspace().getBlockById(id);
								block.initSvg();
								Blockly.getMainWorkspace().render();
								block.moveBy(100,30);
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
			
			
			
			Blockly.ContextMenu.show(a,d,this.RTL)}
		};
		
		
		//Block Context Menu
		Blockly.BlockSvg.prototype.showContextMenu_=function(a){
			if(!this.workspace.options.readOnly&&this.contextMenu){
				
				Blockly.mySelectedBlock.Block=this;
				
				var b=this,c=[];if(this.isDeletable()&&this.isMovable()&&!b.isInFlyout){var d={text:Blockly.Msg.DUPLICATE_BLOCK,enabled:!0,callback:function(){Blockly.duplicate_(b)}};this.getDescendants().length>this.workspace.remainingCapacity()&&(d.enabled=!1);c.push(d);this.isEditable()&&!this.collapsed_&&this.workspace.options.comments&&(d={enabled:!goog.userAgent.IE},this.comment?(d.text=Blockly.Msg.REMOVE_COMMENT,d.callback=function(){b.setCommentText(null)}):(d.text=Blockly.Msg.ADD_COMMENT,d.callback=function(){b.setCommentText("")}),c.push(d));if(!this.collapsed_)for(d=1;d<this.inputList.length;d++)if(this.inputList[d-1].type!=Blockly.NEXT_STATEMENT&&this.inputList[d].type!=Blockly.NEXT_STATEMENT){var d={enabled:!0},e=this.getInputsInline();d.text=e?Blockly.Msg.EXTERNAL_INPUTS:Blockly.Msg.INLINE_INPUTS;d.callback=function(){b.setInputsInline(!e)};c.push(d);break}this.workspace.options.collapse&&(this.collapsed_?(d={enabled:!0},d.text=Blockly.Msg.EXPAND_BLOCK,d.callback=function(){b.setCollapsed(!1)}):(d={enabled:!0},d.text=Blockly.Msg.COLLAPSE_BLOCK,d.callback=function(){b.setCollapsed(!0)}),c.push(d));this.workspace.options.disable&&(d={text:this.disabled?Blockly.Msg.ENABLE_BLOCK:Blockly.Msg.DISABLE_BLOCK,enabled:!this.getInheritedDisabled(),callback:function(){b.setDisabled(!b.disabled)}},c.push(d));var d=this.getDescendants().length,f=this.getNextBlock();f&&(d-=f.getDescendants().length);d={text:1==d?Blockly.Msg.DELETE_BLOCK:Blockly.Msg.DELETE_X_BLOCKS.replace("%1",String(d)),enabled:!0,callback:function(){Blockly.Events.setGroup(!0);b.dispose(!0,!0);Blockly.Events.setGroup(!1)}};c.push(d)}
				
				d={enabled:!(goog.isFunction(this.helpUrl)?!this.helpUrl():!this.helpUrl)};
				d.text=Blockly.Msg.HELP;
				d.callback=function(){b.showHelp_()};
				c.push(d);
				
				
				d={};
				d.text=Blockly.Msg.MYBACKPACK_ADD;
				d.enabled=1;
				var dom = Blockly.Xml.blockToDom(Blockly.mySelectedBlock.Block);
				var text = Blockly.Xml.domToText(dom).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
				if (Blockly.myBackpack.Blocks) {
					var n = Blockly.myBackpack.Blocks;
					for (var i=0;i<n.length;i++) {
						var text_flyout = Blockly.Xml.domToText(n[i]).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
						if (text_flyout==text)
							d.enabled=0;
					}
				}
				d.callback=function() {
					var dom = Blockly.Xml.blockToDom(Blockly.mySelectedBlock.Block);
					Blockly.myBackpack.Blocks.push(dom);
				}
				c.push(d);
				
				
				d={};
				d.text=Blockly.Msg.INSERTBLOCKS_WORKSPACE_BLOCK_EXPORT;
				d.enabled=1;
				d.callback=function(b) {
					var dom = Blockly.Xml.blockToDom(Blockly.mySelectedBlock.Block);
					var xml = Blockly.Xml.domToText(dom).replace(/(?:\r\n|\r|\n|\t)/g, "");
					
					var link = document.createElement('a');
					link.download="sample.xmlone";
					link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml);
					document.body.appendChild(link);
					link.click();
					link.remove();	
				}
				c.push(d);
				
				
				this.customContextMenu&&!b.isInFlyout&&this.customContextMenu(c);
				Blockly.ContextMenu.show(a,c,this.RTL);
				Blockly.ContextMenu.currentBlock=this
			}
		};
	}
	else
		setTimeout(function(){ registerMyBackpack(); }, 100);	
}

setTimeout(function(){ registerMyBackpack(); }, 100);



Blockly.Xml.domToWorkspace=function(a,b){var id=[];if(a instanceof Blockly.Workspace){var c=a;a=b;b=c;console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")}var d;b.RTL&&(d=b.getWidth());Blockly.Field.startCache();var c=a.childNodes.length,e=Blockly.Events.getGroup();e||Blockly.Events.setGroup(!0);for(var f=0;f<c;f++){var g=a.childNodes[f],h=g.nodeName.toLowerCase();if("block"==h||"shadow"==h){var h=Blockly.Xml.domToBlock(g,b),k=parseInt(g.getAttribute("x"),10),g=parseInt(g.getAttribute("y"),
10);id.push(h.id);isNaN(k)||isNaN(g)||h.moveBy(b.RTL?d-k:k,g)}}e||Blockly.Events.setGroup(!1);Blockly.Field.stopCache();return id};

Blockly.Xml.appendDomToWorkspace=function(a,b){
	var c;Object.prototype.hasOwnProperty.call(b,"scale")&&(c=b.getBlocksBoundingBox());a=Blockly.Xml.domToWorkspace(a,b);if(c&&c.top!=c.bottom){var d=c.bottom;var e=b.RTL?c.right:c.left;var f=Infinity,g=-Infinity,h=Infinity;for(c=0;c<a.length;c++){var k=b.getBlockById(a[c]).getRelativeToSurfaceXY();k.y<h&&(h=k.y);k.x<f&&(f=k.x);k.x>g&&(g=k.x)}d=d-h+10;e=b.RTL?e-g:e-f;for(c=0;c<a.length;c++)b.getBlockById(a[c]).moveBy(e,d)}return a
};



/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Download screenshot.
 * @author samelh@google.com (Sam El-Husseini)
 */
'use strict';

/**
 * Convert an SVG datauri into a PNG datauri.
 * @param {string} data SVG datauri.
 * @param {number} width Image width.
 * @param {number} height Image height.
 * @param {!Function} callback Callback.
 */
function svgToPng_(data, width, height, callback) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var img = new Image();

  var pixelDensity = 2;
  canvas.width = width * pixelDensity;
  canvas.height = height * pixelDensity;
  img.onload = function() {
    context.drawImage(
        img, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
    try {
      var dataUri = canvas.toDataURL('image/png');
      callback(dataUri);
    } catch (err) {
      console.warn('Error converting the workspace svg to a png');
      callback('');
    }
  };
  img.src = data;
}

/**
 * Create an SVG of the blocks on the workspace.
 * @param {!Blockly.WorkspaceSvg} workspace The workspace.
 * @param {!Function} callback Callback.
 * @param {string=} customCss Custom CSS to append to the SVG.
 */
function workspaceToSvg_(workspace, callback, customCss) {

  // Go through all text areas and set their value.
  var textAreas = document.getElementsByTagName("textarea");
  for (var i = 0; i < textAreas.length; i++) {
    textAreas[i].innerHTML = textAreas[i].value;
  }

  var bBox = workspace.getBlocksBoundingBox();
  var x = bBox.x || bBox.left;
  var y = bBox.y || bBox.top;
  var width = bBox.width || bBox.right - x;
  var height = bBox.height || bBox.bottom - y;

  var blockCanvas = workspace.getCanvas();
  var clone = blockCanvas.cloneNode(true);
  clone.removeAttribute('transform');
  
  var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.appendChild(clone);
  svg.setAttribute('viewBox',
      x + ' ' + y + ' ' + width + ' ' + height);

  svg.setAttribute('class', 'blocklySvg ' +
    (workspace.options.renderer || 'geras') + '-renderer ' +
    (workspace.getTheme ? workspace.getTheme().name + '-theme' : ''));
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute("style", 'background-color: transparent');

  var css = [].slice.call(document.head.querySelectorAll('style'))
      .filter(function(el) { return /\.blocklySvg/.test(el.innerText) ||
        (el.id.indexOf('blockly-') === 0); }).map(function(el) {
        return el.innerText; }).join('\n');
  var style = document.createElement('style');
  style.innerHTML = css + '\n' + customCss;
  svg.insertBefore(style, svg.firstChild);

  var svgAsXML = (new XMLSerializer).serializeToString(svg);
  svgAsXML = svgAsXML.replace(/&nbsp/g, '&#160');
  var data = 'data:image/svg+xml,' + encodeURIComponent(svgAsXML);

  svgToPng_(data, width, height, callback);
}

/**
 * Download a screenshot of the blocks on a Blockly workspace.
 * @param {!Blockly.WorkspaceSvg} workspace The Blockly workspace.
 */
Blockly.downloadScreenshot = function(workspace) {
  workspaceToSvg_(workspace, function(datauri) {
    var a = document.createElement('a');
    a.download = 'screenshot.png';
    a.target = '_self';
    a.href = datauri;
	document.body.appendChild(a);
	a.click();
	a.parentNode.removeChild(a);
  });
};
