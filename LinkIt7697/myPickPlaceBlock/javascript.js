/**
 * @license
 * Copyright 2022 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Pick and place block
 * @author https://www.facebook.com/francefu/
 * @Update 13/2/2022 12:00 (Taiwan Standard Time)
 */

Blockly.Msg["MYPICKPLACEBLOCK_PICKPLACE_ENABLED"] = "Enable pick/place block";
Blockly.Msg["MYPICKPLACEBLOCK_PICKPLACE_DISABLED"] = "Disable pick/place block";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PICK"] = "Pick source block";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_NEXT"] = "Place source block [next]";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_PREVIOUS"] = "Place source block [previous]";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_INPUT"] = "Place source block [input #]";

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
		if (Blockly.myPickPlaceBlock.Block&&a.block.nextConnection&&Blockly.myPickPlaceBlock.enabled)
			return 'enabled';
		else
			return 'hidden';
    },
    callback: function(a) {
		var sourceBlock = getSourceBlock();
		targetBlock = a.block;	
		//console.log(sourceBlock);
		//console.log(targetBlock);		
		if (targetBlock.nextConnection&&sourceBlock.previousConnection) {
			if (sourceBlock.nextConnection.targetConnection)
				sourceBlock.nextConnection.targetConnection.disconnect();
			if (sourceBlock.previousConnection.targetConnection)
				sourceBlock.previousConnection.targetConnection.disconnect();
			if (targetBlock.nextConnection.targetConnection) {
				var oldNextBlock = targetBlock.nextConnection.targetConnection.sourceBlock_;
				targetBlock.nextConnection.targetConnection.disconnect();
			}
			if (targetBlock.previousConnection.targetConnection) {
				var oldpreviousBlock = targetBlock.previousConnection.targetConnection.sourceBlock_;
				targetBlock.previousConnection.targetConnection.disconnect();
			}			
			
			targetBlock.nextConnection.connect(sourceBlock.previousConnection);
			
			if(oldNextBlock)
				sourceBlock.nextConnection.connect(oldNextBlock.previousConnection);
			if(oldpreviousBlock)
				sourceBlock.previousConnection.connect(oldNextBlock.nextConnection);			
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
			return 'enabled';
		else
			return 'hidden';
    },
    callback: function(a) {
		var sourceBlock = getSourceBlock();
		targetBlock = a.block;
		//console.log(sourceBlock);
		//console.log(targetBlock);		
		if (targetBlock.previousConnection&&sourceBlock.nextConnection) {
			if (sourceBlock.nextConnection.targetConnection)
				sourceBlock.nextConnection.targetConnection.disconnect();
			if (sourceBlock.previousConnection.targetConnection)
				sourceBlock.previousConnection.targetConnection.disconnect();
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
			if (targetBlock.nextConnection.targetConnection) {
				var oldNextBlock = targetBlock.nextConnection.targetConnection.sourceBlock_;
				targetBlock.nextConnection.targetConnection.disconnect();
			}
			
			sourceBlock.nextConnection.connect(targetBlock.previousConnection);
			
			if (oldPreviousBlockInput)
				sourceBlock.previousConnection.connect(oldPreviousBlockInput.connection);
			else if(oldPreviousBlock)
				sourceBlock.previousConnection.connect(oldPreviousBlock.nextConnection);
			if(oldNextBlock)
				sourceBlock.nextConnection.connect(oldPreviousBlock.previousConnection);			
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
		return Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_INPUT"].replace("#",index);
	},
    preconditionFn: function(a) {
		if (Blockly.myPickPlaceBlock.Block&&a.block.inputList.length>index&&Blockly.myPickPlaceBlock.enabled)
			return 'enabled';
		else
			return 'hidden';
    },
    callback: function(a) {
		var sourceBlock = getSourceBlock();
		targetBlock = a.block;
		//console.log(sourceBlock);
		//console.log(targetBlock);		
		if (sourceBlock.outputConnection) {
			if (sourceBlock.outputConnection.targetConnection)
				sourceBlock.outputConnection.targetConnection.disconnect();
			sourceBlock.outputConnection.connect(targetBlock.inputList[index].connection);
		}
		else if (sourceBlock.previousConnection&&targetBlock.inputList[index].type==3) {
			if (sourceBlock.nextConnection.targetConnection)
				sourceBlock.nextConnection.targetConnection.disconnect();
			if (sourceBlock.previousConnection.targetConnection)
				sourceBlock.previousConnection.targetConnection.disconnect();
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
		return Blockly.getMainWorkspace().getBlockById(id);
	}
	else
		return Blockly.myPickPlaceBlock.Block;
}

for (var i=0;i<10;i++) {
	registerClickToPlace_output(i);
}
