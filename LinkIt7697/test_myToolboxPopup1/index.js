/**
 * @license
 * Copyright 2013 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @license
 * Copyright 2023 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Toolbox Popup
 * @author https://www.facebook.com/francefu/
 * @Update 4/16/2023 16:00 (Taiwan Standard Time)
 */

function init() {
  // Inject primary workspace.
  var primaryWorkspace = Blockly.inject('primaryDiv',
      {
        media: 'media/',
        toolbox: document.getElementById('toolbox1'),
        trashcan: false,
		horizontalLayout: true,
      });
	  
  // Inject secondary workspace.
  var secondaryWorkspace = Blockly.inject('secondaryDiv',
      {
        media: 'media/',
        toolbox: document.getElementById('toolbox2'),
        trashcan: true,
		grid:{spacing: 20,length: 3,colour: '#eee',snap: true},
		zoom:{controls: true, wheel: false, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2},
		trashcan: true,
		move:{
			scrollbars: {
			  horizontal: true,
			  vertical: true
			},
			drag: true,
			wheel: true
		},
      });
	  
	hideFlyout();
	
	var mouse_cursor = {};
	document.body.addEventListener('mousemove', getMousePosition, false); 
    function getMousePosition(e){  
        e=e||window.event;
        mouse_cursor.pageX = e.pageX;
        mouse_cursor.pageY = e.pageY;
        mouse_cursor.offsetX = e.offsetX;
        mouse_cursor.offsetY = e.offsetY;   
        mouse_cursor.clientX = e.clientX;
        mouse_cursor.clientY = e.clientY;
        mouse_cursor.screenX = e.screenX;
        mouse_cursor.screenY = e.screenY;  		
    }
	
	var newBlock = null;
	function primaryWorkspaceListener(event) {
		if (event.type=="create") {
			var block = primaryWorkspace.getBlockById(event.blockId);
			if (block) {
				block = Blockly.Xml.blockToDom(block, true);
				block = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">' + Blockly.Xml.domToText(block) + '</xml>');
				var id = Blockly.Xml.appendDomToWorkspace(block, secondaryWorkspace);
				newBlock = secondaryWorkspace.getBlockById(id[0]);
				if (newBlock) {
					newBlock.select();
					newBlock.bringToFront();
					primaryWorkspace.getAudioManager().play("click");
				}

				setTimeout(function () {
					hideFlyout();
				}, 300);
			}
		}
		else if (event.type=="var_create") {
			secondaryWorkspace.createVariable(event.varName);
			variableFlyoutCategory();
		}
		else if (event.type=="var_rename") {
			var secondaryVariableList = secondaryWorkspace.getAllVariables();
			for (var i=0;i<secondaryVariableList.length;i++) {
				if (secondaryVariableList[i].name==event.oldName)
					secondaryWorkspace.renameVariableById(secondaryVariableList[i].id_, event.newName);
			}
			variableFlyoutCategory();
		}
		else if (event.type=="var_delete") {
			var secondaryVariableList = secondaryWorkspace.getAllVariables();
			for (var i=0;i<secondaryVariableList.length;i++) {
				if (secondaryVariableList[i].name==event.oldName)
					secondaryWorkspace.renameVariableById(secondaryVariableList[i].id_, event.newName);
			}
			variableFlyoutCategory();
		}		
	}
	primaryWorkspace.addChangeListener(primaryWorkspaceListener);
	
	function secondaryWorkspaceListener(event) {
		if (event.type=="finished_loading"&&newBlock) {
			//console.log(mouse_cursor.pageX);
			//console.log(mouse_cursor.pageY);				
			//console.log(window.scrollX);
			//console.log(window.scrollY);
			var mouseClient = new Blockly.utils.Coordinate(mouse_cursor.pageX-window.scrollX, mouse_cursor.pageY-window.scrollY); 
			var mousePos = Blockly.utils.svgMath.screenToWsCoordinates(secondaryWorkspace, mouseClient);
			
			var blockPos = Blockly.utils.svgMath.getRelativeXY(newBlock.getSvgRoot());
			var scrollX = secondaryWorkspace.scrollX;
			var scrollY = secondaryWorkspace.scrollY;
			//console.log(mousePos.x);
			//console.log(scrollX);
			//console.log(blockPos.x);
			//console.log(mousePos.y);
			//console.log(scrollY);
			//console.log(blockPos.y);
			
			newBlock.moveBy(mousePos.x-blockPos.x, mousePos.y-blockPos.y+50);
			newBlock = null;
		}
		else if (event.type=="var_create"||event.type=="var_rename"||event.type=="var_delete") {
			var primaryVariableList = primaryWorkspace.getAllVariables();
			for (var i=0;i<primaryVariableList.length;i++) {
				primaryWorkspace.deleteVariableById(primaryVariableList[i].id_)
			}
			secondaryVariableList = secondaryWorkspace.getAllVariables();
			for (var j=0;j<secondaryVariableList.length;j++) {
				primaryWorkspace.createVariable(secondaryVariableList[j].name);
			}
		}		

		if (event.type=="click") {
				hideFlyout();
		}
	}	
	secondaryWorkspace.addChangeListener(secondaryWorkspaceListener);	
  
	document.getElementById('logic').onclick = function () {
		var xmlDoc = '<xml id="toolbox"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></xml>';
		
		showFlyout(this.id, xmlDoc);
	} 
	
	document.getElementById('loop').onclick = function () {
		var xmlDoc = '<xml id="toolbox"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_flow_statements"></block></xml>';
		
		showFlyout(this.id, xmlDoc);
	}

	document.getElementById('vari').onclick = function () {
		variableFlyoutCategory();
	}
	
	function variableFlyoutCategory(){		
		const c=document.createElement("button");
		c.setAttribute("text","%{BKY_NEW_VARIABLE}");
		c.setAttribute("callbackKey","CREATE_VARIABLE");

		let xmlDoc = Blockly.Xml.domToText(c);
		let a=Blockly.Variables.flyoutCategoryBlocks(primaryWorkspace);
		for (var i=0;i<a.length;i++) {
			xmlDoc +=Blockly.Xml.domToText(a[i]);
		}		
		xmlDoc = '<xml id="toolbox">'+xmlDoc+'</xml>';
		showFlyout('vari', xmlDoc);
		
		primaryWorkspace.registerButtonCallback("CREATE_VARIABLE",function(d){Blockly.Variables.createVariableButtonHandler(d.getTargetWorkspace())});
	}
	
	function showFlyout(el, xmlDoc) {
		if (xmlDoc) {
			var primaryDiv = document.getElementById("primaryDiv");
			var el = document.getElementById(el);
			if (primaryDiv&&el) {
				primaryDiv.style.display = "block";
				primaryWorkspace.updateToolbox(xmlDoc);
					
				primaryDiv.style.position = "absolute";
				primaryDiv.style.left = (window.scrollX + el.getBoundingClientRect().left) + "px";
				primaryDiv.style.top = (window.scrollY + el.getBoundingClientRect().top + el.clientHeight + 2) + "px";
				
				var ToolboxDiv = document.getElementsByClassName("blocklyFlyout");
				if (ToolboxDiv) {
					primaryDiv.style.height = ToolboxDiv[2].clientHeight + "px";
				}
			}
		}
	}
	
	function hideFlyout() {
	  var primaryDiv = document.getElementById("primaryDiv");
	  primaryDiv.style.display = "none";
	  
	  var blocklyFlyout = document.getElementsByClassName("blocklyFlyout");
	  for (var f=0;f<blocklyFlyout.length;f++) {
		  blocklyFlyout[f].style.display = "none";
	  } 
	}
}


