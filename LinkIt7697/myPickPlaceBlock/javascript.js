/*
Last Update Time : 13/2/2022 00:00 (Taiwan Standard Time)

Author: ChungYi Fu, Taiwan
https://github.com/fustyles
https://www.facebook.com/francefu/


*/

Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PICK"] = "Pick source block";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_NEXT"] = "Place source block [Next]";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_PREVIOUS"] = "Place source block [Previous]";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_OUTPUT0"] = "Place source block [Input 0]";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_OUTPUT1"] = "Place source block [Input 1]";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_OUTPUT2"] = "Place source block [Input 2]";
Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_OUTPUT3"] = "Place source block [Input 3]";

Blockly.myPickPlaceBlock={};
Blockly.myPickPlaceBlock.Block=null;
Blockly.myPickPlaceBlock.isFlyout=false;

function registerClickToPick() {
  if (Blockly.ContextMenuRegistry.registry.getItem('click_to_pick')) {
    return;
  }
  const clickToPick = {
    displayText: function(){
		return Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PICK"];
	},
    preconditionFn: function(a) {
		return 'enabled';
    },
    callback: function(a) {
		Blockly.myPickPlaceBlock.isFlyout=a.block.isInFlyout;
		Blockly.myPickPlaceBlock.Block=a.block;
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'click_to_pick',
    weight: 201,
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
		if (Blockly.myPickPlaceBlock.Block&&a.block.nextConnection)
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
    weight: 202,
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
		if (Blockly.myPickPlaceBlock.Block&&a.block.previousConnection)
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
			if (targetBlock.previousConnection.targetConnection) {
				var oldPreviousBlock = targetBlock.previousConnection.targetConnection.sourceBlock_;
				targetBlock.previousConnection.targetConnection.disconnect();
			}
			if (targetBlock.nextConnection.targetConnection) {
				var oldNextBlock = targetBlock.nextConnection.targetConnection.sourceBlock_;
				targetBlock.nextConnection.targetConnection.disconnect();
			}
			
			sourceBlock.nextConnection.connect(targetBlock.previousConnection);
			
			if(oldPreviousBlock)
				sourceBlock.previousConnection.connect(oldPreviousBlock.nextConnection);
			if(oldNextBlock)
				sourceBlock.nextConnection.connect(oldPreviousBlock.previousConnection);			
		}
		Blockly.myPickPlaceBlock.Block=null;
		targetBlock.workspace.render();
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'click_to_place_previous',
    weight: 203,
  };
  Blockly.ContextMenuRegistry.registry.register(clickToPlace_previous);
}
  
registerClickToPlace_previous();



function registerClickToPlace_output0() {
  if (Blockly.ContextMenuRegistry.registry.getItem('click_to_place_output0')) {
    return;
  }
  const clickToPlace_output0 = {
    displayText: function(){
		return Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_OUTPUT0"];
	},
    preconditionFn: function(a) {
		if (Blockly.myPickPlaceBlock.Block&&a.block.inputList.length>0)
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
			sourceBlock.outputConnection.connect(targetBlock.inputList[0].connection);
		}
		else if (sourceBlock.previousConnection&&targetBlock.inputList[0].type==3) {
			if (sourceBlock.nextConnection.targetConnection)
				sourceBlock.nextConnection.targetConnection.disconnect();
			if (sourceBlock.previousConnection.targetConnection)
				sourceBlock.previousConnection.targetConnection.disconnect();
			sourceBlock.previousConnection.connect(targetBlock.inputList[0].connection);
		}
		Blockly.myPickPlaceBlock.Block=null;
		targetBlock.workspace.render();
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'click_to_place_output0',
    weight: 204,
  };
  Blockly.ContextMenuRegistry.registry.register(clickToPlace_output0);
}
  
registerClickToPlace_output0();


