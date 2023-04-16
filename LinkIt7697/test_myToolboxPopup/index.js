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
 * @Update 4/16/2023 21:30 (Taiwan Standard Time)
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
	
	hideFlyout();
	
	var newBlock = null;
	var timerDelete;
	var timerDeleteGroup = "";
	function primaryWorkspaceListener(event) {
		if (event.type=="create") {
			var block = primaryWorkspace.getBlockById(event.blockId);
			if (block) {
				block = Blockly.Xml.blockToDom(block, true);
				block = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml">' + Blockly.Xml.domToText(block) + '</xml>');
				var id = Blockly.Xml.appendDomToWorkspace(block, secondaryWorkspace);
				
				
				var newBlock = secondaryWorkspace.getBlockById(id[0]);
				if (newBlock) {
					var position = Blockly.utils.svgMath.getRelativeXY(newBlock.getSvgRoot());
					var x = position.x;
					var y = position.y;
					var scrollX = secondaryWorkspace.scrollX;
					var scrollY = secondaryWorkspace.scrollY;
					
					var wsWidth = secondaryWorkspace.getParentSvg().width.baseVal.value;
					var wsHeight = secondaryWorkspace.getParentSvg().height.baseVal.value;
					newBlock.moveBy(wsWidth/2-newBlock.width/2-scrollX-x, wsHeight/2-newBlock.height/2-scrollY-y);
					
					newBlock.select();
					newBlock.bringToFront();
					primaryWorkspace.getAudioManager().play("click");
				}

				setTimeout(function () {
					hideFlyout();
				}, 300);
			}
		}
		else if (event.type=="finished_loading"||event.type=="delete") {
			proceduresFlyoutCategory();
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
			alert("Not allowed to delete in the toolbox.");
			primaryWorkspace.createVariable(event.varName);
			variableFlyoutCategory();
		}		
	}
	primaryWorkspace.addChangeListener(primaryWorkspaceListener);
	
	function secondaryWorkspaceListener(event) {
		if (event.type=="finished_loading"&&newBlock) {
			var mouseClient = new Blockly.utils.Coordinate(mouse_cursor.pageX-window.scrollX, mouse_cursor.pageY-window.scrollY); 
			var mousePos = Blockly.utils.svgMath.screenToWsCoordinates(secondaryWorkspace, mouseClient);
			var blockPos = Blockly.utils.svgMath.getRelativeXY(newBlock.getSvgRoot());
			var scrollX = secondaryWorkspace.scrollX;
			var scrollY = secondaryWorkspace.scrollY;
			
			newBlock.moveBy(mousePos.x-blockPos.x, mousePos.y-blockPos.y+50);
			newBlock = null;
		}
		else if (event.type=="var_create"||event.type=="var_rename"||event.type=="var_delete") {
			primaryWorkspace.clear();
			var primaryVariableList = primaryWorkspace.getAllVariables();
			for (var i=0;i<primaryVariableList.length;i++) {
				primaryWorkspace.deleteVariableById(primaryVariableList[i].id_)
			}
			secondaryVariableList = secondaryWorkspace.getAllVariables();
			for (var j=0;j<secondaryVariableList.length;j++) {
				primaryWorkspace.createVariable(secondaryVariableList[j].name);
			}
		}
		else if (event.type=="create") {
			if (event.json) {
				if (event.json.type.indexOf("procedures")!=-1)
					proceduresFlyoutCategory();
			}
		}
		else if (event.type=="change") {
			var block = secondaryWorkspace.getBlockById(event.blockId);
			if (block) {
				if (block.type.indexOf("procedures")!=-1)
					proceduresFlyoutCategory();
			}
		}
		else if (event.type=="delete") {
			if (event.oldJson) {
				if (event.oldJson.type.indexOf("procedures")!=-1)
					proceduresFlyoutCategory();
			}
		}		

		if (event.type=="click") {
			hideFlyout();
		}
	}	
	secondaryWorkspace.addChangeListener(secondaryWorkspaceListener);	
  
	var btnClickState = false;
	document.getElementById('logic').onclick = function () {
		var xmlDoc = '<xml id="toolbox"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></xml>';
		
		btnClickState = true;
		showFlyout(this.id, xmlDoc);
	} 
	
	document.getElementById('loop').onclick = function () {
		var xmlDoc = '<xml id="toolbox"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_flow_statements"></block></xml>';
		
		btnClickState = true;
		showFlyout(this.id, xmlDoc);
	}

	document.getElementById('variable').onclick = function () {
		btnClickState = true;
		variableFlyoutCategory();
	}
	
	document.getElementById('procedures').onclick = function () {
		btnClickState = true;
		proceduresFlyoutCategory();
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
		showFlyout('variable', xmlDoc);
		
		primaryWorkspace.registerButtonCallback("CREATE_VARIABLE",function(d){Blockly.Variables.createVariableButtonHandler(d.getTargetWorkspace())});
	}
	
	function proceduresFlyoutCategory(){
		function b(f,g){
			for(let k=0;k<f.length;k++){
				var h=f[k][0];
				const l=f[k][1]
				,m=document.createElement("block");
				m.setAttribute("type",g);
				m.setAttribute("gap","16");
				const n=document.createElement("mutation");
				n.setAttribute("name",h);
				m.appendChild(n);
				for(h=0;h<l.length;h++){
					const p=document.createElement("arg");
					p.setAttribute("name",l[h]);
					n.appendChild(p)
				}
				c.push(m)
			}
		}
		const c=[];
		if(Blockly.Blocks.procedures_defnoreturn){
			var d=document.createElement("block");
			d.setAttribute("type","procedures_defnoreturn");
			d.setAttribute("gap","16");
			var e=document.createElement("field");
			e.setAttribute("name","NAME");
			e.appendChild(Blockly.utils.xml.createTextNode(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE));
			d.appendChild(e);
			c.push(d)
		}
		Blockly.Blocks.procedures_defreturn&&(d=document.createElement("block")
			,d.setAttribute("type","procedures_defreturn")
			,d.setAttribute("gap","16")
			,e=document.createElement("field")
			,e.setAttribute("name","NAME")
			,e.appendChild(Blockly.utils.xml.createTextNode(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE))
			,d.appendChild(e)
			,c.push(d));
		Blockly.Blocks.procedures_ifreturn&&(d=document.createElement("block")
			,d.setAttribute("type","procedures_ifreturn")
			,d.setAttribute("gap","16")
			,c.push(d));
		c.length&&c[c.length-1].setAttribute("gap","24");
		
		
		let a=Blockly.Procedures.allProcedures(secondaryWorkspace);
		
		b(a[0],"procedures_callnoreturn");
		b(a[1],"procedures_callreturn");
		
		let xmlDoc = "";
		for (var i=0;i<c.length;i++) {
			xmlDoc +=Blockly.Xml.domToText(c[i]);
		}
		xmlDoc = '<xml id="toolbox">'+xmlDoc+'</xml>';
		showFlyout('procedures', xmlDoc);
	};	
	
	function showFlyout(el, xmlDoc) {
		var primaryDiv = document.getElementById("primaryDiv");
		if (btnClickState == true) {
			btnClickState = false;
			primaryDiv.style.display = "block";
		}

		primaryWorkspace.updateToolbox(xmlDoc);
		
		var el = document.getElementById(el);
		primaryDiv.style.position = "absolute";
		primaryDiv.style.left = (window.scrollX + el.getBoundingClientRect().left) + "px";
		primaryDiv.style.top = (window.scrollY + el.getBoundingClientRect().top + el.clientHeight + 2) + "px";
		
		var ToolboxDiv = document.getElementsByClassName("blocklyFlyout");
		if (ToolboxDiv) {
			primaryDiv.style.height = ToolboxDiv[2].clientHeight + "px";
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