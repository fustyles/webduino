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

/*

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

function registerOpenBlockToolbox() {
  if (Blockly.ContextMenuRegistry.registry.getItem('open_block_toolbox')) {
    return;
  }
  const openBlockToolbox = {
    displayText: function(){
		return Blockly.Msg["MYSEARCH_OPENBLOCKTOOLBOX"];
	},
    preconditionFn: function(a) {
		return 'enabled';
    },
    callback: function(a) {
		searchBlockCategory(a.block.type)
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'open_block_toolbox',
    weight: 400,
  };
  Blockly.ContextMenuRegistry.registry.register(openBlockToolbox);
}
  
registerOpenBlockToolbox();

function searchBlocks() {
	var opt = {
		dialogClass: "dlg-no-close",
		draggable: true,			
		autoOpen: false,
		resizable: true,
		modal: false,
		//show: "blind",
		//hide: "blind",			
		width: 260,
		height: 190,
		buttons: [	
			{
				text: Blockly.Msg.BUTTON_CLOSE,
				click: function() {
					$(this).dialog("close");
				}
			},
			{
				text: Blockly.Msg.BUTTON_CLEAR,
				click: function() {
					document.getElementById('searchblocks_keyword').value="";
				}
			},		
			{
				text: Blockly.Msg["MYSEARCH"],
				click: function() {
					searchBlocksKeyboard(document.getElementById('searchblocks_keyword').value);
				}
			}
		],
		title: Blockly.Msg["MYSEARCH_QUERY"]
	};
	$("#dialog_searchblocks").dialog(opt).dialog("open");
	event.preventDefault();
}

function searchBlocksKeyboard(keyword) {
	Blockly.mySearch.Blocks=[];
	Blockly.hideChaff();
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
									var type = "";
									if (fieldRow.menuGenerator_) {
										for (var n=0;n<fieldRow.menuGenerator_.length;n++) {
											if (fieldRow.menuGenerator_[n][0].toString().toLowerCase().indexOf(keyword.toLowerCase())!=-1&&fieldRow.menuGenerator_[n][0].toString().toLowerCase().indexOf(";base64,")==-1) {
												type = flyoutItems[j].type;
												break;
											}
										}
									} else if (fieldRow.value_.toString().toLowerCase().indexOf(keyword.toLowerCase())!=-1&&fieldRow.value_.toString().toLowerCase().indexOf(";base64,")==-1&&fieldRow.name===undefined) {
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

function searchBlockCategory(blockType) {
	Blockly.hideChaff();
	var toolbox = Blockly.getMainWorkspace().toolbox_;
	if (toolbox.contents_) {
		for (var i=0;i<toolbox.contents_.length;i++) {
			if (toolbox.contents_[i].flyoutItems_) {
				for (var j=0;j<toolbox.contents_[i].flyoutItems_.length;j++) {
					if (toolbox.contents_[i].flyoutItems_[j].kind=="BLOCK") {
						if (toolbox.contents_[i].flyoutItems_[j].type==blockType) {
							categoryExpand = [];
							parentCategoryExpand(toolbox.contents_[i].parent_);
							
							var id = toolbox.contents_[i].id_;
							toolbox.setSelectedItem(toolbox.getToolboxItemById(id));
							return;
						}
					}
				}
			}
		}	
	}
}

function parentCategoryExpand(parent_) {
	if (parent_) {
		if (parent_.id_) {
			categoryExpand = [parent_.id_].concat(categoryExpand);
			if (parent_.parent_) {
				parentCategoryExpand(parent_.parent_);
			} else {
				for (var i=0;i<categoryExpand.length;i++) {
					var toolbox = Blockly.getMainWorkspace().toolbox_;
					toolbox.getToolboxItemById(categoryExpand[i]).setExpanded(true);
					toolbox.setSelectedItem(toolbox.getToolboxItemById(categoryExpand[i]));
				}
			}
		}
	}
}