function registerClickToPlace_output1() {
  if (Blockly.ContextMenuRegistry.registry.getItem('click_to_place_output1')) {
    return;
  }
  const clickToPlace_output1 = {
    displayText: function(){
		return Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_OUTPUT1"];
	},
    preconditionFn: function(a) {
		if (Blockly.myPickPlaceBlock.Block&&a.block.inputList.length>1)
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
			sourceBlock.outputConnection.connect(targetBlock.inputList[1].connection);
		}
		else if (sourceBlock.previousConnection&&targetBlock.inputList[1].type==3) {
			if (sourceBlock.nextConnection.targetConnection)
				sourceBlock.nextConnection.targetConnection.disconnect();
			if (sourceBlock.previousConnection.targetConnection)
				sourceBlock.previousConnection.targetConnection.disconnect();
			sourceBlock.previousConnection.connect(targetBlock.inputList[1].connection);
		}
		Blockly.myPickPlaceBlock.Block=null;
		targetBlock.workspace.render();
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'click_to_place_output1',
    weight: 205,
  };
  Blockly.ContextMenuRegistry.registry.register(clickToPlace_output1);
}
  
registerClickToPlace_output1();


function registerClickToPlace_output2() {
  if (Blockly.ContextMenuRegistry.registry.getItem('click_to_place_output2')) {
    return;
  }
  const clickToPlace_output2 = {
    displayText: function(){
		return Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_OUTPUT2"];
	},
    preconditionFn: function(a) {
		if (Blockly.myPickPlaceBlock.Block&&a.block.inputList.length>2)
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
			sourceBlock.outputConnection.connect(targetBlock.inputList[2].connection);
		}
		else if (sourceBlock.previousConnection&&targetBlock.inputList[2].type==3) {
			if (sourceBlock.nextConnection.targetConnection)
				sourceBlock.nextConnection.targetConnection.disconnect();
			if (sourceBlock.previousConnection.targetConnection)
				sourceBlock.previousConnection.targetConnection.disconnect();
			sourceBlock.previousConnection.connect(targetBlock.inputList[2].connection);
		}
		Blockly.myPickPlaceBlock.Block=null;
		targetBlock.workspace.render();
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'click_to_place_output2',
    weight: 206,
  };
  Blockly.ContextMenuRegistry.registry.register(clickToPlace_output2);
}
  
registerClickToPlace_output2();


function registerClickToPlace_output3() {
  if (Blockly.ContextMenuRegistry.registry.getItem('click_to_place_output3')) {
    return;
  }
  const clickToPlace_output3 = {
    displayText: function(){
		return Blockly.Msg["MYPICKPLACEBLOCK_CLICK_TO_PLACE_OUTPUT3"];
	},
    preconditionFn: function(a) {
		if (Blockly.myPickPlaceBlock.Block&&a.block.inputList.length>3)
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
			sourceBlock.outputConnection.connect(targetBlock.inputList[3].connection);
		}
		else if (sourceBlock.previousConnection&&targetBlock.inputList[3].type==3) {
			if (sourceBlock.nextConnection.targetConnection)
				sourceBlock.nextConnection.targetConnection.disconnect();
			if (sourceBlock.previousConnection.targetConnection)
				sourceBlock.previousConnection.targetConnection.disconnect();
			sourceBlock.previousConnection.connect(targetBlock.inputList[3].connection);
		}
		Blockly.myPickPlaceBlock.Block=null;
		targetBlock.workspace.render();
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'click_to_place_output3',
    weight: 207,
  };
  Blockly.ContextMenuRegistry.registry.register(clickToPlace_output3);
}
  
registerClickToPlace_output3();

function getSourceBlock() {
	var block = Blockly.myPickPlaceBlock.Block;
	
	if (Blockly.myPickPlaceBlock.isFlyout) {
		block = Blockly.Xml.blockToDom(block, true);
		block = Blockly.Xml.textToDom('<xml>' + Blockly.Xml.domToText(block).replace('xmlns="https://developers.google.com/blockly/xml"',"").replace(/(?:\r\n|\r|\n|\t)/g, "") + '</xml>');
		var id = Blockly.Xml.appendDomToWorkspace(block, Blockly.getMainWorkspace());
		return Blockly.getMainWorkspace().getBlockById(id);
	}
	else
		return Blockly.myPickPlaceBlock.Block;
}