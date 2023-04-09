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
 * @fileoverview Blocks Flydown.
 * @author https://www.facebook.com/francefu/
 * @Update 4/19/2023 15:00 (Taiwan Standard Time)
 */

function init() {
  // Inject primary workspace.
  const primaryWorkspace = Blockly.inject('primaryDiv',
      {
        media: 'media/',
        toolbox: document.getElementById('toolbox1'),
        trashcan: false,
		scrollbars: false,
      });
	  
  // Inject secondary workspace.
  var secondaryWorkspace = Blockly.inject('secondaryDiv',
      {
        media: 'media/',
        toolbox: toolbox2,
        trashcan: true,
		grid:{spacing: 20,length: 3,colour: '#eee',snap: true},
		zoom:{controls: true, wheel: false, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2},
		trashcan: true,
		horizontalLayout: true,
		move:{
			scrollbars: {
			  horizontal: true,
			  vertical: true
			},
			drag: true,
			wheel: true
		},
      });
	  
  primaryWorkspace.addChangeListener(primaryWorkspaceToolboxClick);
  secondaryWorkspace.addChangeListener(secondaryWorkspaceEvent);
  
  var blocklyFlyout = document.getElementsByClassName("blocklyFlyout");
  for (var f=0;f<blocklyFlyout.length;f++) {
	  blocklyFlyout[f].style.display = "none";
	  blocklyFlyout[f].addEventListener('dblclick', function(){
		  resetFlyout();
	  });
  }
  
  function resetFlyout() {
	  primaryWorkspace.toolbox_.clearSelection();
	  var blocklyFlyout = document.getElementsByClassName("blocklyFlyout");
	  for (var f=0;f<blocklyFlyout.length;f++)
		  blocklyFlyout[f].style.display = "none";
  }

  function primaryWorkspaceToolboxClick(event) {
    if (event.type==="toolbox_item_select"&&event.workspaceId===primaryWorkspace.id) {
		toolbox2 = {
		  "kind": "flyoutToolbox",
		  "contents": []
		};
		if (!event.newItem) {
			secondaryWorkspace.updateToolbox(toolbox2);
			resetFlyout();
		}
		else {
			if (primaryWorkspace.toolbox_.selectedItem_) {
				var xml = document.getElementById('toolbox');
				var itemName = primaryWorkspace.toolbox_.selectedItem_.toolboxItemDef_.name;
				if (itemName=="Variables") {
					variableFlyoutCategory();
					return;
				}
				else if (itemName=="Functions") {
					proceduresFlyoutCategory();
					return;
				}
				for (var i=0;i<xml.childNodes.length;i++) {
					if (xml.childNodes[i].nodeName.toLowerCase()=="category") {
						if (xml.childNodes[i].getAttribute('name')==itemName) {
							var blocks = xml.childNodes[i].childNodes;
							
							for (var j=0;j<blocks.length;j++) {
								if (blocks[j].nodeName.toLowerCase()=="block") {
									toolbox2.contents.push({"kind": "block", "type": blocks[j].getAttribute('type')});
								}
							}
							secondaryWorkspace.updateToolbox(toolbox2);
							
							return;
						}						
					}
				}
				secondaryWorkspace.updateToolbox(toolbox2);
			}
		}
    }
  }	 
  
  function secondaryWorkspaceEvent(event) {
	if (primaryWorkspace.toolbox_.selectedItem_) {
		if (primaryWorkspace.toolbox_.selectedItem_.toolboxItemDef_.name=="Variables") {
			if (event.type=="var_create"||event.type=="var_delete") {
				variableFlyoutCategory();
			}	
		}
		else if (primaryWorkspace.toolbox_.selectedItem_.toolboxItemDef_.name=="Functions") {
			if (event.type==="create"&&event.workspaceId===secondaryWorkspace.id) {
				var blockType = secondaryWorkspace.getBlockById(event.blockId).type;
				if (blockType=="procedures_defnoreturn"||blockType=="procedures_defreturn") {
					proceduresFlyoutCategory();
				}
			}
			if (event.type==="delete"&&event.workspaceId===secondaryWorkspace.id) {
				if (event.oldXml.outerHTML.indexOf("procedures_defnoreturn")!=-1||event.oldXml.outerHTML.indexOf("procedures_defreturn")!=-1) {
					proceduresFlyoutCategory();
				}
			}	
		}
	}
  }	

	function variableFlyoutCategory(){
		const c=document.createElement("button");
		c.setAttribute("text","%{BKY_NEW_VARIABLE}");
		c.setAttribute("callbackKey","CREATE_VARIABLE");

		let e = Blockly.Xml.domToText(c);
		let a=Blockly.Variables.flyoutCategoryBlocks(secondaryWorkspace);
		
		for (var i=0;i<a.length;i++) {
			e +=Blockly.Xml.domToText(a[i]);
		}
		
		secondaryWorkspace.updateToolbox('<xml id="toolbox">'+e+'</xml>');
		secondaryWorkspace.registerButtonCallback("CREATE_VARIABLE",function(d){Blockly.Variables.createVariableButtonHandler(d.getTargetWorkspace())});
	};  

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
		
		let f = "";
		for (var i=0;i<c.length;i++) {
			f +=Blockly.Xml.domToText(c[i]);
		}
		
		secondaryWorkspace.updateToolbox('<xml id="toolbox">'+f+'</xml>');
	};
}
