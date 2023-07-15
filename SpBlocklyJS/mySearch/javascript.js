/*
Last Update Time : 7/16/2023 00:00 (Taiwan Standard Time)

Author: ChungYi Fu, Taiwan
https://github.com/fustyles
https://www.facebook.com/francefu/

@license
Copyright 2023 Taiwan (ChungYi Fu)
SPDX-License-Identifier: Apache-2.0
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

var checkMySearch = function(){
	if(Blockly.getMainWorkspace() == null){
		setTimeout(checkMySearch, 200);
	} else {
		Blockly.mySearch&&Blockly.mySearch.flyoutCategory&&(Blockly.getMainWorkspace().registerToolboxCategoryCallback(Blockly.MYSEARCH_CATEGORY_NAME,Blockly.mySearch.flyoutCategory));
	}
};
checkMySearch();

function registerMySearch() {
  if (Blockly.ContextMenuRegistry.registry.getItem('mySearch')) {
	return;
  }
  const funQueryMySearch = {
	displayText: function(){
		return Blockly.Msg["MYSEARCH_QUERY"];
	},
	preconditionFn: function(a) {
		return 'enabled';
	},
	callback: function(a) {
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
										var value_ = block.inputList[k].fieldRow[m].value_.toString();
										if (value_.toLowerCase().indexOf(keyword.toLowerCase())!=-1) {
											var d = Blockly.Xml.blockToDom(block,true);
											var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
											Blockly.mySearch.Blocks.push(b);
											k=block.inputList.length;
											break;
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
			for (n=0;n<Blockly.getMainWorkspace().toolbox_.contents_.length;n++) {
				if (Blockly.getMainWorkspace().toolbox_.contents_[n].name_==Blockly.Msg["MYSEARCH"]) {
					var id = Blockly.getMainWorkspace().toolbox_.contents_[n].id_;
					console.log(id);
					Blockly.getMainWorkspace().toolbox_.setSelectedItem(Blockly.getMainWorkspace().toolbox_.getToolboxItemById(id));
					break;
				}
			}
		}
	},
	scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
	id: 'mySearch',
	weight: 0,
  };
  Blockly.ContextMenuRegistry.registry.register(funQueryMySearch);
}
  
registerMySearch();
