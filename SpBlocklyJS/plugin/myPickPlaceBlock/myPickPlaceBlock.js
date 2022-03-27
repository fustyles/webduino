/**
 * @license
 * Copyright 2022 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Pick and place block
 * @author https://www.facebook.com/francefu/
 * @Update 15/2/2022 11:00 (Taiwan Standard Time)
 */

Blockly.Msg["MYPICKPLACEBLOCK_PICKPLACE_ENABLED"] = "啟用 挑選/置放 積木";
Blockly.Msg["MYPICKPLACEBLOCK_PICKPLACE_DISABLED"] = "停用 挑選/置放 積木";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PICK"] = "挑選積木";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_NEXT"] = "置放積木 (下方)";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_PREVIOUS"] = "置放積木 (上方)";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_INPUT"] = "置放積木 [輸入: #]";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_INPUT_NAME"] = ["","","","","","","","","",""];

Blockly.myPickPlaceBlock={};
Blockly.myPickPlaceBlock.enabled=false;
Blockly.myPickPlaceBlock.Block=null;
Blockly.myPickPlaceBlock.isFlyout=false;


function registerPickPlaceEnabled() {
  if (Blockly.ContextMenuRegistry.registry.getItem('pick_place_enabled')) {
    return;
  }
  const pickPlaceEnabled = {
    displayText: function(){
		if (Blockly.myPickPlaceBlock.enabled)
			return Blockly.Msg["MYPICKPLACEBLOCK_PICKPLACE_DISABLED"];
		else
			return Blockly.Msg["MYPICKPLACEBLOCK_PICKPLACE_ENABLED"];
	},
    preconditionFn: function(a) {
		return 'enabled';
    },
    callback: function(a) {
		Blockly.myPickPlaceBlock.enabled=!Blockly.myPickPlaceBlock.enabled;
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'pick_place_enabled',
    weight: 210,
  };
  Blockly.ContextMenuRegistry.registry.register(pickPlaceEnabled);
}
  
registerPickPlaceEnabled();


function registerClickToPick() {
  if (Blockly.ContextMenuRegistry.registry.getItem('click_to_pick')) {
    return;
  }
  const clickToPick = {
    displayText: function(){
		return Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PICK"];
	},
    preconditionFn: function(a) {
		if (Blockly.myPickPlaceBlock.enabled)
			return 'enabled';
		else
			return 'hidden';
    },
    callback: function(a) {
		Blockly.myPickPlaceBlock.isFlyout=a.block.isInFlyout;
		Blockly.myPickPlaceBlock.Block=a.block;
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'click_to_pick',
    weight: 211,
  };
  Blockly.ContextMenuRegistry.registry.register(clickToPick);
}
  
registerClickToPick();


function registerClickToPlace_next() {
  if (Blockly.ContextMenuRegistry.registry.getItem('click_to_place_next')) {
    return;
  }
  const clickToPlace_next = {
    displayText: function(){
		return Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_NEXT"];
	},
    preconditionFn: function(a) {
		if (Blockly.myPickPlaceBlock.Block&&a.block.nextConnection&&Blockly.myPickPlaceBlock.enabled) {
			if (Blockly.myPickPlaceBlock.Block.id!=a.block.id)
				return 'enabled';
			else
				return 'hidden';
		}
		else
			return 'hidden';
    },
    callback: function(a) {
		var sourceBlock = getSourceBlock();
		targetBlock = a.block;	
		//console.log(sourceBlock);
		//console.log(targetBlock);		
		if (targetBlock.nextConnection&&sourceBlock.previousConnection) {
			if (sourceBlock.nextConnection.targetConnection) {
				var oldNextBlock_s = sourceBlock.nextConnection.targetConnection.sourceBlock_;
				sourceBlock.nextConnection.targetConnection.disconnect();
			}
			if (sourceBlock.previousConnection.targetConnection) {
				if (sourceBlock.parentBlock_) {
					for (var i in sourceBlock.parentBlock_.inputList) {
						var pBlock = sourceBlock.parentBlock_.getInputTargetBlock(sourceBlock.parentBlock_.inputList[i].name);
						if (pBlock) {
							if (sourceBlock.id==pBlock.id) {
								var oldPreviousBlockInput_s = sourceBlock.parentBlock_.inputList[i];
								break;
							}
						}
					}
				}
				
				var oldPreviousBlock_s = sourceBlock.previousConnection.targetConnection.sourceBlock_;
				sourceBlock.previousConnection.targetConnection.disconnect();
			}
			if (oldNextBlock_s&&oldPreviousBlockInput_s)
				oldNextBlock_s.previousConnection.connect(oldPreviousBlockInput_s.connection);
			else if (oldNextBlock_s&&oldPreviousBlock_s)
				oldPreviousBlock_s.nextConnection.connect(oldNextBlock_s.previousConnection);
			
			if (targetBlock.nextConnection.targetConnection) {
				var oldNextBlock_t = targetBlock.nextConnection.targetConnection.sourceBlock_;
				targetBlock.nextConnection.targetConnection.disconnect();
			}		
			
			targetBlock.nextConnection.connect(sourceBlock.previousConnection);
			
			if(oldNextBlock_t)
				sourceBlock.nextConnection.connect(oldNextBlock_t.previousConnection);			
		}
		Blockly.myPickPlaceBlock.Block=null;
		targetBlock.workspace.render();
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'click_to_place_next',
    weight: 212,
  };
  Blockly.ContextMenuRegistry.registry.register(clickToPlace_next);
}
  
registerClickToPlace_next();


function registerClickToPlace_previous() {
  if (Blockly.ContextMenuRegistry.registry.getItem('click_to_place_previous')) {
    return;
  }
  const clickToPlace_previous = {
    displayText: function(){
		return Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_PREVIOUS"];
	},
    preconditionFn: function(a) {
		if (Blockly.myPickPlaceBlock.Block&&a.block.previousConnection&&Blockly.myPickPlaceBlock.enabled)
			if (Blockly.myPickPlaceBlock.Block.id!=a.block.id)
				return 'enabled';
			else
				return 'hidden';
		else
			return 'hidden';
    },
    callback: function(a) {
		var sourceBlock = getSourceBlock();
		targetBlock = a.block;
		//console.log(sourceBlock);
		//console.log(targetBlock);		
		if (targetBlock.previousConnection&&sourceBlock.nextConnection) {
			if (sourceBlock.nextConnection.targetConnection) {
				var oldNextBlock_s = sourceBlock.nextConnection.targetConnection.sourceBlock_;
				sourceBlock.nextConnection.targetConnection.disconnect();
			}
			if (sourceBlock.previousConnection.targetConnection) {
				if (sourceBlock.parentBlock_) {
					for (var i in sourceBlock.parentBlock_.inputList) {
						var pBlock = sourceBlock.parentBlock_.getInputTargetBlock(sourceBlock.parentBlock_.inputList[i].name);
						if (pBlock) {
							if (sourceBlock.id==pBlock.id) {
								var oldPreviousBlockInput_s = sourceBlock.parentBlock_.inputList[i];
								break;
							}
						}
					}
				}
				
				var oldPreviousBlock_s = sourceBlock.previousConnection.targetConnection.sourceBlock_;
				sourceBlock.previousConnection.targetConnection.disconnect();
			}
			if (oldNextBlock_s&&oldPreviousBlockInput_s)
				oldNextBlock_s.previousConnection.connect(oldPreviousBlockInput_s.connection);
			else if (oldNextBlock_s&&oldPreviousBlock_s)
				oldPreviousBlock_s.nextConnection.connect(oldNextBlock_s.previousConnection);
			
			if (targetBlock.parentBlock_) {
				for (var i in targetBlock.parentBlock_.inputList) {
					var pBlock = targetBlock.parentBlock_.getInputTargetBlock(targetBlock.parentBlock_.inputList[i].name);
					if (pBlock) {
						if (targetBlock.id==pBlock.id) {
							var oldPreviousBlockInput = targetBlock.parentBlock_.inputList[i];
							break;
						}
					}
				}
			}
			else if (targetBlock.previousConnection.targetConnection) {
				var oldPreviousBlock = targetBlock.previousConnection.targetConnection.sourceBlock_;
				targetBlock.previousConnection.targetConnection.disconnect();
			}
			
			sourceBlock.nextConnection.connect(targetBlock.previousConnection);
			
			if (oldPreviousBlockInput)
				sourceBlock.previousConnection.connect(oldPreviousBlockInput.connection);
			else if(oldPreviousBlock)
				sourceBlock.previousConnection.connect(oldPreviousBlock.nextConnection);			
		}
		Blockly.myPickPlaceBlock.Block=null;
		targetBlock.workspace.render();
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'click_to_place_previous',
    weight: 213,
  };
  Blockly.ContextMenuRegistry.registry.register(clickToPlace_previous);
}
  
registerClickToPlace_previous();



function registerClickToPlace_output(index) {
  if (Blockly.ContextMenuRegistry.registry.getItem('click_to_place_input'+index)) {
    return;
  }
  const clickToPlace_input = {
    displayText: function(){
		return Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_INPUT"].replace("#",Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_INPUT_NAME"][index]);
	},
    preconditionFn: function(a) {
		if (Blockly.myPickPlaceBlock.Block&&a.block.inputList.length>index&&Blockly.myPickPlaceBlock.enabled&&a.block.inputList[index].name) {			
			if (Blockly.myPickPlaceBlock.Block.id!=a.block.id&&(a.block.inputList[index].type==1||a.block.inputList[index].type==3)) {
				Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_INPUT_NAME"][index]=a.block.inputList[index].name;
				return 'enabled';
			}
			else
				return 'hidden';
		}
		else {
			Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_INPUT_NAME"][index]=index;
			return 'hidden';
		}
    },
    callback: function(a) {
		var sourceBlock = getSourceBlock();
		targetBlock = a.block;
		//console.log(sourceBlock);
		//console.log(targetBlock);
		
		
		if (sourceBlock.nextConnection) {
			if (sourceBlock.nextConnection.targetConnection) {
				var oldNextBlock_s = sourceBlock.nextConnection.targetConnection.sourceBlock_;
				sourceBlock.nextConnection.targetConnection.disconnect();
			}
		}
		if (sourceBlock.previousConnection) {
			if (sourceBlock.parentBlock_) {
				for (var i in sourceBlock.parentBlock_.inputList) {
					var pBlock = sourceBlock.parentBlock_.getInputTargetBlock(sourceBlock.parentBlock_.inputList[i].name);
					if (pBlock) {
						if (sourceBlock.id==pBlock.id) {
							var oldPreviousBlockInput_s = sourceBlock.parentBlock_.inputList[i];
							break;
						}
					}
				}
			}
			if (sourceBlock.previousConnection.targetConnection) {
				var oldPreviousBlock_s = sourceBlock.previousConnection.targetConnection.sourceBlock_;
				sourceBlock.previousConnection.targetConnection.disconnect();
			}
		}
		if (oldNextBlock_s&&oldPreviousBlockInput_s)
			oldNextBlock_s.previousConnection.connect(oldPreviousBlockInput_s.connection);
		else if (oldNextBlock_s&&oldPreviousBlock_s)
			oldPreviousBlock_s.nextConnection.connect(oldNextBlock_s.previousConnection);
		
		if (targetBlock.parentBlock_) {
			if (targetBlock.parentBlock_.id==sourceBlock.id)
				targetBlock.unplug();
		}
		if (sourceBlock.parentBlock_) {
			if (targetBlock.id==sourceBlock.parentBlock_.id)
				sourceBlock.unplug();
		}
			
		if (sourceBlock.outputConnection) {
			if (sourceBlock.outputConnection.targetConnection)
				sourceBlock.outputConnection.targetConnection.disconnect();
			sourceBlock.outputConnection.connect(targetBlock.inputList[index].connection);
		}
		else if (sourceBlock.previousConnection&&targetBlock.inputList[index].type==3) {
			sourceBlock.previousConnection.connect(targetBlock.inputList[index].connection);
		}

		Blockly.myPickPlaceBlock.Block=null;
		targetBlock.workspace.render();
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'click_to_place_input'+index,
    weight: 214+index,
  };
  Blockly.ContextMenuRegistry.registry.register(clickToPlace_input);
}

function getSourceBlock() {
	var block = Blockly.myPickPlaceBlock.Block;
	
	if (Blockly.myPickPlaceBlock.isFlyout) {
		block = Blockly.Xml.blockToDom(block, true);
		block = Blockly.Xml.textToDom('<xml>' + Blockly.Xml.domToText(block).replace(/(?:\r\n|\r|\n|\t)/g, "") + '</xml>');
		var id = Blockly.Xml.appendDomToWorkspace(block, Blockly.getMainWorkspace());
		block = Blockly.getMainWorkspace().getBlockById(id);
		return block;
	}
	else
		return Blockly.myPickPlaceBlock.Block;
}

for (var i=0;i<Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_INPUT_NAME"].length;i++) {
	registerClickToPlace_output(i);
}