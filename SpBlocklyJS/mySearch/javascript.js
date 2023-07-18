/**
 * @license
 * Copyright 2023 Taiwan
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview My Search.
 * @author https://www.facebook.com/francefu/ (ChungYi Fu)
 * @Update 7/18/2023 09:00 (Taiwan Standard Time)
 */

Blockly.mySearch={};
Blockly.MYSEARCH_CATEGORY_NAME="MYSEARCH";
Blockly.mySearch.NAME_TYPE=Blockly.MYSEARCH_CATEGORY_NAME;
Blockly.mySearch.Blocks=[];

Blockly.mySearch.flyoutCategory=function(a){
	var c=[];
	var b = Blockly.mySearch.Blocks;
	for (var i=0;i<b.length;i++) {
		c.push(Blockly.utils.xml.textToDom(b[i]));
	}
	return c
};

var registeryCallbackMySearch = function(){
	if(Blockly.getMainWorkspace() == null){
		setTimeout(registeryCallbackMySearch, 200);
	} else {
		Blockly.mySearch&&Blockly.mySearch.flyoutCategory&&(Blockly.getMainWorkspace().registerToolboxCategoryCallback(Blockly.MYSEARCH_CATEGORY_NAME,Blockly.mySearch.flyoutCategory));
	}
};
registeryCallbackMySearch();

function registerMySearch() {
  if (Blockly.ContextMenuRegistry.registry.getItem('mySearch')) {
	return;
  }
  const funMySearch = {
	displayText: function(){
		return Blockly.Msg["MYSEARCH_QUERY"];
	},
	preconditionFn: function(a) {
		return 'enabled';
	},
	callback: function(a) {
		mySearchBlocks();
	},
	scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
	id: 'mySearch',
	weight: 0,
  };
  Blockly.ContextMenuRegistry.registry.register(funMySearch);
}
registerMySearch();

function mySearchBlocks() {
	Blockly.mySearch.Blocks=[];
	Blockly.hideChaff();
	var keyword = prompt(Blockly.Msg["MYSEARCH_PROMPT"]);
	if (keyword) {
		var toolboxItems = Blockly.getMainWorkspace().toolbox_.getToolboxItems();
		for (var i=0;i<toolboxItems.length;i++) {
			var flyoutItems = toolboxItems[i].flyoutItems_;
			if (flyoutItems){
				for (var j=0;j<flyoutItems.length;j++) {
					if (flyoutItems[j].blockxml) {
						var block = Blockly.getMainWorkspace().newBlock(flyoutItems[j].type);
						for (var k=0;k<block.inputList.length;k++) {
							if (block.inputList[k].fieldRow) {
								for (var m=0;m<block.inputList[k].fieldRow.length;m++) {
									var fieldRow = block.inputList[k].fieldRow[m];
									//console.log(fieldRow);
									var type = "";
									if (fieldRow.menuGenerator_) {
										for (var n=0;n<fieldRow.menuGenerator_.length;n++) {
											if (fieldRow.menuGenerator_[n][0].toString().toLowerCase().indexOf(keyword.toLowerCase())!=-1&&fieldRow.menuGenerator_[n][0].toString().toLowerCase().indexOf(";base64,")==-1) {
												type = flyoutItems[j].type;
												break;
											}
										}
									}
									else if (fieldRow.value_.toString().toLowerCase().indexOf(keyword.toLowerCase())!=-1&&fieldRow.value_.toString().toLowerCase().indexOf(";base64,")==-1&&fieldRow.name===undefined) {
										type = flyoutItems[j].type;
									}
									if (type) {
										for (var p=0;p<categoryBlocks.length;p++) {
											if (categoryBlocks[p].indexOf('type="'+flyoutItems[j].type+'"')!=-1&&categoryBlocks[p].indexOf('disabled="true"')==-1) {
												var b = categoryBlocks[p].replace(/(?:\r\n|\r|\n|\t)/g, "");
												Blockly.mySearch.Blocks.push(b);
												break;
											}
										}
									}									
								}
							}
						}
						block.dispose(false);
					}
				}
			}				
		}
	}

	if (Blockly.mySearch.Blocks.length>0) {
		var toolbox = Blockly.getMainWorkspace().toolbox_;
		for (n=0;n<toolbox.contents_.length;n++) {
			if (toolbox.contents_[n].name_==Blockly.Msg["MYSEARCH"]) {
				var id = toolbox.contents_[n].id_;
				toolbox.setSelectedItem(toolbox.getToolboxItemById(id));
				break;
			}
		}
	}
}
