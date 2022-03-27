/**
 * @license
 * Copyright 2021 Taiwan
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview My Backpack.
 * @author https://www.facebook.com/francefu/ (ChungYi Fu)
 * @Update 9/14/2021 09:30 (Taiwan Standard Time)
 */
 
 /*
 
//main.html
<script src="mybackpack.js"></script>

// Inject Blockly.
const workspace = Blockly.inject('blocklyDiv', {
	toolbox: toolboxCategories,
});


// Initialize plugin.
const myBackpack = new MyBackpack(workspace);

const myBackpack = new MyBackpack(workspace, "category_logic" , true);
//Parameter 1 --> Blockly Workspace
//Parameter 2 --> Category ID that exists in the toolbox.
//Parameter 3 --> true: insertAfter, false :insertBefore

 */

'use strict';


Blockly.Msg["MYBACKPACK_ADD"] = "Copy block to BACKPACK";
Blockly.Msg["MYBACKPACK_REMOVE"] = "Remove block from BACKPACK";
Blockly.Msg["MYBACKPACK_REMOVE_ALL"] = "Remove all blocks from BACKPACK";
Blockly.Msg["MYBACKPACK_REMOVE_ALL_TITLE"] = "Are you sure that remove all blocks from BACKPACK?";
Blockly.Msg["MYBACKPACK_IMPORT_FILE"] = "Copy blocks to BACKPACK from backpack file";
Blockly.Msg["MYBACKPACK_IMPORT_WORKSPACE"] = "Copy blocks to BACKPACK from workspace";
Blockly.Msg["MYBACKPACK_IMPORT_WORKSPACE_TITLE"] = "Are you sure that copy blocks to BACKPACK from workspace?";
Blockly.Msg["MYBACKPACK_WORKSPACE_EXPORT_FILE"] = "Export blocks to backpack file from workspace";
Blockly.Msg["MYBACKPACK_MYBACKPACK_EXPORT_FILE"] = "Export all blocks to backpack file from BACKPACK";
Blockly.Msg["MYBACKPACK_TITLE"] = "BACKPACK";


class MyBackpack {

  constructor(workspace, insertCategoryId, position) {
	  
		this.workspace_ = workspace;
		this.insertCategoryId_ = insertCategoryId;
		this.position_ = position;

		Blockly.myBackpack={};
		Blockly.MYBACKPACK_CATEGORY_NAME="MYBACKPACK";
		Blockly.myBackpack.NAME_TYPE=Blockly.MYBACKPACK_CATEGORY_NAME;
		Blockly.myBackpack.Blocks=[];

		Blockly.myBackpack.flyoutCategory=function(a){
			var c=[];
			var b = Blockly.myBackpack.Blocks;
			for (var i=0;i<b.length;i++) {
				c.push(Blockly.Xml.textToDom(b[i]));
			}
			return c
		};
		
		try {
			var xml = document.getElementById("toolbox");
			var xmlDoc = new DOMParser().parseFromString('<category id="catMyBackPack" name="%{BKY_MYBACKPACK_TITLE}" colour="290" custom="MYBACKPACK"></category>', 'text/xml');
		
			if (this.insertCategoryId_) {
				for (var i=0;i<xml.childNodes.length;i++) {
					if (xml.childNodes[i].id==this.insertCategoryId_) {
						if (this.position_==true)
							xml.insertBefore(xmlDoc.documentElement, xml.childNodes[i].nextSibling);
						else if (this.position_==false)
							xml.insertBefore(xmlDoc.documentElement, xml.childNodes[i]);
						else
							xml.appendChild(xmlDoc.documentElement);
						break;
					}
				}
			}
			else {
				if (xml.hasChildNodes())
					xml.insertBefore(xmlDoc.documentElement, xml.childNodes[0]);
			}
			
			this.workspace_.updateToolbox(xml);
		}
		catch (e) {
			console.log(e);
		}
		
		Blockly.myBackpack&&Blockly.myBackpack.flyoutCategory&&(this.workspace_.registerToolboxCategoryCallback(Blockly.MYBACKPACK_CATEGORY_NAME,Blockly.myBackpack.flyoutCategory));


		function registerCopyToMyBackpack() {
		  if (Blockly.ContextMenuRegistry.registry.getItem('copy_to_MyBackpack')) {
			return;
		  }
		  const copyToMyBackpack = {
			displayText: function(){
				return Blockly.Msg["MYBACKPACK_ADD"];
			},
			preconditionFn: function(a) {
				var d = Blockly.Xml.blockToDom(a.block,true);
				var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
				if (Blockly.myBackpack.Blocks) {
					var n = Blockly.myBackpack.Blocks;
					for (var i=0;i<n.length;i++) {
						if (n[i]==b)
							return 'hidden';
					}
				}
				
				return 'enabled';
			},
			callback: function(a) {
				var d = Blockly.Xml.blockToDom(a.block,true);
				var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
				Blockly.myBackpack.Blocks.push(b);
				
				var t = Blockly.getMainWorkspace();
				if (t.toolbox_.getSelectedItem()) {
					if (t.toolbox_.getSelectedItem().flyoutItems_=="MYBACKPACK") {
						var c=Blockly.myBackpack.flyoutCategory();
						t.getFlyout().show(c);
					}
				}
			},
			scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
			id: 'copy_to_MyBackpack',
			weight: 251,
		  };
		  Blockly.ContextMenuRegistry.registry.register(copyToMyBackpack);
		}
		  
		registerCopyToMyBackpack();

		function registerRemoveFromMyBackpack() {
		  if (Blockly.ContextMenuRegistry.registry.getItem('remove_from_MyBackpack')) {
			return;
		  }
		  const removeFromMyBackpack = {
			displayText: function(){
				return Blockly.Msg["MYBACKPACK_REMOVE"];
			},
			preconditionFn: function(a) {
				var d = Blockly.Xml.blockToDom(a.block,true);
				var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
				if (Blockly.myBackpack.Blocks) {
					var n = Blockly.myBackpack.Blocks;
					for (var i=0;i<n.length;i++) {
						if (n[i]==b)
							return 'enabled';
					}
				}
				
				return 'hidden';
			},
			callback: function(a) {
				var d = Blockly.Xml.blockToDom(a.block,true);
				var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
				if (Blockly.myBackpack.Blocks) {
					var i = Blockly.myBackpack.Blocks.indexOf(b);
					if (i!= -1) {
					  Blockly.myBackpack.Blocks.splice(i,1);
					}
				}
				
				var t = Blockly.getMainWorkspace();
				if (t.toolbox_.getSelectedItem()) {
					if (t.toolbox_.getSelectedItem().flyoutItems_=="MYBACKPACK") {
						var c=Blockly.myBackpack.flyoutCategory();
						t.getFlyout().show(c);
					}
				}
			},
			scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
			id: 'remove_from_MyBackpack',
			weight: 252,
		  };
		  Blockly.ContextMenuRegistry.registry.register(removeFromMyBackpack);
		}
		  
		registerRemoveFromMyBackpack();

		function registerRemoveAllMyBackpack() {
		  if (Blockly.ContextMenuRegistry.registry.getItem('remove_all_MyBackpack')) {
			return;
		  }
		  const removeAllMyBackpack = {
			displayText: function(){
				return Blockly.Msg["MYBACKPACK_REMOVE_ALL"];
			},
			preconditionFn: function(a) {
				var t = Blockly.getMainWorkspace();
				if (t.toolbox_.getSelectedItem()) {
					if (t.toolbox_.getSelectedItem().flyoutItems_=="MYBACKPACK") {
						return 'enabled';
					}
				}
				
				return 'hidden';
			},
			callback: function(a) {
				var result = confirm(Blockly.Msg["MYBACKPACK_REMOVE_ALL_TITLE"]);
				if (result) {
					Blockly.myBackpack.Blocks=[];
					
					var t = Blockly.getMainWorkspace();
					if (t.toolbox_.getSelectedItem()) {
						if (t.toolbox_.getSelectedItem().flyoutItems_=="MYBACKPACK") {
							var c=Blockly.myBackpack.flyoutCategory();
							t.getFlyout().show(c);
						}
					}				
				}
			},
			scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
			id: 'remove_all_MyBackpack',
			weight: 253,
		  };
		  Blockly.ContextMenuRegistry.registry.register(removeAllMyBackpack);
		}
		  
		registerRemoveAllMyBackpack();

		function registerFileImportMyBackpack() {
		  if (Blockly.ContextMenuRegistry.registry.getItem('file_import_MyBackpack')) {
			return;
		  }
		  const fileImportMyBackpack = {
			displayText: function(){
				return Blockly.Msg["MYBACKPACK_IMPORT_FILE"];
			},
			preconditionFn: function(a) {
				return 'enabled';
			},
			callback: function(a) {
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
								for (var i=0;i<child.length;i++){
									if (child[i].nodeName!="#text") {
										var b = Blockly.Xml.domToText(child[i]).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
										var n = Blockly.myBackpack.Blocks;
										var exist = false;
										for (var j=0;j<n.length;j++) {
											if (n[j]==b) { 
												exist = true;
											}
										}
										if (exist==false) Blockly.myBackpack.Blocks.push(b);
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
			},
			scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
			id: 'file_import_MyBackpack',
			weight: 254,
		  };
		  Blockly.ContextMenuRegistry.registry.register(fileImportMyBackpack);
		}
		  
		registerFileImportMyBackpack();

		function registerWorkspaceImportMyBackpack() {
		  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_import_MyBackpack')) {
			return;
		  }
		  const workspaceImportMyBackpack = {
			displayText: function(){
				return Blockly.Msg["MYBACKPACK_IMPORT_WORKSPACE"];
			},
			preconditionFn: function(a) {
				return 'enabled';
			},
			callback: function(a) {
				var result = confirm(Blockly.Msg["MYBACKPACK_IMPORT_WORKSPACE_TITLE"]);
				if (result) {
					Blockly.myBackpack.Blocks = [];
					var t = Blockly.getMainWorkspace().getTopBlocks();
					
					for (var i=0;i<t.length;i++){
						var d = Blockly.Xml.blockToDom(t[i],true);
						var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
						var n = Blockly.myBackpack.Blocks;
						var exist = false;
						for (var j=0;j<n.length;j++) {
							if (n[j]==b) { 
								exist = true;
							}
						}
						if (exist==false) Blockly.myBackpack.Blocks.push(b);
					}
				}
			},
			scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
			id: 'workspace_import_MyBackpack',
			weight: 255,
		  };
		  Blockly.ContextMenuRegistry.registry.register(workspaceImportMyBackpack);
		}
		  
		registerWorkspaceImportMyBackpack();

		function registerWorkspaceExportFile() {
		  if (Blockly.ContextMenuRegistry.registry.getItem('workspace_export_file')) {
			return;
		  }
		  const workspaceExportFile = {
			displayText: function(){
				return Blockly.Msg["MYBACKPACK_WORKSPACE_EXPORT_FILE"];
			},
			preconditionFn: function(a) {
				return 'enabled';
			},
			callback: function(a) {
				var xml = '<xml xmlns="https://developers.google.com/blockly/xml">';
				var t = Blockly.getMainWorkspace().getTopBlocks();
				for (var i=0;i<t.length;i++){
					var d = Blockly.Xml.blockToDom(t[i],true);
					var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
					xml += b;
				}
				xml += '</xml>';
				
				var link = document.createElement('a');
				link.download="backpack.xmlbp";
				link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml);
				document.body.appendChild(link);
				link.click();
				link.remove();		
			},
			scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
			id: 'workspace_export_file',
			weight: 256,
		  };
		  Blockly.ContextMenuRegistry.registry.register(workspaceExportFile);
		}
		  
		registerWorkspaceExportFile();


		function registerMyBackpackExportFile() {
		  if (Blockly.ContextMenuRegistry.registry.getItem('mybackpack_export_file')) {
			return;
		  }
		  const myBackpackExportFile = {
			displayText: function(){
				return Blockly.Msg["MYBACKPACK_MYBACKPACK_EXPORT_FILE"];
			},
			preconditionFn: function(a) {
				var t = Blockly.getMainWorkspace();
				if (t.toolbox_.getSelectedItem()) {
					if (t.toolbox_.getSelectedItem().flyoutItems_=="MYBACKPACK") {
						return 'enabled';
					}
				}
				
				return 'hidden';
			},
			callback: function(a) {
				var xml = '<xml xmlns="https://developers.google.com/blockly/xml">';
				var b = Blockly.myBackpack.Blocks;
				for (var i=0;i<b.length;i++){
					xml += b[i];
				}
				xml += '</xml>';
				
				var link = document.createElement('a');
				link.download="backpack.xmlbp";
				link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml);
				document.body.appendChild(link);
				link.click();
				link.remove();		
			},
			scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
			id: 'mybackpack_export_file',
			weight: 257,
		  };
		  Blockly.ContextMenuRegistry.registry.register(myBackpackExportFile);
		}
		  
		registerMyBackpackExportFile();

	}
}